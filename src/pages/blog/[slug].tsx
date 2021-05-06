import { serialize } from "next-mdx-remote/serialize";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import BlogLayout from "../../layouts/BlogLayout";
import syntaxStyles from "../../styles/syntax.module.scss";
import getBlogPostDetails, {
  BlogPostDetails,
} from "../../lib/getBlogPostDetails";
import Divider from "../../components/Divider";
import Link from "../../components/Link";
import clsx from "clsx";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import mdxConfig from "lib/mdxConfig";

const root = process.cwd();

interface FrontMatterProps {
  title: string;
  description: string;
  date: string;
}

interface BlogPostProps {
  mdxSource: MDXRemoteSerializeResult;
  descriptionSource: MDXRemoteSerializeResult;
  frontMatter: FrontMatterProps;

  nextPost: BlogPostDetails;
  prevPost: BlogPostDetails;
}

export default function BlogPost({
  mdxSource,
  descriptionSource,
  frontMatter,
  prevPost,
  nextPost,
}: BlogPostProps) {
  const hasPrev = !!prevPost;
  const prevSlug = prevPost?.slug ?? null;
  const prevTitle = prevPost?.title ?? null;
  const prevDate = prevPost?.date ?? null;

  const hasNext = !!nextPost;
  const nextSlug = nextPost?.slug ?? null;
  const nextTitle = nextPost?.title ?? null;
  const nextDate = nextPost?.date ?? null;

  return (
    <BlogLayout {...frontMatter} description={descriptionSource} isPost>
      <div className={clsx(syntaxStyles.syntax, "dark:prose")}>
        <MDXRemote {...mdxSource} {...mdxConfig} lazy />
      </div>

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
    </BlogLayout>
  );
}

export async function getStaticPaths({ locale }) {
  const paths = getBlogPostDetails({ locale }).map((x) => x.path);

  return {
    fallback: false,
    paths: paths,
  };
}

export async function getStaticProps({ params, locale }) {
  const slug = params.slug;

  const source = fs.readFileSync(
    path.join(root, "src", "_posts", `${slug}.mdx`),
    "utf8"
  );
  const { content } = matter(source);
  const mdxSource = await serialize(content);

  const pageInfo = getBlogPostDetails({ locale });
  const postIndex = pageInfo.findIndex((p) => p.slug === slug);

  const prevPost = pageInfo[postIndex - 1] || null;
  const nextPost = pageInfo[postIndex + 1] || null;

  const post = pageInfo[postIndex] || null;
  const descriptionSource = await serialize(post.description);

  const props: BlogPostProps = {
    mdxSource,
    descriptionSource,
    frontMatter: post,

    nextPost,
    prevPost,
  };

  return {
    props: props,
  };
}
