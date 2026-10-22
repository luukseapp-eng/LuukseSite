import { useReveal } from '../../hooks/useReveal'
import { useParallax } from '../../hooks/useParallax'
import styles from './Padrao.module.css'

export default function Padrao() {
  const ref = useReveal<HTMLElement>()
  const bgRef = useParallax(0.1)

  return (
    <section id="padrao" className={styles.section} ref={ref}>
      <div className={styles.media} aria-hidden>
        <div ref={bgRef} className={styles.parallax}>
          <img src={`${import.meta.env.BASE_URL}images/v2/hero-ref-02.jpg`} alt="" />
        </div>
        <div className={styles.veil} />
      </div>

      <div className={`container ${styles.content}`}>
        <div className={`${styles.card} reveal`}>
          <span className="section-label">O padrão</span>
          <h2>
            Discrição não é um detalhe.
            <br />
            É um padrão.
          </h2>
          <p>
            Na LUUKSE, discrição orienta postura, conversa, vestimenta e presença. Não é um diferencial
            anunciado — é a forma como cada trajeto acontece.
          </p>
          <ul>
            <li>Presença profissional sem ostentação</li>
            <li>Confidencialidade como regra, não como favor</li>
            <li>Detalhes alinhados ao que você espera — e ao que não precisa pedir</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
