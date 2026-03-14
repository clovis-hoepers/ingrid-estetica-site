import { WHATSAPP_LINK } from '../constants'

export function CallToAction() {
  return (
    <section className="py-28 relative overflow-hidden"
             style={{ background: 'linear-gradient(135deg, #2e1d54 0%, #4a3280 50%, #c9956c 100%)' }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl" />
      </div>

      <div className="section-wrapper relative text-center">
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 bg-brand-600/60 border border-brand-500/60 px-4 py-1.5 rounded-full mb-6">
          Sua pele merece atenção especializada
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Comece seu gerenciamento
          <span className="block font-normal italic text-gold-300">de pele hoje.</span>
        </h2>
        <p className="text-brand-200 text-lg mb-10 max-w-xl mx-auto">
          Avaliação completa de pele, protocolo personalizado e acompanhamento
          contínuo. Tudo junto, pensado para você.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="#agendamento"
             className="inline-flex items-center gap-2 bg-gold-400 hover:bg-gold-500 text-white font-bold px-9 py-4 rounded-full shadow-2xl shadow-gold-400/40 active:scale-95 transition-all duration-200">
            Agendar avaliação de pele
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-9 py-4 rounded-full active:scale-95 transition-all duration-200">
            Falar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
