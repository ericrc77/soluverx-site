import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { closeOtherDetails } from '../../components/ExclusiveDetails/ExclusiveDetails'
import { usePageMeta } from '../../components/PageMeta/PageMeta'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import { dashboardsMetadata } from '../../config/serviceMetadata'
import '../SolutionPages.css'
import './Dashboards.css'

const indicators = [
  ['Pedidos no prazo', 'Prazo', 'Atrasos e exceções'],
  ['Receita realizada', 'Receita', 'Meta e realizado'],
  ['Tempo médio', 'Tempo', 'Espera por etapa'],
]

const capabilities = [
  ['Indicadores e metas', 'Mostram o resultado atual junto da referência que dá contexto ao número.'],
  ['Comparações e tendências', 'Ajudam a perceber mudanças por período, unidade, equipe ou categoria.'],
  ['Filtros úteis', 'Permitem investigar o resultado sem transformar a tela em uma ferramenta difícil de usar.'],
  ['Alertas e exceções', 'Destacam o que saiu do esperado e merece atenção antes de virar um problema maior.'],
]

const faqs = [
  ['Preciso trocar os sistemas que já uso?', 'Não necessariamente. O dashboard pode consolidar dados de ferramentas existentes, desde que elas ofereçam formas viáveis e seguras de acesso às informações.'],
  ['Um dashboard atualiza em tempo real?', 'Pode atualizar em tempo real, em intervalos definidos ou sob demanda. A frequência adequada depende da origem dos dados e da velocidade com que uma decisão precisa ser tomada.'],
  ['Vocês ajudam a definir os indicadores?', 'Sim. Antes da interface, entendemos quais decisões precisam ser apoiadas, quais indicadores realmente ajudam e como cada número deve ser interpretado.'],
  ['É possível começar com uma área da empresa?', 'Sim. Começar por um recorte relevante reduz complexidade e permite validar fontes, indicadores e rotina de uso antes de ampliar a visão.'],
  ['Dashboard substitui relatórios?', 'Pode reduzir bastante relatórios manuais recorrentes, mas nem todo relatório precisa desaparecer. A escolha depende do objetivo e de quem usa cada informação.'],
]

function Dashboards() {
  usePageMeta(dashboardsMetadata)

  return (
    <>
      <ScrollReveal />
      <Header />
      <main className="solution-page db-page">
        <section className="db-hero" id="inicio">
          <div className="solution-container db-hero__layout">
            <div className="db-hero__content">
              <span className="solution-eyebrow">Dashboards empresariais</span>
              <h1>Dados organizados para enxergar o que o negócio pede agora.</h1>
              <p>Um dashboard útil não começa pelos gráficos. Começa pelas perguntas da operação e transforma dados dispersos em uma visão que ajuda a acompanhar, comparar e decidir.</p>
              <div className="solution-hero__actions">
                <a className="solution-button solution-button--primary" href="/#contato">Conversar sobre essa necessidade <span aria-hidden="true">→</span></a>
                <a className="solution-button solution-button--secondary" href="#visao-util">Veja o que torna a visão útil</a>
              </div>
            </div>

            <div className="db-hero__visual" role="img" aria-label="Exemplo ilustrativo de dashboard, sem dados de clientes, com indicadores, referências e alertas">
              <div className="db-board" aria-hidden="true">
                <div className="db-board__bar">
                  <div><span className="db-board__mark">SX</span><strong>Operação comercial</strong></div>
                  <span className="db-board__updated">Exemplo ilustrativo</span>
                </div>
                <div className="db-board__filters"><span>Últimos 30 dias</span><span>Todas as unidades</span><span>Todos os canais</span></div>
                <div className="db-board__metrics">
                  {indicators.map(([label, value, note], index) => <div className={index === 1 ? 'is-featured' : ''} key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></div>)}
                </div>
                <div className="db-board__main">
                  <div className="db-chart">
                    <div className="db-chart__head"><div><span>Pedidos concluídos</span><strong>Leitura por período</strong></div><small>Referência definida</small></div>
                    <svg viewBox="0 0 440 166" preserveAspectRatio="none">
                      <defs><linearGradient id="dbArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#22d3ee" stopOpacity=".28"/><stop offset="1" stopColor="#22d3ee" stopOpacity="0"/></linearGradient></defs>
                      <g className="db-chart__grid"><path d="M0 25H440M0 72H440M0 119H440"/></g>
                      <path className="db-chart__area" d="M0 135 C40 122 58 128 92 105 S150 110 190 82 S244 91 278 58 S340 70 375 39 S417 33 440 18 V166 H0Z"/>
                      <path className="db-chart__line" d="M0 135 C40 122 58 128 92 105 S150 110 190 82 S244 91 278 58 S340 70 375 39 S417 33 440 18"/>
                      <circle cx="375" cy="39" r="4"/><circle cx="440" cy="18" r="4"/>
                    </svg>
                    <div className="db-chart__labels"><span>S1</span><span>S2</span><span>S3</span><span>S4</span><span>S5</span></div>
                  </div>
                  <div className="db-side">
                    <span className="db-side__label">Atenção hoje</span>
                    <div className="db-alert"><i>!</i><div><strong>Pedidos em atenção</strong><small>Exceções de prazo</small></div></div>
                    <div className="db-goal"><div><span>Meta mensal</span><strong>Contexto</strong></div><small>Comparar o realizado com a meta</small></div>
                    <div className="db-channel"><span>Leitura por canal</span><strong>Comparação</strong><small>Investigar diferenças</small></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="solution-section db-fragmented" id="visao-util">
          <div className="solution-container">
            <div className="solution-heading solution-heading--split" data-reveal="up">
              <div><span className="solution-eyebrow">Do relatório à leitura</span><h2>O dado pode existir e ainda não estar disponível para decidir.</h2></div>
              <p>Quando cada área consulta uma fonte, monta uma planilha e interpreta o número de um jeito, a empresa gasta tempo produzindo a visão antes de poder usá-la.</p>
            </div>
            <div className="db-fragmented__story" data-reveal-stagger>
              <div className="db-source"><span>01</span><strong>Dados espalhados</strong><p>ERP, CRM, planilhas e plataformas guardam partes diferentes da operação.</p></div>
              <div className="db-source"><span>02</span><strong>Consolidação manual</strong><p>Alguém exporta, confere e combina informações toda semana.</p></div>
              <div className="db-source db-source--result"><span>03</span><strong>Decisão atrasada</strong><p>Quando a leitura fica pronta, o cenário já pode ter mudado.</p></div>
            </div>
          </div>
        </section>

        <section className="solution-section db-capabilities" id="solucoes">
          <div className="solution-container">
            <div className="solution-heading" data-reveal="up"><span className="solution-eyebrow">Visão com propósito</span><h2>Cada elemento precisa responder a uma pergunta real.</h2><p>Mais componentes não significam mais clareza. O desenho parte das decisões, organiza o nível de detalhe e deixa exceções visíveis.</p></div>
            <div className="db-capabilities__grid" data-reveal-stagger>
              {capabilities.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
              <div className="db-capabilities__focus"><span>Uma tela útil conecta</span><strong>situação atual</strong><i>com</i><strong>referência</strong><i>e</i><strong>próxima ação</strong></div>
            </div>
          </div>
        </section>

        <section className="solution-section db-process" id="processo">
          <div className="solution-container">
            <div className="solution-heading solution-heading--split" data-reveal="up"><div><span className="solution-eyebrow">Como funciona</span><h2>Da pergunta de negócio à informação confiável.</h2></div><p>A interface é a parte visível. Antes dela, é preciso alinhar definições, fontes, regras e frequência de atualização.</p></div>
            <ol className="db-process__line" data-reveal-stagger>
              <li><span>01</span><div><strong>Perguntas</strong><p>O que precisa ser acompanhado ou decidido?</p></div></li>
              <li><span>02</span><div><strong>Indicadores</strong><p>Quais medidas explicam esse cenário?</p></div></li>
              <li><span>03</span><div><strong>Fontes</strong><p>Acesso viável, qualidade e regras de cálculo.</p></div></li>
              <li><span>04</span><div><strong>Primeiro recorte</strong><p>Escopo e condições acordados antes da implantação.</p></div></li>
              <li><span>05</span><div><strong>Implantação e uso</strong><p>Validar a leitura na rotina antes de ampliar.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="solution-section db-criteria">
          <div className="solution-container db-criteria__layout">
            <div className="solution-heading" data-reveal="left"><span className="solution-eyebrow">Decisões importantes</span><h2>Nem todo dado precisa estar no painel.</h2><p>Priorizamos o que apoia ação, comparação ou acompanhamento. O restante pode continuar disponível em uma visão de detalhe ou relatório específico.</p></div>
            <div className="db-criteria__matrix" data-reveal="right">
              <div className="db-criteria__head"><span>Critério</span><span>Boa pergunta</span></div>
              <div><strong>Relevância</strong><span>Esse número muda alguma decisão?</span></div>
              <div><strong>Confiabilidade</strong><span>A origem e a regra de cálculo estão claras?</span></div>
              <div><strong>Frequência</strong><span>Com que rapidez a informação perde valor?</span></div>
              <div><strong>Contexto</strong><span>Meta, histórico ou comparação explicam o resultado?</span></div>
            </div>
          </div>
        </section>

        <section className="solution-section db-approach">
          <div className="solution-container db-approach__layout">
            <div><span className="solution-eyebrow">Abordagem Soluverx</span><h2>Clareza primeiro. Tecnologia na medida.</h2></div>
            <p>Podemos construir um dashboard novo, conectar ferramentas que já existem ou recomendar uma alternativa mais simples. A solução adequada é a menor que entrega uma visão confiável para a rotina real.</p>
          </div>
        </section>

        <section className="solution-section solution-lifecycle">
          <div className="solution-container solution-lifecycle__layout">
            <div className="solution-heading" data-reveal="left"><span className="solution-eyebrow">Da primeira visão à rotina</span><h2>Uma leitura útil precisa acompanhar os dados que mudam.</h2><p>Começamos por perguntas e fontes viáveis. Se o problema estiver na qualidade ou na disponibilidade dos dados, pode ser melhor organizar a origem ou aproveitar relatórios existentes antes de criar um painel.</p></div>
            <div className="solution-lifecycle__content" data-reveal="right"><h3>Primeira entrega útil</h3><p>Definimos um recorte, as regras e as condições da proposta. Implantamos progressivamente e validamos indicadores, atualização e leitura com quem usa.</p><h3>Continuidade quando contratada</h3><p>A Soluverx pode acompanhar mudanças nas fontes, qualidade dos dados, indicadores e ajustes da visão. Suporte, manutenção e operação tecnológica seguem as responsabilidades contratadas.</p></div>
          </div>
        </section>

        <section className="solution-section solution-faq" id="faq"><div className="solution-container solution-faq__layout"><div className="solution-heading" data-reveal="left"><span className="solution-eyebrow">Dúvidas frequentes</span><h2>Antes de colocar os dados na tela.</h2></div><div className="solution-faq__list" data-reveal="right" data-exclusive-details>{faqs.map(([question, answer]) => <details key={question} onToggle={closeOtherDetails}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>

        <section className="solution-cta" id="contato"><div className="solution-container"><div className="solution-cta__card" data-reveal="up"><span className="solution-eyebrow">Próxima leitura</span><h2>Quais informações sua equipe precisa juntar antes de conseguir decidir?</h2><p>Conte como esse acompanhamento acontece hoje. A conversa começa pelo que precisa ficar mais claro, não por uma lista pronta de gráficos.</p><div className="solution-hero__actions"><a className="solution-button solution-button--primary" href="/#contato">Conversar sobre o cenário <span aria-hidden="true">→</span></a></div><nav className="solution-related" aria-label="Outras soluções"><span className="solution-related__label">Explore outras soluções</span><a href="/desenvolvimento-de-software">Software sob medida</a><a href="/automacao-de-processos">Automação de processos</a><a href="/integracao-de-sistemas">Integração de sistemas</a></nav></div></div></section>
      </main>
      <Footer />
    </>
  )
}

export default Dashboards
