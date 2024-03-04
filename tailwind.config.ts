import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class"],
	theme: {
		extend: {
			textColor: {
				primary: "var(--gray-12)",
				secondary: "var(--gray-1)",
				accent: "var(--gray-11)",
			},
			backgroundColor: {
				primary: "var(--gray-1)",
				secondary: "var(--gray-12)",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				scroll: "scroll 2.2s cubic-bezier(0.15, 0.41,0.69,0.94) infinite",
			},
			keyframes: {
				scroll: {
					"0%": { opacity: "0" },
					"10%": {
						transform: "translateY(5px)",
						opacity: "1",
					},
					"100%": {
						transform: "translateY(15px)",
						opacity: "0",
					},
				},
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [require("@tailwindcss/typography")],
};
export default config;
