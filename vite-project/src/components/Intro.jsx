import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	wave,
	LinkedIn,
	Github,
	Git,
	Tailwind,
	CSS,
	JavaScript,
	HTML,
	NODE,
	Reacts,
	Personalphoto,
} from '../assets/assets.js';

function Intro() {
	return (
		<div className="lg:bg-gray-50">
			<div className="container mx-auto flex justify-between items-center flex-col pt-40 lg:pb-[20rem] md:pb-[16rem] sm:pb-[12rem] 2xs:pb-[8rem] 3xs:pb-[6rem] text-gray-800">
				<div className="hero-main flex gap-12 lg:flex-row flex-col-reverse items-center justify-between max-w-[109rem]">
					<div className="hero-text w-1/2">
						<div className="flex flex-col gap-8 text-5xl">
							<div className="flex justify-center">
								<h1 className="text-3xl lg:text-6xl md:text-5xl font-extrabold text-gray-800">
									Full-Stack React Developer{' '}
									<span
										role="img"
										aria-label="wave"
									>
										{'👋🏻'}
									</span>
								</h1>
							</div>
							<div>
								<p className="font-normal text-center text-gray-500 text-base lg:text-xl md:text-[1rem] md:text-start">
									Hi, I'm Pranav Shinde. A passionate Full-Stack React Developer based in Pune, India.
									{'📍'}
								</p>
								<div className="flex gap-4 lg:justify-start justify-center mt-4 lg:mt-0">
									<a
										aria-label="linkedin"
										target="_blank"
										className="hover:text-blue-500 transition duration-300"
										rel="noreferrer"
										href="https://www.linkedin.com/in/pranaav-shinde-1b8abb1b3/"
									>
										<FontAwesomeIcon
											icon={faLinkedin}
											className="text-3xl"
										/>
									</a>
									<a
										aria-label="github"
										target="_blank"
										className="hover:text-blue-500 transition duration-300"
										rel="noreferrer"
										href="https://github.com/py528"
									>
										<FontAwesomeIcon
											icon={faGithub}
											className="text-3xl"
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="w-min h-full flex justify-center items-center">
						<div className="hero-img-container">
							<div
								className="hero-img rounded-full bg-cover bg-center bg-no-repeat w-32 h-32 lg:w-96 lg:h-96 md:w-80 md:h-80 sm:w-72 sm:h-72 xs:w-64 xs:h-64 3xs:w-56 3xs:h-56  "
								style={{
									backgroundImage: `url(${Personalphoto})`,
									backgroundSize: 'cover',
									backgroundPosition: 'center',
								}}
							></div>
						</div>
					</div>
				</div>
				<div className="hero-side">
					<div className="skills flex lg:flex-row flex-col items-center text-2xl pt-20 lg:pr-20 md:pr-16 sm:pr-12 xs:pr-10 3xs:pr-8 pr-6">
						<p className="border-r-2 lg:border-solid lg:border-gray-500 font-mulish font-semibold mr-6 pr-4 justify-center items-end lg:items-center border-none px-12">
							Tech Stack
						</p>
						<div className="logos flex flex-wrap justify-center gap-12 mt-8 lg:mt-0 ml-4 ">
							<a href="https://www.w3.org/html/">
								<div className="logo-container relative rounded-full bg-white w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 shadow-md flex justify-center items-center">
									<div className="absolute rounded-full bg-white w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 shadow-lg"></div>
									<img
										src={HTML}
										title="HTML"
										alt="program_img"
										className="absolute inset-0 h-full w-full object-contain"
									/>
								</div>
							</a>
							<a href="https://www.w3.org/Style/CSS/">
								<div className="logo-container relative rounded-full bg-white w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 shadow-md flex justify-center items-center">
									<div className="absolute rounded-full bg-white w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 shadow-lg"></div>
									<img
										src={CSS}
										title="CSS3"
										alt="program_img"
										className="absolute inset-0 h-full w-full object-contain"
									/>
								</div>
							</a>
							<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
								<div className="logo-container relative rounded-full bg-white w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 shadow-md flex justify-center items-center">
									<div className="absolute rounded-full bg-white w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 shadow-lg"></div>
									<img
										src={JavaScript}
										title="Javascript"
										alt="program_img"
										className="absolute inset-0 h-full w-full object-contain"
									/>
								</div>
							</a>
							<a href="https://reactjs.org/">
								<div className="logo-container relative rounded-full bg-white w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 shadow-md flex justify-center items-center">
									<div className="absolute rounded-full bg-white w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 shadow-lg"></div>
									<img
										src={Reacts}
										title="React JS"
										alt="program_img"
										className="absolute inset-0 h-full w-full object-contain"
									/>
								</div>
							</a>
							<a href="https://tailwindcss.com/">
								<div className="logo-container relative rounded-full bg-white w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 shadow-md flex justify-center items-center">
									<div className="absolute rounded-full bg-white w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 shadow-lg"></div>
									<img
										src={Tailwind}
										title="Tailwind CSS"
										alt="program_img"
										className="absolute inset-0 h-full w-full object-contain"
									/>
								</div>
							</a>
							<a href="https://git-scm.com/">
								<div className="logo-container relative rounded-full bg-white w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 shadow-md flex justify-center items-center">
									<div className="absolute rounded-full bg-white w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 shadow-lg"></div>
									<img
										src={Git}
										title="Git"
										alt="program_img"
										className="absolute inset-0 h-full w-full object-contain"
									/>
								</div>
							</a>
							<a href="https://nodejs.org/">
								<div className="logo-container relative rounded-full bg-white w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 shadow-md flex justify-center items-center">
									<div className="absolute rounded-full bg-white w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 shadow-lg"></div>
									<img
										src={NODE}
										title="Node"
										alt="program_img"
										className="absolute inset-0 h-full w-full object-contain"
									/>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;
