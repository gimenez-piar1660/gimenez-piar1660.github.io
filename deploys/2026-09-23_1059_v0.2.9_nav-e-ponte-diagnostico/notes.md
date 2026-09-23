# Deploy v0.2.9 — nav-e-ponte-diagnostico

- **Quando:** 2026-09-23 10:59
- **Ambiente:** production (indexavel)
- **Commit:** c8df036 (branch diagnostico-autoridade)
- **Tag anterior:** v0.2.8
- **Arquivo pra arrastar no Netlify:** `site_v0.2.9.zip` (34.24 MB)
- **Rotas publicadas:** 37

## O que mudou desde o deploy anterior

Dois caminhos até a `/diagnostico`, que na v0.2.8 existia mas não tinha como
ser alcançada a partir do site: só chegava quem recebesse o link de campanha.

**Nav:** item "Diagnóstico de Autoridade" ao lado de The Mic, no desktop e no
menu do celular. Entrou nas 33 páginas que têm nav, nenhuma ficou de fora.

**LP /themic:** uma ponte logo depois das seis dores ("Alguma dessas frases já
passou pela sua cabeça?"). É o ponto em que a pessoa acabou de se reconhecer e
a pergunta natural é em qual delas ela está pior. Quem ainda não decide dois
dias de imersão responde 10 perguntas e volta sabendo o que tem a ganhar.

## Por que o rótulo na nav é longo

O botão de CTA da nav diz **"Agendar diagnóstico"** e leva a `/contato`, que é
conversa com o comercial. Um "Diagnóstico" solto ao lado viraria dois itens com
o mesmo nome e destinos diferentes na mesma barra. Por isso o item vai por
extenso. Medido em 1440, 1280 e 1100px: a nav não estoura em nenhuma.

Se incomodar ter as duas palavras na mesma barra, a saída é renomear o botão de
CTA (algo como "Falar com a gente"), mas isso mexe num elemento de conversão que
já está rodando, então ficou de fora daqui.

## Os links internos vão sem UTM, e isso é de propósito

`gravarAtribuicao()` em `ConsentimentoCookies.astro` sobrescreve o cookie
`piar_atrib` sempre que vê UTM nova na URL ("a campanha paga mais recente
vence"). Se o link da nav ou o da LP levasse `?utm_source=themic`, quem chegou
por um anúncio do Meta teria a origem real **apagada e trocada por "themic"** ao
clicar. É exatamente o dado que o briefing quer proteger.

Portanto: link interno sempre `/diagnostico` limpo. Só campanha externa carrega
UTM. Conferido no build, o único href que sai é `/diagnostico`.

## O que continua pendente da v0.2.8

Os **7 campos `cf_diagnostico_*` no painel do RD** (lista em
`deploys/2026-09-22_1747_v0.2.8_diagnostico-autoridade/notes.md`). Sem eles o
lead entra normal e só a pontuação se perde.

E as waveforms da `/themic` seguem invisíveis, mesmo problema de escopo do Astro
descrito na v0.2.8. Continua fora de escopo aqui.

### Arquivos alterados (git)

```
M	deploys/2026-09-22_1747_v0.2.8_diagnostico-autoridade/notes.md
M	src/components/Nav.astro
M	src/pages/themic.astro
```
