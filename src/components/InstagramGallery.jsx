import { useEffect, useState, useRef, useCallback } from 'react'
import { PORTFOLIO_BY_PROCEDURE, INSTAGRAM_PROFILE, INSTAGRAM_HANDLE } from '../constants'

const TABS = Object.keys(PORTFOLIO_BY_PROCEDURE)
const AUTO_ADVANCE_MS = 7000

export function InstagramGallery() {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const [slideIdx, setSlideIdx] = useState(0)
  const timerRef = useRef(null)

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const posts = PORTFOLIO_BY_PROCEDURE[activeTab]
  const visibleCount = isMobile ? 1 : 2
  const maxIdx = Math.max(0, posts.length - visibleCount)

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setSlideIdx((i) => (i >= maxIdx ? 0 : i + 1))
    }, AUTO_ADVANCE_MS)
  }, [maxIdx])

  useEffect(() => {
    setSlideIdx(0)
    resetTimer()
    return () => clearInterval(timerRef.current)
  }, [activeTab, isMobile, resetTimer])

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
  const prev = () => goTo(Math.max(0, slideIdx - 1))
  const next = () => goTo(Math.min(maxIdx, slideIdx + 1))

  const slideW = isMobile ? '100%' : 'calc(50% - 12px)'
  const translateX = isMobile
    ? `translateX(calc(-${slideIdx} * (100% + 24px)))`
    : `translateX(calc(-${slideIdx} * (50% + 12px)))`

  return (
    <section
      id="portfolio"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #fdfcfb 0%, #fdf8f0 100%)' }}
    >
      <div className="section-wrapper">
        <div className="text-center mb-10">
          <span className="section-tag">Portfólio</span>
          <h2 className="section-title">Resultados reais, por tratamento</h2>
          <p className="section-sub mx-auto">
            Veja transformações reais publicadas em{' '}
            <a
              href={INSTAGRAM_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="hover:underline font-medium transition-colors"
              style={{ color: '#CC6633' }}
            >
              {INSTAGRAM_HANDLE}
            </a>.
          </p>
        </div>

        {/* Abas de procedimentos */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={activeTab === tab
                ? { background: 'linear-gradient(135deg, #8B5E2C, #CC6633)', color: '#fff', boxShadow: '0 4px 14px rgba(139,94,44,0.30)' }
                : { backgroundColor: '#fff', border: '1px solid #edd4a0', color: '#8B5E2C' }
              }
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Trilha de posts */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: translateX }}
          >
            {posts.map((url) => (
              <div key={url} className="flex-shrink-0" style={{ width: slideW, minWidth: slideW }}>
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={url}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF', border: 0, borderRadius: '16px',
                    boxShadow: '0 0 0 1px rgba(139,94,44,0.12), 0 4px 24px rgba(139,94,44,0.08)',
                    margin: 0, padding: 0, width: '100%',
                  }}
                >
                  <a href={url} target="_blank" rel="noreferrer">Ver no Instagram</a>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Controles de navegação */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            disabled={slideIdx === 0}
            aria-label="Anterior"
            className="w-10 h-10 rounded-full flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ border: '1px solid #edd4a0', color: '#8B5E2C', backgroundColor: '#fff' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <div className="flex gap-2">
            {Array.from({ length: maxIdx + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === slideIdx ? '1.5rem' : '0.5rem',
                  backgroundColor: i === slideIdx ? '#C9960C' : '#edd4a0',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={slideIdx >= maxIdx}
            aria-label="Próximo"
            className="w-10 h-10 rounded-full flex items-center justify-center transition disabled:opacity-30 disabled:cursor-not-allowed"
            style={{ border: '1px solid #edd4a0', color: '#8B5E2C', backgroundColor: '#fff' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Barra de progresso */}
        <div
          className="mt-4 max-w-xs mx-auto h-0.5 rounded-full overflow-hidden"
          style={{ backgroundColor: '#edd4a0' }}
        >
          <div
            key={`${activeTab}-${slideIdx}`}
            className="h-full rounded-full"
            style={{ backgroundColor: '#C9960C', animation: `progress-bar ${AUTO_ADVANCE_MS}ms linear` }}
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
