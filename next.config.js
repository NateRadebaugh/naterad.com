const withOffline = require("next-offline");

module.exports = withOffline({
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
  }
});
