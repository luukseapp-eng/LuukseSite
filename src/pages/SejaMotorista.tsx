import { Link } from 'react-router-dom'
import PageShell from './PageShell'
import styles from './FormPages.module.css'
import LeadFeedback from '../components/LeadFeedback'
import { useLeadForm } from '../lib/leads'

export default function SejaMotorista() {
  const { status, onSubmit, sent } = useLeadForm('motorista')

  return (
    <PageShell
      title="Seja Motorista"
      lead="Você não está apenas dirigindo. Está representando uma marca."
    >
      <h2>O que esperamos</h2>
      <ul>
        <li>Postura profissional e discrição absoluta</li>
        <li>Compromisso com pontualidade e apresentação</li>
        <li>Disposição para a Academia LUUKSE e o padrão da marca</li>
        <li>Veículo alinhado aos critérios de excelência</li>
      </ul>
      <p>
        Conheça também a <Link to="/#academia">Academia LUUKSE</Link> e o{' '}
        <Link to="/excelencia">Programa Excelência</Link>, que reconhece os motoristas com selos, premiação
        financeira e o título de Motoristas do Ano.
      </p>

      {sent ? (
        <LeadFeedback status={status} title="Interesse recebido." text="Entraremos em contato com os próximos passos do processo." />
      ) : (
        <>
          <h2>Manifeste interesse</h2>
          <form className={styles.form} onSubmit={onSubmit}>
<input name="website" className={styles.hp} type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <label>
              Nome completo
              <input name="nome" type="text" required autoComplete="name" />
            </label>
            <label>
              E-mail
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              Telefone / WhatsApp
              <input name="telefone" type="tel" required autoComplete="tel" />
            </label>
            <label>
              Cidade
              <input name="cidade" type="text" required />
            </label>
            <label>
              Experiência relevante
              <textarea name="experiencia" rows={4} placeholder="Conte brevemente sua trajetória" />
            </label>
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              Enviar interesse
            </button>
          {status === 'error' && (
            <p className={styles.error} role="alert">
              Não foi possível enviar agora. Tente novamente ou escreva para contato@luukseapp.com.
            </p>
          )}
          </form>
        </>
      )}
    </PageShell>
  )
}
