import heroPic from '../images/ingrid.jpeg'
import { WHATSAPP_LINK } from '../constants'

const HERO_PHOTO_FALLBACK = 'https://placehold.co/480x640/E5DEFF/7E69AB?text=Ingrid+Melo'

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero pt-16 pb-28">
      {/* Blob ornamental fundo */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30"
           style={{ background: 'radial-gradient(circle, #E5DEFF 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-20"
           style={{ background: 'radial-gradient(circle, #FFDEE2 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
           style={{ background: 'radial-gradient(circle, #c9956c 0%, transparent 60%)' }} />

      <div className="section-wrapper relative grid gap-14 md:grid-cols-[1.15fr,1fr] items-center">
        {/* ── Texto ────────────────────────────── */}
        <div>
          <span className="section-tag animate-fade-up">Joinville · SC · Farmacêutica Esteta</span>

          <h1 className="font-playfair text-5xl md:text-[3.6rem] font-bold text-brand-500 leading-[1.15] mb-5 animate-fade-up"
              style={{ animationDelay: '0.1s' }}>
            Realce sua beleza
            <span className="block font-normal italic text-brand-300"> com quem entende</span>
            <span className="block font-bold"> do seu rosto.</span>
          </h1>

          <div className="divider-gold" />

          <p className="text-brand-400 text-lg leading-relaxed mb-8 max-w-md animate-fade-up"
             style={{ animationDelay: '0.2s' }}>
            Protocolos personalizados de rejuvenescimento facial, aplicados com
            precisão científica e sensibilidade estética para resultados discretos
            e duradouros.
          </p>

          {/* Microprovas sociais */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <div className="flex -space-x-2">
              {['#c9956c','#9b87f5','#f687b3','#7E69AB'].map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                     style={{ backgroundColor: c }}>✓</div>
              ))}
            </div>
            <p className="text-sm text-brand-400">
              <span className="font-semibold text-brand-500">+500 pacientes</span> já transformaram seu visual
            </p>
          </div>

          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882a.5.5 0 00.604.617l6.197-1.623A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.015-1.381l-.36-.214-3.724.976.992-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Agendar avaliação gratuita
            </a>
            <a href="#portfolio" className="btn-outline">Ver portfólio</a>
          </div>

          {/* Selos de confiança */}
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {['CRF Registrada', 'Produtos certificados ANVISA', 'Ambiente esterilizado'].map((s) => (
              <span key={s} className="flex items-center gap-1.5 text-xs text-brand-400">
                <svg className="w-4 h-4 text-[#c9956c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* ── Foto ─────────────────────────────── */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.35s' }}>
          <div className="relative">
            {/* Anel decorativo externo */}
            <div className="absolute -inset-4 rounded-[2.5rem] opacity-30"
                 style={{ background: 'linear-gradient(135deg, #D6BCFA, #FFDEE2, #e8c4a0)' }} />
            {/* Moldura principal */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl w-72 md:w-80 aspect-[3/4] bg-brand-100">
              <img
                src={heroPic}
                alt="Ingrid Melo — Farmacêutica Esteta em Joinville/SC"
                className="w-full h-full object-cover object-top"
                onError={(e) => { e.currentTarget.src = HERO_PHOTO_FALLBACK }}
              />
              {/* Gradiente suave na base */}
              <div className="absolute bottom-0 left-0 right-0 h-24"
                   style={{ background: 'linear-gradient(to top, rgba(110,89,165,0.35), transparent)' }} />
            </div>

            {/* Badge profissional */}
            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-4 py-3 border border-nude-200">
              <p className="text-[10px] text-[#c9956c] font-semibold uppercase tracking-wider">Farmacêutica Esteta</p>
              <p className="font-playfair text-sm font-bold text-brand-500">CRF · Joinville/SC</p>
            </div>

            {/* Badge avaliação */}
            <div className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-xl px-3 py-2 border border-nude-200 text-center">
              <p className="font-playfair text-lg font-bold text-brand-500">4.9</p>
              <div className="flex gap-0.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-[#c9956c]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <p className="text-[9px] text-brand-300 mt-0.5">Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
