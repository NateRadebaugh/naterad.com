import Divider from "components/Divider";
import bundleMdxConfig from "lib/bundleMdxConfig";
import mdxConfig from "lib/mdxConfig";
import { bundleMDX } from "mdx-bundler";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import ButtonLink from "../../components/ButtonLink";
import Link from "../../components/Link";
import BlogLayout from "../../layouts/BlogLayout";
import getBlogPostDetails, { BlogPostDetails } from "../../lib/getBlogPostDetails";

interface Post extends BlogPostDetails {
  descriptionSource: string;
}

export async function getStaticProps({ locale }) {
  const posts: Post[] = [];
  const blogPostDetailsList = getBlogPostDetails({ locale });
  for (const post of blogPostDetailsList) {
    const { code: descriptionSource } = await bundleMDX({
      source: post.description,
      ...bundleMdxConfig,
    });
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

function BlogPostPreview({ slug, title, date, descriptionSource }) {
  const DescriptionComponent = useMemo(() => {
    if (!descriptionSource) {
      return null;
    }

    return getMDXComponent(descriptionSource);
  }, [descriptionSource]);

  return (
    <div key={slug}>
      <h2 className="mb-2 text-3xl font-semibold">
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h2>
      <p className="my-2 font-bold text-gray-400">{date}</p>
      {DescriptionComponent && <DescriptionComponent components={mdxConfig.components as any} />}

      <ButtonLink href={`/blog/${slug}`} className="btn btn-primary">
        Read more
      </ButtonLink>

      <Divider />
    </div>
  );
}

function BlogIndexPage({ posts }: BlogIndexPageProps) {
  return (
    <BlogLayout title="Blog Posts">
      {posts.map(({ slug, title, date, descriptionSource }) => (
        <BlogPostPreview
          key={slug}
          slug={slug}
          title={title}
          date={date}
          descriptionSource={descriptionSource}
        />
      ))}
    </BlogLayout>
  );
}

export default BlogIndexPage;
