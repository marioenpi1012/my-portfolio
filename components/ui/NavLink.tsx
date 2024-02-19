import Link from "next/link";
import { ReactNode } from "react";

type NavLinkProps = {
	href: string;
	children: ReactNode;
	subLabel: string;
};

export default function NavLink({ href, children, subLabel }: NavLinkProps) {
	return (
		<div className="flex flex-col items-center content-center">
			<Link
				href={href}
				className="no-underline text-[4.0625rem] uppercase text-center text-white "
			>
				{children}
			</Link>
			<span className="opacity-100 translate-y-0 text-white text-opacity-25 ">
				{subLabel}
			</span>
		</div>
	);
}
