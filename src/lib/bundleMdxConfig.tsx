const bundleMdxConfig = {
  xdmOptions(input, options) {
    // this is the recommended way to add custom remark/rehype plugins:
    // The syntax might look weird, but it protects you in case we add/remove
    // plugins in the future.
    // options.remarkPlugins = [...(options.remarkPlugins ?? []), myRemarkPlugin];
    // options.rehypePlugins = [...(options.rehypePlugins ?? []), myRehypePlugin];

    return options;
  },
};

export default bundleMdxConfig;
