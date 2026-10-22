import { Link } from 'react-router-dom'
import { useParallax } from '../../hooks/useParallax'
import styles from './Hero.module.css'

export default function Hero() {
  const bgRef = useParallax(0.08)

  return (
    <section className={styles.hero} id="inicio" aria-label="Hero">
      <div className={styles.media} aria-hidden>
        <div ref={bgRef} className={styles.parallax}>
          <img
            src={`${import.meta.env.BASE_URL}images/v2/hero-branded.png`}
            alt=""
            className={styles.img}
            fetchPriority="high"
          />
        </div>
        <div className={styles.veil} />
      </div>

      <div className={`container ${styles.content}`}>
        <p className={`${styles.kicker} reveal visible`}>Mobilidade privada</p>
        <h1 className="reveal visible reveal-delay-1">
          Motorista particular,
          <br />
          no seu ritmo.
        </h1>
        <p className={`${styles.sub} reveal visible reveal-delay-2`}>
          Veículos selecionados, motoristas formados pela Academia LUUKSE e um trajeto ajustado às suas preferências: rota, clima, silêncio ou conversa.
        </p>
        <div className={`${styles.actions} reveal visible reveal-delay-3`}>
          <Link to="/contato" className="btn btn-primary">
            Solicitar agora
          </Link>
          <a href="#experiencia" className="btn btn-ghost">
            Conhecer a LUUKSE
          </a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden>
        <span />
      </div>
    </section>
  )
}
