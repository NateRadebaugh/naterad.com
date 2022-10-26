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
      <head></head>

      <body>
        <SkipNavLink />

        {children}
      </body>
    </html>
  );
}
