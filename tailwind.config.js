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
				18: '4.5rem',
			},
			backgroundSize: ({theme}) => ({
				auto: 'auto',
				cover: 'cover',
				contain: 'contain',
				...theme('spacing'),
				'50%': '50%',
				'100%': '100%',
				'200%': '200%',
			}),
		},
		fontFamily: {
			body: ['sans-serif'],
		},
	},
	plugins: [],
};
