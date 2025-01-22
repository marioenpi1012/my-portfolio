"use client";
import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { cn } from "@/lib/utils";
import Magnetic from "@/components/Magnetic";

export const buttonVariants = cva(
	"group  relative z-10 overflow-hidden inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default:
					"bg-primary text-primary-foreground shadow hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
				outline:
					"border border-input [&.active]:text-primary-foreground bg-background shadow-sm hover:bg-accent hover:text-primary-foreground",
				secondary:
					"bg-secondary text-secondary-foreground shadow-sm hover:text-primary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-9 px-4 py-2",
				sm: "h-8 px-3 text-xs",
				lg: "h-10  px-8",
				icon: "h-9 w-9",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";

		const circle = React.useRef(null);
		let timeline = React.useRef<GSAPTimeline | null>(null);
		let timeoutId: string | number | NodeJS.Timeout | null | undefined = null;

		useGSAP(() => {
			timeline.current = gsap.timeline({ paused: true });
			timeline.current
				.to(
					circle.current,
					{ top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
					"enter"
				)
				.to(
					circle.current,
					{ top: "-150%", width: "125%", duration: 0.25 },
					"exit"
				);
		}, []);

		const manageMouseEnter = () => {
			if (timeoutId) clearTimeout(timeoutId);
			if (
				timeline.current &&
				variant !== "default" &&
				variant !== "link" &&
				variant !== "ghost"
			) {
				timeline.current.tweenFromTo("enter", "exit");
			}
		};

		const manageMouseLeave = () => {
			timeoutId = setTimeout(() => {
				if (timeline.current) timeline.current.play();
			}, 300);
		};

		return (
			<Magnetic>
				<Comp
					className={cn(buttonVariants({ variant, size, className }))}
					ref={ref}
					onMouseEnter={manageMouseEnter}
					onMouseLeave={manageMouseLeave}
					{...props}
				>
					<Slottable>{props.children}</Slottable>
					<div
						ref={circle}
						className="w-full h-[150%] -z-10 absolute rounded-full top-full bg-primary group-[.active]:!-top-1/4"
					></div>
				</Comp>
			</Magnetic>
		);
	}
);
Button.displayName = "Button";
export default Button;
