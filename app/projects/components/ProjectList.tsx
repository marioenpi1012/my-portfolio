"use client";

import type { Project as ProjectType } from "contentlayer/generated";
import Project from "./Project";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import { useState } from "react";

import { motion } from "framer-motion";
import clsx from "clsx";

type ProjectListProps = {
	projects: ProjectType[];
	display?: "list" | "card";
};

const displays = {
	list: "animated-list",
	card: "gap-4 md:grid-cols-2",
};

export default function ProjectList({
	projects,
	display = "list",
}: ProjectListProps) {
	const [modal, setModal] = useState({ active: false, index: 0 });
	return (
		<motion.ul
			className={clsx(
				"grid grid-cols-1 grid-rows-[auto_auto] w-full h-full",
				displays[display]
			)}
			data-show-cursor-text
		>
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
		</motion.ul>
	);
}
