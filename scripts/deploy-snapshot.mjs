// Gera um snapshot de deploy versionado do site PiaR para subida manual no Netlify.
//
// Faz, em sequencia: build -> noindex (se staging) -> calcula o diff desde o ultimo
// deploy -> cria a pasta carimbada deploys/<data_hora_versao_label>/ -> zipa o site ->
// escreve manifest.json + notes.md -> atualiza DEPLOYS.md -> sobe a versao no
// package.json -> faz UM commit e cria a tag vX.Y.Z. Nao faz git push.
//
// Uso:
//   npm run deploy:snapshot -- --label ceo-preview --bump minor --env staging
//   npm run deploy:snapshot -- --label go-live --version 1.0.0 --env production
//
// Opcoes:
//   --label <nome>            apelido do deploy (parte do nome da pasta). Padrao: deploy
//   --bump patch|minor|major  como subir a versao. Padrao: patch
//   --version X.Y.Z           fixa a versao exata (ignora --bump)
//   --env staging|production  controla o noindex. Padrao: staging
//   --no-git                  nao faz commit nem tag (so gera a pasta e o zip)

import { execSync, execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const DEPLOYS_DIR = path.join(ROOT, 'deploys');
const INDEX_FILE = path.join(ROOT, 'DEPLOYS.md');

// ---------- args ----------
const args = process.argv.slice(2);
const getArg = (name, fallback = undefined) => {
  const i = args.indexOf(`--${name}`);
  if (i !== -1 && args[i + 1] && !args[i + 1].startsWith('--')) return args[i + 1];
  return fallback;
};
const hasFlag = (name) => args.includes(`--${name}`);

const label = (getArg('label', 'deploy') || 'deploy').replace(/[^a-zA-Z0-9._-]/g, '-');
const bump = getArg('bump', 'patch');
const explicitVersion = getArg('version');
const env = getArg('env', 'staging');
const doGit = !hasFlag('no-git');

if (!['staging', 'production'].includes(env)) {
  console.error(`\n[erro] --env deve ser "staging" ou "production" (recebi "${env}").\n`);
  process.exit(1);
}
if (!explicitVersion && !['patch', 'minor', 'major'].includes(bump)) {
  console.error(`\n[erro] --bump deve ser patch|minor|major (recebi "${bump}").\n`);
  process.exit(1);
}

// ---------- helpers ----------
const sh = (cmd) => execSync(cmd, { cwd: ROOT, encoding: 'utf8' }).trim();
const shSafe = (cmd) => {
  try { return sh(cmd); } catch { return ''; }
};
const pad2 = (n) => String(n).padStart(2, '0');

function bumpVersion(current, kind) {
  const [maj, min, pat] = current.split('.').map((x) => parseInt(x, 10) || 0);
  if (kind === 'major') return `${maj + 1}.0.0`;
  if (kind === 'minor') return `${maj}.${min + 1}.0`;
  return `${maj}.${min}.${pat + 1}`;
}

function listRoutes(dir, base = '') {
  const routes = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      routes.push(...listRoutes(full, `${base}/${entry.name}`));
    } else if (entry.name.endsWith('.html')) {
      let route = entry.name === 'index.html' ? `${base}/` : `${base}/${entry.name.replace(/\.html$/, '')}`;
      route = route.replace(/\/+/g, '/');
      routes.push(route === '' ? '/' : route);
    }
  }
  return routes;
}

function zipDistContents(zipPath) {
  fs.mkdirSync(path.dirname(zipPath), { recursive: true });
  if (fs.existsSync(zipPath)) fs.rmSync(zipPath);
  if (process.platform === 'win32') {
    // ATENCAO: nao usar Compress-Archive. No Windows PowerShell ele grava os caminhos
    // internos do zip com barra invertida (blog\index.html), o que quebra o unzip do
    // Netlify (Linux). Montamos as entradas na mao com ZipArchive forcando barra normal.
    const ps = [
      'Add-Type -AssemblyName System.IO.Compression;',
      'Add-Type -AssemblyName System.IO.Compression.FileSystem;',
      `$src = '${DIST}';`,
      `$dest = '${zipPath}';`,
      "$zip = [System.IO.Compression.ZipFile]::Open($dest, 'Create');",
      '$srcFull = (Resolve-Path $src).Path;',
      'Get-ChildItem -Path $src -Recurse -File | ForEach-Object {',
      '  $rel = $_.FullName.Substring($srcFull.Length).TrimStart([char]92).Replace([char]92,[char]47);',
      '  [void][System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $_.FullName, $rel, [System.IO.Compression.CompressionLevel]::Optimal);',
      '};',
      '$zip.Dispose();',
    ].join(' ');
    execFileSync('powershell', ['-NoProfile', '-NonInteractive', '-Command', ps], { stdio: 'inherit' });
  } else {
    execFileSync('bash', ['-c', `cd '${DIST}' && zip -r -q '${zipPath}' .`], { stdio: 'inherit' });
  }
}

function cleanDist() {
  if (!fs.existsSync(DIST)) return;
  if (process.platform === 'win32') {
    try {
      execFileSync(
        'powershell',
        ['-NoProfile', '-NonInteractive', '-Command', `Remove-Item -LiteralPath '${DIST}' -Recurse -Force -ErrorAction SilentlyContinue`],
        { stdio: 'ignore' },
      );
    } catch { /* fs.rmSync abaixo cobre o resto */ }
  }
  fs.rmSync(DIST, { recursive: true, force: true });
}

function applyNoindex() {
  // robots.txt: bloqueia todos os crawlers no preview
  const robots = path.join(DIST, 'robots.txt');
  fs.writeFileSync(
    robots,
    '# STAGING (preview privado) - bloqueado para buscadores.\n# O deploy de producao (--env production) sai com o robots.txt liberado.\nUser-agent: *\nDisallow: /\n',
    'utf8',
  );
  // _headers: adiciona X-Robots-Tag noindex no topo (belt-and-suspenders)
  const headersFile = path.join(DIST, '_headers');
  const noindexBlock = '# STAGING noindex (preview privado)\n/*\n  X-Robots-Tag: noindex, nofollow\n\n';
  const existing = fs.existsSync(headersFile) ? fs.readFileSync(headersFile, 'utf8') : '';
  fs.writeFileSync(headersFile, noindexBlock + existing, 'utf8');
}

// ---------- start ----------
const pkgPath = path.join(ROOT, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const version = explicitVersion || bumpVersion(pkg.version || '0.0.0', bump);
const astroVersion = (pkg.dependencies && pkg.dependencies.astro) || 'desconhecida';

const now = new Date();
const dateStr = `${now.getFullYear()}-${pad2(now.getMonth() + 1)}-${pad2(now.getDate())}`;
const timeStr = `${pad2(now.getHours())}${pad2(now.getMinutes())}`;
const stamp = `${dateStr}_${timeStr}_v${version}_${label}`;
const deployDir = path.join(DEPLOYS_DIR, stamp);
const zipName = `site_v${version}.zip`;
const zipPath = path.join(deployDir, zipName);

console.log(`\n=== Deploy snapshot: v${version} (${label}) [${env}] ===\n`);

// git context (antes de qualquer commit)
const branch = shSafe('git rev-parse --abbrev-ref HEAD') || '(sem git)';
const commitFull = shSafe('git rev-parse HEAD');
const commitShort = shSafe('git rev-parse --short HEAD');
const lastTag = shSafe('git describe --tags --abbrev=0');
const dirty = shSafe('git status --porcelain');

let changesStat = '';
let changesList = '';
if (lastTag) {
  changesStat = shSafe(`git diff --stat ${lastTag}..HEAD`);
  changesList = shSafe(`git diff --name-status ${lastTag}..HEAD`);
} else {
  changesStat = '(sem tag anterior para comparar)';
}

// 0) dist limpo. O Astro nem sempre esvazia o dist/ por completo, e em pastas
// sincronizadas por OneDrive o fs.rmSync do Node nao vence: o OneDrive restaura
// os arquivos cloud-only durante o build, deixando paginas obsoletas no zip. O
// Remove-Item nativo apaga de fato (e propaga a exclusao pra nuvem); fs.rmSync
// fica de reforco. Sem isso, saida de builds antigos entra no zip.
console.log('[0/6] limpando dist/ ...');
cleanDist();

// 1) build
console.log('[1/6] build (astro check && astro build)...');
execSync('npm run build', { cwd: ROOT, stdio: 'inherit' });

if (!fs.existsSync(path.join(DIST, 'index.html'))) {
  console.error('\n[erro] dist/index.html nao existe apos o build. Abortando.\n');
  process.exit(1);
}

// 2) noindex (staging)
if (env === 'staging') {
  console.log('[2/6] aplicando noindex (staging)...');
  applyNoindex();
} else {
  console.log('[2/6] producao: robots.txt liberado (sem noindex).');
}

// 3) rotas
const routes = listRoutes(DIST).sort();
console.log(`[3/6] ${routes.length} rotas publicadas.`);

// 4) zip
console.log(`[4/6] zipando o site -> ${path.relative(ROOT, zipPath)}`);
fs.mkdirSync(deployDir, { recursive: true });
zipDistContents(zipPath);
const zipBytes = fs.statSync(zipPath).size;
const zipMB = (zipBytes / (1024 * 1024)).toFixed(2);

// 5) manifest + notes
console.log('[5/6] escrevendo manifest.json e notes.md...');
const manifest = {
  name: label,
  version,
  env,
  timestamp: now.toISOString(),
  human_time: `${dateStr} ${pad2(now.getHours())}:${pad2(now.getMinutes())}`,
  site: 'https://pep.piar.group',
  target: 'netlify (deploy manual)',
  artifact: zipName,
  artifact_size_mb: Number(zipMB),
  git: { branch, commit: commitFull, commit_short: commitShort, previous_tag: lastTag || null, tag: doGit ? `v${version}` : null, dirty_at_build: Boolean(dirty) },
  routes_count: routes.length,
  routes,
  changes_since_last_deploy: changesStat,
  build: { node: process.version, astro: astroVersion, ok: true },
};
fs.writeFileSync(path.join(deployDir, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n', 'utf8');

const notes = `# Deploy v${version} — ${label}

- **Quando:** ${dateStr} ${pad2(now.getHours())}:${pad2(now.getMinutes())}
- **Ambiente:** ${env}${env === 'staging' ? ' (noindex, preview privado)' : ' (indexavel)'}
- **Commit:** ${commitShort} (branch ${branch})
- **Tag anterior:** ${lastTag || '(nenhuma)'}
- **Arquivo pra arrastar no Netlify:** \`${zipName}\` (${zipMB} MB)
- **Rotas publicadas:** ${routes.length}

## O que mudou desde o deploy anterior

Preencha aqui, em portugues, o resumo do que o CEO deve olhar nesta versao.

### Arquivos alterados (git)

\`\`\`
${changesList || changesStat || '(sem historico anterior)'}
\`\`\`
`;
fs.writeFileSync(path.join(deployDir, 'notes.md'), notes, 'utf8');

// 6) DEPLOYS.md (indice)
console.log('[6/6] atualizando DEPLOYS.md...');
const header = `# Deploys do site PiaR

> Indice de todas as subidas, mais recente no topo. Cada linha aponta para as notas do deploy.
> Detalhes do sistema em [docs/deploy-e-versionamento.md](docs/deploy-e-versionamento.md).

| Versao | Data/hora | Deploy | Ambiente | Commit | Notas |
|--------|-----------|--------|----------|--------|-------|
`;
const row = `| v${version} | ${dateStr} ${pad2(now.getHours())}:${pad2(now.getMinutes())} | ${label} | ${env} | ${commitShort} | [notas](deploys/${stamp}/notes.md) |\n`;
let indexContent;
if (fs.existsSync(INDEX_FILE)) {
  const cur = fs.readFileSync(INDEX_FILE, 'utf8');
  const marker = '|--------|';
  const idx = cur.indexOf(marker);
  if (idx !== -1) {
    const lineEnd = cur.indexOf('\n', idx) + 1;
    indexContent = cur.slice(0, lineEnd) + row + cur.slice(lineEnd);
  } else {
    indexContent = header + row;
  }
} else {
  indexContent = header + row;
}
fs.writeFileSync(INDEX_FILE, indexContent, 'utf8');

// bump package.json
pkg.version = version;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');

// git commit + tag
if (doGit) {
  try {
    execFileSync('git', ['add', 'package.json', 'DEPLOYS.md', path.join('deploys', stamp, 'manifest.json'), path.join('deploys', stamp, 'notes.md')], { cwd: ROOT, stdio: 'inherit' });
    const msg = `deploy: v${version} ${label} (${env})\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`;
    execFileSync('git', ['commit', '-m', msg], { cwd: ROOT, stdio: 'inherit' });
    execFileSync('git', ['tag', `v${version}`], { cwd: ROOT, stdio: 'inherit' });
    console.log(`\n[git] commit feito e tag v${version} criada (sem push).`);
  } catch (e) {
    console.warn(`\n[git] aviso: nao consegui commitar/taggear automaticamente (${e.message}). O snapshot e o zip foram gerados mesmo assim.`);
  }
}

// banner final
console.log('\n============================================================');
console.log(`  PRONTO. Deploy v${version} (${env}) gerado.`);
console.log(`  Arraste este arquivo no painel do Netlify:`);
console.log(`  ${zipPath}`);
console.log('============================================================\n');
