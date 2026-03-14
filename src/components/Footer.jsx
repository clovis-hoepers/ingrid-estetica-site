import { WHATSAPP_LINK, INSTAGRAM_PROFILE, INSTAGRAM_HANDLE, PROFISSIONAL_CRF } from '../constants'

const MAPS_LINK = 'https://www.google.com/maps/place/Ingrid+Melo-+Bioestimulador+de+col%C3%A1geno+l+Botox+l+Limpeza+de+pele+l+Peeling+l/@-26.3122,-48.8455,17z'

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #4a2e12', backgroundColor: '#2d1c0a' }}>
      <div className="section-wrapper py-12 grid gap-8 md:grid-cols-4 items-start">
        {/* Marca */}
        <div className="md:col-span-1">
          <p className="font-playfair text-lg font-bold text-white mb-0.5">Ingrid Melo</p>
          <p className="text-[10px] uppercase tracking-widest mb-4" style={{ color: '#C9960C' }}>Gerenciamento de Pele</p>
          <p className="text-sm leading-relaxed mb-3" style={{ color: '#e8ddd0' }}>
            Farmacêutica com foco em gerenciamento personalizado de pele:
            tratamentos clínicos e rotinas de skincare sob medida.
            Produtos 100% certificados pela ANVISA.
          </p>
          <p className="text-xs" style={{ color: '#b5813a' }}>{PROFISSIONAL_CRF}</p>
        </div>

        {/* Tratamentos */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9960C' }}>Tratamentos</p>
          <ul className="space-y-2 text-sm" style={{ color: '#e8ddd0' }}>
            <li>Toxina botulínica (Botox)</li>
            <li>Bioestimulador de colágeno</li>
            <li>Protocolo anti-olheiras</li>
            <li>Rotina de Skincare</li>
            <li>Limpeza de pele</li>
            <li>Peeling químico</li>
          </ul>
        </div>

        {/* Localização */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9960C' }}>Studio</p>
          <ul className="space-y-2 text-sm" style={{ color: '#e8ddd0' }}>
            <li>Joinville · Santa Catarina</li>
            <li>Segunda a Sábado · com agendamento</li>
            <li>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="transition-colors underline underline-offset-2"
                style={{ color: '#e8ddd0' }}
                onMouseEnter={e => e.target.style.color = '#e8c96a'}
                onMouseLeave={e => e.target.style.color = '#e8ddd0'}
              >
                Ver no Google Maps
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#C9960C' }}>Contato</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={INSTAGRAM_PROFILE}
                target="_blank"
                rel="noreferrer"
                className="transition-colors"
                style={{ color: '#e8ddd0' }}
                onMouseEnter={e => e.target.style.color = '#e8c96a'}
                onMouseLeave={e => e.target.style.color = '#e8ddd0'}
              >
                {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="transition-colors"
                style={{ color: '#e8ddd0' }}
                onMouseEnter={e => e.target.style.color = '#e8c96a'}
                onMouseLeave={e => e.target.style.color = '#e8ddd0'}
              >
                +55 47 99224-5604
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #4a2e12' }}>
        <p className="section-wrapper py-4 text-xs text-center" style={{ color: '#b5813a' }}>
          © {new Date().getFullYear()} Ingrid Melo — Gerenciamento de Pele · {PROFISSIONAL_CRF} · Joinville/SC
        </p>
      </div>
    </footer>
  )
}
