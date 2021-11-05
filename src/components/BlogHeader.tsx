import Link from "../components/Link";
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
        "flex justify-between items-center overflow-auto px-2 pt-2 mb-4",
        styles.header
      )}
    >
      <div className="flex items-center">
        <Link href="/" className="mr-2">
          <Image
            src="https://www.gravatar.com/avatar/80d317a74bc928d8520879fdeefc6303"
            alt="Nate Radebaugh"
            height={60}
            width={60}
            className="rounded-full"
          />
        </Link>
        <div>
          <Link href="/" className="text-white">
            Nate Radebaugh
          </Link>
          {isPost ? (
            <nav aria-label="breadcrumb">
              <ol className="p-0 m-0 bg-transparent breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">/</li>
                <li className="breadcrumb-item">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="breadcrumb-item">/</li>
                <li
                  className="breadcrumb-item active none sm:inline"
                  aria-current="page"
                >
                  {title}
                </li>
              </ol>
            </nav>
          ) : (
            <nav aria-label="breadcrumb">
              <ol className="p-0 m-0 bg-transparent breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item">/</li>
                <li
                  className="breadcrumb-item active none sm:inline"
                  aria-current="page"
                >
                  Blog
                </li>
              </ol>
            </nav>
          )}
        </div>
      </div>
      <div className="flex items-stretch">
        <ButtonLink href="/" className="ml-2 btn btn-dark none lg:inline-block">
          Home
        </ButtonLink>
        <ButtonLink
          href="https://github.com/NateRadebaugh"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 btn btn-dark none md:inline-block"
        >
          <GitHubIcon className="mr-2" />
          GitHub
        </ButtonLink>
        <ButtonLink
          href="https://www.linkedin.com/in/nateradebaugh/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 btn btn-dark none sm:inline-block"
        >
          <LinkedInIcon className="mr-2" />
          LinkedIn
        </ButtonLink>
        <ButtonLink href="/resume" className="ml-2 btn btn-dark">
          <ResumeIcon className="mr-2" />
          Resume
        </ButtonLink>
      </div>
    </header>
  );
}

export default BlogHeader;
