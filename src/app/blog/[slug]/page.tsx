import fs from "fs/promises";
import getBlogPostDetails, {
  BlogPostDetails,
} from "../../../lib/getBlogPostDetails";
import Divider from "../../../components/Divider";
import Link from "../../../components/Link";
import { compileMDX, MDXRemote } from 'next-mdx-remote/rsc'
import React from "react";
import path from "path";
import { Metadata } from "next";
import mdxConfig, { mdxOptions } from "lib/mdxConfig";

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
  mdx: React.ReactElement;
  description: string;
  frontMatter: FrontMatterProps;

  nextPost: BlogPostDetails;
  prevPost: BlogPostDetails;
}

async function getTitleData(slug: string) {
  const pageInfo = getBlogPostDetails();
  const postIndex = pageInfo.findIndex((p) => p.slug === slug);

  const post = pageInfo[postIndex] || null;
  return { title: post.title };
}

async function getData(slug: string): Promise<PostDetails> {
  const pageInfo = getBlogPostDetails();
  const postIndex = pageInfo.findIndex((p) => p.slug === slug);

  const prevPost = pageInfo[postIndex - 1] || null;
  const nextPost = pageInfo[postIndex + 1] || null;

  const post = pageInfo[postIndex] || null;

  const filePath = path.join(root, "src", "_posts", post.sourcePath);
  const fileContent = await fs.readFile(filePath, "utf8");

  const { content: mdx, frontmatter } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  })

  const postDetails: PostDetails = {
    mdx,
    description: post.description,
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
  prevPost: BlogPostDetails;
  nextPost: BlogPostDetails;
}) {
  const hasPrev = !!prevPost;
  const prevSlug = prevPost?.slug ?? null;
  const prevTitle = prevPost?.title ?? null;
  const prevDate = prevPost?.date ?? null;

  const hasNext = !!nextPost;
  const nextSlug = nextPost?.slug ?? null;
  const nextTitle = nextPost?.title ?? null;
  const nextDate = nextPost?.date ?? null;

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
  const { mdx, description, frontMatter, prevPost, nextPost } =
    await getData(params.slug);
  const { title, date } = frontMatter;

  return (
    <>
      <h1 className="mb-4 text-4xl font-semibold">{title}</h1>

      {date && <p className="my-2 font-bold text-gray-400">{date}</p>}

      <Divider />

      {description && (
        <>
          <div className="my-2 italic text-gray-400">
            <MDXRemote source={description} components={mdxConfig.components} options={{mdxOptions: mdxOptions}} />
          </div>
          <Divider />
        </>
      )}

      {mdx && (
        <div className="prose-invert">
          {mdx}
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
