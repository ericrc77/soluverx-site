import { useEffect, useRef } from 'react'
import './About.css'

const pillars = [
  {
    number: '01',
    title: 'Adequação à operação',
    text: 'Cada projeto parte da realidade da operação para avaliar o que já funciona e o que precisa mudar.',
  },
  {
    number: '02',
    title: 'Clareza no processo',
    text: 'Decisões, limites e próximos passos são explicados ao longo do projeto.',
  },
  {
    number: '03',
    title: 'Condução próxima',
    text: 'O contato é direto no projeto e na continuidade tecnológica, quando contratada.',
  },
]

function About() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('about--visible')
          observer.disconnect()
        }
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="sobre" ref={sectionRef}>
      <div className="about__container">
        <div className="about__mobile-trust">
          <span className="about__eyebrow">Quem conduz o projeto</span>
          <h2>Você fala diretamente com quem entende a operação e conduz a solução.</h2>
          <p>
            O contato é direto para entender o problema, escolher a tecnologia
            e colocar a solução em uso. A continuidade tecnológica também pode
            fazer parte desse trabalho, quando contratada.
          </p>
        </div>
        <header className="about__header">
          <span className="about__eyebrow">Sobre a Soluverx</span>

          <h2 className="about__title">
            Soluções digitais pensadas a partir de problemas reais.
          </h2>

          <div className="about__copy">
            <p>
              A Soluverx parte de uma proposta simples: entender dificuldades
              reais de negócios e aplicar tecnologia para criar soluções
              digitais claras, úteis e adequadas à operação.
            </p>

            <p>
              O foco não é desenvolver software por desenvolver. Primeiro vêm o
              problema, o contexto e o que realmente precisa melhorar. A
              tecnologia entra quando faz sentido.
            </p>
          </div>
        </header>

        <div className="about__pillars">
          {pillars.map((pillar) => (
            <article className="about__pillar" key={pillar.number}>
              <span className="about__pillar-number">{pillar.number}</span>

              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="about__founder">
          <div className="about__founder-image-wrap">
            <img
              src="/about/eric-rodrigues.webp"
              alt="Eric Rodrigues Campos"
              className="about__founder-image"
              width="900"
              height="1125"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about__founder-copy">
            <span className="about__founder-kicker">Responsável pela Soluverx</span>

            <strong>Eric Rodrigues Campos</strong>
            <span>Engenharia de Software</span>
          </div>

          <div className="about__founder-detail" aria-hidden="true">
            <span />
          </div>
        </div>

        <div className="about__mobile-values" aria-label="Como a Soluverx trabalha">
          <span>Contato direto</span>
          <span>Tecnologia adequada</span>
          <span>Clareza no processo</span>
        </div>
      </div>
    </section>
  )
}

export default About
