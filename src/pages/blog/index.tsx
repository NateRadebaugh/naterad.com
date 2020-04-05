import dayjs from "dayjs";
import { Heading, Stack, Text } from "react-ui";
import BlogLayout from "../../layouts/BlogLayout";
import { BlogPost, getPosts } from "../../utils/posts";
import Link from "../../components/Link";

export async function getStaticProps() {
  const posts = await getPosts();

  // Sort
  posts.sort((a, b) => a.date.localeCompare(b.date));

  return { props: { posts } };
}

function BlogIndexPage({ posts }: { posts: BlogPost[] }) {
  return (
    <BlogLayout title="Blog Posts">
      {posts.map(post => (
        <div key={post.slug}>
          <Heading size="section">
            <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a>{post.title}</a>
            </Link>
          </Heading>
          <Text variant="subtle" size={4}>
            {dayjs(post.date).format("MMMM D, YYYY h:mm A")}
          </Text>
        </div>
      ))}
    </BlogLayout>
  );
}

export default BlogIndexPage;
