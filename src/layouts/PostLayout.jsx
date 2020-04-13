import { Stack, Heading, Text, Image } from "react-ui";
import BlogLayout from "./BlogLayout";
import Divider from "../components/Divider";
import Link from "../components/Link";
import Code from "../components/Code";
import { frontMatter as docsPages } from "../pages/blog/*.mdx";
import dayjs from "dayjs";
import { MDXProvider } from "@mdx-js/react";
import styles from "../styles/syntax.module.scss";

const components = {
  pre: (props) => <div {...props} />,
  code: Code,
  a: Link,
  img: Image,
  h1: (props) => <Heading as="h1" size={7} {...props} />,
  h2: (props) => <Heading as="h2" size="section" {...props} />,
  h3: (props) => <Heading as="h3" size="paragraph" {...props} />,
  h4: (props) => (
    <Heading as="h4" size="paragraph">
      <Text variant="subtle" {...props} />
    </Heading>
  ),
  h5: (props) => <Heading as="h5" size={3} {...props} />,
  h6: (props) => (
    <Heading as="h6" size={3}>
      <Text variant="subtle" {...props} />
    </Heading>
  ),
  blockquote: (props) => (
    <blockquote
      css={{ margin: "0 0 1rem", marginBottom: "1rem", fontSize: "1.25rem" }}
      {...props}
    />
  ),
};

function getSlug(resourcePath) {
  const matches = resourcePath.match(/([^\\/]+)(\.\w+)$/);
  const slug = matches[1];

  return slug;
}

function PostLayout(frontMatter) {
  const slug = getSlug(frontMatter.__resourcePath);
  const posts = docsPages;

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
        <MDXProvider components={components}>
          <div className={styles.syntax}>{children}</div>
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
