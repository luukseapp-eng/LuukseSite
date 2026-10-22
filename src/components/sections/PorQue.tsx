import { useReveal } from '../../hooks/useReveal'
import styles from './PorQue.module.css'

const reasons = [
  { title: 'Seu tempo em primeiro lugar', text: 'Pontualidade tratada como compromisso, do encontro ao desembarque.' },
  { title: 'Privacidade no trajeto', text: 'Discrição orienta postura, conversa e presença. O que acontece no trajeto permanece no trajeto.' },
  { title: 'Personalização contínua', text: 'Água, aroma, rota, silêncio ou conversa: o cuidado com suas preferências continua a cada viagem.' },
  { title: 'Padrão que se mantém', text: 'Motoristas formados e avaliados pela Academia LUUKSE e reconhecidos pelo Programa Excelência.' },
]

export default function PorQue() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="por-que" className={styles.section} ref={ref}>
      <div className="container">
        <div className={`${styles.intro} reveal`}>
          <span className="section-label">Por que LUUKSE?</span>
          <h2>Mobilidade privada pensada em cada detalhe.</h2>
          <p>
            Não basta chegar ao destino. A LUUKSE une motoristas preparados, veículos selecionados e
            atendimento sob medida para que o trajeto seja tão tranquilo quanto o seu dia pede.
          </p>
        </div>
        <ol className={styles.grid}>
          {reasons.map((r, i) => (
            <li key={r.title} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
