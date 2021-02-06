module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: "#a6b1e1",
				secondary: "#dcd6f7",
				"primary-light": "#f4eeff",
				"secondary-dark": "#424874",
			},
			fontFamily: {
				jost: ["Jost", "sans-serif"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

