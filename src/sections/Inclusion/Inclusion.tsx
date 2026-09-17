import './Inclusion.css'

const paths = [
  ['Simplificar a rotina', 'Retirar etapas desnecessárias ou organizar melhor o processo pode ser suficiente.'],
  ['Aproveitar uma ferramenta pronta', 'Se uma solução existente atende bem, não há motivo para construir tudo de novo.'],
  ['Conectar ou automatizar uma parte', 'Integrar ferramentas ou automatizar uma etapa pode resolver o atrito principal.'],
  ['Construir uma solução própria', 'Software sob medida entra quando regras e necessidades específicas justificam esse caminho.'],
]

function Inclusion() {
  return (
    <section className="inclusion" id="possibilidades">
      <div className="inclusion__container">
        <header className="inclusion__content" data-reveal="left">
          <span className="inclusion__eyebrow">Escolher o caminho certo</span>
          <h2>Uma necessidade real. Mais de um caminho possível.</h2>
          <p>Antes de propor um sistema novo, avaliamos o processo, o que já existe, as limitações técnicas e o benefício esperado. A escolha deve ser proporcional ao problema.</p>
          <p className="inclusion__note">Seu problema não precisa ser gigante. O primeiro escopo pode ser menor, desde que coloque algo relevante em uso.</p>
        </header>
        <div className="inclusion__paths" data-reveal-stagger>
          {paths.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          <p className="inclusion__closing">Você conta a necessidade. O caminho é avaliado com você, sem precisar escolher uma tecnologia antes da conversa.</p>
        </div>
      </div>
    </section>
  )
}

export default Inclusion
