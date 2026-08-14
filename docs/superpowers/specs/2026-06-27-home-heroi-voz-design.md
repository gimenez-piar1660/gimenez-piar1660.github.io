# Spec de Design — Herói da Home "Damos voz à sua marca"

**Data:** 2026-06-27 · **Autor:** Seraphin (com Danilo) · **Status:** aprovado para spec → plano
**Página:** `src/pages/index.astro` (Home — vitrine #1)
**Baseline de restauração:** tag `v0.1.0-foundation` (commit `12a6918`)

---

## 1. Propósito e contexto

A Home é a vitrine #1 da PiaR e o multiplicador de percepção de preço (norte de negócio: qualidade nível Awwwards sustenta cobrar mais — ver `project_excellence_strategy`). Este spec cobre **a reconstrução de UMA seção: o herói** (`#narrative-hero`). O resto da Home permanece intacto nesta etapa.

Critérios Awwwards relevantes: Design 40% · Usability 30% · Creativity 20% · Content 10%. O herói mira Creativity (momento memorável) sem sacrificar Usability (performance/acessibilidade) — regra do Danilo: **Home é página pública = impressionante, porém equilibrada** (WebGL pesado fica nas páginas-diamante, não aqui).

## 2. Conceito (aprovado)

**"Damos voz à sua marca."** Estética Apple: o simples é lindo — fundo **branco que transiciona para o preto nobre** ao rolar, com muito respiro e tipografia cinética. A **gravidade** (motivo já existente na casa) vira a *linguagem de movimento*: a gravidade da marca puxa **fragmentos de mídia dispersos no ruído** (nomes de veículos, aspas, trecho de busca, card de "resposta de IA") até virarem **uma voz só** — materializada por um **microfone que desliza em direção ao espectador**, com o amarelo PiaR acendendo nele contra o preto. Evolui o motivo "A voz / microfone amarelo" que já existe na Home.

## 3. Experiência — os 4 beats (coreografia dirigida por scroll)

Herói **pinado**: a tela "trava" (`position: sticky`, 100vh) enquanto um trilho de ~400–500vh converte o progresso de scroll em uma linha do tempo 0→1.

1. **Branco / calma (0 → .25):** fundo branco; linha de abertura em tipografia cinética; ao redor, fragmentos de mídia fracos e dispersos com parallax sutil (o "ruído").
2. **Atração (.25 → .6):** o fundo escurece (branco → preto nobre, interpolado); a gravidade puxa os fragmentos para o centro; o microfone começa a deslizar em direção ao espectador (escala + translação = profundidade).
3. **Voz / preto (.6 → .85):** fundo preto; o microfone chega à frente; o **amarelo PiaR acende** nele; os fragmentos colapsam em "uma voz só".
4. **Clímax + saída (.85 → 1):** a frase central resolve + CTA; o herói "solta" e entrega para o resto da Home (o marquee de clientes que já existe).

## 4. Arquitetura e componentes

Manter o padrão da casa (herói específico da página dentro de `index.astro`), porém em um bloco bem delimitado e organizado. Unidades de responsabilidade única:

- **Markup semântico do herói** — `<section id="narrative-hero">` com `.hero-sticky`. Contém o conteúdo REAL: um `<h1>` (promessa central), `<p>` de apoio, os fragmentos de mídia como elementos de texto reais, o CTA, e o SVG do microfone. É a fonte de verdade do conteúdo (rastreável).
- **Microfone** — ativo **SVG** vetorial inline (nítido, leve, colorível via `--yellow`/`currentColor`). `aria-hidden` (decorativo; a mensagem está no texto).
- **Linha do tempo de scroll** — script client-side com **GSAP + ScrollTrigger** (já são dependências). Mapeia o progresso (0→1) para: cor de fundo, transform do microfone, posição/opacidade dos fragmentos e revelação das letras. Usa SOMENTE `transform`/`opacity`/cor (amigável à GPU). É a única peça "imperativa".
- **Campo ambiente** — reaproveitar o `gravityField` (canvas 2D já existente, usado como fundo das faixas claras) como textura discreta do herói. **Sem WebGL pesado.** Mantém os padrões já implementados: pausa fora da viewport (IntersectionObserver) e congelamento em `prefers-reduced-motion`.
- **Dados dos fragmentos** — um array simples `[{ tipo, texto }]` (ex.: veículo, aspa, busca, resposta-IA) renderizado como DOM. Conteúdo placeholder plausível; textos finais entram como copy (ver §7).

O herói atual (cartões de vidro em 4 fases + vídeo) é **substituído** por esta estrutura. O `<video id="hero-video">` é **aposentado** (troca por campo leve + SVG = mais rápido); confirmar que nenhum outro trecho depende dele.

## 5. SEO / GEO (rastreável de verdade)

- A mensagem inteira vive em **HTML semântico real**: um único `<h1>` com a promessa central em formato *answer-first* (citável por IA), `<p>` de apoio e fragmentos como texto real. O motion (CSS/JS) **nunca** usa `display:none` nem injeta o conteúdo só via JS — o crawler lê tudo no HTML inicial.
- Manter e reforçar o JSON-LD existente no `BaseLayout`. O `<h1>` deve conter a afirmação central que queremos que Google e IA citem.
- `<title>`/meta/OG da Home preservados (ou ajustados só se a copy mudar, com sign-off).

## 6. Acessibilidade e performance

**Acessibilidade:**
- `prefers-reduced-motion: reduce` → **sem pin, sem scroll-jack**: renderiza um estado estático limpo (composição final: preto, microfone, `<h1>`, CTA). Nada de trilho de 500vh para quem pediu menos movimento.
- Não aprisionar teclado nem scroll; o CTA é focável e alcançável; ordem de leitura natural.
- Microfone e fragmentos = `aria-hidden` (decorativos); a mensagem real está no `<h1>`/`<p>`.

**Performance (regra de Home pública):**
- Sem WebGL pesado. Campo 2D leve (partículas limitadas, pausa fora da tela, congela em reduced-motion) + GSAP via `transform`/`opacity`. SVG barato.
- **LCP = o `<h1>`** (texto, instantâneo). Sem vídeo bloqueante (vídeo aposentado).
- Mobile: menos fragmentos, parallax/coreografia reduzidos; pin pode ser encurtado ou desativado em telas pequenas se custar fluidez.
- Meta: build verde + checagem de Core Web Vitals após implementar.

## 7. Copy (pende sign-off do Danilo)

Conteúdo textual é **copy** e segue a regra da casa: rascunho aqui, versão final com sign-off do Danilo (ver `feedback_copy_em_fluxo`, `project_voz_v2`). Rascunhos de partida (a validar):
- **Frase central (`<h1>`):** "Damos voz à sua marca." (+ possível complemento answer-first, ex.: "A PiaR transforma menções dispersas na fonte que a imprensa e a IA citam pelo nome.")
- **Linha de apoio (`<p>`):** a definir no fluxo de copy.
- **Fragmentos de mídia:** textos plausíveis (nome de veículo, aspa curta, linha de busca, card "resposta de IA") — rascunho na implementação, refino na copy.
- **CTA:** reaproveitar o existente ("Agendar diagnóstico") salvo orientação contrária.

## 8. Escopo

**No escopo:** reconstruir `#narrative-hero` em `index.astro` (markup, estilos, coreografia, SVG do microfone, transição branco→preto, integração com o campo ambiente e handoff para o marquee). Aposentar o vídeo do herói.

**Fora do escopo (etapas futuras):** demais seções da Home (faixas `.fsec`, stats, PEP, etc.), outras vitrines (Cases), páginas-diamante. Copy final (fluxo próprio com sign-off).

## 9. Verificação (definição de pronto)

- `npm run build` verde (0 erros) e 34 páginas geradas.
- Revisão visual no dev server: os 4 beats funcionam; branco→preto suave; microfone chega; amarelo acende; sem "pulos" (CLS).
- `prefers-reduced-motion`: versão estática limpa, sem scroll-jack.
- Rastreabilidade: `<h1>` e textos presentes no HTML inicial (view-source).
- Spot-check mobile (coreografia reduzida, sem travar).
- Antes/depois apresentado ao Danilo; copy do herói marcada como pendente de sign-off.

## 10. Riscos e mitigação

- **Scroll-jack prejudicar usabilidade** → respeitar reduced-motion, não bloquear scroll nativo, encurtar/atenuar em mobile.
- **Coreografia DOM custar performance** → só `transform`/`opacity`; limitar nº de fragmentos; pausar campo fora da tela.
- **Regressão visual** → baseline `v0.1.0-foundation` é o ponto de restauração; trabalhar e revisar antes de commitar.
