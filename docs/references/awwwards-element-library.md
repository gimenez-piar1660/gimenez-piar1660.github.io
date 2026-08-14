# Biblioteca de Elementos PiaR — "Roube como artista"

> **O que é este doc:** uma curadoria de padrões de interface de sites premiados (Awwwards e
> similares), traduzidos em instruções concretas de como adaptá-los ao **Design System PiaR**.
> Não é um catálogo para clonar pixel a pixel — é um banco de **ideias e princípios** para roubar
> com inteligência. "Roubar como artista" = pegar a IDEIA que faz o padrão funcionar, recriar com
> os NOSSOS tokens (cor, tipo, espaço, motion) e SEMPRE atribuir a fonte original.
>
> **Stack-alvo:** Astro 5 + Tailwind 3, dentro do Design System (`src/styles/tokens.css`).
> **Fontes oficiais PiaR:** Montserrat (display/headlines, `--font-display`) + Open Sans (corpo, `--font-sans`).
> **Posicionamento:** agência de PR/comunicação B2B premium — não e-commerce. Elegância editorial,
> seriedade, performance. Nada de "loja com glitter".
>
> **Régua do júri (do [[reference_awwwards_playbook]]):** Design 40% · Usability 30% · Creativity 20%
> · Content 10%. Honorable Mention = nota ≥ 6.5. 70% da nota é Design + Usability: beleza sem
> performance não vira prêmio.
>
> **Data:** 2026-06-27 · **Mantido por:** Seraphin · **Para:** Danilo (PiaR).

---

## Como usar esta biblioteca

1. **Antes de desenhar uma página**, leia a categoria correspondente e escolha 1–2 padrões que
   sirvam à intenção da página (não empilhe efeitos — o júri pune "muita coisa").
2. **Leia o campo *Como adaptar ao DS PiaR*** — ele já traduz o padrão para nossos tokens e fontes.
   Nunca importe o CSS do site original; reconstrua com o nosso esqueleto.
3. **Respeite o selo de segurança** de cada padrão:
   - 🟢 **Seguro p/ página pública** — leve, performático, acessível. Pode entrar em qualquer página.
   - 🟡 **Usar com disciplina** — exige cuidado de performance/mobile/fallback.
   - 🔴 **Material de página-diamante** — WebGL/3D pesado. Reservado para 1–2 páginas-vitrine com
     fallback obrigatório e `prefers-reduced-motion`. Nunca em página de conteúdo denso.
4. **Toda copy** que acompanhar esses padrões segue o fluxo normal: proposta → sign-off do Danilo
   (ver [[feedback_copy_em_fluxo]]). Esta biblioteca cuida de estrutura e visual, não de texto final.

---

## 1. Primeira dobra / heróis (hero treatments)

### Hero tipográfico de tela cheia (type-as-hero)
- *O que é:* a primeira dobra é dominada por uma manchete gigante. O tipo É a imagem. Pouco ou nenhum
  elemento gráfico competindo — só hierarquia, respiro e uma linha de tensão.
- *Exemplar(es):* [Obys Agency](https://obys.agency/) (tipografia como sistema central);
  [Noomo Agency](https://noomoagency.com/) (hero editorial confiante).
- *Por que ganha:* carrega **Design (40%)** e **Creativity (20%)** ao mesmo tempo, com custo de
  performance quase zero. É o caminho de maior retorno para um site editorial como o da PiaR.
- *Como adaptar ao DS PiaR:* use `.ds-display` (Montserrat 700, `clamp(4rem, 12vw, 11rem)`, `line-height
  .88`) sobre `--paper`, com 1 palavra-chave em `--yellow` ou em `.italic-serif` para quebrar o ritmo.
  Subtítulo em `.ds-body-lg` (Open Sans) com `--text-muted`. Largura do bloco em `--col-base`/`--col-wide`.
  🟢 Seguro p/ página pública.

### Hero com revelação cinematográfica no scroll (scroll-morph)
- *O que é:* a primeira dobra começa "respirando" e, ao primeiro gesto de scroll, a manchete encolhe,
  o subtítulo aparece e o conteúdo se reorganiza — uma transição emocional, não um corte seco.
- *Exemplar(es):* [OFF+BRAND — site do Lando Norris](https://www.awwwards.com/) (SOTY 2025, sequências
  de scroll cinematográficas); Jeton (fintech, hero com movimento ao scroll que virou SOTD — referência
  B2B séria).
- *Por que ganha:* **Creativity + Usability** quando o ritmo é calibrado. Cria antecipação e dá a
  sensação de "produto vivo". Vira armadilha se travar em mobile.
- *Como adaptar ao DS PiaR:* anime só `transform` e `opacity` (nunca `top/height`) com `--ease-emphasis`
  e `--dur-slow`. Amarre ao IntersectionObserver/scroll-progress já usado nas páginas. Sempre com
  `prefers-reduced-motion` desligando o efeito. 🟡 Usar com disciplina (mede FPS em mobile).

### Hero dividido (split editorial: manchete | prova)
- *O que é:* primeira dobra em duas zonas — manchete/posicionamento de um lado, prova viva do outro
  (um case em destaque, um número, um logo de cliente). Vende valor e credibilidade no mesmo gesto.
- *Exemplar(es):* [Heartbeat Agency](https://www.awwwards.com/case-study-heartbeat-agency-portfolio.html)
  (foco na proposta de valor antes de qualquer firula); portfólios de agência em geral na
  [coleção Agency Portfolios](https://www.awwwards.com/awwwards/collections/agency-portfolios/).
- *Por que ganha:* **Design + Content** — junta estética e substância (prova) na dobra que mais decide.
- *Como adaptar ao DS PiaR:* grid de 2 colunas dentro de `--col-wide`, dividido por `--hairline`.
  Manchete em `.ds-h1`, número/prova em `.ds-display` com `--yellow` ou em card `--white` com
  `--shadow-md` e `--r-lg`. 🟢 Seguro p/ página pública (ótimo para Home e páginas de serviço).

---

## 2. Sistemas tipográficos (escala, contraste, tipografia como imagem)

### Tipografia cinética (kinetic type que reage ao scroll/hover)
- *O que é:* letras e palavras que escalam, se dividem, deslizam ou trocam de peso conforme o usuário
  rola ou passa o mouse. O texto vira movimento.
- *Exemplar(es):* [Obys Agency](https://obys.agency/) (referência canônica de "tipo é o design");
  estúdios recorrentes na [coleção de tipografia do Awwwards](https://www.awwwards.com/websites/typography/).
- *Por que ganha:* **Creativity (20%) + Design (40%)** com baixo custo. Tendência forte de 2025/26:
  variable fonts animando peso/largura.
- *Como adaptar ao DS PiaR:* Montserrat tem pesos 300→800 já carregados (`@fontsource`). Anime peso no
  hover de manchetes-âncora (300→700) com `--dur-base`/`--ease-standard`. Para "split + reveal", quebre
  a manchete em `<span>` por palavra e use o padrão `.reveal` com `delay-100/200/300`. 🟢 Seguro
  (versão hover/reveal); 🟡 se for scroll-scrubbing pesado.

### Contraste editorial display × serifa itálica
- *O que é:* manchete sans-serif forte e geométrica, "interrompida" por uma palavra em serifa itálica —
  cria voz, ritmo e um toque humano/editorial no meio do rigor.
- *Exemplar(es):* padrão recorrente em portfólios editoriais premiados (ver
  [Sites of the Year](https://www.awwwards.com/websites/sites_of_the_year/)); a dupla "geométrica +
  itálica" é assinatura de estúdios de branding premium.
- *Por que ganha:* **Design + Content** — dá personalidade de marca sem poluir. Sinaliza maturidade
  editorial, exatamente o tom da PiaR.
- *Como adaptar ao DS PiaR:* já existe no DS: combine Montserrat (`.ds-h1/.ds-h2`) com `.italic-serif`
  (Montserrat itálico 400). Use a itálica em 1 palavra-chave conceitual por manchete — nunca em frase
  inteira. 🟢 Seguro p/ página pública.

### Escala tipográfica fluida com grid de hairlines
- *O que é:* hierarquia editorial rígida (manchete → lede → corpo) sobre um grid de linhas finas que
  organiza a página como uma revista. Respiro generoso é parte do design.
- *Exemplar(es):* portfólios de estúdio como [-99 Design Studio](https://www.awwwards.com/99-design-studio.html)
  (SOTD + Developer Award, grid consistente entre breakpoints).
- *Por que ganha:* **Design (40%)** puro — alinhamento impecável é o que separa 6.4 de 6.8 no júri.
- *Como adaptar ao DS PiaR:* use a escala `.ds-display/.ds-h1.../.ds-body` (todas com `clamp()` fluido)
  e desenhe divisórias com `--hairline`/`--hairline-strong`. Larguras em `--col-narrow` (texto longo) e
  `--col-wide` (seções). Espaços sempre da escala `--s-*`. 🟢 Seguro p/ página pública.

---

## 3. Cor, textura e grão

### Monocromático + único acento (single pop of color)
- *O que é:* paleta quase toda em uma família neutra, com UM acento usado cirurgicamente para guiar o
  olho (CTA, dado, palavra-chave). Tendência dominante 2025/26: "minimalismo com um pop".
- *Exemplar(es):* portfólios de estúdio em geral (ver [Sites of the Day](https://www.awwwards.com/websites/sites_of_the_day/));
  o princípio é codificado em guias de tendência de cor 2025/26.
- *Por que ganha:* **Design (40%)** — paleta disciplinada lê como sofisticação. É literalmente o DNA
  do DS PiaR (ink + paper + um amarelo).
- *Como adaptar ao DS PiaR:* já é nativo. `--ink` + `--paper` como base; `--yellow` SÓ como acento de
  UI (CTA, sublinhado, dado-chave) — nunca como decoração de fundo grande. Para texto amarelo legível
  sobre claro, use `--yellow-700`. 🟢 Seguro p/ página pública (é a lei do DS).

### Grão/ruído sutil sobre superfícies (texture overlay)
- *O que é:* uma camada de grão a 8–15% de opacidade sobre fundos chapados. Tira o "perfeito demais"
  digital e dá calor/tatilidade — antídoto contra o visual de IA "liso".
- *Exemplar(es):* tendência forte confirmada em guias 2025/26 (grão a 10–15% sobre base monocromática);
  comum em heróis de estúdios de design e sites editoriais premium.
- *Por que ganha:* **Design + Creativity** — acabamento que comunica intenção e artesania.
- *Como adaptar ao DS PiaR:* SVG de ruído (`feTurbulence`) ou PNG leve em `::after` com
  `mix-blend-mode: overlay` e `opacity: .08–.12` sobre seções `--ink`. Custo de performance baixo
  (1 textura cacheável). Desligar sob `prefers-reduced-motion` não é necessário (é estático), mas
  manter contraste AA do texto por cima. 🟢 Seguro p/ página pública.

### Seções de respiro em alto contraste (dark drama section)
- *O que é:* alternância proposital entre seções claras (`--paper`) e uma seção dramática escura
  (`--ink`) para criar pausa, foco e teatralidade num ponto-chave da narrativa.
- *Exemplar(es):* padrão recorrente em sites de agência premiados (ex.: transições de paleta
  cinematográficas citadas em coleções de [transitions](https://www.awwwards.com/websites/transitions/)).
- *Por que ganha:* **Design + Creativity** — ritmo visual. A página "respira" e o momento escuro vira
  âncora de memória.
- *Como adaptar ao DS PiaR:* o DS já tem o par de tokens claro/escuro (`--text-primary-d`,
  `--hairline-d`, etc.). Em seção `--ink`, troque para os tokens `*-d`. Use o amarelo com ainda mais
  parcimônia no escuro (ele "grita" mais). 🟢 Seguro p/ página pública.

---

## 4. Navegação (menus, mega-menu, drawer, sticky)

### Header sticky que se condensa no scroll (shrink-on-scroll)
- *O que é:* nav transparente sobre o hero que, ao rolar, ganha fundo, encolhe e fixa — sempre
  acessível sem roubar espaço.
- *Exemplar(es):* padrão quase universal entre SOTD recentes; navbars transparentes que "solidificam"
  no scroll aparecem em destaques de hero 2025.
- *Por que ganha:* **Usability (30%)** — orientação constante, zero fricção. O usuário sempre sabe onde está.
- *Como adaptar ao DS PiaR:* transição de `background`/`padding`/`box-shadow` com `--dur-base` +
  `--ease-standard`; estado fixo com `--white` + `--shadow-sm` + `--hairline`. Z-index `--z-sticky`.
  Já temos o `Nav.astro` — estender ele, não recriar. 🟢 Seguro p/ página pública.

### Menu overlay de tela cheia (fullscreen nav)
- *O que é:* clique no menu abre um painel que toma a tela inteira, com poucos links em tipo grande,
  revelados em sequência (stagger). Vira um momento de marca, não só uma lista.
- *Exemplar(es):* [coleção Menu do Awwwards](https://www.awwwards.com/awwwards/collections/menu/);
  exemplos como Departures International e Red Collar (overlay fullscreen com animação de entrada).
- *Por que ganha:* **Creativity + Design** — transforma navegação em experiência memorável.
- *Como adaptar ao DS PiaR:* overlay `--ink` em `--z-overlay`, links em `.ds-h2`/`.ds-h3` (Montserrat)
  com `.reveal` + `delay-*` em cascata. Foco preso (focus trap) e fechar com `Esc` para acessibilidade.
  Magnetic hover opcional (ver §6). 🟢 Seguro (com foco/teclado corretos).

### Mega-menu editorial (para arquitetura de serviços)
- *O que é:* dropdown amplo que organiza muitos itens (serviços, setores, insights) em colunas com
  títulos, descrições curtas e talvez 1 item em destaque com thumbnail.
- *Exemplar(es):* [Mega Menu — 1place](https://www.awwwards.com/inspiration/mega-menu-1place);
  [Apose](https://www.awwwards.com/inspiration/apose-menu).
- *Por que ganha:* **Usability + Content** — escala bem para um site com muitos serviços/páginas
  (caso direto da PiaR, que tem dezenas de páginas de serviço).
- *Como adaptar ao DS PiaR:* painel `--white` com `--shadow-lg` e `--r-lg`, colunas separadas por
  `--hairline`. Títulos em `.ds-h4`, descrições em `.ds-body-sm` `--text-muted`, rótulos em `.ds-caption`.
  Abrir com `--dur-fast`. Navegável por teclado. 🟢 Seguro p/ página pública.

---

## 5. Scroll & motion (scrollytelling, parallax com propósito, pinning)

### Seção fixada com conteúdo que avança (pinning / sticky steps)
- *O que é:* um bloco fica "preso" na viewport enquanto o conteúdo ao lado/sobre ele avança em passos
  — ideal para explicar um método ou processo em etapas.
- *Exemplar(es):* padrão GSAP ScrollTrigger + Locomotive/Lenis amplamente usado em SOTD; ver
  [coleção de scrollytelling/transitions](https://www.awwwards.com/websites/transitions/).
- *Por que ganha:* **Creativity + Usability** — narrativa guiada que prende sem confundir. Perfeito
  para a página de Método/Processos.
- *Como adaptar ao DS PiaR:* `position: sticky` (CSS puro, sem lib) para a coluna fixa; passos entram
  com `.reveal`. Para scrubbing fino, GSAP ScrollTrigger é aceitável, mas sempre com fallback estático
  e `prefers-reduced-motion`. Easings `--ease-emphasis`. 🟡 Usar com disciplina (testar mobile: pinning
  é onde mais trava).

### Reveal progressivo por scroll (stagger-on-enter)
- *O que é:* elementos entram com fade + leve subida conforme aparecem na viewport, em cascata. O
  clássico "site que se monta enquanto você desce".
- *Exemplar(es):* onipresente em vencedores; é a base de quase todo SOTD bem-acabado.
- *Por que ganha:* **Design + Usability** — ritmo e sofisticação com custo baixíssimo.
- *Como adaptar ao DS PiaR:* **já existe no DS** — classe `.reveal` (`opacity 0` + `translateY(2rem)`,
  `--t-smooth`) pareada com IntersectionObserver, mais `.delay-100/200/300/400`. É o padrão-casa.
  🟢 Seguro p/ página pública (default recomendado).

### Parallax de profundidade discreto (depth parallax)
- *O que é:* camadas se movem em velocidades levemente diferentes ao rolar, criando profundidade —
  sutil, não "site de feira".
- *Exemplar(es):* recorrente em heróis editoriais premiados; comum nas coleções de hero do Awwwards.
- *Por que ganha:* **Creativity** quando contido; **destrói Usability** se exagerado ou se causar jank.
- *Como adaptar ao DS PiaR:* deslocamentos pequenos (máx ~8–12% da altura) só em `transform: translateY`,
  via `requestAnimationFrame` ou `scroll-timeline` CSS. Desligar sob `prefers-reduced-motion`. Nunca em
  texto de leitura. 🟡 Usar com disciplina.

---

## 6. Microinterações & cursor (hover states, cursor custom, magnetic buttons)

### Botão magnético (magnetic CTA)
- *O que é:* o botão "puxa" levemente em direção ao cursor quando ele se aproxima, com física elástica.
  Sensação tátil e satisfatória — chama atenção sem piscar.
- *Exemplar(es):* [Obys Agency](https://obys.agency/) (cursor/botão magnético com elasticidade suave);
  [Cuberto](https://cuberto.com/) (referência de microinteração e cursor).
- *Por que ganha:* **Design + Usability** somados no detalhe. Barato, altíssimo retorno de percepção.
- *Como adaptar ao DS PiaR:* aplicar só no CTA primário (`--yellow`/`--ink`) e em itens do menu
  fullscreen. Deslocamento sutil (`translate` ≤ 6–8px) com `--ease-spring` + `--dur-fast`. Botão com
  `--radius-btn`. Desligar sob `prefers-reduced-motion` e em touch. 🟢 Seguro (com parcimônia).

### Cursor customizado contextual
- *O que é:* o cursor padrão vira um ponto/círculo que muda de estado por contexto ("arraste", "veja o
  case", "play") — vira fio condutor da experiência.
- *Exemplar(es):* [Cuberto](https://cuberto.com/); ver curadoria de
  [cursores customizados (Orpetron)](https://orpetron.com/blog/breaking-barriers-with-innovative-custom-cursor-designs/).
- *Por que ganha:* **Creativity (20%)** — fator "nunca vi isso aqui". Risco: prejudica acessibilidade
  se esconder o cursor nativo sem necessidade.
- *Como adaptar ao DS PiaR:* círculo de `--ink` (ou `--yellow` em seção escura) que segue o mouse com
  lerp suave; cresce no hover de links e mostra rótulo `.ds-caption` em áreas de case. **Sempre manter
  o cursor nativo visível** (acessibilidade) e desativar em touch/`prefers-reduced-motion`. 🟡 Usar com
  disciplina (melhor reservar para páginas-vitrine).

### Hover ricos em links e cards (underline reveal, image peek)
- *O que é:* links com sublinhado que cresce da esquerda; cards que elevam, revelam imagem ou trocam
  cor de fundo no hover. O "polimento" que separa amador de premiado.
- *Exemplar(es):* padrão universal entre [Sites of the Day](https://www.awwwards.com/websites/sites_of_the_day/);
  refinamento de detalhe é o que o Developer Award recompensa.
- *Por que ganha:* **Design + Usability** — feedback claro e acabamento consistente.
- *Como adaptar ao DS PiaR:* sublinhado via `background-size` animando 0→100% em `--dur-base`; card
  com `--shadow-sm`→`--shadow-md` e `translateY(-4px)` no hover. Acento `--yellow` no estado ativo.
  Tudo com easings do DS. 🟢 Seguro p/ página pública.

---

## 7. Layouts de case/portfólio (provas/resultados com elegância)

### Índice de cases tipográfico (list-to-detail)
- *O que é:* lista enxuta de cases (nome do cliente + setor + 1 resultado), onde o hover revela uma
  thumbnail/preview. Clica → abre o case completo. Menos é mais.
- *Exemplar(es):* [-99 Design Studio](https://www.awwwards.com/99-design-studio.html);
  [coleção de portfólios](https://www.awwwards.com/websites/portfolio/).
- *Por que ganha:* **Design + Content** — mostra volume de trabalho com elegância e deixa a prova falar.
- *Como adaptar ao DS PiaR:* linhas separadas por `--hairline`, nome em `.ds-h3` (Montserrat), setor em
  `.ds-caption`, resultado em `.ds-body` com número em `--yellow-700`. Preview no hover via opacity +
  `--shadow-lg`. 🟢 Seguro p/ página pública (ideal para /cases).

### Case com prova revelada progressivamente (proof reveal)
- *O que é:* o estudo de caso desenrola desafio → o que fizemos → resultado, com os números entrando
  em destaque conforme o scroll. Antes/depois, métricas, citação do cliente.
- *Exemplar(es):* [Heartbeat Agency — "Customer Story"](https://www.awwwards.com/case-study-heartbeat-agency-portfolio.html)
  (case como diálogo agência↔cliente, com animação por scroll).
- *Por que ganha:* **Content (10%) + Creativity** — para agência, o case é onde se PROVA competência
  em vez de afirmá-la. Casa direto com a doutrina GEO (blocos de dados citáveis).
- *Como adaptar ao DS PiaR:* números grandes em `.ds-display`/`.ds-h1` com `.reveal`; rótulo de métrica
  em `.ds-caption` `--text-muted`. Citação do cliente em `.italic-serif`. Blocos de dado autocontidos
  (bom para IA citar). 🟢 Seguro p/ página pública.

### Grid de trabalho assimétrico (editorial masonry)
- *O que é:* grade de cases com cards de tamanhos variados (um destaque maior, outros menores), criando
  ritmo de revista em vez de grade monótona.
- *Exemplar(es):* [coleção Agency Portfolios](https://www.awwwards.com/awwwards/collections/agency-portfolios/).
- *Por que ganha:* **Design (40%)** — hierarquia visual que indica o que importa mais.
- *Como adaptar ao DS PiaR:* CSS Grid com spans variáveis dentro de `--col-max`; cards `--white` com
  `--r-lg` e `--shadow-sm`. Gaps da escala `--s-5/--s-6`. Manter alinhamento impecável (o júri vê
  "quase alinhado"). 🟢 Seguro p/ página pública.

---

## 8. Transições & revelações de página (page reveals, view transitions)

### Loader/reveal de marca na entrada (intro reveal)
- *O que é:* uma cortina ou contador rápido (≤ 1–1.5s) que revela o site com a marca, dando a sensação
  de "produto premium carregando". Curto, nunca chato.
- *Exemplar(es):* [Heartbeat Agency](https://www.awwwards.com/case-study-heartbeat-agency-portfolio.html)
  (loader "front-like" antes do portfólio); padrão comum em SOTD.
- *Por que ganha:* **Creativity + Design** — primeira impressão controlada. Risco: atrasar o conteúdo
  (mata Usability/Core Web Vitals) se for longo.
- *Como adaptar ao DS PiaR:* cortina `--ink` que sobe com `--ease-emphasis`/`--dur-slow`, revelando
  `--paper`. Mostrar só na 1ª visita (sessionStorage). Conteúdo já no DOM por baixo (não bloquear LCP).
  Pular sob `prefers-reduced-motion`. 🟡 Usar com disciplina (curto e só na home).

### Transição entre páginas com cortina/morph (page transition)
- *O que é:* navegar entre páginas não dá "flash branco" — uma cortina ou fade conduz a troca, mantendo
  continuidade cinematográfica.
- *Exemplar(es):* [curadoria de page transitions (Orpetron)](https://orpetron.com/blog/10-award-winning-websites-mastering-the-art-of-page-transitions/);
  [coleção Transitions do Awwwards](https://www.awwwards.com/websites/transitions/).
- *Por que ganha:* **Usability + Creativity** — fluxo sem interrupção é assinatura de site premiado.
- *Como adaptar ao DS PiaR:* usar **Astro View Transitions** (nativo, `<ClientRouter />`) com uma
  cortina `--ink` simples ou crossfade. Leve e progressivo (degrada para navegação normal). Respeitar
  `prefers-reduced-motion`. 🟢 Seguro p/ página pública (View Transitions é barato e nativo do Astro 5).

### Elemento compartilhado entre páginas (shared element transition)
- *O que é:* um elemento (thumbnail do case, título) "voa" da listagem para a página de detalhe,
  mantendo continuidade visual.
- *Exemplar(es):* exemplos práticos de View Transitions API (ver
  [Piccalilli](https://piccalil.li/blog/some-practical-examples-of-view-transitions-to-elevate-your-ui/));
  comum em portfólios premiados list→detail.
- *Por que ganha:* **Creativity + Usability** — sofisticação que reforça a relação entre conteúdos.
- *Como adaptar ao DS PiaR:* `transition:name` (CSS View Transitions) ligando o card de /cases ao hero
  do case. Astro 5 suporta nativamente. Fallback = fade simples. 🟡 Usar com disciplina (testar suporte
  cross-browser; degradar graciosamente).

---

## 9. Momentos WebGL/3D (páginas-diamante)

> ⚠️ **Regra-mãe desta seção:** WebGL é o maior gerador de Creativity E o maior risco de performance.
> Para B2B sério, é material de **página-diamante** (1–2 páginas-vitrine), nunca em página de conteúdo.
> Sempre com fallback estático e `prefers-reduced-motion`. Não é pré-requisito de HM — é aposta de SOTD.

### Objeto 3D interativo (hero 3D girável)
- *O que é:* um objeto 3D no browser que o usuário gira/explora, tornando uma ideia tangível (não um
  truque). No caso da PiaR, poderia materializar um conceito de marca/reputação.
- *Exemplar(es):* [OFF+BRAND — Lando Norris](https://www.awwwards.com/) (capacete 3D rotativo);
  [Bruno Simon](https://bruno-simon.com/) (extremo de WebGL navegável, Three.js + física).
- *Por que ganha:* **Creativity (20%)** no máximo; pode ser o diferencial de SOTD e a porta do
  Developer Award (>7).
- *Como adaptar ao DS PiaR:* Three.js com materiais discretos na paleta `--ink`/`--paper`/`--yellow`
  (nada de arco-íris). Carregar sob demanda (lazy + `loading` skeleton). **Fallback:** imagem estática
  renderizada do mesmo objeto. 🔴 Página-diamante.

### Fundo shader/partículas reativo
- *O que é:* um fundo gerado por shader (fluido, ruído, partículas) que reage sutilmente ao mouse/scroll
  — atmosfera, não distração.
- *Exemplar(es):* [Active Theory](https://activetheory.net/), [Resn](https://resn.co.nz/),
  [Lusion](https://lusion.co/), [Immersive Garden](https://immersive-g.com/) (padrão-ouro de WebGL com
  disciplina de performance).
- *Por que ganha:* **Creativity + Design** — sofisticação atmosférica memorável.
- *Como adaptar ao DS PiaR:* shader monocromático na paleta da marca, baixa densidade de partículas,
  cap de FPS e pausa quando fora da viewport. **Fallback:** gradiente/grão estático (ver §3).
  🔴 Página-diamante (com fallback obrigatório).

### Galeria/cena navegável (immersive scene)
- *O que é:* uma cena 3D que o usuário percorre como um espaço — para uma página-manifesto ou um
  "tour" do método/posicionamento.
- *Exemplar(es):* [Merci-Michel](https://www.merci-michel.com/), Little Workshop (Equinox),
  Jordan Breton (FWA SOTD 2025) — cenas WebGL premiadas.
- *Por que ganha:* **Creativity** no extremo; forte candidato a SOTD/FWA.
- *Como adaptar ao DS PiaR:* só se houver narrativa real para justificar (não 3D por 3D). Orçamento de
  performance rígido, pré-load progressivo, **rota alternativa 2D** para mobile e reduced-motion.
  🔴 Página-diamante (a mais cara — reservar para um único momento-âncora do site).

---

## 10. Rodapé & contato (CTA final memorável)

### Rodapé-manifesto com CTA gigante
- *O que é:* o rodapé ocupa quase a tela inteira com um convite em tipo gigante ("Vamos conversar",
  um e-mail enorme) — a última impressão é tão forte quanto a primeira.
- *Exemplar(es):* Antinomy (rodapé preto com "Mail" em tipo enorme); GenRevv/Lunchbox (rodapés que
  tomam a tela com CTA dominante — ver curadorias de footer 2025/26).
- *Por que ganha:* **Design + Content** — fecha a narrativa e converte. O júri lembra do último gesto.
- *Como adaptar ao DS PiaR:* seção `--ink` full-height, CTA em `.ds-display`/`.ds-h1` (Montserrat) com
  o e-mail/ação em `--yellow` ou `.italic-serif`. Tokens escuros (`--text-*-d`). Hover magnético no CTA
  (§6). 🟢 Seguro p/ página pública.

### Rodapé editorial em colunas com prova
- *O que é:* rodapé organizado como índice (mapa do site, contato, redes) mais um bloco de credibilidade
  (prêmios, certificações, "como citar a PiaR").
- *Exemplar(es):* padrão de agências premiadas — exibir prêmios/credenciais no rodapé eleva confiança
  (recorrente em curadorias de footer de agência).
- *Por que ganha:* **Usability + Content** — navegação completa + sinais de autoridade (ótimo para GEO:
  bloco de credenciais é citável por IA).
- *Como adaptar ao DS PiaR:* grid de colunas separadas por `--hairline-d`, títulos em `.ds-caption`,
  links em `.ds-body-sm`. Bloco de prova/credenciais em card `--ink-soft` com `--r-md`. 🟢 Seguro p/
  página pública.

### Linha de contato viva (interactive contact row)
- *O que é:* uma linha de contato que reage — e-mail que copia ao clicar com microfeedback, horário
  local atualizando, status "disponível para projetos". Detalhe humano que encanta.
- *Exemplar(es):* recorrente em portfólios de estúdio premiados (microcopy + microinteração no contato).
- *Por que ganha:* **Creativity + Usability** — acabamento que demonstra cuidado.
- *Como adaptar ao DS PiaR:* "copiar e-mail" com toast usando `--z-toast`, microfeedback em `--dur-fast`.
  Relógio/horário em `.ds-mono`. Integra com o `Web3Forms` já existente (ver [[feedback_contato_web3forms]]).
  🟢 Seguro p/ página pública.

---

## Como expandir esta biblioteca

Esta é uma v1 viva. Sempre que encontrar um site premiado (Awwwards SOTD/SOTM, FWA, Orpetron, ou um
estúdio de referência) com um padrão que ainda não está aqui, adicione uma entrada na categoria certa
seguindo o formato fixo (**Nome → O que é → Exemplar(es) com link → Por que ganha (critério do júri) →
Como adaptar ao DS PiaR com nossos tokens/fontes → selo de segurança 🟢/🟡/🔴**). Verifique o exemplar
ao vivo antes de citar (sites de premiação saem do ar) e sempre atribua a fonte — roubamos a IDEIA,
nunca o pixel. Quando um padrão for usado de fato numa página da PiaR, anote ao lado qual página o
adotou, para virar memória institucional e acelerar as próximas decisões.

---

## Fontes / links consultados
- Awwwards — Sites of the Day: https://www.awwwards.com/websites/sites_of_the_day/
- Awwwards — Sites of the Year: https://www.awwwards.com/websites/sites_of_the_year/
- Awwwards — Portfolios: https://www.awwwards.com/websites/portfolio/
- Awwwards — Agency Portfolios (coleção): https://www.awwwards.com/awwwards/collections/agency-portfolios/
- Awwwards — Menu (coleção): https://www.awwwards.com/awwwards/collections/menu/
- Awwwards — Transitions: https://www.awwwards.com/websites/transitions/
- Awwwards — Three.js / WebGL: https://www.awwwards.com/websites/three-js/
- Awwwards — Case study: Heartbeat Agency: https://www.awwwards.com/case-study-heartbeat-agency-portfolio.html
- Awwwards — Case study: -99 Design Studio: https://www.awwwards.com/99-design-studio.html
- Orpetron — Page transitions: https://orpetron.com/blog/10-award-winning-websites-mastering-the-art-of-page-transitions/
- Orpetron — Custom cursors: https://orpetron.com/blog/breaking-barriers-with-innovative-custom-cursor-designs/
- Piccalilli — View transitions na prática: https://piccalil.li/blog/some-practical-examples-of-view-transitions-to-elevate-your-ui/
- Estúdios de referência: Obys (obys.agency), Cuberto (cuberto.com), Bruno Simon (bruno-simon.com),
  Active Theory (activetheory.net), Resn (resn.co.nz), Lusion (lusion.co), Immersive Garden (immersive-g.com),
  Noomo Agency (noomoagency.com), Merci-Michel (merci-michel.com).
