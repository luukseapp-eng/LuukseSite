import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import styles from './Academia.module.css'

export default function Academia() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="academia" className={styles.section} ref={ref}>
      <div className="container">
        <div className={styles.layout}>
          <div className={`${styles.copy} reveal`}>
            <span className="section-label">Academia LUUKSE</span>
            <h2>Excelência não acontece por acaso.</h2>
            <p>
              A Academia LUUKSE forma e acompanha quem representa a marca. Protocolo de presença,
              atendimento, pontualidade e discrição — treinados, avaliados e refinados com o tempo.
            </p>
            <p>
              Não se trata apenas de dirigir. Trata-se de sustentar um padrão que o passageiro sente
              antes mesmo de chegar ao destino.
            </p>
            <Link to="/seja-motorista" className="btn btn-primary">
              Conhecer a Academia
            </Link>
          </div>

          <div className={`${styles.visual} reveal reveal-delay-2`} aria-hidden>
            <img src={`${import.meta.env.BASE_URL}images/v2/hero-ref-03.jpg`} alt="" />
            <div className={styles.frame} />
          </div>
        </div>
      </div>
    </section>
  )
}
