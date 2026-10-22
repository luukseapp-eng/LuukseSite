import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <Link to="/" className={styles.logo}>
            LUUKSE
          </Link>
          <p className={styles.tagline}>Mobilidade privada. No seu tempo.</p>
        </div>

        <div className={styles.col}>
          <h3>Institucional</h3>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
          <a href={`${import.meta.env.BASE_URL}#cidades`}>Cidades</a>
        </div>

        <div className={styles.col}>
          <h3>Parceiros</h3>
          <Link to="/seja-motorista">Seja Motorista</Link>
          <Link to="/seja-parceiro">Seja Parceiro</Link>
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
