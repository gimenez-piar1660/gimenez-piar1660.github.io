// ============================================================
// FONTE ÚNICA — THE MIC
// ============================================================
// Data, local e formato da edição em um lugar só. Antes estes valores viviam
// dentro de src/pages/themic.astro, e a /diagnostico (a isca que leva para a
// LP) precisaria repetir a data na mão. É exatamente assim que o número
// de exits desandou em 18 páginas (ver src/data/site.ts, D-IDENT-3), então a
// regra vale aqui também: quem mostra data ou local do THE MIC lê daqui.
//
// Mudar a edição é editar este arquivo, não caçar string em duas páginas.
//
// Histórico da data da Edição 1: 22 e 23 de outubro até 29/09/2026, quando a
// data saiu das páginas; em 30/09/2026 voltou, remarcada para 2 e 3 de dezembro.
// ============================================================

export const EDICAO = {
  datas: '2 e 3 de dezembro',
  datasCompletas: '2 e 3 de dezembro de 2026',
  diaSemana: 'Quarta e quinta, das 8h às 20h',
  dia1: '2 de dezembro',
  dia2: '3 de dezembro',
  local: 'Sede do Investidores.vc',
  endereco: 'Rua Pitu, 72 · Brooklin · São Paulo',
  bairro: 'Brooklin, São Paulo',
  cidade: 'São Paulo',
  vagas: 30,
  duracao: '2 dias',

  // Sem link de pagamento, o valor fica fora das páginas e o comercial
  // apresenta as condições na conversa (decisão de 10/09/2026).
  investimento: 'Sob consulta',
  parcelas: 'em até 3x',
  condicaoPreco: 'Em até 3x · condições apresentadas na conversa',
} as const;

// Caminho da LP dentro do site. A /diagnostico manda o lead para cá.
export const URL_PROGRAMA = '/themic';

// UTM que marca os cliques saídos do diagnóstico para a LP, definida no
// briefing de 22/09/2026. Minúsculas, sem acento e sem espaço, para os dados
// baterem com os outros canais.
export const UTM_DIAGNOSTICO = '?utm_source=diagnostico&utm_medium=isca&utm_campaign=themic-ed1';
