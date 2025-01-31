import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: '/tiny-matching'
		},
		prerender: {
      			handleHttpError: 'warn', // Prevents build failure
      			fallback: '200.html'     // Allows fallback for non-prerendered pages
	    	}
	}
};

export default config;
