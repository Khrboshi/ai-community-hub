import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      ...data,
      slug: filename.replace(".md", ""),
      // Ensure safe fallback if content is undefined
      summary: content ? content.split(" ").slice(0, 30).join(" ") + "..." : "",
    };
  });

  return {
    props: {
      posts: posts.filter((post) => post.title), // filter out invalid posts
    },
  };
}

export default function Blogs({ posts }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">AI Community Blog</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.summary}</p>
            <Link
              href={`/posts/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
