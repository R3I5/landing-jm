import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";

import logoLoja from "../assets/brand/logoLoja.jpeg";
import { Container } from "../components/ui/Container";
import { LinkButton } from "../components/ui/LinkButton";
import { store, whatsappMessages } from "../data/store";
import { buildWhatsAppUrl } from "../utils/whatsapp";

export function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl(
    store.contact.whatsappNumber,
    whatsappMessages.general,
  );

  return (
    <section id="inicio" className="border-b border-brand-200 bg-surface">
      <Container className="grid min-h-[calc(100svh-5rem)] items-center gap-14 py-16 lg:grid-cols-[1fr_0.92fr] lg:gap-20 lg:py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="h-0.5 w-10 bg-pet" aria-hidden="true" />

            <p className="text-xs font-bold tracking-[0.2em] text-brand-700 uppercase sm:text-sm">
              Há 15 anos no São Gabriel
            </p>
          </div>

          <h1 className="mt-7 font-heading text-5xl leading-[0.98] font-black tracking-[-0.04em] text-ink sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
            Pensou?
            <span className="mt-2 block text-brand-600">
              Aqui você encontra!
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            Rações, artesanato, papelaria, ferramentas e utilidades para casa em
            um só lugar, no bairro São Gabriel.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton
              href={whatsappUrl}
              external
              size="large"
              aria-label="Consultar um produto pelo WhatsApp"
            >
              <MessageCircle size={21} strokeWidth={2.2} aria-hidden="true" />
              Consultar pelo WhatsApp
              <ArrowUpRight size={18} strokeWidth={2.2} aria-hidden="true" />
            </LinkButton>

            <LinkButton
              href={store.contact.mapsUrl}
              external
              variant="secondary"
              size="large"
              aria-label="Abrir a localização da loja no Google Maps"
            >
              <MapPin size={20} strokeWidth={2.2} aria-hidden="true" />
              Como chegar
            </LinkButton>
          </div>
        </div>

        <aside
          className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none"
          aria-label="Identidade visual da Loja João e Maria"
        >
          <div className="border border-ink bg-brand-700">
            <div className="flex items-center justify-between border-b border-brand-500 px-5 py-4 text-[10px] font-bold tracking-[0.2em] text-brand-100 uppercase sm:px-7 sm:text-xs">
              <span>Loja e Aviário</span>
              <span>Desde 2011</span>
            </div>

            <div className="flex min-h-[360px] items-center justify-center px-6 py-12 sm:min-h-[440px] sm:px-10 sm:py-16">
              <div className="w-full max-w-md border border-ink bg-white px-6 py-8 sm:px-10 sm:py-12">
                <img
                  className="mx-auto max-h-56 w-full object-contain"
                  src={logoLoja}
                  alt="Logo da Loja e Aviário João e Maria"
                />
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-brand-500 px-5 py-4 sm:px-7">
              <p className="text-xs font-bold tracking-[0.18em] text-brand-100 uppercase sm:text-sm">
                São Gabriel
              </p>

              <p className="text-xs font-bold tracking-[0.18em] text-brand-100 uppercase sm:text-sm">
                Colombo — PR
              </p>
            </div>

            <div className="grid h-3 grid-cols-6" aria-hidden="true">
              <span className="bg-pet" />
              <span className="bg-craft" />
              <span className="bg-renovation" />
              <span className="bg-tools" />
              <span className="bg-housewares" />
              <span className="bg-gifts" />
            </div>
          </div>
        </aside>
      </Container>
    </section>
  );
}
