// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/modernizr.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*! modernizr 3.12.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-boxshadow-boxsizing-csscolumns-cssgrid_cssgridlegacy-cssremunit-cssvalid-flexbox-fontface-overflowscrolling-setclasses !*/
!function (e, t, n, r) {
  function o(e, t) {
    return _typeof(e) === t;
  }
  function s(e, t) {
    return !!~("" + e).indexOf(t);
  }
  function i() {
    return "function" != typeof n.createElement ? n.createElement(arguments[0]) : S ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments);
  }
  function a() {
    var e = n.body;
    return e || (e = i(S ? "svg" : "body"), e.fake = !0), e;
  }
  function l(e, t, r, o) {
    var s,
      l,
      u,
      d,
      f = "modernizr",
      c = i("div"),
      p = a();
    if (parseInt(r, 10)) for (; r--;) u = i("div"), u.id = o ? o[r] : f + (r + 1), c.appendChild(u);
    return s = i("style"), s.type = "text/css", s.id = "s" + f, (p.fake ? p : c).appendChild(s), p.appendChild(c), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), c.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", d = b.style.overflow, b.style.overflow = "hidden", b.appendChild(p)), l = t(c, e), p.fake && p.parentNode ? (p.parentNode.removeChild(p), b.style.overflow = d, b.offsetHeight) : c.parentNode.removeChild(c), !!l;
  }
  function u(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }
  function d(e, n, r) {
    var o;
    if ("getComputedStyle" in t) {
      o = getComputedStyle.call(t, e, n);
      var s = t.console;
      if (null !== o) r && (o = o.getPropertyValue(r));else if (s) {
        var i = s.error ? "error" : "log";
        s[i].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
      }
    } else o = !n && e.currentStyle && e.currentStyle[r];
    return o;
  }
  function f(e, n) {
    var o = e.length;
    if ("CSS" in t && "supports" in t.CSS) {
      for (; o--;) if (t.CSS.supports(u(e[o]), n)) return !0;
      return !1;
    }
    if ("CSSSupportsRule" in t) {
      for (var s = []; o--;) s.push("(" + u(e[o]) + ":" + n + ")");
      return s = s.join(" or "), l("@supports (" + s + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" === d(e, null, "position");
      });
    }
    return r;
  }
  function c(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }
  function p(e, t, n, a) {
    function l() {
      d && (delete _.style, delete _.modElem);
    }
    if (a = !o(a, "undefined") && a, !o(n, "undefined")) {
      var u = f(e, n);
      if (!o(u, "undefined")) return u;
    }
    for (var d, p, m, h, g, v = ["modernizr", "tspan", "samp"]; !_.style && v.length;) d = !0, _.modElem = i(v.shift()), _.style = _.modElem.style;
    for (m = e.length, p = 0; p < m; p++) if (h = e[p], g = _.style[h], s(h, "-") && (h = c(h)), _.style[h] !== r) {
      if (a || o(n, "undefined")) return l(), "pfx" !== t || h;
      try {
        _.style[h] = n;
      } catch (e) {}
      if (_.style[h] !== g) return l(), "pfx" !== t || h;
    }
    return l(), !1;
  }
  function m(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }
  function h(e, t, n) {
    var r;
    for (var s in e) if (e[s] in t) return !1 === n ? e[s] : (r = t[e[s]], o(r, "function") ? m(r, n || t) : r);
    return !1;
  }
  function g(e, t, n, r, s) {
    var i = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + T.join(i + " ") + i).split(" ");
    return o(t, "string") || o(t, "undefined") ? p(a, t, r, s) : (a = (e + " " + k.join(i + " ") + i).split(" "), h(a, t, n));
  }
  function v(e, t, n) {
    return g(e, r, r, t, n);
  }
  var y = [],
    w = {
      _version: "3.12.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function on(e, t) {
        var n = this;
        setTimeout(function () {
          t(n[e]);
        }, 0);
      },
      addTest: function addTest(e, t, n) {
        y.push({
          name: e,
          fn: t,
          options: n
        });
      },
      addAsyncTest: function addAsyncTest(e) {
        y.push({
          name: null,
          fn: e
        });
      }
    },
    Modernizr = function Modernizr() {};
  Modernizr.prototype = w, Modernizr = new Modernizr();
  var x = [],
    b = n.documentElement,
    S = "svg" === b.nodeName.toLowerCase(),
    C = "Moz O ms Webkit",
    T = w._config.usePrefixes ? C.split(" ") : [];
  w._cssomPrefixes = T;
  var z = {
    elem: i("modernizr")
  };
  Modernizr._q.push(function () {
    delete z.elem;
  });
  var _ = {
    style: z.elem.style
  };
  Modernizr._q.unshift(function () {
    delete _.style;
  });
  var k = w._config.usePrefixes ? C.toLowerCase().split(" ") : [];
  w._domPrefixes = k, w.testAllProps = g, w.testAllProps = v, Modernizr.addTest("backgroundsize", v("backgroundSize", "100%", !0)), Modernizr.addTest("boxshadow", v("boxShadow", "1px 1px", !0)), Modernizr.addTest("boxsizing", v("boxSizing", "border-box", !0) && (n.documentMode === r || n.documentMode > 7)), function () {
    Modernizr.addTest("csscolumns", function () {
      var e = !1,
        t = v("columnCount");
      try {
        e = !!t, e && (e = new Boolean(e));
      } catch (e) {}
      return e;
    });
    for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = v("column" + n[r]), "breakbefore" !== e && "breakafter" !== e && "breakinside" !== e || (t = t || v(n[r])), Modernizr.addTest("csscolumns." + e, t);
  }(), Modernizr.addTest("cssgridlegacy", v("grid-columns", "10px", !0)), Modernizr.addTest("cssgrid", v("grid-template-rows", "none", !0)), Modernizr.addTest("flexbox", v("flexBasis", "1px", !0));
  var E = w.testStyles = l;
  !function () {
    var e = navigator.userAgent,
      t = e.match(/w(eb)?osbrowser/gi),
      n = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;
    return t || n;
  }() ? E('@font-face {font-family:"font";src:url("https://")}', function (e, t) {
    var r = n.getElementById("smodernizr"),
      o = r.sheet || r.styleSheet,
      s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "",
      i = /src/i.test(s) && 0 === s.indexOf(t.split(" ")[0]);
    Modernizr.addTest("fontface", i);
  }) : Modernizr.addTest("fontface", !1), Modernizr.addTest("overflowscrolling", v("overflowScrolling", "touch", !0)), Modernizr.addTest("cssremunit", function () {
    var e = i("a").style;
    try {
      e.fontSize = "3rem";
    } catch (e) {}
    return /rem/.test(e.fontSize);
  }), Modernizr.addTest("cssvalid", function () {
    return E("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}", function (e) {
      var t = i("input");
      return e.appendChild(t), t.clientWidth > 10;
    });
  }), function () {
    var e, t, n, r, s, i, a;
    for (var l in y) if (y.hasOwnProperty(l)) {
      if (e = [], t = y[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
      for (r = o(t.fn, "function") ? t.fn() : t.fn, s = 0; s < e.length; s++) i = e[s], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = r : (Modernizr[a[0]] && (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean) || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), x.push((r ? "" : "no-") + a.join("-"));
    }
  }(), function (e) {
    var t = b.className,
      n = Modernizr._config.classPrefix || "";
    if (S && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2");
    }
    Modernizr._config.enableClasses && (e.length > 0 && (t += " " + n + e.join(" " + n)), S ? b.className.baseVal = t : b.className = t);
  }(x), delete w.addTest, delete w.addAsyncTest;
  for (var P = 0; P < Modernizr._q.length; P++) Modernizr._q[P]();
  e.Modernizr = Modernizr;
}(window, window, document);
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51078" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/modernizr.js"], null)
//# sourceMappingURL=/modernizr.4ede9213.js.map