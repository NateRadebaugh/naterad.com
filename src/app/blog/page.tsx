import Divider from "components/Divider";
import styles from "./BlogLayout.module.scss";
import { MDXRemote } from 'next-mdx-remote/rsc'
import ButtonLink from "../../components/ButtonLink";
import Link from "../../components/Link";
import getBlogPostDetails, {
  BlogPostDetails,
} from "../../lib/getBlogPostDetails";
import BlogHeader from "./components/BlogHeader";
import { SkipNavContent } from "components/SkipNav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts - Nate Radebaugh's Blog",
}

export default async function BlogIndexPage() {
  const posts: BlogPostDetails[] = [];
  const blogPostDetailsList = getBlogPostDetails();
  for (const post of blogPostDetailsList) {
    posts.push({
      ...post,
    });
  }

  return (
    <div className="p-0 container-fluid">
      <BlogHeader />

      <SkipNavContent />

      <div className={styles.pageContent}>
        <h1 className="mb-4 text-4xl font-semibold">Blog Posts</h1>

        <Divider />

        {posts?.map(({ slug, title, date, description }) => (
          <div key={slug}>
            <h2 className="mb-2 text-3xl font-semibold">
              <Link href={`/blog/${slug}`}>{title}</Link>
            </h2>
            <p className="my-2 font-bold text-gray-400">{date}</p>
            <MDXRemote source={description} />

            <ButtonLink href={`/blog/${slug}`} className="btn btn-primary">
              Read more <span className="sr-only">about {title}</span>
            </ButtonLink>

            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
}
