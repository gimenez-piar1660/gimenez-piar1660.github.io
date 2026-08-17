// ============================================================
// FONTE ÚNICA DE IDENTIDADE — PiaR Group
// ============================================================
// Editar aqui propaga para BaseLayout (SEO/JSON-LD), Footer e páginas.
// Fatos canônicos validados pela auditoria EEAT (project/analyses/eeat/).
// Decisões registradas em:
//   project/workbench/specs/pep-site-migration-2026-06-02/spec.md (seção 9)
//   - D-IDENT-1: e-mail oficial = contato@piar.group (alterado por Danilo em 2026-06-30; antes hello@piar.group)
//   - D-IDENT-2: telefone público aparece apenas na página /contato
//   - D-IDENT-3: número de exits travado em 8 (verificados e nomeados)
//   - D-IDENT-4: endereço confirmado
//   - D-IDENT-5: prêmio padronizado (ABStartups Startup Awards, 2018)
// ============================================================

// Chave de indexação do deploy inteiro.
// `false` enquanto o site vive no domínio de protótipo do GitHub Pages: todas
// as páginas saem com noindex, para o protótipo não ser indexado e depois
// competir com o domínio próprio. Virar `true` no MESMO commit que apontar o
// `site` do astro.config para o domínio final. Checklist completo da virada em
// docs/deploy-e-versionamento.md, seção "Migração do protótipo para o domínio próprio".
export const INDEXAVEL = false;

export const site = {
  name: 'PiaR Group',
  legalName: 'PiaR Comunicação',
  alternateNames: ['PiaR', 'PiaR Comunicação'],

  // Domínio de publicação. Sai do `site` do astro.config para não existirem
  // duas verdades: hoje o protótipo no GitHub Pages, depois o domínio próprio.
  // Antes ficava fixo em pep.piar.group e as páginas que montam a canônica na
  // mão apontavam para o site antigo, que continua no ar.
  domain: import.meta.env.SITE,
  brandDomain: 'piar.group',

  // Contato canônico.
  email: 'contato@piar.group',
  phone: '(11) 97563-3655',
  phoneE164: '+5511975633655',
  whatsapp: 'https://wa.me/5511975633655',

  // Fatos institucionais (com lastro na auditoria EEAT).
  foundingYear: '2013',
  yearsOperating: 13,
  brandsServed: '470+',
  exitsSupported: 8,
  slogan: 'Identificamos o ativo raro de cada marca e o transformamos em reputação.',

  address: {
    street: 'Rua Silva Bueno, 1660, Conjunto 205, Ipiranga',
    locality: 'São Paulo',
    region: 'SP',
    postalCode: '04208-001',
    country: 'BR',
  },

  founder: {
    name: 'Bruno Pinheiro',
    role: 'CEO & Fundador',
    award: 'Eleito Profissional de imprensa no Startup Awards da ABStartups (2018).',
  },

  social: {
    linkedin: 'https://www.linkedin.com/company/piargroup/',
    instagram: 'https://www.instagram.com/group.piar/',
  },
} as const;

export type Site = typeof site;
