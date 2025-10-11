import other from '../data/other'
import { Link } from 'react-router-dom'

export default function Other() {
  return (
  <div className="max-w-4xl mx-auto space-y-6 px-6">
      <h1 className="text-2xl font-bold">Other</h1>
      <div className="space-y-4">
        {other.map((s) => (
          <Link key={s.id} to={`/other/${s.id}`} className="flex items-start gap-4 p-4 border border-gray-700 rounded-lg hover:border-primary">
            <div className="w-12 h-12 bg-black/40 rounded flex items-center justify-center">{/* icon placeholder */}</div>
            <div>
              <h3 className="font-semibold">{s.title}</h3>
              <p className="text-gray-400 text-sm">{s.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
