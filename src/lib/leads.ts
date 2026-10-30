import { useState } from 'react'
import type { FormEvent } from 'react'
import { CONTACT } from '../config/social'

export type LeadKind = 'contato' | 'motorista' | 'parceiro' | 'frota'

const KIND_LABEL: Record<LeadKind, string> = {
  contato: 'Contato',
  motorista: 'Seja Motorista',
  parceiro: 'Parceria / Convite',
  frota: 'Empresa de frota',
}

/**
 * Destino dos formulários do site.
 * - Com VITE_LEADS_ENDPOINT definido (URL pública da API LUUKSE que grava o lead), envia um POST JSON.
 * - Sem endpoint, abre o e-mail do visitante já preenchido para contato@luukseapp.com (nada se perde).
 * Nenhum segredo fica no código: o endpoint é público e só recebe dados.
 */
const ENDPOINT = (import.meta.env.VITE_LEADS_ENDPOINT as string | undefined)?.trim() || ''

function collect(form: HTMLFormElement) {
  const data: Record<string, string> = {}
  new FormData(form).forEach((v, k) => {
    if (typeof v === 'string') data[k] = v.trim()
  })
  return data
}

export async function submitLead(kind: LeadKind, form: HTMLFormElement): Promise<'api' | 'mailto'> {
  const fields = collect(form)
  if (fields.website) return 'api' // honeypot: bot, finge sucesso
  delete fields.website

  if (ENDPOINT) {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ kind, source: 'site', page: window.location.pathname, fields }),
    })
    if (!res.ok) throw new Error('Falha ao enviar')
    return 'api'
  }

  const body = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')
  const subject = `[Site LUUKSE] ${KIND_LABEL[kind]}`
  window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  return 'mailto'
}

export function useLeadForm(kind: LeadKind) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'api' | 'mailto' | 'error'>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    try {
      setStatus(await submitLead(kind, e.currentTarget))
    } catch {
      setStatus('error')
    }
  }

  return { status, onSubmit, sent: status === 'api' || status === 'mailto' }
}
