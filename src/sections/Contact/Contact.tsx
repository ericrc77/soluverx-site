import { useEffect, useMemo, useRef, useState, type SyntheticEvent } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { whatsappUrl } from '../../config/contact'
import { trackEvent } from '../../utils/analytics'
import './Contact.css'

type FieldErrors = {
  name?: string
  company?: string
  whatsapp?: string
  email?: string
  message?: string
}

function isValidEmail(value: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
  return emailPattern.test(value)
}

function getPhoneDigits(value: string) {
  return value.replace(/\D/g, '')
}

function isValidWhatsApp(value: string) {
  const digits = getPhoneDigits(value)

  if (digits.length < 10 || digits.length > 13) {
    return false
  }

  if (/^(\d)\1+$/.test(digits)) {
    return false
  }

  return true
}

function Contact() {
  const [state, handleSubmit] = useForm('mwlkzzvr')
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [showMobileForm, setShowMobileForm] = useState(false)
  const trackedSuccessRef = useRef(false)

  useEffect(() => {
    if (state.succeeded && !trackedSuccessRef.current) {
      trackEvent('form_submit_success')
      trackedSuccessRef.current = true
    }
  }, [state.succeeded])

  const statusText = useMemo(() => {
    if (state.submitting) {
      return 'Enviando...'
    }

    return 'Enviar mensagem'
  }, [state.submitting])

  function validate(form: HTMLFormElement) {
    const data = new FormData(form)

    const name = String(data.get('name') ?? '').trim()
    const company = String(data.get('company') ?? '').trim()
    const whatsapp = String(data.get('whatsapp') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const errors: FieldErrors = {}

    if (!name) {
      errors.name = 'Informe seu nome.'
    } else if (name.length < 2) {
      errors.name = 'Seu nome precisa ter pelo menos 2 caracteres.'
    }

    if (company && company.length < 2) {
      errors.company = 'Informe um nome de empresa válido.'
    }

    if (!whatsapp) {
      errors.whatsapp = 'Informe seu WhatsApp.'
    } else if (!isValidWhatsApp(whatsapp)) {
      errors.whatsapp = 'Digite um WhatsApp válido com DDD.'
    }

    if (email && !isValidEmail(email)) {
      errors.email = 'Digite um email válido.'
    }

    if (!message) {
      errors.message = 'Conte o que está dando trabalho.'
    } else if (message.length < 20) {
      errors.message =
        'Conte um pouco mais sobre o problema. Use pelo menos 20 caracteres.'
    }

    setFieldErrors(errors)

    return Object.keys(errors).length === 0
  }

  async function onSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget

    if (!validate(form)) {
      return
    }

    setFieldErrors({})
    setSubmitError(null)

    try {
      await handleSubmit(new FormData(form))
    } catch {
      setSubmitError(
        'Não foi possível enviar a mensagem agora. Tente novamente ou fale pelo WhatsApp.',
      )
    }
  }

  return (
    <section className="contact" id="contato">
      <div className="contact__container">
        <div className="contact__intro" data-reveal="left">
          <span className="contact__eyebrow">Vamos conversar</span>

          <h2 className="contact__title">
            Vamos entender o que sua operação precisa?
          </h2>

          <p className="contact__lead">
            Você não precisa chegar com a solução pronta. Explique o problema,
            como sua operação funciona hoje e o que quer melhorar. A conversa
            começa por essa necessidade.
          </p>

          <div className="contact__channels">
            <a className="contact__channel" href="mailto:soluverx@gmail.com">
              <span className="contact__channel-icon contact__channel-icon--email" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
                  <path d="m4.5 7 7.5 6 7.5-6" />
                </svg>
              </span>
              <span className="contact__channel-copy">
                <span className="contact__channel-label">Email</span>
                <span className="contact__channel-value">soluverx@gmail.com</span>
              </span>
            </a>

            <a
              className="contact__channel"
              href={whatsappUrl}
              onClick={() => trackEvent('whatsapp_click', { location: 'contact' })}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__channel-icon contact__channel-icon--whatsapp" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3.5a8.5 8.5 0 0 0-7.26 12.92L3.5 20.5l4.25-1.2A8.5 8.5 0 1 0 12 3.5Z" />
                  <path d="M9.3 8.9c.17-.4.45-.47.7-.47h.57c.18 0 .34.1.43.3l.75 1.68c.1.22.07.4-.06.55l-.5.6c.34.73 1.2 1.62 2.02 1.96l.66-.47c.16-.12.35-.13.53-.05l1.58.73c.2.1.3.25.3.44v.5c0 .42-.28.7-.65.79-.25.06-.53.08-.82.06-2.85-.17-5.47-2.7-5.65-5.52-.02-.3 0-.58.06-.84Z" />
                </svg>
              </span>
              <span className="contact__channel-copy">
                <span className="contact__channel-label">WhatsApp</span>
                <span className="contact__channel-value">Falar pelo WhatsApp</span>
              </span>
            </a>
          </div>

          <div className="contact__mobile-actions">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={() => trackEvent('whatsapp_click', { location: 'contact_mobile' })}>
              Falar pelo WhatsApp
              <span aria-hidden="true">→</span>
            </a>

            <button
              type="button"
              aria-expanded={showMobileForm}
              aria-controls="contact-form-wrap"
              onClick={() => setShowMobileForm((current) => !current)}
            >
              {showMobileForm ? 'Ocultar formulário' : 'Prefiro enviar pelo formulário'}
            </button>
          </div>
        </div>

        <div
          id="contact-form-wrap"
          className={`contact__form-wrap${showMobileForm ? ' contact__form-wrap--mobile-open' : ''}`}
          data-reveal="right"
          data-reveal-delay="1"
        >
          {state.succeeded ? (
            <div className="contact__success" role="status">
              <span className="contact__success-icon" aria-hidden="true">
                ✓
              </span>

              <span className="contact__success-kicker">Mensagem enviada</span>

              <h3>Recebi seu contato.</h3>

              <p>
                Vou ler o que você enviou e retornar pelo WhatsApp informado.
              </p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={onSubmit} noValidate>
              <div className="contact__form-head">
                <span>Primeiro contato</span>
                <p>Preencha só o necessário para começarmos.</p>
              </div>

              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="contact-name">
                    Seu nome <span className="contact__required">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Como podemos te chamar?"
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={
                      fieldErrors.name ? 'contact-name-error' : undefined
                    }
                  />
                  {fieldErrors.name && (
                    <span
                      className="contact__field-error"
                      id="contact-name-error"
                      role="alert"
                    >
                      {fieldErrors.name}
                    </span>
                  )}
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-company">
                    Empresa <span>(opcional)</span>
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Nome da empresa"
                    aria-invalid={Boolean(fieldErrors.company)}
                    aria-describedby={
                      fieldErrors.company ? 'contact-company-error' : undefined
                    }
                  />
                  {fieldErrors.company && (
                    <span
                      className="contact__field-error"
                      id="contact-company-error"
                      role="alert"
                    >
                      {fieldErrors.company}
                    </span>
                  )}
                </div>
              </div>

              <div className="contact__row">
                <div className="contact__field">
                  <label htmlFor="contact-whatsapp">
                    WhatsApp <span className="contact__required">*</span>
                  </label>
                  <input
                    id="contact-whatsapp"
                    name="whatsapp"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(33) 99999-9999"
                    aria-invalid={Boolean(fieldErrors.whatsapp)}
                    aria-describedby={
                      fieldErrors.whatsapp ? 'contact-whatsapp-error' : undefined
                    }
                  />
                  {fieldErrors.whatsapp && (
                    <span
                      className="contact__field-error"
                      id="contact-whatsapp-error"
                      role="alert"
                    >
                      {fieldErrors.whatsapp}
                    </span>
                  )}
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-email">
                    Email <span>(opcional)</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="seuemail@empresa.com"
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={
                      fieldErrors.email ? 'contact-email-error' : undefined
                    }
                  />
                  {fieldErrors.email && (
                    <span
                      className="contact__field-error"
                      id="contact-email-error"
                      role="alert"
                    >
                      {fieldErrors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message">
                  O que está dando trabalho?{' '}
                  <span className="contact__required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Pode explicar do seu jeito. O que acontece hoje e o que você gostaria que fosse mais simples?"
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={
                    fieldErrors.message ? 'contact-message-error' : undefined
                  }
                />
                {fieldErrors.message && (
                  <span
                    className="contact__field-error"
                    id="contact-message-error"
                    role="alert"
                  >
                    {fieldErrors.message}
                  </span>
                )}
              </div>

              <ValidationError
                className="contact__formspree-error"
                prefix="Formulário"
                field="form"
                errors={state.errors}
              />

              {submitError && (
                <p className="contact__submit-error" role="alert">
                  {submitError}
                </p>
              )}

              <div className="contact__form-footer">
                <button
                  className="contact__submit"
                  type="submit"
                  disabled={state.submitting}
                >
                  <span>{statusText}</span>
                  <span aria-hidden="true">→</span>
                </button>

                <p>Responderemos pelo WhatsApp informado.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
