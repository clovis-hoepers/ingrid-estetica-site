import { useEffect, useState, useRef, useCallback } from 'react'
import { PORTFOLIO_BY_PROCEDURE, INSTAGRAM_PROFILE, INSTAGRAM_HANDLE } from '../constants'

const TABS = Object.keys(PORTFOLIO_BY_PROCEDURE)
const AUTO_ADVANCE_MS = 7000

export function InstagramGallery() {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const [slideIdx, setSlideIdx] = useState(0)
  const timerRef = useRef(null)

  const posts = PORTFOLIO_BY_PROCEDURE[activeTab]
  const maxIdx = Math.max(0, posts.length - 2)

  // Reinicia timer ao trocar aba ou slide manualmente
  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setSlideIdx((i) => {
        if (i >= maxIdx) { return 0 }
        return i + 1
      })
    }, AUTO_ADVANCE_MS)
  }, [maxIdx])

  useEffect(() => {
    setSlideIdx(0)
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [activeTab, resetTimer])

  // Reprocessa embeds do Instagram
  useEffect(() => {
    const process = () => window.instgrm?.Embeds?.process()
    const scriptId = 'instagram-embed-script'
    if (document.getElementById(scriptId)) { setTimeout(process, 120); return }
    const s = document.createElement('script')
    s.id = scriptId; s.src = 'https://www.instagram.com/embed.js'; s.async = true
    s.onload = () => setTimeout(process, 120)
    document.body.appendChild(s)
  }, [slideIdx, activeTab])

  const goTo = (i) => { setSlideIdx(i); resetTimer() }
  const prev = () => { goTo(Math.max(0, slideIdx - 1)) }
  const next = () => { goTo(Math.min(maxIdx, slideIdx + 1)) }

  return (
    <section id="portfolio" className="py-24" style={{ background: 'linear-gradient(180deg,#fdfcfb 0%,#f0ecff 100%)' }}>
      <div className="section-wrapper">
        <div className="text-center mb-10">
          <span className="section-tag">Portfólio</span>
          <h2 className="section-title">Resultados por tratamento</h2>
          <p className="section-sub mx-auto">
            Veja os resultados reais publicados em{' '}
            <a href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer"
               className="text-gold-400 hover:underline font-medium">
              {INSTAGRAM_HANDLE}
            </a>.
          </p>
        </div>

        {/* Abas de procedimento */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {TABS.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab
                  ? 'gradient-dark text-gold-300 shadow-lg shadow-brand-800/30'
                  : 'bg-white border border-brand-100 text-brand-400 hover:border-brand-300'
              }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Carrossel */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(calc(-${slideIdx} * (50% + 12px)))` }}
          >
            {posts.map((url) => (
              <div key={url} className="flex-shrink-0" style={{ width: 'calc(50% - 12px)', minWidth: 'calc(50% - 12px)' }}>
                <blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14"
                  style={{ background:'#FFF', border:0, borderRadius:'16px',
                    boxShadow:'0 0 0 1px rgba(74,50,128,.12), 0 4px 24px rgba(74,50,128,.08)',
                    margin:0, padding:0, width:'100%' }}>
                  <a href={url} target="_blank" rel="noreferrer">Ver no Instagram</a>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Controles */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prev} disabled={slideIdx === 0} aria-label="Anterior"
            className="w-10 h-10 rounded-full border border-brand-200 flex items-center justify-center text-brand-400 hover:bg-brand-50 disabled:opacity-30 disabled:cursor-not-allowed transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          {/* Indicador de progresso automático */}
          <div className="flex gap-2">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i+1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === slideIdx ? 'w-6 bg-gold-400' : 'w-2 bg-brand-200 hover:bg-brand-300'
                }`}/>
            ))}
          </div>

          <button onClick={next} disabled={slideIdx >= maxIdx} aria-label="Próximo"
            className="w-10 h-10 rounded-full border border-brand-200 flex items-center justify-center text-brand-400 hover:bg-brand-50 disabled:opacity-30 disabled:cursor-not-allowed transition">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Barra de progresso do auto-advance */}
        <div className="mt-4 max-w-xs mx-auto h-0.5 bg-brand-100 rounded-full overflow-hidden">
          <div
            key={`${activeTab}-${slideIdx}`}
            className="h-full bg-gold-400 rounded-full"
            style={{ animation: `progress-bar ${AUTO_ADVANCE_MS}ms linear` }}
          />
        </div>

        <div className="mt-8 text-center">
          <a href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer" className="btn-outline">
            Ver todos no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
