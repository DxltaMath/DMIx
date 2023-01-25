import type plugin from "~types/plugin";

export default function applyPatches (code: string, plugins : plugin[]) : string {


  /** DeltaMath code that we modify */
  let delta: string = code;


  // For each plugin in the list
  plugins.forEach(plugin => {

    // For each patch in the plugin
    plugin.forEach(patch => {

      /* Replace from */
      const from = patch[0];

      /* Replace to */
      const to = patch[1];



      // Insert code before main.js
      if (from === "prepend") {
        delta = to[1] + delta;

      // Insert code after main.js
      } else if (from === "append") {
        delta = delta + to;
      
      // Replace match with code
      } else {
        delta.replace(from, to);
      }

    });

  });

  return delta.replaceAll("new URL", "new window.URL");
}
