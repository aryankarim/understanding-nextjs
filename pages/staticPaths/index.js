import Link from "next/link";

export default function index({ posts }) {
  return (
    <>
      <div>Got static HTML page using getStaticProps feature</div>
      <ul>
        {posts.map((post) => (
          <li key={post.title}>
            <Link href={"/staticPaths/" + post.id}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
