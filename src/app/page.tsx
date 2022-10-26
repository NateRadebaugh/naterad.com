import NextLink from "next/link";
import ResumeIcon from "../components/ResumeIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import GitHubIcon from "../components/GitHubIcon";
import BlogIcon from "../components/BlogIcon";
import { SkipNavContent, SkipNavLink } from "../components/SkipNav";
import { forwardRef } from "react";
import clsx from "clsx";

import styles from "./index.module.scss";
import WorkaroundTitle from "components/WorkaroundTitle";

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

  const content = (
    <>
      {icon}
      <span className={styles.tileText}>{text}</span>
    </>
  );

  if (isExternal) {
    return (
      <a
        ref={ref}
        href={href}
        className={clsx(className, "btn text-white hover:text-white")}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <NextLink
      ref={ref}
      href={href}
      className={clsx(className, "btn text-white hover:text-white")}
      {...rest}
    >
      {content}
    </NextLink>
  );
});

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <WorkaroundTitle>Nate Radebaugh</WorkaroundTitle>
      <div className="container-fluid">
        <header>
          <div className={styles.headerRow}>
            <h1 className={styles.title}>Nate Radebaugh</h1>
          </div>
          <p className={styles.introText}>
            <strong>Manager, Software Solutions</strong> at{" "}
            <strong>BDO Digital</strong> in the western Chicago Suburbs. CS
            Graduate of Purdue University.
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
