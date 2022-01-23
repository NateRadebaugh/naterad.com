import path from "path";
import BlogLayout from "../../layouts/BlogLayout";
import getBlogPostDetails, {
  BlogPostDetails,
} from "../../lib/getBlogPostDetails";
import Divider from "../../components/Divider";
import Link from "../../components/Link";
import mdxConfig from "lib/mdxConfig";
import { getMDXComponent } from "mdx-bundler/client";
import { bundleMDX } from "mdx-bundler";
import { useMemo } from "react";
import bundleMdxConfig from "lib/bundleMdxConfig";

const root = process.cwd();

interface FrontMatterProps {
  title: string;
  description: string;
  date: string;
}

interface BlogPostProps {
  mdxSource: string;
  descriptionSource: string;
  frontMatter: FrontMatterProps;

  nextPost: BlogPostDetails;
  prevPost: BlogPostDetails;
}

export default function BlogPost({
  mdxSource,
  descriptionSource,
  frontMatter,
  prevPost,
  nextPost,
}: BlogPostProps) {
  const hasPrev = !!prevPost;
  const prevSlug = prevPost?.slug ?? null;
  const prevTitle = prevPost?.title ?? null;
  const prevDate = prevPost?.date ?? null;

  const hasNext = !!nextPost;
  const nextSlug = nextPost?.slug ?? null;
  const nextTitle = nextPost?.title ?? null;
  const nextDate = nextPost?.date ?? null;

  const MainContentComponent = useMemo(() => {
    if (!mdxSource) {
      return null;
    }

    return getMDXComponent(mdxSource);
  }, [mdxSource]);

  return (
    <BlogLayout {...frontMatter} descriptionSource={descriptionSource} isPost>
      <div className="prose-invert">
        {MainContentComponent && (
          <MainContentComponent components={mdxConfig.components as any} />
        )}
      </div>

      <Divider />

      <p className="font-bold text-gray-400">Further reading...</p>

      <div className="font-bold row">
        <div className="col">
          {hasPrev && (
            <Link href={`/blog/${prevSlug}`}>
              <div>
                &laquo; {prevTitle}
                <br />
                <small className="font-bold text-gray-400">{prevDate}</small>
              </div>
            </Link>
          )}
        </div>

        <div className="text-right col">
          {hasNext && (
            <Link href={`/blog/${nextSlug}`}>
              <div>
                {nextTitle} &raquo;
                <br />
                <small className="font-bold text-gray-400">{nextDate}</small>
              </div>
            </Link>
          )}
        </div>
      </div>

      <Divider />
    </BlogLayout>
  );
}

export async function getStaticPaths({ locale }) {
  const pageInfo = getBlogPostDetails({ locale });
  const paths = pageInfo.map((x) => x.path);

  return {
    fallback: false,
    paths: paths,
  };
}

export async function getStaticProps({ params, locale }) {
  const slug = params.slug;

  const sourceFilePath = path.join(root, "src", "_posts", `${slug}.mdx`);
  const { code: mdxSource } = await bundleMDX({
    file: sourceFilePath,
    ...bundleMdxConfig,
  });

  const pageInfo = getBlogPostDetails({ locale });
  const postIndex = pageInfo.findIndex((p) => p.slug === slug);

  const prevPost = pageInfo[postIndex - 1] || null;
  const nextPost = pageInfo[postIndex + 1] || null;

  const post = pageInfo[postIndex] || null;
  const { code: descriptionSource } = await bundleMDX({
    source: post.description,
    ...bundleMdxConfig,
  });

  const props: BlogPostProps = {
    mdxSource,
    descriptionSource,
    frontMatter: post,

    nextPost,
    prevPost,
  };

  return {
    props: props,
  };
}
