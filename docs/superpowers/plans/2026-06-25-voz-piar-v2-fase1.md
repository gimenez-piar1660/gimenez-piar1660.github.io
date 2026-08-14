# Voz PiaR v2 — Fase 1 (Home + /sobre) · Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Substituir a voz "denota-IA" do site PiaR por um sistema de voz humano (Voz v2), provado na Home e na /sobre, sem quebrar a máquina de GEO/SEO nem o design.

**Architecture:** Três movimentos por página: (1) atualizar o Manual de Voz (a regra que gera a copy), (2) reescrever a copy num **doc de revisão** para sign-off do Danilo, (3) só depois aplicar as palavras aprovadas no `.astro`, preservando os ganchos de design. A copy mora em dois lugares de cada `.astro`: nos `const` do frontmatter e nas strings inline do template.

**Tech Stack:** Astro 5, Tailwind 3, conteúdo em pt-BR. Sem libs novas. Verificação: `npm run build` + checklist dos 2 portões + sign-off humano.

**Spec de origem:** `docs/superpowers/specs/2026-06-25-voz-piar-v2-design.md` (ler antes de começar).

## Global Constraints

Toda tarefa herda estas regras (valores verbatim da spec e do `docs/GEO-SEO-PIAR.md`):

- **Fatos canônicos, nunca arredondar:** fundação 2013; 13 anos até 2026; 470+ marcas; 8 exits (Axado, Trustvox, ViaNuvem, Konduto, Getrak, GrandChef, Xtech Commerce, Supermercado Now); Bruno Pinheiro (Fundador e CEO); Renniê Paro (COO); Gabriela Calencautcy (Projetos Especiais); ABStartups Startup Awards 2018; São Paulo / Ipiranga; domínio `pep.piar.group`.
- **Nomes proibidos (placeholders):** Marina Oliveira, Caio Mendes, Laura Prado, Rafael Costa, Júlia Barreto, Ricardo Souza, Ana Vasconcelos.
- **Voz:** primeira pessoa do plural, sem "a gente". Verbos no **presente** (proibido futuro do pretérito: "teríamos", "seríamos"). Acentos pt-BR completos, inclusive em JSON-LD.
- **Sem travessão (—)** no corpo do texto. Sem exclamação. Sem pergunta retórica com "?" (diálogo encenado é permitido).
- **Os 2 portões (todo bloco passa nos dois):** Portão Humano = zero tiques banidos + sacada/respiro/musicalidade + deixa um pensamento. Portão GEO = ≥1 fato extraível por bloco + H1 e abstract de 40 palavras preservados + zero nome proibido.
- **Lista de banidos:** antítese-tique como ritmo dominante ("Não X. É Y."), travessão, regra de três robótica, paralelismo mecânico, adjetivo vago ("inovadora/completa/líder/premiada"), conclusão-resumo ("Em resumo…").
- **Ganchos de design que NÃO podem quebrar:** `<span class="warm-t">…</span>` (palavra amarela), `<em>…</em>` e `.serif`/`.italic-serif` (itálico serif), `data-count` / `data-suffix` nos números, classes `reveal`/`delay-*`/`d1-d4`, ids de seção (`#virada`, `#corpos`, `#climax`, etc.).
- **Build:** `npm run build` roda sem erro antes de qualquer commit de página.

---

## Checklist dos 2 Portões (rodar em CADA bloco reescrito)

Copie este bloco para o topo de cada doc de revisão e marque por seção:

```
[ ] Portão Humano
    [ ] Zero "Não X. É Y." como ritmo dominante
    [ ] Zero travessão (—), zero exclamação, zero pergunta retórica "?"
    [ ] Tem uma sacada (faz pensar) e respiro (não é frase empilhada)
    [ ] Lê bem em voz alta (musicalidade)
    [ ] Deixa um pensamento depois de fechar a aba
[ ] Portão GEO
    [ ] Pelo menos 1 fato extraível (número/nome/ano/cidade)
    [ ] Nenhum fato canônico arredondado ou inventado
    [ ] Zero nome proibido
    [ ] Verbo no presente (sem futuro do pretérito)
[ ] Design
    [ ] Ganchos preservados (warm-t / em / data-count / classes / ids)
```

---

## File Structure

| Arquivo | Responsabilidade | Ação |
|---|---|---|
| `docs/GEO-SEO-PIAR.md` | Manual de voz e regras de GEO | Modificar Seção 7 |
| `docs/superpowers/copy/2026-06-25-home-voz-v2.md` | Doc de revisão da Home (Antes/Depois) | Criar |
| `docs/superpowers/copy/2026-06-25-sobre-voz-v2.md` | Doc de revisão da /sobre (Antes/Depois) | Criar |
| `src/pages/index.astro` | Home renderizada | Modificar copy (consts + inline) |
| `src/pages/sobre.astro` | /sobre renderizada | Modificar copy (consts + inline) |

---

### Task 1: Manual de Voz v2 (substitui a Seção 7)

**Files:**
- Modify: `docs/GEO-SEO-PIAR.md` (Seção 7, linhas ~110-117)

**Interfaces:**
- Produces: o gabarito textual que todas as tarefas seguintes citam (os 8 princípios, os 2 portões, a lista de banidos).

- [ ] **Step 1: Abrir e localizar a Seção 7**

Ler `docs/GEO-SEO-PIAR.md`. Localizar o bloco que começa em `## 7 · Tom de voz (validado por Danilo)` e vai até antes de `## 8`.

- [ ] **Step 2: Substituir o conteúdo da Seção 7**

Trocar o corpo atual da Seção 7 por este texto (mantém o cabeçalho `## 7 · Tom de voz`):

```markdown
## 7 · Tom de voz (Voz PiaR v2 — validado por Danilo, 2026-06-25)

> Substitui a v1 (que prescrevia a antítese "Não X. É Y." e frases curtas factuais). A v1 estava gerando textos que denotam IA. A Seção 2 (extratibilidade) continua valendo e é parceira da metáfora.

### Os 8 princípios
1. Sensação primeiro: o leitor é o briefing. Pergunta-âncora: "que pensamento isso deixa na cabeça dele depois que fecha a aba?"
2. Superfície elementar, fundo profundo. Palavra simples por fora; emoção/filosofia/reframe por dentro. Nunca frase morna.
3. Neurolinguística que age: pressuposição, âncora sensorial, future-pacing, "você" implícito. A frase mexe, não descreve.
4. Metáfora que carrega fato: toda imagem esconde um número/nome/ano extraível.
5. Assinada por tema: cada seção recebe a letra que merece (mito na abertura, íntimo na voz, seco na prova, provocação no clímax).
6. A sacada + a imprevisibilidade: todo bloco-chave tem uma virada que faz pensar. Respiro e imaginação, nunca o previsível.
7. Musicalidade: a copy soa como boa música lida em voz alta no fim de um dia cansado.
8. O fecho que vende (a fera domada): cada seção termina num fecho afinado por neurolinguística, que faz agir sem cheirar a anúncio.

### Os 2 portões (todo bloco passa nos dois)
- Portão Humano: zero tiques banidos + sacada/respiro/musicalidade + deixa um pensamento.
- Portão GEO: ≥1 fato extraível por bloco + H1/abstract de 40 palavras preservados + zero nome proibido.

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
- Verbos no presente. Primeira pessoa do plural, sem "a gente". Sem futuro do pretérito.
```

- [ ] **Step 3: Verificar coerência**

Reler a Seção 7 nova e confirmar: 8 princípios presentes, 2 portões presentes, lista de banidos presente, e a nota de que a Seção 2 continua válida. Conferir que a Seção 8 (checklist de deploy) logo abaixo continua intacta.

- [ ] **Step 4: Commit**

```bash
git add docs/GEO-SEO-PIAR.md
git commit -m "docs(voz): Manual de Voz v2 substitui a Secao 7 do guia GEO"
```

---

### Task 2: Doc de revisão da Home (copy Antes/Depois) — PORTÃO DE SIGN-OFF

**Files:**
- Create: `docs/superpowers/copy/2026-06-25-home-voz-v2.md`
- Reference (não editar ainda): `src/pages/index.astro`

**Interfaces:**
- Consumes: Manual de Voz v2 (Task 1); exemplos canônicos da spec §7.
- Produces: copy aprovada por bloco que a Task 3 vai aplicar. Cada bloco identificado pelo `id`/linha de origem.

**Mapa de blocos da Home (origem → registro):**

| Bloco (id) | Origem em `index.astro` | Registro | Fato(s) obrigatório(s) |
|---|---|---|---|
| Hero atos | `427-433` (consts: nenhum) | Mito | H1 LOCKED + 2013 + São Paulo no conjunto |
| A Voz (`#virada`) | `463-467` | Íntimo/filosófico | 13 anos |
| A Gravidade (`#corpos`) | h2/lede `476-478`; cards const `corpos` `28-33` | Tese provocativa | 13 anos + 470 marcas |
| As Forças (`#forcas`) | h2/lede `496-498`; cards const `forcas` `36-43` | Funcional com alma | nomes dos serviços |
| PEP (`#pep`) | `519-521`; const `vetores` `46` | Convite curioso | 6 vetores |
| A Prova (`#prova`) | h2 `535`, lede `548`; const `provas` `52-56`, `exits` `49` | Seco | 13 / 470+ / 8 + Bruno + ABStartups 2018 |
| Quem lidera (`#lideranca`) | h2/lede `557-558`; const `lideranca` `59-63` | Humano/orgulho | nomes + cargos reais |
| PiaRBoard (`#metodo`) | h2/lede `578-579`; const `piarboard` `66-73` | Transparência assertiva | "dashboard proprietário" |
| Clímax (`#climax`) | `598-599` | Fecho que vende | "1 dia útil" |

- [ ] **Step 1: Criar o doc com cabeçalho e checklist**

Criar `docs/superpowers/copy/2026-06-25-home-voz-v2.md` com: título, link para a spec, o **Checklist dos 2 Portões** (copiado deste plano) e uma tabela com uma linha por bloco do mapa acima.

- [ ] **Step 2: Colar os 4 blocos canônicos já aprovados**

Da spec §7, colar como "Depois" travado (não reescrever): A Gravidade (§7.1), A Voz (§7.2), A Prova (§7.3), Clímax (§7.4). São a régua de voz para os demais.

- [ ] **Step 3: Reescrever os blocos restantes (Antes/Depois)**

Para cada bloco ainda sem "Depois" (Hero atos 2-4, As Forças + 6 cards, PEP, Quem lidera + 3 descrições, PiaRBoard + 6 cards), escrever a versão nova seguindo o registro da tabela e a régua dos canônicos. Formato por bloco:

```markdown
### [id] — registro: [X]
**Antes:** "<texto atual verbatim>"
**Depois:** "<texto novo>"
**Portões:** Humano [ok/nota] · GEO: fato = "<qual>"
```

Regra do Hero: o H1 "Identificamos o ativo raro de cada marca e o transformamos em reputação." é LOCKED. Só os atos 2-4 e os subtítulos podem ganhar mais sacada.

- [ ] **Step 4: Rodar o Checklist dos 2 Portões em cada bloco**

Marcar o checklist por seção no próprio doc. Qualquer item falho volta ao Step 3. Conferir especialmente: zero "Não X. É Y." dominante, zero travessão, fatos canônicos exatos.

- [ ] **Step 5: Commit do doc de revisão**

```bash
git add docs/superpowers/copy/2026-06-25-home-voz-v2.md
git commit -m "docs(copy): doc de revisao da Home na Voz v2 (pre sign-off)"
```

- [ ] **Step 6: PORTÃO HUMANO — sign-off do Danilo**

Apresentar o doc ao Danilo bloco a bloco. NÃO prosseguir para a Task 3 sem aprovação explícita. Ajustes pedidos voltam ao Step 3 (editar o doc, nunca o `.astro`).

---

### Task 3: Aplicar a copy aprovada na Home (`index.astro`)

**Pré-requisito:** Task 2 com sign-off do Danilo. Só os blocos aprovados entram.

**Files:**
- Modify: `src/pages/index.astro` (consts `corpos` 28-33, `forcas` 36-43, `provas` 52-56, `piarboard` 66-73, `lideranca` 59-63; inline 427-433, 463-467, 476-478, 496-498, 519-521, 535, 548, 557-558, 578-579, 598-599)

**Interfaces:**
- Consumes: `docs/superpowers/copy/2026-06-25-home-voz-v2.md` (aprovado).

- [ ] **Step 1: Aplicar a copy dos `const` do frontmatter**

Substituir os campos de texto (`t`, `d`, `l`, `desc`, `g`) nos arrays `corpos`, `forcas`, `provas`, `piarboard`, `lideranca` pela versão aprovada. Não mexer em `ic`, `href`, `foto`, `flip`, `n`, `suf`, `tail` nem na estrutura dos objetos.

- [ ] **Step 2: Aplicar a copy inline do template**

Substituir os textos das seções inline (Hero atos 2-4 e subs, A Voz h2+ledes, Corpos intro, Forças intro, PEP, Prova h2+lede final, Liderança intro, PiaRBoard intro, Clímax) pela versão aprovada. **Preservar** os `<span class="warm-t">`, `<em>`, `data-count`/`data-suffix`, classes `reveal`/`delay-*` e os ids. O H1 (ato 1) não muda.

- [ ] **Step 3: Conferir ganchos e fatos**

Buscar no arquivo: travessão (`—`), `teríamos`/`seríamos`, nomes proibidos. Resultado esperado: zero ocorrências. Confirmar que `data-count` ainda bate com o número escrito ao lado (paridade do contador).

Run: `git diff src/pages/index.astro`
Expected: só strings de copy mudaram; nenhum atributo/classe/id removido.

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: build conclui sem erro.

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat(home): aplica copy da Voz v2 (pos sign-off)"
```

---

### Task 4: Doc de revisão da /sobre (copy Antes/Depois) — PORTÃO DE SIGN-OFF

**Files:**
- Create: `docs/superpowers/copy/2026-06-25-sobre-voz-v2.md`
- Reference (não editar ainda): `src/pages/sobre.astro`

**Interfaces:**
- Consumes: Manual de Voz v2 (Task 1); voz aprovada da Home (Task 2/3) como referência de consistência.
- Produces: copy aprovada por bloco para a Task 5.

**Mapa de blocos da /sobre (origem → registro):**

| Bloco (id) | Origem em `sobre.astro` | Registro | Nota |
|---|---|---|---|
| Hero (`#hero`) | `135-138` | Mito | H1 carrega 13 anos; mantém |
| O Ruído (`#ruido`) | `151-154` | Problema/tensão | **corrigir "teríamos" (futuro do pretérito)** |
| A Virada (`#turn`) | `163-167` | Virada íntima | suavizar antítese empilhada |
| A Crença (`#reputacao`) | `176-181` | Filosófico/seco | fato: 8 exits |
| A Conversa (`#cmo`) | `189-193` | Diálogo encenado | "E daí?" é diálogo, permitido |
| O Mercado vem (`#atrai`) | h2/lede/punch `202-214`; const `corpos` `38-43` | Tese provocativa | matar "E não vem só" |
| Idioma (`#idioma`) | `222-234`; const `traducoes` `46-51` | Funcional/CMO | tradução PR→receita |
| Tradução (`#traducao`) | `242-252` | Explicativo | path labels curtos, manter |
| O nosso jeito (`#jeito`) | h2/lede `262-263`; const `verdades` `32-36` | Princípios | matar "não passa por estagiário" tique |
| Manifesto (`#manifesto`) | `281-284` | Mito/clímax intermediário | matar "não corre atrás" |
| A Prova (`#prova`) | `293-301` | Seco | 13 / 470+ / 8 + exits |
| Quem está na sala (`#lideranca`) | h2/lede `319-320`; const `lideranca` `53-57` | Humano/orgulho | nomes reais |
| Clímax (`#climax`) | `342-344` | Fecho que vende | "1 dia útil" |
| FAQ (`#faq`) | h2 `359`; const `faq` `59-65` | Explicativo claro | respostas carregam fato |

- [ ] **Step 1: Criar o doc com cabeçalho, checklist e tabela de blocos** (mesmo formato da Task 2 Step 1).

- [ ] **Step 2: Reescrever cada bloco (Antes/Depois)** seguindo o registro da tabela, a régua dos canônicos da Home e o mesmo formato por bloco da Task 2 Step 3. Atenção às correções marcadas (futuro do pretérito em `#ruido`; antíteses empilhadas em `#turn`, `#atrai`, `#jeito`, `#manifesto`).

- [ ] **Step 3: Rodar o Checklist dos 2 Portões em cada bloco** e corrigir o que falhar.

- [ ] **Step 4: Commit do doc**

```bash
git add docs/superpowers/copy/2026-06-25-sobre-voz-v2.md
git commit -m "docs(copy): doc de revisao da /sobre na Voz v2 (pre sign-off)"
```

- [ ] **Step 5: PORTÃO HUMANO — sign-off do Danilo.** Não prosseguir para a Task 5 sem aprovação explícita.

---

### Task 5: Aplicar a copy aprovada na /sobre (`sobre.astro`)

**Pré-requisito:** Task 4 com sign-off do Danilo.

**Files:**
- Modify: `src/pages/sobre.astro` (consts `verdades` 32-36, `corpos` 38-43, `traducoes` 46-51, `lideranca` 53-57, `faq` 59-65; inline 135-138, 151-154, 163-167, 176-181, 189-193, 202-214, 222-234, 242-252, 262-263, 281-284, 293-301, 319-320, 342-344, 359)

**Interfaces:**
- Consumes: `docs/superpowers/copy/2026-06-25-sobre-voz-v2.md` (aprovado).

- [ ] **Step 1: Aplicar a copy dos `const`** (`verdades`, `corpos`, `traducoes`, `lideranca`, `faq`). Não mexer em `ic`, `foto`, `flip`, `cargo` (a menos que aprovado), `n`.

- [ ] **Step 2: Aplicar a copy inline** das 14 seções. Preservar `warm-t`, `.serif`, `data-count`/`data-suffix`, classes `reveal`/`d1-d4`, ids e o `&rarr;`/`&darr;` dos componentes visuais (path/trad).

- [ ] **Step 3: Conferir ganchos e fatos.**

Run: `git diff src/pages/sobre.astro`
Expected: só copy mudou. Buscar `—`, `teríamos`, `seríamos`, nomes proibidos → zero ocorrências.

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: build conclui sem erro.

- [ ] **Step 5: Commit**

```bash
git add src/pages/sobre.astro
git commit -m "feat(sobre): aplica copy da Voz v2 (pos sign-off)"
```

---

### Task 6: Varredura final de aceite (Fase 1)

**Files:**
- Reference: `src/pages/index.astro`, `src/pages/sobre.astro`, `docs/GEO-SEO-PIAR.md`

- [ ] **Step 1: Varredura de banidos nas duas páginas**

Buscar nos dois arquivos: travessão `—`, `teríamos`, `seríamos`, exclamação fora de código, e os 7 nomes proibidos. Resultado esperado: zero. (Use o Grep do agente, não shell.)

- [ ] **Step 2: Conferir o checklist de deploy do GEO (Seção 8)**

Reler `docs/GEO-SEO-PIAR.md` Seção 8 e marcar: H1 com entidade/ano/cidade, ≥3 fatos numerados por página, zero placeholder, hero do banco `/brand/`, meta title+description com fato.

- [ ] **Step 3: Build final**

Run: `npm run build`
Expected: build conclui sem erro.

- [ ] **Step 4: Resumo para o Danilo**

Listar o que mudou (blocos por página), confirmar fatos preservados, e perguntar se libera a próxima fase (demais páginas, uma a uma).

---

## Self-Review (executada na escrita do plano)

- **Spec coverage:** §3 Manual v2 → Task 1. §6 Mapa de Registro Home → Task 2/3. /sobre (decidido na §12) → Task 4/5. §4 portões → Checklist + Steps de verificação. §8 fluxo (review → sign-off → aplica) → ordem Task 2→3 e 4→5 com portões humanos. §11 aceite → Task 6. Coberto.
- **Placeholders:** os "Depois" finais das Tasks 2/4 são gerados-e-aprovados na execução (não dá para pré-escrever copy que depende do sign-off humano); o método, o registro por bloco, os fatos obrigatórios e os 4 exemplos canônicos travados estão todos especificados. Demais steps têm conteúdo/comandos concretos.
- **Consistência:** os ids, linhas e nomes de `const` foram conferidos contra os arquivos lidos (`index.astro` e `sobre.astro`). Exits e fatos batem com `GEO-SEO-PIAR.md` §1.
