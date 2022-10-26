const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
      },
    },
  },
  plugins: [
    // Enable bootstrap-like grid system with row and col-*
    require("tailwind-bootstrap-grid")(),

    require("@tailwindcss/typography"),
  ],
  corePlugins: {
    // Since we're using tailwind-bootstrap-grid for containers, disable the built-in tailwind containers
    container: false,
  },
};
