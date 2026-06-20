export default function ThoughtEssays() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-8 text-center">
      <p className="kicker mb-4">Writing</p>
      <h1 className="text-4xl font-bold mb-4">Thought Essays</h1>
      <p className="text-gray-400 max-w-md mb-10 text-base leading-relaxed">
        Longer-form reflections on things I find worth thinking about. Hosted on a dedicated site.
      </p>
      <a
        href="https://thoughts.eliskaj.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary text-lg px-8 py-3"
      >
        Visit thoughts.eliskaj.com →
      </a>
    </div>
  );
}
