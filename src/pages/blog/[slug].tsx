import renderToString from "next-mdx-remote/render-to-string";
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
import Code from "../../components/Code";
import clsx from "clsx";
import Image from "next/image";
import RenderToStringResult from "../../lib/RenderToStringResult";

const mdxConfig = {
  components: {
    pre: (props) => <div {...props} />,
    code: Code,
    a: Link,
    img: Image,
    blockquote: ({ style, ...props }) => (
      <blockquote
        className={clsx("pl-3 pt-1 border-l-4 border-gray-500")}
        {...props}
      />
    ),
  },
};

const root = process.cwd();

interface FrontMatterProps {
  title: string;
  description: string;
  date: string;
}

interface BlogPostProps {
  mdxSource: RenderToStringResult;
  descriptionSource: RenderToStringResult;
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
  const { renderedOutput: pageContent } = mdxSource;
  const { renderedOutput: descriptionContent } = descriptionSource;

  const hasPrev = !!prevPost;
  const prevSlug = prevPost?.slug ?? null;
  const prevTitle = prevPost?.title ?? null;
  const prevDate = prevPost?.date ?? null;

  const hasNext = !!nextPost;
  const nextSlug = nextPost?.slug ?? null;
  const nextTitle = nextPost?.title ?? null;
  const nextDate = nextPost?.date ?? null;

  return (
    <BlogLayout {...frontMatter} description={descriptionContent} isPost>
      <div
        className={clsx(syntaxStyles.syntax, "dark:prose")}
        dangerouslySetInnerHTML={{ __html: pageContent }}
      ></div>

      <Divider />

      <p className="font-weight-bold text-muted">Further reading...</p>

      <div className="row  font-weight-bold">
        <div className="col">
          {hasPrev && (
            <Link href={`/blog/${prevSlug}`}>
              <div>
                &laquo; {prevTitle}
                <br />
                <small className="font-weight-bold text-muted">
                  {prevDate}
                </small>
              </div>
            </Link>
          )}
        </div>

        <div className="col text-right">
          {hasNext && (
            <Link href={`/blog/${nextSlug}`}>
              <div>
                {nextTitle} &raquo;
                <br />
                <small className="font-weight-bold text-muted">
                  {nextDate}
                </small>
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
  const mdxSource = await renderToString(content, mdxConfig);

  const pageInfo = getBlogPostDetails({ locale });
  const postIndex = pageInfo.findIndex((p) => p.slug === slug);

  const prevPost = pageInfo[postIndex - 1] || null;
  const nextPost = pageInfo[postIndex + 1] || null;

  const post = pageInfo[postIndex] || null;
  const descriptionSource = await renderToString(post.description, mdxConfig);

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
