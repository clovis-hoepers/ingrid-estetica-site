// --- Identidade profissional --------------------------------------------------
export const PROFISSIONAL_NOME   = 'Ingrid Melo'
export const PROFISSIONAL_CRF    = 'CRF 20012/SC'
export const PROFISSIONAL_TITULO = 'Farmacêutica · Gerenciamento de Pele'

// --- Contato ------------------------------------------------------------------
export const WHATSAPP_NUMBER  = '5547992245604'
export const WHATSAPP_MESSAGE = 'Olá! Vim pelo site e gostaria de agendar minha avaliação de pele com a Ingrid.'
export const WHATSAPP_LINK    = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

// --- Redes sociais ------------------------------------------------------------
export const INSTAGRAM_PROFILE = 'https://www.instagram.com/farmaingridmelo/'
export const INSTAGRAM_HANDLE  = '@farmaingridmelo'

// =============================================================================
// FLAG: Agendamento online (SumUp + Google Agenda)
// -----------------------------------------------------------------------------
// true  → exibe formulário com pagamento SumUp e botão do Google Agenda
// false → oculta o formulário e direciona tudo para WhatsApp
// =============================================================================
export const ENABLE_ONLINE_BOOKING = true

// --- Taxa de agendamento (fácil ajuste) --------------------------------------
// Valor cobrado para reservar a consulta; é 100% abatido no procedimento.
export const BOOKING_FEE_BRL   = 100
export const BOOKING_FEE_LABEL = `Taxa de reserva — R$ ${100},00`

// --- SumUp -------------------------------------------------------------------
// Só usado quando ENABLE_ONLINE_BOOKING = true
// Gere o Checkout ID em: https://developer.sumup.com/online-payments
export const SUMUP_CHECKOUT_ID = 'SEU_CHECKOUT_ID_AQUI'
export const SUMUP_MERCHANT_CODE = 'SEU_MERCHANT_CODE_AQUI'

// --- Google Agenda -----------------------------------------------------------
// Agendamento via Google Calendar (link do caléndário público da Ingrid)
export const GOOGLE_CALENDAR_APPOINTMENT_URL =
  'https://calendar.google.com/calendar/u/1?cid=N2Y4ZDc0MmZmOGQ5YzE3ZTY3ZjExZWI2NTQyM2VlOWIwYjcxZWFhNWUwOTdkOGM5NGU1YjY3YmNiNzJlYTM3MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t'

// --- Portfólio — Posts por procedimento --------------------------------------
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
