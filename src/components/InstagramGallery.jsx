import { useEffect } from 'react'
import { PORTFOLIO_POSTS, INSTAGRAM_PROFILE, INSTAGRAM_HANDLE } from '../constants'

export function InstagramGallery() {
  useEffect(() => {
    const scriptId = 'instagram-embed-script'

    if (document.getElementById(scriptId)) {
      window.instgrm?.Embeds?.process()
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = () => window.instgrm?.Embeds?.process()
    document.body.appendChild(script)
  }, [])

  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="section-title">Portfólio</h2>
        <p className="section-subtitle">
          Resultados reais publicados no Instagram{' '}
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noreferrer"
            className="text-brand-600 hover:underline font-medium"
          >
            {INSTAGRAM_HANDLE}
          </a>
          .
        </p>
        {/*
          Para adicionar ou remover posts do portfólio,
          edite PORTFOLIO_POSTS em src/constants/index.js
        */}
        <div className="grid gap-6 md:grid-cols-2">
          {PORTFOLIO_POSTS.map((url) => (
            <div key={url} className="w-full">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '16px',
                  boxShadow: '0 0 0 1px rgba(0,0,0,.06)',
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
    </section>
  )
}
