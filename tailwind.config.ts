import typography from '@tailwindcss/typography';
import daisyui from 'daisyui'
import type { Config } from 'tailwindcss';
//import themes from 'daisyui/src/theming/themes';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},
	plugins: [
		typography,
		daisyui
	],
	daisyui: {
		themes: ['dim', 'retro',
			// {
			// 	retro: {
			// 		...themes['retro'],
			// 		primary: "#a4cbb4",
			// 		secondary: "#ef9995"
			// 	}
			// }
		],
	},
	darkMode: 'selector'
} satisfies Config;
