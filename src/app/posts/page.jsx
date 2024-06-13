import Link from "next/link";

export default async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <div>
      <h1>Posts Page</h1>
      <p>This is the page with posts</p>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
