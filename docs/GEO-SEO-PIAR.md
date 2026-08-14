# Premissas GEO / SEO / AEO — PiaR Group

> Documento de referência permanente. Toda página nova ou reescrita do site `pep.piar.group` precisa passar pelas regras abaixo antes de subir.
> Base: Auditoria Forense GEO/AEO/LLMO de maio/2026 + tom de voz validado com Danilo.

---

## 1 · Fatos canônicos (nunca arredondar)

- Fundação: **2013** · 13 anos de operação até 2026
- Marcas atendidas: **470+** em 13 anos
- Startups acompanhadas até o exit: **8** (Axado · Trustvox · Vianuvem · Xtech Commerce · Supermercado Now · Konduto · Getrak · GrandChef)
- CEO & Fundador: **Bruno Pinheiro**
- COO: **Renniê Paro**
- Special Manager: **Gabriela Calencautcy**
- Endereço: **Rua Silva Bueno, 1660, Conjunto 205, Ipiranga, São Paulo · SP · 04208-001**
- Domínio canônico: `pep.piar.group`
- Tese: *"Identificamos o ativo raro de cada marca e o transformamos em reputação."*

**Nomes proibidos (placeholders fictícios que precisam sumir do site):** Marina Oliveira, Caio Mendes, Laura Prado, Rafael Costa, Júlia Barreto, Ricardo Souza, Ana Vasconcelos.

---

## 2 · Regra de ouro do copy (teste por sentença)

Cada parágrafo precisa passar no teste: **"Um LLM consegue extrair uma frase factual desta sentença, sem inferência subjetiva?"**

- ❌ Adjetivos vagos: "inovadora", "completa", "líder", "premiada". Gain zero.
- ✅ Atributo + valor + ano + nome próprio: "fundada em 2013", "470+ marcas em 13 anos", "8 startups até exit", "Bruno Pinheiro, CEO".

Cada substantivo concreto é uma **ponte de RAG** (citação extraível por ChatGPT, Claude, Perplexity, Gemini, AI Overviews).

---

## 3 · Estrutura obrigatória de cada página

### Meta tags (camada que Google + LLM lêem primeiro)

- **`<title>`**: nome da entidade + função + cidade/ano. Ex.: `PiaR Group — Agência de Relações Públicas em São Paulo (2013)`.
- **`<meta description>`**: 1-2 frases com fato + número + nome próprio. Sem adjetivo solto.

### Hero (acima da dobra)

- **H1 factual** ou poético + extraível (sandwich). Ato 1 sempre carrega entidade/ano/cidade.
- **Hero image** vinda de `/brand/` (banco PiaR). Nunca placeholder genérico de template.
- **CTA** com verbo concreto: "Agendar diagnóstico", "Ver cases", "Falar no WhatsApp".

### Bloco "Quem somos" ou similar (abstract de 40 palavras — regra Gübür)

Imediatamente abaixo do H2 principal, antes de qualquer adjetivo, escrever um parágrafo de ~40 palavras com:
- Nome da entidade
- Categoria (boutique brasileira de relações públicas)
- Cidade + endereço
- Fundador + ano
- Pelo menos 2 fatos numerados (anos, marcas, exits)

Este parágrafo é o que vai virar resposta direta em LLM.

### Stats / números

- Sempre número + descrição auditável + período. Não usar "+++", "dezenas", "muitos".
- Pelo menos 3 fatos extraíveis por página.

### Equipe / testimonials

- Só nomes reais. Foto + cargo real. LinkedIn em `sameAs`.
- Sem placeholders. Sem testimonials fictícios.

---

## 4 · Imagens (hero por página)

Banco disponível em `/public/brand/`:

| Página | Imagem recomendada |
|---|---|
| `/sobre` | `Brunotrofeu.png` (Bruno + reconhecimento) |
| `/metodo` | `Bruno_media training.jpeg` (método em ação) |
| `/cases` | `Bruno2podcast.jpeg` (palco / case) |
| `/processos` | `bolha.png` (manifesto "furar a bolha") |
| `/pep` | `micpodcast.png` (microfone, vetor Conversa) |
| `/insights` | `POdcast3.jpeg` |
| `/contato` | sem hero — layout direto |

Sempre com `alt` descritivo (nome + contexto, não vazio). Imagem hero deve ser ~1200px de largura, `loading="lazy"` apenas em imagens fora da dobra.

---

## 5 · Schema.org / JSON-LD

- BaseLayout já injeta `ProfessionalService` + `Person` (Bruno).
- Páginas-entidade dedicadas devem adicionar Schema próprio:
  - `/sobre` → `AboutPage` + reforço de `Organization`.
  - `/cases/[slug]` → `Article` + `Person` (CEO do cliente como `interviewee` se houver).
  - `/insights/[slug]` → `Article` + `FAQPage` se tiver perguntas.
  - `/metodo` → `Service` com `serviceType`.
  - `/pep` → `Service` com `serviceType: "Proprietary PR Methodology"`.

---

## 6 · Camada para robôs (já implementada)

- `public/robots.txt` — libera GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, ChatGPT-User, Google-Extended, Applebot-Extended, Amazonbot, Cohere, CCBot.
- `public/llms.txt` — índice markdown com fatos canônicos.
- `BaseLayout.astro` — JSON-LD `ProfessionalService` + `Person`.
- `astro.config.mjs` — `site: 'https://pep.piar.group'` (gera sitemap correto).

---

## 7 · Tom de voz (Voz PiaR v2 — validado por Danilo, 2026-06-25)

> Substitui a v1 (que prescrevia a antítese "Não X. É Y." e frases curtas factuais). A v1 estava gerando textos que denotam IA. A Seção 2 (extratibilidade) continua valendo e é parceira da metáfora, não inimiga.
> Spec completa: `docs/superpowers/specs/2026-06-25-voz-piar-v2-design.md`.

### Os 8 princípios

1. **Sensação primeiro:** o leitor é o briefing. Pergunta-âncora: "que pensamento isso deixa na cabeça dele depois que fecha a aba?"
2. **Superfície elementar, fundo profundo.** Palavra simples por fora; emoção, filosofia e reframe por dentro. Nunca frase morna.
3. **Neurolinguística que age:** pressuposição, âncora sensorial, future-pacing, "você" implícito. A frase mexe, não descreve.
4. **Metáfora que carrega fato:** toda imagem esconde um número, nome ou ano extraível.
5. **Assinada por tema:** cada seção recebe a letra que merece (mito na abertura, íntimo na voz, seco na prova, provocação no clímax).
6. **A sacada + a imprevisibilidade:** todo bloco-chave tem uma virada que faz pensar. Respiro e imaginação, nunca o previsível.
7. **Musicalidade:** a copy soa como boa música lida em voz alta no fim de um dia cansado.
8. **O fecho que vende (a fera domada):** cada seção termina num fecho afinado por neurolinguística, que faz agir sem cheirar a anúncio.

### Os 2 portões (todo bloco passa nos dois)

- **Portão Humano:** zero tiques banidos + sacada/respiro/musicalidade + deixa um pensamento.
- **Portão GEO:** ≥1 fato extraível por bloco + H1/abstract de 40 palavras preservados + zero nome proibido.

### Banido (o que denotava IA)

- Antítese-tique como ritmo dominante: "Não X. É Y." / "não é A, é B." (contraste pontual é permitido).
- Travessão (—) e a "frase. curta. de efeito." empilhada.
- Regra de três robótica ("rápido, simples e eficiente").
- Paralelismo mecânico e eco de estrutura entre frases vizinhas.
- Adjetivo vago de preenchimento ("inovadora", "completa", "líder", "premiada").
- Conclusão-resumo ("Em resumo…").
- Exclamação e pergunta retórica com "?" (diálogo encenado é permitido).

### Mantém da v1

- Grifo em serif itálico (`<em>` / `.serif` / `.italic-serif`) e palavra-destaque amarela (`.warm-t`) para o conceito-chave.
- Verbos no presente. Primeira pessoa do plural, sem "a gente". Sem futuro do pretérito ("seríamos", "teríamos").

---

## 8 · Checklist antes de qualquer deploy

- [ ] H1 carrega entidade + ano + cidade ou função (extraível)
- [ ] Bloco de 40 palavras presente
- [ ] Pelo menos 3 fatos numerados na página
- [ ] Zero placeholders fictícios
- [ ] Hero image do banco `/brand/` (não template)
- [ ] Meta title + description com fato + número
- [ ] Build local roda sem erro: `npm run build`
- [ ] Zip gerado via `tar -a -c -f` (não `Compress-Archive` — bug de barras invertidas no Netlify)

---

## 9 · Pendências de roadmap

- [ ] Wikidata Q-ID para "PiaR Group" + "Bruno Pinheiro"
- [ ] Páginas-entidade dedicadas: `/exits`, `/equipe/[slug]`, `/cases/[slug]`, `/insights/[slug]`
- [ ] Posts-âncora de glossário: Data PR, Newsjacking, SOV, Earned Media Measurement, IA em PR
- [ ] PiaR Exit Index (dataset proprietário trimestral)
- [ ] Versão EN (`/en/`) com `hreflang`
