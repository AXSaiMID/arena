import Header from './Header'
import { Hero, TrustBar } from './Hero'
import { Ambientes, Depoimentos, Processo, PromoBanner, Projetos, Sobre } from './Sections'
import { Contato, Footer } from './Contact'
import { WhatsFloat } from './ui'

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-stone-800">
      <Header />
      <main>
        <Hero />
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
      <WhatsFloat />
    </div>
  )
}
