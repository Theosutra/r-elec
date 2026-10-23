// Après `astro build` : préfixe les liens internes par BASE_PATH (ex. /r-elec) quand le site
// est publié dans un sous-dossier (GitHub Pages). Sans BASE_PATH, le script ne fait rien.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const base = (process.env.BASE_PATH || '').replace(/\/$/, '');
const site = (process.env.PUBLIC_SITE_URL || '').replace(/\/$/, '');
if (!base) process.exit(0);

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
const b = esc(base.slice(1));
// Après le sous-dossier : fin de chemin, ancre, requête ou guillemet.
const after = '(?:[/"#?]|$)';
// Chemins relatifs à la racine : href="/contact" → href="/r-elec/contact"
const rootRel = new RegExp(String.raw`((?:href|src|content|action)=")/(?!/|${b}${after})`, 'g');
// URL absolues du site sans le sous-dossier (canonical, Open Graph, JSON-LD)
const absolute = site ? new RegExp(String.raw`${esc(site)}/(?!${b}${after})`, 'g') : null;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (/\.(html|webmanifest)$/.test(entry.name)) out.push(p);
  }
  return out;
}

let count = 0;
for (const file of await walk('dist')) {
  let text = await readFile(file, 'utf8');
  const before = text;
  text = text.replace(rootRel, `$1${base}/`);
  if (absolute) text = text.replace(absolute, `${site}${base}/`);
  if (file.endsWith('.webmanifest')) text = text.replace(/"(start_url|src)": "\/(?!\/)/g, `"$1": "${base}/`);
  if (text !== before) {
    await writeFile(file, text);
    count++;
  }
}
console.log(`rebase : ${count} fichiers préfixés par ${base}`);
