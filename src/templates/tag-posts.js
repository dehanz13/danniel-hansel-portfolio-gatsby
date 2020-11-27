import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Post from '../components/Post'

const tagPosts = ({ data, pageContext }) => {
	const { tag } = pageContext
	const { totalCount } = data.allMarkdownRemark
	//So let's say 15 posts tagged with same tag, 'design', 
	//the idea behind this, ${totalCount === 1 ? '' : 's'} is that we take the total count of our posts.
	//And if that's 1, that means it's only one post. So we can say like 'One post tagged with ...'
	//But if it's more than one, means not equal to one, then it's going to be 's'. so 'Posts' not 'Post' (plural)
	const pageHeader = `${totalCount} post${
		(totalCount === 1) ? '' : 's'
		} tagged with "${tag}"`

		//Now return the content.
		return (
			<Layout pageTitle={pageHeader}>
				{data.allMarkdownRemark.edges.map(({ node }) => (
					<Post 
						key={node.id}
						slug={node.fields.slug}
						title={node.frontmatter.title}
						author={node.frontmatter.author}
						date={node.frontmatter.date}
						body={node.excerpt}
						tags={node.frontmatter.tags}
						fluid={node.frontmatter.image.childImageSharp.fluid}
						/>
				))}
			</Layout>
		)
}

//no need to rename the query. Just do the query itself.
export const tagQuery = graphql`
	query($tag: String!){
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: {tags: { in: [$tag] } } }
		){
			totalCount
			edges{
				node{
					id
					frontmatter{
						title
						date(formatString: "MMMM Do YYYY")
						author
						tags
						image{
							childImageSharp{
								fluid(maxWidth: 650, maxHeight: 371){
									...GatsbyImageSharpFluid
								}
							}
						}
					}
					fields{
						slug
					}
					excerpt
				}
			}
		}
	}
`

export default tagPosts