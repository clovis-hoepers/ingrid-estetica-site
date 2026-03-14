import { useState } from 'react'
import {
  WHATSAPP_LINK,
  BOOKING_FEE_BRL,
  GOOGLE_CALENDAR_APPOINTMENT_URL,
  SUMUP_CHECKOUT_ID,
  SUMUP_MERCHANT_CODE,
  ENABLE_ONLINE_BOOKING,
} from '../constants'

const PROCEDURES = [
  'Avaliação de pele',
  'Toxina botulínica (Botox)',
  'Bioestimulador de colágeno',
  'Protocolo anti-olheiras',
  'Rotina de Skincare personalizada',
  'Limpeza de pele',
  'Peeling químico',
]

/**
 * Cria um checkout via SumUp Checkout API e inicializa o widget de pagamento.
 * Documentação: https://developer.sumup.com/api/checkouts/create
 *
 * O SUMUP_CHECKOUT_ID em constants/index.js deve ser preenchido com um
 * checkout_id gerado previamente pelo backend ou via dashboard SumUp.
 * Para uso dinâmico (gerar checkout em tempo real), implemente um endpoint
 * backend que chame POST https://api.sumup.com/v0.1/checkouts com:
 *   { checkout_reference, amount, currency: 'BRL', merchant_code, description }
 * e retorne o checkout_id para o frontend.
 */
async function createSumUpCheckout({ name, procedure }) {
  // Em produção: substituir por chamada ao seu backend que gera o checkout dinamicamente
  // Exemplo de payload para POST https://api.sumup.com/v0.1/checkouts :
  // {
  //   checkout_reference: `RESERVA-${Date.now()}`,
  //   amount: BOOKING_FEE_BRL,
  //   currency: 'BRL',
  //   merchant_code: SUMUP_MERCHANT_CODE,
  //   description: `Reserva - ${procedure} - ${name}`,
  //   return_url: window.location.href,
  // }
  return SUMUP_CHECKOUT_ID
}

function initSumUpWidget(checkoutId, onSuccess, onError) {
  if (window.SumUpCard) {
    window.SumUpCard.mount({
      checkoutId,
      onResponse: (type, body) => {
        if (type === 'success') onSuccess(body)
        else onError(body)
      },
    })
    return
  }
  // Fallback: redirecionar para link de pagamento SumUp direto
  window.open(`https://pay.sumup.com/b2c/${SUMUP_MERCHANT_CODE}`, '_blank')
  onSuccess({})
}

// Versão simplificada: só WhatsApp (ENABLE_ONLINE_BOOKING = false)
function WhatsAppBooking() {
  return (
    <section id="agendamento" className="py-24 gradient-dark">
      <div className="section-wrapper max-w-2xl text-center">
        <span
          style={{
            display: 'inline-block',
            fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.2em', color: '#e8c96a',
            backgroundColor: 'rgba(201,150,12,0.15)',
            border: '1px solid rgba(201,150,12,0.3)',
            padding: '0.2rem 0.75rem', borderRadius: '9999px', marginBottom: '1rem',
          }}
        >
          Agendamento fácil
        </span>
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
          Pronta para transformar
          <span className="block font-normal italic" style={{ color: '#e8c96a' }}> sua pele?</span>
        </h2>
        <p className="max-w-lg mx-auto mb-4" style={{ color: '#e8ddd0', lineHeight: 1.8 }}>
          Dê o primeiro passo agora. Fale diretamente com a Ingrid pelo WhatsApp
          e garanta sua vaga—os horários são limitados.
        </p>
        <div
          className="rounded-2xl border mx-auto mb-8 p-5 text-left max-w-md"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(201,150,12,0.3)' }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: '#e8c96a' }}>
            💳 Consulta com taxa de reserva · R${BOOKING_FEE_BRL}
          </p>
          <ul className="space-y-2">
            {[
              'Avaliação completa e personalizada da sua pele',
              `Taxa de R$ ${BOOKING_FEE_BRL} garante seu horário exclusivo`,
              <><strong className="text-white">Fechando o tratamento na consulta</strong>{' '}os R$ {BOOKING_FEE_BRL} são integralmente abatidos do procedimento</>,
              'Sem taxas ocultas — total transparência',
              'Produtos 100% certificados pela ANVISA',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: '#e8ddd0' }}>
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#C9960C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp text-base px-10 py-4">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.522 5.847L.057 23.882a.5.5 0 00.604.617l6.197-1.623A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.015-1.381l-.36-.214-3.724.976.992-3.629-.235-.374A9.818 9.818 0 1112 21.818z"/>
          </svg>
          Agendar pelo WhatsApp agora
        </a>
        <p className="text-xs mt-4" style={{ color: '#b5813a' }}>
          Resposta rápida · Horários flexíveis · Joinville/SC
        </p>
      </div>
    </section>
  )
}

// Versão completa: formulário + SumUp + Google Agenda
function OnlineBookingForm() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ name: '', phone: '', procedure: PROCEDURES[0], note: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const isFree = form.procedure === PROCEDURES[0]

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmitData = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) { setError('Preencha nome e telefone.'); return }
    setError('')
    setStep(isFree ? 3 : 2)
  }

  const handlePayment = async () => {
    setLoading(true)
    setError('')
    try {
      const checkoutId = await createSumUpCheckout({ name: form.name, procedure: form.procedure })
      initSumUpWidget(
        checkoutId,
        () => { setLoading(false); setStep(3) },
        () => { setLoading(false); setError('Pagamento não processado. Tente novamente ou agende pelo WhatsApp.') },
      )
    } catch {
      setLoading(false)
      setError('Erro ao iniciar pagamento. Tente agendar pelo WhatsApp.')
    }
  }

  const inputStyle = {
    width: '100%', borderRadius: '0.75rem',
    backgroundColor: '#4a2e12', border: '1px solid #6e4720',
    color: '#fff', padding: '0.75rem 1rem', fontSize: '0.875rem',
    outline: 'none', transition: 'border-color 0.2s',
  }
  const labelStyle = {
    display: 'block', fontSize: '0.7rem', fontWeight: 700,
    textTransform: 'uppercase', letterSpacing: '0.1em',
    color: '#e8ddd0', marginBottom: '0.375rem',
  }

  return (
    <section id="agendamento" className="py-24 gradient-dark">
      <div className="section-wrapper max-w-2xl">
        <div className="text-center mb-8">
          <span
            style={{
              display: 'inline-block', fontSize: '0.7rem', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.2em', color: '#e8c96a',
              backgroundColor: 'rgba(201,150,12,0.15)',
              border: '1px solid rgba(201,150,12,0.3)',
              padding: '0.2rem 0.75rem', borderRadius: '9999px', marginBottom: '1rem',
            }}
          >Agendamento online</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-3">
            Reserve sua consulta
          </h2>
          <p className="max-w-md mx-auto" style={{ color: '#e8ddd0' }}>
            Escolha o horário, pague a taxa de reserva de{' '}
            <span className="text-white font-semibold">R$ {BOOKING_FEE_BRL}</span>{' '}
            e garanta sua vaga.
            {' '}<span style={{ color: '#e8c96a' }}>
              Fechando o tratamento na consulta, esse valor é totalmente abatido.
            </span>
          </p>
        </div>

        {/* Steps */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {['Dados', 'Pagamento', 'Confirmação'].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                style={{
                  backgroundColor: step > i + 1 ? '#C9960C' : step === i + 1 ? '#fff' : '#4a2e12',
                  color: step === i + 1 ? '#4a2e12' : step > i + 1 ? '#fff' : '#b5813a',
                }}
              >
                {step > i + 1 ? '✓' : i + 1}
              </div>
              <span
                className="text-xs hidden sm:block"
                style={{ color: step === i + 1 ? '#fff' : '#b5813a', fontWeight: step === i + 1 ? 700 : 400 }}
              >
                {label}
              </span>
              {i < 2 && <div className="w-8 h-px" style={{ backgroundColor: '#6e4720' }} />}
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl p-8 shadow-2xl border"
          style={{ backgroundColor: '#4a2e12', borderColor: '#6e4720' }}
        >
          {step === 1 && (
            <form onSubmit={handleSubmitData} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label style={labelStyle}>Nome completo</label>
                  <input
                    type="text" required value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Seu nome"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#C9960C'}
                    onBlur={e => e.target.style.borderColor = '#6e4720'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>WhatsApp</label>
                  <input
                    type="tel" required value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="(47) 9 9999-9999"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#C9960C'}
                    onBlur={e => e.target.style.borderColor = '#6e4720'}
                  />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Procedimento de interesse</label>
                <select
                  value={form.procedure}
                  onChange={(e) => update('procedure', e.target.value)}
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#C9960C'}
                  onBlur={e => e.target.style.borderColor = '#6e4720'}
                >
                  {PROCEDURES.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Escolha data e horário</label>
                <a
                  href={GOOGLE_CALENDAR_APPOINTMENT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 w-full transition group"
                  style={{
                    ...inputStyle,
                    textDecoration: 'none',
                    display: 'flex',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#C9960C'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#6e4720'}
                >
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: '#C9960C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span style={{ color: '#e8ddd0' }}>Abrir Google Agenda → Escolher horário</span>
                </a>
                <p className="text-[11px] mt-1.5 ml-1" style={{ color: '#b5813a' }}>Após escolher o horário, volte aqui para concluir o agendamento.</p>
              </div>
              <div>
                <label style={labelStyle}>Observações (opcional)</label>
                <textarea
                  value={form.note}
                  onChange={(e) => update('note', e.target.value)}
                  rows={3}
                  placeholder="Alergias, medicamentos, dúvidas..."
                  style={{ ...inputStyle, resize: 'none' }}
                  onFocus={e => e.target.style.borderColor = '#C9960C'}
                  onBlur={e => e.target.style.borderColor = '#6e4720'}
                />
              </div>
              {error && <p className="text-red-400 text-xs">{error}</p>}
              <button type="submit" className="btn-gold w-full justify-center py-3.5">
                {isFree ? 'Confirmar agendamento' : `Prosseguir para pagamento · R$ ${BOOKING_FEE_BRL}`}
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-3xl" style={{ backgroundColor: '#fdf8ed' }}>💳</div>
              <h3 className="font-playfair text-xl font-bold text-white">Taxa de reserva · R$ {BOOKING_FEE_BRL}</h3>
              <p className="text-sm max-w-sm mx-auto" style={{ color: '#e8ddd0' }}>
                Pagamento seguro via SumUp. Esse valor confirma seu horário e{' '}
                <strong className="text-white">será integralmente descontado</strong>{' '}
                do procedimento caso você feche o tratamento na consulta.
              </p>
              <div id="sumup-card" className="min-h-[120px] flex items-center justify-center" />
              {error && <p className="text-red-400 text-xs">{error}</p>}
              <div className="flex flex-col gap-3">
                <button
                  onClick={handlePayment}
                  disabled={loading}
                  className="btn-gold w-full justify-center py-3.5 disabled:opacity-60"
                >
                  {loading ? 'Processando...' : `Pagar R$ ${BOOKING_FEE_BRL} com segurança`}
                </button>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs transition"
                  style={{ color: '#b5813a' }}
                  onMouseEnter={e => e.target.style.color = '#fff'}
                  onMouseLeave={e => e.target.style.color = '#b5813a'}
                >
                  ← Voltar
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto" style={{ background: 'linear-gradient(135deg, #C9960C, #CC6633)' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white">Agendamento confirmado!</h3>
              <p className="text-sm max-w-sm mx-auto" style={{ color: '#e8ddd0' }}>
                Obrigada, <span className="text-white font-semibold">{form.name}</span>!
                A Ingrid entrará em contato para confirmar todos os detalhes.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp mx-auto">Falar pelo WhatsApp</a>
              <button
                onClick={() => { setStep(1); setForm({ name: '', phone: '', procedure: PROCEDURES[0], note: '' }) }}
                className="block text-xs transition mx-auto"
                style={{ color: '#b5813a' }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = '#b5813a'}
              >
                Fazer novo agendamento
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-xs mt-4" style={{ color: '#b5813a' }}>
          A taxa de R$ {BOOKING_FEE_BRL} confirma seu compromisso e é descontada do procedimento.
          Avaliação de pele é sem custo.
        </p>
      </div>
    </section>
  )
}

export function BookingForm() {
  return ENABLE_ONLINE_BOOKING ? <OnlineBookingForm /> : <WhatsAppBooking />
}
