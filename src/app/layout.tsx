import { SkipNavLink } from "components/SkipNav";
import { Metadata, Viewport } from "next";

import "../styles/tailwind.css";
import "../styles/styles.scss";
import "../styles/prism.scss";

export const metadata: Metadata = {
  title: "Nate Radebaugh",
  description:
    "Hi I'm Nate Radebaugh. Experienced Manager, Software Solutions at BDO Digital in the western Chicago Suburbs. Graduate of Purdue University.",
};

export const viewport: Viewport = {
  themeColor: "#317EFB",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
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
