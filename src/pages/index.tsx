import Head from "next/head";
import NextLink from "next/link";
import ResumeIcon from "../components/ResumeIcon";
import LinkedInIcon from "../components/LinkedInIcon";
import GitHubIcon from "../components/GitHubIcon";
import BlogIcon from "../components/BlogIcon";
import { SkipNavLink, SkipNavContent } from "../components/SkipNav";

export default function Index() {
  return (
    <div className="max-w-[800px] mx-auto">
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
          <h1 className="mt-3 text-5xl">Nate Radebaugh</h1>
          <p className="my-3">
            <strong>Manager, Software Solutions</strong> at{" "}
            <strong>BDO Digital</strong> in the western Chicago Suburbs. CS
            Graduate of Purdue University.
          </p>
        </header>

        <SkipNavContent />

        <div className="row align-items-stretch">
          <div className="mb-4 col-6 sm:col-4 md:col-3">
            <NextLink href="/blog">
              <a className="flex flex-col items-center py-4 bg-[#570057] hover:bg-[#480048] rounded-lg no-underline text-white hover:no-underline hover:text-white transition-all print:text-black print:border-4">
                <BlogIcon size={6} />
                <span className="mt-2 text-2xl font-extralight">Blog</span>
              </a>
            </NextLink>
          </div>
          <div className="mb-4 col-6 sm:col-4 md:col-3">
            <NextLink href="/resume">
              <a className="flex flex-col items-center py-4 bg-[#c4421b] hover:bg-[#b73e19] rounded-lg no-underline text-white hover:no-underline hover:text-white transition-all print:text-black print:border-4">
                <ResumeIcon size={6} />
                <span className="mt-2 text-2xl font-extralight">My Resume</span>
              </a>
            </NextLink>
          </div>
          <div className="mb-4 col-6 sm:col-4 md:col-3">
            <NextLink href="/resume">
              <a className="flex flex-col items-center py-4 bg-[#0b5c82] hover:bg-[#0a5274] rounded-lg no-underline text-white hover:no-underline hover:text-white transition-all print:text-black print:border-4">
                <LinkedInIcon size={6} />
                <span className="mt-2 text-2xl font-extralight">LinkedIn</span>
              </a>
            </NextLink>
          </div>
          <div className="mb-4 col-6 sm:col-4 md:col-3">
            <NextLink href="/resume">
              <a className="flex flex-col items-center py-4 bg-[#346fa8] hover:bg-[#31679c] rounded-lg no-underline text-white hover:no-underline hover:text-white transition-all print:text-black print:border-4">
                <GitHubIcon size={6} />
                <span className="mt-2 text-2xl font-extralight">GitHub</span>
              </a>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}
