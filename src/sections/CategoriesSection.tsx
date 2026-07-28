import { ArrowLeft, ArrowRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { CategorySlide } from '../components/categories/CategorySlide'
import { Container } from '../components/ui/Container'
import { categories } from '../data/categories'

export function CategoriesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canScrollPrevious, setCanScrollPrevious] =
    useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateCarouselState = useCallback(() => {
    if (!emblaApi) {
      return
    }

    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrevious(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
  if (!emblaApi) {
    return
  }

  emblaApi.on('select', updateCarouselState)
  emblaApi.on('reInit', updateCarouselState)

  const animationFrameId = window.requestAnimationFrame(() => {
    updateCarouselState()
  })

  return () => {
    window.cancelAnimationFrame(animationFrameId)

    emblaApi.off('select', updateCarouselState)
    emblaApi.off('reInit', updateCarouselState)
  }
}, [emblaApi, updateCarouselState])

  const scrollPrevious = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
    },
    [emblaApi],
  )

  function handleKeyboardNavigation(
    event: KeyboardEvent<HTMLDivElement>,
  ) {
    if (event.target !== event.currentTarget) {
      return
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      scrollPrevious()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      scrollNext()
    }
  }

  const formattedCurrent = String(selectedIndex + 1).padStart(
    2,
    '0',
  )

  const formattedTotal = String(categories.length).padStart(
    2,
    '0',
  )

  return (
    <section
      id="categorias"
      className="border-b border-ink bg-white"
    >
      <Container className="grid gap-5 py-6 sm:py-7 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
        <div className="grid gap-4 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-8">
          <div className="flex items-center gap-4">
            <span
              className="h-px w-10 bg-brand-700"
              aria-hidden="true"
            />

            <p className="whitespace-nowrap text-xs font-black tracking-[0.2em] text-brand-700 uppercase">
              Nossa variedade
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl font-heading text-2xl leading-[1.08] font-black tracking-[-0.04em] text-ink sm:text-3xl lg:text-[2rem]">
  Navegue pelas categorias e conheça alguns dos produtos que fazem
  parte da João e Maria.
</h2>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2.5 lg:justify-self-end">
          <p
            className="min-w-[4.75rem] font-heading text-lg font-black text-ink"
            aria-live="polite"
            aria-atomic="true"
          >
            {formattedCurrent}

            <span className="mx-1.5 text-ink/30">/</span>

            {formattedTotal}
          </p>

          <button
            type="button"
            className="
              inline-flex size-10 items-center justify-center
              border border-ink bg-white text-ink
              transition-colors
              hover:bg-ink hover:text-white
              disabled:cursor-not-allowed
              disabled:border-ink/20
              disabled:text-ink/25
              disabled:hover:bg-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-brand-500
              focus-visible:ring-offset-3
            "
            onClick={scrollPrevious}
            disabled={!canScrollPrevious}
            aria-label="Mostrar categoria anterior"
          >
            <ArrowLeft size={19} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="
              inline-flex size-10 items-center justify-center
              border border-ink bg-white text-ink
              transition-colors
              hover:bg-ink hover:text-white
              disabled:cursor-not-allowed
              disabled:border-ink/20
              disabled:text-ink/25
              disabled:hover:bg-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-brand-500
              focus-visible:ring-offset-3
            "
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Mostrar próxima categoria"
          >
            <ArrowRight size={19} aria-hidden="true" />
          </button>
        </div>
      </Container>

      <div
        ref={emblaRef}
        className="overflow-hidden"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Categorias de produtos da Loja João e Maria"
        tabIndex={0}
        onKeyDown={handleKeyboardNavigation}
      >
        <div className="flex touch-pan-y">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="min-w-0 flex-[0_0_100%]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${categories.length}: ${category.name}`}
            >
              <CategorySlide
                category={category}
                index={index}
                total={categories.length}
              />
            </div>
          ))}
        </div>
      </div>

      <Container>
        <div
          className="grid grid-cols-7 gap-2 py-3.5"
          aria-label="Selecionar categoria"
        >
          {categories.map((category, index) => {
            const isSelected = index === selectedIndex

            return (
              <button
                key={category.id}
                type="button"
                className="group py-2 focus-visible:outline-none"
                onClick={() => scrollTo(index)}
                aria-label={`Ir para ${category.name}`}
                aria-current={isSelected ? 'true' : undefined}
              >
                <span
                  className={`
                    block h-1 w-full transition-colors
                    ${
                      isSelected
                        ? 'bg-ink'
                        : 'bg-ink/15 group-hover:bg-ink/40'
                    }
                  `}
                />
              </button>
            )
          })}
        </div>
      </Container>
    </section>
  )
}