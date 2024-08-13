/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Inter: ['Inter', 'sans-serif'],
			},
			colors: {
				colors: {
					green: 'hsl(75, 94%, 57%)',
					grey700: 'hsl(0, 0%, 20%)',
					grey800: 'hsl(0, 0%, 12%)',
					grey900: 'hsl(0, 0%, 8%)',
				},
			},
		},
	},
	plugins: [],
};
