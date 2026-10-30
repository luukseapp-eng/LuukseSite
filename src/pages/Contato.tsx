import PageShell from './PageShell'
import styles from './FormPages.module.css'
import LeadFeedback from '../components/LeadFeedback'
import { useLeadForm } from '../lib/leads'

export default function Contato() {
  const { status, onSubmit, sent } = useLeadForm('contato')

  return (
    <PageShell
      title="Contato"
      lead="Fale com a LUUKSE. Retornamos com atenção e discrição."
    >
      {sent ? (
        <LeadFeedback status={status} title="Mensagem registrada." text="Obrigado pelo contato. Nossa equipe retornará em breve." />
      ) : (
        <form className={styles.form} onSubmit={onSubmit}>
<input name="website" className={styles.hp} type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <label>
            Nome
            <input name="nome" type="text" required autoComplete="name" />
          </label>
          <label>
            E-mail
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            Telefone
            <input name="telefone" type="tel" autoComplete="tel" />
          </label>
          <label>
            Assunto
            <select name="assunto" required defaultValue="">
              <option value="" disabled>
                Selecione
              </option>
              <option value="solicitar">Solicitar agora</option>
              <option value="planos">Planos e preços</option>
              <option value="parceria">Parceria</option>
              <option value="motorista">Quero ser motorista</option>
              <option value="outro">Outro</option>
            </select>
          </label>
          <label>
            Mensagem
            <textarea name="mensagem" rows={5} required />
          </label>
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            Enviar mensagem
          </button>
          {status === 'error' && (
            <p className={styles.error} role="alert">
              Não foi possível enviar agora. Tente novamente ou escreva para contato@luukseapp.com.
            </p>
          )}
        </form>
      )}
    </PageShell>
  )
}
