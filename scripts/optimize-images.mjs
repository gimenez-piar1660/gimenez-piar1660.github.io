// Otimiza PNGs/JPEGs grandes em public/brand/ para WebP redimensionado.
// Mantém os originais (podem ser movidos para artools-raw/ depois).
// Uso: node scripts/optimize-images.mjs

import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';

const TARGETS = [
  { src: 'public/brand/Brunotrofeu.png',      width: 1200, out: 'public/brand/Brunotrofeu.webp' },
  { src: 'public/brand/bolha.png',            width: 960,  out: 'public/brand/bolha.webp' },
  { src: 'public/brand/micpodcast.png',       width: 1040, out: 'public/brand/micpodcast.webp' },
  { src: 'public/brand/Bruno2podcast.jpeg',   width: 1120, out: 'public/brand/Bruno2podcast.webp' },
  { src: 'public/brand/POdcast3.jpeg',        width: 1600, out: 'public/brand/POdcast3.webp' },
];

const fmt = (n) => (n / 1024).toFixed(1) + ' KB';

for (const t of TARGETS) {
  try {
    const before = (await stat(t.src)).size;
    await sharp(t.src)
      .resize({ width: t.width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(t.out);
    const after = (await stat(t.out)).size;
    const pct = ((1 - after / before) * 100).toFixed(0);
    console.log(`✓ ${t.src}  ${fmt(before)}  →  ${t.out}  ${fmt(after)}  (-${pct}%)`);
  } catch (err) {
    console.error(`✗ ${t.src}: ${err.message}`);
  }
}
