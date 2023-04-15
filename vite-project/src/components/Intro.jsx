import React from 'react';
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
const images = [
	{ src: HTML, title: 'HTML', link: 'https://www.w3.org/html/' },
	{ src: CSS, title: 'CSS3', link: 'https://www.w3.org/Style/CSS/' },
	{ src: JavaScript, title: 'Javascript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
	{ src: Reacts, title: 'React JS', link: 'https://reactjs.org/' },
	{ src: Tailwind, title: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
	{ src: Git, title: 'Git', link: 'https://git-scm.com/' },
	{ src: NODE, title: 'Node', link: 'https://nodejs.org/' },
];

function Intro() {
	return (
		<div class="h-screen flex justify-center items-center flex-col text-gray-800">
			<div class="container mx-auto flex justify-center items-center flex-col max-w-fit">
				<div class="hero-main flex gap-24">
					<div class="hero-text w-128">
						<div class="flex flex-col gap-8 text-5xl">
							<div class="flex justify-center">
								<div class="relative">
									<h1 class="text-6xl font-bold">
										Front-End React Developer
										<img
											class="h-16 w-16 absolute bottom-0 right-40"
											src={wave}
											alt="wave"
										/>
									</h1>
								</div>
							</div>
							<p class="font-normal text-gray-500 text-xl">
								Hi, I'm Pranav Shinde. A passionate Front-end React Developer based in Pune, India.
								{'📍'}
							</p>
							<div class="flex gap-4">
								<a href="#">
									<img
										class="cursor-pointer filter grayscale hover:grayscale-0 max-w-sm rounded-lg transition-all duration-300 w-11 relative"
										src={LinkedIn}
										alt="image description"
									/>
								</a>
								<a href="#">
									<img
										class="cursor-pointer filter grayscale hover:grayscale-0 max-w-sm rounded-lg transition-all duration-300 w-11 relative"
										src={Github}
										alt="image description"
									/>
								</a>
							</div>
						</div>
					</div>
					<div
						class="hero-img h-96 w-80 rounded ml-10"
						style={{ backgroundImage: `url(${Personalphoto})` }}
					></div>
				</div>
				<div class="skills self-start flex items-center text-2xl pt-20">
					<p class="border-r-2 border-solid border-gray-500 font-mulish font-semibold mr-28 pr-8">
						Tech Stack
					</p>
					<div class="logos">
						<ul class="flex space-x-4 gap-10">
							{images.map((img, index) => (
								<li key={index}>
									<a href={img.link}>
										<div class="relative rounded-full bg-white w-10 h-10 shadow-md flex justify-center items-center">
											<div class="absolute rounded-full bg-white w-18 h-18 shadow-lg"></div>
											<img
												src={img.src}
												title={img.title}
												alt="program_img"
												class="absolute inset-0 h-full w-full object-contain"
											/>
										</div>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Intro;
