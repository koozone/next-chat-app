const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		// colors: {
		// 	mymy: colors.blue,
		// },
		extend: {
			fontSize: {
				md: ['1rem', '1.5rem'],
			},
			width: {
				4.5: '1.125rem',
				18: '4.5rem',
			},
			backgroundSize: {
				'100%': 'cover',
				'200%': '200%',
				'300%': '300%',
			},
		},
		fontFamily: {
			body: ['sans-serif'],
		},
	},
	plugins: [],
};
