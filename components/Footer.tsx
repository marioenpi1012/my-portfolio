import React from "react";
import Link from "next/link";

import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

const links = [
	{
		href: "https://github.com/mariopineda179",
		icon: <RxGithubLogo />,
		label: "Github",
	},
	{
		href: "https://www.linkedin.com/in/mariopineda179/",
		icon: <RxLinkedinLogo />,
		label: "LinkedIn",
	},
];

export default function Footer() {
	return (
		<footer className="flex flex-col  justify-center py-10 px-4 md:py-20 md:px-5 mx-auto max-w-[1160px] min-h-screen h-full">
			<div className="grid w-full auto-cols-fr grid-rows-[auto] items-start justify-stretch gap-12 lg:grid-cols-[repeat(12,_minmax(16px,_1fr))] lg:gap-x-10">
				<p className="text-lg lg:col-span-2">Don&apos;t be shy</p>
				<div className="text-[clamp(4rem,_16vw,_15rem)] leading-[85%] uppercase font-semibold lg:col-start-4 lg:col-span-full">
					Say Hi
				</div>
				<Link
					href="mailto:mariopineda179@gmail.com"
					className="text-xl grid text-muted-foreground hover:text-primary lg:col-start-4 lg:text-4xl  "
				>
					mariopineda179@gmail.com
				</Link>
				<ul className="flex flex-row gap-4 lg:row-start-3 lg:justify-center lg:col-span-full">
					{links.map((link) => (
						<li key={link.href}>
							<Link href={link.href} className="text-primary">
								{link.icon}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}
