import Link from "../components/Link";
import TwitterIcon from "./TwitterIcon";
import LinkedInIcon from "./LinkedInIcon";
import ResumeIcon from "./ResumeIcon";
import GitHubIcon from "./GitHubIcon";
import ButtonLink from "./ButtonLink";
import Image from "next/image";

function BlogHeader({ isPost, title }) {
  return (
    <header
      className="d-flex justify-content-between align-items-center border-bottom p-1"
      style={{
        overflow: "auto",
      }}
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
                <li className="breadcrumb-item active" aria-current="page">
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
                <li className="breadcrumb-item active" aria-current="page">
                  Blog
                </li>
              </ol>
            </nav>
          )}
        </div>
      </div>
      <div className="d-flex align-items-center">
        <ButtonLink href="/" className="btn btn-dark ml-1">
          Home
        </ButtonLink>
        <ButtonLink
          href="https://github.com/NateRadebaugh"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark ml-1"
          css={{ display: ["none", "flex", "flex"] }}
        >
          <GitHubIcon size="normal" className="mr-1" />
          GitHub
        </ButtonLink>
        <ButtonLink
          href="https://twitter.com/nateradebaugh"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark ml-1"
          css={{ display: ["none", "flex", "flex"] }}
        >
          <TwitterIcon size="normal" className="mr-1" />
          Twitter
        </ButtonLink>
        <ButtonLink
          href="https://www.linkedin.com/in/nateradebaugh/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark ml-1"
          css={{ display: ["none", "flex", "flex"] }}
        >
          <LinkedInIcon size="normal" className="mr-1" />
          LinkedIn
        </ButtonLink>
        <ButtonLink href="/resume" className="btn btn-dark ml-1">
          <ResumeIcon size="normal" className="mr-1" />
          Resume
        </ButtonLink>
      </div>
    </header>
  );
}

export default BlogHeader;
