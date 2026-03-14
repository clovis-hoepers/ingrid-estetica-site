import { WHATSAPP_LINK } from '../constants'

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-5xl mx-auto px-4 py-20 grid gap-12 md:grid-cols-[1.2fr,1fr] items-center">
        <div>
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-4">
            Joinville · SC
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 leading-tight mb-5">
            Harmonia facial com naturalidade e segurança.
          </h1>
          <p className="text-slate-500 text-lg mb-8 max-w-lg">
            Protocolos personalizados realizados pela farmacêutica esteta
            <strong className="text-slate-700"> Ingrid Melo</strong>,
            com foco em resultados discretos e duradouros.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary">
              Agendar pelo WhatsApp
            </a>
            <a href="#portfolio" className="btn-secondary">
              Ver portfólio
            </a>
          </div>
        </div>
        <div className="card shadow-sm shadow-brand-100">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-500 mb-3">
            Tratamentos disponíveis
          </p>
          <ul className="space-y-3">
            {[
              'Toxina botulínica (Botox)',
              'Bioestimulador de colágeno',
              'Limpeza de pele profunda',
              'Peeling químico',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
