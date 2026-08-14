// Recorta cada logo do composite logosaltapreto.png em quadrados 240x240,
// com trim automático e padding preto. Saída: public/brand/clients/*.png
//
// Uso: node scripts/crop-client-logos.mjs

import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, '../public/brand/Logos/logosaltapreto.png');
const OUT = path.resolve(__dirname, '../public/brand/clients');

// Bounding boxes em coordenadas absolutas do source 2048x2048.
// Margens propositalmente generosas — sharp.trim() limpa o preto sobrando.
const LOGOS = [
  // Linha 1 (y ~ 370-615)
  { name: 'sambatech',       box: [40,   380,  615,  555] },
  { name: 'liga-ventures',   box: [700,  370,  1025, 615] },
  { name: 'printi',          box: [1075, 390,  1485, 545] },
  { name: 'qranio',          box: [1555, 358,  1930, 615] },

  // Linha 2 (y ~ 630-890)
  { name: 'unifisa',         box: [50,   630,  325,  890] },
  { name: 'livup',           box: [460,  665,  615,  855] },
  { name: 'investidores-vc', box: [665,  700,  1210, 805] },
  { name: 'vtex',            box: [1295, 685,  1485, 820] },
  { name: 'inovativa',       box: [1570, 695,  2040, 810] },

  // Linha 3 (y ~ 940-1110)
  { name: 'wylinka',         box: [85,   940,  358,  1110] },
  { name: 'doctoralia',      box: [580,  940,  1125, 1060] },
  { name: 'unlimitail',      box: [1180, 935,  1780, 1100] },

  // Linha 4 — atenção: sidia/abstartups ficam ACIMA de corning/fluencypass
  { name: 'sidia',           box: [1230, 1110, 1450, 1245] },
  { name: 'abstartups',      box: [1505, 1130, 1965, 1245] },
  { name: 'corning',         box: [20,   1215, 555,  1310] },
  { name: 'fluencypass',     box: [570,  1170, 1170, 1325] },

  // Linha 5 (y ~ 1355-1585)
  { name: 'solides',         box: [1010, 1355, 1545, 1545] },
  { name: 'agrosmart',       box: [1555, 1385, 1955, 1585] },

  // Linha 6 (y ~ 1590-1830) — bboxes generosas; trim automático cai no fallback
  // (bbox bruta) porque texto sobre preto-escuro/khaki não passa pelo threshold.
  { name: 'albrasil',        box: [50,   1590, 510,  1830] },
  { name: 'gama-academy',    box: [605,  1590, 1050, 1840] },
  { name: 'pagbrasil',       box: [1550, 1640, 1955, 1810] },
];

const CANVAS = 240;       // tamanho final do quadrado
const LOGO_FIT = 220;     // logo cabe num quadrado interno (10px de respiro/lado)
const BG = '#000000';

// Logos com versões OFICIAIS (uploads individuais do Danilo).
// Processados por scripts/process-replacement-logos.mjs.
// Este script NÃO sobrescreve esses arquivos.
const SKIP = new Set(['abstartups', 'pagbrasil', 'unlimitail']);

await mkdir(OUT, { recursive: true });

console.log(`Lendo ${path.basename(SRC)} ...`);
const srcBuf = await sharp(SRC).png().toBuffer();

let ok = 0;
for (const { name, box } of LOGOS) {
  if (SKIP.has(name)) {
    console.log(`  · ${name}.png pulado (versão oficial em uso)`);
    continue;
  }
  const [x1, y1, x2, y2] = box;
  const w = x2 - x1;
  const h = y2 - y1;

  // 1) Recorta bbox bruto
  const cropped = await sharp(srcBuf)
    .extract({ left: x1, top: y1, width: w, height: h })
    .toBuffer();

  // 2) Trim próprio em pixel raw: varre linhas/colunas, encontra primeira/última
  // com conteúdo não-preto (somatório de R+G+B > THR no mínimo MIN_PX pixels).
  // Mais robusto que sharp.trim() (que falhava com ícones escuros / anti-aliasing).
  const THR = 18;     // brilho mínimo (R+G+B) para um pixel contar como conteúdo
  const MIN_PX = 2;   // pixels de conteúdo mínimos para a linha/coluna contar

  const { data, info } = await sharp(cropped)
    .raw()
    .toBuffer({ resolveWithObject: true });
  const cw = info.width;
  const ch = info.height;
  const channels = info.channels; // 3 ou 4 dependendo se tem alpha

  const rowHas = new Uint8Array(ch);
  const colHas = new Uint8Array(cw);
  for (let y = 0; y < ch; y++) {
    let rowCount = 0;
    for (let x = 0; x < cw; x++) {
      const idx = (y * cw + x) * channels;
      const sum = data[idx] + data[idx + 1] + data[idx + 2];
      if (sum > THR) {
        rowCount++;
        colHas[x] = 1;
      }
    }
    if (rowCount >= MIN_PX) rowHas[y] = 1;
  }
  let top = 0, bottom = ch - 1, left = 0, right = cw - 1;
  while (top < ch && !rowHas[top]) top++;
  while (bottom > top && !rowHas[bottom]) bottom--;
  while (left < cw && !colHas[left]) left++;
  while (right > left && !colHas[right]) right--;

  // Sanidade: se o trim devolve um retângulo claramente pequeno demais
  // (logo com cores escuras saturadas que não passaram do threshold),
  // assume falha e mantém o crop bruto. Threshold linear de 25%.
  const trimW = right - left + 1;
  const trimH = bottom - top + 1;
  const trimFailed =
    trimW < 10 || trimH < 8 ||
    trimW / cw < 0.25 || trimH / ch < 0.25;
  const trimmed = trimFailed
    ? cropped
    : await sharp(cropped).extract({ left, top, width: trimW, height: trimH }).toBuffer();
  if (trimFailed) {
    console.log(`    (trim falhou para ${name}, usando bbox bruto)`);
  }

  // 3) Descobre dimensões e calcula resize para caber no quadrado interno.
  const meta = await sharp(trimmed).metadata();
  const scale = Math.min(LOGO_FIT / meta.width, LOGO_FIT / meta.height);
  const newW = Math.max(1, Math.round(meta.width * scale));
  const newH = Math.max(1, Math.round(meta.height * scale));

  // 4) Resize + extend (padding preto) para 240x240 centralizado.
  const padX = (CANVAS - newW) / 2;
  const padY = (CANVAS - newH) / 2;

  const outPath = path.join(OUT, `${name}.png`);
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

  ok++;
  console.log(`  ✓ ${name}.png (${meta.width}x${meta.height} → ${newW}x${newH})`);
}

console.log(`\nGerados ${ok}/${LOGOS.length} logos em ${OUT}`);
