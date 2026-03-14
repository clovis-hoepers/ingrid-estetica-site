// --- Identidade profissional --------------------------------------------------
export const PROFISSIONAL_NOME   = 'Ingrid Melo'
export const PROFISSIONAL_CRF    = 'CRF 20012/SC'
export const PROFISSIONAL_TITULO = 'Farmacêutica · Gerenciamento de Pele'

// --- Contato ------------------------------------------------------------------
export const WHATSAPP_NUMBER  = '5547992245604'
export const WHATSAPP_MESSAGE = 'Olá! Vim pelo site e gostaria de agendar uma avaliação de pele.'
export const WHATSAPP_LINK    = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

// --- Redes sociais ------------------------------------------------------------
export const INSTAGRAM_PROFILE = 'https://www.instagram.com/farmaingridmelo/'
export const INSTAGRAM_HANDLE  = '@farmaingridmelo'

// --- SumUp (pagamento de taxa de agendamento) ---------------------------------
// Substitua pelo seu Checkout Reference gerado no SumUp Dashboard
// https://developer.sumup.com/online-payments
export const SUMUP_CHECKOUT_ID   = 'SEU_CHECKOUT_ID_AQUI'  // gerado via API SumUp
export const BOOKING_FEE_BRL     = 50
export const BOOKING_FEE_LABEL   = 'Taxa de agendamento — R$ 50,00'

// --- Google Agenda (link público do calendário para agendamento) -------------
// Gere em: calendar.google.com → Configurações → Integrar calendário
export const GOOGLE_CALENDAR_APPOINTMENT_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ-SUBSTITUA-PELO-SEU-LINK'

// --- Portfólio — Posts por procedimento --------------------------------------
// Cada chave é exibida como aba no carrossel de portfólio.
export const PORTFOLIO_BY_PROCEDURE = {
  'Toxina botulínica': [
    'https://www.instagram.com/p/DSvsW7jj-lw/',
    'https://www.instagram.com/p/DPzU4oDkSaQ/',
  ],
  'Bioestimulador': [
    'https://www.instagram.com/p/DQVTvVbjOPG/',
    'https://www.instagram.com/p/DRUutXNAG-g/',
  ],
  'Skincare & Peeling': [
    'https://www.instagram.com/p/DKurHgfvLm3/',
  ],
}
