import Link from "next/link";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Getting Started with React",
      body: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      title: "Understanding Next.js",
      body: "Next.js is a React framework with server side rendering.",
    },
    {
      id: 3,
      title: "Tailwind CSS Tips",
      body: "Tailwind CSS is a utility first CSS framework.",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          {post.title}
        </Link>
      ))}
    </div>
  );
}
