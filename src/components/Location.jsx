import { WHATSAPP_LINK } from '../constants'

const MAPS_LINK =
  'https://www.google.com/maps/place/Ingrid+Melo-+Bioestimulador+de+col%C3%A1geno+l+Botox+l+Limpeza+de+pele+l+Peeling+l/@-26.3122,-48.8455,17z'

export function Location() {
  return (
    <section id="localizacao" className="py-24 bg-white">
      <div className="section-wrapper">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-[1fr,1.2fr] items-center">
          {/* Texto */}
          <div>
            <span className="section-tag">Onde estamos</span>
            <h2 className="section-title">Studio em Joinville/SC</h2>
            <div className="divider-gold" />
            <p className="leading-relaxed mb-6 text-sm sm:text-base" style={{ color: '#6e4720' }}>
              Um ambiente acolhedor, reservado e projetado para o seu conforto e
              privacidade. Cada detalhe foi pensado para que você se sinta segura
              e cuidada desde o momento em que entra pela porta.
            </p>

            <div className="space-y-4 mb-8">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4" style={{ color: '#C9960C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: 'Localização',
                  desc: 'Joinville · Santa Catarina · Brasil',
                },
                {
                  icon: (
                    <svg className="w-4 h-4" style={{ color: '#C9960C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: 'Horário de atendimento',
                  desc: 'Segunda a Sábado · mediante agendamento',
                },
                {
                  icon: (
                    <svg className="w-4 h-4" style={{ color: '#C9960C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: 'Ambiente certificado',
                  desc: 'Esterilizado · Produtos ANVISA · Privativo',
                },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: '#fdf8ed' }}
                  >
                    {icon}
                  </span>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#4a2e12' }}>{title}</p>
                    <p className="text-sm" style={{ color: '#6e4720' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-gold justify-center sm:justify-start">
                Agendar pelo WhatsApp
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noreferrer" className="btn-outline justify-center sm:justify-start">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Ver no Google Maps
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div
            className="rounded-2xl overflow-hidden shadow-lg w-full"
            style={{ border: '1px solid #edd4a0', aspectRatio: '4/3' }}
          >
            <iframe
              title="Localização do Studio Ingrid Melo"
              src="https://maps.google.com/maps?q=Ingrid+Melo+Bioestimulador+Botox+Joinville+SC&output=embed&hl=pt-BR"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
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
