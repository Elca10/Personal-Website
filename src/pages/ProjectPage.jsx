import { useParams } from 'react-router-dom'
import projects from '../data/projects'
import ProjectTemplate from '../components/ProjectTemplate'

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="max-w-3xl mx-auto space-y-6 px-6">
        <h1 className="text-2xl font-bold">Not found</h1>
        <p className="text-gray-400">No project found with id: {id}</p>
      </div>
    )
  }

  return <ProjectTemplate project={project} />
}
