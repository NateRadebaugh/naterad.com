import { Stack, Heading, Text } from "react-ui";
import BlogLayout from "./BlogLayout";
import Divider from "../components/Divider";
import Link from "../components/Link";
import mdxComponents from "../components/mdxComponents";
import getSlug from "../lib/getSlug";
import { frontMatter as docsPages } from "../pages/blog/*.mdx";
import { frontMatter as nestedDocsPage } from "../pages/blog/**/index.mdx";
import dayjs from "dayjs";
import { MDXProvider } from "@mdx-js/react";
import styles from "../styles/syntax.module.scss";
import postStyles from "./PostLayout.module.scss";

function PostLayout(frontMatter) {
  const slug = getSlug(frontMatter.__resourcePath);
  const posts = [...docsPages, ...nestedDocsPage];

  const pageInfo = posts.map((d) => {
    return {
      slug: getSlug(d.__resourcePath),
      date: dayjs(d.date),
      title: d.title,
    };
  });

  // Sort
  pageInfo.sort((a, b) => {
    const aDate = a.date;
    const bDate = b.date;

    return aDate.isBefore(bDate) ? 1 : -1;
  });

  const postIndex = pageInfo.findIndex((p) => p.slug === slug);

  const prevPost = pageInfo[postIndex + 1];
  const nextPost = pageInfo[postIndex - 1];

  const hasPrev = !!prevPost;
  const prevSlug = prevPost?.slug ?? null;
  const prevTitle = prevPost?.title ?? null;
  const prevDate = prevPost?.date ?? null;

  const hasNext = !!nextPost;
  const nextSlug = nextPost?.slug ?? null;
  const nextTitle = nextPost?.title ?? null;
  const nextDate = nextPost?.date ?? null;

  return ({ children }) => {
    return (
      <BlogLayout {...frontMatter} isPost>
        <MDXProvider components={mdxComponents}>
          <div className={styles.syntax}>
            <div className={postStyles.post}>{children}</div>
          </div>
        </MDXProvider>

        <Stack direction="vertical" gap={3}>
          <Divider />

          <Heading size="paragraph">
            <Text variant="subtle">Further reading...</Text>
          </Heading>

          <Stack justify="space-between">
            {hasPrev ? (
              <strong style={{ width: "50%" }}>
                <Link href="/blog/[slug]" as={`/blog/${prevSlug}`}>
                  <div css="display: inline-block">
                    &laquo; {prevTitle}
                    <br />
                    <Text variant="subtle" size={2}>
                      {prevDate.format("MMMM D, YYYY h:mm A")}
                    </Text>
                  </div>
                </Link>
              </strong>
            ) : (
              <div />
            )}

            {hasNext ? (
              <strong style={{ width: "50%", textAlign: "right" }}>
                <Link href="/blog/[slug]" as={`/blog/${nextSlug}`}>
                  <div css="display: inline-block">
                    {nextTitle} &raquo;
                    <br />
                    <Text size={2} variant="subtle">
                      {nextDate.format("MMMM D, YYYY h:mm A")}
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
  };
}

export default PostLayout;
