export default function ProjectCard({ title, description }) {
  return (
    <div className="border border-gray-700 p-4 rounded-lg hover:border-red-400 transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  )
}
