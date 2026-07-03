# krrish94.github.io

Krishna Murthy Jatavallabhula's personal website — a hand-rolled
[Astro](https://astro.build/) static site, sharing its design system with the
[Sci-Phy lab website](https://github.com/sci-fi-lab/sci-fi-lab.github.io).

## Commands

```sh
npm install     # once
npm run dev     # dev server at http://localhost:4321
npm run build   # static build into dist/
npm run preview # serve dist/ locally
```

Requires Node 22 (`.nvmrc`).

## Editing

See **[EDITING.md](EDITING.md)** for step-by-step recipes (add a publication,
news item, or blog post; edit the homepage; static files; sanity checks).
Quick map:

- **Homepage bio** — `src/data/home-intro.md`
- **News** — `src/content/news/`
- **Publications** — `src/content/publications/` (one file per paper)
- **Blog posts** — `src/content/posts/`
- **Site settings** (palette, analytics, links) — `src/config/site.ts`

## Deployment

Pushing to `master` builds and deploys via GitHub Actions
(`.github/workflows/deploy.yml`) using the GitHub Pages artifact flow — no
built files are ever committed.

The pre-2026 Jekyll (al-folio) site is preserved in the `archive/jekyll-src`
and `archive/jekyll-built` branches. `scripts/legacy/` vendors the old
`papers.bib`, `coauthors.yml`, and deployed HTML used by
`scripts/convert-publications.mjs` to migrate publications with rendered-output
parity.
