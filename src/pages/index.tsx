import Head from "next/head";
import Link from "next/link";
import { darken } from "polished";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faCalendarAlt,
  faCommentAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./index.module.scss";

interface TileProps {
  icon: any;
  text: string;
  href: string;
  [x: string]: any;
}

function Tile({ icon, text, colspan, color, ...props }: TileProps) {
  const isInternal = props.href?.startsWith("http");

  const content = (
    <a {...props}>
      <FontAwesomeIcon size="6x" icon={icon} className={styles.tileIcon} />
      <h3 className={styles.tileText}>{text}</h3>
    </a>
  );

  if (isInternal) {
    return <Link href={props.href}>{content}</Link>;
  }

  return content;
}

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>nate radebaugh</title>
        <meta
          name="Description"
          content="Hi I'm Nate Radebaugh. Senior Associate, Software Solutions at BDO Digital in the western Chicago Suburbs. Graduate of Purdue University."
        />
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <header>
        <h1 className={styles.title}>nate radebaugh</h1>
        <p className={styles.introText}>
          <strong>Senior Senior Associate, Software Solutions</strong> at{" "}
          <strong>BDO Digital</strong> in the western Chicago Suburbs. Graduate
          of Purdue University.
        </p>
      </header>

      <Tile
        className={styles.blogTile}
        href="/blog"
        icon={faCommentAlt}
        text="blog"
      />

      <Tile
        className={styles.datetimeTile}
        href="https://react-datetime.naterad.com"
        target="_blank"
        rel="noopener noreferrer"
        icon={faCalendarAlt}
        text="@nateradebaugh/react-datetime"
      />

      <h2 className={styles.subTitle}>contact me</h2>
      <Tile
        className={styles.resumeTile}
        href="/resume"
        icon={faFileAlt}
        text="my resume"
      />
      <Tile
        className={styles.linkedinTile}
        href="https://www.linkedin.com/in/nateradebaugh/"
        icon={faLinkedin}
        text="linkedin"
      />
      <Tile
        className={styles.githubTile}
        href="https://github.com/NateRadebaugh"
        icon={faGithub}
        text="github"
      />
      <Tile
        className={styles.twitterTile}
        href="https://twitter.com/nateradebaugh"
        icon={faTwitter}
        text="twitter"
      />
    </div>
  );
}
