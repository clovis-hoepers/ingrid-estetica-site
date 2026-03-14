import { useState, useEffect } from 'react'
import { WHATSAPP_LINK, ENABLE_ONLINE_BOOKING } from '../constants'

export function StickyBookingBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  const href   = ENABLE_ONLINE_BOOKING ? '#agendamento' : WHATSAPP_LINK
  const target = ENABLE_ONLINE_BOOKING ? undefined : '_blank'

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-3"
      style={{ background: 'linear-gradient(to top, rgba(253,252,251,1) 70%, transparent)' }}
    >
      <a
        href={href}
        target={target}
        rel="noreferrer"
        className="btn-gold w-full justify-center text-base py-4"
      >
        {ENABLE_ONLINE_BOOKING ? 'Agendar consulta online' : 'Agendar avaliação gratuita'}
      </a>
    </div>
  )
}
