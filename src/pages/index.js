import React from "react"
import { graphql, StaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import PaginationLinks from '../components/PaginationLinks'
import Hero from '../components/Hero'

const IndexPage = () => {
  const postsPerPage = 5;
  //We need number of pages but we cant calculate the number of pages outside here because we need the 'data' from render={data => {
  let numberOfPages
  return(
  <Layout pageTitle="Danniel Hansel">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />

    <StaticQuery 
      query={indexQuery} 
      render={data => {
        numberOfPages = Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post 
                key={node.id}
                title={node.frontmatter.title}
                author={node.frontmatter.author}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                body={node.excerpt}
                fluid={node.frontmatter.image.childImageSharp.fluid}
                tags={node.frontmatter.tags}
                // timeToRead={node.timeToRead}
              />
            ))}
            <PaginationLinks currentPage={1} numberOfPages={numberOfPages}/>
          </div>
        )
      }}
    />  
  </Layout>
  )
}

const indexQuery = graphql`
  query {
    allMarkdownRemark( 
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 5
    ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "MMM Do YYYY")
              author
              tags
              image {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields{
              slug
            }
            excerpt
          }
        }
    }
  }
`

export default IndexPage
