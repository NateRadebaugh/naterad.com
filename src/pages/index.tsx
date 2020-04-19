import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.scss";
import ReactDateTimeIcon from "../components/ReactDateTimeIcon";
import ResumeIcon from "../components/ResumeIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import GitHubIcon from "../components/GitHubIcon";
import TwitterIcon from "../components/TwitterIcon";
import BlogIcon from "../components/BlogIcon";

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
      {icon}
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
          <strong>Senior Associate, Software Solutions</strong> at{" "}
          <strong>BDO Digital</strong> in the western Chicago Suburbs. CS
          Graduate of Purdue University.
        </p>
      </header>

      <Tile
        className={styles.blogTile}
        href="/blog"
        icon={<BlogIcon size={6} />}
        text="blog"
      />

      <Tile
        className={styles.datetimeTile}
        href="https://react-datetime.naterad.com"
        target="_blank"
        rel="noopener noreferrer"
        icon={<ReactDateTimeIcon size={6} />}
        text="@nateradebaugh/react-datetime"
      />

      <h2 className={styles.subTitle}>contact me</h2>
      <Tile
        className={styles.resumeTile}
        href="/resume"
        icon={<ResumeIcon size={6} />}
        text="my resume"
      />
      <Tile
        className={styles.linkedinTile}
        href="https://www.linkedin.com/in/nateradebaugh/"
        icon={<LinkedInIcon size={6} />}
        text="linkedin"
      />
      <Tile
        className={styles.githubTile}
        href="https://github.com/NateRadebaugh"
        icon={<GitHubIcon size={6} />}
        text="github"
      />
      <Tile
        className={styles.twitterTile}
        href="https://twitter.com/nateradebaugh"
        icon={<TwitterIcon size={6} />}
        text="twitter"
      />
    </div>
  );
}
