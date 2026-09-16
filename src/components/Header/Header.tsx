import { useEffect, useState } from 'react'
import soluverxLogo from '../../assets/brand/soluverx-logo-transparent.webp'
import './Header.css'

type HeaderProps = {
  processHrefOverride?: string
  solutionsHrefOverride?: string
  faqHrefOverride?: string
  contactHrefOverride?: string
}

function Header({
  processHrefOverride,
  solutionsHrefOverride,
  faqHrefOverride,
  contactHrefOverride,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
  const isHomePage = normalizedPath === '/'
  const isDevelopmentSoftwarePage = normalizedPath === '/desenvolvimento-de-software'
  const homePrefix = isHomePage ? '' : '/'
  const processHref =
    processHrefOverride ??
    (isDevelopmentSoftwarePage ? '#processo' : `${homePrefix}#processo`)
  const solutionsHref = solutionsHrefOverride ?? `${homePrefix}#solucoes`
  const faqHref =
    faqHrefOverride ?? (isDevelopmentSoftwarePage ? '#faq' : `${homePrefix}#faq`)
  const contactHref =
    contactHrefOverride ??
    (isDevelopmentSoftwarePage ? '#contato' : `${homePrefix}#contato`)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscape)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="header">
        <div className="header__container">
          <a
            href={`${homePrefix}#inicio`}
            className="header__logo"
            onClick={closeMenu}
            aria-label="Soluverx - Início"
          >
            <img
              src={soluverxLogo}
              alt="Soluverx"
              className="header__logo-image"
              width="330"
              height="109"
              fetchPriority="high"
            />
          </a>

          <nav
            id="main-navigation"
            className={`header__nav ${
              isMenuOpen ? 'header__nav--open' : ''
            }`}
            aria-label="Navegação principal"
          >
            <a href={solutionsHref} onClick={closeMenu}>
              Soluções
            </a>

            <a href={processHref} onClick={closeMenu}>
              Como trabalhamos
            </a>

            <a href={`${homePrefix}#sobre`} onClick={closeMenu}>
              Sobre
            </a>

            <a href={faqHref} onClick={closeMenu}>
              FAQ
            </a>

            <a
              href={contactHref}
              className="header__mobile-cta"
              onClick={closeMenu}
            >
              Conte seu problema
            </a>
          </nav>

          <a href={contactHref} className="header__cta">
            Conte seu problema
          </a>

          <button
            className={`header__menu-button ${
              isMenuOpen ? 'header__menu-button--open' : ''
            }`}
            type="button"
            aria-label={
              isMenuOpen
                ? 'Fechar menu de navegação'
                : 'Abrir menu de navegação'
            }
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <button
          className="header__overlay"
          type="button"
          aria-label="Fechar menu"
          onClick={closeMenu}
        />
      )}
    </>
  )
}

export default Header
