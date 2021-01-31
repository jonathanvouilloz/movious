import "../css/index.css";
import Head from "next/head";
import Layout from "src/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Movious</title>
        <meta
          name="Description"
          content="A Next.js starter styled using Tailwind CSS."
        />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}


export default MyApp;
