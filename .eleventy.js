const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/style.css");
	eleventyConfig.addPassthroughCopy("./src/culturednyc-logo.png");
	eleventyConfig.addPassthroughCopy("./src/favicon.ico");
	eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// which file extensions to process
		extensions: "html",

		// Add any other Image utility options here:

		// optional, output image formats
		formats: ["webp", "jpeg"],
		// formats: ["auto"],

		// optional, output image widths
		// widths: [200, 800, 1200, "auto"],

		// optional, attributes assigned on <img> override these values.
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
	});
    return {
		markdownTemplateEngine: "njk",
        dir: {
            input: "src",
            output: "public",
        },
    };
};