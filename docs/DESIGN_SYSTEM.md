# PiaR Design System v2 — catálogo

**Spec canônica:** [design-system/source/piar-ds-v2.html](../design-system/source/piar-ds-v2.html)
**Tokens em código:** [src/styles/tokens.css](../src/styles/tokens.css) · [tailwind.config.mjs](../tailwind.config.mjs)
**Visualizador local:** [/design-system/](http://localhost:4321/design-system/)

Tudo que está aqui está espelhado em código. Componentes do site consomem tokens — nunca hardcode.

---

## 1. Manifesto (voz)

> Atenção não se força. Se atrai.
> Nem tudo vira notícia. Só o que tem força.
> Relevância cria campo. Seja inevitável.

Seis regras sempre:

1. **Aforístico** — frases curtas e declarativas. Ritmo antes de extensão.
2. **Editorial** — lê como boa coluna de jornal, não como marketing.
3. **Confiante, nunca arrogante** — insight como observação, não opinião.
4. **Primeira pessoa do plural** — "nós" e "nossa".
5. **Português-primeiro** — inglês só quando o termo é global nativo (*media training*, *storytelling*).
6. **Sem emoji, sem exclamação** — brand é jornal sério. Ponto final em todo lugar.

---

## 2. Cores

### Núcleo (proporção 40 / 35 / 15 / 10)

| Token       | Hex       | Papel                                       |
|-------------|-----------|---------------------------------------------|
| `--ink`     | `#0F0F11` | Texto primário, fundos dramáticos (40%)     |
| `--paper`   | `#F5F5F7` | Fundo padrão da página (35%)                |
| `--white`   | `#FFFFFF` | Superfícies elevadas (cards sobre paper, 15%) |
| `--yellow`  | `#FED136` | **Único acento de marca** (10%)             |

### Escala de amarelo (apenas UI)

`yellow-50` → `yellow-800`. Usar só para estados (hover, disabled, fundos sutis).
**`yellow-700` (`#8F710A`) é o único amarelo legível como texto sobre fundo claro.**

### Combinações aprovadas / proibidas

| Foreground | Background | Status     | Uso                          |
|------------|-----------|------------|------------------------------|
| `#0F0F11`  | `#F5F5F7` | ✅ AA      | Primária em página           |
| `#FFFFFF`  | `#0F0F11` | ✅ AA      | Hero / dark sections         |
| `#0F0F11`  | `#FED136` | ✅ AA      | CTA amarelo                  |
| `#FED136`  | `#0F0F11` | ✅ AA      | Amarelo em fundo escuro      |
| `#6B4E00`  | `#F5F5F7` | ✅ AA      | Yellow-ink como acento       |
| `#FED136`  | `#FFFFFF` | ❌ Falha   | Contraste insuficiente       |
| `#FFFFFF`  | `#FED136` | ❌ Falha   | Contraste insuficiente       |

---

## 3. Tipografia

Três famílias oficiais, uma voz.

| Família           | Token                          | Pesos       | Uso                                   |
|-------------------|--------------------------------|-------------|---------------------------------------|
| Montserrat        | `--font-display` · `--font-serif` | 300–800  | Display, títulos, headlines, grifos   |
| Open Sans         | `--font-sans`                  | 400–700     | Corpo, lede, UI, body                 |
| JetBrains Mono    | `--font-mono`                  | 400/500     | Eyebrows, metadata, labels            |

**Oficial PiaR:** Montserrat (display/headlines) + Open Sans (corpo). Os tokens
`--font-display` e `--font-serif` apontam para Montserrat; `--font-sans` aponta
para Open Sans. Headlines (`h1`–`h6`, `.ds-h*`) herdam `--font-display`; o corpo
herda `--font-sans`.

> **Legado:** Inter e Instrument Serif continuam *importados* em `global.css`
> (via `@fontsource`) por compatibilidade com páginas antigas, mas **não são mais
> famílias oficiais** e nenhum token do sistema aponta para elas. Não usar em
> componentes novos. O grifo itálico editorial (`.italic-serif`) agora resolve
> para Montserrat italic via `--font-serif`.

### Escala

| Token       | Tamanho   | Line-height | Peso | Uso              |
|-------------|-----------|-------------|------|------------------|
| Display     | 176 px    | 0.88        | 600  | Hero, manchete   |
| H1          | 104 px    | 0.96        | 600  | Título de página |
| H2          | 64 px     | 1.0         | 600  | Seção            |
| H3          | 32 px     | 1.15        | 600  | Subseção         |
| Lede        | 24 px     | 1.45        | 400  | Lead paragraph   |
| Body        | 16 px     | 1.55        | 400  | Corpo            |
| Small       | 13 px     | 1.5         | 400  | Microcopy        |
| Eyebrow     | 12 px     | 1.4         | 500  | Mono, caps, tracking 0.2em |

### Caixa & pontuação

- **Headlines:** sentence case, ponto final obrigatório (são afirmações, não rótulos).
- **Eyebrows:** UPPERCASE, tracking 0.2em, mono. Opcional `///` como marca editorial.
- **Botões:** UPPERCASE, tracking 0.16em. **Nunca ponto final.**
- **Body:** sentence case, sem vírgula de Oxford (convenção brasileira).

---

## 4. Grid & layout

Três dispositivos visuais canônicos:

1. **Barra amarela 56 × 3 px** — único elemento decorativo permitido. Sempre 24px abaixo do título.
2. **Eyebrow** — JetBrains Mono 12px, tracking 0.2em, CAPS. Define o capítulo sem gritar.
3. **Hairline grid** — 1 px em 8% black. 12 colunas, gutter 24px, margens 64–96px.

### Espaçamento (escala 4px)

`4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128`

### Larguras canônicas

| Token         | Valor    | Uso                                   |
|---------------|----------|---------------------------------------|
| `--col-narrow`| 720 px   | Texto editorial longo                 |
| `--col-base`  | 1080 px  | Conteúdo padrão                       |
| `--col-wide`  | 1280 px  | Layouts densos / dashboards           |
| `--col-max`   | 1440 px  | Limite absoluto                       |

---

## 5. Raios

| Token        | Valor  | Uso típico                          |
|--------------|--------|-------------------------------------|
| `--r-xs`     | 6 px   | Tags pequenas, badges               |
| `--r-sm`     | 10 px  | Inputs, mini cards                  |
| `--r-md`     | 14 px  | Botões, cards padrão                |
| `--r-lg`     | 20 px  | Cards grandes, seções               |
| `--r-xl`     | 28 px  | Containers hero                     |
| `--r-pill`   | 999 px | Pills, CTAs, chips                  |

---

## 6. Motion

- **Easings:** `--ease-standard` (Apple HIG), `--ease-emphasis` (out-expo), `--ease-spring`.
- **Durações:** `--dur-fast` 120ms (hovers) · `--dur-base` 220ms (default) · `--dur-slow` 420ms (transições de página).
- **Entrada padrão:** fade + slide 12–28px com `--ease-spring` 900ms. Stagger 0.12s entre elementos.
- **Proibido:** bounces, springs com overshoot, rotações decorativas.

`prefers-reduced-motion: reduce` sempre respeitado (globalizado em `global.css`).

---

## 7. Componentes (espelhar no código sob demanda)

Catálogo no brand book renderizado. Os principais já mapeados:

- **Botões:** `btn--primary` (ink + branco), `btn--accent` (yellow + ink), `btn--ghost` (hairline + hover ink).
- **Pills/tags:** default, accent, dark, ghost.
- **Cards:** default, dark, accent, hover-elevated.
- **Eyebrow:** mono caps + dash + idx opcional.
- **Title underline:** barra 56×3 amarela abaixo do título.
- **Metadata/stat row:** trio de números grandes em grid hairline.

Cada componente vira `.astro` em `src/components/` quando for usado pelo site.

---

## 8. Iconografia

Dois registros distintos, **nunca misturados**:

- **Ícones de UI** — Lucide. Stroke 1.5–2px, monocromático, segue cor do texto. Nunca amarelo.
- **Motifs de marca** — Arch, Diamond, Circles, Stripes, Arrows. Sempre amarelos. Uso ornamental em headers/covers/stamps. **Nunca em UI funcional.**

---

## 9. Imagens

**Aprovado:**
- Retratos executivos em fundo claro, luz plana.
- Redações, ambientes de trabalho intelectual.
- Tela limpa: jornais, tablets, telas de edição.
- Renders da marca (glow, rays, particles).

**Evitar:**
- Stock corporativo (handshakes, gráficos flutuantes).
- Grain, pontos, efeito VHS, retro.
- Overlays amarelos ou coloridos em fotos.
- IA genérica sem curadoria editorial.

---

## 10. Do's & Don'ts (oito regras)

| #  | ✓ DO                                          | ✗ DON'T                                        |
|----|-----------------------------------------------|------------------------------------------------|
| 01 | Hairline grid, respiro generoso               | Cards preenchidos, sombras coloridas           |
| 02 | Uma cor de acento: amarelo                    | Dois ou mais amarelos no mesmo layout          |
| 03 | Itálico de Instrument Serif em um fragmento   | Itálico em frases inteiras                     |
| 04 | Eyebrow mono em CAPS + tracking               | Mono como corpo de texto                       |
| 05 | Barra 56×3 embaixo de títulos H1/H2/H3        | Barra flutuando sem título acima               |
| 06 | Logo respirando ≥ altura da "P"               | Logo grudado em qualquer borda ou imagem       |
| 07 | Imagens renderizadas da marca                 | Stock photos genéricas de handshakes           |
| 08 | Motion editorial: fade + slide                | Bounces, springs com overshoot, rotações       |

---

## 11. Acessibilidade

- Contraste mínimo AA (WCAG 2.2) — checar com `npx pa11y` no CI.
- Foco visível sempre (`:focus-visible` global, outline amarelo).
- Skip link presente em `BaseLayout.astro`.
- `aria-label` em ícones puros.
- Sem `autoplay` com áudio. Vídeos com `muted` + `playsinline`.
