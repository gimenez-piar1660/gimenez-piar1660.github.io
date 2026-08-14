# Copy · Media Training na Voz PiaR v2 + andaime GEO

> **Data:** 2026-06-29 · **Status:** revisão para sign-off do Danilo (nada aplicado no `.astro` ainda)
> **Página:** `src/pages/media-training.astro` · **Verdito da auditoria:** NEEDS WORK · prioridade SEO/GEO **ALTA**
> **O que NÃO muda:** o conceito-assinatura (o campo magnético / o porta-voz como ímã da audiência), a animação de fundo, a estrutura visual e a família da /processos. Mexo só na copy e no andaime de GEO.

## Por que esta página entrou no "mexer"
1. **Tique de voz dominante:** "Não X. É Y." (e variações) aparece ~8× — é o ritmo que a Voz v2 existe para matar.
2. **Sem andaime GEO:** não tem abstract answer-first no topo, não tem FAQ nem `FAQPage` schema, e o único fato (13 anos / 470+) está enterrado no CTA.
3. **Dois "a gente"** (banido): no eyebrow dos reflexos e numa resposta do balcão.
4. **Título e meta** sem âncora de entidade nem fato; a meta abre com o próprio tique.

## Os 2 portões (cada bloco abaixo passa nos dois)
```
[ ] Humano: zero "Não X. É Y." dominante · zero travessão/!/“?” retórico · zero "a gente" · sacada + respiro
[ ] GEO: ≥1 fato extraível OU definição answer-first · entidade nomeada · presente, 1ª pessoa plural
```
> Mantenho **um** contraste pontual na página inteira (permitido): a frase "Não acrescentamos máscara. Removemos o ruído…" — é a verdade central do treino e não segue o template.

---

## A · Título e meta (o que Google + IA leem primeiro)

### A1 · `<title>` (linha 88)
- **Antes:** `Media Training · A voz que faz a imprensa procurar você`
- **Depois:** `Media Training: a voz que faz a imprensa procurar você | PiaR`
- *Por quê:* mantém o termo-cabeça "media training" no início e o gancho, e adiciona a entidade (PiaR). *(Confirmo no apply se o BaseLayout já anexa a marca, pra não duplicar.)*

### A2 · `<meta description>` (linha 89) — **CORRIGIR: abre com o tique + sem fato**
- **Antes:** "Media training não é decorar resposta: é ganhar tanta massa de autoridade que a imprensa é atraída até você. Como a PiaR transforma o porta-voz num campo magnético que alinha câmeras, microfones e jornalistas, e entrega a frase que vira manchete."
- **Depois:** "Media training prepara o porta-voz para falar com imprensa, investidores e clientes com clareza e mensagem citável. A PiaR treina porta-vozes desde 2013, em São Paulo, da entrevista de rotina à sala de crise."
- *Por quê:* answer-first (define o termo na 1ª frase, que é o que a IA cita), fato extraível (2013, São Paulo), sem o tique de abertura. Fato: 2013 · São Paulo.

---

## B · NOVO bloco: abstract answer-first (entra logo depois do herói)

Hoje o herói é 100% metáfora — a IA não acha a definição. Proponho um bloco curto novo (mesmo estilo `section dark tight` que a página já usa), entre o herói e "O ATRITO":

```
Eyebrow: O que é media training
Parágrafo: "Media training é o preparo de porta-vozes para falar com a imprensa e com
qualquer audiência que decide — com clareza, segurança e mensagem citável. Na PiaR, esse
treino roda desde 2013, em São Paulo, ao lado de 470+ marcas: descobre os ativos da sua
voz e instala os reflexos que sustentam tanto a entrevista de rotina quanto a sala de crise."
```
- *Por quê:* é o trecho que ChatGPT/Gemini/Perplexity citam como definição. Answer-first + 3 fatos (2013, São Paulo, 470+). **Sem travessão na versão final** (uso vírgula: "que decide, com clareza…").
- Portões: Humano ok · GEO: define o termo + 3 fatos.

---

## C · Reescritas de voz (matar o tique dominante)

### C1 · H1 do herói (linha 105) — tique
- **Antes:** "Não é só falar com a imprensa. É virar o ímã da `<span class="warm">`audiência`</span>` que decide."
- **Depois:** "A voz que vira o ímã da `<span class="warm">`audiência`</span>` que decide."
- *Por quê:* mantém o conceito (ímã + audiência) e o grifo amarelo, vira declarativa. O fato fica no abstract logo abaixo.

### C2 · Sub do herói (linha 107) — tique na abertura
- **Antes:** "Media training não é decorar resposta nem ensaiar sorriso. É treinar a sua voz para atrair quem importa: o jornalista, sim, mas também o comprador, o investidor e o talento…"
- **Depois:** "Treinar a voz é preparar o porta-voz para atrair quem importa: o jornalista, claro, e também o comprador, o investidor e o talento, espalhados em todo veículo que conversa com eles. A pergunta difícil deixa de ser ameaça e vira palco."
- *Por quê:* tira a antítese de abertura, preserva a substância e a sacada ("vira palco").

### C3 · H2 "O campo" (linha 133) — antítese
- **Antes:** "Treinar é virar o ímã, não decorar o roteiro."
- **Depois:** "Treinar é virar o ímã que alinha a audiência."
- *Por quê:* a metáfora da limalha logo abaixo já carrega o "não é decorar"; aqui fica declarativa.

### C4 · H2 "Veículo" (linha 166) — tique
- **Antes:** "Veículo não é só a mídia. É quem fala com o seu comprador."
- **Depois:** "Veículo, na língua do CMO, é todo canal que fala com o seu comprador."
- *Por quê:* declarativa, mesmo sentido, e já amarra na "língua do CMO" (o eyebrow da seção).

### C5 · Lede "Ativos" (linha 205) — tique
- **Antes:** "Magnetismo não é carisma de palco. É ativar os temas certos da sua trajetória…"
- **Depois:** "Magnetismo, aqui, é ativar os temas certos da sua trajetória, aqueles que fazem uma audiência específica parar para ouvir."

### C6 · Punch "Ativos" (linha 216) — antítese
- **Antes:** "Treinar a voz é descobrir e ativar esses `<span class="warm">`ativos`</span>`, não decorar mensagem."
- **Depois:** "Treinar a voz é descobrir e ativar esses `<span class="warm">`ativos`</span>` da sua trajetória."

### C7 · Punch final dos argumentos (linha 297) — tique
- **Antes:** "Media training não é aula de oratória. É construir a `<span class="warm">`autoridade`</span>` que faz a imprensa orbitar você."
- **Depois:** "Media training constrói a `<span class="warm">`autoridade`</span>` que faz a imprensa orbitar você, muito além de uma aula de oratória."

### C8 · "a gente" banido (2 lugares)
- **Linha 181 (eyebrow):** "Os reflexos que a gente instala" → **"Os reflexos que instalamos"**
- **Linha 56 (resposta do balcão):** "A gente compete por valor, não por volume." → **"Competimos por valor, não por volume."**

### C9 · (opcional) eco de regra-de-três
- **Linha 123:** "…sair clara, curta e citável quando a luz acende." → **"…sair pronta para citação quando a luz acende."**
- *Por quê:* o CTA (linha 307) já usa "clara, segura e citável"; isto evita o eco do trio terminando em "citável". Só aceito se você curtir.

---

## D · NOVO: FAQ + `FAQPage` schema (o maior ganho de GEO)

Entra uma seção de FAQ antes do CTA, com `FAQPage` JSON-LD (ao lado do schema `Article` que já existe). Cada resposta é citável e carrega fato/entidade. Já costura links internos para **/reputacao** e **/pep** (a auditoria apontou linkagem fraca).

1. **O que é media training?**
   "Media training é o preparo de porta-vozes e executivos para falar com a imprensa e com qualquer audiência que decide, com clareza, segurança e mensagem citável. Em vez de decorar respostas, instala reflexos que funcionam em qualquer pergunta, da entrevista de rotina à crise."

2. **Quanto custa um media training?**
   "O investimento varia conforme o formato (sessão pontual, programa para um porta-voz ou preparação de um time), o número de porta-vozes e o nível de exposição da marca. Na PiaR, o valor é definido sob consulta, a partir de um diagnóstico do momento e dos veículos que importam para o seu mercado."

3. **Como funciona o media training da PiaR?**
   "Começa por um diagnóstico do porta-voz e dos veículos onde a audiência dele está. Depois mapeamos os ativos da voz (história, trajetória, tese) e instalamos quatro reflexos: a ponte, o trio de pontos citáveis, a prova e o silêncio. O treino usa simulações com perguntas reais, incluindo cenário de crise."

4. **Media training é para quem?**
   "Para quem fala em nome da marca: fundadores, C-level e porta-vozes técnicos. Prepara para entrevista de imprensa, podcast, palco, apresentação a investidores e resposta em crise, em todo veículo que conversa com quem decide a compra."

5. **Media training prepara para situações de crise?**
   "Sim. Parte do treino simula a luz vermelha da crise: reconhecer, contextualizar e redirecionar em quinze segundos, para a notícia ruim perder tração antes de virar manchete de capa. É a ponte entre o treino de voz, a [gestão de reputação](/reputacao) e a metodologia [PEP](/pep)."

---

## E · Plano de aplicação (só depois do seu sign-off)
1. `media-training.astro` frontmatter: novo `const faq = [...]` (as 5 Q&As do bloco D).
2. Título (A1) + meta (A2).
3. Novo bloco abstract (B) entre herói e "O ATRITO".
4. Reescritas C1–C8 (e C9 se você aprovar).
5. Nova seção FAQ (renderiza `faq.map`) antes do CTA + `FAQPage` JSON-LD ao lado do `Article`.
6. `npm run build` verde antes de fechar.

> **Decisões suas:** (a) título com "| PiaR" ok? (b) aceita o bloco abstract novo (B)? (c) aprova as 5 FAQs (D) e os links /reputacao + /pep? (d) topa o ajuste opcional C9?
