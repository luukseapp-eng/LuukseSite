import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import styles from './Partner.module.css'

export default function Partner() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="parceiros" className={styles.section} ref={ref}>
      <div className="container">
        <div className={`${styles.panel} reveal`}>
          <div className={styles.copy}>
            <span className="section-label">Parceiros</span>
            <h2>Sua operação. Uma nova experiência.</h2>
            <p>
              Hotéis, condomínios, empresas e operações que desejam oferecer mobilidade privada sob o
              padrão LUUKSE. Uma parceria que eleva a experiência de quem chega — e de quem parte.
            </p>
            <Link to="/seja-parceiro" className="btn btn-primary">
              Seja parceiro
            </Link>
          </div>
          <div className={styles.aside} aria-hidden>
            <img src={`${import.meta.env.BASE_URL}images/v2/hero-ref-03.jpg`} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
