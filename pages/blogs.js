import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function Blogs({ posts }) {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Blogs</h1>
      <ul className="list-disc list-inside">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blogs/${post.slug}`} className="text-blue-600">{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const dir = path.join(process.cwd(), 'content', 'blogs');
  const filenames = fs.readdirSync(dir);
  const posts = filenames.map((filename) => {
    const content = fs.readFileSync(path.join(dir, filename), 'utf-8');
    const [meta, ...rest] = content.split('---').slice(1);
    const titleLine = meta.split('\n').find(line => line.startsWith('title:'));
    const title = titleLine?.replace('title:', '').trim() || filename;
    return { slug: filename.replace('.md', ''), title };
  });

  return { props: { posts } };
}
