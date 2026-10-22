import { useReveal } from '../../hooks/useReveal'
import styles from './Cidades.module.css'

export default function Cidades() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="cidades" className={styles.section} ref={ref}>
      <div className="container">
        <div className={`${styles.box} reveal`}>
          <span className="section-label">Presença</span>
          <h2>A LUUKSE está construindo sua presença.</h2>
          <p>
            Expansão cuidadosa, alinhada aos critérios da marca — qualidade de operação, padrão de
            atendimento e capacidade de sustentar a experiência que prometemos.
          </p>
          <p className={styles.soft}>
            Novas cidades entram quando a excelência pode ser entregue com consistência. Sem atalhos.
          </p>
        </div>
      </div>
    </section>
  )
}
