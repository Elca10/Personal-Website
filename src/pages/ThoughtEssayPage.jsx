import { useParams, Link } from 'react-router-dom';
import essays from '../data/essays';

export default function ThoughtEssayPage() {
  const { id } = useParams();
  const essay = essays.find((e) => e.id === id);

  if (!essay) {
    return (
      <div className="max-w-2xl mx-auto px-8 py-12">
        <h1 className="text-2xl font-bold">Not found</h1>
        <p className="text-gray-400 mt-2">No essay found with id: {id}</p>
      </div>
    );
  }

  const paragraphs = essay.content.split('\n\n').filter(Boolean);

  return (
    <div className="max-w-2xl mx-auto px-10 py-14">
      <Link
        to="/essays"
        className="text-xs font-mono uppercase tracking-widest text-primary hover:underline mb-10 inline-block"
      >
        ← All Essays
      </Link>

      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold leading-tight mb-3">{essay.title}</h1>
        <p className="text-gray-400 font-mono text-sm tracking-wide">{essay.date}</p>
      </header>

      <hr className="border-white/10 mb-10" />

      <article className="space-y-6">
        {paragraphs.map((para, i) => (
          <p key={i} className="text-gray-200 leading-[1.85] text-base">
            {para}
          </p>
        ))}
      </article>
    </div>
  );
}
