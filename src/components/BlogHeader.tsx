import Link from "../components/Link";
import TwitterIcon from "./TwitterIcon";
import LinkedInIcon from "./LinkedInIcon";
import ResumeIcon from "./ResumeIcon";
import GitHubIcon from "./GitHubIcon";
import ButtonLink from "./ButtonLink";
import Image from "next/image";
import styles from "./BlogHeader.module.scss";
import clsx from "clsx";

function BlogHeader({ isPost, title }) {
  return (
    <header
      className={clsx(
        "d-flex justify-content-between align-items-center overflow-auto px-1 pt-1 mb-3",
        styles.header
      )}
    >
      <div className="d-flex align-items-center">
        <Link href="/" className="mr-2">
          <Image
            src="https://www.gravatar.com/avatar/80d317a74bc928d8520879fdeefc6303"
            alt="Nate Radebaugh"
            height={60}
            width={60}
            className="rounded-circle border"
          />
        </Link>
        <div>
          <Link href="/" className="text-light">
            Nate Radebaugh
          </Link>
          {isPost ? (
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link href="/blog">Blog</Link>
                </li>
                <li
                  className="breadcrumb-item active d-none d-sm-inline"
                  aria-current="page"
                >
                  {title}
                </li>
              </ol>
            </nav>
          ) : (
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb bg-transparent p-0 m-0">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li
                  className="breadcrumb-item active d-none d-sm-inline"
                  aria-current="page"
                >
                  Blog
                </li>
              </ol>
            </nav>
          )}
        </div>
      </div>
      <div className="d-flex align-items-stretch">
        <ButtonLink
          variant="default"
          href="/"
          className="ml-1 d-none d-lg-inline-block"
        >
          Home
        </ButtonLink>
        <ButtonLink
          variant="default"
          href="https://github.com/NateRadebaugh"
          className="ml-1 d-none d-md-inline-block"
        >
          <GitHubIcon className="mr-1" />
          GitHub
        </ButtonLink>
        <ButtonLink
          variant="default"
          href="https://twitter.com/nateradebaugh"
          className="ml-1 d-none d-md-inline-block"
        >
          <TwitterIcon className="mr-1" />
          Twitter
        </ButtonLink>
        <ButtonLink
          variant="default"
          href="https://www.linkedin.com/in/nateradebaugh/"
          className="ml-1 d-none d-sm-inline-block"
        >
          <LinkedInIcon className="mr-1" />
          LinkedIn
        </ButtonLink>
        <ButtonLink variant="default" href="/resume" className="ml-1">
          <ResumeIcon className="mr-1" />
          Resume
        </ButtonLink>
      </div>
    </header>
  );
}

export default BlogHeader;
