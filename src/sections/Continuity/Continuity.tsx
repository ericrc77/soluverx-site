import './Continuity.css'

const responsibilities = [
  ['Operação tecnológica', 'Infraestrutura, hospedagem, acompanhamento e monitoramento podem fazer parte do escopo quando forem necessários à solução e estiverem contratados.'],
  ['Suporte e manutenção', 'Atendimento às dificuldades de uso, tratamento de falhas, correções e manutenção conforme as responsabilidades e condições acordadas.'],
  ['Evolução com contexto', 'Novas regras, fontes de dados ou necessidades podem orientar ajustes e novas entregas, com prioridades, viabilidade e escopo definidos.'],
]

function Continuity() {
  return (
    <section className="continuity" id="continuidade">
      <div className="continuity__container">
        <header className="continuity__heading" data-reveal="up">
          <span className="continuity__eyebrow">Depois da primeira entrega</span>
          <h2>A solução entra em uso. A relação pode continuar.</h2>
          <p>Quando a continuidade é contratada, a Soluverx segue responsável pela tecnologia dentro do escopo acordado. O que precisa ser operado, acompanhado ou evoluído depende da solução e da realidade do negócio.</p>
        </header>
        <div className="continuity__responsibilities" data-reveal-stagger>
          {responsibilities.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <p className="continuity__conditions">Essas atividades não são incluídas automaticamente em todo projeto. Responsabilidades, limites e condições são definidos na contratação.</p>
        <a className="continuity__link" href="#contato">Conversar sobre a necessidade da sua operação <span aria-hidden="true">→</span></a>
      </div>
    </section>
  )
}

export default Continuity
