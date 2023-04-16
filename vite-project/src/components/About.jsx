import React from 'react';
import { Macbook } from '../assets/assets';

function About() {
	return (
		<div className="about m-auto w-[100%] p-[5rem] bg-white">
			<div className="container mx-auto w-[1200px] flex gap-[5rem] justify-center items-center">
				<div className="about-content flex justify-center items-center">
					<div className="img-side min-w-[50%] min-h-[50%]">
						<img
							src={Macbook}
							className="rounded-[16px]"
							alt="macbook"
						/>
					</div>
					<div className="text-side text-[1.2rem] leading-[1.5rem] mt-[1.5rem] mb-[2.5rem] lg:m p-[2rem]">
						<h2 className="text-[#008cff] font-bold leading-[2rem] mb-[1.5rem]">About me</h2>
						<h3 className="text-[#333] text-[2rem] leading-[2rem] my-[1.5rem] font-bold">
							A dedicated Front-end Developer <br /> based in Pune, India 📍
						</h3>
						<p className="text-[#333] leading-[1.5rem] text-[1rem] mb-[2rem]">
							As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS,
							JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive
							websites that offer a smooth user experience. My expertise lies in crafting dynamic,
							engaging interfaces through writing clean and optimized code and utilizing cutting-edge
							development tools and techniques. I am also a team player who thrives in collaborating with
							cross-functional teams to produce outstanding web applications.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
// acics
export default About;
