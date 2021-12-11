const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.tsx", "./src/**/*.jsx"],
  theme: {
    // Expose ALL colors to app
    colors: {
      transparent: "transparent",
      current: "currentColor",
      ...colors,
    },
    extend: {},
  },
  variants: {
    extend: {},
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
