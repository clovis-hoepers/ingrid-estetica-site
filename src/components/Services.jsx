import { WHATSAPP_LINK } from '../constants'

const services = [
  {
    emoji: '✨',
    title: 'Toxina botulínica',
    sub: 'Botox · Anti-rugas',
    desc: 'Suaviza rugas de expressão preservando naturalidade e movimento. Resultado visível em até 7 dias, com duração de 4 a 6 meses. Aplicação precisa por farmacêutica especialista, com produtos ANVISA.',
    color: '#8B5E2C',
    bg: '#fdf8f0',
    border: '#f7e8cc',
    badge: 'Mais procurado',
  },
  {
    emoji: '🧠',
    title: 'Bioestimulador de colágeno',
    sub: 'Sculptra · Radiesse · Ellanée',
    desc: 'Reativa a produção natural de colágeno, devolvendo firmeza, volume e vitalidade progressivamente. Resultados duram até 2 anos. A maturidade da pele tratada com ciência.',
    color: '#CC6633',
    bg: '#fef0e8',
    border: '#f9d5bb',
    badge: null,
  },
  {
    emoji: '👁️',
    title: 'Protocolo anti-olheiras',
    sub: 'Rejuvenescimento periorbital',
    desc: 'Tratamento especializado para a região dos olhos: reduz olheiras profundas, bolsas e o aspecto cansado. Combina preenchedores e bioestimuladores para um olhar mais fresco e descansado.',
    color: '#C9960C',
    bg: '#fdf8ed',
    border: '#f7e8cc',
    badge: 'Novo',
  },
  {
    emoji: '🌿',
    title: 'Rotina de Skincare',
    sub: 'Protocolo personalizado de pele',
    desc: 'Sua pele tem necessidades únicas. A Ingrid analisa seu bioma cutâneo e monta uma rotina diária sob medida — ativos certos, ordem correta, produtos ANVISA — para resultados reais em casa.',
    color: '#b5813a',
    bg: '#fdf8f0',
    border: '#edd4a0',
    badge: null,
  },
  {
    emoji: '🧖',
    title: 'Limpeza de pele',
    sub: 'Protocolo profissional',
    desc: 'Extração profunda, esfoliação e hidratação intensiva em protocolo profissional. Pele visivelmente renovada, poros destampados e luminosidade restaurada logo na primeira sessão.',
    color: '#8B5E2C',
    bg: '#faf7f2',
    border: '#e8ddd0',
    badge: null,
  },
  {
    emoji: '🌱',
    title: 'Peeling químico',
    sub: 'Renovação celular',
    desc: 'Esfoliação controlada com ácidos certificados pela ANVISA para uniformizar o tom, apagar manchas, atenuar linhas finas e marcas de acne. Progressivo, seguro e com resultado comprovado.',
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
            Cada protocolo é criado individualmente pela Ingrid — unindo ciência
            dermática, estética avançada e skincare personalizado. Todos os produtos
            utilizados são 100% certificados pela ANVISA.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
          className="mt-12 rounded-2xl p-6 sm:p-8 text-center border"
          style={{
            background: 'linear-gradient(135deg, #2d1c0a 0%, #4a2e12 100%)',
            borderColor: '#6e4720',
          }}
        >
          <p className="font-playfair text-xl font-bold text-white mb-2">
            Não sabe por onde começar?
          </p>
          <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: '#e8ddd0' }}>
            A Ingrid realiza uma avaliação completa da sua pele e monta o protocolo
            ideal — unindo tratamentos clínicos e rotina de skincare diária.
            Sua transformação começa com uma conversa.
          </p>
          <a href="#agendamento" className="btn-gold">
            Quero minha avaliação personalizada
          </a>
        </div>
      </div>
    </section>
  )
}
