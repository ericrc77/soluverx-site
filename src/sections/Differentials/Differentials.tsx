import { useEffect, useRef } from 'react'
import './Differentials.css'

const principles = [
  {
    lead: 'Entender',
    rest: 'antes de escolher a tecnologia.',
    side: 'left',
  },
  {
    lead: 'Explicar',
    rest: 'antes de complicar.',
    side: 'right',
  },
  {
    lead: 'Ser claro',
    rest: 'antes de prometer.',
    side: 'left',
  },
  {
    lead: 'Aplicar',
    rest: 'só o que faz sentido.',
    side: 'right',
  },
]

const differentials = [
  {
    title: 'Contato direto',
    text: 'Você conversa com quem entende a operação e conduz a solução.',
  },
  {
    title: 'Tecnologia adequada',
    text: 'A tecnologia se adapta à necessidade — e não o contrário.',
  },
  {
    title: 'Organização',
    text: 'Escopo, prioridades, etapas e decisões ficam claros ao longo do projeto.',
  },
  {
    title: 'Transparência',
    text: 'Se algo não fizer sentido, for inviável ou precisar mudar, isso é falado com clareza.',
  },
  {
    title: 'Capacidade controlada',
    text: 'Os projetos são assumidos de forma consciente para preservar atenção e qualidade.',
  },
]

function Differentials() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const manifestoRef = useRef<HTMLDivElement | null>(null)
  const detailsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current
    const manifesto = manifestoRef.current
    const details = detailsRef.current

    if (!section || !manifesto || !details) {
      return
    }

    const principleItems = Array.from(
      manifesto.querySelectorAll<HTMLElement>('.differentials__principle'),
    )

    const detailItems = Array.from(
      details.querySelectorAll<HTMLElement>('.differentials__item'),
    )

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('differentials--visible')
            sectionObserver.disconnect()
          }
        })
      },
      {
        threshold: 0.12,
      },
    )

    const principleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('differentials__principle--visible')
            principleObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.42,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    const detailObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const aIndex = detailItems.indexOf(a.target as HTMLElement)
            const bIndex = detailItems.indexOf(b.target as HTMLElement)
            return aIndex - bIndex
          })

        visibleEntries.forEach((entry, index) => {
          const element = entry.target as HTMLElement
          element.style.setProperty('--detail-delay', `${index * 90}ms`)
          element.classList.add('differentials__item--visible')
          detailObserver.unobserve(entry.target)
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -5% 0px',
      },
    )

    sectionObserver.observe(section)
    principleItems.forEach((item) => principleObserver.observe(item))
    detailItems.forEach((item) => detailObserver.observe(item))

    return () => {
      sectionObserver.disconnect()
      principleObserver.disconnect()
      detailObserver.disconnect()
    }
  }, [])

  return (
    <section
      className="differentials"
      id="diferenciais"
      ref={sectionRef}
    >
      <div className="differentials__container">
        <header className="differentials__header">
          <span className="differentials__eyebrow">
            Nosso jeito de trabalhar
          </span>

          <h2 className="differentials__title">
            Tecnologia com propósito. Clareza em cada etapa.
          </h2>

          <p className="differentials__intro">
            Um bom projeto começa por entender a operação. As decisões sobre
            tecnologia, implantação e uso precisam fazer sentido para o problema,
            com prioridades e expectativas claras em cada etapa.
          </p>
        </header>

        <div
          className="differentials__manifesto"
          role="group"
          aria-label="Princípios de trabalho"
          ref={manifestoRef}
        >
          <div className="differentials__manifesto-line" aria-hidden="true">
            <span />
          </div>

          {principles.map((principle, index) => (
            <div
              className={`differentials__principle differentials__principle--${principle.side}`}
              key={principle.lead}
            >
              <span className="differentials__principle-index">
                0{index + 1}
              </span>

              <span className="differentials__principle-node" aria-hidden="true">
                <span />
              </span>

              <span className="differentials__principle-connector" aria-hidden="true" />

              <p>
                <strong>{principle.lead}</strong>
                <span>{principle.rest}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="differentials__details" ref={detailsRef}>
          <div className="differentials__details-heading">
            <span>Na prática, isso significa</span>
          </div>

          <div className="differentials__details-grid">
            {differentials.map((item) => (
              <article className="differentials__item" key={item.title}>
                <span className="differentials__item-dot" aria-hidden="true" />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className="differentials__mobile-summary"
          aria-label="Resumo dos diferenciais da Soluverx"
        >
          {differentials.slice(0, 4).map((item) => (
            <article className="differentials__mobile-item" key={item.title}>
              <span className="differentials__item-dot" aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Differentials
