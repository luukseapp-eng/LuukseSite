import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import { CONTACT, SOCIAL } from '../config/social'
import type { ReactNode } from 'react'

const icon = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    {d}
  </svg>
)

const socials: { key: keyof typeof SOCIAL; label: string; svg: ReactNode }[] = [
  {
    key: 'instagram',
    label: 'Instagram',
    svg: icon(
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.2-3.2a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />,
    ),
  },
  {
    key: 'facebook',
    label: 'Facebook',
    svg: icon(<path d="M13.5 22v-8.2h2.8l.5-3.3h-3.3V8.4c0-.95.45-1.9 1.95-1.9H17V3.7S15.7 3.5 14.5 3.5c-2.5 0-4.1 1.5-4.1 4.2v2.5H7.6v3.3h2.8V22h3.1Z" />),
  },
  {
    key: 'x',
    label: 'X',
    svg: icon(<path d="M17.8 3h3.1l-6.8 7.7L22 21h-6.2l-4.9-6.3L5.3 21H2.2l7.2-8.3L2 3h6.4l4.4 5.8L17.8 3Zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5Z" />),
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    svg: icon(
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.9a8.1 8.1 0 1 1-4.2 15l-.3-.2-2.9.8.8-2.8-.2-.3A8.1 8.1 0 0 1 12 3.9ZM9 7.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.2 5 4.3 2.4.9 2.9.7 3.4.7.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.7-.4-.4-.2-1.700-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.100-.2.2-.3.2-.7 0-.4-.2-1.400-.5-2.600-1.600-.9-.8-1.500-1.800-1.700-2.100-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.5l-.9-2.200c-.2-.5-.5-.5-.7-.5H9Z" />,
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo} aria-label="LUUKSE, início">
            <img
              src={`${import.meta.env.BASE_URL}brand/logo-full.png`}
              alt="LUUKSE Private Mobility & Concierge"
              className={styles.logoFull}
              width={180}
            />
          </Link>
          <p className={styles.tagline}>Mobilidade privada. No seu tempo.</p>
          <ul className={styles.socials} aria-label="Redes sociais da LUUKSE">
            {socials.map(({ key, label, svg }) => {
              const url = SOCIAL[key]
              return (
                <li key={key}>
                  {url ? (
                    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                      {svg}
                    </a>
                  ) : (
                    <span aria-label={`${label} (em breve)`} title={`${label}: em breve`} className={styles.soon}>
                      {svg}
                    </span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <div className={styles.col}>
          <h3>Institucional</h3>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a href={CONTACT.phoneHref}>{CONTACT.phoneLabel}</a>
          <a href={`${import.meta.env.BASE_URL}#cidades`}>Cidades</a>
        </div>

        <div className={styles.col}>
          <h3>Parceiros</h3>
          <Link to="/seja-motorista">Seja Motorista</Link>
          <Link to="/frotas">Empresas de Frota</Link>
          <Link to="/seja-parceiro">Parcerias (por convite)</Link>
          <a href={`${import.meta.env.BASE_URL}#academia`}>Academia LUUKSE</a>
        </div>

        <div className={styles.col}>
          <h3>Legal</h3>
          <Link to="/termos">Termos</Link>
          <Link to="/privacidade">Privacidade</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>© {year} LUUKSE. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
