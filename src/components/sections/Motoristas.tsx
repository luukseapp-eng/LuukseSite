import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import styles from './Motoristas.module.css'

export default function Motoristas() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="motoristas" className={styles.section} ref={ref}>
      <div className={styles.bg} aria-hidden>
        <img src={`${import.meta.env.BASE_URL}images/v2/hero-ref-01.jpg`} alt="" />
        <div className={styles.veil} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={`${styles.copy} reveal`}>
          <span className="section-label">Motoristas</span>
          <h2>
            Você não está apenas dirigindo.
            <br />
            Está representando uma marca.
          </h2>
          <p>
            Ser motorista LUUKSE é assumir um padrão de presença, discrição e excelência. A Academia
            prepara. O Programa Excelência reconhece. A marca apoia quem eleva a experiência.
          </p>
          <div className={styles.actions}>
            <Link to="/seja-motorista" className="btn btn-primary">
              Quero ser motorista
            </Link>
            <Link to="/#academia" className="btn btn-ghost">
              Ver a Academia
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
