import { useCallback, useEffect, useState } from 'react'
import Lenis from 'lenis'
import Header from './Header'
import { Hero, TrustBar } from './Hero'
import { Ambientes, Depoimentos, Processo, PromoBanner, Projetos, Sobre } from './Sections'
import { Contato, Footer } from './Contact'
import {
  BackToTop,
  CustomCursor,
  Grain,
  Preloader,
  ScrollProgress,
  WhatsFloat,
} from './ui'

export default function App() {
  const [loading, setLoading] = useState(true)
  const handleDone = useCallback(() => setLoading(false), [])

  /* Trava o scroll durante o preloader */
  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  /* Scroll suave (Lenis) + âncoras suaves */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    window.__lenis = lenis
    let raf = 0
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    const onClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (!anchor) return
      const hash = anchor.getAttribute('href')
      if (!hash || hash.length < 2) return
      const target = document.querySelector(hash)
      if (!target) return
      e.preventDefault()
      lenis.scrollTo(target, { offset: -72 })
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(raf)
      lenis.destroy()
      window.__lenis = undefined
    }
  }, [])

  return (
    <div className="min-h-screen bg-coal-950 font-sans text-stone-300">
      {loading && <Preloader onDone={handleDone} />}
      <CustomCursor />
      <Grain />
      <Header />
      <main>
        <Hero active={!loading} />
        <TrustBar />
        <Ambientes />
        <PromoBanner />
        <Projetos />
        <Sobre />
        <Processo />
        <Depoimentos />
        <Contato />
      </main>
      <Footer />
      <ScrollProgress />
      <BackToTop />
      <WhatsFloat />
    </div>
  )
}
