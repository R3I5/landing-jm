import {
  Bird,
  Bone,
  BookOpen,
  Boxes,
  CookingPot,
  Gift,
  Hammer,
  Heart,
  Highlighter,
  Paintbrush,
  Palette,
  PawPrint,
  Pencil,
  Plug,
  Ruler,
  Scissors,
  Shapes,
  Sparkles,
  Trash2,
  Utensils,
  Wrench,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import type {
  CategoryProduct,
  ProductIcon,
} from '../../data/categories'

type CategoryProductVisualProps = {
  product: CategoryProduct
  itemNumber: string
  featured?: boolean
}

const productIconMap: Record<ProductIcon, LucideIcon> = {
  paw: PawPrint,
  bird: Bird,
  bone: Bone,
  scissors: Scissors,
  palette: Palette,
  shapes: Shapes,
  book: BookOpen,
  pencil: Pencil,
  highlighter: Highlighter,
  paintbrush: Paintbrush,
  plug: Plug,
  boxes: Boxes,
  hammer: Hammer,
  wrench: Wrench,
  ruler: Ruler,
  pot: CookingPot,
  utensils: Utensils,
  trash: Trash2,
  gift: Gift,
  heart: Heart,
  sparkles: Sparkles,
}

export function CategoryProductVisual({
  product,
  itemNumber,
  featured = false,
}: CategoryProductVisualProps) {
  const Icon = productIconMap[product.icon]

  const defaultImageClassName = featured
    ? 'max-h-40 sm:max-h-44 lg:max-h-48'
    : 'max-h-20 sm:max-h-24 lg:max-h-28'

  return (
    <article
      className={`
        relative grid min-h-32 grid-rows-[minmax(0,1fr)_auto]
        overflow-hidden border border-ink bg-white p-4
        ${
          featured
            ? 'col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-0'
            : ''
        }
      `}
    >
      <span
        className="
          absolute top-1 right-3 z-10
          font-heading text-5xl font-black text-ink/5
          sm:text-6xl
        "
        aria-hidden="true"
      >
        {itemNumber}
      </span>

      <div
        className={`
          relative flex min-h-0 w-full items-center justify-center
          overflow-hidden
          ${
            featured
              ? 'py-3 sm:py-4'
              : 'py-2'
          }
        `}
      >
        {product.image ? (
          <img
            className={`
              mx-auto h-auto w-auto max-w-full object-contain
              ${product.imageClassName ?? defaultImageClassName}
            `}
            src={product.image}
            alt={product.name}
            loading="lazy"
          />
        ) : (
          <Icon
            className="text-ink"
            size={featured ? 62 : 46}
            strokeWidth={1.15}
            aria-hidden="true"
          />
        )}
      </div>

      <div className="relative border-t border-ink pt-3">
        <p className="font-heading text-base leading-tight font-black text-ink sm:text-lg">
          {product.name}
        </p>

        <p className="mt-1.5 text-xs leading-5 text-muted sm:text-sm">
          {product.detail}
        </p>
      </div>
    </article>
  )
}