import hl from "highlight.js";
import marked from "marked";
import { Element, Stack, Heading, Text } from "react-ui";
import { getPosts } from "../../utils/posts";
import BlogLayout from "../../layouts/BlogLayout";
import Link from "../../components/Link";

const renderer = new marked.Renderer();

// Override function
renderer.image = function (href, title, text) {
  return `<img src=${href} alt=${title} style="max-width: 400px"/>`;
};

type BlogPostProps = {
  slug: string;
  title: string;
  description: string;
  date: string;
  html: string;

  hasPrev: boolean;
  prevSlug: string | null;
  prevTitle: string | null;

  hasNext: boolean;
  nextSlug: string | null;
  nextTitle: string | null;
};

export async function getStaticPaths() {
  return {
    paths: (await getPosts()).map((p) => `/blog/${p.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { slug: string };
}): Promise<{ props: BlogPostProps }> {
  const { slug } = params;

  const allPosts = await getPosts();
  const postIndex = allPosts.findIndex((p) => p.slug === slug)!;
  const post = allPosts[postIndex];
  const { title, description, date, content } = post;

  const prevPost = allPosts[postIndex - 1];
  const nextPost = allPosts[postIndex + 1];

  return {
    props: {
      slug,
      title,
      description: marked(description),
      date,
      html: marked(content, {
        renderer,
        highlight: function (code: string, lang: string) {
          if (lang) {
            return hl.highlight(lang, code).value;
          }

          return code;
        },
      }),
      hasPrev: !!prevPost,
      prevSlug: prevPost?.slug ?? null,
      prevTitle: prevPost?.title ?? null,

      hasNext: !!nextPost,
      nextSlug: nextPost?.slug ?? null,
      nextTitle: nextPost?.title ?? null,
    },
  };
}

function BlogPage(props: BlogPostProps) {
  const {
    slug,
    title,
    description,
    date,
    html,
    hasPrev,
    prevSlug,
    prevTitle,
    hasNext,
    nextSlug,
    nextTitle,
  } = props;

  return (
    <BlogLayout title={title} description={description} slug={slug} date={date}>
      <div dangerouslySetInnerHTML={{ __html: html }} />

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
            <strong>
              <Link href="/blog/[slug]" as={`/blog/${prevSlug}`}>
                &laquo; {prevTitle}
              </Link>
            </strong>
          ) : (
            <div />
          )}

          {hasNext ? (
            <strong>
              <Link href="/blog/[slug]" as={`/blog/${nextSlug}`}>
                {nextTitle} &raquo;
              </Link>
            </strong>
          ) : (
            <div />
          )}
        </Stack>
      </Stack>
    </BlogLayout>
  );
}

export default BlogPage;
