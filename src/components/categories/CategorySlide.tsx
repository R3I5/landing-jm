import { ArrowUpRight, MessageCircle } from 'lucide-react'

import type {
  CategoryTone,
  StoreCategory,
} from '../../data/categories'
import { store } from '../../data/store'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { Container } from '../ui/Container'
import { LinkButton } from '../ui/LinkButton'
import { CategoryProductVisual } from './CategoryProductVisual'

type CategorySlideProps = {
  category: StoreCategory
  index: number
  total: number
}

const categoryBackgroundMap: Record<CategoryTone, string> = {
  pet: 'bg-pet',
  craft: 'bg-craft',
  stationery: 'bg-stationery',
  renovation: 'bg-renovation',
  tools: 'bg-tools',
  housewares: 'bg-housewares',
  gifts: 'bg-gifts',
}

export function CategorySlide({
  category,
  index,
  total,
}: CategorySlideProps) {
  const isReversed = index % 2 !== 0

  const whatsappUrl = buildWhatsAppUrl(
    store.contact.whatsappNumber,
    category.whatsappMessage,
  )

  const currentNumber = String(index + 1).padStart(2, '0')
  const totalNumber = String(total).padStart(2, '0')

  return (
    <article
      className={`border-y border-ink ${categoryBackgroundMap[category.tone]}`}
    >
      <Container className="grid items-center gap-8 py-7 sm:py-8 lg:min-h-[440px] lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 lg:py-8 xl:min-h-[460px]">
        <div className={isReversed ? 'lg:order-2' : undefined}>
          <div className="flex items-center gap-4">
            <span
              className="h-px w-12 bg-ink"
              aria-hidden="true"
            />

            <p className="text-xs font-black tracking-[0.2em] text-ink uppercase sm:text-sm">
              {category.eyebrow}
            </p>
          </div>

          <p className="mt-5 text-xs font-bold tracking-[0.18em] text-ink/65 uppercase sm:text-sm">
            Categoria {currentNumber} / {totalNumber}
          </p>

          <h3 className="mt-3 max-w-xl font-heading text-4xl leading-[0.98] font-black tracking-[-0.04em] text-ink sm:text-5xl lg:text-[3.1rem]">
            {category.name}
          </h3>

          <p className="mt-4 max-w-lg text-base leading-7 text-ink/75 lg:text-lg">
            {category.description}
          </p>

          <div className="mt-6">
            <LinkButton
              href={whatsappUrl}
              external
              variant="dark"
              size="large"
              aria-label={`Consultar produtos da categoria ${category.name} pelo WhatsApp`}
            >
              <MessageCircle
                size={20}
                strokeWidth={2.2}
                aria-hidden="true"
              />

              Consultar produtos

              <ArrowUpRight
                size={18}
                strokeWidth={2.2}
                aria-hidden="true"
              />
            </LinkButton>
          </div>

          <p className="mt-4 max-w-md text-xs leading-5 font-medium text-ink/65">
            Exemplos da variedade encontrada na loja. Consulte
            marcas, modelos e disponibilidade pelo WhatsApp.
          </p>
        </div>

        <div
          className={`
            grid min-h-[290px] grid-cols-2 grid-rows-2 gap-3
            sm:min-h-[320px]
            lg:min-h-[350px]
            xl:min-h-[370px]
            ${isReversed ? 'lg:order-1' : ''}
          `}
        >
          {category.products.map((product, productIndex) => (
            <CategoryProductVisual
              key={product.name}
              product={product}
              itemNumber={String(productIndex + 1).padStart(
                2,
                '0',
              )}
              featured={productIndex === 0}
            />
          ))}
        </div>
      </Container>
    </article>
  )
}