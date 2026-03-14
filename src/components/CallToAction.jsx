import { WHATSAPP_LINK } from '../constants'

export function CallToAction() {
  return (
    <section
      className="py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #2d1c0a 0%, #8B5E2C 50%, #CC6633 100%)' }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(201,150,12,0.12)' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl" style={{ background: 'rgba(204,102,51,0.15)' }} />
      </div>

      <div className="section-wrapper relative text-center">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-6"
          style={{ color: '#e8c96a', backgroundColor: 'rgba(201,150,12,0.15)', border: '1px solid rgba(201,150,12,0.35)' }}
        >
          Sua pele merece atenção especializada
        </span>

        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Comece seu gerenciamento
          <span className="block font-normal italic" style={{ color: '#e8c96a' }}> de pele hoje.</span>
        </h2>

        <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: '#f2ebe0' }}>
          Avaliação completa de pele, protocolo personalizado e acompanhamento
          contínuo. Tudo junto, pensado para você.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#agendamento"
            className="btn-gold px-9 py-4 text-base shadow-2xl"
          >
            Agendar avaliação de pele
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-9 py-4 rounded-full active:scale-95 transition-all duration-200"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
