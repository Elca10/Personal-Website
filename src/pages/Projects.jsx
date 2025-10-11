import { Link } from 'react-router-dom'
import projects from '../data/projects'
import { ProjectGridCard } from '../components/ProjectTemplate'

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto space-y-6 px-6">
  <h1 className="text-2xl font-bold mb-6">Projects</h1>

  <div className="mb-4" />

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <Link key={p.id} to={`/projects/${p.id}`}>
            <ProjectGridCard project={p} />
          </Link>
        ))}
      </div>
    </div>
  )
}