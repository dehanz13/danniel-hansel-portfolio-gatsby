import React from "react"
import { Link } from "gatsby"

import Project from "./Projects"

const Projects = ({ projects, title, showLink }) => {
	return(
		<section className="projects">
			<div className="projects_card">
				<div className="projects_card_description">
					<h2>Project 1</h2>
					<p>Description goes here...Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
				</div>
				<div className="projects_card_links">
					<a href="https://github.com/dehanz13">Repo</a>
					<a href="https://github.com/dehanz13">Project</a>
				</div>
			</div>
			<div className="projects_card">
				<div className="projects_card_description">
					<h2>Project 2</h2>
					<p>Description goes here...Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
				</div>
				<div className="projects_card_links">
					<a href="https://github.com/dehanz13">Repo</a>
					<a href="https://github.com/dehanz13">Project</a>
				</div>
			</div>
			<div className="projects_card">
				<div className="projects_card_description">
					<h2>Project 3</h2>
					<p>Description goes here...Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
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