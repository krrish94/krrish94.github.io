# Editing this website

Everyday recipes for updating the site. For architecture/design decisions,
this file's audience is the site owner — nothing here is published on the
website itself (GitHub Pages serves only the built `dist/` artifact).

## The 60-second version

```sh
nvm use            # Node 22 (see .nvmrc)
npm install        # first time only
npm run dev        # live preview at http://localhost:4321
# … edit files, check the preview …
npm run build && npm run verify   # optional sanity checks
git add -A && git commit -m "…" && git push   # push to master = deploy
```

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
site and deploys it to https://krrish94.github.io within ~2 minutes. Pull
requests get a build check but do not deploy. No built files are ever
committed.

---

## Add a news item

Create `src/content/news/YYYYMMDD-some-slug.md`:

```markdown
---
date: 2026-09-01
---

One line of markdown. Links [work like this](https://example.com).
```

The filename only needs to be unique (date-prefixed by convention); the
`date:` frontmatter controls the display date and ordering. News appears
only in the homepage table, newest first.

## Add a publication

Create `src/content/publications/<bibkey>.md` — easiest is to copy a recent
entry (e.g. `conceptgraphs.md`) and edit. Fields:

```yaml
---
key: mypaper2026            # unique; becomes the /publications/#mypaper2026 anchor
order: 40                   # tie-break within a year (lower = higher on page);
                            # bump past the current max — see other files
title: 'My Paper Title'
authors:
  - name: Krishna Murthy Jatavallabhula
    self: true              # emphasized, never linked
  - name: Jane Coauthor
    url: https://jane.example.com   # optional hyperlink
    equal: true             # optional: renders a trailing * (equal contribution)
    advising: true          # optional: renders a trailing † (equal advising)
venue: CoRL                 # rendered in italics
year: 2026
selected: true              # optional: ALSO show under homepage "Featured publications"
featured: true              # optional: highlighted title on /publications/
recognition: Best paper award   # optional: emphasized line under the venue
preview: /assets/img/publication_preview/mypaper.gif  # image (see below), or…
previewVideo: /assets/video/publication_preview/mypaper.mp4 # lazy looping video
previewPoster: /assets/img/publication_preview/mypaper-poster.jpg # fallback
abbr: CoRL                  # …a text badge if you have no preview media
previewAlt: One-sentence alt text for the preview image.
links:                      # all optional; buttons appear in a fixed order
  pdf: https://…            # PDF | also: supp, poster, slides (local files:
  website: https://…        #   put them in public/assets/pdf/ and use
  code: https://…           #   /assets/pdf/filename.pdf as the value)
  video: https://…
  arxiv: https://arxiv.org/abs/…   # full URL
abstract: |-
  Plain text, shown by the Abs toggle. No markdown is rendered here.
tldr: |-
  Optional one-liner for the TL;DR toggle.
contrib: |-
  Optional "what I did" note for the Contributions toggle.
bibtex: |-
  @inproceedings{mypaper2026,
    title = {My Paper Title},
    author = {…},
    year = {2026},
    booktitle = {CoRL}
  }
---
```

Notes:
- `bibtex` is displayed **verbatim** in the Bib popup — paste the clean,
  public version you want people to copy.
- Preview images live in `public/assets/img/publication_preview/` (GIFs
  animate; images are letterboxed to 4:3, so any aspect ratio works).
- Preview videos live in `public/assets/video/publication_preview/`. Keep them
  silent, short, H.264, and around 400px wide; include a compressed poster.
  They load only when near the viewport, pause off-screen, and stay still for
  visitors who prefer reduced motion.
- The build fails loudly if a required field is missing or mistyped
  (schema: `src/content.config.ts`).
- The publications page groups by `year` (descending) automatically — no
  year list to maintain.

## Add a blog post

Create `src/content/posts/my-post-slug.md`:

```markdown
---
title: My post title
date: 2026-09-01
categories:        # optional; creates/extends /blog/category/<name>/
  - gradschool
---

Full markdown body…
```

The URL becomes `/blog/<year-of-date>/my-post-slug/`. The index shows an
auto-computed read time. The RSS feed (/feed.xml) updates automatically.

## Edit the homepage

- **Bio paragraphs**: `src/data/home-intro.md` (plain markdown).
- **Photo**: replace `src/assets/prof_pic.png`.
- **Sidebar links / email / subtitle**: `src/config/site.ts`.
- **Featured publications**: set `selected: true` on entries (shown in
  papers.bib-era `order`).

## Site-wide knobs — `src/config/site.ts`

Name, meta description, palette, GA measurement ID, sidebar links, subtitle,
blog name. Palette is one of seven in `src/styles/tokens.css` (`cobalt` is
this site's own); every palette ships AA-checked light + dark variants and
the theme toggle just works.

## PDFs and other static files

Drop them in `public/` — e.g. a new CV goes to `public/assets/pdf/CV.pdf`
(same URL as always: /assets/pdf/CV.pdf). Anything in `public/` is copied
to the site root byte-for-byte.

## Sanity checks

- `npm run build` — fails on schema violations, broken imports, bad frontmatter.
- `npm run verify` — parity suite from the Jekyll migration (publication
  counts/fields vs the archived old site, verbatim text checks, URL map,
  palette contrast). If you deliberately change legacy content (e.g. reword
  the bio), this will flag it — that's expected; update or retire the
  corresponding check in `scripts/verify-publications.mjs`.

## History

The pre-2026 Jekyll site lives in branches `archive/jekyll-src` and
`archive/jekyll-built` (tag `jekyll-final`). `scripts/legacy/` holds frozen
copies of the old papers.bib/coauthors.yml/rendered HTML used by the
migration scripts — don't edit them.
