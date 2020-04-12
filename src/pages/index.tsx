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
  colspan?: number;
  color?: string;
  icon: any;
  text: string;
  href: string;
  [x: string]: any;
}

function Tile({ icon, text, ...props }: TileProps) {
  const isInternal = props.href?.startsWith("http");

  const multiplier = props.colspan || 1;
  const width = multiplier * 125 + (multiplier - 1) * 16;
  const hoverColor = props.color && darken(0.02, props.color);

  const content = (
    <a
      className={styles.tile}
      css={`
        width: ${width}px;

        background-color: ${props.color};
        &:hover {
          background-color: ${hoverColor};
        }
      `}
      {...props}
    >
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

      <Tile href="/blog" color="purple" icon={faCommentAlt} text="blog" />

      <Tile
        href="https://react-datetime.naterad.com"
        target="_blank"
        rel="noopener noreferrer"
        color="teal"
        colspan={3}
        icon={faCalendarAlt}
        text="@nateradebaugh/react-datetime"
      />

      <h2 className={styles.subTitle}>contact me</h2>
      <Tile href="/resume" color="#e15227" icon={faFileAlt} text="my resume" />
      <Tile
        href="https://www.linkedin.com/in/nateradebaugh/"
        color="#0e76a8"
        icon={faLinkedin}
        text="linkedin"
      />
      <Tile
        href="https://github.com/NateRadebaugh"
        color="#4183c4"
        icon={faGithub}
        text="github"
      />
      <Tile
        href="https://twitter.com/nateradebaugh"
        color="#00a0d1"
        icon={faTwitter}
        text="twitter"
      />
    </div>
  );
}
