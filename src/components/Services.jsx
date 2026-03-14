import { WHATSAPP_LINK } from '../constants'

const services = [
  {
    emoji: '✨',
    title: 'Toxina botulínica',
    sub: 'Botox · Anti-rugas',
    desc: 'Suaviza rugas dinâmicas preservando expressão natural. Ideal para testa, glabela e pé de galinha. Resultado em até 7 dias.',
    color: '#4a3280',
    bg: '#f0ecff',
    border: '#ddd5f9',
    badge: 'Mais procurado',
  },
  {
    emoji: '🧠',
    title: 'Bioestimulador de colágeno',
    sub: 'Sculptra · Radiesse · Ellansé',
    desc: 'Estimula a produção natural de colágeno, restaurando volume e firmeza progressivamente. Resultados duram até 2 anos.',
    color: '#c9956c',
    bg: '#fdf3e7',
    border: '#f5e0c0',
    badge: null,
  },
  {
    emoji: '🌿',
    title: 'Rotina de Skincare',
    sub: 'Protocolo personalizado de pele',
    desc: 'Análise completa da sua pele para montar uma rotina diária sob medida: produtos, ordem de aplicação, ativos e cuidados sazonais.',
    color: '#6a4c9c',
    bg: '#f5f0fc',
    border: '#d9c8f0',
    badge: 'Novo',
  },
  {
    emoji: '🧖',
    title: 'Limpeza de pele',
    sub: 'Protocolo profissional',
    desc: 'Remoção profunda de impurezas e células mortas com hidratação intensiva. Pele visivelmente renovada logo na primeira sessão.',
    color: '#f687b3',
    bg: '#fff5f7',
    border: '#FFDEE2',
    badge: null,
  },
  {
    emoji: '🌱',
    title: 'Peeling químico',
    sub: 'Renovação celular',
    desc: 'Esfoliação controlada para uniformizar tom, atenuar manchas, linhas finas e marcas de acne. Progressivo e seguro.',
    color: '#7E69AB',
    bg: '#f0ecff',
    border: '#ddd5f9',
    badge: null,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="section-wrapper">
        <div className="text-center mb-14">
          <span className="section-tag">Tratamentos</span>
          <h2 className="section-title">Gerenciamento completo da sua pele</h2>
          <p className="section-sub mx-auto">
            Unimos estética avançada e skincare para criar um protocolo único—
            do tratamento clínico à rotina diária em casa.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title}
              className="relative rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl hover:shadow-brand-800/10 hover:-translate-y-1"
              style={{ backgroundColor: s.bg, borderColor: s.border }}
            >
              {s.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: s.color }}>
                  {s.badge}
                </span>
              )}
              <div className="text-3xl mb-3">{s.emoji}</div>
              <p className="text-[10px] uppercase tracking-widest font-semibold mb-1" style={{ color: s.color }}>{s.sub}</p>
              <h3 className="font-playfair text-lg font-bold text-brand-500 mb-2">{s.title}</h3>
              <p className="text-brand-400 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 h-0.5 w-8 rounded-full" style={{ backgroundColor: s.color + 'aa' }} />
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl p-8 text-center gradient-dark border border-brand-600">
          <p className="font-playfair text-xl font-bold text-white mb-2">
            Não sabe por onde começar?
          </p>
          <p className="text-brand-300 text-sm mb-6 max-w-md mx-auto">
            A Ingrid faz uma avaliação completa da sua pele e monta o protocolo
            ideal—unindo tratamentos clínicos e sua rotina direta de skincare.
          </p>
          <a href="#agendamento" className="btn-gold">
            Quero minha avaliação personalizada
          </a>
        </div>
      </div>
    </section>
  )
}
