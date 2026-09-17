import { useEffect, useRef, useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronsLeftRight,
  MapPin,
  Quote,
  Star,
} from 'lucide-react'
import {
  AMBIENTES,
  DEPOIMENTOS,
  IMAGES,
  PROCESS_STEPS,
  PROJECT_FILTERS,
  PROJETOS,
  SITE,
  STATS,
  waLink,
} from './data'
import {
  BigMarquee,
  InstagramIcon,
  Magnetic,
  Parallax,
  Reveal,
  SectionHeading,
  Spotlight,
  Tilt,
} from './ui'

/* ---------- AMBIENTES ---------- */
export function Ambientes() {
  return (
    <section id="ambientes" className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <SectionHeading
        center
        eyebrow="Ambientes"
        title="Soluções para cada canto da sua casa"
        description="Do projeto ao acabamento, criamos móveis sob medida que unem estética, funcionalidade e durabilidade."
      />

      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
        {AMBIENTES.map((amb, i) => (
          <Reveal key={amb.label} delay={(i % 6) * 70} className="h-full">
            <Tilt max={7} className="h-full">
              <a
                href={waLink(`Olá! Quero um orçamento para ${amb.label.toLowerCase()} planejados.`)}
                target="_blank"
                rel="noreferrer"
                className="group block h-full"
              >
                <div className="card-shadow overflow-hidden rounded-2xl ring-1 ring-transparent transition-all duration-300 group-hover:ring-gold-500/50">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={amb.image}
                      alt={amb.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <span className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-2 whitespace-nowrap rounded-full bg-white/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-espresso-900 opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      Pedir orçamento
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex flex-col items-center text-center">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-caramel-700 shadow-sm ring-1 ring-stone-200 transition-all duration-300 group-hover:bg-espresso-900 group-hover:text-gold-400 group-hover:ring-espresso-900">
                    <amb.icon className="h-5 w-5" />
                  </span>
                  <span className="mt-2 font-display text-[15px] font-bold text-espresso-900">
                    {amb.label}
                  </span>
                  <span className="mt-1 hidden text-xs leading-relaxed text-stone-500 sm:block">
                    {amb.description}
                  </span>
                </div>
              </a>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------- BANNER PROMOCIONAL ---------- */
export function PromoBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-4">
      <Reveal>
        <div className="relative grid overflow-hidden rounded-[2rem] bg-gradient-to-br from-caramel-200 via-[#e7d3b3] to-sand lg:grid-cols-2">
          <div className="relative z-10 flex flex-col justify-center p-8 sm:p-12 lg:p-14">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-caramel-800">
              Orçamento gratuito
            </p>
            <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight text-espresso-900 sm:text-4xl">
              Sua casa planejada do jeito que você sonhou
            </h3>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-espresso-700">
              Solicite uma visita sem compromisso e receba um projeto personalizado, com as melhores
              condições de pagamento.
            </p>
            <div className="mt-7">
              <Magnetic>
                <a
                  href={waLink('Olá! Quero solicitar uma visita e orçamento gratuito.')}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shine group inline-flex items-center gap-2 rounded-full bg-espresso-900 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-espresso-800"
                >
                  Chamar no WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Magnetic>
            </div>
          </div>
          <div className="relative min-h-[260px] overflow-hidden lg:min-h-[380px]">
            <Parallax speed={-0.05} className="absolute inset-0">
              <img
                src={IMAGES.promo}
                alt="Poltrona estofada em ambiente planejado"
                loading="lazy"
                className="h-full w-full scale-[1.15] object-cover"
              />
            </Parallax>
            <div className="absolute inset-0 bg-gradient-to-r from-[#e7d3b3] via-transparent to-transparent lg:via-[#e7d3b3]/10" />
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ---------- COMPARADOR 3D x REAL ---------- */
function CompareSlider() {
  const ref = useRef(null)
  const dragging = useRef(false)
  const [pos, setPos] = useState(50)
  const image = PROJETOS[2].image

  const update = (clientX) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setPos(Math.min(94, Math.max(6, ((clientX - rect.left) / rect.width) * 100)))
  }

  return (
    <div className="mt-16">
      <Reveal className="mx-auto max-w-2xl text-center">
        <EyebrowLike />
        <h3 className="mt-3 font-display text-2xl font-bold text-espresso-900 sm:text-3xl">
          Do projeto 3D ao resultado final
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-stone-600">
          Arraste o controle e veja a fidelidade entre o projeto apresentado e o ambiente entregue.
        </p>
      </Reveal>
      <Reveal delay={120}>
        <div
          ref={ref}
          onPointerDown={(e) => {
            dragging.current = true
            e.currentTarget.setPointerCapture(e.pointerId)
            update(e.clientX)
          }}
          onPointerMove={(e) => {
            if (dragging.current) update(e.clientX)
          }}
          onPointerUp={() => {
            dragging.current = false
          }}
          onPointerCancel={() => {
            dragging.current = false
          }}
          className="relative mt-8 aspect-[16/12] cursor-ew-resize select-none overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-stone-900/10 touch-none sm:aspect-[16/8]"
        >
          {/* Resultado final */}
          <img
            src={image}
            alt="Resultado final do ambiente"
            draggable={false}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Projeto 3D */}
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <img
              src={image}
              alt="Projeto 3D do ambiente"
              draggable={false}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ filter: 'grayscale(0.9) sepia(0.25) contrast(1.05) brightness(1.03)' }}
            />
            <div className="absolute inset-0 bg-caramel-200/20" />
          </div>
          {/* Linha + controle */}
          <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
            <div className="absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_20px_rgba(0,0,0,0.4)]" />
            <div className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-espresso-900 shadow-xl ring-4 ring-white/30">
              <ChevronsLeftRight className="h-5 w-5" />
            </div>
          </div>
          {/* Etiquetas */}
          <span className="absolute left-4 top-4 rounded-full bg-espresso-950/80 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-white backdrop-blur">
            Projeto 3D
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-gold-500/90 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-espresso-950 backdrop-blur">
            Resultado final
          </span>
        </div>
      </Reveal>
    </div>
  )
}

function EyebrowLike() {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.22em] text-caramel-600">Interativo</p>
  )
}

/* ---------- PROJETOS ---------- */
export function Projetos() {
  const [filter, setFilter] = useState('Todos')
  const visible = filter === 'Todos' ? PROJETOS : PROJETOS.filter((p) => p.category === filter)

  return (
    <section id="projetos" className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <SectionHeading
        center
        eyebrow="Portfólio"
        title="Projetos em destaque"
        description="Uma seleção de ambientes executados pela nossa equipe. Cada projeto é único — feito sob medida para cada cliente."
      />

      <Reveal delay={100}>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {PROJECT_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
                filter === f
                  ? 'scale-105 bg-espresso-900 text-white shadow-lg'
                  : 'bg-white text-stone-600 ring-1 ring-stone-200 hover:-translate-y-0.5 hover:ring-gold-500/60'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((proj, i) => (
          <Reveal key={proj.title} delay={(i % 4) * 70} className="h-full">
            <Tilt max={6} className="h-full">
              <article className="group h-full overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-16px_rgba(32,26,21,0.28)] hover:ring-gold-500/40">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute left-3 top-3 rounded-full bg-espresso-950/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
                    {proj.category}
                  </span>
                  <span className="absolute bottom-3 right-3 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-espresso-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-[15px] font-bold leading-snug text-espresso-900">
                    {proj.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-stone-500">
                    <MapPin className="h-3.5 w-3.5 text-caramel-600" />
                    {proj.location}
                  </p>
                </div>
              </article>
            </Tilt>
          </Reveal>
        ))}
      </div>

      <CompareSlider />

      <Reveal className="mt-10 text-center">
        <Magnetic>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-espresso-900/15 bg-white px-8 py-3.5 text-sm font-bold text-espresso-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-500/60 hover:shadow-lg"
          >
            <InstagramIcon className="h-4 w-4" />
            Ver mais projetos no Instagram
          </a>
        </Magnetic>
      </Reveal>
    </section>
  )
}

/* ---------- EMPRESA ---------- */
function useCountUp(target, start, duration = 1600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let frame
    const t0 = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [start, target, duration])
  return value
}

function Stat({ stat, start }) {
  const value = useCountUp(stat.value, start)
  return (
    <div className="text-center sm:text-left">
      <p className="font-display text-3xl font-extrabold text-espresso-900 sm:text-4xl">
        {value.toLocaleString('pt-BR')}
        {stat.suffix}
      </p>
      <p className="mt-1 text-sm font-medium text-stone-500">{stat.label}</p>
    </div>
  )
}

const CHECKLIST = [
  'Parque industrial próprio em Maringá/PR',
  'Equipe qualificada do projeto à entrega',
  'Ambiente completo: móveis, granitos, gesso e elétrica',
  'Atendimento ágil e pós-obra dedicado',
]

export function Sobre() {
  const statsRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <BigMarquee
        items={['Cozinhas', 'Quartos', 'Salas', 'Banheiros', 'Escritórios', 'Gourmet']}
      />
      <section id="empresa" className="bg-white py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
          {/* Colagem de imagens */}
          <Reveal className="relative">
            <Parallax speed={0.05}>
              <div className="relative">
                <div className="overflow-hidden rounded-[2rem]">
                  <img
                    src={IMAGES.aboutMain}
                    alt="Ambiente planejado pela Nardo"
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105 sm:aspect-[5/5]"
                  />
                </div>
                <div className="absolute -bottom-8 -right-2 hidden w-56 overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:block lg:-right-8 lg:w-64">
                  <img
                    src={IMAGES.aboutSmall}
                    alt="Detalhe de ambiente planejado"
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <div className="absolute -left-2 top-8 rounded-2xl bg-espresso-900 px-6 py-4 text-center shadow-xl lg:-left-6">
                  <p className="font-display text-3xl font-extrabold text-linen">15+</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-caramel-300">
                    anos de experiência
                  </p>
                </div>
                {/* Selo giratório */}
                <div className="absolute -bottom-6 -left-4 hidden h-36 w-36 items-center justify-center rounded-full bg-espresso-900 shadow-2xl sm:flex lg:-left-10">
                  <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 h-full w-full p-2">
                    <defs>
                      <path
                        id="badge-circle"
                        d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text fontSize="9.5" fontWeight="700" letterSpacing="2.5" className="fill-gold-400">
                      <textPath href="#badge-circle">MÓVEIS PLANEJADOS • ALTO PADRÃO •</textPath>
                    </text>
                  </svg>
                  <ArrowDownRight className="h-7 w-7 text-gold-400" />
                </div>
              </div>
            </Parallax>
          </Reveal>

          {/* Texto */}
          <div>
            <SectionHeading
              eyebrow="A empresa"
              title="Grupo Nardo: tradição e qualidade há mais de 15 anos"
              description="Especializada em projetos de alto padrão, a Nardo Planejados conta com profissionais qualificados que acompanham cada etapa — da planta à entrega."
            />
            <Reveal delay={120}>
              <p className="mt-5 leading-relaxed text-stone-600">
                Fabricamos nossos móveis desde a criação do projeto e o tratamento da matéria-prima
                até a produção e a instalação na casa do cliente. É assim que garantimos a qualidade
                de cada entrega, do começo ao fim — e por isso quem faz móveis conosco sempre volta
                para novos projetos.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {CHECKLIST.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] font-semibold text-espresso-900">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-caramel-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-8 rounded-2xl bg-sand p-5 text-[15px] leading-relaxed text-espresso-800 ring-1 ring-caramel-200">
                <strong className="font-bold">Solução completa:</strong> além dos móveis planejados,
                o Grupo Nardo executa o ambiente por inteiro — granitos, molduras em gesso, instalação
                elétrica, ar-condicionado e até painéis solares.
              </div>
            </Reveal>

            <div ref={statsRef} className="mt-9 grid grid-cols-2 gap-6 border-t border-stone-200 pt-8 sm:grid-cols-4">
              {STATS.map((s) => (
                <Stat key={s.label} stat={s} start={statsVisible} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------- PROCESSO ---------- */
export function Processo() {
  return (
    <section className="relative overflow-hidden bg-espresso-900 py-16 lg:py-24">
      <div aria-hidden="true" className="blueprint-grid absolute inset-0" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-caramel-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          center
          dark
          eyebrow="Como funciona"
          title="Do sonho à entrega em 4 passos"
          description="Um processo simples e transparente, com acompanhamento dedicado em todas as etapas."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 90} className="h-full">
              <Spotlight className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/40 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_-12px_rgba(198,161,28,0.25)]">
                <p className="bg-gradient-to-br from-gold-300 to-gold-600 bg-clip-text font-display text-5xl font-extrabold text-transparent">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-stone-400">{step.text}</p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150} className="mt-10 text-center">
          <Magnetic>
            <a
              href={waLink('Olá! Quero começar meu projeto de móveis planejados.')}
              target="_blank"
              rel="noreferrer"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-bold text-espresso-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-[0_18px_40px_-12px_rgba(198,161,28,0.6)]"
            >
              Começar meu projeto
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- DEPOIMENTOS ---------- */
export function Depoimentos() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = DEPOIMENTOS.length

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => setIndex((v) => (v + 1) % total), 6000)
    return () => clearInterval(timer)
  }, [paused, total])

  const dep = DEPOIMENTOS[index]

  return (
    <section id="depoimentos" className="overflow-hidden bg-sand/60 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          center
          eyebrow="Depoimentos"
          title="Quem confia, recomenda"
          description="A satisfação dos nossos clientes é o nosso maior orgulho — e o motivo de tantos projetos por indicação."
        />
        <Reveal delay={120}>
          <div
            className="relative mx-auto mt-12 max-w-3xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <figure
              key={index}
              className="fade-up rounded-[2rem] bg-white px-8 py-10 text-center shadow-xl ring-1 ring-stone-200/60 sm:px-14"
            >
              <Quote className="mx-auto h-9 w-9 fill-gold-400/30 text-gold-500" />
              <div className="mt-4 flex justify-center gap-1">
                {[...Array(dep.stars)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-5 text-lg leading-relaxed text-espresso-900 sm:text-xl">
                “{dep.text}”
              </blockquote>
              <figcaption className="mt-7 flex items-center justify-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-espresso-900 font-display text-sm font-bold text-linen ring-2 ring-gold-500/40">
                  {dep.initials}
                </span>
                <span className="text-left">
                  <span className="block text-sm font-bold text-espresso-900">{dep.name}</span>
                  <span className="block text-[13px] text-stone-500">{dep.place}</span>
                </span>
              </figcaption>
            </figure>

            <div className="mt-7 flex items-center justify-center gap-4">
              <button
                onClick={() => setIndex((index - 1 + total) % total)}
                aria-label="Depoimento anterior"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-espresso-900 ring-1 ring-stone-200 transition-all duration-300 hover:-translate-x-0.5 hover:bg-espresso-900 hover:text-white"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {DEPOIMENTOS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    aria-label={`Ver depoimento ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? 'w-8 bg-espresso-900' : 'w-2 bg-stone-300 hover:bg-stone-400'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setIndex((index + 1) % total)}
                aria-label="Próximo depoimento"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-espresso-900 ring-1 ring-stone-200 transition-all duration-300 hover:translate-x-0.5 hover:bg-espresso-900 hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
