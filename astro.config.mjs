// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';

import { loadEnv } from 'vite';
import node from '@astrojs/node';
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(
  // @ts-ignore
  process.env.NODE_ENV,
  process.cwd(),
  ''
);

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0',
      port: Number(process.env.PORT) || 3000,
    },
    preview: {
      host: '0.0.0.0',
      port: Number(process.env.PORT) || 3000,
    },
  },

  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID,
      dataset: PUBLIC_SANITY_DATASET,
      useCdn: false, // See note on using the CDN
      apiVersion: '2025-01-28', // insert the current date to access the latest version of the API
      studioBasePath: '/studio',
      stega: {
        studioUrl: '/studio',
      },
    }),
    react(),
  ],

  adapter: node({
    mode: 'middleware',
  }),
});
