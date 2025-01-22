"use client";
import { Project } from "@/.contentlayer/generated";
import Link from "@/components/ui/Link";
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export default function Hero({ project }: { project: Project }) {
	useGSAP(
		() => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: ".Hero",
					start: "top top",
					end: "bottom top",
					scrub: true,
				},
			});

			tl.to(".Button", { yPercent: -100, ease: "none" }, 0);
		},
		{ scope: ".Hero" }
	);
	return (
		<article className="Hero grid relative w-full h-full pt-10">
			<div className="relative w-full h-full p-3">
				<div className="relative w-full h-full pt-[50%] overflow-hidden md:pt-[30%]">
					<Image
						src={project.image}
						alt={project.title}
						fill
						className="object-cover origin-[50%_0] !h-auto"
					/>
				</div>
			</div>
			<div className="p-3">
				<h1 className="pb-4 mb-4 border-b border-accent uppercase text-4xl font-bold">
					{project.title}
				</h1>
				<div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:w-[70%]">
					<div className="col-span-2 ">
						<p className="uppercase text-lg font-medium">Description</p>
						<p className="text-xs">{project.description}</p>
					</div>
					<div>
						<p className="uppercase text-lg font-medium">Date</p>
						<p className="text-xs">{project.time}</p>
					</div>
					<div>
						<p className="uppercase text-lg font-medium">Area</p>
						<p className="text-xs">{project.project_type}</p>
					</div>
					<div className="w-fit relative">
						<Link
							href={project.repository}
							size="sm"
							variant="link"
							className="m-auto justify-normal pl-0"
						>
							Repository
						</Link>
					</div>
					<div className="Button  w-fit relative md:absolute md:top-full md:right-0">
						<Link
							href={`${project.url}`}
							variant="secondary"
							size="lg"
							className="aspect-square h-auto"
						>
							Live site
						</Link>
					</div>
				</div>
			</div>
		</article>
	);
}
