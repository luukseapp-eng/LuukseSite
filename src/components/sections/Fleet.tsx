import { Link } from 'react-router-dom'
import { useReveal } from '../../hooks/useReveal'
import styles from './Fleet.module.css'

export default function Fleet() {
  const ref = useReveal<HTMLElement>()
  return (
    <section id="frotas" className={styles.section} ref={ref}>
      <div className="container">
        <div className={`${styles.panel} reveal`}>
          <span className={styles.badge}>Para empresas de frota</span>
          <h2>
            Sua frota no <em>padrão LUUKSE</em>.
          </h2>
          <p>
            Cadastre sua empresa, credencie motoristas e veículos e receba corridas de clientes que
            valorizam excelência. Painel exclusivo, código por motorista e recebíveis claros.
          </p>
          <div className={styles.actions}>
            <Link to="/frotas#cadastro" className="btn btn-primary">
              Cadastrar minha frota
            </Link>
            <Link to="/frotas" className="btn btn-ghost">
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
