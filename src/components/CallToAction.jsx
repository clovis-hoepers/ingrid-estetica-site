import { WHATSAPP_LINK } from '../constants'

export function CallToAction() {
  return (
    <section
      className="py-24 sm:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2d1c0a 0%, #8B5E2C 50%, #CC6633 100%)' }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl" style={{ background: 'rgba(201,150,12,0.12)' }} />
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl" style={{ background: 'rgba(204,102,51,0.15)' }} />
      </div>

      <div className="section-wrapper relative text-center">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6"
          style={{ color: '#e8c96a', backgroundColor: 'rgba(201,150,12,0.15)', border: '1px solid rgba(201,150,12,0.35)' }}
        >
          Dê o primeiro passo
        </span>

        <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Sua transformação começa
          <span className="block font-normal italic" style={{ color: '#e8c96a' }}> com uma conversa.</span>
        </h2>

        <p className="text-base sm:text-lg mb-10 max-w-xl mx-auto" style={{ color: '#f2ebe0' }}>
          Avaliação completa de pele, protocolo personalizado e acompanhamento
          contínuo com farmacêutica especialista. Sem fórmulas genéricas—
          tudo criado exclusivamente para você.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
          <a href="#agendamento" className="btn-gold px-8 sm:px-9 py-4 text-base shadow-2xl w-full sm:w-auto justify-center">
            Agendar avaliação de pele
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-8 sm:px-9 py-4 rounded-full active:scale-95 transition-all duration-200 w-full sm:w-auto"
          >
            Falar pelo WhatsApp
          </a>
        </div>

        <p className="mt-8 text-xs" style={{ color: 'rgba(232,201,106,0.7)' }}>
          Produtos 100% certificados pela ANVISA · Joinville/SC · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}
