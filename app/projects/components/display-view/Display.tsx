"use client";
import React from "react";

import { IoGridOutline, IoReorderFourOutline } from "react-icons/io5";

import type { Project } from "@/.contentlayer/generated";

import useDisplay from "./useDisplay";
import ProjectList from "../ProjectList";
import Button from "@/components/ui/Button";
import clsx from "clsx";

export default function Display({ projects }: { projects: Project[] }) {
	const { display, setDisplay } = useDisplay();
	return (
		<div className="space-y-5 md:space-y-7">
			<div className="flex gap-2">
				<Button
					size="icon"
					variant="outline"
					className={clsx({ active: display === "list" })}
					onClick={() => setDisplay("list")}
				>
					<IoReorderFourOutline className="w-6 h-6" />
				</Button>
				<Button
					size="icon"
					variant="outline"
					className={clsx({ active: display === "card" })}
					onClick={() => setDisplay("card")}
				>
					<IoGridOutline className="w-6 h-6" />
				</Button>
			</div>

			<ProjectList projects={projects} display={display} />
		</div>
	);
}
