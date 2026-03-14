import { WHATSAPP_LINK, INSTAGRAM_PROFILE, INSTAGRAM_HANDLE, PROFISSIONAL_CRF } from '../constants'

const MAPS_LINK = 'https://www.google.com/maps/place/Ingrid+Melo-+Bioestimulador+de+col%C3%A1geno+l+Botox+l+Limpeza+de+pele+l+Peeling+l/@-26.3122,-48.8455,17z'

export function Footer() {
  return (
    <footer className="border-t border-brand-700 bg-brand-800">
      <div className="section-wrapper py-12 grid gap-8 md:grid-cols-4 items-start">
        {/* Marca */}
        <div className="md:col-span-1">
          <p className="font-playfair text-lg font-bold text-white mb-0.5">Ingrid Melo</p>
          <p className="text-[10px] uppercase tracking-widest text-gold-400 mb-4">Gerenciamento de Pele</p>
          <p className="text-sm text-brand-300 leading-relaxed mb-3">
            Farmacêutica com foco em gerenciamento personalizado de pele:
            tratamentos clínicos e rotinas de skincare sob medida.
          </p>
          <p className="text-xs text-brand-400">{PROFISSIONAL_CRF}</p>
        </div>

        {/* Tratamentos */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">Tratamentos</p>
          <ul className="space-y-2 text-sm text-brand-300">
            <li>Toxina botulínica (Botox)</li>
            <li>Bioestimulador de colágeno</li>
            <li>Rotina de Skincare</li>
            <li>Limpeza de pele</li>
            <li>Peeling químico</li>
          </ul>
        </div>

        {/* Localização */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">Studio</p>
          <ul className="space-y-2 text-sm text-brand-300">
            <li>Joinville · Santa Catarina</li>
            <li>Segunda a Sábado · com agendamento</li>
            <li>
              <a href={MAPS_LINK} target="_blank" rel="noreferrer"
                 className="hover:text-gold-300 transition-colors underline underline-offset-2">
                Ver no Google Maps
              </a>
            </li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">Contato</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer"
                 className="text-brand-300 hover:text-gold-300 transition-colors">
                {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer"
                 className="text-brand-300 hover:text-gold-300 transition-colors">
                +55 47 99224-5604
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-700">
        <p className="section-wrapper py-4 text-xs text-brand-400 text-center">
          © {new Date().getFullYear()} Ingrid Melo — Gerenciamento de Pele · {PROFISSIONAL_CRF} · Joinville/SC
        </p>
      </div>
    </footer>
  )
}
