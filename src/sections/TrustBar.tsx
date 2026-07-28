import { Container } from '../components/ui/Container'

const categoryColors = [
  'bg-pet',
  'bg-craft',
  'bg-renovation',
  'bg-tools',
  'bg-housewares',
  'bg-gifts',
] as const

export function TrustBar() {
  return (
    <section
      className="
        border-y border-brand-900
        bg-brand-700 text-white
      "
      aria-label="Loja e Aviário João e Maria"
    >
      <Container className="grid min-h-24 items-center gap-5 py-5 sm:grid-cols-[auto_1fr_auto] sm:gap-8">
        <div className="flex items-center gap-4">
          

          <p className="whitespace-nowrap text-xs font-black tracking-[0.22em] text-brand-100 uppercase">
            Loja e Aviário
          </p>
        </div>

        <p className="font-heading text-xl leading-tight font-black tracking-[-0.025em] text-white sm:text-center sm:text-2xl lg:text-[1.7rem]">
          Um pouco de tudo, perto de você.
        </p>

        <div
          className="flex h-3 w-full max-w-48 sm:w-40"
          aria-hidden="true"
        >
          {categoryColors.map((color) => (
            <span
              key={color}
              className={`h-full flex-1 ${color}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}