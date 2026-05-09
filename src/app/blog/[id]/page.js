import { posts } from "@/lib/posts";

export default async function BlogPost({ params }) {
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
