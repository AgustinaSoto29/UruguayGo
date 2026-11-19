// Runs inline in <head> before the app bundle. If an open tab tries to load
// app files that were replaced by a newer version, the browser reports a
// module-import failure and the page stays blank. Reload once (at most every
// 10 seconds) so the tab picks up the current version instead.
export const STALE_BUNDLE_PATTERN =
  "Importing a module script failed|Failed to fetch dynamically imported module|error loading dynamically imported module|Unable to preload CSS";

export const staleBundleRecoveryScript = `(function(){
  var KEY="uruguaygo:stale-reload";
  var RE=/${STALE_BUNDLE_PATTERN}/i;
  function recover(msg){
    if(!msg||!RE.test(String(msg)))return;
    try{
      var last=Number(sessionStorage.getItem(KEY)||0);
      if(Date.now()-last<10000)return;
      sessionStorage.setItem(KEY,String(Date.now()));
    }catch(e){}
    location.reload();
  }
  window.addEventListener("error",function(e){
    var t=e&&e.target;
    if(t&&t.tagName==="SCRIPT"&&t.type==="module"){recover("Importing a module script failed");return;}
    recover(e&&(e.message||(e.error&&e.error.message)));
  },true);
  window.addEventListener("unhandledrejection",function(e){
    var r=e&&e.reason;recover(r&&(r.message||r));
  });
  window.addEventListener("vite:preloadError",function(e){e.preventDefault&&e.preventDefault();recover("Failed to fetch dynamically imported module");});
})();`;
