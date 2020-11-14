const slugify = function(text) {
	return text
	  .toString()
	  .toLowerCase()
	  .replace(/\s+/g, '-')       // Replace spaces with -
	  .replace(/[^\w-]+/g, '')    // Remove all non-word chars
	  .replace(/--+/g, '-')       // Replace multiple - with single -
	  .replace(/^-+/, '')         // Trim - from start of text
	  .replace(/-+$/, '')         // Trim - from end of text
  }
  //what this function does is it creates slug (URL friendly string) from a word/normal string.
  //Ex: your tag is 'Web Design' which turns into a slug -> web-design 
  //So, this syntax has to be friendly with node

  module.exports = { slugify }
  //if you want to add more, just do module.exports = {slugify, otherFunctions}   since it's an array.