const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  images: {
    domains: ["www.gravatar.com"],
  },
  pwa: {
    disable: process.env.NODE_ENV === "development",
    dest: "public",
    sw: "service-worker.gen.js",
  },
});
