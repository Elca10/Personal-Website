import { useParams } from 'react-router-dom'
import work from '../data/work'
import ProjectTemplate from '../components/ProjectTemplate'

export default function WorkPage() {
  const { id } = useParams()
  const entry = work.find((w) => w.id === id)

  if (!entry) {
    return (
      <div className="max-w-3xl mx-auto space-y-6 px-6">
        <h1 className="text-2xl font-bold">Not found</h1>
        <p className="text-gray-400">No work entry found with id: {id}</p>
      </div>
    )
  }

  return <ProjectTemplate project={entry} />
}
