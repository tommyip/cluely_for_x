(function injectPageHook() {
  const injectedScript = document.createElement("script");
  injectedScript.src = chrome.runtime.getURL("injected.js");
  injectedScript.type = "text/javascript";
  document.documentElement.appendChild(injectedScript);
  injectedScript.remove();
})();
