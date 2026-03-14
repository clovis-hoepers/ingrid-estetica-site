import { WHATSAPP_LINK } from '../constants'

// -----------------------------------------------------------------------
// FOTO DA PROFISSIONAL
// Para usar a foto real da Ingrid:
//   1. Salve o arquivo em /public/images/ingrid.jpg
//   2. Troque HERO_PHOTO abaixo para '/images/ingrid.jpg'
//
// Fonte da foto: https://www.instagram.com/p/DR0dJHBj5n6/
//   -> Baixe manualmente pelo Instagram (salvar imagem) e coloque em /public/images/
// -----------------------------------------------------------------------
const HERO_PHOTO = '/images/ingrid.jpg'
const HERO_PHOTO_FALLBACK = 'https://placehold.co/480x640/E5DEFF/7E69AB?text=Foto+Ingrid'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f5f3ff] via-[#fdfcfb] to-white pt-16 pb-24">
      {/* Ornamentos de fundo */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E5DEFF]/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full bg-[#FFDEE2]/50 blur-2xl" />

      <div className="section-wrapper relative grid gap-12 md:grid-cols-[1.1fr,1fr] items-center">
        {/* Texto */}
        <div>
          <span className="section-tag">Joinville · SC</span>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-brand-500 leading-tight mb-6 animate-fade-up">
            Rejuvenescimento
            <span className="block italic font-normal text-brand-300">
              com alma feminina.
            </span>
          </h1>
          <div className="divider-rose" />
          <p className="text-brand-400 text-lg leading-relaxed mb-8 max-w-md animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Protocolos científicos e olhar estético para realçar o que há de mais
            belo em você—com segurança, naturalidade e cuidado personalizado.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882a.5.5 0 00.604.617l6.197-1.623A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.015-1.381l-.36-.214-3.724.976.992-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Agendar pelo WhatsApp
            </a>
            <a href="#portfolio" className="btn-outline">
              Ver portfólio
            </a>
          </div>
        </div>

        {/* Foto da profissional */}
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative">
            {/* Moldura decorativa */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#D6BCFA] to-[#FFDEE2] opacity-40 blur-sm" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-200/50 aspect-[3/4] w-72 md:w-80 bg-brand-100">
              <img
                src={HERO_PHOTO}
                alt="Ingrid Melo — Farmacêutica Esteta"
                className="w-full h-full object-cover object-top"
                onError={(e) => { e.currentTarget.src = HERO_PHOTO_FALLBACK }}
              />
            </div>
            {/* Badge flutuante */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-brand-100">
              <p className="text-xs text-brand-300 font-medium uppercase tracking-wider">Farmacêutica Esteta</p>
              <p className="font-playfair text-sm font-bold text-brand-500">CRF · Joinville/SC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
