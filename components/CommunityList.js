export default function CommunityList() {
  const members = [
    { name: 'Alice', role: 'Moderator' },
    { name: 'Bob', role: 'Member' },
    // Add more members as needed
  ];

  return (
    <div>
      <h2>Community Members</h2>
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            {member.name} - {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
}
