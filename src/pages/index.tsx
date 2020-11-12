import Head from "next/head";
import NextLink from "next/link";
import styles from "./index.module.scss";
import ReactDateTimeIcon from "../components/ReactDateTimeIcon";
import BundlephobiaInlineIcon from "../components/BundlephobiaInlineIcon";
import ResumeIcon from "../components/ResumeIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import GitHubIcon from "../components/GitHubIcon";
import TwitterIcon from "../components/TwitterIcon";
import BlogIcon from "../components/BlogIcon";
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import { forwardRef } from "react";
import clsx from "clsx";

interface TileProps {
  icon: any;
  text: string;
  href: string;
  [x: string]: any;
}

const Tile = forwardRef(function Tile(
  { icon, text, colspan, color, href, className, ...rest }: TileProps,
  ref: any
) {
  const isExternal = href?.startsWith("http");

  const component = (
    <a
      ref={ref}
      href={href}
      className={clsx(className, "text-light text-decoration-none")}
      {...rest}
    >
      {icon}
      <span className={styles.tileText}>{text}</span>
    </a>
  );

  if (isExternal) {
    return component;
  }

  return <NextLink href={href}>{component}</NextLink>;
});

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Nate Radebaugh</title>
        <meta
          name="Description"
          content="Hi I'm Nate Radebaugh. Experienced Senior Associate, Software Solutions at BDO Digital in the western Chicago Suburbs. Graduate of Purdue University."
        />
        <meta name="theme-color" content="#317EFB" />
      </Head>

      <SkipNavLink />

      <div className="container-fluid">
        <header>
          <div className={styles.headerRow}>
            <h1 className={styles.title}>Nate Radebaugh</h1>
          </div>
          <p className={styles.introText}>
            <strong>Experienced Senior Associate, Software Solutions</strong> at{" "}
            <strong>BDO Digital</strong> in the western Chicago Suburbs. CS
            Graduate of Purdue University.
          </p>
        </header>

        <SkipNavContent />

        <div className="row align-items-stretch">
          <div className="col-6 col-sm-4 col-md-3 mb-3">
            <Tile
              className={styles.blogTile}
              href="/blog"
              icon={<BlogIcon size={6} />}
              text="blog"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 mb-3">
            <Tile
              className={styles.resumeTile}
              href="/resume"
              icon={<ResumeIcon size={6} />}
              text="my resume"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 mb-3">
            <Tile
              className={styles.linkedinTile}
              href="https://www.linkedin.com/in/nateradebaugh/"
              icon={<LinkedInIcon size={6} />}
              text="linkedin"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 mb-3">
            <Tile
              className={styles.githubTile}
              href="https://github.com/NateRadebaugh"
              icon={<GitHubIcon size={6} />}
              text="github"
            />
          </div>
          <div className="col-12 col-sm-8 col-md-6 mb-3">
            <Tile
              className={styles.datetimeTile}
              href="https://react-datetime.naterad.com"
              target="_blank"
              rel="noopener noreferrer"
              icon={<ReactDateTimeIcon size={6} />}
              text="@nateradebaugh/react-datetime"
            />
          </div>
          <div className="col-6 col-sm-4 col-md-3 mb-3">
            <Tile
              className={styles.twitterTile}
              href="https://twitter.com/nateradebaugh"
              icon={<TwitterIcon size={6} />}
              text="twitter"
            />
          </div>
          <div className="col-12 col-sm-8 col-md-6 mb-3">
            <Tile
              className={styles.bundlephobiaTile}
              href="https://bundlephobia-inline.naterad.com"
              target="_blank"
              rel="noopener noreferrer"
              icon={<BundlephobiaInlineIcon size={6} />}
              text="bundlephobia-inline"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
