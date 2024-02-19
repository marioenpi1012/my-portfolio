import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Mario Pineda",
	description: "I'm a Frontend Developer passionate about creating things.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={clsx(inter.className, "bg-white")}>
				<Navigation />
				<main className="px-4 mx-auto max-w-[700px]">{children}</main>
			</body>
		</html>
	);
}
