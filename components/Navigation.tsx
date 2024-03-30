"use client";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./ui/NavLink";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

import Logo from "@/public/logo.png";
import Magnetic from "@/components/Magnetic";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

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
		<header className="fixed top-0 inset-x-0 h-auto bg-inherit pt-5 px-4 mx-auto max-w-[1160px] z-50 md:pb-5">
			<nav
				className={clsx(
					{ "navOpened ": toggle },
					"relative flex justify-between z-20 h-[50px] "
				)}
			>
				<Link href="/" className="w-12 h-full inline-block">
					<Image
						src={Logo}
						className="max-w-full inline-block align-middle"
						alt="logo"
					/>
				</Link>
				<Button
					variant="ghost"
					data-cursor-scale // DO NOT REMOVE - needed for cursor animation
					className="navOpened relative flex text-primary h-[50px] w-[50px] px-0 py-0 rounded-none z-20 hover:bg-inherit "
					onClick={() => setToggle(!toggle)}
					aria-label="Toggle Navigation"
					aria-expanded={toggle}
					aria-controls="main-navigation"
				>
					<div className={cn("menu", { "menu--opened": toggle })}></div>
					<span className="sr-only">Menu</span>
				</Button>
				<motion.ul
					id="main-navigation"
					aria-label="Main Navigation"
					aria-expanded={toggle}
					aria-hidden={!toggle}
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
