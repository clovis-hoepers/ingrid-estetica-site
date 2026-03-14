const services = [
  {
    title: 'Toxina botulínica (Botox)',
    description:
      'Suavização de rugas dinâmicas da testa, glabela e região dos olhos, preservando a expressão natural do rosto.',
  },
  {
    title: 'Bioestimulador de colágeno',
    description:
      'Tratamento que estimula a produção de colágeno, melhorando firmeza, contorno facial e qualidade da pele ao longo do tempo.',
  },
  {
    title: 'Limpeza de pele',
    description:
      'Protocolo completo para remoção de impurezas, cravos e miliuns, com hidratação e recuperação da barreira cutânea.',
  },
  {
    title: 'Peeling químico',
    description:
      'Renovação celular controlada para uniformizar o tom, suavizar manchas e linhas de expressão.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="section-title">Tratamentos</h2>
        <p className="section-subtitle">
          Cada protocolo é planejado individualmente, respeitando a anatomia e
          os objetivos de cada paciente.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="card">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
