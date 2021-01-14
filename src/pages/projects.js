import React from 'react';
import { graphql, StaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"

const ProjectsPage = () => {
	return(
		<Layout pageTitle="Projects">
			<SEO title="Projects" keywords={[`gatsby`, `application`, `react`]} />
			<StaticQuery 
				query={projectsQuery}
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
								/>
							))}
						</div>
					)
				}}
			/>
		</Layout>
	)
}

const projectsQuery = graphql`
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

export default ProjectsPage;