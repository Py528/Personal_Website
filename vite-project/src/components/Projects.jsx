import React from 'react';
import Project1 from './Project1';
function Projects() {
	return (
		<section className="project bg-gray-100 max-w-full">
			<div className="container mx-auto py-36 w-[60%]">
				<div className="project-content flex flex-col gap-4 ">
					<p className="text-[#008cff] font-bold text-xl leading-[2rem] mb-[.5rem] uppercase">Portfolio</p>
					<h3 class="text-[#333] text-[1.5rem] font-bold">
						Each project is a unique piece of development 🧩
					</h3>
				</div>
				<div class="projects-grid flex flex-col gap-16 my-16">
					<Project1 />
					<Project1 />
					<Project1 />
					<Project1 />
				</div>
			</div>
		</section>
	);
}

export default Projects;
