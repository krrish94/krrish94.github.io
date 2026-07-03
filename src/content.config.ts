import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One file per publication, generated from the legacy papers.bib by
// scripts/convert-publications.mjs (see scripts/README-conversion notes in
// claude_docs). All display values are fully resolved at conversion time —
// components do no lookups or prefixing.
const publications = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/publications' }),
  schema: z.object({
    key: z.string(), // bib key; also the entry's #anchor on /publications/
    order: z.number().int(), // position in the old papers.bib; intra-year sort key
    title: z.string(),
    authors: z
      .array(
        z.object({
          name: z.string(),
          url: z.string().optional(), // resolved coauthor link
          self: z.boolean().default(false), // rendered emphasized, never linked
          equal: z.boolean().default(false), // trailing '*' (equal contribution)
        })
      )
      .min(1),
    venue: z.string(), // booktitle, rendered in italics
    year: z.number().int(),
    month: z.string().optional(), // unused by current data; kept for parity
    selected: z.boolean().default(false), // homepage "Featured publications"
    featured: z.boolean().default(false), // highlighted title on /publications/
    recognition: z.string().optional(), // e.g. "Best paper award"
    preview: z.string().optional(), // image path/URL, pre-resolved
    previewAlt: z.string().default(''),
    abbr: z.string().optional(), // venue badge when there is no preview
    links: z
      .object({
        pdf: z.string(),
        supp: z.string(),
        website: z.string(),
        code: z.string(),
        arxiv: z.string(),
        html: z.string(),
        blog: z.string(),
        poster: z.string(),
        slides: z.string(),
        video: z.string(),
      })
      .partial()
      .default({}),
    abstract: z.string().optional(),
    tldr: z.string().optional(),
    contrib: z.string().optional(),
    bibtex: z.string(), // pre-filtered, byte-equal to the old site's Bib popup
  }),
});

// One-line news items shown on the homepage table. Body = the item text.
const news = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/news' }),
  schema: z.object({
    date: z.coerce.date(),
  }),
});

// Blog posts. Dates are the display dates of the old site (its permalinks
// use the year, hence /blog/2020/<slug>/).
const posts = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categories: z.array(z.string()).default([]),
  }),
});

export const collections = { publications, news, posts };
