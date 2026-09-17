import { trackEvent } from '../../utils/analytics'
import './Hero.css'

const journey = [
  ['Problema da operação', 'Informações dispersas, repetição ou processos difíceis de acompanhar.'],
  ['Entendimento e análise', 'Conhecer a rotina, as ferramentas e as possibilidades reais.'],
  ['Caminho adequado', 'Definir a menor solução útil e um primeiro escopo viável.'],
  ['Valor em uso', 'Implantar por etapas, validar na rotina e continuar quando contratado.'],
]

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">Tecnologia a partir do problema</span>
          <h1 className="hero__title">Tem algo no seu negócio dando mais trabalho do que deveria?</h1>
          <p className="hero__lead">A Soluverx entende sua operação antes de escolher a tecnologia.</p>
          <p className="hero__text">Você não precisa saber qual sistema ou ferramenta precisa. Primeiro analisamos o contexto e a viabilidade para definir um caminho adequado e uma primeira entrega útil.</p>
          <div className="hero__actions">
            <a href="#contato" className="hero__primary" onClick={() => trackEvent('primary_cta_click', { location: 'home_hero' })}>
              Conte o que está acontecendo <span aria-hidden="true">→</span>
            </a>
            <a href="#processo" className="hero__secondary">Como trabalhamos</a>
          </div>
        </div>
        <div className="hero__visual" aria-label="Do problema ao valor em uso">
          <span className="hero__visual-label">Um caminho definido com você</span>
          <ol className="hero__journey">
            {journey.map(([title, text]) => <li key={title}><span className="hero__node" aria-hidden="true" /><div><h2>{title}</h2><p>{text}</p></div></li>)}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Hero
