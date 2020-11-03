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
import { Stack, Heading, Text } from "react-ui";
import Divider from "../../components/Divider";
import dayjs from "dayjs";
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

      <Stack direction="vertical" gap={3}>
        <Divider />

        <Heading size="paragraph">
          <Text variant="subtle">Further reading...</Text>
        </Heading>

        <Stack justify="space-between">
          {hasPrev ? (
            <strong style={{ width: "50%" }}>
              <Link href={`/blog/${prevSlug}`}>
                <div css="display: inline-block">
                  &laquo; {prevTitle}
                  <br />
                  <Text variant="subtle" size={2}>
                    {dayjs(prevDate).format("MMMM D, YYYY h:mm A")}
                  </Text>
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
                  <Text size={2} variant="subtle">
                    {dayjs(nextDate).format("MMMM D, YYYY h:mm A")}
                  </Text>
                </div>
              </Link>
            </strong>
          ) : (
            <div />
          )}
        </Stack>

        <Divider marginTop={1} marginBottom={3} />
      </Stack>
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const paths = getBlogPostDetails().map((x) => x.path);

  return {
    fallback: false,
    paths: paths,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const source = fs.readFileSync(
    path.join(root, "src", "_posts", `${slug}.mdx`),
    "utf8"
  );

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, mdxConfig);
  const descriptionSource = await renderToString(data.description, mdxConfig);

  const pageInfo = getBlogPostDetails();
  const postIndex = pageInfo.findIndex((p) => p.slug === slug);

  const prevPost = pageInfo[postIndex + 1] || null;
  const nextPost = pageInfo[postIndex - 1] || null;

  const props: BlogPostProps = {
    mdxSource,
    descriptionSource,
    frontMatter: (data as unknown) as FrontMatterProps,

    nextPost,
    prevPost,
  };

  return {
    props: props,
  };
}
