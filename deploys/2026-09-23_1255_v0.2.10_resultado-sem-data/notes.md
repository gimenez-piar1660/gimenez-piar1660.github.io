# Deploy v0.2.10 — resultado-sem-data

- **Quando:** 2026-09-23 12:55
- **Ambiente:** production (indexavel)
- **Commit:** 225801d (branch diagnostico-autoridade)
- **Tag anterior:** v0.2.9
- **Arquivo pra arrastar no Netlify:** `site_v0.2.10.zip` (34.24 MB)
- **Rotas publicadas:** 37

## O que mudou desde o deploy anterior

Duas coisas, uma de conteúdo e uma de rastreio.

**A data sai da tela de resultado do diagnóstico.** O bloco agora mostra
"2 dias presenciais em São Paulo" e "30 cadeiras por edição". O motivo é que o
resultado vira PDF e é encaminhado adiante: data na tela envelhece junto com o
arquivo, formato e tamanho da turma não. A `/themic` não muda, continua
anunciando a data da Edição 1 normalmente.

**Erro do RD passa a mostrar o corpo da resposta**, não só o número do status.
Quando um campo `cf_*` não existe na conta, ou o identificador de API saiu
diferente do combinado, é a resposta do RD que diz qual campo é. Sem isso, o
console mostrava só "respondeu 400" e o resto virava adivinhação no painel.

## Sobre o "faltando a pontuação no RD"

Não era bug da página publicada. O teste que acusou o problema foi feito no
arquivo `diagnostico-autoridade.html` do Desktop, e não na página no ar: o
print tem travessão, que não existe na versão publicada.

Rodei os dois em Chrome headless, com o `fetch` substituído para nada chegar na
conta real. A diferença está no primeiro envio, o `diagnostico-autoridade-inicio`,
que dispara quando a pessoa preenche os dados e antes de responder:

| Envio | Arquivo do Desktop | Página no ar |
|---|---|---|
| `...-inicio` | manda os 7 `cf_diagnostico_*` como `null` | não manda esses campos |
| `...-completo` | manda os valores | manda os valores |

Escrever `null` primeiro é o que cria o buraco: se o envio final falhar, se a
pessoa fechar a aba, ou se o RD processar os dois fora de ordem, o `null` vence
e o contato fica sem nota. A página publicada omite os campos no primeiro envio
justamente por isso, e só manda número no segundo.

Confirmado contra `https://piar.group/diagnostico`: nota 73 na tela, `73` em
`cf_diagnostico_nota`, os cinco territórios com número e a soma do mapa batendo
com a nota.

**Para refazer o teste:** usar a página no ar, não o arquivo do Desktop, e com
um e-mail novo. O contato do teste anterior pode ter ficado com os `null`
gravados, e olhar para ele vai continuar mostrando o campo vazio.

Se mesmo assim a pontuação não aparecer, aí o problema é o identificador de API
dos campos no painel. Abrir o F12 na aba Console durante o teste: com esta
versão, a resposta do RD aparece por inteiro e diz qual campo ele recusou.

### Arquivos alterados (git)

```
M	deploys/2026-09-23_1059_v0.2.9_nav-e-ponte-diagnostico/notes.md
M	src/data/themic.ts
M	src/pages/diagnostico.astro
```
