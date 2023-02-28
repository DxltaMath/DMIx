import allowEscapingTimed from "~plugins/allowEscapingTimed";
import type plugin from "~types/plugin";

export default function getPlugins () : plugin[] {
  
  return [allowEscapingTimed]
}
