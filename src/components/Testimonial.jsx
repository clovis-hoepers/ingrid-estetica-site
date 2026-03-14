const testimonials = [
  {
    name: 'Ana Paula S.',
    age: '47 anos',
    treatment: 'Bioestimulador de colágeno',
    text: 'Fiz o bioestimulador com a Ingrid e o resultado foi incrível. Ela tem um olhar muito cuidadoso e um toque delicado. Me senti super segura durante todo o procedimento.',
    stars: 5,
  },
  {
    name: 'Carla M.',
    age: '38 anos',
    treatment: 'Toxina botulínica',
    text: 'Já fiz botox em outros lugares, mas com a Ingrid o resultado foi o mais natural que já tive. Ela explica tudo com calma e respeita muito o rosto de cada paciente.',
    stars: 5,
  },
  {
    name: 'Fernanda R.',
    age: '54 anos',
    treatment: 'Peeling + Limpeza de pele',
    text: 'Comecei com limpeza de pele e depois fiz o peeling. Minha pele nunca esteve tão boa! Recomendo de olhos fechados para qualquer mulher que queira se cuidar.',
    stars: 5,
  },
]

export function Testimonial() {
  return (
    <section id="depoimentos" className="py-24" style={{ background: 'linear-gradient(180deg, #fdfcfb 0%, #f5f3ff 100%)' }}>
      <div className="section-wrapper">
        <div className="text-center mb-14">
          <span className="section-tag">Depoimentos</span>
          <h2 className="section-title">O que dizem nossas pacientes</h2>
          <p className="section-sub mx-auto">Resultados reais, experiências reais.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map(({ name, age, treatment, text, stars }) => (
            <div key={name} className="card-hover relative">
              {/* Aspas decorativas */}
              <div className="absolute top-4 right-5 font-playfair text-6xl leading-none text-brand-100 select-none">”</div>

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: stars }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-[#c9956c]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              <p className="text-sm leading-relaxed text-brand-400 mb-5 italic">&ldquo;{text}&rdquo;</p>

              <div className="border-t border-brand-50 pt-4">
                <p className="font-semibold text-brand-500 text-sm">{name}</p>
                <p className="text-xs text-brand-300 mt-0.5">{age} · {treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
