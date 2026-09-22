# Deploy v0.2.8 — diagnostico-autoridade

- **Quando:** 2026-09-22 17:47
- **Ambiente:** production (indexavel)
- **Commit:** bfe9b96 (branch diagnostico-autoridade)
- **Tag anterior:** v0.2.7
- **Arquivo pra arrastar no Netlify:** `site_v0.2.8.zip` (34.24 MB)
- **Rotas publicadas:** 37

## O que mudou desde o deploy anterior

Entra a **/diagnostico**, o Diagnóstico de Autoridade: autodiagnóstico de 10
perguntas que dá uma nota de 0 a 100 na hora, repartida em cinco territórios,
com versão para salvar em PDF. É isca de topo de funil para o THE MIC, criada
porque a LP pede uma decisão grande demais de quem chega frio. O botão no fim
leva para a /themic com UTM própria.

Adaptada do arquivo `diagnostico-autoridade.html` e do briefing "THE MIC:
publicar o Diagnóstico de Autoridade", ambos de 22/09/2026.

Junto entra `src/data/themic.ts`, fonte única de data, local e vagas da edição.
A /themic passa a ler de lá: antes "22 e 23 de outubro" vivia dentro do
themic.astro e a página nova teria que repetir na mão. Nada muda no visível
da /themic, é só de onde o valor vem.

## ATENÇÃO: o que falta fora do código

A página está pronta e envia para o RD, **mas sete campos ainda não existem no
painel**. Enquanto não existirem, o lead entra normalmente (nome, e-mail,
telefone, empresa, tags e origem chegam), só a pontuação se perde: o RD
responde 200 e descarta em silêncio campo que não conhece.

Criar em Configurações → Campos personalizados, com o identificador de API
**exatamente** assim:

| Identificador | Nome | Tipo |
|---|---|---|
| `cf_diagnostico_nota` | Diagnóstico: nota | Número |
| `cf_diagnostico_faixa` | Diagnóstico: faixa | Texto |
| `cf_diagnostico_imprensa` | Diagnóstico: imprensa | Número |
| `cf_diagnostico_digital` | Diagnóstico: digital | Número |
| `cf_diagnostico_busca` | Diagnóstico: busca e IA | Número |
| `cf_diagnostico_narrativa` | Diagnóstico: narrativa | Número |
| `cf_diagnostico_preparo` | Diagnóstico: preparo | Número |

As duas conversões (`diagnostico-autoridade-inicio` e
`diagnostico-autoridade-completo`) e as seis tags o RD cria sozinho no
primeiro envio. Não precisa cadastrar nada.

## Rastreamento: o que conferir no servidor

O Passo 4 do briefing não é código, é configuração. A página lê a UTM da URL,
mas se um redirecionamento cortar a query string a origem do lead se perde:

- Redirect de domínio (sem www para com www, http para https) precisa
  **preservar a query string**.
- Cache de página estática está ok, desde que a URL completa chegue ao
  navegador.

Sintoma de que isso quebrou: `traffic_source` chegando vazio ou como "direto"
em lead que veio de link com UTM.

## O que foi verificado antes de fechar

Em Chrome headless, com o envio ao RD substituído para nenhum lead de teste
chegar na conta de produção:

- Validação dos cinco campos, incluindo o aceite obrigatório.
- As 10 perguntas, com a opção "Sim, ele fala com a minha assessoria".
- Nota 73 batendo com a soma do mapa dos cinco territórios.
- As duas conversões, com as tags `diagnostico-autoridade`,
  `diagnostico-lembrado-as-vezes` e `tem-assessoria`.
- `traffic_source` chegando como `whatsapp` a partir da UTM da URL.
- PDF com 4 páginas, fundo preto até a borda, cabeçalho com o nome da pessoa,
  nenhum card partido e nenhuma página em branco no fim.
- 390px de largura sem scroll horizontal.

Falta o teste de ponta a ponta **com dados reais, do celular**, olhando o
contato no RD. Esse é o teste de aceite do briefing e só dá para fazer depois
de criar os campos e publicar.

## Pendência conhecida, fora do escopo deste deploy

As waveforms da /themic (hero, fechamento e confirmação do formulário) estão
**invisíveis em produção**, e já estavam antes desta versão. As barras são
criadas em JavaScript e o Astro escopa CSS carimbando `data-astro-cid-*` em
cada elemento do seletor; elemento criado em runtime não recebe o carimbo, a
regra não casa e as 64 barras saem com 0px de largura e fundo transparente.
Verificado no build. A /diagnostico não tem o problema porque o `<style>` dela
é `is:global` com todo seletor começando em `.diag`, exatamente por causa
disso. O conserto na /themic é copiar o atributo de escopo do elemento pai
dentro de `makeWave`, mas ficou de fora daqui para não misturar com a entrega
da página nova.

### Arquivos alterados (git)

```
A	src/data/themic.ts
A	src/pages/diagnostico.astro
M	src/pages/themic.astro
```
