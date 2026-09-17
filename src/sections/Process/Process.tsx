import './Process.css'

const steps = [
  ['Entender e avaliar', 'Conhecemos o problema, a rotina e as ferramentas atuais. Analisamos as causas, a viabilidade técnica e o benefício esperado antes de recomendar tecnologia.'],
  ['Definir o primeiro escopo', 'Escolhemos o caminho adequado e a menor entrega útil. A proposta esclarece prioridades, limites, responsabilidades e condições; a implantação começa após o acordo.'],
  ['Implantar progressivamente', 'Construímos, configuramos ou conectamos o necessário por etapas. Validamos o primeiro recorte com quem vai usar, antes de ampliar a solução.'],
  ['Colocar valor em uso', 'Orientamos o uso e verificamos como a primeira entrega funciona na rotina. O aprendizado ajuda a decidir ajustes e próximos passos, conforme o escopo.'],
  ['Continuar quando contratado', 'A relação pode seguir na operação tecnológica, no suporte, na manutenção ou na evolução. Cada responsabilidade depende da solução e da contratação.'],
]

function Process() {
  return (
    <section className="process" id="processo">
      <div className="process__container">
        <header className="process__header" data-reveal="up">
          <span className="process__eyebrow">Como trabalhamos</span>
          <h2>Do entendimento à primeira entrega útil. E ao que vem depois.</h2>
          <p>O caminho é definido com clareza antes de implantar. Começar por um escopo menor permite colocar valor em uso e decidir os próximos passos com base na operação real.</p>
        </header>
        <ol className="process__steps" data-reveal-stagger>
          {steps.map(([title, text], index) => <li key={title}><span className="process__number" aria-hidden="true">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}
        </ol>
        <a className="process__link" href="#continuidade">Entenda a continuidade tecnológica <span aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}

export default Process
