import { useEffect, useRef, useState } from 'react'
import { ArrowRight, BadgeCheck, PencilRuler, Star } from 'lucide-react'
import { HERO_SLIDES, TRUST_ITEMS, waLink } from './data'
import { Magnetic, usePrefersReducedMotion } from './ui'

const MARQUEE_ITEMS = [
  'Projeto 3D personalizado',
  'Fabricação própria',
  '+15 anos de experiência',
  '+1.000 projetos entregues',
  'Ambiente completo',
  'Maringá e região',
]

export function Hero() {
  const [slide, setSlide] = useState(0)
  const sectionRef = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  /* Parallax de mouse nas camadas decorativas */
  const handleMouseMove = (e) => {
    const section = sectionRef.current
    if (reduced || !section) return
    const rect = section.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    section.querySelectorAll('[data-depth]').forEach((el) => {
      const depth = parseFloat(el.dataset.depth)
      el.style.translate = `${(x * depth * 36).toFixed(1)}px ${(y * depth * 36).toFixed(1)}px`
    })
  }

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-cream"
    >
      {/* Aurora animada */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          data-depth="0.7"
          className="animate-drift-1 absolute -left-32 top-10 h-96 w-96 rounded-full bg-caramel-200/60 blur-3xl"
        />
        <div
          data-depth="1.1"
          className="animate-drift-2 absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gold-400/25 blur-3xl"
        />
        <div
          data-depth="1.5"
          className="animate-drift-1 absolute right-[38%] top-0 h-56 w-56 rounded-full bg-caramel-300/30 blur-3xl"
        />
      </div>

      <div className="relative grid items-stretch lg:grid-cols-[1fr_1.1fr]">
        {/* Coluna de texto */}
        <div className="flex items-center px-6 py-14 sm:px-10 lg:py-24 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] lg:pr-10">
          <div className="max-w-xl">
            <div className="fade-up inline-flex items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-50/80 py-1.5 pl-3 pr-4 backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-bold text-emerald-800">
                Online agora · respondemos em minutos
              </span>
            </div>

            <p
              key={slide}
              className="fade-up mt-5 text-[13px] font-medium tracking-wide text-stone-500"
              style={{ '--d': '120ms' }}
            >
              {HERO_SLIDES[slide].eyebrow}
            </p>
            <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-espresso-900 sm:text-6xl xl:text-7xl">
              <span className="mask-line">
                <span style={{ '--d': '200ms' }}>Móveis</span>
              </span>
              <span className="mask-line">
                <span style={{ '--d': '320ms' }}>que definem</span>
              </span>
              <span className="mask-line">
                <span style={{ '--d': '440ms' }}>
                  o seu <span className="text-shimmer">espaço</span>
                </span>
              </span>
            </h1>
            <p
              className="fade-up mt-6 max-w-md text-base leading-relaxed text-stone-500 sm:text-lg"
              style={{ '--d': '580ms' }}
            >
              Projetos personalizados de alto padrão, da planta à entrega. Há mais de 15 anos
              transformando sonhos em realidade em Maringá e região.
            </p>
            <div
              className="fade-up mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
              style={{ '--d': '700ms' }}
            >
              <Magnetic>
                <a
                  href={waLink('Olá! Quero solicitar um orçamento de móveis planejados.')}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-shine group inline-flex items-center gap-2.5 rounded-full bg-espresso-900 px-9 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-espresso-800 hover:shadow-[0_18px_36px_-12px_rgba(32,26,21,0.5)]"
                >
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Magnetic>
              <a
                href="#projetos"
                className="nav-link text-sm font-bold uppercase tracking-wider text-espresso-900"
              >
                Ver projetos
              </a>
            </div>
            <div
              className="fade-up mt-10 flex flex-wrap items-center gap-4"
              style={{ '--d': '820ms' }}
            >
              <div className="flex -space-x-2.5">
                {['MC', 'CH', 'FL'].map((initials) => (
                  <span
                    key={initials}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-espresso-900 text-[10px] font-bold text-linen ring-2 ring-cream"
                  >
                    {initials}
                  </span>
                ))}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500 text-xs font-extrabold text-espresso-950 ring-2 ring-cream">
                  +
                </span>
              </div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="mt-1 text-sm font-medium text-stone-500">
                  Mais de <span className="font-bold text-espresso-900">1.000 projetos</span>{' '}
                  entregues com excelência
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna de imagem full-bleed */}
        <div className="relative min-h-[340px] overflow-hidden sm:min-h-[440px] lg:min-h-[680px]">
          {HERO_SLIDES.map((s, i) => (
            <div
              key={s.image}
              className={`hero-slide absolute inset-0 ${
                i === slide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={s.image}
                alt={s.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                className={`h-full w-full object-cover ${i === slide ? 'animate-kenburns' : ''}`}
              />
            </div>
          ))}
          {/* Transição suave entre texto e imagem */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cream via-cream/40 to-transparent lg:w-36" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-espresso-950/30 to-transparent" />

          {/* Chips de vidro */}
          <div className="animate-floaty absolute right-5 top-6 hidden items-center gap-2.5 rounded-2xl border border-white/40 bg-white/15 px-4 py-3 shadow-xl backdrop-blur-md sm:flex">
            <BadgeCheck className="h-5 w-5 shrink-0 text-white" />
            <span className="text-[13px] font-bold leading-tight text-white">
              +1.000
              <br />
              projetos entregues
            </span>
          </div>
          <div className="animate-floaty-delayed absolute bottom-20 left-5 hidden items-center gap-2.5 rounded-2xl border border-white/20 bg-espresso-950/45 px-4 py-3 shadow-xl backdrop-blur-md sm:flex">
            <PencilRuler className="h-5 w-5 shrink-0 text-gold-300" />
            <span className="text-[13px] font-bold leading-tight text-white">
              Projeto 3D
              <br />
              personalizado
            </span>
          </div>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Ver imagem ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === slide ? 'w-9 bg-white shadow' : 'w-2 bg-white/60 hover:bg-white/90'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#ambientes"
        className="fade-up absolute bottom-7 left-6 hidden items-center gap-3 lg:flex lg:left-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
        style={{ '--d': '1s' }}
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-espresso-900/20 p-1.5">
          <span className="animate-scroll-cue block h-2 w-1 rounded-full bg-gold-600" />
        </span>
        <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-stone-500">
          Role para explorar
        </span>
      </a>
    </section>
  )
}

export function TrustBar() {
  return (
    <>
      <section className="border-y border-stone-200/70 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`group flex items-center justify-center gap-3 px-4 py-5 ${
                i % 2 === 1 ? 'border-l border-stone-200/70' : ''
              } ${i > 1 ? 'max-lg:border-t max-lg:border-stone-200/70' : ''} ${
                i > 0 ? 'lg:border-l lg:border-stone-200/70' : ''
              }`}
            >
              <item.icon
                className="h-6 w-6 shrink-0 text-gold-600 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                strokeWidth={1.75}
              />
              <span>
                <span className="block text-[13px] font-bold text-espresso-900">{item.title}</span>
                <span className="block text-xs text-stone-500">{item.text}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Faixa dourada animada */}
      <div className="overflow-hidden border-b border-gold-500/20 bg-espresso-900 py-3">
        <div className="animate-marquee flex w-max">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center" aria-hidden={half === 1}>
              {MARQUEE_ITEMS.map((text) => (
                <span
                  key={`${half}-${text}`}
                  className="mx-6 flex items-center gap-12 whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.24em] text-gold-400"
                >
                  {text}
                  <span className="text-[10px] text-gold-600">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
