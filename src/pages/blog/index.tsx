import Divider from "components/Divider";
import dayjs from "dayjs";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
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
      {posts.map(({ slug, title, date, descriptionSource }) => {
        const descriptionContent = hydrate(descriptionSource, mdxConfig);
        return (
          <div key={slug}>
            <h2>
              <Link href={`/blog/${slug}`}>{title}</Link>
            </h2>
            <p className="font-weight-bold text-muted">
              {dayjs(date).format("MMMM D, YYYY h:mm A")}
            </p>
            {descriptionContent && (
              <p className="text-muted">{descriptionContent}</p>
            )}

            <ButtonLink href={`/blog/${slug}`} className="btn btn-primary">
              Read more
            </ButtonLink>

            <Divider />
          </div>
        );
      })}
    </BlogLayout>
  );
}

export default BlogIndexPage;
