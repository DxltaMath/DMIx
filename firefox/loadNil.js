/** 
 * loadNil.js
 * 
 * Currently maintained by gemsvidø
 * Code based on PHEx, modified for DeltaMath.
 */

(async () => {
	
	/** Get an item from the browser local storage. */
	function get(key) {
		return new Promise(resolve => {
			browser.storage.local.get([key], result => {
				resolve(result[key]);
			});
		});
	}

	/** Custom P-NP URL from popup.js */
	const url = await get("url");

	/** Use Custom P-NP URL. */
	const checked = await get("checked");

	/** P-NP URL to use. Code: (If url exists and checked is true, then use url. Else, get a domain from infinite zero.) */
	const redirectorDomain = (url && checked) ? url : (await (await fetch("https://infinitezero.net/domain")).text()).valueOf();
	



	/*-----------------------------------------------*
    *                                               *
    *              INJECT GAME.MIN.JS               *
    *                                               *
    ------------------------------------------------*/


	async function insertCode () {
		try {
			/** P-NP Loader. If you're using a custom URL, then you have the ?force attribute. */
			const request = await (await fetch(`https://infinitezero.net/eval${(url && checked) ? "?force=" + url : ""}`)).text();
			document.documentElement.setAttribute("onreset", `${request}\nSW.Load.decrementLoadSemaphore();`);
			document.documentElement.dispatchEvent(new CustomEvent("reset"));
			document.documentElement.removeAttribute("onreset");
		} catch (e) {
			alert("Failed to load the hacks. Error:\n" + e.message);
		}
	}

	if (!window.scriptIsInjected) {
		

		insertCode().catch((err) => {
			swal.fire({
				title: "Could not insert gamemin",
				html: err,
				icon: "error"
			});
		});





	/*-----------------------------------------------*
    *                                               *
    *              LATEST DMIx VERSION              *
    *                                               *
    ------------------------------------------------*/


    /** User's version of DMIx */
    const pluginVersion = chrome.runtime.getManifest().version;

    /** Latest version of DMIx. */
    const supportedVersion = (await (await fetch(`${NilURL}/version`)).text());


    /** Checks for plugin version. If outdated, triggers dialog box */
    if (pluginVersion !== supportedVersion) {
        const res = confirm(`DMIx is outdated. If you experience any errors, please update.\n\Your Version: ${pluginVersion}\nLatest Version: ${supportedVersion}`);
        if (res) { location = "https://github.com/DxltaMath/DMIx/blob/master/meta/UPDATING.md"; }
    }
		

		/** Script is now injected. */
		window.scriptIsInjected = true;
	}
})();
