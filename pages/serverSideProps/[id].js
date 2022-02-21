export default function Post({ post }) {
  return (
    <div>
      <span>Post Title: </span>
      <h1>{post.title}</h1>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}
