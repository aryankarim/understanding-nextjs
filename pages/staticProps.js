export default function staticProps({ posts }) {
  return (
    <>
      <div>Got static HTML page using getStaticProps feature</div>
      <ul>
        {posts.map((post) => (
          <li key={post.title}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
