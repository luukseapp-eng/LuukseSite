import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const nav = [
  { href: '/#experiencia', label: 'Experiência' },
  { href: '/#como-usar', label: 'Como usar' },
  { href: '/#planos', label: 'Planos' },
  { href: '/#academia', label: 'Academia' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo} aria-label="LUUKSE — início">
          LUUKSE
        </Link>

        <nav className={styles.desktopNav} aria-label="Principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link to="/contato" className={`btn btn-primary ${styles.cta}`}>
            Solicitar agora
          </Link>
          <button
            type="button"
            className={styles.burger}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? styles.burgerOpen : undefined} />
          </button>
        </div>
      </div>

      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`} aria-hidden={!open}>
        <nav className={styles.mobileNav} aria-label="Mobile">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <NavLink to="/sobre" className={styles.mobileLink} onClick={() => setOpen(false)}>
            Sobre
          </NavLink>
          <NavLink to="/seja-motorista" className={styles.mobileLink} onClick={() => setOpen(false)}>
            Seja motorista
          </NavLink>
          <NavLink to="/seja-parceiro" className={styles.mobileLink} onClick={() => setOpen(false)}>
            Seja parceiro
          </NavLink>
          <Link to="/contato" className={`btn btn-primary btn-block`} onClick={() => setOpen(false)}>
            Solicitar agora
          </Link>
        </nav>
      </div>
    </header>
  )
}
