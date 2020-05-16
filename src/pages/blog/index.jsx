import { Element, Heading, Stack, Text } from "react-ui";
import marked from "marked";
import BlogLayout from "../../layouts/BlogLayout";
import Link from "../../components/Link";
import ButtonLink from "../../components/ButtonLink";
import dayjs from "dayjs";
import { frontMatter as docsPages } from "./*.mdx";
import path from "path";

export async function getStaticProps() {
  const posts = docsPages;

  // Sort
  posts.sort((a, b) => {
    const aDate = dayjs(a.date);
    const bDate = dayjs(b.date);

    return aDate.isBefore(bDate) ? 1 : -1;
  });

  return {
    props: {
      posts: posts.map((p) => {
        const { name: slug } = path.parse(p.__resourcePath);

        return {
          slug,
          title: p.title || "",
          date: p.date || "",
          description: marked(p.description || ""),
        };
      }),
    },
  };
}

function BlogIndexPage({ posts }) {
  return (
    <BlogLayout title="Blog Posts">
      <Stack direction="vertical" gap={3}>
        {posts.map(({ slug, title, date, description }) => (
          <div key={slug}>
            <Heading size="section">
              <Link href="/blog/[slug]" as={`/blog/${slug}`}>
                {title}
              </Link>
            </Heading>
            <Text variant="subtle" size={3}>
              {dayjs(date).format("MMMM D, YYYY h:mm A")}
            </Text>
            {description && (
              <Text
                variant="subtle"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            )}

            <ButtonLink href="/blog/[slug]" as={`/blog/${slug}`}>
              Read more
            </ButtonLink>

            <Element
              marginTop={3}
              css={{
                height: "1px",
                backgroundColor: "grays.300",
              }}
            />
          </div>
        ))}
      </Stack>
    </BlogLayout>
  );
}

export default BlogIndexPage;
