import Divider from "components/Divider";
import mdxConfig from "lib/mdxConfig";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import ButtonLink from "../../components/ButtonLink";
import Link from "../../components/Link";
import BlogLayout from "../../layouts/BlogLayout";
import getBlogPostDetails, {
  BlogPostDetails,
} from "../../lib/getBlogPostDetails";

interface Post extends BlogPostDetails {
  descriptionSource: MDXRemoteSerializeResult;
}

export async function getStaticProps({ locale }) {
  const posts: Post[] = [];
  const blogPostDetailsList = getBlogPostDetails({ locale });
  for (const post of blogPostDetailsList) {
    const descriptionSource = await serialize(post.description);
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
        const { compiledSource: descriptionContent } = descriptionSource || {};
        return (
          <div key={slug}>
            <h2>
              <Link href={`/blog/${slug}`}>{title}</Link>
            </h2>
            <p className="font-bold text-gray-400">{date}</p>
            {descriptionContent && (
              <MDXRemote {...descriptionSource} {...mdxConfig} />
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
