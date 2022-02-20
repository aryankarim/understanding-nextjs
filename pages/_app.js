import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <h2>
          <Link href="/staticProps">getStaticProps</Link>
        </h2>
        <h2>
          <Link href="/serverSideProps">getServerSideProps</Link>
        </h2>
        <h2>
          <Link href="/staticPaths">getStaticPaths</Link>
        </h2>
      </div>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
