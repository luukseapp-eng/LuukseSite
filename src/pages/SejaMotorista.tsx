import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import PageShell from './PageShell'
import styles from './FormPages.module.css'

export default function SejaMotorista() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

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
        <div className={styles.success} role="status">
          <h2>Interesse recebido.</h2>
          <p>Entraremos em contato com os próximos passos do processo.</p>
        </div>
      ) : (
        <>
          <h2>Manifeste interesse</h2>
          <form className={styles.form} onSubmit={onSubmit}>
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
            <button type="submit" className="btn btn-primary">
              Enviar interesse
            </button>
          </form>
        </>
      )}
    </PageShell>
  )
}
