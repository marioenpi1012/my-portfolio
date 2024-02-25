import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navigation from "@/components/Navigation";

const monstserrat = Montserrat({ subsets: ["latin"] });

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
			<body className={clsx(monstserrat.className, "antialiased bg-white")}>
				<Navigation />
				<main className="py-10 px-4 md:py-20 md:px-5 mx-auto max-w-[1160px]">
					{children}
				</main>
			</body>
		</html>
	);
}
