import { WHATSAPP_LINK } from '../constants'

const services = [
  {
    emoji: '\u2728',
    title: 'Toxina botul\u00ednica',
    sub: 'Botox \u00b7 Anti-rugas',
    desc: 'Suaviza rugas din\u00ecinicas preservando express\u00e3o natural. Ideal para testa, glabela e p\u00e9 de galinha. Resultado em at\u00e9 7 dias com produtos certificados pela ANVISA.',
    color: '#8B5E2C',
    bg: '#fdf8f0',
    border: '#f7e8cc',
    badge: 'Mais procurado',
  },
  {
    emoji: '\ud83e\udde0',
    title: 'Bioestimulador de col\u00e1geno',
    sub: 'Sculptra \u00b7 Radiesse \u00b7 Ellan\u00e9e',
    desc: 'Estimula a produ\u00e7\u00e3o natural de col\u00e1geno, restaurando volume e firmeza progressivamente. Resultados duram at\u00e9 2 anos. Produtos ANVISA certificados.',
    color: '#CC6633',
    bg: '#fef0e8',
    border: '#f9d5bb',
    badge: null,
  },
  {
    emoji: '\ud83d\udc41\ufe0f',
    title: 'Protocolo anti-olheiras',
    sub: 'Rejuvenescimento periorbital',
    desc: 'Tratamento especializado para redu\u00e7\u00e3o de olheiras e bolsas, combinando preenchedores e bioestimuladores na regi\u00e3o periorbital. Resultados naturais e duradouros.',
    color: '#C9960C',
    bg: '#fdf8ed',
    border: '#f7e8cc',
    badge: 'Novo',
  },
  {
    emoji: '\ud83c\udf3f',
    title: 'Rotina de Skincare',
    sub: 'Protocolo personalizado de pele',
    desc: 'An\u00e1lise completa da sua pele com farmac\u00eautica especialista para montar rotina di\u00e1ria sob medida: ativos, ordem de aplica\u00e7\u00e3o e cuidados sazonais.',
    color: '#b5813a',
    bg: '#fdf8f0',
    border: '#edd4a0',
    badge: null,
  },
  {
    emoji: '\ud83e\uddd6',
    title: 'Limpeza de pele',
    sub: 'Protocolo profissional',
    desc: 'Remo\u00e7\u00e3o profunda de impurezas e c\u00e9lulas mortas com hidrata\u00e7\u00e3o intensiva. Pele visivelmente renovada logo na primeira sess\u00e3o.',
    color: '#8B5E2C',
    bg: '#faf7f2',
    border: '#e8ddd0',
    badge: null,
  },
  {
    emoji: '\ud83c\udf31',
    title: 'Peeling qu\u00edmico',
    sub: 'Renova\u00e7\u00e3o celular',
    desc: 'Esfolia\u00e7\u00e3o controlada para uniformizar tom, atenuar manchas, linhas finas e marcas de acne. Progressivo e seguro com ativos ANVISA aprovados.',
    color: '#CC6633',
    bg: '#fef0e8',
    border: '#f9d5bb',
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
            Unimos est\u00e9tica avan\u00e7ada e skincare para criar um protocolo \u00fanico\u2014
            do tratamento cl\u00ednico \u00e0 rotina di\u00e1ria em casa.
            Todos os produtos utilizados s\u00e3o certificados pela ANVISA.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative rounded-2xl border p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                backgroundColor: s.bg,
                borderColor: s.border,
                boxShadow: '0 2px 8px rgba(139,94,44,0.07)',
              }}
            >
              {s.badge && (
                <span
                  className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
                  style={{ backgroundColor: s.color }}
                >
                  {s.badge}
                </span>
              )}
              <div className="text-3xl mb-3">{s.emoji}</div>
              <p
                className="text-[10px] uppercase tracking-widest font-semibold mb-1"
                style={{ color: s.color }}
              >
                {s.sub}
              </p>
              <h3
                className="font-playfair text-lg font-bold mb-2"
                style={{ color: '#4a2e12' }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#6e4720' }}>{s.desc}</p>
              <div className="mt-4 h-0.5 w-8 rounded-full" style={{ backgroundColor: s.color + 'bb' }} />
            </div>
          ))}
        </div>

        <div
          className="mt-12 rounded-2xl p-8 text-center border"
          style={{
            background: 'linear-gradient(135deg, #2d1c0a 0%, #4a2e12 100%)',
            borderColor: '#6e4720',
          }}
        >
          <p className="font-playfair text-xl font-bold text-white mb-2">
            N\u00e3o sabe por onde come\u00e7ar?
          </p>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: '#e8ddd0' }}>
            A Ingrid faz uma avalia\u00e7\u00e3o completa da sua pele e monta o protocolo
            ideal\u2014unindo tratamentos cl\u00ednicos e sua rotina direta de skincare.
            Todos os produtos s\u00e3o 100% certificados pela ANVISA.
          </p>
          <a href="#agendamento" className="btn-gold">
            Quero minha avalia\u00e7\u00e3o personalizada
          </a>
        </div>
      </div>
    </section>
  )
}
