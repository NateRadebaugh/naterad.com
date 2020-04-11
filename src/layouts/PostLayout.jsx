import { Element, Stack, Heading, Text } from "react-ui";
import BlogLayout from "./BlogLayout";
import Link from "../components/Link";
import { frontMatter as docsPages } from "../pages/blog/*.mdx";
import dayjs from "dayjs";

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
        {slug}

        {children}

        <Element
          as="span"
          css={{
            marginTop: 8,
            marginBottom: 16,
            width: "100%",
            height: 1,
            backgroundColor: "lightgray",
          }}
        />

        <Stack direction="vertical" gap={3}>
          <Heading size="paragraph">
            <Text variant="subtle">Further reading...</Text>
          </Heading>

          <Stack justify="space-between">
            {hasPrev ? (
              <strong style={{ width: "50%" }}>
                <Link href="/blog/[slug]" as={`/blog/${prevSlug}`}>
                  &laquo; {prevTitle}
                  <br />
                  <Text variant="subtle" size={2}>
                    {prevDate.format("MMMM D, YYYY h:mm A")}
                  </Text>
                </Link>
              </strong>
            ) : (
              <div />
            )}

            {hasNext ? (
              <strong style={{ width: "50%" }}>
                <Link href="/blog/[slug]" as={`/blog/${nextSlug}`}>
                  {nextTitle} &raquo;
                  <br />
                  <Text size={2} variant="subtle">
                    {nextDate.format("MMMM D, YYYY h:mm A")}
                  </Text>
                </Link>
              </strong>
            ) : (
              <div />
            )}
          </Stack>
        </Stack>
      </BlogLayout>
    );
  };
}

export default PostLayout;
