
// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");

  eleventyConfig.addShortcode("blog", function(blogPostTitle) {
    return `<div class="blog-card">
    <div class="individual-blog">${blogPostTitle}</div> `
  });
  
};

