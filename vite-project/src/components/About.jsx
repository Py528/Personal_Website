import React from 'react';
import { Macbook } from '../assets/assets';

function About() {
	return (
		<div className="about m-auto px-6 py-12 bg-white">
			<div className="container mx-auto flex flex-col lg:flex-row gap-6 justify-center items-center lg:items-start lg:justify-between max-w-[60%]">
				<div className="img-side flex-shrink-0 w-full lg:w-1/2 aspect-w-1 aspect-h-1">
					<img
						src={Macbook}
						className="rounded-2xl w-full h-auto object-cover"
						alt="macbook"
					/>
				</div>
				<div className="text-side w-full lg:w-1/2 max-w-2xl text-lg">
					<h2 className="text-[#008cff] font-extrabold text-xl lg:text-2xl mb-4 lg:mb-8 uppercase">
						About me
					</h2>
					<h3 className="text-[#333] font-extrabold text-2xl lg:text-4xl leading-8 lg:leading-12 mb-8">
						A dedicated Front-end Developer <br /> based in Pune, India 📍
					</h3>
					<p className="text-[#777] leading-6 mb-8 text-center min-w-full shrink-0">
						As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS,
						JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites
						that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces
						through writing clean and optimized code and utilizing cutting-edge development tools and
						techniques. I am also a team player who thrives in collaborating with cross-functional teams to
						produce outstanding web applications.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
