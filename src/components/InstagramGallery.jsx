import { useEffect, useState, useRef } from 'react'
import { PORTFOLIO_POSTS, INSTAGRAM_PROFILE, INSTAGRAM_HANDLE } from '../constants'

const VISIBLE = 2 // quantos posts aparecem por vez no desktop

export function InstagramGallery() {
  const [current, setCurrent] = useState(0)
  const containerRef = useRef(null)
  const total = PORTFOLIO_POSTS.length
  const maxIndex = total - VISIBLE

  // Carrega e reprocessa embeds sempre que o slide muda
  useEffect(() => {
    const scriptId = 'instagram-embed-script'
    const process = () => window.instgrm?.Embeds?.process()

    if (document.getElementById(scriptId)) {
      // Pequeno delay para garantir que o DOM do slide ja renderizou
      setTimeout(process, 100)
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = () => setTimeout(process, 100)
    document.body.appendChild(script)
  }, [current])

  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1))

  return (
    <section id="portfolio" className="py-24 bg-brand-50">
      <div className="section-wrapper">
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="section-tag">Resultados reais</span>
            <h2 className="section-title">Portfólio</h2>
            <p className="section-subtitle mb-0">
              Acompanhe os trabalhos publicados no Instagram{' '}
              <a href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer"
                className="text-brand-300 hover:underline font-medium">
                {INSTAGRAM_HANDLE}
              </a>.
            </p>
          </div>

          {/* Controles do carrossel */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Anterior"
              className="w-10 h-10 rounded-full border border-brand-200 flex items-center justify-center text-brand-400
                         hover:bg-brand-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Indicadores de posição */}
            <div className="flex gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir para slide ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? 'bg-brand-400 w-4' : 'bg-brand-200 hover:bg-brand-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={current >= maxIndex}
              aria-label="Próximo"
              className="w-10 h-10 rounded-full border border-brand-200 flex items-center justify-center text-brand-400
                         hover:bg-brand-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Trilha do carrossel */}
        <div className="overflow-hidden" ref={containerRef}>
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${current} * (50% + 12px)))` }}
          >
            {PORTFOLIO_POSTS.map((url) => (
              <div
                key={url}
                className="flex-shrink-0 w-[calc(50%-12px)]"
                style={{ minWidth: 'calc(50% - 12px)' }}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '16px',
                    boxShadow: '0 0 0 1px rgba(155,135,245,.15), 0 4px 16px rgba(155,135,245,.1)',
                    margin: 0,
                    padding: 0,
                    width: '100%',
                  }}
                >
                  <a href={url} target="_blank" rel="noreferrer">
                    Ver publicação no Instagram
                  </a>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer" className="btn-outline">
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
