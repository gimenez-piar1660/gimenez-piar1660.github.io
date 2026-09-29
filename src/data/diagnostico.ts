// ============================================================
// DIAGNÓSTICO · perguntas, análises e faixas (fonte única)
// ------------------------------------------------------------
// Usado por duas páginas, que aplicam o MESMO questionário e gravam nos MESMOS
// campos do RD (cf_diagnostico_*):
//   /diagnostico               isca do THE MIC
//   /diagnostico-de-reputacao  isca da PiaR para outbound
// Por isso o texto vive aqui e não dentro de cada página: se uma pergunta
// mudasse só num lado, o mesmo campo passaria a medir coisas diferentes
// conforme a origem do lead, e a nota deixaria de ser comparável.
//
// As páginas recebem estes objetos por define:vars (viram JSON no HTML), então
// tudo aqui precisa ser serializável: texto, número, lista e objeto simples.
// ============================================================

/* ===================== PERGUNTAS =====================
   Opções em ordem crescente de maturidade. Pontos: 0, 3, 7, 10.
   10 perguntas x 10 pontos = 100. Dois territórios por pergunta x 2
   perguntas = 20 por território. Mexer nas tabelas quebra essa conta.
   ===================================================== */
export const PONTOS = [0, 3, 7, 10];

/* Cada pergunta pode ter a própria pontuação em `p` e marcar o lead com uma
   tag no RD em `tags` (índice da opção → tag). */
export const PERGUNTAS = [
  { t: 'imprensa', q: 'Nos últimos 12 meses, quantas vezes você foi citado ou entrevistado em algum veículo de imprensa?',
    o: ['Nenhuma', 'De 1 a 2', 'De 3 a 6', 'Mais de 6'] },
  { t: 'imprensa', q: 'Quando um repórter da sua área precisa de uma fonte, ele sabe como te encontrar?',
    o: ['Não faço ideia', 'Provavelmente não', 'Talvez, se procurar bem', 'Sim, já me procuraram', 'Sim, ele fala com a minha assessoria'],
    p: [0, 3, 7, 10, 10],
    tags: { 4: 'tem-assessoria' } },

  { t: 'digital', q: 'Com que frequência você publica conteúdo com o seu nome, no LinkedIn ou no Instagram?',
    o: ['Quase nunca', 'Cerca de uma vez por mês', 'Toda semana', 'Várias vezes por semana'] },
  { t: 'digital', q: 'Alguém já te procurou para negócio depois de ver algo que você publicou?',
    o: ['Nunca aconteceu', 'Uma ou outra vez', 'Acontece de vez em quando', 'É uma fonte recorrente'] },

  { t: 'busca', q: 'Se alguém pesquisa o seu nome no Google, o que aparece na primeira página?',
    o: ['Nada meu', 'Só as minhas redes sociais', 'Alguma matéria ou entrevista', 'Vários resultados relevantes'] },
  { t: 'busca', q: 'Você já perguntou a uma IA quem são as referências do seu setor e conferiu se o seu nome aparece?',
    o: ['Nunca testei', 'Testei e não apareci', 'Apareci de forma vaga', 'Apareci com destaque'] },

  { t: 'narrativa', q: 'Você consegue explicar o que faz, em trinta segundos, de um jeito que qualquer pessoa entenda?',
    o: ['Sempre me enrolo', 'Depende do dia', 'Mais ou menos', 'Tenho isso afiado'] },
  { t: 'narrativa', q: 'Existe um tema sobre o qual você quer ser lembrado como referência?',
    o: ['Nunca pensei nisso', 'Tenho uma ideia vaga', 'Sei qual é, mas não comunico', 'Sim, e comunico sempre'] },

  { t: 'preparo', q: 'Quando vem a pergunta difícil (o concorrente, o preço, o resultado que não veio), o que acontece?',
    o: ['Travo ou desvio', 'Improviso na hora', 'Me saio bem às vezes', 'Tenho resposta preparada'] },
  { t: 'preparo', q: 'Você já passou por algum preparo formal para falar com imprensa, palco ou investidor?',
    o: ['Nunca', 'Li coisas por conta própria', 'Uma vez, há bastante tempo', 'Sim, e mantenho o treino'] }
];

/* ===================== ANÁLISES POR TERRITÓRIO ===================== */
export const TERRITORIOS = {
  imprensa: { nome: 'Presença na imprensa', analises: [
    { titulo: 'Você não está no radar das redações.',
      texto: 'Repórter trabalha com prazo curto e agenda fechada. Quando ele precisa de uma fonte, não pesquisa quem é o melhor do setor: recorre a quem já está na agenda dele ou a quem apareceu recentemente em outro veículo. Não estar nessa lista é um problema de acesso e de relação, coisas que levam tempo e não se resolvem com um disparo. E o custo é silencioso, porque a pauta sai com o seu concorrente e o mercado lê que a referência é ele.',
      movimento: 'Antes de pensar em aparecer, tenha as três respostas que uma redação precisa: sobre qual assunto específico você quer ser procurado, qual dado ou experiência você tem que ninguém mais tem, e quem na sua empresa consegue responder em menos de duas horas quando a imprensa aparece. Sem essas três, nenhuma porta se sustenta depois de aberta.' },
    { titulo: 'Você aparece quando procuram, não quando decide.',
      texto: 'Você já saiu na imprensa, mas de forma reativa: alguém lembrou, alguém indicou, surgiu a oportunidade. O problema da presença reativa é que ela não acumula. Sem um tema fixo, cada aparição te apresenta do zero e o mercado não constrói memória sobre você. Quem vira fonte recorrente não aparece mais por sorte: aparece porque ocupou um assunto e ficou fácil de achar.',
      movimento: 'Liste as suas últimas aparições e veja se falam do mesmo tema. Se não falam, escolha um agora e segure esse assunto nos próximos três meses, inclusive recusando o que não for dele. Presença espalhada não vira memória de mercado.' },
    { titulo: 'A imprensa já sabe quem você é.',
      texto: 'Você tem acesso, e isso é raro. A partir daqui o risco muda de natureza: deixa de ser invisibilidade e passa a ser desgaste. Fonte que fala de tudo perde valor, e uma resposta mal calibrada numa pauta sensível custa mais do que dez aparições boas rendem.',
      movimento: 'Defina por escrito dois assuntos que você aceita comentar e dois que você recusa. Ter esse limite claro é o que separa a fonte confiável da fonte apenas disponível.' }
  ] },
  digital: { nome: 'Presença digital', analises: [
    { titulo: 'O seu nome não circula.',
      texto: 'A conta é simples: quem não publica só é encontrado por quem já conhece. Hoje a sua reputação depende inteiramente de quem já trabalhou com você, e ela não alcança a mesa onde a decisão sobre você está sendo tomada. Publicar não é sobre virar criador de conteúdo. É sobre existir para quem ainda não te conhece.',
      movimento: 'Publique um post por semana durante quatro semanas, respondendo perguntas que clientes te fazem toda hora. Não precisa de estratégia, precisa de constância.' },
    { titulo: 'Você publica, mas não colhe.',
      texto: 'Publicar sem direção gera audiência, não oportunidade. O que transforma uma coisa na outra é a repetição de um mesmo território: quando o seu nome fica colado a um assunto, as pessoas passam a te procurar por ele. Sem isso, os seus posts são lidos, elogiados e esquecidos na mesma semana.',
      movimento: 'Olhe os seus últimos dez posts. Se um estranho os lesse, saberia dizer qual é o seu assunto? Se não souber, escolha um e fique nele por três meses.' },
    { titulo: 'O digital já te traz negócio.',
      texto: 'Você chegou onde a maioria não chega: conteúdo que gera demanda. O gargalo agora deixa de ser alcance e passa a ser consistência de discurso. Quem te procura chega com uma expectativa formada pelo que leu, e é ao vivo, na reunião ou no palco, que essa expectativa se confirma ou se quebra.',
      movimento: 'Compare o que você diz nos posts com o que diz numa reunião. A distância entre os dois é exatamente por onde a confiança vaza.' }
  ] },
  busca: { nome: 'Busca e inteligência artificial', analises: [
    { titulo: 'Você não existe na pesquisa.',
      texto: 'A primeira reunião sobre você acontece sem você. Investidor, cliente grande e candidato sênior pesquisam antes de responder, e cada vez mais perguntam a uma IA em vez de rolar o Google. Essas ferramentas respondem com quem encontram citado em fontes confiáveis. Quando não há nada, a ausência não é lida como neutra: é lida como falta de relevância.',
      movimento: 'Pesquise o seu nome numa aba anônima e anote o que aparece. Depois pergunte a uma IA quem são as referências do seu setor. O que você encontrar é exatamente o que o mercado encontra.' },
    { titulo: 'Você aparece, mas não como referência.',
      texto: 'O seu nome retorna resultados, só que o que aparece são perfis e páginas que você mesmo controla. Isso prova que você existe, não que você é relevante. As buscas e as IAs dão peso a menções de terceiros: matéria, citação, painel, artigo publicado fora da sua casa. É esse rastro que faz a máquina te classificar como fonte, e ele se constrói ao longo de meses, não de semanas.',
      movimento: 'Defina o termo pelo qual você quer ser encontrado e use exatamente ele, sem variações, em tudo que está sob o seu controle: bio, perfis, site, assinatura de e-mail, descrição em eventos. Consistência de termo é o que a máquina lê como especialidade, e é a parte que não depende de ninguém além de você.' },
    { titulo: 'Você já é encontrado.',
      texto: 'O seu rastro digital trabalha sem você. O esforço agora é de curadoria: garantir que o que aparece primeiro seja o que você quer que apareça e que a informação esteja atualizada. Resultado velho é o tipo de coisa que custa caro no meio de uma negociação.',
      movimento: 'Revise os cinco primeiros resultados do seu nome e corrija o que estiver desatualizado ou fora de contexto.' }
  ] },
  narrativa: { nome: 'Narrativa', analises: [
    { titulo: 'Falta um fio que ligue tudo.',
      texto: 'Sem narrativa definida, cada conversa recomeça do zero e você gasta a energia explicando o que faz, em vez de defender por que aquilo importa. É o sintoma mais comum entre pessoas tecnicamente excelentes: sabem demais sobre o assunto e por isso não conseguem simplificar. Quem não consegue ser resumido não é lembrado, e quem não é lembrado não é indicado.',
      movimento: 'Escreva uma frase que comece com "eu ajudo ___ a ___" e teste com alguém de fora da sua área. Se a pessoa pedir explicação, a frase ainda não está pronta.' },
    { titulo: 'Você tem o tema, falta a versão curta.',
      texto: 'Você sabe do que quer falar, mas a mensagem muda conforme o interlocutor e o dia. Autoridade se constrói por repetição: é a mesma ideia dita muitas vezes, do mesmo jeito, que faz o mercado associar um assunto a um nome. Versões diferentes a cada conversa diluem justamente o que deveriam acumular.',
      movimento: 'Fixe três frases que você vai repetir em toda entrevista, post e reunião nos próximos três meses. A sensação de repetição é só sua; para quem ouve, é a primeira vez.' },
    { titulo: 'A sua mensagem está afiada.',
      texto: 'Você tem território e consegue traduzir. O passo seguinte é levar essa narrativa para ambientes em que ela seja testada, e não apenas recebida: palco, entrevista ao vivo, banca, sabatina. Narrativa que só funciona em terreno amigável ainda não foi verificada.',
      movimento: 'Aceite o próximo convite que te dê desconforto. É onde a mensagem prova que se sustenta.' }
  ] },
  preparo: { nome: 'Preparo para a pergunta difícil', analises: [
    { titulo: 'Você está improvisando.',
      texto: 'A pergunta difícil vem em toda entrevista, todo pitch e toda reunião importante, e ela é previsível: o concorrente, o preço, o resultado que não veio, o erro do passado. Improvisar nessas horas é o que faz uma boa conversa virar uma frase ruim publicada. E na maioria das vezes o dano não é a resposta errada, é a hesitação de três segundos que vem antes dela.',
      movimento: 'Escreva as cinco perguntas que você menos gostaria de receber. Responda cada uma em voz alta, em até trinta segundos, e grave. A primeira escuta costuma ser desconfortável, e é justamente aí que está o valor do exercício.' },
    { titulo: 'Você se vira, mas depende do dia.',
      texto: 'Sair bem às vezes significa que o seu desempenho está sujeito a variáveis que você não controla: cansaço, clima da conversa, quem está na sala. Quem fala bem de forma consistente não é mais talentoso. Tem material pronto, ponte preparada para voltar ao tema e treino suficiente para não depender de inspiração.',
      movimento: 'Monte um documento de uma página com as suas três mensagens, os cinco dados que você sempre cita e as respostas para as perguntas ruins. Leia antes de qualquer conversa importante.' },
    { titulo: 'Você está preparado, e isso aparece.',
      texto: 'Preparo é o que mais separa quem fala bem de quem parece falar bem. O risco de quem chegou até aqui é parar de treinar: a fala envelhece, os dados desatualizam e o repertório vira automático. Automatismo soa ensaiado, e ensaiado soa falso.',
      movimento: 'Grave dois minutos falando sobre o seu tema e assista uma semana depois, sem indulgência. É o teste mais barato que existe.' }
  ] }
};

export const FAIXAS = [
  { min: 0, max: 30, nome: 'Invisível',
    resumo: 'A sua competência não circula. Quando alguém procura uma referência no seu setor, você não está na conversa, e isso não tem relação com o tamanho do seu conhecimento, e sim com a ausência de rastro. A boa notícia é que esse é o estágio em que o esforço rende mais rápido: as primeiras aparições mudam o resultado de forma visível.' },
  { min: 31, max: 55, nome: 'Conhecido pelos seus',
    resumo: 'Quem já te conhece confia em você, e isso é um ativo real. O problema é que essa reputação não sai do seu círculo: ela depende de alguém te indicar para existir. Você está sustentando o negócio na base da relação pessoal, o que funciona até o dia em que o mercado precisa te descobrir sozinho.' },
  { min: 56, max: 75, nome: 'Lembrado às vezes',
    resumo: 'Você aparece, mas de forma irregular e quase sempre reativa. Não é você quem decide quando. Nesse estágio, a diferença entre continuar oscilando e virar referência é quase toda de método: território definido, mensagem repetida e preparo para os momentos em que a atenção realmente aparece.' },
  { min: 76, max: 100, nome: 'Referência',
    resumo: 'A sua autoridade já trabalha por você: gente que nunca te conheceu chega sabendo quem você é. O desafio muda de lado. Agora é sobre consistência, proteção da reputação nos momentos difíceis e escolha de onde não estar. Quem chega aqui costuma perder mais por exposição mal calibrada do que por falta dela.' }
];
