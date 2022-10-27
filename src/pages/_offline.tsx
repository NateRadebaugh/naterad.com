import Link from "components/Link";
import Head from "next/head";

export default function Fallback() {
  return (
    <>
      <Head>
        <title>Nate Radebaugh</title>
      </Head>

      <h1>Nate Radebaugh</h1>
      <h2>
        You&lsquo;re offline, so here&lsquo;s some high-level info if you want
        to get in touch:
      </h2>
      <p>530-628-3723 (mobile)</p>
      <p>nate.radebaugh@outlook.com</p>

      <ul>
        <li>
          <Link href="https://www.linkedin.com/in/nateradebaugh/">
            Find me on LinkedIn
          </Link>
        </li>
        <li>
          <Link href="https://github.com/NateRadebaugh">Find me on GitHub</Link>
        </li>
      </ul>
    </>
  );
}
