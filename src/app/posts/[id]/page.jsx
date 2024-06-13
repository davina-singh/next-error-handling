import { notFound } from "next/navigation";

export default async function Post({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/${params.id}`
  );
  const post = await response.json();
  if (!post.title) {
    notFound;
  }
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
