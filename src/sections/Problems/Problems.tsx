import { useRef, useState } from 'react'
import './Problems.css'

type IconProps = {
  className?: string
}

function WhatsAppOrdersIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M7 9.5A4.5 4.5 0 0 1 11.5 5h20A4.5 4.5 0 0 1 36 9.5v15a4.5 4.5 0 0 1-4.5 4.5H20l-8.5 7v-7A4.5 4.5 0 0 1 7 24.5v-15Z" />
      <path d="M15 13h13M15 18h9" />
      <circle cx="34.5" cy="33.5" r="7.5" />
      <path d="m31.5 33.5 2 2 4-4.5" />
    </svg>
  )
}

function SpreadsheetIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M10 5h22l6 6v32H10a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Z" />
      <path d="M32 5v7h7M6 18h32M6 27h32M6 36h32M17 18v25M28 18v25" />
      <path d="M12 11h10" />
    </svg>
  )
}

function RepeatedDataIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="6" y="8" width="18" height="23" rx="3" />
      <path d="M11 15h8M11 20h8M11 25h5" />
      <rect x="24" y="17" width="18" height="23" rx="3" />
      <path d="M29 24h8M29 29h8M29 34h5" />
      <path d="M20 35h-5a5 5 0 0 1-5-5M28 13h5a5 5 0 0 1 5 5" />
      <path d="m13 27-3 3 3 3M35 21l3-3-3-3" />
    </svg>
  )
}

function ManualReportIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path d="M9 6h21l7 7v17" />
      <path d="M30 6v8h8M9 6v36h20" />
      <path d="M15 31v-7M21 31V19M27 31v-4" />
      <circle cx="35" cy="35" r="8" />
      <path d="M35 31v4l3 2" />
    </svg>
  )
}

function PersonKnowledgeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="17" cy="15" r="6" />
      <path d="M6 37c1.6-7.2 5.3-10.8 11-10.8 5.4 0 9 3.2 10.8 9.5" />
      <rect x="29" y="9" width="13" height="16" rx="3" />
      <path d="M33 14h5M33 18h5" />
      <circle cx="35.5" cy="34.5" r="5.5" />
      <path d="M39.5 38.5 43 42" />
    </svg>
  )
}

function ScatteredInfoIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="5" y="7" width="13" height="11" rx="2.5" />
      <path d="M9 11h5M9 14h3" />
      <path d="M31 6h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-4l-4 3v-3h-2a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3Z" />
      <rect x="6" y="31" width="16" height="11" rx="2.5" />
      <path d="M11 31v11M16 31v11M6 36.5h16" />
      <path d="M33 31h10v10H33z" />
      <path d="M18 13h7M23 13l-2-2M23 13l-2 2M27 35h6M29 33l-2 2 2 2" />
    </svg>
  )
}

const problems = [
  {
    title: 'Pedidos se perdem no WhatsApp',
    description:
      'Pedidos, alterações e informações importantes ficam misturados entre conversas. Depois alguém precisa procurar tudo de novo — e algo pode passar batido.',
    Icon: WhatsAppOrdersIcon,
    tone: 'green',
  },
  {
    title: 'A planilha cresceu demais',
    description:
      'O que começou como um controle simples virou abas, fórmulas e informações que só algumas pessoas sabem usar.',
    Icon: SpreadsheetIcon,
    tone: 'emerald',
  },
  {
    title: 'A mesma informação é digitada várias vezes',
    description:
      'O mesmo dado precisa ser copiado, conferido ou lançado em lugares diferentes durante o processo.',
    Icon: RepeatedDataIcon,
    tone: 'cyan',
  },
  {
    title: 'Para ver um relatório, alguém precisa montar tudo',
    description:
      'Os dados existem, mas para entender o que está acontecendo é preciso juntar informações e preparar o relatório manualmente.',
    Icon: ManualReportIcon,
    tone: 'violet',
  },
  {
    title: 'A informação está na cabeça de alguém',
    description:
      'Quando só uma pessoa sabe onde encontrar ou como fazer algo, uma ausência já pode atrasar a operação.',
    Icon: PersonKnowledgeIcon,
    tone: 'sky',
  },
  {
    title: 'As informações estão espalhadas',
    description:
      'Planilhas, mensagens, arquivos e sistemas diferentes dificultam enxergar o que realmente está acontecendo.',
    Icon: ScatteredInfoIcon,
    tone: 'blue',
  },
]

function Problems() {
  const [activeProblem, setActiveProblem] = useState(0)
  const trackRef = useRef<HTMLDivElement | null>(null)

  function handleProblemScroll() {
    const track = trackRef.current
    if (!track) return

    const cards = Array.from(
      track.querySelectorAll<HTMLElement>('.problem-card'),
    )

    const trackCenter = track.scrollLeft + track.clientWidth / 2

    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2
      const distance = Math.abs(cardCenter - trackCenter)

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveProblem(closestIndex)
  }

  return (
    <section className="problems" id="problemas">
      <div className="problems__container">
        <header className="problems__header" data-reveal="up">
          <span className="problems__eyebrow">Situações do dia a dia</span>

          <h2 className="problems__title">
            Você se reconhece em alguma dessas situações?
          </h2>

          <p className="problems__intro">
            Estes são só alguns exemplos. Às vezes o problema é grande. Às
            vezes é uma tarefa repetitiva, uma informação difícil de encontrar
            ou um processo que foi ficando mais complicado com o tempo.
          </p>
        </header>

        <div className="problems__mobile-progress" aria-hidden="true">
          <span>
            {String(activeProblem + 1).padStart(2, '0')} /{' '}
            {String(problems.length).padStart(2, '0')}
          </span>
          <span>deslize para ver</span>
        </div>

        <div
          className="problems__grid"
          data-reveal-stagger
          ref={trackRef}
          onScroll={handleProblemScroll}
        >
          {problems.map(({ title, description, Icon, tone }, index) => (
            <article className="problem-card" key={title}>
              <div className="problem-card__top">
                <span className={`problem-card__icon problem-card__icon--${tone}`}>
                  <Icon />
                </span>

                <span className="problem-card__number">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="problem-card__content">
                <h3 className="problem-card__title">{title}</h3>
                <p className="problem-card__description">{description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="problems__other" data-reveal="up" data-reveal-delay="1">
          <div className="problems__other-copy">
            <span className="problems__other-kicker">E se o seu problema for outro?</span>

            <h3 className="problems__other-desktop-title">
              Não precisa caber em uma dessas caixas.
            </h3>

            <h3 className="problems__other-mobile-title">
              Algumas tarefas parecem pequenas até você perceber quantas vezes elas se repetem.
            </h3>

            <p className="problems__other-desktop-text">
              Se existe algo no seu negócio que poderia ser mais simples,
              organizado ou automático, vale a pena entender se a tecnologia
              pode ajudar.
            </p>

            <div className="problems__other-mobile-list">
              <span>Ter que lembrar de avisar alguém toda vez que algo muda</span>
              <span>Ficar perguntando se uma tarefa já foi concluída</span>
              <span>Repetir sempre a mesma sequência de passos</span>
              <span>Esperar uma resposta para conseguir continuar</span>
              <span>Fazer conferências manuais que poderiam acontecer sozinhas</span>
            </div>

            <p className="problems__other-mobile-close">
              Se isso acontece com frequência, talvez exista uma forma mais simples de fazer.
            </p>
          </div>

          <a className="problems__other-link" href="#contato">
            <span>Conversar sobre essa dificuldade</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Problems
