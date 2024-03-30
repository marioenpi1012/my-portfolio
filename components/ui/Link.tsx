import React from "react";

import Button, { ButtonProps } from "./Button";

import NextLink from "next/link";

interface LinkProps extends ButtonProps {
	href: string;
}

export default function Link({
	href,
	children,
	variant = "link",
	...props
}: LinkProps) {
	const {} = props;
	return (
		<Button asChild variant={variant} {...props}>
			<NextLink href={href}>{children}</NextLink>
		</Button>
	);
}
