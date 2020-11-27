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
	const singlePostTemplate = path.resolve('src/templates/single-post.js')

	return graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							author
							
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

		posts.forEach(({node}) => {
			createPage({
				//This createPage takes a path for that page which will register this page to that path.
				//So each time we visit that path, we get that page.
				path: node.fields.slug,
				component: singlePostTemplate,
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
	})
}
