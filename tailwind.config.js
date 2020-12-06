module.exports = {
	purge: {
		enabled: false, // TODO: pruge when build
		content: ['./src/**/*.html', './src/**/*.scss', './src/**/*.ts'],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	// eslint-disable-next-line import/no-extraneous-dependencies, global-require
	plugins: [require('@tailwindcss/custom-forms')],
};
