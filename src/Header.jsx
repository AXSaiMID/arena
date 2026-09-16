import { useEffect, useState } from 'react'
import { ArrowRight, Mail, MapPin, Menu, Phone, X } from 'lucide-react'
import LogoImage from './Logo'
import { FacebookIcon, InstagramIcon } from './ui'
import { NAV_LINKS, SITE, waLink } from './data'

function Logo() {
  return (
    <a href="#inicio" className="flex items-center" aria-label="Nardo Planejados — Início">
      <LogoImage className="h-11 w-auto sm:h-12" />
    </a>
  )
}
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
      <div className="hidden bg-espresso-900 text-[13px] text-stone-300 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-2 hover:text-white">
              <Phone className="h-3.5 w-3.5 text-caramel-300" />
              {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-white">
              <Mail className="h-3.5 w-3.5 text-caramel-300" />
              {SITE.email}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-caramel-300" />
              {SITE.address} · {SITE.district}
            </span>
            <span className="flex items-center gap-3">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-white">
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a href={SITE.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-white">
                <FacebookIcon className="h-4 w-4" />
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Navegação principal */}
      <header
        className={`sticky top-0 z-40 border-b bg-cream/90 backdrop-blur-md transition-shadow ${
          scrolled ? 'border-stone-200 shadow-[0_8px_24px_-12px_rgba(32,26,21,0.25)]' : 'border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-stone-600 transition-colors hover:text-espresso-900"
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
              className="group inline-flex items-center gap-2 rounded-full bg-espresso-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-espresso-800"
            >
              Solicitar orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <button
            className="rounded-lg p-2 text-espresso-900 hover:bg-sand lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu mobile */}
        {open && (
          <nav className="border-t border-stone-200 bg-cream px-6 pb-6 pt-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-semibold text-stone-700 hover:bg-sand"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={waLink('Olá! Quero solicitar um orçamento de móveis planejados.')}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-espresso-900 px-6 py-3.5 text-sm font-bold text-white"
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
