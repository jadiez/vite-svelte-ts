/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */

import adapter from '@sveltejs/adapter-cloudflare';

export default {
  kit: {
    adapter: adapter()
  }
};
