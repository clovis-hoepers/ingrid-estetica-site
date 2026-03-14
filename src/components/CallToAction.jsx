import { WHATSAPP_LINK } from '../constants'

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-500 to-brand-400 relative overflow-hidden">
      {/* Ornamentos */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blush-300/20 blur-2xl" />

      <div className="section-wrapper relative text-center">
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-brand-200 bg-white/10 px-3 py-1 rounded-full mb-6">
          Agende sua consulta
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Você merece se sentir
          <span className="block italic font-normal text-brand-200">radiante e confiante.</span>
        </h2>
        <p className="text-brand-200 text-lg mb-10 max-w-xl mx-auto">
          Dê o primeiro passo. Converse com a Ingrid pelo WhatsApp e descubra o
          protocolo ideal para o seu rosto.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 bg-white text-brand-500 font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-brand-100 transition-all duration-200 text-sm"
        >
          <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882a.5.5 0 00.604.617l6.197-1.623A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.015-1.381l-.36-.214-3.724.976.992-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/>
          </svg>
          Falar com a Ingrid agora
        </a>
      </div>
    </section>
  )
}
