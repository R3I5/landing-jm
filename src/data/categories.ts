import accessoriesDogsImage from '../assets/products/pet/acessorios-caes.jpg'
import goldenCatsImage from '../assets/products/pet/golden-gatos.webp'
import specialDogImage from '../assets/products/pet/special-dog.png'

import aviamentos from '../assets/products/craft/aviamentos.webp'
import biscuit from '../assets/products/craft/biscuit.webp'
import euroroma from '../assets/products/craft/euroroma.png'

export type CategoryTone =
  | "pet"
  | "craft"
  | "stationery"
  | "renovation"
  | "tools"
  | "housewares"
  | "gifts";

export type ProductIcon =
  | "paw"
  | "bird"
  | "bone"
  | "scissors"
  | "palette"
  | "shapes"
  | "book"
  | "pencil"
  | "highlighter"
  | "paintbrush"
  | "plug"
  | "boxes"
  | "hammer"
  | "wrench"
  | "ruler"
  | "pot"
  | "utensils"
  | "trash"
  | "gift"
  | "heart"
  | "sparkles";

export type CategoryProduct = {
  name: string;
  detail: string;
  icon: ProductIcon;
  image?: string;
  imageClassName?: string
};

export type StoreCategory = {
  id: string;
  name: string;
  eyebrow: string;
  description: string;
  tone: CategoryTone;
  whatsappMessage: string;
  products: CategoryProduct[];
};

export const categories: StoreCategory[] = [
  {
    id: "pet-e-aviario",
    name: "Pet e Aviário",
    eyebrow: "Cuidado animal",
    description:
      "Rações e produtos para cães, gatos e pássaros, com opções para diferentes portes, idades e necessidades.",
    tone: "pet",
    whatsappMessage:
      "Olá! Encontrei a João e Maria pelo site e gostaria de consultar um produto de Pet e Aviário:",
    products: [
  {
  name: 'Ração para cães',
  detail:
    'Opções para diferentes portes e fases da vida.',
  icon: 'paw',
  image: specialDogImage,
  imageClassName:
    'max-h-40 sm:max-h-44 lg:max-h-48',
},
  {
    name: 'Ração para gatos',
    detail:
      'Alimentação para gatos em diferentes fases e necessidades.',
    icon: 'paw',
    image: goldenCatsImage,
    imageClassName:
      'max-h-24 sm:max-h-28 lg:max-h-32 w-auto',
  },
  {
    name: 'Acessórios e brinquedos',
    detail:
      'Brinquedos, comedouros e acessórios para o cuidado diário dos cães.',
    icon: 'bone',
    image: accessoriesDogsImage,
    imageClassName:
      'max-h-24 sm:max-h-28 lg:max-h-32 w-auto',
  },
],
  },
  {
    id: "artesanato",
    name: "Artesanato",
    eyebrow: "Feito à mão",
    description:
      "Materiais para crochê, tricô, amigurumi, biscuit e muitos outros projetos criativos.",
    tone: "craft",
    whatsappMessage:
      "Olá! Encontrei a João e Maria pelo site e gostaria de consultar materiais de artesanato:",
    products: [
      {
        name: "Fios e novelos",
        detail: "Materiais para crochê, tricô e amigurumi.",
        icon: "scissors",
        image: euroroma,
        imageClassName:
          "max-h-24 sm:max-h-28 lg:max-h-32 w-auto",
      },
      {
        name: "Massas para biscuit",
        detail: "Cores e materiais para modelagem artesanal.",
        icon: "palette",
        image: biscuit,
        imageClassName:
          "max-h-24 sm:max-h-28 lg:max-h-32 w-auto",
      },
      {
        name: "Agulhas, fitas e acessórios",
        detail: "Itens para completar diferentes projetos.",
        icon: "shapes",
        image: aviamentos,
        imageClassName:
          "max-h-24 sm:max-h-28 lg:max-h-32 w-auto",
      },
    ],
  },
  {
    id: "papelaria",
    name: "Papelaria e Material Escolar",
    eyebrow: "Estudo e organização",
    description:
      "Materiais para escola, faculdade, escritório e organização do dia a dia.",
    tone: "stationery",
    whatsappMessage:
      "Olá! Encontrei a João e Maria pelo site e gostaria de consultar materiais de papelaria:",
    products: [
      {
        name: "Cadernos e blocos",
        detail: "Opções para estudo, anotações e organização.",
        icon: "book",
      },
      {
        name: "Lápis e canetas",
        detail: "Materiais para escrever, desenhar e estudar.",
        icon: "pencil",
      },
      {
        name: "Marca-textos e acessórios",
        detail: "Itens escolares e para organização de estudos.",
        icon: "highlighter",
      },
    ],
  },
  {
    id: "reforma-e-manutencao",
    name: "Reforma e Manutenção",
    eyebrow: "Soluções para casa",
    description:
      "Materiais para pequenos reparos, instalações e melhorias dentro de casa.",
    tone: "renovation",
    whatsappMessage:
      "Olá! Encontrei a João e Maria pelo site e gostaria de consultar um item para reforma ou manutenção:",
    products: [
      {
        name: "Canos e conexões",
        detail: "Itens para instalações e pequenos reparos.",
        icon: "boxes",
      },
      {
        name: "Materiais elétricos",
        detail: "Fios, conectores, tomadas e acessórios.",
        icon: "plug",
      },
      {
        name: "Pintura e reparos",
        detail: "Produtos para manutenção cotidiana da casa.",
        icon: "paintbrush",
      },
    ],
  },
  {
    id: "ferramentas",
    name: "Ferramentas",
    eyebrow: "Para colocar a mão na massa",
    description:
      "Ferramentas manuais e acessórios para trabalhos, ajustes e reparos do dia a dia.",
    tone: "tools",
    whatsappMessage:
      "Olá! Encontrei a João e Maria pelo site e gostaria de consultar uma ferramenta:",
    products: [
      {
        name: "Martelos",
        detail: "Modelos para diferentes trabalhos e necessidades.",
        icon: "hammer",
      },
      {
        name: "Chaves e alicates",
        detail: "Ferramentas para montagem, manutenção e ajustes.",
        icon: "wrench",
      },
      {
        name: "Trenas e acessórios",
        detail: "Itens para medição e trabalhos manuais.",
        icon: "ruler",
      },
    ],
  },
  {
    id: "casa-e-utilidades",
    name: "Casa e Utilidades",
    eyebrow: "Praticidade no cotidiano",
    description:
      "Utensílios, organizadores e produtos que ajudam a tornar a rotina mais prática.",
    tone: "housewares",
    whatsappMessage:
      "Olá! Encontrei a João e Maria pelo site e gostaria de consultar um utensílio para casa:",
    products: [
      {
        name: "Potes e organizadores",
        detail: "Soluções para guardar e organizar.",
        icon: "pot",
      },
      {
        name: "Talheres e utensílios",
        detail: "Itens úteis para cozinha e refeições.",
        icon: "utensils",
      },
      {
        name: "Lixeiras e acessórios",
        detail: "Produtos práticos para diferentes ambientes.",
        icon: "trash",
      },
    ],
  },
  {
    id: "presentes",
    name: "Presentes",
    eyebrow: "Para momentos especiais",
    description:
      "Opções para presentear, montar lembranças e complementar ocasiões especiais.",
    tone: "gifts",
    whatsappMessage:
      "Olá! Encontrei a João e Maria pelo site e gostaria de consultar opções de presentes:",
    products: [
      {
        name: "Opções para presentear",
        detail: "Itens para diferentes ocasiões e pessoas.",
        icon: "gift",
      },
      {
        name: "Embalagens e fitas",
        detail: "Materiais para preparar e personalizar presentes.",
        icon: "heart",
      },
      {
        name: "Itens decorativos",
        detail: "Detalhes para lembranças e ocasiões especiais.",
        icon: "sparkles",
      },
    ],
  },
];
