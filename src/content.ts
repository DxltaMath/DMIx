import type { PlasmoContentScript } from "plasmo"
import applyPatches from "~applyPatches";
import fetchDeltaCode from "~util/fetchDeltaCode";
import fetchGui from "~util/fetchGui";
import getPlugins from "~getPlugins";
import loadJS from "~util/loadJS";


export const config : PlasmoContentScript = {
  matches: ["*://*.deltamath.com/*"],
  run_at: "document_start",
  exclude_matches: ["*://*.deltamath.com/", "*://*.deltamath.com/app/images/*", "*://*.deltamath.com/app/assets/*", "*://*.deltamath.com/app/*.js", "*://*.deltamath.com/app/*.css"],
}


async function injectCode () {

  const original = await fetchDeltaCode();
  const plugins = getPlugins();
  const patchedFile = applyPatches(original, plugins);

  // load DeltaMath file
  await loadJS(patchedFile);


  // Asynchronously load the DeltaMath Mod GUI
  fetchGui().then(gui => loadJS(gui))
}


injectCode().then(() => {
  console.log("%cDMIx", "font-size:69px;color:#540052;font-weight:900;font-family:sans-serif;");
  console.log(`%cVersion ${chrome.runtime.getManifest().version}`, "font-size:20px;color:#000025;font-weight:700;font-family:sans-serif;");  
});

