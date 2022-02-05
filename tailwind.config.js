const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		// colors: {
		// 	mymy: colors.blue,
		// },
		extend: {
			width: {
				18: '4.5rem',
			},
			fontSize: {
				md: ['1rem', '1.5rem'],
			},
		},
		fontFamily: {
			body: ['sans-serif'],
		},
	},
	plugins: [],
};
