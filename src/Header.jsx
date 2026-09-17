import { useEffect, useState } from 'react'
import { ArrowRight, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from './ui'
import LogoImage from './Logo'
import { NAV_LINKS, SITE, waLink } from './data'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Barra superior */}
      <div className="hidden border-b border-white/5 bg-coal-900 text-[13px] text-stone-400 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-2 transition-colors hover:text-gold-300">
              <Phone className="h-3.5 w-3.5 text-gold-500" />
              {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 transition-colors hover:text-gold-300">
              <Mail className="h-3.5 w-3.5 text-gold-500" />
              {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-gold-500" />
              {SITE.address} · {SITE.district}
            </span>
            <span className="flex items-center gap-3">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="transition-colors hover:text-gold-300">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="transition-colors hover:text-gold-300">
                <FacebookIcon className="h-4 w-4" />
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <header
        className={`sticky top-0 z-40 border-b backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? 'border-white/10 bg-coal-950/85 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.8)]'
            : 'border-white/5 bg-coal-950/60'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          <a href="#inicio" className="flex items-center" aria-label="Nardo Planejados — Início">
            <LogoImage variant="light" className="h-10 w-auto sm:h-11" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-sm font-semibold text-stone-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={waLink('Olá! Quero solicitar um orçamento de móveis planejados.')}
              target="_blank"
              rel="noreferrer"
              className="btn-shine glow-gold group inline-flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-bold text-coal-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-300"
            >
              Solicitar orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <button
            className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {open && (
          <nav className="border-t border-white/10 bg-coal-900/95 px-6 pb-6 pt-4 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-semibold text-stone-200 transition-colors hover:bg-white/5 hover:text-gold-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={waLink('Olá! Quero solicitar um orçamento de móveis planejados.')}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-bold text-coal-950"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
