export default function (eleventyConfig) {
  // Copy static assets straight through to dist
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  // Current year for footer
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Zero-pad to two digits (01, 02, ...)
  eleventyConfig.addFilter("pad2", (n) => String(n).padStart(2, "0"));

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist",
    },
    pathPrefix: "/dautibau/",
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
}
