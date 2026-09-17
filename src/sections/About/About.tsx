import './About.css'

const principles = [
  ['Contato direto', 'Você conversa com quem entende a operação e conduz a solução.'],
  ['Clareza e transparência', 'Prioridades, decisões e limites ficam explícitos. Se um caminho for inviável ou precisar mudar, isso é conversado.'],
  ['Tecnologia adequada', 'A escolha parte da necessidade e considera o que já funciona. Complexidade só entra quando tem motivo.'],
]

function About() {
  return (
    <section className="about" id="sobre">
      <div className="about__container">
        <div className="about__content" data-reveal="left">
          <span className="about__eyebrow">Sobre a Soluverx</span>
          <h2>Tecnologia com responsabilidade e contato direto.</h2>
          <p>A Soluverx entende problemas reais de empresas e cria e implanta soluções adequadas à operação. Quando a continuidade é contratada, segue responsável pela tecnologia conforme o escopo acordado.</p>
          <div className="about__principles">
            {principles.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
        <figure className="about__founder" data-reveal="right">
          <img src="/about/eric-rodrigues.webp" alt="Eric Rodrigues Campos, responsável pela Soluverx" width="900" height="1125" loading="lazy" decoding="async" />
          <figcaption><span>Responsável pela Soluverx</span><strong>Eric Rodrigues Campos</strong><span>Engenharia de Software</span></figcaption>
        </figure>
      </div>
    </section>
  )
}

export default About
