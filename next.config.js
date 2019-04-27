const withOffline = require("next-offline");
const withTypescript = require("@zeit/next-typescript");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [],
    hastPlugins: []
  }
});

module.exports = withOffline(
  withTypescript(
    withMDX({
      target: "serverless",
      pageExtensions: ["js", "jsx", "md", "mdx"],
      exportPathMap: function() {
        return {
          "/": { page: "/" }
        };
      },
      webpack(config, options) {
        // Do not run type checking twice:
        if (options.isServer) {
          config.plugins.push(new ForkTsCheckerWebpackPlugin());
        }

        return config;
      },
      workboxOpts: {
        swDest: "static/service-worker.js",
        runtimeCaching: [
          {
            urlPattern: /^https?.*/,
            handler: "networkFirst",
            options: {
              cacheName: "https-calls",
              networkTimeoutSeconds: 15,
              expiration: {
                maxEntries: 150,
                maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  )
);
