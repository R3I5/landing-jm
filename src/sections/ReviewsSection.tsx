import { ArrowUpRight, Quote, Star } from "lucide-react";

import { Container } from "../components/ui/Container";
import { LinkButton } from "../components/ui/LinkButton";
import { reviews } from "../data/reviews";
import { store } from "../data/store";

function RatingStars({ rating, label }: { rating: number; label: string }) {
  return (
    <div className="flex items-center gap-1" aria-label={label}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={
            index < rating ? "fill-stationery text-[#927600]" : "text-ink/20"
          }
          size={18}
          strokeWidth={1.8}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section id="avaliacoes" className="border-b border-ink bg-surface-alt">
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-brand-700" aria-hidden="true" />

          <p className="text-xs font-black tracking-[0.22em] text-brand-700 uppercase sm:text-sm">
            Avaliações
          </p>
        </div>

        <div className="mt-8 grid border-t border-l border-ink lg:grid-cols-[0.66fr_1.34fr]">
          <div className="border-r border-b border-ink bg-stationery px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <p className="text-xs font-black tracking-[0.2em] text-ink/70 uppercase">
              Avaliação no Google
            </p>

            <div className="mt-6 flex items-end gap-3">
              <p className="font-heading text-[5.5rem] leading-[0.75] font-black tracking-[-0.08em] text-ink sm:text-[7rem]">
                4,9
              </p>

              <p className="pb-1 text-sm font-bold text-ink/65">de 5</p>
            </div>

            <div className="mt-6">
              <RatingStars
                rating={5}
                label="Nota média de 4,9 em 5 no Google"
              />
            </div>

            <p className="mt-5 max-w-xs font-heading text-xl leading-tight font-black text-ink sm:text-2xl">
              Aproximadamente 192 avaliações de clientes.
            </p>

            <p className="mt-4 max-w-sm text-sm leading-6 text-ink/70">
              A experiência de quem já conhece a João e Maria é uma das melhores
              formas de apresentar nossa loja.
            </p>

            <div className="mt-7">
              <LinkButton
                href={store.contact.mapsUrl}
                external
                variant="dark"
                aria-label="Ver todas as avaliações da Loja João e Maria no Google"
              >
                Ver todas no Google
                <ArrowUpRight size={18} strokeWidth={2.2} aria-hidden="true" />
              </LinkButton>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-1">
            {reviews.map((review, index) => (
              <article
                key={review.id}
                className={`
                  relative border-r border-b border-ink
                  px-6 py-7 sm:px-7 lg:grid
                  lg:grid-cols-[auto_1fr_auto]
                  lg:items-start lg:gap-7
                  ${index === 1 ? "bg-white" : "bg-surface"}
                `}
              >
                <Quote
                  className="text-brand-600"
                  size={27}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />

                <div className="mt-5 lg:mt-0">
                  <blockquote className="font-heading text-lg leading-7 font-bold text-ink sm:text-xl">
                    “{review.text}”
                  </blockquote>

                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="text-sm font-black text-ink">
                      {review.author}
                    </p>

                    <span
                      className="hidden h-4 w-px bg-ink/25 sm:block"
                      aria-hidden="true"
                    />

                    <p className="text-xs font-bold tracking-[0.12em] text-muted uppercase">
                      Avaliação no Google
                    </p>
                  </div>
                </div>

                <div className="mt-5 lg:mt-0">
                  <RatingStars
                    rating={review.rating}
                    label={`${review.rating} de 5 estrelas`}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>

        <p className="mt-4 text-xs leading-5 text-muted">
          Depoimentos reproduzidos a partir de avaliações públicas da ficha da
          loja no Google.
        </p>
      </Container>
    </section>
  );
}
