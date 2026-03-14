import { WHATSAPP_LINK, INSTAGRAM_PROFILE, INSTAGRAM_HANDLE } from '../constants'

export function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-white">
      <div className="section-wrapper py-10 grid gap-8 md:grid-cols-3 items-start">
        {/* Marca */}
        <div>
          <p className="font-playfair text-lg font-bold text-brand-500 mb-1">Ingrid Melo</p>
          <p className="text-xs uppercase tracking-widest text-brand-300 mb-4">Estética Facial Avançada</p>
          <p className="text-sm text-brand-400 leading-relaxed">
            Farmacêutica Esteta com foco em rejuvenescimento facial seguro,
            natural e personalizado em Joinville/SC.
          </p>
        </div>

        {/* Tratamentos */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300 mb-4">Tratamentos</p>
          <ul className="space-y-2 text-sm text-brand-400">
            <li>Toxina botulínica (Botox)</li>
            <li>Bioestimulador de colágeno</li>
            <li>Limpeza de pele</li>
            <li>Peeling químico</li>
          </ul>
        </div>

        {/* Contato */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-300 mb-4">Contato</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer" className="text-brand-400 hover:text-brand-500 transition-colors">
                {INSTAGRAM_HANDLE}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-brand-400 hover:text-brand-500 transition-colors">
                +55 47 99224-5604
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-brand-100">
        <p className="section-wrapper py-4 text-xs text-brand-300 text-center">
          © {new Date().getFullYear()} Ingrid Melo — Estética Facial Avançada. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
