import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useLeadForm } from '../lib/leads'
import LeadFeedback from '../components/LeadFeedback'
import form from './FormPages.module.css'
import styles from './Marketing.module.css'

const beneficios = [
  {
    icon: '◆',
    title: 'Corridas para a sua frota',
    text: 'Receba solicitações de clientes que escolhem mobilidade privada com padrão, no seu horário e na sua região.',
  },
  {
    icon: '▣',
    title: 'Painel exclusivo da empresa',
    text: 'Cadastre motoristas e veículos, designe corridas e acompanhe tudo em um só lugar, com busca e histórico.',
  },
  {
    icon: '✦',
    title: 'Você no controle',
    text: 'Cada motorista entra com um código gerado pela sua empresa, de uso único. Só atende quem você autoriza.',
  },
  {
    icon: '◈',
    title: 'Recebíveis transparentes',
    text: 'Corridas realizadas e valores a receber do mês organizados por motorista, veículo e período.',
  },
  {
    icon: '❖',
    title: 'Padrão que valoriza sua marca',
    text: 'Academia LUUKSE, checklist de veículo e Programa Excelência: sua equipe sendo reconhecida pelo que faz de melhor.',
  },
  {
    icon: '✧',
    title: 'Atendimento direto',
    text: 'Uma equipe LUUKSE para apoiar o credenciamento, a operação e o dia a dia da sua empresa.',
  },
]

const passos = [
  { t: 'Envie o cadastro', p: 'Preencha o formulário abaixo com os dados da empresa e da frota.' },
  { t: 'Análise LUUKSE', p: 'Avaliamos a empresa, os veículos e o padrão de atendimento. Retornamos com os próximos passos.' },
  { t: 'Credenciamento', p: 'Acesso ao painel, cadastro de motoristas com código e vistoria dos veículos.' },
  { t: 'Comece a rodar', p: 'Receba corridas, designe motoristas e acompanhe os resultados no painel.' },
]

export default function Frotas() {
  const { status, onSubmit, sent } = useLeadForm('frota')
  const r1 = useReveal<HTMLElement>()
  const r2 = useReveal<HTMLElement>()
  const r3 = useReveal<HTMLElement>()
  const r4 = useReveal<HTMLElement>()

  return (
    <main className={styles.page}>
      <header className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <span className={styles.badge}>Para empresas de frota</span>
            <h1>
              Sua frota no <em>padrão LUUKSE</em>.
            </h1>
            <p className={styles.lead}>
              Transporte executivo, chauffeur e transfer: coloque seus motoristas e veículos diante de
              clientes que valorizam tempo, discrição e excelência. Cadastre sua empresa e opere com um
              painel feito para você.
            </p>
            <div className={styles.actions}>
              <a href="#cadastro" className="btn btn-primary">
                Cadastrar minha frota
              </a>
              <a href="#como-funciona" className="btn btn-ghost">
                Como funciona
              </a>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <strong>Painel Partner</strong>
                <span>gestão completa da operação</span>
              </div>
              <div className={styles.stat}>
                <strong>Código por motorista</strong>
                <span>você autoriza quem atende</span>
              </div>
              <div className={styles.stat}>
                <strong>Recebíveis do mês</strong>
                <span>claros e acompanháveis</span>
              </div>
            </div>
          </div>
          <div className={styles.phoneWrap} aria-hidden>
            <img
              src={`${import.meta.env.BASE_URL}brand/logo-full.png`}
              alt=""
              width={360}
              style={{ filter: 'drop-shadow(0 0 50px rgba(201,162,39,.35))' }}
            />
          </div>
        </div>
      </header>

      <section className={styles.section} ref={r1}>
        <div className="container">
          <div className={`${styles.intro} reveal`}>
            <span className="section-label">Por que a LUUKSE</span>
            <h2>Mais do que corridas: uma operação organizada.</h2>
            <p>
              Empresas de frota credenciadas ganham ferramentas, visibilidade e a credibilidade de uma marca
              de mobilidade privada.
            </p>
          </div>
          <div className={`${styles.cards} ${styles.cards3} reveal`}>
            {beneficios.map((b) => (
              <article key={b.title} className={styles.card}>
                <div className={styles.icon} aria-hidden>
                  {b.icon}
                </div>
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className={`${styles.section} ${styles.alt}`} ref={r2}>
        <div className="container">
          <div className={`${styles.intro} reveal`}>
            <span className="section-label">Como funciona</span>
            <h2>Do cadastro à primeira corrida em quatro passos.</h2>
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

      <section className={styles.section} ref={r3}>
        <div className="container">
          <div className={`${styles.band} reveal`}>
            <div>
              <span className="section-label">Quem procuramos</span>
              <h2>Frotas que entregam excelência.</h2>
              <p>
                O credenciamento é criterioso, porque o cliente LUUKSE espera o mesmo padrão em cada viagem.
              </p>
            </div>
            <ul className={styles.list}>
              <li>Empresa regularizada, com CNPJ ativo</li>
              <li>Motoristas habilitados, com postura profissional e discrição</li>
              <li>Veículos em bom estado, limpos e alinhados aos critérios de excelência</li>
              <li>Compromisso com pontualidade e com a Academia LUUKSE</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="cadastro" className={`${styles.section} ${styles.alt} ${styles.formSection}`} ref={r4}>
        <div className="container">
          <div className={`${styles.formIntro} reveal`}>
            <span className="section-label">Cadastro de frota</span>
            <h2>Cadastre sua empresa.</h2>
            <p>Leva poucos minutos. Nossa equipe retorna com os próximos passos do credenciamento.</p>
          </div>

          {sent ? (
            <LeadFeedback
              status={status}
              title="Cadastro recebido."
              text="Nossa equipe vai analisar os dados da sua frota e entrar em contato com os próximos passos."
            />
          ) : (
            <form className={`${form.form} ${form.formWide}`} onSubmit={onSubmit}>
              <input name="website" className={form.hp} type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              <div className={form.formGrid}>
                <label>
                  Empresa
                  <input name="empresa" type="text" required autoComplete="organization" />
                </label>
                <label>
                  CNPJ
                  <input name="cnpj" type="text" required inputMode="numeric" placeholder="00.000.000/0000-00" />
                </label>
                <label>
                  Responsável
                  <input name="responsavel" type="text" required autoComplete="name" />
                </label>
                <label>
                  Cargo
                  <input name="cargo" type="text" autoComplete="organization-title" />
                </label>
                <label>
                  E-mail corporativo
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label>
                  Telefone / WhatsApp
                  <input name="telefone" type="tel" required autoComplete="tel" />
                </label>
                <label>
                  Cidade de atuação
                  <input name="cidade" type="text" required />
                </label>
                <label>
                  Tamanho da frota
                  <select name="frota" required defaultValue="">
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option value="1-5">1 a 5 veículos</option>
                    <option value="6-15">6 a 15 veículos</option>
                    <option value="16-50">16 a 50 veículos</option>
                    <option value="50+">Mais de 50 veículos</option>
                  </select>
                </label>
                <label className={form.full}>
                  Conte sobre sua operação
                  <textarea name="mensagem" rows={4} placeholder="Tipos de veículo, serviços, tempo de mercado…" />
                </label>
                <label className={`${form.check} ${form.full}`}>
                  <input name="aceite" type="checkbox" required />
                  <span>
                    Concordo em ser contatado pela LUUKSE sobre este cadastro. Tratamento de dados conforme a{' '}
                    <Link to="/privacidade">Política de Privacidade</Link>.
                  </span>
                </label>
              </div>
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                Enviar cadastro da frota
              </button>
              {status === 'error' && (
                <p className={form.error} role="alert">
                  Não foi possível enviar agora. Tente novamente ou escreva para contato@luukseapp.com.
                </p>
              )}
            </form>
          )}
          <p className={styles.sub}>
            Motorista autônomo? <Link to="/seja-motorista">Seja motorista LUUKSE</Link>. Hotel, restaurante ou
            outro negócio? <Link to="/seja-parceiro">Conheça as parcerias</Link>.
          </p>
        </div>
      </section>
    </main>
  )
}
