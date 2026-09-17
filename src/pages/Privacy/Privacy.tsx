import { useEffect } from 'react'
import soluverxLogo from '../../assets/brand/soluverx-logo-transparent.webp'
import Footer from '../../components/Footer/Footer'
import './Privacy.css'

const privacyDescription =
  'Entenda como a Soluverx trata informações enviadas pelo site e dados de navegação utilizados para análise e atendimento.'
const privacyUrl = 'https://www.soluverx.com.br/privacidade'

function Privacy() {
  useEffect(() => {
    const setMetaContent = (selector: string, content: string) => {
      const meta = document.querySelector<HTMLMetaElement>(selector)

      if (meta) meta.content = content
    }

    document.title = 'Política de Privacidade | Soluverx'
    setMetaContent('meta[name="description"]', privacyDescription)
    setMetaContent('meta[property="og:url"]', privacyUrl)
    setMetaContent('meta[property="og:title"]', 'Política de Privacidade | Soluverx')
    setMetaContent(
      'meta[property="og:description"]',
      'Saiba quais informações podem ser tratadas ao utilizar o site da Soluverx e para quais finalidades.',
    )
    setMetaContent('meta[name="twitter:title"]', 'Política de Privacidade | Soluverx')
    setMetaContent(
      'meta[name="twitter:description"]',
      'Saiba como a Soluverx trata informações enviadas pelo site e dados de navegação.',
    )

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const structuredData = document.querySelector<HTMLScriptElement>(
      'script[type="application/ld+json"]',
    )

    if (canonical) canonical.href = privacyUrl

    if (structuredData) {
      structuredData.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Política de Privacidade | Soluverx',
        url: privacyUrl,
        description:
          'Informações sobre o tratamento de dados enviados pelo site e de dados de navegação utilizados pela Soluverx.',
        inLanguage: 'pt-BR',
        isPartOf: {
          '@type': 'WebSite',
          name: 'Soluverx',
          url: 'https://www.soluverx.com.br/',
        },
      })
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="privacy-page">
      <header className="privacy-header">
        <div className="privacy-header__container">
          <a href="/" className="privacy-header__brand" aria-label="Soluverx - Início">
            <img
              src={soluverxLogo}
              alt="Soluverx"
              width="330"
              height="109"
              className="privacy-header__logo"
            />
          </a>

          <a href="/" className="privacy-header__back">
            Voltar ao site
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      <main className="privacy-main">
        <section className="privacy-hero" aria-labelledby="privacy-title">
          <div className="privacy-container privacy-container--narrow">
            <span className="privacy-eyebrow">Privacidade e transparência</span>

            <h1 id="privacy-title">Política de Privacidade</h1>

            <p className="privacy-intro">
              Esta Política de Privacidade explica, de forma simples, quais informações podem ser tratadas ao utilizar este site e para quais finalidades elas podem ser utilizadas.
            </p>

            <p className="privacy-updated">Última atualização: setembro de 2026</p>
          </div>
        </section>

        <section className="privacy-content" aria-label="Conteúdo da Política de Privacidade">
          <div className="privacy-container privacy-container--narrow">
            <article className="privacy-section">
              <span className="privacy-section__number">01</span>
              <div>
                <h2>Informações fornecidas pelo visitante</h2>
                <p>
                  Ao entrar em contato com a Soluverx por meio do formulário disponível no site, podem ser fornecidas voluntariamente informações como nome, empresa, número de WhatsApp, endereço de e-mail e informações incluídas na mensagem enviada.
                </p>
                <p>
                  Esses dados são utilizados principalmente para compreender a solicitação, responder ao contato e dar continuidade a uma possível conversa comercial.
                </p>
                <p>
                  O visitante deve evitar inserir no campo de mensagem dados pessoais sensíveis ou informações confidenciais que não sejam necessárias para o atendimento inicial.
                </p>
              </div>
            </article>

            <article className="privacy-section">
              <span className="privacy-section__number">02</span>
              <div>
                <h2>Informações de navegação</h2>
                <p>
                  A Soluverx utiliza o Google Analytics para compreender, de forma estatística, como o site é utilizado.
                </p>
                <p>
                  Esse serviço pode tratar informações relacionadas à navegação, como páginas acessadas, dados sobre dispositivo e navegador, origem do acesso e localização aproximada.
                </p>
                <p>
                  Essas informações são utilizadas para acompanhar o desempenho do site e compreender melhor sua utilização.
                </p>
              </div>
            </article>

            <article className="privacy-section">
              <span className="privacy-section__number">03</span>
              <div>
                <h2>Formulário de contato</h2>
                <p>
                  O envio das informações pelo formulário é realizado por meio do serviço Formspree.
                </p>
                <p>
                  As submissões podem ser processadas e armazenadas pela infraestrutura desse serviço para possibilitar o recebimento e o gerenciamento das mensagens pela Soluverx.
                </p>
              </div>
            </article>

            <article className="privacy-section">
              <span className="privacy-section__number">04</span>
              <div>
                <h2>Compartilhamento de informações</h2>
                <p>
                  A Soluverx não vende os dados pessoais fornecidos pelos visitantes.
                </p>
                <p>
                  Informações podem ser processadas por fornecedores utilizados para viabilizar o funcionamento do site, incluindo o Formspree, para recebimento das mensagens do formulário, e o Google Analytics, para análise de utilização e desempenho do site.
                </p>
                <p>
                  Cada fornecedor possui suas próprias práticas e políticas de privacidade.
                </p>
              </div>
            </article>

            <article className="privacy-section">
              <span className="privacy-section__number">05</span>
              <div>
                <h2>Armazenamento e segurança</h2>
                <p>
                  A Soluverx busca adotar medidas razoáveis para proteger as informações recebidas e utiliza serviços de terceiros que possuem seus próprios mecanismos de segurança.
                </p>
                <p>
                  Nenhum sistema conectado à internet, entretanto, pode oferecer garantia absoluta de segurança.
                </p>
              </div>
            </article>

            <article className="privacy-section">
              <span className="privacy-section__number">06</span>
              <div>
                <h2>Direitos relacionados aos dados pessoais</h2>
                <p>
                  Nos termos da legislação brasileira aplicável, o titular dos dados pode solicitar informações sobre o tratamento de seus dados e, conforme o caso, solicitar acesso, correção, bloqueio ou eliminação de informações pessoais.
                </p>
              </div>
            </article>

            <article className="privacy-section">
              <span className="privacy-section__number">07</span>
              <div>
                <h2>Contato</h2>
                <p>
                  Para dúvidas relacionadas a esta Política de Privacidade ou solicitações referentes a dados pessoais, entre em contato pelo e-mail:
                </p>
                <a className="privacy-email" href="mailto:soluverx@gmail.com">
                  soluverx@gmail.com
                </a>
              </div>
            </article>

            <article className="privacy-section">
              <span className="privacy-section__number">08</span>
              <div>
                <h2>Alterações desta política</h2>
                <p>
                  Esta Política de Privacidade poderá ser atualizada quando houver mudanças no site, nos serviços utilizados pela Soluverx ou nas práticas relacionadas ao tratamento de dados.
                </p>
                <p>A versão atualizada permanecerá disponível nesta página.</p>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Privacy
