import getBlogPostDetails, {
  BlogPostDetails,
} from "../../../lib/getBlogPostDetails";
import Divider from "../../../components/Divider";
import Link from "../../../components/Link";
import { bundleMDX } from "mdx-bundler";
import React from "react";
import bundleMdxConfig from "lib/bundleMdxConfig";
import path from "path";
import MDXComponent from "components/MdxComponent";
import WorkaroundTitle from "components/WorkaroundTitle";
import { Metadata } from "next";

const root = process.cwd();

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { title } = await getTitleData(params.slug);
  return { title: `${title} - Nate Radebaugh&apos;s Blog`, description: title };
}

interface FrontMatterProps {
  title: string;
  description: string;
  date: string;
}

interface PostDetails {
  mdxSource: string;
  descriptionSource: string;
  frontMatter: FrontMatterProps;

  nextPost: BlogPostDetails | undefined;
  prevPost: BlogPostDetails | undefined;
}

async function getTitleData(slug: string) {
  const pageInfo = getBlogPostDetails();
  const postIndex = pageInfo.findIndex((p) => p.slug === slug);

  const post = pageInfo[postIndex]!;
  return { title: post.title };
}

async function getData(slug: string): Promise<PostDetails> {
  const pageInfo = getBlogPostDetails();
  const postIndex = pageInfo.findIndex((p) => p.slug === slug);

  const prevPost = pageInfo[postIndex - 1];
  const nextPost = pageInfo[postIndex + 1];

  const post = pageInfo[postIndex]!;
  const { code: descriptionSource } = await bundleMDX({
    source: post.description,
    ...bundleMdxConfig,
  });

  const { code: mdxSource } = await bundleMDX({
    file: path.join(root, "src", "_posts", post.sourcePath),
    ...bundleMdxConfig,
  });

  const postDetails: PostDetails = {
    mdxSource,
    descriptionSource,
    frontMatter: post,

    nextPost,
    prevPost,
  };

  return postDetails;
}

function BlogLayoutFooter({
  prevPost,
  nextPost,
}: {
  prevPost: BlogPostDetails | undefined;
  nextPost: BlogPostDetails | undefined;
}) {
  const hasPrev = !!prevPost;
  const prevSlug = prevPost?.slug;
  const prevTitle = prevPost?.title;
  const prevDate = prevPost?.date;

  const hasNext = !!nextPost;
  const nextSlug = nextPost?.slug;
  const nextTitle = nextPost?.title;
  const nextDate = nextPost?.date;

  return (
    <>
      <Divider />

      <p className="font-bold text-gray-400">Further reading...</p>

      <div className="font-bold row">
        <div className="col">
          {hasPrev && (
            <Link href={`/blog/${prevSlug}`}>
              <div>
                &laquo; {prevTitle}
                <br />
                <small className="font-bold text-gray-400">{prevDate}</small>
              </div>
            </Link>
          )}
        </div>

        <div className="text-right col">
          {hasNext && (
            <Link href={`/blog/${nextSlug}`}>
              <div>
                {nextTitle} &raquo;
                <br />
                <small className="font-bold text-gray-400">{nextDate}</small>
              </div>
            </Link>
          )}
        </div>
      </div>

      <Divider />
    </>
  );
}

export default async function BlogPost({ params }: any) {
  const { mdxSource, descriptionSource, frontMatter, prevPost, nextPost } =
    await getData(params.slug);
  const { title, date } = frontMatter;

  return (
    <>
      <WorkaroundTitle>{`${title} - Nate Radebaugh&apos;s Blog`}</WorkaroundTitle>

      <h1 className="mb-4 text-4xl font-semibold">{title}</h1>

      {date && <p className="my-2 font-bold text-gray-400">{date}</p>}

      <Divider />

      {descriptionSource && (
        <>
          <div className="my-2 italic text-gray-400">
            <MDXComponent code={descriptionSource} />
          </div>
          <Divider />
        </>
      )}

      {mdxSource && (
        <div className="prose-invert">
          <MDXComponent code={mdxSource} />
        </div>
      )}

      <BlogLayoutFooter prevPost={prevPost} nextPost={nextPost} />
    </>
  );
}

export async function generateStaticParams() {
  const pageInfo = getBlogPostDetails();
  return pageInfo.map((post) => ({
    slug: post.slug,
  }));
}
