const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html", "./src/**/*.{j,t}{s,sx}"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  whitelistPatterns: [/^h-[0-9]+/g],
  whitelist: ["body"],
})

const tailwindcss = require(`tailwindcss`)

module.exports = {
  plugins: [
    tailwindcss(`./tailwind.config.js`),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
}
