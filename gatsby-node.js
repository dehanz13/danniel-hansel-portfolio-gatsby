/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

//Do some clever thing before we create the posts
const { slugify } = require('./src/util/utilityFunctions');
const path = require('path');
const authors = require('./src/util/authors')
const _ = require('lodash')

//So, on createNode, it's executed each time one node is created in the graphql Schema. Could be something like a post or file system or image or url.
//So, instead of writing the path for each posts, we want to generate it from the title automatically.
//So create a new field in a node, we can transform it, etc.
exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions
	//Check the type of the node
	if (node.internal.type === 'MarkdownRemark') {
		//This means this is a markdown file. So it's definitely one of our posts.
		const slugFromTitle = slugify(node.frontmatter.title)
		createNodeField({
			node,
			name: 'slug',
			value: slugFromTitle
		})
	}
}

//New function to create pages. We already have access to the slug.
//This createPages is an Asynchronous method. So it has to return a promise or use a callback
exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	//const singlePostTemplate = path.resolve('src/templates/single-post.js')

	//let's bring in all templates as single object.
	const templates = {
		singlePost: path.resolve('src/templates/single-post.js'),
		tagsPage: path.resolve('src/templates/tags-page.js'),
		tagPosts: path.resolve('src/templates/tag-posts.js'),
		postList: path.resolve('src/templates/post-list.js'),
	}

	return graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							author
							tags
							
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`).then(result => {
		if(result.errors) return Promise.reject(result.errors)

		const posts = result.data.allMarkdownRemark.edges
		
		// Create single blog post pages.
		posts.forEach(({node}) => {
			createPage({
				//This createPage takes a path for that page which will register this page to that path.
				//So each time we visit that path, we get that page.
				path: node.fields.slug,
				component: templates.singlePost,
				//context is a way we use to pass something to your component that it'll be used later.
				context: {
					// Passing slug for template to use to get post.
					slug: node.fields.slug,
					//This function below passes the author's image. Finds the post that matches the author's name. Then when we find it, it'll return this author. So we need to return .imageUrl -> just the image field.
					//Find author imageUrl from authors and pass it to the single post template.
					imageUrl: authors.find(x => x.name === node.frontmatter.author).imageUrl
				}
			})
		})
		//Get all tags.
		let tags = []
		_.each(posts, edge => {
			//This get method, from edge it gets the value from 'node.frontmatter.tags and use it as a condition. So if we don't have tags, we won't do anything.
			if(_.get(edge, 'node.frontmatter.tags')){
				//This is going to get the tags from this post/edge which represents post because there's a node inside of it. And add all the tags to this existing tags array.
				tags = tags.concat(edge.node.frontmatter.tags)
			}
		})

		//We need to pass account of tags. Ex.: ['design', 'code', ...] and object literal: {design: 5, code: 6, ...} because I wanna show how many posts each tag has.
		let tagPostCounts = {}
		tags.forEach(tag => {
			//[tag] will create an entry/property that has the name 'tag'
			//I can't do tagPostCounts[tag] + 1 because it'll be undefined. And in JS if we do undefined + a number, it isn't going to return a number. It's going to return NaN => problem!
			//So we need a number. If we dont have that, we're gonna have a 0 instead. If we have a value, we're gonna use that value and add 1 to it.
			tagPostCounts[tag] = (tagPostCounts[tag] || 0 ) + 1;
		})

		//now we need to remove duplicate entries using lodash method.
		tags = _.uniq(tags)

		//now we create the tags page
		createPage({
			path: '/tags',
			component: templates.tagsPage,
			context: {
				tags,
				tagPostCounts,
			}
		})

		// Create tag posts pages
		tags.forEach(tag => {
			createPage({
				path: `/tag/${slugify(tag)}`,
				component: templates.tagPosts,
				context: {
					tag,
				}
			})
		})

		//Declare a variable that's going to determine how many posts per page we want.
		const postsPerPage = 2
		//We also need a variable that calculates the total number of pages. indicates which page we're in.
		const numberOfPages = Math.ceil(posts.length / postsPerPage) //This ceiling method will round up the number. so 3.33 would be 4. 
		//Set an array that loops through number of pages. Let's create a virtual array just to loop through the number of pages.
		Array.from({ length: numberOfPages }).forEach((_, index) => {
			const isFirstPage = index === 0
			const currentPage = index + 1

			if(isFirstPage) return

			createPage({
				path: `/page/${currentPage}`,
				component: templates.postList,
				context: {
					limit: postsPerPage,
					skip: index * postsPerPage,
					currentPage
				}
			})
		})
	})
}
