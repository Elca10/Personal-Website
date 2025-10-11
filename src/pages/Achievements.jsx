import other from '../data/other'

export default function Achievements() {
  const section = other.find((o) => o.id === 'achievements')
  return (
    <div className="max-w-4xl mx-auto space-y-6 px-6">
      <h1 className="text-2xl font-bold">Achievements</h1>
      <div className="space-y-4">
        {section.cards.map((c) => (
          <div key={c.id} className="p-4 border border-gray-700 rounded-lg hover:border-primary transition">
            <h3 className="font-semibold text-white">{c.title}</h3>
            <p className="text-gray-400 text-sm">{c.description}</p>

            {/* Render links inside the card (support single object or array) */}
            {c.link && (
              <div className="mt-3 flex flex-wrap gap-3">
                {Array.isArray(c.link) ? (
                  c.link.map((ln, i) => (
                    <a key={i} href={ln.href} target="_blank" rel="noopener noreferrer" className="text-primary underline text-sm">
                      {ln.text}
                    </a>
                  ))
                ) : (
                  <a href={c.link.href} target="_blank" rel="noopener noreferrer" className="text-primary underline text-sm">
                    {c.link.text}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
