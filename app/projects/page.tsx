import { Metadata } from "next";
import Image from "next/image";
import { allProjects, Project } from ".contentlayer/generated";
import Mdx from "@/components/MdxWrapper";
import Link from "next/link";
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
					<div>
						<Link href={project.url}>{project.title}</Link>
						<time> · {project.time}</time>
					</div>
					{project.title}
					{project.description}

					<div>
						<Mdx code={project.body.code} />
					</div>
				</div>
			))}
		</div>
	);
}
