
import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

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
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\r\n<html lang=\"en\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n\t\t<title>Yaji – Fast. Flavorful. Unforgettable</title>\r\n\t\t<!-- Open Graph -->\r\n\t\t<meta property=\"og:title\" content=\"Yaji – Fast. Flavorful. Unforgettable\" />\r\n\t\t<meta\r\n\t\t\tproperty=\"og:description\"\r\n\t\t\tcontent=\"Yaji is the next evolution of West African flavor — a fast-casual restaurant serving bold, fire-kissed bowls, wraps, and tacos inspired by suya culture. Flavor made to move with you.\"\r\n\t\t/>\r\n\t\t<meta\r\n\t\t\tproperty=\"og:image\"\r\n\t\t\tcontent=\"https://res.cloudinary.com/dksfuytfd/image/upload/v1746786189/Yaji_Imagery_19_1_pkbkd5.jpg\"\r\n\t\t/>\r\n\t\t<meta property=\"og:url\" content=\"https://yajieats.com\" />\r\n\t\t<meta property=\"og:type\" content=\"website\" />\r\n\t\t<meta property=\"og:site_name\" content=\"Yaji\" />\r\n\t\t<meta property=\"og:locale\" content=\"en_US\" />\r\n\t\t<meta property=\"og:locale:alternate\" content=\"en_GB\" />\r\n\t\t<meta property=\"og:locale:alternate\" content=\"en_NG\" />\r\n\t\t<!-- Twitter -->\r\n\t\t<meta name=\"twitter:card\" content=\"summary_large_image\" />\r\n\t\t<meta name=\"twitter:title\" content=\"Yaji – Fast. Flavorful. Unforgettable\" />\r\n\t\t<meta\r\n\t\t\tname=\"twitter:description\"\r\n\t\t\tcontent=\"Yaji is the next evolution of West African flavor — a fast-casual restaurant serving bold, fire-kissed bowls, wraps, and tacos inspired by suya culture. Flavor made to move with you.\"\r\n\t\t/>\r\n\t\t<meta\r\n\t\t\tname=\"twitter:image\"\r\n\t\t\tcontent=\"https://res.cloudinary.com/dksfuytfd/image/upload/v1746786189/Yaji_Imagery_19_1_pkbkd5.jpg\"\r\n\t\t/>\r\n\t\t<meta name=\"twitter:url\" content=\"https://yajieats.com\" />\r\n\t\t<meta name=\"twitter:site\" content=\"@Yaji\" />\r\n\t\t<meta name=\"twitter:creator\" content=\"@yaji\" />\r\n\t\t<meta name=\"twitter:label1\" content=\"Written by\" />\r\n\t\t<meta name=\"twitter:data1\" content=\"Yaji\" />\r\n\t\t<meta name=\"twitter:label2\" content=\"Est. reading time\" />\r\n\t\t<meta name=\"twitter:data2\" content=\"5 minutes\" />\r\n\t\t<meta name=\"twitter:label3\" content=\"Filed under\" />\r\n\t\t<meta name=\"twitter:data3\" content=\"West African Cuisine, Fast Casual Dining, Street Food\" />\r\n\t\t<meta name=\"twitter:label4\" content=\"Tagged with\" />\r\n\t\t<meta name=\"twitter:data4\" content=\"Suya, Bowls, Wraps, Tacos, Spicy Food\" />\r\n\r\n\t\t<!-- Schema.org -->\r\n\t\t<meta itemprop=\"name\" content=\"Yaji – Fast. Flavorful. Unforgettable\" />\r\n\t\t<meta\r\n\t\t\titemprop=\"description\"\r\n\t\t\tcontent=\"Yaji is the next evolution of West African flavor — a fast-casual restaurant serving bold, fire-kissed bowls, wraps, and tacos inspired by suya culture. Flavor made to move with you.\"\r\n\t\t/>\r\n\t\t<meta\r\n\t\t\titemprop=\"image\"\r\n\t\t\tcontent=\"https://res.cloudinary.com/dksfuytfd/image/upload/v1746786189/Yaji_Imagery_19_1_pkbkd5.jpg\"\r\n\t\t/>\r\n\t\t<meta itemprop=\"url\" content=\"https://yajieats.com\" />\r\n\t\t<meta itemprop=\"author\" content=\"Yaji\" />\r\n\t\t<meta itemprop=\"datePublished\" content=\"2023-06-01\" />\r\n\t\t<meta itemprop=\"dateModified\" content=\"2023-06-01\" />\r\n\t\t<meta\r\n\t\t\titemprop=\"articleSection\"\r\n\t\t\tcontent=\"West African Cuisine, Fast Casual Dining, Street Food\"\r\n\t\t/>\r\n\t\t<meta itemprop=\"keywords\" content=\"Suya, Bowls, Wraps, Tacos, Spicy Food\" />\r\n\t\t<!-- Manifest -->\r\n\t\t<link rel=\"manifest\" href=\"" + assets + "/site.webmanifest\" />\r\n\t\t<!-- Favicon -->\r\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.ico\" />\r\n\t\t<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"" + assets + "/apple-touch-icon.png\" />\r\n\t\t<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"" + assets + "/favicon-32x32.png\" />\r\n\t\t<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"" + assets + "/favicon-16x16.png\" />\r\n\t\t" + head + "\r\n\t</head>\r\n\r\n\t<body data-sveltekit-preload-data=\"hover\">\r\n\t\t<div style=\"display: contents\">" + body + "</div>\r\n\t</body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1n2ozx0"
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
