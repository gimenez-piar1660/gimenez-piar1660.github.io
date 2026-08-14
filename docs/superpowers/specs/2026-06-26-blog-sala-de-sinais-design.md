# Spec · Blog PiaR + "Sala de Sinais" — a coluna quinzenal de leitura de mídia

> **Data:** 2026-06-26
> **Status:** Aprovado em brainstorming (Danilo, 2026-06-26 — "manda bala")
> **Fase:** Cria a infraestrutura do Blog + publica a Edição 01 de "Sala de Sinais".
> **Herda:** Manual de Voz v2 (`docs/superpowers/specs/2026-06-25-voz-piar-v2-design.md`) + `docs/GEO-SEO-PIAR.md`.

---

## 1 · O problema / a oportunidade

O `/blog` é hoje um "em breve" honesto e `noindex`. Ao mesmo tempo, a PiaR produz a cada quinzena um digest interno da mídia espontânea dos clientes (os "destaques" semanais Beta + Alfa). Lido por quem observa o padrão, esse material vira um ativo editorial raro: o mercado visto por um ângulo que ninguém combinou. Falta o motor que transforma o digest em post publicado, datado, indexável e citável por IA.

A trava de valor: a leitura não pode ser um clipping seco ("fulano saiu em tal veículo"). Tem que ser a tese da PiaR sobre o que as coberturas, juntas, dizem do mercado — com cada cobertura ancorada num fato extraível (cliente, veículo, ângulo, link).

---

## 2 · Objetivos e não-objetivos

**Objetivos**
1. Coleção de blog **datada** + índice **indexável** + template de post, 100% no Design System.
2. Publicar a **Edição 01 de "Sala de Sinais"** (11 coberturas da quinzena de jun/2026).
3. Copy na **Voz v2 com sign-off** antes de tocar em qualquer arquivo. SEO/GEO conforme a doutrina.
4. Deixar o **motor pronto**: a próxima edição é só soltar um novo `.md`.

**Não-objetivos**
- Infra de envio do Boletim quinzenal (segue placeholder).
- Reescrever Insights ou outras páginas.
- Autoria multiusuário / CMS.

---

## 3 · Arquitetura

### Coleção `blog` (`src/content/blog/<slug>.md`)
Coleção própria, separada de `pages` (que é atemporal). Schema (Zod):
`title`, `description`, `series`, `edition` (number), `pubDate` (date), `category`/`eyebrow`, `icon`, `heroImage` (opcional), `heroAlt`, `readingTime` (opcional), `draft`, `noindex`.

### Rotas
- `src/pages/blog/[slug].astro` → `/blog/<slug>` (template de post).
- `src/pages/blog.astro` (já existe) → vira o **índice real** (sem colisão: `/blog` vs `/blog/:slug`).

### Índice `/blog`
Hero + **card de destaque** (edição mais recente) + **grade** `.editorial-card` com data + série + formato + ponte para o **Boletim quinzenal**. `index` ligado. JSON-LD `Blog`.
Os 3 formatos do placeholder (Opinião · Bastidor · Tendência) viram veias editoriais; **"Sala de Sinais" é a coluna-âncora**.

### Template de post
Modelado no `.prose-piar` existente, com a casca de blog: dateline + selo série/edição + tempo de leitura; lede; prosa (a leitura); **"As 11 matérias desta quinzena"** (lista *cliente · veículo · ângulo · link*); CTA de diagnóstico. JSON-LD `BlogPosting` + `ItemList`/`mentions`.

---

## 4 · A série "Sala de Sinais"

Cada edição é um **sinal** lido da redação PiaR a partir das coberturas reais dos clientes na quinzena. Formato-âncora do blog. Cadência **quinzenal**, casada com o "Boletim quinzenal" dos Insights. O selo se repete no topo de cada edição: `Sala de Sinais · Edição NN · DD mmm AAAA`.

---

## 5 · Camada SEO/GEO (do `GEO-SEO-PIAR.md`)

- **Title + meta** com fato + número (11 coberturas / 10 veículos / jun 2026).
- **Abstract de 40 palavras** (regra Gübür) no 1º parágrafo: entidade PiaR + a contagem + a tese.
- **≥3 fatos extraíveis**; a **lista de prova** estruturada (cliente · veículo · link) = pontes de RAG.
- **Links internos**: `/midia-espontanea`, `/newsjacking`, `/o-que-e-data-pr`, `/o-que-e-geo-pr`, `/reputacao`.
- **Links externos**: as coberturas reais (autoridade). **Viapol = PDF privado no Drive** → cita a revista, sem link público.
- **JSON-LD** `BlogPosting` + `ItemList`; canonical; OG; `index`.

---

## 6 · Fluxo da copy (Voz v2 — sign-off sagrado)

1. **Verificar as 11 URLs**: título real, veículo, data, ângulo de cada cobertura.
2. **Escrever a copy** na Voz v2 num doc de revisão (`docs/superpowers/copy/2026-06-26-blog-sala-de-sinais-ed01.md`), bloco a bloco, sem os tiques banidos (§5 da Voz v2).
3. **Sign-off do Danilo**. Só então cria `.md` + monta `.astro` (índice + template) + liga a nav + `npm run build`.

**Restrições inegociáveis:** fatos canônicos PiaR; zero nome proibido; 1ª pessoa do plural, sem "a gente"; sem travessão (—); serif itálico (`.italic-serif`) + palavra-destaque amarela (`.warm-t`) só no conceito-chave de cada seção.

---

## 7 · Imagem

Hero editorial **abstrato** no Design System (ink `#0F0F11` + amarelo `#FED136`), evocando "onze sinais que viram um padrão". **Nunca fabricar capa de veículo, screenshot ou clipping** (inventar prova é proibido). A imagem reforça a narrativa e serve de capa reutilizável da série.

---

## 8 · Critérios de aceite

- [ ] Coleção `blog` + índice indexável + template, tudo no DS.
- [ ] Edição 01 publicada; os 2 portões (Humano + GEO) passam; zero tique banido.
- [ ] 11 mapeamentos cliente↔veículo↔ângulo verificados; Drive tratado.
- [ ] Links internos e externos válidos; JSON-LD válido.
- [ ] Sign-off explícito do Danilo antes do `.md`/`.astro`.
- [ ] `npm run build` roda sem erro.
