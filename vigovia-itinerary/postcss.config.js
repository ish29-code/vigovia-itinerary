export default {
  plugins: {
    "@tailwindcss/postcss": {}, // ✅ NEW official plugin
    autoprefixer: {},
    "postcss-preset-env": {
      stage: 1,
      features: {
        "color-functional-notation": false, // ⛔ disables oklch()/oklab()
        "relative-color-syntax": false,
      },
    },
  },
};
