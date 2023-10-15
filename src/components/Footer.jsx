import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

function Footer() {
	return (
		<div className="footer bg-[#222] font-bold text-white">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center my-12 w-[60%]">
				<div className="text-[1.4rem] mb-8 md:mb-0">
					<h3>Copyright © 2023. All rights are reserved</h3>
				</div>
				<div className="footerc__socials flex gap-8">
					<a
						aria-label="linkedin"
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/pranaav-shinde-1b8abb1b3/"
						className="text-[1.8rem]"
					>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a
						aria-label="github"
						target="_blank"
						rel="noreferrer"
						href="https://github.com/py528"
						className="text-[1.8rem]"
					>
						<FontAwesomeIcon icon={faGithub} />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;
