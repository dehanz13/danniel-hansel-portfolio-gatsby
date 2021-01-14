import React from 'react'
import { number } from 'prop-types'
import { FiCoffee } from '@react-icons/all-files/fi/FiCoffee'

// const BlogInfo = ({ date, author, timeToRead }) => {
	const BlogInfo = ({ date, author }) => {

	return (
		<div>
			<span className="text-info">{date}</span> by{' '}
			<span className="text-info">{author}</span> {' • '}
			{/* <span className="text-info">{timeToRead} min read</span> {' • '} */}
			<span className="text-info"> min read</span> {' • '}
			<span className="text-info"><FiCoffee /></span>
		</div>
	)
}

BlogInfo.propTypes = {
	// timeToRead: number.isRequired,
}

export default BlogInfo;