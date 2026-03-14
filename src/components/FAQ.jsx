import { useState } from 'react'

const faqs = [
  {
    q: 'Qual é a diferença entre botox e bioestimulador de colágeno?',
    a: 'O botox age nos músculos, relaxando-os para suavizar rugas dinâmicas. Já o bioestimulador estimula o próprio corpo a produzir colágeno, melhorando a firmeza e o volume da pele ao longo do tempo. Os dois são complementares e podem ser usados juntos.',
  },
  {
    q: 'Com que idade posso começar os tratamentos?',
    a: 'Não existe uma idade mínima rígida. O botox preventivo, por exemplo, já é recomendado a partir dos 25–30 anos. O importante é uma avaliação individualizada para entender o que faz sentido para o seu momento. Mulheres entre 30 e 65 anos são as que mais se beneficiam dos protocolos anti-idade.',
  },
  {
    q: 'Os procedimentos são dolorosos?',
    a: 'A maioria dos procedimentos provoca desconforto mínimo. Utilizamos agulhas ultra-finas e técnicas de aplicação que minimizam a dor. Para procedimentos mais sensíveis, usamos cream anestésico.',
  },
  {
    q: 'Quanto tempo dura o resultado do botox?',
    a: 'Em média, entre 4 e 6 meses. Com o tratamento contínuo, o intervalo entre as sessões tende a aumentar pois os músculos ficam mais relaxados naturalmente.',
  },
  {
    q: 'Preciso me afastar do trabalho após os procedimentos?',
    a: 'Geralmente não. A maioria dos procedimentos permite retorno imediato às atividades normais. Alguns podem apresentar leve vermidão ou inchaço por algumas horas, mas isso é passageiro.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="section-wrapper max-w-3xl">
        <div className="text-center mb-14">
          <span className="section-tag">Dúvidas frequentes</span>
          <h2 className="section-title">Perguntas e respostas</h2>
          <p className="section-sub mx-auto">
            Tire suas dúvidas sobre os procedimentos antes de agendar.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div
              key={i}
              className="rounded-2xl border overflow-hidden transition-all duration-200"
              style={{
                borderColor: open === i ? '#9b87f5' : '#E5DEFF',
                backgroundColor: open === i ? '#f5f3ff' : '#ffffff',
              }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-brand-500 text-sm md:text-base">{q}</span>
                <svg
                  className="w-5 h-5 flex-shrink-0 text-brand-300 transition-transform duration-200"
                  style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-brand-400 text-sm leading-relaxed">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
