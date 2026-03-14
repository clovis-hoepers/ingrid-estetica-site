import heroPic from '../images/ingrid.jpeg'
import { WHATSAPP_LINK, PROFISSIONAL_CRF } from '../constants'

const FALLBACK = 'https://placehold.co/480x640/4a3280/e8c47a?text=Ingrid+Melo'

export function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero pt-16 pb-28">
      {/* Blobs decorativos */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
           style={{ background: 'radial-gradient(circle, #9b87f5 0%, transparent 70%)' }} />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full opacity-15"
           style={{ background: 'radial-gradient(circle, #e8c47a 0%, transparent 70%)' }} />

      <div className="section-wrapper relative grid gap-14 md:grid-cols-[1.15fr,1fr] items-center">
        {/* Texto */}
        <div>
          <span className="section-tag animate-fade-up">Joinville · SC · {PROFISSIONAL_CRF}</span>

          <h1 className="font-playfair text-5xl md:text-[3.6rem] font-bold text-brand-500 leading-[1.15] mb-5 animate-fade-up"
              style={{ animationDelay: '0.1s' }}>
            Gerenciamento
            <span className="block font-normal italic text-gold-400"> de pele personalizado</span>
            <span className="block">para cada fase da vida.</span>
          </h1>

          <div className="divider-gold" />

          <p className="text-brand-400 text-lg leading-relaxed mb-8 max-w-md animate-fade-up"
             style={{ animationDelay: '0.2s' }}>
            Unimos estética avançada e rotinas de skincare para criar um protocolo
            único para o seu rosto—com base científica, result ados duradouros e
            cuidado que respeita quem você é.
          </p>

          {/* Micro-prova social */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up" style={{ animationDelay: '0.25s' }}>
            <div className="flex -space-x-2">
              {['#4a3280','#c9956c','#f687b3','#9b87f5'].map((c, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                     style={{ backgroundColor: c }}>✓</div>
              ))}
            </div>
            <p className="text-sm text-brand-400">
              <span className="font-semibold text-brand-500">+500 pacientes</span> com pele transformada
            </p>
          </div>

          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="#agendamento" className="btn-gold">
              Agendar avaliação de pele
            </a>
            <a href="#servicos" className="btn-outline">
              Ver tratamentos
            </a>
          </div>

          {/* Selos */}
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {[`${PROFISSIONAL_CRF}`, 'ANVISA · 100% certificado', 'Ambiente esterilizado'].map((s) => (
              <span key={s} className="flex items-center gap-1.5 text-xs text-brand-400">
                <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Foto */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.35s' }}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2.5rem] opacity-40"
                 style={{ background: 'linear-gradient(135deg, #4a3280, #c9956c, #e8c47a)' }} />
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl w-72 md:w-80 aspect-[3/4] bg-brand-100">
              <img src={heroPic} alt="Ingrid Melo — Farmacêutica, Gerenciamento de Pele"
                   className="w-full h-full object-cover object-top"
                   onError={(e) => { e.currentTarget.src = FALLBACK }} />
              <div className="absolute bottom-0 left-0 right-0 h-28"
                   style={{ background: 'linear-gradient(to top, rgba(46,29,84,0.55), transparent)' }} />
            </div>
            {/* Badge profissional */}
            <div className="absolute -bottom-5 -left-5 bg-brand-700 rounded-2xl shadow-xl px-4 py-3 border border-brand-600">
              <p className="text-[10px] text-gold-300 font-semibold uppercase tracking-wider">Farmacêutica · Gerenciamento de Pele</p>
              <p className="font-playfair text-sm font-bold text-white">{PROFISSIONAL_CRF}</p>
            </div>
            {/* Badge avaliação */}
            <div className="absolute -top-3 -right-3 bg-brand-700 rounded-2xl shadow-xl px-3 py-2 border border-brand-600 text-center">
              <p className="font-playfair text-lg font-bold text-gold-300">4.9</p>
              <div className="flex gap-0.5 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-gold-400" viewBox="0 0 20 20" fill="currentColor">
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
