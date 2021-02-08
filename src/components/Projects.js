import React from "react"
import { Link } from "gatsby"

import Project from "./Projects"

const Projects = ({ projects, title, showLink }) => {
	return(
		<section className="projects">
			<div className="projects_card">
				<div className="projects_card_description">
					<h2>Car Leasing Calculator</h2>
					<p>A calculator used for car leasing. </p>
				</div>
				<div className="projects_card_links">
					<a href="https://github.com/dehanz13">Repo</a>
					<a href="https://github.com/dehanz13">Project</a>
				</div>
			</div>
			<div className="projects_card">
				<div className="projects_card_description">
					<h2>Quiz Builder</h2>
					<p>A high-speed app that lets you build your own quiz. </p>
				</div>
				<div className="projects_card_links">
					<a href="https://github.com/dehanz13">Repo</a>
					<a href="https://github.com/dehanz13">Project</a>
				</div>
			</div>
			<div className="projects_card">
				<div className="projects_card_description">
					<h2>E-Commerce App</h2>
					<p>A high-quality E-Commerce demo app that illustrate a retail business. </p>
				</div>
				<div className="projects_card_links">
					<a href="https://github.com/dehanz13">Repo</a>
					<a href="https://github.com/dehanz13">Project</a>
				</div>
			</div>
		</section>
	)
}

export default Projects