import React, { ReactElement, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

type MagneticProps = {
	children: ReactElement;
};

export default function Magnetic({ children }: MagneticProps) {
	const magneticRef = useRef<HTMLButtonElement | null>(null);

	useGSAP(() => {
		const xTo = gsap.quickTo(magneticRef.current, "x", {
			duration: 1,
			ease: "elastic.out(1, .3)",
		});
		const yTo = gsap.quickTo(magneticRef.current, "y", {
			duration: 1,
			ease: "elastic.out(1, 0.3)",
		});
		if (magneticRef.current) {
			magneticRef.current.addEventListener("mousemove", (e) => {
				const { clientX, clientY } = e;

				const boundingRect = magneticRef.current?.getBoundingClientRect();

				if (boundingRect) {
					const { width, height, left, top } = boundingRect;
					const x = clientX - (left + width / 2);
					const y = clientY - (top + height / 2);
					xTo(x);
					yTo(y);
				}
			});
			magneticRef.current.addEventListener("mouseleave", () => {
				xTo(0);
				yTo(0);
			});
		}
	}, []);

	return React.cloneElement(children, { ref: magneticRef });
}
