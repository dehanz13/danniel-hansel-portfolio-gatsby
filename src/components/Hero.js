import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

const Hero = () => {
	const {
		file: {
			childImageSharp: { fluid },
		},
	} = useStaticQuery(query)
	return(
		// <div>
		// 	<p>this is hero</p>
		// </div>
		<header className="hero">
			<div className="section-center hero-center">
				<article className="hero-info">
					<div>
						<div className="underline">
							<h1>Hi, I'm Danniel</h1>
							<h4>Freelance web and Mobile UI/UX Designer</h4>
							<Link to="/contact" className="btn">
								Contact me
							</Link>
						</div>
					</div>
				</article>
				<Image fluid={fluid} className="hero-img" />
			</div>
		</header>
	)

}

const query = graphql`
	{
		file(relativePath: { eq: "danniel-headshot.jpg"}) {
			childImageSharp {
				fluid(maxWidth: 300) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`

export default Hero;