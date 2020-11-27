import React from 'react'
import { graphql, Link } from 'gatsby'
import { Badge, Card, CardBody, CardSubtitle } from 'reactstrap'
import Img from 'gatsby-image'
//import { DiscussionEmbed } from 'discus-react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import { slugify } from "../util/utilityFunctions"
import authors from '../util/authors'


//this is similar to the Post component. But we are not using Post because we are not going to have a title. 
//But it won't be a problem because we wont use this format anywhere else. So we don't need to give it its component.
const SinglePost = ({ data, pageContext }) => {
	const post = data.markdownRemark.frontmatter;
	const author = authors.find(x => x.name === post.author) //same thing as in the gatsby-node

	//we need siteUrl. Since we're going keep needing it, let's put it in a variable.
	const baseUrl = 'https://gatsbytutorial.co.uk/'

	//Disqus App is broken atm...
	// const disqusShortName = 'https-gatsbytutorial-co-uk'
	// const disqusConfig = {
	// 	identifier: data.markdownRemark.id,
	// 	title: post.title,
	// 	url: baseUrl + pageContext.slug
	// }

	return(
		<Layout pageTitle={post.title} postAuthor={author} authorImageFluid={data.file.childImageSharp.fluid}>
			<SEO title={post.title} />
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
				<h3 className="text-center">
					Share this post!
				</h3>
				<div className="text-center social-share-links">
					<ul>
						<li>
							<a 
								href={
									'https://www.facebook.com/sharer/sharer.php?u=' + 
									baseUrl + 
									pageContext.slug
								} 
								className="facebook" 
								target="_blank" 
								rel="noopener noreferrer"
							>
								<i className="fab fa-facebook-f fa-2x" />
							</a>
						</li>
						<li>
							<a 
								href={
									'https://www.twitter.com/share?url=' + 
									baseUrl + 
									pageContext.slug +
									'&text=' +
									post.title +
									'&via' +
									'twitterHandle'
								} 
								className="twitter" 
								target="_blank" 
								rel="noopener noreferrer"
							>
								<i className="fab fa-twitter fa-2x" />
							</a>
						</li>
						<li>
							<a 
								href={
									'https://plus.google.com/share?url=' + 
									baseUrl + 
									pageContext.slug
								} 
								className="google" 
								target="_blank" 
								rel="noopener noreferrer"
							>
								<i className="fab fa-google fa-2x" />
							</a>
						</li>
						<li>
							<a 
								href={
									'https://www.linkedin.com/sharerArticle?url=' + 
									baseUrl + 
									pageContext.slug
								} 
								className="linkedin" 
								target="_blank" 
								rel="noopener noreferrer"
							>
								<i className="fab fa-linkedin fa-2x" />
							</a>
						</li>
					</ul>
				</div>
				{/* <DiscussionEmbed shortName={disqusShortName} config={disqusConfig} /> */}
		</Layout>
	)
}

//Write the query first. This query wont be static query because it's going to receive a variable. So, it'll be a dynamic query. 
//It'll executed automatically by graphql and we are going to have the data in props.data
// Exclamation mark means it's required.
export const postQuery = graphql`
	query blogPostBySlug($slug: String!, $imageUrl: String!) {
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
		file(relativePath: { eq: $imageUrl}) {
			childImageSharp{
				fluid(maxWidth: 300){
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`

export default SinglePost