import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import styles from './CtaFinal.module.css'

export default function CtaFinal() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="solicitar" className={styles.section} ref={ref}>
      <div className={styles.bg} aria-hidden>
        <img src={`${import.meta.env.BASE_URL}images/v2/hero-branded.png`} alt="" />
        <div className={styles.veil} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={`${styles.copy} reveal`}>
          <h2>Bem-vindo à LUUKSE.</h2>
          <p className={styles.line}>Mobilidade privada. No seu tempo.</p>
          <Link to="/contato" className="btn btn-primary">
            Solicitar agora
          </Link>
        </div>
      </div>
    </section>
  )
}
