import { Metadata } from "next";
import Image from "next/image";
import { allProjects, Project } from ".contentlayer/generated";

export const metadata: Metadata = {
	title: "Mario Pineda | Projects",
	description: "Here are some projects I've worked on.",
};

export default function Page() {
	const projects = allProjects;

	return (
		<div className="text-black">
			<h1>Projects</h1>
			{projects.map((project, i) => (
				<div key={project.slug} className="text-black">
					{project.title}
					<div>
						<Image
							src={project.image}
							alt={project.title}
							layout="fill"
							objectFit="cover"
							className="w-full h-full"
						/>
					</div>
				</div>
			))}
		</div>
	);
}
