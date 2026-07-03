import { Link } from 'react-router-dom'
import work from '../data/work'
import { ProjectGridCard } from '../components/ProjectTemplate'

export default function Work() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 px-6">
      <h1 className="text-2xl font-bold mb-6">Work Experience</h1>
      <div className="mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {work.map((w) => (
          <Link key={w.id} to={`/work/${w.id}`}>
            <ProjectGridCard project={w} />
          </Link>
        ))}
      </div>
    </div>
  )
}
