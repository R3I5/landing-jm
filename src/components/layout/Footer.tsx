import {
  ArrowUp,
  Camera,
  MessageCircle,
} from 'lucide-react'

import logoLoja from '../../assets/brand/logoLoja.jpeg'
import {
  navigationItems,
  store,
} from '../../data/store'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { Container } from '../ui/Container'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const whatsappUrl = buildWhatsAppUrl(
    store.contact.whatsappNumber,
  )

  return (
    <footer className="border-t border-brand-700 bg-brand-900 text-white">
      <Container>
        <div className="grid items-center gap-7 py-7 lg:grid-cols-[auto_1fr_auto] lg:gap-10">
          <a
            href="#inicio"
            className="
              w-fit bg-white px-3 py-2
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-craft
              focus-visible:ring-offset-3
              focus-visible:ring-offset-brand-900
            "
            aria-label="Voltar ao início da página"
          >
            <img
              className="h-12 w-auto object-contain"
              src={logoLoja}
              alt="Logo da Loja e Aviário João e Maria"
            />
          </a>

          <nav
            aria-label="Navegação do rodapé"
            className="lg:justify-self-center"
          >
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="
                      text-sm font-bold text-brand-200
                      transition-colors
                      hover:text-white
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-craft
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 lg:justify-self-end">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex size-11 items-center justify-center
                border border-brand-700 text-brand-100
                transition-colors
                hover:border-white hover:bg-white hover:text-brand-900
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-craft
              "
              aria-label="Falar com a Loja João e Maria pelo WhatsApp"
            >
              <MessageCircle
                size={19}
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>

            <a
              href={store.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex size-11 items-center justify-center
                border border-brand-700 text-brand-100
                transition-colors
                hover:border-white hover:bg-white hover:text-brand-900
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-craft
              "
              aria-label="Acessar o Instagram da Loja João e Maria"
            >
              <Camera
                size={19}
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>

            <a
              href="#inicio"
              className="
                inline-flex size-11 items-center justify-center
                border border-brand-700 text-brand-100
                transition-colors
                hover:border-white hover:bg-white hover:text-brand-900
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-craft
              "
              aria-label="Voltar ao início da página"
            >
              <ArrowUp
                size={19}
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-brand-700 py-4 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} {store.name}. Todos os direitos
            reservados.
          </p>

          <p className="font-bold text-brand-200">
            {store.slogan}
          </p>
        </div>
      </Container>
    </footer>
  )
}