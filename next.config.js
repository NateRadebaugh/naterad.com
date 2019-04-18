const withTypescript = require("@zeit/next-typescript");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [],
    hastPlugins: []
  }
});
module.exports = withTypescript(
  withMDX({
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
    }
  })
);
