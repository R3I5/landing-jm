export const store = {
  name: 'Loja e Aviário João e Maria',
  shortName: 'João e Maria',
  slogan: 'Pensou? Aqui você encontra!',
  description:
    'Rações, artesanato, papelaria, ferramentas e utilidades para casa em um só lugar, há 15 anos no São Gabriel.',

  address: {
    street: 'Rua Felício Kania, 1046',
    neighborhood: 'São Gabriel',
    city: 'Colombo',
    state: 'PR',
  },

  contact: {
    whatsappDisplay: '(41) 98477-2635',
    whatsappNumber: '5541984772635',
    instagramHandle: '@lojajoaoemaria_colombo',
    instagramUrl:
      'https://www.instagram.com/lojajoaoemaria_colombo/',
    mapsUrl: 'https://maps.app.goo.gl/UnuqyEtpqJFHcJZ78',
  },
} as const

export const navigationItems = [
  {
    label: 'Início',
    href: '#inicio',
  },
  {
    label: 'Categorias',
    href: '#categorias',
  },
  {
    label: 'Nossa história',
    href: '#nossa-historia',
  },
  {
    label: 'Avaliações',
    href: '#avaliacoes',
  },
  {
    label: 'Localização',
    href: '#localizacao',
  },
] as const

export const heroCategories = [
  {
    id: 'pet',
    name: 'Pet e Aviário',
    description: 'Rações e cuidados para seus animais.',
    icon: 'pet',
    tone: 'pet',
  },
  {
    id: 'craft',
    name: 'Artesanato',
    description: 'Materiais para colocar ideias em prática.',
    icon: 'craft',
    tone: 'craft',
  },
  {
    id: 'stationery',
    name: 'Papelaria',
    description: 'Itens para estudos, escola e escritório.',
    icon: 'stationery',
    tone: 'stationery',
  },
  {
    id: 'tools',
    name: 'Ferramentas',
    description: 'Soluções para manutenção e pequenos reparos.',
    icon: 'tools',
    tone: 'tools',
  },
  {
    id: 'home',
    name: 'Casa e Utilidades',
    description: 'Produtos para facilitar o dia a dia.',
    icon: 'home',
    tone: 'home',
  },
] as const

export const trustHighlights = [
  {
    id: 'rating',
    value: '4,9',
    label: 'nota no Google',
  },
  {
    id: 'reviews',
    value: '192',
    label: 'avaliações de clientes',
  },
  {
    id: 'delivery',
    value: 'R$ 5',
    label: 'taxa de entrega',
  },
  {
    id: 'parking',
    value: '5',
    label: 'vagas para clientes',
  },
] as const

export const whatsappMessages = {
  general:
    'Olá! Encontrei a Loja João e Maria pelo site e gostaria de saber se vocês possuem:',
} as const

export type HeroCategory = (typeof heroCategories)[number]
export type TrustHighlight = (typeof trustHighlights)[number]