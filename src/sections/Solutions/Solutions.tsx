import { useState, type KeyboardEvent, type ReactNode } from 'react'
import './Solutions.css'

type SolutionId =
  | 'custom'
  | 'dashboard'
  | 'automation'
  | 'integration'
  | 'internal'
  | 'mvp'

type Solution = {
  id: SolutionId
  title: string
  description: string
  when: string
  outcome: string
  icon: ReactNode
  href?: string
  linkLabel?: string
}

const solutions: Solution[] = [
  {
    id: 'custom',
    title: 'Software sob medida',
    description:
      'Quando sua operação precisa de uma ferramenta própria, criada em torno do jeito que o negócio realmente funciona.',
    when:
      'O processo é específico demais para ferramentas genéricas, exige adaptações constantes ou acabou virando uma mistura de planilhas, mensagens e controles paralelos.',
    outcome:
      'Uma ferramenta construída em torno do fluxo real da operação, com apenas o que faz sentido para aquele contexto.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 5.5h16v13H4z" />
        <path d="M4 9h16" />
        <path d="M8 13h3M8 16h6" />
      </svg>
    ),
    href: '/desenvolvimento-de-software',
    linkLabel: 'Saiba mais sobre software sob medida',
  },
  {
    id: 'dashboard',
    title: 'Dashboards empresariais',
    description:
      'Quando os dados existem, mas você precisa enxergar tudo com mais clareza em um só lugar.',
    when:
      'As informações estão em relatórios, planilhas ou sistemas diferentes e alguém precisa juntar tudo para entender o que está acontecendo.',
    outcome:
      'Uma visão centralizada dos indicadores mais importantes, organizada para facilitar acompanhamento e tomada de decisão.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 19V9M12 19V5M19 19v-7" />
        <path d="M3.5 19.5h17" />
      </svg>
    ),
    href: '/dashboards',
    linkLabel: 'Saiba mais sobre dashboards empresariais',
  },
  {
    id: 'automation',
    title: 'Automação de processos',
    description:
      'Quando tarefas repetitivas poderiam acontecer com menos trabalho manual.',
    when:
      'Alguém precisa repetir todos os dias uma sequência de ações previsíveis, copiar informações, conferir dados ou executar tarefas que seguem sempre a mesma lógica.',
    outcome:
      'Parte desse trabalho pode passar a acontecer automaticamente, reduzindo etapas manuais e liberando tempo para atividades mais importantes.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3" />
        <circle cx="12" cy="12" r="4.2" />
        <path d="M6 6l2.1 2.1M15.9 15.9 18 18M18 6l-2.1 2.1M8.1 15.9 6 18" />
      </svg>
    ),
    href: '/automacao-de-processos',
    linkLabel: 'Saiba mais sobre automação de processos',
  },
  {
    id: 'integration',
    title: 'Integração de sistemas',
    description:
      'Quando duas ferramentas precisam trocar informações sem depender de copiar e colar.',
    when:
      'Os dados já existem, mas ficam presos em sistemas diferentes e alguém precisa transferir, conferir ou atualizar essas informações manualmente.',
    outcome:
      'As ferramentas podem trocar dados entre si de forma mais organizada, reduzindo retrabalho e diminuindo a dependência de processos manuais.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.5 7.5h-3v9h3M16.5 7.5h3v9h-3" />
        <path d="M8.5 9.2 11.3 12 8.5 14.8M15.5 9.2 12.7 12l2.8 2.8" />
      </svg>
    ),
    href: '/integracao-de-sistemas',
    linkLabel: 'Saiba mais sobre integração de sistemas',
  },
  {
    id: 'internal',
    title: 'Ferramentas internas',
    description:
      'Quando a equipe precisa de um jeito mais simples de organizar processos, consultas ou controles.',
    when:
      'Uma rotina interna depende de controles improvisados, formulários espalhados, consultas demoradas ou informações que só algumas pessoas sabem encontrar.',
    outcome:
      'Uma ferramenta focada naquela rotina específica pode centralizar o processo e tornar o trabalho mais simples para quem usa todos os dias.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 5h14v14H5z" />
        <path d="M8 9h8M8 12h5M8 15h7" />
      </svg>
    ),
  },
  {
    id: 'mvp',
    title: 'MVPs',
    description:
      'Quando existe uma ideia e você quer validar uma primeira versão antes de investir em algo maior.',
    when:
      'Existe uma ideia de produto, serviço ou ferramenta, mas ainda não faz sentido começar construindo uma solução completa sem antes testar a proposta.',
    outcome:
      'Uma primeira versão funcional pode concentrar o essencial para validar a ideia, aprender com o uso e decidir os próximos passos com mais informação.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 5.5 7.5v9L12 20l6.5-3.5v-9z" />
        <path d="m5.5 7.5 6.5 3.6 6.5-3.6M12 11.1V20" />
      </svg>
    ),
  },
]

function Solutions() {
  const [openId, setOpenId] = useState<SolutionId | null>(null)
  const [mobileId, setMobileId] = useState<SolutionId>('custom')
  const [showMoreMobile, setShowMoreMobile] = useState(false)

  function toggleSolution(id: SolutionId) {
    setOpenId((current) => (current === id ? null : id))
  }

  function selectMobileTab(id: SolutionId) {
    setMobileId(id)
  }

  function handleMobileTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) {
    const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End']

    if (!keys.includes(event.key)) return

    event.preventDefault()

    let nextIndex = currentIndex

    if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + primaryMobileSolutions.length) % primaryMobileSolutions.length
    } else if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % primaryMobileSolutions.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = primaryMobileSolutions.length - 1
    }

    const nextSolution = primaryMobileSolutions[nextIndex]

    if (!nextSolution) return

    selectMobileTab(nextSolution.id)
    document.getElementById(`solution-tab-${nextSolution.id}`)?.focus()
  }

  const mobileSolution = solutions.find((solution) => solution.id === mobileId) ?? solutions[0]
  const primaryMobileSolutions = solutions.slice(0, 3)
  const extraMobileSolutions = solutions.slice(3)
  const hasPrimaryMobileSelection = primaryMobileSolutions.some(
    (solution) => solution.id === mobileId,
  )

  return (
    <section className="solutions" id="solucoes">
      <div className="solutions__container">
        <div className="solutions__header" data-reveal="up">
          <div className="solutions__heading">
            <span className="solutions__eyebrow">
              Soluções que se adaptam ao problema
            </span>

            <h2 className="solutions__title">
              A solução certa depende do que está dando trabalho hoje.
            </h2>
          </div>

          <p className="solutions__intro">
            Avaliamos o que já funciona e o que precisa mudar. Software sob medida,
            sistemas web, dashboards, automações, integrações, ferramentas internas,
            MVPs e IA são caminhos possíveis, conforme o problema e a viabilidade.
          </p>
        </div>

        <div className="solutions__mobile">
          <div className="solutions__mobile-tabs" role="tablist" aria-label="Tipos de solução">
            {primaryMobileSolutions.map((solution, index) => (
              <button
                key={solution.id}
                id={`solution-tab-${solution.id}`}
                type="button"
                role="tab"
                aria-selected={mobileId === solution.id}
                aria-controls="solution-mobile-panel"
                tabIndex={
                  mobileId === solution.id || (!hasPrimaryMobileSelection && index === 0)
                    ? 0
                    : -1
                }
                className={mobileId === solution.id ? 'is-active' : ''}
                onClick={() => selectMobileTab(solution.id)}
                onKeyDown={(event) => handleMobileTabKeyDown(event, index)}
              >
                {solution.title.replace('Software sob medida', 'Sob medida')}
              </button>
            ))}
          </div>

          <article
            className="solutions__mobile-card"
            id="solution-mobile-panel"
            role="tabpanel"
            aria-labelledby={
              hasPrimaryMobileSelection
                ? `solution-tab-${mobileId}`
                : 'solution-mobile-title'
            }
            tabIndex={0}
          >
            <span className="solutions__icon">{mobileSolution.icon}</span>
            <span className="solutions__mobile-kicker">Pode fazer sentido quando</span>
            <h3 id="solution-mobile-title">{mobileSolution.title}</h3>
            <p>{mobileSolution.description}</p>

            <div className="solutions__mobile-example">
              <span>Na prática</span>
              <p>{mobileSolution.when}</p>
            </div>

            {mobileSolution.href && (
              <a
                className="solutions__page-link"
                href={mobileSolution.href}
              >
                {mobileSolution.linkLabel}
                <span aria-hidden="true">→</span>
              </a>
            )}
          </article>

          <button
            className="solutions__mobile-more"
            type="button"
            aria-expanded={showMoreMobile}
            onClick={() => setShowMoreMobile((current) => !current)}
          >
            {showMoreMobile ? 'Ocultar outras possibilidades' : 'Ver outras possibilidades'}
            <span aria-hidden="true">{showMoreMobile ? '−' : '+'}</span>
          </button>

          {showMoreMobile && (
            <div className="solutions__mobile-extra">
              {extraMobileSolutions.map((solution) => (
                <button
                  key={solution.id}
                  type="button"
                  onClick={() => {
                    setMobileId(solution.id)
                    setShowMoreMobile(false)
                    requestAnimationFrame(() => {
                      document.getElementById('solution-mobile-panel')?.focus()
                    })
                  }}
                >
                  <span className="solutions__icon">{solution.icon}</span>
                  <span>{solution.title}</span>
                  <span aria-hidden="true">→</span>
                </button>
              ))}
            </div>
          )}

          <p className="solutions__mobile-note">
            Você não precisa escolher uma dessas opções antes de falar com a gente.
          </p>
        </div>

        <div className="solutions__grid" data-reveal-stagger>
          {solutions.map((solution) => {
            const isOpen = openId === solution.id
            const panelId = `solution-panel-${solution.id}`
            const buttonId = `solution-button-${solution.id}`
            const titleId = `solution-title-${solution.id}`

            return (
              <article
                className={`solutions__card${isOpen ? ' solutions__card--open' : ''}`}
                key={solution.id}
                aria-labelledby={titleId}
              >
                <button
                  className="solutions__trigger"
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleSolution(solution.id)}
                >
                  <span className="solutions__card-top">
                    <span className="solutions__icon">{solution.icon}</span>
                    <span className="solutions__toggle" aria-hidden="true">
                      <span />
                      <span />
                    </span>
                  </span>

                  <span className="solutions__card-copy">
                    <strong id={titleId} role="heading" aria-level={3}>
                      {solution.title}
                    </strong>
                    <span>{solution.description}</span>
                  </span>

                  <span className="solutions__hint">
                    {isOpen ? 'Fechar exemplo' : 'Ver quando isso faz sentido'}
                  </span>
                </button>

                <div
                  className="solutions__details"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  <div className="solutions__detail">
                    <span className="solutions__detail-label">Quando isso acontece</span>
                    <p>{solution.when}</p>
                  </div>

                  <div className="solutions__connector" aria-hidden="true">
                    <span />
                    <svg viewBox="0 0 28 12">
                      <path d="M1 6h24M20 1l5 5-5 5" />
                    </svg>
                  </div>

                  <div className="solutions__detail solutions__detail--outcome">
                    <span className="solutions__detail-label">O que pode fazer sentido</span>
                    <p>{solution.outcome}</p>
                  </div>

                  {solution.href && (
                    <a
                      className="solutions__page-link"
                      href={solution.href}
                    >
                      {solution.linkLabel}
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>

        <div className="solutions__closing" data-reveal="up" data-reveal-delay="1">
          <span className="solutions__closing-mark" aria-hidden="true">?</span>
          <p>
            <strong>Você não precisa saber qual dessas soluções precisa antes de falar com a gente.</strong>{' '}
            Conte o que está acontecendo e começamos pelo problema.
          </p>
          <a href="#contato">Conte o que está dando trabalho</a>
        </div>
      </div>
    </section>
  )
}

export default Solutions
