"use client";
import Link from "next/link";

import NavLink from "./ui/NavLink";
import { useState } from "react";
import clsx from "clsx";

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
	return (
		<header className="relative px-4 pt-5 mx-auto mx-w-[700px]">
			<nav
				className={clsx(
					{ "navOpened ": toggle },
					"relative flex justify-between z-20"
				)}
			>
				<Link
					href="/"
					className={clsx(
						{ "text-white": toggle },
						"text-black no-underline uppercase transition-all duration-1000 ease-in-out"
					)}
				>
					Mario Pineda
				</Link>
				<button
					data-menu-opened={toggle}
					className={clsx(
						"navOpened flex h-[50px] w-[50px] relative cursor-pointer text-white z-20 "
					)}
					onClick={() => setToggle(!toggle)}
				>
					<div className={clsx({ "menu--opened": toggle }, "menu")}></div>
				</button>
				<ul
					className={clsx(
						{ navOpened: toggle },
						"navClosed -z-10 fixed flex flex-col bg-black text-white top-0 left-0 justify-center items-center w-screen min-h-screen h-full overflow-hidden transition-all duration-1000 ease-out "
					)}
				>
					{links.map(({ href, label, subLabel }) => (
						<li key={href}>
							<NavLink href={href} children={label} subLabel={subLabel} />
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
