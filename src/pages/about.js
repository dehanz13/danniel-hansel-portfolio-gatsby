import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="About Us">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <p>
      Hello, my name is Danniel Hansel - a designer, front-end developer based in Dallas, Texas. </p>
    <p>  
      I'm focused on turning ideas into delightful, practical software, doing my best work when collaborating closely with founders, designers and developers.
    </p>
    <p>  
      Currently, I'm working on different side projects like mobile apps (React Native) and single app pages websites using React.

      In my free time, I like to read, write, teach and travel!
    </p>
  </Layout>
)

export default AboutPage
