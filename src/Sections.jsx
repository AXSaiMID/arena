import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
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
import { Reveal, SectionHeading, InstagramIcon } from './ui'

/* ---------- AMBIENTES ---------- */
export function Ambientes() {
  return (
    <section id="ambientes" className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Ambientes"
          title="Soluções para cada canto da sua casa"
          description="Do projeto ao acabamento, criamos móveis sob medida que unem estética, funcionalidade e durabilidade."
        />
        <Reveal delay={120}>
          <a
            href={waLink('Olá! Quero um projeto sob medida para minha casa.')}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-bold text-caramel-700 hover:text-caramel-800"
          >
            Falar com um especialista
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-6">
        {AMBIENTES.map((amb, i) => (
          <Reveal key={amb.label} delay={(i % 6) * 70}>
            <a
              href={waLink(`Olá! Quero um orçamento para ${amb.label.toLowerCase()} planejados.`)}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <div className="card-shadow overflow-hidden rounded-2xl transition-shadow duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={amb.image}
                    alt={amb.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-col items-center text-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-caramel-700 shadow-sm ring-1 ring-stone-200 transition-colors group-hover:bg-espresso-900 group-hover:text-linen">
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
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">
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
              <a
                href={waLink('Olá! Quero solicitar uma visita e orçamento gratuito.')}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-espresso-900 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-espresso-800"
              >
                Chamar no WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="relative min-h-[260px] lg:min-h-[380px]">
            <img
              src={IMAGES.promo}
              alt="Poltrona estofada em ambiente planejado"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#e7d3b3] via-transparent to-transparent lg:via-[#e7d3b3]/10" />
          </div>
        </div>
      </Reveal>
    </section>
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
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                filter === f
                  ? 'bg-espresso-900 text-white shadow-md'
                  : 'bg-white text-stone-600 ring-1 ring-stone-200 hover:ring-espresso-900/30'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visible.map((proj, i) => (
          <Reveal key={proj.title} delay={(i % 4) * 70}>
            <article className="group overflow-hidden rounded-2xl bg-white ring-1 ring-stone-200/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_-16px_rgba(32,26,21,0.28)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-espresso-950/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
                  {proj.category}
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
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 text-center">
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full border-2 border-espresso-900/15 bg-white px-8 py-3.5 text-sm font-bold text-espresso-900 transition-colors hover:border-espresso-900/40"
        >
          <InstagramIcon className="h-4 w-4" />
          Ver mais projetos no Instagram
        </a>
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
    <section id="empresa" className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Colagem de imagens */}
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={IMAGES.aboutMain}
              alt="Ambiente planejado pela Nardo"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/5]"
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
            <div className="mt-8 rounded-2xl bg-sand p-5 text-[15px] leading-relaxed text-espresso-800">
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
  )
}

/* ---------- PROCESSO ---------- */
export function Processo() {
  return (
    <section className="bg-espresso-900 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          center
          dark
          eyebrow="Como funciona"
          title="Do sonho à entrega em 4 passos"
          description="Um processo simples e transparente, com acompanhamento dedicado em todas as etapas."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={i * 90}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-caramel-400/40 hover:bg-white/[0.07]">
                <p className="font-display text-4xl font-extrabold text-caramel-400">{step.number}</p>
                <h3 className="mt-4 font-display text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-stone-400">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={150} className="mt-10 text-center">
          <a
            href={waLink('Olá! Quero começar meu projeto de móveis planejados.')}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-caramel-500 px-8 py-4 text-sm font-bold text-espresso-950 transition-colors hover:bg-caramel-400"
          >
            Começar meu projeto
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- DEPOIMENTOS ---------- */
export function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-sand/60 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          center
          eyebrow="Depoimentos"
          title="Quem confia, recomenda"
          description="A satisfação dos nossos clientes é o nosso maior orgulho — e o motivo de tantos projetos por indicação."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {DEPOIMENTOS.map((dep, i) => (
            <Reveal key={dep.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-[0_10px_30px_-12px_rgba(32,26,21,0.15)] ring-1 ring-stone-200/60">
                <div className="flex gap-1">
                  {[...Array(dep.stars)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-stone-600">
                  “{dep.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-stone-100 pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-espresso-900 font-display text-sm font-bold text-linen">
                    {dep.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-espresso-900">{dep.name}</span>
                    <span className="block text-[13px] text-stone-500">{dep.place}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
