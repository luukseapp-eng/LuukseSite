import { useReveal } from '../../hooks/useReveal'
import styles from './Experiencia.module.css'

const pillars = [
  {
    title: 'Conforto',
    text: 'Cabine silenciosa, clima ajustado e um ritmo que respeita o seu dia, sem pressa desnecessária.',
  },
  {
    title: 'Discrição',
    text: 'Presença profissional sem excesso. O que acontece no trajeto permanece no trajeto.',
  },
  {
    title: 'Atendimento',
    text: 'Detalhes que antecipam necessidades: água, aroma, silêncio ou conversa, conforme você preferir.',
  },
  {
    title: 'Veículo',
    text: 'Frota selecionada para quem espera acabamento, higiene e apresentação impecáveis.',
  },
]

export default function Experiencia() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="experiencia" className={styles.section} ref={ref}>
      <div className={styles.bg} aria-hidden>
        <img src={`${import.meta.env.BASE_URL}images/v2/interior-ref.jpg`} alt="" />
        <div className={styles.veil} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={`${styles.intro} reveal`}>
          <span className="section-label">A experiência</span>
          <h2>Mais do que chegar.</h2>
          <p>
            A LUUKSE foi pensada para estender a sensação do seu tempo privado, do momento em que a porta se abre
            até o destino. Personalização real: preferências, ritmo e presença sob medida.
          </p>
        </div>

        <ul className={styles.grid}>
          {pillars.map((item, i) => (
            <li key={item.title} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>

        <div className={`${styles.extras} reveal`}>
          <p>
            Água · aroma · preferências de rota · silêncio ou conversa · personalização contínua
          </p>
        </div>
      </div>
    </section>
  )
}
