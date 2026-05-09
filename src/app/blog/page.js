import Link from "next/link";
import { posts } from "@/lib/posts";

export default function Home() {
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
