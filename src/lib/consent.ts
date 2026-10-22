// Consentimento de cookies (LGPD). Guardado em localStorage com versão.
// Scripts analíticos ou de marketing devem ser carregados SOMENTE via loadScriptWithConsent.
export const CONSENT_KEY = 'luukse_consent'
export const CONSENT_VERSION = 1
export type Category = 'analiticos' | 'marketing'
export interface Consent {
  version: number
  necessarios: true
  analiticos: boolean
  marketing: boolean
  updatedAt: string
}
const OPEN_EVENT = 'luukse:open-cookie-prefs'
const CHANGE_EVENT = 'luukse:consent-change'

export function getConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return null
    const c = JSON.parse(raw) as Consent
    return c.version === CONSENT_VERSION ? c : null
  } catch {
    return null
  }
}

export function saveConsent(analiticos: boolean, marketing: boolean): Consent {
  const c: Consent = { version: CONSENT_VERSION, necessarios: true, analiticos, marketing, updatedAt: new Date().toISOString() }
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(c))
  } catch {
    /* armazenamento indisponível */
  }
  window.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: c }))
  return c
}

export function hasConsent(cat: Category): boolean {
  return getConsent()?.[cat] === true
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_EVENT))
}
export function onOpenCookiePreferences(fn: () => void) {
  window.addEventListener(OPEN_EVENT, fn)
  return () => window.removeEventListener(OPEN_EVENT, fn)
}

const pending: { cat: Category; run: () => void }[] = []
function flush() {
  for (let i = pending.length - 1; i >= 0; i--) {
    if (hasConsent(pending[i].cat)) {
      pending[i].run()
      pending.splice(i, 1)
    }
  }
}
if (typeof window !== 'undefined') window.addEventListener(CHANGE_EVENT, flush)

/** Executa fn apenas quando houver consentimento para a categoria (agora ou depois). */
export function runWithConsent(cat: Category, fn: () => void) {
  if (hasConsent(cat)) fn()
  else pending.push({ cat, run: fn })
}

/** Injeta um script externo apenas após consentimento. Ex.: loadScriptWithConsent('analiticos', 'https://www.googletagmanager.com/gtag/js?id=G-XXXX') */
export function loadScriptWithConsent(cat: Category, src: string, attrs: Record<string, string> = {}) {
  runWithConsent(cat, () => {
    if (document.querySelector(`script[src="${src}"]`)) return
    const s = document.createElement('script')
    s.src = src
    s.async = true
    Object.entries(attrs).forEach(([k, v]) => s.setAttribute(k, v))
    document.head.appendChild(s)
  })
}
