# Deploy v0.2.14 — diagnostico-piar

- **Quando:** 2026-09-29 14:51
- **Ambiente:** production (indexavel)
- **Commit:** e72b9ec (branch diagnostico-piar)
- **Tag anterior:** v0.2.13
- **Arquivo pra arrastar no Netlify:** `site_v0.2.14.zip` (34.28 MB)
- **Rotas publicadas:** 38

## O que mudou desde o deploy anterior

Entra a **/diagnostico-de-reputacao**: o Diagnóstico de Autoridade com a
identidade da PiaR, para ações de **outbound**. É o mesmo questionário da
/diagnostico (a isca do THE MIC): 10 perguntas, nota de 0 a 100 repartida em
cinco territórios, resultado na hora e versão em PDF. O que muda é o
fechamento: o resultado aponta o território mais frágil, oferece o serviço da
PiaR que resolve aquilo, lista os outros serviços e termina no botão "Quero
conversar com a PiaR", que leva ao /contato.

A página é de uso externo: **não está na nav nem no rodapé**, só chega quem
recebe o link. Continua indexável, como todas as outras (regra do CLAUDE.md).

Adaptada do arquivo `diagnostico-autoridade-piar.html`, de 29/09/2026. Uma
primeira versão desta rota, feita no mesmo dia, foi substituída por ele antes de
subir.

### Link para as campanhas

```
https://piar.group/diagnostico-de-reputacao?utm_source=outbound&utm_medium=email&utm_campaign=diagnostico-piar
```

Trocar `utm_medium` pelo canal (`linkedin`, `whatsapp`) e usar `utm_content`
para separar cadência ou peça. Tudo em minúsculas, sem acento e sem espaço.

## ATENÇÃO: o que falta fora do código

**Um campo novo no RD.** Criar em Configurações → Campos personalizados:

| Nome a digitar | Identificador que o RD gera | Tipo |
|---|---|---|
| `Diagnostico servico` | `cf_diagnostico_servico` | Texto |

Digitar o nome **sem acento e sem o prefixo `cf_`**. O RD acrescenta o `cf_`
sozinho: quem digita `cf_diagnostico_servico` no nome ganha
`cf_cf_diagnostico_servico`, que nunca recebe nada (foi o que aconteceu com os
campos da /diagnostico em 23/09). Criar, conferir o identificador gerado e só
então dar por pronto. Enquanto o campo não existir, o lead entra normalmente e o
serviço indicado fica só na tag `piar-servico-*`.

Os outros sete campos (`cf_diagnostico_nota`, `_faixa`, `_imprensa`,
`_digital`, `_busca`, `_narrativa`, `_preparo`) são os mesmos da /diagnostico e
não precisam ser criados de novo. As duas conversões
(`piar-diagnostico-inicio` e `piar-diagnostico-completo`) e as tags o RD cria
sozinho no primeiro envio.

### Tags que o lead recebe

- `piar-diagnostico-autoridade`: todo lead, desde o preenchimento dos dados,
  mesmo que abandone as perguntas no meio.
- `piar-diagnostico-invisivel`, `-conhecido-pelos-seus`, `-lembrado-as-vezes`
  ou `-referencia`: a faixa da nota.
- `piar-servico-relacoes-publicas`, `-comunicacao-integrada`, `-dados-geo`,
  `-reputacao-branding` ou `-media-audience-training`: o serviço que o
  resultado ofereceu.
- `piar-tem-assessoria`: respondeu que o repórter fala com a assessoria dele.

## Também nesta versão

- **/diagnostico (THE MIC):** perguntas, análises e faixas saíram da página
  para `src/data/diagnostico.ts`, fonte única das duas iscas, porque as duas
  gravam nos mesmos campos do RD. Nada muda para quem usa: comparei a versão
  anterior e esta em 4 cenários (notas 0, 57, 80 e 100), e o payload do RD e o
  texto da tela saíram idênticos.
- **BaseLayout:** aceita `ogDescription`, o texto da prévia do link no WhatsApp
  e no LinkedIn. As outras páginas continuam usando o `description`, sem
  mudança.

## O que mudou em relação ao arquivo recebido

- 6 travessões fora: 1 na abertura e 5 no texto compartilhado, que a
  /diagnostico já tinha corrigido na v0.2.8.
- "Treze anos, mais de 470 marcas, 11 empresas" agora vem de `site.ts` e
  aparece como "13 anos".
- Envio ao RD: o arquivo mandava os campos de nota como `null` no primeiro
  envio e como número cru no segundo, os dois defeitos resolvidos na v0.2.10 e
  na v0.2.11. Agora eles só vão no envio final, como texto. Entrou também a
  origem completa (UTM, página de entrada, referrer), igual às outras páginas.
- "Refazer o diagnóstico" saía invisível no bloco escuro: texto e borda escuros
  sobre fundo preto. Agora aparece.
- Fontes do próprio site no lugar do Google Fonts, e cinzas de texto pequeno um
  tom mais escuros para passar no contraste mínimo de leitura.
- Consentimento: ficou o do arquivo ("Ao continuar, você autoriza..."), com
  link para a Política de Privacidade. As outras páginas usam checkbox
  obrigatório.
- Máscara no campo de WhatsApp e armadilha de robô, iguais às das outras
  páginas.

## O que foi verificado antes de fechar

Em Chrome headless, com o envio ao RD substituído para nenhum lead de teste
cair na conta de produção:

- O arquivo recebido e a página nova lado a lado, com as mesmas respostas:
  mesmo visual, com as diferenças da lista acima.
- Validação dos 4 campos, e nenhum envio com o formulário vazio ou com a
  armadilha de robô preenchida.
- Nota 57 batendo com o mapa (17 + 14 + 3 + 17 + 6), os dois envios com a UTM
  de outbound, campos como texto e as tags certas.
- Fechamento nos quatro casos: dois territórios frágeis, um, nenhum e empate.
- PDF A4 sem card partido, e 390px de largura sem scroll horizontal.
- Token público do RD conferido com payload vazio, que responde
  400 AT_LEAST_ONE_REQUIRED quando a chave é válida, sem criar lead.

Falta o teste de ponta a ponta **com dados reais, do celular**, olhando o
contato no RD. Esse só dá para fazer depois de subir o zip e criar o campo.

### Arquivos alterados (git)

```
M	deploys/2026-09-29_1148_v0.2.13_remove-danilo/notes.md
A	public/brand/lp/diagnostico-piar/og.png
A	src/data/diagnostico.ts
M	src/layouts/BaseLayout.astro
A	src/pages/diagnostico-de-reputacao.astro
M	src/pages/diagnostico.astro
```
