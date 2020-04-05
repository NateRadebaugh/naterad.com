import hl from "highlight.js";
import marked from "marked";
import { getPosts } from "../../utils/posts";
import BlogLayout from "../../layouts/BlogLayout";

const renderer = new marked.Renderer();

// Override function
renderer.image = function(href, title, text) {
  return `<img src=${href} alt=${title} style="max-width: 400px"/>`;
};

type BlogPostProps = {
  slug: string;
  title: string;
  description: string;
  date: string;
  html: string;
};

export async function getStaticPaths() {
  return {
    paths: (await getPosts()).map(p => `/blog/${p.slug}`),
    fallback: false
  };
}

export async function getStaticProps({
  params
}: {
  params: { slug: string };
}): Promise<{ props: BlogPostProps }> {
  const { slug } = params;

  const post = (await getPosts()).find(p => p.slug === slug)!;
  const { title, description, date, content } = post;
  return {
    props: {
      slug,
      title,
      description: marked(description),
      date,
      html: marked(content, {
        renderer,
        highlight: function(code: string, lang: string) {
          if (lang) {
            return hl.highlight(lang, code).value;
          }

          return code;
        }
      })
    }
  };
}

function BlogPage(props: BlogPostProps) {
  const { slug, title, description, date, html } = props;

  return (
    <BlogLayout title={title} description={description} slug={slug} date={date}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </BlogLayout>
  );
}

export default BlogPage;
