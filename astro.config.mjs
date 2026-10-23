// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';
import { readFileSync } from 'node:fs';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const site = env.PUBLIC_SITE_URL || 'https://www.r-elec-todo.fr';
// Sous-dossier de publication (ex. « /r-elec » sur GitHub Pages). Vide sur un vrai nom de domaine.
const base = env.BASE_PATH || '/';
// La page Réalisations reste hors sitemap (et en noindex) tant qu'aucun chantier n'est saisi.
const noRealisations = /realisations: Realisation\[\] = \[\];/.test(readFileSync('./src/data/realisations.ts', 'utf8'));

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { format: 'file', inlineStylesheets: 'auto' },
  integrations: [sitemap({ filter: (page) => !(noRealisations && /\/realisations\/?$/.test(page)) })],
  vite: { plugins: [tailwindcss()] },
});
