import { useState } from 'react'
import { WHATSAPP_LINK, PROFISSIONAL_CRF } from '../constants'

const navLinks = [
  { href: '#servicos',     label: 'Tratamentos' },
  { href: '#portfolio',   label: 'Portfólio' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#faq',         label: 'Dúvidas' },
  { href: '#localizacao', label: 'Studio' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-brand-700/95 backdrop-blur border-b border-brand-600">
      <div className="section-wrapper flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none">
          <span className="font-playfair text-lg font-bold text-white">Ingrid Melo</span>
          <span className="text-[10px] uppercase tracking-widest text-gold-300">
            Gerenciamento de Pele
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href}
               className="text-sm text-brand-200 hover:text-white transition-colors">
              {label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-4">
          <span className="text-[10px] text-gold-300 tracking-wider">{PROFISSIONAL_CRF}</span>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-gold text-xs px-5 py-2">
            Agendar avaliação
          </a>
        </div>

        {/* Menu mobile */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Menu mobile expandido */}
      {open && (
        <div className="md:hidden border-t border-brand-600 bg-brand-700 px-5 pb-5">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setOpen(false)}
                 className="text-brand-200 hover:text-white transition-colors">{label}</a>
            ))}
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-gold justify-center mt-2">
              Agendar avaliação
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
