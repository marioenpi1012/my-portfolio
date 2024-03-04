import React, { useEffect, useRef } from "react";
import type { Project } from "@/.contentlayer/generated";
import Image from "next/image";

import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
	initial: { scale: 0, x: "-50%", y: "-50%" },
	enter: {
		scale: 1,
		x: "-50%",
		y: "-50%",
		transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
	},
	exit: {
		scale: 0,
		x: "-50%",
		y: "-50%",
		transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
	},
};

type ModalProps = {
	modal: {
		active: boolean;
		index: number;
	};
	projects: Project[];
};
export default function Modal({ modal, projects }: ModalProps) {
	const { active, index } = modal;
	const modalContainer = useRef(null);

	useEffect(() => {
		// Move container
		let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
			duration: 0.8,
			ease: "power3",
		});
		let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
			duration: 0.8,
			ease: "power3",
		});

		window.addEventListener("mousemove", (e) => {
			const { pageX, pageY } = e;
			xMoveContainer(pageX);
			yMoveContainer(pageY);
		});
	}, []);

	return (
		<motion.div
			ref={modalContainer}
			className="h-[350px] w-[400px] bg-secondary absolute overflow-hidden flex items-center justify-center pointer-events-none "
			variants={scaleAnimation}
			initial="initial"
			animate={active ? "enter" : "exit"}
		>
			<div
				style={{ top: index * -100 + "%" }}
				className="h-full w-full absolute transition-[top] 
                duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
			>
				{projects.map((project) => (
					<div
						key={project.slug}
						className="h-full w-full flex items-center justify-center"
					>
						<Image
							src={project.image}
							alt={project.title}
							width={300}
							height={0}
							className="h-auto"
						/>
					</div>
				))}
			</div>
			<button className="w-16 h-16 bg-secondary text-secondary rounded-full z-10">
				View
			</button>
		</motion.div>
	);
}
