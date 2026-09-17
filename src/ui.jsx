import { useEffect, useRef, useState } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { waLink } from './data'

/* Detecta preferência por menos movimento */
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)
    const onChange = (event) => setReduced(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/* Anima elementos ao entrar na viewport */
export function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ '--reveal-delay': `${delay}ms` }}>
      {children}
    </div>
  )
}

export function Eyebrow({ children, dark = false }) {
  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.22em] ${
        dark ? 'text-caramel-300' : 'text-caramel-600'
      }`}
    >
      {children}
    </p>
  )
}

export function SectionHeading({ eyebrow, title, description, dark = false, center = false }) {
  return (
    <Reveal className={center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl ${
          dark ? 'text-white' : 'text-espresso-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? 'text-stone-300' : 'text-stone-600'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}

/* Ícones de redes sociais (estilo lucide, stroke) */
export function InstagramIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function FacebookIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

/* Elemento magnético: segue sutilmente o cursor */
export function Magnetic({ children, strength = 0.12, className = 'inline-block' }) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  const handleMove = (e) => {
    const el = ref.current
    if (reduced || !el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate(${(x * strength).toFixed(1)}px, ${(y * strength).toFixed(1)}px)`
  }

  const reset = () => {
    if (ref.current) ref.current.style.transform = 'translate(0px, 0px)'
  }

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`${className} transition-transform duration-200 ease-out will-change-transform`}
    >
      {children}
    </span>
  )
}

/* Card com tilt 3D que reage ao cursor */
export function Tilt({ children, className = '', max = 8 }) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  const handleMove = (e) => {
    const el = ref.current
    if (reduced || !el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateY(-4px)`
  }

  const reset = () => {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
      style={{ transition: 'transform 0.25s ease-out', willChange: 'transform' }}
    >
      {children}
    </div>
  )
}

/* Brilho dourado que segue o cursor sobre o card */
export function Spotlight({ children, className = '' }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--my', `${e.clientY - rect.top}px`)
  }

  return (
    <div ref={ref} onMouseMove={handleMove} className={`spotlight ${className}`}>
      {children}
    </div>
  )
}

/* Parallax suave conforme o scroll */
export function Parallax({ children, speed = 0.1, className = '' }) {
  const ref = useRef(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    let raf = 0
    let visible = false
    const loop = () => {
      if (visible) {
        const rect = el.getBoundingClientRect()
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
      }
      raf = requestAnimationFrame(loop)
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    }, { rootMargin: '200px' })
    observer.observe(el)
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [reduced, speed])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }}>
      {children}
    </div>
  )
}

/* Barra de progresso de leitura no topo */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px]">
      <div
        className="h-full bg-gradient-to-r from-caramel-500 via-gold-400 to-gold-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

/* Botão voltar ao topo */
export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
      className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-espresso-900 text-linen shadow-xl ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-espresso-800 hover:ring-gold-500/50"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}

/* Letreiro gigante com texto vazado */
export function BigMarquee({ items, duration = '24s', className = '' }) {
  return (
    <div className={`overflow-hidden py-8 ${className}`}>
      <div className="animate-marquee flex w-max" style={{ animationDuration: duration }}>
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center" aria-hidden={half === 1}>
            {items.map((text) => (
              <span
                key={`${half}-${text}`}
                className="mx-5 flex items-center gap-10 whitespace-nowrap font-display text-5xl font-extrabold uppercase tracking-tight sm:text-6xl lg:text-7xl"
              >
                <span className="text-outline">{text}</span>
                <span className="text-xl text-gold-500">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

/* Botão flutuante de WhatsApp */
export function WhatsFloat() {
  return (
    <a
      href={waLink('Olá! Quero solicitar um orçamento de móveis planejados.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center rounded-full bg-[#25d366] p-4 text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.6)] transition-colors duration-300 hover:bg-[#1fb857]"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold opacity-0 transition-all duration-300 group-hover:ml-1 group-hover:mr-2.5 group-hover:max-w-[140px] group-hover:opacity-100">
        Fale conosco
      </span>
      <MessageCircle className="h-6 w-6 shrink-0" />
      <span className="absolute -right-1 -top-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25d366] opacity-60" />
        <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-cream bg-[#25d366]" />
      </span>
    </a>
  )
}
