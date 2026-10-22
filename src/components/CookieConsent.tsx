import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './CookieConsent.module.css'
import { getConsent, saveConsent, onOpenCookiePreferences } from '../lib/consent'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(() => getConsent() === null)
  const [showModal, setShowModal] = useState(false)
  const [analiticos, setAnaliticos] = useState(() => getConsent()?.analiticos ?? false)
  const [marketing, setMarketing] = useState(() => getConsent()?.marketing ?? false)

  useEffect(
    () =>
      onOpenCookiePreferences(() => {
        const c = getConsent()
        setAnaliticos(c?.analiticos ?? false)
        setMarketing(c?.marketing ?? false)
        setShowModal(true)
      }),
    [],
  )

  const decide = (a: boolean, m: boolean) => {
    saveConsent(a, m)
    setShowBanner(false)
    setShowModal(false)
  }

  return (
    <>
      {showBanner && !showModal && (
        <div className={styles.banner} role="region" aria-label="Aviso de cookies">
          <p>
            Usamos cookies necessários para o site funcionar. Com a sua permissão, também usaremos
            cookies analíticos e de marketing para melhorar a sua experiência. Saiba mais na{' '}
            <Link to="/cookies">Política de Cookies</Link> e na <Link to="/privacidade">Privacidade</Link>.
          </p>
          <div className={styles.actions}>
            <button className={styles.ghost} onClick={() => setShowModal(true)}>Preferências</button>
            <button className={styles.ghost} onClick={() => decide(false, false)}>Recusar</button>
            <button className={styles.primary} onClick={() => decide(true, true)}>Aceitar</button>
          </div>
        </div>
      )}

      {showModal && (
        <div className={styles.overlay} onClick={() => setShowModal(false)}>
          <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="cookie-title" onClick={(e) => e.stopPropagation()}>
            <h2 id="cookie-title">Preferências de cookies</h2>
            <p className={styles.lead}>Escolha quais cookies você permite. Você pode mudar isso quando quiser pelo rodapé do site.</p>

            <Row title="Necessários" desc="Garantem o funcionamento básico e a segurança do site. Sempre ativos." checked disabled />
            <Row title="Analíticos" desc="Ajudam a entender, de forma agregada, como o site é usado." checked={analiticos} onChange={setAnaliticos} />
            <Row title="Marketing" desc="Permitem mostrar conteúdos e anúncios mais relevantes para você." checked={marketing} onChange={setMarketing} />

            <div className={styles.actions}>
              <button className={styles.ghost} onClick={() => decide(false, false)}>Recusar todos</button>
              <button className={styles.ghost} onClick={() => decide(analiticos, marketing)}>Salvar preferências</button>
              <button className={styles.primary} onClick={() => decide(true, true)}>Aceitar todos</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function Row(props: { title: string; desc: string; checked: boolean; disabled?: boolean; onChange?: (v: boolean) => void }) {
  return (
    <label className={styles.row}>
      <span>
        <strong>{props.title}</strong>
        <small>{props.desc}</small>
      </span>
      <input type="checkbox" role="switch" className={styles.toggle} checked={props.checked} disabled={props.disabled}
        onChange={(e) => props.onChange?.(e.target.checked)} aria-label={props.title} />
    </label>
  )
}
