export default function AchievementCard({ title, detail }) {
  return (
    <div className="border border-gray-700 p-4 rounded-lg hover:border-red-400 transition">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-400 text-sm">{detail}</p>
    </div>
  )
}
