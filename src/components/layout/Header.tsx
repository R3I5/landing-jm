import { Menu, MessageCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import logoLoja from '../../assets/brand/logoLoja.jpeg'
import { navigationItems, store } from '../../data/store'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { Container } from '../ui/Container'
import { LinkButton } from '../ui/LinkButton'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false)

  const whatsappUrl = buildWhatsAppUrl(
    store.contact.whatsappNumber,
  )

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscapeKey)

    return () => {
      window.removeEventListener('keydown', handleEscapeKey)
    }
  }, [])

  function closeMobileMenu() {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-brand-200 bg-surface">
      <Container className="flex min-h-20 items-center justify-between gap-6">
        <a
          href="#inicio"
          className="shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-3"
          aria-label="Ir para o início da página"
          onClick={closeMobileMenu}
        >
          <img
            className="h-14 w-auto max-w-[170px] object-contain"
            src={logoLoja}
            alt="Logo da Loja e Aviário João e Maria"
          />
        </a>

        <nav
          className="hidden h-20 items-stretch lg:flex"
          aria-label="Navegação principal"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                flex items-center border-b-2 border-transparent
                px-4 text-sm font-semibold text-muted
                transition-colors
                hover:border-brand-600 hover:text-brand-700
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-brand-500
                focus-visible:ring-inset
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LinkButton
            href={whatsappUrl}
            external
            aria-label="Falar com a Loja João e Maria pelo WhatsApp"
          >
            <MessageCircle
              size={19}
              strokeWidth={2.2}
              aria-hidden="true"
            />

            Falar no WhatsApp
          </LinkButton>
        </div>

        <button
          type="button"
          className="
            inline-flex size-11 items-center justify-center
            border border-brand-700 bg-surface text-brand-700
            transition-colors
            hover:bg-brand-100
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-brand-500
            focus-visible:ring-offset-3
            lg:hidden
          "
          aria-label={
            isMobileMenuOpen
              ? 'Fechar menu de navegação'
              : 'Abrir menu de navegação'
          }
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() =>
            setIsMobileMenuOpen((currentState) => !currentState)
          }
        >
          {isMobileMenuOpen ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>
      </Container>

      {isMobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-brand-200 bg-surface lg:hidden"
        >
          <Container className="py-5">
            <nav aria-label="Navegação para dispositivos móveis">
              <div className="flex flex-col">
                {navigationItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="
                      border-b border-brand-100
                      px-1 py-4 font-semibold text-ink
                      transition-colors
                      hover:border-brand-600 hover:text-brand-700
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-brand-500
                    "
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                ))}

                <LinkButton
                  href={whatsappUrl}
                  external
                  className="mt-5 w-full"
                  onClick={closeMobileMenu}
                >
                  <MessageCircle
                    size={19}
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />

                  Falar no WhatsApp
                </LinkButton>
              </div>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}