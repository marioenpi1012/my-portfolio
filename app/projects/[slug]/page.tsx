import React from "react";

import { allProjects } from "@/.contentlayer/generated";
import Image from "next/image";

import MdxWrapper from "@/components/MdxWrapper";
import Button from "@/components/ui/Button";
import ProjectCard from "@/app/projects/components/ProjectCard";
import Link from "@/components/ui/Link";
import { useGSAP } from "@gsap/react";
import Hero from "./Hero";
export default function Project({ params }: { params: any }) {
	const project = allProjects.find((project) => project.slug === params.slug);
	const nextProject = allProjects[allProjects.indexOf(project!) + 1] ?? null;

	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<div className="space-y-5">
			<Hero project={project} />
			<MdxWrapper code={project.body.code} />
			{nextProject && (
				<ProjectCard data-show-cursor-text project={nextProject} />
			)}
			<div className="flex flex-col w-full ">
				<Link
					href="/projects"
					size="lg"
					variant="outline"
					className="w-full h-20 mx-auto md:w-fit md:h-10"
				>
					All work <sup className="text-xs">{allProjects.length}</sup>
				</Link>
			</div>
		</div>
	);
}