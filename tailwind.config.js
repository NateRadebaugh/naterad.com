module.exports = {
  purge: ["./src/**/*.tsx", "./src/**/*.jsx"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
