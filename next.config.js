const withOffline = require("next-offline");
const withMdxEnhanced = require("next-mdx-enhanced");
const remarkA11yEmoji = require("@fec/remark-a11y-emoji");

module.exports = withMdxEnhanced({
  layoutPath: "src/layouts",
  defaultLayout: false,
  fileExtensions: ["mdx"],
  remarkPlugins: [remarkA11yEmoji],
  rehypePlugins: [],
  extendFrontMatter: {
    process: (mdxContent, frontMatter) => {},
    phase: "prebuild|loader|both",
  },
})(
  withOffline({
    workboxOpts: {
      swDest: "static/service-worker.js",
      runtimeCaching: [
        {
          urlPattern: /^https?.*/,
          handler: "NetworkFirst",
          options: {
            cacheName: "https-calls",
            networkTimeoutSeconds: 15,
            expiration: {
              maxEntries: 150,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
  })
);
