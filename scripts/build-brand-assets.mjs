// Génère les déclinaisons du logo (src/assets/logo) et les icônes du site (public/)
// à partir des fichiers fournis dans logo/. Relancer avec `npm run assets`
// si le client fournit de nouveaux logos.
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';

const SRC_ICON = 'logo/logoampoule.webp';
const SRC_WORDMARK = 'logo/logotypo.webp';
const OUT_ASSETS = 'src/assets/logo';
const OUT_PUBLIC = 'public';
const NAVY = '#0b1630';
const WHITE = '#ffffff';

await mkdir(OUT_ASSETS, { recursive: true });
await mkdir(OUT_PUBLIC, { recursive: true });

const trim = (file) => sharp(file).trim({ threshold: 1 }).toBuffer();

// Recolore toutes les zones opaques en une seule couleur (variante pour fond foncé).
async function tint(buffer, hex) {
  const { width, height } = await sharp(buffer).metadata();
  const alpha = await sharp(buffer).ensureAlpha().extractChannel('alpha').toBuffer();
  return sharp({ create: { width, height, channels: 3, background: hex } })
    .joinChannel(alpha)
    .png()
    .toBuffer();
}

const icon = await trim(SRC_ICON);
const wordmark = await trim(SRC_WORDMARK);

await sharp(icon).png().toFile(`${OUT_ASSETS}/icon.png`);
await sharp(wordmark).png().toFile(`${OUT_ASSETS}/wordmark.png`);
await sharp(await tint(wordmark, WHITE)).toFile(`${OUT_ASSETS}/wordmark-white.png`);

// Icône sur fond carré, avec une marge proportionnelle.
async function squareIcon(size, { background = null, padding = 0.12 } = {}) {
  const inner = Math.round(size * (1 - padding * 2));
  const glyph = await sharp(icon)
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: background ?? { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: glyph, gravity: 'center' }])
    .png()
    .toBuffer();
}

const fav16 = await squareIcon(16, { padding: 0 });
const fav32 = await squareIcon(32, { padding: 0.02 });
const fav48 = await squareIcon(48, { padding: 0.04 });
await writeFile(`${OUT_PUBLIC}/favicon-32.png`, fav32);
await writeFile(`${OUT_PUBLIC}/apple-touch-icon.png`, await squareIcon(180, { background: WHITE, padding: 0.14 }));
await writeFile(`${OUT_PUBLIC}/icon-192.png`, await squareIcon(192, { background: WHITE, padding: 0.14 }));
await writeFile(`${OUT_PUBLIC}/icon-512.png`, await squareIcon(512, { background: WHITE, padding: 0.14 }));
await writeFile(`${OUT_PUBLIC}/icon-maskable-512.png`, await squareIcon(512, { background: WHITE, padding: 0.22 }));

// favicon.ico avec des images PNG embarquées (16, 32, 48).
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  const entries = [];
  let offset = 6 + images.length * 16;
  for (const { size, data } of images) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}
await writeFile(
  `${OUT_PUBLIC}/favicon.ico`,
  ico([
    { size: 16, data: fav16 },
    { size: 32, data: fav32 },
    { size: 48, data: fav48 },
  ]),
);

// Image Open Graph 1200×630 : fond bleu nuit, icône, logotype blanc, accroche.
const ogIcon = await sharp(icon).resize({ height: 260 }).toBuffer();
const ogWord = await sharp(await tint(wordmark, WHITE)).resize({ width: 560 }).toBuffer();
const ogText = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect x="80" y="452" width="96" height="8" rx="4" fill="#fcd93d"/>
  <text x="80" y="520" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="40" font-weight="600" fill="#ffffff">Électricité &amp; climatisation à Vendargues</text>
  <text x="80" y="572" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="30" fill="#aab8d6">Dépannage 7j/7 · 24h/24 · 06 19 91 61 19</text>
</svg>`);
const ogIconBadge = await sharp({
  create: { width: 340, height: 340, channels: 4, background: WHITE },
})
  .composite([{ input: ogIcon, gravity: 'center' }])
  .png()
  .toBuffer();
const ogBadgeRounded = await sharp(ogIconBadge)
  .composite([
    {
      input: Buffer.from('<svg width="340" height="340"><rect width="340" height="340" rx="56" fill="#fff"/></svg>'),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: NAVY } })
  .composite([
    { input: ogBadgeRounded, left: 780, top: 80 },
    { input: ogWord, left: 80, top: 150 },
    { input: ogText, left: 0, top: 0 },
  ])
  .png()
  .toFile(`${OUT_PUBLIC}/og-default.png`);

console.log('Logos et icônes générés.');
