/**
 * Injects a JavaScript string into the DOM and executes it.
 * @param js JavaScript code to inject
 */
export default function loadJS (js: string): void {
  document.documentElement.setAttribute("onreset", js);
  document.documentElement.dispatchEvent(new CustomEvent("reset"));
  document.documentElement.removeAttribute("onreset");
}
