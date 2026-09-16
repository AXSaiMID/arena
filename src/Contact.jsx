import { useState } from 'react'
import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import { AMBIENTES, NAV_LINKS, SITE, waLink } from './data'
import { FacebookIcon, InstagramIcon, Reveal, SectionHeading } from './ui'
import LogoImage from './Logo'

const inputClass =
  'w-full rounded-xl border border-stone-200 bg-cream px-4 py-3 text-[15px] text-espresso-900 placeholder:text-stone-400 outline-none transition-all focus:border-caramel-500 focus:ring-2 focus:ring-caramel-500/30'

/* ---------- CONTATO ---------- */
export function Contato() {
  const [form, setForm] = useState({ nome: '', telefone: '', ambiente: '', mensagem: '' })

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = [
      'Olá! Vim pelo site e quero solicitar um orçamento.',
      form.nome && `Nome: ${form.nome}`,
      form.telefone && `Telefone: ${form.telefone}`,
      form.ambiente && `Ambiente: ${form.ambiente}`,
      form.mensagem && `Mensagem: ${form.mensagem}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(waLink(text), '_blank')
  }

  const infoCards = [
    {
      icon: MapPin,
      title: 'Endereço',
      lines: [SITE.address, `${SITE.district}`, SITE.cep],
      action: { label: 'Ver no Maps', href: SITE.mapsUrl },
    },
    {
      icon: Phone,
      title: 'Telefone / WhatsApp',
      lines: [SITE.phoneDisplay],
      action: { label: 'Chamar agora', href: waLink('Olá! Quero falar com a Nardo Planejados.') },
    },
    {
      icon: Mail,
      title: 'E-mail',
      lines: [SITE.email],
      action: { label: 'Enviar e-mail', href: `mailto:${SITE.email}` },
    },
    {
      icon: Clock,
      title: 'Horário de atendimento',
      lines: ['Seg a Sex, das 8h às 18h', 'Sábado, das 8h às 12h'],
    },
  ]

  return (
    <section id="contato" className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
      <SectionHeading
        center
        eyebrow="Contato"
        title="Vamos tirar seu projeto do papel?"
        description="Preencha o formulário ou fale direto com a nossa equipe. Retornamos o mais rápido possível."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        {/* Formulário */}
        <Reveal className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl bg-white p-7 shadow-[0_10px_30px_-12px_rgba(32,26,21,0.15)] ring-1 ring-stone-200/60 sm:p-8"
          >
            <h3 className="font-display text-xl font-bold text-espresso-900">Solicitar orçamento</h3>
            <p className="mt-1.5 text-sm text-stone-500">
              Enviamos sua mensagem direto para o nosso WhatsApp.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <label htmlFor="nome" className="mb-1.5 block text-sm font-bold text-espresso-900">
                  Nome*
                </label>
                <input
                  id="nome"
                  required
                  value={form.nome}
                  onChange={update('nome')}
                  placeholder="Seu nome completo"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="telefone" className="mb-1.5 block text-sm font-bold text-espresso-900">
                  WhatsApp*
                </label>
                <input
                  id="telefone"
                  required
                  value={form.telefone}
                  onChange={update('telefone')}
                  placeholder="(44) 99999-9999"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="ambiente" className="mb-1.5 block text-sm font-bold text-espresso-900">
                  Ambiente de interesse
                </label>
                <select
                  id="ambiente"
                  value={form.ambiente}
                  onChange={update('ambiente')}
                  className={inputClass}
                >
                  <option value="">Selecione...</option>
                  {AMBIENTES.map((a) => (
                    <option key={a.label} value={a.label}>
                      {a.label}
                    </option>
                  ))}
                  <option value="Casa completa">Casa completa</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div>
                <label htmlFor="mensagem" className="mb-1.5 block text-sm font-bold text-espresso-900">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  rows={4}
                  value={form.mensagem}
                  onChange={update('mensagem')}
                  placeholder="Conte um pouco sobre o seu projeto..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-espresso-900 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-espresso-800"
              >
                Enviar pelo WhatsApp
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </form>
        </Reveal>

        {/* Informações + mapa */}
        <div className="lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            {infoCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 70}>
                <div className="h-full rounded-2xl bg-white p-6 ring-1 ring-stone-200/60">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand text-caramel-700">
                    <card.icon className="h-5 w-5" />
                  </span>
                  <h4 className="mt-4 font-display text-[15px] font-bold text-espresso-900">
                    {card.title}
                  </h4>
                  <div className="mt-1.5 space-y-0.5">
                    {card.lines.map((line) => (
                      <p key={line} className="text-sm leading-relaxed text-stone-600 break-words">
                        {line}
                      </p>
                    ))}
                  </div>
                  {card.action && (
                    <a
                      href={card.action.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-caramel-700 hover:text-caramel-800"
                    >
                      {card.action.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-stone-200/60">
              <iframe
                title="Mapa — Nardo Planejados, Maringá/PR"
                src={SITE.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0 sm:h-80"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ---------- RODAPÉ ---------- */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-espresso-950 text-stone-400">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <a href="#inicio" className="inline-block" aria-label="Nardo Planejados — Início">
              <LogoImage variant="light" className="h-12 w-auto" />
            </a>
            <p className="mt-4 text-sm leading-relaxed">{SITE.tagline}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-caramel-500 hover:text-espresso-950"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-caramel-500 hover:text-espresso-950"
              >
                <FacebookIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          {/* Acesso rápido */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Acesso rápido
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm font-medium">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-caramel-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ambientes */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Ambientes
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm font-medium">
              {AMBIENTES.map((a) => (
                <li key={a.label}>
                  <a href="#ambientes" className="transition-colors hover:text-caramel-300">
                    {a.label} planejados
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Entre em contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-caramel-400" />
                <span>
                  {SITE.address}
                  <br />
                  {SITE.district}
                  <br />
                  {SITE.cep}
                </span>
              </li>
              <li>
                <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-2.5 hover:text-caramel-300">
                  <Phone className="h-4 w-4 shrink-0 text-caramel-400" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 break-all hover:text-caramel-300">
                  <Mail className="h-4 w-4 shrink-0 text-caramel-400" />
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[13px] sm:flex-row">
          <p>© {year} Nardo Móveis Planejados Maringá · Todos os direitos reservados</p>
          <p className="text-stone-500">Maringá/PR · {SITE.instagramHandle}</p>
        </div>
      </div>
    </footer>
  )
}
