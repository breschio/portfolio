// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bresch.io',
  integrations: [sitemap()],
  build: {
    // /work/drawbridge/ is served from /work/drawbridge/index.html
    format: 'directory',
  },

});
