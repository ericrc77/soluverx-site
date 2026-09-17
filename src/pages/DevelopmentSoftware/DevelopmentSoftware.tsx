import type { ReactNode } from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import { closeOtherDetails } from '../../components/ExclusiveDetails/ExclusiveDetails'
import { usePageMeta } from '../../components/PageMeta/PageMeta'
import { developmentSoftwareMetadata } from '../../config/serviceMetadata'
import './DevelopmentSoftware.css'

const fitSignals = [
  {
    title: 'Regras específicas fazem parte da operação',
    text: 'A ferramenta atual exige adaptações constantes porque não acompanha etapas, aprovações ou exceções importantes do negócio.',
  },
  {
    title: 'Controles paralelos viraram rotina',
    text: 'Planilhas, mensagens e anotações são usadas para completar o que o sistema não consegue controlar sozinho.',
  },
  {
    title: 'O mesmo trabalho precisa ser refeito',
    text: 'Informações são copiadas, conferidas ou lançadas mais de uma vez para manter diferentes ferramentas atualizadas.',
  },
  {
    title: 'As informações estão espalhadas',
    text: 'A equipe precisa procurar dados em sistemas, arquivos e conversas antes de conseguir entender o que está acontecendo.',
  },
  {
    title: 'O crescimento tornou o processo difícil de controlar',
    text: 'O que funcionava em uma operação menor perdeu clareza, e as ferramentas atuais já não acompanham novas necessidades.',
  },
]

const operationModules = [
  { label: 'Dashboard', icon: 'dashboard' },
  { label: 'Clientes', icon: 'clients' },
  { label: 'Pedidos', icon: 'orders', active: true },
  { label: 'Financeiro', icon: 'finance' },
  { label: 'Automações', icon: 'automation' },
  { label: 'Integrações', icon: 'integration' },
]

function OperationModuleIcon({ type }: { type: string }) {
  const paths: Record<string, ReactNode> = {
    application: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1.2" />
        <rect x="14" y="4" width="6" height="6" rx="1.2" />
        <rect x="4" y="14" width="6" height="6" rx="1.2" />
        <rect x="14" y="14" width="6" height="6" rx="1.2" />
      </>
    ),
    dashboard: <path d="M4 12h6V4H4v8Zm10 8h6v-8h-6v8ZM4 20h6v-4H4v4Zm10-12h6V4h-6v4Z" />,
    clients: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.4-3.7 2.2-5.6 5.5-5.6s5.1 1.9 5.5 5.6M16 6.5a3 3 0 0 1 0 5.8M16.5 14.2c2.5.4 3.8 2 4 4.8" />
      </>
    ),
    orders: (
      <>
        <path d="M5 5h14v15H5zM8 2v6M16 2v6M8 12h8M8 16h5" />
      </>
    ),
    finance: (
      <>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M16 15h2" />
      </>
    ),
    automation: (
      <>
        <path d="M7 7h7a3 3 0 0 1 3 3v1M17 7l-3-3M17 7l-3 3M17 17h-7a3 3 0 0 1-3-3v-1M7 17l3 3M7 17l3-3" />
      </>
    ),
    integration: (
      <>
        <path d="M8 12h8M5 8l-4 4 4 4M19 8l4 4-4 4" />
      </>
    ),
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

const solutionTypes = [
  {
    label: 'Sistemas internos',
    text: 'Ferramentas para organizar processos, cadastros, solicitações, aprovações e rotinas específicas da empresa.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 9v11" />
      </svg>
    ),
  },
  {
    label: 'Portais e áreas restritas',
    text: 'Ambientes para clientes, fornecedores, parceiros ou equipes acessarem informações e realizarem tarefas.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    label: 'Ferramentas operacionais',
    text: 'Aplicações para facilitar atividades que hoje dependem de controles manuais, improvisos ou etapas difíceis de acompanhar.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 0 5.4-5.4l-2.2 2.2-3-3 2.2-2.2Z" />
      </svg>
    ),
  },
  {
    label: 'Dashboards e acompanhamento',
    text: 'Quando os dados existem, mas falta uma visão clara do que está acontecendo na operação.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V10M10 19V5M16 19v-7M22 19H2" />
      </svg>
    ),
  },
  {
    label: 'Automações',
    text: 'Quando tarefas repetitivas podem acontecer com menos intervenção manual e menos dependência de lembretes.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7h11M4 17h16M15 7l3-3M15 7l3 3M9 17l-3-3M9 17l-3 3" />
      </svg>
    ),
  },
  {
    label: 'Integrações',
    text: 'Quando sistemas diferentes precisam compartilhar informações sem depender de cópia, redigitação ou conferência manual.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 12h8M5 8l-4 4 4 4M19 8l4 4-4 4" />
      </svg>
    ),
  },
]

const decisionPaths = [
  {
    number: '01',
    title: 'Ferramenta pronta',
    signals: [
      'O processo é comum.',
      'Uma solução existente já atende bem.',
      'Avaliar custo total e adequação à rotina.',
    ],
  },
  {
    number: '02',
    title: 'Integração ou automação',
    signals: [
      'As ferramentas atuais funcionam, mas não conversam bem.',
      'Existe retrabalho entre sistemas.',
      'Automatizar uma etapa resolve o problema.',
    ],
  },
  {
    number: '03',
    title: 'Software sob medida',
    signals: [
      'Existem regras, fluxos ou necessidades específicas.',
      'Ferramentas prontas exigem adaptações constantes.',
      'A operação precisa de uma solução própria.',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    phase: 'Entendimento',
    title: 'Entender o cenário atual',
    text: 'Como o processo funciona hoje, quem participa e onde estão as principais dificuldades.',
  },
  {
    number: '02',
    phase: 'Diagnóstico',
    title: 'Identificar o problema principal',
    text: 'Separar sintomas das causas e avaliar viabilidade, ferramentas existentes e benefício esperado.',
  },
  {
    number: '03',
    phase: 'Primeiro escopo',
    title: 'Definir uma primeira solução',
    text: 'Definir a menor entrega útil e o que fica para depois. Escopo, responsabilidades e condições são acordados na proposta antes de iniciar.',
  },
  {
    number: '04',
    phase: 'Implantação progressiva',
    title: 'Desenvolver, implantar e validar',
    text: 'Construir por etapas e colocar o primeiro recorte em uso, com validações de quem participa da operação antes de ampliar.',
  },
  {
    number: '05',
    phase: 'Evolução',
    title: 'Colocar em uso e avaliar próximos passos',
    text: 'Orientar o uso da solução e avaliar novas necessidades. Suporte, manutenção e evolução fazem parte da continuidade quando contratados.',
  },
]

const principles = [
  {
    title: 'O problema vem antes da tecnologia',
    text: 'A decisão técnica deve servir ao negócio, não obrigar o negócio a se adaptar à tecnologia escolhida.',
  },
  {
    title: 'O escopo precisa fazer sentido',
    text: 'Evitar funcionalidades que aumentam custo e complexidade sem resolver uma necessidade concreta.',
  },
  {
    title: 'Contato direto durante o projeto',
    text: 'Menos camadas entre quem vive o problema e quem está construindo a solução.',
  },
  {
    title: 'Pensar no uso real',
    text: 'Uma solução só entrega valor se funcionar dentro da rotina de quem realmente vai utilizá-la.',
  },
]

const faqs = [
  {
    question: 'Preciso saber exatamente qual sistema quero?',
    answer:
      'Não. O ponto de partida pode ser simplesmente um processo, uma dificuldade ou uma rotina que está dando mais trabalho do que deveria.',
  },
  {
    question: 'Software sob medida é sempre caro?',
    answer:
      'O custo depende do problema, do escopo e da complexidade. Uma solução personalizada não precisa necessariamente começar como um sistema grande; o projeto pode ser dividido em etapas.',
  },
  {
    question: 'Quanto tempo demora para desenvolver?',
    answer:
      'Depende do tamanho da solução, das regras envolvidas e de possíveis integrações. Uma estimativa responsável só faz sentido depois de entender o problema e definir um primeiro escopo.',
  },
  {
    question: 'Posso começar com uma versão menor?',
    answer:
      'Sim. Em muitos casos, começar por uma parte menor ajuda a validar a solução, aprender com o uso real e decidir as próximas evoluções com mais informação.',
  },
  {
    question: 'É possível integrar com sistemas que minha empresa já usa?',
    answer:
      'Em muitos casos, sim, desde que os sistemas envolvidos ofereçam uma forma adequada de integração. Essa viabilidade precisa ser analisada individualmente.',
  },
  {
    question: 'Vocês recomendam uma ferramenta pronta se ela resolver melhor?',
    answer:
      'Sim. Se uma ferramenta pronta atender bem ao processo, ao orçamento e à necessidade da empresa, essa tende a ser a recomendação. Software sob medida só faz sentido quando as alternativas existentes não resolvem o problema de forma adequada.',
  },
]

function DevelopmentSoftware() {
  usePageMeta(developmentSoftwareMetadata)

  return (
    <>
      <ScrollReveal />
      <Header />

      <main className="dev-page">
        <section className="dev-hero" id="inicio">
          <div className="dev-container dev-hero__layout">
            <div className="dev-hero__content">
              <span className="dev-eyebrow">Desenvolvimento de software sob medida</span>

              <h1>
                Software sob medida para a forma como o seu negócio funciona.
              </h1>

              <p className="dev-hero__lead">
                Quando ferramentas prontas não acompanham a operação, a Soluverx
                entende o problema e desenvolve uma solução organizada conforme
                as necessidades reais do negócio.
              </p>

              <div className="dev-hero__actions">
                <a className="dev-button dev-button--primary" href="/#contato">
                  Conte o que está dando trabalho
                  <span aria-hidden="true">→</span>
                </a>

                <a className="dev-button dev-button--secondary" href="#quando-faz-sentido">
                  Entenda quando faz sentido
                </a>
              </div>
            </div>

            <div
              className="dev-hero__visual"
              role="img"
              aria-label="Exemplo de um sistema sob medida com módulos de clientes, pedidos, financeiro, automações e integrações organizados conforme a operação"
            >
              <div className="dev-operation" aria-hidden="true">
                <div className="dev-operation__topbar">
                  <div className="dev-operation__brand">
                    <span className="dev-operation__brand-mark">
                      <OperationModuleIcon type="application" />
                    </span>
                    <div>
                      <strong>Sistema da operação</strong>
                      <small>Solução sob medida</small>
                    </div>
                  </div>

                  <span className="dev-operation__tailored">
                    Exemplo ilustrativo · módulos conforme a operação
                  </span>
                </div>

                <div className="dev-operation__body">
                  <nav className="dev-operation__sidebar">
                    {operationModules.map((module) => (
                      <span
                        className={`dev-operation__module${module.active ? ' dev-operation__module--active' : ''}`}
                        key={module.label}
                      >
                        <span className="dev-operation__module-icon">
                          <OperationModuleIcon type={module.icon} />
                        </span>
                        <span>{module.label}</span>
                      </span>
                    ))}
                  </nav>

                  <div className="dev-operation__workspace">
                    <div className="dev-operation__workspace-head">
                      <div>
                        <span>Pedidos</span>
                        <strong>Visão da operação</strong>
                      </div>
                      <span className="dev-operation__live">
                        <span /> Atualizado
                      </span>
                    </div>

                    <div className="dev-operation__summary">
                      <div className="dev-operation__summary-item">
                        <span>Em andamento</span>
                        <strong>Fluxo em andamento</strong>
                      </div>
                      <div className="dev-operation__summary-item dev-operation__summary-item--attention">
                        <span>Aguardando decisão</span>
                        <strong>Revisão necessária</strong>
                      </div>
                    </div>

                    <div className="dev-operation__lower">
                      <div className="dev-operation__flow">
                        <span className="dev-operation__panel-label">Fluxo configurado</span>

                        <div className="dev-operation__flow-step dev-operation__flow-step--complete">
                          <span className="dev-operation__flow-dot">✓</span>
                          <span>Pedido aprovado</span>
                        </div>
                        <span className="dev-operation__flow-line" />
                        <div className="dev-operation__flow-step dev-operation__flow-step--complete">
                          <span className="dev-operation__flow-dot">✓</span>
                          <span>Financeiro atualizado</span>
                        </div>
                        <span className="dev-operation__flow-line" />
                        <div className="dev-operation__flow-step dev-operation__flow-step--active">
                          <span className="dev-operation__flow-dot" />
                          <span>Cliente notificado</span>
                        </div>
                      </div>

                      <div className="dev-operation__connections">
                        <span className="dev-operation__panel-label">Recursos conectados</span>

                        <div>
                          <span className="dev-operation__connection-icon">A</span>
                          <p><strong>Automação ativa</strong><small>acompanha o fluxo</small></p>
                          <span className="dev-operation__connection-status" />
                        </div>
                        <div>
                          <span className="dev-operation__connection-icon">ERP</span>
                          <p><strong>ERP conectado</strong><small>dados sincronizados</small></p>
                          <span className="dev-operation__connection-status" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dev-section dev-section--fit" id="quando-faz-sentido">
          <div className="dev-container">
            <div className="dev-fit-layout">
              <div className="dev-fit-intro" data-reveal="left">
                <span className="dev-eyebrow">Quando faz sentido</span>
                <h2>Alguns sinais aparecem antes de a ferramenta virar um limite.</h2>
                <p>
                  Software sob medida pode fazer sentido quando a operação passa
                  a depender de adaptações para continuar funcionando — não apenas
                  porque uma solução personalizada parece mais completa.
                </p>

                <div className="dev-fit-intro__note">
                  <span aria-hidden="true">→</span>
                  <p>
                    O ponto de partida é entender se o problema está na ferramenta,
                    no processo ou na conexão entre os dois.
                  </p>
                </div>
              </div>

              <div className="dev-fit-signals" data-reveal-stagger>
                {fitSignals.map((signal, index) => (
                  <article className="dev-fit-signal" key={signal.title}>
                    <span className="dev-fit-signal__number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3>{signal.title}</h3>
                      <p>{signal.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="dev-section dev-section--types" id="solucoes">
          <div className="dev-container">
            <div className="dev-heading dev-heading--split" data-reveal="up">
              <div>
                <span className="dev-eyebrow">O que podemos desenvolver</span>
                <h2>Uma solução sob medida pode assumir formas diferentes.</h2>
              </div>

              <p>
                O objetivo não é construir “um sistema” só porque parece moderno.
                A forma da solução depende do problema que precisa ser resolvido.
              </p>
            </div>

            <div className="dev-types-composition" data-reveal="up">
              <div className="dev-types-column">
                {solutionTypes.slice(0, 3).map((solution) => (
                  <article className="dev-type-card" key={solution.label}>
                    <span className="dev-type-card__icon">{solution.icon}</span>
                    <div>
                      <h3>{solution.label}</h3>
                      <p>{solution.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="dev-types-core" aria-hidden="true">
                <span>Uma solução</span>
                <strong>Sob medida</strong>
              </div>

              <div className="dev-types-column">
                {solutionTypes.slice(3).map((solution) => (
                  <article className="dev-type-card" key={solution.label}>
                    <span className="dev-type-card__icon">{solution.icon}</span>
                    <div>
                      <h3>{solution.label}</h3>
                      <p>{solution.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="dev-future-links" data-reveal="up">
              <span>Explore outras soluções</span>
              <div>
                <a href="/dashboards">Dashboards</a>
                <a href="/automacao-de-processos">Automação de processos</a>
                <a href="/integracao-de-sistemas">Integração de sistemas</a>
              </div>
            </div>
          </div>
        </section>

        <section className="dev-section dev-section--decision">
          <div className="dev-container">
            <div className="dev-heading dev-heading--split" data-reveal="up">
              <div>
                <span className="dev-eyebrow">Escolher o caminho certo</span>
                <h2>Ferramenta pronta, integração ou software sob medida?</h2>
              </div>

              <p>
                A resposta depende do problema. A Soluverx primeiro avalia o que
                já existe e recomenda software sob medida apenas quando esse é o
                caminho que melhor atende à operação.
              </p>
            </div>

            <div className="dev-decision" data-reveal="up">
              <div className="dev-decision__prompt">
                <span>Decisão</span>
                <strong>O que o problema realmente exige?</strong>
              </div>

              <ol className="dev-decision__paths">
                {decisionPaths.map((path) => (
                  <li className="dev-decision__path" key={path.number}>
                    <div className="dev-decision__choice">
                      <span>{path.number}</span>
                      <h3>{path.title}</h3>
                    </div>

                    <ul>
                      {path.signals.map((signal) => (
                        <li key={signal}>{signal}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>

              <div className="dev-decision__small-start">
                <span>Começar pequeno</span>
                <div>
                  <strong>A primeira versão não precisa resolver tudo.</strong>
                  <p>
                    Ela pode começar pela parte mais importante, ser validada no
                    uso real e evoluir com mais clareza.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="dev-section dev-section--process" id="processo">
          <div className="dev-container">
            <div className="dev-heading" data-reveal="up">
              <span className="dev-eyebrow">Como a Soluverx trabalha</span>
              <h2>
                Antes de desenvolver, precisamos entender o que realmente precisa
                ser resolvido.
              </h2>
            </div>

            <ol className="dev-process-list" data-reveal-stagger>
              {processSteps.map((step) => (
                <li className="dev-process-step" key={step.number}>
                  <span className="dev-process-step__number">{step.number}</span>
                  <div>
                    <span className="dev-process-step__phase">{step.phase}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="dev-process-statement" data-reveal="up">
              <span>Clareza antes de código.</span>
            </div>
          </div>
        </section>

        <section className="dev-section dev-section--principles">
          <div className="dev-container">
            <div className="dev-heading" data-reveal="up">
              <span className="dev-eyebrow">Nossa abordagem</span>
              <h2>
                Software sob medida não precisa significar complexidade
                desnecessária.
              </h2>
            </div>

            <div className="dev-principles-editorial" data-reveal-stagger>
              {principles.map((principle, index) => (
                <article
                  className={`dev-principle${index === 0 ? ' dev-principle--featured' : ''}`}
                  key={principle.title}
                >
                  <span className="dev-principle__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dev-section dev-continuity">
          <div className="dev-container dev-continuity__layout">
            <div className="dev-heading" data-reveal="left"><span className="dev-eyebrow">Software na rotina</span><h2>A primeira versão útil é o começo do uso real.</h2><p>Priorizamos um recorte da operação, orientamos o uso e validamos o funcionamento com quem trabalha no processo. Novas funcionalidades dependem das prioridades e do escopo acordado.</p></div>
            <div className="dev-continuity__content" data-reveal="right"><h3>Continuidade quando contratada</h3><p>A Soluverx pode seguir responsável pela operação tecnológica, suporte, correções, manutenção e evolução do software. Infraestrutura, hospedagem e monitoramento entram quando necessários e previstos na contratação.</p><p>Responsabilidades, limites e condições são definidos para a solução. Essas atividades não são incluídas automaticamente em todo desenvolvimento.</p></div>
          </div>
        </section>

        <section className="dev-section dev-section--faq" id="faq">
          <div className="dev-container">
            <div className="dev-faq-layout">
              <div className="dev-heading" data-reveal="up">
                <span className="dev-eyebrow">Perguntas frequentes</span>
                <h2>Dúvidas sobre software sob medida</h2>
              </div>

              <div className="dev-faq-list" data-reveal-stagger data-exclusive-details>
                {faqs.map((faq, index) => (
                  <details
                    className="dev-faq-item"
                    key={faq.question}
                    onToggle={closeOtherDetails}
                  >
                    <summary>
                      <span className="dev-faq-item__number" aria-hidden="true">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{faq.question}</span>
                      <span className="dev-faq-item__plus" aria-hidden="true">+</span>
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="dev-cta" id="contato">
          <div className="dev-container">
            <div className="dev-cta__card" data-reveal="up">
              <span className="dev-eyebrow">Vamos começar pelo problema</span>
              <h2>Existe algum processo no seu negócio que deveria funcionar melhor?</h2>
              <p>
                Conte onde as ferramentas atuais deixaram de acompanhar o
                processo. Avaliamos o contexto e a viabilidade antes de definir
                se desenvolver uma solução própria é o caminho adequado.
              </p>

              <a className="dev-button dev-button--primary" href="/#contato">
                Conversar sobre este cenário
                <span aria-hidden="true">→</span>
              </a>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default DevelopmentSoftware
