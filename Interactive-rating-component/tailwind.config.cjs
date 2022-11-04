/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				orange: 'var(--Orange)',
				'light-grey': 'var(--Light-Grey)',
				'medium-grey': 'var(--Medium-Grey)',
				'medium-blue': 'var(--Medium-Blue)',
				'dark-blue': 'var(--Dark-Blue)',
				'very-dark-blue': 'var(--Very-Dark-Blue)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(circle at top, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
}
