# Deploy v0.2.11 — rd-campos-como-string

- **Quando:** 2026-09-23 13:43
- **Ambiente:** production (indexavel)
- **Commit:** 2b0c306 (branch diagnostico-autoridade)
- **Tag anterior:** v0.2.10
- **Arquivo pra arrastar no Netlify:** `site_v0.2.11.zip` (34.24 MB)
- **Rotas publicadas:** 37

## O que mudou desde o deploy anterior

**Esta é a versão que resolve a pontuação não chegando no RD.** Subir esta, e
não a v0.2.10.

## A causa

O identificador estava certo o tempo todo (`cf_diagnostico_nota`) e o payload
saía com o valor. O problema era o **tipo do dado**.

O schema da API de conversões do RD tipa **todo** campo `cf_` como string:

```json
"cf_custom_field_name": "custom field value"   // type: string
```

E a página mandava número JSON cru: `"cf_diagnostico_nota": 73`, sem aspas. O RD
responde 200, grava o contato, as tags e a origem, e **descarta o campo em
silêncio**. Nada aparece no console, nada aparece no painel.

Isso explica o sintoma exato: `cf_diagnostico_faixa` chegava, porque já era
texto; a nota e os cinco territórios não chegavam, porque eram número.

Agora sai assim, com aspas:

```json
"cf_diagnostico_nota": "73",
"cf_diagnostico_imprensa": "17"
```

Os campos no painel continuam sendo do **tipo Número**. Não precisa mudar nada
no RD: quem converte `"73"` de volta para número é o próprio RD.

## Como confirmar que funcionou

1. Subir este zip.
2. Refazer o teste **com e-mail novo**. Os contatos dos testes anteriores podem
   ter ficado com o campo vazio gravado, e olhar para eles vai continuar
   mostrando vazio mesmo com tudo certo agora.
3. Abrir o contato no RD e conferir `cf_diagnostico_nota` contra a nota que
   apareceu na tela.

Se ainda assim não aparecer, aí sobra uma hipótese: o identificador de API que
o RD gerou é diferente de `cf_diagnostico_nota`. Conferir em Configurações →
Campos personalizados, na coluna do identificador. O RD costuma gerar o
identificador a partir do **nome** do campo, e o nome sugerido no briefing tem
travessão ("Diagnóstico — nota"), que pode ter virado outra coisa.

## Ressalva honesta

Isto é hipótese bem fundamentada no schema publicado do RD, verificada no que a
página coloca no fio, mas **não é prova contra a conta real**. Só um envio de
verdade confirma, e esse teste é de quem tem o painel.

## Também nesta versão

Vem junto o que estava na v0.2.10, que não chegou a subir:

- **Data fora da tela de resultado.** O bloco agora mostra "2 dias presenciais
  em São Paulo" e "30 cadeiras por edição". O resultado circula em PDF e é
  encaminhado, então data na tela envelhece junto com o arquivo. A `/themic`
  não muda, continua anunciando a data da Edição 1.
- **Erro do RD com o corpo da resposta**, não só o número do status.
- Correção interna: o corte de acento que monta a tag da faixa estava com os
  diacríticos literais no arquivo, e não na forma escapada como a v0.2.8
  afirmava. Funcionava, mas quebraria em silêncio se algum editor normalizasse
  o arquivo. Agora corta por código de caractere, com a fonte em ASCII puro.

### Arquivos alterados (git)

```
M	deploys/2026-09-23_1255_v0.2.10_resultado-sem-data/notes.md
M	src/pages/diagnostico.astro
```
