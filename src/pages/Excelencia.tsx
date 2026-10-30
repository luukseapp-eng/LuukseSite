import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import styles from './Excelencia.module.css'

const categorias = [
  {
    title: 'Mais Favoritado',
    text: 'Quem é pedido de novo, por escolha de cada cliente, em número de clientes diferentes.',
  },
  {
    title: 'Excelência em Atendimento',
    text: 'A maior nota média dada pelos clientes, com um mínimo de viagens avaliadas.',
  },
  {
    title: 'Mestre da Pontualidade',
    text: 'O maior índice de chegadas no horário marcado nas viagens agendadas.',
  },
  {
    title: 'Motorista Fidelidade',
    text: 'Quem mais faz o cliente voltar a viajar, com um mínimo de clientes diferentes.',
  },
  {
    title: 'Excelência Profissional',
    text: 'A melhor pontuação nos padrões LUUKSE: nota, volume de viagens, habilitação e treinamentos em dia.',
  },
]

const ciclos = [
  {
    label: 'Trimestral',
    title: 'Um fechamento a cada três meses',
    text: 'Os ciclos de três meses são contados a partir da data de início das operações da LUUKSE, e não por trimestre de calendário. Por exemplo, se o início for em 17/08, os fechamentos serão em 17/11, 17/02, 17/05 e assim por diante. No fechamento de cada ciclo, os vencedores das cinco categorias recebem o Selo de Excelência e a premiação do ciclo.',
  },
  {
    label: 'Anual',
    title: 'Motoristas do Ano LUUKSE',
    text: 'Doze meses contados da data de início das operações. No fechamento do ciclo anual, os três primeiros colocados do ranking anual recebem o título, o troféu e a premiação do ano.',
  },
]

const transparencia = [
  {
    who: 'O motorista',
    text: 'Vê a própria posição no ciclo trimestral em curso, seus indicadores, os padrões que cumpre, os selos, as conquistas e o valor final aprovado.',
  },
  {
    who: 'O cliente',
    text: 'Vê o selo ativo do motorista e o título de Motorista do Ano. Não vê valores, indicadores nem advertências.',
  },
  {
    who: 'A LUUKSE',
    text: 'Acompanha tudo, com registro de quem aprovou, pagou, advertiu ou cancelou. Nada é apagado do histórico.',
  },
]

export default function Excelencia() {
  const refOque = useReveal<HTMLElement>()
  const refCiclos = useReveal<HTMLElement>()
  const refCat = useReveal<HTMLElement>()
  const refSelo = useReveal<HTMLElement>()
  const refAno = useReveal<HTMLElement>()
  const refConduta = useReveal<HTMLElement>()
  const refTransp = useReveal<HTMLElement>()

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className="container">
          <p className="section-label">
            <Link to="/">LUUKSE</Link> · Programa Excelência
          </p>
          <h1>Quem sustenta o padrão LUUKSE é reconhecido.</h1>
          <p className={styles.lead}>
            O Programa Excelência LUUKSE reconhece os motoristas que oferecem a melhor experiência
            aos nossos clientes. Mede a qualidade do atendimento, e não apenas a quantidade de
            viagens.
          </p>
          <div className={styles.heroActions}>
            <Link to="/seja-motorista" className="btn btn-primary">
              Seja Motorista
            </Link>
            <a href="#como-funciona" className="btn btn-ghost">
              Como funciona
            </a>
          </div>
        </div>
      </header>

      <section id="como-funciona" className={styles.section} ref={refOque}>
        <div className="container">
          <div className={`${styles.intro} reveal`}>
            <span className="section-label">O que é</span>
            <h2>Reconhecimento por desempenho real.</h2>
            <p>
              O Programa considera a avaliação dos clientes, a pontualidade, a fidelização, a
              preferência dos clientes e o cumprimento dos padrões LUUKSE. Não existe um único
              vencedor: motoristas diferentes podem ser reconhecidos em categorias diferentes no
              mesmo período.
            </p>
          </div>
          <div className={styles.two}>
            <div className={`${styles.card} reveal reveal-delay-1`}>
              <div className={styles.mark} aria-hidden />
              <h3>Para motoristas</h3>
              <p>
                A participação é automática para todo motorista parceiro ativo, autônomo ou
                vinculado a uma empresa de frota. Não há inscrição nem custo. Para concorrer à
                premiação de um ciclo, é preciso estar com o cadastro ativo, ter feito o número
                mínimo de viagens do período e não ter advertência de conduta no ciclo trimestral.
              </p>
            </div>
            <div className={`${styles.card} reveal reveal-delay-2`}>
              <div className={styles.mark} aria-hidden />
              <h3>Para clientes</h3>
              <p>
                Você não precisa fazer nada. Sua avaliação, suas escolhas e o seu retorno ajudam a
                reconhecer os melhores motoristas. Quem conquista o Selo de Excelência aparece com
                ele no perfil, e você sabe que o padrão foi comprovado pelo uso real.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`} ref={refCiclos}>
        <div className="container">
          <div className={`${styles.intro} reveal`}>
            <span className="section-label">Ciclos</span>
            <h2>Dois ciclos, sempre no horário de Brasília.</h2>
            <p>
              O Programa começa na data em que a LUUKSE inicia as operações reais, a data oficial
              de lançamento, que será divulgada no aplicativo. Motoristas e viagens de teste,
              anteriores a essa data, não participam. Os critérios de cada ciclo são divulgados
              aos participantes antes do seu início.
            </p>
          </div>
          <ul className={styles.two}>
            {ciclos.map((c, i) => (
              <li key={c.label} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
                <span className={styles.tag}>{c.label}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
          <p className={`${styles.note} reveal`}>
            Cada ciclo é fechado automaticamente, com apuração pelos dados reais das viagens. A
            LUUKSE confere, aprova e paga. O motorista é avisado pelo aplicativo.
          </p>
        </div>
      </section>

      <section className={styles.section} ref={refCat}>
        <div className="container">
          <div className={`${styles.intro} reveal`}>
            <span className="section-label">Categorias</span>
            <h2>Cinco categorias a cada ciclo trimestral.</h2>
            <p>
              Todas apuradas automaticamente com as viagens do período. Em caso de empate, critérios
              sucessivos decidem e, se persistir, todos os empatados vencem e dividem a premiação
              da categoria.
            </p>
          </div>
          <ul className={styles.cats}>
            {categorias.map((c, i) => (
              <li key={c.title} className={`${styles.card} reveal reveal-delay-${(i % 4) + 1}`}>
                <div className={styles.mark} aria-hidden />
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`} ref={refSelo}>
        <div className="container">
          <div className={`${styles.intro} reveal`}>
            <span className="section-label">Selo e premiação</span>
            <h2>Reconhecimento visível e premiação financeira.</h2>
          </div>
          <div className={styles.two}>
            <div className={`${styles.card} reveal reveal-delay-1`}>
              <div className={styles.mark} aria-hidden />
              <h3>Selo de Excelência</h3>
              <p>
                Cada vencedor de categoria recebe o selo no fechamento do ciclo trimestral. Ele fica
                visível no perfil do motorista, inclusive para os clientes, por 30 dias. Depois, a
                conquista permanece registrada no histórico do motorista.
              </p>
            </div>
            <div className={`${styles.card} reveal reveal-delay-2`}>
              <div className={styles.mark} aria-hidden />
              <h3>Premiação financeira</h3>
              <p>
                Além do selo, os vencedores recebem uma premiação em dinheiro, calculada como um
                percentual do lucro líquido da LUUKSE no período e sempre aprovada pela LUUKSE
                antes do pagamento. A premiação é um reconhecimento por desempenho, concedido pela
                LUUKSE por liberalidade. Se não houver lucro líquido no ciclo, o reconhecimento
                pode ser feito apenas com os selos.
              </p>
            </div>
          </div>
          <p className={`${styles.note} reveal`}>
            Motoristas vinculados a empresas de frota participam em nome próprio: o selo, o título e
            a premiação são sempre do motorista.
          </p>
        </div>
      </section>

      <section className={styles.section} ref={refAno}>
        <div className="container">
          <div className={`${styles.feature} reveal`}>
            <span className="section-label">Motoristas do Ano</span>
            <h2>Os três melhores do ano são homenageados.</h2>
            <p>
              Ao fim de cada ciclo anual de 12 meses, contados da data de início das operações, os três primeiros colocados do ranking anual
              tornam-se Motoristas do Ano LUUKSE. Eles recebem um troféu físico, a premiação anual
              e podem ser homenageados em cerimônia. O título fica registrado no perfil e no
              histórico do motorista e pode ser exibido aos clientes.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`} ref={refConduta}>
        <div className="container">
          <div className={`${styles.intro} reveal`}>
            <span className="section-label">Conduta</span>
            <h2>Excelência exige respeito.</h2>
            <p>
              O motorista que receber advertência por mau comportamento (por exemplo, falta de
              cortesia, uso do celular ao volante, direção imprudente, cobrança indevida ou
              discriminação) fica fora da premiação do ciclo trimestral em que a conduta ocorreu. Ele não
              perde pontos e volta a concorrer no ciclo seguinte. Com duas ou mais advertências
              no ciclo anual, fica fora também de Motoristas do Ano.
            </p>
            <p>
              O motorista é avisado, vê o motivo e pode contestar uma vez, pelo aplicativo. A
              LUUKSE analisa e responde, mantendo ou cancelando a advertência. Ocorrências
              operacionais, como pane ou acidente, não são advertências e não afetam a premiação.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} ref={refTransp}>
        <div className="container">
          <div className={`${styles.intro} reveal`}>
            <span className="section-label">Transparência</span>
            <h2>Cada um vê o que lhe cabe.</h2>
          </div>
          <ul className={styles.cats3}>
            {transparencia.map((t, i) => (
              <li key={t.who} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
                <div className={styles.mark} aria-hidden />
                <h3>{t.who}</h3>
                <p>{t.text}</p>
              </li>
            ))}
          </ul>
          <p className={`${styles.note} reveal`}>
            O Programa usa dados de viagens, avaliações e treinamentos, tratados conforme a nossa{' '}
            <Link to="/privacidade">Política de Privacidade</Link>. As regras podem ser ajustadas
            pela LUUKSE, com aviso aos motoristas, e valem para os ciclos seguintes.
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.cta}`}>
        <div className="container">
          <h2>Faça parte do padrão LUUKSE.</h2>
          <p>Conheça a Academia, cadastre-se como motorista ou fale com a nossa equipe.</p>
          <div className={styles.heroActions}>
            <Link to="/seja-motorista" className="btn btn-primary">
              Seja Motorista
            </Link>
            <Link to="/contato" className="btn btn-ghost">
              Fale conosco
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
