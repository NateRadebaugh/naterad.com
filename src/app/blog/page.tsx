import Divider from "components/Divider";
import styles from "./BlogLayout.module.scss";
import { bundleMDX } from "mdx-bundler";
import ButtonLink from "../../components/ButtonLink";
import Link from "../../components/Link";
import getBlogPostDetails, {
  BlogPostDetails,
} from "../../lib/getBlogPostDetails";
import bundleMdxConfig from "lib/bundleMdxConfig";
import BlogHeader from "./components/BlogHeader";
import { SkipNavContent } from "components/SkipNav";
import MDXComponent from "components/MdxComponent";
import WorkaroundTitle from "components/WorkaroundTitle";

interface Post extends BlogPostDetails {
  descriptionSource: string;
}

async function getData(locale: string): Promise<BlogIndexPageProps> {
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
    posts: posts,
  };
}

interface BlogIndexPageProps {
  posts: Post[] | undefined;
}

export default async function BlogIndexPage({ locale }) {
  const { posts } = await getData(locale);

  return (
    <div className="p-0 container-fluid">
      <WorkaroundTitle>Blog Posts - Nate Radebaugh&apos;s Blog</WorkaroundTitle>

      <BlogHeader />

      <SkipNavContent />

      <div className={styles.pageContent}>
        <h1 className="mb-4 text-4xl font-semibold">Blog Posts</h1>

        <Divider />

        {posts?.map(({ slug, title, date, descriptionSource }) => (
          <div key={slug}>
            <h2 className="mb-2 text-3xl font-semibold">
              <Link href={`/blog/${slug}`}>{title}</Link>
            </h2>
            <p className="my-2 font-bold text-gray-400">{date}</p>
            <MDXComponent code={descriptionSource} />

            <ButtonLink href={`/blog/${slug}`} className="btn btn-primary">
              Read more
            </ButtonLink>

            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
}
