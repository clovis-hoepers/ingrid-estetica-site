import { WHATSAPP_LINK } from '../constants'

// ID do lugar no Google Maps
const MAPS_PLACE_ID = 'ChIJvftN4bpqmZQROf1lGxUQJ9Y'
const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed/v1/place' +
  '?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY' + // chave pública de embed do Google (somente leitura)
  '&q=Ingrid+Melo+Bioestimulador+Botox+Joinville+SC'

// Link direto para abrir no Maps
const MAPS_LINK =
  'https://www.google.com/maps/place/Ingrid+Melo-+Bioestimulador+de+col%C3%A1geno+l+Botox+l+Limpeza+de+pele+l+Peeling+l/@-26.3122,-48.8455,17z'

export function Location() {
  return (
    <section id="localizacao" className="py-24 bg-white">
      <div className="section-wrapper">
        <div className="grid gap-12 md:grid-cols-[1fr,1.2fr] items-center">
          {/* Texto */}
          <div>
            <span className="section-tag">Onde estamos</span>
            <h2 className="section-title">Studio em Joinville/SC</h2>
            <div className="divider-rose" />
            <p className="text-brand-400 leading-relaxed mb-6">
              Atendimentos em um ambiente acolhedor, reservado e pensado para o
              seu conforto. Venha nos visitar ou agende pelo WhatsApp.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-brand-500 text-sm">Endereço</p>
                  <p className="text-brand-400 text-sm">Joinville · Santa Catarina · Brasil</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-brand-500 text-sm">Horário de atendimento</p>
                  <p className="text-brand-400 text-sm">Segunda a Sábado · mediante agendamento</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Agendar pelo WhatsApp
              </a>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Ver no Google Maps
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-brand-100 aspect-[4/3]">
            <iframe
              title="Localização do Studio Ingrid Melo"
              src={`https://maps.google.com/maps?q=Ingrid+Melo+Bioestimulador+Botox+Joinville+SC&output=embed&hl=pt-BR`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
