import type { PlasmoContentScript } from "plasmo"


export const config: PlasmoContentScript = {
  matches: ["*://*.deltamath.com/*"],
  run_at: "document_start",
  exclude_matches: ["*://*.deltamath.com/", "*://*.deltamath.com/app/images/*", "*://*.deltamath.com/app/assets/*", "*://*.deltamath.com/app/*.js", "*://*.deltamath.com/app/*.css"],
}


async function fetchDeltaCode () {
  const html = await (await fetch("https://www.deltamath.com/app/")).text();
  const main = "https://www.deltamath.com/app/" + html.match(/main\..{0,40}\.js/);
  console.log(`Main.js URL: ${main}`);
  const script = await (await fetch(main)).text();
  return script;
}

function applyPatches (code : string) {
  
  /** DeltaMath code that we modify */
  let delta : string = code;
  /** Array of patches we must apply to the DeltaMath code */
  let patches : [string | RegExp, string][] = [];


  patches.push(["if(\$(\".timed-start-button\").length&&\"Stop\"==\$(\".timed-start-button\").text())return alertDialog(\"You must stop the timer before pressing back. \");this.router.url.startsWith(\"/explore\")?this.router.navigate([\"/explore\"]):this.router.url.startsWith(\"/student\")?this.router.navigate([\"/student\"]):this.location.back()}", `
  {
    /* Only happens while timer is running */
    /** Allow exiting timed problems without clicking "Stop" */
    const escape = window._.allowEscapingTimed;
    /** If the button says "Stop" */
    const stop = $(".timed-start-button").length && "Stop" == $(".timed-start-button").text();
    /* If escape is false and stop is true, then do this: */
    if (!escape && stop) return alertDialog("You must stop the timer before pressing back. ");
    /* Otherwise do this: */
    this.router.url.startsWith("/explore") ? this.router.navigate(["/explore"]) : this.router.url.startsWith("/student") ? this.router.navigate(["/student"]) : this.location.back()
  }
  `]);

  // Run patches through the delta math code
  patches.forEach(patch => {
    const replaceFrom = patch[0];
    const replaceTo = patch[1];
    delta.replace(replaceFrom, replaceTo);
  });

  return `
  window._.allowEscapingTimed = false;
  
  ${delta}
  
  
  `.replaceAll("new URL", "new window.URL");
}

async function fetchGui (url : string = "https://raw.githubusercontent.com/DxltaMath/dGUI/master/dist/bundle.js") {
  // https://cdn.statically.io/gh/DxltaMath/dGUI/master/dist/bundle.min.js
  console.log(`dGUI.js URL: ${url}`);
  const dGUI = await (await fetch(url)).text();
  return dGUI;
}

function loadJS (js : string) {
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

