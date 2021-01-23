import React from 'react'
import Image from 'gatsby-image'
// import { Link as GatsbyLink } from 'gatsby-link'
import { Link } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'

import SocialLinks from '../constants/socialLinks'
const Hero = () => {
	// const StyledLink = styled(GatsbyLink)
	// 	color: aqua;
	// 	;
	
	const {
		file: {
			childImageSharp: { fluid },
		},
	} = useStaticQuery(query)

	

	return(
		// <header className="hero">
		// 	<div className="section-center hero-center">
		// 		<article className="hero-info">
		// 			<div>
		// 				<div className="underline"></div>
		// 					<h1>Hi, I'm Danniel</h1>
		// 					<h4>Freelance web and Mobile UI/UX Designer</h4>
		// 					<Link to="/contact" className="btn">
		// 						Contact me
		// 					</Link>
						
		// 			</div>
		// 		</article>
		// 		{/* <Image fluid={fluid} className="hero-img" /> */}
		// 	</div>
		// </header>
		<header className="hero_header">
			
			<div className="hero_intro">
				<h1>Hi, I'm Danniel</h1>
				<p>Front End Developer / Blogger / Traveler</p>
				<Link to="/contact/" className="btn">
					Contact Me
				</Link>
				<SocialLinks />
				<div className="hero_image">
					<Image fluid={fluid} alt="" />
				</div>
			</div>
		</header>

	)
}

const query = graphql`
	query {
		file(relativePath: { eq: "danniel-headshot.jpg"}) {
			childImageSharp {
				fluid(maxHeight: 600) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`

export default Hero;