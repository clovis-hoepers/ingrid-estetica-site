const stats = [
  { value: '5+',    label: 'Anos de experiência',  icon: '🏆' },
  { value: '500+',  label: 'Pacientes atendidas',   icon: '✨' },
  { value: '100%',  label: 'Produtos ANVISA',       icon: '✅' },
  { value: '4.9★', label: 'Avaliação Google',      icon: '⭐' },
]

export function TrustBar() {
  return (
    <section
      className="py-10 border-y"
      style={{
        background: 'linear-gradient(135deg, #2d1c0a 0%, #4a2e12 100%)',
        borderColor: '#6e4720',
      }}
    >
      <div className="section-wrapper grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map(({ value, label, icon }) => (
          <div key={label} className="text-center">
            <p className="text-2xl mb-1">{icon}</p>
            <p className="font-playfair text-3xl font-bold" style={{ color: '#e8c96a' }}>{value}</p>
            <p className="text-xs mt-1" style={{ color: '#e8ddd0' }}>{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
