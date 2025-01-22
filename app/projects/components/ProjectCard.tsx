"use client";

import type { Project } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { HiArrowUpRight } from "react-icons/hi2";

type ProjectProps = {
	project: Project;
	setModal?: Dispatch<
		SetStateAction<{
			active: boolean;
			index: number;
		}>
	>;
	index?: number;
};

export default function ProjectCard({ project, ...props }: ProjectProps) {
	return (
		<li
			className="group overflow-hidden row-span-1 col-span-1 list-none"
			{...props}
		>
			<Link
				href={`/projects/${project.slug}`}
				className="relative block no-underline w-full h-full pt-[40%] "
			>
				<Image
					src={project.image}
					alt={project.title}
					fill
					className="object-contain  w-full h-full"
				/>
				<div className="project__display-info text-white inline-flex justify-between absolute inset-0 bg-black/50 z-10 items-end p-5  ">
					<p className="text-xl translate-y-[170%] group-hover:translate-y-0 will-change-transform transition-transform duration-700 ease-in-out">
						{project.title}
					</p>
					<div className="w-6 h-6 will-change-transform origin-center transition-transform duration-700 ease-in-out  group-hover:transform group-hover:rotate-45 ">
						<HiArrowUpRight />
					</div>
				</div>
			</Link>
		</li>
	);
}
