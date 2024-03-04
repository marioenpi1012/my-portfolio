"use client";
import Image from "next/image";
import Avatar from "@/public/avatar.jpg";
import Pagination from "@/components/Pagination";

import { allProjects, Project } from ".contentlayer/generated";
import ProjectList from "./projects/components/ProjectList";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {
	const projects = allProjects.filter((_, i) => i < 3); // 3 most recent.

	const fadeInAnimationParentVarients = {
		animate: {
			transition: { staggerChildren: 0.07, delayChildren: 0.5 },
		},
	};
	const fadeInAnimationVariants = {
		initial: {
			opacity: 0,
			y: 100,
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
			},
		},
	};
	const fadeInLeftSideAnimationVariants = {
		initial: {
			opacity: 0,
			x: "-100",
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				x: { stiffness: 1000, velocity: -100 },
			},
		},
	};
	const fadeInRightSideAnimationVariants = {
		initial: {
			opacity: 0,
			x: 100,
		},
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				x: { stiffness: 1000, velocity: -100 },
			},
		},
	};

	const inViewRef = useRef(null);
	const isInView = useInView(inViewRef);
	return (
		<>
			<section className="flex h-screen  ">
				<div className="ml-auto  mr-auto flex w-full">
					<motion.div
						variants={fadeInAnimationParentVarients}
						initial="initial"
						animate="animate"
						className="text-primary grid grid-cols-1 grid-rows-[auto_auto_auto] text-sm uppercase md:grid-cols-3 md:gap-4 "
					>
						<h1 className="text-primary row-span-2 self-center text-5xl  font-bold uppercase leading-[83%] md:col-span-3 md:text-[110px] xl:text-[170px]">
							<motion.div variants={fadeInAnimationVariants}>Mario</motion.div>
							<motion.div variants={fadeInAnimationVariants}>Pineda</motion.div>
						</h1>
						<motion.p
							variants={fadeInAnimationVariants}
							className="row-span-1 max-w-[360px] md:text-base"
						>
							Creating user-friendly designs, elevating digital innovation.
							Experience the blend of creativity and functionality in every
							pixel -It&apos;s like digital magic!
						</motion.p>
						<motion.p
							variants={fadeInAnimationVariants}
							className="row-span-1 justify-self-start md:text-base"
						>
							Front End Developer
						</motion.p>
						<motion.div variants={fadeInAnimationVariants}>
							<Image
								src={Avatar}
								alt="avatar"
								className="w aspect-square w-full  max-w-[65%] rounded-full  "
							/>
						</motion.div>
					</motion.div>
				</div>
			</section>
			<section>
				<Pagination number="01" title="About" />
				<motion.div
					ref={inViewRef}
					variants={fadeInAnimationParentVarients}
					initial="initial"
					animate={isInView ? "animate" : "initial"}
					className="grid gap-4 md:grid-cols-2 "
				>
					<motion.h3
						variants={fadeInLeftSideAnimationVariants}
						className="text-[2rem] uppercase leading-9 mt-5 mb-[0.625rem]"
					>
						It&apos;s about understanding peaple, solving problems, and creating
						meaningful connections.
					</motion.h3>
					<div className="text-sm space-y-5 grid gap-[1.875rem] justify-self-end row-span-1 md:text-base">
						<motion.p
							variants={fadeInRightSideAnimationVariants}
							className=" mt-5 mb-[0.625rem] max-w-md "
						>
							{" "}
							Hello, I&apos;m Mario Pineda, a passionate Fronend Developer
							dedicating to creating digital experience that seamlessly blend
							aesthetics with functionality.
						</motion.p>
						<motion.p
							variants={fadeInRightSideAnimationVariants}
							className="!mb-[0.625rem] max-w-md "
						>
							My journey in the developer realm is not just about pixels;
							it&apos;s about understaing people, solving problemsm and creating
							meaningful connections. I thrive on the intricacies of crafting
							intuitive interfaces that resonates with users.
						</motion.p>
					</div>
				</motion.div>
			</section>
			<section>
				<Pagination number="02" title="Work" />
				<div className="space-y-6 md:space-y-12 flex flex-col items-center">
					<p className="text-accent text-sm max-w-[400px]">
						Here&apos;s a glimpse into some of the adventures where I&apos;ve
						applied my enthusiasm for developmen crafting user-friendly
						applications leaving a lasting impact.
					</p>
					<ProjectList projects={projects} />
					<Link
						href="/projects"
						className="relative inline-flex justify-center items-center  no-underline text-sm px-12 py-4 border rounded-full"
					>
						More work
						<span className="absolute text-accent text-[0.675rem] bottom-1/2 left-3/4">
							{/* Subtract the 3 recent projects */}
							{allProjects.length - 3}
						</span>
					</Link>
				</div>
			</section>
		</>
	);
}
