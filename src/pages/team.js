import React from "react"
import { Button, Col, Card, CardText, CardBody, CardTitle, Row } from 'reactstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from '../util/authors'
import DannielImage from '../images/danniel-headshot.jpg'
import MaggieImage from '../images/maggie-headshot.jpg'
import { slugify } from '../util/utilityFunctions'

const TeamPage = () => (
  <Layout pageTitle="Our Team">
    <SEO title="Team" keywords={[`gatsby`, `application`, `react`]} />
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={DannielImage} style={{ maxWidth: '100%'}} alt="Danniel's Profile" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%'}}>
          <CardBody>
            <CardTitle>{authors[0].name}</CardTitle>
            <CardText>{authors[0].bio}</CardText>
            <Button className="text-uppercase" color="primary" href={`/author/${slugify(authors[0].name)}`}>View Posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={MaggieImage} style={{ maxWidth: '100%'}} alt="Danniel's Profile" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: '100%'}}>
          <CardBody>
            <CardTitle>{authors[1].name}</CardTitle>
            <CardText>{authors[1].bio}</CardText>
            <Button className="text-uppercase" color="primary" href={`/author/${slugify(authors[1].name)}`}>View Posts</Button>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default TeamPage
