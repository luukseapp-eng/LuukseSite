import { useReveal } from '../../hooks/useReveal'
import styles from './Excelencia.module.css'

const badges = [
  {
    title: 'Mais Favoritado',
    text: 'Reconhecimento de quem consistentemente é escolhido de novo — pela experiência, não pelo volume.',
  },
  {
    title: 'Excelência em Atendimento',
    text: 'Atenção aos detalhes, escuta e presença que elevam cada trajeto ao padrão da marca.',
  },
  {
    title: 'Mestre da Pontualidade',
    text: 'Respeito ao tempo do passageiro como compromisso absoluto — do encontro ao desembarque.',
  },
  {
    title: 'Fidelidade',
    text: 'Trajetória de quem permanece alinhado aos valores LUUKSE e à confiança construída no dia a dia.',
  },
]

export default function Excelencia() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="excelencia" className={styles.section} ref={ref}>
      <div className="container">
        <div className={`${styles.intro} reveal`}>
          <span className="section-label">Programa Excelência</span>
          <h2>Reconhecimento, não ranking.</h2>
          <p>
            O Programa Excelência celebra quem sustenta o padrão LUUKSE. Distinções que reconhecem
            conduta e consistência — sem transformar o cuidado em competição.
          </p>
        </div>

        <ul className={styles.grid}>
          {badges.map((b, i) => (
            <li key={b.title} className={`reveal reveal-delay-${(i % 4) + 1}`}>
              <div className={styles.mark} aria-hidden />
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
