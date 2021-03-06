/** @type {import('@sveltejs/kit').Config} */

import { resolve } from 'path';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$styles: resolve('./src/styles')
				}
			}
		}
	}
};

export default config;
