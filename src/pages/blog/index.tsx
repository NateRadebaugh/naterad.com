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
            <div className="position-relative" style={{ height: 300 }}>
              {banner && (
                <>
                  <div
                    className="position-absolute"
                    style={{ top: 0, left: 0 }}
                  >
                    <Image
                      src={banner}
                      width={600}
                      height={300}
                      className="border rounded"
                    />
                  </div>
                  <div
                    style={{
                      top: 0,
                      left: 0,
                      backgroundColor: "black",
                      opacity: 0.85,
                    }}
                    className="position-absolute w-100 h-100"
                  ></div>
                </>
              )}
              <div
                className="position-absolute p-3 d-flex flex-column"
                style={{ minHeight: 300 }}
              >
                <h2>
                  <Link href={`/blog/${slug}`} className="text-white">
                    {title}
                  </Link>
                </h2>
                <p className="font-weight-bold text-muted">{date}</p>

                {descriptionContent && <div>{descriptionContent}</div>}

                <ButtonLink
                  href={`/blog/${slug}`}
                  className="btn btn-primary align-self-start mt-auto"
                >
                  Read more
                </ButtonLink>
              </div>
            </div>

            <Divider />
          </div>
        );
      })}
    </BlogLayout>
  );
}

export default BlogIndexPage;
