// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bresch.io',
  integrations: [sitemap()],
  build: {
    // GitHub Pages serves /work/drawbridge/index.html for /work/drawbridge
    format: 'directory',
  },

});
