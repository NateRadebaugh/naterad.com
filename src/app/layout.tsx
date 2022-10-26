import { SkipNavLink } from "components/SkipNav";

import "../styles/tailwind.css";
import "../styles/styles.scss";
import "../styles/prism.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Nate Radebaugh</title>
        <meta
          name="Description"
          content="Hi I'm Nate Radebaugh. Manager, Software Solutions at BDO Digital in the western Chicago Suburbs. Graduate of Purdue University."
        />
        <meta name="theme-color" content="#317EFB" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons-192.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>

      <body>
        <SkipNavLink />

        {children}
      </body>
    </html>
  );
}
