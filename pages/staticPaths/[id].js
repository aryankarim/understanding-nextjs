export default function Post({ post }) {
  return (
    <div>
      <span>Post Title: </span>
      {post.title}
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: String(post.id) },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  // { fallback: true } means continues to build the pages(will show undefined props errors).
  // { fallback: "blocking" } shows html without error.
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }) {
  console.log("revalidating/regenerating");
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  return { props: { post } };
}
