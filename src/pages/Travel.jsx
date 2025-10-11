import other from '../data/other'
import Carousel from '../components/Carousel'

export default function Travel() {
  const section = other.find((o) => o.id === 'travel')
  return (
    <div className="max-w-4xl mx-auto space-y-6 px-6">
      <h1 className="text-2xl font-bold">Travel</h1>
      <div className="space-y-6">
        {section.cards.map((c) => (
          <div key={c.id} className="border border-gray-700 rounded-lg p-4">
            <h3 className="font-semibold mb-2">{c.title}</h3>
            <Carousel images={c.images} />
            {c.statement && <p className="text-gray-400 mt-2">{c.statement}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
