# Spec · Voz PiaR v2 — o filtro de escrita humana

> **Data:** 2026-06-25
> **Status:** Aprovado para spec (brainstorming concluído com Danilo)
> **Fase:** 1 de N — Manual de Voz v2 + prova na Home (e /sobre como segunda prova)
> **Substitui:** Seção 7 de `docs/GEO-SEO-PIAR.md` (tom de voz). Mantém intacta a Seção 2 (extratibilidade).

---

## 1 · O problema (em uma frase)

A copy do site está tecnicamente impecável e emocionalmente muda: alimenta a IA e esquece o humano. O sintoma que o Danilo sentiu é um padrão repetido de "frase de efeito que começa na negativa e vira na conclusão" (a antítese-tique), que cansa e denota IA.

**O plot twist que define a solução:** esse padrão não é um acidente do gerador. Ele está prescrito como regra oficial na Seção 7 do `GEO-SEO-PIAR.md` ("Antítese reativa × proativa: 'Não vendemos release. Identificamos o ativo raro.'" + "Frases curtas, factuais"). A IA estava obedecendo o guia. Portanto, corrigir os textos sem corrigir a regra que os gera só recria o vício na próxima página. **Esta spec reescreve a regra primeiro.**

A trava que torna o trabalho difícil e valioso: o site foi construído para GEO/SEO. A Seção 2 exige que cada frase entregue um fato extraível por IA (número, nome próprio, ano, cidade). O tom novo não pode ser metáfora solta. Tem que ser metáfora que carrega fato.

---

## 2 · Objetivos e não-objetivos

**Objetivos desta fase**
1. Definir a **Voz PiaR v2** (8 princípios + 2 portões + lista de banidos) como documento-gabarito.
2. Reescrever a **Home** e a **/sobre** bloco a bloco nessa voz, preservando 100% dos fatos canônicos e dos ganchos de design.
3. Entregar a reescrita primeiro como **doc de revisão** para sign-off do Danilo, antes de tocar no `.astro`.
4. Atualizar a Seção 7 do `GEO-SEO-PIAR.md` para a v2.

**Não-objetivos (ficam para fases seguintes)**
- Reescrever as 30+ páginas de serviço (entram uma a uma, com sign-off, depois da Home e da /sobre).
- Mexer em layout, design system, JSON-LD ou estrutura técnica.
- O "Workspace" de edição fácil para leigo (brainstorming separado, futuro).

---

## 3 · A Voz PiaR — o DNA (8 princípios)

1. **Sensação primeiro — o leitor é o briefing.** Todo bloco nasce do que o ICP *sente*, não do que queremos dizer. Pergunta-âncora: *"que pensamento isso deixa na cabeça dele depois que fecha a aba?"*
2. **Superfície elementar, fundo profundo.** Palavra simples por fora; emoção, filosofia e reframe por dentro. Nunca uma frase morna, sem carga.
3. **Neurolinguística que age.** Pressuposição, âncora sensorial, future-pacing, "você" implícito. A frase não descreve, ela mexe.
4. **Metáfora que carrega fato.** Toda imagem esconde um número, nome ou ano extraível. Sem isso é poesia solta; com isso é PiaR.
5. **Assinada por tema.** Cada seção recebe a letra que merece: mito na abertura, íntimo na voz, seco na prova, provocação no clímax. Nunca o mesmo tom raso do início ao fim.
6. **A sacada + a imprevisibilidade.** Todo bloco-chave tem uma virada que faz o leitor pensar. Respiro, imaginação, e nunca o caminho previsível.
7. **Musicalidade.** A copy soa como boa música lida em voz alta no fim de um dia cansado. Ritmo e cadência são parte do sentido, não enfeite.
8. **O fecho que vende — a fera domada.** Cada seção termina num fecho afinado por neurolinguística: a conclusão que faz agir sem cheirar a anúncio. Vende porque entende o cérebro, não porque grita.

---

## 4 · Os dois portões (todo bloco passa nos dois ou não sobe)

**Portão Humano**
- Zero tiques banidos (ver §5).
- Tem sacada, respiro e musicalidade.
- Deixa um pensamento na cabeça do leitor.

**Portão GEO**
- Pelo menos 1 fato extraível por bloco (número / nome próprio / ano / cidade).
- H1 e o abstract de 40 palavras (regra Gübür, Seção 3 do doc GEO) preservados.
- Zero nome proibido (ver §10).

Se um bloco passa só em um portão, não sobe. É essa trava que entrega "foda **e** encontrável".

---

## 5 · O filtro de escrita humana — a lista de banidos

O que denotava IA e agora fica proibido:

- **A antítese-tique:** "Não X. É Y." / "não é A, é B." (uso pontual de contraste é permitido; o que fica banido é o padrão como *ritmo dominante* da página).
- **Travessão (—)** e a "frase. curta. de efeito." empilhada.
- **Regra de três robótica** ("rápido, simples e eficiente").
- **Paralelismo mecânico** e eco de estrutura entre frases vizinhas.
- **Adjetivo vago de preenchimento** ("inovadora", "completa", "líder", "premiada") — já proibido na Seção 2 do doc GEO.
- **Conclusão-resumo** que repete o que já foi dito ("Em resumo…").
- **Exclamação** e **pergunta retórica com "?"** (provocação afirmada é permitida; ponto de interrogação retórico, não).

---

## 6 · O Mapa de Registro da Home

Mesma alma, intensidade diferente. Ordem segue a estrutura atual de `src/pages/index.astro`.

| Seção (id) | Assinatura | Sensação-alvo do ICP |
|---|---|---|
| Hero, 5 atos | Mito / abertura cinematográfica | "Isso aqui é diferente." |
| A Voz (`#virada`) | Íntimo / filosófico, quase sussurro | Reconhecimento: "é isso que eu vendo" |
| A Gravidade (`#corpos`) | Tese provocativa (a sacada) | "Para de perseguir, é perseguido" |
| As Forças (`#forcas`) | Funcional com alma | Clareza desejosa: cada frente vende sozinha |
| PEP (`#pep`) | Convite curioso | "Quero saber o que é isso" |
| A Prova (`#prova`) | Seco, os números mandam | Confiança fria: 13 anos, 470+, 8 exits |
| Quem lidera (`#lideranca`) | Humano / orgulho | "Tem gente de verdade na sala" |
| PiaRBoard (`#metodo`) | Transparência assertiva | "Eles abrem a caixa-preta" |
| Clímax (`#climax`) | Provocação + fecho que vende | Vontade de agir agora |

**Regra do Hero:** o H1 canônico ("Identificamos o ativo raro de cada marca e o transformamos em reputação.") é a tese travada (aprovada 2026-06-25, listada como Tese no doc GEO). Não muda. Os atos 2 a 4 e os subtítulos podem ganhar mais sacada, mantendo entidade + ano + cidade no conjunto.

---

## 7 · Exemplos canônicos (a referência da reescrita)

Calibrados e aprovados no brainstorming. Servem de régua para todo o resto.

### 7.1 · A Gravidade (tese, `#corpos`)

**Antes**
> "Marca forte não corre atrás do mercado. Quando ela tem massa, o mercado entra em órbita. E não vem só a imprensa. A mesma gravidade puxa quatro pessoas para perto da marca ao mesmo tempo..."

**Depois**
> "Toda marca quer ser desejada. Poucas entendem que desejo é peso: quanto mais massa uma marca acumula, menos ela precisa correr, porque o mercado é que entra na órbita dela. Faz 13 anos que construímos esse tipo de gravidade, marca por marca, mais de 470 até hoje, até o dia em que o comprador, o investidor, o talento e a imprensa chegam juntos, sem ninguém ter chamado."

### 7.2 · A Voz (`#virada`) — registro íntimo / filosófico

**Depois**
> "Faz 13 anos que escutamos o mesmo silêncio: empresas boas que ninguém ouve, porque ninguém ensinou o fundador a dizer a frase certa na hora certa. A imprensa corre atrás de quem tem a única coisa que só aquela marca pode dizer. Nosso trabalho é achar essa frase e colocá-la na boca do porta-voz antes de todo mundo."

### 7.3 · A Prova (`#prova`) — registro seco

**Depois**
> "Reputação é a única coisa que não se compra à vista: ela se acumula. Desde 2013, são 470 marcas, 8 startups acompanhadas até o exit e um fundador, Bruno Pinheiro, eleito profissional de imprensa no Startup Awards da ABStartups em 2018. Números falam baixo e não voltam atrás."

### 7.4 · O Clímax (`#climax`) — fecho que vende

**Depois**
> "A sua marca já tem um ativo raro. O que está em jogo é se o mercado já descobriu isso. Conte o seu contexto e, em até um dia útil, devolvemos onde está a oportunidade: na busca, na imprensa e nas conversas que decidem o seu mercado. Sem proposta automática, sem script. Só o diagnóstico que 470 marcas nos ensinaram a enxergar."

### 7.5 · Candidatos a assinatura de casa (opcionais)

- "Reputação é gravidade. Construímos a sua desde 2013."
- "Treze anos transformando marca em peso, e peso em manchete."
- "A imprensa não cobre quem aparece. Cobre quem pesa."

---

## 8 · Fluxo de trabalho (honra a regra: copy só com sign-off)

1. **Reescrever** a Home bloco a bloco em um doc de revisão (`docs/superpowers/copy/2026-06-25-home-voz-v2.md`), com Antes/Depois lado a lado e o registro de cada bloco.
2. **Sign-off do Danilo** sobre as palavras, bloco a bloco. Ajustes ficam no doc, não no `.astro`.
3. **Aplicar** ao `src/pages/index.astro` só os blocos aprovados, preservando todos os ganchos de design (palavras `warm-t`, `<em>` serif itálico, contadores de número, `data-count`).
4. **Conferir** o checklist de deploy do doc GEO (Seção 8) antes de qualquer build.
5. **Atualizar** a Seção 7 do `GEO-SEO-PIAR.md` para a v2 (os 8 princípios + 2 portões + banidos).

---

## 9 · Rollout (sem virar bagunça)

**Fase 1 (esta spec):** Home e /sobre juntas. **Depois:** demais páginas, **uma de cada vez, cada uma com sign-off**. O Manual de Voz vira o gabarito permanente: toda página nova já nasce na voz certa e o vício não volta. Cada página segue o mesmo fluxo da §8.

---

## 10 · Restrições inegociáveis (do `GEO-SEO-PIAR.md`)

- **Fatos canônicos, nunca arredondar:** fundação 2013, 13 anos até 2026, 470+ marcas, 8 exits (Axado, Trustvox, Vianuvem, Konduto, Getrak, GrandChef, Xtech Commerce, Supermercado Now), Bruno Pinheiro (CEO), Renniê Paro (COO), Gabriela Calencautcy (Projetos Especiais), São Paulo / Ipiranga, domínio `pep.piar.group`.
- **Nomes proibidos (placeholders):** Marina Oliveira, Caio Mendes, Laura Prado, Rafael Costa, Júlia Barreto, Ricardo Souza, Ana Vasconcelos.
- **Voz:** primeira pessoa do plural, sem "a gente". Verbos no presente. Acentos pt-BR completos, inclusive no JSON-LD.
- **Sem travessão (—)** no corpo do texto.

---

## 11 · Critérios de aceite da fase

- [ ] Seção 7 do `GEO-SEO-PIAR.md` substituída pela Voz v2.
- [ ] Home e /sobre reescritas, todos os blocos passam nos dois portões (§4).
- [ ] Zero tique banido (§5) em varredura final.
- [ ] Todos os fatos canônicos preservados; zero nome proibido.
- [ ] Ganchos de design intactos (`warm-t`, serif itálico, contadores).
- [ ] Sign-off explícito do Danilo antes de aplicar no `.astro`.
- [ ] `npm run build` roda sem erro.

---

## 12 · Riscos e perguntas em aberto

- **Risco de purpurismo:** o registro "long-copy 90s" pode escorregar para prolixo. Mitigação: o Portão GEO força fato em todo bloco, ancorando a poesia.
- **Risco de regressão de SEO:** frases mais longas podem diluir densidade de fato. Mitigação: regra de "1 fato extraível por bloco" mínima, não máxima.
- **Resolvido (2026-06-25):** `/sobre` entra nesta fase, junto com a Home.
- **Resolvido (2026-06-25):** sem linha-mãe por enquanto; a decisão sobre as candidatas (§7.5) fica adiada para depois da Home reescrita.
