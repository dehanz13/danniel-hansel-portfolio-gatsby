import React from 'react'

//Going to use a lot of classes. Feel free to look at the Sass and learn why I use this class or that one and where the styling coming from.
const Footer = () => (
	<div className="site-footer">
		<h4 className="text-center">
			Code Blog
		</h4>
		<p className="text-center">Follow us on Social Media!</p>
		<div className="footer-social-links">
			<ul className="social-links-list">
				<li>
					<a 
						href="https://www.facebook.com" 
						target="_blank" 
						rel="noopener noreferrer" 
						className="facebook"
					>
						<i className="fab fa-facebook-f fa-2x" />
					</a>
				</li>
				<li>
					<a 
						href="https://www.facebook.com" 
						target="_blank" 
						rel="noopener noreferrer" 
						className="twitter"
					>
						<i className="fab fa-twitter fa-2x" />
					</a>
				</li>
				<li>
					<a 
						href="https://www.facebook.com" 
						target="_blank" 
						rel="noopener noreferrer" 
						className="instagram"
					>
						<i className="fab fa-instagram fa-2x" />
					</a>
				</li>
				{/* <li>
					<a 
						href="https://www.facebook.com" 
						target="_blank" 
						rel="noopener noreferrer" 
						className="google"
					>
						<i className="fab fa-google fa-2x" />
					</a>
				</li> */}
				<li>
					<a 
						href="https://www.facebook.com" 
						target="_blank" 
						rel="noopener noreferrer" 
						className="linkedin"
					>
						<i className="fab fa-linkedin fa-2x" />
					</a>
				</li>
			</ul>
		</div>
	</div>
)

export default Footer