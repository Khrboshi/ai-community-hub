export default function Community() {
  const members = [
    { name: 'Alice', role: 'Moderator' },
    { name: 'Bob', role: 'Member' },
    { name: 'Charlie', role: 'Member' }
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Community</h1>
      <ul className="list-disc list-inside">
        {members.map((member, i) => (
          <li key={i}>{member.name} - {member.role}</li>
        ))}
      </ul>
    </div>
  );
}
