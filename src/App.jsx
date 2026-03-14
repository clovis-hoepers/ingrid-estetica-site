import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { InstagramGallery } from './components/InstagramGallery'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <InstagramGallery />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
