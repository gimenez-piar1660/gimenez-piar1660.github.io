import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // O repositório se chama gimenez-piar1660.github.io, então o GitHub Pages serve
  // o site na raiz do domínio. Sem `base`: todo link e asset root-relativo do
  // projeto (`/sobre`, `/brand/...`) resolve direto, como o código já pressupõe.
  site: 'https://gimenez-piar1660.github.io',
  trailingSlash: 'never',
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    build: {
      cssCodeSplit: true,
      sourcemap: false,
    },
    server: {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    },
  },
});
