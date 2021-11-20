import clsx from "clsx";
import Head from "next/head";
import NextLink from "next/link";
import { forwardRef } from "react";
import BlogIcon from "../components/BlogIcon";
import GitHubIcon from "../components/GitHubIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import ResumeIcon from "../components/ResumeIcon";
import { SkipNavContent, SkipNavLink } from "../components/SkipNav";
import styles from "./index.module.scss";

interface TileProps {
  icon: any;
  text: string;
  href: string;
  [x: string]: any;
}

const Tile = forwardRef(function Tile(
  { icon, text, colspan, color, href, className, ...rest }: TileProps,
  ref: any,
) {
  const isExternal = href?.startsWith("http");

  const component = (
    <a
      ref={ref}
      href={href}
      className={clsx(className, "btn text-white hover:text-white")}
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
          content="Hi I'm Nate Radebaugh. Manager, Software Solutions at BDO Digital in the western Chicago Suburbs. Graduate of Purdue University."
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
            <strong>Manager, Software Solutions</strong> at <strong>BDO Digital</strong>{" "}
            in the western Chicago Suburbs. CS Graduate of Purdue University.
          </p>
        </header>

        <SkipNavContent />

        <div className="row align-items-stretch">
          <div className="mb-4 col-6 sm:col-4 md:col-3">
            <Tile
              className={styles.blogTile}
              href="/blog"
              icon={<BlogIcon size={6} />}
              text="blog"
            />
          </div>
          <div className="mb-4 col-6 sm:col-4 md:col-3">
            <Tile
              className={styles.resumeTile}
              href="/resume"
              icon={<ResumeIcon size={6} />}
              text="my resume"
            />
          </div>
          <div className="mb-4 col-6 sm:col-4 md:col-3">
            <Tile
              className={styles.linkedinTile}
              href="https://www.linkedin.com/in/nateradebaugh/"
              icon={<LinkedInIcon size={6} />}
              text="linkedin"
            />
          </div>
          <div className="mb-4 col-6 sm:col-4 md:col-3">
            <Tile
              className={styles.githubTile}
              href="https://github.com/NateRadebaugh"
              icon={<GitHubIcon size={6} />}
              text="github"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
