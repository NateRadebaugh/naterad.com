import dayjs from "dayjs";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { Element, Heading, Stack, Text } from "react-ui";
import ButtonLink from "../../components/ButtonLink";
import Link from "../../components/Link";
import BlogLayout from "../../layouts/BlogLayout";
import getBlogPostDetails, {
  BlogPostDetails,
} from "../../lib/getBlogPostDetails";
import mdxConfig from "../../lib/mdxConfig";

interface Post extends BlogPostDetails {
  descriptionSource: string;
}

export async function getStaticProps() {
  const posts: Post[] = [];
  const blogPostDetailsList = getBlogPostDetails();
  for (const post of blogPostDetailsList) {
    const descriptionSource = await renderToString(post.description, mdxConfig);
    posts.push({
      ...post,
      descriptionSource,
    });
  }

  return {
    props: {
      posts,
    },
  };
}

interface BlogIndexPageProps {
  posts: Post[];
}

function BlogIndexPage({ posts }: BlogIndexPageProps) {
  return (
    <BlogLayout title="Blog Posts">
      <Stack direction="vertical" gap={3}>
        {posts.map(({ slug, title, date, descriptionSource }) => {
          const descriptionContent = hydrate(descriptionSource, mdxConfig);
          return (
            <div key={slug}>
              <Heading size="section">
                <Link href="/blog/[slug]" as={`/blog/${slug}`}>
                  {title}
                </Link>
              </Heading>
              <Text variant="subtle" size={3}>
                {dayjs(date).format("MMMM D, YYYY h:mm A")}
              </Text>
              {descriptionContent && (
                <Text variant="subtle">{descriptionContent}</Text>
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
          );
        })}
      </Stack>
    </BlogLayout>
  );
}

export default BlogIndexPage;
