# PiaR Group — Site

Site institucional da PiaR Group, construído com **Astro 5 + Tailwind 3** em arquitetura multi-página estática.

## Stack

- **Astro 5** — SSG, islands architecture, zero JS por padrão.
- **Tailwind 3** — utility-first, tokens centralizados em [`tailwind.config.mjs`](tailwind.config.mjs).
- **GSAP + Lenis** — animação e scroll suave (carregados sob demanda).
- **TypeScript strict** — tipagem completa nas integrações.
- **Node 20.11+** — versão fixada em [`.nvmrc`](.nvmrc).

## Setup

```bash
# 1. Garantir Node correto
nvm use

# 2. Instalar dependências
npm install

# 3. Rodar dev server (http://localhost:4321)
npm run dev

# 4. Build de produção
npm run build

# 5. Preview do build
npm run preview
```

## Estrutura

```
public/         Assets estáticos servidos da raiz (favicon, robots, vídeos, brand).
src/
  pages/        Rotas (HTML/Astro). Cada arquivo = uma URL.
  layouts/      Wrappers reutilizáveis (BaseLayout para <head>, SEO, OG).
  components/   Parciais Astro (Nav, Footer, Hero, etc.).
  styles/       tokens.css + global.css.
  scripts/      Módulos JS/TS (GSAP, Lenis, forms).
  content/      Content Collections (cases, posts).
  assets/       Imagens/fontes processadas pelo Astro (otimizadas no build).
docs/           ARCHITECTURE, SECURITY, DESIGN_SYSTEM.
```

## Documentação

- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) — decisões técnicas e responsabilidades por camada.
- [docs/SECURITY.md](docs/SECURITY.md) — CSP, headers, LGPD, threat model.
- [docs/DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) — tokens, tipografia, componentes.

## Scripts

| Comando            | Função                                                |
|--------------------|-------------------------------------------------------|
| `npm run dev`      | Dev server com HMR                                    |
| `npm run build`    | Type-check + build estático em `dist/`                |
| `npm run preview`  | Serve `dist/` localmente                              |
| `npm run typecheck`| `astro check` (TS + diagnóstico de templates)         |
| `npm run lint`     | ESLint                                                |
| `npm run format`   | Prettier (escrita)                                    |

## Mídia bruta

Vídeos e PSDs originais ficam **fora do repositório** em `../artools-raw/` (não versionados).
Apenas assets entregáveis e otimizados entram em `public/` ou `src/assets/`.

## Estado da migração

Migração de site vanilla → Astro em andamento:

- [x] Estrutura de pastas
- [x] Configuração de build (Astro, Tailwind, TS)
- [x] Headers de segurança e robots
- [x] Tokens de design extraídos
- [ ] Decomposição dos HTMLs monolíticos em componentes `.astro`
- [ ] Migração de Tailwind CDN → local
- [ ] Self-host das fontes (`@fontsource/*`)
- [ ] Otimização de imagens (AVIF/WebP via `astro:assets`)
- [ ] CSP sem `unsafe-inline`
- [ ] Sitemap dinâmico via `@astrojs/sitemap`
- [ ] Página 404, Sobre, Contato, Privacidade
- [ ] CI (Lighthouse budget + lint)
