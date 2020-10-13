import Head from "next/head";
import { ThemeProvider } from "next-themes";
import "@reach/skip-nav/styles.css";
import "../styles.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider
        defaultTheme="system"
        forcedTheme={Component.theme || undefined}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
