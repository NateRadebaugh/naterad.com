import Head from "next/head";
import "../styles/prism.scss";
import "../styles/styles.scss";
import "../styles/tailwind.css";

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
