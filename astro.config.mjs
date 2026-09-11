import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import sitemap from '@astrojs/sitemap';
import remarkSmartypants from 'remark-smartypants';

export default defineConfig({
  site: 'https://krrish94.github.io',
  // Preserve Astro 6's HTML-aware spacing between adjacent inline elements.
  compressHTML: true,
  integrations: [sitemap()],
  markdown: {
    // 'oldschool' dashes (-- → en dash) match what kramdown rendered on the
    // old Jekyll site; Astro's default maps -- to an em dash.
    processor: unified({
      smartypants: false,
      remarkPlugins: [[remarkSmartypants, { dashes: 'oldschool' }]],
    }),
  },
});
