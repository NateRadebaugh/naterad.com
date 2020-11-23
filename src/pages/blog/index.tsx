import Divider from "components/Divider";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import ButtonLink from "../../components/ButtonLink";
import Link from "../../components/Link";
import Image from "next/image";
import BlogLayout from "../../layouts/BlogLayout";
import getBlogPostDetails, {
  BlogPostDetails,
} from "../../lib/getBlogPostDetails";
import mdxConfig from "../../lib/mdxConfig";
import { motion } from "framer-motion";

interface Post extends BlogPostDetails {
  descriptionSource: string;
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
      {posts.map(({ slug, title, date, descriptionSource, banner }) => {
        const descriptionContent = hydrate(descriptionSource, mdxConfig);
        return (
          <div key={slug}>
            <div className="row">
              {banner && (
                <motion.div
                  className="col-4 pr-0"
                  layoutId={`${slug}-banner-image`}
                >
                  <Image
                    src={banner}
                    width={600}
                    height={300}
                    className="border rounded"
                  />
                </motion.div>
              )}
              <div className="col-8">
                <motion.h2 layoutId={`${slug}-post-title`}>
                  <Link href={`/blog/${slug}`}>{title}</Link>
                </motion.h2>
                <motion.p
                  className="font-weight-bold text-muted"
                  layoutId={`${slug}-post-date`}
                >
                  {date}
                </motion.p>
              </div>
            </div>
            {descriptionContent && (
              <motion.div layoutId={`${slug}-post-description`}>
                {descriptionContent}
              </motion.div>
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
