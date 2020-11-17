/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col } from 'reactstrap'

import '../styles/index.scss'
import Header from "./header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"

const Layout = ({ children, pageTitle }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)
    //After copying Font Awesome's CDN, change the "crossorigin" to capital O -> "crossOrigin" since we are in React.
    render={data => (
      <>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
        <Header siteTitle={data.site.siteMetadata.title || `Title`} />
        <div className="container" id="content">
          <h1>{pageTitle}</h1>
          <Row>
            <Col md="8">
              {children}
            </Col>
            <Col md="4">
              <Sidebar />
            </Col>
          </Row>
        </div>
        <Footer />
        {/* <div className="container" id="content">
          <main>{children}</main>
          <footer style={{
            marginTop: `2rem`
          }}>
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://www.gatsbyjs.com">Danniel Hansel</a>
          </footer>
        </div> */}
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
