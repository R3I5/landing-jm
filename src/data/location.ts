export type VisitHighlightIcon = 'parking' | 'delivery'

export type VisitHighlight = {
  id: string
  title: string
  description: string
  icon: VisitHighlightIcon
}

export const businessHours = [
  {
    id: 'weekdays',
    label: 'Segunda a sexta',
    value: '8h às 18h30',
  },
  {
    id: 'saturday',
    label: 'Sábado',
    value: '8h às 17h',
  },
  {
    id: 'sunday',
    label: 'Domingo',
    value: '8h às 11h30',
  },
  {
    id: 'holidays',
    label: 'Feriados',
    value: '8h às 11h30',
  },
] as const

export const visitHighlights: VisitHighlight[] = [
  {
    id: 'parking',
    title: 'Estacionamento próprio',
    description:
      'Aproximadamente cinco vagas disponíveis para nossos clientes.',
    icon: 'parking',
  },
  {
    id: 'delivery',
    title: 'Entregas na região',
    description:
      'São Gabriel, Monza e Jardim Curitiba, com taxa de R$ 5. Consulte disponibilidade.',
    icon: 'delivery',
  },
]