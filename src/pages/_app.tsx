import Head from "next/head";
import "../styles/tailwind.css";
import "../styles/styles.scss";
import "../styles/prism.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
