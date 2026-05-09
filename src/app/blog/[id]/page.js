export default async function BlogPost({ params }) {
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

  const { id } = await params;
  const post = posts.find((p) => String(p.id) === id);
  console.log("params:", params);
  console.log("id:", params.id);
  console.log("post:", post);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
