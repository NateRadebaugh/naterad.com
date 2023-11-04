import { type BundleMDXOptions } from "mdx-bundler/dist/types";
import remarkGfm from "remark-gfm";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";

const bundleMdxConfig: BundleMDXOptions<Record<string, any>> = {
  mdxOptions: (options) => {
    // this is the recommended way to add custom remark/rehype plugins:
    // The syntax might look weird, but it protects you in case we add/remove
    // plugins in the future.
    options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];

    options.rehypePlugins = [
      ...(options.rehypePlugins ?? []),
      rehypeCodeTitles,
      rehypePrism,
    ];

    return options;
  },
};

export default bundleMdxConfig;
