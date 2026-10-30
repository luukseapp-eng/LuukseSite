import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import styles from './Excelencia.module.css'

const badges = [
  {
    title: 'Mais Favoritado',
    text: 'Reconhecimento de quem consistentemente é escolhido de novo pela experiência, não pelo volume.',
  },
  {
    title: 'Excelência em Atendimento',
    text: 'Atenção aos detalhes, escuta e presença que elevam cada trajeto ao padrão da marca.',
  },
  {
    title: 'Mestre da Pontualidade',
    text: 'Respeito ao tempo do passageiro como compromisso, do encontro ao desembarque.',
  },
  {
    title: 'Motorista Fidelidade',
    text: 'Trajetória de quem faz o cliente voltar, pela confiança construída no dia a dia.',
  },
  {
    title: 'Excelência Profissional',
    text: 'Padrão LUUKSE cumprido com consistência: nota, habilitação e treinamentos em dia.',
  },
]

export default function Excelencia() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="excelencia" className={styles.section} ref={ref}>
      <div className="container">
        <div className={`${styles.intro} reveal`}>
          <span className="section-label">Programa Excelência</span>
          <h2>Reconhecimento que vai além do volume.</h2>
          <p>
            O Programa Excelência celebra quem sustenta o padrão LUUKSE. Distinções que reconhecem
            qualidade, conduta e consistência, não apenas o número de viagens.
          </p>
          <Link to="/excelencia" className="btn btn-ghost">
            Conheça o Programa
          </Link>
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
