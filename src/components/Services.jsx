import { WHATSAPP_LINK } from '../constants'

const services = [
  {
    emoji: '✨',
    title: 'Toxina botulínica',
    sub: 'Botox',
    desc: 'Suaviza rugas dinâmicas preservando expressão natural. Ideal para testa, glabela e pé de galinha.',
    highlight: true,
    badge: 'Mais procurado',
    color: '#6E59A5',
    bg: '#f5f3ff',
  },
  {
    emoji: '🧠',
    title: 'Bioestimulador de colágeno',
    sub: 'Sculptra · Radiesse · Ellansé',
    desc: 'Estimula produção natural de colágeno, restaurando volume e firmeza da pele progressivamente.',
    highlight: false,
    badge: null,
    color: '#c9956c',
    bg: '#fdf6f0',
  },
  {
    emoji: '🧖',
    title: 'Limpeza de pele',
    sub: 'Protocolo profissional',
    desc: 'Remoção profunda de impurezas e células mortas com hidratação intensiva. Pele visivelmente renovada.',
    highlight: false,
    badge: null,
    color: '#f687b3',
    bg: '#fff5f7',
  },
  {
    emoji: '🌱',
    title: 'Peeling químico',
    sub: 'Renovação celular',
    desc: 'Esfoliação controlada para uniformizar tom, atenuar manchas e linhas finas com resultados progressivos.',
    highlight: false,
    badge: null,
    color: '#7E69AB',
    bg: '#f5f3ff',
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="section-wrapper">
        <div className="text-center mb-14">
          <span className="section-tag">O que oferecemos</span>
          <h2 className="section-title">Tratamentos especializados</h2>
          <p className="section-sub mx-auto">
            Cada protocolo é pensado individualmente para respeitar sua
            anatomia e potencializar sua beleza natural.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{ backgroundColor: s.bg, borderColor: s.color + '22' }}
            >
              {s.badge && (
                <span
                  className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: s.color }}
                >
                  {s.badge}
                </span>
              )}
              <div className="text-3xl mb-3">{s.emoji}</div>
              <p className="text-xs uppercase tracking-widest font-medium mb-1" style={{ color: s.color }}>
                {s.sub}
              </p>
              <h3 className="font-playfair text-xl font-bold text-brand-500 mb-3">{s.title}</h3>
              <p className="text-brand-400 text-sm leading-relaxed">{s.desc}</p>

              {/* Linha decorativa */}
              <div className="mt-5 h-0.5 w-8 rounded-full" style={{ backgroundColor: s.color + '88' }} />
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl p-8 text-center"
             style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #fff5f7 100%)', border: '1px solid #E5DEFF' }}>
          <p className="font-playfair text-xl font-bold text-brand-500 mb-2">
            Não sabe qual tratamento é ideal para você?
          </p>
          <p className="text-brand-400 text-sm mb-6 max-w-md mx-auto">
            A Ingrid faz uma avaliação personalizada gratuita para indicar o
            protocolo mais adequado para o seu rosto e objetivos.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-gold">
            Quero minha avaliação gratuita
          </a>
        </div>
      </div>
    </section>
  )
}
