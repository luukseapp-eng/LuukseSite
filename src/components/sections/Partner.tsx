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
            <span className="section-label">Parcerias · Somente por convite</span>
            <h2>Seu outdoor dentro do app mais exclusivo.</h2>
            <p>
              Restaurantes, hotéis e experiências premium exibem a marca na tela inicial do app LUUKSE e
              recebem reservas de mesa de quem viaja com a gente. A entrada é por convite: envie seu
              interesse e, se aprovado, enviamos o seu convite.
            </p>
            <Link to="/seja-parceiro#interesse" className="btn btn-primary">
              Quero receber um convite
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
