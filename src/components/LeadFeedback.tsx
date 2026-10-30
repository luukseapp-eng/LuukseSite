import { CONTACT } from '../config/social'
import styles from '../pages/FormPages.module.css'

type Props = { status: 'idle' | 'sending' | 'api' | 'mailto' | 'error'; title: string; text: string }

/** Mensagem de sucesso (ou erro) padrão dos formulários. */
export default function LeadFeedback({ status, title, text }: Props) {
  if (status === 'api') {
    return (
      <div className={styles.success} role="status">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    )
  }
  if (status === 'mailto') {
    return (
      <div className={styles.success} role="status">
        <h2>Falta só enviar.</h2>
        <p>
          Abrimos o seu e-mail com tudo preenchido para {CONTACT.email}. É só enviar. Se não abriu,
          escreva direto para esse endereço.
        </p>
      </div>
    )
  }
  return null
}
