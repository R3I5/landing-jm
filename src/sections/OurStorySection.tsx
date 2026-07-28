import { Container } from '../components/ui/Container'
import { storyMilestones } from '../data/history'

export function OurStorySection() {
  return (
    <section
      id="nossa-historia"
      className="border-b border-brand-900 bg-brand-700 text-white"
    >
      <Container className="py-12 sm:py-14 lg:py-16">
        <div className="flex items-center gap-4">
          <span
            className="h-px w-12 bg-craft"
            aria-hidden="true"
          />

          <p className="text-xs font-black tracking-[0.22em] text-brand-100 uppercase sm:text-sm">
            Nossa história
          </p>
        </div>

        <div className="mt-9 grid gap-9 lg:grid-cols-[0.48fr_1.52fr] lg:items-start lg:gap-14">
          <div className="border-t border-brand-500 pt-6 lg:border-t-0 lg:border-r lg:pt-0 lg:pr-12">
            <div className="flex items-end gap-4 lg:block">
              <p className="font-heading text-[6.5rem] leading-[0.72] font-black tracking-[-0.09em] text-brand-400 sm:text-[8rem] lg:text-[9rem]">
                15
              </p>

              <p className="pb-1 text-xs font-black tracking-[0.3em] text-brand-100 uppercase sm:text-sm lg:mt-6 lg:pb-0">
                anos de história
              </p>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-brand-200 sm:text-base">
              Uma trajetória construída com trabalho, família e
              proximidade com o bairro São Gabriel.
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl font-heading text-3xl leading-[1.03] font-black tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Uma loja que cresceu com a família e com o bairro.
            </h2>

            <div className="mt-7 grid gap-5 text-sm leading-7 text-brand-100 sm:text-base sm:leading-7">
              <p>
                Há 15 anos, Luciane fundou a Loja e Aviário João e
                Maria, no bairro São Gabriel, em Colombo. O nome foi
                escolhido em homenagem aos seus filhos, João e Maria,
                trazendo desde o início a identidade familiar que
                permanece até hoje.
              </p>

              <p>
                A loja começou em um espaço com aproximadamente metade
                do tamanho atual. Conforme o negócio cresceu, Reginaldo
                deixou seu antigo emprego para trabalhar ao lado de
                Luciane. Juntos, ampliaram o espaço, aumentaram a
                variedade de produtos e fortaleceram a relação da loja
                com a comunidade.
              </p>

              <p className="max-w-2xl border-l-2 border-craft pl-5 font-heading text-lg leading-7 font-bold text-white sm:text-xl">
                Hoje, a João e Maria continua sendo uma loja familiar,
                conhecida pela variedade e pelo atendimento próximo.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-11 grid border-t border-l border-brand-500 sm:grid-cols-3">
          {storyMilestones.map((milestone, index) => (
            <article
              key={milestone.id}
              className={`
                border-r border-b border-brand-500
                px-5 py-5 sm:px-6 sm:py-6
                ${index === 1 ? 'bg-brand-600' : ''}
              `}
            >
              <p className="text-[0.65rem] font-black tracking-[0.2em] text-craft uppercase sm:text-xs">
                {milestone.label}
              </p>

              <h3 className="mt-3 max-w-xs font-heading text-lg leading-tight font-black text-white sm:text-xl">
                {milestone.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-5 text-brand-200">
                {milestone.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}