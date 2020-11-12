import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import BlogLayout from "../../layouts/BlogLayout";
import syntaxStyles from "../../styles/syntax.module.scss";
import postStyles from "../../layouts/PostLayout.module.scss";
import getBlogPostDetails, {
  BlogPostDetails,
} from "../../lib/getBlogPostDetails";
import Divider from "../../components/Divider";
import Link from "../../components/Link";
import mdxConfig from "../../lib/mdxConfig";

const root = process.cwd();

interface FrontMatterProps {
  title: string;
  description: string;
  date: string;
}

interface BlogPostProps {
  mdxSource: string;
  descriptionSource: string;
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
  const pageContent = hydrate(mdxSource, mdxConfig);
  const descriptionContent = hydrate(descriptionSource, mdxConfig);

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
      <div className={syntaxStyles.syntax}>
        <div className={postStyles.post}>{pageContent}</div>
      </div>

      <Divider />

      <p className="font-weight-bold text-muted">Further reading...</p>

      <div className="d-flex justify-content-between">
        {hasPrev ? (
          <strong style={{ width: "50%" }}>
            <Link href={`/blog/${prevSlug}`}>
              <div css="display: inline-block">
                &laquo; {prevTitle}
                <br />
                <small className="font-weight-bold text-muted">
                  {prevDate}
                </small>
              </div>
            </Link>
          </strong>
        ) : (
          <div />
        )}

        {hasNext ? (
          <strong style={{ width: "50%", textAlign: "right" }}>
            <Link href={`/blog/${nextSlug}`}>
              <div css="display: inline-block">
                {nextTitle} &raquo;
                <br />
                <small className="font-weight-bold text-muted">
                  {nextDate}
                </small>
              </div>
            </Link>
          </strong>
        ) : (
          <div />
        )}
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

  const prevPost = pageInfo[postIndex + 1] || null;
  const nextPost = pageInfo[postIndex - 1] || null;

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
