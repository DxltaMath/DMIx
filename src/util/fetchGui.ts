export default async function fetchGui (url? : string | null | undefined) {

  const guiURL = url || "https://cdn.statically.io/gh/DxltaMath/dGUI/master/dist/bundle.min.js";
  console.log(`dGUI.js URL: ${guiURL}`);

  const req = await fetch(guiURL);
  const dGUI = await req.text();

  return dGUI;
}
