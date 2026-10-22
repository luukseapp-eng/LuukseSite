import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  lead?: string
  children: ReactNode
}

export default function PageShell({ title, lead, children }: Props) {
  return (
    <main className="page-shell">
      <div className="container">
        <p className="section-label">
          <Link to="/">LUUKSE</Link>
        </p>
        <h1>{title}</h1>
        {lead ? <p className="lead">{lead}</p> : null}
        {children}
      </div>
    </main>
  )
}
