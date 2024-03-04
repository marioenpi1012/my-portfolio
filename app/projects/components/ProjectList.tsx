"use client";

import type { Project as ProjectType } from "contentlayer/generated";
import Project from "./Project";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import { useState } from "react";
type ProjectListProps = {
	projects: ProjectType[];
	display?: "list" | "card";
};

export default function ProjectList({
	projects,
	display = "list",
}: ProjectListProps) {
	const [modal, setModal] = useState({ active: false, index: 0 });
	return (
		<ul className="animated-list grid grid-cols-1 grid-rows-[auto_auto] w-full h-full  m:grid-cols-2">
			{projects.map((project, index) =>
				display === "list" ? (
					<Project
						key={project.slug}
						project={project}
						setModal={setModal}
						index={index}
					/>
				) : (
					<ProjectCard key={project.slug} project={project} />
				)
			)}
			<Modal modal={modal} projects={projects} />
		</ul>
	);
}
