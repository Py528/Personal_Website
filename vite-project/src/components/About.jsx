import React from 'react';
import { Macbook } from '../assets/assets';

function About() {
	return (
		<div className="about m-auto px-6 py-12 bg-white rounded-2xl shadow-2xl">
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
						A skilled Full Stack Developer <br /> based in Pune, India 📍
					</h3>
					<p className="text-[#777] leading-6 mb-8 text-center min-w-full shrink-0">
						As a Full Stack Developer, I possess a wide range of skills in HTML, CSS, JavaScript, React,
						Node.js, Express, PostgreSQL, and more. I have a strong command of both front-end and back-end
						development, allowing me to build robust and scalable web applications. With a focus on creating
						user-friendly interfaces and efficient server-side functionality, I strive to deliver
						high-quality solutions. I thrive in collaborative environments and enjoy working with diverse
						teams to tackle complex problems and bring innovative ideas to life.
					</p>
				</div>
			</div>
		</div>
	);
}

export default About;
