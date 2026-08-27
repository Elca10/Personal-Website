import other from '../data/other'

export default function Coursework() {
  const section = other.find((o) => o.id === 'coursework')
  return (
    <div className="max-w-4xl mx-auto space-y-10 px-6">
      <h1 className="text-2xl font-bold">Coursework</h1>
      {section.sections.map((sec) => (
        <div key={sec.title} className="space-y-4">
          <h2 className="text-lg font-semibold text-primary">{sec.title}</h2>
          <div className="space-y-4">
            {sec.cards.map((c) => (
              <div key={c.id} className="p-4 border border-gray-700 rounded-lg">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-gray-400 text-sm">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
