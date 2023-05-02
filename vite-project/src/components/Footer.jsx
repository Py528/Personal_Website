import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
function Footer() {
	return (
		<div>
			<footer>
				<div className="container">
					<div className="footerc">
						<h3>Copyright © 2023. All rights are reserved</h3>
						<div className="footerc__socials">
							<a
								aria-label="linkedin"
								target="_blank"
								rel="noreferrer"
								href="https://www.linkedin.com/in/stefan-topalovic-dev/"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
							<a
								aria-label="github"
								target="_blank"
								rel="noreferrer"
								href="https://github.com/py528"
							>
								<FontAwesomeIcon icon={faGithub} />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
