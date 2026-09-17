import { useEffect, useState } from 'react'
import { whatsappUrl } from '../../config/contact'
import { trackEvent } from '../../utils/analytics'
import './WhatsAppFloat.css'

function WhatsAppFloat() {
  const [isShown, setIsShown] = useState(false)

  useEffect(() => {
    function updateVisibility() {
      const contact = document.getElementById('contato')
      const contactBounds = contact?.getBoundingClientRect()
      const contactIsVisible = Boolean(
        contactBounds &&
          contactBounds.top < window.innerHeight &&
          contactBounds.bottom > 0,
      )
      const hasAdvanced = window.scrollY > Math.max(320, window.innerHeight * 0.55)

      setIsShown(hasAdvanced && !contactIsVisible)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })
    window.addEventListener('resize', updateVisibility)

    return () => {
      window.removeEventListener('scroll', updateVisibility)
      window.removeEventListener('resize', updateVisibility)
    }
  }, [])

  if (!isShown) {
    return null
  }

  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      onClick={() => trackEvent('whatsapp_click', { location: 'floating' })}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5a8.5 8.5 0 0 0-7.26 12.92L3.5 20.5l4.25-1.2A8.5 8.5 0 1 0 12 3.5Z" />
        <path d="M9.3 8.9c.17-.4.45-.47.7-.47h.57c.18 0 .34.1.43.3l.75 1.68c.1.22.07.4-.06.55l-.5.6c.34.73 1.2 1.62 2.02 1.96l.66-.47c.16-.12.35-.13.53-.05l1.58.73c.2.1.3.25.3.44v.5c0 .42-.28.7-.65.79-.25.06-.53.08-.82.06-2.85-.17-5.47-2.7-5.65-5.52-.02-.3 0-.58.06-.84Z" />
      </svg>
      <span>Falar no WhatsApp</span>
    </a>
  )
}

export default WhatsAppFloat
