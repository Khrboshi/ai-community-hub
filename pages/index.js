import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">AI Community Hub</h1>
      <p>Welcome to the AI Community Hub! Explore blogs, resources, and join the community.</p>
      <ul className="mt-6 list-disc list-inside">
        <li><Link href="/blogs" className="text-blue-600">Blogs</Link></li>
        <li><Link href="/community" className="text-blue-600">Community</Link></li>
        <li><Link href="/resources" className="text-blue-600">Resources</Link></li>
      </ul>
    </div>
  );
}
