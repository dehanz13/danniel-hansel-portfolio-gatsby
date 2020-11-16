import React from "react"
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from "reactstrap"

const Sidebar = () => (
	<div>
		<Card>
			<CardBody>
				<CardTitle className="test-center text-uppercase mb-3">
					Newsletter
				</CardTitle>
				<Form className="text-center">
					<FormGroup>
						<Input 
							type="email" 
							name="email" 
							placeholder="Your email address.."/>
					</FormGroup>
					<button className="btn btn-outline-success text-uppercase">
						Subscribe
					</button>
				</Form>
			</CardBody>
		</Card>
		<Card>
			<CardBody>
				<CardTitle className="text-ceter text-uppercase">
					Advertisement
				</CardTitle>
				<img 
					src="https://via.placeholder.com/320x200" 
					alt="advert" 
					style={{width:"100%"}}/>
			</CardBody>
		</Card>
	</div>
)

export default Sidebar