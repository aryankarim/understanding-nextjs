import Link from "next/link";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Link href="/staticProps" passHref>
          <h2
            style={{
              backgroundColor: pathname.startsWith("/staticProps")
                ? "#010101"
                : "transparent",
              borderRadius: "3em",
              padding: "10px",
              color: pathname.startsWith("/staticProps") ? "#fff" : "#010101",
              cursor: "pointer",
            }}
          >
            getStaticProps
          </h2>
        </Link>
        <Link href="/serverSideProps" passHref>
          <h2
            style={{
              backgroundColor: pathname.startsWith("/serverSideProps")
                ? "#010101"
                : "transparent",
              borderRadius: "3em",
              padding: "10px",
              color: pathname.startsWith("/serverSideProps")
                ? "#fff"
                : "#010101",
              cursor: "pointer",
            }}
          >
            getServerSideProps
          </h2>
        </Link>
        <Link href="/staticPaths" passHref>
          <h2
            style={{
              backgroundColor: pathname.startsWith("/staticPaths")
                ? "#010101"
                : "transparent",
              borderRadius: "3em",
              padding: "10px",
              color: pathname.startsWith("/staticPaths") ? "#fff" : "#010101",
              cursor: "pointer",
            }}
          >
            getStaticPaths
          </h2>
        </Link>
      </div>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
