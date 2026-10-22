import { useReveal } from '../../hooks/useReveal'
import styles from './ComoUsar.module.css'

const panels = [
  {
    id: 'now',
    title: 'LUUKSE NOW',
    subtitle: 'Quando o momento pede presença imediata',
    text: 'Solicite quando precisar. Um padrão elevado de apresentação, pontualidade e cuidado — sem abrir mão da discrição.',
  },
  {
    id: 'dedicado',
    title: 'MOTORISTA DEDICADO',
    subtitle: 'O seu dia, com quem já conhece o seu ritmo',
    text: 'Disponibilidade alinhada à sua agenda. Ideal para agendas intensas, compromissos sequenciais e deslocamentos estratégicos.',
  },
  {
    id: 'preferido',
    title: 'MOTORISTA PREFERIDO',
    subtitle: 'Continuidade que vira confiança',
    text: 'Escolha e mantenha quem já entende suas preferências. Relação construída no detalhe — e no respeito ao seu tempo.',
  },
  {
    id: 'experiencia',
    title: 'EXPERIÊNCIA LUUKSE',
    subtitle: 'O protocolo completo',
    text: 'Do acolhimento ao desembarque: água, aroma, silêncio ou conversa, rota e presença — sob o padrão da marca.',
  },
]

export default function ComoUsar() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="como-usar" className={styles.section} ref={ref}>
      <div className="container">
        <div className={`${styles.intro} reveal`}>
          <span className="section-label">Como usar</span>
          <h2>Quatro formas de viver a LUUKSE.</h2>
          <p>Escolha o formato que se encaixa no seu momento — todos sob o mesmo padrão de excelência.</p>
        </div>

        <div className={styles.panels}>
          {panels.map((panel, i) => (
            <article key={panel.id} className={`${styles.panel} reveal reveal-delay-${(i % 4) + 1}`}>
              <div className={styles.index}>{String(i + 1).padStart(2, '0')}</div>
              <h3>{panel.title}</h3>
              <p className={styles.subtitle}>{panel.subtitle}</p>
              <p className={styles.text}>{panel.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
