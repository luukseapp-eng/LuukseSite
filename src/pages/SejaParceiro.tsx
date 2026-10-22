import { useState } from 'react'
import type { FormEvent } from 'react'
import PageShell from './PageShell'
import styles from './FormPages.module.css'

export default function SejaParceiro() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <PageShell
      title="Seja Parceiro"
      lead="Sua operação. Uma nova experiência."
    >
      <h2>Para quem</h2>
      <p>
        Hotéis, condomínios, empresas, eventos e operações que desejam oferecer mobilidade privada
        sob o padrão LUUKSE — com discrição, pontualidade e presença alinhada à imagem da sua marca.
      </p>
      <h2>O que uma parceria pode incluir</h2>
      <ul>
        <li>Atendimento prioritário para hóspedes, residentes ou equipes</li>
        <li>Protocolo de apresentação alinhado à sua operação</li>
        <li>Canal dedicado para solicitações e acompanhamento</li>
        <li>Experiência consistente com a identidade LUUKSE</li>
      </ul>

      {sent ? (
        <div className={styles.success} role="status">
          <h2>Proposta registrada.</h2>
          <p>Nossa equipe comercial retornará para entender sua operação.</p>
        </div>
      ) : (
        <>
          <h2>Fale com parcerias</h2>
          <form className={styles.form} onSubmit={onSubmit}>
            <label>
              Nome
              <input name="nome" type="text" required autoComplete="name" />
            </label>
            <label>
              Empresa / operação
              <input name="empresa" type="text" required />
            </label>
            <label>
              E-mail corporativo
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              Telefone
              <input name="telefone" type="tel" required autoComplete="tel" />
            </label>
            <label>
              Tipo de operação
              <select name="tipo" required defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>
                <option value="hotel">Hotel / hospitalidade</option>
                <option value="condominio">Condomínio</option>
                <option value="empresa">Empresa</option>
                <option value="evento">Eventos</option>
                <option value="outro">Outro</option>
              </select>
            </label>
            <label>
              Conte um pouco sobre a necessidade
              <textarea name="mensagem" rows={4} required />
            </label>
            <button type="submit" className="btn btn-primary">
              Enviar proposta
            </button>
          </form>
        </>
      )}
    </PageShell>
  )
}
