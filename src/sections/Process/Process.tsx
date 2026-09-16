import { useEffect, useRef } from 'react'
import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Entendemos problema e operação',
    text: 'Você conta o que está dando trabalho e como a operação funciona hoje. Não precisa chegar com uma tecnologia escolhida ou um escopo pronto.',
  },
  {
    number: '02',
    title: 'Analisamos as dificuldades',
    text: 'O diagnóstico busca identificar o que gera retrabalho, atraso ou falta de clareza, considerando os processos e as ferramentas que você já usa.',
  },
  {
    number: '03',
    title: 'Definimos solução e primeiro escopo',
    text: 'Avaliamos o caminho adequado e organizamos uma proposta com prioridades, limites e um primeiro escopo. Nem todo problema exige software novo.',
  },
  {
    number: '04',
    title: 'Implantamos e validamos por etapas',
    text: 'A solução é construída ou configurada e implantada progressivamente, com validações para manter o trabalho próximo da realidade da operação.',
  },
  {
    number: '05',
    title: 'Colocamos valor em uso',
    text: 'Orientamos o uso da solução e verificamos, na prática, como ela ajuda a melhorar o processo que motivou o projeto.',
  },
  {
    number: '06',
    title: 'Continuidade quando contratada',
    text: 'Quando a continuidade é contratada, a Soluverx acompanha a tecnologia em uso e assume o suporte, a manutenção ou a evolução previstos no escopo e nas condições acordadas.',
  },
]


const mobileSteps = [
  {
    number: '01',
    title: 'Entendemos e analisamos',
    text: 'Você conta o problema e como a operação funciona. Analisamos as dificuldades antes de escolher a tecnologia.',
  },
  {
    number: '02',
    title: 'Definimos e implantamos por etapas',
    text: 'Organizamos a solução e o primeiro escopo, com implantação progressiva e validações na operação.',
  },
  {
    number: '03',
    title: 'Valor em uso e continuidade',
    text: 'Orientamos o uso e verificamos a melhoria na prática. Quando contratada, a Soluverx acompanha a tecnologia conforme o escopo de suporte, manutenção ou evolução acordado.',
  },
]

function Process() {
  const journeyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const journey = journeyRef.current

    if (!journey) {
      return
    }

    const items = Array.from(
      journey.querySelectorAll<HTMLElement>('.process__step'),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('process__step--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.42,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="process" id="processo">
      <div className="process__container">
        <header className="process__header">
          <span className="process__eyebrow">Como trabalhamos</span>

          <h2 className="process__title">
            O que acontece quando você fala com a Soluverx?
          </h2>

          <p className="process__intro">
            Você não precisa chegar com uma solução pronta. O processo começa
            entendendo o problema e só avança quando existe clareza sobre o que
            realmente faz sentido implantar.
          </p>
        </header>

        <div className="process__mobile">
          {mobileSteps.map((step) => (
            <article className="process__mobile-step" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}

          <div className="process__mobile-closing">
            <span>Clareza antes de complexidade.</span>
            <a href="#contato">Quero conversar <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <div className="process__journey" ref={journeyRef}>
          <div className="process__axis-base" aria-hidden="true" />

          {steps.map((step, index) => (
            <article
              className={`process__step ${
                index % 2 === 0
                  ? 'process__step--left'
                  : 'process__step--right'
              }`}
              key={step.number}
            >
              <span className="process__segment" aria-hidden="true" />

              <div className="process__step-content">
                <span className="process__number">{step.number}</span>

                <div className="process__copy">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>

              <span className="process__node" aria-hidden="true">
                <span />
              </span>
            </article>
          ))}
        </div>

        <div className="process__closing">
          <span className="process__closing-kicker">
            Clareza antes de complexidade
          </span>

          <a className="process__closing-link" href="#contato">
            Quer entender se vale a pena conversar sobre isso?
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Process
