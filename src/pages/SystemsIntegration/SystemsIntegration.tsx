import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { closeOtherDetails } from '../../components/ExclusiveDetails/ExclusiveDetails'
import { usePageMeta } from '../../components/PageMeta/PageMeta'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'
import { systemsIntegrationMetadata } from '../../config/serviceMetadata'
import '../SolutionPages.css'
import './SystemsIntegration.css'

const integrationCases = [
  ['Comercial → Financeiro', 'Um negócio aprovado gera cobrança ou cadastro sem uma nova digitação.'],
  ['Loja → Estoque', 'Pedidos movimentam disponibilidade e evitam informações diferentes entre canais.'],
  ['Formulário → Atendimento', 'Uma solicitação chega classificada à equipe certa com os dados necessários.'],
  ['Operação → Dashboard', 'Informações de fontes diferentes alimentam uma visão centralizada.'],
]

const faqs = [
  ['Qualquer sistema pode ser integrado?', 'Não. A viabilidade depende de como cada sistema permite acessar ou enviar dados, das regras do fornecedor, da qualidade das informações e dos requisitos de segurança.'],
  ['O que é uma API?', 'É uma forma estruturada de um sistema oferecer dados e ações a outro. Nem toda integração depende de API, mas ela costuma ser o caminho mais adequado quando disponível.'],
  ['A sincronização precisa ser em tempo real?', 'Não. Ela pode acontecer imediatamente, em intervalos ou em horários definidos. A escolha depende da necessidade operacional, do volume e dos limites das ferramentas.'],
  ['Como evitar informações duplicadas?', 'Definimos identificadores, sistema de origem, regras de atualização e tratamento de conflitos. Essa governança é tão importante quanto a conexão técnica.'],
  ['É preciso criar um sistema novo para integrar?', 'Nem sempre. Muitas integrações podem funcionar entre ferramentas existentes. Um componente intermediário só é criado quando há uma necessidade clara de processamento, controle ou centralização.'],
]

function SystemsIntegration() {
  usePageMeta(systemsIntegrationMetadata)

  return (
    <>
      <ScrollReveal />
      <Header />
      <main className="solution-page int-page">
        <section className="int-hero" id="inicio">
          <div className="solution-container int-hero__layout">
            <div className="int-hero__content">
              <span className="solution-eyebrow">Integração de sistemas</span>
              <h1>Ferramentas diferentes. Uma operação que precisa funcionar em conjunto.</h1>
              <p>Quando sistemas trocam dados e ações de forma organizada, a equipe deixa de atuar como ponte manual — e o que já existe pode funcionar melhor sem ser substituído por padrão.</p>
              <div className="solution-hero__actions"><a className="solution-button solution-button--primary" href="/#contato">Conte quais sistemas não conversam <span aria-hidden="true">→</span></a><a className="solution-button solution-button--secondary" href="#processo">Entenda a conexão</a></div>
            </div>
            <div className="int-hero__visual" role="img" aria-label="Sistemas comercial, financeiro, estoque e atendimento conectados por uma camada de integração com dados sincronizados">
              <div className="int-network" aria-hidden="true">
                <div className="int-network__top"><span>Mapa da operação</span><span className="int-network__healthy">Exemplo ilustrativo</span></div>
                <svg className="int-network__lines" viewBox="0 0 600 390"><defs><linearGradient id="intLine" x1="0" x2="1"><stop stopColor="#3b82f6"/><stop offset=".5" stopColor="#22d3ee"/><stop offset="1" stopColor="#818cf8"/></linearGradient></defs><path d="M145 91 C210 91 215 194 278 194M455 91 C390 91 385 194 322 194M145 300 C210 300 215 210 278 210M455 300 C390 300 385 210 322 210"/><circle className="int-network__packet p1" cx="190" cy="120" r="4"/><circle className="int-network__packet p2" cx="407" cy="120" r="4"/><circle className="int-network__packet p3" cx="190" cy="270" r="4"/><circle className="int-network__packet p4" cx="410" cy="270" r="4"/></svg>
                <div className="int-system int-system--sales"><span className="int-system__icon">C</span><div><strong>Comercial</strong><small>CRM</small></div><i /></div>
                <div className="int-system int-system--finance"><span className="int-system__icon">F</span><div><strong>Financeiro</strong><small>ERP</small></div><i /></div>
                <div className="int-system int-system--stock"><span className="int-system__icon">E</span><div><strong>Estoque</strong><small>Gestão</small></div><i /></div>
                <div className="int-system int-system--service"><span className="int-system__icon">A</span><div><strong>Atendimento</strong><small>Help desk</small></div><i /></div>
                <div className="int-hub"><span>Integração</span><strong>Dados e regras</strong><div>Origem → destino</div></div>
                <div className="int-network__event"><i>✓</i><div><strong>Cliente atualizado</strong><small>CRM → ERP · agora</small></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="solution-section int-islands">
          <div className="solution-container">
            <div className="solution-heading solution-heading--split" data-reveal="up"><div><span className="solution-eyebrow">Quando a equipe vira integração</span><h2>Sistemas isolados criam trabalho nos espaços entre eles.</h2></div><p>O problema aparece quando a mesma informação precisa ser digitada outra vez, quando atualizações chegam atrasadas ou quando ninguém sabe qual versão é a correta.</p></div>
            <div className="int-islands__comparison" data-reveal-stagger>
              <div className="int-islands__before"><span>Sem conexão</span><div><i>CRM</i><b>copiar</b><i>Planilha</i><b>conferir</b><i>ERP</i></div><p>Mais espera, duplicidade e dependência de tarefas manuais.</p></div>
              <div className="int-islands__bridge" aria-hidden="true"><span>→</span><small>regra + troca de dados</small></div>
              <div className="int-islands__after"><span>Com integração</span><div><i>CRM</i><b>sincroniza</b><i>ERP</i></div><p>Uma origem definida e atualizações rastreáveis entre as ferramentas.</p></div>
            </div>
          </div>
        </section>

        <section className="solution-section int-cases" id="possibilidades">
          <div className="solution-container">
            <div className="solution-heading" data-reveal="up"><span className="solution-eyebrow">Conexões que apoiam a operação</span><h2>A integração aparece no resultado, não na complexidade técnica.</h2><p>Para quem usa, ela pode significar simplesmente encontrar o cadastro atualizado, receber uma tarefa no lugar certo ou não precisar repetir um lançamento.</p></div>
            <div className="int-cases__grid" data-reveal-stagger>{integrationCases.map(([title,text],index)=><article key={title}><span>Conexão 0{index+1}</span><h3>{title}</h3><p>{text}</p><div><i>origem</i><b>→</b><i>destino</i></div></article>)}</div>
          </div>
        </section>

        <section className="solution-section int-architecture" id="processo">
          <div className="solution-container">
            <div className="solution-heading solution-heading--split" data-reveal="up"><div><span className="solution-eyebrow">Como a integração funciona</span><h2>Origem, regra, destino — e visibilidade no caminho.</h2></div><p>Uma conexão confiável define o que circula, quando circula e o que fazer se algo sair do esperado.</p></div>
            <div className="int-architecture__pipeline" data-reveal-stagger>
              <div><span>01 · Origem</span><strong>Sistema envia um evento</strong><small>Pedido aprovado</small></div><i>→</i><div><span>02 · Validação</span><strong>Dados são conferidos</strong><small>Campos e permissões</small></div><i>→</i><div className="is-core"><span>03 · Processamento</span><strong>Regras transformam a informação</strong><small>Formato e correspondências</small></div><i>→</i><div><span>04 · Destino</span><strong>Ação é realizada</strong><small>Cobrança criada</small></div><i>→</i><div><span>05 · Retorno</span><strong>Status fica registrado</strong><small>Concluído ou alertado</small></div>
            </div>
            <div className="int-architecture__log"><span>Exemplo de registro</span><strong>evento.pedido_aprovado</strong><span>validado</span><span>processado</span><span className="is-success">sincronizado ✓</span></div>
          </div>
        </section>

        <section className="solution-section int-decisions">
          <div className="solution-container int-decisions__layout">
            <div className="solution-heading" data-reveal="left"><span className="solution-eyebrow">Decisões antes da conexão</span><h2>Integrar não é apenas fazer dados passarem.</h2><p>É preciso combinar responsabilidade, consistência e comportamento em situações reais — inclusive quando um dos lados fica indisponível.</p></div>
            <div className="int-decisions__stack" data-reveal="right"><article><span>01</span><div><strong>Qual é a fonte oficial?</strong><p>Definir onde cada informação nasce evita disputas e atualizações contraditórias.</p></div></article><article><span>02</span><div><strong>O que acontece em um conflito?</strong><p>Regras de prioridade protegem dados quando dois sistemas alteram o mesmo registro.</p></div></article><article><span>03</span><div><strong>Como falhas ficam visíveis?</strong><p>Registros, alertas e novas tentativas impedem que o erro desapareça no caminho.</p></div></article><article><span>04</span><div><strong>Qual frequência faz sentido?</strong><p>Tempo real só é necessário quando a operação realmente depende dessa velocidade.</p></div></article></div>
          </div>
        </section>

        <section className="solution-section int-approach">
          <div className="solution-container int-approach__layout"><div data-reveal="left"><span className="solution-eyebrow">Abordagem Soluverx</span><h2>Conectar o que funciona antes de propor substituir.</h2></div><div data-reveal="right"><p>Partimos do fluxo operacional, avaliamos as possibilidades reais de cada ferramenta e desenhamos a menor conexão capaz de reduzir o atrito.</p><ul><li>Viabilidade técnica sem perder o benefício de vista</li><li>Segurança e acesso apenas ao necessário</li><li>Implantação gradual quando reduz risco</li><li>Documentação suficiente para manter a conexão compreensível</li></ul></div></div>
        </section>

        <section className="solution-section solution-lifecycle">
          <div className="solution-container solution-lifecycle__layout">
            <div className="solution-heading" data-reveal="left"><span className="solution-eyebrow">Conexão em uso</span><h2>Integrar inclui decidir como a conexão será mantida.</h2><p>APIs, permissões, limites do fornecedor e regras de dados precisam ser viáveis. Se já houver um conector adequado, ele pode ser preferível a construir uma integração própria.</p></div>
            <div className="solution-lifecycle__content" data-reveal="right"><h3>Implantação progressiva</h3><p>Com escopo e condições acordados, começamos por uma troca relevante. Validamos origem oficial, conflitos, falhas e retorno na operação antes de ampliar.</p><h3>Continuidade quando contratada</h3><p>A Soluverx pode acompanhar falhas e monitoramento, manter autenticação e adaptar a conexão a mudanças nas APIs ou nas regras. Operação, suporte, manutenção e evolução ficam limitados às responsabilidades contratadas.</p></div>
          </div>
        </section>

        <section className="solution-section solution-faq" id="faq"><div className="solution-container solution-faq__layout"><div className="solution-heading" data-reveal="left"><span className="solution-eyebrow">Dúvidas frequentes</span><h2>O que vale entender antes de conectar.</h2></div><div className="solution-faq__list" data-reveal="right" data-exclusive-details>{faqs.map(([q,a])=><details key={q} onToggle={closeOtherDetails}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
        <section className="solution-cta int-cta" id="contato"><div className="solution-container"><div className="solution-cta__card" data-reveal="up"><span className="solution-eyebrow">Próxima conexão</span><h2>Em quais pontos sua equipe ainda transporta dados entre sistemas?</h2><p>Conte quais ferramentas participam e o que precisa acontecer entre elas. Nós avaliamos o benefício operacional e a viabilidade da integração.</p><div className="solution-hero__actions"><a className="solution-button solution-button--primary" href="/#contato">Conversar sobre os sistemas <span aria-hidden="true">→</span></a></div><nav className="solution-related" aria-label="Outras soluções"><span className="solution-related__label">Explore outras soluções</span><a href="/desenvolvimento-de-software">Software sob medida</a><a href="/dashboards">Dashboards</a><a href="/automacao-de-processos">Automação de processos</a></nav></div></div></section>
      </main>
      <Footer />
    </>
  )
}

export default SystemsIntegration
