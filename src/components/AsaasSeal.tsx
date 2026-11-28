import { useState } from 'react'
import { asaasSealUrl, ASAAS_SITE_URL, ASAAS_SUPPORT_LINES } from '../config/asaasSeal'
import styles from './Footer.module.css'

// Fundo escuro: Negativo-Branco. Se não carregar, Positivo (a URL enviada pelo Asaas) sobre uma faixa clara.
export default function AsaasSeal() {
  const [fallback, setFallback] = useState(false)
  return (
    <div className={styles.asaas}>
      <a href={ASAAS_SITE_URL} target="_blank" rel="noopener" className={fallback ? styles.asaasLight : undefined}>
        <img
          src={asaasSealUrl(fallback ? 'Positivo' : 'Negativo-Branco')}
          width={160}
          height={48}
          alt="Serviços financeiros Asaas"
          onError={fallback ? undefined : () => setFallback(true)}
        />
      </a>
      <p>
        {ASAAS_SUPPORT_LINES[0]}
        <br />
        {ASAAS_SUPPORT_LINES[1]}
      </p>
    </div>
  )
}
