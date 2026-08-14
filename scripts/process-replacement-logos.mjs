// Processa logos individuais (com fundo colorido próprio) para encaixar
// no padrão preto da marquee:
//   1. Compõe transparência sobre preto (resolve PNGs com alpha)
//   2. Chroma-key: detecta cor do canto superior-esquerdo e troca por preto
//   3. Faz tight-trim em torno do logo
//   4. Padroniza em quadrado 240x240 com 10px de respiro
//   5. Salva em public/brand/clients/<slug>.png (sobrescreve as quebradas)
//
// Uso: node scripts/process-replacement-logos.mjs

import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = 'c:/Users/PiaR/PiaR Memory/Piar Brand Img/Logos';
const OUT_DIR = path.resolve(__dirname, '../public/brand/clients');

const JOBS = [
  { src: 'abstartups.png',   slug: 'abstartups',   chromaThreshold: 25 },
  { src: 'pagbrasil.png',    slug: 'pagbrasil',    chromaThreshold: 90 },
  { src: 'unlimitail.jpeg',  slug: 'unlimitail',   chromaThreshold: 100 },
  { src: 'xtech.png',        slug: 'xtech',        chromaThreshold: 110 },
];

const CANVAS = 240;
const LOGO_FIT = 220;
const BG = { r: 0, g: 0, b: 0 };

await mkdir(OUT_DIR, { recursive: true });

for (const job of JOBS) {
  const srcPath = path.join(SRC_DIR, job.src);
  console.log(`\n→ ${job.src}`);

  // 1) Compõe sobre preto (handle alpha) e força sair como RGB.
  const flat = await sharp(srcPath)
    .flatten({ background: BG })
    .toFormat('png')
    .toBuffer();

  // 2) Lê raw para chroma-key. Sample = pixel (0,0).
  const { data, info } = await sharp(flat).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const bgR = data[0], bgG = data[1], bgB = data[2];
  console.log(`   fundo detectado: rgb(${bgR},${bgG},${bgB}), threshold ${job.chromaThreshold}`);

  const out = Buffer.alloc(data.length);
  const thr2 = job.chromaThreshold * job.chromaThreshold;
  for (let i = 0; i < data.length; i += channels) {
    const dr = data[i] - bgR;
    const dg = data[i + 1] - bgG;
    const db = data[i + 2] - bgB;
    const dist2 = dr * dr + dg * dg + db * db;
    if (dist2 < thr2) {
      out[i] = 0; out[i + 1] = 0; out[i + 2] = 0;
    } else {
      out[i] = data[i]; out[i + 1] = data[i + 1]; out[i + 2] = data[i + 2];
    }
    if (channels === 4) out[i + 3] = 255;
  }
  const keyedBuf = await sharp(out, { raw: { width, height, channels } })
    .png()
    .toBuffer();

  // 3) Tight-trim: encontra primeiro/último pixel não-preto em x e y.
  const THR_PX = 18;
  let top = 0, bottom = height - 1, left = 0, right = width - 1;
  const rowHas = new Uint8Array(height);
  const colHas = new Uint8Array(width);
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * channels;
      if (out[idx] + out[idx + 1] + out[idx + 2] > THR_PX) {
        rowHas[y] = 1;
        colHas[x] = 1;
      }
    }
  }
  while (top < height && !rowHas[top]) top++;
  while (bottom > top && !rowHas[bottom]) bottom--;
  while (left < width && !colHas[left]) left++;
  while (right > left && !colHas[right]) right--;
  const tW = right - left + 1;
  const tH = bottom - top + 1;
  console.log(`   trim: ${width}x${height} → ${tW}x${tH}`);

  const trimmed = await sharp(keyedBuf)
    .extract({ left, top, width: tW, height: tH })
    .toBuffer();

  // 4) Resize para caber no quadrado interno + pad para 240x240.
  const scale = Math.min(LOGO_FIT / tW, LOGO_FIT / tH);
  const newW = Math.max(1, Math.round(tW * scale));
  const newH = Math.max(1, Math.round(tH * scale));
  const padX = (CANVAS - newW) / 2;
  const padY = (CANVAS - newH) / 2;

  const outPath = path.join(OUT_DIR, `${job.slug}.png`);
  await sharp(trimmed)
    .resize(newW, newH, { kernel: 'lanczos3' })
    .extend({
      top: Math.floor(padY),
      bottom: Math.ceil(padY),
      left: Math.floor(padX),
      right: Math.ceil(padX),
      background: BG,
    })
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  console.log(`   ✓ ${job.slug}.png → 240x240 (logo ${newW}x${newH})`);
}

console.log('\nPronto.');
