import type { PlasmoContentScript } from "plasmo"
import applyPatches from "~applyPatches";
import fetchDeltaCode from "~fetch/fetchDeltaCode";
import fetchGui from "~fetch/fetchGui";


export const config : PlasmoContentScript = {
  matches: ["*://*.deltamath.com/*"],
  run_at: "document_start",
  exclude_matches: ["*://*.deltamath.com/", "*://*.deltamath.com/app/images/*", "*://*.deltamath.com/app/assets/*", "*://*.deltamath.com/app/*.js", "*://*.deltamath.com/app/*.css"],
}


function loadJS (js : string) : void {
  document.documentElement.setAttribute("onreset", js);
  document.documentElement.dispatchEvent(new CustomEvent("reset"));
  document.documentElement.removeAttribute("onreset");
}

async function injectCode () {

  // load DeltaMath file
  await loadJS(applyPatches(await fetchDeltaCode()));
    
  

  // load DeltaMath GUI
  await loadJS(await fetchGui());

}


injectCode().then(() => {
  console.log("%cDMIx", "font-size:69px;color:#540052;font-weight:900;font-family:sans-serif;");
  console.log(`%cVersion ${chrome.runtime.getManifest().version}`, "font-size:20px;color:#000025;font-weight:700;font-family:sans-serif;");  
});

