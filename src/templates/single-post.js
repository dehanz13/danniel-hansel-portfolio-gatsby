import React from 'react'
import { graphql, Link } from 'gatsby'
import { Badge, Card, CardBody, CardSubtitle, Row, Col, } from 'reactstrap'
import Img from 'gatsby-image'

import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"
import SEO from "../components/seo"
import { slugify } from "../util/utilityFunctions"


//this is similar to the Post component. But we are not using Post because we are not going to have a title. 
//But it won't be a problem because we wont use this format anywhere else. So we don't need to give it its component.
const SinglePost = ({ data }) => {
	const post = data.markdownRemark.frontmatter;
	
	return(
		<Layout>
			<SEO title={post.title} />
				<h1>{post.title}</h1>
				<Row>
					<Col md="8">
						<Card>
							<Img 
								className="card-image-top" 
								fluid={post.image.childImageSharp.fluid} />
							<CardBody>
								<CardSubtitle>
									<span className="text-info">{post.date}</span> by{' '}
									<span className="text-info">{post.author}</span>
								</CardSubtitle>
								<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
								<ul className="post-tags">
									{post.tags.map(tag => (
										<li key={tag}>
											<Link to={`/tag/${slugify(tag)}`}>
												<Badge color="primary">{tag}</Badge>
											</Link>
										</li>
									))}
								</ul>
								
							</CardBody>
						</Card>
					</Col>
					<Col md="4">
						<Sidebar />
					</Col>
				</Row>
		</Layout>
	)
}

//Write the query first. This query wont be static query because it's going to receive a variable. So, it'll be a dynamic query. 
//It'll executed automatically by graphql and we are going to have the data in props.data
export const postQuery = graphql`
	query blogPostBySlug($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug }}) {
			id
			html
			frontmatter {
				title
				author
				date(formatString: "MMM Do YYYY")
				tags
				image{
					childImageSharp{
						fluid(maxWidth: 700) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`

export default SinglePost