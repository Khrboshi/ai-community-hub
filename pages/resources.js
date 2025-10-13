export default function Resources() {
  const resources = [
    { title: 'AI for Beginners', link: 'https://example.com/ai-beginners' },
    { title: 'Advanced AI Techniques', link: 'https://example.com/advanced-ai' }
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Resources</h1>
      <ul className="list-disc list-inside">
        {resources.map((res, i) => (
          <li key={i}>
            <a href={res.link} target="_blank" rel="noopener noreferrer" className="text-blue-600">
              {res.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
