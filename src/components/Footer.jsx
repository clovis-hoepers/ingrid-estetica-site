import { WHATSAPP_LINK, INSTAGRAM_PROFILE, INSTAGRAM_HANDLE } from '../constants'

export function Footer() {
  return (
    <footer id="contato" className="border-t border-slate-100 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-semibold text-slate-800">Ingrid Melo — Estética Facial Avançada</span>
          <span className="text-xs text-slate-400">Joinville · SC · Brasil</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-slate-600 hover:text-brand-600 transition-colors"
          >
            {INSTAGRAM_HANDLE}
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-slate-600 hover:text-brand-600 transition-colors"
          >
            +55 47 99224-5604
          </a>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Ingrid Melo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
