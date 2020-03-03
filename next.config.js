const withOffline = require("next-offline");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withOffline(
  withMDX({
    target: "serverless",
    pageExtensions: ["tsx", "js", "jsx", "md", "mdx"],
    exportPathMap: function() {
      return {
        "/": { page: "/" }
      };
    },
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
              maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
            },
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      ]
    },

    //
    // Enable tiny builds by using some
    // beautiful _developit tricks
    // as demo'd here: https://github.com/developit/nextjs-preact-demo
    //
    // 1. Enable experimental nextjs features
    experimental: {
      modern: true,
      polyfillsOptimization: true
    },
    // 2. Use preact instead of react for smaller bundle sizes
    webpack(config) {
      const splitChunks =
        config.optimization && config.optimization.splitChunks;
      if (splitChunks) {
        const cacheGroups = splitChunks.cacheGroups;
        const preactModules = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/;
        if (cacheGroups.framework) {
          cacheGroups.preact = Object.assign({}, cacheGroups.framework, {
            test: preactModules
          });
          cacheGroups.commons.name = "framework";
        } else {
          cacheGroups.preact = {
            name: "commons",
            chunks: "all",
            test: preactModules
          };
        }
      }

      return config;
    }
  })
);
