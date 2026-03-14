import { useState } from 'react'
import {
  WHATSAPP_LINK,
  BOOKING_FEE_BRL,
  BOOKING_FEE_LABEL,
  GOOGLE_CALENDAR_APPOINTMENT_URL,
  SUMUP_CHECKOUT_ID,
} from '../constants'

const PROCEDURES = [
  'Avaliação de pele (gratuita)',
  'Toxina botulínica (Botox)',
  'Bioestimulador de colágeno',
  'Rotina de Skincare personalizada',
  'Limpeza de pele',
  'Peeling químico',
]

// Inicia checkout SumUp via SDK JS ou redireciona para link de pagamento
function initSumUpCheckout(checkoutId, onSuccess, onError) {
  // SumUp Web SDK: https://developer.sumup.com/online-payments/tools/web-sdk
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
  // Fallback: redireciona para link de pagamento SumUp (gerar via dashboard)
  window.open(`https://pay.sumup.com/b2c/SUBSTITUA_PELO_LINK_SUMUP`, '_blank')
}

export function BookingForm() {
  const [step, setStep] = useState(1)   // 1: dados | 2: pagamento | 3: confirm
  const [form, setForm] = useState({ name: '', phone: '', procedure: PROCEDURES[0], note: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const isPaid = form.procedure === PROCEDURES[0]  // avaliação é gratuita

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmitData = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) { setError('Preencha nome e telefone.'); return }
    setError('')
    if (isPaid) {
      setStep(3)  // avaliação gratuita vai direto para confirmação
    } else {
      setStep(2)
    }
  }

  const handlePayment = () => {
    setLoading(true)
    initSumUpCheckout(
      SUMUP_CHECKOUT_ID,
      () => { setLoading(false); setStep(3) },
      () => { setLoading(false); setError('Pagamento não processado. Tente novamente ou pague pelo WhatsApp.') },
    )
  }

  return (
    <section id="agendamento" className="py-24 gradient-dark">
      <div className="section-wrapper max-w-2xl">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 bg-brand-600 border border-brand-500 px-3 py-1 rounded-full mb-4">
            Agendamento online
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-3">
            Reserve sua consulta
          </h2>
          <p className="text-brand-300 max-w-md mx-auto">
            Preencha o formulário, escolha o horário no Google Agenda e confirme
            com a taxa de agendamento de{' '}
            <span className="text-gold-300 font-semibold">R$ {BOOKING_FEE_BRL}</span>
            {' '}(descontada no procedimento).
          </p>
        </div>

        {/* Indicador de etapas */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {['Dados', 'Pagamento', 'Confirmação'].map((label, i) => (
            <div key={label} className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                step > i + 1 ? 'bg-gold-400 text-white'
                : step === i + 1 ? 'bg-white text-brand-500'
                : 'bg-brand-600 text-brand-300'
              }`}>
                {step > i + 1 ? '✓' : i + 1}
              </div>
              <span className={`text-xs hidden sm:block ${ step === i + 1 ? 'text-white font-semibold' : 'text-brand-400'}`}>
                {label}
              </span>
              {i < 2 && <div className="w-8 h-px bg-brand-600" />}
            </div>
          ))}
        </div>

        <div className="bg-brand-700 border border-brand-600 rounded-2xl p-8 shadow-2xl">

          {/* ETAPA 1: Dados */}
          {step === 1 && (
            <form onSubmit={handleSubmitData} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs text-brand-300 font-semibold uppercase tracking-wider mb-1.5">Nome completo</label>
                  <input
                    type="text" required
                    value={form.name} onChange={(e) => update('name', e.target.value)}
                    placeholder="Seu nome"
                    className="w-full rounded-xl bg-brand-600 border border-brand-500 text-white placeholder-brand-400 px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs text-brand-300 font-semibold uppercase tracking-wider mb-1.5">WhatsApp</label>
                  <input
                    type="tel" required
                    value={form.phone} onChange={(e) => update('phone', e.target.value)}
                    placeholder="(47) 9 9999-9999"
                    className="w-full rounded-xl bg-brand-600 border border-brand-500 text-white placeholder-brand-400 px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-brand-300 font-semibold uppercase tracking-wider mb-1.5">Procedimento de interesse</label>
                <select
                  value={form.procedure} onChange={(e) => update('procedure', e.target.value)}
                  className="w-full rounded-xl bg-brand-600 border border-brand-500 text-white px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition"
                >
                  {PROCEDURES.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs text-brand-300 font-semibold uppercase tracking-wider mb-1.5">
                  Escolha data e horário
                </label>
                <a
                  href={GOOGLE_CALENDAR_APPOINTMENT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 w-full rounded-xl bg-brand-600 border border-brand-500 text-white px-4 py-3 text-sm hover:border-gold-400 transition group"
                >
                  <svg className="w-5 h-5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span className="group-hover:text-gold-300 transition">Abrir Google Agenda → Escolher horário</span>
                </a>
                <p className="text-[11px] text-brand-400 mt-1.5 ml-1">
                  Após escolher o horário no Google Agenda, volte aqui para concluir.
                </p>
              </div>

              <div>
                <label className="block text-xs text-brand-300 font-semibold uppercase tracking-wider mb-1.5">Observações (opcional)</label>
                <textarea
                  value={form.note} onChange={(e) => update('note', e.target.value)}
                  rows={3} placeholder="Alergias, medicamentos em uso, preocupações com a pele..."
                  className="w-full rounded-xl bg-brand-600 border border-brand-500 text-white placeholder-brand-400 px-4 py-3 text-sm focus:outline-none focus:border-gold-400 transition resize-none"
                />
              </div>

              {error && <p className="text-red-400 text-xs">{error}</p>}

              <button type="submit" className="btn-gold w-full justify-center py-3.5">
                {isPaid ? 'Confirmar agendamento gratuito' : `Prosseguir para pagamento · R$ ${BOOKING_FEE_BRL}`}
              </button>
            </form>
          )}

          {/* ETAPA 2: Pagamento SumUp */}
          {step === 2 && (
            <div className="text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gold-100 flex items-center justify-center mx-auto text-3xl">💳</div>
              <h3 className="font-playfair text-xl font-bold text-white">Taxa de agendamento</h3>
              <p className="text-brand-300 text-sm max-w-sm mx-auto">
                {BOOKING_FEE_LABEL}. Este valor é descontado do procedimento
                no dia da consulta.
              </p>

              {/* Container onde o SumUp SDK monta o formulário de cartão */}
              <div id="sumup-card" className="min-h-[120px] flex items-center justify-center" />

              {error && <p className="text-red-400 text-xs">{error}</p>}

              <div className="flex flex-col gap-3">
                <button onClick={handlePayment} disabled={loading}
                  className="btn-gold w-full justify-center py-3.5 disabled:opacity-60">
                  {loading ? 'Processando...' : `Pagar R$ ${BOOKING_FEE_BRL} · SumUp`}
                </button>
                <button onClick={() => setStep(1)} className="text-brand-300 text-xs hover:text-white transition">
                  ← Voltar
                </button>
              </div>

              <p className="text-[11px] text-brand-400">
                Pagamento seguro processado pelo SumUp. Seus dados não são armazenados.
              </p>
            </div>
          )}

          {/* ETAPA 3: Confirmação */}
          {step === 3 && (
            <div className="text-center space-y-6 py-4">
              <div className="w-16 h-16 rounded-full bg-gold-400 flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white">Agendamento confirmado!</h3>
              <p className="text-brand-300 text-sm max-w-sm mx-auto">
                Obrigada, <span className="text-white font-semibold">{form.name}</span>! Seu agendamento foi
                registrado. A Ingrid entrará em contato pelo WhatsApp
                para confirmar o horário escolhido.
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-whatsapp mx-auto">
                Falar com a Ingrid pelo WhatsApp
              </a>
              <button onClick={() => { setStep(1); setForm({ name:'', phone:'', procedure: PROCEDURES[0], note:'' }) }}
                className="block text-brand-400 text-xs hover:text-white transition mx-auto mt-2">
                Fazer novo agendamento
              </button>
            </div>
          )}
        </div>

        {/* Alerta sobre a taxa */}
        <p className="text-center text-xs text-brand-400 mt-4">
          A taxa de R$ {BOOKING_FEE_BRL} é cobrada para confirmar o compromisso e é totalmente
          descontada do valor do procedimento. Avaliações de pele são gratuitas.
        </p>
      </div>
    </section>
  )
}
