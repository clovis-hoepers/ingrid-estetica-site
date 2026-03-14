import { useState } from 'react'
import { WHATSAPP_LINK } from '../constants'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-brand-100 bg-white/90 backdrop-blur">
      <div className="section-wrapper py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-playfair text-xl font-bold text-brand-500">
            Ingrid Melo
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-brand-300 font-medium">
            Estética Facial Avançada
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-brand-400">
          <a href="#servicos" className="hover:text-brand-500 transition-colors">Tratamentos</a>
          <a href="#portfolio" className="hover:text-brand-500 transition-colors">Portfólio</a>
          <a href="#sobre"    className="hover:text-brand-500 transition-colors">Sobre</a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-xs px-5 py-2"
          >
            Agendar avaliação
          </a>
        </nav>

        {/* Hamburger mobile */}
        <button
          className="md:hidden p-2 text-brand-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-brand-100 px-5 py-4 flex flex-col gap-4 text-sm text-brand-400">
          <a href="#servicos" onClick={() => setMenuOpen(false)}>Tratamentos</a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Portfólio</a>
          <a href="#sobre"    onClick={() => setMenuOpen(false)}>Sobre</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary text-center">
            Agendar avaliação
          </a>
        </div>
      )}
    </header>
  )
}
