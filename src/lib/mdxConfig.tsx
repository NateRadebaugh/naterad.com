import clsx from "clsx";
import Link from "components/Link";
import { MDXRemoteProps } from "next-mdx-remote/rsc";
import Image from "next/image";
import remarkGfm from "remark-gfm";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import { SerializeOptions } from "next-mdx-remote/dist/types";

export const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypeCodeTitles, rehypePrism],
  format: "mdx",
} satisfies SerializeOptions["mdxOptions"];

export const mdxComponents = {
  h1: ({ className, ...props }) => (
    <h1
      className={clsx("text-xl font-extrabold mt-4 mb-2", className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }) => (
    <h2
      className={clsx("text-xl font-bold mt-4 mb-2", className)}
      {...props}
    />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={clsx("text-xl mt-4 mb-2", className)} {...props} />
  ),
  h4: ({ className, ...props }) => (
    <h4 className={clsx("text-lg mt-4 mb-2", className)} {...props} />
  ),
  a: (href) => <Link href={href} />,
  img: function ImgTag({ src, alt }) {
    return src ? <Image layout="fill" src={src} alt={alt ?? ''} /> : null;
  },
  p: function PTag(props) {
    return <p className="mb-3" {...props} />;
  },
  ol: function OlTag(props) {
    return <ul className="pl-3 mb-3 list-decimal list-outside" {...props} />;
  },
  ul: function UlTag(props) {
    return <ul className="pl-3 mb-3 list-disc list-outside" {...props} />;
  },
  blockquote: function BlockquoteTag({ style, ...props }) {
    return (
      <blockquote
        className={clsx("pl-3 pt-1 border-l-4 border-gray-500")}
        {...props}
      />
    );
  },
} satisfies MDXRemoteProps["components"];

const mdxConfig = {
  components: mdxComponents,
}
export default mdxConfig;
