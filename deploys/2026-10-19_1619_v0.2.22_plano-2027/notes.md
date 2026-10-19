# Deploy v0.2.22 — plano-2027

- **Quando:** 2026-10-19 16:19
- **Ambiente:** production (indexavel)
- **Commit:** 730a743 (branch plano-2027)
- **Tag anterior:** v0.2.21
- **Arquivo pra arrastar no Netlify:** `site_v0.2.22.zip` (34.42 MB)
- **Rotas publicadas:** 40

## O que mudou desde o deploy anterior

Entra a **/plano-2027**: a página de captura do material gratuito "Plano de
comunicação 2027 em uma página", feita a partir do `lp-plano-2027.html` da
Aninha e do briefing de 15/10/2026. Página independente, com topo e rodapé
próprios, fora do menu e do rodapé do site. Indexável, como todas.

Quem preenche o formulário vê "Pronto, o material é seu" e vai para o PDF no
Drive. A ida espera no mínimo 1,5 s (pedido do briefing) e também a resposta
do RD, com teto de 6 s para ninguém ficar preso numa rede lenta. Medido no
build: 1,53 s com o RD respondendo na hora, 3,03 s com o RD demorando 3 s,
6,01 s com o RD travado.

### Link para as campanhas

```
https://piar.group/plano-2027?utm_source=linkedin&utm_medium=organico&utm_campaign=plano-2027
```

Trocar `utm_source` e `utm_medium` pelo canal e usar `utm_content` para
separar a peça. Tudo em minúsculas, sem acento e sem espaço.

## ATENÇÃO: o que falta fora do código

**1. Dois campos novos no RD.** Configurações → Campos personalizados, tipo
lista de opções:

| Nome a digitar | Identificador que o RD gera | Opções, exatamente assim |
|---|---|---|
| `Numero de funcionarios` | `cf_numero_de_funcionarios` | 1 a 49 · 50 a 199 · 200 a 499 · 500 a 999 · 1.000 ou mais |
| `Orcamento 2027` | `cf_orcamento_2027` | Sim · Ainda não · Não sei |

Digitar o nome **sem acento e sem o prefixo `cf_`**: o RD acrescenta o `cf_`
sozinho, e quem digita `cf_orcamento_2027` no nome ganha `cf_cf_orcamento_2027`,
que nunca recebe nada. Criar um, conferir o identificador gerado, depois o
outro. Enquanto não existirem, o lead entra normalmente, mas essas duas
respostas se perdem em silêncio (o RD responde 200 mesmo assim).

**Cargo não precisa de campo novo:** vai no campo padrão Cargo (`job_title`),
o mesmo do /contato.

**2. Nada a configurar para conversão e tag.** A conversão
`material-plano-comunicacao-2027` o RD cria sozinho no primeiro envio, e a tag
`isca-plano-2027` vai dentro do próprio envio, em todo lead. A regra no RD que
o briefing sugere pode existir como redundância, mas não é necessária.

**3. NÃO ligar a integração/captura de formulários do RD para esta página.**
O formulário já chega ao RD pela API. Com a captura ligada, o mesmo lead
entraria duas vezes, uma delas com outro identificador de conversão.

**4. Teste com lead real, do checklist do briefing.** Depois de subir o zip:
enviar um teste com e-mail da PiaR por
`https://piar.group/plano-2027?utm_source=teste&utm_medium=teste`, conferir no
RD a conversão, os campos, a tag e a origem, e excluir o lead de teste. Este
teste eu não fiz: ele cria um lead de verdade na base e só dá para conferir no
painel.

### O que o lead leva para o RD

- Campos padrão: nome, e-mail, celular (`mobile_phone`), empresa e cargo.
- Personalizados: `cf_numero_de_funcionarios` e, se respondido,
  `cf_orcamento_2027`.
- Origem: `traffic_source`, `traffic_medium` e `traffic_campaign` (a "Origem"
  do lead no RD), mais os `cf_utm_*`, `cf_landing_page`, `cf_referrer`,
  `cf_pagina_conversao` e `cf_produto_interesse` das outras páginas. A UTM vem
  da URL desta visita ou, para quem aceitou os cookies, da primeira visita com
  UTM nos últimos 90 dias.
- Consentimento: `available_for_mailing` e base legal de comunicação por
  consentimento, porque o aviso do formulário diz que quem envia aceita receber
  conteúdos por e-mail. Sem isso, a conta com LGPD ligada pode barrar o e-mail
  de entrega da Aninha.

## O que mudou em relação ao arquivo recebido

- **Envio pela API do RD, no lugar da integração de formulários.** O loader do
  RD só carrega depois que a pessoa aceita os cookies de marketing (LGPD). Pela
  integração, quem recusa ou ignora o banner converteria sem chegar ao RD. A
  API é o caminho de /contato, /themic e /diagnostico e não depende do aceite.
  O código de monitoramento continua carregando nesta página como em todas,
  depois do aceite (conferido no build).
- **Formulário inteiro na tela do notebook.** O arquivo recebido deixava o
  aviso abaixo do botão 32px para fora em 1366x768. O título já cabia em três
  linhas, então baixar o h1 para 40px (a saída do briefing) não resolvia;
  entrou um aperto no respiro do card só para telas de até 700px de altura.
  Conferido em 1366x600, 1366x625, 1280x650, 1440x760, 1536x730 e 1920x960.
- **No celular**, os chips "8 perguntas · 1 página · 1h" estouravam a largura
  em 360px; agora quebram linha.
- **Logo:** o PNG embutido duas vezes em base64 virou o arquivo do site
  (`piar-vertical-negativo.png`, só sem a margem).
- **Fontes** do próprio site no lugar do Google Fonts.
- **Rodapé sem o telefone (11) 99169-8958.** O site não tem telefone público
  desde 29/09 (regra em `src/data/site.ts`). Se esse número deve aparecer,
  é só avisar. Entraram os links de Privacidade e Gerenciar cookies.
- **Aviso do formulário** com link para a Política de Privacidade.
- **Imagem de compartilhamento** (WhatsApp, LinkedIn) com a capa real do
  material, tirada do PDF no Drive. Título e descrição de compartilhamento são
  os do arquivo recebido.

## Também nesta versão

- **BaseLayout:** aceita `ogTitle`, o título da prévia do link. As outras
  páginas continuam usando o título normal, sem mudança.

### Arquivos alterados (git)

```
M	deploys/2026-10-15_1114_v0.2.21_nav-diagnostico-barra/notes.md
A	public/brand/lp/plano-2027/og.png
A	public/brand/lp/plano-2027/piar-vertical-negativo.png
M	src/layouts/BaseLayout.astro
A	src/pages/plano-2027.astro
```
