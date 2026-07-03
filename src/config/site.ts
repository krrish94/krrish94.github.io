// Site-wide control panel. Everything an editor commonly touches lives here.

export type Palette =
  | 'cobalt'
  | 'forest'
  | 'amber'
  | 'clay'
  | 'ink'
  | 'crimson'
  | 'indigo';

export const SITE = {
  // Rendered as "<b>Krishna</b> Murthy Jatavallabhula" in nav + homepage header.
  firstName: 'Krishna',
  restName: 'Murthy Jatavallabhula',
  title: 'Krishna Murthy Jatavallabhula',
  // Verbatim from the old site's meta description (kept as-is; update deliberately).
  description: 'Krishna Murthy - Research scientist, Meta',
  url: 'https://krrish94.github.io',

  // Color identity. One of the palettes in src/styles/tokens.css.
  // 'cobalt' was designed for this site from the old al-folio accent (#00369f).
  palette: 'cobalt' as Palette,

  // Google Analytics 4 measurement ID (only injected in production builds)
  gaId: 'G-KVVBP90SEH',

  // Homepage sidebar links (verbatim targets from the old about layout).
  email: 'kmj@jhu.edu',
  links: {
    googleScholar: 'https://scholar.google.co.uk/citations?user=kcr8134AAAAJ',
    cv: '/assets/pdf/CV.pdf',
    thesis: '/assets/pdf/thesis_krishna.pdf',
    github: 'https://github.com/krrish94',
    linkedin: 'https://www.linkedin.com/in/krrish94/',
  },

  subtitle: 'World Models for Robots',

  blogName: "Krishna's blog",
} as const;
