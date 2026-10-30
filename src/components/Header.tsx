import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const nav = [
  { href: '/#experiencia', label: 'Experiência' },
  { href: '/#como-usar', label: 'Como usar' },
  { href: '/#planos', label: 'Planos' },
  { href: '/#academia', label: 'Academia' },
]

const highlights = [
  { href: '/frotas', label: 'Frotas' },
  { href: '/seja-parceiro', label: 'Parcerias' },
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
        <Link to="/" className={styles.logo} aria-label="LUUKSE, início">
          <img src={`${import.meta.env.BASE_URL}brand/logo-mark.png`} alt="" className={styles.logoImg} />
          <span>LUUKSE</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Principal">
          {nav.map((item) => (
            <Link key={item.href} to={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
          {highlights.map((item) => (
            <NavLink key={item.href} to={item.href} className={`${styles.navLink} ${styles.navGold}`}>
              {item.label}
            </NavLink>
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
            <Link key={item.href} to={item.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          {highlights.map((item) => (
            <NavLink key={item.href} to={item.href} className={`${styles.mobileLink} ${styles.mobileGold}`} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/sobre" className={styles.mobileLink} onClick={() => setOpen(false)}>
            Sobre
          </NavLink>
          <NavLink to="/seja-motorista" className={styles.mobileLink} onClick={() => setOpen(false)}>
            Seja motorista
          </NavLink>
          <Link to="/contato" className={`btn btn-primary btn-block`} onClick={() => setOpen(false)}>
            Solicitar agora
          </Link>
        </nav>
      </div>
    </header>
  )
}
