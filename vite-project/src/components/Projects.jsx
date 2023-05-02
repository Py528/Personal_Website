import React from 'react';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';
import Project4 from './Project4';

function Projects() {
	return (
		<section className="project bg-gray-100">
			<div className="container mx-auto py-36 max-w-[60%] w-[90%]">
				<div className=" mx-auto">
					<div className="project-content flex flex-col gap-4">
						<p className="text-[#008cff] font-bold text-xl leading-[2rem] mb-[.5rem] uppercase">
							Portfolio
						</p>
						<h3 className="text-[#333] text-[1.5rem] font-bold">
							Each project is a unique piece of development 🧩
						</h3>
					</div>
					<div className="projects-grid flex flex-col gap-16 my-16">
						<Project1 />
						<Project2 />
						<Project3 />
						<Project4 />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
