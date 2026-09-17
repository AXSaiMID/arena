import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  PencilRuler,
  Star,
} from 'lucide-react'
import { HERO_SLIDES, TRUST_ITEMS, waLink } from './data'
import { Magnetic, SplitWords, usePrefersReducedMotion } from './ui'

const MARQUEE_ITEMS = [
  'Projeto 3D personalizado',
  'Fabricação própria',
  '+15 anos de experiência',
  '+1.000 projetos entregues',
  'Ambiente completo',
  'Maringá e região',
]

const HERO_STATS = [
  { value: '15+', label: 'anos de mercado' },
  { value: '1.000+', label: 'projetos entregues' },
  { value: '100%', label: 'fabricação própria' },
]

export function Hero({ active = true }) {
  const [slide, setSlide] = useState(0)
  const [cycle, setCycle] = useState(0)
  const sectionRef = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [cycle])

  const goTo = (index) => {
    const total = HERO_SLIDES.length
    setSlide(((index % total) + total) % total)
    setCycle((c) => c + 1)
  }

  /* Parallax de mouse nas camadas de brilho */
  const handleMouseMove = (e) => {
    const section = sectionRef.current
    if (reduced || !section) return
    const rect = section.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    section.querySelectorAll('[data-depth]').forEach((el) => {
      const depth = parseFloat(el.dataset.depth)
      el.style.translate = `${(x * depth * 40).toFixed(1)}px ${(y * depth * 40).toFixed(1)}px`
    })
  }

  const gate = (delay) =>
    active ? 'fade-up' : 'opacity-0'

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-coal-950"
    >
      {/* Fundo cinematográfico */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((s, i) => (
          <div
            key={s.image}
            className={`hero-slide absolute inset-0 ${i === slide ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={s.image}
              alt={s.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              className={`h-full w-full object-cover ${i === slide ? 'animate-kenburns' : ''}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-coal-950/95 via-coal-950/60 to-coal-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-coal-950 via-transparent to-coal-950/60" />
      </div>

      {/* Brilhos dourados */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          data-depth="0.8"
          className="animate-drift-1 absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-gold-500/15 blur-3xl"
        />
        <div
          data-depth="1.3"
          className="animate-drift-2 absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-caramel-500/15 blur-3xl"
        />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-10 pt-32 sm:pt-36">
        <div className={`${gate()} inline-flex w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/10 py-1.5 pl-3 pr-4 backdrop-blur-md`} style={{ '--d': '100ms' }}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span key={slide} className="text-xs font-bold uppercase tracking-[0.18em] text-stone-200">
            {HERO_SLIDES[slide].eyebrow}
          </span>
        </div>

        <h1 className="mt-6 font-display text-[clamp(3.2rem,9vw,8rem)] font-extrabold leading-[0.95] tracking-tight text-white">
          <span className="block">
            <SplitWords text="Móveis que" active={active} delay={200} step={70} />
          </span>
          <span className="block">
            <SplitWords text="definem o seu" active={active} delay={450} step={70} />
          </span>
          <span className="block">
            <SplitWords
              text="espaço"
              active={active}
              delay={750}
              accentWords={['espaço']}
              accentClass="font-serif italic font-medium text-shimmer"
            />
          </span>
        </h1>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p
            className={`${gate()} max-w-md text-base leading-relaxed text-stone-300 sm:text-lg`}
            style={{ '--d': '950ms' }}
          >
            Projetos de alto padrão para quem vive arquitetura: do conceito 3D à instalação final,
            com fabricação própria em Maringá.
          </p>
          <div
            className={`${gate()} flex flex-wrap items-center gap-4`}
            style={{ '--d': '1100ms' }}
          >
            <Magnetic>
              <a
                href={waLink('Olá! Quero solicitar um orçamento de móveis planejados.')}
                target="_blank"
                rel="noreferrer"
                className="btn-shine glow-gold group inline-flex items-center gap-2.5 rounded-full bg-gold-400 px-9 py-4 text-sm font-bold uppercase tracking-wider text-coal-950 transition-all duration-300 hover:bg-gold-300"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-300 hover:border-gold-400/60 hover:text-gold-300"
            >
              Ver projetos
            </a>
          </div>
        </div>

        {/* Prova social */}
        <div
          className={`${gate()} mt-10 flex flex-wrap items-center gap-4`}
          style={{ '--d': '1250ms' }}
        >
          <div className="flex -space-x-2.5">
            {['MC', 'CH', 'FL'].map((initials) => (
              <span
                key={initials}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-gold-200 ring-2 ring-coal-950 backdrop-blur"
              >
                {initials}
              </span>
            ))}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-400 text-xs font-extrabold text-coal-950 ring-2 ring-coal-950">
              +
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-gold-400 text-gold-400" />
              ))}
            </div>
            <p className="text-sm font-medium text-stone-300">
              A escolha de <span className="font-bold text-white">arquitetos e decoradores</span> da
              região
            </p>
          </div>
        </div>
      </div>

      {/* Chips de vidro */}
      <div className="animate-floaty absolute right-8 top-28 z-10 hidden items-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-2xl backdrop-blur-md xl:flex">
        <BadgeCheck className="h-5 w-5 shrink-0 text-gold-300" />
        <span className="text-[13px] font-bold leading-tight text-white">
          +1.000
          <br />
          projetos entregues
        </span>
      </div>
      <div className="animate-floaty-delayed absolute bottom-40 right-24 z-10 hidden items-center gap-2.5 rounded-2xl border border-white/20 bg-coal-950/50 px-4 py-3 shadow-2xl backdrop-blur-md xl:flex">
        <PencilRuler className="h-5 w-5 shrink-0 text-gold-300" />
        <span className="text-[13px] font-bold leading-tight text-white">
          Projeto 3D
          <br />
          personalizado
        </span>
      </div>

      {/* Barra de stats + controle do slider */}
      <div className="relative z-10 border-t border-white/10 bg-coal-950/50 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 py-5">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {HERO_STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex items-baseline gap-2.5 ${i > 0 ? 'border-l border-white/10 pl-8' : ''}`}
              >
                <span className="font-display text-2xl font-extrabold text-gold-300">
                  {stat.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="font-display text-sm font-bold tabular-nums text-stone-300">
              0{slide + 1} <span className="text-stone-600">/ 0{HERO_SLIDES.length}</span>
            </span>
            <div className="h-px w-24 overflow-hidden rounded bg-white/15 sm:w-32">
              <div key={`${slide}-${cycle}`} className="hero-progress h-full bg-gold-400" />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => goTo(slide - 1)}
                aria-label="Imagem anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-gold-400 hover:text-gold-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => goTo(slide + 1)}
                aria-label="Próxima imagem"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:border-gold-400 hover:text-gold-300"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function TrustBar() {
  return (
    <>
      <section className="border-b border-white/5 bg-coal-950">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`group flex items-center justify-center gap-3 px-4 py-6 ${
                i % 2 === 1 ? 'border-l border-white/10' : ''
              } ${i > 1 ? 'max-lg:border-t max-lg:border-white/10' : ''} ${
                i > 0 ? 'lg:border-l lg:border-white/10' : ''
              }`}
            >
              <item.icon
                className="h-6 w-6 shrink-0 text-gold-400 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                strokeWidth={1.75}
              />
              <span>
                <span className="block text-[13px] font-bold text-white">{item.title}</span>
                <span className="block text-xs text-stone-500">{item.text}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Faixa dourada invertida */}
      <div className="overflow-hidden bg-gold-400 py-3">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center" aria-hidden={half === 1}>
              {MARQUEE_ITEMS.map((text) => (
                <span
                  key={`${half}-${text}`}
                  className="mx-6 flex items-center gap-12 whitespace-nowrap text-[12px] font-extrabold uppercase tracking-[0.24em] text-coal-950"
                >
                  {text}
                  <span className="text-[10px] text-coal-950/60">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
