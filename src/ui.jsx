import { useEffect, useRef } from 'react'
import { MessageCircle } from 'lucide-react'
import { waLink } from './data'

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

/* Botão flutuante de WhatsApp */
export function WhatsFloat() {
  return (
    <a
      href={waLink('Olá! Quero solicitar um orçamento de móveis planejados.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -right-1 -top-1 flex h-4 w-4">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25d366] opacity-60" />
        <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-cream bg-[#25d366]" />
      </span>
    </a>
  )
}
