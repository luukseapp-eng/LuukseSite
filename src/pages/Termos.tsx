import PageShell from './PageShell'
import termosHtml from '../content/termos.html?raw'

export default function Termos() {
  return (
    <PageShell
      title="Termos de Uso"
      lead="As regras de uso da plataforma LUUKSE para clientes, motoristas e empresas parceiras."
    >
      <div dangerouslySetInnerHTML={{ __html: termosHtml }} />
    </PageShell>
  )
}
