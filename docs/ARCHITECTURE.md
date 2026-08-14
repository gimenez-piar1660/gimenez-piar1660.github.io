# Architecture

## Princípios

1. **Estático por padrão.** Astro gera HTML pré-renderizado. JS só carrega quando essencial (hidratação parcial via islands).
2. **Conteúdo desacoplado da view.** Casos, artigos e textos longos vivem em `src/content/` como Markdown/MDX, prontos para virar coleções tipadas.
3. **Tokens são fonte única.** Toda decisão visual (cor, raio, easing, tipografia) parte de `src/styles/tokens.css` e `tailwind.config.mjs`. Componentes consomem tokens; nunca hardcode.
4. **Performance é requisito, não otimização.** Budget Lighthouse mínimo: 90 em todas as 4 categorias. CSS final ≤ 50KB gzip. JS inicial ≤ 30KB gzip. LCP ≤ 2.5s no 3G fast.
5. **Segurança por default.** CSP estrita, sem `eval`, sem CDN sem SRI, fontes self-hosted, formulários com server-side validation.

## Camadas

```
┌─────────────────────────────────────────────────────────────────┐
│  src/pages/        Rotas. Compõem layouts + componentes.        │
├─────────────────────────────────────────────────────────────────┤
│  src/layouts/      <head>, SEO, OG, JSON-LD, skip-links.        │
├─────────────────────────────────────────────────────────────────┤
│  src/components/   UI reutilizável. Sem estado de rota.         │
├─────────────────────────────────────────────────────────────────┤
│  src/content/      Dados (cases, posts). Validados por Zod.     │
├─────────────────────────────────────────────────────────────────┤
│  src/styles/       Tokens + Tailwind + utilitários globais.     │
├─────────────────────────────────────────────────────────────────┤
│  src/scripts/      Comportamentos client (GSAP, Lenis, forms).  │
├─────────────────────────────────────────────────────────────────┤
│  src/assets/       Mídia processada (imagens, fontes).          │
├─────────────────────────────────────────────────────────────────┤
│  public/           Mídia servida como-está (vídeos, brand, OG). │
└─────────────────────────────────────────────────────────────────┘
```

### Regras de dependência

- `pages` pode importar de tudo abaixo.
- `layouts` pode importar `components`, `styles`, `scripts`.
- `components` **não** importam `layouts` nem `pages`.
- `content` é puro dado — zero imports de UI.

## Roteamento

Astro roteia por filesystem em `src/pages/`. URLs:

| Arquivo                    | URL              |
|----------------------------|------------------|
| `index.html` / `.astro`    | `/`              |
| `processos.html` / `.astro`| `/processos`     |
| `404.astro`                | fallback 404     |
| `[slug].astro`             | rotas dinâmicas  |

`trailingSlash: 'never'` em `astro.config.mjs` — URLs canônicas sem barra final.

## Build

`astro build` gera `dist/` com:

- HTML pré-renderizado por rota.
- CSS minificado, com hash, split por página.
- JS apenas para islands (componentes com `client:*`).
- Sitemap em `/sitemap-index.xml` via `@astrojs/sitemap`.

Cache-busting via hash no nome do arquivo (`/_assets/foo.a1b2c3.css`). Configurado com `Cache-Control: immutable` em [`public/_headers`](../public/_headers).

## Dados externos

- **Formulários de contato:** server-side via endpoint Astro em `src/pages/api/contact.ts` (a criar) com validação Zod + rate limit + honeypot.
- **Analytics:** Plausible (cookieless, LGPD-compliant). Sem GA.
- **Newsletter:** integração com provedor (Mailchimp/Beehiiv) via API server-side.

## Padrão de componente Astro

```astro
---
// frontmatter (server) — TS estrito
interface Props { title: string; ctaHref?: string; }
const { title, ctaHref = '#cta' } = Astro.props;
---

<section class="ds-section">
  <h2 class="ds-h2">{title}</h2>
  <a href={ctaHref} class="btn">Agendar</a>
</section>

<style>
  /* CSS escopo automático no componente */
  .ds-section { padding-block: var(--space-24); }
</style>
```

## Decisões em aberto

- **CMS:** Decap CMS (git-based) vs. Sanity (hosted) — definir antes do volume editorial crescer.
- **Hospedagem:** Netlify (preview deploys, headers built-in) vs. Cloudflare Pages (edge, custo zero).
- **i18n:** estrutura preparada (`lang="pt-BR"`), mas sem rotas `/en/` até decisão comercial.
