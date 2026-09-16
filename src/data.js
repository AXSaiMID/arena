import {
  Bath,
  BedDouble,
  Briefcase,
  ChefHat,
  Sofa,
  UtensilsCrossed,
  Award,
  Factory,
  PencilRuler,
  ShieldCheck,
} from 'lucide-react'

export const WHATS_NUMBER = '5544999990983'

export const waLink = (message) =>
  `https://wa.me/${WHATS_NUMBER}?text=${encodeURIComponent(message)}`

export const SITE = {
  name: 'Nardo Planejados',
  tagline: 'Ambientes planejados, qualidade e requinte, transformando sonhos em realidade.',
  phoneDisplay: '(44) 99999-0983',
  phoneHref: '+5544999990983',
  email: 'alnmaringa@gmail.com',
  address: 'Av. São Judas Tadeu, 532',
  district: 'Jardim Copacabana — Maringá/PR',
  cep: 'CEP 87023-005',
  hours: 'Seg a Sex, das 8h às 18h · Sáb, das 8h às 12h',
  instagram: 'https://www.instagram.com/gruponardomaringa/',
  instagramHandle: '@gruponardomaringa',
  facebook: 'https://www.facebook.com/gruponardomga/',
  mapsEmbed:
    'https://www.google.com/maps?q=Av.+S%C3%A3o+Judas+Tadeu,+532,+Jardim+Copacabana,+Maring%C3%A1,+PR&output=embed',
  mapsUrl: 'https://maps.app.goo.gl/eGVFxq7WtVGBS9ZF9',
}

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Empresa', href: '#empresa' },
  { label: 'Ambientes', href: '#ambientes' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
]

const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`

export const IMAGES = {
  hero1: u('1618221195710-dd6b41faaea6', 1400),
  hero2: u('1600585152220-90363fe7e115', 1400),
  hero3: u('1616594039964-ae9021a400a0', 1400),
  promo: u('1592078615290-033ee584e267', 900),
  aboutMain: u('1600210492486-724fe5c67fb0', 1000),
  aboutSmall: u('1600607687939-ce8a6c25118c', 700),
}

export const HERO_SLIDES = [
  {
    image: IMAGES.hero1,
    alt: 'Sala de estar planejada em tons claros',
    eyebrow: 'Móveis planejados em Maringá e região',
  },
  {
    image: IMAGES.hero2,
    alt: 'Cozinha planejada moderna',
    eyebrow: 'Cozinhas sob medida para o seu dia a dia',
  },
  {
    image: IMAGES.hero3,
    alt: 'Quarto planejado aconchegante',
    eyebrow: 'Quartos que unem conforto e funcionalidade',
  },
]

export const TRUST_ITEMS = [
  {
    icon: Award,
    title: '+15 anos de experiência',
    text: 'Tradição e confiança em Maringá',
  },
  {
    icon: Factory,
    title: 'Fabricação própria',
    text: 'Do projeto à instalação',
  },
  {
    icon: PencilRuler,
    title: 'Projeto 3D personalizado',
    text: 'Visualize antes de executar',
  },
  {
    icon: ShieldCheck,
    title: 'Garantia Nardo',
    text: 'Acompanhamento do início ao fim',
  },
]

export const AMBIENTES = [
  {
    icon: ChefHat,
    label: 'Cozinhas',
    image: u('1556911220-bff31c812dba', 700),
    alt: 'Cozinha planejada',
    description: 'Funcionalidade e beleza para o coração da casa.',
  },
  {
    icon: BedDouble,
    label: 'Quartos',
    image: u('1505691938895-1758d7feb511', 700),
    alt: 'Quarto planejado',
    description: 'Conforto e aproveitamento total do espaço.',
  },
  {
    icon: Sofa,
    label: 'Salas de Estar',
    image: u('1616486338812-3dadae4b4ace', 700),
    alt: 'Sala de estar planejada',
    description: 'Aconchego para receber e relaxar.',
  },
  {
    icon: Bath,
    label: 'Banheiros',
    image: u('1620626011761-996317b8d101', 700),
    alt: 'Banheiro planejado',
    description: 'Requinte e organização nos detalhes.',
  },
  {
    icon: Briefcase,
    label: 'Escritórios',
    image: u('1524758631624-e2822e304c36', 700),
    alt: 'Escritório planejado',
    description: 'Produtividade em home office e empresas.',
  },
  {
    icon: UtensilsCrossed,
    label: 'Área Gourmet',
    image: u('1416331108676-a22ccb276e35', 700),
    alt: 'Área gourmet com churrasqueira',
    description: 'Espaço ideal para celebrar com quem você ama.',
  },
]

export const PROJECT_FILTERS = ['Todos', 'Cozinhas', 'Quartos', 'Salas', 'Banheiros', 'Escritórios']

export const PROJETOS = [
  {
    category: 'Cozinhas',
    title: 'Cozinha Planejada Jd. Monte Rei',
    location: 'Maringá/PR',
    image: u('1600489000022-c2086d79f9d4', 800),
    alt: 'Cozinha completa planejada',
  },
  {
    category: 'Quartos',
    title: 'Quarto de Casal Aconchegante',
    location: 'Maringá/PR',
    image: u('1567016432779-094069958ea5b', 800),
    alt: 'Quarto de casal planejado',
  },
  {
    category: 'Salas',
    title: 'Sala de Estar Integrada',
    location: 'Maringá/PR',
    image: u('1615873968403-89e068629265', 800),
    alt: 'Sala de estar integrada planejada',
  },
  {
    category: 'Cozinhas',
    title: 'Cozinha com Bancada em Granito',
    location: 'Maringá/PR',
    image: u('1556909114-f6e7ad7d3136', 800),
    alt: 'Cozinha planejada com bancada',
  },
  {
    category: 'Quartos',
    title: 'Quarto Solteiro Funcional',
    location: 'Maringá/PR',
    image: u('1595526114035-0d45ed16cfbf', 800),
    alt: 'Quarto solteiro planejado',
  },
  {
    category: 'Salas',
    title: 'Living em Tons Neutros',
    location: 'Maringá/PR',
    image: u('1555041469-a586c61ea9bc', 800),
    alt: 'Living planejado em tons neutros',
  },
  {
    category: 'Banheiros',
    title: 'Banheiro Moderno Planejado',
    location: 'Maringá/PR',
    image: u('1584622650111-993a426fbf0a', 800),
    alt: 'Banheiro planejado moderno',
  },
  {
    category: 'Escritórios',
    title: 'Home Office Produtivo',
    location: 'Maringá/PR',
    image: u('1497366216548-37526070297c', 800),
    alt: 'Escritório planejado',
  },
]

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Visita & briefing',
    text: 'Entendemos seu espaço, suas necessidades e seu estilo para desenhar a melhor solução.',
  },
  {
    number: '02',
    title: 'Projeto 3D',
    text: 'Você visualiza cada detalhe do ambiente antes da execução, com acabamentos reais.',
  },
  {
    number: '03',
    title: 'Fabricação própria',
    text: 'Produzimos cada peça em nosso parque industrial, com matéria-prima selecionada.',
  },
  {
    number: '04',
    title: 'Entrega & instalação',
    text: 'Instalação com equipe própria e acompanhamento até a entrega final do seu sonho.',
  },
]

export const DEPOIMENTOS = [
  {
    name: 'Mariana Costa',
    place: 'Zona 7 — Maringá',
    initials: 'MC',
    stars: 5,
    text: 'Fizeram a cozinha e os quartos do meu apartamento. O projeto 3D ficou idêntico ao resultado final. Equipe pontual, caprichosa e um atendimento que faz a diferença.',
  },
  {
    name: 'Carlos Henrique',
    place: 'Jardim Alvorada — Maringá',
    initials: 'CH',
    stars: 5,
    text: 'Contratei a Nardo para a área gourmet com churrasqueira. Acompanharam tudo do início ao fim e o acabamento superou minhas expectativas. Recomendo de olhos fechados.',
  },
  {
    name: 'Fernanda Lima',
    place: 'Centro — Maringá',
    initials: 'FL',
    stars: 5,
    text: 'Meu home office ficou perfeito para o trabalho remoto. Aproveitaram cada cantinho do espaço com muita funcionalidade. Já indiquei para toda a família.',
  },
]

export const STATS = [
  { value: 15, suffix: '+', label: 'Anos de experiência' },
  { value: 1000, suffix: '+', label: 'Projetos entregues' },
  { value: 6, suffix: '', label: 'Ambientes planejados' },
  { value: 100, suffix: '%', label: 'Fabricação própria' },
]
