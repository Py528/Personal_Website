import React from 'react';
import wave from '../assets/waving.1bae5fcfb51082b5c2b4.png';
import LinkedIn from '../assets/linkedin-icon.svg';
import Github from '../assets/github-icon-1.svg';
import Personalphoto from '../assets/personal_photo.jpg';

function Intro() {
	return (
		<div class="container mt-52 mx-auto flex justify-center items-center">
			<div class="content flex gap-24">
				<div class="hero-text w-128">
					<div class="flex flex-col gap-8">
						<div className="relative">
							<div className="text-5xl font-bold">Front-End React Developer</div>
							<img
								className="absolute right-52 top-36 w-16"
								src={wave}
								alt="wave"
							/>
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
				<img
					class="hero-img h-96 rounded w-80 ml-10"
					src={Personalphoto}
					alt="My Photo"
				/>
			</div>
		</div>
	);
}

export default Intro;
