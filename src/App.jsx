import { Header }           from './components/Header'
import { Hero }             from './components/Hero'
import { TrustBar }         from './components/TrustBar'
import { Services }         from './components/Services'
import { InstagramGallery } from './components/InstagramGallery'
import { Testimonial }      from './components/Testimonial'
import { Location }         from './components/Location'
import { CallToAction }     from './components/CallToAction'
import { Footer }           from './components/Footer'
import { WhatsAppButton }   from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fdfcfb' }}>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <InstagramGallery />
        <Testimonial />
        <Location />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
