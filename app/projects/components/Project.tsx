"use client";

import type { Project } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { HiArrowUpRight } from "react-icons/hi2";

type ProjectProps = {
	project: Project;
	setModal: Dispatch<
		SetStateAction<{
			active: boolean;
			index: number;
		}>
	>;
	index: number;
};

export default function Project({ project, setModal, index }: ProjectProps) {
	return (
		<li
			className="group text-primary w-full  border-t last-of-type:border-b transition-all 
      duration-[0.4s] overflow-hidden hover:opacity-50 md:text-lg xl:text-2xl "
			onMouseEnter={() => setModal({ active: true, index: index })}
			onMouseLeave={() => setModal({ active: false, index: 0 })}
		>
			<Link
				href={`/projects/${project.slug}`}
				className="relative flex no-underline justify-between items-center py-4  md:py-8 md:px-4 xl:py-12 xl:px-8"
			>
				<h2 className="group-hover:translate-x-2 transition-all duration-[0.4s]">
					{project.title}
				</h2>
				<p className="group-hover:-translate-x-2 transition-all duration-[0.4s]">
					{project.project_type}
				</p>
				<p className="hidden xl:block">{project.time}</p>
			</Link>
		</li>
	);
}
