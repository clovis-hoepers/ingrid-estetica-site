import { WHATSAPP_LINK } from '../constants'

const services = [
  {
    icon: '✨',
    title: 'Toxina botulínica',
    subtitle: 'Botox',
    description:
      'Suaviza rugas dinâmicas preservando a expressão natural. Resultado imediato e durarouro, ideal para testa, glabela e pé de galinha.',
    highlight: 'Mais procurado',
  },
  {
    icon: '🧠',
    title: 'Bioestimulador de colágeno',
    subtitle: 'Sculptra · Radiesse · Ellansé',
    description:
      'Estimula a produção natural de colágeno, restaurando o volume facial e melhorando a firmeza da pele progressivamente.',
    highlight: null,
  },
  {
    icon: '🧖',
    title: 'Limpeza de pele',
    subtitle: 'Protocolo profissional',
    description:
      'Remoção profunda de impurezas, cravos e células mortas com hidratação intensiva para uma pele visivelmente renovada.',
    highlight: null,
  },
  {
    icon: '🌱',
    title: 'Peeling químico',
    subtitle: 'Renovação celular',
    description:
      'Esfoliação controlada que uniformiza o tom da pele, atenua manchas, acne e linhas finas com resultados progressivos e seguros.',
    highlight: null,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="section-wrapper">
        <div className="text-center mb-14">
          <span className="section-tag">O que oferecemos</span>
          <h2 className="section-title">Tratamentos especializados</h2>
          <p className="section-subtitle mx-auto">
            Cada protocolo é pensado individualmente para respeitar sua anatomia
            e potencializar sua beleza natural.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="card-hover relative">
              {s.highlight && (
                <span className="absolute top-4 right-4 text-xs font-medium bg-blush-100 text-blush-400 px-3 py-1 rounded-full">
                  {s.highlight}
                </span>
              )}
              <div className="text-3xl mb-4">{s.icon}</div>
              <p className="text-xs uppercase tracking-widest text-brand-300 font-medium mb-1">{s.subtitle}</p>
              <h3 className="font-playfair text-xl font-bold text-brand-500 mb-3">{s.title}</h3>
              <p className="text-brand-400 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="btn-primary">
            Quero saber qual tratamento é para mim
          </a>
        </div>
      </div>
    </section>
  )
}
