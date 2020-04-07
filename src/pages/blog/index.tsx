import { Heading, Stack, Text } from "react-ui";
import marked from "marked";
import BlogLayout from "../../layouts/BlogLayout";
import { BlogPost, getPosts } from "../../utils/posts";
import Link from "../../components/Link";
import dayjs from "dayjs";

export async function getStaticProps() {
  const posts = await getPosts();

  // Sort
  posts.sort((a, b) => {
    const aDate = dayjs(a.date);
    const bDate = dayjs(b.date);

    return aDate.isBefore(bDate) ? 1 : -1;
  });

  return {
    props: {
      posts: posts.map((p) => ({
        ...p,
        description: marked(p.description),
      })),
    },
  };
}

function BlogIndexPage({ posts }: { posts: BlogPost[] }) {
  return (
    <BlogLayout title="Blog Posts">
      <Stack direction="vertical" gap={3}>
        {posts.map((post) => (
          <div key={post.slug}>
            <Heading size="section">
              <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </Heading>
            <Text variant="subtle" size={3}>
              {dayjs(post.date).format("MMMM D, YYYY h:mm A")}
            </Text>
            {post.description && (
              <Text
                variant="subtle"
                dangerouslySetInnerHTML={{ __html: post.description }}
              />
            )}
          </div>
        ))}
      </Stack>
    </BlogLayout>
  );
}

export default BlogIndexPage;
