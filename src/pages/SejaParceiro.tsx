import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useLeadForm } from '../lib/leads'
import LeadFeedback from '../components/LeadFeedback'
import form from './FormPages.module.css'
import styles from './Marketing.module.css'

const vantagens = [
  {
    icon: '◆',
    title: 'Seu outdoor dentro do app',
    text: 'Sua marca aparece em destaque no carrossel “Parceiros LUUKSE”, na tela inicial de quem viaja com a gente. Imagem, nome, descrição e botão de ação.',
  },
  {
    icon: '✦',
    title: 'Reserva a um toque',
    text: 'O cliente toca em “Reservar” e fecha mesa, quarto ou experiência direto no seu canal: site, WhatsApp ou o seu sistema de reservas.',
  },
  {
    icon: '❖',
    title: 'Chega com a LUUKSE',
    text: 'Com o botão “Ir com LUUKSE”, o cliente já pede o carro com o destino preenchido: o seu endereço.',
  },
  {
    icon: '◈',
    title: 'Público certo',
    text: 'Clientes que valorizam tempo, conforto e experiências premium. Poucos parceiros, muita atenção a cada um.',
  },
]

const passos = [
  { t: 'Envie seu interesse', p: 'Conte quem é o seu negócio no formulário abaixo. É rápido e não tem custo.' },
  { t: 'Análise LUUKSE', p: 'Avaliamos se a sua marca combina com a experiência LUUKSE.' },
  { t: 'Convite exclusivo', p: 'Aprovado, enviamos o convite com os próximos passos para a sua presença no app.' },
  { t: 'Sua marca no app', p: 'Outdoor no carrossel, página da empresa e reservas para os clientes LUUKSE.' },
]

const categorias = ['Gastronomia', 'Hotéis', 'Bem-estar', 'Entretenimento', 'Outras experiências premium']

export default function SejaParceiro() {
  const { status, onSubmit, sent } = useLeadForm('parceiro')
  const r1 = useReveal<HTMLElement>()
  const r2 = useReveal<HTMLElement>()
  const r3 = useReveal<HTMLElement>()
  const r4 = useReveal<HTMLElement>()
  const r5 = useReveal<HTMLElement>()

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <span className={styles.badge}>Parcerias · Somente por convite</span>
            <h1>
              Sua marca no app <em>mais exclusivo</em>.
            </h1>
            <p className={styles.lead}>
              Restaurantes, hotéis, casas de bem-estar e experiências premium exibem o seu outdoor dentro do
              aplicativo LUUKSE e recebem reservas de clientes que viajam com a gente. A entrada é por
              convite: envie o seu interesse e, se aprovado, a LUUKSE envia o seu convite.
            </p>
            <div className={styles.actions}>
              <a href="#interesse" className="btn btn-primary">
                Quero receber um convite
              </a>
              <a href="#experiencia" className="btn btn-ghost">
                Ver a experiência
              </a>
            </div>
            <div className={styles.chips}>
              {categorias.map((c) => (
                <span key={c} className={styles.chip}>
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.phoneWrap} aria-hidden>
            <div className={styles.phone}>
              <div className={styles.phoneBrand}>
                <img src={`${import.meta.env.BASE_URL}brand/logo-mark.png`} alt="" />
                <span>LUUKSE</span>
              </div>
              <span className={styles.phoneLabel}>Parceiros LUUKSE</span>
              <div className={styles.outdoor}>
                <small>Gastronomia</small>
                <strong>Seu restaurante em destaque</strong>
                <span className={styles.pill}>Reservar mesa</span>
              </div>
              <div className={styles.dots}>
                <i />
                <i />
                <i />
              </div>
              <div className={styles.mini}>
                <span>Ir ao restaurante</span>
                <b>Ir com LUUKSE</b>
              </div>
              <div className={styles.mini}>
                <span>Mesa para hoje</span>
                <b>Reservar</b>
              </div>
              <div className={styles.invite}>Acesso somente para convidados</div>
            </div>
          </div>
        </div>
      </header>

      <section id="experiencia" className={styles.section} ref={r1}>
        <div className="container">
          <div className={`${styles.intro} reveal`}>
            <span className="section-label">A experiência</span>
            <h2>O cliente descobre, reserva e chega com a LUUKSE.</h2>
            <p>
              Enquanto o cliente acompanha a viagem e planeja o dia, a sua marca passa diante dele, no
              melhor lugar do app, como um outdoor de luxo.
            </p>
          </div>
          <div className={`${styles.cards} reveal`}>
            {vantagens.map((v) => (
              <article key={v.title} className={styles.card}>
                <div className={styles.icon} aria-hidden>
                  {v.icon}
                </div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.alt}`} ref={r2}>
        <div className="container">
          <div className={`${styles.band} reveal`}>
            <div>
              <span className="section-label">Somente para convidados</span>
              <h2>Exclusividade é parte do produto.</h2>
              <p>
                Não abrimos vagas ao público. Cada parceiro é escolhido para manter o padrão da experiência
                LUUKSE. Quem tem interesse envia os dados e, se aprovado, recebe o convite diretamente da
                nossa equipe.
              </p>
            </div>
            <ul className={styles.list}>
              <li>Envio de interesse sem custo e sem compromisso</li>
              <li>Análise individual de cada marca</li>
              <li>Convite enviado pela LUUKSE aos aprovados</li>
              <li>Presença alinhada à identidade preto, branco e ouro do app</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.section} ref={r3}>
        <div className="container">
          <div className={`${styles.intro} reveal`}>
            <span className="section-label">Passo a passo</span>
            <h2>Do interesse ao convite.</h2>
          </div>
          <ol className={`${styles.steps} reveal`}>
            {passos.map((p) => (
              <li key={p.t} className={styles.step}>
                <h3>{p.t}</h3>
                <p>{p.p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="interesse" className={`${styles.section} ${styles.alt} ${styles.formSection}`} ref={r4}>
        <div className="container">
          <div className={`${styles.formIntro} reveal`}>
            <span className="section-label">Envie seu interesse</span>
            <h2>Quero ser um parceiro convidado.</h2>
            <p>
              Preencha os dados abaixo. Se o seu negócio for aprovado, a LUUKSE envia o convite para o
              e-mail informado.
            </p>
          </div>

          {sent ? (
            <LeadFeedback
              status={status}
              title="Interesse recebido."
              text="Nossa equipe vai analisar. Se for aprovado, enviaremos o convite exclusivo para o seu e-mail."
            />
          ) : (
            <form className={`${form.form} ${form.formWide}`} onSubmit={onSubmit}>
              <input name="website" className={form.hp} type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className={form.formGrid}>
                <label>
                  Nome do responsável
                  <input name="nome" type="text" required autoComplete="name" />
                </label>
                <label>
                  Empresa / marca
                  <input name="empresa" type="text" required autoComplete="organization" />
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
                  Tipo de negócio
                  <select name="tipo" required defaultValue="">
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="gastronomia">Restaurante / Gastronomia</option>
                    <option value="hotel">Hotel / hospitalidade</option>
                    <option value="bem-estar">Bem-estar</option>
                    <option value="entretenimento">Entretenimento</option>
                    <option value="mobilidade-condominio-empresa">Condomínio / empresa (mobilidade)</option>
                    <option value="evento">Eventos</option>
                    <option value="outro">Outra experiência premium</option>
                  </select>
                </label>
                <label>
                  Cidade
                  <input name="cidade" type="text" required />
                </label>
                <label className={form.full}>
                  Site ou Instagram do negócio
                  <input name="link" type="text" placeholder="Opcional" />
                </label>
                <label className={form.full}>
                  Por que a sua marca combina com a LUUKSE?
                  <textarea name="mensagem" rows={4} required />
                </label>
                <label className={`${form.check} ${form.full}`}>
                  <input name="aceite" type="checkbox" required />
                  <span>
                    Concordo em ser contatado pela LUUKSE sobre este interesse. Tratamento de dados conforme a{' '}
                    <Link to="/privacidade">Política de Privacidade</Link>.
                  </span>
                </label>
              </div>
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                Enviar interesse
              </button>
              {status === 'error' && (
                <p className={form.error} role="alert">
                  Não foi possível enviar agora. Tente novamente ou escreva para contato@luukseapp.com.
                </p>
              )}
            </form>
          )}
        </div>
      </section>

      <section className={styles.section} ref={r5}>
        <div className="container">
          <div className={`${styles.band} reveal`}>
            <div>
              <span className="section-label">Mobilidade para a sua operação</span>
              <h2>Hotel, condomínio, empresa ou evento?</h2>
              <p>
                Também oferecemos mobilidade privada sob o padrão LUUKSE para hóspedes, residentes e equipes,
                com atendimento prioritário e canal dedicado.
              </p>
            </div>
            <div>
              <ul className={styles.list}>
                <li>Atendimento prioritário para hóspedes, residentes ou equipes</li>
                <li>Protocolo de apresentação alinhado à sua operação</li>
                <li>Canal dedicado para solicitações e acompanhamento</li>
              </ul>
              <div className={styles.actions} style={{ marginTop: '1.5rem' }}>
                <a href="#interesse" className="btn btn-ghost">
                  Falar sobre mobilidade
                </a>
                <Link to="/frotas" className="btn btn-primary">
                  Tenho uma frota
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
