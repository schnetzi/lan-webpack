module.exports = {
  purge: {
    enabled: false, // TODO: pruge when build
    content: ["./src/**/*.html", "./src/**/*.scss", "./src/**/*.ts"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
