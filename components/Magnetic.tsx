import React, { ReactElement, useEffect, useRef } from "react";
import gsap from "gsap";

type MagneticProps = {
	children: ReactElement;
};

export default function Magnetic({ children }: MagneticProps) {
	const magneticRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const handleMouseOver = () => {
			// Your logic for mouseover event here
			console.log("Mouse over event");
		};

		const xTo = gsap.quickTo(magneticRef.current, "x", {
			duration: 1,
			ease: "elastic.out(1, .3)",
		});
		const yTo = gsap.quickTo(magneticRef.current, "y", {
			duration: 1,
			ease: "elastic.out(1, 0.3)",
		});

		// Adding event listener
		if (magneticRef.current) {
			magneticRef.current.addEventListener("mousemove", (e) => {
				const { clientX, clientY } = e;

				const boundingRect = magneticRef.current?.getBoundingClientRect();

				if (boundingRect) {
					const { width, height, left, top } = boundingRect;
					const x = clientX - (left + width / 2);
					const y = clientY - (top + height / 2);

					// Reduce by 0.35
					xTo(x * 0.35);
					yTo(y * 0.35);
				}
			});
			magneticRef.current.addEventListener("mouseleave", (e) => {
				xTo(0);
				yTo(0);
			});
		}

		// Cleanup function to remove the event listener when component unmounts
		return () => {
			if (magneticRef.current) {
				magneticRef.current.removeEventListener("mouseover", handleMouseOver);
			}
		};
	}, []);

	return React.cloneElement(children, { ref: magneticRef });
}
