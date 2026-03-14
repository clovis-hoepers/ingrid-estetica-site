import { WHATSAPP_LINK } from '../constants'

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.2em] text-brand-500 font-medium">
            Estética Facial Avançada
          </span>
          <span className="text-lg font-semibold text-slate-900">
            Ingrid Melo
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#servicos" className="hover:text-slate-900 transition-colors">Serviços</a>
          <a href="#portfolio" className="hover:text-slate-900 transition-colors">Portfólio</a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-sm px-5 py-2"
          >
            Agendar avaliação
          </a>
        </nav>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="md:hidden btn-primary text-xs px-4 py-2"
        >
          Agendar
        </a>
      </div>
    </header>
  )
}
