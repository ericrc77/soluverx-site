import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { closeOtherDetails } from '../../components/ExclusiveDetails/ExclusiveDetails'
import { usePageMeta } from '../../components/PageMeta/PageMeta'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import { processAutomationMetadata } from '../../config/serviceMetadata'
import '../SolutionPages.css'
import './ProcessAutomation.css'

const processNodes = [
  ['evento', 'Novo pedido', 'Recebido pelo formulário'],
  ['regra', 'Validar dados', 'Valor e cadastro conferidos'],
  ['decisão', 'Aprovação', 'Responsável participa'],
  ['ação', 'Atualizar sistemas', 'Pedido e estoque sincronizados'],
  ['aviso', 'Notificar equipe', 'Próxima etapa liberada'],
]

const opportunities = [
  ['Repetição', 'A mesma sequência é executada muitas vezes e segue regras conhecidas.'],
  ['Retrabalho', 'Informações são copiadas, conferidas ou cadastradas novamente em outra etapa.'],
  ['Espera', 'O processo fica parado porque depende de lembretes, repasses ou verificações manuais.'],
  ['Falta de rastreio', 'É difícil saber em que etapa está, quem precisa agir e o que já aconteceu.'],
]

const faqs = [
  ['Automação significa retirar todas as pessoas do processo?', 'Não. Aprovações, exceções, análises e decisões podem continuar humanas. O objetivo é reduzir etapas manuais que não exigem julgamento.'],
  ['É possível automatizar ferramentas que já usamos?', 'Muitas vezes, sim. A viabilidade depende dos recursos oferecidos por cada ferramenta, como APIs, webhooks, exportações ou outros meios seguros de integração.'],
  ['Por onde é melhor começar?', 'Por uma rotina frequente, previsível e com ganho claro. Um primeiro fluxo menor ajuda a validar regras e impacto antes de ampliar a automação.'],
  ['O que acontece quando algo dá errado?', 'Uma automação responsável prevê validações, registros, tentativas controladas e alertas para que uma pessoa possa intervir quando necessário.'],
  ['Toda tarefa repetitiva deve ser automatizada?', 'Não. Frequência, risco, variação e custo de manutenção precisam justificar a automação. Às vezes, simplificar o processo já resolve melhor.'],
]

function ProcessAutomation() {
  usePageMeta(processAutomationMetadata)

  return (
    <>
      <ScrollReveal />
      <Header />
      <main className="solution-page auto-page">
        <section className="auto-hero" id="inicio">
          <div className="solution-container auto-hero__layout">
            <div className="auto-hero__content">
              <span className="solution-eyebrow">Automação de processos</span>
              <h1>Menos etapas manuais entre o que acontece e o que precisa ser feito.</h1>
              <p>Automação conecta eventos, regras e ações para que tarefas previsíveis aconteçam com menos repetição — sem retirar as pessoas das decisões em que elas fazem diferença.</p>
              <div className="solution-hero__actions"><a className="solution-button solution-button--primary" href="/#contato">Conte qual rotina se repete <span aria-hidden="true">→</span></a><a className="solution-button solution-button--secondary" href="#processo">Acompanhe um fluxo</a></div>
            </div>
            <div className="auto-hero__visual" role="img" aria-label="Fluxo automatizado de um pedido, passando por validação, aprovação humana, atualização de sistemas e notificação da equipe">
              <div className="auto-run" aria-hidden="true">
                <div className="auto-run__head"><div><span className="auto-run__icon">↯</span><div><strong>Fluxo de novo pedido</strong><small>Exemplo ilustrativo</small></div></div><span className="auto-run__status">Aprovação humana</span></div>
                <div className="auto-run__body">
                  {processNodes.map(([type, title, note], index) => <div className={`auto-node auto-node--${index + 1}`} key={title}><span className="auto-node__step">0{index + 1}</span><span className="auto-node__type">{type}</span><div><strong>{title}</strong><small>{note}</small></div><span className="auto-node__state">{index < 2 ? '✓' : index === 2 ? '•••' : ''}</span>{index < processNodes.length - 1 && <i className="auto-node__line" />}</div>)}
                </div>
                <div className="auto-run__foot"><span><i /> Fluxo em acompanhamento</span><span>Próxima ação: aprovação comercial</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="solution-section auto-recognition">
          <div className="solution-container auto-recognition__layout">
            <div className="auto-recognition__quote" data-reveal="left"><span>“</span><p>Eu baixo a planilha, confiro os dados, cadastro no sistema, aviso o responsável e depois volto para atualizar o status.</p><small>Quando uma rotina depende de alguém lembrar cada próximo passo</small></div>
            <div className="solution-heading" data-reveal="right"><span className="solution-eyebrow">Reconhecer antes de automatizar</span><h2>O problema nem sempre é a tarefa. É tudo o que acontece entre uma etapa e outra.</h2><p>Repasses, esperas e atualizações duplicadas acumulam tempo e abrem espaço para falhas. Mapear o processo revela onde uma conexão simples pode gerar mais impacto.</p></div>
          </div>
        </section>

        <section className="solution-section auto-opportunities" id="possibilidades">
          <div className="solution-container">
            <div className="solution-heading solution-heading--split" data-reveal="up"><div><span className="solution-eyebrow">Onde pode fazer sentido</span><h2>Automatizar o previsível. Preservar o que exige contexto.</h2></div><p>Os melhores pontos de partida combinam volume, regras claras e um resultado verificável.</p></div>
            <div className="auto-opportunities__list" data-reveal-stagger>{opportunities.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div><i aria-hidden="true">→</i></article>)}</div>
          </div>
        </section>

        <section className="solution-section auto-blueprint" id="processo">
          <div className="solution-container">
            <div className="solution-heading" data-reveal="up"><span className="solution-eyebrow">Anatomia de um fluxo</span><h2>Uma execução clara, com regra, registro e saída.</h2><p>O fluxo pode ser simples ou envolver diferentes ferramentas. O essencial é que cada etapa tenha motivo, condição e resposta definidos.</p></div>
            <div className="auto-blueprint__flow" data-reveal-stagger>
              <div className="auto-blueprint__lane"><span>Entrada</span><strong>Evento recebido</strong><small>Pedido criado</small></div><i>→</i>
              <div className="auto-blueprint__lane"><span>Lógica</span><strong>Condições verificadas</strong><small>Cadastro válido?</small></div><i>→</i>
              <div className="auto-blueprint__fork"><div><span>Sim</span><strong>Seguir fluxo</strong></div><div><span>Exceção</span><strong>Revisão humana</strong></div></div><i>→</i>
              <div className="auto-blueprint__lane"><span>Saída</span><strong>Ações executadas</strong><small>Atualizar + notificar</small></div>
            </div>
            <div className="auto-blueprint__principles"><span>Gatilhos claros</span><span>Condições verificáveis</span><span>Histórico de execução</span><span>Intervenção quando necessária</span></div>
          </div>
        </section>

        <section className="solution-section auto-boundaries">
          <div className="solution-container auto-boundaries__layout">
            <div className="solution-heading" data-reveal="left"><span className="solution-eyebrow">Critérios e limites</span><h2>Automação boa também sabe quando parar.</h2><p>Exceções não são falhas de planejamento; fazem parte da operação. Por isso, definimos caminhos para validar, avisar e devolver uma decisão à pessoa certa.</p></div>
            <div className="auto-boundaries__board" data-reveal="right">
              <div><span>Automatizar</span><ul><li>Validações objetivas</li><li>Atualizações previsíveis</li><li>Notificações e registros</li><li>Transferência de dados</li></ul></div>
              <div><span>Manter humano</span><ul><li>Decisões com contexto</li><li>Exceções sensíveis</li><li>Aprovações de risco</li><li>Relacionamento com pessoas</li></ul></div>
            </div>
          </div>
        </section>

        <section className="solution-section auto-approach">
          <div className="solution-container">
            <div className="auto-approach__header"><span className="solution-eyebrow">Abordagem Soluverx</span><h2>Antes de acelerar, simplificar.</h2></div>
            <ol className="auto-approach__steps" data-reveal-stagger><li><span>01</span><strong>Entender a rotina atual</strong><p>Participantes, entradas, regras, exceções e resultados.</p></li><li><span>02</span><strong>Simplificar e avaliar</strong><p>Retirar etapas desnecessárias e verificar a viabilidade nas ferramentas existentes.</p></li><li><span>03</span><strong>Definir o primeiro fluxo</strong><p>Escopo, responsabilidades e condições acordados antes de implantar.</p></li><li><span>04</span><strong>Implantar e validar em uso</strong><p>Liberar por etapas e verificar execuções, exceções e impacto na rotina.</p></li></ol>
          </div>
        </section>

        <section className="solution-section solution-lifecycle">
          <div className="solution-container solution-lifecycle__layout">
            <div className="solution-heading" data-reveal="left"><span className="solution-eyebrow">Depois de ativar o fluxo</span><h2>As regras da operação podem mudar. O fluxo precisa ser cuidado.</h2><p>A primeira entrega valida um processo delimitado, com registros e intervenção humana onde necessário. Ampliar a automação depende do aprendizado no uso e do escopo acordado.</p></div>
            <div className="solution-lifecycle__content" data-reveal="right"><h3>Continuidade quando contratada</h3><p>A Soluverx pode acompanhar execuções, tratar falhas e manter o fluxo diante de mudanças de regra ou ferramenta. Monitoramento, suporte, correções e evolução entram conforme a solução e a contratação.</p><h3>Limites claros</h3><p>Alertas e registros ajudam a perceber exceções; não substituem a definição de quem intervém e de quais atividades serão acompanhadas após a implantação.</p></div>
          </div>
        </section>

        <section className="solution-section solution-faq" id="faq"><div className="solution-container solution-faq__layout"><div className="solution-heading" data-reveal="left"><span className="solution-eyebrow">Dúvidas frequentes</span><h2>Automação sem promessas automáticas.</h2></div><div className="solution-faq__list" data-reveal="right" data-exclusive-details>{faqs.map(([q,a]) => <details key={q} onToggle={closeOtherDetails}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
        <section className="solution-cta auto-cta" id="contato"><div className="solution-container"><div className="solution-cta__card" data-reveal="up"><span className="solution-eyebrow">Próximo passo</span><h2>Qual sequência sua equipe repete mais vezes do que deveria?</h2><p>Descreva a rotina, mesmo que ela ainda esteja espalhada entre mensagens, planilhas e sistemas. Nós começamos entendendo o fluxo.</p><div className="solution-hero__actions"><a className="solution-button solution-button--primary" href="/#contato">Conversar sobre o processo <span aria-hidden="true">→</span></a></div><nav className="solution-related" aria-label="Outras soluções"><span className="solution-related__label">Explore outras soluções</span><a href="/desenvolvimento-de-software">Software sob medida</a><a href="/dashboards">Dashboards</a><a href="/integracao-de-sistemas">Integração de sistemas</a></nav></div></div></section>
      </main>
      <Footer />
    </>
  )
}

export default ProcessAutomation
