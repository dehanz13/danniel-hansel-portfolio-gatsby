import React from 'react';
import { graphql, StaticQuery } from 'gatsby'

import BlogInfo from '../components/BlogInfo';
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"

const BlogsPage = () => {
	return(
		<Layout pageTitle="Blogs">
			<SEO title="Blogs" keywords={[`gatsby`, `application`, `react`]} />
			{/* <StaticQuery 
				query
			/> */}
		</Layout>
	)
}

export default BlogsPage;