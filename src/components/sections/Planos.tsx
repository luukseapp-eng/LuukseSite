import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import styles from './Planos.module.css'

const plans = [
  {
    name: 'PASS',
    tag: 'Sem assinatura',
    desc: 'Acesso à experiência LUUKSE quando você quiser — sem compromisso mensal.',
    points: ['Uso sob demanda', 'Padrão completo de atendimento', 'Ideal para começar'],
  },
  {
    name: 'INDIVIDUAL',
    tag: 'Para você',
    desc: 'Plano pensado para quem vive a mobilidade privada como rotina pessoal.',
    points: ['Preferências salvas', 'Prioridade de atendimento', 'Continuidade de experiência'],
    featured: true,
  },
  {
    name: 'FAMÍLIA',
    tag: 'Para o núcleo',
    desc: 'Mais de um perfil sob o mesmo cuidado — com discrição e organização.',
    points: ['Múltiplos perfis', 'Gestão simplificada', 'Mesmo padrão LUUKSE'],
  },
  {
    name: 'CORPORATIVO',
    tag: 'Para empresas',
    desc: 'Mobilidade executiva alinhada à imagem da sua organização.',
    points: ['Gestão centralizada', 'Relatórios sob medida', 'Protocolo corporativo'],
  },
]

export default function Planos() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="planos" className={styles.section} ref={ref}>
      <div className="container">
        <div className={`${styles.intro} reveal`}>
          <span className="section-label">Planos</span>
          <h2>Escolha como pertencer.</h2>
          <p>
            Preços exclusivos conforme o perfil e a intensidade de uso. Sem fórmulas genéricas —
            uma conversa sobre o que faz sentido para você.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <article
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.featured : ''} reveal reveal-delay-${(i % 4) + 1}`}
            >
              <p className={styles.tag}>{plan.tag}</p>
              <h3>{plan.name}</h3>
              <p className={styles.desc}>{plan.desc}</p>
              <ul>
                {plan.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Link to="/contato" className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}>
                Falar com a LUUKSE
              </Link>
            </article>
          ))}
        </div>

        <p className={`${styles.note} reveal`}>
          Preços exclusivos — apresentados sob consulta, de acordo com o plano e a região.
        </p>
      </div>
    </section>
  )
}
