export type StoreReview = {
  id: string
  author: string
  text: string
  rating: number
}

export const reviews: StoreReview[] = [
  {
    id: 'luciano',
    author: 'Luciano',
    text: 'Atendimento de primeira, preços acessíveis e uma variedade enorme de produtos.',
    rating: 5,
  },
  {
    id: 'juliana',
    author: 'Juliana',
    text: 'Encontro tudo que preciso lá. Atendimento maravilhoso.',
    rating: 5,
  },
  {
    id: 'paula',
    author: 'Paula',
    text: 'Sempre compro porque é perto de casa e tem de tudo um pouco.',
    rating: 5,
  },
]