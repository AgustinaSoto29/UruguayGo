// Recovery for tabs that try to load app files replaced by a newer version
// (the browser reports a module-import failure and the page goes blank).
// The inline script runs in <head> before the app bundle, so it still works
// when the app itself never starts.

export const STALE_BUNDLE_PATTERN =
  "Importing a module script failed|Failed to fetch dynamically imported module|error loading dynamically imported module|Unable to preload CSS|Loading chunk [\\w-]+ failed";

const STALE_BUNDLE_RE = new RegExp(STALE_BUNDLE_PATTERN, "i");

export function isStaleBundleError(error: unknown): boolean {
  if (!error) return false;
  const message =
    typeof error === "string"
      ? error
      : error instanceof Error
        ? error.message
        : String((error as { message?: unknown }).message ?? error);
  return STALE_BUNDLE_RE.test(message);
}

/** Ask the inline recovery script to reload (bounded retries, then a visible fallback). */
export function recoverFromStaleBundle(reason: string) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { __uyRecover?: (msg: string) => void };
  if (w.__uyRecover) w.__uyRecover(reason);
  else window.location.reload();
}

/** Called once the app has rendered successfully: forget previous retry attempts. */
export function markAppHealthy() {
  try {
    window.sessionStorage.removeItem("uruguaygo:stale-reload");
  } catch {
    // storage unavailable: nothing to clear
  }
}

export const staleBundleRecoveryScript = `(function(){
  var KEY="uruguaygo:stale-reload", MAX=3, WINDOW_MS=60000;
  var RE=new RegExp(${JSON.stringify(STALE_BUNDLE_PATTERN)},"i");
  var pending=false;
  function read(){try{return JSON.parse(sessionStorage.getItem(KEY)||"null")}catch(e){return null}}
  function write(s){try{sessionStorage.setItem(KEY,JSON.stringify(s))}catch(e){}}
  function showFallback(){
    function render(){
      if(document.getElementById("uy-stale-fallback"))return;
      var d=document.createElement("div");
      d.id="uy-stale-fallback";
      d.setAttribute("role","alert");
      d.style.cssText="position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;padding:24px;background:var(--background,#f5f9fc);font-family:system-ui,sans-serif;color:var(--foreground,#12324a);text-align:center";
      d.innerHTML='<div style="max-width:420px"><p style="font-size:22px;font-weight:700;margin:0 0 8px">UruguayGo se está actualizando</p><p style="margin:0 0 20px;color:var(--muted-foreground,#4b6475)">Hay una versión nueva de la página. Tocá el botón para cargarla.</p><button type="button" style="background:var(--primary,#0e6ba8);color:var(--primary-foreground,#fff);border:0;border-radius:8px;padding:10px 20px;font-size:15px;font-weight:600;cursor:pointer">Recargar</button></div>';
      d.querySelector("button").onclick=function(){write({count:0,first:Date.now()});location.reload()};
      document.body.appendChild(d);
    }
    if(document.body)render();else document.addEventListener("DOMContentLoaded",render);
  }
  function recover(msg){
    if(pending||!msg||!RE.test(String(msg)))return;
    var now=Date.now(), s=read();
    if(!s||now-s.first>WINDOW_MS)s={count:0,first:now};
    if(s.count>=MAX){showFallback();return;}
    s.count++;write(s);pending=true;
    setTimeout(function(){location.reload()},s.count===1?0:1500*s.count);
  }
  window.__uyRecover=recover;
  window.addEventListener("error",function(e){
    var t=e&&e.target;
    if(t&&t.tagName==="SCRIPT"&&(t.type==="module"||/\\.js(\\?|$)/.test(t.src||""))){recover("Importing a module script failed");return;}
    recover(e&&(e.message||(e.error&&e.error.message)));
  },true);
  window.addEventListener("unhandledrejection",function(e){var r=e&&e.reason;recover(r&&(r.message||r));});
  window.addEventListener("vite:preloadError",function(e){if(e.preventDefault)e.preventDefault();recover("Failed to fetch dynamically imported module");});
})();`;
