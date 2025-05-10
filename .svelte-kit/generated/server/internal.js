
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/.pnpm/@sveltejs+kit@2.20.8_@sveltejs+vite-plugin-svelte@5.0.3_svelte@5.28.2_vite@6.3.5_jiti@2_8cfa6e709ad1000f763434a7f7f9b155/node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t<title>Yaji – Fast. Flavorful. Unforgettable</title>\n\t\t<!-- Open Graph -->\n\t\t<meta property=\"og:title\" content=\"Yaji – Fast. Flavorful. Unforgettable\" />\n\t\t<meta\n\t\t\tproperty=\"og:description\"\n\t\t\tcontent=\"Yaji is the next evolution of West African flavor — a fast-casual restaurant serving bold, fire-kissed bowls, wraps, and tacos inspired by suya culture. Flavor made to move with you.\"\n\t\t/>\n\t\t<meta\n\t\t\tproperty=\"og:image\"\n\t\t\tcontent=\"https://res.cloudinary.com/dksfuytfd/image/upload/v1746786189/Yaji_Imagery_19_1_pkbkd5.jpg\"\n\t\t/>\n\t\t<meta property=\"og:url\" content=\"https://quenchbeverages.co\" />\n\t\t<meta property=\"og:type\" content=\"website\" />\n\t\t<meta property=\"og:site_name\" content=\"Yaji\" />\n\t\t<meta property=\"og:locale\" content=\"en_US\" />\n\t\t<meta property=\"og:locale:alternate\" content=\"en_GB\" />\n\t\t<meta property=\"og:locale:alternate\" content=\"en_NG\" />\n\t\t<!-- Twitter -->\n\t\t<meta name=\"twitter:card\" content=\"summary_large_image\" />\n\t\t<meta name=\"twitter:title\" content=\"Yaji – Fast. Flavorful. Unforgettable\" />\n\t\t<meta\n\t\t\tname=\"twitter:description\"\n\t\t\tcontent=\"Yaji is the next evolution of West African flavor — a fast-casual restaurant serving bold, fire-kissed bowls, wraps, and tacos inspired by suya culture. Flavor made to move with you.\"\n\t\t/>\n\t\t<meta\n\t\t\tname=\"twitter:image\"\n\t\t\tcontent=\"https://res.cloudinary.com/dksfuytfd/image/upload/v1746786189/Yaji_Imagery_19_1_pkbkd5.jpg\"\n\t\t/>\n\t\t<meta name=\"twitter:url\" content=\"https://yaji.co\" />\n\t\t<meta name=\"twitter:site\" content=\"@Yaji\" />\n\t\t<meta name=\"twitter:creator\" content=\"@yaji\" />\n\t\t<meta name=\"twitter:label1\" content=\"Written by\" />\n\t\t<meta name=\"twitter:data1\" content=\"Yaji\" />\n\t\t<meta name=\"twitter:label2\" content=\"Est. reading time\" />\n\t\t<meta name=\"twitter:data2\" content=\"5 minutes\" />\n\t\t<meta name=\"twitter:label3\" content=\"Filed under\" />\n\t\t<meta name=\"twitter:data3\" content=\"West African Cuisine, Fast Casual Dining, Street Food\" />\n\t\t<meta name=\"twitter:label4\" content=\"Tagged with\" />\n\t\t<meta name=\"twitter:data4\" content=\"Suya, Bowls, Wraps, Tacos, Spicy Food\" />\n\n\t\t<!-- Schema.org -->\n\t\t<meta itemprop=\"name\" content=\"Yaji – Fast. Flavorful. Unforgettable\" />\n\t\t<meta\n\t\t\titemprop=\"description\"\n\t\t\tcontent=\"Yaji is the next evolution of West African flavor — a fast-casual restaurant serving bold, fire-kissed bowls, wraps, and tacos inspired by suya culture. Flavor made to move with you.\"\n\t\t/>\n\t\t<meta\n\t\t\titemprop=\"image\"\n\t\t\tcontent=\"https://res.cloudinary.com/dksfuytfd/image/upload/v1746786189/Yaji_Imagery_19_1_pkbkd5.jpg\"\n\t\t/>\n\t\t<meta itemprop=\"url\" content=\"https://yaji.co\" />\n\t\t<meta itemprop=\"author\" content=\"Yaji\" />\n\t\t<meta itemprop=\"datePublished\" content=\"2023-06-01\" />\n\t\t<meta itemprop=\"dateModified\" content=\"2023-06-01\" />\n\t\t<meta\n\t\t\titemprop=\"articleSection\"\n\t\t\tcontent=\"West African Cuisine, Fast Casual Dining, Street Food\"\n\t\t/>\n\t\t<meta itemprop=\"keywords\" content=\"Suya, Bowls, Wraps, Tacos, Spicy Food\" />\n\t\t<!-- Manifest -->\n\t\t<link rel=\"manifest\" href=\"" + assets + "/site.webmanifest\" />\n\t\t<!-- Favicon -->\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.ico\" />\n\t\t<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + assets + "/apple-touch-icon.png\" />\n\t\t<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + assets + "/favicon-32x32.png\" />\n\t\t<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + assets + "/favicon-16x16.png\" />\n\t\t" + head + "\n\t</head>\n\n\t<body data-sveltekit-preload-data=\"hover\">\n\t\t<div style=\"display: contents\">" + body + "</div>\n\t</body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1sgzfld"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let init;
	

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
