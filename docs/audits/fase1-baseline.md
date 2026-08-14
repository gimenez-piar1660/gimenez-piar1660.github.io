# FASE 1 — Auditoria de base de qualidade (4 páginas prioritárias)

> **O que é este doc:** diagnóstico técnico (não é mudança de código nem de copy). Mede 4 páginas
> contra a régua do Awwwards (Design 40% · Usability 30% · Creativity 20% · Content 10%; Honorable
> Mention = nota ≥ 6.5) e contra o Design System PiaR (tokens.css/global.css).
> **Escopo:** `index.astro` (Home), `cases.astro`, `geo.astro` e `reputacao.astro`.
> **Data:** 2026-06-27 · **Por:** Seraphin · **Para:** Danilo (PiaR).
> **Norte:** qualidade que eleva o poder de preço da PiaR — equilíbrio impressionante nas públicas
> (Home/Cases), aposta alta controlada nas diamante (GEO/Reputação).

---

## Resumo executivo (para leigo)

Estamos **fortes em conceito e em conteúdo**: as páginas têm uma ideia visual clara, tipografia
editorial confiante, dados com lastro no HTML e estrutura de FAQ/esquema que a IA consegue citar
(isso é dinheiro no jogo GEO). As páginas-diamante (GEO e Reputação) já nascem com cara de material
de apresentação: o herói em WebGL e os gráficos animados que "desenham a tese" são exatamente o tipo
de coisa que ganha pontos de Criatividade.

O **maior risco está na metade invisível da nota** — Usability (30%), que inclui performance,
mobile e acessibilidade. Três frentes ameaçam a nota: (1) **animações que nunca descansam** — os
"campos" e gráficos animados continuam rodando a 60fps mesmo fora da tela e, na Home, até quando o
usuário pediu "menos movimento", o que derruba performance e bateria no celular; (2) **palavras de
destaque em amarelo sobre fundo claro** que não passam no contraste mínimo (uma falha que um jurado
percebe em 1 segundo); (3) **o Design System não está sendo respeitado como lei** — cada página
redefine cores, raios e tamanhos por conta própria, com valores que divergem entre si, o que quebra
a consistência (o critério que separa "bom" de "premiável" quando o júri abre 5 páginas seguidas).
Nada disso é grave de consertar; é o tipo de polimento que tira a nota de 6.4 para 6.8.

---

## Página 1 — Home (`src/pages/index.astro`)

| Achado | Categoria | Severidade | Correção sugerida (acionável) |
|---|---|---|---|
| `gravityField()` (canvas full-screen, 150 partículas + `shadowBlur` por frame) roda em loop infinito e **nunca pausa fora da viewport** | Perf | Alta | Pausar o `requestAnimationFrame` via IntersectionObserver quando o canvas sai da tela. |
| O mesmo canvas **redesenha a cada frame mesmo em `prefers-reduced-motion`** (o `frame()` reagenda sempre; só a física é gateada) | Perf/A11y | Alta | Congelar um quadro estático e parar o rAF quando reduced-motion estiver ativo. |
| Vídeo do herói com `preload="auto"` e **sem `poster`** → compete com o LCP e mostra herói "vazio" enquanto carrega | Perf | Alta | `preload="metadata"` + `poster` com o 1º frame estático (imagem leve). |
| Video-scrub (`currentTime` no scroll) + canvas rodam **sem desligar em mobile/baixa potência** | Perf/Mobile | Alta | Fallback estático em mobile/conexão fraca; ameaça o selo Mobile Excellence. |
| `frame()` lê `getBoundingClientRect()` de `#virada`, `#climax`, faixas claras e todos os `.f-h2` **a cada frame** e escreve CSS vars → layout thrashing | Perf | Média | Cachear medidas e recalcular só em scroll/resize, não em todo frame. |
| `:root` redefinido no `<style is:global>` com raios divergentes do DS (`--radius-lg:24px` vs `--r-lg:20px`, `--radius-xl:32px` vs `28px`, `--radius-sm:8px` vs `10px`) | DS | Média | Consumir `tokens.css` em vez de reescrever valores. |
| `.ds-h1`/`.ds-h2` redefinidos com `clamp()` diferente do global e das outras páginas (3 escalas `.ds-h1` distintas no site) | DS/Awwwards | Média | Unificar a escala tipográfica num único lugar (token/classe canônica). |
| Texto `.n-sub` (`--text-muted`) sobre o vidro translúcido **acima de vídeo** → contraste imprevisível conforme o frame | A11y | Média | Garantir piso de contraste (scrim/overlay sob o texto do herói). |
| Amarelo de marca hardcoded como `rgba(254,209,54,…)` em dezenas de pontos de CSS (fora do canvas, onde é justificável) | DS | Baixa | Trocar por `var(--yellow)`/escala no CSS; manter literal só no canvas. |
| 4 manchetes empilhadas no herói (`h1` + 3 `h2`) lidas em sequência por leitor de tela | A11y | Baixa | Avaliar marcar as fases ocultas com `aria-hidden` fora do beat ativo. |
| **Forte:** números das provas já vêm no HTML (contador só anima a partir deles) → paridade para IA e sem CLS | Content/A11y | — | Manter como padrão-casa. |

---

## Página 2 — Cases (`src/pages/cases.astro`)

| Achado | Categoria | Severidade | Correção sugerida (acionável) |
|---|---|---|---|
| Imagem do herói (`Bruno2podcast.webp`, `loading="eager"`) **sem `width`/`height` nem `aspect-ratio`** → layout shift ao carregar | Perf (CLS) | Média | Definir dimensões ou `aspect-ratio` no `<img>`. |
| `text-stone-500` (#78716c) em texto de corpo secundário fica **no limite do contraste AA** sobre paper | A11y | Média | Trocar pelos tokens `--text-muted`/cor mais escura. |
| `.ds-mono text-stone-400` (#a8a29e) em rótulos pequenos **reprova no contraste AA** | A11y | Média | Usar `--text-faint`/tom mais escuro para texto pequeno. |
| `--paper:#FAFAFA` diverge do token oficial (`--paper:#F5F5F7`); raios `24px`/`16px` fora da escala do DS | DS | Média | Alinhar paper e raios aos tokens. |
| `.ds-h1`/`.ds-h2` com `clamp()` próprio, diferente do global e da Home | DS/Awwwards | Média | Unificar escala tipográfica entre páginas. |
| Capas dos cases são **só ícones sobre fundo pontilhado** → leitura de placeholder; portfólio de agência vive de prova visual | Awwwards/Design | Média | Inserir mídia/preview real ou um tratamento "lista→detalhe" mais editorial (ver biblioteca §7). |
| Cards de "Outros trabalhos" **sem heading** (cliente vai num `<span>`) | A11y | Baixa | Promover o nome do cliente a `<h3>` para navegação por leitor de tela. |
| Ícones decorativos (`iconify-icon`) sem `aria-hidden` | A11y | Baixa | Marcar ícones puramente decorativos como `aria-hidden`. |
| **Forte:** `FAQPage` + `CollectionPage` + `BreadcrumbList` em JSON-LD, FAQ em `<details>` nativo (teclado OK) e respostas autocontidas | Content/A11y | — | Padrão GEO exemplar; replicar. |
| **Forte:** página leve (sem WebGL/vídeo), só Lenis + IntersectionObserver → base de Usability saudável | Perf | — | Manter como referência de "página pública performática". |

---

## Página 3 — GEO (`src/pages/geo.astro`) · diamante

| Achado | Categoria | Severidade | Correção sugerida (acionável) |
|---|---|---|---|
| Palavras `.accent-serif`/`.punch .hl` em `--accent-deep:#E0B420` **sobre fundo claro reprovam contraste** (≈1,8:1; AA grande pede ≥3:1) | A11y/DS | Alta | Usar `--yellow-700` (#8F710A) — o único amarelo legível sobre claro, já previsto no DS. |
| Herói WebGL (shader fBm 6 oitavas, full-screen) roda em rAF contínuo e **não pausa quando sai da viewport** | Perf | Alta | Pausar/retomar o loop via IntersectionObserver. |
| Dataviz da rede de citação roda rAF + `setInterval(spawn)` **sem pausar fora da tela** | Perf | Média | Pausar animação e spawn quando o gráfico não está visível. |
| `:root` redefinido: `--paper:#FAFAFA` diverge do token; raios `--radius-card:24px` fora da escala | DS | Média | Alinhar aos tokens; manter os `--geo-*` como paleta-assinatura documentada. |
| Escala tipográfica custom (h1/h2 em `clamp` próprio, sem usar `.ds-*`) | DS/Awwwards | Média | Unificar com a escala canônica (ou documentar a variação de diamante). |
| Texto branco do herói sobre áreas claras do shader (canto quente) — protegido pelo scrim à esquerda, mas em monitoramento | A11y | Baixa | Conferir piso de contraste nas regiões mais claras do shader. |
| Hover do gráfico é só mouse (sem equivalente teclado) | A11y | Baixa | Aceitável: `aria-label` + legenda já transmitem o conteúdo; manter. |
| **Forte:** canvas com `role="img"` + `aria-label` descritivo; fallback CSS quando não há WebGL | A11y | — | Excelente prática — replicar em toda dataviz. |
| **Forte:** conceito (herói generativo + rede de citação que ilustra a tese) é candidato real a Creativity/pitch | Awwwards | — | Tratar como momento-âncora; investir no polish, não em mais efeitos. |

---

## Página 4 — Reputação (`src/pages/reputacao.astro`) · diamante

| Achado | Categoria | Severidade | Correção sugerida (acionável) |
|---|---|---|---|
| `.accent-serif`/`.punch .hl` em `--accent-deep:#C99E1F` **sobre fundo claro reprovam contraste** (≈2,6:1; AA grande pede ≥3:1) | A11y/DS | Alta | Usar `--yellow-700` (#8F710A) nos textos de destaque sobre claro. |
| Herói WebGL (fBm 6 oitavas + loop de 4 brilhos por pixel) em rAF contínuo, **sem pausa fora da viewport** | Perf | Alta | Pausar/retomar via IntersectionObserver (shader é o mais pesado dos dois diamantes). |
| Dataviz dos três planos roda rAF contínuo **sem pausar fora da tela** | Perf | Média | Pausar quando o gráfico não está visível. |
| `--accent-deep:#C99E1F` aqui ≠ `#E0B420` nas outras 3 páginas → acento inconsistente no site | DS/Awwwards | Média | Padronizar o acento (ou justificar a variação fria como assinatura). |
| `:root` redefinido: `--paper:#FAFAFA` diverge do token; raios `24px` fora da escala | DS | Média | Alinhar aos tokens; manter `--rep-*` como paleta-assinatura documentada. |
| Escala tipográfica custom (igual à GEO, mas diferente de Home/Cases/global) | DS/Awwwards | Média | Unificar escala (bom: GEO e Reputação já compartilham entre si). |
| **Forte:** `prefers-reduced-motion` pinta UM quadro estático do shader e **não** mantém rAF (melhor que a Home) | Perf/A11y | — | Levar esse mesmo padrão para a Home. |
| **Forte:** paleta fria diferencia bem da GEO (quente) → bom pensamento de sistema entre as duas diamante | Design | — | Manter o par quente/fria como linguagem dos diamantes. |
| **Forte:** dataviz com `role="img"` + `aria-label`, barras de "consistência" ownáveis num pitch | A11y/Awwwards | — | Material de apresentação; investir no polish. |

---

## TOP 10 de maior impacto (mais nota por menos esforço)

Priorizado por retorno Awwwards/Usability dividido pelo esforço. Tag de onde aplicar.

### Seguro para páginas públicas (e que também vale nas diamante)

1. **Contraste das palavras de destaque** — trocar `--accent-deep` por `--yellow-700` (#8F710A) em todo texto amarelo sobre fundo claro (`.accent-serif`, `.punch .hl`, faixas `.fsec.light` da Home). *Esforço baixíssimo, impacto alto: tira uma reprovação de AA que o júri vê na hora.* Aplica em GEO, Reputação e Home.
2. **Pausar os loops de animação fora da viewport** — IntersectionObserver que para/retoma o rAF dos canvas/WebGL (Home `gravityField`; GEO herói+rede; Reputação herói+planos). *Esforço médio, impacto alto em Usability/bateria/mobile — é o "performance protegida" do mandato.*
3. **Home: respeitar `reduced-motion` no canvas** — congelar quadro e parar o rAF do `gravityField` quando reduced-motion (hoje ele redesenha sempre). *Baixo esforço, corrige a11y + bateria.* Padrão já existe na Reputação — copiar de lá.
4. **Home: herói de vídeo sem custo de LCP** — `preload="metadata"` + `poster` com o 1º frame; evita herói "vazio" e disputa com a primeira pintura. *Baixo esforço, impacto direto na primeira impressão (3s).*
5. **Unificar o Design System como lei** — parar de shadowar `:root` com valores divergentes (paper #FAFAFA vs #F5F5F7; raios 24/16/8 fora da escala; três `.ds-h1` diferentes; acento #E0B420 vs #C99E1F) e passar a consumir `tokens.css`. *Esforço médio, impacto alto na consistência — o critério que decide HM quando o júri abre várias páginas.*
6. **Cases: matar o CLS do herói** — `width`/`height` ou `aspect-ratio` na `Bruno2podcast.webp`. *Esforço baixíssimo, ganho direto de Core Web Vitals.*
7. **Cases: contraste do texto secundário** — trocar `text-stone-500/400` por `--text-muted`/`--text-faint` (ou tom mais escuro). *Baixo esforço, fecha reprovações de AA em texto pequeno.*
8. **Higiene de fontes no `global.css`** — remover `@import` de famílias não usadas (Inter ×6, Instrument Serif, Sofia Sans, PP Neue/Fragment) que ficam de resíduo. *Baixo esforço, limpa peso de CSS e manutenção (ganho de perf pequeno-médio).*

### Material de diamante (aposta alta controlada — GEO/Reputação)

9. **Os dois pré-requisitos para virar pitch:** itens **1** (contraste) e **2** (pausa de rAF) são bloqueadores de "nada quase pronto" — sem eles, a página não sobe de "boa" para "apresentável a cliente". *Tratar como gate antes de qualquer polish.*
10. **Elevar a dataviz a momento-âncora** — investir o esforço criativo no gráfico (rede de citação / três planos) como o "momento memorável" da página, com motion calibrado e 60fps garantido, em vez de empilhar novos efeitos. Para a **Cases**, o equivalente é substituir as capas-ícone por mídia/preview real ou um tratamento "lista→detalhe" editorial (biblioteca §7) — é o maior salto de Design da página pública, mas é o de maior esforço (depende de ter mídia de case).

> **Leitura final:** os 8 primeiros itens são polimento de baixo risco que eleva o piso das públicas
> sem aventura. Os itens 9–10 são onde mora a aposta alta das diamante — mas a aposta só compensa
> depois de fechar contraste e performance, que são baratos e obrigatórios.
