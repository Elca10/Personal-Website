import other from '../data/other'

export default function Coursework() {
  const section = other.find((o) => o.id === 'coursework')
  return (
    <div className="max-w-4xl mx-auto space-y-6 px-6">
      <h1 className="text-2xl font-bold">Coursework</h1>
      <div className="space-y-4">
        {section.cards.map((c) => (
          <div key={c.id} className="p-4 border border-gray-700 rounded-lg">
            <h3 className="font-semibold">{c.title}</h3>
            <p className="text-gray-400 text-sm">{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
