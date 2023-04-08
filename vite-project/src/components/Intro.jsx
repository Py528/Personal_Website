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
	{ src: HTML, title: 'HTML' },
	{ src: CSS, title: 'CSS3' },
	{ src: JavaScript, title: 'Javascript' },
	{ src: Reacts, title: 'React JS' },
	{ src: Tailwind, title: 'Tailwind CSS' },
	{ src: Git, title: 'Git' },
	{ src: NODE, title: 'Node' },
];

function Intro() {
	return (
		<div class="container mt-52 mx-auto flex justify-center items-center flex-col max-w-fit">
			<div class="hero-main flex gap-24">
				<div class="hero-text w-128">
					<div class="flex flex-col gap-8 text-5xl">
						<div class="flex justify-center">
							<div class="relative">
								<h1 class="text-5xl font-bold">
									Front-End React Developer
									<img
										class="h-14 w-14 absolute -bottom-1 right-72"
										src={wave}
										alt="wave"
									/>
								</h1>
							</div>
						</div>
						<div class="italic font-medium text-2xl">
							Hi, I'm Pranav Shinde. A passionate Front-end React Developer based in Pune, India. 📍
						</div>
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
				<p class="border-r-2 border-solid border-gray-500 font-mulish font-semibold mr-28 pr-8">Tech Stack</p>
				<div class="logos">
					<ul class="flex space-x-4 gap-8">
						{images.map((img, index) => (
							<li key={index}>
								<div class="relative rounded-full bg-white w-10 h-10 shadow-xl flex justify-center items-center">
									<div class="absolute rounded-full bg-white w-16 h-16"></div>
									<img
										src={img.src}
										title={img.title}
										alt="program_img"
										class="absolute inset-0 h-full w-full object-contain"
									/>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Intro;
