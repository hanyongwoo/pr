// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fm8Gy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5c1b77e3b71e74eb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"h7u1C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _localization = require("./localization");
var _roulette = require("./roulette");
var _options = require("./options");
var _optionsDefault = parcelHelpers.interopDefault(_options);
const roulette = new (0, _roulette.Roulette)();
window.roullete = roulette;
window.options = (0, _optionsDefault.default);

},{"./localization":"3oSeh","./roulette":"bsK0B","./options":"d5NoS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3oSeh":[function(require,module,exports) {
var _languages = require("./data/languages");
const defaultLocale = "en";
let locale;
function getBrowserLocale() {
    return navigator.language.split("-")[0];
}
function translateElement(element) {
    if (!(element instanceof HTMLElement) || !locale) return;
    const prop = element.getAttribute("data-trans");
    if (prop) {
        const key = (element.getAttribute(prop) || "").trim();
        if (key && key in (0, _languages.Translations)[locale]) element.setAttribute(prop, (0, _languages.Translations)[locale][key]);
    } else {
        const key = element.innerText.trim();
        if (key && key in (0, _languages.Translations)[locale]) element.innerText = (0, _languages.Translations)[locale][key];
    }
}
function translatePage() {
    document.querySelectorAll("[data-trans]").forEach(translateElement);
}
function setLocale(newLocale) {
    if (newLocale === locale) return;
    document.documentElement.lang = newLocale;
    const newLocaleLower = newLocale.toLocaleLowerCase();
    locale = newLocaleLower in (0, _languages.Translations) ? newLocaleLower : defaultLocale;
    translatePage();
}
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("localization loaded");
    const browserLocale = getBrowserLocale();
    console.log("detected locale: ", browserLocale);
    setLocale(browserLocale);
});
window.translateElement = translateElement;

},{"./data/languages":"b6A6z"}],"b6A6z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Translations", ()=>Translations);
const Translations = {
    "en": {
        "Enter names below": "Enter names below",
        "Shuffle": "Shuffle",
        "Start": "Start",
        "Map": "Map",
        "Recording": "Recording",
        "The winner is": "The winner is",
        "Using skills": "Using skills",
        "Buy me a coffee": "Buy me a coffee",
        "First": "First",
        "Last": "Last",
        "Wheel of fortune": "Wheel of fortune",
        "BubblePop": "BubblePop",
        "Pot of greed": "Pot of greed",
        "Shake!": "Shake!",
        "Input names separated by commas or line feed here": "Input names separated by commas or line feed here"
    },
    "ko": {
        "Enter names below": "\uC774\uB984\uB4E4\uC744 \uC785\uB825\uD558\uC138\uC694",
        "Shuffle": "\uC11E\uAE30",
        "Start": "\uC2DC\uC791",
        "Map": "\uB9F5",
        "Recording": "\uB179\uD654",
        "The winner is": "\uB2F9\uCCA8 \uC21C\uC704",
        "Using skills": "\uC2A4\uD0AC \uD65C\uC131\uD654",
        "Buy me a coffee": "\uAC1C\uBC1C\uC790\uC5D0\uAC8C \uCEE4\uD53C \uC0AC\uC8FC\uAE30",
        "First": "\uCCAB\uBC88\uC9F8",
        "Last": "\uB9C8\uC9C0\uB9C9",
        "Wheel of fortune": "\uC6B4\uBA85\uC758 \uC218\uB808\uBC14\uD034",
        "BubblePop": "\uBC84\uBE14\uD31D",
        "Pot of greed": "\uC695\uB9DD\uC758 \uD56D\uC544\uB9AC",
        "Shake!": "\uD754\uB4E4\uAE30!",
        "Input names separated by commas or line feed here": "\uC774\uB984\uB4E4\uC744 \uC27C\uD45C\uB098 \uC5D4\uD130\uB85C \uAD6C\uBD84\uD574\uC11C \uB123\uC5B4\uC8FC\uC138\uC694"
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bsK0B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Roulette", ()=>Roulette);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _marble = require("./marble");
var _constants = require("./data/constants");
var _particleManager = require("./particleManager");
var _maps = require("./data/maps");
var _utils = require("./utils/utils");
var _camera = require("./camera");
var _rouletteRenderer = require("./rouletteRenderer");
var _skillEffect = require("./skillEffect");
var _options = require("./options");
var _optionsDefault = parcelHelpers.interopDefault(_options);
var _boundDecorator = require("./utils/bound.decorator");
var _rankRenderer = require("./rankRenderer");
var _minimap = require("./minimap");
var _videoRecorder = require("./utils/videoRecorder");
var _physicsBox2D = require("./physics-box2d");
class Roulette extends EventTarget {
    get isReady() {
        return this._isReady;
    }
    constructor(){
        super();
        this._marbles = [];
        this._lastTime = 0;
        this._elapsed = 0;
        this._noMoveDuration = 0;
        this._shakeAvailable = false;
        this._updateInterval = 10;
        this._timeScale = 1;
        this._speed = 1;
        this._winners = [];
        this._particleManager = new (0, _particleManager.ParticleManager)();
        this._stage = null;
        this._camera = new (0, _camera.Camera)();
        this._renderer = new (0, _rouletteRenderer.RouletteRenderer)();
        this._effects = [];
        this._winnerRank = 0;
        this._totalMarbleCount = 0;
        this._goalDist = Infinity;
        this._isRunning = false;
        this._winner = null;
        this._uiObjects = [];
        this._autoRecording = false;
        this._isReady = false;
        this._renderer.init();
        this._init().then(()=>{
            this._isReady = true;
            this._update();
        });
    }
    getZoom() {
        return (0, _constants.initialZoom) * this._camera.zoom;
    }
    addUiObject(obj) {
        this._uiObjects.push(obj);
        if (obj.onWheel) this._renderer.canvas.addEventListener("wheel", obj.onWheel);
    }
    _update() {
        if (!this._lastTime) this._lastTime = Date.now();
        const currentTime = Date.now();
        this._elapsed += (currentTime - this._lastTime) * this._speed;
        if (this._elapsed > 100) this._elapsed %= 100;
        this._lastTime = currentTime;
        const interval = this._updateInterval / 1000 * this._timeScale;
        while(this._elapsed >= this._updateInterval){
            this.physics.step(interval);
            this._updateMarbles(this._updateInterval);
            this._particleManager.update(this._updateInterval);
            this._updateEffects(this._updateInterval);
            this._elapsed -= this._updateInterval;
            this._uiObjects.forEach((obj)=>obj.update(this._updateInterval));
        }
        if (this._marbles.length > 1) this._marbles.sort((a, b)=>b.y - a.y);
        if (this._stage) {
            this._camera.update({
                marbles: this._marbles,
                stage: this._stage,
                needToZoom: this._goalDist < (0, _constants.zoomThreshold),
                targetIndex: this._winners.length > 0 ? this._winnerRank - this._winners.length : 0
            });
            if (this._isRunning && this._marbles.length > 0 && this._noMoveDuration > 3000) this._changeShakeAvailable(true);
            else this._changeShakeAvailable(false);
        }
        this._render();
        window.requestAnimationFrame(this._update);
    }
    _updateMarbles(deltaTime) {
        if (!this._stage) return;
        for(let i = 0; i < this._marbles.length; i++){
            const marble = this._marbles[i];
            marble.update(deltaTime);
            if (marble.skill === (0, _constants.Skills).Impact) {
                this._effects.push(new (0, _skillEffect.SkillEffect)(marble.x, marble.y));
                this.physics.impact(marble.id);
            }
            if (marble.y > this._stage.goalY) {
                this._winners.push(marble);
                if (this._isRunning && this._winners.length === this._winnerRank + 1) {
                    this.dispatchEvent(new CustomEvent("goal", {
                        detail: {
                            winner: marble.name
                        }
                    }));
                    this._winner = marble;
                    this._isRunning = false;
                    this._particleManager.shot(this._renderer.width, this._renderer.height);
                    setTimeout(()=>{
                        this._recorder.stop();
                    }, 1000);
                } else if (this._isRunning && this._winnerRank === this._winners.length && this._winnerRank === this._totalMarbleCount - 1) {
                    this.dispatchEvent(new CustomEvent("goal", {
                        detail: {
                            winner: this._marbles[i + 1].name
                        }
                    }));
                    this._winner = this._marbles[i + 1];
                    this._isRunning = false;
                    this._particleManager.shot(this._renderer.width, this._renderer.height);
                    setTimeout(()=>{
                        this._recorder.stop();
                    }, 1000);
                }
                setTimeout(()=>{
                    this.physics.removeMarble(marble.id);
                }, 500);
            }
        // else if (marble.isSelected && marble.y > this._stage.goalY * 0.9) {
        //     // 선택된 공이 목표 지점 근처에 도달했을 때 강제로 위치 조정
        //     const newPosY = this._stage.goalY - 1;
        //     this.physics.setMarblePosition(marble.id, marble.x, newPosY);
        // }
        }
        const targetIndex = this._winnerRank - this._winners.length;
        const topY = this._marbles[targetIndex] ? this._marbles[targetIndex].y : 0;
        this._goalDist = Math.abs(this._stage.zoomY - topY);
        this._timeScale = this._calcTimeScale();
        this._marbles = this._marbles.filter((marble)=>marble.y <= this._stage.goalY);
    }
    _calcTimeScale() {
        if (!this._stage) return 1;
        const targetIndex = this._winnerRank - this._winners.length;
        if (this._winners.length < this._winnerRank + 1 && this._goalDist < (0, _constants.zoomThreshold)) {
            if (this._marbles[targetIndex].y > this._stage.zoomY - (0, _constants.zoomThreshold) * 1.2 && (this._marbles[targetIndex - 1] || this._marbles[targetIndex + 1])) return Math.max(0.2, this._goalDist / (0, _constants.zoomThreshold));
        }
        return 1;
    }
    _updateEffects(deltaTime) {
        this._effects.forEach((effect)=>effect.update(deltaTime));
        this._effects = this._effects.filter((effect)=>!effect.isDestroy);
    }
    _render() {
        if (!this._stage) return;
        const renderParams = {
            camera: this._camera,
            stage: this._stage,
            wheels: this.physics.getWheels(),
            boxes: this.physics.getBoxes(),
            jumpers: this.physics.getJumpers(),
            marbles: this._marbles,
            winners: this._winners,
            particleManager: this._particleManager,
            effects: this._effects,
            winnerRank: this._winnerRank,
            winner: this._winner,
            size: {
                x: this._renderer.width,
                y: this._renderer.height
            }
        };
        this._renderer.render(renderParams, this._uiObjects);
    }
    async _init() {
        this._recorder = new (0, _videoRecorder.VideoRecorder)(this._renderer.canvas);
        this.physics = new (0, _physicsBox2D.Box2dPhysics)();
        await this.physics.init();
        this.addUiObject(new (0, _rankRenderer.RankRenderer)());
        this.attachEvent();
        const minimap = new (0, _minimap.Minimap)();
        minimap.onViewportChange((pos)=>{
            if (pos) {
                this._camera.setPosition(pos, false);
                this._camera.lock(true);
            } else this._camera.lock(false);
        });
        this.addUiObject(minimap);
        this._stage = (0, _maps.stages)[0];
        this._loadMap();
    }
    attachEvent() {
        this._renderer.canvas.addEventListener("mousemove", (e)=>{
            const sizeFactor = this._renderer.sizeFactor;
            const pos = {
                x: e.offsetX * sizeFactor,
                y: e.offsetY * sizeFactor
            };
            this._uiObjects.forEach((obj)=>{
                if (!obj.onMouseMove) return;
                const bounds = obj.getBoundingBox();
                if (!bounds) obj.onMouseMove({
                    ...pos
                });
                else if (bounds && pos.x >= bounds.x && pos.y >= bounds.y && pos.x <= bounds.x + bounds.w && pos.y <= bounds.y + bounds.h) obj.onMouseMove({
                    x: pos.x - bounds.x,
                    y: pos.y - bounds.y
                });
                else obj.onMouseMove(undefined);
            });
        });
    }
    _loadMap() {
        if (!this._stage) throw new Error("No map has been selected");
        this.physics.createStage(this._stage);
    }
    clearMarbles() {
        this.physics.clearMarbles();
        this._winner = null;
        this._winners = [];
        this._marbles = [];
    }
    start() {
        this._isRunning = true;
        this._winnerRank = (0, _optionsDefault.default).winningRank;
        if (this._winnerRank >= this._marbles.length) this._winnerRank = this._marbles.length - 1;
        if (this._autoRecording) this._recorder.start().then(()=>{
            this.physics.start();
            this._marbles.forEach((marble)=>marble.isActive = true);
        });
        else {
            this.physics.start();
            this._marbles.forEach((marble)=>marble.isActive = true);
        }
    }
    setSpeed(value) {
        if (value <= 0) throw new Error("Speed multiplier must larger than 0");
        this._speed = value;
    }
    getSpeed() {
        return this._speed;
    }
    setWinningRank(rank) {
        this._winnerRank = rank;
    }
    setAutoRecording(value) {
        this._autoRecording = value;
    }
    setMarbles(names, selectedNames = "") {
        this.reset();
        const allMembers = names.slice().map((nameString)=>(0, _utils.parseName)(nameString)).filter((member)=>!!member);
        // Separate members into selected and non-selected groups
        const selectedMembers = allMembers.filter((member)=>selectedNames.includes(member.name));
        const nonSelectedMembers = allMembers.filter((member)=>!selectedNames.includes(member.name));
        // 설정할 시작점
        //const startX = 0;  // 예시로 (0, 0) 위치를 사용
        //const startY = 0;
        // Calculate weight for non-selected users
        let maxWeight = -Infinity;
        let minWeight = Infinity;
        nonSelectedMembers.forEach((member)=>{
            if (member.weight > maxWeight) maxWeight = member.weight;
            if (member.weight < minWeight) minWeight = member.weight;
        });
        const gap = maxWeight - minWeight;
        nonSelectedMembers.forEach((member)=>{
            if (member) member.weight = 0.1 + (gap ? (member.weight - minWeight) / gap : 0);
        });
        // Add remaining users with their calculated weights
        const orders = Array(this._marbles.length + nonSelectedMembers.length + selectedMembers.length).fill(0).map((_, i)=>i).sort(()=>Math.random() - 0.5);
        nonSelectedMembers.forEach((member)=>{
            if (member) for(let j = 0; j < member.count; j++){
                const order = orders.pop() || 0;
                const marble = new (0, _marble.Marble)(this.physics, order, this._marbles.length + member.count, member.name, member.weight, false); // isSelected to false
                this.physics.createMarble(marble.id, marble.position.x, marble.position.y); // 동일한 시작점으로 생성
                this._marbles.push(marble); // isSelected to false
            }
        });
        // Add selected users as winning marbles first (with high weight)
        selectedMembers.forEach((member)=>{
            for(let j = 0; j < member.count; j++){
                //const x = centerX;
                //const y = centerY - j * offsetY;
                //this._marbles.unshift(new Marble(this.physics, 0, this._marbles.length + member.count, member.name, 1.2, true)); // Set weight to 2 (highest priority) and isSelected to true
                const order = orders.pop() || 0;
                const marble = new (0, _marble.Marble)(this.physics, order, this._marbles.length + member.count, member.name, 0.1, true);
                this.physics.createMarble(marble.id, marble.position.x, marble.position.y); // 동일한 시작점으로 생성
                this._marbles.unshift(marble);
            //this.physics.createMarble(marble.id, x, y);
            }
        });
        this._totalMarbleCount = this._marbles.length;
    }
    _clearMap() {
        this.physics.clear();
        this._marbles = [];
    }
    reset() {
        this.clearMarbles();
        this._clearMap();
        this._loadMap();
        this._goalDist = Infinity;
    }
    getCount() {
        return this._marbles.length;
    }
    _changeShakeAvailable(v) {
        if (this._shakeAvailable !== v) {
            this._shakeAvailable = v;
            this.dispatchEvent(new CustomEvent("shakeAvailableChanged", {
                detail: v
            }));
        }
    }
    shake() {
        if (!this._shakeAvailable) return;
    }
    getMaps() {
        return (0, _maps.stages).map((stage, index)=>{
            return {
                index,
                title: stage.title
            };
        });
    }
    setMap(index) {
        if (index < 0 || index > (0, _maps.stages).length - 1) throw new Error("Incorrect map number");
        const names = this._marbles.map((marble)=>marble.name);
        this._stage = (0, _maps.stages)[index];
        this.setMarbles(names);
    }
}
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], Roulette.prototype, "_update", null);

},{"@swc/helpers/_/_ts_decorate":"lX6TJ","./marble":"1Yn0u","./data/constants":"g0UK1","./particleManager":"5egBO","./data/maps":"1onmu","./utils/utils":"ea5wt","./camera":"i82g0","./rouletteRenderer":"6YE6W","./skillEffect":"7OlpA","./options":"d5NoS","./utils/bound.decorator":"4IbJm","./rankRenderer":"iVbYY","./minimap":"dnnuz","./utils/videoRecorder":"dFQO0","./physics-box2d":"jjdiN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lX6TJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "_", ()=>(0, _tslib.__decorate));
var _tslib = require("tslib");

},{"tslib":"lRdW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRdW5":[function(require,module,exports) {
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends);
parcelHelpers.export(exports, "__assign", ()=>__assign);
parcelHelpers.export(exports, "__rest", ()=>__rest);
parcelHelpers.export(exports, "__decorate", ()=>__decorate);
parcelHelpers.export(exports, "__param", ()=>__param);
parcelHelpers.export(exports, "__esDecorate", ()=>__esDecorate);
parcelHelpers.export(exports, "__runInitializers", ()=>__runInitializers);
parcelHelpers.export(exports, "__propKey", ()=>__propKey);
parcelHelpers.export(exports, "__setFunctionName", ()=>__setFunctionName);
parcelHelpers.export(exports, "__metadata", ()=>__metadata);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter);
parcelHelpers.export(exports, "__generator", ()=>__generator);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar);
parcelHelpers.export(exports, "__values", ()=>__values);
parcelHelpers.export(exports, "__read", ()=>__read);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray);
parcelHelpers.export(exports, "__await", ()=>__await);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject);
parcelHelpers.export(exports, "__importStar", ()=>__importStar);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet);
parcelHelpers.export(exports, "__classPrivateFieldIn", ()=>__classPrivateFieldIn);
parcelHelpers.export(exports, "__addDisposableResource", ()=>__addDisposableResource);
parcelHelpers.export(exports, "__disposeResources", ()=>__disposeResources);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
exports.default = {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Yn0u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Marble", ()=>Marble);
var _constants = require("./data/constants");
var _utils = require("./utils/utils");
var _options = require("./options");
var _optionsDefault = parcelHelpers.interopDefault(_options);
var _vector = require("./utils/Vector");
class Marble {
    get position() {
        return this.physics.getMarblePosition(this.id) || {
            x: 0,
            y: 0
        };
    }
    get x() {
        return this.position.x;
    }
    set x(v) {
        this.position.x = v;
    }
    get y() {
        return this.position.y;
    }
    set y(v) {
        this.position.y = v;
    }
    constructor(physics, order, max, name, weight = 1, isSelected = false){
        this.type = "marble";
        this.name = "";
        this.size = 0.5;
        this.color = "red";
        this.hue = 0;
        this.impact = 0;
        this.weight = 1;
        this.skill = (0, _constants.Skills).None;
        this.isActive = false;
        this.isSelected = false;
        this.speedMultiplier = 0.1 // 속도 배율
        ;
        this._skillRate = 0.0005;
        this._coolTime = 5000;
        this._maxCoolTime = 5000;
        this._stuckTime = 0;
        this.lastPosition = {
            x: 0,
            y: 0
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.acceleration = 0.0000039 // 가속도 값 설정
        ;
        this.name = name || `M${order}`;
        this.weight = weight;
        this.physics = physics;
        this._maxCoolTime = 1000 + (1 - this.weight) * 4000;
        this._coolTime = this._maxCoolTime * Math.random();
        this._skillRate = 0.2 * this.weight;
        const maxLine = Math.ceil(max / 10);
        const line = Math.floor(order / 10);
        const lineDelta = -Math.max(0, Math.ceil(maxLine - 5));
        this.hue = 360 / max * order;
        this.color = `hsl(${this.hue} 100% 70%)`;
        this.id = order;
        this.isSelected = isSelected;
        physics.createMarble(order, 10.25 + order % 10 * 0.6, maxLine - line + lineDelta);
    }
    update(deltaTime) {
        const pos = this.physics.getMarblePosition(this.id);
        if (this.isActive && (0, _vector.Vector).lenSq((0, _vector.Vector).sub(this.lastPosition, this.position)) < 0.00001) {
            this._stuckTime += deltaTime;
            if (this._stuckTime > (0, _constants.STUCK_DELAY)) {
                this.physics.shakeMarble(this.id);
                this._stuckTime = 0;
            }
        } else this._stuckTime = 0;
        this.lastPosition = {
            x: this.position.x,
            y: this.position.y
        };
        this.skill = (0, _constants.Skills).None;
        if (this.impact) this.impact = Math.max(0, this.impact - deltaTime);
        if (!this.isActive) return;
        if ((0, _optionsDefault.default).useSkills) this._updateSkillInformation(deltaTime);
        // 선택된 공이 목표에 가까워졌을 때만 추가 속도 부여
        if (this.isSelected) {
            const pos = this.physics.getMarblePosition(this.id);
            this.velocity.y += this.acceleration * deltaTime; // 가속도를 적용하여 속도 증가
            this.physics.setMarblePosition(this.id, pos.x, pos.y + this.velocity.y); // 공의 새로운 위치 설정
        }
    }
    _updateSkillInformation(deltaTime) {
        if (this._coolTime > 0) this._coolTime -= deltaTime;
        if (this._coolTime <= 0) {
            this.skill = Math.random() < this._skillRate ? (0, _constants.Skills).Impact : (0, _constants.Skills).None;
            this._coolTime = this._maxCoolTime;
        }
    }
    render(ctx, zoom, outline, isMinimap = false) {
        ctx.save();
        if (isMinimap) this._renderMinimap(ctx);
        else this._renderNormal(ctx, zoom, outline);
        ctx.restore();
    }
    _renderMinimap(ctx) {
        ctx.fillStyle = this.color;
        this._drawMarbleBody(ctx, true);
    }
    _drawMarbleBody(ctx, isMinimap) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, isMinimap ? this.size : this.size / 2, 0, Math.PI * 2);
        ctx.fill();
    }
    _renderNormal(ctx, zoom, outline) {
        ctx.fillStyle = `hsl(${this.hue} 100% ${70 + 25 * Math.min(1, this.impact / 500)}%`;
        if (this._stuckTime > 0) ctx.fillStyle = `hsl(${this.hue} 100% ${70 + 25 * Math.min(1, this._stuckTime / (0, _constants.STUCK_DELAY))}%`;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = zoom / 2;
        this._drawMarbleBody(ctx, false);
        ctx.shadowColor = "";
        ctx.shadowBlur = 0;
        this._drawName(ctx, zoom);
        if (outline) this._drawOutline(ctx, 2 / zoom);
        if ((0, _optionsDefault.default).useSkills) this._renderCooltime(ctx, zoom);
    // this._renderStuck(ctx, zoom); // for debug
    }
    _drawName(ctx, zoom) {
        ctx.save();
        ctx.translate(this.x, this.y + 0.25);
        ctx.scale(1 / zoom, 1 / zoom);
        ctx.font = `12pt sans-serif`;
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 0;
        ctx.strokeText(this.name, 0, 0);
        ctx.fillText(this.name, 0, 0);
        ctx.restore();
    }
    _drawOutline(ctx, lineWidth) {
        ctx.save();
        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.lineWidth = lineWidth;
        ctx.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }
    _renderCooltime(ctx, zoom) {
        ctx.strokeStyle = "red";
        ctx.lineWidth = 1 / zoom;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2 + 2 / zoom, (0, _utils.rad)(270), (0, _utils.rad)(270 + 360 * this._coolTime / this._maxCoolTime));
        ctx.stroke();
    }
    _renderStuck(ctx, zoom) {
        ctx.strokeStyle = "green";
        ctx.lineWidth = 1 / zoom;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size / 2 + 3 / zoom, (0, _utils.rad)(270), (0, _utils.rad)(270 + 360 * (1 - this._stuckTime / (0, _constants.STUCK_DELAY))));
        ctx.stroke();
    }
}

},{"./data/constants":"g0UK1","./utils/utils":"ea5wt","./options":"d5NoS","./utils/Vector":"47iGf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g0UK1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initialZoom", ()=>initialZoom);
parcelHelpers.export(exports, "canvasWidth", ()=>canvasWidth);
parcelHelpers.export(exports, "canvasHeight", ()=>canvasHeight);
parcelHelpers.export(exports, "zoomThreshold", ()=>zoomThreshold);
parcelHelpers.export(exports, "STUCK_DELAY", ()=>STUCK_DELAY);
parcelHelpers.export(exports, "Skills", ()=>Skills);
const initialZoom = 30;
const canvasWidth = 1600;
const canvasHeight = 900;
const zoomThreshold = 5;
const STUCK_DELAY = 5000;
var Skills;
(function(Skills) {
    Skills[Skills["None"] = 0] = "None";
    Skills[Skills["Impact"] = 1] = "Impact";
})(Skills || (Skills = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ea5wt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rad", ()=>rad);
parcelHelpers.export(exports, "parseName", ()=>parseName);
parcelHelpers.export(exports, "pad", ()=>pad);
function rad(degree) {
    return Math.PI * degree / 180;
}
function getRegexValue(regex, str) {
    const result = regex.exec(str);
    return result ? result[1] : "";
}
function parseName(nameStr) {
    const weightRegex = /(\/\d+)/;
    const countRegex = /(\*\d+)/;
    const hasWeight = weightRegex.test(nameStr);
    const hasCount = countRegex.test(nameStr);
    const name = getRegexValue(/^\s*([^\/*]+)?/, nameStr);
    if (!name) return null;
    const weight = hasWeight ? parseInt(getRegexValue(weightRegex, nameStr).replace("/", "")) : 1;
    const count = hasCount ? parseInt(getRegexValue(countRegex, nameStr).replace("*", "")) : 1;
    return {
        name,
        weight,
        count
    };
}
function pad(v) {
    return v.toString().padStart(2, "0");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5NoS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Options {
    constructor(){
        this.useSkills = true;
        this.winningRank = 0;
        this.autoRecording = true;
    }
}
const options = new Options();
exports.default = options;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"47iGf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vector", ()=>Vector);
class Vector {
    static sub(v1, v2) {
        return {
            x: v2.x - v1.x,
            y: v2.y - v1.y
        };
    }
    static lenSq(v) {
        return v.x * v.x + v.y * v.y;
    }
    static len(v) {
        return Math.sqrt(this.lenSq(v));
    }
    static mul(v, scalar) {
        return {
            x: v.x * scalar,
            y: v.y * scalar
        };
    }
    static add(v1, v2) {
        return {
            x: v1.x + v2.x,
            y: v1.y + v2.y
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5egBO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParticleManager", ()=>ParticleManager);
var _particle = require("./particle");
class ParticleManager {
    update(deltaTime) {
        this._particles.forEach((particle)=>{
            particle.update(deltaTime);
        });
        this._particles = this._particles.filter((particle)=>!particle.isDestroy);
    }
    render(ctx) {
        this._particles.forEach((particle)=>particle.render(ctx));
    }
    shot(x, y) {
        for(let i = 0; i < 200; i++)this._particles.push(new (0, _particle.Particle)(x, y));
    }
    constructor(){
        this._particles = [];
    }
}

},{"./particle":"cndCx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cndCx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Particle", ()=>Particle);
var _utils = require("./utils/utils");
var _vector = require("./utils/Vector");
const lifetime = 3000;
class Particle {
    constructor(x, y){
        this._elapsed = 0;
        this.position = {
            x: 0,
            y: 0
        };
        this.force = {
            x: 0,
            y: 0
        };
        this.color = "";
        this.isDestroy = false;
        this.position.x = x;
        this.position.y = y;
        const force = Math.random() * 250;
        const ang = (0, _utils.rad)(90 * Math.random() - 180);
        const fx = Math.cos(ang) * force;
        const fy = Math.sin(ang) * force;
        this.color = `hsl(${Math.random() * 360} 50% 50%)`;
        this.force = {
            x: fx,
            y: fy
        };
    }
    update(deltaTime) {
        this._elapsed += deltaTime;
        const delta = (0, _vector.Vector).mul(this.force, deltaTime / 100);
        this.position = (0, _vector.Vector).add(this.position, delta);
        this.force.y += 10 * deltaTime / 100;
        if (this._elapsed > lifetime) this.isDestroy = true;
    }
    render(ctx) {
        ctx.save();
        ctx.globalAlpha = 1 - Math.pow(this._elapsed / lifetime, 2);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, this.position.y, 20, 20);
        ctx.restore();
    }
}

},{"./utils/utils":"ea5wt","./utils/Vector":"47iGf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1onmu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "stages", ()=>stages);
var _utils = require("../utils/utils");
const stages = [
    {
        title: "Wheel of fortune",
        goalY: 111,
        zoomY: 106.75,
        walls: [
            [
                [
                    16.5,
                    -300
                ],
                [
                    9.25,
                    -300
                ],
                [
                    9.25,
                    8.5
                ],
                [
                    2,
                    19.25
                ],
                [
                    2,
                    26
                ],
                [
                    9.75,
                    30
                ],
                [
                    9.75,
                    33.5
                ],
                [
                    1.25,
                    41
                ],
                [
                    1.25,
                    53.75
                ],
                [
                    8.25,
                    58.75
                ],
                [
                    8.25,
                    63
                ],
                [
                    9.25,
                    64
                ],
                [
                    8.25,
                    65
                ],
                [
                    8.25,
                    99.25
                ],
                [
                    15.1,
                    106.75
                ],
                [
                    15.1,
                    111.75
                ]
            ],
            [
                [
                    16.5,
                    -300
                ],
                [
                    16.5,
                    9.25
                ],
                [
                    9.5,
                    20
                ],
                [
                    9.5,
                    22.5
                ],
                [
                    17.5,
                    26
                ],
                [
                    17.5,
                    33.5
                ],
                [
                    24,
                    38.5
                ],
                [
                    19,
                    45.5
                ],
                [
                    19,
                    55.5
                ],
                [
                    24,
                    59.25
                ],
                [
                    24,
                    63
                ],
                [
                    23,
                    64
                ],
                [
                    24,
                    65
                ],
                [
                    24,
                    100.5
                ],
                [
                    16,
                    106.75
                ],
                [
                    16,
                    111.75
                ]
            ],
            [
                [
                    12.75,
                    37.5
                ],
                [
                    7,
                    43.5
                ],
                [
                    7,
                    49.75
                ],
                [
                    12.75,
                    53.75
                ],
                [
                    12.75,
                    37.5
                ]
            ],
            [
                [
                    14.75,
                    37.5
                ],
                [
                    14.75,
                    43
                ],
                [
                    17.5,
                    40.25
                ],
                [
                    14.75,
                    37.5
                ]
            ]
        ],
        boxes: [
            // x, y, angle, width, height
            [
                15.5,
                30.0,
                -45,
                0.2,
                0.2
            ],
            [
                15.5,
                32.0,
                -45,
                0.2,
                0.2
            ],
            [
                15.5,
                28.0,
                -45,
                0.2,
                0.2
            ],
            [
                12.5,
                30.0,
                -45,
                0.2,
                0.2
            ],
            [
                12.5,
                32.0,
                -45,
                0.2,
                0.2
            ],
            [
                12.5,
                28.0,
                -45,
                0.2,
                0.2
            ],
            [
                9.4,
                66.6,
                45,
                0.6,
                0.1
            ],
            [
                11.3,
                66.6,
                45,
                0.6,
                0.1
            ],
            [
                13.2,
                66.6,
                45,
                0.6,
                0.1
            ],
            [
                15.1,
                66.6,
                45,
                0.6,
                0.1
            ],
            [
                17,
                66.6,
                45,
                0.6,
                0.1
            ],
            [
                18.9,
                66.6,
                45,
                0.6,
                0.1
            ],
            [
                20.699999999999997,
                66.6,
                45,
                0.6,
                0.1
            ],
            [
                22.7,
                66.6,
                45,
                0.6,
                0.1
            ],
            [
                9.4,
                69.1,
                -45,
                0.6,
                0.1
            ],
            [
                11.3,
                69.1,
                -45,
                0.6,
                0.1
            ],
            [
                13.2,
                69.1,
                -45,
                0.6,
                0.1
            ],
            [
                15.1,
                69.1,
                -45,
                0.6,
                0.1
            ],
            [
                17,
                69.1,
                -45,
                0.6,
                0.1
            ],
            [
                18.9,
                69.1,
                -45,
                0.6,
                0.1
            ],
            [
                20.699999999999997,
                69.1,
                -45,
                0.6,
                0.1
            ],
            [
                22.7,
                69.1,
                -45,
                0.6,
                0.1
            ],
            [
                9.5,
                92,
                (0, _utils.rad)(45),
                0.25,
                0.25
            ],
            [
                12.75,
                92,
                (0, _utils.rad)(45),
                0.25,
                0.25
            ],
            [
                16,
                92,
                (0, _utils.rad)(45),
                0.25,
                0.25
            ],
            [
                19.25,
                92,
                (0, _utils.rad)(45),
                0.25,
                0.25
            ],
            [
                22.5,
                92,
                (0, _utils.rad)(45),
                0.25,
                0.25
            ],
            [
                11,
                95,
                (0, _utils.rad)(45),
                0.25,
                0.25
            ],
            [
                14.25,
                95,
                (0, _utils.rad)(45),
                0.25,
                0.25
            ],
            [
                17.5,
                95,
                (0, _utils.rad)(45),
                0.25,
                0.25
            ],
            [
                20.75,
                95,
                (0, _utils.rad)(45),
                0.25,
                0.25
            ],
            [
                9.5,
                98,
                (0, _utils.rad)(45),
                0.25,
                0.25
            ],
            [
                12.75,
                98,
                (0, _utils.rad)(45),
                0.25,
                0.25
            ],
            [
                16,
                98,
                (0, _utils.rad)(45),
                0.25,
                0.25
            ],
            [
                19.25,
                98,
                (0, _utils.rad)(45),
                0.25,
                0.25
            ],
            [
                22.5,
                98,
                (0, _utils.rad)(45),
                0.25,
                0.25
            ]
        ],
        wheels: [
            // x, y, power, centerx, centery
            [
                8,
                75,
                3.5
            ],
            [
                12,
                75,
                -3.5
            ],
            [
                16,
                75,
                3.5
            ],
            [
                20,
                75,
                -3.5
            ],
            [
                24,
                75,
                3.5
            ],
            [
                14.0,
                106.75,
                -1.2
            ]
        ]
    },
    {
        title: "BubblePop",
        goalY: 83,
        zoomY: 78,
        walls: [
            [
                [
                    16.5,
                    -300
                ],
                [
                    9.25,
                    -300
                ],
                [
                    9.25,
                    0
                ],
                [
                    9.25,
                    43
                ],
                [
                    4.25,
                    50
                ],
                [
                    9.25,
                    53
                ],
                [
                    9.25,
                    75
                ],
                [
                    12,
                    80
                ],
                [
                    12,
                    83
                ]
            ],
            [
                [
                    16.5,
                    -300
                ],
                [
                    16.5,
                    50
                ],
                [
                    19.5,
                    54
                ],
                [
                    18.5,
                    56
                ],
                [
                    19.5,
                    58
                ],
                [
                    16.5,
                    61
                ],
                [
                    16.5,
                    75
                ],
                [
                    13,
                    80
                ],
                [
                    13,
                    83
                ]
            ],
            [
                [
                    16.5,
                    52.5
                ],
                [
                    17.5,
                    54
                ],
                [
                    16.5,
                    56
                ],
                [
                    17.5,
                    58
                ],
                [
                    16.5,
                    59
                ],
                [
                    15.5,
                    56
                ],
                [
                    16.5,
                    52.5
                ]
            ],
            [
                [
                    9.25,
                    45.5
                ],
                [
                    6.25,
                    49.5
                ],
                [
                    9.25,
                    51
                ],
                [
                    14.5,
                    50.5
                ],
                [
                    9.25,
                    45.5
                ]
            ],
            [
                [
                    9.25,
                    26
                ],
                [
                    11.0625,
                    27.5
                ]
            ],
            [
                [
                    16.5,
                    26
                ],
                [
                    14.6875,
                    27.5
                ]
            ],
            [
                [
                    11.0625,
                    30
                ],
                [
                    12.875,
                    28.5
                ],
                [
                    14.6875,
                    30
                ]
            ],
            [
                [
                    9.25,
                    31
                ],
                [
                    11.0625,
                    32.5
                ]
            ],
            [
                [
                    16.5,
                    31
                ],
                [
                    14.6875,
                    32.5
                ]
            ],
            [
                [
                    11.0625,
                    35
                ],
                [
                    12.875,
                    33.5
                ],
                [
                    14.6875,
                    35
                ]
            ]
        ],
        wheels: [
            [
                10.7,
                10,
                10,
                0,
                0,
                0.5
            ],
            [
                14.7,
                10,
                -10,
                0,
                0,
                0.5
            ],
            [
                12.7,
                10,
                10,
                0,
                0,
                0.5
            ],
            [
                10.7,
                14,
                -3
            ],
            [
                14.7,
                14,
                3
            ],
            [
                11.20,
                44,
                -5,
                0,
                0,
                0.5
            ],
            [
                10.3,
                75,
                8,
                0,
                0,
                1
            ],
            [
                15.2,
                75,
                -8,
                0,
                0,
                1
            ]
        ],
        boxes: [
            // x, y, angle, width, height
            [
                9.25,
                18,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                11.25,
                18,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                13.25,
                18,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                15.25,
                18,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                10.5,
                19,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                12.5,
                19,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                14.5,
                19,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                16.5,
                19,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                9.25,
                20,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                11.25,
                20,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                13.25,
                20,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                15.25,
                20,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                10.5,
                21,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                12.5,
                21,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                14.5,
                21,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                16.5,
                21,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                9.25,
                22,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                11.25,
                22,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                13.25,
                22,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                15.25,
                22,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                10.5,
                23,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                12.5,
                23,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                14.5,
                23,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                16.5,
                23,
                (0, _utils.rad)(45),
                0.15,
                0.15
            ],
            [
                9.4,
                39,
                (0, _utils.rad)(45),
                3,
                3
            ],
            [
                16.5,
                43,
                (0, _utils.rad)(45),
                3,
                3
            ]
        ],
        jumpers: [
            [
                11,
                65,
                0.5,
                true
            ],
            [
                13,
                65,
                0.5,
                true
            ],
            [
                15,
                65,
                0.5,
                true
            ],
            [
                12,
                67.5,
                0.5,
                true
            ],
            [
                14,
                67.5,
                0.5,
                true
            ],
            [
                13,
                71,
                0.8,
                true
            ],
            [
                10.7,
                77.5,
                0.8,
                true
            ],
            [
                14.7,
                77.5,
                0.8,
                true
            ],
            [
                12.625,
                80,
                1.5,
                true
            ],
            [
                12.625,
                80,
                1.2,
                true
            ]
        ]
    },
    {
        title: "Pot of greed",
        goalY: 111,
        zoomY: 110,
        walls: [
            [
                [
                    17,
                    -300
                ],
                [
                    9,
                    -300
                ],
                [
                    9,
                    8.5
                ],
                [
                    2,
                    15
                ],
                [
                    6,
                    61.5
                ]
            ],
            [
                [
                    7,
                    71
                ],
                [
                    9,
                    101
                ],
                [
                    8,
                    100.5
                ],
                [
                    6,
                    100
                ],
                [
                    5,
                    90
                ],
                [
                    4,
                    70
                ],
                [
                    7,
                    71
                ]
            ],
            [
                [
                    17,
                    -300
                ],
                [
                    17,
                    8.5
                ],
                [
                    24,
                    15
                ],
                [
                    20,
                    61.5
                ]
            ],
            [
                [
                    19,
                    71
                ],
                [
                    17,
                    101
                ],
                [
                    18,
                    100.5
                ],
                [
                    20,
                    100
                ],
                [
                    21,
                    90
                ],
                [
                    22,
                    70
                ],
                [
                    19,
                    71
                ]
            ],
            [
                [
                    11,
                    88
                ],
                [
                    12,
                    90
                ],
                [
                    12,
                    112
                ]
            ],
            [
                [
                    15,
                    88
                ],
                [
                    14,
                    90
                ],
                [
                    14,
                    112
                ]
            ],
            [
                [
                    12,
                    102
                ],
                [
                    11,
                    103
                ],
                [
                    9,
                    104
                ],
                [
                    8,
                    104
                ],
                [
                    6,
                    103
                ],
                [
                    5,
                    102
                ],
                [
                    4,
                    100
                ],
                [
                    3,
                    90
                ],
                [
                    2,
                    70
                ],
                [
                    3,
                    65
                ],
                [
                    4,
                    63
                ],
                [
                    5,
                    62
                ],
                [
                    6,
                    61.5
                ]
            ],
            [
                [
                    14,
                    102
                ],
                [
                    15,
                    103
                ],
                [
                    17,
                    104
                ],
                [
                    18,
                    104
                ],
                [
                    20,
                    103
                ],
                [
                    21,
                    102
                ],
                [
                    22,
                    100
                ],
                [
                    23,
                    90
                ],
                [
                    24,
                    70
                ],
                [
                    23,
                    65
                ],
                [
                    22,
                    63
                ],
                [
                    21,
                    62
                ],
                [
                    20,
                    61.5
                ]
            ]
        ],
        boxes: [
            // x, y, angle, width, height
            [
                13,
                20,
                (0, _utils.rad)(45),
                3,
                3
            ],
            [
                13,
                55,
                (0, _utils.rad)(45),
                3,
                3
            ],
            [
                8,
                37,
                (0, _utils.rad)(45),
                2,
                2
            ],
            [
                18,
                37,
                (0, _utils.rad)(45),
                2,
                2
            ]
        ],
        jumpers: [],
        wheels: [
            [
                11,
                12,
                -3
            ],
            [
                15,
                12,
                3
            ],
            [
                8,
                104,
                -10,
                0,
                0,
                1
            ],
            [
                6,
                103,
                -10,
                0,
                0,
                1.5
            ],
            [
                4,
                100,
                -10,
                0,
                0,
                1.5
            ],
            [
                3.5,
                95,
                -10
            ],
            [
                3,
                90,
                -10
            ],
            [
                2.75,
                85,
                -10
            ],
            [
                2.5,
                80,
                -10
            ],
            [
                2.25,
                75,
                -10
            ],
            [
                2,
                70,
                -10
            ],
            [
                18,
                104,
                10,
                0,
                0,
                1
            ],
            [
                20,
                103,
                10,
                0,
                0,
                1.5
            ],
            [
                22,
                100,
                10,
                0,
                0,
                1.5
            ],
            [
                22.5,
                95,
                10
            ],
            [
                23,
                90,
                10
            ],
            [
                23.25,
                85,
                10
            ],
            [
                23.5,
                80,
                10
            ],
            [
                23.75,
                75,
                10
            ],
            [
                24,
                70,
                10
            ]
        ]
    }
];

},{"../utils/utils":"ea5wt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i82g0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Camera", ()=>Camera);
var _constants = require("./data/constants");
class Camera {
    get zoom() {
        return this._zoom;
    }
    set zoom(v) {
        this._targetZoom = v;
    }
    get x() {
        return this._position.x;
    }
    set x(v) {
        this._targetPosition.x = v;
    }
    get y() {
        return this._position.y;
    }
    set y(v) {
        this._targetPosition.y = v;
    }
    get position() {
        return this._position;
    }
    setPosition(v, force = false) {
        if (force) return this._position = {
            x: v.x,
            y: v.y
        };
        return this._targetPosition = {
            x: v.x,
            y: v.y
        };
    }
    lock(v) {
        this._locked = v;
    }
    update({ marbles, stage, needToZoom, targetIndex }) {
        // set target position
        if (!this._locked) this._calcTargetPositionAndZoom(marbles, stage, needToZoom, targetIndex);
        // interpolate position
        this._position.x = this._interpolation(this.x, this._targetPosition.x);
        this._position.y = this._interpolation(this.y, this._targetPosition.y);
        // interpolate zoom
        this._zoom = this._interpolation(this._zoom, this._targetZoom);
    }
    _calcTargetPositionAndZoom(marbles, stage, needToZoom, targetIndex) {
        if (marbles.length > 0) {
            const targetMarble = marbles[targetIndex] ? marbles[targetIndex] : marbles[0];
            this.setPosition(targetMarble.position);
            if (needToZoom) {
                const goalDist = Math.abs(stage.zoomY - this._position.y);
                this.zoom = Math.max(1, (1 - goalDist / (0, _constants.zoomThreshold)) * 4);
            } else this.zoom = 1;
        } else {
            this.setPosition({
                x: 0,
                y: 0
            });
            this.zoom = 1;
        }
    }
    _interpolation(current, target) {
        const d = target - current;
        if (Math.abs(d) < 1 / (0, _constants.initialZoom)) return target;
        return current + d / 10;
    }
    renderScene(ctx, callback) {
        const zoomFactor = (0, _constants.initialZoom) * 2 * this._zoom;
        ctx.save();
        ctx.translate(-this.x * this._zoom, -this.y * this._zoom);
        ctx.scale(this.zoom, this.zoom);
        ctx.translate(ctx.canvas.width / zoomFactor, ctx.canvas.height / zoomFactor);
        callback(ctx);
        ctx.restore();
    }
    constructor(){
        this._position = {
            x: 0,
            y: 0
        };
        this._targetPosition = {
            x: 0,
            y: 0
        };
        this._zoom = 1;
        this._targetZoom = 1;
        this._locked = false;
    }
}

},{"./data/constants":"g0UK1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6YE6W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RouletteRenderer", ()=>RouletteRenderer);
var _constants = require("./data/constants");
class RouletteRenderer {
    constructor(){
        this.sizeFactor = 1;
    }
    get width() {
        return this._canvas.width;
    }
    get height() {
        return this._canvas.height;
    }
    get canvas() {
        return this._canvas;
    }
    init() {
        this._canvas = document.createElement("canvas");
        this._canvas.width = (0, _constants.canvasWidth);
        this._canvas.height = (0, _constants.canvasHeight);
        this.ctx = this._canvas.getContext("2d", {
            alpha: false
        });
        document.body.appendChild(this._canvas);
        const resizing = (entries)=>{
            const realSize = entries ? entries[0].contentRect : this._canvas.getBoundingClientRect();
            const width = Math.max(realSize.width / 2, 640);
            const height = width / realSize.width * realSize.height;
            this._canvas.width = width;
            this._canvas.height = height;
            this.sizeFactor = width / realSize.width;
        };
        const resizeObserver = new ResizeObserver(resizing);
        resizeObserver.observe(this._canvas);
        resizing();
    }
    render(renderParameters, uiObjects) {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
        this.ctx.save();
        this.ctx.scale((0, _constants.initialZoom), (0, _constants.initialZoom));
        this.ctx.textAlign = "left";
        this.ctx.textBaseline = "top";
        this.ctx.font = "0.4pt sans-serif";
        this.ctx.lineWidth = 3 / (renderParameters.camera.zoom + (0, _constants.initialZoom));
        renderParameters.camera.renderScene(this.ctx, ()=>{
            this._renderWalls({
                ...renderParameters
            });
            this.renderBoxes(renderParameters.boxes);
            this.renderWheels(renderParameters.wheels);
            this.renderJumpers(renderParameters.jumpers);
            this.renderEffects(renderParameters);
            this.renderMarbles(renderParameters);
        });
        this.ctx.restore();
        uiObjects.forEach((obj)=>obj.render(this.ctx, renderParameters, this._canvas.width, this._canvas.height));
        renderParameters.particleManager.render(this.ctx);
        this.renderWinner(renderParameters);
    }
    _renderWalls({ stage, camera }) {
        if (!stage) return;
        this.ctx.save();
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 5 / (camera.zoom + (0, _constants.initialZoom));
        this.ctx.beginPath();
        stage.walls.forEach((wallDef)=>{
            this.ctx.moveTo(wallDef[0][0], wallDef[0][1]);
            for(let i = 1; i < wallDef.length; i++)this.ctx.lineTo(wallDef[i][0], wallDef[i][1]);
        });
        this.ctx.shadowColor = "cyan";
        this.ctx.shadowBlur = 15;
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
    }
    renderWheels(wheels) {
        this.ctx.save();
        this.ctx.fillStyle = "#94d5ed";
        this.ctx.strokeStyle = "#94d5ed";
        this.ctx.shadowBlur = 15;
        this.ctx.shadowColor = "cyan";
        wheels.forEach((wheel)=>{
            this.ctx.save();
            this.ctx.translate(wheel.x, wheel.y);
            this.ctx.rotate(wheel.angle);
            this.ctx.fillRect(-wheel.size, -0.05, wheel.size * 2, 0.1);
            this.ctx.strokeRect(-wheel.size, -0.05, wheel.size * 2, 0.1);
            this.ctx.restore();
        });
        this.ctx.restore();
    }
    renderBoxes(boxes) {
        this.ctx.save();
        this.ctx.fillStyle = "#94d5ed";
        this.ctx.strokeStyle = "#94d5ed";
        boxes.forEach((box)=>{
            this.ctx.save();
            this.ctx.translate(box.x, box.y);
            this.ctx.rotate(box.angle);
            this.ctx.fillRect(-box.width / 2, -box.height / 2, box.width, box.height);
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = "cyan";
            this.ctx.strokeRect(-box.width / 2, -box.height / 2, box.width, box.height);
            this.ctx.restore();
        });
        this.ctx.restore();
    }
    renderJumpers(jumpers) {
        this.ctx.save();
        this.ctx.fillStyle = "yellow";
        this.ctx.strokeStyle = "yellow";
        jumpers.forEach((jumper)=>{
            this.ctx.save();
            this.ctx.translate(jumper.x, jumper.y);
            this.ctx.beginPath();
            this.ctx.arc(0, 0, jumper.radius, 0, Math.PI * 2, false);
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = "yellow";
            this.ctx.stroke();
            this.ctx.restore();
        });
        this.ctx.restore();
    }
    renderEffects({ effects, camera }) {
        effects.forEach((effect)=>effect.render(this.ctx, camera.zoom * (0, _constants.initialZoom)));
    }
    renderMarbles({ marbles, camera, winnerRank, winners }) {
        const winnerIndex = winnerRank - winners.length;
        marbles.forEach((marble, i)=>{
            marble.render(this.ctx, camera.zoom * (0, _constants.initialZoom), i === winnerIndex, false);
        });
    }
    renderWinner({ winner }) {
        if (!winner) return;
        this.ctx.save();
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        this.ctx.fillRect(this._canvas.width / 2, this._canvas.height - 168, this._canvas.width / 2, 168);
        this.ctx.fillStyle = "white";
        this.ctx.font = "bold 48px sans-serif";
        this.ctx.textAlign = "right";
        this.ctx.fillText("Winner", this._canvas.width - 10, this._canvas.height - 120);
        this.ctx.font = "bold 72px sans-serif";
        this.ctx.fillStyle = winner.color;
        this.ctx.fillText(winner.name, this._canvas.width - 10, this._canvas.height - 55);
        this.ctx.restore();
    }
}

},{"./data/constants":"g0UK1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7OlpA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SkillEffect", ()=>SkillEffect);
const lifetime = 500;
class SkillEffect {
    constructor(x, y){
        this._size = 0;
        this._elapsed = 0;
        this.isDestroy = false;
        this.position = {
            x,
            y
        };
    }
    update(deltaTime) {
        this._elapsed += deltaTime;
        this._size = this._elapsed / lifetime * 10;
        if (this._elapsed > lifetime) this.isDestroy = true;
    }
    render(ctx, zoom) {
        ctx.save();
        const rate = this._elapsed / lifetime;
        ctx.globalAlpha = 1 - rate * rate;
        ctx.strokeStyle = "white";
        ctx.lineWidth = 1 / zoom;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this._size, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4IbJm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bound", ()=>bound);
function bound(target, propertyKey, descriptor) {
    return {
        configurable: true,
        get () {
            const boundMethod = descriptor.value.bind(this);
            Object.defineProperty(this, propertyKey, {
                value: boundMethod,
                configurable: true,
                writable: true
            });
            return boundMethod;
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVbYY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RankRenderer", ()=>RankRenderer);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _boundDecorator = require("./utils/bound.decorator");
class RankRenderer {
    constructor(){
        this._currentY = 0;
        this._targetY = 0;
        this.fontHeight = 16;
        this._userMoved = 0;
        this._currentWinner = -1;
        this.maxY = 0;
    }
    onWheel(e) {
        this._targetY += e.deltaY;
        if (this._targetY > this.maxY) this._targetY = this.maxY;
        this._userMoved = 2000;
    }
    render(ctx, { winners, marbles, winnerRank }, width, height) {
        const startX = width - 5;
        const startY = Math.max(0, this._currentY - height / 2);
        this.maxY = Math.max(0, (marbles.length + winners.length) * this.fontHeight);
        this._currentWinner = winners.length;
        ctx.save();
        ctx.translate(0, -startY);
        ctx.font = "bold 11pt sans-serif";
        ctx.textAlign = "right";
        winners.forEach((marble, rank)=>{
            const y = rank * this.fontHeight;
            if (y >= startY && y <= startY + ctx.canvas.height) {
                ctx.fillStyle = marble.color;
                ctx.fillText(`${rank === winnerRank ? "\u2606" : "\u2714"} ${marble.name} #${rank + 1}`, startX, 20 + y);
            }
        });
        ctx.font = "10pt sans-serif";
        marbles.forEach((marble, rank)=>{
            const y = (rank + winners.length) * this.fontHeight;
            if (y >= startY && y <= startY + ctx.canvas.height) {
                ctx.fillStyle = marble.color;
                ctx.fillText(`${marble.name} #${rank + 1 + winners.length}`, startX, 20 + y);
            }
        });
        ctx.restore();
    }
    update(deltaTime) {
        if (this._currentWinner === -1) return;
        if (this._userMoved > 0) this._userMoved -= deltaTime;
        else this._targetY = this._currentWinner * this.fontHeight;
        if (this._currentY !== this._targetY) this._currentY += (this._targetY - this._currentY) * (deltaTime / 250);
        if (Math.abs(this._currentY - this._targetY) < 1) this._currentY = this._targetY;
    }
    getBoundingBox() {
        return null;
    }
}
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], RankRenderer.prototype, "onWheel", null);

},{"@swc/helpers/_/_ts_decorate":"lX6TJ","./utils/bound.decorator":"4IbJm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dnnuz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Minimap", ()=>Minimap);
var _tsDecorate = require("@swc/helpers/_/_ts_decorate");
var _constants = require("./data/constants");
var _boundDecorator = require("./utils/bound.decorator");
class Minimap {
    constructor(){
        this.lastParams = null;
        this._onViewportChangeHandler = null;
        this.mousePosition = null;
        this.boundingBox = {
            x: 10,
            y: 10,
            w: 104,
            h: 0
        };
    }
    getBoundingBox() {
        return this.boundingBox;
    }
    onViewportChange(callback) {
        this._onViewportChangeHandler = callback;
    }
    update(deltaTime) {
    // nothing to do
    }
    onMouseMove(e) {
        if (!e) {
            this.mousePosition = null;
            if (this._onViewportChangeHandler) this._onViewportChangeHandler();
            return;
        }
        if (!this.lastParams) return;
        this.mousePosition = {
            x: e.x,
            y: e.y
        };
        if (this._onViewportChangeHandler) this._onViewportChangeHandler({
            x: this.mousePosition.x / 4,
            y: this.mousePosition.y / 4
        });
    }
    render(ctx, params) {
        if (!ctx) return;
        const { stage } = params;
        if (!stage) return;
        this.boundingBox.h = stage.goalY * 4;
        this.lastParams = params;
        this.ctx = ctx;
        ctx.save();
        ctx.fillStyle = "#333";
        ctx.translate(10, 10);
        ctx.scale(4, 4);
        ctx.fillRect(0, 0, 26, stage.goalY);
        this.ctx.lineWidth = 3 / (params.camera.zoom + (0, _constants.initialZoom));
        this.drawWalls(params);
        this.drawWheels(params.wheels);
        this.drawBoxes(params.boxes);
        this.drawJumpers(params.jumpers);
        this.drawMarbles(params);
        this.drawViewport(params);
        ctx.restore();
        ctx.save();
        ctx.strokeStyle = "green";
        ctx.lineWidth = 1;
        ctx.strokeRect(this.boundingBox.x, this.boundingBox.y, this.boundingBox.w, this.boundingBox.h);
        ctx.restore();
    }
    drawViewport(params) {
        this.ctx.save();
        const { camera, size } = params;
        const zoom = camera.zoom * (0, _constants.initialZoom);
        const w = size.x / zoom;
        const h = size.y / zoom;
        this.ctx.strokeStyle = "white";
        this.ctx.lineWidth = 1 / zoom;
        this.ctx.strokeRect(camera.x - w / 2, camera.y - h / 2, w, h);
        this.ctx.restore();
    }
    drawWalls(params) {
        if (!params.stage) return;
        this.ctx.save();
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 0.5;
        this.ctx.beginPath();
        params.stage.walls.forEach((wallDef)=>{
            this.ctx.moveTo(wallDef[0][0], wallDef[0][1]);
            for(let i = 1; i < wallDef.length; i++)this.ctx.lineTo(wallDef[i][0], wallDef[i][1]);
        });
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.restore();
    }
    drawWheels(wheels) {
        this.ctx.save();
        this.ctx.fillStyle = "#94d5ed";
        wheels.forEach((wheel)=>{
            this.ctx.save();
            this.ctx.translate(wheel.x, wheel.y);
            this.ctx.rotate(wheel.angle);
            this.ctx.fillRect(-wheel.size, -0.05, wheel.size * 2, 0.1);
            this.ctx.restore();
        });
        this.ctx.restore();
    }
    drawBoxes(boxes) {
        this.ctx.save();
        this.ctx.fillStyle = "#94d5ed";
        this.ctx.strokeStyle = "#94d5ed";
        boxes.forEach((box)=>{
            this.ctx.save();
            this.ctx.translate(box.x, box.y);
            this.ctx.rotate(box.angle);
            this.ctx.fillRect(-box.width / 2, -box.height / 2, box.width, box.height);
            this.ctx.strokeRect(-box.width / 2, -box.height / 2, box.width, box.height);
            this.ctx.restore();
        });
        this.ctx.restore();
    }
    drawJumpers(jumpers) {
        this.ctx.save();
        this.ctx.fillStyle = "yellow";
        this.ctx.strokeStyle = "yellow";
        jumpers.forEach((jumper)=>{
            this.ctx.save();
            this.ctx.translate(jumper.x, jumper.y);
            this.ctx.beginPath();
            this.ctx.arc(0, 0, jumper.radius, 0, Math.PI * 2, false);
            this.ctx.stroke();
            this.ctx.restore();
        });
        this.ctx.restore();
    }
    drawMarbles(params) {
        const { marbles } = params;
        marbles.forEach((marble)=>{
            marble.render(this.ctx, 1, false, true);
        });
    }
}
(0, _tsDecorate._)([
    (0, _boundDecorator.bound)
], Minimap.prototype, "onMouseMove", null);

},{"@swc/helpers/_/_ts_decorate":"lX6TJ","./data/constants":"g0UK1","./utils/bound.decorator":"4IbJm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dFQO0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VideoRecorder", ()=>VideoRecorder);
var _utils = require("./utils");
class VideoRecorder {
    constructor(canvas){
        this.chunks = [];
        this.stopping = false;
        this.targetCanvas = canvas;
        this.videoStream = this.targetCanvas.captureStream();
        this.mediaRecorder = new MediaRecorder(this.videoStream, {
            videoBitsPerSecond: 6000000
        });
    }
    async start() {
        this.stopping = false;
        return new Promise((rs)=>{
            this.chunks = [];
            this.mediaRecorder.ondataavailable = (e)=>{
                this.chunks.push(e.data);
            };
            this.mediaRecorder.onstop = ()=>{
                const blob = new Blob(this.chunks, {
                    "type": "video/webm"
                });
                const videoUrl = URL.createObjectURL(blob);
                const downloadLink = document.createElement("a");
                const d = new Date();
                downloadLink.href = videoUrl;
                downloadLink.download = `marble_roulette_${d.getFullYear()}${(0, _utils.pad)(d.getMonth() + 1)}${(0, _utils.pad)(d.getDate())}${(0, _utils.pad)(d.getHours())}${(0, _utils.pad)(d.getMinutes())}${(0, _utils.pad)(d.getSeconds())}.webm`;
                downloadLink.click();
                downloadLink.remove();
                URL.revokeObjectURL(videoUrl);
            };
            this.mediaRecorder.onstart = ()=>{
                rs();
            };
            this.mediaRecorder.start();
        });
    }
    stop() {
        this.stopping = true;
        if (this.mediaRecorder.state === "recording") this.mediaRecorder.stop();
    }
}

},{"./utils":"ea5wt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jjdiN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Box2dPhysics", ()=>Box2dPhysics);
var _box2DWasm = require("box2d-wasm");
var _box2DWasmDefault = parcelHelpers.interopDefault(_box2DWasm);
class Box2dPhysics {
    setMarblePosition(id, x, y) {
        const marble = this.marbleMap[id];
        if (marble) marble.SetTransform(new this.Box2D.b2Vec2(x, y), marble.GetAngle());
    }
    async init() {
        this.Box2D = await (0, _box2DWasmDefault.default)();
        this.gravity = new this.Box2D.b2Vec2(0, 10);
        this.world = new this.Box2D.b2World(this.gravity);
        console.log("box2d ready");
    }
    clear() {
        this.clearWalls();
        this.clearWheels();
        this.clearBoxes();
        this.clearJumpers();
    }
    clearMarbles() {
        Object.values(this.marbleMap).forEach((body)=>{
            this.world.DestroyBody(body);
        });
        this.marbleMap = {};
    }
    createStage(stage) {
        this.createWalls(stage.walls);
        this.createWheels(stage.wheels);
        this.createBoxes(stage.boxes);
        this.createJumpers(stage.jumpers);
    }
    createJumpers(jumpers) {
        if (!jumpers) return;
        jumpers.forEach((jumperDef)=>{
            const [x, y, size, temporary] = jumperDef;
            const bodyDef = new this.Box2D.b2BodyDef();
            bodyDef.set_type(this.Box2D.b2_staticBody);
            const body = this.world.CreateBody(bodyDef);
            const shape = new this.Box2D.b2CircleShape();
            shape.set_m_radius(size);
            const fixtureDef = new this.Box2D.b2FixtureDef();
            fixtureDef.set_density(1);
            fixtureDef.set_restitution(1.5);
            fixtureDef.set_shape(shape);
            body.CreateFixture(fixtureDef);
            body.SetTransform(new this.Box2D.b2Vec2(x, y), 0);
            this.jumpers.push({
                x,
                y,
                radius: size,
                body,
                isTemporary: !!temporary
            });
        });
    }
    clearJumpers() {
        this.jumpers.forEach((jumper)=>{
            this.world.DestroyBody(jumper.body);
        });
        this.jumpers = [];
    }
    createWheels(wheels) {
        wheels.forEach((wheelDef)=>{
            const pos = {
                x: wheelDef[0],
                y: wheelDef[1]
            };
            const power = wheelDef[2];
            const center = {
                x: wheelDef[3] ?? 0,
                y: wheelDef[4] ?? 0
            };
            const size = wheelDef[5] ?? 2;
            const bodyDef = new this.Box2D.b2BodyDef();
            bodyDef.set_type(this.Box2D.b2_kinematicBody);
            // bodyDef.set_position(new this.Box2D.b2Vec2(pos.x, pos.y));
            const body = this.world.CreateBody(bodyDef);
            const shape = new this.Box2D.b2PolygonShape();
            shape.SetAsBox(size, 0.1);
            const fixtureDef = new this.Box2D.b2FixtureDef();
            fixtureDef.set_density(1);
            fixtureDef.set_shape(shape);
            body.CreateFixture(fixtureDef);
            body.SetAngularVelocity(power);
            body.SetTransform(new this.Box2D.b2Vec2(pos.x, pos.y), 0);
            this.wheels.push({
                body,
                size
            });
        });
    }
    clearWheels() {
        this.wheels.forEach((wheel)=>{
            this.world.DestroyBody(wheel.body);
        });
        this.wheels = [];
    }
    createWalls(walls) {
        walls.forEach((positions)=>{
            const def = new this.Box2D.b2BodyDef();
            def.set_type(this.Box2D.b2_staticBody);
            const body = this.world.CreateBody(def);
            for(let i = 0; i < positions.length - 1; i++){
                const p1 = positions[i];
                const p2 = positions[i + 1];
                const v1 = new this.Box2D.b2Vec2(p1[0], p1[1]);
                const v2 = new this.Box2D.b2Vec2(p2[0], p2[1]);
                const edge = new this.Box2D.b2EdgeShape();
                edge.SetTwoSided(v1, v2);
                body.CreateFixture(edge, 1);
            }
            this.walls.push(body);
        });
    }
    clearWalls() {
        this.walls.forEach((wall)=>{
            this.world.DestroyBody(wall);
        });
        this.walls = [];
    }
    createBoxes(boxes) {
        boxes.forEach((boxDef)=>{
            const pos = {
                x: boxDef[0],
                y: boxDef[1]
            };
            const width = boxDef[3] ?? 0.5;
            const height = boxDef[4] ?? 0.25;
            const rotation = boxDef[2] ?? 0;
            const def = new this.Box2D.b2BodyDef();
            def.set_type(this.Box2D.b2_staticBody);
            const body = this.world.CreateBody(def);
            const shape = new this.Box2D.b2PolygonShape();
            shape.SetAsBox(width, height, 0, rotation);
            body.CreateFixture(shape, 1);
            body.SetTransform(new this.Box2D.b2Vec2(pos.x, pos.y), 0);
            this.boxes.push({
                body,
                width: width * 2,
                height: height * 2,
                x: pos.x,
                y: pos.y,
                angle: rotation
            });
        });
    }
    clearBoxes() {
        this.boxes.forEach((box)=>{
            this.world.DestroyBody(box.body);
        });
        this.boxes = [];
    }
    createMarble(id, x, y) {
        const circleShape = new this.Box2D.b2CircleShape();
        circleShape.set_m_radius(0.25);
        const bodyDef = new this.Box2D.b2BodyDef();
        bodyDef.set_type(this.Box2D.b2_dynamicBody);
        bodyDef.set_position(new this.Box2D.b2Vec2(x, y));
        const body = this.world.CreateBody(bodyDef);
        body.CreateFixture(circleShape, 1 + Math.random());
        body.SetAwake(false);
        body.SetEnabled(false);
        this.marbleMap[id] = body;
    }
    shakeMarble(id) {
        const body = this.marbleMap[id];
        if (body) body.ApplyLinearImpulseToCenter(new this.Box2D.b2Vec2(Math.random() * 10 - 5, Math.random() * 10 - 5), true);
    }
    removeMarble(id) {
        const marble = this.marbleMap[id];
        if (marble) {
            this.world.DestroyBody(marble);
            delete this.marbleMap[id];
        }
    }
    getMarblePosition(id) {
        const marble = this.marbleMap[id];
        if (marble) return marble.GetPosition();
        else return {
            x: 0,
            y: 0
        };
    }
    getWheels() {
        return this.wheels.map((wheel)=>{
            const pos = wheel.body.GetPosition();
            return {
                x: pos.x,
                y: pos.y,
                size: wheel.size,
                angle: wheel.body.GetAngle()
            };
        });
    }
    getBoxes() {
        return this.boxes;
    }
    getJumpers() {
        return this.jumpers;
    }
    impact(id) {
        const src = this.marbleMap[id];
        if (!src) return;
        Object.values(this.marbleMap).forEach((body)=>{
            if (body === src) return;
            const distVector = new this.Box2D.b2Vec2(body.GetPosition().x, body.GetPosition().y);
            distVector.op_sub(src.GetPosition());
            const distSq = distVector.LengthSquared();
            if (distSq < 100) {
                distVector.Normalize();
                const power = 1 - distVector.Length() / 10;
                distVector.op_mul(power * power * 5);
                body.ApplyLinearImpulseToCenter(distVector, true);
            }
        });
    }
    start() {
        for(let key in this.marbleMap){
            const marble = this.marbleMap[key];
            marble.SetAwake(true);
            marble.SetEnabled(true);
        }
    }
    step(deltaSeconds) {
        this.deleteCandidates.forEach((body)=>{
            this.world.DestroyBody(body);
        });
        this.deleteCandidates = [];
        this.world.Step(deltaSeconds, 6, 2);
        for(let i = this.jumpers.length - 1; i >= 0; i--){
            const jumper = this.jumpers[i];
            let edge = jumper.body.GetContactList();
            if (edge.contact && edge.contact.IsTouching()) this.deleteCandidates.push(...this.jumpers.splice(i, 1).map((j)=>j.body));
        }
    }
    constructor(){
        this.marbleMap = {};
        this.walls = [];
        this.boxes = [];
        this.wheels = [];
        this.jumpers = [];
        this.deleteCandidates = [];
    }
}

},{"box2d-wasm":"ljBrF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ljBrF":[function(require,module,exports) {
/**
 * @param {Parameters<import('box2d-wasm')>} args
 * @return {ReturnType<import('box2d-wasm')>}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = async (...args)=>{
    /**
   * This validation expression comes from wasm-feature-detect:
   * https://github.com/GoogleChromeLabs/wasm-feature-detect
   * 
   * Copyright 2019 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *     http://www.apache.org/licenses/LICENSE-2.0
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ const hasSIMD = WebAssembly.validate(new Uint8Array([
        0,
        97,
        115,
        109,
        1,
        0,
        0,
        0,
        1,
        5,
        1,
        96,
        0,
        1,
        123,
        3,
        2,
        1,
        0,
        10,
        10,
        1,
        8,
        0,
        65,
        0,
        253,
        15,
        253,
        98,
        11
    ]));
    /** @type {{ 'default': import('box2d-wasm') }} */ const Box2DModule = await (hasSIMD ? require("1c9c9cecb712db83") : require("1131b71228caeef3"));
    const { "default": Box2DFactory } = Box2DModule;
    // awaiting gives us a better stack trace (at the cost of an extra microtask)
    return await Box2DFactory(...args);
};

},{"1c9c9cecb712db83":"icAWC","1131b71228caeef3":"1iKS7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"icAWC":[function(require,module,exports) {
module.exports = Promise.all([
    require("7af9a5fe70909630")(require("6b0ff4e3bee2d1c4").getBundleURL("7UhFu") + "Box2D.simd.d526de36.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("7af9a5fe70909630")(require("6b0ff4e3bee2d1c4").getBundleURL("7UhFu") + "Box2D.simd.3fad8024.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("eaPHn"));

},{"7af9a5fe70909630":"61B45","6b0ff4e3bee2d1c4":"lgJ39"}],"61B45":[function(require,module,exports) {
"use strict";
var cacheLoader = require("ca2a84f7fa4a3bb0");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"ca2a84f7fa4a3bb0":"j49pS"}],"j49pS":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"1iKS7":[function(require,module,exports) {
module.exports = Promise.all([
    require("4e7f073fd58cabc7")(require("e38246951101134b").getBundleURL("7UhFu") + "Box2D.simd.d526de36.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("4e7f073fd58cabc7")(require("e38246951101134b").getBundleURL("7UhFu") + "Box2D.a4ba63c2.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("66hZa"));

},{"4e7f073fd58cabc7":"61B45","e38246951101134b":"lgJ39"}]},["fm8Gy","h7u1C"], "h7u1C", "parcelRequire5cc2")

//# sourceMappingURL=index.b71e74eb.js.map
