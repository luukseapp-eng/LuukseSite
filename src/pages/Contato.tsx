import { useState } from 'react'
import type { FormEvent } from 'react'
import PageShell from './PageShell'
import styles from './FormPages.module.css'

export default function Contato() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PageShell
      title="Contato"
      lead="Fale com a LUUKSE. Retornamos com atenção e discrição."
    >
      {sent ? (
        <div className={styles.success} role="status">
          <h2>Mensagem registrada.</h2>
          <p>Obrigado pelo contato. Nossa equipe retornará em breve.</p>
        </div>
      ) : (
        <form className={styles.form} onSubmit={onSubmit}>
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
          <button type="submit" className="btn btn-primary">
            Enviar mensagem
          </button>
        </form>
      )}
    </PageShell>
  )
}
