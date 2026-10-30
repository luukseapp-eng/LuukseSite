import PageShell from './PageShell'
import privacidadeHtml from '../content/privacidade.html?raw'

export default function Privacidade() {
  return (
    <PageShell
      title="Política de Privacidade"
      lead="Como a LUUKSE trata dados pessoais com respeito, segurança e transparência."
    >
      <div dangerouslySetInnerHTML={{ __html: privacidadeHtml }} />
    </PageShell>
  )
}
