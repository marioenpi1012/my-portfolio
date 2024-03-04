"use client";
import { motion } from "framer-motion";

export default function Pagination({
	number,
	title,
}: {
	number: string;
	title: string;
}) {
	const variants = {
		hidden: {
			opacity: 0,
			scale: 0.5,
		},
		animate: {
			opacity: 1,
			scale: 1,
		},
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="animate"
			viewport={{ once: false, amount: 0.8 }}
			className="my-10 mb-[7.5rem] md:my-12 xl:mx-auto xl:my-0 "
		>
			<motion.div
				variants={variants}
				className="text-primary flex items-baseline"
				transition={{ duration: 1 }}
			>
				<div className="text-lg">{number}</div>
				<h2 className="w-full text-center text-[4.5rem] font-bold uppercase md:text-[6.5rem] lg:text-[10.5rem] xl:text-[14.5rem] ">
					{title}
				</h2>
			</motion.div>
		</motion.div>
	);
}
