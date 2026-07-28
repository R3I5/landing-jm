import {
  ArrowUpRight,
  Camera,
  Car,
  Clock3,
  MapPin,
  MessageCircle,
  Truck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import { Container } from '../components/ui/Container'
import { LinkButton } from '../components/ui/LinkButton'
import {
  businessHours,
  visitHighlights,
} from '../data/location'
import type {
  VisitHighlightIcon,
} from '../data/location'
import { store } from '../data/store'
import { buildWhatsAppUrl } from '../utils/whatsapp'

const visitIconMap: Record<
  VisitHighlightIcon,
  LucideIcon
> = {
  parking: Car,
  delivery: Truck,
}

export function LocationSection() {
  const whatsappUrl = buildWhatsAppUrl(
    store.contact.whatsappNumber,
    'Olá! Encontrei a Loja João e Maria pelo site e gostaria de tirar uma dúvida:',
  )

  return (
    <section
      id="localizacao"
      className="border-b border-ink bg-renovation text-ink"
    >
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="flex items-center gap-4">
          <span
            className="h-px w-12 bg-ink"
            aria-hidden="true"
          />

          <p className="text-xs font-black tracking-[0.22em] text-ink uppercase sm:text-sm">
            Localização e contato
          </p>
        </div>

        <div className="mt-8 grid gap-9 lg:grid-cols-[0.76fr_1.24fr] lg:items-start lg:gap-12">
          <div>
            <h2 className="max-w-xl font-heading text-4xl leading-[1.02] font-black tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.5rem]">
              Estamos no São Gabriel, em Colombo.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-ink/75 sm:text-lg">
              Venha conhecer nossa variedade pessoalmente ou fale
              com a equipe antes de sair de casa para consultar
              produtos e disponibilidade.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <LinkButton
                href={store.contact.mapsUrl}
                external
                variant="dark"
                size="large"
                aria-label="Abrir a localização da Loja João e Maria no Google Maps"
              >
                <MapPin
                  size={20}
                  strokeWidth={2.2}
                  aria-hidden="true"
                />

                Abrir no Google Maps

                <ArrowUpRight
                  size={18}
                  strokeWidth={2.2}
                  aria-hidden="true"
                />
              </LinkButton>

              <LinkButton
                href={whatsappUrl}
                external
                variant="secondary"
                size="large"
                aria-label="Falar com a Loja João e Maria pelo WhatsApp"
                className="border-ink text-ink hover:bg-white"
              >
                <MessageCircle
                  size={20}
                  strokeWidth={2.2}
                  aria-hidden="true"
                />

                Falar no WhatsApp
              </LinkButton>
            </div>

            <a
              href={store.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-7 inline-flex items-center gap-3
                border-b border-ink pb-1
                text-sm font-black text-ink
                transition-colors
                hover:border-brand-700 hover:text-brand-700
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-brand-700
                focus-visible:ring-offset-3
              "
            >
              <Camera
                size={19}
                strokeWidth={2.1}
                aria-hidden="true"
              />

              {store.contact.instagramHandle}

              <ArrowUpRight
                size={16}
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="grid border-t border-l border-ink bg-white sm:grid-cols-2">
            <article className="border-r border-b border-ink px-6 py-7 sm:col-span-2 sm:px-8">
              <p className="text-xs font-black tracking-[0.2em] text-brand-700 uppercase">
                Endereço
              </p>

              <div className="mt-5 grid gap-5 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                <MapPin
                  className="text-brand-700"
                  size={39}
                  strokeWidth={1.6}
                  aria-hidden="true"
                />

                <address className="not-italic">
                  <p className="font-heading text-2xl leading-tight font-black text-ink sm:text-3xl">
                    {store.address.street}
                  </p>

                  <p className="mt-2 text-sm font-semibold text-muted sm:text-base">
                    {store.address.neighborhood} —{' '}
                    {store.address.city}/{store.address.state}
                  </p>
                </address>

                <a
                  href={store.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex size-11 items-center justify-center
                    border border-ink bg-white text-ink
                    transition-colors
                    hover:bg-ink hover:text-white
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-brand-500
                    focus-visible:ring-offset-3
                  "
                  aria-label="Abrir endereço no Google Maps"
                >
                  <ArrowUpRight
                    size={20}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>

            <article className="border-r border-b border-ink px-6 py-7 sm:px-7">
              <div className="flex items-center gap-3">
                <Clock3
                  className="text-brand-700"
                  size={23}
                  strokeWidth={1.9}
                  aria-hidden="true"
                />

                <h3 className="font-heading text-xl font-black text-ink">
                  Horários
                </h3>
              </div>

              <dl className="mt-5">
                {businessHours.map((schedule) => (
                  <div
                    key={schedule.id}
                    className="
                      flex items-start justify-between gap-4
                      border-t border-ink/15 py-3
                      text-sm
                    "
                  >
                    <dt className="font-semibold text-muted">
                      {schedule.label}
                    </dt>

                    <dd className="shrink-0 font-black text-ink">
                      {schedule.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-4 text-xs leading-5 text-muted">
                Horários especiais podem sofrer alterações.
                Consulte nosso Instagram ou WhatsApp antes da
                visita.
              </p>
            </article>

            <div className="grid border-b border-ink">
              {visitHighlights.map((highlight) => {
                const Icon = visitIconMap[highlight.icon]

                return (
                  <article
                    key={highlight.id}
                    className="
                      grid grid-cols-[auto_1fr] gap-4
                      border-r border-b border-ink
                      px-6 py-6
                      last:border-b-0
                      sm:px-7
                    "
                  >
                    <Icon
                      className="text-brand-700"
                      size={24}
                      strokeWidth={1.9}
                      aria-hidden="true"
                    />

                    <div>
                      <h3 className="font-heading text-lg leading-tight font-black text-ink">
                        {highlight.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted">
                        {highlight.description}
                      </p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}