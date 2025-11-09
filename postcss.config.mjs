// postcss.config.mjs (ESM)
// Next.js expects the PostCSS config to export an object with a `plugins` object
// where plugin names are strings, not an array of functions.

export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
