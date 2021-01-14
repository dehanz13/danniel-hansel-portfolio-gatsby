import React from 'react';
import { graphql, StaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"

const BlogsPage = () => {
	return(
		<Layout pageTitle="Blogs">
			<SEO title="Blogs" keywords={[`gatsby`, `application`, `react`]} />
			<StaticQuery 
				query={blogsQuery}
				render={data => {
					return (
						<div>
							{data.allMarkdownRemark.edges.map(({ node }) => (
								<Post
									key={node.id}
									title={node.frontmatter.title}
									author={node.frontmatter.author}
									slug={node.fields.slug}
									date={node.frontmatter.date}
									body={node.excerpt}
									fluid={node.frontmatter.image.childImageSharp.fluid}
									tags={node.frontmatter.tags}
									//timeToRead={node.timeToRead}
								/>
							))}
						</div>
					)
				}}
			/>
		</Layout>
	)
	//console.log("---> Slug: ", {node.fields.slug})
}

const blogsQuery = graphql`
	query {
		allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
		) {
				edges {
					node {
						id
						frontmatter {
							title
							date(formatString: "MMM Do YYYY")
							author
							tags
							image {
								childImageSharp {
									fluid(maxWidth: 600) {
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

export default BlogsPage;