["if(\$(\".timed-start-button\").length&&\"Stop\"==\$(\".timed-start-button\").text())return alertDialog(\"You must stop the timer before pressing back. \");this.router.url.startsWith(\"/explore\")?this.router.navigate([\"/explore\"]):this.router.url.startsWith(\"/student\")?this.router.navigate([\"/student\"]):this.location.back()}", `
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
  `];

  ["/*PREPEND*/", `/*PREPEND*/
  window._.allowEscapingTimed = false;`]