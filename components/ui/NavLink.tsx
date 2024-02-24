import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
type NavLinkProps = {
	href: string;
	children: ReactNode;
	subLabel: string;
};

export default function NavLink({ href, children, subLabel }: NavLinkProps) {
	const variants = {
		hidden: {
			opacity: 0,
			y: "10px",
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7 },
		},
	};
	return (
		<motion.div
			className="flex flex-col items-center content-center"
			initial="hidden"
			whileHover="animate"
		>
			<Link
				href={href}
				className="no-underline text-[4.0625rem] uppercase text-center text-white "
			>
				{children}
			</Link>
			<motion.span
				className="link__sub-label text-white/75"
				variants={variants}
			>
				{subLabel}
			</motion.span>
		</motion.div>
	);
}
