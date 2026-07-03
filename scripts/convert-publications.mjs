#!/usr/bin/env node
/**
 * One-time conversion of the legacy Jekyll publications pipeline to Astro
 * content files, bug-for-bug faithful to what jekyll-scholar + _layouts/bib.html
 * rendered on the live site.
 *
 * Inputs (vendored in scripts/legacy/):
 *   papers.bib        — origin/src:_bibliography/papers.bib
 *   coauthors.yml     — origin/src:_data/coauthors.yml
 *   publications.html — the deployed /publications/index.html (the ORACLE)
 *
 * Output: src/content/publications/<bibkey>.md (one file per entry)
 *
 * Every generated value is checked against the oracle; the script exits
 * non-zero on any mismatch. Run with --take-oracle to write the deployed
 * value instead on mismatch (byte-parity fallback).
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const LEGACY = join(ROOT, 'scripts', 'legacy');
const OUT_DIR = join(ROOT, 'src', 'content', 'publications');
const TAKE_ORACLE = process.argv.includes('--take-oracle');

// From _config.yml (scholar: + filtered_bibtex_keywords). Order preserved.
const SELF = { last: 'Jatavallabhula', first: 'Krishna Murthy' };
const FILTERED_KEYWORDS = [
  'abbr', 'abstract', 'arxiv', 'bibtex_show', 'html', 'pdf', 'selected',
  'supp', 'blog', 'code', 'poster', 'slides', 'website', 'preview', 'video',
  'contrib', 'tldr', 'alt', 'equal_first_authors', 'equal_advising',
];

/* ------------------------------------------------------------ bib parsing */

/** Split a string on a separator, ignoring separators inside braces. */
function splitTopLevel(s, sepRe) {
  const parts = [];
  let depth = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '{') depth++;
    else if (s[i] === '}') depth--;
    else if (depth === 0) {
      sepRe.lastIndex = i;
      const m = sepRe.exec(s);
      if (m && m.index === i) {
        parts.push(s.slice(start, i));
        i += m[0].length - 1;
        start = i + 1;
      }
    }
  }
  parts.push(s.slice(start));
  return parts;
}

function parseBib(text) {
  const entries = [];
  const re = /@(\w+)\s*\{/g;
  let m;
  while ((m = re.exec(text))) {
    const type = m[1].toLowerCase();
    let i = re.lastIndex;
    // key: up to first comma
    const keyEnd = text.indexOf(',', i);
    const key = text.slice(i, keyEnd).trim();
    i = keyEnd + 1;
    const fields = []; // [{name, value}] in source order
    while (i < text.length) {
      while (i < text.length && /[\s,]/.test(text[i])) i++;
      if (text[i] === '}') { i++; break; } // end of entry
      const nm = /[A-Za-z_][A-Za-z_0-9]*/y;
      nm.lastIndex = i;
      const nMatch = nm.exec(text);
      if (!nMatch) break;
      const name = nMatch[0].toLowerCase();
      i = nm.lastIndex;
      while (i < text.length && /[\s=]/.test(text[i])) i++;
      if (text[i] !== '{') throw new Error(`Expected '{' for ${key}.${name}`);
      let depth = 1;
      const vStart = ++i;
      while (i < text.length && depth > 0) {
        if (text[i] === '{') depth++;
        else if (text[i] === '}') depth--;
        i++;
      }
      fields.push({ name, value: text.slice(vStart, i - 1) });
    }
    entries.push({ type, key, fields });
    re.lastIndex = i;
  }
  return entries;
}

const getField = (entry, name) => entry.fields.find((f) => f.name === name)?.value;

/* ------------------------------------------------- display transformation */

// Approximates jekyll-scholar's `latex` bibtex_filter (latex-decode) for the
// constructs that actually occur in papers.bib: TeX quotes/dashes, brace
// stripping, whitespace joining. Backslash commands are NOT interpreted
// (\emph{full} → \emphfull), matching the live site.
function latexToDisplay(s) {
  return s
    .replace(/``/g, '“')
    .replace(/''/g, '”')
    .replace(/---/g, '—')
    .replace(/--/g, '–')
    .replace(/`/g, '‘')
    .replace(/'/g, '’')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

const cleanPart = (s) => s.replace(/[{}]/g, '').replace(/\s+/g, ' ').trim();

/** Parse a BibTeX author field into [{last, first}] preserving order. */
function parseNames(raw) {
  return splitTopLevel(raw, /\s+and\s+/y)
    .map((p) => p.trim())
    // BibTeX treats consecutive "and"s as an empty (dropped) name; a token
    // left with a leading "and " (beyondpixels' "and and K, …") loses it.
    .map((p) => p.replace(/^(and\s+)+/, ''))
    .filter((p) => p !== '')
    .map((p) => {
      let segs = splitTopLevel(p, /,/y).map((x) => x.trim());
      while (segs.length && segs[segs.length - 1] === '') segs.pop();
      if (segs.length >= 2) {
        return { last: cleanPart(segs[0]), first: cleanPart(segs[1]) };
      }
      // "First Last" form (no comma): last word is the family name
      const words = cleanPart(segs[0]).split(' ');
      return { last: words[words.length - 1], first: words.slice(0, -1).join(' ') };
    });
}

/**
 * The author value as it appears in the old site's Bib popup: tokens split on
 * " and ", trailing commas stripped, inner whitespace collapsed, source braces
 * preserved, re-joined with " and ". (Deliberately NOT name-normalizing —
 * beyondpixels' "and and K, {Madhava Krishna}" survives verbatim, matching
 * the deployed output.)
 */
function serializeAuthorValue(raw) {
  return splitTopLevel(raw, /\s+and\s+/y)
    .map((t) => t.trim())
    .filter((t) => t !== '')
    .map((t) => t.replace(/,+$/, '').replace(/\s+/g, ' ').trim())
    .join(' and ');
}

/* --------------------------------------------------------- bibtex rebuild */

function generateBibtex(entry) {
  const lines = [`@${entry.type}{${entry.key},`];
  entry.fields.forEach((f, idx) => {
    let value;
    if (f.name === 'author') {
      value = serializeAuthorValue(f.value);
    } else {
      // Values keep raw newlines, re-indented by two spaces (bibtex-ruby
      // behavior; the orphaned second line of conceptfusion's filtered
      // contrib field depends on this).
      value = f.value
        .replace(/[ \t]+/g, ' ')
        .replace(/ *\n */g, '\n  ')
        .trim();
    }
    const comma = idx === entry.fields.length - 1 ? '' : ',';
    lines.push(`  ${f.name} = {${value}}${comma}`);
  });
  lines.push('}');
  let bib = lines.join('\n') + '\n';
  // hideCustomBibtex: drop every line containing any filtered keyword.
  for (const kw of FILTERED_KEYWORDS) {
    bib = bib.replace(new RegExp(`^.*${kw}.*$\\n`, 'gm'), '');
  }
  return bib.replace(/\n$/, '');
}

/* -------------------------------------------------------------- coauthors */

const coauthors = parseYaml(readFileSync(join(LEGACY, 'coauthors.yml'), 'utf8'));

function coauthorUrl({ last, first }) {
  const candidates = coauthors[last];
  if (!candidates) return undefined;
  for (const c of candidates) {
    // Liquid `contains` on an array = exact element membership.
    if ((c.firstname ?? []).includes(first)) return c.url;
  }
  return undefined;
}

/* ------------------------------------------------------------- conversion */

function buildPublication(entry, order) {
  const f = (name) => getField(entry, name);

  const equalRaw = f('equal_first_authors');
  const names = parseNames(f('author'));
  const authors = names.map((n, i) => {
    const self = n.last === SELF.last && n.first === SELF.first;
    const isLast = i === names.length - 1;
    // bib.html quirks preserved: substring containment on the raw field, and
    // the last author never receives a star (that Liquid branch has none).
    const equal = Boolean(
      equalRaw && !isLast && names.length > 1 &&
      equalRaw.includes(n.last) && equalRaw.includes(n.first)
    );
    const author = { name: `${n.first} ${n.last}`.trim() };
    if (self) author.self = true;
    else {
      const url = coauthorUrl(n);
      if (url) author.url = url;
    }
    if (equal) author.equal = true;
    return author;
  });

  const links = {};
  const localPdf = (v) => (v.includes('://') ? v : `/assets/pdf/${v}`);
  if (f('pdf')) links.pdf = localPdf(f('pdf'));
  if (f('supp')) links.supp = localPdf(f('supp'));
  if (f('website')) links.website = f('website');
  if (f('code')) links.code = f('code');
  if (f('arxiv')) links.arxiv = `http://arxiv.org/abs/${f('arxiv')}`;
  if (f('html')) links.html = f('html');
  if (f('blog')) links.blog = f('blog');
  if (f('poster')) links.poster = localPdf(f('poster'));
  if (f('slides')) links.slides = localPdf(f('slides'));
  if (f('video')) links.video = f('video');

  const pub = {
    key: entry.key,
    order,
    title: latexToDisplay(f('title')),
    authors,
    venue: latexToDisplay(f('booktitle') ?? f('journal') ?? ''),
    year: Number(f('year')),
  };
  if (f('month')) pub.month = latexToDisplay(f('month'));
  if (f('selected') === 'true') pub.selected = true;
  if (f('featured') === 'true') pub.featured = true;
  if (f('recognition')) pub.recognition = latexToDisplay(f('recognition'));
  if (f('preview')) {
    pub.preview = f('preview').includes('://')
      ? f('preview')
      : `/assets/img/publication_preview/${f('preview')}`;
    pub.previewAlt = f('alt') ? latexToDisplay(f('alt')) : '';
  } else if (f('abbr')) {
    pub.abbr = f('abbr');
  }
  pub.links = links;
  if (f('abstract')) pub.abstract = latexToDisplay(f('abstract'));
  if (f('tldr')) pub.tldr = latexToDisplay(f('tldr'));
  if (f('contrib')) pub.contrib = latexToDisplay(f('contrib'));
  pub.bibtex = generateBibtex(entry);
  return pub;
}

/* ---------------------------------------------------------- oracle checks */

const decodeEntities = (s) =>
  s
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

const stripTags = (s) => s.replace(/<[^>]+>/g, '');
const norm = (s) => decodeEntities(stripTags(s)).replace(/\s+/g, ' ').trim();

/** Extract the deployed rendering of each entry from publications.html. */
function parseOracle(html) {
  const out = new Map();
  const rowRe = /<div class="row align-items-center">/g;
  const starts = [];
  let m;
  while ((m = rowRe.exec(html))) starts.push(m.index);
  starts.forEach((start, idx) => {
    const end = idx + 1 < starts.length ? starts[idx + 1] : html.length;
    const block = html.slice(start, end);
    const keyM = block.match(/<div id="([^"]+)" class="col-sm-8">/);
    if (!keyM) return;
    const key = keyM[1];
    const seg = (re) => block.match(re)?.[1];

    const titleRaw = seg(/<div class="title">([\s\S]*?)<\/div>/);
    const authorRaw = seg(/<div class="author">([\s\S]*?)<\/div>/);
    const periodicalRaw = seg(/<div class="periodical">([\s\S]*?)<\/div>/);
    const recognitionRaw = seg(/<font color="red"><b>([\s\S]*?)<\/b><\/font>/);
    const linksRaw = seg(/<div class="links">([\s\S]*?)<\/div>/);
    const abstractRaw = seg(/<div class="abstract hidden">\s*<p>([\s\S]*?)<\/p>/);
    const tldrRaw = seg(/<div class="tldr hidden">\s*<p>([\s\S]*?)<\/p>/);
    const contribRaw = seg(/<div class="contrib hidden">\s*<p>([\s\S]*?)<\/p>/);
    const bibtexRaw = seg(
      /<div class="bibtex hidden">[\s\S]*?<code[^>]*>([\s\S]*?)<\/code>/
    );
    const buttons = [];
    if (linksRaw) {
      const btnRe = /<a\s+([^>]*)>([^<]*)<\/a>/g;
      let b;
      while ((b = btnRe.exec(linksRaw))) {
        const rawHref = b[1].match(/href="([^"]*)"/)?.[1];
        buttons.push({
          label: b[2].trim(),
          href: rawHref != null ? decodeEntities(rawHref) : null,
        });
      }
    }
    out.set(key, {
      featured: /<p style="background-color: lightyellow/.test(titleRaw ?? ''),
      title: titleRaw != null ? norm(titleRaw) : undefined,
      authorText: authorRaw != null ? norm(authorRaw) : undefined,
      authorHrefs: [...(authorRaw ?? '').matchAll(/<a href="([^"]*)"/g)].map((x) =>
        decodeEntities(x[1])
      ),
      emNames: [...(authorRaw ?? '').matchAll(/<em>([\s\S]*?)<\/em>/g)].map((x) => norm(x[1])),
      periodical: periodicalRaw != null ? norm(periodicalRaw) : undefined,
      recognition: recognitionRaw != null ? norm(recognitionRaw) : undefined,
      abstract: abstractRaw != null ? norm(abstractRaw) : undefined,
      tldr: tldrRaw != null ? norm(tldrRaw) : undefined,
      contrib: contribRaw != null ? norm(contribRaw) : undefined,
      bibtex:
        bibtexRaw != null
          ? decodeEntities(bibtexRaw.replace(/<[^>]+>/g, '')).replace(/\n+$/, '')
          : undefined,
      preview: seg(/<img class="preview[^"]*" src="([^"]*)"/),
      abbr: seg(/<abbr class="badge">([^<]*)<\/abbr>/),
      buttons,
    });
  });
  return out;
}

/** The author line exactly as bib.html renders it, as normalized text. */
function expectedAuthorText(authors) {
  if (authors.length === 1) return authors[0].name;
  return authors
    .map((a, i) => {
      const star = a.equal ? '*' : '';
      if (i === authors.length - 1) return `and ${a.name}`;
      return `${a.name}${star},`;
    })
    .join(' ');
}

function expectedButtons(pub) {
  const btns = [];
  const L = pub.links;
  if (L.pdf) btns.push({ label: 'PDF', href: L.pdf });
  if (L.supp) btns.push({ label: 'Supp', href: L.supp });
  if (L.website) btns.push({ label: 'Webpage', href: L.website });
  if (L.code) btns.push({ label: 'Code', href: L.code });
  if (pub.abstract) btns.push({ label: 'Abs', href: null });
  if (L.arxiv) btns.push({ label: 'arXiv', href: L.arxiv });
  btns.push({ label: 'Bib', href: null }); // bibtex_show is true on all 39
  if (L.html) btns.push({ label: 'HTML', href: L.html });
  if (L.blog) btns.push({ label: 'Blog', href: L.blog });
  if (L.poster) btns.push({ label: 'Poster', href: L.poster });
  if (L.slides) btns.push({ label: 'Slides', href: L.slides });
  if (L.video) btns.push({ label: 'Video', href: L.video });
  if (pub.tldr) btns.push({ label: 'TL;DR', href: null });
  if (pub.contrib) btns.push({ label: 'Contributions', href: null });
  return btns;
}

/* ------------------------------------------------------------------- main */

const bibText = readFileSync(join(LEGACY, 'papers.bib'), 'utf8').replace(
  /^---\n---\n/,
  ''
);
const entries = parseBib(bibText);
const oracle = parseOracle(readFileSync(join(LEGACY, 'publications.html'), 'utf8'));

let mismatches = 0;
const report = (key, field, got, want) => {
  mismatches++;
  console.error(`MISMATCH ${key}.${field}\n  generated: ${JSON.stringify(got)}\n  deployed:  ${JSON.stringify(want)}`);
};

const pubs = entries.map((entry, i) => {
  const pub = buildPublication(entry, i);
  const o = oracle.get(entry.key);
  if (!o) {
    console.error(`NO ORACLE ENTRY for ${entry.key}`);
    mismatches++;
    return pub;
  }
  const check = (field, got, want, fix) => {
    if ((got ?? undefined) === (want ?? undefined)) return;
    report(entry.key, field, got, want);
    if (TAKE_ORACLE && fix) fix(want);
  };
  check('title', pub.title, o.title, (w) => (pub.title = w));
  check('featured', Boolean(pub.featured), o.featured);
  check('authorText', expectedAuthorText(pub.authors), o.authorText);
  check(
    'authorHrefs',
    JSON.stringify(pub.authors.filter((a) => a.url).map((a) => a.url)),
    JSON.stringify(o.authorHrefs)
  );
  check(
    'emNames',
    JSON.stringify(pub.authors.filter((a) => a.self).map((a) => a.name)),
    JSON.stringify(o.emNames)
  );
  const expPeriodical = `${pub.venue}${pub.month ? ` ${pub.month}` : ''} ${pub.year}`.trim();
  check('periodical', expPeriodical, o.periodical);
  check('recognition', pub.recognition, o.recognition, (w) => (pub.recognition = w));
  check('abstract', pub.abstract, o.abstract, (w) => (pub.abstract = w));
  check('tldr', pub.tldr, o.tldr, (w) => (pub.tldr = w));
  check('contrib', pub.contrib, o.contrib, (w) => (pub.contrib = w));
  check('bibtex', pub.bibtex, o.bibtex, (w) => (pub.bibtex = w));
  check('preview', pub.preview, o.preview, (w) => (pub.preview = w));
  check('abbr', pub.abbr, o.abbr, (w) => (pub.abbr = w));
  check(
    'buttons',
    JSON.stringify(expectedButtons(pub)),
    JSON.stringify(o.buttons)
  );
  return pub;
});

if (mismatches && !TAKE_ORACLE) {
  console.error(`\n${mismatches} mismatch(es) vs deployed oracle — no files written.`);
  process.exit(1);
}

mkdirSync(OUT_DIR, { recursive: true });
for (const pub of pubs) {
  const yamlText = stringifyYaml(pub, { lineWidth: 0 });
  writeFileSync(join(OUT_DIR, `${pub.key}.md`), `---\n${yamlText}---\n`);
}
console.log(`Wrote ${pubs.length} publication files to src/content/publications/`);
if (mismatches) console.log(`(${mismatches} field(s) taken from oracle)`);
