import NextHead from "next/head";

function Head({ children }) {
  return (
    <NextHead>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icons-192.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {children}
    </NextHead>
  );
}

export default Head;
