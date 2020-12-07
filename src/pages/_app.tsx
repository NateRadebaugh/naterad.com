import { GlobalStyles } from "twin.macro";
import Head from "next/head";
import "../styles/styles.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
