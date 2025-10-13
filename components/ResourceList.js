export default function ResourceList() {
  const resources = [
    { title: 'AI for Beginners', link: 'https://example.com/ai-beginners' },
    { title: 'Advanced AI Techniques', link: 'https://example.com/advanced-ai' },
    // Add more resources as needed
  ];

  return (
    <div>
      <h2>AI Resources</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              {resource.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
