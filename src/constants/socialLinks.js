import React from 'react';
import {
	FaFacebookSquare,
  FaLinkedin,
	FaTwitterSquare,
	FaInstagram,
	FaGithub
} from 'react-icons/fa'

const data = [
	{
		id: 1,
		icon: <FaFacebookSquare size={28} className="social-icon"></FaFacebookSquare>,
		url: "https://www.facebook.com",
	},
	{
		id: 2,
		icon: <FaTwitterSquare size={28} className="social-icon"></FaTwitterSquare>,
		url: "https://www.twitter.com",
	},
	{
		id: 3,
		icon: <FaInstagram size={28} className="social-icon"></FaInstagram>,
		url: "https://www.instagram.com",
	},
	{
		id: 4,
		icon: <FaLinkedin size={28} className="social-icon"></FaLinkedin>,
		url: "https://www.linkedin.com",
	},
	{
		id: 5,
		icon: <FaGithub size={28} className="social-icon"></FaGithub>,
		url: "https://www.github.com",
	},
]

const links = data.map(link => {
	return(
		<li key={link.id}>
			<a href={link.url} className="social-link">
				{link.icon}
			</a>
		</li>
	)
})

export default ({ styleClass }) => {
	return(
		<ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
	)
}