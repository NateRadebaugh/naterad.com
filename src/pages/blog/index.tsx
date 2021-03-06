import Divider from "components/Divider";
import { MdxRemote } from "next-mdx-remote/types";
import renderToString from "next-mdx-remote/render-to-string";
import ButtonLink from "../../components/ButtonLink";
import Link from "../../components/Link";
import BlogLayout from "../../layouts/BlogLayout";
import getBlogPostDetails, {
  BlogPostDetails,
} from "../../lib/getBlogPostDetails";

// No special markdown supported here
const mdxConfig = {
  components: {},
};

interface Post extends BlogPostDetails {
  descriptionSource: MdxRemote.Source;
}

export async function getStaticProps({ locale }) {
  const posts: Post[] = [];
  const blogPostDetailsList = getBlogPostDetails({ locale });
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
        const { renderedOutput: descriptionContent } = descriptionSource || {};
        return (
          <div key={slug}>
            <h2>
              <Link href={`/blog/${slug}`}>{title}</Link>
            </h2>
            <p className="font-bold text-gray-400">{date}</p>
            {descriptionContent && (
              <div
                dangerouslySetInnerHTML={{ __html: descriptionContent }}
              ></div>
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
