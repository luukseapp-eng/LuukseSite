import styles from './Diferenciais.module.css'

const items = [
  { title: 'Motoristas da Academia', text: 'Formados em atendimento, pontualidade e discrição.' },
  { title: 'Frota selecionada', text: 'Acabamento, higiene e apresentação em cada veículo.' },
  { title: 'Do seu jeito', text: 'Rota, clima, água, aroma, silêncio ou conversa.' },
  { title: 'Motorista de confiança', text: 'Mantenha quem já conhece suas preferências.' },
]

export default function Diferenciais() {
  return (
    <section className={styles.strip} aria-label="Diferenciais LUUKSE">
      <ul className={`container ${styles.list}`}>
        {items.map((d) => (
          <li key={d.title}>
            <strong>{d.title}</strong>
            <span>{d.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
