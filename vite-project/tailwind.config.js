/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			width: {
				128: '36rem',
			},
		},
	},
	darkMode: 'class',
	plugins: [require('daisyui'), require('flowbite')],
};
