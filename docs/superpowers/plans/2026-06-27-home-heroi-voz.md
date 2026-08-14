# Herói da Home "Damos voz à sua marca" — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reconstruir a seção do herói da Home (`#narrative-hero`) como um momento cinemático "damos voz à sua marca" (Apple branco→preto, microfone vindo ao espectador, gravidade puxando fragmentos de mídia), sem quebrar o resto da Home.

**Architecture:** Herói pinado em `index.astro`; conteúdo em HTML semântico real (rastreável) que também serve de fallback estático; coreografia por GSAP ScrollTrigger (apenas `transform`/`opacity`/cor); microfone em SVG; campo ambiente 2D reaproveitado (`gravityField`, compartilhado). Construir do estado estático para o animado, para cada tarefa entregar algo que funciona e é verificável.

**Tech Stack:** Astro 5, GSAP + ScrollTrigger (já dependências), Lenis (já configurado), CSS com tokens do DS (`tokens.css`), SVG inline.

## Global Constraints

- Build sempre verde: `npm run build` = `astro check && astro build`, 0 erros, "Complete!", 34 páginas. Rodar ao fim de cada tarefa.
- Página pública = performance protegida: **sem WebGL pesado**; animação só por `transform`/`opacity`/cor (GPU-friendly).
- `prefers-reduced-motion: reduce` → sem pin, sem scroll-jack: entrega a composição estática (estado final).
- SEO/GEO: a mensagem vive em HTML real (um `<h1>` answer-first + `<p>`); motion **nunca** usa `display:none` nem injeta o conteúdo só via JS.
- Preservar intactos: `gravityField()` (~linha 698, compartilhado pelas faixas `.fsec.light`), o marquee de clientes (442–453), os observers de `.reveal`, e o setup Lenis+ScrollTrigger (~613–616).
- Copy do herói é **rascunho pendente de sign-off do Danilo** (regra da casa). Usar os textos-rascunho deste plano; a troca final é uma edição trivial depois.
- Tokens do DS: usar `var(--yellow)`, `var(--ink)`, `var(--paper)`, `var(--font-display)`, etc. Nada de hex hardcoded fora do canvas.
- Ponto de restauração: tag `v0.1.0-foundation`. Trabalhar e revisar antes de commitar.
- Não dar `git push` (deploy não configurado).

## Estrutura de arquivos

- **Modificar:** `src/pages/index.astro`
  - Markup do herói: linhas 414–440 (`<section id="narrative-hero">`).
  - Estilos do herói no `<style is:global>`: bloco ~153–185 + override mobile ~330.
  - Script `initHero()` no `<script is:inline>`: ~633–666 (substituir a coreografia; manter o resto do script).
- **Sem arquivos novos** (o microfone é SVG inline no markup; segue o padrão da casa de herói dentro da página).

---

### Task 1: Herói estático rastreável (markup + estilos) e remoção da coreografia antiga

Entrega um herói limpo, acessível e rastreável no estado final (palco preto, microfone amarelo, `<h1>` + `<p>` + CTA, fragmentos como texto decorativo), que JÁ é o fallback de reduced-motion/no-JS. Remove vídeo, fases de vidro e o `initHero()` antigo (que aponta para elementos que deixam de existir).

**Files:**
- Modify: `src/pages/index.astro` (markup 414–440; estilos ~153–185 e ~330; remover `initHero()` ~633–666 e sua chamada ~666)

**Interfaces:**
- Consumes: tokens de `tokens.css`/`global.css` (`--yellow`, `--ink`, `--paper`, `.ds-display`/`.ds-h1`, `.reveal`).
- Produces: estrutura DOM com ids/classes que a Task 2/3 vão animar — `#hero-stage` (palco), `#hero-h1` (`<h1>`), `.hero-fragment` (fragmentos), `#hero-mic` (wrapper do SVG). Mantê-los estáveis.

- [ ] **Step 1: Substituir o markup do herói (414–440)** por conteúdo semântico real + estado final estático. Copy = rascunho (pendente sign-off).

```astro
<section id="narrative-hero" aria-label="Damos voz à sua marca">
  <div class="hero-sticky" id="hero-stage">
    <!-- ruído: fragmentos de mídia (decorativos; a mensagem está no h1/p) -->
    <div class="hero-noise" aria-hidden="true">
      <span class="hero-fragment" data-frag="1">"...referência no setor", Exame</span>
      <span class="hero-fragment" data-frag="2">Folha de S.Paulo</span>
      <span class="hero-fragment" data-frag="3">resultado de busca · 1º lugar</span>
      <span class="hero-fragment" data-frag="4">resposta de IA: “a PiaR é citada como…”</span>
      <span class="hero-fragment" data-frag="5">"a fonte que o jornalista cita"</span>
      <span class="hero-fragment" data-frag="6">InfoMoney</span>
    </div>

    <!-- microfone: a voz que vem ao espectador (decorativo) -->
    <div class="hero-mic" id="hero-mic" aria-hidden="true">
      <svg viewBox="0 0 64 120" width="64" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="6" width="24" height="52" rx="12" fill="var(--yellow)"/>
        <path d="M12 44a20 20 0 0 0 40 0" stroke="var(--yellow)" stroke-width="4" fill="none" stroke-linecap="round"/>
        <line x1="32" y1="64" x2="32" y2="92" stroke="var(--yellow)" stroke-width="4" stroke-linecap="round"/>
        <line x1="20" y1="92" x2="44" y2="92" stroke="var(--yellow)" stroke-width="4" stroke-linecap="round"/>
      </svg>
    </div>

    <!-- mensagem real (rastreável) -->
    <div class="hero-center">
      <span class="hero-eyebrow"><span class="dot"></span>PiaR Group · Comunicação para inovação</span>
      <h1 class="hero-h1 ds-display" id="hero-h1">Damos voz à sua <span class="warm-t">marca.</span></h1>
      <p class="hero-sub">A PiaR transforma menções dispersas na fonte que a imprensa e a IA citam pelo nome.</p>
      <div class="hero-cta">
        <a href="/contato" class="beam-btn"><span class="beam-inner">Agendar diagnóstico<iconify-icon icon="solar:calendar-mark-linear"></iconify-icon></span></a>
        <a href="#virada" class="btn btn-ghost">Conhecer a PiaR<iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Substituir os estilos do herói** (~153–185) pelo palco branco→preto (variável de progresso com fallback no estado final), microfone, fragmentos e tipografia. Remover estilos órfãos (`.glass-hero`, `.video-scrub`, `.animate-target`, `.hero-aurora*`, `.hero-progress`, `.n-title`, `.n-sub` se não usados em outro lugar — conferir com grep antes de remover cada um).

```css
#narrative-hero { position: relative; width: 100vw; height: 500vh; z-index: 10; }
.hero-sticky {
  position: sticky; top: 0; width: 100vw; height: 100vh; overflow: hidden;
  display: flex; align-items: center; justify-content: center;
  /* --p (0→1) setado pelo JS; sem JS/reduced-motion, fica no estado final (1) = preto */
  --p: 1;
  background: color-mix(in srgb, var(--paper) calc((1 - var(--p)) * 100%), var(--ink));
  transition: background .1s linear;
}
.hero-center { position: relative; z-index: 30; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 1rem; max-width: 90vw; padding: 0 1.5rem; }
.hero-h1 { color: color-mix(in srgb, var(--ink) calc((1 - var(--p)) * 100%), #fff); max-width: 16ch; }
.hero-h1 .warm-t { color: var(--yellow); }
.hero-sub { font-size: clamp(1.05rem, 1.75vw, 1.5rem); color: color-mix(in srgb, var(--text-muted) calc((1 - var(--p)) * 100%), rgba(255,255,255,.72)); max-width: 42ch; }
.hero-eyebrow { display: inline-flex; align-items: center; gap: .5rem; font-family: var(--font-mono); font-size: .72rem; letter-spacing: .14em; text-transform: uppercase; color: color-mix(in srgb, var(--text-muted) calc((1 - var(--p)) * 100%), rgba(255,255,255,.6)); }
.hero-eyebrow .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--yellow); box-shadow: 0 0 0 4px rgba(254,209,54,.25); }
.hero-cta { display: flex; gap: 1rem; margin-top: 1rem; justify-content: center; flex-wrap: wrap; }
.hero-mic { position: absolute; z-index: 20; left: 50%; top: 50%; transform: translate(-50%,-50%) scale(var(--mic-s, 1)); opacity: var(--mic-o, 1); filter: drop-shadow(0 0 30px rgba(254,209,54,.45)); will-change: transform, opacity; }
.hero-noise { position: absolute; inset: 0; z-index: 15; pointer-events: none; }
.hero-fragment { position: absolute; font-family: var(--font-mono); font-size: clamp(.62rem,1vw,.8rem); letter-spacing: .04em; color: rgba(255,255,255,.5); white-space: nowrap; will-change: transform, opacity; }
.hero-fragment[data-frag="1"] { top: 18%; left: 8%; }
.hero-fragment[data-frag="2"] { top: 30%; right: 10%; }
.hero-fragment[data-frag="3"] { bottom: 26%; left: 12%; }
.hero-fragment[data-frag="4"] { top: 22%; right: 22%; }
.hero-fragment[data-frag="5"] { bottom: 20%; right: 14%; }
.hero-fragment[data-frag="6"] { bottom: 32%; left: 28%; }
@media (prefers-reduced-motion: reduce) { .hero-noise { opacity: .35; } }
```

- [ ] **Step 3: Mobile** — no override mobile (~330) trocar `#narrative-hero { height: 400vh; }` por `360vh` e reduzir a presença dos fragmentos:

```css
@media (max-width: 768px) {
  #narrative-hero { height: 360vh; }
  .hero-fragment[data-frag="4"], .hero-fragment[data-frag="6"] { display: none; }
}
```

- [ ] **Step 4: Remover a coreografia antiga.** No `<script is:inline>` (~608+), apagar a função `initHero()` (~633–666) e sua chamada `if (!prefersReduced ...) initHero();` (~666). NÃO tocar em `gravityField()`, Lenis/ScrollTrigger setup, nem nos observers de `.reveal`. Remover o `<video>` já saiu no Step 1 (markup).

- [ ] **Step 5: Verificar (build + rastreável + visual estático)**

Run: `npm run build`
Expected: 0 errors, "Complete!", 34 páginas.

Run (rastreabilidade): abrir `dist/index.html` e confirmar que `Damos voz à sua` e o `<h1 ... id="hero-h1">` estão no HTML (ou `grep -c "hero-h1" dist/index.html` → ≥1).
Expected: o texto do herói está no HTML inicial.

Visual: no dev server (`npm run dev`), abrir `http://localhost:4321/` — o herói mostra palco preto, microfone amarelo, `<h1>` grande, `<p>`, CTA; sem erros no console; sem `#hero-video`/cartões de vidro.

- [ ] **Step 6: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat(home): heroi estatico rastreavel (voz/microfone) + remove coreografia antiga"
```

---

### Task 2: Coreografia cinemática branco→preto + microfone + revelação tipográfica

Adiciona a linha do tempo que dá vida ao estado estático: o palco vai de branco a preto, o microfone desliza em direção ao espectador, e o `<h1>`/`<p>` revelam por beat. Pin via ScrollTrigger; desativado em reduced-motion (mantém o estático da Task 1).

**Files:**
- Modify: `src/pages/index.astro` (`<script is:inline>`, inserir nova função `initHero()` perto de onde estava, e chamá-la sob o guard `!prefersReduced`)

**Interfaces:**
- Consumes: `#hero-stage`, `#hero-h1`, `#hero-mic` (Task 1); `window.gsap`, `window.ScrollTrigger` (setup existente).
- Produces: variáveis CSS `--p` (no `#hero-stage`), `--mic-s`/`--mic-o` (no `#hero-mic`) atualizadas por scroll; consumidas pelos estilos da Task 1.

- [ ] **Step 1: Implementar a nova `initHero()`** (apenas `transform`/`opacity`/var de cor):

```js
function initHero() {
  var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
  var stage = document.getElementById('hero-stage');
  var mic = document.getElementById('hero-mic');
  var h1 = document.getElementById('hero-h1');
  if (!stage || !mic) return;

  // microfone começa pequeno/longe e chega ao espectador
  gsap.set(mic, { '--mic-s': 0.4, '--mic-o': 0 });
  gsap.set(h1, { opacity: 0, y: 30 });

  var tl = gsap.timeline({
    scrollTrigger: { trigger: '#narrative-hero', start: 'top top', end: 'bottom bottom', scrub: 0.5, pin: '.hero-sticky' }
  });
  // beat 1→2: branco escurece + microfone surge e cresce
  tl.to(stage, { '--p': 1, ease: 'none' }, 0)
    .to(mic, { '--mic-o': 1, '--mic-s': 1.15, ease: 'power2.out' }, 0.15)
    // beat 3→4: H1 resolve quando a voz chega
    .to(h1, { opacity: 1, y: 0, ease: 'power3.out' }, 0.6);
}
if (!prefersReduced && window.gsap && window.ScrollTrigger) initHero();
```

(Obs.: `--p` parte de 0 no scroll; como o CSS default é `--p:1`, setar `gsap.set(stage,{'--p':0})` no início da função para abrir no branco.)

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: 0 errors, "Complete!".

- [ ] **Step 3: Verificar visual (os 4 beats)**

No dev server, rolar o herói de cima a baixo: abre no branco → escurece para preto → microfone desliza/cresce → `<h1>` resolve. Suave, sem "pulos", sem erro no console.

- [ ] **Step 4: Verificar reduced-motion**

Ativar "reduzir movimento" no SO/DevTools e recarregar: o herói aparece no estado final estático (preto, microfone, `<h1>`), sem pin/scroll-jack.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat(home): coreografia cinematica do heroi (branco->preto + microfone + h1)"
```

---

### Task 3: Gravidade dos fragmentos de mídia (ruído → uma voz)

Os fragmentos começam dispersos e, conforme o scroll, são puxados para o centro (gravidade) e desaparecem ao virar "uma voz só" no microfone.

**Files:**
- Modify: `src/pages/index.astro` (`<script is:inline>`, dentro de `initHero()`)

**Interfaces:**
- Consumes: `.hero-fragment` (Task 1), o `tl`/ScrollTrigger da Task 2.
- Produces: animação de `transform`/`opacity` dos fragmentos atrelada ao mesmo timeline.

- [ ] **Step 1: Adicionar a coreografia dos fragmentos** em `initHero()` (após criar `tl`):

```js
var frags = stage.querySelectorAll('.hero-fragment');
frags.forEach(function (f) {
  var dx = (window.innerWidth / 2) - (f.offsetLeft + f.offsetWidth / 2);
  var dy = (window.innerHeight / 2) - (f.offsetTop + f.offsetHeight / 2);
  gsap.set(f, { opacity: 0 });
  tl.to(f, { opacity: 0.6, ease: 'power1.out' }, 0.1)          // surgem no ruído
    .to(f, { x: dx * 0.85, y: dy * 0.85, opacity: 0, ease: 'power2.in' }, 0.45); // puxados ao centro e somem
});
```

- [ ] **Step 2: Verificar build**

Run: `npm run build`
Expected: 0 errors, "Complete!".

- [ ] **Step 3: Verificar visual + performance**

Dev server: fragmentos surgem dispersos no ruído, são puxados para o microfone e somem quando o `<h1>` resolve. Scroll fluido (sem travar); sem erro de console.

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat(home): gravidade dos fragmentos de midia no heroi (ruido -> uma voz)"
```

---

### Task 4: Campo ambiente, mobile e polimento de performance/acessibilidade

Garante que o campo `gravityField` lê bem atrás do palco branco→preto, que o mobile fica fluido, e que pausa-fora-da-viewport + reduced-motion seguem valendo.

**Files:**
- Modify: `src/pages/index.astro` (estilos do `#field-bg` se necessário; `gravityField()` só se precisar de ajuste de leitura — sem reescrever a lógica)

**Interfaces:**
- Consumes: `#field-bg` (canvas existente), `gravityField()` (preservado).
- Produces: nenhum novo contrato; ajustes de leitura/perf.

- [ ] **Step 1: Conferir leitura do campo** atrás do herói (z-index/opacidade) — o `#field-bg` deve ficar atrás do `.hero-center` (z-index 30) e do microfone (20). Ajustar opacidade do campo no herói se competir com a legibilidade do `<h1>`. Mudança só de CSS.

- [ ] **Step 2: Conferir mobile** (DevTools responsivo ~390px): herói legível, microfone proporcional, fragmentos reduzidos (Task 1 Step 3), scroll fluido. Ajustar `clamp()`/posições se necessário.

- [ ] **Step 3: Conferir pausa + reduced-motion** — `gravityField` continua pausando fora da viewport (IntersectionObserver existente) e congelando em reduced-motion; o herói em reduced-motion é estático (Task 2 Step 4). Sem regressão.

- [ ] **Step 4: Verificar build + console limpo**

Run: `npm run build`
Expected: 0 errors, "Complete!".
Dev server: sem erros/warnings no console em desktop e mobile.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat(home): campo ambiente + mobile + polimento perf/a11y do heroi"
```

---

### Task 5: Verificação final e antes/depois

**Files:** nenhum (verificação).

- [ ] **Step 1: Build final** — `npm run build` → 0 erros, "Complete!", 34 páginas.
- [ ] **Step 2: Rastreabilidade** — `dist/index.html` contém o `<h1>` e a frase central (view-source/grep).
- [ ] **Step 3: Antes/depois** — capturar o herói no dev server (estados branco e preto) para apresentar ao Danilo.
- [ ] **Step 4: Reduced-motion** — confirmar versão estática limpa.
- [ ] **Step 5: Sinalizar copy pendente** — lembrar o Danilo que a copy do herói (`<h1>`, `<p>`, fragmentos) é rascunho aguardando sign-off; troca é edição trivial.
- [ ] **Step 6: Commit final (se houver ajustes)** e parar para review do Danilo antes de considerar a vitrine #1 concluída.

---

## Self-review (cobertura do spec)

- Conceito + 4 beats → Tasks 1–3. ✓
- Estética Apple branco→preto → Task 1 (CSS `color-mix` por `--p`) + Task 2 (timeline). ✓
- Microfone vindo ao espectador → Task 1 (SVG) + Task 2 (`--mic-s/--mic-o`). ✓
- Gravidade dos fragmentos → Task 3. ✓
- Tecnologia leve (sem WebGL pesado; transform/opacity) → Global Constraints + Tasks 2–3. ✓
- SEO/GEO rastreável → Task 1 (HTML real) + Task 5 Step 2. ✓
- Reduced-motion estático / sem scroll-jack → Task 1 (default estado final) + Task 2 (guard) + Tasks 4–5. ✓
- Performance/LCP/mobile/vídeo aposentado → Task 1 (remove vídeo) + Task 4. ✓
- Copy pendente de sign-off → Global Constraints + Task 5 Step 5. ✓
- Preservar gravityField/marquee/reveal → Global Constraints + Tasks 1/4. ✓

Nota de domínio: herói é visual/motion — a verificação é build verde + revisão visual no browser + checagem de rastreabilidade (view-source) + checagem de reduced-motion, não testes unitários (não há unidade testável significativa em coreografia GSAP).
