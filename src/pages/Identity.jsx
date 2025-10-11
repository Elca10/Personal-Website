import other from '../data/other'
import { useState } from 'react'
import Lightbox from '../components/Lightbox'

export default function Identity() {
  const section = other.find((o) => o.id === 'identity')
  const [lightSrc, setLightSrc] = useState(null)

  if (!section) return <div className="max-w-4xl mx-auto">No identity content found.</div>

  const series = section.cards.filter(c => c.layout === 'vertical')
  const feature = section.cards.find(c => c.layout === 'horizontal')

  return (
    <div className="max-w-5xl mx-auto space-y-8 px-6">
      <div>
        <h1 className="text-2xl font-bold">{section.title}</h1>
        <p className="text-gray-400 mt-1">{section.description}</p>
      </div>

      {/* Row with three vertical cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {series.map((c) => (
          <div key={c.id} className="border border-gray-700 rounded-lg overflow-hidden">
            <button onClick={() => setLightSrc(c.full)} className="w-full block">
              <img src={c.thumbnail} alt={c.title} className="w-full h-48 object-cover" />
            </button>
            <div className="p-4 text-center">
              <h3 className="font-semibold">{c.title}</h3>
              {c.statement && <p className="text-sm text-gray-400 mt-2">{c.statement}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Full-width horizontal feature card */}
      {feature && (
        <div className="border border-gray-700 rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-stretch">
            <button onClick={() => setLightSrc(feature.full)} className="md:w-1/3 w-full block">
              <img src={feature.thumbnail} alt={feature.title} className="w-full h-64 md:h-full object-cover" />
            </button>
            <div className="p-6 md:w-2/3">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              {feature.statement && <p className="text-gray-300 mt-3">{feature.statement}</p>}
            </div>
          </div>
        </div>
      )}

      {lightSrc && <Lightbox src={lightSrc} alt="identity" onClose={() => setLightSrc(null)} />}
    </div>
  )
}
