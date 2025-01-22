import { Metadata } from "next";
import { allProjects } from ".contentlayer/generated";
import Display from "./components/display-view/Display";

export const metadata: Metadata = {
	title: "Mario Pineda | Projects",
	description: "Here are some projects I've worked on.",
};

export default function Page() {
	return (
		<div className="text-black mt-10 space-y-6 md:space-y-8">
			<h1 className="text-[calc(clamp(3.25em,_7vw,_8em)*0.875)] leading-none">
				<span>Creating next level </span>
				<span>web experiences</span>
			</h1>
			<Display projects={allProjects} />
		</div>
	);
}
