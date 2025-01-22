"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { usePathname } from "next/navigation";
export default function Cursor() {
	const container = useRef(null);
	const scale = useRef<NodeListOf<Element> | null>(null);
	const showText = useRef<NodeListOf<Element> | null>(null);

	const pathname = usePathname();

	useGSAP(
		(context, contextSafe) => {
			if (!contextSafe) return;
			scale.current = document.querySelectorAll("[data-cursor-scale]");
			showText.current = document.querySelectorAll("[data-show-cursor-text]");

			// Define scope using cursor ref
			// Center cursor
			gsap.set([".cursor", ".second-cursor"], { xPercent: -50, yPercent: -50 });

			// Update cursor position on mousemove using quickTo() with a duration of 0.6s
			const xTo = gsap.quickTo(".cursor", "x", {
				ease: "power3",
				duration: 0.6,
			});
			const yTo = gsap.quickTo(".cursor", "y", {
				ease: "power3",
				duration: 0.6,
			});

			// Update second cursor position with a 0.2s delay
			const xToSecondCursor = gsap.quickTo(".second-cursor", "x", {
				ease: "power3",
				duration: 0.8,
			});
			const yToSecondCursor = gsap.quickTo(".second-cursor", "y", {
				ease: "power3",
				duration: 0.8,
			});

			window.addEventListener("mousemove", (e) => {
				xTo(e.clientX);
				yTo(e.clientY);
				xToSecondCursor(e.clientX);
				yToSecondCursor(e.clientY);
			});

			// Hover effects
			const onHoverEnter = contextSafe(() => {
				gsap.to(".cursor", { scale: 0.6 });
			});

			const onHoverLeave = contextSafe(() => {
				gsap.to(".cursor", { scale: 0.2 });
			});

			const onShowCursorText = contextSafe(() => {
				console.log("Working", showText.current);
				gsap.to(".cursor", { scale: 1 });
				gsap.to(".cursor__text", { opacity: 1, duration: 0.2 }); // Ensure text is shown quickly
			});

			const onHideCursorText = contextSafe(() => {
				gsap.to(".cursor", { scale: 0.2 });
				gsap.to(".cursor__text", { opacity: 0, duration: 0.2 }); // Ensure text is hidden quickly
			});
			// Show cursor text
			showText.current?.forEach((el) => {
				el.addEventListener("mouseenter", onShowCursorText);
				el.addEventListener("mouseleave", onHideCursorText);
				el.childNodes.forEach((child) => {
					child.addEventListener("click", onHideCursorText);
				});
			});

			// Hoverable elements
			scale.current.forEach((el) => {
				el.addEventListener("mouseenter", onHoverEnter);
				el.addEventListener("mouseleave", onHoverLeave);
			});
		},
		[pathname]
	);

	return (
		<div ref={container} className="hidden z-[999] pointer-events-none md:flex">
			<div className="cursor fixed transform-none z-[60] text-transparent md:transform scale-[0.2] will-change-transform flex justify-center items-center w-[72px] h-[72px] bg-primary rounded-full pointer-events-none">
				<div className="cursor__text opacity-0 text-secondary">Open</div>
			</div>
			<div className="second-cursor fixed transform-none z-50 text-transparent md:transform will-change-transform flex justify-center items-center w-5 h-5 bg-accent rounded-full pointer-events-none"></div>
		</div>
	);
}
