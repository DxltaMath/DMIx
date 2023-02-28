export default async function fetchDeltaCode () {

  const app_req = await fetch("https://www.deltamath.com/app/");
  const html = await app_req.text();

  const main = "https://www.deltamath.com/app/" + html.match(/main\..{0,40}\.js/);
  console.log(`Main.js URL: ${main}`);

  const script_req = await fetch(main)
  const script = await script_req.text();

  return script;
}
