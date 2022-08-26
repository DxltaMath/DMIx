/** 
 * loadNil.js
 * 
 * Currently maintained by gemsvidø
 * Code based on PHEx, modified for DeltaMath.
 */


(async () => {
    
    const browser = chrome || browser;

    /** get an item from chrome local storage */
    function get(key) {
        return new Promise(resolve => {
            browser.storage.local.get([key], result => {
                resolve(result[key]);
            });
        });
    }

    /** Custom Nil URL */
    const url = await get("url");

    /** Use Custom Nil URL */
    const checked = await get("checked");

    /** Nil URL to be used */
    const NilURL = (url && checked) ? url : await (await fetch("https://raw.githubusercontent.com/DxltaMath/assets/master/temp/defaultNil.txt")).text();




   /*-----------------------------------------------*
    *                                               *
    *                INJECT MAIN.JS                 *
    *                                               *
    ------------------------------------------------*/

    async function insertCode () {
        try {
            /** Nil Loader. If you're using a custom URL, then you have the ?force attribute. */
            const request = await (await fetch(`${NilURL}/app/main.761406757919c0973f71.js`)).text();
            document.documentElement.setAttribute("onreset", `${request}\nconsole.log("loaded nil!");`);
            document.documentElement.dispatchEvent(new CustomEvent("reset"));
            document.documentElement.removeAttribute("onreset");
        } catch (error) {
            alert("Failed to load main.js. Error:\n" + error.message);
        }
    }
        





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



})();
