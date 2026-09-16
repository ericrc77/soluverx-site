import { useEffect, useRef } from 'react'
import './Hero.css'

type IconProps = {
  className?: string
}

function SpreadsheetIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="3" />
      <path d="M8 8h8M8 12h8M8 16h8M10 6v12M15 6v12" />
    </svg>
  )
}

function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4a8 8 0 0 0-6.8 12.2L4 20l4.1-1.1A8 8 0 1 0 12 4Z" />
      <path d="M9.4 8.9c.18-.4.52-.46.73-.46h.62c.18 0 .36.09.46.3l.82 1.8c.1.23.08.41-.06.58l-.58.68c.37.83 1.4 1.82 2.28 2.19l.74-.52c.17-.12.37-.14.57-.05l1.73.8c.22.1.33.27.33.47v.57c0 .49-.32.79-.74.88-.29.06-.61.09-.94.07-3.23-.19-6.16-3.08-6.36-6.28-.02-.35 0-.68.06-.98Z" />
    </svg>
  )
}

function DocumentIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v5h5M8.5 12h7M8.5 15.5h7" />
    </svg>
  )
}

function DataIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="6.5" ry="2.8" />
      <path d="M5.5 6v5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8V6" />
      <path d="M5.5 11v5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-5" />
    </svg>
  )
}

function DashboardIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="11" width="3" height="8" rx="1" />
      <rect x="10.5" y="7" width="3" height="12" rx="1" />
      <rect x="17" y="4" width="3" height="15" rx="1" />
    </svg>
  )
}

function CartIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 5h2l1.5 9h9.8l1.8-6H7" />
      <circle cx="9.5" cy="18" r="1.2" />
      <circle cx="17" cy="18" r="1.2" />
    </svg>
  )
}

function FactoryIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20V9l5 3V8l5 3V6l6 4v10H4Z" />
      <path d="M8 16h1M12 16h1M16 16h1" />
    </svg>
  )
}

function CoinIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="7.5" />
      <path d="M14.5 9.2c-.7-.8-1.6-1.2-2.7-1.2-1.5 0-2.5.8-2.5 1.9 0 1.2 1 1.7 2.8 2.1 1.8.4 2.7 1 2.7 2.1 0 1.2-1.1 2-2.7 2-1.3 0-2.4-.5-3.1-1.4M12 6.7v10.6" />
    </svg>
  )
}

function AlertIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4 21 19H3L12 4Z" />
      <path d="M12 9v4.5M12 16.5h.01" />
    </svg>
  )
}

function Hero() {
  const dashboardRef = useRef<HTMLDivElement>(null)
  const ordersRef = useRef<HTMLElement>(null)
  const productionRef = useRef<HTMLElement>(null)
  const receivableRef = useRef<HTMLElement>(null)
  const pendingRef = useRef<HTMLElement>(null)
  const growthRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const dashboard = dashboardRef.current

    if (!dashboard) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const setFinalValues = () => {
      if (ordersRef.current) ordersRef.current.textContent = '38'
      if (productionRef.current) productionRef.current.textContent = '82%'
      if (receivableRef.current) receivableRef.current.textContent = 'R$ 6.240'
      if (pendingRef.current) pendingRef.current.textContent = '3'
      if (growthRef.current) growthRef.current.textContent = '+18%'
      dashboard.classList.add('hero__dashboard--animated')
    }

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      setFinalValues()
      return
    }

    let animationFrame = 0
    let started = false

    const animateDashboard = () => {
      if (started) {
        return
      }

      started = true
      dashboard.classList.add('hero__dashboard--animated')

      const duration = 1150
      const start = performance.now()

      const easeOutCubic = (progress: number) =>
        1 - Math.pow(1 - progress, 3)

      const update = (now: number) => {
        const rawProgress = Math.min((now - start) / duration, 1)
        const progress = easeOutCubic(rawProgress)

        const orders = Math.round(38 * progress)
        const production = Math.round(82 * progress)
        const receivable = Math.round(6240 * progress)
        const pending = Math.round(3 * progress)
        const growth = Math.round(18 * progress)

        if (ordersRef.current) {
          ordersRef.current.textContent = String(orders)
        }

        if (productionRef.current) {
          productionRef.current.textContent = `${production}%`
        }

        if (receivableRef.current) {
          receivableRef.current.textContent = `R$ ${receivable.toLocaleString(
            'pt-BR',
          )}`
        }

        if (pendingRef.current) {
          pendingRef.current.textContent = String(pending)
        }

        if (growthRef.current) {
          growthRef.current.textContent = `+${growth}%`
        }

        if (rawProgress < 1) {
          animationFrame = requestAnimationFrame(update)
        }
      }

      animationFrame = requestAnimationFrame(update)
    }

    const isMobile = window.matchMedia('(max-width: 760px)').matches

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        animateDashboard()
        observer.disconnect()
      },
      {
        threshold: isMobile ? 0.08 : 0.32,
        rootMargin: isMobile ? '0px 0px -4% 0px' : '0px 0px -8% 0px',
      },
    )

    observer.observe(dashboard)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <section className="hero" id="inicio">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">Tecnologia a partir do problema</span>

          <h1 className="hero__title">
            Tem algo no seu negócio dando mais trabalho do que deveria?
          </h1>

          <p className="hero__lead">
            Entendemos sua operação para aplicar a tecnologia que faz sentido.
          </p>

          <p className="hero__text">
            Você não precisa chegar com uma solução pronta. Conte o que está
            dando trabalho: analisamos o contexto e definimos um primeiro passo
            para melhorar a operação com tecnologia adequada.
          </p>

          <div className="hero__actions">
            <a href="#contato" className="hero__primary">
              <span>Conte o que está dando trabalho</span>
              <span className="hero__primary-arrow" aria-hidden="true">
                →
              </span>
            </a>

            <a href="#processo" className="hero__secondary">
              Como trabalhamos
            </a>
          </div>
        </div>

        <div
          className="hero__visual"
          role="group"
          aria-label="Representação visual de informações espalhadas convergindo para uma visão organizada"
        >
          <div className="hero__mobile-context">
            <span className="hero__mobile-context-kicker">Talvez hoje isso esteja assim</span>
            <p>Informações importantes espalhadas entre ferramentas, arquivos e tarefas manuais.</p>
          </div>

          <div className="hero__sources">
            <div className="hero__source-card hero__source-card--one">
              <span className="hero__source-icon hero__source-icon--excel">
                <SpreadsheetIcon />
              </span>
              <span className="hero__source-copy">
                <span className="hero__source-type">Planilha</span>
                <strong>controle-vendas.xlsx</strong>
                <small>Planilhas espalhadas</small>
              </span>
            </div>

            <div className="hero__source-card hero__source-card--two">
              <span className="hero__source-icon hero__source-icon--whatsapp">
                <WhatsAppIcon />
              </span>
              <span className="hero__source-copy">
                <span className="hero__source-type">WhatsApp</span>
                <strong>Pedidos no WhatsApp</strong>
                <small>Alterações e pedidos se perdem nas conversas</small>
              </span>
            </div>

            <div className="hero__source-card hero__source-card--three">
              <span className="hero__source-icon hero__source-icon--pdf">
                <DocumentIcon />
              </span>
              <span className="hero__source-copy">
                <span className="hero__source-type">Relatório</span>
                <strong>relatorio-setembro.pdf</strong>
                <small>Relatórios manuais</small>
              </span>
            </div>

            <div className="hero__source-card hero__source-card--four">
              <span className="hero__source-icon hero__source-icon--data">
                <DataIcon />
              </span>
              <span className="hero__source-copy">
                <span className="hero__source-type">Dados</span>
                <strong>base-estoque.csv</strong>
                <small>Dados desatualizados</small>
              </span>
            </div>
          </div>

          <div className="hero__connections" aria-hidden="true">
            <svg
              className="hero__connection-map"
              viewBox="0 0 760 500"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id="heroConnectionGradient"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.16" />
                  <stop offset="64%" stopColor="#0ea5e9" stopOpacity="0.58" />
                  <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              <path
                className="hero__connection-line hero__connection-line--outer"
                d="M244 88 C286 88 300 180 336 236"
              />
              <path
                className="hero__connection-line"
                d="M244 190 C289 190 308 218 336 244"
              />
              <path
                className="hero__connection-line"
                d="M244 292 C289 292 308 271 336 256"
              />
              <path
                className="hero__connection-line hero__connection-line--outer"
                d="M244 394 C286 394 300 320 336 264"
              />

              <circle
                className="hero__connection-node-ring"
                cx="340"
                cy="250"
                r="8"
              />
              <circle
                className="hero__connection-node"
                cx="340"
                cy="250"
                r="3.2"
              />

              <path
                className="hero__connection-output"
                d="M348 250 H382"
              />
              <circle
                className="hero__connection-end"
                cx="384"
                cy="250"
                r="2.8"
              />
            </svg>
          </div>

          <div className="hero__mobile-transition" aria-hidden="true">
            <span className="hero__mobile-transition-line" />
            <span className="hero__mobile-transition-label">Organizando as informações</span>
            <span className="hero__mobile-transition-arrow">↓</span>
          </div>

          <div className="hero__mobile-result">
            <span className="hero__mobile-result-kicker">Uma possibilidade</span>
            <strong>Tudo que importa em uma visão.</strong>
          </div>

          <div className="hero__dashboard" ref={dashboardRef}>
            <div className="hero__dashboard-head">
              <div className="hero__dashboard-title-wrap">
                <span className="hero__dashboard-icon">
                  <DashboardIcon />
                </span>

                <div>
                  <span className="hero__dashboard-kicker">
                    Uma possibilidade
                  </span>
                  <span className="hero__dashboard-heading">Visão geral</span>
                </div>
              </div>

              <span className="hero__dashboard-status">
                <span className="hero__status-dot" />
                Atualizado
              </span>
            </div>

            <div className="hero__metrics">
              <div className="hero__metric">
                <span className="hero__metric-icon hero__metric-icon--blue">
                  <CartIcon />
                </span>
                <div>
                  <span>Pedidos hoje</span>
                  <strong ref={ordersRef}>0</strong>
                </div>
              </div>

              <div className="hero__metric">
                <span className="hero__metric-icon hero__metric-icon--cyan">
                  <FactoryIcon />
                </span>
                <div>
                  <span>Produção</span>
                  <strong ref={productionRef}>0%</strong>
                </div>
              </div>

              <div className="hero__metric hero__metric--money">
                <span className="hero__metric-icon hero__metric-icon--sky">
                  <CoinIcon />
                </span>
                <div>
                  <span>A receber</span>
                  <strong ref={receivableRef}>R$ 0</strong>
                </div>
              </div>

              <div className="hero__metric">
                <span className="hero__metric-icon hero__metric-icon--red">
                  <AlertIcon />
                </span>
                <div>
                  <span>Pendências</span>
                  <strong ref={pendingRef}>0</strong>
                </div>
              </div>
            </div>

            <div className="hero__chart">
              <div className="hero__chart-head">
                <div>
                  <span>Movimento</span>
                  <strong>Últimos 7 dias</strong>
                </div>
                <span className="hero__chart-positive" ref={growthRef}>+0%</span>
              </div>

              <svg viewBox="0 0 320 104" role="img" aria-label="Gráfico ilustrativo de evolução">
                <defs>
                  <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2f80ff" stopOpacity="0.34" />
                    <stop offset="100%" stopColor="#2f80ff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  className="hero__chart-area"
                  d="M0 90 C24 80 39 64 60 67 C85 70 91 78 115 68 C137 59 145 39 170 42 C196 45 201 56 225 49 C250 42 254 20 280 21 C296 21 308 17 320 13 L320 104 L0 104 Z"
                />
                <path
                  className="hero__chart-line"
                  pathLength="1"
                  d="M0 90 C24 80 39 64 60 67 C85 70 91 78 115 68 C137 59 145 39 170 42 C196 45 201 56 225 49 C250 42 254 20 280 21 C296 21 308 17 320 13"
                />
              </svg>
            </div>

            <div className="hero__dashboard-foot">
              <span className="hero__dashboard-dot" />
              Tudo que importa em uma visão.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
