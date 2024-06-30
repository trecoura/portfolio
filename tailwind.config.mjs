/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blue-1': '#1ea7af',
				'blue-2': '#189ca4',
			}
		},
	},
	plugins: [],
}
