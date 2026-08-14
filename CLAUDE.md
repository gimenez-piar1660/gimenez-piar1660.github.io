# CLAUDE.md — site PiaR (artools)

Guardrails de criação do site. Todo Claude que abrir este projeto (Danilo, colaboradores)
segue estas regras. Elas valem acima do comportamento padrão. Se o usuário pedir algo que
contraria uma regra aqui, aponte a regra antes de executar.

Guias operacionais complementares: [PILOTAR.md](PILOTAR.md) (como rodar e editar sem código),
[DEPLOYS.md](DEPLOYS.md) e [docs/deploy-e-versionamento.md](docs/deploy-e-versionamento.md).

---

## Identidade e voz

- **Identidade PiaR é inegociável:** amarelo, preto e branco. Fonte oficial **Montserrat**
  (principal) + **Open Sans** (secundária). Não introduzir Sora, Fraunces ou outras.
- **Escreva como gente, em 1ª pessoa, com fio narrativo.** Referência de tom: Rony Meisler
  (Reserva). Humano contando história, não deck corporativo.
- **Evite o vício "não é X, é Y"** (antítese empilhada). Soa como IA e cara de apresentação.
- A home é um filme sobre a **VOZ** (PR, microfone de podcast). A IA fica em segundo plano,
  nunca no centro. A massa gravitacional viaja pela página (referência Gargantua, sem grid).
  Faixa de clientes é fina, só logos.

## Regra dura: sem cara de IA

- **NUNCA usar travessão (— ou –).** Em prosa, trocar por dois-pontos, vírgula ou ponto.
  Exceção legítima: intervalos numéricos (ex.: `2019–2024`) e separadores de título.
  Isso é o "tell" número um de texto gerado. Sempre re-ler o que escreveu e caçar travessão.
- **pt-BR com acentuação correta, sempre.** Agentes e ferramentas que geram página às vezes
  comem acentos (inclusive dentro de JSON-LD/schema). Depois de gerar conteúdo, re-grep por
  palavras-chave (`conteúdo`, `análise`, `você`, `não`) e corrigir antes de dar por pronto.

## Design

- Direção visual: **dark + amarelo + Montserrat.** O blend creme/Mastercard foi rejeitado
  para o site. Manter só o contorno topográfico + parallax por `lerp`.
- Fotos com fundo chapado exigem container **exatamente** da mesma cor (`#000`, não uma
  variável aproximada como `--ink-deep`), senão aparece a emenda.

## Estrutura do projeto

- **19 páginas bespoke** foram promovidas de `/pre-deploy` para a raiz (deploy-ready).
  `processos` virou `/para-cmos`. Nav usa `BASE=''`. O blend fica em staging (noindex).
- `/pep` é o "sistema modular" lego/encaixe, animado e indexado.
- Páginas simples em Markdown: `src/content/pages/`. Páginas complexas: `src/pages/`.
- Mídia bruta e pesada (vídeos originais, PSDs) fica **fora do repo**, em `artools-raw/`.

## Disciplina técnica

- **Home "quebrada" no dev quase sempre é cache, não código.** Sintoma: 504 em `gsap`/`lenis`.
  Causa: `.vite/deps` obsoleto. Fix: matar o dev, `rm -rf node_modules/.vite`, reiniciar.
  Commit e build de produção **não** são afetados. Não saia mexendo no código por causa disso.
- **Sistema de deploy é manual e versionado:** `npm run deploy:snapshot` carimba `deploys/`,
  zipa e tagueia. `main` = no ar; `staging` = noindex. Há **2 correções de Windows/OneDrive**
  no script (zip com barra normal + `Remove-Item` nativo). **Não reverter essas duas.**
- Web Companion no Windows: o launcher quebra com `spawn EINVAL`; o fix é uma linha
  (`shell: true`) no `project-browser-server.mjs`. Se voltar a quebrar, é aí.

## Definição de "pronto" (aplicar a tudo)

1. **Verificar com evidência, nunca só confiar.** Rodou? Renderizou? Olhou o resultado?
2. Checklist antes de entregar: acentuação pt-BR correta (incluindo JSON-LD), zero travessão
   de prosa, ícones/assets carregando, sem conteúdo duplicado, ressalvas honestas.
3. Disciplina Karpathy: mudança cirúrgica, sem reescrever o que já funciona; explicitar
   suposições; definir critério de sucesso verificável antes de começar.
4. Passe de auto-crítica pós-entrega: "dá pra deixar mais impressionante?" antes de fechar.

---

## Fluxo de colaboração (dois ou mais editando)

- **Sempre `git pull` antes de começar** a trabalhar.
- **Uma branch por tarefa** (`git switch -c minha-tarefa`), não commitar direto na `main`.
- Abrir Pull Request no GitHub pra juntar; a `main` é o que está no ar.
- Deploy continua manual e versionado (ver DEPLOYS.md). Não publicar sem alinhar.
