"use client";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./ui/NavLink";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import Logo from "@/public/logo.png";

const links = [
	{ label: "Home", href: "/", subLabel: "Not place like home" },
	{
		label: "About",
		href: "/about",
		subLabel: "A story about me",
	},
	{
		label: "Projects",
		href: "/projects",
		subLabel: "My practical experience",
	},
	{
		label: "Contact",
		href: "/contact",
		subLabel: "Stay in touch",
	},
	{
		label: "Blogs",
		href: "/blogs",
		subLabel: "Coming soon !",
	},
];

export default function Navigation() {
	const [toggle, setToggle] = useState(false);
	const ulVariants = {
		closed: {
			transition: { staggerChildren: 0.05, staggerDirection: -1 },
		},
		opened: {
			transition: { staggerChildren: 0.07, delayChildren: 0.2 },
		},
	};

	const liVariants = {
		closed: {
			y: 50,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
			},
		},
		opened: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
			},
		},
	};
	return (
		<header className="fixed inset-0 h-[50px] bg-inherit px-4 mt-5 mx-auto max-w-[1160px] md:py-5 ">
			<nav
				className={clsx(
					{ "navOpened ": toggle },
					"relative flex justify-between z-20"
				)}
			>
				<Link href="/" className="w-12 h-full inline-block">
					<Image
						src={Logo}
						className="max-w-full inline-block align-middle"
						alt="logo"
					/>
				</Link>
				<button
					aria-expanded={toggle}
					aria-controls="main-navigation"
					className={clsx(
						"navOpened flex h-[50px] w-[50px] relative cursor-pointer text-primary z-20 "
					)}
					onClick={() => setToggle(!toggle)}
				>
					<div className={clsx({ "menu--opened": toggle }, "menu")}></div>
					<span className="sr-only">Menu</span>
				</button>

				<motion.ul
					id="main-navigation"
					className={clsx(
						{ navOpened: toggle },
						"navClosed  -z-10 fixed flex flex-col bg-black text-white top-0 left-0 justify-center items-center w-screen min-h-screen h-full overflow-hidden transition-all duration-1000 ease-out "
					)}
					variants={ulVariants}
					animate={toggle ? "opened" : "closed"}
				>
					{links.map(({ href, label, subLabel }) => (
						<motion.li
							key={href}
							onClick={() => setToggle(!toggle)}
							variants={liVariants}
						>
							<NavLink href={href} children={label} subLabel={subLabel} />
						</motion.li>
					))}
				</motion.ul>
			</nav>
		</header>
	);
}
