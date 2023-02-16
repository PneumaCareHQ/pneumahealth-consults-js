!(function (e, m) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = m())
    : "function" == typeof define && define.amd
    ? define([], m)
    : "object" == typeof exports
    ? (exports.PneumaHealthJS = m())
    : (e.PneumaHealthJS = m());
})(window, function () {
  return (function (e) {
    var m = {};
    function n(t) {
      if (m[t]) return m[t].exports;
      var i = (m[t] = { i: t, l: !1, exports: {} });
      return e[t].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = e),
      (n.c = m),
      (n.d = function (e, m, t) {
        n.o(e, m) || Object.defineProperty(e, m, { enumerable: !0, get: t });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, m) {
        if ((1 & m && (e = n(e)), 8 & m)) return e;
        if (4 & m && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (
          (n.r(t),
          Object.defineProperty(t, "default", { enumerable: !0, value: e }),
          2 & m && "string" != typeof e)
        )
          for (var i in e)
            n.d(
              t,
              i,
              function (m) {
                return e[m];
              }.bind(null, i)
            );
        return t;
      }),
      (n.n = function (e) {
        var m =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(m, "a", m), m;
      }),
      (n.o = function (e, m) {
        return Object.prototype.hasOwnProperty.call(e, m);
      }),
      (n.p = ""),
      n((n.s = 558))
    );
  })({
    558: function (e, m, n) {
      e.exports = n(559);
    },
    559: function (e, m, n) {
      "use strict";
      function t(e) {
        return (t =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              })(e);
      }
      function i(e, m) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(e);
          m &&
            (t = t.filter(function (m) {
              return Object.getOwnPropertyDescriptor(e, m).enumerable;
            })),
            n.push.apply(n, t);
        }
        return n;
      }
      function r(e) {
        for (var m = 1; m < arguments.length; m++) {
          var n = null != arguments[m] ? arguments[m] : {};
          m % 2
            ? i(Object(n), !0).forEach(function (m) {
                o(e, m, n[m]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (m) {
                Object.defineProperty(
                  e,
                  m,
                  Object.getOwnPropertyDescriptor(n, m)
                );
              });
        }
        return e;
      }
      function o(e, m, n) {
        return (
          (m = (function (e) {
            var m = (function (e, m) {
              if ("object" !== t(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, m || "default");
                if ("object" !== t(i)) return i;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return ("string" === m ? String : Number)(e);
            })(e, "string");
            return "symbol" === t(m) ? m : String(m);
          })(m)) in e
            ? Object.defineProperty(e, m, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
              })
            : (e[m] = n),
          e
        );
      }
      n.r(m);
      var a = {
          border: "none",
          "z-index": 2147483647,
          width: "100%",
          height: "100%",
          visibility: "visible",
          background: "transparent",
          opacity: 1,
          "border-radius": "0px",
          "box-shadow": "0px 8px 16px rgb(0 0 0 / 16%)",
          "pointer-events": "auto",
          "touch-action": "auto",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          margin: "auto",
          display: "flex",
          "align-items": "center",
          "justify-content": "center"
        },
        s = {
          iframe: null,
          loadingComponent: null,
          widgetUI: null,
          config: null,
          init: function (e) {
            e && (this.config = e);
            var m = "";
            for (var n in a) m += n + ": " + a[n] + ";";
            var t = e.service;
            this.createLoadingSpinner(m, t), this.createIframe(m);
          },
          createLoadingSpinner: function (e, m) {
            document.getElementById("pneumacare-widget-loading") ||
              ((this.loadingComponent = document.createElement("div")),
              this.loadingComponent.setAttribute(
                "id",
                "pneumacare-widget-loading"
              ),
              (this.loadingComponent.innerHTML = "\n        ".concat(
                u,
                " \n        <div>\n          <div class='loader'></div>\n          <div>Loading...</div>\n        </div>\n      "
              )),
              this.loadingComponent.setAttribute("style", e),
              document.body.appendChild(this.loadingComponent));
          },
          createIframe: function (e) {
            var m = this,
              n = document.getElementById("pneumacare-widget");
            n && n.remove(),
              (this.iframe = document.createElement("iframe")),
              this.iframe.setAttribute("id", "pneumacare-widget"),
              this.iframe.setAttribute("name", "pneumacareIFrame"),
              this.iframe.setAttribute("style", e),
              (this.iframe.style.display = "none"),
              (this.iframe.src =
                "https://telehealth.pneuma.care/interframe=true"),
              (this.iframe.referrerPolicy = "origin"),
              document.body.appendChild(this.iframe),
              (this.iframe.onload = function () {
                m.iframe.style.display = "block";
                var e,
                  n = document.getElementById("pneuma-widget-main-app");
                n &&
                  (null !== (e = m.config) && void 0 !== e && e.service
                    ? (n.style.maxWidth = "768px")
                    : (n.style.maxWidth = "400px"));
                m.loadingComponent.remove();
              }),
              this.setupListeners();
          },
          setupListeners: function () {
            window.addEventListener("message", this.handleMessage.bind(this));
          },
          handleMessage: function (e) {
            if ((e.preventDefault(), e.data && "string" == typeof e.data)) {
              var m = JSON.parse(e.data);
              switch (m.action) {
                case "init":
                  this.iframe &&
                    this.iframe.contentWindow.postMessage(
                      JSON.stringify(
                        (null == m ? void 0 : m.config) || this.config
                      ),
                      "*"
                    );
                  break;
                case "close":
                  this.iframe && this.iframe.remove();
                  break;
                case "switch":
                  if (this.iframe && null != m && m.service) {
                    this.iframe.remove();
                    var n = r(r({}, this.config), {}, { service: m.service });
                    this.init(n);
                  }
              }
            }
          },
          closeWidget: function (e) {
            e.preventDefault(), this.iframe.remove();
          }
        };
      m.default = s;
      var u =
        "\n<style>\n#pneumacare-widget-loading {\n  font-family: 'DM Sans', sans-serif;\n  background: rgba(0, 0, 0, 0.55) !important;\n  color: #fff;\n}\n#pneumacare-widget-loading .loader {\n  color: #fff;\n  font-size: 8px;\n  margin: 100px auto;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: load4 1.3s infinite linear;\n  animation: load4 1.3s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n}\n@-webkit-keyframes load4 {\n  0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n@keyframes load4 {\n  0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n</style>\n";
    }
  }).default;
});
