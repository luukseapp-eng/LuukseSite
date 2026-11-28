// Selo BaaS do Asaas (homologação BaaS, Resolução Conjunta 16/2025; pedido da Itala, 28/11/2026).
// Sempre carregado da URL oficial do Asaas (nunca copiado para o site) e sem no-referrer: o Asaas confere pelo Referer.
export const ASAAS_SEAL_ID = '206dd468-355b-438d-bb05-e3fd169c39e1'
export type AsaasSealVariant = 'Positivo' | 'Negativo-Preto' | 'Negativo-Branco'
export const asaasSealUrl = (variant: AsaasSealVariant) =>
  `https://baas.asaas.com/selos/Servicos_financeiros_Asaas-Reduzida-${variant}.svg?id=${ASAAS_SEAL_ID}`
export const ASAAS_SITE_URL = 'https://asaas.com'
export const ASAAS_SUPPORT_LINES = [
  'Serviços financeiros prestados pelo Asaas.',
  'Suporte financeiro: 0800 009 0037 · contato@asaas.com.br',
]
