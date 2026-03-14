const stats = [
  { value: '5+',    label: 'Anos de experiência',     icon: '🏆' },
  { value: '500+',  label: 'Pacientes atendidas',      icon: '💜' },
  { value: '100%',  label: 'Produtos ANVISA',          icon: '✅' },
  { value: '4.9★', label: 'Avaliação no Google',     icon: '⭐' },
]

export function TrustBar() {
  return (
    <section
      className="py-10"
      style={{ background: 'linear-gradient(135deg, #6E59A5 0%, #9b87f5 100%)' }}
    >
      <div className="section-wrapper grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ value, label, icon }) => (
          <div key={label} className="text-center">
            <p className="text-2xl mb-1">{icon}</p>
            <p className="font-playfair text-3xl font-bold text-white">{value}</p>
            <p className="text-brand-200 text-xs mt-1">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
