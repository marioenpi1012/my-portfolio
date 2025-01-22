"use client";
import { useState } from "react";

export default function useDisplay() {
	const [display, setDisplay] = useState<"list" | "card">("list");
	return { display, setDisplay };
}
