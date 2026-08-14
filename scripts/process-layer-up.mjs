// Processa o logo LayerUp (texto preto sobre fundo branco) para a marquee preta.
// Estratégia: inversão SELETIVA — só pixels grayscale (texto preto, fundo branco)
// são invertidos. O "A" gradiente (laranja/rosa/amarelo) permanece intacto.
//
// Uso: node scripts/process-layer-up.mjs

import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = 'c:/Users/PiaR/OneDrive/Área de Trabalho/artools/public/brand/clients/LOGO-LAYER-.jpg';
const OUT = path.resolve(__dirname, '../public/brand/clients/layer-up.png');

const CANVAS = 240;
const LOGO_FIT = 220;
const BG = { r: 0, g: 0, b: 0 };

// Limiar de saturação: abaixo disso o pixel é considerado grayscale e será invertido.
// Acima → cor saturada (preserva).
const SAT_THRESHOLD = 35;

const { data, info } = await sharp(SRC).raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

const out = Buffer.alloc(data.length);
for (let i = 0; i < data.length; i += channels) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const sat = max - min;

  if (sat < SAT_THRESHOLD) {
    // grayscale → inverte. preto vira branco, branco vira preto.
    const avg = (r + g + b) / 3;
    const inv = 255 - avg;
    out[i] = inv; out[i + 1] = inv; out[i + 2] = inv;
  } else {
    // colorido → preserva
    out[i] = r; out[i + 1] = g; out[i + 2] = b;
  }
  if (channels === 4) out[i + 3] = 255;
}

const inverted = await sharp(out, { raw: { width, height, channels } })
  .png()
  .toBuffer();

// Trim em volta do logo (qualquer pixel > 18 brilho conta).
const THR = 18;
const rowHas = new Uint8Array(height);
const colHas = new Uint8Array(width);
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * channels;
    if (out[idx] + out[idx + 1] + out[idx + 2] > THR) {
      rowHas[y] = 1;
      colHas[x] = 1;
    }
  }
}
let top = 0, bottom = height - 1, left = 0, right = width - 1;
while (top < height && !rowHas[top]) top++;
while (bottom > top && !rowHas[bottom]) bottom--;
while (left < width && !colHas[left]) left++;
while (right > left && !colHas[right]) right--;
const tW = right - left + 1;
const tH = bottom - top + 1;
console.log(`Trim: ${width}x${height} → ${tW}x${tH}`);

const trimmed = await sharp(inverted)
  .extract({ left, top, width: tW, height: tH })
  .toBuffer();

const scale = Math.min(LOGO_FIT / tW, LOGO_FIT / tH);
const newW = Math.max(1, Math.round(tW * scale));
const newH = Math.max(1, Math.round(tH * scale));
const padX = (CANVAS - newW) / 2;
const padY = (CANVAS - newH) / 2;

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
  .toFile(OUT);

console.log(`✓ ${path.basename(OUT)} → 240x240 (logo ${newW}x${newH})`);
