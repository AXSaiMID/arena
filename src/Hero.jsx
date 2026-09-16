import { useEffect, useState } from 'react'
import { ArrowRight, BadgeCheck, Factory, Star } from 'lucide-react'
import { HERO_SLIDES, TRUST_ITEMS, waLink } from './data'
import { Reveal } from './ui'

export function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_SLIDES.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="inicio" className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-14 pt-10 lg:grid-cols-2 lg:gap-14 lg:pt-16">
        {/* Texto */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-caramel-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-caramel-700">
              <span className="h-2 w-2 rounded-full bg-caramel-500" />
              {HERO_SLIDES[slide].eyebrow}
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-espresso-900 sm:text-5xl xl:text-6xl">
              Móveis que definem o seu espaço
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
              Projetos personalizados de alto padrão, da planta à entrega. Há mais de 15 anos a
              Nardo Planejados transforma sonhos em realidade em Maringá e região.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={waLink('Olá! Quero solicitar um orçamento de móveis planejados.')}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-espresso-900 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-espresso-800"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-espresso-900/15 bg-white px-8 py-4 text-sm font-bold text-espresso-900 transition-colors hover:border-espresso-900/30"
              >
                Ver projetos
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm font-semibold text-stone-600">
                Mais de <span className="text-espresso-900">1.000 projetos</span> entregues com
                clientes satisfeitos
              </p>
            </div>
          </Reveal>
        </div>

        {/* Imagem / slider */}
        <Reveal delay={200} className="relative">
          <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-20px_rgba(32,26,21,0.35)]">
            <div className="relative aspect-[4/3] w-full sm:aspect-[5/4] lg:aspect-[4/3]">
              {HERO_SLIDES.map((s, i) => (
                <img
                  key={s.image}
                  src={s.image}
                  alt={s.alt}
                  className={`hero-slide absolute inset-0 h-full w-full object-cover ${
                    i === slide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/25 via-transparent to-transparent" />
            </div>
            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  aria-label={`Ver imagem ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === slide ? 'w-8 bg-white' : 'w-2 bg-white/60 hover:bg-white/90'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Cards flutuantes */}
          <div className="animate-floaty absolute -left-3 top-8 hidden items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:flex lg:-left-8">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-caramel-100 text-caramel-700">
              <BadgeCheck className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-bold text-espresso-900">+1.000</span>
              <span className="block text-xs font-medium text-stone-500">projetos entregues</span>
            </span>
          </div>
          <div className="animate-floaty-delayed absolute -right-2 bottom-16 hidden items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:flex lg:-right-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-espresso-900 text-linen">
              <Factory className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-base font-bold text-espresso-900">100%</span>
              <span className="block text-xs font-medium text-stone-500">fabricação própria</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function TrustBar() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-4">
      <Reveal>
        <div className="grid grid-cols-1 gap-6 rounded-3xl border border-stone-200/70 bg-white px-8 py-7 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sand text-caramel-700">
                <item.icon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-[15px] font-bold text-espresso-900">{item.title}</span>
                <span className="block text-sm text-stone-500">{item.text}</span>
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
