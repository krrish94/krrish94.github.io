import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkSmartypants from 'remark-smartypants';

export default defineConfig({
  site: 'https://krrish94.github.io',
  integrations: [sitemap()],
  markdown: {
    // 'oldschool' dashes (-- → en dash) match what kramdown rendered on the
    // old Jekyll site; Astro's default maps -- to an em dash.
    smartypants: false,
    remarkPlugins: [[remarkSmartypants, { dashes: 'oldschool' }]],
  },
});
