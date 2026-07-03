#!/usr/bin/env node
/**
 * Post-build parity verification against the legacy deployed site.
 * Run after `npm run build`. Exits non-zero on any failure.
 *
 * Compares dist/ output with the vendored oracles in scripts/legacy/
 * (the deployed Jekyll site's publications page and homepage).
 */

import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const LEGACY = join(ROOT, 'scripts', 'legacy');
const DIST = join(ROOT, 'dist');

let failures = 0;
const fail = (msg) => {
  failures++;
  console.error(`FAIL: ${msg}`);
};
const ok = (msg) => console.log(`  ok: ${msg}`);

const decodeEntities = (s) =>
  s
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
const stripTags = (s) => s.replace(/<[^>]+>/g, ' ');
const norm = (s) => decodeEntities(stripTags(s)).replace(/\s+/g, ' ').trim();
// Tag-stripping injects spaces around inline elements differently in the two
// markups; spaces before ',' and '*' carry no meaning in the author line.
const normAuthors = (s) => norm(s).replace(/\s+([,*])/g, '$1');

/* ----------------------------------------------------- oracle (old site) */

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
    const seg = (re) => block.match(re)?.[1];
    const linksRaw = seg(/<div class="links">([\s\S]*?)<\/div>/) ?? '';
    const buttons = [];
    const btnRe = /<a\s+([^>]*)>([^<]*)<\/a>/g;
    let b;
    while ((b = btnRe.exec(linksRaw))) {
      const rawHref = b[1].match(/href="([^"]*)"/)?.[1];
      buttons.push({
        label: b[2].trim(),
        href: rawHref != null ? decodeEntities(rawHref) : null,
      });
    }
    const authorRaw = seg(/<div class="author">([\s\S]*?)<\/div>/) ?? '';
    out.set(keyM[1], {
      featured: /<p style="background-color: lightyellow/.test(
        seg(/<div class="title">([\s\S]*?)<\/div>/) ?? ''
      ),
      title: norm(seg(/<div class="title">([\s\S]*?)<\/div>/) ?? ''),
      authorText: norm(authorRaw),
      authorHrefs: [...authorRaw.matchAll(/<a href="([^"]*)"/g)].map((x) =>
        decodeEntities(x[1])
      ),
      emNames: [...authorRaw.matchAll(/<em>([\s\S]*?)<\/em>/g)].map((x) => norm(x[1])),
      periodical: norm(seg(/<div class="periodical">([\s\S]*?)<\/div>/) ?? ''),
      recognition: seg(/<font color="red"><b>([\s\S]*?)<\/b><\/font>/),
      abstract: seg(/<div class="abstract hidden">\s*<p>([\s\S]*?)<\/p>/),
      tldr: seg(/<div class="tldr hidden">\s*<p>([\s\S]*?)<\/p>/),
      contrib: seg(/<div class="contrib hidden">\s*<p>([\s\S]*?)<\/p>/),
      bibtex: decodeEntities(
        (seg(/<div class="bibtex hidden">[\s\S]*?<code[^>]*>([\s\S]*?)<\/code>/) ?? '')
          .replace(/<[^>]+>/g, '')
      ).replace(/\n+$/, ''),
      preview: seg(/<img class="preview[^"]*" src="([^"]*)"/),
      abbr: seg(/<abbr class="badge">([^<]*)<\/abbr>/),
      buttons,
    });
  });
  return out;
}

/* ------------------------------------------------------- new site parser */

function parseNew(html) {
  const out = new Map();
  const artRe = /<article class="pub[^"]*" id="([^"]+)"/g;
  const starts = [];
  let m;
  while ((m = artRe.exec(html))) starts.push({ index: m.index, key: m[1] });
  starts.forEach((s, idx) => {
    const end = idx + 1 < starts.length ? starts[idx + 1].index : html.length;
    const block = html.slice(s.index, end);
    const seg = (re) => block.match(re)?.[1];
    // Astro appends data-astro-cid-* attributes after class — every element
    // pattern must allow extra attributes before '>'.
    const linksRaw = seg(/<div class="pub-links[^"]*"[^>]*>([\s\S]*?)<\/div>/) ?? '';
    const buttons = [];
    const btnRe = /<(a|button)\s+([^>]*)>([\s\S]*?)<\/\1>/g;
    let b;
    while ((b = btnRe.exec(linksRaw))) {
      const rawHref = b[2].match(/href="([^"]*)"/)?.[1];
      buttons.push({
        label: norm(b[3]),
        href: rawHref != null ? decodeEntities(rawHref) : null,
      });
    }
    const authorRaw = seg(/<p class="pub-authors[^"]*"[^>]*>([\s\S]*?)<\/p>/) ?? '';
    const panel = (name) => {
      const pm = block.match(
        new RegExp(`<div class="pub-panel[^"]*"[^>]*data-panel="${name}"[^>]*>([\\s\\S]*?)</div>`)
      );
      return pm?.[1];
    };
    out.set(s.key, {
      featured: /pub-title--featured/.test(seg(/<h3 class="([^"]*)"/) ?? ''),
      title: norm(seg(/<h3 class="[^"]*"[^>]*>([\s\S]*?)<\/h3>/) ?? ''),
      authorText: norm(authorRaw),
      authorHrefs: [...authorRaw.matchAll(/<a href="([^"]*)"/g)].map((x) =>
        decodeEntities(x[1])
      ),
      emNames: [...authorRaw.matchAll(/<em[^>]*>([\s\S]*?)<\/em>/g)].map((x) => norm(x[1])),
      periodical: norm(seg(/<p class="pub-venue[^"]*"[^>]*>([\s\S]*?)<\/p>/) ?? ''),
      recognition: seg(/<p class="pub-recognition[^"]*"[^>]*>([\s\S]*?)<\/p>/),
      abstract: panel('abstract')?.match(/<p[^>]*>([\s\S]*?)<\/p>/)?.[1],
      tldr: panel('tldr')?.match(/<p[^>]*>([\s\S]*?)<\/p>/)?.[1],
      contrib: panel('contrib')?.match(/<p[^>]*>([\s\S]*?)<\/p>/)?.[1],
      bibtex: decodeEntities(
        (panel('bibtex')?.match(/<code[^>]*>([\s\S]*?)<\/code>/)?.[1] ?? '').replace(
          /<[^>]+>/g,
          ''
        )
      ).replace(/\n+$/, ''),
      preview: (() => {
        const tag = block.match(/<img\s+[^>]*class="pub-teaser[^"]*"[^>]*>/)?.[0];
        return tag?.match(/src="([^"]*)"/)?.[1];
      })(),
      abbr: seg(/<span class="pill[^"]*"[^>]*>([^<]*)<\/span>/),
      buttons,
    });
  });
  return out;
}

/* -------------------------------------------------------------- run: pubs */

console.log('== publications parity');
const oracle = parseOracle(readFileSync(join(LEGACY, 'publications.html'), 'utf8'));
const distPubs = readFileSync(join(DIST, 'publications', 'index.html'), 'utf8');
const fresh = parseNew(distPubs);

if (fresh.size !== 39) fail(`expected 39 entries, found ${fresh.size}`);
else ok('39 entries');
if (oracle.size !== 39) fail(`oracle has ${oracle.size} entries, expected 39`);

// year headers + per-year counts
const yearHeaders = [...distPubs.matchAll(/<h2 class="pub-year[^"]*"[^>]*>(\d{4})<\/h2>/g)].map(
  (m) => Number(m[1])
);
const wantYears = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
if (JSON.stringify(yearHeaders) !== JSON.stringify(wantYears))
  fail(`year headers: ${yearHeaders.join(',')}`);
else ok('year headers 2025→2015');

// button label counts (deployed ground truth)
const wantCounts = {
  PDF: 29, Supp: 0, Webpage: 22, Code: 18, Abs: 35, arXiv: 0, Bib: 39,
  HTML: 0, Blog: 0, Poster: 2, Slides: 0, Video: 22, 'TL;DR': 23, Contributions: 38,
};
const counts = {};
for (const p of fresh.values())
  for (const b of p.buttons) counts[b.label] = (counts[b.label] ?? 0) + 1;
for (const [label, want] of Object.entries(wantCounts)) {
  const got = counts[label] ?? 0;
  if (got !== want) fail(`button ${label}: ${got} (want ${want})`);
}
ok('button counts');

// featured (8), recognition (4), abbr badges
const featuredCount = [...fresh.values()].filter((p) => p.featured).length;
if (featuredCount !== 8) fail(`featured highlights: ${featuredCount} (want 8)`);
else ok('8 featured highlights');
const recCount = [...fresh.values()].filter((p) => p.recognition).length;
if (recCount !== 4) fail(`recognition lines: ${recCount} (want 4)`);
else ok('4 recognition lines');
const abbrs = [...fresh.values()].filter((p) => p.abbr).map((p) => p.abbr).sort();
if (JSON.stringify(abbrs) !== JSON.stringify(['JIRS', 'SMC', 'UKSIM']))
  fail(`abbr badges: ${abbrs.join(',')}`);
else ok('abbr badges JIRS/SMC/UKSIM');

// per-entry comparison with the oracle
const normPanel = (s) => (s != null ? norm(s) : undefined);
for (const [key, o] of oracle) {
  const n = fresh.get(key);
  if (!n) {
    fail(`${key}: missing from new site`);
    continue;
  }
  const cmp = (field, got, want) => {
    if ((got ?? undefined) !== (want ?? undefined))
      fail(`${key}.${field}\n    new: ${JSON.stringify(got)}\n    old: ${JSON.stringify(want)}`);
  };
  cmp('title', n.title, o.title);
  cmp('featured', n.featured, o.featured);
  cmp('authorText', normAuthors(n.authorText), normAuthors(o.authorText));
  cmp('authorHrefs', JSON.stringify(n.authorHrefs), JSON.stringify(o.authorHrefs));
  cmp('emNames', JSON.stringify(n.emNames), JSON.stringify(o.emNames));
  cmp('periodical', n.periodical, o.periodical);
  cmp('recognition', normPanel(n.recognition), normPanel(o.recognition));
  cmp('abstract', normPanel(n.abstract), normPanel(o.abstract));
  cmp('tldr', normPanel(n.tldr), normPanel(o.tldr));
  cmp('contrib', normPanel(n.contrib), normPanel(o.contrib));
  cmp('bibtex', n.bibtex, o.bibtex); // byte-level (post entity-decode)
  cmp('preview', n.preview, o.preview);
  cmp('abbr', n.abbr, o.abbr);
  cmp('buttons', JSON.stringify(n.buttons), JSON.stringify(o.buttons));
}
ok('per-entry field comparison done');

/* ---------------------------------------------------------- run: homepage */

console.log('== homepage parity');
const oldHome = readFileSync(join(LEGACY, 'home.html'), 'utf8');
const newHome = readFileSync(join(DIST, 'index.html'), 'utf8');

// bio prose: the three paragraphs, verbatim (normalized text)
const oldBio = norm(oldHome.match(/<div class="clearfix">([\s\S]*?)<\/div>/)?.[1] ?? '');
const newBio = norm(newHome.match(/<div class="home-intro prose"[^>]*>([\s\S]*?)<\/div>/)?.[1] ?? '');
if (oldBio !== newBio) fail(`bio text differs\n    new: ${newBio}\n    old: ${oldBio}`);
else ok('bio verbatim');

// news rows: same dates + same item text in the same order
const rowText = (html) =>
  [...html.matchAll(/<tr[^>]*>\s*<th[^>]*>([\s\S]*?)<\/th>\s*<td[^>]*>([\s\S]*?)<\/td>/g)].map(
    (m) => [norm(m[1]), norm(m[2])]
  );
const oldRows = rowText(oldHome.match(/<table[\s\S]*?<\/table>/)?.[0] ?? '');
const newRows = rowText(newHome.match(/<table[\s\S]*?<\/table>/)?.[0] ?? '');
if (oldRows.length !== newRows.length)
  fail(`news rows: ${newRows.length} (old ${oldRows.length})`);
let newsBad = 0;
oldRows.forEach((r, i) => {
  if (!newRows[i] || r[0] !== newRows[i][0] || r[1] !== newRows[i][1]) {
    newsBad++;
    fail(`news row ${i}\n    new: ${JSON.stringify(newRows[i])}\n    old: ${JSON.stringify(r)}`);
  }
});
if (!newsBad) ok(`${oldRows.length} news rows verbatim`);

// homepage featured publications: same 4 keys, same order
const homeKeys = (html, re) => [...html.matchAll(re)].map((m) => m[1]);
const oldSelected = homeKeys(oldHome, /<div id="([^"]+)" class="col-sm-8">/g);
const newSelected = homeKeys(newHome, /<article class="pub[^"]*" id="([^"]+)"/g);
if (JSON.stringify(oldSelected) !== JSON.stringify(newSelected))
  fail(`homepage selected pubs: new [${newSelected}] old [${oldSelected}]`);
else ok(`homepage featured pubs: ${newSelected.join(', ')}`);

// header + subtitle. (The old contact-note sentence was removed at Krishna's
// request, 2026-07-02 review — see claude_docs/ADR-006.)
if (!norm(newHome).includes('World Models for Robots')) {
  fail('homepage missing: World Models for Robots');
}
if (norm(newHome).includes('The best way to reach me')) {
  fail('homepage still contains the removed contact-note sentence');
}
ok('subtitle present, contact note removed');

// sidebar links verbatim
for (const [label, href] of [
  ['Email', 'mailto:kmj@jhu.edu'],
  ['Google Scholar', 'https://scholar.google.co.uk/citations?user=kcr8134AAAAJ'],
  ['CV', '/assets/pdf/CV.pdf'],
  ['PhD Thesis', '/assets/pdf/thesis_krishna.pdf'],
  ['GitHub', 'https://github.com/krrish94'],
  ['LinkedIn', 'https://www.linkedin.com/in/krrish94/'],
]) {
  if (!newHome.includes(`href="${href}"`)) fail(`homepage link missing: ${label} → ${href}`);
}
ok('sidebar links verbatim');

/* -------------------------------------------------------------- run: blog */

console.log('== blog parity');
const postChecks = [
  ['blog/2020/gradschool-hello/index.html', 'Series of posts for PhD applicants', 'September 13, 2020'],
  ['blog/2020/gradschool-pick-school/index.html', 'Gradschool advice - picking a school', 'November 29, 2020'],
  ['blog/2020/gradschool-sop/index.html', 'Gradschool advice - writing a statement of purpose', 'December 16, 2020'],
  ['blog/2020/gradschool-letters/index.html', 'Gradschool advice - demystifying letters of recommendation', 'December 20, 2020'],
];
for (const [path, title, date] of postChecks) {
  if (!existsSync(join(DIST, path))) {
    fail(`missing ${path}`);
    continue;
  }
  const html = readFileSync(join(DIST, path), 'utf8');
  const text = norm(html);
  if (!text.includes(title)) fail(`${path}: missing title "${title}"`);
  if (!text.includes(date)) fail(`${path}: missing date "${date}"`);
  // body text parity vs the deployed post page: the full normalized text of
  // the new post body must appear verbatim in the deployed article (which
  // additionally contains header/footer chrome). The old built site lives at
  // the immutable `jekyll-final` tag (master became the Astro source at the
  // 2026-07-02 cutover).
  const oldPost = norm(
    (await import('node:child_process')).execSync(
      `git show jekyll-final:${path.replace('/index.html', '')}/index.html`,
      { cwd: ROOT, maxBuffer: 1024 * 1024 * 16 }
    ).toString().match(/<article[^>]*>([\s\S]*?)<\/article>/)?.[1] ?? ''
  );
  let newPost = norm(html.match(/<div class="prose"[^>]*>([\s\S]*)<\/div>\s*<\/article>/)?.[1] ?? '');
  // ALLOWLISTED deviation: kramdown swallowed literal '|' characters in
  // gradschool-letters ("[Masters | PhD]" rendered as "[Masters PhD]").
  // The new renderer shows the source text as authored; map it to the old
  // form for this comparison only.
  newPost = newPost.replace(/\[Masters \| PhD\]/g, '[Masters PhD]');
  if (!newPost || !oldPost.includes(newPost))
    fail(`${path}: body text differs from deployed`);
}
ok('4 posts: titles, dates, body text');

// blog index: read times + dates as deployed
const blogIndex = norm(readFileSync(join(DIST, 'blog', 'index.html'), 'utf8'));
for (const s of ['1 min read', '13 min read', '10 min read', '9 min read']) {
  if (!blogIndex.includes(s)) fail(`blog index missing "${s}"`);
}
ok('blog index read times');

/* ------------------------------------------------------------ run: URL map */

console.log('== URL map');
const mustExist = [
  'index.html',
  'publications/index.html',
  'blog/index.html',
  'blog/2020/index.html',
  'blog/category/gradschool/index.html',
  'feed.xml',
  'sitemap-index.xml',
  'robots.txt',
  '404.html',
  'assets/pdf/CV.pdf',
  'assets/pdf/thesis_krishna.pdf',
  'assets/pdf/icra2017.pdf',
  'assets/pdf/iros2017.pdf',
  'assets/img/publication_preview/conceptgraphs.gif',
];
for (const p of mustExist) {
  if (!existsSync(join(DIST, p))) fail(`missing dist/${p}`);
}
ok('required URLs present');
for (const p of ['papers/index.html', 'news/20191114-kaolin-release/index.html']) {
  if (existsSync(join(DIST, p))) fail(`should not exist: dist/${p}`);
}
ok('dropped URLs absent (/papers/, /news/*)');

// anchors
const anchorCount = [...distPubs.matchAll(/<article class="pub[^"]*" id="/g)].length;
if (anchorCount !== 39) fail(`entry anchors: ${anchorCount}`);
else ok('39 entry anchors');

/* ------------------------------------------------------------------ done */

if (failures) {
  console.error(`\n${failures} failure(s).`);
  process.exit(1);
}
console.log('\nAll parity checks passed.');
