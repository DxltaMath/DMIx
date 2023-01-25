import type plugin from "~types/plugin";

export default function applyPatches (code: string, plugins? : plugin[] | undefined | null) : string {

  if (!plugins) return code;


  /** DeltaMath code that we modify */
  let delta: string = `
    /*PREPEND*/
    ${code}
    /*APPEND*/
  `;


  // For each plugin in the list
  plugins.forEach(plugin => {

    // For each patch in the plugin
    plugin.forEach(patch => {

      // Apply the patch
      delta.replace(patch[0], patch[1]);
    });

  });

  return delta.replaceAll("new URL", "new window.URL");
}
