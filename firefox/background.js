/**
 * background.js
 * 
 * based on PHEx
 * modified by gemsvidø for firefox support
 */



/** CSP and X-Frame headers */
const HEADERS_TO_STRIP_LOWERCASE = [
	"content-security-policy",
	"x-frame-options",
];

// Remove CSP and X-Frame headers on all DeltaMath domains
browser.webRequest.onHeadersReceived.addListener(
	details => ({
		responseHeaders: details.responseHeaders.filter(header => !HEADERS_TO_STRIP_LOWERCASE.includes(header.name.toLowerCase()))
	}),
	{ urls: ["*://*deltamath.com/*"] },
	["blocking", "responseHeaders"]
);






/** Set a value in the local storage */
function set(key, value) {
	browser.storage.local.set({ [key]: value });
};

/** Get a value from the local storage */
function get(key) {
	return new Promise(resolve => {
		browser.storage.local.get([key], result => {
			resolve(result[key]);
		})
	})
};



// Redirect Requests
browser.webRequest.onBeforeRequest.addListener(async details => {

	/** Custom Nil URL */
    const url = await get("url");

    /** Use Custom Nil URL */
    const checked = await get("checked");

    /** Nil URL to be used */
    const NilURL = (url && checked) ? url : await (await fetch("https://raw.githubusercontent.com/DxltaMath/assets/master/temp/defaultNil.txt")).text();


	// If hacks are offline, show an alert 
	if (details.url.startsWith("https://www.deltamath.com/") && details.url.includes("main.761406757919c0973f71.js")) {
		fetch("https://raw.githubusercontent.com/DxltaMath/DMIx/master/status.json").then(response => response.json()).then(async data => {
			if (data.offline == true) {

				if (swal) {
					swal.fire({
						title: "Oh no!",
						html: `Our hacks are currently having some issues, and we're working on it.`,
						icon: "error"
					});
				} else {
					const res = confirm(`Uh Oh! Hacks look to be down. Hit OK to go to our github to get updates on when they'll go back up!`);
					if (res) location = "https://github.com/DxltaMath";
				}
			}
		});

		// Block the unmodified main.js
		browser.webRequest.onBeforeRequest.addListener(
			_ => ({ cancel: true }),
			{ urls: ["*://*deltamath.com/app/main*js"] },
			["blocking"],
		);

		// see loadNil.js, we inject the new Nil loader
		return { cancel: true };
	}


}, {

		// Block the unmodified main.js
	urls: ["*://*deltamath.com/app/main*js"],
	types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"],
}, ["blocking"]);