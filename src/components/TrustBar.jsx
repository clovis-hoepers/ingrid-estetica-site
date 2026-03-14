const stats = [
  { value: '5+',    label: 'Anos de experiência' },
  { value: '500+',  label: 'Pacientes atendidas' },
  { value: '100%',  label: 'Produtos certificados' },
  { value: '4.9★', label: 'Avaliação média' },
]

export function TrustBar() {
  return (
    <section className="bg-brand-500 py-10">
      <div className="section-wrapper grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <p className="font-playfair text-3xl font-bold text-white">{value}</p>
            <p className="text-brand-200 text-sm mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
