(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) a(r);
  new MutationObserver((r) => {
    for (const f of r)
      if (f.type === "childList")
        for (const h of f.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && a(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function u(r) {
    const f = {};
    return (
      r.integrity && (f.integrity = r.integrity),
      r.referrerPolicy && (f.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (f.credentials = "omit")
          : (f.credentials = "same-origin"),
      f
    );
  }
  function a(r) {
    if (r.ep) return;
    r.ep = !0;
    const f = u(r);
    fetch(r.href, f);
  }
})();
function iy(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default")
    ? o.default
    : o;
}
var Eh = { exports: {} },
  Br = {};
var Ag;
function ay() {
  if (Ag) return Br;
  Ag = 1;
  var o = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.fragment");
  function u(a, r, f) {
    var h = null;
    if (
      (f !== void 0 && (h = "" + f),
      r.key !== void 0 && (h = "" + r.key),
      "key" in r)
    ) {
      f = {};
      for (var d in r) d !== "key" && (f[d] = r[d]);
    } else f = r;
    return (
      (r = f.ref),
      { $$typeof: o, type: a, key: h, ref: r !== void 0 ? r : null, props: f }
    );
  }
  return ((Br.Fragment = n), (Br.jsx = u), (Br.jsxs = u), Br);
}
var Og;
function uy() {
  return (Og || ((Og = 1), (Eh.exports = ay())), Eh.exports);
}
var A = uy(),
  zh = { exports: {} },
  xt = {};
var wg;
function ry() {
  if (wg) return xt;
  wg = 1;
  var o = Symbol.for("react.transitional.element"),
    n = Symbol.for("react.portal"),
    u = Symbol.for("react.fragment"),
    a = Symbol.for("react.strict_mode"),
    r = Symbol.for("react.profiler"),
    f = Symbol.for("react.consumer"),
    h = Symbol.for("react.context"),
    d = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    p = Symbol.for("react.memo"),
    _ = Symbol.for("react.lazy"),
    y = Symbol.for("react.activity"),
    x = Symbol.iterator;
  function b(C) {
    return C === null || typeof C != "object"
      ? null
      : ((C = (x && C[x]) || C["@@iterator"]),
        typeof C == "function" ? C : null);
  }
  var z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    S = Object.assign,
    w = {};
  function q(C, G, tt) {
    ((this.props = C),
      (this.context = G),
      (this.refs = w),
      (this.updater = tt || z));
  }
  ((q.prototype.isReactComponent = {}),
    (q.prototype.setState = function (C, G) {
      if (typeof C != "object" && typeof C != "function" && C != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, C, G, "setState");
    }),
    (q.prototype.forceUpdate = function (C) {
      this.updater.enqueueForceUpdate(this, C, "forceUpdate");
    }));
  function Z() {}
  Z.prototype = q.prototype;
  function X(C, G, tt) {
    ((this.props = C),
      (this.context = G),
      (this.refs = w),
      (this.updater = tt || z));
  }
  var H = (X.prototype = new Z());
  ((H.constructor = X), S(H, q.prototype), (H.isPureReactComponent = !0));
  var L = Array.isArray;
  function K() {}
  var j = { H: null, A: null, T: null, S: null },
    F = Object.prototype.hasOwnProperty;
  function W(C, G, tt) {
    var et = tt.ref;
    return {
      $$typeof: o,
      type: C,
      key: G,
      ref: et !== void 0 ? et : null,
      props: tt,
    };
  }
  function $(C, G) {
    return W(C.type, G, C.props);
  }
  function ut(C) {
    return typeof C == "object" && C !== null && C.$$typeof === o;
  }
  function P(C) {
    var G = { "=": "=0", ":": "=2" };
    return (
      "$" +
      C.replace(/[=:]/g, function (tt) {
        return G[tt];
      })
    );
  }
  var _t = /\/+/g;
  function ct(C, G) {
    return typeof C == "object" && C !== null && C.key != null
      ? P("" + C.key)
      : G.toString(36);
  }
  function pt(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (
          (typeof C.status == "string"
            ? C.then(K, K)
            : ((C.status = "pending"),
              C.then(
                function (G) {
                  C.status === "pending" &&
                    ((C.status = "fulfilled"), (C.value = G));
                },
                function (G) {
                  C.status === "pending" &&
                    ((C.status = "rejected"), (C.reason = G));
                },
              )),
          C.status)
        ) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function D(C, G, tt, et, rt) {
    var dt = typeof C;
    (dt === "undefined" || dt === "boolean") && (C = null);
    var mt = !1;
    if (C === null) mt = !0;
    else
      switch (dt) {
        case "bigint":
        case "string":
        case "number":
          mt = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case o:
            case n:
              mt = !0;
              break;
            case _:
              return ((mt = C._init), D(mt(C._payload), G, tt, et, rt));
          }
      }
    if (mt)
      return (
        (rt = rt(C)),
        (mt = et === "" ? "." + ct(C, 0) : et),
        L(rt)
          ? ((tt = ""),
            mt != null && (tt = mt.replace(_t, "$&/") + "/"),
            D(rt, G, tt, "", function (Ml) {
              return Ml;
            }))
          : rt != null &&
            (ut(rt) &&
              (rt = $(
                rt,
                tt +
                  (rt.key == null || (C && C.key === rt.key)
                    ? ""
                    : ("" + rt.key).replace(_t, "$&/") + "/") +
                  mt,
              )),
            G.push(rt)),
        1
      );
    mt = 0;
    var Qt = et === "" ? "." : et + ":";
    if (L(C))
      for (var Ot = 0; Ot < C.length; Ot++)
        ((et = C[Ot]), (dt = Qt + ct(et, Ot)), (mt += D(et, G, tt, dt, rt)));
    else if (((Ot = b(C)), typeof Ot == "function"))
      for (C = Ot.call(C), Ot = 0; !(et = C.next()).done; )
        ((et = et.value),
          (dt = Qt + ct(et, Ot++)),
          (mt += D(et, G, tt, dt, rt)));
    else if (dt === "object") {
      if (typeof C.then == "function") return D(pt(C), G, tt, et, rt);
      throw (
        (G = String(C)),
        Error(
          "Objects are not valid as a React child (found: " +
            (G === "[object Object]"
              ? "object with keys {" + Object.keys(C).join(", ") + "}"
              : G) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return mt;
  }
  function Q(C, G, tt) {
    if (C == null) return C;
    var et = [],
      rt = 0;
    return (
      D(C, et, "", "", function (dt) {
        return G.call(tt, dt, rt++);
      }),
      et
    );
  }
  function I(C) {
    if (C._status === -1) {
      var G = C._result;
      ((G = G()),
        G.then(
          function (tt) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 1), (C._result = tt));
          },
          function (tt) {
            (C._status === 0 || C._status === -1) &&
              ((C._status = 2), (C._result = tt));
          },
        ),
        C._status === -1 && ((C._status = 0), (C._result = G)));
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var st =
      typeof reportError == "function"
        ? reportError
        : function (C) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var G = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof C == "object" &&
                  C !== null &&
                  typeof C.message == "string"
                    ? String(C.message)
                    : String(C),
                error: C,
              });
              if (!window.dispatchEvent(G)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", C);
              return;
            }
            console.error(C);
          },
    M = {
      map: Q,
      forEach: function (C, G, tt) {
        Q(
          C,
          function () {
            G.apply(this, arguments);
          },
          tt,
        );
      },
      count: function (C) {
        var G = 0;
        return (
          Q(C, function () {
            G++;
          }),
          G
        );
      },
      toArray: function (C) {
        return (
          Q(C, function (G) {
            return G;
          }) || []
        );
      },
      only: function (C) {
        if (!ut(C))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return C;
      },
    };
  return (
    (xt.Activity = y),
    (xt.Children = M),
    (xt.Component = q),
    (xt.Fragment = u),
    (xt.Profiler = r),
    (xt.PureComponent = X),
    (xt.StrictMode = a),
    (xt.Suspense = g),
    (xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = j),
    (xt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (C) {
        return j.H.useMemoCache(C);
      },
    }),
    (xt.cache = function (C) {
      return function () {
        return C.apply(null, arguments);
      };
    }),
    (xt.cacheSignal = function () {
      return null;
    }),
    (xt.cloneElement = function (C, G, tt) {
      if (C == null)
        throw Error(
          "The argument must be a React element, but you passed " + C + ".",
        );
      var et = S({}, C.props),
        rt = C.key;
      if (G != null)
        for (dt in (G.key !== void 0 && (rt = "" + G.key), G))
          !F.call(G, dt) ||
            dt === "key" ||
            dt === "__self" ||
            dt === "__source" ||
            (dt === "ref" && G.ref === void 0) ||
            (et[dt] = G[dt]);
      var dt = arguments.length - 2;
      if (dt === 1) et.children = tt;
      else if (1 < dt) {
        for (var mt = Array(dt), Qt = 0; Qt < dt; Qt++)
          mt[Qt] = arguments[Qt + 2];
        et.children = mt;
      }
      return W(C.type, rt, et);
    }),
    (xt.createContext = function (C) {
      return (
        (C = {
          $$typeof: h,
          _currentValue: C,
          _currentValue2: C,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (C.Provider = C),
        (C.Consumer = { $$typeof: f, _context: C }),
        C
      );
    }),
    (xt.createElement = function (C, G, tt) {
      var et,
        rt = {},
        dt = null;
      if (G != null)
        for (et in (G.key !== void 0 && (dt = "" + G.key), G))
          F.call(G, et) &&
            et !== "key" &&
            et !== "__self" &&
            et !== "__source" &&
            (rt[et] = G[et]);
      var mt = arguments.length - 2;
      if (mt === 1) rt.children = tt;
      else if (1 < mt) {
        for (var Qt = Array(mt), Ot = 0; Ot < mt; Ot++)
          Qt[Ot] = arguments[Ot + 2];
        rt.children = Qt;
      }
      if (C && C.defaultProps)
        for (et in ((mt = C.defaultProps), mt))
          rt[et] === void 0 && (rt[et] = mt[et]);
      return W(C, dt, rt);
    }),
    (xt.createRef = function () {
      return { current: null };
    }),
    (xt.forwardRef = function (C) {
      return { $$typeof: d, render: C };
    }),
    (xt.isValidElement = ut),
    (xt.lazy = function (C) {
      return { $$typeof: _, _payload: { _status: -1, _result: C }, _init: I };
    }),
    (xt.memo = function (C, G) {
      return { $$typeof: p, type: C, compare: G === void 0 ? null : G };
    }),
    (xt.startTransition = function (C) {
      var G = j.T,
        tt = {};
      j.T = tt;
      try {
        var et = C(),
          rt = j.S;
        (rt !== null && rt(tt, et),
          typeof et == "object" &&
            et !== null &&
            typeof et.then == "function" &&
            et.then(K, st));
      } catch (dt) {
        st(dt);
      } finally {
        (G !== null && tt.types !== null && (G.types = tt.types), (j.T = G));
      }
    }),
    (xt.unstable_useCacheRefresh = function () {
      return j.H.useCacheRefresh();
    }),
    (xt.use = function (C) {
      return j.H.use(C);
    }),
    (xt.useActionState = function (C, G, tt) {
      return j.H.useActionState(C, G, tt);
    }),
    (xt.useCallback = function (C, G) {
      return j.H.useCallback(C, G);
    }),
    (xt.useContext = function (C) {
      return j.H.useContext(C);
    }),
    (xt.useDebugValue = function () {}),
    (xt.useDeferredValue = function (C, G) {
      return j.H.useDeferredValue(C, G);
    }),
    (xt.useEffect = function (C, G) {
      return j.H.useEffect(C, G);
    }),
    (xt.useEffectEvent = function (C) {
      return j.H.useEffectEvent(C);
    }),
    (xt.useId = function () {
      return j.H.useId();
    }),
    (xt.useImperativeHandle = function (C, G, tt) {
      return j.H.useImperativeHandle(C, G, tt);
    }),
    (xt.useInsertionEffect = function (C, G) {
      return j.H.useInsertionEffect(C, G);
    }),
    (xt.useLayoutEffect = function (C, G) {
      return j.H.useLayoutEffect(C, G);
    }),
    (xt.useMemo = function (C, G) {
      return j.H.useMemo(C, G);
    }),
    (xt.useOptimistic = function (C, G) {
      return j.H.useOptimistic(C, G);
    }),
    (xt.useReducer = function (C, G, tt) {
      return j.H.useReducer(C, G, tt);
    }),
    (xt.useRef = function (C) {
      return j.H.useRef(C);
    }),
    (xt.useState = function (C) {
      return j.H.useState(C);
    }),
    (xt.useSyncExternalStore = function (C, G, tt) {
      return j.H.useSyncExternalStore(C, G, tt);
    }),
    (xt.useTransition = function () {
      return j.H.useTransition();
    }),
    (xt.version = "19.2.4"),
    xt
  );
}
var Dg;
function p0() {
  return (Dg || ((Dg = 1), (zh.exports = ry())), zh.exports);
}
var ae = p0();
const Xe = iy(ae);
var Mh = { exports: {} },
  Lr = {},
  Ah = { exports: {} },
  Oh = {};
var Ng;
function sy() {
  return (
    Ng ||
      ((Ng = 1),
      (function (o) {
        function n(D, Q) {
          var I = D.length;
          D.push(Q);
          t: for (; 0 < I; ) {
            var st = (I - 1) >>> 1,
              M = D[st];
            if (0 < r(M, Q)) ((D[st] = Q), (D[I] = M), (I = st));
            else break t;
          }
        }
        function u(D) {
          return D.length === 0 ? null : D[0];
        }
        function a(D) {
          if (D.length === 0) return null;
          var Q = D[0],
            I = D.pop();
          if (I !== Q) {
            D[0] = I;
            t: for (var st = 0, M = D.length, C = M >>> 1; st < C; ) {
              var G = 2 * (st + 1) - 1,
                tt = D[G],
                et = G + 1,
                rt = D[et];
              if (0 > r(tt, I))
                et < M && 0 > r(rt, tt)
                  ? ((D[st] = rt), (D[et] = I), (st = et))
                  : ((D[st] = tt), (D[G] = I), (st = G));
              else if (et < M && 0 > r(rt, I))
                ((D[st] = rt), (D[et] = I), (st = et));
              else break t;
            }
          }
          return Q;
        }
        function r(D, Q) {
          var I = D.sortIndex - Q.sortIndex;
          return I !== 0 ? I : D.id - Q.id;
        }
        if (
          ((o.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var f = performance;
          o.unstable_now = function () {
            return f.now();
          };
        } else {
          var h = Date,
            d = h.now();
          o.unstable_now = function () {
            return h.now() - d;
          };
        }
        var g = [],
          p = [],
          _ = 1,
          y = null,
          x = 3,
          b = !1,
          z = !1,
          S = !1,
          w = !1,
          q = typeof setTimeout == "function" ? setTimeout : null,
          Z = typeof clearTimeout == "function" ? clearTimeout : null,
          X = typeof setImmediate < "u" ? setImmediate : null;
        function H(D) {
          for (var Q = u(p); Q !== null; ) {
            if (Q.callback === null) a(p);
            else if (Q.startTime <= D)
              (a(p), (Q.sortIndex = Q.expirationTime), n(g, Q));
            else break;
            Q = u(p);
          }
        }
        function L(D) {
          if (((S = !1), H(D), !z))
            if (u(g) !== null) ((z = !0), K || ((K = !0), P()));
            else {
              var Q = u(p);
              Q !== null && pt(L, Q.startTime - D);
            }
        }
        var K = !1,
          j = -1,
          F = 5,
          W = -1;
        function $() {
          return w ? !0 : !(o.unstable_now() - W < F);
        }
        function ut() {
          if (((w = !1), K)) {
            var D = o.unstable_now();
            W = D;
            var Q = !0;
            try {
              t: {
                ((z = !1), S && ((S = !1), Z(j), (j = -1)), (b = !0));
                var I = x;
                try {
                  e: {
                    for (
                      H(D), y = u(g);
                      y !== null && !(y.expirationTime > D && $());
                    ) {
                      var st = y.callback;
                      if (typeof st == "function") {
                        ((y.callback = null), (x = y.priorityLevel));
                        var M = st(y.expirationTime <= D);
                        if (((D = o.unstable_now()), typeof M == "function")) {
                          ((y.callback = M), H(D), (Q = !0));
                          break e;
                        }
                        (y === u(g) && a(g), H(D));
                      } else a(g);
                      y = u(g);
                    }
                    if (y !== null) Q = !0;
                    else {
                      var C = u(p);
                      (C !== null && pt(L, C.startTime - D), (Q = !1));
                    }
                  }
                  break t;
                } finally {
                  ((y = null), (x = I), (b = !1));
                }
                Q = void 0;
              }
            } finally {
              Q ? P() : (K = !1);
            }
          }
        }
        var P;
        if (typeof X == "function")
          P = function () {
            X(ut);
          };
        else if (typeof MessageChannel < "u") {
          var _t = new MessageChannel(),
            ct = _t.port2;
          ((_t.port1.onmessage = ut),
            (P = function () {
              ct.postMessage(null);
            }));
        } else
          P = function () {
            q(ut, 0);
          };
        function pt(D, Q) {
          j = q(function () {
            D(o.unstable_now());
          }, Q);
        }
        ((o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (D) {
            D.callback = null;
          }),
          (o.unstable_forceFrameRate = function (D) {
            0 > D || 125 < D
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (F = 0 < D ? Math.floor(1e3 / D) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return x;
          }),
          (o.unstable_next = function (D) {
            switch (x) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = x;
            }
            var I = x;
            x = Q;
            try {
              return D();
            } finally {
              x = I;
            }
          }),
          (o.unstable_requestPaint = function () {
            w = !0;
          }),
          (o.unstable_runWithPriority = function (D, Q) {
            switch (D) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                D = 3;
            }
            var I = x;
            x = D;
            try {
              return Q();
            } finally {
              x = I;
            }
          }),
          (o.unstable_scheduleCallback = function (D, Q, I) {
            var st = o.unstable_now();
            switch (
              (typeof I == "object" && I !== null
                ? ((I = I.delay),
                  (I = typeof I == "number" && 0 < I ? st + I : st))
                : (I = st),
              D)
            ) {
              case 1:
                var M = -1;
                break;
              case 2:
                M = 250;
                break;
              case 5:
                M = 1073741823;
                break;
              case 4:
                M = 1e4;
                break;
              default:
                M = 5e3;
            }
            return (
              (M = I + M),
              (D = {
                id: _++,
                callback: Q,
                priorityLevel: D,
                startTime: I,
                expirationTime: M,
                sortIndex: -1,
              }),
              I > st
                ? ((D.sortIndex = I),
                  n(p, D),
                  u(g) === null &&
                    D === u(p) &&
                    (S ? (Z(j), (j = -1)) : (S = !0), pt(L, I - st)))
                : ((D.sortIndex = M),
                  n(g, D),
                  z || b || ((z = !0), K || ((K = !0), P()))),
              D
            );
          }),
          (o.unstable_shouldYield = $),
          (o.unstable_wrapCallback = function (D) {
            var Q = x;
            return function () {
              var I = x;
              x = Q;
              try {
                return D.apply(this, arguments);
              } finally {
                x = I;
              }
            };
          }));
      })(Oh)),
    Oh
  );
}
var Rg;
function cy() {
  return (Rg || ((Rg = 1), (Ah.exports = sy())), Ah.exports);
}
var wh = { exports: {} },
  fl = {};
var jg;
function fy() {
  if (jg) return fl;
  jg = 1;
  var o = p0();
  function n(g) {
    var p = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var _ = 2; _ < arguments.length; _++)
        p += "&args[]=" + encodeURIComponent(arguments[_]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      p +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u() {}
  var a = {
      d: {
        f: u,
        r: function () {
          throw Error(n(522));
        },
        D: u,
        C: u,
        L: u,
        m: u,
        X: u,
        S: u,
        M: u,
      },
      p: 0,
      findDOMNode: null,
    },
    r = Symbol.for("react.portal");
  function f(g, p, _) {
    var y =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: r,
      key: y == null ? null : "" + y,
      children: g,
      containerInfo: p,
      implementation: _,
    };
  }
  var h = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(g, p) {
    if (g === "font") return "";
    if (typeof p == "string") return p === "use-credentials" ? p : "";
  }
  return (
    (fl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a),
    (fl.createPortal = function (g, p) {
      var _ =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
        throw Error(n(299));
      return f(g, p, null, _);
    }),
    (fl.flushSync = function (g) {
      var p = h.T,
        _ = a.p;
      try {
        if (((h.T = null), (a.p = 2), g)) return g();
      } finally {
        ((h.T = p), (a.p = _), a.d.f());
      }
    }),
    (fl.preconnect = function (g, p) {
      typeof g == "string" &&
        (p
          ? ((p = p.crossOrigin),
            (p =
              typeof p == "string"
                ? p === "use-credentials"
                  ? p
                  : ""
                : void 0))
          : (p = null),
        a.d.C(g, p));
    }),
    (fl.prefetchDNS = function (g) {
      typeof g == "string" && a.d.D(g);
    }),
    (fl.preinit = function (g, p) {
      if (typeof g == "string" && p && typeof p.as == "string") {
        var _ = p.as,
          y = d(_, p.crossOrigin),
          x = typeof p.integrity == "string" ? p.integrity : void 0,
          b = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
        _ === "style"
          ? a.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, {
              crossOrigin: y,
              integrity: x,
              fetchPriority: b,
            })
          : _ === "script" &&
            a.d.X(g, {
              crossOrigin: y,
              integrity: x,
              fetchPriority: b,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
      }
    }),
    (fl.preinitModule = function (g, p) {
      if (typeof g == "string")
        if (typeof p == "object" && p !== null) {
          if (p.as == null || p.as === "script") {
            var _ = d(p.as, p.crossOrigin);
            a.d.M(g, {
              crossOrigin: _,
              integrity: typeof p.integrity == "string" ? p.integrity : void 0,
              nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            });
          }
        } else p == null && a.d.M(g);
    }),
    (fl.preload = function (g, p) {
      if (
        typeof g == "string" &&
        typeof p == "object" &&
        p !== null &&
        typeof p.as == "string"
      ) {
        var _ = p.as,
          y = d(_, p.crossOrigin);
        a.d.L(g, _, {
          crossOrigin: y,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          type: typeof p.type == "string" ? p.type : void 0,
          fetchPriority:
            typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
          referrerPolicy:
            typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
          imageSrcSet:
            typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
          imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
          media: typeof p.media == "string" ? p.media : void 0,
        });
      }
    }),
    (fl.preloadModule = function (g, p) {
      if (typeof g == "string")
        if (p) {
          var _ = d(p.as, p.crossOrigin);
          a.d.m(g, {
            as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
            crossOrigin: _,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          });
        } else a.d.m(g);
    }),
    (fl.requestFormReset = function (g) {
      a.d.r(g);
    }),
    (fl.unstable_batchedUpdates = function (g, p) {
      return g(p);
    }),
    (fl.useFormState = function (g, p, _) {
      return h.H.useFormState(g, p, _);
    }),
    (fl.useFormStatus = function () {
      return h.H.useHostTransitionStatus();
    }),
    (fl.version = "19.2.4"),
    fl
  );
}
var Ug;
function oy() {
  if (Ug) return wh.exports;
  Ug = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (n) {
        console.error(n);
      }
  }
  return (o(), (wh.exports = fy()), wh.exports);
}
var Hg;
function hy() {
  if (Hg) return Lr;
  Hg = 1;
  var o = cy(),
    n = p0(),
    u = oy();
  function a(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        e += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function r(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function f(t) {
    var e = t,
      l = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (l = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? l : null;
  }
  function h(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function d(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (f(t) !== t) throw Error(a(188));
  }
  function p(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = f(t)), e === null)) throw Error(a(188));
      return e !== t ? null : t;
    }
    for (var l = t, i = e; ; ) {
      var s = l.return;
      if (s === null) break;
      var c = s.alternate;
      if (c === null) {
        if (((i = s.return), i !== null)) {
          l = i;
          continue;
        }
        break;
      }
      if (s.child === c.child) {
        for (c = s.child; c; ) {
          if (c === l) return (g(s), t);
          if (c === i) return (g(s), e);
          c = c.sibling;
        }
        throw Error(a(188));
      }
      if (l.return !== i.return) ((l = s), (i = c));
      else {
        for (var m = !1, v = s.child; v; ) {
          if (v === l) {
            ((m = !0), (l = s), (i = c));
            break;
          }
          if (v === i) {
            ((m = !0), (i = s), (l = c));
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = c.child; v; ) {
            if (v === l) {
              ((m = !0), (l = c), (i = s));
              break;
            }
            if (v === i) {
              ((m = !0), (i = c), (l = s));
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(a(189));
        }
      }
      if (l.alternate !== i) throw Error(a(190));
    }
    if (l.tag !== 3) throw Error(a(188));
    return l.stateNode.current === l ? t : e;
  }
  function _(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = _(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var y = Object.assign,
    x = Symbol.for("react.element"),
    b = Symbol.for("react.transitional.element"),
    z = Symbol.for("react.portal"),
    S = Symbol.for("react.fragment"),
    w = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    Z = Symbol.for("react.consumer"),
    X = Symbol.for("react.context"),
    H = Symbol.for("react.forward_ref"),
    L = Symbol.for("react.suspense"),
    K = Symbol.for("react.suspense_list"),
    j = Symbol.for("react.memo"),
    F = Symbol.for("react.lazy"),
    W = Symbol.for("react.activity"),
    $ = Symbol.for("react.memo_cache_sentinel"),
    ut = Symbol.iterator;
  function P(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (ut && t[ut]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var _t = Symbol.for("react.client.reference");
  function ct(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === _t ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case S:
        return "Fragment";
      case q:
        return "Profiler";
      case w:
        return "StrictMode";
      case L:
        return "Suspense";
      case K:
        return "SuspenseList";
      case W:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case z:
          return "Portal";
        case X:
          return t.displayName || "Context";
        case Z:
          return (t._context.displayName || "Context") + ".Consumer";
        case H:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case j:
          return (
            (e = t.displayName || null),
            e !== null ? e : ct(t.type) || "Memo"
          );
        case F:
          ((e = t._payload), (t = t._init));
          try {
            return ct(t(e));
          } catch {}
      }
    return null;
  }
  var pt = Array.isArray,
    D = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    I = { pending: !1, data: null, method: null, action: null },
    st = [],
    M = -1;
  function C(t) {
    return { current: t };
  }
  function G(t) {
    0 > M || ((t.current = st[M]), (st[M] = null), M--);
  }
  function tt(t, e) {
    (M++, (st[M] = t.current), (t.current = e));
  }
  var et = C(null),
    rt = C(null),
    dt = C(null),
    mt = C(null);
  function Qt(t, e) {
    switch ((tt(dt, e), tt(rt, t), tt(et, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? $m(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = $m(e)), (t = Pm(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (G(et), tt(et, t));
  }
  function Ot() {
    (G(et), G(rt), G(dt));
  }
  function Ml(t) {
    t.memoizedState !== null && tt(mt, t);
    var e = et.current,
      l = Pm(e, t.type);
    e !== l && (tt(rt, t), tt(et, l));
  }
  function Ne(t) {
    (rt.current === t && (G(et), G(rt)),
      mt.current === t && (G(mt), (jr._currentValue = I)));
  }
  var Ge, Ht;
  function Jt(t) {
    if (Ge === void 0)
      try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ((Ge = (e && e[1]) || ""),
          (Ht =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Ge +
      t +
      Ht
    );
  }
  var Ke = !1;
  function Pe(t, e) {
    if (!t || Ke) return "";
    Ke = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var J = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(J.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(J, []);
                } catch (Y) {
                  var U = Y;
                }
                Reflect.construct(t, [], J);
              } else {
                try {
                  J.call();
                } catch (Y) {
                  U = Y;
                }
                t.call(J.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Y) {
                U = Y;
              }
              (J = t()) &&
                typeof J.catch == "function" &&
                J.catch(function () {});
            }
          } catch (Y) {
            if (Y && U && typeof Y.stack == "string") return [Y.stack, U.stack];
          }
          return [null, null];
        },
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name",
      );
      s &&
        s.configurable &&
        Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var c = i.DetermineComponentFrameRoot(),
        m = c[0],
        v = c[1];
      if (m && v) {
        var T = m.split(`
`),
          R = v.split(`
`);
        for (
          s = i = 0;
          i < T.length && !T[i].includes("DetermineComponentFrameRoot");
        )
          i++;
        for (; s < R.length && !R[s].includes("DetermineComponentFrameRoot"); )
          s++;
        if (i === T.length || s === R.length)
          for (
            i = T.length - 1, s = R.length - 1;
            1 <= i && 0 <= s && T[i] !== R[s];
          )
            s--;
        for (; 1 <= i && 0 <= s; i--, s--)
          if (T[i] !== R[s]) {
            if (i !== 1 || s !== 1)
              do
                if ((i--, s--, 0 > s || T[i] !== R[s])) {
                  var V =
                    `
` + T[i].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      V.includes("<anonymous>") &&
                      (V = V.replace("<anonymous>", t.displayName)),
                    V
                  );
                }
              while (1 <= i && 0 <= s);
            break;
          }
      }
    } finally {
      ((Ke = !1), (Error.prepareStackTrace = l));
    }
    return (l = t ? t.displayName || t.name : "") ? Jt(l) : "";
  }
  function B(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Jt(t.type);
      case 16:
        return Jt("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? Jt("Suspense Fallback")
          : Jt("Suspense");
      case 19:
        return Jt("SuspenseList");
      case 0:
      case 15:
        return Pe(t.type, !1);
      case 11:
        return Pe(t.type.render, !1);
      case 1:
        return Pe(t.type, !0);
      case 31:
        return Jt("Activity");
      default:
        return "";
    }
  }
  function ul(t) {
    try {
      var e = "",
        l = null;
      do ((e += B(t, l)), (l = t), (t = t.return));
      while (t);
      return e;
    } catch (i) {
      return (
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack
      );
    }
  }
  var Gl = Object.prototype.hasOwnProperty,
    fn = o.unstable_scheduleCallback,
    ne = o.unstable_cancelCallback,
    Rn = o.unstable_shouldYield,
    qn = o.unstable_requestPaint,
    ze = o.unstable_now,
    Re = o.unstable_getCurrentPriorityLevel,
    jn = o.unstable_ImmediatePriority,
    fe = o.unstable_UserBlockingPriority,
    rl = o.unstable_NormalPriority,
    Al = o.unstable_LowPriority,
    on = o.unstable_IdlePriority,
    ma = o.log,
    xe = o.unstable_setDisableYieldValue,
    Xn = null,
    me = null;
  function pl(t) {
    if (
      (typeof ma == "function" && xe(t),
      me && typeof me.setStrictMode == "function")
    )
      try {
        me.setStrictMode(Xn, t);
      } catch {}
  }
  var je = Math.clz32 ? Math.clz32 : zt,
    Gn = Math.log,
    ni = Math.LN2;
  function zt(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Gn(t) / ni) | 0)) | 0);
  }
  var hn = 256,
    sl = 262144,
    cl = 4194304;
  function Ve(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function dn(t, e, l) {
    var i = t.pendingLanes;
    if (i === 0) return 0;
    var s = 0,
      c = t.suspendedLanes,
      m = t.pingedLanes;
    t = t.warmLanes;
    var v = i & 134217727;
    return (
      v !== 0
        ? ((i = v & ~c),
          i !== 0
            ? (s = Ve(i))
            : ((m &= v),
              m !== 0
                ? (s = Ve(m))
                : l || ((l = v & ~t), l !== 0 && (s = Ve(l)))))
        : ((v = i & ~c),
          v !== 0
            ? (s = Ve(v))
            : m !== 0
              ? (s = Ve(m))
              : l || ((l = i & ~t), l !== 0 && (s = Ve(l)))),
      s === 0
        ? 0
        : e !== 0 &&
            e !== s &&
            (e & c) === 0 &&
            ((c = s & -s),
            (l = e & -e),
            c >= l || (c === 32 && (l & 4194048) !== 0))
          ? e
          : s
    );
  }
  function mn(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Un(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Oi() {
    var t = cl;
    return ((cl <<= 1), (cl & 62914560) === 0 && (cl = 4194304), t);
  }
  function yt(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t);
    return e;
  }
  function ft(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function Gt(t, e, l, i, s, c) {
    var m = t.pendingLanes;
    ((t.pendingLanes = l),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= l),
      (t.entangledLanes &= l),
      (t.errorRecoveryDisabledLanes &= l),
      (t.shellSuspendCounter = 0));
    var v = t.entanglements,
      T = t.expirationTimes,
      R = t.hiddenUpdates;
    for (l = m & ~l; 0 < l; ) {
      var V = 31 - je(l),
        J = 1 << V;
      ((v[V] = 0), (T[V] = -1));
      var U = R[V];
      if (U !== null)
        for (R[V] = null, V = 0; V < U.length; V++) {
          var Y = U[V];
          Y !== null && (Y.lane &= -536870913);
        }
      l &= ~J;
    }
    (i !== 0 && lt(t, i, 0),
      c !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(m & ~e)));
  }
  function lt(t, e, l) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var i = 31 - je(e);
    ((t.entangledLanes |= e),
      (t.entanglements[i] = t.entanglements[i] | 1073741824 | (l & 261930)));
  }
  function bt(t, e) {
    var l = (t.entangledLanes |= e);
    for (t = t.entanglements; l; ) {
      var i = 31 - je(l),
        s = 1 << i;
      ((s & e) | (t[i] & e) && (t[i] |= e), (l &= ~s));
    }
  }
  function ot(t, e) {
    var l = e & -e;
    return (
      (l = (l & 42) !== 0 ? 1 : vt(l)),
      (l & (t.suspendedLanes | e)) !== 0 ? 0 : l
    );
  }
  function vt(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Se(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function wt() {
    var t = Q.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : xg(t.type));
  }
  function oe(t, e) {
    var l = Q.p;
    try {
      return ((Q.p = t), e());
    } finally {
      Q.p = l;
    }
  }
  var ue = Math.random().toString(36).slice(2),
    Ct = "__reactFiber$" + ue,
    Mt = "__reactProps$" + ue,
    Xt = "__reactContainer$" + ue,
    _l = "__reactEvents$" + ue,
    re = "__reactListeners$" + ue,
    vl = "__reactHandles$" + ue,
    Vl = "__reactResources$" + ue,
    ge = "__reactMarker$" + ue;
  function Me(t) {
    (delete t[Ct], delete t[Mt], delete t[_l], delete t[re], delete t[vl]);
  }
  function pe(t) {
    var e = t[Ct];
    if (e) return e;
    for (var l = t.parentNode; l; ) {
      if ((e = l[Xt] || l[Ct])) {
        if (
          ((l = e.alternate),
          e.child !== null || (l !== null && l.child !== null))
        )
          for (t = ag(t); t !== null; ) {
            if ((l = t[Ct])) return l;
            t = ag(t);
          }
        return e;
      }
      ((t = l), (l = t.parentNode));
    }
    return null;
  }
  function Ol(t) {
    if ((t = t[Ct] || t[Xt])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Vn(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(a(33));
  }
  function _e(t) {
    var e = t[Vl];
    return (
      e ||
        (e = t[Vl] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Dt(t) {
    t[ge] = !0;
  }
  var Zl = new Set(),
    Fa = {};
  function Zn(t, e) {
    (gn(t, e), gn(t + "Capture", e));
  }
  function gn(t, e) {
    for (Fa[t] = e, t = 0; t < e.length; t++) Zl.add(e[t]);
  }
  var pn = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    wi = {},
    ga = {};
  function Qn(t) {
    return Gl.call(ga, t)
      ? !0
      : Gl.call(wi, t)
        ? !1
        : pn.test(t)
          ? (ga[t] = !0)
          : ((wi[t] = !0), !1);
  }
  function bs(t, e, l) {
    if (Qn(e))
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var i = e.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
  }
  function xs(t, e, l) {
    if (l === null) t.removeAttribute(e);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + l);
    }
  }
  function ii(t, e, l, i) {
    if (i === null) t.removeAttribute(l);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(l);
          return;
      }
      t.setAttributeNS(e, l, "" + i);
    }
  }
  function _n(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function V0(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function $_(t, e, l) {
    var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof i < "u" &&
      typeof i.get == "function" &&
      typeof i.set == "function"
    ) {
      var s = i.get,
        c = i.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return s.call(this);
          },
          set: function (m) {
            ((l = "" + m), c.call(this, m));
          },
        }),
        Object.defineProperty(t, e, { enumerable: i.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (m) {
            l = "" + m;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function _f(t) {
    if (!t._valueTracker) {
      var e = V0(t) ? "checked" : "value";
      t._valueTracker = $_(t, e, "" + t[e]);
    }
  }
  function Z0(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var l = e.getValue(),
      i = "";
    return (
      t && (i = V0(t) ? (t.checked ? "true" : "false") : t.value),
      (t = i),
      t !== l ? (e.setValue(t), !0) : !1
    );
  }
  function Ss(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var P_ = /[\n"\\]/g;
  function vn(t) {
    return t.replace(P_, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function vf(t, e, l, i, s, c, m, v) {
    ((t.name = ""),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (t.type = m)
        : t.removeAttribute("type"),
      e != null
        ? m === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + _n(e))
          : t.value !== "" + _n(e) && (t.value = "" + _n(e))
        : (m !== "submit" && m !== "reset") || t.removeAttribute("value"),
      e != null
        ? yf(t, m, _n(e))
        : l != null
          ? yf(t, m, _n(l))
          : i != null && t.removeAttribute("value"),
      s == null && c != null && (t.defaultChecked = !!c),
      s != null &&
        (t.checked = s && typeof s != "function" && typeof s != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.name = "" + _n(v))
        : t.removeAttribute("name"));
  }
  function Q0(t, e, l, i, s, c, m, v) {
    if (
      (c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (t.type = c),
      e != null || l != null)
    ) {
      if (!((c !== "submit" && c !== "reset") || e != null)) {
        _f(t);
        return;
      }
      ((l = l != null ? "" + _n(l) : ""),
        (e = e != null ? "" + _n(e) : l),
        v || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((i = i ?? s),
      (i = typeof i != "function" && typeof i != "symbol" && !!i),
      (t.checked = v ? t.checked : !!i),
      (t.defaultChecked = !!i),
      m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean" &&
        (t.name = m),
      _f(t));
  }
  function yf(t, e, l) {
    (e === "number" && Ss(t.ownerDocument) === t) ||
      t.defaultValue === "" + l ||
      (t.defaultValue = "" + l);
  }
  function $a(t, e, l, i) {
    if (((t = t.options), e)) {
      e = {};
      for (var s = 0; s < l.length; s++) e["$" + l[s]] = !0;
      for (l = 0; l < t.length; l++)
        ((s = e.hasOwnProperty("$" + t[l].value)),
          t[l].selected !== s && (t[l].selected = s),
          s && i && (t[l].defaultSelected = !0));
    } else {
      for (l = "" + _n(l), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === l) {
          ((t[s].selected = !0), i && (t[s].defaultSelected = !0));
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function k0(t, e, l) {
    if (
      e != null &&
      ((e = "" + _n(e)), e !== t.value && (t.value = e), l == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = l != null ? "" + _n(l) : "";
  }
  function K0(t, e, l, i) {
    if (e == null) {
      if (i != null) {
        if (l != null) throw Error(a(92));
        if (pt(i)) {
          if (1 < i.length) throw Error(a(93));
          i = i[0];
        }
        l = i;
      }
      (l == null && (l = ""), (e = l));
    }
    ((l = _n(e)),
      (t.defaultValue = l),
      (i = t.textContent),
      i === l && i !== "" && i !== null && (t.value = i),
      _f(t));
  }
  function Pa(t, e) {
    if (e) {
      var l = t.firstChild;
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var I_ = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function J0(t, e, l) {
    var i = e.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? i
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : i
        ? t.setProperty(e, l)
        : typeof l != "number" || l === 0 || I_.has(e)
          ? e === "float"
            ? (t.cssFloat = l)
            : (t[e] = ("" + l).trim())
          : (t[e] = l + "px");
  }
  function W0(t, e, l) {
    if (e != null && typeof e != "object") throw Error(a(62));
    if (((t = t.style), l != null)) {
      for (var i in l)
        !l.hasOwnProperty(i) ||
          (e != null && e.hasOwnProperty(i)) ||
          (i.indexOf("--") === 0
            ? t.setProperty(i, "")
            : i === "float"
              ? (t.cssFloat = "")
              : (t[i] = ""));
      for (var s in e)
        ((i = e[s]), e.hasOwnProperty(s) && l[s] !== i && J0(t, s, i));
    } else for (var c in e) e.hasOwnProperty(c) && J0(t, c, e[c]);
  }
  function bf(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var t2 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    e2 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ts(t) {
    return e2.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function ai() {}
  var xf = null;
  function Sf(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var Ia = null,
    tu = null;
  function F0(t) {
    var e = Ol(t);
    if (e && (t = e.stateNode)) {
      var l = t[Mt] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (vf(
              t,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name,
            ),
            (e = l.name),
            l.type === "radio" && e != null)
          ) {
            for (l = t; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + vn("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < l.length;
              e++
            ) {
              var i = l[e];
              if (i !== t && i.form === t.form) {
                var s = i[Mt] || null;
                if (!s) throw Error(a(90));
                vf(
                  i,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name,
                );
              }
            }
            for (e = 0; e < l.length; e++)
              ((i = l[e]), i.form === t.form && Z0(i));
          }
          break t;
        case "textarea":
          k0(t, l.value, l.defaultValue);
          break t;
        case "select":
          ((e = l.value), e != null && $a(t, !!l.multiple, e, !1));
      }
    }
  }
  var Tf = !1;
  function $0(t, e, l) {
    if (Tf) return t(e, l);
    Tf = !0;
    try {
      var i = t(e);
      return i;
    } finally {
      if (
        ((Tf = !1),
        (Ia !== null || tu !== null) &&
          (fc(), Ia && ((e = Ia), (t = tu), (tu = Ia = null), F0(e), t)))
      )
        for (e = 0; e < t.length; e++) F0(t[e]);
    }
  }
  function $u(t, e) {
    var l = t.stateNode;
    if (l === null) return null;
    var i = l[Mt] || null;
    if (i === null) return null;
    l = i[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((i = !i.disabled) ||
          ((t = t.type),
          (i = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !i));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (l && typeof l != "function") throw Error(a(231, e, typeof l));
    return l;
  }
  var ui = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Cf = !1;
  if (ui)
    try {
      var Pu = {};
      (Object.defineProperty(Pu, "passive", {
        get: function () {
          Cf = !0;
        },
      }),
        window.addEventListener("test", Pu, Pu),
        window.removeEventListener("test", Pu, Pu));
    } catch {
      Cf = !1;
    }
  var Di = null,
    Ef = null,
    Cs = null;
  function P0() {
    if (Cs) return Cs;
    var t,
      e = Ef,
      l = e.length,
      i,
      s = "value" in Di ? Di.value : Di.textContent,
      c = s.length;
    for (t = 0; t < l && e[t] === s[t]; t++);
    var m = l - t;
    for (i = 1; i <= m && e[l - i] === s[c - i]; i++);
    return (Cs = s.slice(t, 1 < i ? 1 - i : void 0));
  }
  function Es(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function zs() {
    return !0;
  }
  function I0() {
    return !1;
  }
  function wl(t) {
    function e(l, i, s, c, m) {
      ((this._reactName = l),
        (this._targetInst = s),
        (this.type = i),
        (this.nativeEvent = c),
        (this.target = m),
        (this.currentTarget = null));
      for (var v in t)
        t.hasOwnProperty(v) && ((l = t[v]), (this[v] = l ? l(c) : c[v]));
      return (
        (this.isDefaultPrevented = (
          c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1
        )
          ? zs
          : I0),
        (this.isPropagationStopped = I0),
        this
      );
    }
    return (
      y(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = zs));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = zs));
        },
        persist: function () {},
        isPersistent: zs,
      }),
      e
    );
  }
  var pa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Ms = wl(pa),
    Iu = y({}, pa, { view: 0, detail: 0 }),
    l2 = wl(Iu),
    zf,
    Mf,
    tr,
    As = y({}, Iu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Of,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== tr &&
              (tr && t.type === "mousemove"
                ? ((zf = t.screenX - tr.screenX), (Mf = t.screenY - tr.screenY))
                : (Mf = zf = 0),
              (tr = t)),
            zf);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Mf;
      },
    }),
    td = wl(As),
    n2 = y({}, As, { dataTransfer: 0 }),
    i2 = wl(n2),
    a2 = y({}, Iu, { relatedTarget: 0 }),
    Af = wl(a2),
    u2 = y({}, pa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    r2 = wl(u2),
    s2 = y({}, pa, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    c2 = wl(s2),
    f2 = y({}, pa, { data: 0 }),
    ed = wl(f2),
    o2 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    h2 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    d2 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function m2(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = d2[t])
        ? !!e[t]
        : !1;
  }
  function Of() {
    return m2;
  }
  var g2 = y({}, Iu, {
      key: function (t) {
        if (t.key) {
          var e = o2[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = Es(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? h2[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Of,
      charCode: function (t) {
        return t.type === "keypress" ? Es(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? Es(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    p2 = wl(g2),
    _2 = y({}, As, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    ld = wl(_2),
    v2 = y({}, Iu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Of,
    }),
    y2 = wl(v2),
    b2 = y({}, pa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    x2 = wl(b2),
    S2 = y({}, As, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    T2 = wl(S2),
    C2 = y({}, pa, { newState: 0, oldState: 0 }),
    E2 = wl(C2),
    z2 = [9, 13, 27, 32],
    wf = ui && "CompositionEvent" in window,
    er = null;
  ui && "documentMode" in document && (er = document.documentMode);
  var M2 = ui && "TextEvent" in window && !er,
    nd = ui && (!wf || (er && 8 < er && 11 >= er)),
    id = " ",
    ad = !1;
  function ud(t, e) {
    switch (t) {
      case "keyup":
        return z2.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function rd(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var eu = !1;
  function A2(t, e) {
    switch (t) {
      case "compositionend":
        return rd(e);
      case "keypress":
        return e.which !== 32 ? null : ((ad = !0), id);
      case "textInput":
        return ((t = e.data), t === id && ad ? null : t);
      default:
        return null;
    }
  }
  function O2(t, e) {
    if (eu)
      return t === "compositionend" || (!wf && ud(t, e))
        ? ((t = P0()), (Cs = Ef = Di = null), (eu = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return nd && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var w2 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function sd(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!w2[t.type] : e === "textarea";
  }
  function cd(t, e, l, i) {
    (Ia ? (tu ? tu.push(i) : (tu = [i])) : (Ia = i),
      (e = _c(e, "onChange")),
      0 < e.length &&
        ((l = new Ms("onChange", "change", null, l, i)),
        t.push({ event: l, listeners: e })));
  }
  var lr = null,
    nr = null;
  function D2(t) {
    Qm(t, 0);
  }
  function Os(t) {
    var e = Vn(t);
    if (Z0(e)) return t;
  }
  function fd(t, e) {
    if (t === "change") return e;
  }
  var od = !1;
  if (ui) {
    var Df;
    if (ui) {
      var Nf = "oninput" in document;
      if (!Nf) {
        var hd = document.createElement("div");
        (hd.setAttribute("oninput", "return;"),
          (Nf = typeof hd.oninput == "function"));
      }
      Df = Nf;
    } else Df = !1;
    od = Df && (!document.documentMode || 9 < document.documentMode);
  }
  function dd() {
    lr && (lr.detachEvent("onpropertychange", md), (nr = lr = null));
  }
  function md(t) {
    if (t.propertyName === "value" && Os(nr)) {
      var e = [];
      (cd(e, nr, t, Sf(t)), $0(D2, e));
    }
  }
  function N2(t, e, l) {
    t === "focusin"
      ? (dd(), (lr = e), (nr = l), lr.attachEvent("onpropertychange", md))
      : t === "focusout" && dd();
  }
  function R2(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Os(nr);
  }
  function j2(t, e) {
    if (t === "click") return Os(e);
  }
  function U2(t, e) {
    if (t === "input" || t === "change") return Os(e);
  }
  function H2(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Ql = typeof Object.is == "function" ? Object.is : H2;
  function ir(t, e) {
    if (Ql(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var l = Object.keys(t),
      i = Object.keys(e);
    if (l.length !== i.length) return !1;
    for (i = 0; i < l.length; i++) {
      var s = l[i];
      if (!Gl.call(e, s) || !Ql(t[s], e[s])) return !1;
    }
    return !0;
  }
  function gd(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function pd(t, e) {
    var l = gd(t);
    t = 0;
    for (var i; l; ) {
      if (l.nodeType === 3) {
        if (((i = t + l.textContent.length), t <= e && i >= e))
          return { node: l, offset: e - t };
        t = i;
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break t;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = gd(l);
    }
  }
  function _d(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? _d(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function vd(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Ss(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) t = e.contentWindow;
      else break;
      e = Ss(t.document);
    }
    return e;
  }
  function Rf(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Y2 = ui && "documentMode" in document && 11 >= document.documentMode,
    lu = null,
    jf = null,
    ar = null,
    Uf = !1;
  function yd(t, e, l) {
    var i =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Uf ||
      lu == null ||
      lu !== Ss(i) ||
      ((i = lu),
      "selectionStart" in i && Rf(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (ar && ir(ar, i)) ||
        ((ar = i),
        (i = _c(jf, "onSelect")),
        0 < i.length &&
          ((e = new Ms("onSelect", "select", null, e, l)),
          t.push({ event: e, listeners: i }),
          (e.target = lu))));
  }
  function _a(t, e) {
    var l = {};
    return (
      (l[t.toLowerCase()] = e.toLowerCase()),
      (l["Webkit" + t] = "webkit" + e),
      (l["Moz" + t] = "moz" + e),
      l
    );
  }
  var nu = {
      animationend: _a("Animation", "AnimationEnd"),
      animationiteration: _a("Animation", "AnimationIteration"),
      animationstart: _a("Animation", "AnimationStart"),
      transitionrun: _a("Transition", "TransitionRun"),
      transitionstart: _a("Transition", "TransitionStart"),
      transitioncancel: _a("Transition", "TransitionCancel"),
      transitionend: _a("Transition", "TransitionEnd"),
    },
    Hf = {},
    bd = {};
  ui &&
    ((bd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete nu.animationend.animation,
      delete nu.animationiteration.animation,
      delete nu.animationstart.animation),
    "TransitionEvent" in window || delete nu.transitionend.transition);
  function va(t) {
    if (Hf[t]) return Hf[t];
    if (!nu[t]) return t;
    var e = nu[t],
      l;
    for (l in e) if (e.hasOwnProperty(l) && l in bd) return (Hf[t] = e[l]);
    return t;
  }
  var xd = va("animationend"),
    Sd = va("animationiteration"),
    Td = va("animationstart"),
    B2 = va("transitionrun"),
    L2 = va("transitionstart"),
    q2 = va("transitioncancel"),
    Cd = va("transitionend"),
    Ed = new Map(),
    Yf =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Yf.push("scrollEnd");
  function Hn(t, e) {
    (Ed.set(t, e), Zn(e, [t]));
  }
  var ws =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    yn = [],
    iu = 0,
    Bf = 0;
  function Ds() {
    for (var t = iu, e = (Bf = iu = 0); e < t; ) {
      var l = yn[e];
      yn[e++] = null;
      var i = yn[e];
      yn[e++] = null;
      var s = yn[e];
      yn[e++] = null;
      var c = yn[e];
      if (((yn[e++] = null), i !== null && s !== null)) {
        var m = i.pending;
        (m === null ? (s.next = s) : ((s.next = m.next), (m.next = s)),
          (i.pending = s));
      }
      c !== 0 && zd(l, s, c);
    }
  }
  function Ns(t, e, l, i) {
    ((yn[iu++] = t),
      (yn[iu++] = e),
      (yn[iu++] = l),
      (yn[iu++] = i),
      (Bf |= i),
      (t.lanes |= i),
      (t = t.alternate),
      t !== null && (t.lanes |= i));
  }
  function Lf(t, e, l, i) {
    return (Ns(t, e, l, i), Rs(t));
  }
  function ya(t, e) {
    return (Ns(t, null, null, e), Rs(t));
  }
  function zd(t, e, l) {
    t.lanes |= l;
    var i = t.alternate;
    i !== null && (i.lanes |= l);
    for (var s = !1, c = t.return; c !== null; )
      ((c.childLanes |= l),
        (i = c.alternate),
        i !== null && (i.childLanes |= l),
        c.tag === 22 &&
          ((t = c.stateNode), t === null || t._visibility & 1 || (s = !0)),
        (t = c),
        (c = c.return));
    return t.tag === 3
      ? ((c = t.stateNode),
        s &&
          e !== null &&
          ((s = 31 - je(l)),
          (t = c.hiddenUpdates),
          (i = t[s]),
          i === null ? (t[s] = [e]) : i.push(e),
          (e.lane = l | 536870912)),
        c)
      : null;
  }
  function Rs(t) {
    if (50 < Mr) throw ((Mr = 0), (Wo = null), Error(a(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var au = {};
  function X2(t, e, l, i) {
    ((this.tag = t),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function kl(t, e, l, i) {
    return new X2(t, e, l, i);
  }
  function qf(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function ri(t, e) {
    var l = t.alternate;
    return (
      l === null
        ? ((l = kl(t.tag, e, t.key, t.mode)),
          (l.elementType = t.elementType),
          (l.type = t.type),
          (l.stateNode = t.stateNode),
          (l.alternate = t),
          (t.alternate = l))
        : ((l.pendingProps = e),
          (l.type = t.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = t.flags & 65011712),
      (l.childLanes = t.childLanes),
      (l.lanes = t.lanes),
      (l.child = t.child),
      (l.memoizedProps = t.memoizedProps),
      (l.memoizedState = t.memoizedState),
      (l.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (l.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (l.sibling = t.sibling),
      (l.index = t.index),
      (l.ref = t.ref),
      (l.refCleanup = t.refCleanup),
      l
    );
  }
  function Md(t, e) {
    t.flags &= 65011714;
    var l = t.alternate;
    return (
      l === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = l.childLanes),
          (t.lanes = l.lanes),
          (t.child = l.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = l.memoizedProps),
          (t.memoizedState = l.memoizedState),
          (t.updateQueue = l.updateQueue),
          (t.type = l.type),
          (e = l.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function js(t, e, l, i, s, c) {
    var m = 0;
    if (((i = t), typeof t == "function")) qf(t) && (m = 1);
    else if (typeof t == "string")
      m = kv(t, l, et.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case W:
          return ((t = kl(31, l, e, s)), (t.elementType = W), (t.lanes = c), t);
        case S:
          return ba(l.children, s, c, e);
        case w:
          ((m = 8), (s |= 24));
          break;
        case q:
          return (
            (t = kl(12, l, e, s | 2)),
            (t.elementType = q),
            (t.lanes = c),
            t
          );
        case L:
          return ((t = kl(13, l, e, s)), (t.elementType = L), (t.lanes = c), t);
        case K:
          return ((t = kl(19, l, e, s)), (t.elementType = K), (t.lanes = c), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case X:
                m = 10;
                break t;
              case Z:
                m = 9;
                break t;
              case H:
                m = 11;
                break t;
              case j:
                m = 14;
                break t;
              case F:
                ((m = 16), (i = null));
                break t;
            }
          ((m = 29),
            (l = Error(a(130, t === null ? "null" : typeof t, ""))),
            (i = null));
      }
    return (
      (e = kl(m, l, e, s)),
      (e.elementType = t),
      (e.type = i),
      (e.lanes = c),
      e
    );
  }
  function ba(t, e, l, i) {
    return ((t = kl(7, t, i, e)), (t.lanes = l), t);
  }
  function Xf(t, e, l) {
    return ((t = kl(6, t, null, e)), (t.lanes = l), t);
  }
  function Ad(t) {
    var e = kl(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function Gf(t, e, l) {
    return (
      (e = kl(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = l),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Od = new WeakMap();
  function bn(t, e) {
    if (typeof t == "object" && t !== null) {
      var l = Od.get(t);
      return l !== void 0
        ? l
        : ((e = { value: t, source: e, stack: ul(e) }), Od.set(t, e), e);
    }
    return { value: t, source: e, stack: ul(e) };
  }
  var uu = [],
    ru = 0,
    Us = null,
    ur = 0,
    xn = [],
    Sn = 0,
    Ni = null,
    kn = 1,
    Kn = "";
  function si(t, e) {
    ((uu[ru++] = ur), (uu[ru++] = Us), (Us = t), (ur = e));
  }
  function wd(t, e, l) {
    ((xn[Sn++] = kn), (xn[Sn++] = Kn), (xn[Sn++] = Ni), (Ni = t));
    var i = kn;
    t = Kn;
    var s = 32 - je(i) - 1;
    ((i &= ~(1 << s)), (l += 1));
    var c = 32 - je(e) + s;
    if (30 < c) {
      var m = s - (s % 5);
      ((c = (i & ((1 << m) - 1)).toString(32)),
        (i >>= m),
        (s -= m),
        (kn = (1 << (32 - je(e) + s)) | (l << s) | i),
        (Kn = c + t));
    } else ((kn = (1 << c) | (l << s) | i), (Kn = t));
  }
  function Vf(t) {
    t.return !== null && (si(t, 1), wd(t, 1, 0));
  }
  function Zf(t) {
    for (; t === Us; )
      ((Us = uu[--ru]), (uu[ru] = null), (ur = uu[--ru]), (uu[ru] = null));
    for (; t === Ni; )
      ((Ni = xn[--Sn]),
        (xn[Sn] = null),
        (Kn = xn[--Sn]),
        (xn[Sn] = null),
        (kn = xn[--Sn]),
        (xn[Sn] = null));
  }
  function Dd(t, e) {
    ((xn[Sn++] = kn),
      (xn[Sn++] = Kn),
      (xn[Sn++] = Ni),
      (kn = e.id),
      (Kn = e.overflow),
      (Ni = t));
  }
  var Ie = null,
    se = null,
    Lt = !1,
    Ri = null,
    Tn = !1,
    Qf = Error(a(519));
  function ji(t) {
    var e = Error(
      a(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (rr(bn(e, t)), Qf);
  }
  function Nd(t) {
    var e = t.stateNode,
      l = t.type,
      i = t.memoizedProps;
    switch (((e[Ct] = t), (e[Mt] = i), l)) {
      case "dialog":
        (Ut("cancel", e), Ut("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        Ut("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Or.length; l++) Ut(Or[l], e);
        break;
      case "source":
        Ut("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (Ut("error", e), Ut("load", e));
        break;
      case "details":
        Ut("toggle", e);
        break;
      case "input":
        (Ut("invalid", e),
          Q0(
            e,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0,
          ));
        break;
      case "select":
        Ut("invalid", e);
        break;
      case "textarea":
        (Ut("invalid", e), K0(e, i.value, i.defaultValue, i.children));
    }
    ((l = i.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      e.textContent === "" + l ||
      i.suppressHydrationWarning === !0 ||
      Wm(e.textContent, l)
        ? (i.popover != null && (Ut("beforetoggle", e), Ut("toggle", e)),
          i.onScroll != null && Ut("scroll", e),
          i.onScrollEnd != null && Ut("scrollend", e),
          i.onClick != null && (e.onclick = ai),
          (e = !0))
        : (e = !1),
      e || ji(t, !0));
  }
  function Rd(t) {
    for (Ie = t.return; Ie; )
      switch (Ie.tag) {
        case 5:
        case 31:
        case 13:
          Tn = !1;
          return;
        case 27:
        case 3:
          Tn = !0;
          return;
        default:
          Ie = Ie.return;
      }
  }
  function su(t) {
    if (t !== Ie) return !1;
    if (!Lt) return (Rd(t), (Lt = !0), !1);
    var e = t.tag,
      l;
    if (
      ((l = e !== 3 && e !== 27) &&
        ((l = e === 5) &&
          ((l = t.type),
          (l =
            !(l !== "form" && l !== "button") || fh(t.type, t.memoizedProps))),
        (l = !l)),
      l && se && ji(t),
      Rd(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(a(317));
      se = ig(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(a(317));
      se = ig(t);
    } else
      e === 27
        ? ((e = se), Ji(t.type) ? ((t = gh), (gh = null), (se = t)) : (se = e))
        : (se = Ie ? En(t.stateNode.nextSibling) : null);
    return !0;
  }
  function xa() {
    ((se = Ie = null), (Lt = !1));
  }
  function kf() {
    var t = Ri;
    return (
      t !== null &&
        (jl === null ? (jl = t) : jl.push.apply(jl, t), (Ri = null)),
      t
    );
  }
  function rr(t) {
    Ri === null ? (Ri = [t]) : Ri.push(t);
  }
  var Kf = C(null),
    Sa = null,
    ci = null;
  function Ui(t, e, l) {
    (tt(Kf, e._currentValue), (e._currentValue = l));
  }
  function fi(t) {
    ((t._currentValue = Kf.current), G(Kf));
  }
  function Jf(t, e, l) {
    for (; t !== null; ) {
      var i = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
          : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
        t === l)
      )
        break;
      t = t.return;
    }
  }
  function Wf(t, e, l, i) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var c = s.dependencies;
      if (c !== null) {
        var m = s.child;
        c = c.firstContext;
        t: for (; c !== null; ) {
          var v = c;
          c = s;
          for (var T = 0; T < e.length; T++)
            if (v.context === e[T]) {
              ((c.lanes |= l),
                (v = c.alternate),
                v !== null && (v.lanes |= l),
                Jf(c.return, l, t),
                i || (m = null));
              break t;
            }
          c = v.next;
        }
      } else if (s.tag === 18) {
        if (((m = s.return), m === null)) throw Error(a(341));
        ((m.lanes |= l),
          (c = m.alternate),
          c !== null && (c.lanes |= l),
          Jf(m, l, t),
          (m = null));
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === t) {
            m = null;
            break;
          }
          if (((s = m.sibling), s !== null)) {
            ((s.return = m.return), (m = s));
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function cu(t, e, l, i) {
    t = null;
    for (var s = e, c = !1; s !== null; ) {
      if (!c) {
        if ((s.flags & 524288) !== 0) c = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(a(387));
        if (((m = m.memoizedProps), m !== null)) {
          var v = s.type;
          Ql(s.pendingProps.value, m.value) ||
            (t !== null ? t.push(v) : (t = [v]));
        }
      } else if (s === mt.current) {
        if (((m = s.alternate), m === null)) throw Error(a(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
          (t !== null ? t.push(jr) : (t = [jr]));
      }
      s = s.return;
    }
    (t !== null && Wf(e, t, l, i), (e.flags |= 262144));
  }
  function Hs(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Ql(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ta(t) {
    ((Sa = t),
      (ci = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function tl(t) {
    return jd(Sa, t);
  }
  function Ys(t, e) {
    return (Sa === null && Ta(t), jd(t, e));
  }
  function jd(t, e) {
    var l = e._currentValue;
    if (((e = { context: e, memoizedValue: l, next: null }), ci === null)) {
      if (t === null) throw Error(a(308));
      ((ci = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else ci = ci.next = e;
    return l;
  }
  var G2 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, i) {
                  t.push(i);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (l) {
                  return l();
                }));
            };
          },
    V2 = o.unstable_scheduleCallback,
    Z2 = o.unstable_NormalPriority,
    Ue = {
      $$typeof: X,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ff() {
    return { controller: new G2(), data: new Map(), refCount: 0 };
  }
  function sr(t) {
    (t.refCount--,
      t.refCount === 0 &&
        V2(Z2, function () {
          t.controller.abort();
        }));
  }
  var cr = null,
    $f = 0,
    fu = 0,
    ou = null;
  function Q2(t, e) {
    if (cr === null) {
      var l = (cr = []);
      (($f = 0),
        (fu = eh()),
        (ou = {
          status: "pending",
          value: void 0,
          then: function (i) {
            l.push(i);
          },
        }));
    }
    return ($f++, e.then(Ud, Ud), e);
  }
  function Ud() {
    if (--$f === 0 && cr !== null) {
      ou !== null && (ou.status = "fulfilled");
      var t = cr;
      ((cr = null), (fu = 0), (ou = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function k2(t, e) {
    var l = [],
      i = {
        status: "pending",
        value: null,
        reason: null,
        then: function (s) {
          l.push(s);
        },
      };
    return (
      t.then(
        function () {
          ((i.status = "fulfilled"), (i.value = e));
          for (var s = 0; s < l.length; s++) (0, l[s])(e);
        },
        function (s) {
          for (i.status = "rejected", i.reason = s, s = 0; s < l.length; s++)
            (0, l[s])(void 0);
        },
      ),
      i
    );
  }
  var Hd = D.S;
  D.S = function (t, e) {
    ((ym = ze()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        Q2(t, e),
      Hd !== null && Hd(t, e));
  };
  var Ca = C(null);
  function Pf() {
    var t = Ca.current;
    return t !== null ? t : te.pooledCache;
  }
  function Bs(t, e) {
    e === null ? tt(Ca, Ca.current) : tt(Ca, e.pool);
  }
  function Yd() {
    var t = Pf();
    return t === null ? null : { parent: Ue._currentValue, pool: t };
  }
  var hu = Error(a(460)),
    If = Error(a(474)),
    Ls = Error(a(542)),
    qs = { then: function () {} };
  function Bd(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function Ld(t, e, l) {
    switch (
      ((l = t[l]),
      l === void 0 ? t.push(e) : l !== e && (e.then(ai, ai), (e = l)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Xd(t), t);
      default:
        if (typeof e.status == "string") e.then(ai, ai);
        else {
          if (((t = te), t !== null && 100 < t.shellSuspendCounter))
            throw Error(a(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "fulfilled"), (s.value = i));
                }
              },
              function (i) {
                if (e.status === "pending") {
                  var s = e;
                  ((s.status = "rejected"), (s.reason = i));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Xd(t), t);
        }
        throw ((za = e), hu);
    }
  }
  function Ea(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (l) {
      throw l !== null && typeof l == "object" && typeof l.then == "function"
        ? ((za = l), hu)
        : l;
    }
  }
  var za = null;
  function qd() {
    if (za === null) throw Error(a(459));
    var t = za;
    return ((za = null), t);
  }
  function Xd(t) {
    if (t === hu || t === Ls) throw Error(a(483));
  }
  var du = null,
    fr = 0;
  function Xs(t) {
    var e = fr;
    return ((fr += 1), du === null && (du = []), Ld(du, t, e));
  }
  function or(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function Gs(t, e) {
    throw e.$$typeof === x
      ? Error(a(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          a(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Gd(t) {
    function e(O, E) {
      if (t) {
        var N = O.deletions;
        N === null ? ((O.deletions = [E]), (O.flags |= 16)) : N.push(E);
      }
    }
    function l(O, E) {
      if (!t) return null;
      for (; E !== null; ) (e(O, E), (E = E.sibling));
      return null;
    }
    function i(O) {
      for (var E = new Map(); O !== null; )
        (O.key !== null ? E.set(O.key, O) : E.set(O.index, O), (O = O.sibling));
      return E;
    }
    function s(O, E) {
      return ((O = ri(O, E)), (O.index = 0), (O.sibling = null), O);
    }
    function c(O, E, N) {
      return (
        (O.index = N),
        t
          ? ((N = O.alternate),
            N !== null
              ? ((N = N.index), N < E ? ((O.flags |= 67108866), E) : N)
              : ((O.flags |= 67108866), E))
          : ((O.flags |= 1048576), E)
      );
    }
    function m(O) {
      return (t && O.alternate === null && (O.flags |= 67108866), O);
    }
    function v(O, E, N, k) {
      return E === null || E.tag !== 6
        ? ((E = Xf(N, O.mode, k)), (E.return = O), E)
        : ((E = s(E, N)), (E.return = O), E);
    }
    function T(O, E, N, k) {
      var ht = N.type;
      return ht === S
        ? V(O, E, N.props.children, k, N.key)
        : E !== null &&
            (E.elementType === ht ||
              (typeof ht == "object" &&
                ht !== null &&
                ht.$$typeof === F &&
                Ea(ht) === E.type))
          ? ((E = s(E, N.props)), or(E, N), (E.return = O), E)
          : ((E = js(N.type, N.key, N.props, null, O.mode, k)),
            or(E, N),
            (E.return = O),
            E);
    }
    function R(O, E, N, k) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== N.containerInfo ||
        E.stateNode.implementation !== N.implementation
        ? ((E = Gf(N, O.mode, k)), (E.return = O), E)
        : ((E = s(E, N.children || [])), (E.return = O), E);
    }
    function V(O, E, N, k, ht) {
      return E === null || E.tag !== 7
        ? ((E = ba(N, O.mode, k, ht)), (E.return = O), E)
        : ((E = s(E, N)), (E.return = O), E);
    }
    function J(O, E, N) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return ((E = Xf("" + E, O.mode, N)), (E.return = O), E);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case b:
            return (
              (N = js(E.type, E.key, E.props, null, O.mode, N)),
              or(N, E),
              (N.return = O),
              N
            );
          case z:
            return ((E = Gf(E, O.mode, N)), (E.return = O), E);
          case F:
            return ((E = Ea(E)), J(O, E, N));
        }
        if (pt(E) || P(E))
          return ((E = ba(E, O.mode, N, null)), (E.return = O), E);
        if (typeof E.then == "function") return J(O, Xs(E), N);
        if (E.$$typeof === X) return J(O, Ys(O, E), N);
        Gs(O, E);
      }
      return null;
    }
    function U(O, E, N, k) {
      var ht = E !== null ? E.key : null;
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return ht !== null ? null : v(O, E, "" + N, k);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case b:
            return N.key === ht ? T(O, E, N, k) : null;
          case z:
            return N.key === ht ? R(O, E, N, k) : null;
          case F:
            return ((N = Ea(N)), U(O, E, N, k));
        }
        if (pt(N) || P(N)) return ht !== null ? null : V(O, E, N, k, null);
        if (typeof N.then == "function") return U(O, E, Xs(N), k);
        if (N.$$typeof === X) return U(O, E, Ys(O, N), k);
        Gs(O, N);
      }
      return null;
    }
    function Y(O, E, N, k, ht) {
      if (
        (typeof k == "string" && k !== "") ||
        typeof k == "number" ||
        typeof k == "bigint"
      )
        return ((O = O.get(N) || null), v(E, O, "" + k, ht));
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case b:
            return (
              (O = O.get(k.key === null ? N : k.key) || null),
              T(E, O, k, ht)
            );
          case z:
            return (
              (O = O.get(k.key === null ? N : k.key) || null),
              R(E, O, k, ht)
            );
          case F:
            return ((k = Ea(k)), Y(O, E, N, k, ht));
        }
        if (pt(k) || P(k))
          return ((O = O.get(N) || null), V(E, O, k, ht, null));
        if (typeof k.then == "function") return Y(O, E, N, Xs(k), ht);
        if (k.$$typeof === X) return Y(O, E, N, Ys(E, k), ht);
        Gs(E, k);
      }
      return null;
    }
    function nt(O, E, N, k) {
      for (
        var ht = null, Vt = null, at = E, Tt = (E = 0), Bt = null;
        at !== null && Tt < N.length;
        Tt++
      ) {
        at.index > Tt ? ((Bt = at), (at = null)) : (Bt = at.sibling);
        var Zt = U(O, at, N[Tt], k);
        if (Zt === null) {
          at === null && (at = Bt);
          break;
        }
        (t && at && Zt.alternate === null && e(O, at),
          (E = c(Zt, E, Tt)),
          Vt === null ? (ht = Zt) : (Vt.sibling = Zt),
          (Vt = Zt),
          (at = Bt));
      }
      if (Tt === N.length) return (l(O, at), Lt && si(O, Tt), ht);
      if (at === null) {
        for (; Tt < N.length; Tt++)
          ((at = J(O, N[Tt], k)),
            at !== null &&
              ((E = c(at, E, Tt)),
              Vt === null ? (ht = at) : (Vt.sibling = at),
              (Vt = at)));
        return (Lt && si(O, Tt), ht);
      }
      for (at = i(at); Tt < N.length; Tt++)
        ((Bt = Y(at, O, Tt, N[Tt], k)),
          Bt !== null &&
            (t &&
              Bt.alternate !== null &&
              at.delete(Bt.key === null ? Tt : Bt.key),
            (E = c(Bt, E, Tt)),
            Vt === null ? (ht = Bt) : (Vt.sibling = Bt),
            (Vt = Bt)));
      return (
        t &&
          at.forEach(function (Ii) {
            return e(O, Ii);
          }),
        Lt && si(O, Tt),
        ht
      );
    }
    function gt(O, E, N, k) {
      if (N == null) throw Error(a(151));
      for (
        var ht = null,
          Vt = null,
          at = E,
          Tt = (E = 0),
          Bt = null,
          Zt = N.next();
        at !== null && !Zt.done;
        Tt++, Zt = N.next()
      ) {
        at.index > Tt ? ((Bt = at), (at = null)) : (Bt = at.sibling);
        var Ii = U(O, at, Zt.value, k);
        if (Ii === null) {
          at === null && (at = Bt);
          break;
        }
        (t && at && Ii.alternate === null && e(O, at),
          (E = c(Ii, E, Tt)),
          Vt === null ? (ht = Ii) : (Vt.sibling = Ii),
          (Vt = Ii),
          (at = Bt));
      }
      if (Zt.done) return (l(O, at), Lt && si(O, Tt), ht);
      if (at === null) {
        for (; !Zt.done; Tt++, Zt = N.next())
          ((Zt = J(O, Zt.value, k)),
            Zt !== null &&
              ((E = c(Zt, E, Tt)),
              Vt === null ? (ht = Zt) : (Vt.sibling = Zt),
              (Vt = Zt)));
        return (Lt && si(O, Tt), ht);
      }
      for (at = i(at); !Zt.done; Tt++, Zt = N.next())
        ((Zt = Y(at, O, Tt, Zt.value, k)),
          Zt !== null &&
            (t &&
              Zt.alternate !== null &&
              at.delete(Zt.key === null ? Tt : Zt.key),
            (E = c(Zt, E, Tt)),
            Vt === null ? (ht = Zt) : (Vt.sibling = Zt),
            (Vt = Zt)));
      return (
        t &&
          at.forEach(function (ny) {
            return e(O, ny);
          }),
        Lt && si(O, Tt),
        ht
      );
    }
    function It(O, E, N, k) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === S &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case b:
            t: {
              for (var ht = N.key; E !== null; ) {
                if (E.key === ht) {
                  if (((ht = N.type), ht === S)) {
                    if (E.tag === 7) {
                      (l(O, E.sibling),
                        (k = s(E, N.props.children)),
                        (k.return = O),
                        (O = k));
                      break t;
                    }
                  } else if (
                    E.elementType === ht ||
                    (typeof ht == "object" &&
                      ht !== null &&
                      ht.$$typeof === F &&
                      Ea(ht) === E.type)
                  ) {
                    (l(O, E.sibling),
                      (k = s(E, N.props)),
                      or(k, N),
                      (k.return = O),
                      (O = k));
                    break t;
                  }
                  l(O, E);
                  break;
                } else e(O, E);
                E = E.sibling;
              }
              N.type === S
                ? ((k = ba(N.props.children, O.mode, k, N.key)),
                  (k.return = O),
                  (O = k))
                : ((k = js(N.type, N.key, N.props, null, O.mode, k)),
                  or(k, N),
                  (k.return = O),
                  (O = k));
            }
            return m(O);
          case z:
            t: {
              for (ht = N.key; E !== null; ) {
                if (E.key === ht)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === N.containerInfo &&
                    E.stateNode.implementation === N.implementation
                  ) {
                    (l(O, E.sibling),
                      (k = s(E, N.children || [])),
                      (k.return = O),
                      (O = k));
                    break t;
                  } else {
                    l(O, E);
                    break;
                  }
                else e(O, E);
                E = E.sibling;
              }
              ((k = Gf(N, O.mode, k)), (k.return = O), (O = k));
            }
            return m(O);
          case F:
            return ((N = Ea(N)), It(O, E, N, k));
        }
        if (pt(N)) return nt(O, E, N, k);
        if (P(N)) {
          if (((ht = P(N)), typeof ht != "function")) throw Error(a(150));
          return ((N = ht.call(N)), gt(O, E, N, k));
        }
        if (typeof N.then == "function") return It(O, E, Xs(N), k);
        if (N.$$typeof === X) return It(O, E, Ys(O, N), k);
        Gs(O, N);
      }
      return (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
        ? ((N = "" + N),
          E !== null && E.tag === 6
            ? (l(O, E.sibling), (k = s(E, N)), (k.return = O), (O = k))
            : (l(O, E), (k = Xf(N, O.mode, k)), (k.return = O), (O = k)),
          m(O))
        : l(O, E);
    }
    return function (O, E, N, k) {
      try {
        fr = 0;
        var ht = It(O, E, N, k);
        return ((du = null), ht);
      } catch (at) {
        if (at === hu || at === Ls) throw at;
        var Vt = kl(29, at, null, O.mode);
        return ((Vt.lanes = k), (Vt.return = O), Vt);
      }
    };
  }
  var Ma = Gd(!0),
    Vd = Gd(!1),
    Hi = !1;
  function to(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function eo(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Yi(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Bi(t, e, l) {
    var i = t.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (kt & 2) !== 0)) {
      var s = i.pending;
      return (
        s === null ? (e.next = e) : ((e.next = s.next), (s.next = e)),
        (i.pending = e),
        (e = Rs(t)),
        zd(t, null, l),
        e
      );
    }
    return (Ns(t, i, e, l), Rs(t));
  }
  function hr(t, e, l) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194048) !== 0))
    ) {
      var i = e.lanes;
      ((i &= t.pendingLanes), (l |= i), (e.lanes = l), bt(t, l));
    }
  }
  function lo(t, e) {
    var l = t.updateQueue,
      i = t.alternate;
    if (i !== null && ((i = i.updateQueue), l === i)) {
      var s = null,
        c = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var m = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          (c === null ? (s = c = m) : (c = c.next = m), (l = l.next));
        } while (l !== null);
        c === null ? (s = c = e) : (c = c.next = e);
      } else s = c = e;
      ((l = {
        baseState: i.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: c,
        shared: i.shared,
        callbacks: i.callbacks,
      }),
        (t.updateQueue = l));
      return;
    }
    ((t = l.lastBaseUpdate),
      t === null ? (l.firstBaseUpdate = e) : (t.next = e),
      (l.lastBaseUpdate = e));
  }
  var no = !1;
  function dr() {
    if (no) {
      var t = ou;
      if (t !== null) throw t;
    }
  }
  function mr(t, e, l, i) {
    no = !1;
    var s = t.updateQueue;
    Hi = !1;
    var c = s.firstBaseUpdate,
      m = s.lastBaseUpdate,
      v = s.shared.pending;
    if (v !== null) {
      s.shared.pending = null;
      var T = v,
        R = T.next;
      ((T.next = null), m === null ? (c = R) : (m.next = R), (m = T));
      var V = t.alternate;
      V !== null &&
        ((V = V.updateQueue),
        (v = V.lastBaseUpdate),
        v !== m &&
          (v === null ? (V.firstBaseUpdate = R) : (v.next = R),
          (V.lastBaseUpdate = T)));
    }
    if (c !== null) {
      var J = s.baseState;
      ((m = 0), (V = R = T = null), (v = c));
      do {
        var U = v.lane & -536870913,
          Y = U !== v.lane;
        if (Y ? (Yt & U) === U : (i & U) === U) {
          (U !== 0 && U === fu && (no = !0),
            V !== null &&
              (V = V.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var nt = t,
              gt = v;
            U = e;
            var It = l;
            switch (gt.tag) {
              case 1:
                if (((nt = gt.payload), typeof nt == "function")) {
                  J = nt.call(It, J, U);
                  break t;
                }
                J = nt;
                break t;
              case 3:
                nt.flags = (nt.flags & -65537) | 128;
              case 0:
                if (
                  ((nt = gt.payload),
                  (U = typeof nt == "function" ? nt.call(It, J, U) : nt),
                  U == null)
                )
                  break t;
                J = y({}, J, U);
                break t;
              case 2:
                Hi = !0;
            }
          }
          ((U = v.callback),
            U !== null &&
              ((t.flags |= 64),
              Y && (t.flags |= 8192),
              (Y = s.callbacks),
              Y === null ? (s.callbacks = [U]) : Y.push(U)));
        } else
          ((Y = {
            lane: U,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            V === null ? ((R = V = Y), (T = J)) : (V = V.next = Y),
            (m |= U));
        if (((v = v.next), v === null)) {
          if (((v = s.shared.pending), v === null)) break;
          ((Y = v),
            (v = Y.next),
            (Y.next = null),
            (s.lastBaseUpdate = Y),
            (s.shared.pending = null));
        }
      } while (!0);
      (V === null && (T = J),
        (s.baseState = T),
        (s.firstBaseUpdate = R),
        (s.lastBaseUpdate = V),
        c === null && (s.shared.lanes = 0),
        (Vi |= m),
        (t.lanes = m),
        (t.memoizedState = J));
    }
  }
  function Zd(t, e) {
    if (typeof t != "function") throw Error(a(191, t));
    t.call(e);
  }
  function Qd(t, e) {
    var l = t.callbacks;
    if (l !== null)
      for (t.callbacks = null, t = 0; t < l.length; t++) Zd(l[t], e);
  }
  var mu = C(null),
    Vs = C(0);
  function kd(t, e) {
    ((t = yi), tt(Vs, t), tt(mu, e), (yi = t | e.baseLanes));
  }
  function io() {
    (tt(Vs, yi), tt(mu, mu.current));
  }
  function ao() {
    ((yi = Vs.current), G(mu), G(Vs));
  }
  var Kl = C(null),
    Cn = null;
  function Li(t) {
    var e = t.alternate;
    (tt(Ae, Ae.current & 1),
      tt(Kl, t),
      Cn === null &&
        (e === null || mu.current !== null || e.memoizedState !== null) &&
        (Cn = t));
  }
  function uo(t) {
    (tt(Ae, Ae.current), tt(Kl, t), Cn === null && (Cn = t));
  }
  function Kd(t) {
    t.tag === 22
      ? (tt(Ae, Ae.current), tt(Kl, t), Cn === null && (Cn = t))
      : qi();
  }
  function qi() {
    (tt(Ae, Ae.current), tt(Kl, Kl.current));
  }
  function Jl(t) {
    (G(Kl), Cn === t && (Cn = null), G(Ae));
  }
  var Ae = C(0);
  function Zs(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l !== null && ((l = l.dehydrated), l === null || dh(l) || mh(l)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var oi = 0,
    St = null,
    $t = null,
    He = null,
    Qs = !1,
    gu = !1,
    Aa = !1,
    ks = 0,
    gr = 0,
    pu = null,
    K2 = 0;
  function Te() {
    throw Error(a(321));
  }
  function ro(t, e) {
    if (e === null) return !1;
    for (var l = 0; l < e.length && l < t.length; l++)
      if (!Ql(t[l], e[l])) return !1;
    return !0;
  }
  function so(t, e, l, i, s, c) {
    return (
      (oi = c),
      (St = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (D.H = t === null || t.memoizedState === null ? w1 : Co),
      (Aa = !1),
      (c = l(i, s)),
      (Aa = !1),
      gu && (c = Wd(e, l, i, s)),
      Jd(t),
      c
    );
  }
  function Jd(t) {
    D.H = vr;
    var e = $t !== null && $t.next !== null;
    if (((oi = 0), (He = $t = St = null), (Qs = !1), (gr = 0), (pu = null), e))
      throw Error(a(300));
    t === null ||
      Ye ||
      ((t = t.dependencies), t !== null && Hs(t) && (Ye = !0));
  }
  function Wd(t, e, l, i) {
    St = t;
    var s = 0;
    do {
      if ((gu && (pu = null), (gr = 0), (gu = !1), 25 <= s))
        throw Error(a(301));
      if (((s += 1), (He = $t = null), t.updateQueue != null)) {
        var c = t.updateQueue;
        ((c.lastEffect = null),
          (c.events = null),
          (c.stores = null),
          c.memoCache != null && (c.memoCache.index = 0));
      }
      ((D.H = D1), (c = e(l, i)));
    } while (gu);
    return c;
  }
  function J2() {
    var t = D.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? pr(e) : e),
      (t = t.useState()[0]),
      ($t !== null ? $t.memoizedState : null) !== t && (St.flags |= 1024),
      e
    );
  }
  function co() {
    var t = ks !== 0;
    return ((ks = 0), t);
  }
  function fo(t, e, l) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l));
  }
  function oo(t) {
    if (Qs) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      Qs = !1;
    }
    ((oi = 0), (He = $t = St = null), (gu = !1), (gr = ks = 0), (pu = null));
  }
  function yl() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (He === null ? (St.memoizedState = He = t) : (He = He.next = t), He);
  }
  function Oe() {
    if ($t === null) {
      var t = St.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = $t.next;
    var e = He === null ? St.memoizedState : He.next;
    if (e !== null) ((He = e), ($t = t));
    else {
      if (t === null)
        throw St.alternate === null ? Error(a(467)) : Error(a(310));
      (($t = t),
        (t = {
          memoizedState: $t.memoizedState,
          baseState: $t.baseState,
          baseQueue: $t.baseQueue,
          queue: $t.queue,
          next: null,
        }),
        He === null ? (St.memoizedState = He = t) : (He = He.next = t));
    }
    return He;
  }
  function Ks() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function pr(t) {
    var e = gr;
    return (
      (gr += 1),
      pu === null && (pu = []),
      (t = Ld(pu, t, e)),
      (e = St),
      (He === null ? e.memoizedState : He.next) === null &&
        ((e = e.alternate),
        (D.H = e === null || e.memoizedState === null ? w1 : Co)),
      t
    );
  }
  function Js(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return pr(t);
      if (t.$$typeof === X) return tl(t);
    }
    throw Error(a(438, String(t)));
  }
  function ho(t) {
    var e = null,
      l = St.updateQueue;
    if ((l !== null && (e = l.memoCache), e == null)) {
      var i = St.alternate;
      i !== null &&
        ((i = i.updateQueue),
        i !== null &&
          ((i = i.memoCache),
          i != null &&
            (e = {
              data: i.data.map(function (s) {
                return s.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      l === null && ((l = Ks()), (St.updateQueue = l)),
      (l.memoCache = e),
      (l = e.data[e.index]),
      l === void 0)
    )
      for (l = e.data[e.index] = Array(t), i = 0; i < t; i++) l[i] = $;
    return (e.index++, l);
  }
  function hi(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ws(t) {
    var e = Oe();
    return mo(e, $t, t);
  }
  function mo(t, e, l) {
    var i = t.queue;
    if (i === null) throw Error(a(311));
    i.lastRenderedReducer = l;
    var s = t.baseQueue,
      c = i.pending;
    if (c !== null) {
      if (s !== null) {
        var m = s.next;
        ((s.next = c.next), (c.next = m));
      }
      ((e.baseQueue = s = c), (i.pending = null));
    }
    if (((c = t.baseState), s === null)) t.memoizedState = c;
    else {
      e = s.next;
      var v = (m = null),
        T = null,
        R = e,
        V = !1;
      do {
        var J = R.lane & -536870913;
        if (J !== R.lane ? (Yt & J) === J : (oi & J) === J) {
          var U = R.revertLane;
          if (U === 0)
            (T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: R.action,
                  hasEagerState: R.hasEagerState,
                  eagerState: R.eagerState,
                  next: null,
                }),
              J === fu && (V = !0));
          else if ((oi & U) === U) {
            ((R = R.next), U === fu && (V = !0));
            continue;
          } else
            ((J = {
              lane: 0,
              revertLane: R.revertLane,
              gesture: null,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null,
            }),
              T === null ? ((v = T = J), (m = c)) : (T = T.next = J),
              (St.lanes |= U),
              (Vi |= U));
          ((J = R.action),
            Aa && l(c, J),
            (c = R.hasEagerState ? R.eagerState : l(c, J)));
        } else
          ((U = {
            lane: J,
            revertLane: R.revertLane,
            gesture: R.gesture,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null,
          }),
            T === null ? ((v = T = U), (m = c)) : (T = T.next = U),
            (St.lanes |= J),
            (Vi |= J));
        R = R.next;
      } while (R !== null && R !== e);
      if (
        (T === null ? (m = c) : (T.next = v),
        !Ql(c, t.memoizedState) && ((Ye = !0), V && ((l = ou), l !== null)))
      )
        throw l;
      ((t.memoizedState = c),
        (t.baseState = m),
        (t.baseQueue = T),
        (i.lastRenderedState = c));
    }
    return (s === null && (i.lanes = 0), [t.memoizedState, i.dispatch]);
  }
  function go(t) {
    var e = Oe(),
      l = e.queue;
    if (l === null) throw Error(a(311));
    l.lastRenderedReducer = t;
    var i = l.dispatch,
      s = l.pending,
      c = e.memoizedState;
    if (s !== null) {
      l.pending = null;
      var m = (s = s.next);
      do ((c = t(c, m.action)), (m = m.next));
      while (m !== s);
      (Ql(c, e.memoizedState) || (Ye = !0),
        (e.memoizedState = c),
        e.baseQueue === null && (e.baseState = c),
        (l.lastRenderedState = c));
    }
    return [c, i];
  }
  function Fd(t, e, l) {
    var i = St,
      s = Oe(),
      c = Lt;
    if (c) {
      if (l === void 0) throw Error(a(407));
      l = l();
    } else l = e();
    var m = !Ql(($t || s).memoizedState, l);
    if (
      (m && ((s.memoizedState = l), (Ye = !0)),
      (s = s.queue),
      vo(Id.bind(null, i, s, t), [t]),
      s.getSnapshot !== e || m || (He !== null && He.memoizedState.tag & 1))
    ) {
      if (
        ((i.flags |= 2048),
        _u(9, { destroy: void 0 }, Pd.bind(null, i, s, l, e), null),
        te === null)
      )
        throw Error(a(349));
      c || (oi & 127) !== 0 || $d(i, e, l);
    }
    return l;
  }
  function $d(t, e, l) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: l }),
      (e = St.updateQueue),
      e === null
        ? ((e = Ks()), (St.updateQueue = e), (e.stores = [t]))
        : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t)));
  }
  function Pd(t, e, l, i) {
    ((e.value = l), (e.getSnapshot = i), t1(e) && e1(t));
  }
  function Id(t, e, l) {
    return l(function () {
      t1(e) && e1(t);
    });
  }
  function t1(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var l = e();
      return !Ql(t, l);
    } catch {
      return !0;
    }
  }
  function e1(t) {
    var e = ya(t, 2);
    e !== null && Ul(e, t, 2);
  }
  function po(t) {
    var e = yl();
    if (typeof t == "function") {
      var l = t;
      if (((t = l()), Aa)) {
        pl(!0);
        try {
          l();
        } finally {
          pl(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hi,
        lastRenderedState: t,
      }),
      e
    );
  }
  function l1(t, e, l, i) {
    return ((t.baseState = l), mo(t, $t, typeof i == "function" ? i : hi));
  }
  function W2(t, e, l, i, s) {
    if (Ps(t)) throw Error(a(485));
    if (((t = e.action), t !== null)) {
      var c = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          c.listeners.push(m);
        },
      };
      (D.T !== null ? l(!0) : (c.isTransition = !1),
        i(c),
        (l = e.pending),
        l === null
          ? ((c.next = e.pending = c), n1(e, c))
          : ((c.next = l.next), (e.pending = l.next = c)));
    }
  }
  function n1(t, e) {
    var l = e.action,
      i = e.payload,
      s = t.state;
    if (e.isTransition) {
      var c = D.T,
        m = {};
      D.T = m;
      try {
        var v = l(s, i),
          T = D.S;
        (T !== null && T(m, v), i1(t, e, v));
      } catch (R) {
        _o(t, e, R);
      } finally {
        (c !== null && m.types !== null && (c.types = m.types), (D.T = c));
      }
    } else
      try {
        ((c = l(s, i)), i1(t, e, c));
      } catch (R) {
        _o(t, e, R);
      }
  }
  function i1(t, e, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (i) {
            a1(t, e, i);
          },
          function (i) {
            return _o(t, e, i);
          },
        )
      : a1(t, e, l);
  }
  function a1(t, e, l) {
    ((e.status = "fulfilled"),
      (e.value = l),
      u1(e),
      (t.state = l),
      (e = t.pending),
      e !== null &&
        ((l = e.next),
        l === e ? (t.pending = null) : ((l = l.next), (e.next = l), n1(t, l))));
  }
  function _o(t, e, l) {
    var i = t.pending;
    if (((t.pending = null), i !== null)) {
      i = i.next;
      do ((e.status = "rejected"), (e.reason = l), u1(e), (e = e.next));
      while (e !== i);
    }
    t.action = null;
  }
  function u1(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function r1(t, e) {
    return e;
  }
  function s1(t, e) {
    if (Lt) {
      var l = te.formState;
      if (l !== null) {
        t: {
          var i = St;
          if (Lt) {
            if (se) {
              e: {
                for (var s = se, c = Tn; s.nodeType !== 8; ) {
                  if (!c) {
                    s = null;
                    break e;
                  }
                  if (((s = En(s.nextSibling)), s === null)) {
                    s = null;
                    break e;
                  }
                }
                ((c = s.data), (s = c === "F!" || c === "F" ? s : null));
              }
              if (s) {
                ((se = En(s.nextSibling)), (i = s.data === "F!"));
                break t;
              }
            }
            ji(i);
          }
          i = !1;
        }
        i && (e = l[0]);
      }
    }
    return (
      (l = yl()),
      (l.memoizedState = l.baseState = e),
      (i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: r1,
        lastRenderedState: e,
      }),
      (l.queue = i),
      (l = M1.bind(null, St, i)),
      (i.dispatch = l),
      (i = po(!1)),
      (c = To.bind(null, St, !1, i.queue)),
      (i = yl()),
      (s = { state: e, dispatch: null, action: t, pending: null }),
      (i.queue = s),
      (l = W2.bind(null, St, s, c, l)),
      (s.dispatch = l),
      (i.memoizedState = t),
      [e, l, !1]
    );
  }
  function c1(t) {
    var e = Oe();
    return f1(e, $t, t);
  }
  function f1(t, e, l) {
    if (
      ((e = mo(t, e, r1)[0]),
      (t = Ws(hi)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var i = pr(e);
      } catch (m) {
        throw m === hu ? Ls : m;
      }
    else i = e;
    e = Oe();
    var s = e.queue,
      c = s.dispatch;
    return (
      l !== e.memoizedState &&
        ((St.flags |= 2048),
        _u(9, { destroy: void 0 }, F2.bind(null, s, l), null)),
      [i, c, t]
    );
  }
  function F2(t, e) {
    t.action = e;
  }
  function o1(t) {
    var e = Oe(),
      l = $t;
    if (l !== null) return f1(e, l, t);
    (Oe(), (e = e.memoizedState), (l = Oe()));
    var i = l.queue.dispatch;
    return ((l.memoizedState = t), [e, i, !1]);
  }
  function _u(t, e, l, i) {
    return (
      (t = { tag: t, create: l, deps: i, inst: e, next: null }),
      (e = St.updateQueue),
      e === null && ((e = Ks()), (St.updateQueue = e)),
      (l = e.lastEffect),
      l === null
        ? (e.lastEffect = t.next = t)
        : ((i = l.next), (l.next = t), (t.next = i), (e.lastEffect = t)),
      t
    );
  }
  function h1() {
    return Oe().memoizedState;
  }
  function Fs(t, e, l, i) {
    var s = yl();
    ((St.flags |= t),
      (s.memoizedState = _u(
        1 | e,
        { destroy: void 0 },
        l,
        i === void 0 ? null : i,
      )));
  }
  function $s(t, e, l, i) {
    var s = Oe();
    i = i === void 0 ? null : i;
    var c = s.memoizedState.inst;
    $t !== null && i !== null && ro(i, $t.memoizedState.deps)
      ? (s.memoizedState = _u(e, c, l, i))
      : ((St.flags |= t), (s.memoizedState = _u(1 | e, c, l, i)));
  }
  function d1(t, e) {
    Fs(8390656, 8, t, e);
  }
  function vo(t, e) {
    $s(2048, 8, t, e);
  }
  function $2(t) {
    St.flags |= 4;
    var e = St.updateQueue;
    if (e === null) ((e = Ks()), (St.updateQueue = e), (e.events = [t]));
    else {
      var l = e.events;
      l === null ? (e.events = [t]) : l.push(t);
    }
  }
  function m1(t) {
    var e = Oe().memoizedState;
    return (
      $2({ ref: e, nextImpl: t }),
      function () {
        if ((kt & 2) !== 0) throw Error(a(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function g1(t, e) {
    return $s(4, 2, t, e);
  }
  function p1(t, e) {
    return $s(4, 4, t, e);
  }
  function _1(t, e) {
    if (typeof e == "function") {
      t = t();
      var l = e(t);
      return function () {
        typeof l == "function" ? l() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function v1(t, e, l) {
    ((l = l != null ? l.concat([t]) : null), $s(4, 4, _1.bind(null, e, t), l));
  }
  function yo() {}
  function y1(t, e) {
    var l = Oe();
    e = e === void 0 ? null : e;
    var i = l.memoizedState;
    return e !== null && ro(e, i[1]) ? i[0] : ((l.memoizedState = [t, e]), t);
  }
  function b1(t, e) {
    var l = Oe();
    e = e === void 0 ? null : e;
    var i = l.memoizedState;
    if (e !== null && ro(e, i[1])) return i[0];
    if (((i = t()), Aa)) {
      pl(!0);
      try {
        t();
      } finally {
        pl(!1);
      }
    }
    return ((l.memoizedState = [i, e]), i);
  }
  function bo(t, e, l) {
    return l === void 0 || ((oi & 1073741824) !== 0 && (Yt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = l), (t = xm()), (St.lanes |= t), (Vi |= t), l);
  }
  function x1(t, e, l, i) {
    return Ql(l, e)
      ? l
      : mu.current !== null
        ? ((t = bo(t, l, i)), Ql(t, e) || (Ye = !0), t)
        : (oi & 42) === 0 || ((oi & 1073741824) !== 0 && (Yt & 261930) === 0)
          ? ((Ye = !0), (t.memoizedState = l))
          : ((t = xm()), (St.lanes |= t), (Vi |= t), e);
  }
  function S1(t, e, l, i, s) {
    var c = Q.p;
    Q.p = c !== 0 && 8 > c ? c : 8;
    var m = D.T,
      v = {};
    ((D.T = v), To(t, !1, e, l));
    try {
      var T = s(),
        R = D.S;
      if (
        (R !== null && R(v, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var V = k2(T, i);
        _r(t, e, V, $l(t));
      } else _r(t, e, i, $l(t));
    } catch (J) {
      _r(t, e, { then: function () {}, status: "rejected", reason: J }, $l());
    } finally {
      ((Q.p = c),
        m !== null && v.types !== null && (m.types = v.types),
        (D.T = m));
    }
  }
  function P2() {}
  function xo(t, e, l, i) {
    if (t.tag !== 5) throw Error(a(476));
    var s = T1(t).queue;
    S1(
      t,
      s,
      e,
      I,
      l === null
        ? P2
        : function () {
            return (C1(t), l(i));
          },
    );
  }
  function T1(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: hi,
        lastRenderedState: I,
      },
      next: null,
    };
    var l = {};
    return (
      (e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: hi,
          lastRenderedState: l,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function C1(t) {
    var e = T1(t);
    (e.next === null && (e = t.alternate.memoizedState),
      _r(t, e.next.queue, {}, $l()));
  }
  function So() {
    return tl(jr);
  }
  function E1() {
    return Oe().memoizedState;
  }
  function z1() {
    return Oe().memoizedState;
  }
  function I2(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = $l();
          t = Yi(l);
          var i = Bi(e, t, l);
          (i !== null && (Ul(i, e, l), hr(i, e, l)),
            (e = { cache: Ff() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function tv(t, e, l) {
    var i = $l();
    ((l = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Ps(t)
        ? A1(e, l)
        : ((l = Lf(t, e, l, i)), l !== null && (Ul(l, t, i), O1(l, e, i))));
  }
  function M1(t, e, l) {
    var i = $l();
    _r(t, e, l, i);
  }
  function _r(t, e, l, i) {
    var s = {
      lane: i,
      revertLane: 0,
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Ps(t)) A1(e, s);
    else {
      var c = t.alternate;
      if (
        t.lanes === 0 &&
        (c === null || c.lanes === 0) &&
        ((c = e.lastRenderedReducer), c !== null)
      )
        try {
          var m = e.lastRenderedState,
            v = c(m, l);
          if (((s.hasEagerState = !0), (s.eagerState = v), Ql(v, m)))
            return (Ns(t, e, s, 0), te === null && Ds(), !1);
        } catch {}
      if (((l = Lf(t, e, s, i)), l !== null))
        return (Ul(l, t, i), O1(l, e, i), !0);
    }
    return !1;
  }
  function To(t, e, l, i) {
    if (
      ((i = {
        lane: 2,
        revertLane: eh(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Ps(t))
    ) {
      if (e) throw Error(a(479));
    } else ((e = Lf(t, l, i, 2)), e !== null && Ul(e, t, 2));
  }
  function Ps(t) {
    var e = t.alternate;
    return t === St || (e !== null && e === St);
  }
  function A1(t, e) {
    gu = Qs = !0;
    var l = t.pending;
    (l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
      (t.pending = e));
  }
  function O1(t, e, l) {
    if ((l & 4194048) !== 0) {
      var i = e.lanes;
      ((i &= t.pendingLanes), (l |= i), (e.lanes = l), bt(t, l));
    }
  }
  var vr = {
    readContext: tl,
    use: Js,
    useCallback: Te,
    useContext: Te,
    useEffect: Te,
    useImperativeHandle: Te,
    useLayoutEffect: Te,
    useInsertionEffect: Te,
    useMemo: Te,
    useReducer: Te,
    useRef: Te,
    useState: Te,
    useDebugValue: Te,
    useDeferredValue: Te,
    useTransition: Te,
    useSyncExternalStore: Te,
    useId: Te,
    useHostTransitionStatus: Te,
    useFormState: Te,
    useActionState: Te,
    useOptimistic: Te,
    useMemoCache: Te,
    useCacheRefresh: Te,
  };
  vr.useEffectEvent = Te;
  var w1 = {
      readContext: tl,
      use: Js,
      useCallback: function (t, e) {
        return ((yl().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: tl,
      useEffect: d1,
      useImperativeHandle: function (t, e, l) {
        ((l = l != null ? l.concat([t]) : null),
          Fs(4194308, 4, _1.bind(null, e, t), l));
      },
      useLayoutEffect: function (t, e) {
        return Fs(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        Fs(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var l = yl();
        e = e === void 0 ? null : e;
        var i = t();
        if (Aa) {
          pl(!0);
          try {
            t();
          } finally {
            pl(!1);
          }
        }
        return ((l.memoizedState = [i, e]), i);
      },
      useReducer: function (t, e, l) {
        var i = yl();
        if (l !== void 0) {
          var s = l(e);
          if (Aa) {
            pl(!0);
            try {
              l(e);
            } finally {
              pl(!1);
            }
          }
        } else s = e;
        return (
          (i.memoizedState = i.baseState = s),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: s,
          }),
          (i.queue = t),
          (t = t.dispatch = tv.bind(null, St, t)),
          [i.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = yl();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = po(t);
        var e = t.queue,
          l = M1.bind(null, St, e);
        return ((e.dispatch = l), [t.memoizedState, l]);
      },
      useDebugValue: yo,
      useDeferredValue: function (t, e) {
        var l = yl();
        return bo(l, t, e);
      },
      useTransition: function () {
        var t = po(!1);
        return (
          (t = S1.bind(null, St, t.queue, !0, !1)),
          (yl().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, l) {
        var i = St,
          s = yl();
        if (Lt) {
          if (l === void 0) throw Error(a(407));
          l = l();
        } else {
          if (((l = e()), te === null)) throw Error(a(349));
          (Yt & 127) !== 0 || $d(i, e, l);
        }
        s.memoizedState = l;
        var c = { value: l, getSnapshot: e };
        return (
          (s.queue = c),
          d1(Id.bind(null, i, c, t), [t]),
          (i.flags |= 2048),
          _u(9, { destroy: void 0 }, Pd.bind(null, i, c, l, e), null),
          l
        );
      },
      useId: function () {
        var t = yl(),
          e = te.identifierPrefix;
        if (Lt) {
          var l = Kn,
            i = kn;
          ((l = (i & ~(1 << (32 - je(i) - 1))).toString(32) + l),
            (e = "_" + e + "R_" + l),
            (l = ks++),
            0 < l && (e += "H" + l.toString(32)),
            (e += "_"));
        } else ((l = K2++), (e = "_" + e + "r_" + l.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: So,
      useFormState: s1,
      useActionState: s1,
      useOptimistic: function (t) {
        var e = yl();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = l),
          (e = To.bind(null, St, !0, l)),
          (l.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: ho,
      useCacheRefresh: function () {
        return (yl().memoizedState = I2.bind(null, St));
      },
      useEffectEvent: function (t) {
        var e = yl(),
          l = { impl: t };
        return (
          (e.memoizedState = l),
          function () {
            if ((kt & 2) !== 0) throw Error(a(440));
            return l.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Co = {
      readContext: tl,
      use: Js,
      useCallback: y1,
      useContext: tl,
      useEffect: vo,
      useImperativeHandle: v1,
      useInsertionEffect: g1,
      useLayoutEffect: p1,
      useMemo: b1,
      useReducer: Ws,
      useRef: h1,
      useState: function () {
        return Ws(hi);
      },
      useDebugValue: yo,
      useDeferredValue: function (t, e) {
        var l = Oe();
        return x1(l, $t.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Ws(hi)[0],
          e = Oe().memoizedState;
        return [typeof t == "boolean" ? t : pr(t), e];
      },
      useSyncExternalStore: Fd,
      useId: E1,
      useHostTransitionStatus: So,
      useFormState: c1,
      useActionState: c1,
      useOptimistic: function (t, e) {
        var l = Oe();
        return l1(l, $t, t, e);
      },
      useMemoCache: ho,
      useCacheRefresh: z1,
    };
  Co.useEffectEvent = m1;
  var D1 = {
    readContext: tl,
    use: Js,
    useCallback: y1,
    useContext: tl,
    useEffect: vo,
    useImperativeHandle: v1,
    useInsertionEffect: g1,
    useLayoutEffect: p1,
    useMemo: b1,
    useReducer: go,
    useRef: h1,
    useState: function () {
      return go(hi);
    },
    useDebugValue: yo,
    useDeferredValue: function (t, e) {
      var l = Oe();
      return $t === null ? bo(l, t, e) : x1(l, $t.memoizedState, t, e);
    },
    useTransition: function () {
      var t = go(hi)[0],
        e = Oe().memoizedState;
      return [typeof t == "boolean" ? t : pr(t), e];
    },
    useSyncExternalStore: Fd,
    useId: E1,
    useHostTransitionStatus: So,
    useFormState: o1,
    useActionState: o1,
    useOptimistic: function (t, e) {
      var l = Oe();
      return $t !== null
        ? l1(l, $t, t, e)
        : ((l.baseState = t), [t, l.queue.dispatch]);
    },
    useMemoCache: ho,
    useCacheRefresh: z1,
  };
  D1.useEffectEvent = m1;
  function Eo(t, e, l, i) {
    ((e = t.memoizedState),
      (l = l(i, e)),
      (l = l == null ? e : y({}, e, l)),
      (t.memoizedState = l),
      t.lanes === 0 && (t.updateQueue.baseState = l));
  }
  var zo = {
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals;
      var i = $l(),
        s = Yi(i);
      ((s.payload = e),
        l != null && (s.callback = l),
        (e = Bi(t, s, i)),
        e !== null && (Ul(e, t, i), hr(e, t, i)));
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals;
      var i = $l(),
        s = Yi(i);
      ((s.tag = 1),
        (s.payload = e),
        l != null && (s.callback = l),
        (e = Bi(t, s, i)),
        e !== null && (Ul(e, t, i), hr(e, t, i)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var l = $l(),
        i = Yi(l);
      ((i.tag = 2),
        e != null && (i.callback = e),
        (e = Bi(t, i, l)),
        e !== null && (Ul(e, t, l), hr(e, t, l)));
    },
  };
  function N1(t, e, l, i, s, c, m) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(i, c, m)
        : e.prototype && e.prototype.isPureReactComponent
          ? !ir(l, i) || !ir(s, c)
          : !0
    );
  }
  function R1(t, e, l, i) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(l, i),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(l, i),
      e.state !== t && zo.enqueueReplaceState(e, e.state, null));
  }
  function Oa(t, e) {
    var l = e;
    if ("ref" in e) {
      l = {};
      for (var i in e) i !== "ref" && (l[i] = e[i]);
    }
    if ((t = t.defaultProps)) {
      l === e && (l = y({}, l));
      for (var s in t) l[s] === void 0 && (l[s] = t[s]);
    }
    return l;
  }
  function j1(t) {
    ws(t);
  }
  function U1(t) {
    console.error(t);
  }
  function H1(t) {
    ws(t);
  }
  function Is(t, e) {
    try {
      var l = t.onUncaughtError;
      l(e.value, { componentStack: e.stack });
    } catch (i) {
      setTimeout(function () {
        throw i;
      });
    }
  }
  function Y1(t, e, l) {
    try {
      var i = t.onCaughtError;
      i(l.value, {
        componentStack: l.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Mo(t, e, l) {
    return (
      (l = Yi(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Is(t, e);
      }),
      l
    );
  }
  function B1(t) {
    return ((t = Yi(t)), (t.tag = 3), t);
  }
  function L1(t, e, l, i) {
    var s = l.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var c = i.value;
      ((t.payload = function () {
        return s(c);
      }),
        (t.callback = function () {
          Y1(e, l, i);
        }));
    }
    var m = l.stateNode;
    m !== null &&
      typeof m.componentDidCatch == "function" &&
      (t.callback = function () {
        (Y1(e, l, i),
          typeof s != "function" &&
            (Zi === null ? (Zi = new Set([this])) : Zi.add(this)));
        var v = i.stack;
        this.componentDidCatch(i.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function ev(t, e, l, i, s) {
    if (
      ((l.flags |= 32768),
      i !== null && typeof i == "object" && typeof i.then == "function")
    ) {
      if (
        ((e = l.alternate),
        e !== null && cu(e, l, s, !0),
        (l = Kl.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 31:
          case 13:
            return (
              Cn === null ? oc() : l.alternate === null && Ce === 0 && (Ce = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = s),
              i === qs
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null ? (l.updateQueue = new Set([i])) : e.add(i),
                  Po(t, i, s)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              i === qs
                ? (l.flags |= 16384)
                : ((e = l.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i]),
                      }),
                      (l.updateQueue = e))
                    : ((l = e.retryQueue),
                      l === null ? (e.retryQueue = new Set([i])) : l.add(i)),
                  Po(t, i, s)),
              !1
            );
        }
        throw Error(a(435, l.tag));
      }
      return (Po(t, i, s), oc(), !1);
    }
    if (Lt)
      return (
        (e = Kl.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = s),
            i !== Qf && ((t = Error(a(422), { cause: i })), rr(bn(t, l))))
          : (i !== Qf && ((e = Error(a(423), { cause: i })), rr(bn(e, l))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (s &= -s),
            (t.lanes |= s),
            (i = bn(i, l)),
            (s = Mo(t.stateNode, i, s)),
            lo(t, s),
            Ce !== 4 && (Ce = 2)),
        !1
      );
    var c = Error(a(520), { cause: i });
    if (
      ((c = bn(c, l)),
      zr === null ? (zr = [c]) : zr.push(c),
      Ce !== 4 && (Ce = 2),
      e === null)
    )
      return !0;
    ((i = bn(i, l)), (l = e));
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (t = s & -s),
            (l.lanes |= t),
            (t = Mo(l.stateNode, i, t)),
            lo(l, t),
            !1
          );
        case 1:
          if (
            ((e = l.type),
            (c = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (c !== null &&
                  typeof c.componentDidCatch == "function" &&
                  (Zi === null || !Zi.has(c)))))
          )
            return (
              (l.flags |= 65536),
              (s &= -s),
              (l.lanes |= s),
              (s = B1(s)),
              L1(s, t, l, i),
              lo(l, s),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Ao = Error(a(461)),
    Ye = !1;
  function el(t, e, l, i) {
    e.child = t === null ? Vd(e, null, l, i) : Ma(e, t.child, l, i);
  }
  function q1(t, e, l, i, s) {
    l = l.render;
    var c = e.ref;
    if ("ref" in i) {
      var m = {};
      for (var v in i) v !== "ref" && (m[v] = i[v]);
    } else m = i;
    return (
      Ta(e),
      (i = so(t, e, l, m, c, s)),
      (v = co()),
      t !== null && !Ye
        ? (fo(t, e, s), di(t, e, s))
        : (Lt && v && Vf(e), (e.flags |= 1), el(t, e, i, s), e.child)
    );
  }
  function X1(t, e, l, i, s) {
    if (t === null) {
      var c = l.type;
      return typeof c == "function" &&
        !qf(c) &&
        c.defaultProps === void 0 &&
        l.compare === null
        ? ((e.tag = 15), (e.type = c), G1(t, e, c, i, s))
        : ((t = js(l.type, null, i, e, e.mode, s)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((c = t.child), !Ho(t, s))) {
      var m = c.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : ir), l(m, i) && t.ref === e.ref)
      )
        return di(t, e, s);
    }
    return (
      (e.flags |= 1),
      (t = ri(c, i)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function G1(t, e, l, i, s) {
    if (t !== null) {
      var c = t.memoizedProps;
      if (ir(c, i) && t.ref === e.ref)
        if (((Ye = !1), (e.pendingProps = i = c), Ho(t, s)))
          (t.flags & 131072) !== 0 && (Ye = !0);
        else return ((e.lanes = t.lanes), di(t, e, s));
    }
    return Oo(t, e, l, i, s);
  }
  function V1(t, e, l, i) {
    var s = i.children,
      c = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      i.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((c = c !== null ? c.baseLanes | l : l), t !== null)) {
          for (i = e.child = t.child, s = 0; i !== null; )
            ((s = s | i.lanes | i.childLanes), (i = i.sibling));
          i = s & ~c;
        } else ((i = 0), (e.child = null));
        return Z1(t, e, c, l, i);
      }
      if ((l & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && Bs(e, c !== null ? c.cachePool : null),
          c !== null ? kd(e, c) : io(),
          Kd(e));
      else
        return (
          (i = e.lanes = 536870912),
          Z1(t, e, c !== null ? c.baseLanes | l : l, l, i)
        );
    } else
      c !== null
        ? (Bs(e, c.cachePool), kd(e, c), qi(), (e.memoizedState = null))
        : (t !== null && Bs(e, null), io(), qi());
    return (el(t, e, s, l), e.child);
  }
  function yr(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Z1(t, e, l, i, s) {
    var c = Pf();
    return (
      (c = c === null ? null : { parent: Ue._currentValue, pool: c }),
      (e.memoizedState = { baseLanes: l, cachePool: c }),
      t !== null && Bs(e, null),
      io(),
      Kd(e),
      t !== null && cu(t, e, i, !0),
      (e.childLanes = s),
      null
    );
  }
  function tc(t, e) {
    return (
      (e = lc({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Q1(t, e, l) {
    return (
      Ma(e, t.child, null, l),
      (t = tc(e, e.pendingProps)),
      (t.flags |= 2),
      Jl(e),
      (e.memoizedState = null),
      t
    );
  }
  function lv(t, e, l) {
    var i = e.pendingProps,
      s = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (Lt) {
        if (i.mode === "hidden")
          return ((t = tc(e, i)), (e.lanes = 536870912), yr(null, t));
        if (
          (uo(e),
          (t = se)
            ? ((t = ng(t, Tn)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Ni !== null ? { id: kn, overflow: Kn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Ad(t)),
                (l.return = e),
                (e.child = l),
                (Ie = e),
                (se = null)))
            : (t = null),
          t === null)
        )
          throw ji(e);
        return ((e.lanes = 536870912), null);
      }
      return tc(e, i);
    }
    var c = t.memoizedState;
    if (c !== null) {
      var m = c.dehydrated;
      if ((uo(e), s))
        if (e.flags & 256) ((e.flags &= -257), (e = Q1(t, e, l)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(a(558));
      else if (
        (Ye || cu(t, e, l, !1), (s = (l & t.childLanes) !== 0), Ye || s)
      ) {
        if (
          ((i = te),
          i !== null && ((m = ot(i, l)), m !== 0 && m !== c.retryLane))
        )
          throw ((c.retryLane = m), ya(t, m), Ul(i, t, m), Ao);
        (oc(), (e = Q1(t, e, l)));
      } else
        ((t = c.treeContext),
          (se = En(m.nextSibling)),
          (Ie = e),
          (Lt = !0),
          (Ri = null),
          (Tn = !1),
          t !== null && Dd(e, t),
          (e = tc(e, i)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = ri(t.child, { mode: i.mode, children: i.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function ec(t, e) {
    var l = e.ref;
    if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(a(284));
      (t === null || t.ref !== l) && (e.flags |= 4194816);
    }
  }
  function Oo(t, e, l, i, s) {
    return (
      Ta(e),
      (l = so(t, e, l, i, void 0, s)),
      (i = co()),
      t !== null && !Ye
        ? (fo(t, e, s), di(t, e, s))
        : (Lt && i && Vf(e), (e.flags |= 1), el(t, e, l, s), e.child)
    );
  }
  function k1(t, e, l, i, s, c) {
    return (
      Ta(e),
      (e.updateQueue = null),
      (l = Wd(e, i, l, s)),
      Jd(t),
      (i = co()),
      t !== null && !Ye
        ? (fo(t, e, c), di(t, e, c))
        : (Lt && i && Vf(e), (e.flags |= 1), el(t, e, l, c), e.child)
    );
  }
  function K1(t, e, l, i, s) {
    if ((Ta(e), e.stateNode === null)) {
      var c = au,
        m = l.contextType;
      (typeof m == "object" && m !== null && (c = tl(m)),
        (c = new l(i, c)),
        (e.memoizedState =
          c.state !== null && c.state !== void 0 ? c.state : null),
        (c.updater = zo),
        (e.stateNode = c),
        (c._reactInternals = e),
        (c = e.stateNode),
        (c.props = i),
        (c.state = e.memoizedState),
        (c.refs = {}),
        to(e),
        (m = l.contextType),
        (c.context = typeof m == "object" && m !== null ? tl(m) : au),
        (c.state = e.memoizedState),
        (m = l.getDerivedStateFromProps),
        typeof m == "function" && (Eo(e, l, m, i), (c.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function" ||
          (typeof c.UNSAFE_componentWillMount != "function" &&
            typeof c.componentWillMount != "function") ||
          ((m = c.state),
          typeof c.componentWillMount == "function" && c.componentWillMount(),
          typeof c.UNSAFE_componentWillMount == "function" &&
            c.UNSAFE_componentWillMount(),
          m !== c.state && zo.enqueueReplaceState(c, c.state, null),
          mr(e, i, c, s),
          dr(),
          (c.state = e.memoizedState)),
        typeof c.componentDidMount == "function" && (e.flags |= 4194308),
        (i = !0));
    } else if (t === null) {
      c = e.stateNode;
      var v = e.memoizedProps,
        T = Oa(l, v);
      c.props = T;
      var R = c.context,
        V = l.contextType;
      ((m = au), typeof V == "object" && V !== null && (m = tl(V)));
      var J = l.getDerivedStateFromProps;
      ((V =
        typeof J == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function"),
        (v = e.pendingProps !== v),
        V ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((v || R !== m) && R1(e, c, i, m)),
        (Hi = !1));
      var U = e.memoizedState;
      ((c.state = U),
        mr(e, i, c, s),
        dr(),
        (R = e.memoizedState),
        v || U !== R || Hi
          ? (typeof J == "function" && (Eo(e, l, J, i), (R = e.memoizedState)),
            (T = Hi || N1(e, l, T, i, U, R, m))
              ? (V ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = i),
                (e.memoizedState = R)),
            (c.props = i),
            (c.state = R),
            (c.context = m),
            (i = T))
          : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            (i = !1)));
    } else {
      ((c = e.stateNode),
        eo(t, e),
        (m = e.memoizedProps),
        (V = Oa(l, m)),
        (c.props = V),
        (J = e.pendingProps),
        (U = c.context),
        (R = l.contextType),
        (T = au),
        typeof R == "object" && R !== null && (T = tl(R)),
        (v = l.getDerivedStateFromProps),
        (R =
          typeof v == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function") ||
          (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
            typeof c.componentWillReceiveProps != "function") ||
          ((m !== J || U !== T) && R1(e, c, i, T)),
        (Hi = !1),
        (U = e.memoizedState),
        (c.state = U),
        mr(e, i, c, s),
        dr());
      var Y = e.memoizedState;
      m !== J ||
      U !== Y ||
      Hi ||
      (t !== null && t.dependencies !== null && Hs(t.dependencies))
        ? (typeof v == "function" && (Eo(e, l, v, i), (Y = e.memoizedState)),
          (V =
            Hi ||
            N1(e, l, V, i, U, Y, T) ||
            (t !== null && t.dependencies !== null && Hs(t.dependencies)))
            ? (R ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(i, Y, T),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(i, Y, T)),
              typeof c.componentDidUpdate == "function" && (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (m === t.memoizedProps && U === t.memoizedState) ||
                (e.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (m === t.memoizedProps && U === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = i),
              (e.memoizedState = Y)),
          (c.props = i),
          (c.state = Y),
          (c.context = T),
          (i = V))
        : (typeof c.componentDidUpdate != "function" ||
            (m === t.memoizedProps && U === t.memoizedState) ||
            (e.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (m === t.memoizedProps && U === t.memoizedState) ||
            (e.flags |= 1024),
          (i = !1));
    }
    return (
      (c = i),
      ec(t, e),
      (i = (e.flags & 128) !== 0),
      c || i
        ? ((c = e.stateNode),
          (l =
            i && typeof l.getDerivedStateFromError != "function"
              ? null
              : c.render()),
          (e.flags |= 1),
          t !== null && i
            ? ((e.child = Ma(e, t.child, null, s)),
              (e.child = Ma(e, null, l, s)))
            : el(t, e, l, s),
          (e.memoizedState = c.state),
          (t = e.child))
        : (t = di(t, e, s)),
      t
    );
  }
  function J1(t, e, l, i) {
    return (xa(), (e.flags |= 256), el(t, e, l, i), e.child);
  }
  var wo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function Do(t) {
    return { baseLanes: t, cachePool: Yd() };
  }
  function No(t, e, l) {
    return ((t = t !== null ? t.childLanes & ~l : 0), e && (t |= Fl), t);
  }
  function W1(t, e, l) {
    var i = e.pendingProps,
      s = !1,
      c = (e.flags & 128) !== 0,
      m;
    if (
      ((m = c) ||
        (m =
          t !== null && t.memoizedState === null ? !1 : (Ae.current & 2) !== 0),
      m && ((s = !0), (e.flags &= -129)),
      (m = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Lt) {
        if (
          (s ? Li(e) : qi(),
          (t = se)
            ? ((t = ng(t, Tn)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Ni !== null ? { id: kn, overflow: Kn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (l = Ad(t)),
                (l.return = e),
                (e.child = l),
                (Ie = e),
                (se = null)))
            : (t = null),
          t === null)
        )
          throw ji(e);
        return (mh(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var v = i.children;
      return (
        (i = i.fallback),
        s
          ? (qi(),
            (s = e.mode),
            (v = lc({ mode: "hidden", children: v }, s)),
            (i = ba(i, s, l, null)),
            (v.return = e),
            (i.return = e),
            (v.sibling = i),
            (e.child = v),
            (i = e.child),
            (i.memoizedState = Do(l)),
            (i.childLanes = No(t, m, l)),
            (e.memoizedState = wo),
            yr(null, i))
          : (Li(e), Ro(e, v))
      );
    }
    var T = t.memoizedState;
    if (T !== null && ((v = T.dehydrated), v !== null)) {
      if (c)
        e.flags & 256
          ? (Li(e), (e.flags &= -257), (e = jo(t, e, l)))
          : e.memoizedState !== null
            ? (qi(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (qi(),
              (v = i.fallback),
              (s = e.mode),
              (i = lc({ mode: "visible", children: i.children }, s)),
              (v = ba(v, s, l, null)),
              (v.flags |= 2),
              (i.return = e),
              (v.return = e),
              (i.sibling = v),
              (e.child = i),
              Ma(e, t.child, null, l),
              (i = e.child),
              (i.memoizedState = Do(l)),
              (i.childLanes = No(t, m, l)),
              (e.memoizedState = wo),
              (e = yr(null, i)));
      else if ((Li(e), mh(v))) {
        if (((m = v.nextSibling && v.nextSibling.dataset), m)) var R = m.dgst;
        ((m = R),
          (i = Error(a(419))),
          (i.stack = ""),
          (i.digest = m),
          rr({ value: i, source: null, stack: null }),
          (e = jo(t, e, l)));
      } else if (
        (Ye || cu(t, e, l, !1), (m = (l & t.childLanes) !== 0), Ye || m)
      ) {
        if (
          ((m = te),
          m !== null && ((i = ot(m, l)), i !== 0 && i !== T.retryLane))
        )
          throw ((T.retryLane = i), ya(t, i), Ul(m, t, i), Ao);
        (dh(v) || oc(), (e = jo(t, e, l)));
      } else
        dh(v)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = T.treeContext),
            (se = En(v.nextSibling)),
            (Ie = e),
            (Lt = !0),
            (Ri = null),
            (Tn = !1),
            t !== null && Dd(e, t),
            (e = Ro(e, i.children)),
            (e.flags |= 4096));
      return e;
    }
    return s
      ? (qi(),
        (v = i.fallback),
        (s = e.mode),
        (T = t.child),
        (R = T.sibling),
        (i = ri(T, { mode: "hidden", children: i.children })),
        (i.subtreeFlags = T.subtreeFlags & 65011712),
        R !== null ? (v = ri(R, v)) : ((v = ba(v, s, l, null)), (v.flags |= 2)),
        (v.return = e),
        (i.return = e),
        (i.sibling = v),
        (e.child = i),
        yr(null, i),
        (i = e.child),
        (v = t.child.memoizedState),
        v === null
          ? (v = Do(l))
          : ((s = v.cachePool),
            s !== null
              ? ((T = Ue._currentValue),
                (s = s.parent !== T ? { parent: T, pool: T } : s))
              : (s = Yd()),
            (v = { baseLanes: v.baseLanes | l, cachePool: s })),
        (i.memoizedState = v),
        (i.childLanes = No(t, m, l)),
        (e.memoizedState = wo),
        yr(t.child, i))
      : (Li(e),
        (l = t.child),
        (t = l.sibling),
        (l = ri(l, { mode: "visible", children: i.children })),
        (l.return = e),
        (l.sibling = null),
        t !== null &&
          ((m = e.deletions),
          m === null ? ((e.deletions = [t]), (e.flags |= 16)) : m.push(t)),
        (e.child = l),
        (e.memoizedState = null),
        l);
  }
  function Ro(t, e) {
    return (
      (e = lc({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function lc(t, e) {
    return ((t = kl(22, t, null, e)), (t.lanes = 0), t);
  }
  function jo(t, e, l) {
    return (
      Ma(e, t.child, null, l),
      (t = Ro(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function F1(t, e, l) {
    t.lanes |= e;
    var i = t.alternate;
    (i !== null && (i.lanes |= e), Jf(t.return, e, l));
  }
  function Uo(t, e, l, i, s, c) {
    var m = t.memoizedState;
    m === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: l,
          tailMode: s,
          treeForkCount: c,
        })
      : ((m.isBackwards = e),
        (m.rendering = null),
        (m.renderingStartTime = 0),
        (m.last = i),
        (m.tail = l),
        (m.tailMode = s),
        (m.treeForkCount = c));
  }
  function $1(t, e, l) {
    var i = e.pendingProps,
      s = i.revealOrder,
      c = i.tail;
    i = i.children;
    var m = Ae.current,
      v = (m & 2) !== 0;
    if (
      (v ? ((m = (m & 1) | 2), (e.flags |= 128)) : (m &= 1),
      tt(Ae, m),
      el(t, e, i, l),
      (i = Lt ? ur : 0),
      !v && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && F1(t, l, e);
        else if (t.tag === 19) F1(t, l, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (s) {
      case "forwards":
        for (l = e.child, s = null; l !== null; )
          ((t = l.alternate),
            t !== null && Zs(t) === null && (s = l),
            (l = l.sibling));
        ((l = s),
          l === null
            ? ((s = e.child), (e.child = null))
            : ((s = l.sibling), (l.sibling = null)),
          Uo(e, !1, s, l, c, i));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (l = null, s = e.child, e.child = null; s !== null; ) {
          if (((t = s.alternate), t !== null && Zs(t) === null)) {
            e.child = s;
            break;
          }
          ((t = s.sibling), (s.sibling = l), (l = s), (s = t));
        }
        Uo(e, !0, l, null, c, i);
        break;
      case "together":
        Uo(e, !1, null, null, void 0, i);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function di(t, e, l) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Vi |= e.lanes),
      (l & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((cu(t, e, l, !1), (l & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(a(153));
    if (e.child !== null) {
      for (
        t = e.child, l = ri(t, t.pendingProps), e.child = l, l.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (l = l.sibling = ri(t, t.pendingProps)),
          (l.return = e));
      l.sibling = null;
    }
    return e.child;
  }
  function Ho(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && Hs(t)));
  }
  function nv(t, e, l) {
    switch (e.tag) {
      case 3:
        (Qt(e, e.stateNode.containerInfo),
          Ui(e, Ue, t.memoizedState.cache),
          xa());
        break;
      case 27:
      case 5:
        Ml(e);
        break;
      case 4:
        Qt(e, e.stateNode.containerInfo);
        break;
      case 10:
        Ui(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), uo(e), null);
        break;
      case 13:
        var i = e.memoizedState;
        if (i !== null)
          return i.dehydrated !== null
            ? (Li(e), (e.flags |= 128), null)
            : (l & e.child.childLanes) !== 0
              ? W1(t, e, l)
              : (Li(e), (t = di(t, e, l)), t !== null ? t.sibling : null);
        Li(e);
        break;
      case 19:
        var s = (t.flags & 128) !== 0;
        if (
          ((i = (l & e.childLanes) !== 0),
          i || (cu(t, e, l, !1), (i = (l & e.childLanes) !== 0)),
          s)
        ) {
          if (i) return $1(t, e, l);
          e.flags |= 128;
        }
        if (
          ((s = e.memoizedState),
          s !== null &&
            ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
          tt(Ae, Ae.current),
          i)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), V1(t, e, l, e.pendingProps));
      case 24:
        Ui(e, Ue, t.memoizedState.cache);
    }
    return di(t, e, l);
  }
  function P1(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Ye = !0;
      else {
        if (!Ho(t, l) && (e.flags & 128) === 0) return ((Ye = !1), nv(t, e, l));
        Ye = (t.flags & 131072) !== 0;
      }
    else ((Ye = !1), Lt && (e.flags & 1048576) !== 0 && wd(e, ur, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var i = e.pendingProps;
          if (((t = Ea(e.elementType)), (e.type = t), typeof t == "function"))
            qf(t)
              ? ((i = Oa(t, i)), (e.tag = 1), (e = K1(null, e, t, i, l)))
              : ((e.tag = 0), (e = Oo(null, e, t, i, l)));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === H) {
                ((e.tag = 11), (e = q1(null, e, t, i, l)));
                break t;
              } else if (s === j) {
                ((e.tag = 14), (e = X1(null, e, t, i, l)));
                break t;
              }
            }
            throw ((e = ct(t) || t), Error(a(306, e, "")));
          }
        }
        return e;
      case 0:
        return Oo(t, e, e.type, e.pendingProps, l);
      case 1:
        return ((i = e.type), (s = Oa(i, e.pendingProps)), K1(t, e, i, s, l));
      case 3:
        t: {
          if ((Qt(e, e.stateNode.containerInfo), t === null))
            throw Error(a(387));
          i = e.pendingProps;
          var c = e.memoizedState;
          ((s = c.element), eo(t, e), mr(e, i, null, l));
          var m = e.memoizedState;
          if (
            ((i = m.cache),
            Ui(e, Ue, i),
            i !== c.cache && Wf(e, [Ue], l, !0),
            dr(),
            (i = m.element),
            c.isDehydrated)
          )
            if (
              ((c = { element: i, isDehydrated: !1, cache: m.cache }),
              (e.updateQueue.baseState = c),
              (e.memoizedState = c),
              e.flags & 256)
            ) {
              e = J1(t, e, i, l);
              break t;
            } else if (i !== s) {
              ((s = bn(Error(a(424)), e)), rr(s), (e = J1(t, e, i, l)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  se = En(t.firstChild),
                  Ie = e,
                  Lt = !0,
                  Ri = null,
                  Tn = !0,
                  l = Vd(e, null, i, l),
                  e.child = l;
                l;
              )
                ((l.flags = (l.flags & -3) | 4096), (l = l.sibling));
          else {
            if ((xa(), i === s)) {
              e = di(t, e, l);
              break t;
            }
            el(t, e, i, l);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          ec(t, e),
          t === null
            ? (l = cg(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = l)
              : Lt ||
                ((l = e.type),
                (t = e.pendingProps),
                (i = vc(dt.current).createElement(l)),
                (i[Ct] = e),
                (i[Mt] = t),
                ll(i, l, t),
                Dt(i),
                (e.stateNode = i))
            : (e.memoizedState = cg(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Ml(e),
          t === null &&
            Lt &&
            ((i = e.stateNode = ug(e.type, e.pendingProps, dt.current)),
            (Ie = e),
            (Tn = !0),
            (s = se),
            Ji(e.type) ? ((gh = s), (se = En(i.firstChild))) : (se = s)),
          el(t, e, e.pendingProps.children, l),
          ec(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Lt &&
            ((s = i = se) &&
              ((i = Rv(i, e.type, e.pendingProps, Tn)),
              i !== null
                ? ((e.stateNode = i),
                  (Ie = e),
                  (se = En(i.firstChild)),
                  (Tn = !1),
                  (s = !0))
                : (s = !1)),
            s || ji(e)),
          Ml(e),
          (s = e.type),
          (c = e.pendingProps),
          (m = t !== null ? t.memoizedProps : null),
          (i = c.children),
          fh(s, c) ? (i = null) : m !== null && fh(s, m) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((s = so(t, e, J2, null, null, l)), (jr._currentValue = s)),
          ec(t, e),
          el(t, e, i, l),
          e.child
        );
      case 6:
        return (
          t === null &&
            Lt &&
            ((t = l = se) &&
              ((l = jv(l, e.pendingProps, Tn)),
              l !== null
                ? ((e.stateNode = l), (Ie = e), (se = null), (t = !0))
                : (t = !1)),
            t || ji(e)),
          null
        );
      case 13:
        return W1(t, e, l);
      case 4:
        return (
          Qt(e, e.stateNode.containerInfo),
          (i = e.pendingProps),
          t === null ? (e.child = Ma(e, null, i, l)) : el(t, e, i, l),
          e.child
        );
      case 11:
        return q1(t, e, e.type, e.pendingProps, l);
      case 7:
        return (el(t, e, e.pendingProps, l), e.child);
      case 8:
        return (el(t, e, e.pendingProps.children, l), e.child);
      case 12:
        return (el(t, e, e.pendingProps.children, l), e.child);
      case 10:
        return (
          (i = e.pendingProps),
          Ui(e, e.type, i.value),
          el(t, e, i.children, l),
          e.child
        );
      case 9:
        return (
          (s = e.type._context),
          (i = e.pendingProps.children),
          Ta(e),
          (s = tl(s)),
          (i = i(s)),
          (e.flags |= 1),
          el(t, e, i, l),
          e.child
        );
      case 14:
        return X1(t, e, e.type, e.pendingProps, l);
      case 15:
        return G1(t, e, e.type, e.pendingProps, l);
      case 19:
        return $1(t, e, l);
      case 31:
        return lv(t, e, l);
      case 22:
        return V1(t, e, l, e.pendingProps);
      case 24:
        return (
          Ta(e),
          (i = tl(Ue)),
          t === null
            ? ((s = Pf()),
              s === null &&
                ((s = te),
                (c = Ff()),
                (s.pooledCache = c),
                c.refCount++,
                c !== null && (s.pooledCacheLanes |= l),
                (s = c)),
              (e.memoizedState = { parent: i, cache: s }),
              to(e),
              Ui(e, Ue, s))
            : ((t.lanes & l) !== 0 && (eo(t, e), mr(e, null, null, l), dr()),
              (s = t.memoizedState),
              (c = e.memoizedState),
              s.parent !== i
                ? ((s = { parent: i, cache: i }),
                  (e.memoizedState = s),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = s),
                  Ui(e, Ue, i))
                : ((i = c.cache),
                  Ui(e, Ue, i),
                  i !== s.cache && Wf(e, [Ue], l, !0))),
          el(t, e, e.pendingProps.children, l),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(a(156, e.tag));
  }
  function mi(t) {
    t.flags |= 4;
  }
  function Yo(t, e, l, i, s) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (s & 335544128) === s))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Em()) t.flags |= 8192;
        else throw ((za = qs), If);
    } else t.flags &= -16777217;
  }
  function I1(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !mg(e)))
      if (Em()) t.flags |= 8192;
      else throw ((za = qs), If);
  }
  function nc(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Oi() : 536870912), (t.lanes |= e), (xu |= e)));
  }
  function br(t, e) {
    if (!Lt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; )
            (e.alternate !== null && (l = e), (e = e.sibling));
          l === null ? (t.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = t.tail;
          for (var i = null; l !== null; )
            (l.alternate !== null && (i = l), (l = l.sibling));
          i === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function ce(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      i = 0;
    if (e)
      for (var s = t.child; s !== null; )
        ((l |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags & 65011712),
          (i |= s.flags & 65011712),
          (s.return = t),
          (s = s.sibling));
    else
      for (s = t.child; s !== null; )
        ((l |= s.lanes | s.childLanes),
          (i |= s.subtreeFlags),
          (i |= s.flags),
          (s.return = t),
          (s = s.sibling));
    return ((t.subtreeFlags |= i), (t.childLanes = l), e);
  }
  function iv(t, e, l) {
    var i = e.pendingProps;
    switch ((Zf(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (ce(e), null);
      case 1:
        return (ce(e), null);
      case 3:
        return (
          (l = e.stateNode),
          (i = null),
          t !== null && (i = t.memoizedState.cache),
          e.memoizedState.cache !== i && (e.flags |= 2048),
          fi(Ue),
          Ot(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (t === null || t.child === null) &&
            (su(e)
              ? mi(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), kf())),
          ce(e),
          null
        );
      case 26:
        var s = e.type,
          c = e.memoizedState;
        return (
          t === null
            ? (mi(e),
              c !== null ? (ce(e), I1(e, c)) : (ce(e), Yo(e, s, null, i, l)))
            : c
              ? c !== t.memoizedState
                ? (mi(e), ce(e), I1(e, c))
                : (ce(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== i && mi(e),
                ce(e),
                Yo(e, s, t, i, l)),
          null
        );
      case 27:
        if (
          (Ne(e),
          (l = dt.current),
          (s = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== i && mi(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(a(166));
            return (ce(e), null);
          }
          ((t = et.current),
            su(e) ? Nd(e) : ((t = ug(s, i, l)), (e.stateNode = t), mi(e)));
        }
        return (ce(e), null);
      case 5:
        if ((Ne(e), (s = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== i && mi(e);
        else {
          if (!i) {
            if (e.stateNode === null) throw Error(a(166));
            return (ce(e), null);
          }
          if (((c = et.current), su(e))) Nd(e);
          else {
            var m = vc(dt.current);
            switch (c) {
              case 1:
                c = m.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                c = m.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    c = m.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    c = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s,
                    );
                    break;
                  case "script":
                    ((c = m.createElement("div")),
                      (c.innerHTML = "<script><\/script>"),
                      (c = c.removeChild(c.firstChild)));
                    break;
                  case "select":
                    ((c =
                      typeof i.is == "string"
                        ? m.createElement("select", { is: i.is })
                        : m.createElement("select")),
                      i.multiple
                        ? (c.multiple = !0)
                        : i.size && (c.size = i.size));
                    break;
                  default:
                    c =
                      typeof i.is == "string"
                        ? m.createElement(s, { is: i.is })
                        : m.createElement(s);
                }
            }
            ((c[Ct] = e), (c[Mt] = i));
            t: for (m = e.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6) c.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                ((m.child.return = m), (m = m.child));
                continue;
              }
              if (m === e) break t;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === e) break t;
                m = m.return;
              }
              ((m.sibling.return = m.return), (m = m.sibling));
            }
            e.stateNode = c;
            t: switch ((ll(c, s, i), s)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break t;
              case "img":
                i = !0;
                break t;
              default:
                i = !1;
            }
            i && mi(e);
          }
        }
        return (
          ce(e),
          Yo(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== i && mi(e);
        else {
          if (typeof i != "string" && e.stateNode === null) throw Error(a(166));
          if (((t = dt.current), su(e))) {
            if (
              ((t = e.stateNode),
              (l = e.memoizedProps),
              (i = null),
              (s = Ie),
              s !== null)
            )
              switch (s.tag) {
                case 27:
                case 5:
                  i = s.memoizedProps;
              }
            ((t[Ct] = e),
              (t = !!(
                t.nodeValue === l ||
                (i !== null && i.suppressHydrationWarning === !0) ||
                Wm(t.nodeValue, l)
              )),
              t || ji(e, !0));
          } else
            ((t = vc(t).createTextNode(i)), (t[Ct] = e), (e.stateNode = t));
        }
        return (ce(e), null);
      case 31:
        if (((l = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((i = su(e)), l !== null)) {
            if (t === null) {
              if (!i) throw Error(a(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(a(557));
              t[Ct] = e;
            } else
              (xa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (ce(e), (t = !1));
          } else
            ((l = kf()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (t = !0));
          if (!t) return e.flags & 256 ? (Jl(e), e) : (Jl(e), null);
          if ((e.flags & 128) !== 0) throw Error(a(558));
        }
        return (ce(e), null);
      case 13:
        if (
          ((i = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((s = su(e)), i !== null && i.dehydrated !== null)) {
            if (t === null) {
              if (!s) throw Error(a(318));
              if (
                ((s = e.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(a(317));
              s[Ct] = e;
            } else
              (xa(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (ce(e), (s = !1));
          } else
            ((s = kf()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = s),
              (s = !0));
          if (!s) return e.flags & 256 ? (Jl(e), e) : (Jl(e), null);
        }
        return (
          Jl(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = l), e)
            : ((l = i !== null),
              (t = t !== null && t.memoizedState !== null),
              l &&
                ((i = e.child),
                (s = null),
                i.alternate !== null &&
                  i.alternate.memoizedState !== null &&
                  i.alternate.memoizedState.cachePool !== null &&
                  (s = i.alternate.memoizedState.cachePool.pool),
                (c = null),
                i.memoizedState !== null &&
                  i.memoizedState.cachePool !== null &&
                  (c = i.memoizedState.cachePool.pool),
                c !== s && (i.flags |= 2048)),
              l !== t && l && (e.child.flags |= 8192),
              nc(e, e.updateQueue),
              ce(e),
              null)
        );
      case 4:
        return (Ot(), t === null && ah(e.stateNode.containerInfo), ce(e), null);
      case 10:
        return (fi(e.type), ce(e), null);
      case 19:
        if ((G(Ae), (i = e.memoizedState), i === null)) return (ce(e), null);
        if (((s = (e.flags & 128) !== 0), (c = i.rendering), c === null))
          if (s) br(i, !1);
          else {
            if (Ce !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((c = Zs(t)), c !== null)) {
                  for (
                    e.flags |= 128,
                      br(i, !1),
                      t = c.updateQueue,
                      e.updateQueue = t,
                      nc(e, t),
                      e.subtreeFlags = 0,
                      t = l,
                      l = e.child;
                    l !== null;
                  )
                    (Md(l, t), (l = l.sibling));
                  return (
                    tt(Ae, (Ae.current & 1) | 2),
                    Lt && si(e, i.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            i.tail !== null &&
              ze() > sc &&
              ((e.flags |= 128), (s = !0), br(i, !1), (e.lanes = 4194304));
          }
        else {
          if (!s)
            if (((t = Zs(c)), t !== null)) {
              if (
                ((e.flags |= 128),
                (s = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                nc(e, t),
                br(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !c.alternate &&
                  !Lt)
              )
                return (ce(e), null);
            } else
              2 * ze() - i.renderingStartTime > sc &&
                l !== 536870912 &&
                ((e.flags |= 128), (s = !0), br(i, !1), (e.lanes = 4194304));
          i.isBackwards
            ? ((c.sibling = e.child), (e.child = c))
            : ((t = i.last),
              t !== null ? (t.sibling = c) : (e.child = c),
              (i.last = c));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = ze()),
            (t.sibling = null),
            (l = Ae.current),
            tt(Ae, s ? (l & 1) | 2 : l & 1),
            Lt && si(e, i.treeForkCount),
            t)
          : (ce(e), null);
      case 22:
      case 23:
        return (
          Jl(e),
          ao(),
          (i = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== i && (e.flags |= 8192)
            : i && (e.flags |= 8192),
          i
            ? (l & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (ce(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : ce(e),
          (l = e.updateQueue),
          l !== null && nc(e, l.retryQueue),
          (l = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          (i = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          i !== l && (e.flags |= 2048),
          t !== null && G(Ca),
          null
        );
      case 24:
        return (
          (l = null),
          t !== null && (l = t.memoizedState.cache),
          e.memoizedState.cache !== l && (e.flags |= 2048),
          fi(Ue),
          ce(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(a(156, e.tag));
  }
  function av(t, e) {
    switch ((Zf(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          fi(Ue),
          Ot(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Ne(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Jl(e), e.alternate === null)) throw Error(a(340));
          xa();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Jl(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(a(340));
          xa();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (G(Ae), null);
      case 4:
        return (Ot(), null);
      case 10:
        return (fi(e.type), null);
      case 22:
      case 23:
        return (
          Jl(e),
          ao(),
          t !== null && G(Ca),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (fi(Ue), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function tm(t, e) {
    switch ((Zf(e), e.tag)) {
      case 3:
        (fi(Ue), Ot());
        break;
      case 26:
      case 27:
      case 5:
        Ne(e);
        break;
      case 4:
        Ot();
        break;
      case 31:
        e.memoizedState !== null && Jl(e);
        break;
      case 13:
        Jl(e);
        break;
      case 19:
        G(Ae);
        break;
      case 10:
        fi(e.type);
        break;
      case 22:
      case 23:
        (Jl(e), ao(), t !== null && G(Ca));
        break;
      case 24:
        fi(Ue);
    }
  }
  function xr(t, e) {
    try {
      var l = e.updateQueue,
        i = l !== null ? l.lastEffect : null;
      if (i !== null) {
        var s = i.next;
        l = s;
        do {
          if ((l.tag & t) === t) {
            i = void 0;
            var c = l.create,
              m = l.inst;
            ((i = c()), (m.destroy = i));
          }
          l = l.next;
        } while (l !== s);
      }
    } catch (v) {
      Ft(e, e.return, v);
    }
  }
  function Xi(t, e, l) {
    try {
      var i = e.updateQueue,
        s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var c = s.next;
        i = c;
        do {
          if ((i.tag & t) === t) {
            var m = i.inst,
              v = m.destroy;
            if (v !== void 0) {
              ((m.destroy = void 0), (s = e));
              var T = l,
                R = v;
              try {
                R();
              } catch (V) {
                Ft(s, T, V);
              }
            }
          }
          i = i.next;
        } while (i !== c);
      }
    } catch (V) {
      Ft(e, e.return, V);
    }
  }
  function em(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var l = t.stateNode;
      try {
        Qd(e, l);
      } catch (i) {
        Ft(t, t.return, i);
      }
    }
  }
  function lm(t, e, l) {
    ((l.props = Oa(t.type, t.memoizedProps)), (l.state = t.memoizedState));
    try {
      l.componentWillUnmount();
    } catch (i) {
      Ft(t, e, i);
    }
  }
  function Sr(t, e) {
    try {
      var l = t.ref;
      if (l !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var i = t.stateNode;
            break;
          case 30:
            i = t.stateNode;
            break;
          default:
            i = t.stateNode;
        }
        typeof l == "function" ? (t.refCleanup = l(i)) : (l.current = i);
      }
    } catch (s) {
      Ft(t, e, s);
    }
  }
  function Jn(t, e) {
    var l = t.ref,
      i = t.refCleanup;
    if (l !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (s) {
          Ft(t, e, s);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (s) {
          Ft(t, e, s);
        }
      else l.current = null;
  }
  function nm(t) {
    var e = t.type,
      l = t.memoizedProps,
      i = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && i.focus();
          break t;
        case "img":
          l.src ? (i.src = l.src) : l.srcSet && (i.srcset = l.srcSet);
      }
    } catch (s) {
      Ft(t, t.return, s);
    }
  }
  function Bo(t, e, l) {
    try {
      var i = t.stateNode;
      (Mv(i, t.type, l, e), (i[Mt] = e));
    } catch (s) {
      Ft(t, t.return, s);
    }
  }
  function im(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Ji(t.type)) ||
      t.tag === 4
    );
  }
  function Lo(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || im(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Ji(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function qo(t, e, l) {
    var i = t.tag;
    if (i === 5 || i === 6)
      ((t = t.stateNode),
        e
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l
            ).insertBefore(t, e)
          : ((e =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                  ? l.ownerDocument.body
                  : l),
            e.appendChild(t),
            (l = l._reactRootContainer),
            l != null || e.onclick !== null || (e.onclick = ai)));
    else if (
      i !== 4 &&
      (i === 27 && Ji(t.type) && ((l = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (qo(t, e, l), t = t.sibling; t !== null; )
        (qo(t, e, l), (t = t.sibling));
  }
  function ic(t, e, l) {
    var i = t.tag;
    if (i === 5 || i === 6)
      ((t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t));
    else if (
      i !== 4 &&
      (i === 27 && Ji(t.type) && (l = t.stateNode), (t = t.child), t !== null)
    )
      for (ic(t, e, l), t = t.sibling; t !== null; )
        (ic(t, e, l), (t = t.sibling));
  }
  function am(t) {
    var e = t.stateNode,
      l = t.memoizedProps;
    try {
      for (var i = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      (ll(e, i, l), (e[Ct] = t), (e[Mt] = l));
    } catch (c) {
      Ft(t, t.return, c);
    }
  }
  var gi = !1,
    Be = !1,
    Xo = !1,
    um = typeof WeakSet == "function" ? WeakSet : Set,
    Je = null;
  function uv(t, e) {
    if (((t = t.containerInfo), (sh = Ec), (t = vd(t)), Rf(t))) {
      if ("selectionStart" in t)
        var l = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window;
          var i = l.getSelection && l.getSelection();
          if (i && i.rangeCount !== 0) {
            l = i.anchorNode;
            var s = i.anchorOffset,
              c = i.focusNode;
            i = i.focusOffset;
            try {
              (l.nodeType, c.nodeType);
            } catch {
              l = null;
              break t;
            }
            var m = 0,
              v = -1,
              T = -1,
              R = 0,
              V = 0,
              J = t,
              U = null;
            e: for (;;) {
              for (
                var Y;
                J !== l || (s !== 0 && J.nodeType !== 3) || (v = m + s),
                  J !== c || (i !== 0 && J.nodeType !== 3) || (T = m + i),
                  J.nodeType === 3 && (m += J.nodeValue.length),
                  (Y = J.firstChild) !== null;
              )
                ((U = J), (J = Y));
              for (;;) {
                if (J === t) break e;
                if (
                  (U === l && ++R === s && (v = m),
                  U === c && ++V === i && (T = m),
                  (Y = J.nextSibling) !== null)
                )
                  break;
                ((J = U), (U = J.parentNode));
              }
              J = Y;
            }
            l = v === -1 || T === -1 ? null : { start: v, end: T };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      ch = { focusedElem: t, selectionRange: l }, Ec = !1, Je = e;
      Je !== null;
    )
      if (
        ((e = Je), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (Je = t));
      else
        for (; Je !== null; ) {
          switch (((e = Je), (c = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (l = 0; l < t.length; l++)
                  ((s = t[l]), (s.ref.impl = s.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && c !== null) {
                ((t = void 0),
                  (l = e),
                  (s = c.memoizedProps),
                  (c = c.memoizedState),
                  (i = l.stateNode));
                try {
                  var nt = Oa(l.type, s);
                  ((t = i.getSnapshotBeforeUpdate(nt, c)),
                    (i.__reactInternalSnapshotBeforeUpdate = t));
                } catch (gt) {
                  Ft(l, l.return, gt);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)
                )
                  hh(t);
                else if (l === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      hh(t);
                      break;
                    default:
                      t.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0) throw Error(a(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (Je = t));
            break;
          }
          Je = e.return;
        }
  }
  function rm(t, e, l) {
    var i = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (_i(t, l), i & 4 && xr(5, l));
        break;
      case 1:
        if ((_i(t, l), i & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (m) {
              Ft(l, l.return, m);
            }
          else {
            var s = Oa(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              Ft(l, l.return, m);
            }
          }
        (i & 64 && em(l), i & 512 && Sr(l, l.return));
        break;
      case 3:
        if ((_i(t, l), i & 64 && ((t = l.updateQueue), t !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            Qd(t, e);
          } catch (m) {
            Ft(l, l.return, m);
          }
        }
        break;
      case 27:
        e === null && i & 4 && am(l);
      case 26:
      case 5:
        (_i(t, l), e === null && i & 4 && nm(l), i & 512 && Sr(l, l.return));
        break;
      case 12:
        _i(t, l);
        break;
      case 31:
        (_i(t, l), i & 4 && fm(t, l));
        break;
      case 13:
        (_i(t, l),
          i & 4 && om(t, l),
          i & 64 &&
            ((t = l.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((l = gv.bind(null, l)), Uv(t, l)))));
        break;
      case 22:
        if (((i = l.memoizedState !== null || gi), !i)) {
          ((e = (e !== null && e.memoizedState !== null) || Be), (s = gi));
          var c = Be;
          ((gi = i),
            (Be = e) && !c ? vi(t, l, (l.subtreeFlags & 8772) !== 0) : _i(t, l),
            (gi = s),
            (Be = c));
        }
        break;
      case 30:
        break;
      default:
        _i(t, l);
    }
  }
  function sm(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), sm(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Me(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var he = null,
    Dl = !1;
  function pi(t, e, l) {
    for (l = l.child; l !== null; ) (cm(t, e, l), (l = l.sibling));
  }
  function cm(t, e, l) {
    if (me && typeof me.onCommitFiberUnmount == "function")
      try {
        me.onCommitFiberUnmount(Xn, l);
      } catch {}
    switch (l.tag) {
      case 26:
        (Be || Jn(l, e),
          pi(t, e, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l)));
        break;
      case 27:
        Be || Jn(l, e);
        var i = he,
          s = Dl;
        (Ji(l.type) && ((he = l.stateNode), (Dl = !1)),
          pi(t, e, l),
          Dr(l.stateNode),
          (he = i),
          (Dl = s));
        break;
      case 5:
        Be || Jn(l, e);
      case 6:
        if (
          ((i = he),
          (s = Dl),
          (he = null),
          pi(t, e, l),
          (he = i),
          (Dl = s),
          he !== null)
        )
          if (Dl)
            try {
              (he.nodeType === 9
                ? he.body
                : he.nodeName === "HTML"
                  ? he.ownerDocument.body
                  : he
              ).removeChild(l.stateNode);
            } catch (c) {
              Ft(l, e, c);
            }
          else
            try {
              he.removeChild(l.stateNode);
            } catch (c) {
              Ft(l, e, c);
            }
        break;
      case 18:
        he !== null &&
          (Dl
            ? ((t = he),
              eg(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                l.stateNode,
              ),
              Ou(t))
            : eg(he, l.stateNode));
        break;
      case 4:
        ((i = he),
          (s = Dl),
          (he = l.stateNode.containerInfo),
          (Dl = !0),
          pi(t, e, l),
          (he = i),
          (Dl = s));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Xi(2, l, e), Be || Xi(4, l, e), pi(t, e, l));
        break;
      case 1:
        (Be ||
          (Jn(l, e),
          (i = l.stateNode),
          typeof i.componentWillUnmount == "function" && lm(l, e, i)),
          pi(t, e, l));
        break;
      case 21:
        pi(t, e, l);
        break;
      case 22:
        ((Be = (i = Be) || l.memoizedState !== null), pi(t, e, l), (Be = i));
        break;
      default:
        pi(t, e, l);
    }
  }
  function fm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        Ou(t);
      } catch (l) {
        Ft(e, e.return, l);
      }
    }
  }
  function om(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        Ou(t);
      } catch (l) {
        Ft(e, e.return, l);
      }
  }
  function rv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new um()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new um()),
          e
        );
      default:
        throw Error(a(435, t.tag));
    }
  }
  function ac(t, e) {
    var l = rv(t);
    e.forEach(function (i) {
      if (!l.has(i)) {
        l.add(i);
        var s = pv.bind(null, t, i);
        i.then(s, s);
      }
    });
  }
  function Nl(t, e) {
    var l = e.deletions;
    if (l !== null)
      for (var i = 0; i < l.length; i++) {
        var s = l[i],
          c = t,
          m = e,
          v = m;
        t: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Ji(v.type)) {
                ((he = v.stateNode), (Dl = !1));
                break t;
              }
              break;
            case 5:
              ((he = v.stateNode), (Dl = !1));
              break t;
            case 3:
            case 4:
              ((he = v.stateNode.containerInfo), (Dl = !0));
              break t;
          }
          v = v.return;
        }
        if (he === null) throw Error(a(160));
        (cm(c, m, s),
          (he = null),
          (Dl = !1),
          (c = s.alternate),
          c !== null && (c.return = null),
          (s.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (hm(e, t), (e = e.sibling));
  }
  var Yn = null;
  function hm(t, e) {
    var l = t.alternate,
      i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Nl(e, t),
          Rl(t),
          i & 4 && (Xi(3, t, t.return), xr(3, t), Xi(5, t, t.return)));
        break;
      case 1:
        (Nl(e, t),
          Rl(t),
          i & 512 && (Be || l === null || Jn(l, l.return)),
          i & 64 &&
            gi &&
            ((t = t.updateQueue),
            t !== null &&
              ((i = t.callbacks),
              i !== null &&
                ((l = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = l === null ? i : l.concat(i))))));
        break;
      case 26:
        var s = Yn;
        if (
          (Nl(e, t),
          Rl(t),
          i & 512 && (Be || l === null || Jn(l, l.return)),
          i & 4)
        ) {
          var c = l !== null ? l.memoizedState : null;
          if (((i = t.memoizedState), l === null))
            if (i === null)
              if (t.stateNode === null) {
                t: {
                  ((i = t.type),
                    (l = t.memoizedProps),
                    (s = s.ownerDocument || s));
                  e: switch (i) {
                    case "title":
                      ((c = s.getElementsByTagName("title")[0]),
                        (!c ||
                          c[ge] ||
                          c[Ct] ||
                          c.namespaceURI === "http://www.w3.org/2000/svg" ||
                          c.hasAttribute("itemprop")) &&
                          ((c = s.createElement(i)),
                          s.head.insertBefore(
                            c,
                            s.querySelector("head > title"),
                          )),
                        ll(c, i, l),
                        (c[Ct] = t),
                        Dt(c),
                        (i = c));
                      break t;
                    case "link":
                      var m = hg("link", "href", s).get(i + (l.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (
                            ((c = m[v]),
                            c.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              c.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              c.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              c.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      ((c = s.createElement(i)),
                        ll(c, i, l),
                        s.head.appendChild(c));
                      break;
                    case "meta":
                      if (
                        (m = hg("meta", "content", s).get(
                          i + (l.content || ""),
                        ))
                      ) {
                        for (v = 0; v < m.length; v++)
                          if (
                            ((c = m[v]),
                            c.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              c.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              c.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              c.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              c.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            m.splice(v, 1);
                            break e;
                          }
                      }
                      ((c = s.createElement(i)),
                        ll(c, i, l),
                        s.head.appendChild(c));
                      break;
                    default:
                      throw Error(a(468, i));
                  }
                  ((c[Ct] = t), Dt(c), (i = c));
                }
                t.stateNode = i;
              } else dg(s, t.type, t.stateNode);
            else t.stateNode = og(s, i, t.memoizedProps);
          else
            c !== i
              ? (c === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : c.count--,
                i === null
                  ? dg(s, t.type, t.stateNode)
                  : og(s, i, t.memoizedProps))
              : i === null &&
                t.stateNode !== null &&
                Bo(t, t.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        (Nl(e, t),
          Rl(t),
          i & 512 && (Be || l === null || Jn(l, l.return)),
          l !== null && i & 4 && Bo(t, t.memoizedProps, l.memoizedProps));
        break;
      case 5:
        if (
          (Nl(e, t),
          Rl(t),
          i & 512 && (Be || l === null || Jn(l, l.return)),
          t.flags & 32)
        ) {
          s = t.stateNode;
          try {
            Pa(s, "");
          } catch (nt) {
            Ft(t, t.return, nt);
          }
        }
        (i & 4 &&
          t.stateNode != null &&
          ((s = t.memoizedProps), Bo(t, s, l !== null ? l.memoizedProps : s)),
          i & 1024 && (Xo = !0));
        break;
      case 6:
        if ((Nl(e, t), Rl(t), i & 4)) {
          if (t.stateNode === null) throw Error(a(162));
          ((i = t.memoizedProps), (l = t.stateNode));
          try {
            l.nodeValue = i;
          } catch (nt) {
            Ft(t, t.return, nt);
          }
        }
        break;
      case 3:
        if (
          ((xc = null),
          (s = Yn),
          (Yn = yc(e.containerInfo)),
          Nl(e, t),
          (Yn = s),
          Rl(t),
          i & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Ou(e.containerInfo);
          } catch (nt) {
            Ft(t, t.return, nt);
          }
        Xo && ((Xo = !1), dm(t));
        break;
      case 4:
        ((i = Yn),
          (Yn = yc(t.stateNode.containerInfo)),
          Nl(e, t),
          Rl(t),
          (Yn = i));
        break;
      case 12:
        (Nl(e, t), Rl(t));
        break;
      case 31:
        (Nl(e, t),
          Rl(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), ac(t, i))));
        break;
      case 13:
        (Nl(e, t),
          Rl(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (rc = ze()),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), ac(t, i))));
        break;
      case 22:
        s = t.memoizedState !== null;
        var T = l !== null && l.memoizedState !== null,
          R = gi,
          V = Be;
        if (
          ((gi = R || s),
          (Be = V || T),
          Nl(e, t),
          (Be = V),
          (gi = R),
          Rl(t),
          i & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = s ? e._visibility & -2 : e._visibility | 1,
              s && (l === null || T || gi || Be || wa(t)),
              l = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                T = l = e;
                try {
                  if (((c = T.stateNode), s))
                    ((m = c.style),
                      typeof m.setProperty == "function"
                        ? m.setProperty("display", "none", "important")
                        : (m.display = "none"));
                  else {
                    v = T.stateNode;
                    var J = T.memoizedProps.style,
                      U =
                        J != null && J.hasOwnProperty("display")
                          ? J.display
                          : null;
                    v.style.display =
                      U == null || typeof U == "boolean" ? "" : ("" + U).trim();
                  }
                } catch (nt) {
                  Ft(T, T.return, nt);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = s ? "" : T.memoizedProps;
                } catch (nt) {
                  Ft(T, T.return, nt);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                T = e;
                try {
                  var Y = T.stateNode;
                  s ? lg(Y, !0) : lg(T.stateNode, !1);
                } catch (nt) {
                  Ft(T, T.return, nt);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (l === e && (l = null), (e = e.return));
            }
            (l === e && (l = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        i & 4 &&
          ((i = t.updateQueue),
          i !== null &&
            ((l = i.retryQueue),
            l !== null && ((i.retryQueue = null), ac(t, l))));
        break;
      case 19:
        (Nl(e, t),
          Rl(t),
          i & 4 &&
            ((i = t.updateQueue),
            i !== null && ((t.updateQueue = null), ac(t, i))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Nl(e, t), Rl(t));
    }
  }
  function Rl(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var l, i = t.return; i !== null; ) {
          if (im(i)) {
            l = i;
            break;
          }
          i = i.return;
        }
        if (l == null) throw Error(a(160));
        switch (l.tag) {
          case 27:
            var s = l.stateNode,
              c = Lo(t);
            ic(t, c, s);
            break;
          case 5:
            var m = l.stateNode;
            l.flags & 32 && (Pa(m, ""), (l.flags &= -33));
            var v = Lo(t);
            ic(t, v, m);
            break;
          case 3:
          case 4:
            var T = l.stateNode.containerInfo,
              R = Lo(t);
            qo(t, R, T);
            break;
          default:
            throw Error(a(161));
        }
      } catch (V) {
        Ft(t, t.return, V);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function dm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (dm(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function _i(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (rm(t, e.alternate, e), (e = e.sibling));
  }
  function wa(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Xi(4, e, e.return), wa(e));
          break;
        case 1:
          Jn(e, e.return);
          var l = e.stateNode;
          (typeof l.componentWillUnmount == "function" && lm(e, e.return, l),
            wa(e));
          break;
        case 27:
          Dr(e.stateNode);
        case 26:
        case 5:
          (Jn(e, e.return), wa(e));
          break;
        case 22:
          e.memoizedState === null && wa(e);
          break;
        case 30:
          wa(e);
          break;
        default:
          wa(e);
      }
      t = t.sibling;
    }
  }
  function vi(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var i = e.alternate,
        s = t,
        c = e,
        m = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (vi(s, c, l), xr(4, c));
          break;
        case 1:
          if (
            (vi(s, c, l),
            (i = c),
            (s = i.stateNode),
            typeof s.componentDidMount == "function")
          )
            try {
              s.componentDidMount();
            } catch (R) {
              Ft(i, i.return, R);
            }
          if (((i = c), (s = i.updateQueue), s !== null)) {
            var v = i.stateNode;
            try {
              var T = s.shared.hiddenCallbacks;
              if (T !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < T.length; s++)
                  Zd(T[s], v);
            } catch (R) {
              Ft(i, i.return, R);
            }
          }
          (l && m & 64 && em(c), Sr(c, c.return));
          break;
        case 27:
          am(c);
        case 26:
        case 5:
          (vi(s, c, l), l && i === null && m & 4 && nm(c), Sr(c, c.return));
          break;
        case 12:
          vi(s, c, l);
          break;
        case 31:
          (vi(s, c, l), l && m & 4 && fm(s, c));
          break;
        case 13:
          (vi(s, c, l), l && m & 4 && om(s, c));
          break;
        case 22:
          (c.memoizedState === null && vi(s, c, l), Sr(c, c.return));
          break;
        case 30:
          break;
        default:
          vi(s, c, l);
      }
      e = e.sibling;
    }
  }
  function Go(t, e) {
    var l = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (l = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== l && (t != null && t.refCount++, l != null && sr(l)));
  }
  function Vo(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && sr(t)));
  }
  function Bn(t, e, l, i) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (mm(t, e, l, i), (e = e.sibling));
  }
  function mm(t, e, l, i) {
    var s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Bn(t, e, l, i), s & 2048 && xr(9, e));
        break;
      case 1:
        Bn(t, e, l, i);
        break;
      case 3:
        (Bn(t, e, l, i),
          s & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && sr(t))));
        break;
      case 12:
        if (s & 2048) {
          (Bn(t, e, l, i), (t = e.stateNode));
          try {
            var c = e.memoizedProps,
              m = c.id,
              v = c.onPostCommit;
            typeof v == "function" &&
              v(
                m,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (T) {
            Ft(e, e.return, T);
          }
        } else Bn(t, e, l, i);
        break;
      case 31:
        Bn(t, e, l, i);
        break;
      case 13:
        Bn(t, e, l, i);
        break;
      case 23:
        break;
      case 22:
        ((c = e.stateNode),
          (m = e.alternate),
          e.memoizedState !== null
            ? c._visibility & 2
              ? Bn(t, e, l, i)
              : Tr(t, e)
            : c._visibility & 2
              ? Bn(t, e, l, i)
              : ((c._visibility |= 2),
                vu(t, e, l, i, (e.subtreeFlags & 10256) !== 0 || !1)),
          s & 2048 && Go(m, e));
        break;
      case 24:
        (Bn(t, e, l, i), s & 2048 && Vo(e.alternate, e));
        break;
      default:
        Bn(t, e, l, i);
    }
  }
  function vu(t, e, l, i, s) {
    for (
      s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var c = t,
        m = e,
        v = l,
        T = i,
        R = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          (vu(c, m, v, T, s), xr(8, m));
          break;
        case 23:
          break;
        case 22:
          var V = m.stateNode;
          (m.memoizedState !== null
            ? V._visibility & 2
              ? vu(c, m, v, T, s)
              : Tr(c, m)
            : ((V._visibility |= 2), vu(c, m, v, T, s)),
            s && R & 2048 && Go(m.alternate, m));
          break;
        case 24:
          (vu(c, m, v, T, s), s && R & 2048 && Vo(m.alternate, m));
          break;
        default:
          vu(c, m, v, T, s);
      }
      e = e.sibling;
    }
  }
  function Tr(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          i = e,
          s = i.flags;
        switch (i.tag) {
          case 22:
            (Tr(l, i), s & 2048 && Go(i.alternate, i));
            break;
          case 24:
            (Tr(l, i), s & 2048 && Vo(i.alternate, i));
            break;
          default:
            Tr(l, i);
        }
        e = e.sibling;
      }
  }
  var Cr = 8192;
  function yu(t, e, l) {
    if (t.subtreeFlags & Cr)
      for (t = t.child; t !== null; ) (gm(t, e, l), (t = t.sibling));
  }
  function gm(t, e, l) {
    switch (t.tag) {
      case 26:
        (yu(t, e, l),
          t.flags & Cr &&
            t.memoizedState !== null &&
            Kv(l, Yn, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        yu(t, e, l);
        break;
      case 3:
      case 4:
        var i = Yn;
        ((Yn = yc(t.stateNode.containerInfo)), yu(t, e, l), (Yn = i));
        break;
      case 22:
        t.memoizedState === null &&
          ((i = t.alternate),
          i !== null && i.memoizedState !== null
            ? ((i = Cr), (Cr = 16777216), yu(t, e, l), (Cr = i))
            : yu(t, e, l));
        break;
      default:
        yu(t, e, l);
    }
  }
  function pm(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Er(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var i = e[l];
          ((Je = i), vm(i, t));
        }
      pm(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (_m(t), (t = t.sibling));
  }
  function _m(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Er(t), t.flags & 2048 && Xi(9, t, t.return));
        break;
      case 3:
        Er(t);
        break;
      case 12:
        Er(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), uc(t))
          : Er(t);
        break;
      default:
        Er(t);
    }
  }
  function uc(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var i = e[l];
          ((Je = i), vm(i, t));
        }
      pm(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Xi(8, e, e.return), uc(e));
          break;
        case 22:
          ((l = e.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), uc(e)));
          break;
        default:
          uc(e);
      }
      t = t.sibling;
    }
  }
  function vm(t, e) {
    for (; Je !== null; ) {
      var l = Je;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Xi(8, l, e);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var i = l.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          sr(l.memoizedState.cache);
      }
      if (((i = l.child), i !== null)) ((i.return = l), (Je = i));
      else
        t: for (l = t; Je !== null; ) {
          i = Je;
          var s = i.sibling,
            c = i.return;
          if ((sm(i), i === l)) {
            Je = null;
            break t;
          }
          if (s !== null) {
            ((s.return = c), (Je = s));
            break t;
          }
          Je = c;
        }
    }
  }
  var sv = {
      getCacheForType: function (t) {
        var e = tl(Ue),
          l = e.data.get(t);
        return (l === void 0 && ((l = t()), e.data.set(t, l)), l);
      },
      cacheSignal: function () {
        return tl(Ue).controller.signal;
      },
    },
    cv = typeof WeakMap == "function" ? WeakMap : Map,
    kt = 0,
    te = null,
    jt = null,
    Yt = 0,
    Wt = 0,
    Wl = null,
    Gi = !1,
    bu = !1,
    Zo = !1,
    yi = 0,
    Ce = 0,
    Vi = 0,
    Da = 0,
    Qo = 0,
    Fl = 0,
    xu = 0,
    zr = null,
    jl = null,
    ko = !1,
    rc = 0,
    ym = 0,
    sc = 1 / 0,
    cc = null,
    Zi = null,
    Ze = 0,
    Qi = null,
    Su = null,
    bi = 0,
    Ko = 0,
    Jo = null,
    bm = null,
    Mr = 0,
    Wo = null;
  function $l() {
    return (kt & 2) !== 0 && Yt !== 0 ? Yt & -Yt : D.T !== null ? eh() : wt();
  }
  function xm() {
    if (Fl === 0)
      if ((Yt & 536870912) === 0 || Lt) {
        var t = sl;
        ((sl <<= 1), (sl & 3932160) === 0 && (sl = 262144), (Fl = t));
      } else Fl = 536870912;
    return ((t = Kl.current), t !== null && (t.flags |= 32), Fl);
  }
  function Ul(t, e, l) {
    (((t === te && (Wt === 2 || Wt === 9)) || t.cancelPendingCommit !== null) &&
      (Tu(t, 0), ki(t, Yt, Fl, !1)),
      ft(t, l),
      ((kt & 2) === 0 || t !== te) &&
        (t === te &&
          ((kt & 2) === 0 && (Da |= l), Ce === 4 && ki(t, Yt, Fl, !1)),
        Wn(t)));
  }
  function Sm(t, e, l) {
    if ((kt & 6) !== 0) throw Error(a(327));
    var i = (!l && (e & 127) === 0 && (e & t.expiredLanes) === 0) || mn(t, e),
      s = i ? hv(t, e) : $o(t, e, !0),
      c = i;
    do {
      if (s === 0) {
        bu && !i && ki(t, e, 0, !1);
        break;
      } else {
        if (((l = t.current.alternate), c && !fv(l))) {
          ((s = $o(t, e, !1)), (c = !1));
          continue;
        }
        if (s === 2) {
          if (((c = e), t.errorRecoveryDisabledLanes & c)) var m = 0;
          else
            ((m = t.pendingLanes & -536870913),
              (m = m !== 0 ? m : m & 536870912 ? 536870912 : 0));
          if (m !== 0) {
            e = m;
            t: {
              var v = t;
              s = zr;
              var T = v.current.memoizedState.isDehydrated;
              if ((T && (Tu(v, m).flags |= 256), (m = $o(v, m, !1)), m !== 2)) {
                if (Zo && !T) {
                  ((v.errorRecoveryDisabledLanes |= c), (Da |= c), (s = 4));
                  break t;
                }
                ((c = jl),
                  (jl = s),
                  c !== null &&
                    (jl === null ? (jl = c) : jl.push.apply(jl, c)));
              }
              s = m;
            }
            if (((c = !1), s !== 2)) continue;
          }
        }
        if (s === 1) {
          (Tu(t, 0), ki(t, e, 0, !0));
          break;
        }
        t: {
          switch (((i = t), (c = s), c)) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              ki(i, e, Fl, !Gi);
              break t;
            case 2:
              jl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if ((e & 62914560) === e && ((s = rc + 300 - ze()), 10 < s)) {
            if ((ki(i, e, Fl, !Gi), dn(i, 0, !0) !== 0)) break t;
            ((bi = e),
              (i.timeoutHandle = Im(
                Tm.bind(
                  null,
                  i,
                  l,
                  jl,
                  cc,
                  ko,
                  e,
                  Fl,
                  Da,
                  xu,
                  Gi,
                  c,
                  "Throttled",
                  -0,
                  0,
                ),
                s,
              )));
            break t;
          }
          Tm(i, l, jl, cc, ko, e, Fl, Da, xu, Gi, c, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Wn(t);
  }
  function Tm(t, e, l, i, s, c, m, v, T, R, V, J, U, Y) {
    if (
      ((t.timeoutHandle = -1),
      (J = e.subtreeFlags),
      J & 8192 || (J & 16785408) === 16785408)
    ) {
      ((J = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: ai,
      }),
        gm(e, c, J));
      var nt =
        (c & 62914560) === c ? rc - ze() : (c & 4194048) === c ? ym - ze() : 0;
      if (((nt = Jv(J, nt)), nt !== null)) {
        ((bi = c),
          (t.cancelPendingCommit = nt(
            Dm.bind(null, t, e, c, l, i, s, m, v, T, V, J, null, U, Y),
          )),
          ki(t, c, m, !R));
        return;
      }
    }
    Dm(t, e, c, l, i, s, m, v, T);
  }
  function fv(t) {
    for (var e = t; ; ) {
      var l = e.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        e.flags & 16384 &&
        ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var i = 0; i < l.length; i++) {
          var s = l[i],
            c = s.getSnapshot;
          s = s.value;
          try {
            if (!Ql(c(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null))
        ((l.return = e), (e = l));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function ki(t, e, l, i) {
    ((e &= ~Qo),
      (e &= ~Da),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      i && (t.warmLanes |= e),
      (i = t.expirationTimes));
    for (var s = e; 0 < s; ) {
      var c = 31 - je(s),
        m = 1 << c;
      ((i[c] = -1), (s &= ~m));
    }
    l !== 0 && lt(t, l, e);
  }
  function fc() {
    return (kt & 6) === 0 ? (Ar(0), !1) : !0;
  }
  function Fo() {
    if (jt !== null) {
      if (Wt === 0) var t = jt.return;
      else ((t = jt), (ci = Sa = null), oo(t), (du = null), (fr = 0), (t = jt));
      for (; t !== null; ) (tm(t.alternate, t), (t = t.return));
      jt = null;
    }
  }
  function Tu(t, e) {
    var l = t.timeoutHandle;
    (l !== -1 && ((t.timeoutHandle = -1), wv(l)),
      (l = t.cancelPendingCommit),
      l !== null && ((t.cancelPendingCommit = null), l()),
      (bi = 0),
      Fo(),
      (te = t),
      (jt = l = ri(t.current, null)),
      (Yt = e),
      (Wt = 0),
      (Wl = null),
      (Gi = !1),
      (bu = mn(t, e)),
      (Zo = !1),
      (xu = Fl = Qo = Da = Vi = Ce = 0),
      (jl = zr = null),
      (ko = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var i = t.entangledLanes;
    if (i !== 0)
      for (t = t.entanglements, i &= e; 0 < i; ) {
        var s = 31 - je(i),
          c = 1 << s;
        ((e |= t[s]), (i &= ~c));
      }
    return ((yi = e), Ds(), l);
  }
  function Cm(t, e) {
    ((St = null),
      (D.H = vr),
      e === hu || e === Ls
        ? ((e = qd()), (Wt = 3))
        : e === If
          ? ((e = qd()), (Wt = 4))
          : (Wt =
              e === Ao
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (Wl = e),
      jt === null && ((Ce = 1), Is(t, bn(e, t.current))));
  }
  function Em() {
    var t = Kl.current;
    return t === null
      ? !0
      : (Yt & 4194048) === Yt
        ? Cn === null
        : (Yt & 62914560) === Yt || (Yt & 536870912) !== 0
          ? t === Cn
          : !1;
  }
  function zm() {
    var t = D.H;
    return ((D.H = vr), t === null ? vr : t);
  }
  function Mm() {
    var t = D.A;
    return ((D.A = sv), t);
  }
  function oc() {
    ((Ce = 4),
      Gi || ((Yt & 4194048) !== Yt && Kl.current !== null) || (bu = !0),
      ((Vi & 134217727) === 0 && (Da & 134217727) === 0) ||
        te === null ||
        ki(te, Yt, Fl, !1));
  }
  function $o(t, e, l) {
    var i = kt;
    kt |= 2;
    var s = zm(),
      c = Mm();
    ((te !== t || Yt !== e) && ((cc = null), Tu(t, e)), (e = !1));
    var m = Ce;
    t: do
      try {
        if (Wt !== 0 && jt !== null) {
          var v = jt,
            T = Wl;
          switch (Wt) {
            case 8:
              (Fo(), (m = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Kl.current === null && (e = !0);
              var R = Wt;
              if (((Wt = 0), (Wl = null), Cu(t, v, T, R), l && bu)) {
                m = 0;
                break t;
              }
              break;
            default:
              ((R = Wt), (Wt = 0), (Wl = null), Cu(t, v, T, R));
          }
        }
        (ov(), (m = Ce));
        break;
      } catch (V) {
        Cm(t, V);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (ci = Sa = null),
      (kt = i),
      (D.H = s),
      (D.A = c),
      jt === null && ((te = null), (Yt = 0), Ds()),
      m
    );
  }
  function ov() {
    for (; jt !== null; ) Am(jt);
  }
  function hv(t, e) {
    var l = kt;
    kt |= 2;
    var i = zm(),
      s = Mm();
    te !== t || Yt !== e
      ? ((cc = null), (sc = ze() + 500), Tu(t, e))
      : (bu = mn(t, e));
    t: do
      try {
        if (Wt !== 0 && jt !== null) {
          e = jt;
          var c = Wl;
          e: switch (Wt) {
            case 1:
              ((Wt = 0), (Wl = null), Cu(t, e, c, 1));
              break;
            case 2:
            case 9:
              if (Bd(c)) {
                ((Wt = 0), (Wl = null), Om(e));
                break;
              }
              ((e = function () {
                ((Wt !== 2 && Wt !== 9) || te !== t || (Wt = 7), Wn(t));
              }),
                c.then(e, e));
              break t;
            case 3:
              Wt = 7;
              break t;
            case 4:
              Wt = 5;
              break t;
            case 7:
              Bd(c)
                ? ((Wt = 0), (Wl = null), Om(e))
                : ((Wt = 0), (Wl = null), Cu(t, e, c, 7));
              break;
            case 5:
              var m = null;
              switch (jt.tag) {
                case 26:
                  m = jt.memoizedState;
                case 5:
                case 27:
                  var v = jt;
                  if (m ? mg(m) : v.stateNode.complete) {
                    ((Wt = 0), (Wl = null));
                    var T = v.sibling;
                    if (T !== null) jt = T;
                    else {
                      var R = v.return;
                      R !== null ? ((jt = R), hc(R)) : (jt = null);
                    }
                    break e;
                  }
              }
              ((Wt = 0), (Wl = null), Cu(t, e, c, 5));
              break;
            case 6:
              ((Wt = 0), (Wl = null), Cu(t, e, c, 6));
              break;
            case 8:
              (Fo(), (Ce = 6));
              break t;
            default:
              throw Error(a(462));
          }
        }
        dv();
        break;
      } catch (V) {
        Cm(t, V);
      }
    while (!0);
    return (
      (ci = Sa = null),
      (D.H = i),
      (D.A = s),
      (kt = l),
      jt !== null ? 0 : ((te = null), (Yt = 0), Ds(), Ce)
    );
  }
  function dv() {
    for (; jt !== null && !Rn(); ) Am(jt);
  }
  function Am(t) {
    var e = P1(t.alternate, t, yi);
    ((t.memoizedProps = t.pendingProps), e === null ? hc(t) : (jt = e));
  }
  function Om(t) {
    var e = t,
      l = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = k1(l, e, e.pendingProps, e.type, void 0, Yt);
        break;
      case 11:
        e = k1(l, e, e.pendingProps, e.type.render, e.ref, Yt);
        break;
      case 5:
        oo(e);
      default:
        (tm(l, e), (e = jt = Md(e, yi)), (e = P1(l, e, yi)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? hc(t) : (jt = e));
  }
  function Cu(t, e, l, i) {
    ((ci = Sa = null), oo(e), (du = null), (fr = 0));
    var s = e.return;
    try {
      if (ev(t, s, e, l, Yt)) {
        ((Ce = 1), Is(t, bn(l, t.current)), (jt = null));
        return;
      }
    } catch (c) {
      if (s !== null) throw ((jt = s), c);
      ((Ce = 1), Is(t, bn(l, t.current)), (jt = null));
      return;
    }
    e.flags & 32768
      ? (Lt || i === 1
          ? (t = !0)
          : bu || (Yt & 536870912) !== 0
            ? (t = !1)
            : ((Gi = t = !0),
              (i === 2 || i === 9 || i === 3 || i === 6) &&
                ((i = Kl.current),
                i !== null && i.tag === 13 && (i.flags |= 16384))),
        wm(e, t))
      : hc(e);
  }
  function hc(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        wm(e, Gi);
        return;
      }
      t = e.return;
      var l = iv(e.alternate, e, yi);
      if (l !== null) {
        jt = l;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        jt = e;
        return;
      }
      jt = e = t;
    } while (e !== null);
    Ce === 0 && (Ce = 5);
  }
  function wm(t, e) {
    do {
      var l = av(t.alternate, t);
      if (l !== null) {
        ((l.flags &= 32767), (jt = l));
        return;
      }
      if (
        ((l = t.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        jt = t;
        return;
      }
      jt = t = l;
    } while (t !== null);
    ((Ce = 6), (jt = null));
  }
  function Dm(t, e, l, i, s, c, m, v, T) {
    t.cancelPendingCommit = null;
    do dc();
    while (Ze !== 0);
    if ((kt & 6) !== 0) throw Error(a(327));
    if (e !== null) {
      if (e === t.current) throw Error(a(177));
      if (
        ((c = e.lanes | e.childLanes),
        (c |= Bf),
        Gt(t, l, c, m, v, T),
        t === te && ((jt = te = null), (Yt = 0)),
        (Su = e),
        (Qi = t),
        (bi = l),
        (Ko = c),
        (Jo = s),
        (bm = i),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            _v(rl, function () {
              return (Hm(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (i = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || i)
      ) {
        ((i = D.T), (D.T = null), (s = Q.p), (Q.p = 2), (m = kt), (kt |= 4));
        try {
          uv(t, e, l);
        } finally {
          ((kt = m), (Q.p = s), (D.T = i));
        }
      }
      ((Ze = 1), Nm(), Rm(), jm());
    }
  }
  function Nm() {
    if (Ze === 1) {
      Ze = 0;
      var t = Qi,
        e = Su,
        l = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || l) {
        ((l = D.T), (D.T = null));
        var i = Q.p;
        Q.p = 2;
        var s = kt;
        kt |= 4;
        try {
          hm(e, t);
          var c = ch,
            m = vd(t.containerInfo),
            v = c.focusedElem,
            T = c.selectionRange;
          if (
            m !== v &&
            v &&
            v.ownerDocument &&
            _d(v.ownerDocument.documentElement, v)
          ) {
            if (T !== null && Rf(v)) {
              var R = T.start,
                V = T.end;
              if ((V === void 0 && (V = R), "selectionStart" in v))
                ((v.selectionStart = R),
                  (v.selectionEnd = Math.min(V, v.value.length)));
              else {
                var J = v.ownerDocument || document,
                  U = (J && J.defaultView) || window;
                if (U.getSelection) {
                  var Y = U.getSelection(),
                    nt = v.textContent.length,
                    gt = Math.min(T.start, nt),
                    It = T.end === void 0 ? gt : Math.min(T.end, nt);
                  !Y.extend && gt > It && ((m = It), (It = gt), (gt = m));
                  var O = pd(v, gt),
                    E = pd(v, It);
                  if (
                    O &&
                    E &&
                    (Y.rangeCount !== 1 ||
                      Y.anchorNode !== O.node ||
                      Y.anchorOffset !== O.offset ||
                      Y.focusNode !== E.node ||
                      Y.focusOffset !== E.offset)
                  ) {
                    var N = J.createRange();
                    (N.setStart(O.node, O.offset),
                      Y.removeAllRanges(),
                      gt > It
                        ? (Y.addRange(N), Y.extend(E.node, E.offset))
                        : (N.setEnd(E.node, E.offset), Y.addRange(N)));
                  }
                }
              }
            }
            for (J = [], Y = v; (Y = Y.parentNode); )
              Y.nodeType === 1 &&
                J.push({ element: Y, left: Y.scrollLeft, top: Y.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < J.length;
              v++
            ) {
              var k = J[v];
              ((k.element.scrollLeft = k.left), (k.element.scrollTop = k.top));
            }
          }
          ((Ec = !!sh), (ch = sh = null));
        } finally {
          ((kt = s), (Q.p = i), (D.T = l));
        }
      }
      ((t.current = e), (Ze = 2));
    }
  }
  function Rm() {
    if (Ze === 2) {
      Ze = 0;
      var t = Qi,
        e = Su,
        l = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || l) {
        ((l = D.T), (D.T = null));
        var i = Q.p;
        Q.p = 2;
        var s = kt;
        kt |= 4;
        try {
          rm(t, e.alternate, e);
        } finally {
          ((kt = s), (Q.p = i), (D.T = l));
        }
      }
      Ze = 3;
    }
  }
  function jm() {
    if (Ze === 4 || Ze === 3) {
      ((Ze = 0), qn());
      var t = Qi,
        e = Su,
        l = bi,
        i = bm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Ze = 5)
        : ((Ze = 0), (Su = Qi = null), Um(t, t.pendingLanes));
      var s = t.pendingLanes;
      if (
        (s === 0 && (Zi = null),
        Se(l),
        (e = e.stateNode),
        me && typeof me.onCommitFiberRoot == "function")
      )
        try {
          me.onCommitFiberRoot(Xn, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (i !== null) {
        ((e = D.T), (s = Q.p), (Q.p = 2), (D.T = null));
        try {
          for (var c = t.onRecoverableError, m = 0; m < i.length; m++) {
            var v = i[m];
            c(v.value, { componentStack: v.stack });
          }
        } finally {
          ((D.T = e), (Q.p = s));
        }
      }
      ((bi & 3) !== 0 && dc(),
        Wn(t),
        (s = t.pendingLanes),
        (l & 261930) !== 0 && (s & 42) !== 0
          ? t === Wo
            ? Mr++
            : ((Mr = 0), (Wo = t))
          : (Mr = 0),
        Ar(0));
    }
  }
  function Um(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), sr(e)));
  }
  function dc() {
    return (Nm(), Rm(), jm(), Hm());
  }
  function Hm() {
    if (Ze !== 5) return !1;
    var t = Qi,
      e = Ko;
    Ko = 0;
    var l = Se(bi),
      i = D.T,
      s = Q.p;
    try {
      ((Q.p = 32 > l ? 32 : l), (D.T = null), (l = Jo), (Jo = null));
      var c = Qi,
        m = bi;
      if (((Ze = 0), (Su = Qi = null), (bi = 0), (kt & 6) !== 0))
        throw Error(a(331));
      var v = kt;
      if (
        ((kt |= 4),
        _m(c.current),
        mm(c, c.current, m, l),
        (kt = v),
        Ar(0, !1),
        me && typeof me.onPostCommitFiberRoot == "function")
      )
        try {
          me.onPostCommitFiberRoot(Xn, c);
        } catch {}
      return !0;
    } finally {
      ((Q.p = s), (D.T = i), Um(t, e));
    }
  }
  function Ym(t, e, l) {
    ((e = bn(l, e)),
      (e = Mo(t.stateNode, e, 2)),
      (t = Bi(t, e, 2)),
      t !== null && (ft(t, 2), Wn(t)));
  }
  function Ft(t, e, l) {
    if (t.tag === 3) Ym(t, t, l);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Ym(e, t, l);
          break;
        } else if (e.tag === 1) {
          var i = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Zi === null || !Zi.has(i)))
          ) {
            ((t = bn(l, t)),
              (l = B1(2)),
              (i = Bi(e, l, 2)),
              i !== null && (L1(l, i, e, t), ft(i, 2), Wn(i)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Po(t, e, l) {
    var i = t.pingCache;
    if (i === null) {
      i = t.pingCache = new cv();
      var s = new Set();
      i.set(e, s);
    } else ((s = i.get(e)), s === void 0 && ((s = new Set()), i.set(e, s)));
    s.has(l) ||
      ((Zo = !0), s.add(l), (t = mv.bind(null, t, e, l)), e.then(t, t));
  }
  function mv(t, e, l) {
    var i = t.pingCache;
    (i !== null && i.delete(e),
      (t.pingedLanes |= t.suspendedLanes & l),
      (t.warmLanes &= ~l),
      te === t &&
        (Yt & l) === l &&
        (Ce === 4 || (Ce === 3 && (Yt & 62914560) === Yt && 300 > ze() - rc)
          ? (kt & 2) === 0 && Tu(t, 0)
          : (Qo |= l),
        xu === Yt && (xu = 0)),
      Wn(t));
  }
  function Bm(t, e) {
    (e === 0 && (e = Oi()), (t = ya(t, e)), t !== null && (ft(t, e), Wn(t)));
  }
  function gv(t) {
    var e = t.memoizedState,
      l = 0;
    (e !== null && (l = e.retryLane), Bm(t, l));
  }
  function pv(t, e) {
    var l = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var i = t.stateNode,
          s = t.memoizedState;
        s !== null && (l = s.retryLane);
        break;
      case 19:
        i = t.stateNode;
        break;
      case 22:
        i = t.stateNode._retryCache;
        break;
      default:
        throw Error(a(314));
    }
    (i !== null && i.delete(e), Bm(t, l));
  }
  function _v(t, e) {
    return fn(t, e);
  }
  var mc = null,
    Eu = null,
    Io = !1,
    gc = !1,
    th = !1,
    Ki = 0;
  function Wn(t) {
    (t !== Eu &&
      t.next === null &&
      (Eu === null ? (mc = Eu = t) : (Eu = Eu.next = t)),
      (gc = !0),
      Io || ((Io = !0), yv()));
  }
  function Ar(t, e) {
    if (!th && gc) {
      th = !0;
      do
        for (var l = !1, i = mc; i !== null; ) {
          if (t !== 0) {
            var s = i.pendingLanes;
            if (s === 0) var c = 0;
            else {
              var m = i.suspendedLanes,
                v = i.pingedLanes;
              ((c = (1 << (31 - je(42 | t) + 1)) - 1),
                (c &= s & ~(m & ~v)),
                (c = c & 201326741 ? (c & 201326741) | 1 : c ? c | 2 : 0));
            }
            c !== 0 && ((l = !0), Gm(i, c));
          } else
            ((c = Yt),
              (c = dn(
                i,
                i === te ? c : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== -1,
              )),
              (c & 3) === 0 || mn(i, c) || ((l = !0), Gm(i, c)));
          i = i.next;
        }
      while (l);
      th = !1;
    }
  }
  function vv() {
    Lm();
  }
  function Lm() {
    gc = Io = !1;
    var t = 0;
    Ki !== 0 && Ov() && (t = Ki);
    for (var e = ze(), l = null, i = mc; i !== null; ) {
      var s = i.next,
        c = qm(i, e);
      (c === 0
        ? ((i.next = null),
          l === null ? (mc = s) : (l.next = s),
          s === null && (Eu = l))
        : ((l = i), (t !== 0 || (c & 3) !== 0) && (gc = !0)),
        (i = s));
    }
    ((Ze !== 0 && Ze !== 5) || Ar(t), Ki !== 0 && (Ki = 0));
  }
  function qm(t, e) {
    for (
      var l = t.suspendedLanes,
        i = t.pingedLanes,
        s = t.expirationTimes,
        c = t.pendingLanes & -62914561;
      0 < c;
    ) {
      var m = 31 - je(c),
        v = 1 << m,
        T = s[m];
      (T === -1
        ? ((v & l) === 0 || (v & i) !== 0) && (s[m] = Un(v, e))
        : T <= e && (t.expiredLanes |= v),
        (c &= ~v));
    }
    if (
      ((e = te),
      (l = Yt),
      (l = dn(
        t,
        t === e ? l : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (i = t.callbackNode),
      l === 0 ||
        (t === e && (Wt === 2 || Wt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        i !== null && i !== null && ne(i),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((l & 3) === 0 || mn(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e;
      switch ((i !== null && ne(i), Se(l))) {
        case 2:
        case 8:
          l = fe;
          break;
        case 32:
          l = rl;
          break;
        case 268435456:
          l = on;
          break;
        default:
          l = rl;
      }
      return (
        (i = Xm.bind(null, t)),
        (l = fn(l, i)),
        (t.callbackPriority = e),
        (t.callbackNode = l),
        e
      );
    }
    return (
      i !== null && i !== null && ne(i),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Xm(t, e) {
    if (Ze !== 0 && Ze !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var l = t.callbackNode;
    if (dc() && t.callbackNode !== l) return null;
    var i = Yt;
    return (
      (i = dn(
        t,
        t === te ? i : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      i === 0
        ? null
        : (Sm(t, i, e),
          qm(t, ze()),
          t.callbackNode != null && t.callbackNode === l
            ? Xm.bind(null, t)
            : null)
    );
  }
  function Gm(t, e) {
    if (dc()) return null;
    Sm(t, e, !0);
  }
  function yv() {
    Dv(function () {
      (kt & 6) !== 0 ? fn(jn, vv) : Lm();
    });
  }
  function eh() {
    if (Ki === 0) {
      var t = fu;
      (t === 0 && ((t = hn), (hn <<= 1), (hn & 261888) === 0 && (hn = 256)),
        (Ki = t));
    }
    return Ki;
  }
  function Vm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Ts("" + t);
  }
  function Zm(t, e) {
    var l = e.ownerDocument.createElement("input");
    return (
      (l.name = e.name),
      (l.value = e.value),
      t.id && l.setAttribute("form", t.id),
      e.parentNode.insertBefore(l, e),
      (t = new FormData(t)),
      l.parentNode.removeChild(l),
      t
    );
  }
  function bv(t, e, l, i, s) {
    if (e === "submit" && l && l.stateNode === s) {
      var c = Vm((s[Mt] || null).action),
        m = i.submitter;
      m &&
        ((e = (e = m[Mt] || null)
          ? Vm(e.formAction)
          : m.getAttribute("formAction")),
        e !== null && ((c = e), (m = null)));
      var v = new Ms("action", "action", null, i, s);
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (i.defaultPrevented) {
                if (Ki !== 0) {
                  var T = m ? Zm(s, m) : new FormData(s);
                  xo(
                    l,
                    { pending: !0, data: T, method: s.method, action: c },
                    null,
                    T,
                  );
                }
              } else
                typeof c == "function" &&
                  (v.preventDefault(),
                  (T = m ? Zm(s, m) : new FormData(s)),
                  xo(
                    l,
                    { pending: !0, data: T, method: s.method, action: c },
                    c,
                    T,
                  ));
            },
            currentTarget: s,
          },
        ],
      });
    }
  }
  for (var lh = 0; lh < Yf.length; lh++) {
    var nh = Yf[lh],
      xv = nh.toLowerCase(),
      Sv = nh[0].toUpperCase() + nh.slice(1);
    Hn(xv, "on" + Sv);
  }
  (Hn(xd, "onAnimationEnd"),
    Hn(Sd, "onAnimationIteration"),
    Hn(Td, "onAnimationStart"),
    Hn("dblclick", "onDoubleClick"),
    Hn("focusin", "onFocus"),
    Hn("focusout", "onBlur"),
    Hn(B2, "onTransitionRun"),
    Hn(L2, "onTransitionStart"),
    Hn(q2, "onTransitionCancel"),
    Hn(Cd, "onTransitionEnd"),
    gn("onMouseEnter", ["mouseout", "mouseover"]),
    gn("onMouseLeave", ["mouseout", "mouseover"]),
    gn("onPointerEnter", ["pointerout", "pointerover"]),
    gn("onPointerLeave", ["pointerout", "pointerover"]),
    Zn(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Zn(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Zn(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Zn(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Zn(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Or =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Tv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Or),
    );
  function Qm(t, e) {
    e = (e & 4) !== 0;
    for (var l = 0; l < t.length; l++) {
      var i = t[l],
        s = i.event;
      i = i.listeners;
      t: {
        var c = void 0;
        if (e)
          for (var m = i.length - 1; 0 <= m; m--) {
            var v = i[m],
              T = v.instance,
              R = v.currentTarget;
            if (((v = v.listener), T !== c && s.isPropagationStopped()))
              break t;
            ((c = v), (s.currentTarget = R));
            try {
              c(s);
            } catch (V) {
              ws(V);
            }
            ((s.currentTarget = null), (c = T));
          }
        else
          for (m = 0; m < i.length; m++) {
            if (
              ((v = i[m]),
              (T = v.instance),
              (R = v.currentTarget),
              (v = v.listener),
              T !== c && s.isPropagationStopped())
            )
              break t;
            ((c = v), (s.currentTarget = R));
            try {
              c(s);
            } catch (V) {
              ws(V);
            }
            ((s.currentTarget = null), (c = T));
          }
      }
    }
  }
  function Ut(t, e) {
    var l = e[_l];
    l === void 0 && (l = e[_l] = new Set());
    var i = t + "__bubble";
    l.has(i) || (km(e, t, 2, !1), l.add(i));
  }
  function ih(t, e, l) {
    var i = 0;
    (e && (i |= 4), km(l, t, i, e));
  }
  var pc = "_reactListening" + Math.random().toString(36).slice(2);
  function ah(t) {
    if (!t[pc]) {
      ((t[pc] = !0),
        Zl.forEach(function (l) {
          l !== "selectionchange" && (Tv.has(l) || ih(l, !1, t), ih(l, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[pc] || ((e[pc] = !0), ih("selectionchange", !1, e));
    }
  }
  function km(t, e, l, i) {
    switch (xg(e)) {
      case 2:
        var s = $v;
        break;
      case 8:
        s = Pv;
        break;
      default:
        s = bh;
    }
    ((l = s.bind(null, e, l, t)),
      (s = void 0),
      !Cf ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (s = !0),
      i
        ? s !== void 0
          ? t.addEventListener(e, l, { capture: !0, passive: s })
          : t.addEventListener(e, l, !0)
        : s !== void 0
          ? t.addEventListener(e, l, { passive: s })
          : t.addEventListener(e, l, !1));
  }
  function uh(t, e, l, i, s) {
    var c = i;
    if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
      t: for (;;) {
        if (i === null) return;
        var m = i.tag;
        if (m === 3 || m === 4) {
          var v = i.stateNode.containerInfo;
          if (v === s) break;
          if (m === 4)
            for (m = i.return; m !== null; ) {
              var T = m.tag;
              if ((T === 3 || T === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (((m = pe(v)), m === null)) return;
            if (((T = m.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              i = c = m;
              continue t;
            }
            v = v.parentNode;
          }
        }
        i = i.return;
      }
    $0(function () {
      var R = c,
        V = Sf(l),
        J = [];
      t: {
        var U = Ed.get(t);
        if (U !== void 0) {
          var Y = Ms,
            nt = t;
          switch (t) {
            case "keypress":
              if (Es(l) === 0) break t;
            case "keydown":
            case "keyup":
              Y = p2;
              break;
            case "focusin":
              ((nt = "focus"), (Y = Af));
              break;
            case "focusout":
              ((nt = "blur"), (Y = Af));
              break;
            case "beforeblur":
            case "afterblur":
              Y = Af;
              break;
            case "click":
              if (l.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Y = td;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Y = i2;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Y = y2;
              break;
            case xd:
            case Sd:
            case Td:
              Y = r2;
              break;
            case Cd:
              Y = x2;
              break;
            case "scroll":
            case "scrollend":
              Y = l2;
              break;
            case "wheel":
              Y = T2;
              break;
            case "copy":
            case "cut":
            case "paste":
              Y = c2;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Y = ld;
              break;
            case "toggle":
            case "beforetoggle":
              Y = E2;
          }
          var gt = (e & 4) !== 0,
            It = !gt && (t === "scroll" || t === "scrollend"),
            O = gt ? (U !== null ? U + "Capture" : null) : U;
          gt = [];
          for (var E = R, N; E !== null; ) {
            var k = E;
            if (
              ((N = k.stateNode),
              (k = k.tag),
              (k !== 5 && k !== 26 && k !== 27) ||
                N === null ||
                O === null ||
                ((k = $u(E, O)), k != null && gt.push(wr(E, k, N))),
              It)
            )
              break;
            E = E.return;
          }
          0 < gt.length &&
            ((U = new Y(U, nt, null, l, V)),
            J.push({ event: U, listeners: gt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((U = t === "mouseover" || t === "pointerover"),
            (Y = t === "mouseout" || t === "pointerout"),
            U &&
              l !== xf &&
              (nt = l.relatedTarget || l.fromElement) &&
              (pe(nt) || nt[Xt]))
          )
            break t;
          if (
            (Y || U) &&
            ((U =
              V.window === V
                ? V
                : (U = V.ownerDocument)
                  ? U.defaultView || U.parentWindow
                  : window),
            Y
              ? ((nt = l.relatedTarget || l.toElement),
                (Y = R),
                (nt = nt ? pe(nt) : null),
                nt !== null &&
                  ((It = f(nt)),
                  (gt = nt.tag),
                  nt !== It || (gt !== 5 && gt !== 27 && gt !== 6)) &&
                  (nt = null))
              : ((Y = null), (nt = R)),
            Y !== nt)
          ) {
            if (
              ((gt = td),
              (k = "onMouseLeave"),
              (O = "onMouseEnter"),
              (E = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((gt = ld),
                (k = "onPointerLeave"),
                (O = "onPointerEnter"),
                (E = "pointer")),
              (It = Y == null ? U : Vn(Y)),
              (N = nt == null ? U : Vn(nt)),
              (U = new gt(k, E + "leave", Y, l, V)),
              (U.target = It),
              (U.relatedTarget = N),
              (k = null),
              pe(V) === R &&
                ((gt = new gt(O, E + "enter", nt, l, V)),
                (gt.target = N),
                (gt.relatedTarget = It),
                (k = gt)),
              (It = k),
              Y && nt)
            )
              e: {
                for (gt = Cv, O = Y, E = nt, N = 0, k = O; k; k = gt(k)) N++;
                k = 0;
                for (var ht = E; ht; ht = gt(ht)) k++;
                for (; 0 < N - k; ) ((O = gt(O)), N--);
                for (; 0 < k - N; ) ((E = gt(E)), k--);
                for (; N--; ) {
                  if (O === E || (E !== null && O === E.alternate)) {
                    gt = O;
                    break e;
                  }
                  ((O = gt(O)), (E = gt(E)));
                }
                gt = null;
              }
            else gt = null;
            (Y !== null && Km(J, U, Y, gt, !1),
              nt !== null && It !== null && Km(J, It, nt, gt, !0));
          }
        }
        t: {
          if (
            ((U = R ? Vn(R) : window),
            (Y = U.nodeName && U.nodeName.toLowerCase()),
            Y === "select" || (Y === "input" && U.type === "file"))
          )
            var Vt = fd;
          else if (sd(U))
            if (od) Vt = U2;
            else {
              Vt = R2;
              var at = N2;
            }
          else
            ((Y = U.nodeName),
              !Y ||
              Y.toLowerCase() !== "input" ||
              (U.type !== "checkbox" && U.type !== "radio")
                ? R && bf(R.elementType) && (Vt = fd)
                : (Vt = j2));
          if (Vt && (Vt = Vt(t, R))) {
            cd(J, Vt, l, V);
            break t;
          }
          (at && at(t, U, R),
            t === "focusout" &&
              R &&
              U.type === "number" &&
              R.memoizedProps.value != null &&
              yf(U, "number", U.value));
        }
        switch (((at = R ? Vn(R) : window), t)) {
          case "focusin":
            (sd(at) || at.contentEditable === "true") &&
              ((lu = at), (jf = R), (ar = null));
            break;
          case "focusout":
            ar = jf = lu = null;
            break;
          case "mousedown":
            Uf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Uf = !1), yd(J, l, V));
            break;
          case "selectionchange":
            if (Y2) break;
          case "keydown":
          case "keyup":
            yd(J, l, V);
        }
        var Tt;
        if (wf)
          t: {
            switch (t) {
              case "compositionstart":
                var Bt = "onCompositionStart";
                break t;
              case "compositionend":
                Bt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Bt = "onCompositionUpdate";
                break t;
            }
            Bt = void 0;
          }
        else
          eu
            ? ud(t, l) && (Bt = "onCompositionEnd")
            : t === "keydown" &&
              l.keyCode === 229 &&
              (Bt = "onCompositionStart");
        (Bt &&
          (nd &&
            l.locale !== "ko" &&
            (eu || Bt !== "onCompositionStart"
              ? Bt === "onCompositionEnd" && eu && (Tt = P0())
              : ((Di = V),
                (Ef = "value" in Di ? Di.value : Di.textContent),
                (eu = !0))),
          (at = _c(R, Bt)),
          0 < at.length &&
            ((Bt = new ed(Bt, t, null, l, V)),
            J.push({ event: Bt, listeners: at }),
            Tt
              ? (Bt.data = Tt)
              : ((Tt = rd(l)), Tt !== null && (Bt.data = Tt)))),
          (Tt = M2 ? A2(t, l) : O2(t, l)) &&
            ((Bt = _c(R, "onBeforeInput")),
            0 < Bt.length &&
              ((at = new ed("onBeforeInput", "beforeinput", null, l, V)),
              J.push({ event: at, listeners: Bt }),
              (at.data = Tt))),
          bv(J, t, R, l, V));
      }
      Qm(J, e);
    });
  }
  function wr(t, e, l) {
    return { instance: t, listener: e, currentTarget: l };
  }
  function _c(t, e) {
    for (var l = e + "Capture", i = []; t !== null; ) {
      var s = t,
        c = s.stateNode;
      if (
        ((s = s.tag),
        (s !== 5 && s !== 26 && s !== 27) ||
          c === null ||
          ((s = $u(t, l)),
          s != null && i.unshift(wr(t, s, c)),
          (s = $u(t, e)),
          s != null && i.push(wr(t, s, c))),
        t.tag === 3)
      )
        return i;
      t = t.return;
    }
    return [];
  }
  function Cv(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Km(t, e, l, i, s) {
    for (var c = e._reactName, m = []; l !== null && l !== i; ) {
      var v = l,
        T = v.alternate,
        R = v.stateNode;
      if (((v = v.tag), T !== null && T === i)) break;
      ((v !== 5 && v !== 26 && v !== 27) ||
        R === null ||
        ((T = R),
        s
          ? ((R = $u(l, c)), R != null && m.unshift(wr(l, R, T)))
          : s || ((R = $u(l, c)), R != null && m.push(wr(l, R, T)))),
        (l = l.return));
    }
    m.length !== 0 && t.push({ event: e, listeners: m });
  }
  var Ev = /\r\n?/g,
    zv = /\u0000|\uFFFD/g;
  function Jm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        Ev,
        `
`,
      )
      .replace(zv, "");
  }
  function Wm(t, e) {
    return ((e = Jm(e)), Jm(t) === e);
  }
  function Pt(t, e, l, i, s, c) {
    switch (l) {
      case "children":
        typeof i == "string"
          ? e === "body" || (e === "textarea" && i === "") || Pa(t, i)
          : (typeof i == "number" || typeof i == "bigint") &&
            e !== "body" &&
            Pa(t, "" + i);
        break;
      case "className":
        xs(t, "class", i);
        break;
      case "tabIndex":
        xs(t, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        xs(t, l, i);
        break;
      case "style":
        W0(t, i, c);
        break;
      case "data":
        if (e !== "object") {
          xs(t, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (e !== "a" || l !== "href")) {
          t.removeAttribute(l);
          break;
        }
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "symbol" ||
          typeof i == "boolean"
        ) {
          t.removeAttribute(l);
          break;
        }
        ((i = Ts("" + i)), t.setAttribute(l, i));
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          t.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof c == "function" &&
            (l === "formAction"
              ? (e !== "input" && Pt(t, e, "name", s.name, s, null),
                Pt(t, e, "formEncType", s.formEncType, s, null),
                Pt(t, e, "formMethod", s.formMethod, s, null),
                Pt(t, e, "formTarget", s.formTarget, s, null))
              : (Pt(t, e, "encType", s.encType, s, null),
                Pt(t, e, "method", s.method, s, null),
                Pt(t, e, "target", s.target, s, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          t.removeAttribute(l);
          break;
        }
        ((i = Ts("" + i)), t.setAttribute(l, i));
        break;
      case "onClick":
        i != null && (t.onclick = ai);
        break;
      case "onScroll":
        i != null && Ut("scroll", t);
        break;
      case "onScrollEnd":
        i != null && Ut("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(a(61));
          if (((l = i.__html), l != null)) {
            if (s.children != null) throw Error(a(60));
            t.innerHTML = l;
          }
        }
        break;
      case "multiple":
        t.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        t.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          i == null ||
          typeof i == "function" ||
          typeof i == "boolean" ||
          typeof i == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((l = Ts("" + i)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(l, "" + i)
          : t.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol"
          ? t.setAttribute(l, "")
          : t.removeAttribute(l);
        break;
      case "capture":
      case "download":
        i === !0
          ? t.setAttribute(l, "")
          : i !== !1 &&
              i != null &&
              typeof i != "function" &&
              typeof i != "symbol"
            ? t.setAttribute(l, i)
            : t.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        !isNaN(i) &&
        1 <= i
          ? t.setAttribute(l, i)
          : t.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i)
          ? t.removeAttribute(l)
          : t.setAttribute(l, i);
        break;
      case "popover":
        (Ut("beforetoggle", t), Ut("toggle", t), bs(t, "popover", i));
        break;
      case "xlinkActuate":
        ii(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
        break;
      case "xlinkArcrole":
        ii(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
        break;
      case "xlinkRole":
        ii(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
        break;
      case "xlinkShow":
        ii(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
        break;
      case "xlinkTitle":
        ii(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
        break;
      case "xlinkType":
        ii(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
        break;
      case "xmlBase":
        ii(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
        break;
      case "xmlLang":
        ii(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
        break;
      case "xmlSpace":
        ii(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
        break;
      case "is":
        bs(t, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = t2.get(l) || l), bs(t, l, i));
    }
  }
  function rh(t, e, l, i, s, c) {
    switch (l) {
      case "style":
        W0(t, i, c);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i)) throw Error(a(61));
          if (((l = i.__html), l != null)) {
            if (s.children != null) throw Error(a(60));
            t.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof i == "string"
          ? Pa(t, i)
          : (typeof i == "number" || typeof i == "bigint") && Pa(t, "" + i);
        break;
      case "onScroll":
        i != null && Ut("scroll", t);
        break;
      case "onScrollEnd":
        i != null && Ut("scrollend", t);
        break;
      case "onClick":
        i != null && (t.onclick = ai);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Fa.hasOwnProperty(l))
          t: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((s = l.endsWith("Capture")),
              (e = l.slice(2, s ? l.length - 7 : void 0)),
              (c = t[Mt] || null),
              (c = c != null ? c[l] : null),
              typeof c == "function" && t.removeEventListener(e, c, s),
              typeof i == "function")
            ) {
              (typeof c != "function" &&
                c !== null &&
                (l in t
                  ? (t[l] = null)
                  : t.hasAttribute(l) && t.removeAttribute(l)),
                t.addEventListener(e, i, s));
              break t;
            }
            l in t
              ? (t[l] = i)
              : i === !0
                ? t.setAttribute(l, "")
                : bs(t, l, i);
          }
    }
  }
  function ll(t, e, l) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Ut("error", t), Ut("load", t));
        var i = !1,
          s = !1,
          c;
        for (c in l)
          if (l.hasOwnProperty(c)) {
            var m = l[c];
            if (m != null)
              switch (c) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(a(137, e));
                default:
                  Pt(t, e, c, m, l, null);
              }
          }
        (s && Pt(t, e, "srcSet", l.srcSet, l, null),
          i && Pt(t, e, "src", l.src, l, null));
        return;
      case "input":
        Ut("invalid", t);
        var v = (c = m = s = null),
          T = null,
          R = null;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var V = l[i];
            if (V != null)
              switch (i) {
                case "name":
                  s = V;
                  break;
                case "type":
                  m = V;
                  break;
                case "checked":
                  T = V;
                  break;
                case "defaultChecked":
                  R = V;
                  break;
                case "value":
                  c = V;
                  break;
                case "defaultValue":
                  v = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null) throw Error(a(137, e));
                  break;
                default:
                  Pt(t, e, i, V, l, null);
              }
          }
        Q0(t, c, v, T, R, m, s, !1);
        return;
      case "select":
        (Ut("invalid", t), (i = m = c = null));
        for (s in l)
          if (l.hasOwnProperty(s) && ((v = l[s]), v != null))
            switch (s) {
              case "value":
                c = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                i = v;
              default:
                Pt(t, e, s, v, l, null);
            }
        ((e = c),
          (l = m),
          (t.multiple = !!i),
          e != null ? $a(t, !!i, e, !1) : l != null && $a(t, !!i, l, !0));
        return;
      case "textarea":
        (Ut("invalid", t), (c = s = i = null));
        for (m in l)
          if (l.hasOwnProperty(m) && ((v = l[m]), v != null))
            switch (m) {
              case "value":
                i = v;
                break;
              case "defaultValue":
                s = v;
                break;
              case "children":
                c = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(a(91));
                break;
              default:
                Pt(t, e, m, v, l, null);
            }
        K0(t, i, s, c);
        return;
      case "option":
        for (T in l)
          l.hasOwnProperty(T) &&
            ((i = l[T]), i != null) &&
            (T === "selected"
              ? (t.selected =
                  i && typeof i != "function" && typeof i != "symbol")
              : Pt(t, e, T, i, l, null));
        return;
      case "dialog":
        (Ut("beforetoggle", t),
          Ut("toggle", t),
          Ut("cancel", t),
          Ut("close", t));
        break;
      case "iframe":
      case "object":
        Ut("load", t);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Or.length; i++) Ut(Or[i], t);
        break;
      case "image":
        (Ut("error", t), Ut("load", t));
        break;
      case "details":
        Ut("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (Ut("error", t), Ut("load", t));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (R in l)
          if (l.hasOwnProperty(R) && ((i = l[R]), i != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(a(137, e));
              default:
                Pt(t, e, R, i, l, null);
            }
        return;
      default:
        if (bf(e)) {
          for (V in l)
            l.hasOwnProperty(V) &&
              ((i = l[V]), i !== void 0 && rh(t, e, V, i, l, void 0));
          return;
        }
    }
    for (v in l)
      l.hasOwnProperty(v) && ((i = l[v]), i != null && Pt(t, e, v, i, l, null));
  }
  function Mv(t, e, l, i) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null,
          c = null,
          m = null,
          v = null,
          T = null,
          R = null,
          V = null;
        for (Y in l) {
          var J = l[Y];
          if (l.hasOwnProperty(Y) && J != null)
            switch (Y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = J;
              default:
                i.hasOwnProperty(Y) || Pt(t, e, Y, null, i, J);
            }
        }
        for (var U in i) {
          var Y = i[U];
          if (((J = l[U]), i.hasOwnProperty(U) && (Y != null || J != null)))
            switch (U) {
              case "type":
                c = Y;
                break;
              case "name":
                s = Y;
                break;
              case "checked":
                R = Y;
                break;
              case "defaultChecked":
                V = Y;
                break;
              case "value":
                m = Y;
                break;
              case "defaultValue":
                v = Y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Y != null) throw Error(a(137, e));
                break;
              default:
                Y !== J && Pt(t, e, U, Y, i, J);
            }
        }
        vf(t, m, v, T, R, V, c, s);
        return;
      case "select":
        Y = m = v = U = null;
        for (c in l)
          if (((T = l[c]), l.hasOwnProperty(c) && T != null))
            switch (c) {
              case "value":
                break;
              case "multiple":
                Y = T;
              default:
                i.hasOwnProperty(c) || Pt(t, e, c, null, i, T);
            }
        for (s in i)
          if (
            ((c = i[s]),
            (T = l[s]),
            i.hasOwnProperty(s) && (c != null || T != null))
          )
            switch (s) {
              case "value":
                U = c;
                break;
              case "defaultValue":
                v = c;
                break;
              case "multiple":
                m = c;
              default:
                c !== T && Pt(t, e, s, c, i, T);
            }
        ((e = v),
          (l = m),
          (i = Y),
          U != null
            ? $a(t, !!l, U, !1)
            : !!i != !!l &&
              (e != null ? $a(t, !!l, e, !0) : $a(t, !!l, l ? [] : "", !1)));
        return;
      case "textarea":
        Y = U = null;
        for (v in l)
          if (
            ((s = l[v]),
            l.hasOwnProperty(v) && s != null && !i.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Pt(t, e, v, null, i, s);
            }
        for (m in i)
          if (
            ((s = i[m]),
            (c = l[m]),
            i.hasOwnProperty(m) && (s != null || c != null))
          )
            switch (m) {
              case "value":
                U = s;
                break;
              case "defaultValue":
                Y = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(a(91));
                break;
              default:
                s !== c && Pt(t, e, m, s, i, c);
            }
        k0(t, U, Y);
        return;
      case "option":
        for (var nt in l)
          ((U = l[nt]),
            l.hasOwnProperty(nt) &&
              U != null &&
              !i.hasOwnProperty(nt) &&
              (nt === "selected"
                ? (t.selected = !1)
                : Pt(t, e, nt, null, i, U)));
        for (T in i)
          ((U = i[T]),
            (Y = l[T]),
            i.hasOwnProperty(T) &&
              U !== Y &&
              (U != null || Y != null) &&
              (T === "selected"
                ? (t.selected =
                    U && typeof U != "function" && typeof U != "symbol")
                : Pt(t, e, T, U, i, Y)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var gt in l)
          ((U = l[gt]),
            l.hasOwnProperty(gt) &&
              U != null &&
              !i.hasOwnProperty(gt) &&
              Pt(t, e, gt, null, i, U));
        for (R in i)
          if (
            ((U = i[R]),
            (Y = l[R]),
            i.hasOwnProperty(R) && U !== Y && (U != null || Y != null))
          )
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(a(137, e));
                break;
              default:
                Pt(t, e, R, U, i, Y);
            }
        return;
      default:
        if (bf(e)) {
          for (var It in l)
            ((U = l[It]),
              l.hasOwnProperty(It) &&
                U !== void 0 &&
                !i.hasOwnProperty(It) &&
                rh(t, e, It, void 0, i, U));
          for (V in i)
            ((U = i[V]),
              (Y = l[V]),
              !i.hasOwnProperty(V) ||
                U === Y ||
                (U === void 0 && Y === void 0) ||
                rh(t, e, V, U, i, Y));
          return;
        }
    }
    for (var O in l)
      ((U = l[O]),
        l.hasOwnProperty(O) &&
          U != null &&
          !i.hasOwnProperty(O) &&
          Pt(t, e, O, null, i, U));
    for (J in i)
      ((U = i[J]),
        (Y = l[J]),
        !i.hasOwnProperty(J) ||
          U === Y ||
          (U == null && Y == null) ||
          Pt(t, e, J, U, i, Y));
  }
  function Fm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Av() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, l = performance.getEntriesByType("resource"), i = 0;
        i < l.length;
        i++
      ) {
        var s = l[i],
          c = s.transferSize,
          m = s.initiatorType,
          v = s.duration;
        if (c && v && Fm(m)) {
          for (m = 0, v = s.responseEnd, i += 1; i < l.length; i++) {
            var T = l[i],
              R = T.startTime;
            if (R > v) break;
            var V = T.transferSize,
              J = T.initiatorType;
            V &&
              Fm(J) &&
              ((T = T.responseEnd), (m += V * (T < v ? 1 : (v - R) / (T - R))));
          }
          if ((--i, (e += (8 * (c + m)) / (s.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var sh = null,
    ch = null;
  function vc(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function $m(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Pm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function fh(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var oh = null;
  function Ov() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === oh
        ? !1
        : ((oh = t), !0)
      : ((oh = null), !1);
  }
  var Im = typeof setTimeout == "function" ? setTimeout : void 0,
    wv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    tg = typeof Promise == "function" ? Promise : void 0,
    Dv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof tg < "u"
          ? function (t) {
              return tg.resolve(null).then(t).catch(Nv);
            }
          : Im;
  function Nv(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Ji(t) {
    return t === "head";
  }
  function eg(t, e) {
    var l = e,
      i = 0;
    do {
      var s = l.nextSibling;
      if ((t.removeChild(l), s && s.nodeType === 8))
        if (((l = s.data), l === "/$" || l === "/&")) {
          if (i === 0) {
            (t.removeChild(s), Ou(e));
            return;
          }
          i--;
        } else if (
          l === "$" ||
          l === "$?" ||
          l === "$~" ||
          l === "$!" ||
          l === "&"
        )
          i++;
        else if (l === "html") Dr(t.ownerDocument.documentElement);
        else if (l === "head") {
          ((l = t.ownerDocument.head), Dr(l));
          for (var c = l.firstChild; c; ) {
            var m = c.nextSibling,
              v = c.nodeName;
            (c[ge] ||
              v === "SCRIPT" ||
              v === "STYLE" ||
              (v === "LINK" && c.rel.toLowerCase() === "stylesheet") ||
              l.removeChild(c),
              (c = m));
          }
        } else l === "body" && Dr(t.ownerDocument.body);
      l = s;
    } while (l);
    Ou(e);
  }
  function lg(t, e) {
    var l = t;
    t = 0;
    do {
      var i = l.nextSibling;
      if (
        (l.nodeType === 1
          ? e
            ? ((l._stashedDisplay = l.style.display),
              (l.style.display = "none"))
            : ((l.style.display = l._stashedDisplay || ""),
              l.getAttribute("style") === "" && l.removeAttribute("style"))
          : l.nodeType === 3 &&
            (e
              ? ((l._stashedText = l.nodeValue), (l.nodeValue = ""))
              : (l.nodeValue = l._stashedText || "")),
        i && i.nodeType === 8)
      )
        if (((l = i.data), l === "/$")) {
          if (t === 0) break;
          t--;
        } else (l !== "$" && l !== "$?" && l !== "$~" && l !== "$!") || t++;
      l = i;
    } while (l);
  }
  function hh(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e;
      switch (((e = e.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (hh(l), Me(l));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(l);
    }
  }
  function Rv(t, e, l, i) {
    for (; t.nodeType === 1; ) {
      var s = l;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (i) {
        if (!t[ge])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((c = t.getAttribute("rel")),
                c === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                c !== s.rel ||
                t.getAttribute("href") !==
                  (s.href == null || s.href === "" ? null : s.href) ||
                t.getAttribute("crossorigin") !==
                  (s.crossOrigin == null ? null : s.crossOrigin) ||
                t.getAttribute("title") !== (s.title == null ? null : s.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((c = t.getAttribute("src")),
                (c !== (s.src == null ? null : s.src) ||
                  t.getAttribute("type") !== (s.type == null ? null : s.type) ||
                  t.getAttribute("crossorigin") !==
                    (s.crossOrigin == null ? null : s.crossOrigin)) &&
                  c &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var c = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === c) return t;
      } else return t;
      if (((t = En(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function jv(t, e, l) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !l) ||
        ((t = En(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function ng(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = En(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function dh(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function mh(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function Uv(t, e) {
    var l = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || l.readyState !== "loading") e();
    else {
      var i = function () {
        (e(), l.removeEventListener("DOMContentLoaded", i));
      };
      (l.addEventListener("DOMContentLoaded", i), (t._reactRetry = i));
    }
  }
  function En(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var gh = null;
  function ig(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "/$" || l === "/&") {
          if (e === 0) return En(t.nextSibling);
          e--;
        } else
          (l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function ag(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data;
        if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
          if (e === 0) return t;
          e--;
        } else (l !== "/$" && l !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function ug(t, e, l) {
    switch (((e = vc(l)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(a(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(a(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(a(454));
        return t;
      default:
        throw Error(a(451));
    }
  }
  function Dr(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Me(t);
  }
  var zn = new Map(),
    rg = new Set();
  function yc(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var xi = Q.d;
  Q.d = { f: Hv, r: Yv, D: Bv, C: Lv, L: qv, m: Xv, X: Vv, S: Gv, M: Zv };
  function Hv() {
    var t = xi.f(),
      e = fc();
    return t || e;
  }
  function Yv(t) {
    var e = Ol(t);
    e !== null && e.tag === 5 && e.type === "form" ? C1(e) : xi.r(t);
  }
  var zu = typeof document > "u" ? null : document;
  function sg(t, e, l) {
    var i = zu;
    if (i && typeof e == "string" && e) {
      var s = vn(e);
      ((s = 'link[rel="' + t + '"][href="' + s + '"]'),
        typeof l == "string" && (s += '[crossorigin="' + l + '"]'),
        rg.has(s) ||
          (rg.add(s),
          (t = { rel: t, crossOrigin: l, href: e }),
          i.querySelector(s) === null &&
            ((e = i.createElement("link")),
            ll(e, "link", t),
            Dt(e),
            i.head.appendChild(e))));
    }
  }
  function Bv(t) {
    (xi.D(t), sg("dns-prefetch", t, null));
  }
  function Lv(t, e) {
    (xi.C(t, e), sg("preconnect", t, e));
  }
  function qv(t, e, l) {
    xi.L(t, e, l);
    var i = zu;
    if (i && t && e) {
      var s = 'link[rel="preload"][as="' + vn(e) + '"]';
      e === "image" && l && l.imageSrcSet
        ? ((s += '[imagesrcset="' + vn(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (s += '[imagesizes="' + vn(l.imageSizes) + '"]'))
        : (s += '[href="' + vn(t) + '"]');
      var c = s;
      switch (e) {
        case "style":
          c = Mu(t);
          break;
        case "script":
          c = Au(t);
      }
      zn.has(c) ||
        ((t = y(
          {
            rel: "preload",
            href: e === "image" && l && l.imageSrcSet ? void 0 : t,
            as: e,
          },
          l,
        )),
        zn.set(c, t),
        i.querySelector(s) !== null ||
          (e === "style" && i.querySelector(Nr(c))) ||
          (e === "script" && i.querySelector(Rr(c))) ||
          ((e = i.createElement("link")),
          ll(e, "link", t),
          Dt(e),
          i.head.appendChild(e)));
    }
  }
  function Xv(t, e) {
    xi.m(t, e);
    var l = zu;
    if (l && t) {
      var i = e && typeof e.as == "string" ? e.as : "script",
        s =
          'link[rel="modulepreload"][as="' + vn(i) + '"][href="' + vn(t) + '"]',
        c = s;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          c = Au(t);
      }
      if (
        !zn.has(c) &&
        ((t = y({ rel: "modulepreload", href: t }, e)),
        zn.set(c, t),
        l.querySelector(s) === null)
      ) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Rr(c))) return;
        }
        ((i = l.createElement("link")),
          ll(i, "link", t),
          Dt(i),
          l.head.appendChild(i));
      }
    }
  }
  function Gv(t, e, l) {
    xi.S(t, e, l);
    var i = zu;
    if (i && t) {
      var s = _e(i).hoistableStyles,
        c = Mu(t);
      e = e || "default";
      var m = s.get(c);
      if (!m) {
        var v = { loading: 0, preload: null };
        if ((m = i.querySelector(Nr(c)))) v.loading = 5;
        else {
          ((t = y({ rel: "stylesheet", href: t, "data-precedence": e }, l)),
            (l = zn.get(c)) && ph(t, l));
          var T = (m = i.createElement("link"));
          (Dt(T),
            ll(T, "link", t),
            (T._p = new Promise(function (R, V) {
              ((T.onload = R), (T.onerror = V));
            })),
            T.addEventListener("load", function () {
              v.loading |= 1;
            }),
            T.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            bc(m, e, i));
        }
        ((m = { type: "stylesheet", instance: m, count: 1, state: v }),
          s.set(c, m));
      }
    }
  }
  function Vv(t, e) {
    xi.X(t, e);
    var l = zu;
    if (l && t) {
      var i = _e(l).hoistableScripts,
        s = Au(t),
        c = i.get(s);
      c ||
        ((c = l.querySelector(Rr(s))),
        c ||
          ((t = y({ src: t, async: !0 }, e)),
          (e = zn.get(s)) && _h(t, e),
          (c = l.createElement("script")),
          Dt(c),
          ll(c, "link", t),
          l.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        i.set(s, c));
    }
  }
  function Zv(t, e) {
    xi.M(t, e);
    var l = zu;
    if (l && t) {
      var i = _e(l).hoistableScripts,
        s = Au(t),
        c = i.get(s);
      c ||
        ((c = l.querySelector(Rr(s))),
        c ||
          ((t = y({ src: t, async: !0, type: "module" }, e)),
          (e = zn.get(s)) && _h(t, e),
          (c = l.createElement("script")),
          Dt(c),
          ll(c, "link", t),
          l.head.appendChild(c)),
        (c = { type: "script", instance: c, count: 1, state: null }),
        i.set(s, c));
    }
  }
  function cg(t, e, l, i) {
    var s = (s = dt.current) ? yc(s) : null;
    if (!s) throw Error(a(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((e = Mu(l.href)),
            (l = _e(s).hoistableStyles),
            (i = l.get(e)),
            i ||
              ((i = { type: "style", instance: null, count: 0, state: null }),
              l.set(e, i)),
            i)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          t = Mu(l.href);
          var c = _e(s).hoistableStyles,
            m = c.get(t);
          if (
            (m ||
              ((s = s.ownerDocument || s),
              (m = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              c.set(t, m),
              (c = s.querySelector(Nr(t))) &&
                !c._p &&
                ((m.instance = c), (m.state.loading = 5)),
              zn.has(t) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                zn.set(t, l),
                c || Qv(s, t, l, m.state))),
            e && i === null)
          )
            throw Error(a(528, ""));
          return m;
        }
        if (e && i !== null) throw Error(a(529, ""));
        return null;
      case "script":
        return (
          (e = l.async),
          (l = l.src),
          typeof l == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Au(l)),
              (l = _e(s).hoistableScripts),
              (i = l.get(e)),
              i ||
                ((i = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(e, i)),
              i)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(a(444, t));
    }
  }
  function Mu(t) {
    return 'href="' + vn(t) + '"';
  }
  function Nr(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function fg(t) {
    return y({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function Qv(t, e, l, i) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (i.loading = 1)
      : ((e = t.createElement("link")),
        (i.preload = e),
        e.addEventListener("load", function () {
          return (i.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (i.loading |= 2);
        }),
        ll(e, "link", l),
        Dt(e),
        t.head.appendChild(e));
  }
  function Au(t) {
    return '[src="' + vn(t) + '"]';
  }
  function Rr(t) {
    return "script[async]" + t;
  }
  function og(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var i = t.querySelector('style[data-href~="' + vn(l.href) + '"]');
          if (i) return ((e.instance = i), Dt(i), i);
          var s = y({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (i = (t.ownerDocument || t).createElement("style")),
            Dt(i),
            ll(i, "style", s),
            bc(i, l.precedence, t),
            (e.instance = i)
          );
        case "stylesheet":
          s = Mu(l.href);
          var c = t.querySelector(Nr(s));
          if (c) return ((e.state.loading |= 4), (e.instance = c), Dt(c), c);
          ((i = fg(l)),
            (s = zn.get(s)) && ph(i, s),
            (c = (t.ownerDocument || t).createElement("link")),
            Dt(c));
          var m = c;
          return (
            (m._p = new Promise(function (v, T) {
              ((m.onload = v), (m.onerror = T));
            })),
            ll(c, "link", i),
            (e.state.loading |= 4),
            bc(c, l.precedence, t),
            (e.instance = c)
          );
        case "script":
          return (
            (c = Au(l.src)),
            (s = t.querySelector(Rr(c)))
              ? ((e.instance = s), Dt(s), s)
              : ((i = l),
                (s = zn.get(c)) && ((i = y({}, l)), _h(i, s)),
                (t = t.ownerDocument || t),
                (s = t.createElement("script")),
                Dt(s),
                ll(s, "link", i),
                t.head.appendChild(s),
                (e.instance = s))
          );
        case "void":
          return null;
        default:
          throw Error(a(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((i = e.instance), (e.state.loading |= 4), bc(i, l.precedence, t));
    return e.instance;
  }
  function bc(t, e, l) {
    for (
      var i = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        s = i.length ? i[i.length - 1] : null,
        c = s,
        m = 0;
      m < i.length;
      m++
    ) {
      var v = i[m];
      if (v.dataset.precedence === e) c = v;
      else if (c !== s) break;
    }
    c
      ? c.parentNode.insertBefore(t, c.nextSibling)
      : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild));
  }
  function ph(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function _h(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var xc = null;
  function hg(t, e, l) {
    if (xc === null) {
      var i = new Map(),
        s = (xc = new Map());
      s.set(l, i);
    } else ((s = xc), (i = s.get(l)), i || ((i = new Map()), s.set(l, i)));
    if (i.has(t)) return i;
    for (
      i.set(t, null), l = l.getElementsByTagName(t), s = 0;
      s < l.length;
      s++
    ) {
      var c = l[s];
      if (
        !(
          c[ge] ||
          c[Ct] ||
          (t === "link" && c.getAttribute("rel") === "stylesheet")
        ) &&
        c.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var m = c.getAttribute(e) || "";
        m = t + m;
        var v = i.get(m);
        v ? v.push(c) : i.set(m, [c]);
      }
    }
    return i;
  }
  function dg(t, e, l) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        l,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function kv(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function mg(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Kv(t, e, l, i) {
    if (
      l.type === "stylesheet" &&
      (typeof i.media != "string" || matchMedia(i.media).matches !== !1) &&
      (l.state.loading & 4) === 0
    ) {
      if (l.instance === null) {
        var s = Mu(i.href),
          c = e.querySelector(Nr(s));
        if (c) {
          ((e = c._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Sc.bind(t)), e.then(t, t)),
            (l.state.loading |= 4),
            (l.instance = c),
            Dt(c));
          return;
        }
        ((c = e.ownerDocument || e),
          (i = fg(i)),
          (s = zn.get(s)) && ph(i, s),
          (c = c.createElement("link")),
          Dt(c));
        var m = c;
        ((m._p = new Promise(function (v, T) {
          ((m.onload = v), (m.onerror = T));
        })),
          ll(c, "link", i),
          (l.instance = c));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(l, e),
        (e = l.state.preload) &&
          (l.state.loading & 3) === 0 &&
          (t.count++,
          (l = Sc.bind(t)),
          e.addEventListener("load", l),
          e.addEventListener("error", l)));
    }
  }
  var vh = 0;
  function Jv(t, e) {
    return (
      t.stylesheets && t.count === 0 && Cc(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (l) {
            var i = setTimeout(function () {
              if ((t.stylesheets && Cc(t, t.stylesheets), t.unsuspend)) {
                var c = t.unsuspend;
                ((t.unsuspend = null), c());
              }
            }, 6e4 + e);
            0 < t.imgBytes && vh === 0 && (vh = 62500 * Av());
            var s = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Cc(t, t.stylesheets), t.unsuspend))
                ) {
                  var c = t.unsuspend;
                  ((t.unsuspend = null), c());
                }
              },
              (t.imgBytes > vh ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = l),
              function () {
                ((t.unsuspend = null), clearTimeout(i), clearTimeout(s));
              }
            );
          }
        : null
    );
  }
  function Sc() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Cc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Tc = null;
  function Cc(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Tc = new Map()),
        e.forEach(Wv, t),
        (Tc = null),
        Sc.call(t)));
  }
  function Wv(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Tc.get(t);
      if (l) var i = l.get(null);
      else {
        ((l = new Map()), Tc.set(t, l));
        for (
          var s = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            c = 0;
          c < s.length;
          c++
        ) {
          var m = s[c];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") &&
            (l.set(m.dataset.precedence, m), (i = m));
        }
        i && l.set(null, i);
      }
      ((s = e.instance),
        (m = s.getAttribute("data-precedence")),
        (c = l.get(m) || i),
        c === i && l.set(null, s),
        l.set(m, s),
        this.count++,
        (i = Sc.bind(this)),
        s.addEventListener("load", i),
        s.addEventListener("error", i),
        c
          ? c.parentNode.insertBefore(s, c.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(s, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var jr = {
    $$typeof: X,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0,
  };
  function Fv(t, e, l, i, s, c, m, v, T) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = yt(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = yt(0)),
      (this.hiddenUpdates = yt(null)),
      (this.identifierPrefix = i),
      (this.onUncaughtError = s),
      (this.onCaughtError = c),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = T),
      (this.incompleteTransitions = new Map()));
  }
  function gg(t, e, l, i, s, c, m, v, T, R, V, J) {
    return (
      (t = new Fv(t, e, l, m, T, R, V, J, v)),
      (e = 1),
      c === !0 && (e |= 24),
      (c = kl(3, null, null, e)),
      (t.current = c),
      (c.stateNode = t),
      (e = Ff()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (c.memoizedState = { element: i, isDehydrated: l, cache: e }),
      to(c),
      t
    );
  }
  function pg(t) {
    return t ? ((t = au), t) : au;
  }
  function _g(t, e, l, i, s, c) {
    ((s = pg(s)),
      i.context === null ? (i.context = s) : (i.pendingContext = s),
      (i = Yi(e)),
      (i.payload = { element: l }),
      (c = c === void 0 ? null : c),
      c !== null && (i.callback = c),
      (l = Bi(t, i, e)),
      l !== null && (Ul(l, t, e), hr(l, t, e)));
  }
  function vg(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane;
      t.retryLane = l !== 0 && l < e ? l : e;
    }
  }
  function yh(t, e) {
    (vg(t, e), (t = t.alternate) && vg(t, e));
  }
  function yg(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = ya(t, 67108864);
      (e !== null && Ul(e, t, 67108864), yh(t, 67108864));
    }
  }
  function bg(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = $l();
      e = vt(e);
      var l = ya(t, e);
      (l !== null && Ul(l, t, e), yh(t, e));
    }
  }
  var Ec = !0;
  function $v(t, e, l, i) {
    var s = D.T;
    D.T = null;
    var c = Q.p;
    try {
      ((Q.p = 2), bh(t, e, l, i));
    } finally {
      ((Q.p = c), (D.T = s));
    }
  }
  function Pv(t, e, l, i) {
    var s = D.T;
    D.T = null;
    var c = Q.p;
    try {
      ((Q.p = 8), bh(t, e, l, i));
    } finally {
      ((Q.p = c), (D.T = s));
    }
  }
  function bh(t, e, l, i) {
    if (Ec) {
      var s = xh(i);
      if (s === null) (uh(t, e, i, zc, l), Sg(t, i));
      else if (ty(s, t, e, l, i)) i.stopPropagation();
      else if ((Sg(t, i), e & 4 && -1 < Iv.indexOf(t))) {
        for (; s !== null; ) {
          var c = Ol(s);
          if (c !== null)
            switch (c.tag) {
              case 3:
                if (((c = c.stateNode), c.current.memoizedState.isDehydrated)) {
                  var m = Ve(c.pendingLanes);
                  if (m !== 0) {
                    var v = c;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var T = 1 << (31 - je(m));
                      ((v.entanglements[1] |= T), (m &= ~T));
                    }
                    (Wn(c), (kt & 6) === 0 && ((sc = ze() + 500), Ar(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((v = ya(c, 2)), v !== null && Ul(v, c, 2), fc(), yh(c, 2));
            }
          if (((c = xh(i)), c === null && uh(t, e, i, zc, l), c === s)) break;
          s = c;
        }
        s !== null && i.stopPropagation();
      } else uh(t, e, i, null, l);
    }
  }
  function xh(t) {
    return ((t = Sf(t)), Sh(t));
  }
  var zc = null;
  function Sh(t) {
    if (((zc = null), (t = pe(t)), t !== null)) {
      var e = f(t);
      if (e === null) t = null;
      else {
        var l = e.tag;
        if (l === 13) {
          if (((t = h(e)), t !== null)) return t;
          t = null;
        } else if (l === 31) {
          if (((t = d(e)), t !== null)) return t;
          t = null;
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((zc = t), null);
  }
  function xg(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Re()) {
          case jn:
            return 2;
          case fe:
            return 8;
          case rl:
          case Al:
            return 32;
          case on:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Th = !1,
    Wi = null,
    Fi = null,
    $i = null,
    Ur = new Map(),
    Hr = new Map(),
    Pi = [],
    Iv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function Sg(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Wi = null;
        break;
      case "dragenter":
      case "dragleave":
        Fi = null;
        break;
      case "mouseover":
      case "mouseout":
        $i = null;
        break;
      case "pointerover":
      case "pointerout":
        Ur.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hr.delete(e.pointerId);
    }
  }
  function Yr(t, e, l, i, s, c) {
    return t === null || t.nativeEvent !== c
      ? ((t = {
          blockedOn: e,
          domEventName: l,
          eventSystemFlags: i,
          nativeEvent: c,
          targetContainers: [s],
        }),
        e !== null && ((e = Ol(e)), e !== null && yg(e)),
        t)
      : ((t.eventSystemFlags |= i),
        (e = t.targetContainers),
        s !== null && e.indexOf(s) === -1 && e.push(s),
        t);
  }
  function ty(t, e, l, i, s) {
    switch (e) {
      case "focusin":
        return ((Wi = Yr(Wi, t, e, l, i, s)), !0);
      case "dragenter":
        return ((Fi = Yr(Fi, t, e, l, i, s)), !0);
      case "mouseover":
        return (($i = Yr($i, t, e, l, i, s)), !0);
      case "pointerover":
        var c = s.pointerId;
        return (Ur.set(c, Yr(Ur.get(c) || null, t, e, l, i, s)), !0);
      case "gotpointercapture":
        return (
          (c = s.pointerId),
          Hr.set(c, Yr(Hr.get(c) || null, t, e, l, i, s)),
          !0
        );
    }
    return !1;
  }
  function Tg(t) {
    var e = pe(t.target);
    if (e !== null) {
      var l = f(e);
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = h(l)), e !== null)) {
            ((t.blockedOn = e),
              oe(t.priority, function () {
                bg(l);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = d(l)), e !== null)) {
            ((t.blockedOn = e),
              oe(t.priority, function () {
                bg(l);
              }));
            return;
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Mc(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = xh(t.nativeEvent);
      if (l === null) {
        l = t.nativeEvent;
        var i = new l.constructor(l.type, l);
        ((xf = i), l.target.dispatchEvent(i), (xf = null));
      } else return ((e = Ol(l)), e !== null && yg(e), (t.blockedOn = l), !1);
      e.shift();
    }
    return !0;
  }
  function Cg(t, e, l) {
    Mc(t) && l.delete(e);
  }
  function ey() {
    ((Th = !1),
      Wi !== null && Mc(Wi) && (Wi = null),
      Fi !== null && Mc(Fi) && (Fi = null),
      $i !== null && Mc($i) && ($i = null),
      Ur.forEach(Cg),
      Hr.forEach(Cg));
  }
  function Ac(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Th ||
        ((Th = !0),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, ey)));
  }
  var Oc = null;
  function Eg(t) {
    Oc !== t &&
      ((Oc = t),
      o.unstable_scheduleCallback(o.unstable_NormalPriority, function () {
        Oc === t && (Oc = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            i = t[e + 1],
            s = t[e + 2];
          if (typeof i != "function") {
            if (Sh(i || l) === null) continue;
            break;
          }
          var c = Ol(l);
          c !== null &&
            (t.splice(e, 3),
            (e -= 3),
            xo(c, { pending: !0, data: s, method: l.method, action: i }, i, s));
        }
      }));
  }
  function Ou(t) {
    function e(T) {
      return Ac(T, t);
    }
    (Wi !== null && Ac(Wi, t),
      Fi !== null && Ac(Fi, t),
      $i !== null && Ac($i, t),
      Ur.forEach(e),
      Hr.forEach(e));
    for (var l = 0; l < Pi.length; l++) {
      var i = Pi[l];
      i.blockedOn === t && (i.blockedOn = null);
    }
    for (; 0 < Pi.length && ((l = Pi[0]), l.blockedOn === null); )
      (Tg(l), l.blockedOn === null && Pi.shift());
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (i = 0; i < l.length; i += 3) {
        var s = l[i],
          c = l[i + 1],
          m = s[Mt] || null;
        if (typeof c == "function") m || Eg(l);
        else if (m) {
          var v = null;
          if (c && c.hasAttribute("formAction")) {
            if (((s = c), (m = c[Mt] || null))) v = m.formAction;
            else if (Sh(s) !== null) continue;
          } else v = m.action;
          (typeof v == "function" ? (l[i + 1] = v) : (l.splice(i, 3), (i -= 3)),
            Eg(l));
        }
      }
  }
  function zg() {
    function t(c) {
      c.canIntercept &&
        c.info === "react-transition" &&
        c.intercept({
          handler: function () {
            return new Promise(function (m) {
              return (s = m);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (s !== null && (s(), (s = null)), i || setTimeout(l, 20));
    }
    function l() {
      if (!i && !navigation.transition) {
        var c = navigation.currentEntry;
        c &&
          c.url != null &&
          navigation.navigate(c.url, {
            state: c.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var i = !1,
        s = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(l, 100),
        function () {
          ((i = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            s !== null && (s(), (s = null)));
        }
      );
    }
  }
  function Ch(t) {
    this._internalRoot = t;
  }
  ((wc.prototype.render = Ch.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(a(409));
      var l = e.current,
        i = $l();
      _g(l, i, t, e, null, null);
    }),
    (wc.prototype.unmount = Ch.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (_g(t.current, 2, null, t, null, null), fc(), (e[Xt] = null));
        }
      }));
  function wc(t) {
    this._internalRoot = t;
  }
  wc.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = wt();
      t = { blockedOn: null, target: t, priority: e };
      for (var l = 0; l < Pi.length && e !== 0 && e < Pi[l].priority; l++);
      (Pi.splice(l, 0, t), l === 0 && Tg(t));
    }
  };
  var Mg = n.version;
  if (Mg !== "19.2.4") throw Error(a(527, Mg, "19.2.4"));
  Q.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(a(188))
        : ((t = Object.keys(t).join(",")), Error(a(268, t)));
    return (
      (t = p(e)),
      (t = t !== null ? _(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var ly = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: D,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Dc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Dc.isDisabled && Dc.supportsFiber)
      try {
        ((Xn = Dc.inject(ly)), (me = Dc));
      } catch {}
  }
  return (
    (Lr.createRoot = function (t, e) {
      if (!r(t)) throw Error(a(299));
      var l = !1,
        i = "",
        s = j1,
        c = U1,
        m = H1;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (l = !0),
          e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (s = e.onUncaughtError),
          e.onCaughtError !== void 0 && (c = e.onCaughtError),
          e.onRecoverableError !== void 0 && (m = e.onRecoverableError)),
        (e = gg(t, 1, !1, null, null, l, i, null, s, c, m, zg)),
        (t[Xt] = e.current),
        ah(t),
        new Ch(e)
      );
    }),
    (Lr.hydrateRoot = function (t, e, l) {
      if (!r(t)) throw Error(a(299));
      var i = !1,
        s = "",
        c = j1,
        m = U1,
        v = H1,
        T = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (i = !0),
          l.identifierPrefix !== void 0 && (s = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (c = l.onUncaughtError),
          l.onCaughtError !== void 0 && (m = l.onCaughtError),
          l.onRecoverableError !== void 0 && (v = l.onRecoverableError),
          l.formState !== void 0 && (T = l.formState)),
        (e = gg(t, 1, !0, e, l ?? null, i, s, T, c, m, v, zg)),
        (e.context = pg(null)),
        (l = e.current),
        (i = $l()),
        (i = vt(i)),
        (s = Yi(i)),
        (s.callback = null),
        Bi(l, s, i),
        (l = i),
        (e.current.lanes = l),
        ft(e, l),
        Wn(e),
        (t[Xt] = e.current),
        ah(t),
        new wc(e)
      );
    }),
    (Lr.version = "19.2.4"),
    Lr
  );
}
var Yg;
function dy() {
  if (Yg) return Mh.exports;
  Yg = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (n) {
        console.error(n);
      }
  }
  return (o(), (Mh.exports = hy()), Mh.exports);
}
var my = dy();
function Tp(o, n, u) {
  return Math.max(o, Math.min(n, u));
}
class gy {
  advance(n) {
    if (!this.isRunning) return;
    let u = !1;
    if (this.lerp)
      ((this.value =
        ((a = this.value),
        (r = this.to),
        (f = 60 * this.lerp),
        (h = n),
        (function (d, g, p) {
          return (1 - p) * d + p * g;
        })(a, r, 1 - Math.exp(-f * h)))),
        Math.round(this.value) === this.to &&
          ((this.value = this.to), (u = !0)));
    else {
      this.currentTime += n;
      const d = Tp(0, this.currentTime / this.duration, 1);
      u = d >= 1;
      const g = u ? 1 : this.easing(d);
      this.value = this.from + (this.to - this.from) * g;
    }
    var a, r, f, h;
    (this.onUpdate?.(this.value, u), u && this.stop());
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(
    n,
    u,
    {
      lerp: a = 0.1,
      duration: r = 1,
      easing: f = (g) => g,
      onStart: h,
      onUpdate: d,
    },
  ) {
    ((this.from = this.value = n),
      (this.to = u),
      (this.lerp = a),
      (this.duration = r),
      (this.easing = f),
      (this.currentTime = 0),
      (this.isRunning = !0),
      h?.(),
      (this.onUpdate = d));
  }
}
class py {
  constructor({
    wrapper: n,
    content: u,
    autoResize: a = !0,
    debounce: r = 250,
  } = {}) {
    ((this.wrapper = n),
      (this.content = u),
      a &&
        ((this.debouncedResize = (function (f, h) {
          let d;
          return function () {
            let g = arguments,
              p = this;
            (clearTimeout(d),
              (d = setTimeout(function () {
                f.apply(p, g);
              }, h)));
          };
        })(this.resize, r)),
        this.wrapper === window
          ? window.addEventListener("resize", this.debouncedResize, !1)
          : ((this.wrapperResizeObserver = new ResizeObserver(
              this.debouncedResize,
            )),
            this.wrapperResizeObserver.observe(this.wrapper)),
        (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
        this.contentResizeObserver.observe(this.content)),
      this.resize());
  }
  destroy() {
    (this.wrapperResizeObserver?.disconnect(),
      this.contentResizeObserver?.disconnect(),
      window.removeEventListener("resize", this.debouncedResize, !1));
  }
  resize = () => {
    (this.onWrapperResize(), this.onContentResize());
  };
  onWrapperResize = () => {
    this.wrapper === window
      ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
      : ((this.width = this.wrapper.clientWidth),
        (this.height = this.wrapper.clientHeight));
  };
  onContentResize = () => {
    this.wrapper === window
      ? ((this.scrollHeight = this.content.scrollHeight),
        (this.scrollWidth = this.content.scrollWidth))
      : ((this.scrollHeight = this.wrapper.scrollHeight),
        (this.scrollWidth = this.wrapper.scrollWidth));
  };
  get limit() {
    return {
      x: this.scrollWidth - this.width,
      y: this.scrollHeight - this.height,
    };
  }
}
class Cp {
  constructor() {
    this.events = {};
  }
  emit(n, ...u) {
    let a = this.events[n] || [];
    for (let r = 0, f = a.length; r < f; r++) a[r](...u);
  }
  on(n, u) {
    return (
      this.events[n]?.push(u) || (this.events[n] = [u]),
      () => {
        this.events[n] = this.events[n]?.filter((a) => u !== a);
      }
    );
  }
  off(n, u) {
    this.events[n] = this.events[n]?.filter((a) => u !== a);
  }
  destroy() {
    this.events = {};
  }
}
const Bg = 100 / 6;
class _y {
  constructor(n, { wheelMultiplier: u = 1, touchMultiplier: a = 1 }) {
    ((this.element = n),
      (this.wheelMultiplier = u),
      (this.touchMultiplier = a),
      (this.touchStart = { x: null, y: null }),
      (this.emitter = new Cp()),
      window.addEventListener("resize", this.onWindowResize, !1),
      this.onWindowResize(),
      this.element.addEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.addEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.addEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.addEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      }));
  }
  on(n, u) {
    return this.emitter.on(n, u);
  }
  destroy() {
    (this.emitter.destroy(),
      window.removeEventListener("resize", this.onWindowResize, !1),
      this.element.removeEventListener("wheel", this.onWheel, { passive: !1 }),
      this.element.removeEventListener("touchstart", this.onTouchStart, {
        passive: !1,
      }),
      this.element.removeEventListener("touchmove", this.onTouchMove, {
        passive: !1,
      }),
      this.element.removeEventListener("touchend", this.onTouchEnd, {
        passive: !1,
      }));
  }
  onTouchStart = (n) => {
    const { clientX: u, clientY: a } = n.targetTouches ? n.targetTouches[0] : n;
    ((this.touchStart.x = u),
      (this.touchStart.y = a),
      (this.lastDelta = { x: 0, y: 0 }),
      this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: n }));
  };
  onTouchMove = (n) => {
    const { clientX: u, clientY: a } = n.targetTouches ? n.targetTouches[0] : n,
      r = -(u - this.touchStart.x) * this.touchMultiplier,
      f = -(a - this.touchStart.y) * this.touchMultiplier;
    ((this.touchStart.x = u),
      (this.touchStart.y = a),
      (this.lastDelta = { x: r, y: f }),
      this.emitter.emit("scroll", { deltaX: r, deltaY: f, event: n }));
  };
  onTouchEnd = (n) => {
    this.emitter.emit("scroll", {
      deltaX: this.lastDelta.x,
      deltaY: this.lastDelta.y,
      event: n,
    });
  };
  onWheel = (n) => {
    let { deltaX: u, deltaY: a, deltaMode: r } = n;
    ((u *= r === 1 ? Bg : r === 2 ? this.windowWidth : 1),
      (a *= r === 1 ? Bg : r === 2 ? this.windowHeight : 1),
      (u *= this.wheelMultiplier),
      (a *= this.wheelMultiplier),
      this.emitter.emit("scroll", { deltaX: u, deltaY: a, event: n }));
  };
  onWindowResize = () => {
    ((this.windowWidth = window.innerWidth),
      (this.windowHeight = window.innerHeight));
  };
}
class vy {
  constructor({
    wrapper: n = window,
    content: u = document.documentElement,
    wheelEventsTarget: a = n,
    eventsTarget: r = a,
    smoothWheel: f = !0,
    syncTouch: h = !1,
    syncTouchLerp: d = 0.075,
    touchInertiaMultiplier: g = 35,
    duration: p,
    easing: _ = (X) => Math.min(1, 1.001 - Math.pow(2, -10 * X)),
    lerp: y = !p && 0.1,
    infinite: x = !1,
    orientation: b = "vertical",
    gestureOrientation: z = "vertical",
    touchMultiplier: S = 1,
    wheelMultiplier: w = 1,
    autoResize: q = !0,
    __experimental__naiveDimensions: Z = !1,
  } = {}) {
    ((this.__isSmooth = !1),
      (this.__isScrolling = !1),
      (this.__isStopped = !1),
      (this.__isLocked = !1),
      (this.onVirtualScroll = ({ deltaX: X, deltaY: H, event: L }) => {
        if (L.ctrlKey) return;
        const K = L.type.includes("touch"),
          j = L.type.includes("wheel");
        if (
          this.options.syncTouch &&
          K &&
          L.type === "touchstart" &&
          !this.isStopped &&
          !this.isLocked
        )
          return void this.reset();
        const F = X === 0 && H === 0,
          W =
            (this.options.gestureOrientation === "vertical" && H === 0) ||
            (this.options.gestureOrientation === "horizontal" && X === 0);
        if (F || W) return;
        let $ = L.composedPath();
        if (
          (($ = $.slice(0, $.indexOf(this.rootElement))),
          $.find((ct) => {
            var pt, D, Q, I, st;
            return (
              ((pt = ct.hasAttribute) === null || pt === void 0
                ? void 0
                : pt.call(ct, "data-lenis-prevent")) ||
              (K &&
                ((D = ct.hasAttribute) === null || D === void 0
                  ? void 0
                  : D.call(ct, "data-lenis-prevent-touch"))) ||
              (j &&
                ((Q = ct.hasAttribute) === null || Q === void 0
                  ? void 0
                  : Q.call(ct, "data-lenis-prevent-wheel"))) ||
              (((I = ct.classList) === null || I === void 0
                ? void 0
                : I.contains("lenis")) &&
                !(
                  !((st = ct.classList) === null || st === void 0) &&
                  st.contains("lenis-stopped")
                ))
            );
          }))
        )
          return;
        if (this.isStopped || this.isLocked) return void L.preventDefault();
        if (
          ((this.isSmooth =
            (this.options.syncTouch && K) || (this.options.smoothWheel && j)),
          !this.isSmooth)
        )
          return ((this.isScrolling = !1), void this.animate.stop());
        L.preventDefault();
        let ut = H;
        this.options.gestureOrientation === "both"
          ? (ut = Math.abs(H) > Math.abs(X) ? H : X)
          : this.options.gestureOrientation === "horizontal" && (ut = X);
        const P = K && this.options.syncTouch,
          _t = K && L.type === "touchend" && Math.abs(ut) > 5;
        (_t && (ut = this.velocity * this.options.touchInertiaMultiplier),
          this.scrollTo(
            this.targetScroll + ut,
            Object.assign(
              { programmatic: !1 },
              P
                ? { lerp: _t ? this.options.syncTouchLerp : 1 }
                : {
                    lerp: this.options.lerp,
                    duration: this.options.duration,
                    easing: this.options.easing,
                  },
            ),
          ));
      }),
      (this.onNativeScroll = () => {
        if (!this.__preventNextScrollEvent && !this.isScrolling) {
          const X = this.animatedScroll;
          ((this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            (this.direction = Math.sign(this.animatedScroll - X)),
            this.emit());
        }
      }),
      (window.lenisVersion = "1.0.42"),
      (n !== document.documentElement && n !== document.body) || (n = window),
      (this.options = {
        wrapper: n,
        content: u,
        wheelEventsTarget: a,
        eventsTarget: r,
        smoothWheel: f,
        syncTouch: h,
        syncTouchLerp: d,
        touchInertiaMultiplier: g,
        duration: p,
        easing: _,
        lerp: y,
        infinite: x,
        gestureOrientation: z,
        orientation: b,
        touchMultiplier: S,
        wheelMultiplier: w,
        autoResize: q,
        __experimental__naiveDimensions: Z,
      }),
      (this.animate = new gy()),
      (this.emitter = new Cp()),
      (this.dimensions = new py({ wrapper: n, content: u, autoResize: q })),
      this.toggleClassName("lenis", !0),
      (this.velocity = 0),
      (this.isLocked = !1),
      (this.isStopped = !1),
      (this.isSmooth = h || f),
      (this.isScrolling = !1),
      (this.targetScroll = this.animatedScroll = this.actualScroll),
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1),
      (this.virtualScroll = new _y(r, {
        touchMultiplier: S,
        wheelMultiplier: w,
      })),
      this.virtualScroll.on("scroll", this.onVirtualScroll));
  }
  destroy() {
    (this.emitter.destroy(),
      this.options.wrapper.removeEventListener(
        "scroll",
        this.onNativeScroll,
        !1,
      ),
      this.virtualScroll.destroy(),
      this.dimensions.destroy(),
      this.toggleClassName("lenis", !1),
      this.toggleClassName("lenis-smooth", !1),
      this.toggleClassName("lenis-scrolling", !1),
      this.toggleClassName("lenis-stopped", !1),
      this.toggleClassName("lenis-locked", !1));
  }
  on(n, u) {
    return this.emitter.on(n, u);
  }
  off(n, u) {
    return this.emitter.off(n, u);
  }
  setScroll(n) {
    this.isHorizontal
      ? (this.rootElement.scrollLeft = n)
      : (this.rootElement.scrollTop = n);
  }
  resize() {
    this.dimensions.resize();
  }
  emit() {
    this.emitter.emit("scroll", this);
  }
  reset() {
    ((this.isLocked = !1),
      (this.isScrolling = !1),
      (this.animatedScroll = this.targetScroll = this.actualScroll),
      (this.velocity = 0),
      this.animate.stop());
  }
  start() {
    this.isStopped && ((this.isStopped = !1), this.reset());
  }
  stop() {
    this.isStopped ||
      ((this.isStopped = !0), this.animate.stop(), this.reset());
  }
  raf(n) {
    const u = n - (this.time || n);
    ((this.time = n), this.animate.advance(0.001 * u));
  }
  scrollTo(
    n,
    {
      offset: u = 0,
      immediate: a = !1,
      lock: r = !1,
      duration: f = this.options.duration,
      easing: h = this.options.easing,
      lerp: d = !f && this.options.lerp,
      onComplete: g,
      force: p = !1,
      programmatic: _ = !0,
    } = {},
  ) {
    if ((!this.isStopped && !this.isLocked) || p) {
      if (["top", "left", "start"].includes(n)) n = 0;
      else if (["bottom", "right", "end"].includes(n)) n = this.limit;
      else {
        let y;
        if (
          (typeof n == "string"
            ? (y = document.querySelector(n))
            : n?.nodeType && (y = n),
          y)
        ) {
          if (this.options.wrapper !== window) {
            const b = this.options.wrapper.getBoundingClientRect();
            u -= this.isHorizontal ? b.left : b.top;
          }
          const x = y.getBoundingClientRect();
          n = (this.isHorizontal ? x.left : x.top) + this.animatedScroll;
        }
      }
      if (typeof n == "number") {
        if (
          ((n += u),
          (n = Math.round(n)),
          this.options.infinite
            ? _ && (this.targetScroll = this.animatedScroll = this.scroll)
            : (n = Tp(0, n, this.limit)),
          a)
        )
          return (
            (this.animatedScroll = this.targetScroll = n),
            this.setScroll(this.scroll),
            this.reset(),
            void (g == null || g(this))
          );
        if (!_) {
          if (n === this.targetScroll) return;
          this.targetScroll = n;
        }
        this.animate.fromTo(this.animatedScroll, n, {
          duration: f,
          easing: h,
          lerp: d,
          onStart: () => {
            (r && (this.isLocked = !0), (this.isScrolling = !0));
          },
          onUpdate: (y, x) => {
            ((this.isScrolling = !0),
              (this.velocity = y - this.animatedScroll),
              (this.direction = Math.sign(this.velocity)),
              (this.animatedScroll = y),
              this.setScroll(this.scroll),
              _ && (this.targetScroll = y),
              x || this.emit(),
              x &&
                (this.reset(),
                this.emit(),
                g?.(this),
                (this.__preventNextScrollEvent = !0),
                requestAnimationFrame(() => {
                  delete this.__preventNextScrollEvent;
                })));
          },
        });
      }
    }
  }
  get rootElement() {
    return this.options.wrapper === window
      ? document.documentElement
      : this.options.wrapper;
  }
  get limit() {
    return this.options.__experimental__naiveDimensions
      ? this.isHorizontal
        ? this.rootElement.scrollWidth - this.rootElement.clientWidth
        : this.rootElement.scrollHeight - this.rootElement.clientHeight
      : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
  }
  get isHorizontal() {
    return this.options.orientation === "horizontal";
  }
  get actualScroll() {
    return this.isHorizontal
      ? this.rootElement.scrollLeft
      : this.rootElement.scrollTop;
  }
  get scroll() {
    return this.options.infinite
      ? ((n = this.animatedScroll), (u = this.limit), ((n % u) + u) % u)
      : this.animatedScroll;
    var n, u;
  }
  get progress() {
    return this.limit === 0 ? 1 : this.scroll / this.limit;
  }
  get isSmooth() {
    return this.__isSmooth;
  }
  set isSmooth(n) {
    this.__isSmooth !== n &&
      ((this.__isSmooth = n), this.toggleClassName("lenis-smooth", n));
  }
  get isScrolling() {
    return this.__isScrolling;
  }
  set isScrolling(n) {
    this.__isScrolling !== n &&
      ((this.__isScrolling = n), this.toggleClassName("lenis-scrolling", n));
  }
  get isStopped() {
    return this.__isStopped;
  }
  set isStopped(n) {
    this.__isStopped !== n &&
      ((this.__isStopped = n), this.toggleClassName("lenis-stopped", n));
  }
  get isLocked() {
    return this.__isLocked;
  }
  set isLocked(n) {
    this.__isLocked !== n &&
      ((this.__isLocked = n), this.toggleClassName("lenis-locked", n));
  }
  get className() {
    let n = "lenis";
    return (
      this.isStopped && (n += " lenis-stopped"),
      this.isLocked && (n += " lenis-locked"),
      this.isScrolling && (n += " lenis-scrolling"),
      this.isSmooth && (n += " lenis-smooth"),
      n
    );
  }
  toggleClassName(n, u) {
    (this.rootElement.classList.toggle(n, u),
      this.emitter.emit("className change", this));
  }
}
function Si(o) {
  if (o === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return o;
}
function Ep(o, n) {
  ((o.prototype = Object.create(n.prototype)),
    (o.prototype.constructor = o),
    (o.__proto__ = n));
}
var rn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  Zu = { duration: 0.5, overwrite: !1, delay: 0 },
  _0,
  al,
  de,
  wn = 1e8,
  le = 1 / wn,
  kh = Math.PI * 2,
  yy = kh / 4,
  by = 0,
  zp = Math.sqrt,
  xy = Math.cos,
  Sy = Math.sin,
  $e = function (n) {
    return typeof n == "string";
  },
  Ee = function (n) {
    return typeof n == "function";
  },
  Mi = function (n) {
    return typeof n == "number";
  },
  v0 = function (n) {
    return typeof n > "u";
  },
  li = function (n) {
    return typeof n == "object";
  },
  Yl = function (n) {
    return n !== !1;
  },
  y0 = function () {
    return typeof window < "u";
  },
  Nc = function (n) {
    return Ee(n) || $e(n);
  },
  Mp =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  gl = Array.isArray,
  Ty = /random\([^)]+\)/g,
  Cy = /,\s*/g,
  Lg = /(?:-?\.?\d|\.)+/gi,
  Ap = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  Uu = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  Dh = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Op = /[+-]=-?[.\d]+/,
  Ey = /[^,'"\[\]\s]+/gi,
  zy = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  ye,
  Fn,
  Kh,
  b0,
  sn = {},
  ef = {},
  wp,
  Dp = function (n) {
    return (ef = Qu(n, sn)) && Xl;
  },
  x0 = function (n, u) {
    return console.warn(
      "Invalid property",
      n,
      "set to",
      u,
      "Missing plugin? gsap.registerPlugin()",
    );
  },
  cs = function (n, u) {
    return !u && console.warn(n);
  },
  Np = function (n, u) {
    return (n && (sn[n] = u) && ef && (ef[n] = u)) || sn;
  },
  fs = function () {
    return 0;
  },
  My = { suppressEvents: !0, isStart: !0, kill: !1 },
  kc = { suppressEvents: !0, kill: !1 },
  Ay = { suppressEvents: !0 },
  S0 = {},
  ua = [],
  Jh = {},
  Rp,
  tn = {},
  Nh = {},
  qg = 30,
  Kc = [],
  T0 = "",
  C0 = function (n) {
    var u = n[0],
      a,
      r;
    if ((li(u) || Ee(u) || (n = [n]), !(a = (u._gsap || {}).harness))) {
      for (r = Kc.length; r-- && !Kc[r].targetTest(u); );
      a = Kc[r];
    }
    for (r = n.length; r--; )
      (n[r] && (n[r]._gsap || (n[r]._gsap = new n_(n[r], a)))) ||
        n.splice(r, 1);
    return n;
  },
  La = function (n) {
    return n._gsap || C0(Dn(n))[0]._gsap;
  },
  jp = function (n, u, a) {
    return (a = n[u]) && Ee(a)
      ? n[u]()
      : (v0(a) && n.getAttribute && n.getAttribute(u)) || a;
  },
  Bl = function (n, u) {
    return (n = n.split(",")).forEach(u) || n;
  },
  we = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  ve = function (n) {
    return Math.round(n * 1e7) / 1e7 || 0;
  },
  Bu = function (n, u) {
    var a = u.charAt(0),
      r = parseFloat(u.substr(2));
    return (
      (n = parseFloat(n)),
      a === "+" ? n + r : a === "-" ? n - r : a === "*" ? n * r : n / r
    );
  },
  Oy = function (n, u) {
    for (var a = u.length, r = 0; n.indexOf(u[r]) < 0 && ++r < a; );
    return r < a;
  },
  lf = function () {
    var n = ua.length,
      u = ua.slice(0),
      a,
      r;
    for (Jh = {}, ua.length = 0, a = 0; a < n; a++)
      ((r = u[a]),
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0));
  },
  E0 = function (n) {
    return !!(n._initted || n._startAt || n.add);
  },
  Up = function (n, u, a, r) {
    (ua.length && !al && lf(),
      n.render(u, a, !!(al && u < 0 && E0(n))),
      ua.length && !al && lf());
  },
  Hp = function (n) {
    var u = parseFloat(n);
    return (u || u === 0) && (n + "").match(Ey).length < 2
      ? u
      : $e(n)
        ? n.trim()
        : n;
  },
  Yp = function (n) {
    return n;
  },
  cn = function (n, u) {
    for (var a in u) a in n || (n[a] = u[a]);
    return n;
  },
  wy = function (n) {
    return function (u, a) {
      for (var r in a)
        r in u || (r === "duration" && n) || r === "ease" || (u[r] = a[r]);
    };
  },
  Qu = function (n, u) {
    for (var a in u) n[a] = u[a];
    return n;
  },
  Xg = function o(n, u) {
    for (var a in u)
      a !== "__proto__" &&
        a !== "constructor" &&
        a !== "prototype" &&
        (n[a] = li(u[a]) ? o(n[a] || (n[a] = {}), u[a]) : u[a]);
    return n;
  },
  nf = function (n, u) {
    var a = {},
      r;
    for (r in n) r in u || (a[r] = n[r]);
    return a;
  },
  Fr = function (n) {
    var u = n.parent || ye,
      a = n.keyframes ? wy(gl(n.keyframes)) : cn;
    if (Yl(n.inherit))
      for (; u; ) (a(n, u.vars.defaults), (u = u.parent || u._dp));
    return n;
  },
  Dy = function (n, u) {
    for (var a = n.length, r = a === u.length; r && a-- && n[a] === u[a]; );
    return a < 0;
  },
  Bp = function (n, u, a, r, f) {
    var h = n[r],
      d;
    if (f) for (d = u[f]; h && h[f] > d; ) h = h._prev;
    return (
      h ? ((u._next = h._next), (h._next = u)) : ((u._next = n[a]), (n[a] = u)),
      u._next ? (u._next._prev = u) : (n[r] = u),
      (u._prev = h),
      (u.parent = u._dp = n),
      u
    );
  },
  df = function (n, u, a, r) {
    (a === void 0 && (a = "_first"), r === void 0 && (r = "_last"));
    var f = u._prev,
      h = u._next;
    (f ? (f._next = h) : n[a] === u && (n[a] = h),
      h ? (h._prev = f) : n[r] === u && (n[r] = f),
      (u._next = u._prev = u.parent = null));
  },
  ca = function (n, u) {
    (n.parent &&
      (!u || n.parent.autoRemoveChildren) &&
      n.parent.remove &&
      n.parent.remove(n),
      (n._act = 0));
  },
  qa = function (n, u) {
    if (n && (!u || u._end > n._dur || u._start < 0))
      for (var a = n; a; ) ((a._dirty = 1), (a = a.parent));
    return n;
  },
  Ny = function (n) {
    for (var u = n.parent; u && u.parent; )
      ((u._dirty = 1), u.totalDuration(), (u = u.parent));
    return n;
  },
  Wh = function (n, u, a, r) {
    return (
      n._startAt &&
      (al
        ? n._startAt.revert(kc)
        : (n.vars.immediateRender && !n.vars.autoRevert) ||
          n._startAt.render(u, !0, r))
    );
  },
  Ry = function o(n) {
    return !n || (n._ts && o(n.parent));
  },
  Gg = function (n) {
    return n._repeat ? ku(n._tTime, (n = n.duration() + n._rDelay)) * n : 0;
  },
  ku = function (n, u) {
    var a = Math.floor((n = ve(n / u)));
    return n && a === n ? a - 1 : a;
  },
  af = function (n, u) {
    return (
      (n - u._start) * u._ts +
      (u._ts >= 0 ? 0 : u._dirty ? u.totalDuration() : u._tDur)
    );
  },
  mf = function (n) {
    return (n._end = ve(
      n._start + (n._tDur / Math.abs(n._ts || n._rts || le) || 0),
    ));
  },
  gf = function (n, u) {
    var a = n._dp;
    return (
      a &&
        a.smoothChildTiming &&
        n._ts &&
        ((n._start = ve(
          a._time -
            (n._ts > 0
              ? u / n._ts
              : ((n._dirty ? n.totalDuration() : n._tDur) - u) / -n._ts),
        )),
        mf(n),
        a._dirty || qa(a, n)),
      n
    );
  },
  Lp = function (n, u) {
    var a;
    if (
      ((u._time ||
        (!u._dur && u._initted) ||
        (u._start < n._time && (u._dur || !u.add))) &&
        ((a = af(n.rawTime(), u)),
        (!u._dur || ys(0, u.totalDuration(), a) - u._tTime > le) &&
          u.render(a, !0)),
      qa(n, u)._dp && n._initted && n._time >= n._dur && n._ts)
    ) {
      if (n._dur < n.duration())
        for (a = n; a._dp; )
          (a.rawTime() >= 0 && a.totalTime(a._tTime), (a = a._dp));
      n._zTime = -le;
    }
  },
  Pn = function (n, u, a, r) {
    return (
      u.parent && ca(u),
      (u._start = ve(
        (Mi(a) ? a : a || n !== ye ? Mn(n, a, u) : n._time) + u._delay,
      )),
      (u._end = ve(
        u._start + (u.totalDuration() / Math.abs(u.timeScale()) || 0),
      )),
      Bp(n, u, "_first", "_last", n._sort ? "_start" : 0),
      Fh(u) || (n._recent = u),
      r || Lp(n, u),
      n._ts < 0 && gf(n, n._tTime),
      n
    );
  },
  qp = function (n, u) {
    return (
      (sn.ScrollTrigger || x0("scrollTrigger", u)) &&
      sn.ScrollTrigger.create(u, n)
    );
  },
  Xp = function (n, u, a, r, f) {
    if ((M0(n, u, f), !n._initted)) return 1;
    if (
      !a &&
      n._pt &&
      !al &&
      ((n._dur && n.vars.lazy !== !1) || (!n._dur && n.vars.lazy)) &&
      Rp !== ln.frame
    )
      return (ua.push(n), (n._lazy = [f, r]), 1);
  },
  jy = function o(n) {
    var u = n.parent;
    return u && u._ts && u._initted && !u._lock && (u.rawTime() < 0 || o(u));
  },
  Fh = function (n) {
    var u = n.data;
    return u === "isFromStart" || u === "isStart";
  },
  Uy = function (n, u, a, r) {
    var f = n.ratio,
      h =
        u < 0 ||
        (!u &&
          ((!n._start && jy(n) && !(!n._initted && Fh(n))) ||
            ((n._ts < 0 || n._dp._ts < 0) && !Fh(n))))
          ? 0
          : 1,
      d = n._rDelay,
      g = 0,
      p,
      _,
      y;
    if (
      (d &&
        n._repeat &&
        ((g = ys(0, n._tDur, u)),
        (_ = ku(g, d)),
        n._yoyo && _ & 1 && (h = 1 - h),
        _ !== ku(n._tTime, d) &&
          ((f = 1 - h), n.vars.repeatRefresh && n._initted && n.invalidate())),
      h !== f || al || r || n._zTime === le || (!u && n._zTime))
    ) {
      if (!n._initted && Xp(n, u, r, a, g)) return;
      for (
        y = n._zTime,
          n._zTime = u || (a ? le : 0),
          a || (a = u && !y),
          n.ratio = h,
          n._from && (h = 1 - h),
          n._time = 0,
          n._tTime = g,
          p = n._pt;
        p;
      )
        (p.r(h, p.d), (p = p._next));
      (u < 0 && Wh(n, u, a, !0),
        n._onUpdate && !a && an(n, "onUpdate"),
        g && n._repeat && !a && n.parent && an(n, "onRepeat"),
        (u >= n._tDur || u < 0) &&
          n.ratio === h &&
          (h && ca(n, 1),
          !a &&
            !al &&
            (an(n, h ? "onComplete" : "onReverseComplete", !0),
            n._prom && n._prom())));
    } else n._zTime || (n._zTime = u);
  },
  Hy = function (n, u, a) {
    var r;
    if (a > u)
      for (r = n._first; r && r._start <= a; ) {
        if (r.data === "isPause" && r._start > u) return r;
        r = r._next;
      }
    else
      for (r = n._last; r && r._start >= a; ) {
        if (r.data === "isPause" && r._start < u) return r;
        r = r._prev;
      }
  },
  Ku = function (n, u, a, r) {
    var f = n._repeat,
      h = ve(u) || 0,
      d = n._tTime / n._tDur;
    return (
      d && !r && (n._time *= h / n._dur),
      (n._dur = h),
      (n._tDur = f ? (f < 0 ? 1e10 : ve(h * (f + 1) + n._rDelay * f)) : h),
      d > 0 && !r && gf(n, (n._tTime = n._tDur * d)),
      n.parent && mf(n),
      a || qa(n.parent, n),
      n
    );
  },
  Vg = function (n) {
    return n instanceof El ? qa(n) : Ku(n, n._dur);
  },
  Yy = { _start: 0, endTime: fs, totalDuration: fs },
  Mn = function o(n, u, a) {
    var r = n.labels,
      f = n._recent || Yy,
      h = n.duration() >= wn ? f.endTime(!1) : n._dur,
      d,
      g,
      p;
    return $e(u) && (isNaN(u) || u in r)
      ? ((g = u.charAt(0)),
        (p = u.substr(-1) === "%"),
        (d = u.indexOf("=")),
        g === "<" || g === ">"
          ? (d >= 0 && (u = u.replace(/=/, "")),
            (g === "<" ? f._start : f.endTime(f._repeat >= 0)) +
              (parseFloat(u.substr(1)) || 0) *
                (p ? (d < 0 ? f : a).totalDuration() / 100 : 1))
          : d < 0
            ? (u in r || (r[u] = h), r[u])
            : ((g = parseFloat(u.charAt(d - 1) + u.substr(d + 1))),
              p && a && (g = (g / 100) * (gl(a) ? a[0] : a).totalDuration()),
              d > 1 ? o(n, u.substr(0, d - 1), a) + g : h + g))
      : u == null
        ? h
        : +u;
  },
  $r = function (n, u, a) {
    var r = Mi(u[1]),
      f = (r ? 2 : 1) + (n < 2 ? 0 : 1),
      h = u[f],
      d,
      g;
    if ((r && (h.duration = u[1]), (h.parent = a), n)) {
      for (d = h, g = a; g && !("immediateRender" in d); )
        ((d = g.vars.defaults || {}), (g = Yl(g.vars.inherit) && g.parent));
      ((h.immediateRender = Yl(d.immediateRender)),
        n < 2 ? (h.runBackwards = 1) : (h.startAt = u[f - 1]));
    }
    return new qe(u[0], h, u[f + 1]);
  },
  da = function (n, u) {
    return n || n === 0 ? u(n) : u;
  },
  ys = function (n, u, a) {
    return a < n ? n : a > u ? u : a;
  },
  dl = function (n, u) {
    return !$e(n) || !(u = zy.exec(n)) ? "" : u[1];
  },
  By = function (n, u, a) {
    return da(a, function (r) {
      return ys(n, u, r);
    });
  },
  $h = [].slice,
  Gp = function (n, u) {
    return (
      n &&
      li(n) &&
      "length" in n &&
      ((!u && !n.length) || (n.length - 1 in n && li(n[0]))) &&
      !n.nodeType &&
      n !== Fn
    );
  },
  Ly = function (n, u, a) {
    return (
      a === void 0 && (a = []),
      n.forEach(function (r) {
        var f;
        return ($e(r) && !u) || Gp(r, 1)
          ? (f = a).push.apply(f, Dn(r))
          : a.push(r);
      }) || a
    );
  },
  Dn = function (n, u, a) {
    return de && !u && de.selector
      ? de.selector(n)
      : $e(n) && !a && (Kh || !Ju())
        ? $h.call((u || b0).querySelectorAll(n), 0)
        : gl(n)
          ? Ly(n, a)
          : Gp(n)
            ? $h.call(n, 0)
            : n
              ? [n]
              : [];
  },
  Ph = function (n) {
    return (
      (n = Dn(n)[0] || cs("Invalid scope") || {}),
      function (u) {
        var a = n.current || n.nativeElement || n;
        return Dn(
          u,
          a.querySelectorAll
            ? a
            : a === n
              ? cs("Invalid scope") || b0.createElement("div")
              : n,
        );
      }
    );
  },
  Vp = function (n) {
    return n.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Zp = function (n) {
    if (Ee(n)) return n;
    var u = li(n) ? n : { each: n },
      a = Xa(u.ease),
      r = u.from || 0,
      f = parseFloat(u.base) || 0,
      h = {},
      d = r > 0 && r < 1,
      g = isNaN(r) || d,
      p = u.axis,
      _ = r,
      y = r;
    return (
      $e(r)
        ? (_ = y = { center: 0.5, edges: 0.5, end: 1 }[r] || 0)
        : !d && g && ((_ = r[0]), (y = r[1])),
      function (x, b, z) {
        var S = (z || u).length,
          w = h[S],
          q,
          Z,
          X,
          H,
          L,
          K,
          j,
          F,
          W;
        if (!w) {
          if (((W = u.grid === "auto" ? 0 : (u.grid || [1, wn])[1]), !W)) {
            for (
              j = -wn;
              j < (j = z[W++].getBoundingClientRect().left) && W < S;
            );
            W < S && W--;
          }
          for (
            w = h[S] = [],
              q = g ? Math.min(W, S) * _ - 0.5 : r % W,
              Z = W === wn ? 0 : g ? (S * y) / W - 0.5 : (r / W) | 0,
              j = 0,
              F = wn,
              K = 0;
            K < S;
            K++
          )
            ((X = (K % W) - q),
              (H = Z - ((K / W) | 0)),
              (w[K] = L = p ? Math.abs(p === "y" ? H : X) : zp(X * X + H * H)),
              L > j && (j = L),
              L < F && (F = L));
          (r === "random" && Vp(w),
            (w.max = j - F),
            (w.min = F),
            (w.v = S =
              (parseFloat(u.amount) ||
                parseFloat(u.each) *
                  (W > S
                    ? S - 1
                    : p
                      ? p === "y"
                        ? S / W
                        : W
                      : Math.max(W, S / W)) ||
                0) * (r === "edges" ? -1 : 1)),
            (w.b = S < 0 ? f - S : f),
            (w.u = dl(u.amount || u.each) || 0),
            (a = a && S < 0 ? t_(a) : a));
        }
        return (
          (S = (w[x] - w.min) / w.max || 0),
          ve(w.b + (a ? a(S) : S) * w.v) + w.u
        );
      }
    );
  },
  Ih = function (n) {
    var u = Math.pow(10, ((n + "").split(".")[1] || "").length);
    return function (a) {
      var r = ve(Math.round(parseFloat(a) / n) * n * u);
      return (r - (r % 1)) / u + (Mi(a) ? 0 : dl(a));
    };
  },
  Qp = function (n, u) {
    var a = gl(n),
      r,
      f;
    return (
      !a &&
        li(n) &&
        ((r = a = n.radius || wn),
        n.values
          ? ((n = Dn(n.values)), (f = !Mi(n[0])) && (r *= r))
          : (n = Ih(n.increment))),
      da(
        u,
        a
          ? Ee(n)
            ? function (h) {
                return ((f = n(h)), Math.abs(f - h) <= r ? f : h);
              }
            : function (h) {
                for (
                  var d = parseFloat(f ? h.x : h),
                    g = parseFloat(f ? h.y : 0),
                    p = wn,
                    _ = 0,
                    y = n.length,
                    x,
                    b;
                  y--;
                )
                  (f
                    ? ((x = n[y].x - d), (b = n[y].y - g), (x = x * x + b * b))
                    : (x = Math.abs(n[y] - d)),
                    x < p && ((p = x), (_ = y)));
                return (
                  (_ = !r || p <= r ? n[_] : h),
                  f || _ === h || Mi(h) ? _ : _ + dl(h)
                );
              }
          : Ih(n),
      )
    );
  },
  kp = function (n, u, a, r) {
    return da(gl(n) ? !u : a === !0 ? !!(a = 0) : !r, function () {
      return gl(n)
        ? n[~~(Math.random() * n.length)]
        : (a = a || 1e-5) &&
            (r = a < 1 ? Math.pow(10, (a + "").length - 2) : 1) &&
            Math.floor(
              Math.round((n - a / 2 + Math.random() * (u - n + a * 0.99)) / a) *
                a *
                r,
            ) / r;
    });
  },
  qy = function () {
    for (var n = arguments.length, u = new Array(n), a = 0; a < n; a++)
      u[a] = arguments[a];
    return function (r) {
      return u.reduce(function (f, h) {
        return h(f);
      }, r);
    };
  },
  Xy = function (n, u) {
    return function (a) {
      return n(parseFloat(a)) + (u || dl(a));
    };
  },
  Gy = function (n, u, a) {
    return Jp(n, u, 0, 1, a);
  },
  Kp = function (n, u, a) {
    return da(a, function (r) {
      return n[~~u(r)];
    });
  },
  Vy = function o(n, u, a) {
    var r = u - n;
    return gl(n)
      ? Kp(n, o(0, n.length), u)
      : da(a, function (f) {
          return ((r + ((f - n) % r)) % r) + n;
        });
  },
  Zy = function o(n, u, a) {
    var r = u - n,
      f = r * 2;
    return gl(n)
      ? Kp(n, o(0, n.length - 1), u)
      : da(a, function (h) {
          return ((h = (f + ((h - n) % f)) % f || 0), n + (h > r ? f - h : h));
        });
  },
  os = function (n) {
    return n.replace(Ty, function (u) {
      var a = u.indexOf("[") + 1,
        r = u.substring(a || 7, a ? u.indexOf("]") : u.length - 1).split(Cy);
      return kp(a ? r : +r[0], a ? 0 : +r[1], +r[2] || 1e-5);
    });
  },
  Jp = function (n, u, a, r, f) {
    var h = u - n,
      d = r - a;
    return da(f, function (g) {
      return a + (((g - n) / h) * d || 0);
    });
  },
  Qy = function o(n, u, a, r) {
    var f = isNaN(n + u)
      ? 0
      : function (b) {
          return (1 - b) * n + b * u;
        };
    if (!f) {
      var h = $e(n),
        d = {},
        g,
        p,
        _,
        y,
        x;
      if ((a === !0 && (r = 1) && (a = null), h))
        ((n = { p: n }), (u = { p: u }));
      else if (gl(n) && !gl(u)) {
        for (_ = [], y = n.length, x = y - 2, p = 1; p < y; p++)
          _.push(o(n[p - 1], n[p]));
        (y--,
          (f = function (z) {
            z *= y;
            var S = Math.min(x, ~~z);
            return _[S](z - S);
          }),
          (a = u));
      } else r || (n = Qu(gl(n) ? [] : {}, n));
      if (!_) {
        for (g in u) z0.call(d, n, g, "get", u[g]);
        f = function (z) {
          return w0(z, d) || (h ? n.p : n);
        };
      }
    }
    return da(a, f);
  },
  Zg = function (n, u, a) {
    var r = n.labels,
      f = wn,
      h,
      d,
      g;
    for (h in r)
      ((d = r[h] - u),
        d < 0 == !!a && d && f > (d = Math.abs(d)) && ((g = h), (f = d)));
    return g;
  },
  an = function (n, u, a) {
    var r = n.vars,
      f = r[u],
      h = de,
      d = n._ctx,
      g,
      p,
      _;
    if (f)
      return (
        (g = r[u + "Params"]),
        (p = r.callbackScope || n),
        a && ua.length && lf(),
        d && (de = d),
        (_ = g ? f.apply(p, g) : f.call(p)),
        (de = h),
        _
      );
  },
  Vr = function (n) {
    return (
      ca(n),
      n.scrollTrigger && n.scrollTrigger.kill(!!al),
      n.progress() < 1 && an(n, "onInterrupt"),
      n
    );
  },
  Hu,
  Wp = [],
  Fp = function (n) {
    if (n)
      if (((n = (!n.name && n.default) || n), y0() || n.headless)) {
        var u = n.name,
          a = Ee(n),
          r =
            u && !a && n.init
              ? function () {
                  this._props = [];
                }
              : n,
          f = {
            init: fs,
            render: w0,
            add: z0,
            kill: r3,
            modifier: u3,
            rawVars: 0,
          },
          h = {
            targetTest: 0,
            get: 0,
            getSetter: O0,
            aliases: {},
            register: 0,
          };
        if ((Ju(), n !== r)) {
          if (tn[u]) return;
          (cn(r, cn(nf(n, f), h)),
            Qu(r.prototype, Qu(f, nf(n, h))),
            (tn[(r.prop = u)] = r),
            n.targetTest && (Kc.push(r), (S0[u] = 1)),
            (u =
              (u === "css" ? "CSS" : u.charAt(0).toUpperCase() + u.substr(1)) +
              "Plugin"));
        }
        (Np(u, r), n.register && n.register(Xl, r, Ll));
      } else Wp.push(n);
  },
  ee = 255,
  Zr = {
    aqua: [0, ee, ee],
    lime: [0, ee, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, ee],
    navy: [0, 0, 128],
    white: [ee, ee, ee],
    olive: [128, 128, 0],
    yellow: [ee, ee, 0],
    orange: [ee, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [ee, 0, 0],
    pink: [ee, 192, 203],
    cyan: [0, ee, ee],
    transparent: [ee, ee, ee, 0],
  },
  Rh = function (n, u, a) {
    return (
      (n += n < 0 ? 1 : n > 1 ? -1 : 0),
      ((n * 6 < 1
        ? u + (a - u) * n * 6
        : n < 0.5
          ? a
          : n * 3 < 2
            ? u + (a - u) * (2 / 3 - n) * 6
            : u) *
        ee +
        0.5) |
        0
    );
  },
  $p = function (n, u, a) {
    var r = n ? (Mi(n) ? [n >> 16, (n >> 8) & ee, n & ee] : 0) : Zr.black,
      f,
      h,
      d,
      g,
      p,
      _,
      y,
      x,
      b,
      z;
    if (!r) {
      if ((n.substr(-1) === "," && (n = n.substr(0, n.length - 1)), Zr[n]))
        r = Zr[n];
      else if (n.charAt(0) === "#") {
        if (
          (n.length < 6 &&
            ((f = n.charAt(1)),
            (h = n.charAt(2)),
            (d = n.charAt(3)),
            (n =
              "#" +
              f +
              f +
              h +
              h +
              d +
              d +
              (n.length === 5 ? n.charAt(4) + n.charAt(4) : ""))),
          n.length === 9)
        )
          return (
            (r = parseInt(n.substr(1, 6), 16)),
            [r >> 16, (r >> 8) & ee, r & ee, parseInt(n.substr(7), 16) / 255]
          );
        ((n = parseInt(n.substr(1), 16)),
          (r = [n >> 16, (n >> 8) & ee, n & ee]));
      } else if (n.substr(0, 3) === "hsl") {
        if (((r = z = n.match(Lg)), !u))
          ((g = (+r[0] % 360) / 360),
            (p = +r[1] / 100),
            (_ = +r[2] / 100),
            (h = _ <= 0.5 ? _ * (p + 1) : _ + p - _ * p),
            (f = _ * 2 - h),
            r.length > 3 && (r[3] *= 1),
            (r[0] = Rh(g + 1 / 3, f, h)),
            (r[1] = Rh(g, f, h)),
            (r[2] = Rh(g - 1 / 3, f, h)));
        else if (~n.indexOf("="))
          return ((r = n.match(Ap)), a && r.length < 4 && (r[3] = 1), r);
      } else r = n.match(Lg) || Zr.transparent;
      r = r.map(Number);
    }
    return (
      u &&
        !z &&
        ((f = r[0] / ee),
        (h = r[1] / ee),
        (d = r[2] / ee),
        (y = Math.max(f, h, d)),
        (x = Math.min(f, h, d)),
        (_ = (y + x) / 2),
        y === x
          ? (g = p = 0)
          : ((b = y - x),
            (p = _ > 0.5 ? b / (2 - y - x) : b / (y + x)),
            (g =
              y === f
                ? (h - d) / b + (h < d ? 6 : 0)
                : y === h
                  ? (d - f) / b + 2
                  : (f - h) / b + 4),
            (g *= 60)),
        (r[0] = ~~(g + 0.5)),
        (r[1] = ~~(p * 100 + 0.5)),
        (r[2] = ~~(_ * 100 + 0.5))),
      a && r.length < 4 && (r[3] = 1),
      r
    );
  },
  Pp = function (n) {
    var u = [],
      a = [],
      r = -1;
    return (
      n.split(ra).forEach(function (f) {
        var h = f.match(Uu) || [];
        (u.push.apply(u, h), a.push((r += h.length + 1)));
      }),
      (u.c = a),
      u
    );
  },
  Qg = function (n, u, a) {
    var r = "",
      f = (n + r).match(ra),
      h = u ? "hsla(" : "rgba(",
      d = 0,
      g,
      p,
      _,
      y;
    if (!f) return n;
    if (
      ((f = f.map(function (x) {
        return (
          (x = $p(x, u, 1)) &&
          h +
            (u ? x[0] + "," + x[1] + "%," + x[2] + "%," + x[3] : x.join(",")) +
            ")"
        );
      })),
      a && ((_ = Pp(n)), (g = a.c), g.join(r) !== _.c.join(r)))
    )
      for (p = n.replace(ra, "1").split(Uu), y = p.length - 1; d < y; d++)
        r +=
          p[d] +
          (~g.indexOf(d)
            ? f.shift() || h + "0,0,0,0)"
            : (_.length ? _ : f.length ? f : a).shift());
    if (!p)
      for (p = n.split(ra), y = p.length - 1; d < y; d++) r += p[d] + f[d];
    return r + p[y];
  },
  ra = (function () {
    var o =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      n;
    for (n in Zr) o += "|" + n + "\\b";
    return new RegExp(o + ")", "gi");
  })(),
  ky = /hsl[a]?\(/,
  Ip = function (n) {
    var u = n.join(" "),
      a;
    if (((ra.lastIndex = 0), ra.test(u)))
      return (
        (a = ky.test(u)),
        (n[1] = Qg(n[1], a)),
        (n[0] = Qg(n[0], a, Pp(n[1]))),
        !0
      );
  },
  hs,
  ln = (function () {
    var o = Date.now,
      n = 500,
      u = 33,
      a = o(),
      r = a,
      f = 1e3 / 240,
      h = f,
      d = [],
      g,
      p,
      _,
      y,
      x,
      b,
      z = function S(w) {
        var q = o() - r,
          Z = w === !0,
          X,
          H,
          L,
          K;
        if (
          ((q > n || q < 0) && (a += q - u),
          (r += q),
          (L = r - a),
          (X = L - h),
          (X > 0 || Z) &&
            ((K = ++y.frame),
            (x = L - y.time * 1e3),
            (y.time = L = L / 1e3),
            (h += X + (X >= f ? 4 : f - X)),
            (H = 1)),
          Z || (g = p(S)),
          H)
        )
          for (b = 0; b < d.length; b++) d[b](L, x, K, w);
      };
    return (
      (y = {
        time: 0,
        frame: 0,
        tick: function () {
          z(!0);
        },
        deltaRatio: function (w) {
          return x / (1e3 / (w || 60));
        },
        wake: function () {
          wp &&
            (!Kh &&
              y0() &&
              ((Fn = Kh = window),
              (b0 = Fn.document || {}),
              (sn.gsap = Xl),
              (Fn.gsapVersions || (Fn.gsapVersions = [])).push(Xl.version),
              Dp(ef || Fn.GreenSockGlobals || (!Fn.gsap && Fn) || {}),
              Wp.forEach(Fp)),
            (_ = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            g && y.sleep(),
            (p =
              _ ||
              function (w) {
                return setTimeout(w, (h - y.time * 1e3 + 1) | 0);
              }),
            (hs = 1),
            z(2));
        },
        sleep: function () {
          ((_ ? cancelAnimationFrame : clearTimeout)(g), (hs = 0), (p = fs));
        },
        lagSmoothing: function (w, q) {
          ((n = w || 1 / 0), (u = Math.min(q || 33, n)));
        },
        fps: function (w) {
          ((f = 1e3 / (w || 240)), (h = y.time * 1e3 + f));
        },
        add: function (w, q, Z) {
          var X = q
            ? function (H, L, K, j) {
                (w(H, L, K, j), y.remove(X));
              }
            : w;
          return (y.remove(w), d[Z ? "unshift" : "push"](X), Ju(), X);
        },
        remove: function (w, q) {
          ~(q = d.indexOf(w)) && d.splice(q, 1) && b >= q && b--;
        },
        _listeners: d,
      }),
      y
    );
  })(),
  Ju = function () {
    return !hs && ln.wake();
  },
  qt = {},
  Ky = /^[\d.\-M][\d.\-,\s]/,
  Jy = /["']/g,
  Wy = function (n) {
    for (
      var u = {},
        a = n.substr(1, n.length - 3).split(":"),
        r = a[0],
        f = 1,
        h = a.length,
        d,
        g,
        p;
      f < h;
      f++
    )
      ((g = a[f]),
        (d = f !== h - 1 ? g.lastIndexOf(",") : g.length),
        (p = g.substr(0, d)),
        (u[r] = isNaN(p) ? p.replace(Jy, "").trim() : +p),
        (r = g.substr(d + 1).trim()));
    return u;
  },
  Fy = function (n) {
    var u = n.indexOf("(") + 1,
      a = n.indexOf(")"),
      r = n.indexOf("(", u);
    return n.substring(u, ~r && r < a ? n.indexOf(")", a + 1) : a);
  },
  $y = function (n) {
    var u = (n + "").split("("),
      a = qt[u[0]];
    return a && u.length > 1 && a.config
      ? a.config.apply(
          null,
          ~n.indexOf("{") ? [Wy(u[1])] : Fy(n).split(",").map(Hp),
        )
      : qt._CE && Ky.test(n)
        ? qt._CE("", n)
        : a;
  },
  t_ = function (n) {
    return function (u) {
      return 1 - n(1 - u);
    };
  },
  e_ = function o(n, u) {
    for (var a = n._first, r; a; )
      (a instanceof El
        ? o(a, u)
        : a.vars.yoyoEase &&
          (!a._yoyo || !a._repeat) &&
          a._yoyo !== u &&
          (a.timeline
            ? o(a.timeline, u)
            : ((r = a._ease),
              (a._ease = a._yEase),
              (a._yEase = r),
              (a._yoyo = u))),
        (a = a._next));
  },
  Xa = function (n, u) {
    return (n && (Ee(n) ? n : qt[n] || $y(n))) || u;
  },
  Wa = function (n, u, a, r) {
    (a === void 0 &&
      (a = function (g) {
        return 1 - u(1 - g);
      }),
      r === void 0 &&
        (r = function (g) {
          return g < 0.5 ? u(g * 2) / 2 : 1 - u((1 - g) * 2) / 2;
        }));
    var f = { easeIn: u, easeOut: a, easeInOut: r },
      h;
    return (
      Bl(n, function (d) {
        ((qt[d] = sn[d] = f), (qt[(h = d.toLowerCase())] = a));
        for (var g in f)
          qt[
            h + (g === "easeIn" ? ".in" : g === "easeOut" ? ".out" : ".inOut")
          ] = qt[d + "." + g] = f[g];
      }),
      f
    );
  },
  l_ = function (n) {
    return function (u) {
      return u < 0.5 ? (1 - n(1 - u * 2)) / 2 : 0.5 + n((u - 0.5) * 2) / 2;
    };
  },
  jh = function o(n, u, a) {
    var r = u >= 1 ? u : 1,
      f = (a || (n ? 0.3 : 0.45)) / (u < 1 ? u : 1),
      h = (f / kh) * (Math.asin(1 / r) || 0),
      d = function (_) {
        return _ === 1 ? 1 : r * Math.pow(2, -10 * _) * Sy((_ - h) * f) + 1;
      },
      g =
        n === "out"
          ? d
          : n === "in"
            ? function (p) {
                return 1 - d(1 - p);
              }
            : l_(d);
    return (
      (f = kh / f),
      (g.config = function (p, _) {
        return o(n, p, _);
      }),
      g
    );
  },
  Uh = function o(n, u) {
    u === void 0 && (u = 1.70158);
    var a = function (h) {
        return h ? --h * h * ((u + 1) * h + u) + 1 : 0;
      },
      r =
        n === "out"
          ? a
          : n === "in"
            ? function (f) {
                return 1 - a(1 - f);
              }
            : l_(a);
    return (
      (r.config = function (f) {
        return o(n, f);
      }),
      r
    );
  };
Bl("Linear,Quad,Cubic,Quart,Quint,Strong", function (o, n) {
  var u = n < 5 ? n + 1 : n;
  Wa(
    o + ",Power" + (u - 1),
    n
      ? function (a) {
          return Math.pow(a, u);
        }
      : function (a) {
          return a;
        },
    function (a) {
      return 1 - Math.pow(1 - a, u);
    },
    function (a) {
      return a < 0.5
        ? Math.pow(a * 2, u) / 2
        : 1 - Math.pow((1 - a) * 2, u) / 2;
    },
  );
});
qt.Linear.easeNone = qt.none = qt.Linear.easeIn;
Wa("Elastic", jh("in"), jh("out"), jh());
(function (o, n) {
  var u = 1 / n,
    a = 2 * u,
    r = 2.5 * u,
    f = function (d) {
      return d < u
        ? o * d * d
        : d < a
          ? o * Math.pow(d - 1.5 / n, 2) + 0.75
          : d < r
            ? o * (d -= 2.25 / n) * d + 0.9375
            : o * Math.pow(d - 2.625 / n, 2) + 0.984375;
    };
  Wa(
    "Bounce",
    function (h) {
      return 1 - f(1 - h);
    },
    f,
  );
})(7.5625, 2.75);
Wa("Expo", function (o) {
  return Math.pow(2, 10 * (o - 1)) * o + o * o * o * o * o * o * (1 - o);
});
Wa("Circ", function (o) {
  return -(zp(1 - o * o) - 1);
});
Wa("Sine", function (o) {
  return o === 1 ? 1 : -xy(o * yy) + 1;
});
Wa("Back", Uh("in"), Uh("out"), Uh());
qt.SteppedEase =
  qt.steps =
  sn.SteppedEase =
    {
      config: function (n, u) {
        n === void 0 && (n = 1);
        var a = 1 / n,
          r = n + (u ? 0 : 1),
          f = u ? 1 : 0,
          h = 1 - le;
        return function (d) {
          return (((r * ys(0, h, d)) | 0) + f) * a;
        };
      },
    };
Zu.ease = qt["quad.out"];
Bl(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (o) {
    return (T0 += o + "," + o + "Params,");
  },
);
var n_ = function (n, u) {
    ((this.id = by++),
      (n._gsap = this),
      (this.target = n),
      (this.harness = u),
      (this.get = u ? u.get : jp),
      (this.set = u ? u.getSetter : O0));
  },
  ds = (function () {
    function o(u) {
      ((this.vars = u),
        (this._delay = +u.delay || 0),
        (this._repeat = u.repeat === 1 / 0 ? -2 : u.repeat || 0) &&
          ((this._rDelay = u.repeatDelay || 0),
          (this._yoyo = !!u.yoyo || !!u.yoyoEase)),
        (this._ts = 1),
        Ku(this, +u.duration, 1, 1),
        (this.data = u.data),
        de && ((this._ctx = de), de.data.push(this)),
        hs || ln.wake());
    }
    var n = o.prototype;
    return (
      (n.delay = function (a) {
        return a || a === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + a - this._delay),
            (this._delay = a),
            this)
          : this._delay;
      }),
      (n.duration = function (a) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? a + (a + this._rDelay) * this._repeat : a,
            )
          : this.totalDuration() && this._dur;
      }),
      (n.totalDuration = function (a) {
        return arguments.length
          ? ((this._dirty = 0),
            Ku(
              this,
              this._repeat < 0
                ? a
                : (a - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (n.totalTime = function (a, r) {
        if ((Ju(), !arguments.length)) return this._tTime;
        var f = this._dp;
        if (f && f.smoothChildTiming && this._ts) {
          for (gf(this, a), !f._dp || f.parent || Lp(f, this); f && f.parent; )
            (f.parent._time !==
              f._start +
                (f._ts >= 0
                  ? f._tTime / f._ts
                  : (f.totalDuration() - f._tTime) / -f._ts) &&
              f.totalTime(f._tTime, !0),
              (f = f.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && a < this._tDur) ||
              (this._ts < 0 && a > 0) ||
              (!this._tDur && !a)) &&
            Pn(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== a ||
            (!this._dur && !r) ||
            (this._initted && Math.abs(this._zTime) === le) ||
            (!this._initted && this._dur && a) ||
            (!a && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = a), Up(this, a, r)),
          this
        );
      }),
      (n.time = function (a, r) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), a + Gg(this)) %
                (this._dur + this._rDelay) || (a ? this._dur : 0),
              r,
            )
          : this._time;
      }),
      (n.totalProgress = function (a, r) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * a, r)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (n.progress = function (a, r) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - a : a) +
                Gg(this),
              r,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (n.iteration = function (a, r) {
        var f = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (a - 1) * f, r)
          : this._repeat
            ? ku(this._tTime, f) + 1
            : 1;
      }),
      (n.timeScale = function (a, r) {
        if (!arguments.length) return this._rts === -le ? 0 : this._rts;
        if (this._rts === a) return this;
        var f =
          this.parent && this._ts ? af(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +a || 0),
          (this._ts = this._ps || a === -le ? 0 : this._rts),
          this.totalTime(
            ys(-Math.abs(this._delay), this.totalDuration(), f),
            r !== !1,
          ),
          mf(this),
          Ny(this)
        );
      }),
      (n.paused = function (a) {
        return arguments.length
          ? (this._ps !== a &&
              ((this._ps = a),
              a
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Ju(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== le &&
                      (this._tTime -= le),
                  ))),
            this)
          : this._ps;
      }),
      (n.startTime = function (a) {
        if (arguments.length) {
          this._start = ve(a);
          var r = this.parent || this._dp;
          return (
            r &&
              (r._sort || !this.parent) &&
              Pn(r, this, this._start - this._delay),
            this
          );
        }
        return this._start;
      }),
      (n.endTime = function (a) {
        return (
          this._start +
          (Yl(a) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (n.rawTime = function (a) {
        var r = this.parent || this._dp;
        return r
          ? a &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? af(r.rawTime(a), this)
              : this._tTime
          : this._tTime;
      }),
      (n.revert = function (a) {
        a === void 0 && (a = Ay);
        var r = al;
        return (
          (al = a),
          E0(this) &&
            (this.timeline && this.timeline.revert(a),
            this.totalTime(-0.01, a.suppressEvents)),
          this.data !== "nested" && a.kill !== !1 && this.kill(),
          (al = r),
          this
        );
      }),
      (n.globalTime = function (a) {
        for (var r = this, f = arguments.length ? a : r.rawTime(); r; )
          ((f = r._start + f / (Math.abs(r._ts) || 1)), (r = r._dp));
        return !this.parent && this._sat ? this._sat.globalTime(a) : f;
      }),
      (n.repeat = function (a) {
        return arguments.length
          ? ((this._repeat = a === 1 / 0 ? -2 : a), Vg(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (n.repeatDelay = function (a) {
        if (arguments.length) {
          var r = this._time;
          return ((this._rDelay = a), Vg(this), r ? this.time(r) : this);
        }
        return this._rDelay;
      }),
      (n.yoyo = function (a) {
        return arguments.length ? ((this._yoyo = a), this) : this._yoyo;
      }),
      (n.seek = function (a, r) {
        return this.totalTime(Mn(this, a), Yl(r));
      }),
      (n.restart = function (a, r) {
        return (
          this.play().totalTime(a ? -this._delay : 0, Yl(r)),
          this._dur || (this._zTime = -le),
          this
        );
      }),
      (n.play = function (a, r) {
        return (a != null && this.seek(a, r), this.reversed(!1).paused(!1));
      }),
      (n.reverse = function (a, r) {
        return (
          a != null && this.seek(a || this.totalDuration(), r),
          this.reversed(!0).paused(!1)
        );
      }),
      (n.pause = function (a, r) {
        return (a != null && this.seek(a, r), this.paused(!0));
      }),
      (n.resume = function () {
        return this.paused(!1);
      }),
      (n.reversed = function (a) {
        return arguments.length
          ? (!!a !== this.reversed() &&
              this.timeScale(-this._rts || (a ? -le : 0)),
            this)
          : this._rts < 0;
      }),
      (n.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -le), this);
      }),
      (n.isActive = function () {
        var a = this.parent || this._dp,
          r = this._start,
          f;
        return !!(
          !a ||
          (this._ts &&
            this._initted &&
            a.isActive() &&
            (f = a.rawTime(!0)) >= r &&
            f < this.endTime(!0) - le)
        );
      }),
      (n.eventCallback = function (a, r, f) {
        var h = this.vars;
        return arguments.length > 1
          ? (r
              ? ((h[a] = r),
                f && (h[a + "Params"] = f),
                a === "onUpdate" && (this._onUpdate = r))
              : delete h[a],
            this)
          : h[a];
      }),
      (n.then = function (a) {
        var r = this,
          f = r._prom;
        return new Promise(function (h) {
          var d = Ee(a) ? a : Yp,
            g = function () {
              var _ = r.then;
              ((r.then = null),
                f && f(),
                Ee(d) && (d = d(r)) && (d.then || d === r) && (r.then = _),
                h(d),
                (r.then = _));
            };
          (r._initted && r.totalProgress() === 1 && r._ts >= 0) ||
          (!r._tTime && r._ts < 0)
            ? g()
            : (r._prom = g);
        });
      }),
      (n.kill = function () {
        Vr(this);
      }),
      o
    );
  })();
cn(ds.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -le,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var El = (function (o) {
  Ep(n, o);
  function n(a, r) {
    var f;
    return (
      a === void 0 && (a = {}),
      (f = o.call(this, a) || this),
      (f.labels = {}),
      (f.smoothChildTiming = !!a.smoothChildTiming),
      (f.autoRemoveChildren = !!a.autoRemoveChildren),
      (f._sort = Yl(a.sortChildren)),
      ye && Pn(a.parent || ye, Si(f), r),
      a.reversed && f.reverse(),
      a.paused && f.paused(!0),
      a.scrollTrigger && qp(Si(f), a.scrollTrigger),
      f
    );
  }
  var u = n.prototype;
  return (
    (u.to = function (r, f, h) {
      return ($r(0, arguments, this), this);
    }),
    (u.from = function (r, f, h) {
      return ($r(1, arguments, this), this);
    }),
    (u.fromTo = function (r, f, h, d) {
      return ($r(2, arguments, this), this);
    }),
    (u.set = function (r, f, h) {
      return (
        (f.duration = 0),
        (f.parent = this),
        Fr(f).repeatDelay || (f.repeat = 0),
        (f.immediateRender = !!f.immediateRender),
        new qe(r, f, Mn(this, h), 1),
        this
      );
    }),
    (u.call = function (r, f, h) {
      return Pn(this, qe.delayedCall(0, r, f), h);
    }),
    (u.staggerTo = function (r, f, h, d, g, p, _) {
      return (
        (h.duration = f),
        (h.stagger = h.stagger || d),
        (h.onComplete = p),
        (h.onCompleteParams = _),
        (h.parent = this),
        new qe(r, h, Mn(this, g)),
        this
      );
    }),
    (u.staggerFrom = function (r, f, h, d, g, p, _) {
      return (
        (h.runBackwards = 1),
        (Fr(h).immediateRender = Yl(h.immediateRender)),
        this.staggerTo(r, f, h, d, g, p, _)
      );
    }),
    (u.staggerFromTo = function (r, f, h, d, g, p, _, y) {
      return (
        (d.startAt = h),
        (Fr(d).immediateRender = Yl(d.immediateRender)),
        this.staggerTo(r, f, d, g, p, _, y)
      );
    }),
    (u.render = function (r, f, h) {
      var d = this._time,
        g = this._dirty ? this.totalDuration() : this._tDur,
        p = this._dur,
        _ = r <= 0 ? 0 : ve(r),
        y = this._zTime < 0 != r < 0 && (this._initted || !p),
        x,
        b,
        z,
        S,
        w,
        q,
        Z,
        X,
        H,
        L,
        K,
        j;
      if (
        (this !== ye && _ > g && r >= 0 && (_ = g), _ !== this._tTime || h || y)
      ) {
        if (
          (d !== this._time &&
            p &&
            ((_ += this._time - d), (r += this._time - d)),
          (x = _),
          (H = this._start),
          (X = this._ts),
          (q = !X),
          y && (p || (d = this._zTime), (r || !f) && (this._zTime = r)),
          this._repeat)
        ) {
          if (
            ((K = this._yoyo),
            (w = p + this._rDelay),
            this._repeat < -1 && r < 0)
          )
            return this.totalTime(w * 100 + r, f, h);
          if (
            ((x = ve(_ % w)),
            _ === g
              ? ((S = this._repeat), (x = p))
              : ((L = ve(_ / w)),
                (S = ~~L),
                S && S === L && ((x = p), S--),
                x > p && (x = p)),
            (L = ku(this._tTime, w)),
            !d &&
              this._tTime &&
              L !== S &&
              this._tTime - L * w - this._dur <= 0 &&
              (L = S),
            K && S & 1 && ((x = p - x), (j = 1)),
            S !== L && !this._lock)
          ) {
            var F = K && L & 1,
              W = F === (K && S & 1);
            if (
              (S < L && (F = !F),
              (d = F ? 0 : _ % p ? p : _),
              (this._lock = 1),
              (this.render(d || (j ? 0 : ve(S * w)), f, !p)._lock = 0),
              (this._tTime = _),
              !f && this.parent && an(this, "onRepeat"),
              this.vars.repeatRefresh &&
                !j &&
                ((this.invalidate()._lock = 1), (L = S)),
              (d && d !== this._time) ||
                q !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((p = this._dur),
              (g = this._tDur),
              W &&
                ((this._lock = 2),
                (d = F ? p : -1e-4),
                this.render(d, !0),
                this.vars.repeatRefresh && !j && this.invalidate()),
              (this._lock = 0),
              !this._ts && !q)
            )
              return this;
            e_(this, j);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((Z = Hy(this, ve(d), ve(x))), Z && (_ -= x - (x = Z._start))),
          (this._tTime = _),
          (this._time = x),
          (this._act = !X),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = r),
            (d = 0)),
          !d && _ && p && !f && !L && (an(this, "onStart"), this._tTime !== _))
        )
          return this;
        if (x >= d && r >= 0)
          for (b = this._first; b; ) {
            if (
              ((z = b._next), (b._act || x >= b._start) && b._ts && Z !== b)
            ) {
              if (b.parent !== this) return this.render(r, f, h);
              if (
                (b.render(
                  b._ts > 0
                    ? (x - b._start) * b._ts
                    : (b._dirty ? b.totalDuration() : b._tDur) +
                        (x - b._start) * b._ts,
                  f,
                  h,
                ),
                x !== this._time || (!this._ts && !q))
              ) {
                ((Z = 0), z && (_ += this._zTime = -le));
                break;
              }
            }
            b = z;
          }
        else {
          b = this._last;
          for (var $ = r < 0 ? r : x; b; ) {
            if (((z = b._prev), (b._act || $ <= b._end) && b._ts && Z !== b)) {
              if (b.parent !== this) return this.render(r, f, h);
              if (
                (b.render(
                  b._ts > 0
                    ? ($ - b._start) * b._ts
                    : (b._dirty ? b.totalDuration() : b._tDur) +
                        ($ - b._start) * b._ts,
                  f,
                  h || (al && E0(b)),
                ),
                x !== this._time || (!this._ts && !q))
              ) {
                ((Z = 0), z && (_ += this._zTime = $ ? -le : le));
                break;
              }
            }
            b = z;
          }
        }
        if (
          Z &&
          !f &&
          (this.pause(),
          (Z.render(x >= d ? 0 : -le)._zTime = x >= d ? 1 : -1),
          this._ts)
        )
          return ((this._start = H), mf(this), this.render(r, f, h));
        (this._onUpdate && !f && an(this, "onUpdate", !0),
          ((_ === g && this._tTime >= this.totalDuration()) || (!_ && d)) &&
            (H === this._start || Math.abs(X) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((r || !p) &&
                ((_ === g && this._ts > 0) || (!_ && this._ts < 0)) &&
                ca(this, 1),
              !f &&
                !(r < 0 && !d) &&
                (_ || d || !g) &&
                (an(
                  this,
                  _ === g && r >= 0 ? "onComplete" : "onReverseComplete",
                  !0,
                ),
                this._prom &&
                  !(_ < g && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (u.add = function (r, f) {
      var h = this;
      if ((Mi(f) || (f = Mn(this, f, r)), !(r instanceof ds))) {
        if (gl(r))
          return (
            r.forEach(function (d) {
              return h.add(d, f);
            }),
            this
          );
        if ($e(r)) return this.addLabel(r, f);
        if (Ee(r)) r = qe.delayedCall(0, r);
        else return this;
      }
      return this !== r ? Pn(this, r, f) : this;
    }),
    (u.getChildren = function (r, f, h, d) {
      (r === void 0 && (r = !0),
        f === void 0 && (f = !0),
        h === void 0 && (h = !0),
        d === void 0 && (d = -wn));
      for (var g = [], p = this._first; p; )
        (p._start >= d &&
          (p instanceof qe
            ? f && g.push(p)
            : (h && g.push(p), r && g.push.apply(g, p.getChildren(!0, f, h)))),
          (p = p._next));
      return g;
    }),
    (u.getById = function (r) {
      for (var f = this.getChildren(1, 1, 1), h = f.length; h--; )
        if (f[h].vars.id === r) return f[h];
    }),
    (u.remove = function (r) {
      return $e(r)
        ? this.removeLabel(r)
        : Ee(r)
          ? this.killTweensOf(r)
          : (r.parent === this && df(this, r),
            r === this._recent && (this._recent = this._last),
            qa(this));
    }),
    (u.totalTime = function (r, f) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = ve(
              ln.time -
                (this._ts > 0
                  ? r / this._ts
                  : (this.totalDuration() - r) / -this._ts),
            )),
          o.prototype.totalTime.call(this, r, f),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (u.addLabel = function (r, f) {
      return ((this.labels[r] = Mn(this, f)), this);
    }),
    (u.removeLabel = function (r) {
      return (delete this.labels[r], this);
    }),
    (u.addPause = function (r, f, h) {
      var d = qe.delayedCall(0, f || fs, h);
      return (
        (d.data = "isPause"),
        (this._hasPause = 1),
        Pn(this, d, Mn(this, r))
      );
    }),
    (u.removePause = function (r) {
      var f = this._first;
      for (r = Mn(this, r); f; )
        (f._start === r && f.data === "isPause" && ca(f), (f = f._next));
    }),
    (u.killTweensOf = function (r, f, h) {
      for (var d = this.getTweensOf(r, h), g = d.length; g--; )
        ea !== d[g] && d[g].kill(r, f);
      return this;
    }),
    (u.getTweensOf = function (r, f) {
      for (var h = [], d = Dn(r), g = this._first, p = Mi(f), _; g; )
        (g instanceof qe
          ? Oy(g._targets, d) &&
            (p
              ? (!ea || (g._initted && g._ts)) &&
                g.globalTime(0) <= f &&
                g.globalTime(g.totalDuration()) > f
              : !f || g.isActive()) &&
            h.push(g)
          : (_ = g.getTweensOf(d, f)).length && h.push.apply(h, _),
          (g = g._next));
      return h;
    }),
    (u.tweenTo = function (r, f) {
      f = f || {};
      var h = this,
        d = Mn(h, r),
        g = f,
        p = g.startAt,
        _ = g.onStart,
        y = g.onStartParams,
        x = g.immediateRender,
        b,
        z = qe.to(
          h,
          cn(
            {
              ease: f.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: d,
              overwrite: "auto",
              duration:
                f.duration ||
                Math.abs(
                  (d - (p && "time" in p ? p.time : h._time)) / h.timeScale(),
                ) ||
                le,
              onStart: function () {
                if ((h.pause(), !b)) {
                  var w =
                    f.duration ||
                    Math.abs(
                      (d - (p && "time" in p ? p.time : h._time)) /
                        h.timeScale(),
                    );
                  (z._dur !== w && Ku(z, w, 0, 1).render(z._time, !0, !0),
                    (b = 1));
                }
                _ && _.apply(z, y || []);
              },
            },
            f,
          ),
        );
      return x ? z.render(0) : z;
    }),
    (u.tweenFromTo = function (r, f, h) {
      return this.tweenTo(f, cn({ startAt: { time: Mn(this, r) } }, h));
    }),
    (u.recent = function () {
      return this._recent;
    }),
    (u.nextLabel = function (r) {
      return (r === void 0 && (r = this._time), Zg(this, Mn(this, r)));
    }),
    (u.previousLabel = function (r) {
      return (r === void 0 && (r = this._time), Zg(this, Mn(this, r), 1));
    }),
    (u.currentLabel = function (r) {
      return arguments.length
        ? this.seek(r, !0)
        : this.previousLabel(this._time + le);
    }),
    (u.shiftChildren = function (r, f, h) {
      h === void 0 && (h = 0);
      var d = this._first,
        g = this.labels,
        p;
      for (r = ve(r); d; )
        (d._start >= h && ((d._start += r), (d._end += r)), (d = d._next));
      if (f) for (p in g) g[p] >= h && (g[p] += r);
      return qa(this);
    }),
    (u.invalidate = function (r) {
      var f = this._first;
      for (this._lock = 0; f; ) (f.invalidate(r), (f = f._next));
      return o.prototype.invalidate.call(this, r);
    }),
    (u.clear = function (r) {
      r === void 0 && (r = !0);
      for (var f = this._first, h; f; )
        ((h = f._next), this.remove(f), (f = h));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        qa(this)
      );
    }),
    (u.totalDuration = function (r) {
      var f = 0,
        h = this,
        d = h._last,
        g = wn,
        p,
        _,
        y;
      if (arguments.length)
        return h.timeScale(
          (h._repeat < 0 ? h.duration() : h.totalDuration()) /
            (h.reversed() ? -r : r),
        );
      if (h._dirty) {
        for (y = h.parent; d; )
          ((p = d._prev),
            d._dirty && d.totalDuration(),
            (_ = d._start),
            _ > g && h._sort && d._ts && !h._lock
              ? ((h._lock = 1), (Pn(h, d, _ - d._delay, 1)._lock = 0))
              : (g = _),
            _ < 0 &&
              d._ts &&
              ((f -= _),
              ((!y && !h._dp) || (y && y.smoothChildTiming)) &&
                ((h._start += ve(_ / h._ts)), (h._time -= _), (h._tTime -= _)),
              h.shiftChildren(-_, !1, -1 / 0),
              (g = 0)),
            d._end > f && d._ts && (f = d._end),
            (d = p));
        (Ku(h, h === ye && h._time > f ? h._time : f, 1, 1), (h._dirty = 0));
      }
      return h._tDur;
    }),
    (n.updateRoot = function (r) {
      if ((ye._ts && (Up(ye, af(r, ye)), (Rp = ln.frame)), ln.frame >= qg)) {
        qg += rn.autoSleep || 120;
        var f = ye._first;
        if ((!f || !f._ts) && rn.autoSleep && ln._listeners.length < 2) {
          for (; f && !f._ts; ) f = f._next;
          f || ln.sleep();
        }
      }
    }),
    n
  );
})(ds);
cn(El.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var Py = function (n, u, a, r, f, h, d) {
    var g = new Ll(this._pt, n, u, 0, 1, c_, null, f),
      p = 0,
      _ = 0,
      y,
      x,
      b,
      z,
      S,
      w,
      q,
      Z;
    for (
      g.b = a,
        g.e = r,
        a += "",
        r += "",
        (q = ~r.indexOf("random(")) && (r = os(r)),
        h && ((Z = [a, r]), h(Z, n, u), (a = Z[0]), (r = Z[1])),
        x = a.match(Dh) || [];
      (y = Dh.exec(r));
    )
      ((z = y[0]),
        (S = r.substring(p, y.index)),
        b ? (b = (b + 1) % 5) : S.substr(-5) === "rgba(" && (b = 1),
        z !== x[_++] &&
          ((w = parseFloat(x[_ - 1]) || 0),
          (g._pt = {
            _next: g._pt,
            p: S || _ === 1 ? S : ",",
            s: w,
            c: z.charAt(1) === "=" ? Bu(w, z) - w : parseFloat(z) - w,
            m: b && b < 4 ? Math.round : 0,
          }),
          (p = Dh.lastIndex)));
    return (
      (g.c = p < r.length ? r.substring(p, r.length) : ""),
      (g.fp = d),
      (Op.test(r) || q) && (g.e = 0),
      (this._pt = g),
      g
    );
  },
  z0 = function (n, u, a, r, f, h, d, g, p, _) {
    Ee(r) && (r = r(f || 0, n, h));
    var y = n[u],
      x =
        a !== "get"
          ? a
          : Ee(y)
            ? p
              ? n[
                  u.indexOf("set") || !Ee(n["get" + u.substr(3)])
                    ? u
                    : "get" + u.substr(3)
                ](p)
              : n[u]()
            : y,
      b = Ee(y) ? (p ? n3 : r_) : A0,
      z;
    if (
      ($e(r) &&
        (~r.indexOf("random(") && (r = os(r)),
        r.charAt(1) === "=" &&
          ((z = Bu(x, r) + (dl(x) || 0)), (z || z === 0) && (r = z))),
      !_ || x !== r || t0)
    )
      return !isNaN(x * r) && r !== ""
        ? ((z = new Ll(
            this._pt,
            n,
            u,
            +x || 0,
            r - (x || 0),
            typeof y == "boolean" ? a3 : s_,
            0,
            b,
          )),
          p && (z.fp = p),
          d && z.modifier(d, this, n),
          (this._pt = z))
        : (!y && !(u in n) && x0(u, r),
          Py.call(this, n, u, x, r, b, g || rn.stringFilter, p));
  },
  Iy = function (n, u, a, r, f) {
    if (
      (Ee(n) && (n = Pr(n, f, u, a, r)),
      !li(n) || (n.style && n.nodeType) || gl(n) || Mp(n))
    )
      return $e(n) ? Pr(n, f, u, a, r) : n;
    var h = {},
      d;
    for (d in n) h[d] = Pr(n[d], f, u, a, r);
    return h;
  },
  i_ = function (n, u, a, r, f, h) {
    var d, g, p, _;
    if (
      tn[n] &&
      (d = new tn[n]()).init(
        f,
        d.rawVars ? u[n] : Iy(u[n], r, f, h, a),
        a,
        r,
        h,
      ) !== !1 &&
      ((a._pt = g = new Ll(a._pt, f, n, 0, 1, d.render, d, 0, d.priority)),
      a !== Hu)
    )
      for (p = a._ptLookup[a._targets.indexOf(f)], _ = d._props.length; _--; )
        p[d._props[_]] = g;
    return d;
  },
  ea,
  t0,
  M0 = function o(n, u, a) {
    var r = n.vars,
      f = r.ease,
      h = r.startAt,
      d = r.immediateRender,
      g = r.lazy,
      p = r.onUpdate,
      _ = r.runBackwards,
      y = r.yoyoEase,
      x = r.keyframes,
      b = r.autoRevert,
      z = n._dur,
      S = n._startAt,
      w = n._targets,
      q = n.parent,
      Z = q && q.data === "nested" ? q.vars.targets : w,
      X = n._overwrite === "auto" && !_0,
      H = n.timeline,
      L,
      K,
      j,
      F,
      W,
      $,
      ut,
      P,
      _t,
      ct,
      pt,
      D,
      Q;
    if (
      (H && (!x || !f) && (f = "none"),
      (n._ease = Xa(f, Zu.ease)),
      (n._yEase = y ? t_(Xa(y === !0 ? f : y, Zu.ease)) : 0),
      y &&
        n._yoyo &&
        !n._repeat &&
        ((y = n._yEase), (n._yEase = n._ease), (n._ease = y)),
      (n._from = !H && !!r.runBackwards),
      !H || (x && !r.stagger))
    ) {
      if (
        ((P = w[0] ? La(w[0]).harness : 0),
        (D = P && r[P.prop]),
        (L = nf(r, S0)),
        S &&
          (S._zTime < 0 && S.progress(1),
          u < 0 && _ && d && !b ? S.render(-1, !0) : S.revert(_ && z ? kc : My),
          (S._lazy = 0)),
        h)
      ) {
        if (
          (ca(
            (n._startAt = qe.set(
              w,
              cn(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: q,
                  immediateRender: !0,
                  lazy: !S && Yl(g),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    p &&
                    function () {
                      return an(n, "onUpdate");
                    },
                  stagger: 0,
                },
                h,
              ),
            )),
          ),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          u < 0 && (al || (!d && !b)) && n._startAt.revert(kc),
          d && z && u <= 0 && a <= 0)
        ) {
          u && (n._zTime = u);
          return;
        }
      } else if (_ && z && !S) {
        if (
          (u && (d = !1),
          (j = cn(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: d && !S && Yl(g),
              immediateRender: d,
              stagger: 0,
              parent: q,
            },
            L,
          )),
          D && (j[P.prop] = D),
          ca((n._startAt = qe.set(w, j))),
          (n._startAt._dp = 0),
          (n._startAt._sat = n),
          u < 0 && (al ? n._startAt.revert(kc) : n._startAt.render(-1, !0)),
          (n._zTime = u),
          !d)
        )
          o(n._startAt, le, le);
        else if (!u) return;
      }
      for (
        n._pt = n._ptCache = 0, g = (z && Yl(g)) || (g && !z), K = 0;
        K < w.length;
        K++
      ) {
        if (
          ((W = w[K]),
          (ut = W._gsap || C0(w)[K]._gsap),
          (n._ptLookup[K] = ct = {}),
          Jh[ut.id] && ua.length && lf(),
          (pt = Z === w ? K : Z.indexOf(W)),
          P &&
            (_t = new P()).init(W, D || L, n, pt, Z) !== !1 &&
            ((n._pt = F =
              new Ll(n._pt, W, _t.name, 0, 1, _t.render, _t, 0, _t.priority)),
            _t._props.forEach(function (I) {
              ct[I] = F;
            }),
            _t.priority && ($ = 1)),
          !P || D)
        )
          for (j in L)
            tn[j] && (_t = i_(j, L, n, pt, W, Z))
              ? _t.priority && ($ = 1)
              : (ct[j] = F =
                  z0.call(n, W, j, "get", L[j], pt, Z, 0, r.stringFilter));
        (n._op && n._op[K] && n.kill(W, n._op[K]),
          X &&
            n._pt &&
            ((ea = n),
            ye.killTweensOf(W, ct, n.globalTime(u)),
            (Q = !n.parent),
            (ea = 0)),
          n._pt && g && (Jh[ut.id] = 1));
      }
      ($ && f_(n), n._onInit && n._onInit(n));
    }
    ((n._onUpdate = p),
      (n._initted = (!n._op || n._pt) && !Q),
      x && u <= 0 && H.render(wn, !0, !0));
  },
  t3 = function (n, u, a, r, f, h, d, g) {
    var p = ((n._pt && n._ptCache) || (n._ptCache = {}))[u],
      _,
      y,
      x,
      b;
    if (!p)
      for (
        p = n._ptCache[u] = [], x = n._ptLookup, b = n._targets.length;
        b--;
      ) {
        if (((_ = x[b][u]), _ && _.d && _.d._pt))
          for (_ = _.d._pt; _ && _.p !== u && _.fp !== u; ) _ = _._next;
        if (!_)
          return (
            (t0 = 1),
            (n.vars[u] = "+=0"),
            M0(n, d),
            (t0 = 0),
            g ? cs(u + " not eligible for reset") : 1
          );
        p.push(_);
      }
    for (b = p.length; b--; )
      ((y = p[b]),
        (_ = y._pt || y),
        (_.s = (r || r === 0) && !f ? r : _.s + (r || 0) + h * _.c),
        (_.c = a - _.s),
        y.e && (y.e = we(a) + dl(y.e)),
        y.b && (y.b = _.s + dl(y.b)));
  },
  e3 = function (n, u) {
    var a = n[0] ? La(n[0]).harness : 0,
      r = a && a.aliases,
      f,
      h,
      d,
      g;
    if (!r) return u;
    f = Qu({}, u);
    for (h in r)
      if (h in f) for (g = r[h].split(","), d = g.length; d--; ) f[g[d]] = f[h];
    return f;
  },
  l3 = function (n, u, a, r) {
    var f = u.ease || r || "power1.inOut",
      h,
      d;
    if (gl(u))
      ((d = a[n] || (a[n] = [])),
        u.forEach(function (g, p) {
          return d.push({ t: (p / (u.length - 1)) * 100, v: g, e: f });
        }));
    else
      for (h in u)
        ((d = a[h] || (a[h] = [])),
          h === "ease" || d.push({ t: parseFloat(n), v: u[h], e: f }));
  },
  Pr = function (n, u, a, r, f) {
    return Ee(n)
      ? n.call(u, a, r, f)
      : $e(n) && ~n.indexOf("random(")
        ? os(n)
        : n;
  },
  a_ = T0 + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  u_ = {};
Bl(a_ + ",id,stagger,delay,duration,paused,scrollTrigger", function (o) {
  return (u_[o] = 1);
});
var qe = (function (o) {
  Ep(n, o);
  function n(a, r, f, h) {
    var d;
    (typeof r == "number" && ((f.duration = r), (r = f), (f = null)),
      (d = o.call(this, h ? r : Fr(r)) || this));
    var g = d.vars,
      p = g.duration,
      _ = g.delay,
      y = g.immediateRender,
      x = g.stagger,
      b = g.overwrite,
      z = g.keyframes,
      S = g.defaults,
      w = g.scrollTrigger,
      q = g.yoyoEase,
      Z = r.parent || ye,
      X = (gl(a) || Mp(a) ? Mi(a[0]) : "length" in r) ? [a] : Dn(a),
      H,
      L,
      K,
      j,
      F,
      W,
      $,
      ut;
    if (
      ((d._targets = X.length
        ? C0(X)
        : cs(
            "GSAP target " + a + " not found. https://gsap.com",
            !rn.nullTargetWarn,
          ) || []),
      (d._ptLookup = []),
      (d._overwrite = b),
      z || x || Nc(p) || Nc(_))
    ) {
      if (
        ((r = d.vars),
        (H = d.timeline =
          new El({
            data: "nested",
            defaults: S || {},
            targets: Z && Z.data === "nested" ? Z.vars.targets : X,
          })),
        H.kill(),
        (H.parent = H._dp = Si(d)),
        (H._start = 0),
        x || Nc(p) || Nc(_))
      ) {
        if (((j = X.length), ($ = x && Zp(x)), li(x)))
          for (F in x) ~a_.indexOf(F) && (ut || (ut = {}), (ut[F] = x[F]));
        for (L = 0; L < j; L++)
          ((K = nf(r, u_)),
            (K.stagger = 0),
            q && (K.yoyoEase = q),
            ut && Qu(K, ut),
            (W = X[L]),
            (K.duration = +Pr(p, Si(d), L, W, X)),
            (K.delay = (+Pr(_, Si(d), L, W, X) || 0) - d._delay),
            !x &&
              j === 1 &&
              K.delay &&
              ((d._delay = _ = K.delay), (d._start += _), (K.delay = 0)),
            H.to(W, K, $ ? $(L, W, X) : 0),
            (H._ease = qt.none));
        H.duration() ? (p = _ = 0) : (d.timeline = 0);
      } else if (z) {
        (Fr(cn(H.vars.defaults, { ease: "none" })),
          (H._ease = Xa(z.ease || r.ease || "none")));
        var P = 0,
          _t,
          ct,
          pt;
        if (gl(z))
          (z.forEach(function (D) {
            return H.to(X, D, ">");
          }),
            H.duration());
        else {
          K = {};
          for (F in z)
            F === "ease" || F === "easeEach" || l3(F, z[F], K, z.easeEach);
          for (F in K)
            for (
              _t = K[F].sort(function (D, Q) {
                return D.t - Q.t;
              }),
                P = 0,
                L = 0;
              L < _t.length;
              L++
            )
              ((ct = _t[L]),
                (pt = {
                  ease: ct.e,
                  duration: ((ct.t - (L ? _t[L - 1].t : 0)) / 100) * p,
                }),
                (pt[F] = ct.v),
                H.to(X, pt, P),
                (P += pt.duration));
          H.duration() < p && H.to({}, { duration: p - H.duration() });
        }
      }
      p || d.duration((p = H.duration()));
    } else d.timeline = 0;
    return (
      b === !0 && !_0 && ((ea = Si(d)), ye.killTweensOf(X), (ea = 0)),
      Pn(Z, Si(d), f),
      r.reversed && d.reverse(),
      r.paused && d.paused(!0),
      (y ||
        (!p &&
          !z &&
          d._start === ve(Z._time) &&
          Yl(y) &&
          Ry(Si(d)) &&
          Z.data !== "nested")) &&
        ((d._tTime = -le), d.render(Math.max(0, -_) || 0)),
      w && qp(Si(d), w),
      d
    );
  }
  var u = n.prototype;
  return (
    (u.render = function (r, f, h) {
      var d = this._time,
        g = this._tDur,
        p = this._dur,
        _ = r < 0,
        y = r > g - le && !_ ? g : r < le ? 0 : r,
        x,
        b,
        z,
        S,
        w,
        q,
        Z,
        X,
        H;
      if (!p) Uy(this, r, f, h);
      else if (
        y !== this._tTime ||
        !r ||
        h ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== _) ||
        this._lazy
      ) {
        if (((x = y), (X = this.timeline), this._repeat)) {
          if (((S = p + this._rDelay), this._repeat < -1 && _))
            return this.totalTime(S * 100 + r, f, h);
          if (
            ((x = ve(y % S)),
            y === g
              ? ((z = this._repeat), (x = p))
              : ((w = ve(y / S)),
                (z = ~~w),
                z && z === w ? ((x = p), z--) : x > p && (x = p)),
            (q = this._yoyo && z & 1),
            q && ((H = this._yEase), (x = p - x)),
            (w = ku(this._tTime, S)),
            x === d && !h && this._initted && z === w)
          )
            return ((this._tTime = y), this);
          z !== w &&
            (X && this._yEase && e_(X, q),
            this.vars.repeatRefresh &&
              !q &&
              !this._lock &&
              x !== S &&
              this._initted &&
              ((this._lock = h = 1),
              (this.render(ve(S * z), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (Xp(this, _ ? r : x, h, f, y)) return ((this._tTime = 0), this);
          if (d !== this._time && !(h && this.vars.repeatRefresh && z !== w))
            return this;
          if (p !== this._dur) return this.render(r, f, h);
        }
        if (
          ((this._tTime = y),
          (this._time = x),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = Z = (H || this._ease)(x / p)),
          this._from && (this.ratio = Z = 1 - Z),
          !d && y && !f && !w && (an(this, "onStart"), this._tTime !== y))
        )
          return this;
        for (b = this._pt; b; ) (b.r(Z, b.d), (b = b._next));
        ((X && X.render(r < 0 ? r : X._dur * X._ease(x / this._dur), f, h)) ||
          (this._startAt && (this._zTime = r)),
          this._onUpdate &&
            !f &&
            (_ && Wh(this, r, f, h), an(this, "onUpdate")),
          this._repeat &&
            z !== w &&
            this.vars.onRepeat &&
            !f &&
            this.parent &&
            an(this, "onRepeat"),
          (y === this._tDur || !y) &&
            this._tTime === y &&
            (_ && !this._onUpdate && Wh(this, r, !0, !0),
            (r || !p) &&
              ((y === this._tDur && this._ts > 0) || (!y && this._ts < 0)) &&
              ca(this, 1),
            !f &&
              !(_ && !d) &&
              (y || d || q) &&
              (an(this, y === g ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(y < g && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (u.targets = function () {
      return this._targets;
    }),
    (u.invalidate = function (r) {
      return (
        (!r || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(r),
        o.prototype.invalidate.call(this, r)
      );
    }),
    (u.resetTo = function (r, f, h, d, g) {
      (hs || ln.wake(), this._ts || this.play());
      var p = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        _;
      return (
        this._initted || M0(this, p),
        (_ = this._ease(p / this._dur)),
        t3(this, r, f, h, d, _, p, g)
          ? this.resetTo(r, f, h, d, 1)
          : (gf(this, 0),
            this.parent ||
              Bp(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0,
              ),
            this.render(0))
      );
    }),
    (u.kill = function (r, f) {
      if ((f === void 0 && (f = "all"), !r && (!f || f === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? Vr(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!al),
          this
        );
      if (this.timeline) {
        var h = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(r, f, ea && ea.vars.overwrite !== !0)
            ._first || Vr(this),
          this.parent &&
            h !== this.timeline.totalDuration() &&
            Ku(this, (this._dur * this.timeline._tDur) / h, 0, 1),
          this
        );
      }
      var d = this._targets,
        g = r ? Dn(r) : d,
        p = this._ptLookup,
        _ = this._pt,
        y,
        x,
        b,
        z,
        S,
        w,
        q;
      if ((!f || f === "all") && Dy(d, g))
        return (f === "all" && (this._pt = 0), Vr(this));
      for (
        y = this._op = this._op || [],
          f !== "all" &&
            ($e(f) &&
              ((S = {}),
              Bl(f, function (Z) {
                return (S[Z] = 1);
              }),
              (f = S)),
            (f = e3(d, f))),
          q = d.length;
        q--;
      )
        if (~g.indexOf(d[q])) {
          ((x = p[q]),
            f === "all"
              ? ((y[q] = f), (z = x), (b = {}))
              : ((b = y[q] = y[q] || {}), (z = f)));
          for (S in z)
            ((w = x && x[S]),
              w &&
                ((!("kill" in w.d) || w.d.kill(S) === !0) && df(this, w, "_pt"),
                delete x[S]),
              b !== "all" && (b[S] = 1));
        }
      return (this._initted && !this._pt && _ && Vr(this), this);
    }),
    (n.to = function (r, f) {
      return new n(r, f, arguments[2]);
    }),
    (n.from = function (r, f) {
      return $r(1, arguments);
    }),
    (n.delayedCall = function (r, f, h, d) {
      return new n(f, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: r,
        onComplete: f,
        onReverseComplete: f,
        onCompleteParams: h,
        onReverseCompleteParams: h,
        callbackScope: d,
      });
    }),
    (n.fromTo = function (r, f, h) {
      return $r(2, arguments);
    }),
    (n.set = function (r, f) {
      return ((f.duration = 0), f.repeatDelay || (f.repeat = 0), new n(r, f));
    }),
    (n.killTweensOf = function (r, f, h) {
      return ye.killTweensOf(r, f, h);
    }),
    n
  );
})(ds);
cn(qe.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
Bl("staggerTo,staggerFrom,staggerFromTo", function (o) {
  qe[o] = function () {
    var n = new El(),
      u = $h.call(arguments, 0);
    return (u.splice(o === "staggerFromTo" ? 5 : 4, 0, 0), n[o].apply(n, u));
  };
});
var A0 = function (n, u, a) {
    return (n[u] = a);
  },
  r_ = function (n, u, a) {
    return n[u](a);
  },
  n3 = function (n, u, a, r) {
    return n[u](r.fp, a);
  },
  i3 = function (n, u, a) {
    return n.setAttribute(u, a);
  },
  O0 = function (n, u) {
    return Ee(n[u]) ? r_ : v0(n[u]) && n.setAttribute ? i3 : A0;
  },
  s_ = function (n, u) {
    return u.set(u.t, u.p, Math.round((u.s + u.c * n) * 1e6) / 1e6, u);
  },
  a3 = function (n, u) {
    return u.set(u.t, u.p, !!(u.s + u.c * n), u);
  },
  c_ = function (n, u) {
    var a = u._pt,
      r = "";
    if (!n && u.b) r = u.b;
    else if (n === 1 && u.e) r = u.e;
    else {
      for (; a; )
        ((r =
          a.p +
          (a.m ? a.m(a.s + a.c * n) : Math.round((a.s + a.c * n) * 1e4) / 1e4) +
          r),
          (a = a._next));
      r += u.c;
    }
    u.set(u.t, u.p, r, u);
  },
  w0 = function (n, u) {
    for (var a = u._pt; a; ) (a.r(n, a.d), (a = a._next));
  },
  u3 = function (n, u, a, r) {
    for (var f = this._pt, h; f; )
      ((h = f._next), f.p === r && f.modifier(n, u, a), (f = h));
  },
  r3 = function (n) {
    for (var u = this._pt, a, r; u; )
      ((r = u._next),
        (u.p === n && !u.op) || u.op === n
          ? df(this, u, "_pt")
          : u.dep || (a = 1),
        (u = r));
    return !a;
  },
  s3 = function (n, u, a, r) {
    r.mSet(n, u, r.m.call(r.tween, a, r.mt), r);
  },
  f_ = function (n) {
    for (var u = n._pt, a, r, f, h; u; ) {
      for (a = u._next, r = f; r && r.pr > u.pr; ) r = r._next;
      ((u._prev = r ? r._prev : h) ? (u._prev._next = u) : (f = u),
        (u._next = r) ? (r._prev = u) : (h = u),
        (u = a));
    }
    n._pt = f;
  },
  Ll = (function () {
    function o(u, a, r, f, h, d, g, p, _) {
      ((this.t = a),
        (this.s = f),
        (this.c = h),
        (this.p = r),
        (this.r = d || s_),
        (this.d = g || this),
        (this.set = p || A0),
        (this.pr = _ || 0),
        (this._next = u),
        u && (u._prev = this));
    }
    var n = o.prototype;
    return (
      (n.modifier = function (a, r, f) {
        ((this.mSet = this.mSet || this.set),
          (this.set = s3),
          (this.m = a),
          (this.mt = f),
          (this.tween = r));
      }),
      o
    );
  })();
Bl(
  T0 +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (o) {
    return (S0[o] = 1);
  },
);
sn.TweenMax = sn.TweenLite = qe;
sn.TimelineLite = sn.TimelineMax = El;
ye = new El({
  sortChildren: !1,
  defaults: Zu,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
rn.stringFilter = Ip;
var Ga = [],
  Jc = {},
  c3 = [],
  kg = 0,
  f3 = 0,
  Hh = function (n) {
    return (Jc[n] || c3).map(function (u) {
      return u();
    });
  },
  e0 = function () {
    var n = Date.now(),
      u = [];
    n - kg > 2 &&
      (Hh("matchMediaInit"),
      Ga.forEach(function (a) {
        var r = a.queries,
          f = a.conditions,
          h,
          d,
          g,
          p;
        for (d in r)
          ((h = Fn.matchMedia(r[d]).matches),
            h && (g = 1),
            h !== f[d] && ((f[d] = h), (p = 1)));
        p && (a.revert(), g && u.push(a));
      }),
      Hh("matchMediaRevert"),
      u.forEach(function (a) {
        return a.onMatch(a, function (r) {
          return a.add(null, r);
        });
      }),
      (kg = n),
      Hh("matchMedia"));
  },
  o_ = (function () {
    function o(u, a) {
      ((this.selector = a && Ph(a)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = f3++),
        u && this.add(u));
    }
    var n = o.prototype;
    return (
      (n.add = function (a, r, f) {
        Ee(a) && ((f = r), (r = a), (a = Ee));
        var h = this,
          d = function () {
            var p = de,
              _ = h.selector,
              y;
            return (
              p && p !== h && p.data.push(h),
              f && (h.selector = Ph(f)),
              (de = h),
              (y = r.apply(h, arguments)),
              Ee(y) && h._r.push(y),
              (de = p),
              (h.selector = _),
              (h.isReverted = !1),
              y
            );
          };
        return (
          (h.last = d),
          a === Ee
            ? d(h, function (g) {
                return h.add(null, g);
              })
            : a
              ? (h[a] = d)
              : d
        );
      }),
      (n.ignore = function (a) {
        var r = de;
        ((de = null), a(this), (de = r));
      }),
      (n.getTweens = function () {
        var a = [];
        return (
          this.data.forEach(function (r) {
            return r instanceof o
              ? a.push.apply(a, r.getTweens())
              : r instanceof qe &&
                  !(r.parent && r.parent.data === "nested") &&
                  a.push(r);
          }),
          a
        );
      }),
      (n.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (n.kill = function (a, r) {
        var f = this;
        if (
          (a
            ? (function () {
                for (var d = f.getTweens(), g = f.data.length, p; g--; )
                  ((p = f.data[g]),
                    p.data === "isFlip" &&
                      (p.revert(),
                      p.getChildren(!0, !0, !1).forEach(function (_) {
                        return d.splice(d.indexOf(_), 1);
                      })));
                for (
                  d
                    .map(function (_) {
                      return {
                        g:
                          _._dur ||
                          _._delay ||
                          (_._sat && !_._sat.vars.immediateRender)
                            ? _.globalTime(0)
                            : -1 / 0,
                        t: _,
                      };
                    })
                    .sort(function (_, y) {
                      return y.g - _.g || -1 / 0;
                    })
                    .forEach(function (_) {
                      return _.t.revert(a);
                    }),
                    g = f.data.length;
                  g--;
                )
                  ((p = f.data[g]),
                    p instanceof El
                      ? p.data !== "nested" &&
                        (p.scrollTrigger && p.scrollTrigger.revert(), p.kill())
                      : !(p instanceof qe) && p.revert && p.revert(a));
                (f._r.forEach(function (_) {
                  return _(a, f);
                }),
                  (f.isReverted = !0));
              })()
            : this.data.forEach(function (d) {
                return d.kill && d.kill();
              }),
          this.clear(),
          r)
        )
          for (var h = Ga.length; h--; )
            Ga[h].id === this.id && Ga.splice(h, 1);
      }),
      (n.revert = function (a) {
        this.kill(a || {});
      }),
      o
    );
  })(),
  o3 = (function () {
    function o(u) {
      ((this.contexts = []), (this.scope = u), de && de.data.push(this));
    }
    var n = o.prototype;
    return (
      (n.add = function (a, r, f) {
        li(a) || (a = { matches: a });
        var h = new o_(0, f || this.scope),
          d = (h.conditions = {}),
          g,
          p,
          _;
        (de && !h.selector && (h.selector = de.selector),
          this.contexts.push(h),
          (r = h.add("onMatch", r)),
          (h.queries = a));
        for (p in a)
          p === "all"
            ? (_ = 1)
            : ((g = Fn.matchMedia(a[p])),
              g &&
                (Ga.indexOf(h) < 0 && Ga.push(h),
                (d[p] = g.matches) && (_ = 1),
                g.addListener
                  ? g.addListener(e0)
                  : g.addEventListener("change", e0)));
        return (
          _ &&
            r(h, function (y) {
              return h.add(null, y);
            }),
          this
        );
      }),
      (n.revert = function (a) {
        this.kill(a || {});
      }),
      (n.kill = function (a) {
        this.contexts.forEach(function (r) {
          return r.kill(a, !0);
        });
      }),
      o
    );
  })(),
  uf = {
    registerPlugin: function () {
      for (var n = arguments.length, u = new Array(n), a = 0; a < n; a++)
        u[a] = arguments[a];
      u.forEach(function (r) {
        return Fp(r);
      });
    },
    timeline: function (n) {
      return new El(n);
    },
    getTweensOf: function (n, u) {
      return ye.getTweensOf(n, u);
    },
    getProperty: function (n, u, a, r) {
      $e(n) && (n = Dn(n)[0]);
      var f = La(n || {}).get,
        h = a ? Yp : Hp;
      return (
        a === "native" && (a = ""),
        n &&
          (u
            ? h(((tn[u] && tn[u].get) || f)(n, u, a, r))
            : function (d, g, p) {
                return h(((tn[d] && tn[d].get) || f)(n, d, g, p));
              })
      );
    },
    quickSetter: function (n, u, a) {
      if (((n = Dn(n)), n.length > 1)) {
        var r = n.map(function (_) {
            return Xl.quickSetter(_, u, a);
          }),
          f = r.length;
        return function (_) {
          for (var y = f; y--; ) r[y](_);
        };
      }
      n = n[0] || {};
      var h = tn[u],
        d = La(n),
        g = (d.harness && (d.harness.aliases || {})[u]) || u,
        p = h
          ? function (_) {
              var y = new h();
              ((Hu._pt = 0),
                y.init(n, a ? _ + a : _, Hu, 0, [n]),
                y.render(1, y),
                Hu._pt && w0(1, Hu));
            }
          : d.set(n, g);
      return h
        ? p
        : function (_) {
            return p(n, g, a ? _ + a : _, d, 1);
          };
    },
    quickTo: function (n, u, a) {
      var r,
        f = Xl.to(
          n,
          cn(
            ((r = {}), (r[u] = "+=0.1"), (r.paused = !0), (r.stagger = 0), r),
            a || {},
          ),
        ),
        h = function (g, p, _) {
          return f.resetTo(u, g, p, _);
        };
      return ((h.tween = f), h);
    },
    isTweening: function (n) {
      return ye.getTweensOf(n, !0).length > 0;
    },
    defaults: function (n) {
      return (n && n.ease && (n.ease = Xa(n.ease, Zu.ease)), Xg(Zu, n || {}));
    },
    config: function (n) {
      return Xg(rn, n || {});
    },
    registerEffect: function (n) {
      var u = n.name,
        a = n.effect,
        r = n.plugins,
        f = n.defaults,
        h = n.extendTimeline;
      ((r || "").split(",").forEach(function (d) {
        return (
          d && !tn[d] && !sn[d] && cs(u + " effect requires " + d + " plugin.")
        );
      }),
        (Nh[u] = function (d, g, p) {
          return a(Dn(d), cn(g || {}, f), p);
        }),
        h &&
          (El.prototype[u] = function (d, g, p) {
            return this.add(Nh[u](d, li(g) ? g : (p = g) && {}, this), p);
          }));
    },
    registerEase: function (n, u) {
      qt[n] = Xa(u);
    },
    parseEase: function (n, u) {
      return arguments.length ? Xa(n, u) : qt;
    },
    getById: function (n) {
      return ye.getById(n);
    },
    exportRoot: function (n, u) {
      n === void 0 && (n = {});
      var a = new El(n),
        r,
        f;
      for (
        a.smoothChildTiming = Yl(n.smoothChildTiming),
          ye.remove(a),
          a._dp = 0,
          a._time = a._tTime = ye._time,
          r = ye._first;
        r;
      )
        ((f = r._next),
          (u ||
            !(
              !r._dur &&
              r instanceof qe &&
              r.vars.onComplete === r._targets[0]
            )) &&
            Pn(a, r, r._start - r._delay),
          (r = f));
      return (Pn(ye, a, 0), a);
    },
    context: function (n, u) {
      return n ? new o_(n, u) : de;
    },
    matchMedia: function (n) {
      return new o3(n);
    },
    matchMediaRefresh: function () {
      return (
        Ga.forEach(function (n) {
          var u = n.conditions,
            a,
            r;
          for (r in u) u[r] && ((u[r] = !1), (a = 1));
          a && n.revert();
        }) || e0()
      );
    },
    addEventListener: function (n, u) {
      var a = Jc[n] || (Jc[n] = []);
      ~a.indexOf(u) || a.push(u);
    },
    removeEventListener: function (n, u) {
      var a = Jc[n],
        r = a && a.indexOf(u);
      r >= 0 && a.splice(r, 1);
    },
    utils: {
      wrap: Vy,
      wrapYoyo: Zy,
      distribute: Zp,
      random: kp,
      snap: Qp,
      normalize: Gy,
      getUnit: dl,
      clamp: By,
      splitColor: $p,
      toArray: Dn,
      selector: Ph,
      mapRange: Jp,
      pipe: qy,
      unitize: Xy,
      interpolate: Qy,
      shuffle: Vp,
    },
    install: Dp,
    effects: Nh,
    ticker: ln,
    updateRoot: El.updateRoot,
    plugins: tn,
    globalTimeline: ye,
    core: {
      PropTween: Ll,
      globals: Np,
      Tween: qe,
      Timeline: El,
      Animation: ds,
      getCache: La,
      _removeLinkedListItem: df,
      reverting: function () {
        return al;
      },
      context: function (n) {
        return (n && de && (de.data.push(n), (n._ctx = de)), de);
      },
      suppressOverwrites: function (n) {
        return (_0 = n);
      },
    },
  };
Bl("to,from,fromTo,delayedCall,set,killTweensOf", function (o) {
  return (uf[o] = qe[o]);
});
ln.add(El.updateRoot);
Hu = uf.to({}, { duration: 0 });
var h3 = function (n, u) {
    for (var a = n._pt; a && a.p !== u && a.op !== u && a.fp !== u; )
      a = a._next;
    return a;
  },
  d3 = function (n, u) {
    var a = n._targets,
      r,
      f,
      h;
    for (r in u)
      for (f = a.length; f--; )
        ((h = n._ptLookup[f][r]),
          h &&
            (h = h.d) &&
            (h._pt && (h = h3(h, r)),
            h && h.modifier && h.modifier(u[r], n, a[f], r)));
  },
  Yh = function (n, u) {
    return {
      name: n,
      headless: 1,
      rawVars: 1,
      init: function (r, f, h) {
        h._onInit = function (d) {
          var g, p;
          if (
            ($e(f) &&
              ((g = {}),
              Bl(f, function (_) {
                return (g[_] = 1);
              }),
              (f = g)),
            u)
          ) {
            g = {};
            for (p in f) g[p] = u(f[p]);
            f = g;
          }
          d3(d, f);
        };
      },
    };
  },
  Xl =
    uf.registerPlugin(
      {
        name: "attr",
        init: function (n, u, a, r, f) {
          var h, d, g;
          this.tween = a;
          for (h in u)
            ((g = n.getAttribute(h) || ""),
              (d = this.add(
                n,
                "setAttribute",
                (g || 0) + "",
                u[h],
                r,
                f,
                0,
                0,
                h,
              )),
              (d.op = h),
              (d.b = g),
              this._props.push(h));
        },
        render: function (n, u) {
          for (var a = u._pt; a; )
            (al ? a.set(a.t, a.p, a.b, a) : a.r(n, a.d), (a = a._next));
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (n, u) {
          for (var a = u.length; a--; )
            this.add(n, a, n[a] || 0, u[a], 0, 0, 0, 0, 0, 1);
        },
      },
      Yh("roundProps", Ih),
      Yh("modifiers"),
      Yh("snap", Qp),
    ) || uf;
qe.version = El.version = Xl.version = "3.14.2";
wp = 1;
y0() && Ju();
qt.Power0;
qt.Power1;
qt.Power2;
qt.Power3;
qt.Power4;
qt.Linear;
qt.Quad;
qt.Cubic;
qt.Quart;
qt.Quint;
qt.Strong;
qt.Elastic;
qt.Back;
qt.SteppedEase;
qt.Bounce;
qt.Sine;
qt.Expo;
qt.Circ;
var Kg,
  la,
  Lu,
  D0,
  Ya,
  Jg,
  N0,
  m3 = function () {
    return typeof window < "u";
  },
  Ai = {},
  ja = 180 / Math.PI,
  qu = Math.PI / 180,
  wu = Math.atan2,
  Wg = 1e8,
  R0 = /([A-Z])/g,
  g3 = /(left|right|width|margin|padding|x)/i,
  p3 = /[\s,\(]\S/,
  In = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  l0 = function (n, u) {
    return u.set(u.t, u.p, Math.round((u.s + u.c * n) * 1e4) / 1e4 + u.u, u);
  },
  _3 = function (n, u) {
    return u.set(
      u.t,
      u.p,
      n === 1 ? u.e : Math.round((u.s + u.c * n) * 1e4) / 1e4 + u.u,
      u,
    );
  },
  v3 = function (n, u) {
    return u.set(
      u.t,
      u.p,
      n ? Math.round((u.s + u.c * n) * 1e4) / 1e4 + u.u : u.b,
      u,
    );
  },
  y3 = function (n, u) {
    return u.set(
      u.t,
      u.p,
      n === 1 ? u.e : n ? Math.round((u.s + u.c * n) * 1e4) / 1e4 + u.u : u.b,
      u,
    );
  },
  b3 = function (n, u) {
    var a = u.s + u.c * n;
    u.set(u.t, u.p, ~~(a + (a < 0 ? -0.5 : 0.5)) + u.u, u);
  },
  h_ = function (n, u) {
    return u.set(u.t, u.p, n ? u.e : u.b, u);
  },
  d_ = function (n, u) {
    return u.set(u.t, u.p, n !== 1 ? u.b : u.e, u);
  },
  x3 = function (n, u, a) {
    return (n.style[u] = a);
  },
  S3 = function (n, u, a) {
    return n.style.setProperty(u, a);
  },
  T3 = function (n, u, a) {
    return (n._gsap[u] = a);
  },
  C3 = function (n, u, a) {
    return (n._gsap.scaleX = n._gsap.scaleY = a);
  },
  E3 = function (n, u, a, r, f) {
    var h = n._gsap;
    ((h.scaleX = h.scaleY = a), h.renderTransform(f, h));
  },
  z3 = function (n, u, a, r, f) {
    var h = n._gsap;
    ((h[u] = a), h.renderTransform(f, h));
  },
  be = "transform",
  ql = be + "Origin",
  M3 = function o(n, u) {
    var a = this,
      r = this.target,
      f = r.style,
      h = r._gsap;
    if (n in Ai && f) {
      if (((this.tfm = this.tfm || {}), n !== "transform"))
        ((n = In[n] || n),
          ~n.indexOf(",")
            ? n.split(",").forEach(function (d) {
                return (a.tfm[d] = Ti(r, d));
              })
            : (this.tfm[n] = h.x ? h[n] : Ti(r, n)),
          n === ql && (this.tfm.zOrigin = h.zOrigin));
      else
        return In.transform.split(",").forEach(function (d) {
          return o.call(a, d, u);
        });
      if (this.props.indexOf(be) >= 0) return;
      (h.svg &&
        ((this.svgo = r.getAttribute("data-svg-origin")),
        this.props.push(ql, u, "")),
        (n = be));
    }
    (f || u) && this.props.push(n, u, f[n]);
  },
  m_ = function (n) {
    n.translate &&
      (n.removeProperty("translate"),
      n.removeProperty("scale"),
      n.removeProperty("rotate"));
  },
  A3 = function () {
    var n = this.props,
      u = this.target,
      a = u.style,
      r = u._gsap,
      f,
      h;
    for (f = 0; f < n.length; f += 3)
      n[f + 1]
        ? n[f + 1] === 2
          ? u[n[f]](n[f + 2])
          : (u[n[f]] = n[f + 2])
        : n[f + 2]
          ? (a[n[f]] = n[f + 2])
          : a.removeProperty(
              n[f].substr(0, 2) === "--"
                ? n[f]
                : n[f].replace(R0, "-$1").toLowerCase(),
            );
    if (this.tfm) {
      for (h in this.tfm) r[h] = this.tfm[h];
      (r.svg &&
        (r.renderTransform(),
        u.setAttribute("data-svg-origin", this.svgo || "")),
        (f = N0()),
        (!f || !f.isStart) &&
          !a[be] &&
          (m_(a),
          r.zOrigin &&
            a[ql] &&
            ((a[ql] += " " + r.zOrigin + "px"),
            (r.zOrigin = 0),
            r.renderTransform()),
          (r.uncache = 1)));
    }
  },
  g_ = function (n, u) {
    var a = { target: n, props: [], revert: A3, save: M3 };
    return (
      n._gsap || Xl.core.getCache(n),
      u &&
        n.style &&
        n.nodeType &&
        u.split(",").forEach(function (r) {
          return a.save(r);
        }),
      a
    );
  },
  p_,
  n0 = function (n, u) {
    var a = la.createElementNS
      ? la.createElementNS(
          (u || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          n,
        )
      : la.createElement(n);
    return a && a.style ? a : la.createElement(n);
  },
  un = function o(n, u, a) {
    var r = getComputedStyle(n);
    return (
      r[u] ||
      r.getPropertyValue(u.replace(R0, "-$1").toLowerCase()) ||
      r.getPropertyValue(u) ||
      (!a && o(n, Wu(u) || u, 1)) ||
      ""
    );
  },
  Fg = "O,Moz,ms,Ms,Webkit".split(","),
  Wu = function (n, u, a) {
    var r = u || Ya,
      f = r.style,
      h = 5;
    if (n in f && !a) return n;
    for (
      n = n.charAt(0).toUpperCase() + n.substr(1);
      h-- && !(Fg[h] + n in f);
    );
    return h < 0 ? null : (h === 3 ? "ms" : h >= 0 ? Fg[h] : "") + n;
  },
  i0 = function () {
    m3() &&
      window.document &&
      ((Kg = window),
      (la = Kg.document),
      (Lu = la.documentElement),
      (Ya = n0("div") || { style: {} }),
      n0("div"),
      (be = Wu(be)),
      (ql = be + "Origin"),
      (Ya.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (p_ = !!Wu("perspective")),
      (N0 = Xl.core.reverting),
      (D0 = 1));
  },
  $g = function (n) {
    var u = n.ownerSVGElement,
      a = n0(
        "svg",
        (u && u.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
      ),
      r = n.cloneNode(!0),
      f;
    ((r.style.display = "block"), a.appendChild(r), Lu.appendChild(a));
    try {
      f = r.getBBox();
    } catch {}
    return (a.removeChild(r), Lu.removeChild(a), f);
  },
  Pg = function (n, u) {
    for (var a = u.length; a--; )
      if (n.hasAttribute(u[a])) return n.getAttribute(u[a]);
  },
  __ = function (n) {
    var u, a;
    try {
      u = n.getBBox();
    } catch {
      ((u = $g(n)), (a = 1));
    }
    return (
      (u && (u.width || u.height)) || a || (u = $g(n)),
      u && !u.width && !u.x && !u.y
        ? {
            x: +Pg(n, ["x", "cx", "x1"]) || 0,
            y: +Pg(n, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : u
    );
  },
  v_ = function (n) {
    return !!(n.getCTM && (!n.parentNode || n.ownerSVGElement) && __(n));
  },
  fa = function (n, u) {
    if (u) {
      var a = n.style,
        r;
      (u in Ai && u !== ql && (u = be),
        a.removeProperty
          ? ((r = u.substr(0, 2)),
            (r === "ms" || u.substr(0, 6) === "webkit") && (u = "-" + u),
            a.removeProperty(
              r === "--" ? u : u.replace(R0, "-$1").toLowerCase(),
            ))
          : a.removeAttribute(u));
    }
  },
  na = function (n, u, a, r, f, h) {
    var d = new Ll(n._pt, u, a, 0, 1, h ? d_ : h_);
    return ((n._pt = d), (d.b = r), (d.e = f), n._props.push(a), d);
  },
  Ig = { deg: 1, rad: 1, turn: 1 },
  O3 = { grid: 1, flex: 1 },
  oa = function o(n, u, a, r) {
    var f = parseFloat(a) || 0,
      h = (a + "").trim().substr((f + "").length) || "px",
      d = Ya.style,
      g = g3.test(u),
      p = n.tagName.toLowerCase() === "svg",
      _ = (p ? "client" : "offset") + (g ? "Width" : "Height"),
      y = 100,
      x = r === "px",
      b = r === "%",
      z,
      S,
      w,
      q;
    if (r === h || !f || Ig[r] || Ig[h]) return f;
    if (
      (h !== "px" && !x && (f = o(n, u, a, "px")),
      (q = n.getCTM && v_(n)),
      (b || h === "%") && (Ai[u] || ~u.indexOf("adius")))
    )
      return (
        (z = q ? n.getBBox()[g ? "width" : "height"] : n[_]),
        we(b ? (f / z) * y : (f / 100) * z)
      );
    if (
      ((d[g ? "width" : "height"] = y + (x ? h : r)),
      (S =
        (r !== "rem" && ~u.indexOf("adius")) ||
        (r === "em" && n.appendChild && !p)
          ? n
          : n.parentNode),
      q && (S = (n.ownerSVGElement || {}).parentNode),
      (!S || S === la || !S.appendChild) && (S = la.body),
      (w = S._gsap),
      w && b && w.width && g && w.time === ln.time && !w.uncache)
    )
      return we((f / w.width) * y);
    if (b && (u === "height" || u === "width")) {
      var Z = n.style[u];
      ((n.style[u] = y + r), (z = n[_]), Z ? (n.style[u] = Z) : fa(n, u));
    } else
      ((b || h === "%") &&
        !O3[un(S, "display")] &&
        (d.position = un(n, "position")),
        S === n && (d.position = "static"),
        S.appendChild(Ya),
        (z = Ya[_]),
        S.removeChild(Ya),
        (d.position = "absolute"));
    return (
      g && b && ((w = La(S)), (w.time = ln.time), (w.width = S[_])),
      we(x ? (z * f) / y : z && f ? (y / z) * f : 0)
    );
  },
  Ti = function (n, u, a, r) {
    var f;
    return (
      D0 || i0(),
      u in In &&
        u !== "transform" &&
        ((u = In[u]), ~u.indexOf(",") && (u = u.split(",")[0])),
      Ai[u] && u !== "transform"
        ? ((f = gs(n, r)),
          (f =
            u !== "transformOrigin"
              ? f[u]
              : f.svg
                ? f.origin
                : sf(un(n, ql)) + " " + f.zOrigin + "px"))
        : ((f = n.style[u]),
          (!f || f === "auto" || r || ~(f + "").indexOf("calc(")) &&
            (f =
              (rf[u] && rf[u](n, u, a)) ||
              un(n, u) ||
              jp(n, u) ||
              (u === "opacity" ? 1 : 0))),
      a && !~(f + "").trim().indexOf(" ") ? oa(n, u, f, a) + a : f
    );
  },
  w3 = function (n, u, a, r) {
    if (!a || a === "none") {
      var f = Wu(u, n, 1),
        h = f && un(n, f, 1);
      h && h !== a
        ? ((u = f), (a = h))
        : u === "borderColor" && (a = un(n, "borderTopColor"));
    }
    var d = new Ll(this._pt, n.style, u, 0, 1, c_),
      g = 0,
      p = 0,
      _,
      y,
      x,
      b,
      z,
      S,
      w,
      q,
      Z,
      X,
      H,
      L;
    if (
      ((d.b = a),
      (d.e = r),
      (a += ""),
      (r += ""),
      r.substring(0, 6) === "var(--" &&
        (r = un(n, r.substring(4, r.indexOf(")")))),
      r === "auto" &&
        ((S = n.style[u]),
        (n.style[u] = r),
        (r = un(n, u) || r),
        S ? (n.style[u] = S) : fa(n, u)),
      (_ = [a, r]),
      Ip(_),
      (a = _[0]),
      (r = _[1]),
      (x = a.match(Uu) || []),
      (L = r.match(Uu) || []),
      L.length)
    ) {
      for (; (y = Uu.exec(r)); )
        ((w = y[0]),
          (Z = r.substring(g, y.index)),
          z
            ? (z = (z + 1) % 5)
            : (Z.substr(-5) === "rgba(" || Z.substr(-5) === "hsla(") && (z = 1),
          w !== (S = x[p++] || "") &&
            ((b = parseFloat(S) || 0),
            (H = S.substr((b + "").length)),
            w.charAt(1) === "=" && (w = Bu(b, w) + H),
            (q = parseFloat(w)),
            (X = w.substr((q + "").length)),
            (g = Uu.lastIndex - X.length),
            X ||
              ((X = X || rn.units[u] || H),
              g === r.length && ((r += X), (d.e += X))),
            H !== X && (b = oa(n, u, S, X) || 0),
            (d._pt = {
              _next: d._pt,
              p: Z || p === 1 ? Z : ",",
              s: b,
              c: q - b,
              m: (z && z < 4) || u === "zIndex" ? Math.round : 0,
            })));
      d.c = g < r.length ? r.substring(g, r.length) : "";
    } else d.r = u === "display" && r === "none" ? d_ : h_;
    return (Op.test(r) && (d.e = 0), (this._pt = d), d);
  },
  tp = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  D3 = function (n) {
    var u = n.split(" "),
      a = u[0],
      r = u[1] || "50%";
    return (
      (a === "top" || a === "bottom" || r === "left" || r === "right") &&
        ((n = a), (a = r), (r = n)),
      (u[0] = tp[a] || a),
      (u[1] = tp[r] || r),
      u.join(" ")
    );
  },
  N3 = function (n, u) {
    if (u.tween && u.tween._time === u.tween._dur) {
      var a = u.t,
        r = a.style,
        f = u.u,
        h = a._gsap,
        d,
        g,
        p;
      if (f === "all" || f === !0) ((r.cssText = ""), (g = 1));
      else
        for (f = f.split(","), p = f.length; --p > -1; )
          ((d = f[p]),
            Ai[d] && ((g = 1), (d = d === "transformOrigin" ? ql : be)),
            fa(a, d));
      g &&
        (fa(a, be),
        h &&
          (h.svg && a.removeAttribute("transform"),
          (r.scale = r.rotate = r.translate = "none"),
          gs(a, 1),
          (h.uncache = 1),
          m_(r)));
    }
  },
  rf = {
    clearProps: function (n, u, a, r, f) {
      if (f.data !== "isFromStart") {
        var h = (n._pt = new Ll(n._pt, u, a, 0, 0, N3));
        return ((h.u = r), (h.pr = -10), (h.tween = f), n._props.push(a), 1);
      }
    },
  },
  ms = [1, 0, 0, 1, 0, 0],
  y_ = {},
  b_ = function (n) {
    return n === "matrix(1, 0, 0, 1, 0, 0)" || n === "none" || !n;
  },
  ep = function (n) {
    var u = un(n, be);
    return b_(u) ? ms : u.substr(7).match(Ap).map(we);
  },
  j0 = function (n, u) {
    var a = n._gsap || La(n),
      r = n.style,
      f = ep(n),
      h,
      d,
      g,
      p;
    return a.svg && n.getAttribute("transform")
      ? ((g = n.transform.baseVal.consolidate().matrix),
        (f = [g.a, g.b, g.c, g.d, g.e, g.f]),
        f.join(",") === "1,0,0,1,0,0" ? ms : f)
      : (f === ms &&
          !n.offsetParent &&
          n !== Lu &&
          !a.svg &&
          ((g = r.display),
          (r.display = "block"),
          (h = n.parentNode),
          (!h || (!n.offsetParent && !n.getBoundingClientRect().width)) &&
            ((p = 1), (d = n.nextElementSibling), Lu.appendChild(n)),
          (f = ep(n)),
          g ? (r.display = g) : fa(n, "display"),
          p &&
            (d
              ? h.insertBefore(n, d)
              : h
                ? h.appendChild(n)
                : Lu.removeChild(n))),
        u && f.length > 6 ? [f[0], f[1], f[4], f[5], f[12], f[13]] : f);
  },
  a0 = function (n, u, a, r, f, h) {
    var d = n._gsap,
      g = f || j0(n, !0),
      p = d.xOrigin || 0,
      _ = d.yOrigin || 0,
      y = d.xOffset || 0,
      x = d.yOffset || 0,
      b = g[0],
      z = g[1],
      S = g[2],
      w = g[3],
      q = g[4],
      Z = g[5],
      X = u.split(" "),
      H = parseFloat(X[0]) || 0,
      L = parseFloat(X[1]) || 0,
      K,
      j,
      F,
      W;
    (a
      ? g !== ms &&
        (j = b * w - z * S) &&
        ((F = H * (w / j) + L * (-S / j) + (S * Z - w * q) / j),
        (W = H * (-z / j) + L * (b / j) - (b * Z - z * q) / j),
        (H = F),
        (L = W))
      : ((K = __(n)),
        (H = K.x + (~X[0].indexOf("%") ? (H / 100) * K.width : H)),
        (L = K.y + (~(X[1] || X[0]).indexOf("%") ? (L / 100) * K.height : L))),
      r || (r !== !1 && d.smooth)
        ? ((q = H - p),
          (Z = L - _),
          (d.xOffset = y + (q * b + Z * S) - q),
          (d.yOffset = x + (q * z + Z * w) - Z))
        : (d.xOffset = d.yOffset = 0),
      (d.xOrigin = H),
      (d.yOrigin = L),
      (d.smooth = !!r),
      (d.origin = u),
      (d.originIsAbsolute = !!a),
      (n.style[ql] = "0px 0px"),
      h &&
        (na(h, d, "xOrigin", p, H),
        na(h, d, "yOrigin", _, L),
        na(h, d, "xOffset", y, d.xOffset),
        na(h, d, "yOffset", x, d.yOffset)),
      n.setAttribute("data-svg-origin", H + " " + L));
  },
  gs = function (n, u) {
    var a = n._gsap || new n_(n);
    if ("x" in a && !u && !a.uncache) return a;
    var r = n.style,
      f = a.scaleX < 0,
      h = "px",
      d = "deg",
      g = getComputedStyle(n),
      p = un(n, ql) || "0",
      _,
      y,
      x,
      b,
      z,
      S,
      w,
      q,
      Z,
      X,
      H,
      L,
      K,
      j,
      F,
      W,
      $,
      ut,
      P,
      _t,
      ct,
      pt,
      D,
      Q,
      I,
      st,
      M,
      C,
      G,
      tt,
      et,
      rt;
    return (
      (_ = y = x = S = w = q = Z = X = H = 0),
      (b = z = 1),
      (a.svg = !!(n.getCTM && v_(n))),
      g.translate &&
        ((g.translate !== "none" ||
          g.scale !== "none" ||
          g.rotate !== "none") &&
          (r[be] =
            (g.translate !== "none"
              ? "translate3d(" +
                (g.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (g.rotate !== "none" ? "rotate(" + g.rotate + ") " : "") +
            (g.scale !== "none"
              ? "scale(" + g.scale.split(" ").join(",") + ") "
              : "") +
            (g[be] !== "none" ? g[be] : "")),
        (r.scale = r.rotate = r.translate = "none")),
      (j = j0(n, a.svg)),
      a.svg &&
        (a.uncache
          ? ((I = n.getBBox()),
            (p = a.xOrigin - I.x + "px " + (a.yOrigin - I.y) + "px"),
            (Q = ""))
          : (Q = !u && n.getAttribute("data-svg-origin")),
        a0(n, Q || p, !!Q || a.originIsAbsolute, a.smooth !== !1, j)),
      (L = a.xOrigin || 0),
      (K = a.yOrigin || 0),
      j !== ms &&
        ((ut = j[0]),
        (P = j[1]),
        (_t = j[2]),
        (ct = j[3]),
        (_ = pt = j[4]),
        (y = D = j[5]),
        j.length === 6
          ? ((b = Math.sqrt(ut * ut + P * P)),
            (z = Math.sqrt(ct * ct + _t * _t)),
            (S = ut || P ? wu(P, ut) * ja : 0),
            (Z = _t || ct ? wu(_t, ct) * ja + S : 0),
            Z && (z *= Math.abs(Math.cos(Z * qu))),
            a.svg &&
              ((_ -= L - (L * ut + K * _t)), (y -= K - (L * P + K * ct))))
          : ((rt = j[6]),
            (tt = j[7]),
            (M = j[8]),
            (C = j[9]),
            (G = j[10]),
            (et = j[11]),
            (_ = j[12]),
            (y = j[13]),
            (x = j[14]),
            (F = wu(rt, G)),
            (w = F * ja),
            F &&
              ((W = Math.cos(-F)),
              ($ = Math.sin(-F)),
              (Q = pt * W + M * $),
              (I = D * W + C * $),
              (st = rt * W + G * $),
              (M = pt * -$ + M * W),
              (C = D * -$ + C * W),
              (G = rt * -$ + G * W),
              (et = tt * -$ + et * W),
              (pt = Q),
              (D = I),
              (rt = st)),
            (F = wu(-_t, G)),
            (q = F * ja),
            F &&
              ((W = Math.cos(-F)),
              ($ = Math.sin(-F)),
              (Q = ut * W - M * $),
              (I = P * W - C * $),
              (st = _t * W - G * $),
              (et = ct * $ + et * W),
              (ut = Q),
              (P = I),
              (_t = st)),
            (F = wu(P, ut)),
            (S = F * ja),
            F &&
              ((W = Math.cos(F)),
              ($ = Math.sin(F)),
              (Q = ut * W + P * $),
              (I = pt * W + D * $),
              (P = P * W - ut * $),
              (D = D * W - pt * $),
              (ut = Q),
              (pt = I)),
            w &&
              Math.abs(w) + Math.abs(S) > 359.9 &&
              ((w = S = 0), (q = 180 - q)),
            (b = we(Math.sqrt(ut * ut + P * P + _t * _t))),
            (z = we(Math.sqrt(D * D + rt * rt))),
            (F = wu(pt, D)),
            (Z = Math.abs(F) > 2e-4 ? F * ja : 0),
            (H = et ? 1 / (et < 0 ? -et : et) : 0)),
        a.svg &&
          ((Q = n.getAttribute("transform")),
          (a.forceCSS = n.setAttribute("transform", "") || !b_(un(n, be))),
          Q && n.setAttribute("transform", Q))),
      Math.abs(Z) > 90 &&
        Math.abs(Z) < 270 &&
        (f
          ? ((b *= -1), (Z += S <= 0 ? 180 : -180), (S += S <= 0 ? 180 : -180))
          : ((z *= -1), (Z += Z <= 0 ? 180 : -180))),
      (u = u || a.uncache),
      (a.x =
        _ -
        ((a.xPercent =
          _ &&
          ((!u && a.xPercent) ||
            (Math.round(n.offsetWidth / 2) === Math.round(-_) ? -50 : 0)))
          ? (n.offsetWidth * a.xPercent) / 100
          : 0) +
        h),
      (a.y =
        y -
        ((a.yPercent =
          y &&
          ((!u && a.yPercent) ||
            (Math.round(n.offsetHeight / 2) === Math.round(-y) ? -50 : 0)))
          ? (n.offsetHeight * a.yPercent) / 100
          : 0) +
        h),
      (a.z = x + h),
      (a.scaleX = we(b)),
      (a.scaleY = we(z)),
      (a.rotation = we(S) + d),
      (a.rotationX = we(w) + d),
      (a.rotationY = we(q) + d),
      (a.skewX = Z + d),
      (a.skewY = X + d),
      (a.transformPerspective = H + h),
      (a.zOrigin = parseFloat(p.split(" ")[2]) || (!u && a.zOrigin) || 0) &&
        (r[ql] = sf(p)),
      (a.xOffset = a.yOffset = 0),
      (a.force3D = rn.force3D),
      (a.renderTransform = a.svg ? j3 : p_ ? x_ : R3),
      (a.uncache = 0),
      a
    );
  },
  sf = function (n) {
    return (n = n.split(" "))[0] + " " + n[1];
  },
  Bh = function (n, u, a) {
    var r = dl(u);
    return we(parseFloat(u) + parseFloat(oa(n, "x", a + "px", r))) + r;
  },
  R3 = function (n, u) {
    ((u.z = "0px"),
      (u.rotationY = u.rotationX = "0deg"),
      (u.force3D = 0),
      x_(n, u));
  },
  Na = "0deg",
  qr = "0px",
  Ra = ") ",
  x_ = function (n, u) {
    var a = u || this,
      r = a.xPercent,
      f = a.yPercent,
      h = a.x,
      d = a.y,
      g = a.z,
      p = a.rotation,
      _ = a.rotationY,
      y = a.rotationX,
      x = a.skewX,
      b = a.skewY,
      z = a.scaleX,
      S = a.scaleY,
      w = a.transformPerspective,
      q = a.force3D,
      Z = a.target,
      X = a.zOrigin,
      H = "",
      L = (q === "auto" && n && n !== 1) || q === !0;
    if (X && (y !== Na || _ !== Na)) {
      var K = parseFloat(_) * qu,
        j = Math.sin(K),
        F = Math.cos(K),
        W;
      ((K = parseFloat(y) * qu),
        (W = Math.cos(K)),
        (h = Bh(Z, h, j * W * -X)),
        (d = Bh(Z, d, -Math.sin(K) * -X)),
        (g = Bh(Z, g, F * W * -X + X)));
    }
    (w !== qr && (H += "perspective(" + w + Ra),
      (r || f) && (H += "translate(" + r + "%, " + f + "%) "),
      (L || h !== qr || d !== qr || g !== qr) &&
        (H +=
          g !== qr || L
            ? "translate3d(" + h + ", " + d + ", " + g + ") "
            : "translate(" + h + ", " + d + Ra),
      p !== Na && (H += "rotate(" + p + Ra),
      _ !== Na && (H += "rotateY(" + _ + Ra),
      y !== Na && (H += "rotateX(" + y + Ra),
      (x !== Na || b !== Na) && (H += "skew(" + x + ", " + b + Ra),
      (z !== 1 || S !== 1) && (H += "scale(" + z + ", " + S + Ra),
      (Z.style[be] = H || "translate(0, 0)"));
  },
  j3 = function (n, u) {
    var a = u || this,
      r = a.xPercent,
      f = a.yPercent,
      h = a.x,
      d = a.y,
      g = a.rotation,
      p = a.skewX,
      _ = a.skewY,
      y = a.scaleX,
      x = a.scaleY,
      b = a.target,
      z = a.xOrigin,
      S = a.yOrigin,
      w = a.xOffset,
      q = a.yOffset,
      Z = a.forceCSS,
      X = parseFloat(h),
      H = parseFloat(d),
      L,
      K,
      j,
      F,
      W;
    ((g = parseFloat(g)),
      (p = parseFloat(p)),
      (_ = parseFloat(_)),
      _ && ((_ = parseFloat(_)), (p += _), (g += _)),
      g || p
        ? ((g *= qu),
          (p *= qu),
          (L = Math.cos(g) * y),
          (K = Math.sin(g) * y),
          (j = Math.sin(g - p) * -x),
          (F = Math.cos(g - p) * x),
          p &&
            ((_ *= qu),
            (W = Math.tan(p - _)),
            (W = Math.sqrt(1 + W * W)),
            (j *= W),
            (F *= W),
            _ &&
              ((W = Math.tan(_)),
              (W = Math.sqrt(1 + W * W)),
              (L *= W),
              (K *= W))),
          (L = we(L)),
          (K = we(K)),
          (j = we(j)),
          (F = we(F)))
        : ((L = y), (F = x), (K = j = 0)),
      ((X && !~(h + "").indexOf("px")) || (H && !~(d + "").indexOf("px"))) &&
        ((X = oa(b, "x", h, "px")), (H = oa(b, "y", d, "px"))),
      (z || S || w || q) &&
        ((X = we(X + z - (z * L + S * j) + w)),
        (H = we(H + S - (z * K + S * F) + q))),
      (r || f) &&
        ((W = b.getBBox()),
        (X = we(X + (r / 100) * W.width)),
        (H = we(H + (f / 100) * W.height))),
      (W =
        "matrix(" + L + "," + K + "," + j + "," + F + "," + X + "," + H + ")"),
      b.setAttribute("transform", W),
      Z && (b.style[be] = W));
  },
  U3 = function (n, u, a, r, f) {
    var h = 360,
      d = $e(f),
      g = parseFloat(f) * (d && ~f.indexOf("rad") ? ja : 1),
      p = g - r,
      _ = r + p + "deg",
      y,
      x;
    return (
      d &&
        ((y = f.split("_")[1]),
        y === "short" && ((p %= h), p !== p % (h / 2) && (p += p < 0 ? h : -h)),
        y === "cw" && p < 0
          ? (p = ((p + h * Wg) % h) - ~~(p / h) * h)
          : y === "ccw" && p > 0 && (p = ((p - h * Wg) % h) - ~~(p / h) * h)),
      (n._pt = x = new Ll(n._pt, u, a, r, p, _3)),
      (x.e = _),
      (x.u = "deg"),
      n._props.push(a),
      x
    );
  },
  lp = function (n, u) {
    for (var a in u) n[a] = u[a];
    return n;
  },
  H3 = function (n, u, a) {
    var r = lp({}, a._gsap),
      f = "perspective,force3D,transformOrigin,svgOrigin",
      h = a.style,
      d,
      g,
      p,
      _,
      y,
      x,
      b,
      z;
    r.svg
      ? ((p = a.getAttribute("transform")),
        a.setAttribute("transform", ""),
        (h[be] = u),
        (d = gs(a, 1)),
        fa(a, be),
        a.setAttribute("transform", p))
      : ((p = getComputedStyle(a)[be]),
        (h[be] = u),
        (d = gs(a, 1)),
        (h[be] = p));
    for (g in Ai)
      ((p = r[g]),
        (_ = d[g]),
        p !== _ &&
          f.indexOf(g) < 0 &&
          ((b = dl(p)),
          (z = dl(_)),
          (y = b !== z ? oa(a, g, p, z) : parseFloat(p)),
          (x = parseFloat(_)),
          (n._pt = new Ll(n._pt, d, g, y, x - y, l0)),
          (n._pt.u = z || 0),
          n._props.push(g)));
    lp(d, r);
  };
Bl("padding,margin,Width,Radius", function (o, n) {
  var u = "Top",
    a = "Right",
    r = "Bottom",
    f = "Left",
    h = (n < 3 ? [u, a, r, f] : [u + f, u + a, r + a, r + f]).map(function (d) {
      return n < 2 ? o + d : "border" + d + o;
    });
  rf[n > 1 ? "border" + o : o] = function (d, g, p, _, y) {
    var x, b;
    if (arguments.length < 4)
      return (
        (x = h.map(function (z) {
          return Ti(d, z, p);
        })),
        (b = x.join(" ")),
        b.split(x[0]).length === 5 ? x[0] : b
      );
    ((x = (_ + "").split(" ")),
      (b = {}),
      h.forEach(function (z, S) {
        return (b[z] = x[S] = x[S] || x[((S - 1) / 2) | 0]);
      }),
      d.init(g, b, y));
  };
});
var S_ = {
  name: "css",
  register: i0,
  targetTest: function (n) {
    return n.style && n.nodeType;
  },
  init: function (n, u, a, r, f) {
    var h = this._props,
      d = n.style,
      g = a.vars.startAt,
      p,
      _,
      y,
      x,
      b,
      z,
      S,
      w,
      q,
      Z,
      X,
      H,
      L,
      K,
      j,
      F,
      W;
    (D0 || i0(),
      (this.styles = this.styles || g_(n)),
      (F = this.styles.props),
      (this.tween = a));
    for (S in u)
      if (S !== "autoRound" && ((_ = u[S]), !(tn[S] && i_(S, u, a, r, n, f)))) {
        if (
          ((b = typeof _),
          (z = rf[S]),
          b === "function" && ((_ = _.call(a, r, n, f)), (b = typeof _)),
          b === "string" && ~_.indexOf("random(") && (_ = os(_)),
          z)
        )
          z(this, n, S, _, a) && (j = 1);
        else if (S.substr(0, 2) === "--")
          ((p = (getComputedStyle(n).getPropertyValue(S) + "").trim()),
            (_ += ""),
            (ra.lastIndex = 0),
            ra.test(p) ||
              ((w = dl(p)),
              (q = dl(_)),
              q ? w !== q && (p = oa(n, S, p, q) + q) : w && (_ += w)),
            this.add(d, "setProperty", p, _, r, f, 0, 0, S),
            h.push(S),
            F.push(S, 0, d[S]));
        else if (b !== "undefined") {
          if (
            (g && S in g
              ? ((p = typeof g[S] == "function" ? g[S].call(a, r, n, f) : g[S]),
                $e(p) && ~p.indexOf("random(") && (p = os(p)),
                dl(p + "") ||
                  p === "auto" ||
                  (p += rn.units[S] || dl(Ti(n, S)) || ""),
                (p + "").charAt(1) === "=" && (p = Ti(n, S)))
              : (p = Ti(n, S)),
            (x = parseFloat(p)),
            (Z = b === "string" && _.charAt(1) === "=" && _.substr(0, 2)),
            Z && (_ = _.substr(2)),
            (y = parseFloat(_)),
            S in In &&
              (S === "autoAlpha" &&
                (x === 1 && Ti(n, "visibility") === "hidden" && y && (x = 0),
                F.push("visibility", 0, d.visibility),
                na(
                  this,
                  d,
                  "visibility",
                  x ? "inherit" : "hidden",
                  y ? "inherit" : "hidden",
                  !y,
                )),
              S !== "scale" &&
                S !== "transform" &&
                ((S = In[S]), ~S.indexOf(",") && (S = S.split(",")[0]))),
            (X = S in Ai),
            X)
          ) {
            if (
              (this.styles.save(S),
              (W = _),
              b === "string" && _.substring(0, 6) === "var(--")
            ) {
              if (
                ((_ = un(n, _.substring(4, _.indexOf(")")))),
                _.substring(0, 5) === "calc(")
              ) {
                var $ = n.style.perspective;
                ((n.style.perspective = _),
                  (_ = un(n, "perspective")),
                  $ ? (n.style.perspective = $) : fa(n, "perspective"));
              }
              y = parseFloat(_);
            }
            if (
              (H ||
                ((L = n._gsap),
                (L.renderTransform && !u.parseTransform) ||
                  gs(n, u.parseTransform),
                (K = u.smoothOrigin !== !1 && L.smooth),
                (H = this._pt =
                  new Ll(this._pt, d, be, 0, 1, L.renderTransform, L, 0, -1)),
                (H.dep = 1)),
              S === "scale")
            )
              ((this._pt = new Ll(
                this._pt,
                L,
                "scaleY",
                L.scaleY,
                (Z ? Bu(L.scaleY, Z + y) : y) - L.scaleY || 0,
                l0,
              )),
                (this._pt.u = 0),
                h.push("scaleY", S),
                (S += "X"));
            else if (S === "transformOrigin") {
              (F.push(ql, 0, d[ql]),
                (_ = D3(_)),
                L.svg
                  ? a0(n, _, 0, K, 0, this)
                  : ((q = parseFloat(_.split(" ")[2]) || 0),
                    q !== L.zOrigin && na(this, L, "zOrigin", L.zOrigin, q),
                    na(this, d, S, sf(p), sf(_))));
              continue;
            } else if (S === "svgOrigin") {
              a0(n, _, 1, K, 0, this);
              continue;
            } else if (S in y_) {
              U3(this, L, S, x, Z ? Bu(x, Z + _) : _);
              continue;
            } else if (S === "smoothOrigin") {
              na(this, L, "smooth", L.smooth, _);
              continue;
            } else if (S === "force3D") {
              L[S] = _;
              continue;
            } else if (S === "transform") {
              H3(this, _, n);
              continue;
            }
          } else S in d || (S = Wu(S) || S);
          if (X || ((y || y === 0) && (x || x === 0) && !p3.test(_) && S in d))
            ((w = (p + "").substr((x + "").length)),
              y || (y = 0),
              (q = dl(_) || (S in rn.units ? rn.units[S] : w)),
              w !== q && (x = oa(n, S, p, q)),
              (this._pt = new Ll(
                this._pt,
                X ? L : d,
                S,
                x,
                (Z ? Bu(x, Z + y) : y) - x,
                !X && (q === "px" || S === "zIndex") && u.autoRound !== !1
                  ? b3
                  : l0,
              )),
              (this._pt.u = q || 0),
              X && W !== _
                ? ((this._pt.b = p), (this._pt.e = W), (this._pt.r = y3))
                : w !== q &&
                  q !== "%" &&
                  ((this._pt.b = p), (this._pt.r = v3)));
          else if (S in d) w3.call(this, n, S, p, Z ? Z + _ : _);
          else if (S in n) this.add(n, S, p || n[S], Z ? Z + _ : _, r, f);
          else if (S !== "parseTransform") {
            x0(S, _);
            continue;
          }
          (X ||
            (S in d
              ? F.push(S, 0, d[S])
              : typeof n[S] == "function"
                ? F.push(S, 2, n[S]())
                : F.push(S, 1, p || n[S])),
            h.push(S));
        }
      }
    j && f_(this);
  },
  render: function (n, u) {
    if (u.tween._time || !N0())
      for (var a = u._pt; a; ) (a.r(n, a.d), (a = a._next));
    else u.styles.revert();
  },
  get: Ti,
  aliases: In,
  getSetter: function (n, u, a) {
    var r = In[u];
    return (
      r && r.indexOf(",") < 0 && (u = r),
      u in Ai && u !== ql && (n._gsap.x || Ti(n, "x"))
        ? a && Jg === a
          ? u === "scale"
            ? C3
            : T3
          : (Jg = a || {}) && (u === "scale" ? E3 : z3)
        : n.style && !v0(n.style[u])
          ? x3
          : ~u.indexOf("-")
            ? S3
            : O0(n, u)
    );
  },
  core: { _removeProperty: fa, _getMatrix: j0 },
};
Xl.utils.checkPrefix = Wu;
Xl.core.getStyleSaver = g_;
(function (o, n, u, a) {
  var r = Bl(o + "," + n + "," + u, function (f) {
    Ai[f] = 1;
  });
  (Bl(n, function (f) {
    ((rn.units[f] = "deg"), (y_[f] = 1));
  }),
    (In[r[13]] = o + "," + n),
    Bl(a, function (f) {
      var h = f.split(":");
      In[h[1]] = r[h[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
Bl(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (o) {
    rn.units[o] = "px";
  },
);
Xl.registerPlugin(S_);
var nl = Xl.registerPlugin(S_) || Xl;
nl.core.Tween;
function Y3(o, n) {
  for (var u = 0; u < n.length; u++) {
    var a = n[u];
    ((a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(o, a.key, a));
  }
}
function B3(o, n, u) {
  return (n && Y3(o.prototype, n), o);
}
var il,
  Wc,
  nn,
  ia,
  aa,
  Xu,
  T_,
  Ua,
  Ir,
  C_,
  Ei,
  Ln,
  E_,
  z_ = function () {
    return (
      il ||
      (typeof window < "u" && (il = window.gsap) && il.registerPlugin && il)
    );
  },
  M_ = 1,
  Yu = [],
  Rt = [],
  ei = [],
  ts = Date.now,
  u0 = function (n, u) {
    return u;
  },
  L3 = function () {
    var n = Ir.core,
      u = n.bridge || {},
      a = n._scrollers,
      r = n._proxies;
    (a.push.apply(a, Rt),
      r.push.apply(r, ei),
      (Rt = a),
      (ei = r),
      (u0 = function (h, d) {
        return u[h](d);
      }));
  },
  sa = function (n, u) {
    return ~ei.indexOf(n) && ei[ei.indexOf(n) + 1][u];
  },
  es = function (n) {
    return !!~C_.indexOf(n);
  },
  xl = function (n, u, a, r, f) {
    return n.addEventListener(u, a, { passive: r !== !1, capture: !!f });
  },
  bl = function (n, u, a, r) {
    return n.removeEventListener(u, a, !!r);
  },
  Rc = "scrollLeft",
  jc = "scrollTop",
  r0 = function () {
    return (Ei && Ei.isPressed) || Rt.cache++;
  },
  cf = function (n, u) {
    var a = function r(f) {
      if (f || f === 0) {
        M_ && (nn.history.scrollRestoration = "manual");
        var h = Ei && Ei.isPressed;
        ((f = r.v = Math.round(f) || (Ei && Ei.iOS ? 1 : 0)),
          n(f),
          (r.cacheID = Rt.cache),
          h && u0("ss", f));
      } else
        (u || Rt.cache !== r.cacheID || u0("ref")) &&
          ((r.cacheID = Rt.cache), (r.v = n()));
      return r.v + r.offset;
    };
    return ((a.offset = 0), n && a);
  },
  zl = {
    s: Rc,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: cf(function (o) {
      return arguments.length
        ? nn.scrollTo(o, ke.sc())
        : nn.pageXOffset || ia[Rc] || aa[Rc] || Xu[Rc] || 0;
    }),
  },
  ke = {
    s: jc,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: zl,
    sc: cf(function (o) {
      return arguments.length
        ? nn.scrollTo(zl.sc(), o)
        : nn.pageYOffset || ia[jc] || aa[jc] || Xu[jc] || 0;
    }),
  },
  Hl = function (n, u) {
    return (
      ((u && u._ctx && u._ctx.selector) || il.utils.toArray)(n)[0] ||
      (typeof n == "string" && il.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", n)
        : null)
    );
  },
  q3 = function (n, u) {
    for (var a = u.length; a--; ) if (u[a] === n || u[a].contains(n)) return !0;
    return !1;
  },
  ha = function (n, u) {
    var a = u.s,
      r = u.sc;
    es(n) && (n = ia.scrollingElement || aa);
    var f = Rt.indexOf(n),
      h = r === ke.sc ? 1 : 2;
    (!~f && (f = Rt.push(n) - 1), Rt[f + h] || xl(n, "scroll", r0));
    var d = Rt[f + h],
      g =
        d ||
        (Rt[f + h] =
          cf(sa(n, a), !0) ||
          (es(n)
            ? r
            : cf(function (p) {
                return arguments.length ? (n[a] = p) : n[a];
              })));
    return (
      (g.target = n),
      d || (g.smooth = il.getProperty(n, "scrollBehavior") === "smooth"),
      g
    );
  },
  s0 = function (n, u, a) {
    var r = n,
      f = n,
      h = ts(),
      d = h,
      g = u || 50,
      p = Math.max(500, g * 3),
      _ = function (z, S) {
        var w = ts();
        S || w - h > g
          ? ((f = r), (r = z), (d = h), (h = w))
          : a
            ? (r += z)
            : (r = f + ((z - f) / (w - d)) * (h - d));
      },
      y = function () {
        ((f = r = a ? 0 : r), (d = h = 0));
      },
      x = function (z) {
        var S = d,
          w = f,
          q = ts();
        return (
          (z || z === 0) && z !== r && _(z),
          h === d || q - d > p
            ? 0
            : ((r + (a ? w : -w)) / ((a ? q : h) - S)) * 1e3
        );
      };
    return { update: _, reset: y, getVelocity: x };
  },
  Xr = function (n, u) {
    return (
      u && !n._gsapAllow && n.preventDefault(),
      n.changedTouches ? n.changedTouches[0] : n
    );
  },
  np = function (n) {
    var u = Math.max.apply(Math, n),
      a = Math.min.apply(Math, n);
    return Math.abs(u) >= Math.abs(a) ? u : a;
  },
  A_ = function () {
    ((Ir = il.core.globals().ScrollTrigger), Ir && Ir.core && L3());
  },
  O_ = function (n) {
    return (
      (il = n || z_()),
      !Wc &&
        il &&
        typeof document < "u" &&
        document.body &&
        ((nn = window),
        (ia = document),
        (aa = ia.documentElement),
        (Xu = ia.body),
        (C_ = [nn, ia, aa, Xu]),
        il.utils.clamp,
        (E_ = il.core.context || function () {}),
        (Ua = "onpointerenter" in Xu ? "pointer" : "mouse"),
        (T_ = De.isTouch =
          nn.matchMedia &&
          nn.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in nn ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (Ln = De.eventTypes =
          (
            "ontouchstart" in aa
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in aa
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (M_ = 0);
        }, 500),
        A_(),
        (Wc = 1)),
      Wc
    );
  };
zl.op = ke;
Rt.cache = 0;
var De = (function () {
  function o(u) {
    this.init(u);
  }
  var n = o.prototype;
  return (
    (n.init = function (a) {
      (Wc || O_(il) || console.warn("Please gsap.registerPlugin(Observer)"),
        Ir || A_());
      var r = a.tolerance,
        f = a.dragMinimum,
        h = a.type,
        d = a.target,
        g = a.lineHeight,
        p = a.debounce,
        _ = a.preventDefault,
        y = a.onStop,
        x = a.onStopDelay,
        b = a.ignore,
        z = a.wheelSpeed,
        S = a.event,
        w = a.onDragStart,
        q = a.onDragEnd,
        Z = a.onDrag,
        X = a.onPress,
        H = a.onRelease,
        L = a.onRight,
        K = a.onLeft,
        j = a.onUp,
        F = a.onDown,
        W = a.onChangeX,
        $ = a.onChangeY,
        ut = a.onChange,
        P = a.onToggleX,
        _t = a.onToggleY,
        ct = a.onHover,
        pt = a.onHoverEnd,
        D = a.onMove,
        Q = a.ignoreCheck,
        I = a.isNormalizer,
        st = a.onGestureStart,
        M = a.onGestureEnd,
        C = a.onWheel,
        G = a.onEnable,
        tt = a.onDisable,
        et = a.onClick,
        rt = a.scrollSpeed,
        dt = a.capture,
        mt = a.allowClicks,
        Qt = a.lockAxis,
        Ot = a.onLockAxis;
      ((this.target = d = Hl(d) || aa),
        (this.vars = a),
        b && (b = il.utils.toArray(b)),
        (r = r || 1e-9),
        (f = f || 0),
        (z = z || 1),
        (rt = rt || 1),
        (h = h || "wheel,touch,pointer"),
        (p = p !== !1),
        g || (g = parseFloat(nn.getComputedStyle(Xu).lineHeight) || 22));
      var Ml,
        Ne,
        Ge,
        Ht,
        Jt,
        Ke,
        Pe,
        B = this,
        ul = 0,
        Gl = 0,
        fn = a.passive || (!_ && a.passive !== !1),
        ne = ha(d, zl),
        Rn = ha(d, ke),
        qn = ne(),
        ze = Rn(),
        Re =
          ~h.indexOf("touch") &&
          !~h.indexOf("pointer") &&
          Ln[0] === "pointerdown",
        jn = es(d),
        fe = d.ownerDocument || ia,
        rl = [0, 0, 0],
        Al = [0, 0, 0],
        on = 0,
        ma = function () {
          return (on = ts());
        },
        xe = function (ft, Gt) {
          return (
            ((B.event = ft) && b && q3(ft.target, b)) ||
            (Gt && Re && ft.pointerType !== "touch") ||
            (Q && Q(ft, Gt))
          );
        },
        Xn = function () {
          (B._vx.reset(), B._vy.reset(), Ne.pause(), y && y(B));
        },
        me = function () {
          var ft = (B.deltaX = np(rl)),
            Gt = (B.deltaY = np(Al)),
            lt = Math.abs(ft) >= r,
            bt = Math.abs(Gt) >= r;
          (ut && (lt || bt) && ut(B, ft, Gt, rl, Al),
            lt &&
              (L && B.deltaX > 0 && L(B),
              K && B.deltaX < 0 && K(B),
              W && W(B),
              P && B.deltaX < 0 != ul < 0 && P(B),
              (ul = B.deltaX),
              (rl[0] = rl[1] = rl[2] = 0)),
            bt &&
              (F && B.deltaY > 0 && F(B),
              j && B.deltaY < 0 && j(B),
              $ && $(B),
              _t && B.deltaY < 0 != Gl < 0 && _t(B),
              (Gl = B.deltaY),
              (Al[0] = Al[1] = Al[2] = 0)),
            (Ht || Ge) &&
              (D && D(B),
              Ge && (w && Ge === 1 && w(B), Z && Z(B), (Ge = 0)),
              (Ht = !1)),
            Ke && !(Ke = !1) && Ot && Ot(B),
            Jt && (C(B), (Jt = !1)),
            (Ml = 0));
        },
        pl = function (ft, Gt, lt) {
          ((rl[lt] += ft),
            (Al[lt] += Gt),
            B._vx.update(ft),
            B._vy.update(Gt),
            p ? Ml || (Ml = requestAnimationFrame(me)) : me());
        },
        je = function (ft, Gt) {
          (Qt &&
            !Pe &&
            ((B.axis = Pe = Math.abs(ft) > Math.abs(Gt) ? "x" : "y"),
            (Ke = !0)),
            Pe !== "y" && ((rl[2] += ft), B._vx.update(ft, !0)),
            Pe !== "x" && ((Al[2] += Gt), B._vy.update(Gt, !0)),
            p ? Ml || (Ml = requestAnimationFrame(me)) : me());
        },
        Gn = function (ft) {
          if (!xe(ft, 1)) {
            ft = Xr(ft, _);
            var Gt = ft.clientX,
              lt = ft.clientY,
              bt = Gt - B.x,
              ot = lt - B.y,
              vt = B.isDragging;
            ((B.x = Gt),
              (B.y = lt),
              (vt ||
                ((bt || ot) &&
                  (Math.abs(B.startX - Gt) >= f ||
                    Math.abs(B.startY - lt) >= f))) &&
                (Ge || (Ge = vt ? 2 : 1),
                vt || (B.isDragging = !0),
                je(bt, ot)));
          }
        },
        ni = (B.onPress = function (yt) {
          xe(yt, 1) ||
            (yt && yt.button) ||
            ((B.axis = Pe = null),
            Ne.pause(),
            (B.isPressed = !0),
            (yt = Xr(yt)),
            (ul = Gl = 0),
            (B.startX = B.x = yt.clientX),
            (B.startY = B.y = yt.clientY),
            B._vx.reset(),
            B._vy.reset(),
            xl(I ? d : fe, Ln[1], Gn, fn, !0),
            (B.deltaX = B.deltaY = 0),
            X && X(B));
        }),
        zt = (B.onRelease = function (yt) {
          if (!xe(yt, 1)) {
            bl(I ? d : fe, Ln[1], Gn, !0);
            var ft = !isNaN(B.y - B.startY),
              Gt = B.isDragging,
              lt =
                Gt &&
                (Math.abs(B.x - B.startX) > 3 || Math.abs(B.y - B.startY) > 3),
              bt = Xr(yt);
            (!lt &&
              ft &&
              (B._vx.reset(),
              B._vy.reset(),
              _ &&
                mt &&
                il.delayedCall(0.08, function () {
                  if (ts() - on > 300 && !yt.defaultPrevented) {
                    if (yt.target.click) yt.target.click();
                    else if (fe.createEvent) {
                      var ot = fe.createEvent("MouseEvents");
                      (ot.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        nn,
                        1,
                        bt.screenX,
                        bt.screenY,
                        bt.clientX,
                        bt.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null,
                      ),
                        yt.target.dispatchEvent(ot));
                    }
                  }
                })),
              (B.isDragging = B.isGesturing = B.isPressed = !1),
              y && Gt && !I && Ne.restart(!0),
              Ge && me(),
              q && Gt && q(B),
              H && H(B, lt));
          }
        }),
        hn = function (ft) {
          return (
            ft.touches &&
            ft.touches.length > 1 &&
            (B.isGesturing = !0) &&
            st(ft, B.isDragging)
          );
        },
        sl = function () {
          return (B.isGesturing = !1) || M(B);
        },
        cl = function (ft) {
          if (!xe(ft)) {
            var Gt = ne(),
              lt = Rn();
            (pl((Gt - qn) * rt, (lt - ze) * rt, 1),
              (qn = Gt),
              (ze = lt),
              y && Ne.restart(!0));
          }
        },
        Ve = function (ft) {
          if (!xe(ft)) {
            ((ft = Xr(ft, _)), C && (Jt = !0));
            var Gt =
              (ft.deltaMode === 1
                ? g
                : ft.deltaMode === 2
                  ? nn.innerHeight
                  : 1) * z;
            (pl(ft.deltaX * Gt, ft.deltaY * Gt, 0), y && !I && Ne.restart(!0));
          }
        },
        dn = function (ft) {
          if (!xe(ft)) {
            var Gt = ft.clientX,
              lt = ft.clientY,
              bt = Gt - B.x,
              ot = lt - B.y;
            ((B.x = Gt),
              (B.y = lt),
              (Ht = !0),
              y && Ne.restart(!0),
              (bt || ot) && je(bt, ot));
          }
        },
        mn = function (ft) {
          ((B.event = ft), ct(B));
        },
        Un = function (ft) {
          ((B.event = ft), pt(B));
        },
        Oi = function (ft) {
          return xe(ft) || (Xr(ft, _) && et(B));
        };
      ((Ne = B._dc = il.delayedCall(x || 0.25, Xn).pause()),
        (B.deltaX = B.deltaY = 0),
        (B._vx = s0(0, 50, !0)),
        (B._vy = s0(0, 50, !0)),
        (B.scrollX = ne),
        (B.scrollY = Rn),
        (B.isDragging = B.isGesturing = B.isPressed = !1),
        E_(this),
        (B.enable = function (yt) {
          return (
            B.isEnabled ||
              (xl(jn ? fe : d, "scroll", r0),
              h.indexOf("scroll") >= 0 && xl(jn ? fe : d, "scroll", cl, fn, dt),
              h.indexOf("wheel") >= 0 && xl(d, "wheel", Ve, fn, dt),
              ((h.indexOf("touch") >= 0 && T_) || h.indexOf("pointer") >= 0) &&
                (xl(d, Ln[0], ni, fn, dt),
                xl(fe, Ln[2], zt),
                xl(fe, Ln[3], zt),
                mt && xl(d, "click", ma, !0, !0),
                et && xl(d, "click", Oi),
                st && xl(fe, "gesturestart", hn),
                M && xl(fe, "gestureend", sl),
                ct && xl(d, Ua + "enter", mn),
                pt && xl(d, Ua + "leave", Un),
                D && xl(d, Ua + "move", dn)),
              (B.isEnabled = !0),
              (B.isDragging = B.isGesturing = B.isPressed = Ht = Ge = !1),
              B._vx.reset(),
              B._vy.reset(),
              (qn = ne()),
              (ze = Rn()),
              yt && yt.type && ni(yt),
              G && G(B)),
            B
          );
        }),
        (B.disable = function () {
          B.isEnabled &&
            (Yu.filter(function (yt) {
              return yt !== B && es(yt.target);
            }).length || bl(jn ? fe : d, "scroll", r0),
            B.isPressed &&
              (B._vx.reset(), B._vy.reset(), bl(I ? d : fe, Ln[1], Gn, !0)),
            bl(jn ? fe : d, "scroll", cl, dt),
            bl(d, "wheel", Ve, dt),
            bl(d, Ln[0], ni, dt),
            bl(fe, Ln[2], zt),
            bl(fe, Ln[3], zt),
            bl(d, "click", ma, !0),
            bl(d, "click", Oi),
            bl(fe, "gesturestart", hn),
            bl(fe, "gestureend", sl),
            bl(d, Ua + "enter", mn),
            bl(d, Ua + "leave", Un),
            bl(d, Ua + "move", dn),
            (B.isEnabled = B.isPressed = B.isDragging = !1),
            tt && tt(B));
        }),
        (B.kill = B.revert =
          function () {
            B.disable();
            var yt = Yu.indexOf(B);
            (yt >= 0 && Yu.splice(yt, 1), Ei === B && (Ei = 0));
          }),
        Yu.push(B),
        I && es(d) && (Ei = B),
        B.enable(S));
    }),
    B3(o, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    o
  );
})();
De.version = "3.14.2";
De.create = function (o) {
  return new De(o);
};
De.register = O_;
De.getAll = function () {
  return Yu.slice();
};
De.getById = function (o) {
  return Yu.filter(function (n) {
    return n.vars.id === o;
  })[0];
};
z_() && il.registerPlugin(De);
var it,
  Ru,
  Nt,
  ie,
  en,
  Kt,
  U0,
  ff,
  ps,
  ls,
  Qr,
  Uc,
  ol,
  pf,
  c0,
  Tl,
  ip,
  ap,
  ju,
  w_,
  Lh,
  D_,
  Sl,
  f0,
  N_,
  R_,
  ta,
  o0,
  H0,
  Gu,
  Y0,
  ns,
  h0,
  qh,
  Hc = 1,
  hl = Date.now,
  Xh = hl(),
  Nn = 0,
  kr = 0,
  up = function (n, u, a) {
    var r = Il(n) && (n.substr(0, 6) === "clamp(" || n.indexOf("max") > -1);
    return ((a["_" + u + "Clamp"] = r), r ? n.substr(6, n.length - 7) : n);
  },
  rp = function (n, u) {
    return u && (!Il(n) || n.substr(0, 6) !== "clamp(")
      ? "clamp(" + n + ")"
      : n;
  },
  X3 = function o() {
    return kr && requestAnimationFrame(o);
  },
  sp = function () {
    return (pf = 1);
  },
  cp = function () {
    return (pf = 0);
  },
  $n = function (n) {
    return n;
  },
  Kr = function (n) {
    return Math.round(n * 1e5) / 1e5 || 0;
  },
  j_ = function () {
    return typeof window < "u";
  },
  U_ = function () {
    return it || (j_() && (it = window.gsap) && it.registerPlugin && it);
  },
  ka = function (n) {
    return !!~U0.indexOf(n);
  },
  H_ = function (n) {
    return (
      (n === "Height" ? Y0 : Nt["inner" + n]) ||
      en["client" + n] ||
      Kt["client" + n]
    );
  },
  Y_ = function (n) {
    return (
      sa(n, "getBoundingClientRect") ||
      (ka(n)
        ? function () {
            return ((tf.width = Nt.innerWidth), (tf.height = Y0), tf);
          }
        : function () {
            return Ci(n);
          })
    );
  },
  G3 = function (n, u, a) {
    var r = a.d,
      f = a.d2,
      h = a.a;
    return (h = sa(n, "getBoundingClientRect"))
      ? function () {
          return h()[r];
        }
      : function () {
          return (u ? H_(f) : n["client" + f]) || 0;
        };
  },
  V3 = function (n, u) {
    return !u || ~ei.indexOf(n)
      ? Y_(n)
      : function () {
          return tf;
        };
  },
  ti = function (n, u) {
    var a = u.s,
      r = u.d2,
      f = u.d,
      h = u.a;
    return Math.max(
      0,
      (a = "scroll" + r) && (h = sa(n, a))
        ? h() - Y_(n)()[f]
        : ka(n)
          ? (en[a] || Kt[a]) - H_(r)
          : n[a] - n["offset" + r],
    );
  },
  Yc = function (n, u) {
    for (var a = 0; a < ju.length; a += 3)
      (!u || ~u.indexOf(ju[a + 1])) && n(ju[a], ju[a + 1], ju[a + 2]);
  },
  Il = function (n) {
    return typeof n == "string";
  },
  ml = function (n) {
    return typeof n == "function";
  },
  Jr = function (n) {
    return typeof n == "number";
  },
  Ha = function (n) {
    return typeof n == "object";
  },
  Gr = function (n, u, a) {
    return n && n.progress(u ? 0 : 1) && a && n.pause();
  },
  Gh = function (n, u) {
    if (n.enabled) {
      var a = n._ctx
        ? n._ctx.add(function () {
            return u(n);
          })
        : u(n);
      a && a.totalTime && (n.callbackAnimation = a);
    }
  },
  Du = Math.abs,
  B_ = "left",
  L_ = "top",
  B0 = "right",
  L0 = "bottom",
  Va = "width",
  Za = "height",
  is = "Right",
  as = "Left",
  us = "Top",
  rs = "Bottom",
  Le = "padding",
  An = "margin",
  Fu = "Width",
  q0 = "Height",
  Qe = "px",
  On = function (n) {
    return Nt.getComputedStyle(n);
  },
  Z3 = function (n) {
    var u = On(n).position;
    n.style.position = u === "absolute" || u === "fixed" ? u : "relative";
  },
  fp = function (n, u) {
    for (var a in u) a in n || (n[a] = u[a]);
    return n;
  },
  Ci = function (n, u) {
    var a =
        u &&
        On(n)[c0] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        it
          .to(n, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      r = n.getBoundingClientRect();
    return (a && a.progress(0).kill(), r);
  },
  of = function (n, u) {
    var a = u.d2;
    return n["offset" + a] || n["client" + a] || 0;
  },
  q_ = function (n) {
    var u = [],
      a = n.labels,
      r = n.duration(),
      f;
    for (f in a) u.push(a[f] / r);
    return u;
  },
  Q3 = function (n) {
    return function (u) {
      return it.utils.snap(q_(n), u);
    };
  },
  X0 = function (n) {
    var u = it.utils.snap(n),
      a =
        Array.isArray(n) &&
        n.slice(0).sort(function (r, f) {
          return r - f;
        });
    return a
      ? function (r, f, h) {
          h === void 0 && (h = 0.001);
          var d;
          if (!f) return u(r);
          if (f > 0) {
            for (r -= h, d = 0; d < a.length; d++) if (a[d] >= r) return a[d];
            return a[d - 1];
          } else for (d = a.length, r += h; d--; ) if (a[d] <= r) return a[d];
          return a[0];
        }
      : function (r, f, h) {
          h === void 0 && (h = 0.001);
          var d = u(r);
          return !f || Math.abs(d - r) < h || d - r < 0 == f < 0
            ? d
            : u(f < 0 ? r - n : r + n);
        };
  },
  k3 = function (n) {
    return function (u, a) {
      return X0(q_(n))(u, a.direction);
    };
  },
  Bc = function (n, u, a, r) {
    return a.split(",").forEach(function (f) {
      return n(u, f, r);
    });
  },
  Fe = function (n, u, a, r, f) {
    return n.addEventListener(u, a, { passive: !r, capture: !!f });
  },
  We = function (n, u, a, r) {
    return n.removeEventListener(u, a, !!r);
  },
  Lc = function (n, u, a) {
    ((a = a && a.wheelHandler), a && (n(u, "wheel", a), n(u, "touchmove", a)));
  },
  op = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  qc = { toggleActions: "play", anticipatePin: 0 },
  hf = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  Fc = function (n, u) {
    if (Il(n)) {
      var a = n.indexOf("="),
        r = ~a ? +(n.charAt(a - 1) + 1) * parseFloat(n.substr(a + 1)) : 0;
      (~a && (n.indexOf("%") > a && (r *= u / 100), (n = n.substr(0, a - 1))),
        (n =
          r +
          (n in hf
            ? hf[n] * u
            : ~n.indexOf("%")
              ? (parseFloat(n) * u) / 100
              : parseFloat(n) || 0)));
    }
    return n;
  },
  Xc = function (n, u, a, r, f, h, d, g) {
    var p = f.startColor,
      _ = f.endColor,
      y = f.fontSize,
      x = f.indent,
      b = f.fontWeight,
      z = ie.createElement("div"),
      S = ka(a) || sa(a, "pinType") === "fixed",
      w = n.indexOf("scroller") !== -1,
      q = S ? Kt : a,
      Z = n.indexOf("start") !== -1,
      X = Z ? p : _,
      H =
        "border-color:" +
        X +
        ";font-size:" +
        y +
        ";color:" +
        X +
        ";font-weight:" +
        b +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (H += "position:" + ((w || g) && S ? "fixed;" : "absolute;")),
      (w || g || !S) &&
        (H += (r === ke ? B0 : L0) + ":" + (h + parseFloat(x)) + "px;"),
      d &&
        (H +=
          "box-sizing:border-box;text-align:left;width:" +
          d.offsetWidth +
          "px;"),
      (z._isStart = Z),
      z.setAttribute("class", "gsap-marker-" + n + (u ? " marker-" + u : "")),
      (z.style.cssText = H),
      (z.innerText = u || u === 0 ? n + "-" + u : n),
      q.children[0] ? q.insertBefore(z, q.children[0]) : q.appendChild(z),
      (z._offset = z["offset" + r.op.d2]),
      $c(z, 0, r, Z),
      z
    );
  },
  $c = function (n, u, a, r) {
    var f = { display: "block" },
      h = a[r ? "os2" : "p2"],
      d = a[r ? "p2" : "os2"];
    ((n._isFlipped = r),
      (f[a.a + "Percent"] = r ? -100 : 0),
      (f[a.a] = r ? "1px" : 0),
      (f["border" + h + Fu] = 1),
      (f["border" + d + Fu] = 0),
      (f[a.p] = u + "px"),
      it.set(n, f));
  },
  At = [],
  d0 = {},
  _s,
  hp = function () {
    return hl() - Nn > 34 && (_s || (_s = requestAnimationFrame(zi)));
  },
  Nu = function () {
    (!Sl || !Sl.isPressed || Sl.startX > Kt.clientWidth) &&
      (Rt.cache++,
      Sl ? _s || (_s = requestAnimationFrame(zi)) : zi(),
      Nn || Ja("scrollStart"),
      (Nn = hl()));
  },
  Vh = function () {
    ((R_ = Nt.innerWidth), (N_ = Nt.innerHeight));
  },
  Wr = function (n) {
    (Rt.cache++,
      (n === !0 ||
        (!ol &&
          !D_ &&
          !ie.fullscreenElement &&
          !ie.webkitFullscreenElement &&
          (!f0 ||
            R_ !== Nt.innerWidth ||
            Math.abs(Nt.innerHeight - N_) > Nt.innerHeight * 0.25))) &&
        ff.restart(!0));
  },
  Ka = {},
  K3 = [],
  X_ = function o() {
    return We(Et, "scrollEnd", o) || Ba(!0);
  },
  Ja = function (n) {
    return (
      (Ka[n] &&
        Ka[n].map(function (u) {
          return u();
        })) ||
      K3
    );
  },
  Pl = [],
  G_ = function (n) {
    for (var u = 0; u < Pl.length; u += 5)
      (!n || (Pl[u + 4] && Pl[u + 4].query === n)) &&
        ((Pl[u].style.cssText = Pl[u + 1]),
        Pl[u].getBBox && Pl[u].setAttribute("transform", Pl[u + 2] || ""),
        (Pl[u + 3].uncache = 1));
  },
  V_ = function () {
    return Rt.forEach(function (n) {
      return ml(n) && ++n.cacheID && (n.rec = n());
    });
  },
  G0 = function (n, u) {
    var a;
    for (Tl = 0; Tl < At.length; Tl++)
      ((a = At[Tl]),
        a && (!u || a._ctx === u) && (n ? a.kill(1) : a.revert(!0, !0)));
    ((ns = !0), u && G_(u), u || Ja("revert"));
  },
  Z_ = function (n, u) {
    (Rt.cache++,
      (u || !Cl) &&
        Rt.forEach(function (a) {
          return ml(a) && a.cacheID++ && (a.rec = 0);
        }),
      Il(n) && (Nt.history.scrollRestoration = H0 = n));
  },
  Cl,
  Qa = 0,
  dp,
  J3 = function () {
    if (dp !== Qa) {
      var n = (dp = Qa);
      requestAnimationFrame(function () {
        return n === Qa && Ba(!0);
      });
    }
  },
  Q_ = function () {
    (Kt.appendChild(Gu),
      (Y0 = (!Sl && Gu.offsetHeight) || Nt.innerHeight),
      Kt.removeChild(Gu));
  },
  mp = function (n) {
    return ps(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
    ).forEach(function (u) {
      return (u.style.display = n ? "none" : "block");
    });
  },
  Ba = function (n, u) {
    if (
      ((en = ie.documentElement),
      (Kt = ie.body),
      (U0 = [Nt, ie, en, Kt]),
      Nn && !n && !ns)
    ) {
      Fe(Et, "scrollEnd", X_);
      return;
    }
    (Q_(), (Cl = Et.isRefreshing = !0), ns || V_());
    var a = Ja("refreshInit");
    (w_ && Et.sort(),
      u || G0(),
      Rt.forEach(function (r) {
        ml(r) && (r.smooth && (r.target.style.scrollBehavior = "auto"), r(0));
      }),
      At.slice(0).forEach(function (r) {
        return r.refresh();
      }),
      (ns = !1),
      At.forEach(function (r) {
        if (r._subPinOffset && r.pin) {
          var f = r.vars.horizontal ? "offsetWidth" : "offsetHeight",
            h = r.pin[f];
          (r.revert(!0, 1), r.adjustPinSpacing(r.pin[f] - h), r.refresh());
        }
      }),
      (h0 = 1),
      mp(!0),
      At.forEach(function (r) {
        var f = ti(r.scroller, r._dir),
          h = r.vars.end === "max" || (r._endClamp && r.end > f),
          d = r._startClamp && r.start >= f;
        (h || d) &&
          r.setPositions(
            d ? f - 1 : r.start,
            h ? Math.max(d ? f : r.start + 1, f) : r.end,
            !0,
          );
      }),
      mp(!1),
      (h0 = 0),
      a.forEach(function (r) {
        return r && r.render && r.render(-1);
      }),
      Rt.forEach(function (r) {
        ml(r) &&
          (r.smooth &&
            requestAnimationFrame(function () {
              return (r.target.style.scrollBehavior = "smooth");
            }),
          r.rec && r(r.rec));
      }),
      Z_(H0, 1),
      ff.pause(),
      Qa++,
      (Cl = 2),
      zi(2),
      At.forEach(function (r) {
        return ml(r.vars.onRefresh) && r.vars.onRefresh(r);
      }),
      (Cl = Et.isRefreshing = !1),
      Ja("refresh"));
  },
  m0 = 0,
  Pc = 1,
  ss,
  zi = function (n) {
    if (n === 2 || (!Cl && !ns)) {
      ((Et.isUpdating = !0), ss && ss.update(0));
      var u = At.length,
        a = hl(),
        r = a - Xh >= 50,
        f = u && At[0].scroll();
      if (
        ((Pc = m0 > f ? -1 : 1),
        Cl || (m0 = f),
        r &&
          (Nn && !pf && a - Nn > 200 && ((Nn = 0), Ja("scrollEnd")),
          (Qr = Xh),
          (Xh = a)),
        Pc < 0)
      ) {
        for (Tl = u; Tl-- > 0; ) At[Tl] && At[Tl].update(0, r);
        Pc = 1;
      } else for (Tl = 0; Tl < u; Tl++) At[Tl] && At[Tl].update(0, r);
      Et.isUpdating = !1;
    }
    _s = 0;
  },
  g0 = [
    B_,
    L_,
    L0,
    B0,
    An + rs,
    An + is,
    An + us,
    An + as,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  Ic = g0.concat([
    Va,
    Za,
    "boxSizing",
    "max" + Fu,
    "max" + q0,
    "position",
    An,
    Le,
    Le + us,
    Le + is,
    Le + rs,
    Le + as,
  ]),
  W3 = function (n, u, a) {
    Vu(a);
    var r = n._gsap;
    if (r.spacerIsNative) Vu(r.spacerState);
    else if (n._gsap.swappedIn) {
      var f = u.parentNode;
      f && (f.insertBefore(n, u), f.removeChild(u));
    }
    n._gsap.swappedIn = !1;
  },
  Zh = function (n, u, a, r) {
    if (!n._gsap.swappedIn) {
      for (var f = g0.length, h = u.style, d = n.style, g; f--; )
        ((g = g0[f]), (h[g] = a[g]));
      ((h.position = a.position === "absolute" ? "absolute" : "relative"),
        a.display === "inline" && (h.display = "inline-block"),
        (d[L0] = d[B0] = "auto"),
        (h.flexBasis = a.flexBasis || "auto"),
        (h.overflow = "visible"),
        (h.boxSizing = "border-box"),
        (h[Va] = of(n, zl) + Qe),
        (h[Za] = of(n, ke) + Qe),
        (h[Le] = d[An] = d[L_] = d[B_] = "0"),
        Vu(r),
        (d[Va] = d["max" + Fu] = a[Va]),
        (d[Za] = d["max" + q0] = a[Za]),
        (d[Le] = a[Le]),
        n.parentNode !== u &&
          (n.parentNode.insertBefore(u, n), u.appendChild(n)),
        (n._gsap.swappedIn = !0));
    }
  },
  F3 = /([A-Z])/g,
  Vu = function (n) {
    if (n) {
      var u = n.t.style,
        a = n.length,
        r = 0,
        f,
        h;
      for ((n.t._gsap || it.core.getCache(n.t)).uncache = 1; r < a; r += 2)
        ((h = n[r + 1]),
          (f = n[r]),
          h
            ? (u[f] = h)
            : u[f] && u.removeProperty(f.replace(F3, "-$1").toLowerCase()));
    }
  },
  Gc = function (n) {
    for (var u = Ic.length, a = n.style, r = [], f = 0; f < u; f++)
      r.push(Ic[f], a[Ic[f]]);
    return ((r.t = n), r);
  },
  $3 = function (n, u, a) {
    for (var r = [], f = n.length, h = a ? 8 : 0, d; h < f; h += 2)
      ((d = n[h]), r.push(d, d in u ? u[d] : n[h + 1]));
    return ((r.t = n.t), r);
  },
  tf = { left: 0, top: 0 },
  gp = function (n, u, a, r, f, h, d, g, p, _, y, x, b, z) {
    (ml(n) && (n = n(g)),
      Il(n) &&
        n.substr(0, 3) === "max" &&
        (n = x + (n.charAt(4) === "=" ? Fc("0" + n.substr(3), a) : 0)));
    var S = b ? b.time() : 0,
      w,
      q,
      Z;
    if ((b && b.seek(0), isNaN(n) || (n = +n), Jr(n)))
      (b &&
        (n = it.utils.mapRange(
          b.scrollTrigger.start,
          b.scrollTrigger.end,
          0,
          x,
          n,
        )),
        d && $c(d, a, r, !0));
    else {
      ml(u) && (u = u(g));
      var X = (n || "0").split(" "),
        H,
        L,
        K,
        j;
      ((Z = Hl(u, g) || Kt),
        (H = Ci(Z) || {}),
        (!H || (!H.left && !H.top)) &&
          On(Z).display === "none" &&
          ((j = Z.style.display),
          (Z.style.display = "block"),
          (H = Ci(Z)),
          j ? (Z.style.display = j) : Z.style.removeProperty("display")),
        (L = Fc(X[0], H[r.d])),
        (K = Fc(X[1] || "0", a)),
        (n = H[r.p] - p[r.p] - _ + L + f - K),
        d && $c(d, K, r, a - K < 20 || (d._isStart && K > 20)),
        (a -= a - K));
    }
    if ((z && ((g[z] = n || -0.001), n < 0 && (n = 0)), h)) {
      var F = n + a,
        W = h._isStart;
      ((w = "scroll" + r.d2),
        $c(
          h,
          F,
          r,
          (W && F > 20) ||
            (!W && (y ? Math.max(Kt[w], en[w]) : h.parentNode[w]) <= F + 1),
        ),
        y &&
          ((p = Ci(d)),
          y && (h.style[r.op.p] = p[r.op.p] - r.op.m - h._offset + Qe)));
    }
    return (
      b &&
        Z &&
        ((w = Ci(Z)),
        b.seek(x),
        (q = Ci(Z)),
        (b._caScrollDist = w[r.p] - q[r.p]),
        (n = (n / b._caScrollDist) * x)),
      b && b.seek(S),
      b ? n : Math.round(n)
    );
  },
  P3 = /(webkit|moz|length|cssText|inset)/i,
  pp = function (n, u, a, r) {
    if (n.parentNode !== u) {
      var f = n.style,
        h,
        d;
      if (u === Kt) {
        ((n._stOrig = f.cssText), (d = On(n)));
        for (h in d)
          !+h &&
            !P3.test(h) &&
            d[h] &&
            typeof f[h] == "string" &&
            h !== "0" &&
            (f[h] = d[h]);
        ((f.top = a), (f.left = r));
      } else f.cssText = n._stOrig;
      ((it.core.getCache(n).uncache = 1), u.appendChild(n));
    }
  },
  k_ = function (n, u, a) {
    var r = u,
      f = r;
    return function (h) {
      var d = Math.round(n());
      return (
        d !== r &&
          d !== f &&
          Math.abs(d - r) > 3 &&
          Math.abs(d - f) > 3 &&
          ((h = d), a && a()),
        (f = r),
        (r = Math.round(h)),
        r
      );
    };
  },
  Vc = function (n, u, a) {
    var r = {};
    ((r[u.p] = "+=" + a), it.set(n, r));
  },
  _p = function (n, u) {
    var a = ha(n, u),
      r = "_scroll" + u.p2,
      f = function h(d, g, p, _, y) {
        var x = h.tween,
          b = g.onComplete,
          z = {};
        p = p || a();
        var S = k_(a, p, function () {
          (x.kill(), (h.tween = 0));
        });
        return (
          (y = (_ && y) || 0),
          (_ = _ || d - p),
          x && x.kill(),
          (g[r] = d),
          (g.inherit = !1),
          (g.modifiers = z),
          (z[r] = function () {
            return S(p + _ * x.ratio + y * x.ratio * x.ratio);
          }),
          (g.onUpdate = function () {
            (Rt.cache++, h.tween && zi());
          }),
          (g.onComplete = function () {
            ((h.tween = 0), b && b.call(x));
          }),
          (x = h.tween = it.to(n, g)),
          x
        );
      };
    return (
      (n[r] = a),
      (a.wheelHandler = function () {
        return f.tween && f.tween.kill() && (f.tween = 0);
      }),
      Fe(n, "wheel", a.wheelHandler),
      Et.isTouch && Fe(n, "touchmove", a.wheelHandler),
      f
    );
  },
  Et = (function () {
    function o(u, a) {
      (Ru ||
        o.register(it) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        o0(this),
        this.init(u, a));
    }
    var n = o.prototype;
    return (
      (n.init = function (a, r) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !kr)
        ) {
          this.update = this.refresh = this.kill = $n;
          return;
        }
        a = fp(Il(a) || Jr(a) || a.nodeType ? { trigger: a } : a, qc);
        var f = a,
          h = f.onUpdate,
          d = f.toggleClass,
          g = f.id,
          p = f.onToggle,
          _ = f.onRefresh,
          y = f.scrub,
          x = f.trigger,
          b = f.pin,
          z = f.pinSpacing,
          S = f.invalidateOnRefresh,
          w = f.anticipatePin,
          q = f.onScrubComplete,
          Z = f.onSnapComplete,
          X = f.once,
          H = f.snap,
          L = f.pinReparent,
          K = f.pinSpacer,
          j = f.containerAnimation,
          F = f.fastScrollEnd,
          W = f.preventOverlaps,
          $ =
            a.horizontal || (a.containerAnimation && a.horizontal !== !1)
              ? zl
              : ke,
          ut = !y && y !== 0,
          P = Hl(a.scroller || Nt),
          _t = it.core.getCache(P),
          ct = ka(P),
          pt =
            ("pinType" in a
              ? a.pinType
              : sa(P, "pinType") || (ct && "fixed")) === "fixed",
          D = [a.onEnter, a.onLeave, a.onEnterBack, a.onLeaveBack],
          Q = ut && a.toggleActions.split(" "),
          I = "markers" in a ? a.markers : qc.markers,
          st = ct ? 0 : parseFloat(On(P)["border" + $.p2 + Fu]) || 0,
          M = this,
          C =
            a.onRefreshInit &&
            function () {
              return a.onRefreshInit(M);
            },
          G = G3(P, ct, $),
          tt = V3(P, ct),
          et = 0,
          rt = 0,
          dt = 0,
          mt = ha(P, $),
          Qt,
          Ot,
          Ml,
          Ne,
          Ge,
          Ht,
          Jt,
          Ke,
          Pe,
          B,
          ul,
          Gl,
          fn,
          ne,
          Rn,
          qn,
          ze,
          Re,
          jn,
          fe,
          rl,
          Al,
          on,
          ma,
          xe,
          Xn,
          me,
          pl,
          je,
          Gn,
          ni,
          zt,
          hn,
          sl,
          cl,
          Ve,
          dn,
          mn,
          Un;
        if (
          ((M._startClamp = M._endClamp = !1),
          (M._dir = $),
          (w *= 45),
          (M.scroller = P),
          (M.scroll = j ? j.time.bind(j) : mt),
          (Ne = mt()),
          (M.vars = a),
          (r = r || a.animation),
          "refreshPriority" in a &&
            ((w_ = 1), a.refreshPriority === -9999 && (ss = M)),
          (_t.tweenScroll = _t.tweenScroll || {
            top: _p(P, ke),
            left: _p(P, zl),
          }),
          (M.tweenTo = Qt = _t.tweenScroll[$.p]),
          (M.scrubDuration = function (lt) {
            ((hn = Jr(lt) && lt),
              hn
                ? zt
                  ? zt.duration(lt)
                  : (zt = it.to(r, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: hn,
                      paused: !0,
                      onComplete: function () {
                        return q && q(M);
                      },
                    }))
                : (zt && zt.progress(1).kill(), (zt = 0)));
          }),
          r &&
            ((r.vars.lazy = !1),
            (r._initted && !M.isReverted) ||
              (r.vars.immediateRender !== !1 &&
                a.immediateRender !== !1 &&
                r.duration() &&
                r.render(0, !0, !0)),
            (M.animation = r.pause()),
            (r.scrollTrigger = M),
            M.scrubDuration(y),
            (Gn = 0),
            g || (g = r.vars.id)),
          H &&
            ((!Ha(H) || H.push) && (H = { snapTo: H }),
            "scrollBehavior" in Kt.style &&
              it.set(ct ? [Kt, en] : P, { scrollBehavior: "auto" }),
            Rt.forEach(function (lt) {
              return (
                ml(lt) &&
                lt.target === (ct ? ie.scrollingElement || en : P) &&
                (lt.smooth = !1)
              );
            }),
            (Ml = ml(H.snapTo)
              ? H.snapTo
              : H.snapTo === "labels"
                ? Q3(r)
                : H.snapTo === "labelsDirectional"
                  ? k3(r)
                  : H.directional !== !1
                    ? function (lt, bt) {
                        return X0(H.snapTo)(
                          lt,
                          hl() - rt < 500 ? 0 : bt.direction,
                        );
                      }
                    : it.utils.snap(H.snapTo)),
            (sl = H.duration || { min: 0.1, max: 2 }),
            (sl = Ha(sl) ? ls(sl.min, sl.max) : ls(sl, sl)),
            (cl = it
              .delayedCall(H.delay || hn / 2 || 0.1, function () {
                var lt = mt(),
                  bt = hl() - rt < 500,
                  ot = Qt.tween;
                if (
                  (bt || Math.abs(M.getVelocity()) < 10) &&
                  !ot &&
                  !pf &&
                  et !== lt
                ) {
                  var vt = (lt - Ht) / ne,
                    Se = r && !ut ? r.totalProgress() : vt,
                    wt = bt ? 0 : ((Se - ni) / (hl() - Qr)) * 1e3 || 0,
                    oe = it.utils.clamp(-vt, 1 - vt, (Du(wt / 2) * wt) / 0.185),
                    ue = vt + (H.inertia === !1 ? 0 : oe),
                    Ct,
                    Mt,
                    Xt = H,
                    _l = Xt.onStart,
                    re = Xt.onInterrupt,
                    vl = Xt.onComplete;
                  if (
                    ((Ct = Ml(ue, M)),
                    Jr(Ct) || (Ct = ue),
                    (Mt = Math.max(0, Math.round(Ht + Ct * ne))),
                    lt <= Jt && lt >= Ht && Mt !== lt)
                  ) {
                    if (ot && !ot._initted && ot.data <= Du(Mt - lt)) return;
                    (H.inertia === !1 && (oe = Ct - vt),
                      Qt(
                        Mt,
                        {
                          duration: sl(
                            Du(
                              (Math.max(Du(ue - Se), Du(Ct - Se)) * 0.185) /
                                wt /
                                0.05 || 0,
                            ),
                          ),
                          ease: H.ease || "power3",
                          data: Du(Mt - lt),
                          onInterrupt: function () {
                            return cl.restart(!0) && re && re(M);
                          },
                          onComplete: function () {
                            (M.update(),
                              (et = mt()),
                              r &&
                                !ut &&
                                (zt
                                  ? zt.resetTo(
                                      "totalProgress",
                                      Ct,
                                      r._tTime / r._tDur,
                                    )
                                  : r.progress(Ct)),
                              (Gn = ni =
                                r && !ut ? r.totalProgress() : M.progress),
                              Z && Z(M),
                              vl && vl(M));
                          },
                        },
                        lt,
                        oe * ne,
                        Mt - lt - oe * ne,
                      ),
                      _l && _l(M, Qt.tween));
                  }
                } else M.isActive && et !== lt && cl.restart(!0);
              })
              .pause())),
          g && (d0[g] = M),
          (x = M.trigger = Hl(x || (b !== !0 && b))),
          (Un = x && x._gsap && x._gsap.stRevert),
          Un && (Un = Un(M)),
          (b = b === !0 ? x : Hl(b)),
          Il(d) && (d = { targets: x, className: d }),
          b &&
            (z === !1 ||
              z === An ||
              (z =
                !z &&
                b.parentNode &&
                b.parentNode.style &&
                On(b.parentNode).display === "flex"
                  ? !1
                  : Le),
            (M.pin = b),
            (Ot = it.core.getCache(b)),
            Ot.spacer
              ? (Rn = Ot.pinState)
              : (K &&
                  ((K = Hl(K)),
                  K && !K.nodeType && (K = K.current || K.nativeElement),
                  (Ot.spacerIsNative = !!K),
                  K && (Ot.spacerState = Gc(K))),
                (Ot.spacer = Re = K || ie.createElement("div")),
                Re.classList.add("pin-spacer"),
                g && Re.classList.add("pin-spacer-" + g),
                (Ot.pinState = Rn = Gc(b))),
            a.force3D !== !1 && it.set(b, { force3D: !0 }),
            (M.spacer = Re = Ot.spacer),
            (je = On(b)),
            (ma = je[z + $.os2]),
            (fe = it.getProperty(b)),
            (rl = it.quickSetter(b, $.a, Qe)),
            Zh(b, Re, je),
            (ze = Gc(b))),
          I)
        ) {
          ((Gl = Ha(I) ? fp(I, op) : op),
            (B = Xc("scroller-start", g, P, $, Gl, 0)),
            (ul = Xc("scroller-end", g, P, $, Gl, 0, B)),
            (jn = B["offset" + $.op.d2]));
          var Oi = Hl(sa(P, "content") || P);
          ((Ke = this.markerStart = Xc("start", g, Oi, $, Gl, jn, 0, j)),
            (Pe = this.markerEnd = Xc("end", g, Oi, $, Gl, jn, 0, j)),
            j && (mn = it.quickSetter([Ke, Pe], $.a, Qe)),
            !pt &&
              !(ei.length && sa(P, "fixedMarkers") === !0) &&
              (Z3(ct ? Kt : P),
              it.set([B, ul], { force3D: !0 }),
              (Xn = it.quickSetter(B, $.a, Qe)),
              (pl = it.quickSetter(ul, $.a, Qe))));
        }
        if (j) {
          var yt = j.vars.onUpdate,
            ft = j.vars.onUpdateParams;
          j.eventCallback("onUpdate", function () {
            (M.update(0, 0, 1), yt && yt.apply(j, ft || []));
          });
        }
        if (
          ((M.previous = function () {
            return At[At.indexOf(M) - 1];
          }),
          (M.next = function () {
            return At[At.indexOf(M) + 1];
          }),
          (M.revert = function (lt, bt) {
            if (!bt) return M.kill(!0);
            var ot = lt !== !1 || !M.enabled,
              vt = ol;
            ot !== M.isReverted &&
              (ot &&
                ((Ve = Math.max(mt(), M.scroll.rec || 0)),
                (dt = M.progress),
                (dn = r && r.progress())),
              Ke &&
                [Ke, Pe, B, ul].forEach(function (Se) {
                  return (Se.style.display = ot ? "none" : "block");
                }),
              ot && ((ol = M), M.update(ot)),
              b &&
                (!L || !M.isActive) &&
                (ot ? W3(b, Re, Rn) : Zh(b, Re, On(b), xe)),
              ot || M.update(ot),
              (ol = vt),
              (M.isReverted = ot));
          }),
          (M.refresh = function (lt, bt, ot, vt) {
            if (!((ol || !M.enabled) && !bt)) {
              if (b && lt && Nn) {
                Fe(o, "scrollEnd", X_);
                return;
              }
              (!Cl && C && C(M),
                (ol = M),
                Qt.tween && !ot && (Qt.tween.kill(), (Qt.tween = 0)),
                zt && zt.pause(),
                S &&
                  r &&
                  (r.revert({ kill: !1 }).invalidate(),
                  r.getChildren
                    ? r.getChildren(!0, !0, !1).forEach(function (Qn) {
                        return Qn.vars.immediateRender && Qn.render(0, !0, !0);
                      })
                    : r.vars.immediateRender && r.render(0, !0, !0)),
                M.isReverted || M.revert(!0, !0),
                (M._subPinOffset = !1));
              var Se = G(),
                wt = tt(),
                oe = j ? j.duration() : ti(P, $),
                ue = ne <= 0.01 || !ne,
                Ct = 0,
                Mt = vt || 0,
                Xt = Ha(ot) ? ot.end : a.end,
                _l = a.endTrigger || x,
                re = Ha(ot)
                  ? ot.start
                  : a.start || (a.start === 0 || !x ? 0 : b ? "0 0" : "0 100%"),
                vl = (M.pinnedContainer =
                  a.pinnedContainer && Hl(a.pinnedContainer, M)),
                Vl = (x && Math.max(0, At.indexOf(M))) || 0,
                ge = Vl,
                Me,
                pe,
                Ol,
                Vn,
                _e,
                Dt,
                Zl,
                Fa,
                Zn,
                gn,
                pn,
                wi,
                ga;
              for (
                I &&
                Ha(ot) &&
                ((wi = it.getProperty(B, $.p)), (ga = it.getProperty(ul, $.p)));
                ge-- > 0;
              )
                ((Dt = At[ge]),
                  Dt.end || Dt.refresh(0, 1) || (ol = M),
                  (Zl = Dt.pin),
                  Zl &&
                    (Zl === x || Zl === b || Zl === vl) &&
                    !Dt.isReverted &&
                    (gn || (gn = []), gn.unshift(Dt), Dt.revert(!0, !0)),
                  Dt !== At[ge] && (Vl--, ge--));
              for (
                ml(re) && (re = re(M)),
                  re = up(re, "start", M),
                  Ht =
                    gp(
                      re,
                      x,
                      Se,
                      $,
                      mt(),
                      Ke,
                      B,
                      M,
                      wt,
                      st,
                      pt,
                      oe,
                      j,
                      M._startClamp && "_startClamp",
                    ) || (b ? -0.001 : 0),
                  ml(Xt) && (Xt = Xt(M)),
                  Il(Xt) &&
                    !Xt.indexOf("+=") &&
                    (~Xt.indexOf(" ")
                      ? (Xt = (Il(re) ? re.split(" ")[0] : "") + Xt)
                      : ((Ct = Fc(Xt.substr(2), Se)),
                        (Xt = Il(re)
                          ? re
                          : (j
                              ? it.utils.mapRange(
                                  0,
                                  j.duration(),
                                  j.scrollTrigger.start,
                                  j.scrollTrigger.end,
                                  Ht,
                                )
                              : Ht) + Ct),
                        (_l = x))),
                  Xt = up(Xt, "end", M),
                  Jt =
                    Math.max(
                      Ht,
                      gp(
                        Xt || (_l ? "100% 0" : oe),
                        _l,
                        Se,
                        $,
                        mt() + Ct,
                        Pe,
                        ul,
                        M,
                        wt,
                        st,
                        pt,
                        oe,
                        j,
                        M._endClamp && "_endClamp",
                      ),
                    ) || -0.001,
                  Ct = 0,
                  ge = Vl;
                ge--;
              )
                ((Dt = At[ge] || {}),
                  (Zl = Dt.pin),
                  Zl &&
                    Dt.start - Dt._pinPush <= Ht &&
                    !j &&
                    Dt.end > 0 &&
                    ((Me =
                      Dt.end -
                      (M._startClamp ? Math.max(0, Dt.start) : Dt.start)),
                    ((Zl === x && Dt.start - Dt._pinPush < Ht) || Zl === vl) &&
                      isNaN(re) &&
                      (Ct += Me * (1 - Dt.progress)),
                    Zl === b && (Mt += Me)));
              if (
                ((Ht += Ct),
                (Jt += Ct),
                M._startClamp && (M._startClamp += Ct),
                M._endClamp &&
                  !Cl &&
                  ((M._endClamp = Jt || -0.001), (Jt = Math.min(Jt, ti(P, $)))),
                (ne = Jt - Ht || ((Ht -= 0.01) && 0.001)),
                ue &&
                  (dt = it.utils.clamp(0, 1, it.utils.normalize(Ht, Jt, Ve))),
                (M._pinPush = Mt),
                Ke &&
                  Ct &&
                  ((Me = {}),
                  (Me[$.a] = "+=" + Ct),
                  vl && (Me[$.p] = "-=" + mt()),
                  it.set([Ke, Pe], Me)),
                b && !(h0 && M.end >= ti(P, $)))
              )
                ((Me = On(b)),
                  (Vn = $ === ke),
                  (Ol = mt()),
                  (Al = parseFloat(fe($.a)) + Mt),
                  !oe &&
                    Jt > 1 &&
                    ((pn = (ct ? ie.scrollingElement || en : P).style),
                    (pn = {
                      style: pn,
                      value: pn["overflow" + $.a.toUpperCase()],
                    }),
                    ct &&
                      On(Kt)["overflow" + $.a.toUpperCase()] !== "scroll" &&
                      (pn.style["overflow" + $.a.toUpperCase()] = "scroll")),
                  Zh(b, Re, Me),
                  (ze = Gc(b)),
                  (pe = Ci(b, !0)),
                  (Fa = pt && ha(P, Vn ? zl : ke)()),
                  z
                    ? ((xe = [z + $.os2, ne + Mt + Qe]),
                      (xe.t = Re),
                      (ge = z === Le ? of(b, $) + ne + Mt : 0),
                      ge &&
                        (xe.push($.d, ge + Qe),
                        Re.style.flexBasis !== "auto" &&
                          (Re.style.flexBasis = ge + Qe)),
                      Vu(xe),
                      vl &&
                        At.forEach(function (Qn) {
                          Qn.pin === vl &&
                            Qn.vars.pinSpacing !== !1 &&
                            (Qn._subPinOffset = !0);
                        }),
                      pt && mt(Ve))
                    : ((ge = of(b, $)),
                      ge &&
                        Re.style.flexBasis !== "auto" &&
                        (Re.style.flexBasis = ge + Qe)),
                  pt &&
                    ((_e = {
                      top: pe.top + (Vn ? Ol - Ht : Fa) + Qe,
                      left: pe.left + (Vn ? Fa : Ol - Ht) + Qe,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (_e[Va] = _e["max" + Fu] = Math.ceil(pe.width) + Qe),
                    (_e[Za] = _e["max" + q0] = Math.ceil(pe.height) + Qe),
                    (_e[An] =
                      _e[An + us] =
                      _e[An + is] =
                      _e[An + rs] =
                      _e[An + as] =
                        "0"),
                    (_e[Le] = Me[Le]),
                    (_e[Le + us] = Me[Le + us]),
                    (_e[Le + is] = Me[Le + is]),
                    (_e[Le + rs] = Me[Le + rs]),
                    (_e[Le + as] = Me[Le + as]),
                    (qn = $3(Rn, _e, L)),
                    Cl && mt(0)),
                  r
                    ? ((Zn = r._initted),
                      Lh(1),
                      r.render(r.duration(), !0, !0),
                      (on = fe($.a) - Al + ne + Mt),
                      (me = Math.abs(ne - on) > 1),
                      pt && me && qn.splice(qn.length - 2, 2),
                      r.render(0, !0, !0),
                      Zn || r.invalidate(!0),
                      r.parent || r.totalTime(r.totalTime()),
                      Lh(0))
                    : (on = ne),
                  pn &&
                    (pn.value
                      ? (pn.style["overflow" + $.a.toUpperCase()] = pn.value)
                      : pn.style.removeProperty("overflow-" + $.a)));
              else if (x && mt() && !j)
                for (pe = x.parentNode; pe && pe !== Kt; )
                  (pe._pinOffset &&
                    ((Ht -= pe._pinOffset), (Jt -= pe._pinOffset)),
                    (pe = pe.parentNode));
              (gn &&
                gn.forEach(function (Qn) {
                  return Qn.revert(!1, !0);
                }),
                (M.start = Ht),
                (M.end = Jt),
                (Ne = Ge = Cl ? Ve : mt()),
                !j && !Cl && (Ne < Ve && mt(Ve), (M.scroll.rec = 0)),
                M.revert(!1, !0),
                (rt = hl()),
                cl && ((et = -1), cl.restart(!0)),
                (ol = 0),
                r &&
                  ut &&
                  (r._initted || dn) &&
                  r.progress() !== dn &&
                  r.progress(dn || 0, !0).render(r.time(), !0, !0),
                (ue || dt !== M.progress || j || S || (r && !r._initted)) &&
                  (r &&
                    !ut &&
                    (r._initted || dt || r.vars.immediateRender !== !1) &&
                    r.totalProgress(
                      j && Ht < -0.001 && !dt
                        ? it.utils.normalize(Ht, Jt, 0)
                        : dt,
                      !0,
                    ),
                  (M.progress = ue || (Ne - Ht) / ne === dt ? 0 : dt)),
                b && z && (Re._pinOffset = Math.round(M.progress * on)),
                zt && zt.invalidate(),
                isNaN(wi) ||
                  ((wi -= it.getProperty(B, $.p)),
                  (ga -= it.getProperty(ul, $.p)),
                  Vc(B, $, wi),
                  Vc(Ke, $, wi - (vt || 0)),
                  Vc(ul, $, ga),
                  Vc(Pe, $, ga - (vt || 0))),
                ue && !Cl && M.update(),
                _ && !Cl && !fn && ((fn = !0), _(M), (fn = !1)));
            }
          }),
          (M.getVelocity = function () {
            return ((mt() - Ge) / (hl() - Qr)) * 1e3 || 0;
          }),
          (M.endAnimation = function () {
            (Gr(M.callbackAnimation),
              r &&
                (zt
                  ? zt.progress(1)
                  : r.paused()
                    ? ut || Gr(r, M.direction < 0, 1)
                    : Gr(r, r.reversed())));
          }),
          (M.labelToScroll = function (lt) {
            return (
              (r &&
                r.labels &&
                (Ht || M.refresh() || Ht) +
                  (r.labels[lt] / r.duration()) * ne) ||
              0
            );
          }),
          (M.getTrailing = function (lt) {
            var bt = At.indexOf(M),
              ot =
                M.direction > 0 ? At.slice(0, bt).reverse() : At.slice(bt + 1);
            return (
              Il(lt)
                ? ot.filter(function (vt) {
                    return vt.vars.preventOverlaps === lt;
                  })
                : ot
            ).filter(function (vt) {
              return M.direction > 0 ? vt.end <= Ht : vt.start >= Jt;
            });
          }),
          (M.update = function (lt, bt, ot) {
            if (!(j && !ot && !lt)) {
              var vt = Cl === !0 ? Ve : M.scroll(),
                Se = lt ? 0 : (vt - Ht) / ne,
                wt = Se < 0 ? 0 : Se > 1 ? 1 : Se || 0,
                oe = M.progress,
                ue,
                Ct,
                Mt,
                Xt,
                _l,
                re,
                vl,
                Vl;
              if (
                (bt &&
                  ((Ge = Ne),
                  (Ne = j ? mt() : vt),
                  H && ((ni = Gn), (Gn = r && !ut ? r.totalProgress() : wt))),
                w &&
                  b &&
                  !ol &&
                  !Hc &&
                  Nn &&
                  (!wt && Ht < vt + ((vt - Ge) / (hl() - Qr)) * w
                    ? (wt = 1e-4)
                    : wt === 1 &&
                      Jt > vt + ((vt - Ge) / (hl() - Qr)) * w &&
                      (wt = 0.9999)),
                wt !== oe && M.enabled)
              ) {
                if (
                  ((ue = M.isActive = !!wt && wt < 1),
                  (Ct = !!oe && oe < 1),
                  (re = ue !== Ct),
                  (_l = re || !!wt != !!oe),
                  (M.direction = wt > oe ? 1 : -1),
                  (M.progress = wt),
                  _l &&
                    !ol &&
                    ((Mt = wt && !oe ? 0 : wt === 1 ? 1 : oe === 1 ? 2 : 3),
                    ut &&
                      ((Xt =
                        (!re && Q[Mt + 1] !== "none" && Q[Mt + 1]) || Q[Mt]),
                      (Vl =
                        r &&
                        (Xt === "complete" || Xt === "reset" || Xt in r)))),
                  W &&
                    (re || Vl) &&
                    (Vl || y || !r) &&
                    (ml(W)
                      ? W(M)
                      : M.getTrailing(W).forEach(function (Ol) {
                          return Ol.endAnimation();
                        })),
                  ut ||
                    (zt && !ol && !Hc
                      ? (zt._dp._time - zt._start !== zt._time &&
                          zt.render(zt._dp._time - zt._start),
                        zt.resetTo
                          ? zt.resetTo("totalProgress", wt, r._tTime / r._tDur)
                          : ((zt.vars.totalProgress = wt),
                            zt.invalidate().restart()))
                      : r && r.totalProgress(wt, !!(ol && (rt || lt)))),
                  b)
                ) {
                  if ((lt && z && (Re.style[z + $.os2] = ma), !pt))
                    rl(Kr(Al + on * wt));
                  else if (_l) {
                    if (
                      ((vl =
                        !lt && wt > oe && Jt + 1 > vt && vt + 1 >= ti(P, $)),
                      L)
                    )
                      if (!lt && (ue || vl)) {
                        var ge = Ci(b, !0),
                          Me = vt - Ht;
                        pp(
                          b,
                          Kt,
                          ge.top + ($ === ke ? Me : 0) + Qe,
                          ge.left + ($ === ke ? 0 : Me) + Qe,
                        );
                      } else pp(b, Re);
                    (Vu(ue || vl ? qn : ze),
                      (me && wt < 1 && ue) ||
                        rl(Al + (wt === 1 && !vl ? on : 0)));
                  }
                }
                (H && !Qt.tween && !ol && !Hc && cl.restart(!0),
                  d &&
                    (re || (X && wt && (wt < 1 || !qh))) &&
                    ps(d.targets).forEach(function (Ol) {
                      return Ol.classList[ue || X ? "add" : "remove"](
                        d.className,
                      );
                    }),
                  h && !ut && !lt && h(M),
                  _l && !ol
                    ? (ut &&
                        (Vl &&
                          (Xt === "complete"
                            ? r.pause().totalProgress(1)
                            : Xt === "reset"
                              ? r.restart(!0).pause()
                              : Xt === "restart"
                                ? r.restart(!0)
                                : r[Xt]()),
                        h && h(M)),
                      (re || !qh) &&
                        (p && re && Gh(M, p),
                        D[Mt] && Gh(M, D[Mt]),
                        X && (wt === 1 ? M.kill(!1, 1) : (D[Mt] = 0)),
                        re || ((Mt = wt === 1 ? 1 : 3), D[Mt] && Gh(M, D[Mt]))),
                      F &&
                        !ue &&
                        Math.abs(M.getVelocity()) > (Jr(F) ? F : 2500) &&
                        (Gr(M.callbackAnimation),
                        zt
                          ? zt.progress(1)
                          : Gr(r, Xt === "reverse" ? 1 : !wt, 1)))
                    : ut && h && !ol && h(M));
              }
              if (pl) {
                var pe = j ? (vt / j.duration()) * (j._caScrollDist || 0) : vt;
                (Xn(pe + (B._isFlipped ? 1 : 0)), pl(pe));
              }
              mn && mn((-vt / j.duration()) * (j._caScrollDist || 0));
            }
          }),
          (M.enable = function (lt, bt) {
            M.enabled ||
              ((M.enabled = !0),
              Fe(P, "resize", Wr),
              ct || Fe(P, "scroll", Nu),
              C && Fe(o, "refreshInit", C),
              lt !== !1 && ((M.progress = dt = 0), (Ne = Ge = et = mt())),
              bt !== !1 && M.refresh());
          }),
          (M.getTween = function (lt) {
            return lt && Qt ? Qt.tween : zt;
          }),
          (M.setPositions = function (lt, bt, ot, vt) {
            if (j) {
              var Se = j.scrollTrigger,
                wt = j.duration(),
                oe = Se.end - Se.start;
              ((lt = Se.start + (oe * lt) / wt),
                (bt = Se.start + (oe * bt) / wt));
            }
            (M.refresh(
              !1,
              !1,
              {
                start: rp(lt, ot && !!M._startClamp),
                end: rp(bt, ot && !!M._endClamp),
              },
              vt,
            ),
              M.update());
          }),
          (M.adjustPinSpacing = function (lt) {
            if (xe && lt) {
              var bt = xe.indexOf($.d) + 1;
              ((xe[bt] = parseFloat(xe[bt]) + lt + Qe),
                (xe[1] = parseFloat(xe[1]) + lt + Qe),
                Vu(xe));
            }
          }),
          (M.disable = function (lt, bt) {
            if (
              (lt !== !1 && M.revert(!0, !0),
              M.enabled &&
                ((M.enabled = M.isActive = !1),
                bt || (zt && zt.pause()),
                (Ve = 0),
                Ot && (Ot.uncache = 1),
                C && We(o, "refreshInit", C),
                cl &&
                  (cl.pause(), Qt.tween && Qt.tween.kill() && (Qt.tween = 0)),
                !ct))
            ) {
              for (var ot = At.length; ot--; )
                if (At[ot].scroller === P && At[ot] !== M) return;
              (We(P, "resize", Wr), ct || We(P, "scroll", Nu));
            }
          }),
          (M.kill = function (lt, bt) {
            (M.disable(lt, bt), zt && !bt && zt.kill(), g && delete d0[g]);
            var ot = At.indexOf(M);
            (ot >= 0 && At.splice(ot, 1),
              ot === Tl && Pc > 0 && Tl--,
              (ot = 0),
              At.forEach(function (vt) {
                return vt.scroller === M.scroller && (ot = 1);
              }),
              ot || Cl || (M.scroll.rec = 0),
              r &&
                ((r.scrollTrigger = null),
                lt && r.revert({ kill: !1 }),
                bt || r.kill()),
              Ke &&
                [Ke, Pe, B, ul].forEach(function (vt) {
                  return vt.parentNode && vt.parentNode.removeChild(vt);
                }),
              ss === M && (ss = 0),
              b &&
                (Ot && (Ot.uncache = 1),
                (ot = 0),
                At.forEach(function (vt) {
                  return vt.pin === b && ot++;
                }),
                ot || (Ot.spacer = 0)),
              a.onKill && a.onKill(M));
          }),
          At.push(M),
          M.enable(!1, !1),
          Un && Un(M),
          r && r.add && !ne)
        ) {
          var Gt = M.update;
          ((M.update = function () {
            ((M.update = Gt), Rt.cache++, Ht || Jt || M.refresh());
          }),
            it.delayedCall(0.01, M.update),
            (ne = 0.01),
            (Ht = Jt = 0));
        } else M.refresh();
        b && J3();
      }),
      (o.register = function (a) {
        return (
          Ru ||
            ((it = a || U_()),
            j_() && window.document && o.enable(),
            (Ru = kr)),
          Ru
        );
      }),
      (o.defaults = function (a) {
        if (a) for (var r in a) qc[r] = a[r];
        return qc;
      }),
      (o.disable = function (a, r) {
        ((kr = 0),
          At.forEach(function (h) {
            return h[r ? "kill" : "disable"](a);
          }),
          We(Nt, "wheel", Nu),
          We(ie, "scroll", Nu),
          clearInterval(Uc),
          We(ie, "touchcancel", $n),
          We(Kt, "touchstart", $n),
          Bc(We, ie, "pointerdown,touchstart,mousedown", sp),
          Bc(We, ie, "pointerup,touchend,mouseup", cp),
          ff.kill(),
          Yc(We));
        for (var f = 0; f < Rt.length; f += 3)
          (Lc(We, Rt[f], Rt[f + 1]), Lc(We, Rt[f], Rt[f + 2]));
      }),
      (o.enable = function () {
        if (
          ((Nt = window),
          (ie = document),
          (en = ie.documentElement),
          (Kt = ie.body),
          it &&
            ((ps = it.utils.toArray),
            (ls = it.utils.clamp),
            (o0 = it.core.context || $n),
            (Lh = it.core.suppressOverwrites || $n),
            (H0 = Nt.history.scrollRestoration || "auto"),
            (m0 = Nt.pageYOffset || 0),
            it.core.globals("ScrollTrigger", o),
            Kt))
        ) {
          ((kr = 1),
            (Gu = document.createElement("div")),
            (Gu.style.height = "100vh"),
            (Gu.style.position = "absolute"),
            Q_(),
            X3(),
            De.register(it),
            (o.isTouch = De.isTouch),
            (ta =
              De.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (f0 = De.isTouch === 1),
            Fe(Nt, "wheel", Nu),
            (U0 = [Nt, ie, en, Kt]),
            it.matchMedia
              ? ((o.matchMedia = function (p) {
                  var _ = it.matchMedia(),
                    y;
                  for (y in p) _.add(y, p[y]);
                  return _;
                }),
                it.addEventListener("matchMediaInit", function () {
                  (V_(), G0());
                }),
                it.addEventListener("matchMediaRevert", function () {
                  return G_();
                }),
                it.addEventListener("matchMedia", function () {
                  (Ba(0, 1), Ja("matchMedia"));
                }),
                it.matchMedia().add("(orientation: portrait)", function () {
                  return (Vh(), Vh);
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Vh(),
            Fe(ie, "scroll", Nu));
          var a = Kt.hasAttribute("style"),
            r = Kt.style,
            f = r.borderTopStyle,
            h = it.core.Animation.prototype,
            d,
            g;
          for (
            h.revert ||
              Object.defineProperty(h, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              r.borderTopStyle = "solid",
              d = Ci(Kt),
              ke.m = Math.round(d.top + ke.sc()) || 0,
              zl.m = Math.round(d.left + zl.sc()) || 0,
              f ? (r.borderTopStyle = f) : r.removeProperty("border-top-style"),
              a || (Kt.setAttribute("style", ""), Kt.removeAttribute("style")),
              Uc = setInterval(hp, 250),
              it.delayedCall(0.5, function () {
                return (Hc = 0);
              }),
              Fe(ie, "touchcancel", $n),
              Fe(Kt, "touchstart", $n),
              Bc(Fe, ie, "pointerdown,touchstart,mousedown", sp),
              Bc(Fe, ie, "pointerup,touchend,mouseup", cp),
              c0 = it.utils.checkPrefix("transform"),
              Ic.push(c0),
              Ru = hl(),
              ff = it.delayedCall(0.2, Ba).pause(),
              ju = [
                ie,
                "visibilitychange",
                function () {
                  var p = Nt.innerWidth,
                    _ = Nt.innerHeight;
                  ie.hidden
                    ? ((ip = p), (ap = _))
                    : (ip !== p || ap !== _) && Wr();
                },
                ie,
                "DOMContentLoaded",
                Ba,
                Nt,
                "load",
                Ba,
                Nt,
                "resize",
                Wr,
              ],
              Yc(Fe),
              At.forEach(function (p) {
                return p.enable(0, 1);
              }),
              g = 0;
            g < Rt.length;
            g += 3
          )
            (Lc(We, Rt[g], Rt[g + 1]), Lc(We, Rt[g], Rt[g + 2]));
        }
      }),
      (o.config = function (a) {
        "limitCallbacks" in a && (qh = !!a.limitCallbacks);
        var r = a.syncInterval;
        ((r && clearInterval(Uc)) || ((Uc = r) && setInterval(hp, r)),
          "ignoreMobileResize" in a &&
            (f0 = o.isTouch === 1 && a.ignoreMobileResize),
          "autoRefreshEvents" in a &&
            (Yc(We) || Yc(Fe, a.autoRefreshEvents || "none"),
            (D_ = (a.autoRefreshEvents + "").indexOf("resize") === -1)));
      }),
      (o.scrollerProxy = function (a, r) {
        var f = Hl(a),
          h = Rt.indexOf(f),
          d = ka(f);
        (~h && Rt.splice(h, d ? 6 : 2),
          r && (d ? ei.unshift(Nt, r, Kt, r, en, r) : ei.unshift(f, r)));
      }),
      (o.clearMatchMedia = function (a) {
        At.forEach(function (r) {
          return r._ctx && r._ctx.query === a && r._ctx.kill(!0, !0);
        });
      }),
      (o.isInViewport = function (a, r, f) {
        var h = (Il(a) ? Hl(a) : a).getBoundingClientRect(),
          d = h[f ? Va : Za] * r || 0;
        return f
          ? h.right - d > 0 && h.left + d < Nt.innerWidth
          : h.bottom - d > 0 && h.top + d < Nt.innerHeight;
      }),
      (o.positionInViewport = function (a, r, f) {
        Il(a) && (a = Hl(a));
        var h = a.getBoundingClientRect(),
          d = h[f ? Va : Za],
          g =
            r == null
              ? d / 2
              : r in hf
                ? hf[r] * d
                : ~r.indexOf("%")
                  ? (parseFloat(r) * d) / 100
                  : parseFloat(r) || 0;
        return f ? (h.left + g) / Nt.innerWidth : (h.top + g) / Nt.innerHeight;
      }),
      (o.killAll = function (a) {
        if (
          (At.slice(0).forEach(function (f) {
            return f.vars.id !== "ScrollSmoother" && f.kill();
          }),
          a !== !0)
        ) {
          var r = Ka.killAll || [];
          ((Ka = {}),
            r.forEach(function (f) {
              return f();
            }));
        }
      }),
      o
    );
  })();
Et.version = "3.14.2";
Et.saveStyles = function (o) {
  return o
    ? ps(o).forEach(function (n) {
        if (n && n.style) {
          var u = Pl.indexOf(n);
          (u >= 0 && Pl.splice(u, 5),
            Pl.push(
              n,
              n.style.cssText,
              n.getBBox && n.getAttribute("transform"),
              it.core.getCache(n),
              o0(),
            ));
        }
      })
    : Pl;
};
Et.revert = function (o, n) {
  return G0(!o, n);
};
Et.create = function (o, n) {
  return new Et(o, n);
};
Et.refresh = function (o) {
  return o ? Wr(!0) : (Ru || Et.register()) && Ba(!0);
};
Et.update = function (o) {
  return ++Rt.cache && zi(o === !0 ? 2 : 0);
};
Et.clearScrollMemory = Z_;
Et.maxScroll = function (o, n) {
  return ti(o, n ? zl : ke);
};
Et.getScrollFunc = function (o, n) {
  return ha(Hl(o), n ? zl : ke);
};
Et.getById = function (o) {
  return d0[o];
};
Et.getAll = function () {
  return At.filter(function (o) {
    return o.vars.id !== "ScrollSmoother";
  });
};
Et.isScrolling = function () {
  return !!Nn;
};
Et.snapDirectional = X0;
Et.addEventListener = function (o, n) {
  var u = Ka[o] || (Ka[o] = []);
  ~u.indexOf(n) || u.push(n);
};
Et.removeEventListener = function (o, n) {
  var u = Ka[o],
    a = u && u.indexOf(n);
  a >= 0 && u.splice(a, 1);
};
Et.batch = function (o, n) {
  var u = [],
    a = {},
    r = n.interval || 0.016,
    f = n.batchMax || 1e9,
    h = function (p, _) {
      var y = [],
        x = [],
        b = it
          .delayedCall(r, function () {
            (_(y, x), (y = []), (x = []));
          })
          .pause();
      return function (z) {
        (y.length || b.restart(!0),
          y.push(z.trigger),
          x.push(z),
          f <= y.length && b.progress(1));
      };
    },
    d;
  for (d in n)
    a[d] =
      d.substr(0, 2) === "on" && ml(n[d]) && d !== "onRefreshInit"
        ? h(d, n[d])
        : n[d];
  return (
    ml(f) &&
      ((f = f()),
      Fe(Et, "refresh", function () {
        return (f = n.batchMax());
      })),
    ps(o).forEach(function (g) {
      var p = {};
      for (d in a) p[d] = a[d];
      ((p.trigger = g), u.push(Et.create(p)));
    }),
    u
  );
};
var vp = function (n, u, a, r) {
    return (
      u > r ? n(r) : u < 0 && n(0),
      a > r ? (r - u) / (a - u) : a < 0 ? u / (u - a) : 1
    );
  },
  Qh = function o(n, u) {
    (u === !0
      ? n.style.removeProperty("touch-action")
      : (n.style.touchAction =
          u === !0
            ? "auto"
            : u
              ? "pan-" + u + (De.isTouch ? " pinch-zoom" : "")
              : "none"),
      n === en && o(Kt, u));
  },
  Zc = { auto: 1, scroll: 1 },
  I3 = function (n) {
    var u = n.event,
      a = n.target,
      r = n.axis,
      f = (u.changedTouches ? u.changedTouches[0] : u).target,
      h = f._gsap || it.core.getCache(f),
      d = hl(),
      g;
    if (!h._isScrollT || d - h._isScrollT > 2e3) {
      for (
        ;
        f &&
        f !== Kt &&
        ((f.scrollHeight <= f.clientHeight && f.scrollWidth <= f.clientWidth) ||
          !(Zc[(g = On(f)).overflowY] || Zc[g.overflowX]));
      )
        f = f.parentNode;
      ((h._isScroll =
        f &&
        f !== a &&
        !ka(f) &&
        (Zc[(g = On(f)).overflowY] || Zc[g.overflowX])),
        (h._isScrollT = d));
    }
    (h._isScroll || r === "x") && (u.stopPropagation(), (u._gsapAllow = !0));
  },
  K_ = function (n, u, a, r) {
    return De.create({
      target: n,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: u,
      onWheel: (r = r && I3),
      onPress: r,
      onDrag: r,
      onScroll: r,
      onEnable: function () {
        return a && Fe(ie, De.eventTypes[0], bp, !1, !0);
      },
      onDisable: function () {
        return We(ie, De.eventTypes[0], bp, !0);
      },
    });
  },
  t4 = /(input|label|select|textarea)/i,
  yp,
  bp = function (n) {
    var u = t4.test(n.target.tagName);
    (u || yp) && ((n._gsapAllow = !0), (yp = u));
  },
  e4 = function (n) {
    (Ha(n) || (n = {}),
      (n.preventDefault = n.isNormalizer = n.allowClicks = !0),
      n.type || (n.type = "wheel,touch"),
      (n.debounce = !!n.debounce),
      (n.id = n.id || "normalizer"));
    var u = n,
      a = u.normalizeScrollX,
      r = u.momentum,
      f = u.allowNestedScroll,
      h = u.onRelease,
      d,
      g,
      p = Hl(n.target) || en,
      _ = it.core.globals().ScrollSmoother,
      y = _ && _.get(),
      x =
        ta &&
        ((n.content && Hl(n.content)) ||
          (y && n.content !== !1 && !y.smooth() && y.content())),
      b = ha(p, ke),
      z = ha(p, zl),
      S = 1,
      w =
        (De.isTouch && Nt.visualViewport
          ? Nt.visualViewport.scale * Nt.visualViewport.width
          : Nt.outerWidth) / Nt.innerWidth,
      q = 0,
      Z = ml(r)
        ? function () {
            return r(d);
          }
        : function () {
            return r || 2.8;
          },
      X,
      H,
      L = K_(p, n.type, !0, f),
      K = function () {
        return (H = !1);
      },
      j = $n,
      F = $n,
      W = function () {
        ((g = ti(p, ke)),
          (F = ls(ta ? 1 : 0, g)),
          a && (j = ls(0, ti(p, zl))),
          (X = Qa));
      },
      $ = function () {
        ((x._gsap.y = Kr(parseFloat(x._gsap.y) + b.offset) + "px"),
          (x.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(x._gsap.y) +
            ", 0, 1)"),
          (b.offset = b.cacheID = 0));
      },
      ut = function () {
        if (H) {
          requestAnimationFrame(K);
          var I = Kr(d.deltaY / 2),
            st = F(b.v - I);
          if (x && st !== b.v + b.offset) {
            b.offset = st - b.v;
            var M = Kr((parseFloat(x && x._gsap.y) || 0) - b.offset);
            ((x.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              M +
              ", 0, 1)"),
              (x._gsap.y = M + "px"),
              (b.cacheID = Rt.cache),
              zi());
          }
          return !0;
        }
        (b.offset && $(), (H = !0));
      },
      P,
      _t,
      ct,
      pt,
      D = function () {
        (W(),
          P.isActive() &&
            P.vars.scrollY > g &&
            (b() > g ? P.progress(1) && b(g) : P.resetTo("scrollY", g)));
      };
    return (
      x && it.set(x, { y: "+=0" }),
      (n.ignoreCheck = function (Q) {
        return (
          (ta && Q.type === "touchmove" && ut()) ||
          (S > 1.05 && Q.type !== "touchstart") ||
          d.isGesturing ||
          (Q.touches && Q.touches.length > 1)
        );
      }),
      (n.onPress = function () {
        H = !1;
        var Q = S;
        ((S = Kr(((Nt.visualViewport && Nt.visualViewport.scale) || 1) / w)),
          P.pause(),
          Q !== S && Qh(p, S > 1.01 ? !0 : a ? !1 : "x"),
          (_t = z()),
          (ct = b()),
          W(),
          (X = Qa));
      }),
      (n.onRelease = n.onGestureStart =
        function (Q, I) {
          if ((b.offset && $(), !I)) pt.restart(!0);
          else {
            Rt.cache++;
            var st = Z(),
              M,
              C;
            (a &&
              ((M = z()),
              (C = M + (st * 0.05 * -Q.velocityX) / 0.227),
              (st *= vp(z, M, C, ti(p, zl))),
              (P.vars.scrollX = j(C))),
              (M = b()),
              (C = M + (st * 0.05 * -Q.velocityY) / 0.227),
              (st *= vp(b, M, C, ti(p, ke))),
              (P.vars.scrollY = F(C)),
              P.invalidate().duration(st).play(0.01),
              ((ta && P.vars.scrollY >= g) || M >= g - 1) &&
                it.to({}, { onUpdate: D, duration: st }));
          }
          h && h(Q);
        }),
      (n.onWheel = function () {
        (P._ts && P.pause(), hl() - q > 1e3 && ((X = 0), (q = hl())));
      }),
      (n.onChange = function (Q, I, st, M, C) {
        if (
          (Qa !== X && W(),
          I && a && z(j(M[2] === I ? _t + (Q.startX - Q.x) : z() + I - M[1])),
          st)
        ) {
          b.offset && $();
          var G = C[2] === st,
            tt = G ? ct + Q.startY - Q.y : b() + st - C[1],
            et = F(tt);
          (G && tt !== et && (ct += et - tt), b(et));
        }
        (st || I) && zi();
      }),
      (n.onEnable = function () {
        (Qh(p, a ? !1 : "x"),
          Et.addEventListener("refresh", D),
          Fe(Nt, "resize", D),
          b.smooth &&
            ((b.target.style.scrollBehavior = "auto"),
            (b.smooth = z.smooth = !1)),
          L.enable());
      }),
      (n.onDisable = function () {
        (Qh(p, !0),
          We(Nt, "resize", D),
          Et.removeEventListener("refresh", D),
          L.kill());
      }),
      (n.lockAxis = n.lockAxis !== !1),
      (d = new De(n)),
      (d.iOS = ta),
      ta && !b() && b(1),
      ta && it.ticker.add($n),
      (pt = d._dc),
      (P = it.to(d, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: a ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: k_(b, b(), function () {
            return P.pause();
          }),
        },
        onUpdate: zi,
        onComplete: pt.vars.onComplete,
      })),
      d
    );
  };
Et.sort = function (o) {
  if (ml(o)) return At.sort(o);
  var n = Nt.pageYOffset || 0;
  return (
    Et.getAll().forEach(function (u) {
      return (u._sortY = u.trigger
        ? n + u.trigger.getBoundingClientRect().top
        : u.start + Nt.innerHeight);
    }),
    At.sort(
      o ||
        function (u, a) {
          return (
            (u.vars.refreshPriority || 0) * -1e6 +
            (u.vars.containerAnimation ? 1e6 : u._sortY) -
            ((a.vars.containerAnimation ? 1e6 : a._sortY) +
              (a.vars.refreshPriority || 0) * -1e6)
          );
        },
    )
  );
};
Et.observe = function (o) {
  return new De(o);
};
Et.normalizeScroll = function (o) {
  if (typeof o > "u") return Sl;
  if (o === !0 && Sl) return Sl.enable();
  if (o === !1) {
    (Sl && Sl.kill(), (Sl = o));
    return;
  }
  var n = o instanceof De ? o : e4(o);
  return (
    Sl && Sl.target === n.target && Sl.kill(),
    ka(n.target) && (Sl = n),
    n
  );
};
Et.core = {
  _getVelocityProp: s0,
  _inputObserver: K_,
  _scrollers: Rt,
  _proxies: ei,
  bridge: {
    ss: function () {
      (Nn || Ja("scrollStart"), (Nn = hl()));
    },
    ref: function () {
      return ol;
    },
  },
};
U_() && it.registerPlugin(Et);
const l4 = ({ color: o = "currentColor", size: n = 24, className: u, ...a }) =>
    Xe.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: n,
        fill: o,
        ...a,
        className: "remixicon " + (u || ""),
      },
      Xe.createElement("path", {
        d: "M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z",
      }),
    ),
  J_ = ({ color: o = "currentColor", size: n = 24, className: u, ...a }) =>
    Xe.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: n,
        fill: o,
        ...a,
        className: "remixicon " + (u || ""),
      },
      Xe.createElement("path", {
        d: "M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z",
      }),
    ),
  n4 = ({ color: o = "currentColor", size: n = 24, className: u, ...a }) =>
    Xe.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: n,
        fill: o,
        ...a,
        className: "remixicon " + (u || ""),
      },
      Xe.createElement("path", {
        d: "M7.44262 5.34998C8.08197 5.34998 8.67213 5.39945 9.21311 5.54786C9.7541 5.6468 10.1967 5.84468 10.5902 6.09203C10.9836 6.33938 11.2787 6.68566 11.4754 7.13089C11.6721 7.57612 11.7705 8.12029 11.7705 8.71393C11.7705 9.40651 11.623 10.0002 11.2787 10.4454C10.9836 10.8906 10.4918 11.2864 9.90164 11.5832C10.7377 11.8305 11.377 12.2758 11.7705 12.8694C12.1639 13.463 12.4098 14.2051 12.4098 15.0461C12.4098 15.7387 12.2623 16.3323 12.0164 16.827C11.7705 17.3217 11.377 17.7669 10.9344 18.0638C10.4918 18.3606 9.95082 18.6079 9.36066 18.7563C8.77049 18.9047 8.18033 19.0037 7.59016 19.0037H1V5.34998H7.44262ZM7.04918 10.8906C7.59016 10.8906 8.03279 10.7422 8.37705 10.4949C8.72131 10.2475 8.86885 9.80227 8.86885 9.2581C8.86885 8.96128 8.81967 8.66446 8.72131 8.46658C8.62295 8.2687 8.47541 8.12029 8.27869 7.97188C8.08197 7.87294 7.88525 7.774 7.63934 7.72453C7.39344 7.67506 7.14754 7.67506 6.85246 7.67506H4V10.8906H7.04918ZM7.19672 16.7281C7.4918 16.7281 7.78689 16.6786 8.03279 16.6291C8.27869 16.5797 8.52459 16.4807 8.72131 16.3323C8.91803 16.1839 9.06557 16.0355 9.21311 15.7881C9.31148 15.5408 9.40984 15.244 9.40984 14.8977C9.40984 14.2051 9.21312 13.7104 8.81967 13.3641C8.42623 13.0673 7.88525 12.9189 7.2459 12.9189H4V16.7281H7.19672ZM16.6885 16.6786C17.082 17.0744 17.6721 17.2722 18.459 17.2722C19 17.2722 19.4918 17.1238 19.8852 16.8765C20.2787 16.5797 20.5246 16.2828 20.623 15.986H23.0328C22.6393 17.1733 22.0492 18.0143 21.2623 18.5585C20.4754 19.0532 19.541 19.35 18.4098 19.35C17.6229 19.35 16.9344 19.2016 16.2951 18.9542C15.6557 18.7069 15.1639 18.3606 14.7213 17.8659C14.2787 17.4206 13.9344 16.8765 13.7377 16.2334C13.4918 15.5903 13.3934 14.8977 13.3934 14.1062C13.3934 13.3641 13.4918 12.6715 13.7377 12.0284C13.9836 11.3853 14.3279 10.8411 14.7705 10.3464C15.2131 9.90121 15.7541 9.50545 16.3443 9.2581C16.9836 9.01075 17.6229 8.86234 18.4098 8.86234C19.2459 8.86234 19.9836 9.01075 20.623 9.35704C21.2623 9.70333 21.7541 10.0991 22.1475 10.6927C22.541 11.2369 22.8361 11.88 23.0328 12.5726C23.1311 13.2652 23.1803 13.9577 23.1311 14.7493H16C16 15.5408 16.2951 16.2828 16.6885 16.6786ZM19.7869 11.4843C19.4426 11.138 18.9016 10.9401 18.2623 10.9401C17.8197 10.9401 17.4754 11.039 17.1803 11.1874C16.8852 11.3358 16.6885 11.5337 16.4918 11.7316C16.2951 11.9295 16.1967 12.1768 16.1475 12.4242C16.0984 12.6715 16.0492 12.8694 16.0492 13.0673H20.4754C20.3771 12.3252 20.1311 11.8305 19.7869 11.4843ZM15.459 6.2899H20.9672V7.62559H15.459V6.2899Z",
      }),
    ),
  i4 = ({ color: o = "currentColor", size: n = 24, className: u, ...a }) =>
    Xe.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: n,
        fill: o,
        ...a,
        className: "remixicon " + (u || ""),
      },
      Xe.createElement("path", {
        d: "M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z",
      }),
    ),
  a4 = ({ color: o = "currentColor", size: n = 24, className: u, ...a }) =>
    Xe.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: n,
        fill: o,
        ...a,
        className: "remixicon " + (u || ""),
      },
      Xe.createElement("path", {
        d: "M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z",
      }),
    ),
  u4 = ({ color: o = "currentColor", size: n = 24, className: u, ...a }) =>
    Xe.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: n,
        fill: o,
        ...a,
        className: "remixicon " + (u || ""),
      },
      Xe.createElement("path", {
        d: "M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z",
      }),
    ),
  r4 = ({ color: o = "currentColor", size: n = 24, className: u, ...a }) =>
    Xe.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: n,
        fill: o,
        ...a,
        className: "remixicon " + (u || ""),
      },
      Xe.createElement("path", {
        d: "M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z",
      }),
    ),
  W_ = ({ color: o = "currentColor", size: n = 24, className: u, ...a }) =>
    Xe.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: n,
        fill: o,
        ...a,
        className: "remixicon " + (u || ""),
      },
      Xe.createElement("path", {
        d: "M1.94607 9.31543C1.42353 9.14125 1.4194 8.86022 1.95682 8.68108L21.043 2.31901C21.5715 2.14285 21.8746 2.43866 21.7265 2.95694L16.2733 22.0432C16.1223 22.5716 15.8177 22.59 15.5944 22.0876L11.9999 14L17.9999 6.00005L9.99992 12L1.94607 9.31543Z",
      }),
    ),
  s4 = ({ color: o = "currentColor", size: n = 24, className: u, ...a }) =>
    Xe.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: n,
        fill: o,
        ...a,
        className: "remixicon " + (u || ""),
      },
      Xe.createElement("path", {
        d: "M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z",
      }),
    ),
  c4 = ({ color: o = "currentColor", size: n = 24, className: u, ...a }) =>
    Xe.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: n,
        height: n,
        fill: o,
        ...a,
        className: "remixicon " + (u || ""),
      },
      Xe.createElement("path", {
        d: "M7.25361 18.4944L7.97834 18.917C9.18909 19.623 10.5651 20 12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 13.4363 4.37821 14.8128 5.08466 16.0238L5.50704 16.7478L4.85355 19.1494L7.25361 18.4944ZM2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22ZM8.39232 7.30833C8.5262 7.29892 8.66053 7.29748 8.79459 7.30402C8.84875 7.30758 8.90265 7.31384 8.95659 7.32007C9.11585 7.33846 9.29098 7.43545 9.34986 7.56894C9.64818 8.24536 9.93764 8.92565 10.2182 9.60963C10.2801 9.76062 10.2428 9.95633 10.125 10.1457C10.0652 10.2428 9.97128 10.379 9.86248 10.5183C9.74939 10.663 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.40738 11.0473 9.44455 11.1944C9.45903 11.25 9.50521 11.331 9.54708 11.3991C9.57027 11.4368 9.5918 11.4705 9.60577 11.4938C9.86169 11.9211 10.2057 12.3543 10.6259 12.7616C10.7463 12.8783 10.8631 12.9974 10.9887 13.108C11.457 13.5209 11.9868 13.8583 12.559 14.1082L12.5641 14.1105C12.6486 14.1469 12.692 14.1668 12.8157 14.2193C12.8781 14.2457 12.9419 14.2685 13.0074 14.2858C13.0311 14.292 13.0554 14.2955 13.0798 14.2972C13.2415 14.3069 13.335 14.2032 13.3749 14.1555C14.0984 13.279 14.1646 13.2218 14.1696 13.2222V13.2238C14.2647 13.1236 14.4142 13.0888 14.5476 13.097C14.6085 13.1007 14.6691 13.1124 14.7245 13.1377C15.2563 13.3803 16.1258 13.7587 16.1258 13.7587L16.7073 14.0201C16.8047 14.0671 16.8936 14.1778 16.8979 14.2854C16.9005 14.3523 16.9077 14.4603 16.8838 14.6579C16.8525 14.9166 16.7738 15.2281 16.6956 15.3913C16.6406 15.5058 16.5694 15.6074 16.4866 15.6934C16.3743 15.81 16.2909 15.8808 16.1559 15.9814C16.0737 16.0426 16.0311 16.0714 16.0311 16.0714C15.8922 16.159 15.8139 16.2028 15.6484 16.2909C15.391 16.428 15.1066 16.5068 14.8153 16.5218C14.6296 16.5313 14.4444 16.5447 14.2589 16.5347C14.2507 16.5342 13.6907 16.4482 13.6907 16.4482C12.2688 16.0742 10.9538 15.3736 9.85034 14.402C9.62473 14.2034 9.4155 13.9885 9.20194 13.7759C8.31288 12.8908 7.63982 11.9364 7.23169 11.0336C7.03043 10.5884 6.90299 10.1116 6.90098 9.62098C6.89729 9.01405 7.09599 8.4232 7.46569 7.94186C7.53857 7.84697 7.60774 7.74855 7.72709 7.63586C7.85348 7.51651 7.93392 7.45244 8.02057 7.40811C8.13607 7.34902 8.26293 7.31742 8.39232 7.30833Z",
      }),
    ),
  f4 = () =>
    A.jsx("nav", {
      className: ` w-full text-white font-semibold px-6 pt-10 font-[CalSans] -tracking-tighter\r
    bg-black flex justify-center items-center `,
      children: A.jsxs("div", {
        className:
          "flex justify-between items-center h-full w-11/12  font-normal",
        children: [
          A.jsx("h3", {
            className: "font-bold tracking-[2px] text-2xl uppercase",
            children: "Paras",
          }),
          A.jsxs("div", {
            id: "list",
            className: "flex gap-10",
            children: [
              A.jsxs("button", {
                className:
                  " border border-amber-50 text-white px-5 py-2 rounded-4xl text-center hidden lg:items-center gap-2 lg:flex animate-[freelanceAnim_.7s_ease-out_infinite]",
                children: [
                  " ",
                  A.jsx("div", {
                    className: "h-2 w-2 rounded-full bg-green-500",
                  }),
                  "Available for Freelance",
                ],
              }),
              A.jsxs("button", {
                className:
                  "bg-green-500 text-black px-5 py-2 rounded-4xl text-center flex gap-2",
                children: [
                  A.jsx("div", {
                    children: A.jsx("a", {
                      href: "#contact",
                      children: "Let's Talk",
                    }),
                  }),
                  A.jsx(J_, {}),
                ],
              }),
            ],
          }),
        ],
      }),
    });
nl.registerPlugin(Et);
const o4 = () => {
  const o = ae.useRef(null),
    n = ae.useRef(null),
    u = ae.useRef(null);
  return (
    ae.useEffect(() => {
      if (!o.current || !n.current) return;
      const a = nl.timeline({
        scrollTrigger: {
          trigger: n.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      });
      return (
        a
          .to(o.current, { rotation: 25, duration: 0.5 }, 0)
          .to(o.current, { rotation: -25, duration: 0.5 }, 0.5),
        u.current &&
          nl.fromTo(
            u.current,
            { rotateX: 90, opacity: 0, transformOrigin: "center center" },
            {
              rotateX: 0,
              opacity: 1,
              duration: 1.5,
              delay: 1,
              ease: "power3.out",
            },
          ),
        () => {
          a.kill();
        }
      );
    }, []),
    A.jsx("main", {
      ref: n,
      className: "w-full min-h-screen relative",
      style: { perspective: "1000px" },
      children: A.jsxs("div", {
        className:
          "min-h-screen w-full bg-black flex items-center justify-center relative px-4 py-16 md:px-12",
        children: [
          A.jsxs("div", {
            className:
              "w-11/12 h-full flex flex-col lg:flex-row justify-between items-center gap-12 py-20 lg:py-0",
            children: [
              A.jsxs("div", {
                className:
                  "relative z-30 w-full lg:w-2/5 flex flex-col gap-6 items-start",
                children: [
                  A.jsxs("div", {
                    className: "flex gap-2 font-bold items-center",
                    children: [
                      A.jsx("h2", {
                        className:
                          "text-gray-200 text-5xl md:text-7xl whitespace-nowrap",
                        children: "Hii, I'm Paras",
                      }),
                      A.jsx("img", {
                        ref: o,
                        className: "w-12 md:w-16 object-contain",
                        src: "/img/hi.webp",
                        alt: "waving hand emoji",
                        style: { transformOrigin: "bottom right" },
                      }),
                    ],
                  }),
                  A.jsxs("div", {
                    className: "flex items-center",
                    children: [
                      A.jsx("h4", { className: "text-4xl", children: "I" }),
                      A.jsx("span", {
                        className:
                          "text-rotate duration-10000 ease-out text-4xl leading-loose",
                        children: A.jsxs("span", {
                          className: "flex flex-col px-2",
                          children: [
                            A.jsx("span", { children: "DESIGN" }),
                            A.jsx("span", { children: "DEVELOP" }),
                            A.jsx("span", { children: "DEPLOY" }),
                            A.jsx("span", { children: "SCALE" }),
                            A.jsx("span", { children: "MAINTAIN" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  A.jsx("p", {
                    className: "text-lg md:text-2xl text-gray-100",
                    children:
                      "I specialize in building modern, responsive websites using React and the latest web technologies. I focus on performance, clean code, and seamless user experiences.",
                  }),
                  A.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-6",
                    children: [
                      A.jsx("a", {
                        href: "#",
                        children: A.jsx("button", {
                          className:
                            "bg-green-500 text-black px-6 py-4 md:py-5 rounded-full flex items-center justify-center hover:bg-green-600 transition hover:scale-105",
                          children: "Download Resume",
                        }),
                      }),
                      A.jsx("a", {
                        href: "#contact",
                        className: "flex items-center gap-2",
                        children: A.jsxs("button", {
                          className:
                            "group border border-white text-white px-6 py-4 md:py-5 rounded-full flex items-center gap-2",
                          children: [
                            "Contact Me",
                            A.jsx(W_, {
                              className:
                                "transition-transform duration-300 group-hover:-rotate-45",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              A.jsxs("div", {
                className: "relative lg:w-1/2",
                children: [
                  A.jsx("img", {
                    src: "videos/hero.gif",
                    alt: "Paras",
                    className: "h-full max-h-md object-contain",
                    loading: "lazy",
                  }),
                  A.jsx("div", {
                    className:
                      "pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black to-transparent",
                  }),
                ],
              }),
            ],
          }),
          A.jsx("div", {
            ref: u,
            className:
              "absolute bottom-4 md:bottom-10 right-4 md:right-10 pointer-events-none",
            style: {
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            },
            children: A.jsxs("h1", {
              className:
                "font-normal text-5xl md:text-7xl lg:text-9xl text-transparent [-webkit-text-stroke:1px_white] text-right leading-tight",
              children: ["Frontend ", A.jsx("br", {}), " Developer"],
            }),
          }),
        ],
      }),
    })
  );
};
let xp = typeof document < "u" ? ae.useLayoutEffect : ae.useEffect,
  Sp = (o) => o && !Array.isArray(o) && typeof o == "object",
  Qc = [],
  h4 = {},
  F_ = nl;
const vs = (o, n = Qc) => {
  let u = h4;
  (Sp(o)
    ? ((u = o), (o = null), (n = "dependencies" in u ? u.dependencies : Qc))
    : Sp(n) && ((u = n), (n = "dependencies" in u ? u.dependencies : Qc)),
    o &&
      typeof o != "function" &&
      console.warn("First parameter must be a function or config object"));
  const { scope: a, revertOnUpdate: r } = u,
    f = ae.useRef(!1),
    h = ae.useRef(F_.context(() => {}, a)),
    d = ae.useRef((p) => h.current.add(null, p)),
    g = n && n.length && !r;
  return (
    g && xp(() => ((f.current = !0), () => h.current.revert()), Qc),
    xp(() => {
      if ((o && h.current.add(o, a), !g || !f.current))
        return () => h.current.revert();
    }, n),
    { context: h.current, contextSafe: d.current }
  );
};
vs.register = (o) => {
  F_ = o;
};
vs.headless = !0;
nl.registerPlugin(Et);
const d4 = () => {
    const o = new Date(2022, 9, 1),
      n = new Date();
    let u = n.getFullYear() - o.getFullYear(),
      a = n.getMonth() - o.getMonth();
    return (a < 0 && (u--, (a += 12)), `${u}. ${a} years`);
  },
  m4 = () => {
    const o = ae.useRef(),
      n = d4();
    return (
      vs(
        () => {
          nl.from(o.current, {
            y: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: o.current,
              start: "top 100%",
              end: "top 70%",
              scrub: !0,
              toggleActions: "play none none reverse",
            },
          });
        },
        { scope: o },
      ),
      A.jsx(A.Fragment, {
        children: A.jsx("div", {
          className:
            "min-h-screen w-full bg-black flex items-center justify-center relative px-4 py-16 md:px-12",
          children: A.jsxs("div", {
            className:
              "w-11/12 h-full flex flex-col lg:flex-row justify-between items-center gap-12 py-20 lg:py-0",
            children: [
              A.jsx("div", {
                className: "w-full lg:w-1/3 flex h-full",
                children: A.jsx("img", {
                  src: "img/hero.jpg",
                  alt: "Paras",
                  className: "w-full max-w-md h-auto",
                  loading: "lazy",
                }),
              }),
              A.jsxs("div", {
                className:
                  "relative z-30 w-full lg:w-2/3 flex justify-start flex-col gap-8 items-start",
                children: [
                  A.jsx("div", {
                    className:
                      "flex gap-4 font-bold text-4xl justify-start text-left items-center",
                    children: A.jsx("h2", {
                      className:
                        "text-gray-200 tracking-normal text-4xl md:text-6xl font-bold mb-6",
                      ref: o,
                      children: "About Me",
                    }),
                  }),
                  A.jsxs("p", {
                    className:
                      "w-full text-xl md:text-2xl font-normal text-gray-100 text-left leading-relaxed",
                    children: [
                      "With over  ",
                      A.jsxs("span", {
                        className: "text-green-500 font-bold",
                        children: [" ", n],
                      }),
                      " of experience in Frontend Web Development, I create modern, responsive, and visually engaging websites. I mainly work with ReactJS and the latest web technologies to build smooth and scalable web interfaces.",
                    ],
                  }),
                  A.jsx("p", {
                    className:
                      "w-full text-xl md:text-2xl font-normal text-gray-100 text-left leading-relaxed",
                    children:
                      "I focus on turning design concepts into functional websites with clean, maintainable code, while ensuring strong performance and a consistent experience across different devices and screen sizes.",
                  }),
                  A.jsx("div", {
                    className:
                      "flex flex-col sm:flex-row gap-6 w-full sm:w-auto",
                    children: A.jsxs("div", {
                      className: "flex flex-row gap-12 text-md ",
                      children: [
                        A.jsxs("div", {
                          className: "flex flex-col gap-4",
                          children: [
                            A.jsx("p", {
                              className: "uppercase text-2xl",
                              children: "Frontend Developer",
                            }),
                            A.jsx("p", {
                              className: "uppercase text-xl",
                              children: "Designer Based in India",
                            }),
                          ],
                        }),
                        A.jsxs("div", {
                          className: "flex gap-8",
                          children: [
                            A.jsx("a", {
                              href: "https://www.instagram.com/_ig_paras",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "hover:text-green-500 transition ease-in-out hover:scale-110 transform",
                              children: A.jsx(i4, { size: 32 }),
                            }),
                            A.jsx("a", {
                              href: "https://www.behance.net/parasarya72",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "hover:text-green-500 transition ease-in-out hover:scale-110 transform",
                              children: A.jsx(n4, { size: 32 }),
                            }),
                            A.jsx("a", {
                              href: "https://www.linkedin.com/in/parasarya72",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className:
                                "hover:text-green-500 transition ease-in-out hover:scale-110 transform",
                              children: A.jsx(a4, { size: 32 }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      })
    );
  },
  g4 = ({ service: o, index: n }) => {
    const u = () => {
      const a = document.getElementById("contact");
      a && a.scrollIntoView({ behavior: "smooth" });
    };
    return A.jsx("div", {
      className:
        "h-screen flex items-center justify-center sticky top-24 md:top-28",
      style: { zIndex: n + 1 },
      children: A.jsxs("div", {
        className:
          "w-full max-w-5xl rounded-2xl overflow-hidden relative transition-transform duration-500 bg-black border border-gray-700 p-8 md:p-12 flex flex-col justify-between hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/20",
        style: {
          minHeight: `${420 - n * 1}px`,
          transform: `translateY(${n * 40}px)`,
        },
        children: [
          A.jsxs("div", {
            children: [
              A.jsx("h2", {
                className: "text-6xl md:text-6xl font-bold text-gray-200 mb-6",
                children: o.title,
              }),
              A.jsx("p", {
                className:
                  "text-gray-400 text-xl md:text-xl max-w-2xl leading-relaxed",
                children: o.desc,
              }),
            ],
          }),
          A.jsx("a", {
            href: "#contact",
            children: A.jsxs("button", {
              onClick: u,
              className:
                "mt-8 inline-flex items-center gap-2 bg-green-500 text-black px-6 py-4 rounded-full font-bold text-base hover:bg-green-600 transition-all duration-300 hover:scale-105 w-fit",
              children: ["Get Started", A.jsx(J_, {})],
            }),
          }),
        ],
      }),
    });
  },
  p4 = () => {
    const o = [
      {
        title: "Website Development",
        desc: "Fast, scalable, and responsive websites built with modern technologies like React.",
      },
      {
        title: "Website Design",
        desc: "Clean and modern designs focused on usability, branding, and user engagement.",
      },
      {
        title: "UI/UX Design",
        desc: "User-centered interfaces that enhance experience and improve conversions.",
      },
      {
        title: "Graphic Design",
        desc: "Creative visuals including banners, social media posts, and branding assets.",
      },
      {
        title: "SEO Optimization",
        desc: "Optimized websites to rank better on search engines and drive organic traffic.",
      },
    ];
    return A.jsxs(A.Fragment, {
      children: [
        A.jsx("hr", { className: "w-4/5 mx-auto border-gray-700" }),
        A.jsx("section", {
          className: "bg-black/90 text-white w-full px-4 py-16 md:px-12",
          children: A.jsxs("div", {
            className: "relative w-full",
            children: [
              A.jsx("div", {
                className: "sticky top-10 z-50 py-6 text-center mb-12",
                children: A.jsxs("h2", {
                  className: "text-4xl md:text-6xl font-bold text-gray-200",
                  children: [
                    "Services I ",
                    A.jsx("span", {
                      className: "text-green-500",
                      children: "Provide.",
                    }),
                  ],
                }),
              }),
              o.map((n, u) => A.jsx(g4, { service: n, index: u }, u)),
            ],
          }),
        }),
      ],
    });
  },
  _4 = () => {
    const o = [
      {
        id: 1,
        title: "Ramneet Music Academy",
        description: "Modern responsive website for a music academy.",
        image: "/img/website/rma.png",
        url: "https://ramneetmusicacademy.com",
      },
      {
        id: 2,
        title: "Arena Animation CP",
        description: "Creative institute website with smooth UI.",
        image: "/img/website/arena.png",
        url: "https://arenaanimationcp.com",
      },
      {
        id: 3,
        title: "Lord Krishna Public School",
        description: "School website with structured layout.",
        image: "/img/website/lkps.png",
        url: "https://lkpsindia.in",
      },
      {
        id: 4,
        title: "Ayurveda Lab India",
        description: "Healthcare UI with clean design.",
        image: "/img/website/aylb.png",
        url: "https://ayurvedalab.in",
      },
      {
        id: 5,
        title: "RealWil India",
        description: "Corporate website with modern UI.",
        image: "/img/website/rlwl.png",
        url: "https://realwill.in",
      },
      {
        id: 6,
        title: "Health First Foundation",
        description: "NGO Website with donation form.",
        image: "/img/website/heff.png",
        url: "https://healthfirstfoundation.org",
      },
      {
        id: 7,
        title: "Deroya Pvt Ltd",
        description: "NGO Website with donation form.",
        image: "/img/website/deroya.png",
        url: "https://deroya.co.in",
      },
      {
        id: 8,
        title: "Arena CP Landing Page",
        description: "NGO Website with donation form.",
        image: "/img/website/arena-in.png",
        url: "https://arenaanimationcp.in",
      },
    ];
    return A.jsx("section", {
      className: "w-full bg-black px-4 py-16 md:px-12",
      children: A.jsxs("div", {
        className:
          "max-w-6xl mx-auto flex flex-col items-center gap-12 text-center",
        children: [
          A.jsxs("h2", {
            className: "text-gray-200 text-4xl md:text-6xl font-bold mb-6",
            children: [
              "My ",
              A.jsx("span", {
                className: "text-green-500",
                children: "Projects.",
              }),
            ],
          }),
          A.jsx("div", {
            className: "flex flex-wrap gap-12 w-full",
            children: o.map((n) =>
              A.jsxs(
                "div",
                {
                  className:
                    "w-full md:w-[calc(50%-24px)] lg:w-[calc(33.333%-32px)] border border-gray-700 rounded-xl overflow-hidden flex flex-col items-center text-center transition-all duration-300 hover:bg-green-500 hover:text-black hover:-translate-y-2 hover:shadow-xl cursor-pointer",
                  children: [
                    A.jsx("img", {
                      src: n.image,
                      alt: n.title,
                      loading: "lazy",
                      className: "w-full h-48 object-cover",
                    }),
                    A.jsxs("div", {
                      className: "p-6 flex flex-col items-center",
                      children: [
                        A.jsx("h3", {
                          className: "text-xl md:text-2xl font-bold mb-6",
                          children: n.title,
                        }),
                        A.jsx("p", {
                          className:
                            "text-sm md:text-base opacity-80 max-w-xs mb-8",
                          children: n.description,
                        }),
                        A.jsx("a", {
                          href: n.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "bg-green-500 text-white px-6 py-4 rounded-full text-sm hover:bg-green-600 transition",
                          children: "View Live",
                        }),
                      ],
                    }),
                  ],
                },
                n.id,
              ),
            ),
          }),
        ],
      }),
    });
  },
  v4 = () =>
    A.jsxs(A.Fragment, {
      children: [
        A.jsx("hr", { className: "w-4/5 mx-auto bg-black/40 text-slate-600" }),
        A.jsxs("div", {
          className:
            "bg-black w-full px-4 py-7 flex flex-col gap-10 justify-center items-center",
          children: [
            A.jsxs("div", {
              className:
                "flex flex-col items-center justify-center gap-1 text-center",
              children: [
                A.jsx("h3", {
                  className: "text-2xl",
                  children: "Have a project in mind?",
                }),
                A.jsxs("h2", {
                  className: "text-8xl",
                  children: [
                    "Let’s build ",
                    A.jsx("br", {}),
                    " something ",
                    A.jsx("span", {
                      className: "text-green-500 font-black tracking-wide",
                      children: "Impactful.",
                    }),
                  ],
                }),
                A.jsx("p", {
                  className: "text-xl w-3/4 md:w-2/3 mt-1",
                  children:
                    "I’m available for freelance work and open to collaborating on exciting projects. Let’s create something impactful and meaningful.",
                }),
              ],
            }),
            A.jsx("button", {
              className:
                "bg-green-500 text-white font-bolder px-7 py-4 rounded-4xl tracking-wide text-2xl",
              children: "Hire Me as a Freelancer!",
            }),
          ],
        }),
      ],
    }),
  y4 = () => {
    const [o, n] = ae.useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      }),
      [u, a] = ae.useState(!1),
      [r, f] = ae.useState(!1),
      [h, d] = ae.useState(""),
      g = (y) => {
        const { name: x, value: b } = y.target;
        n((z) => ({ ...z, [x]: b }));
      },
      p = async (y) => {
        (y.preventDefault(), f(!0), d(""));
        try {
          const x = await fetch(
              "https://formsubmit.co/ajax/08ffb4cb0307694b2e9b8cba368abb50",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  name: o.name,
                  email: o.email,
                  _subject: `Portfolio Contact: ${o.subject}`,
                  subject: o.subject,
                  message: o.message,
                  _captcha: "false",
                  _template: "table",
                }),
              },
            ),
            b = await x.json();
          if (!x.ok || b.success === "false")
            throw new Error("Unable to send message right now.");
          (a(!0),
            n({ name: "", email: "", subject: "", message: "" }),
            setTimeout(() => a(!1), 3e3));
        } catch {
          d("Couldn't send your message. Please try again in a moment.");
        } finally {
          f(!1);
        }
      },
      _ = [
        {
          icon: r4,
          label: "Phone",
          value: "+91 9910526604",
          link: "tel:+919910526604",
        },
        {
          icon: c4,
          label: "WhatsApp",
          value: "+91 9910526604",
          link: "https://wa.me/919910526604",
        },
        {
          icon: u4,
          label: "Email",
          value: "parasarya72@gmail.com",
          link: "mailto:parasarya72@gmail.com",
        },
      ];
    return A.jsxs(A.Fragment, {
      children: [
        A.jsx("hr", { className: "w-4/5 mx-auto border-gray-700" }),
        A.jsxs("section", {
          id: "contact",
          className: "w-full bg-black text-white px-4 py-16 md:px-12 relative",
          children: [
            A.jsxs("div", {
              className:
                "min-h-screen w-full bg-black flex flex-col items-center justify-center relative px-4 py-16 md:px-12",
              children: [
                A.jsxs("h2", {
                  className:
                    "text-4xl md:text-6xl font-bold text-gray-200 text-center mb-6",
                  children: [
                    "Get in ",
                    A.jsx("span", {
                      className: "text-green-500",
                      children: "Touch.",
                    }),
                  ],
                }),
                A.jsx("p", {
                  className: "text-center text-gray-400 mb-12 text-lg",
                  children:
                    "Have a project or question? I'd love to hear from you!",
                }),
                A.jsxs("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                  children: [
                    A.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        A.jsx("h3", {
                          className:
                            "text-2xl md:text-3xl font-bold mb-8 text-green-500",
                          children: "Connect With Me",
                        }),
                        A.jsx("div", {
                          className: "flex flex-col gap-8",
                          children: _.map((y, x) => {
                            const b = y.icon;
                            return A.jsxs(
                              "a",
                              {
                                href: y.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "flex items-center gap-4 group transition-all duration-300",
                                children: [
                                  A.jsx("div", {
                                    className:
                                      "p-4 rounded-lg text-black text-4xl tracking-wider group-hover:scale-110 transition-transform duration-300",
                                    children: A.jsx(b, {
                                      size: "32px",
                                      style: { color: "green" },
                                    }),
                                  }),
                                  A.jsxs("div", {
                                    className: "flex-1",
                                    children: [
                                      A.jsx("h4", {
                                        className:
                                          "text-gray-400 text-sm font-semibold uppercase tracking-wider",
                                        children: y.label,
                                      }),
                                      A.jsx("p", {
                                        className:
                                          "text-white text-lg font-bold tracking-wider group-hover:text-green-500 transition-colors duration-300",
                                        children: y.value,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              x,
                            );
                          }),
                        }),
                        A.jsx("div", {
                          className:
                            "mt-12 p-6 border border-gray-700 rounded-xl hover:border-green-500/50 transition-all duration-300",
                          children: A.jsxs("p", {
                            className: "text-gray-300 text-sm leading-relaxed",
                            children: [
                              A.jsx("span", {
                                className: "text-green-500 font-bold",
                                children: "Response Time:",
                              }),
                              " I typically respond within 24 hours. For urgent matters, WhatsApp is the fastest way to reach me.",
                            ],
                          }),
                        }),
                      ],
                    }),
                    A.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        A.jsx("h3", {
                          className:
                            "text-2xl md:text-3xl font-bold mb-8 text-green-500",
                          children: "Send a Message",
                        }),
                        A.jsxs("form", {
                          onSubmit: p,
                          className: "flex flex-col gap-6",
                          children: [
                            A.jsx("input", {
                              type: "hidden",
                              name: "_captcha",
                              value: "false",
                            }),
                            A.jsx("input", {
                              type: "text",
                              name: "_honey",
                              style: { display: "none" },
                              tabIndex: "-1",
                              autoComplete: "off",
                            }),
                            A.jsx("input", {
                              type: "text",
                              name: "name",
                              placeholder: "Your Name",
                              value: o.name,
                              onChange: g,
                              required: !0,
                              className:
                                "w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300",
                            }),
                            A.jsx("input", {
                              type: "email",
                              name: "email",
                              placeholder: "Your Email",
                              value: o.email,
                              onChange: g,
                              required: !0,
                              className:
                                "w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300",
                            }),
                            A.jsxs("div", {
                              className: "relative w-full",
                              children: [
                                A.jsxs("select", {
                                  name: "subject",
                                  value: o.subject,
                                  onChange: g,
                                  required: !0,
                                  className:
                                    "w-full px-4 py-4 bg-gray-900 border border-gray-700 text-gray-500 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300 appearance-none pr-12",
                                  children: [
                                    A.jsx("option", {
                                      value: "",
                                      disabled: !0,
                                      children: "Select Subject",
                                    }),
                                    A.jsx("option", {
                                      className: "",
                                      value: "Project_Inquiry",
                                      children: "Project Inquiry",
                                    }),
                                    A.jsx("option", {
                                      className: "",
                                      value: "Freelance_Work",
                                      children: "Freelance Work",
                                    }),
                                    A.jsx("option", {
                                      className: "",
                                      value: "Job_Opportunity",
                                      children: "Job Opportunity",
                                    }),
                                    A.jsx("option", {
                                      className: "",
                                      value: "Collaboration",
                                      children: "Collaboration",
                                    }),
                                    A.jsx("option", {
                                      className: "",
                                      value: "General_Question",
                                      children: "General Question",
                                    }),
                                  ],
                                }),
                                A.jsx(l4, {
                                  className:
                                    "absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none",
                                  size: "20px",
                                }),
                              ],
                            }),
                            A.jsx("textarea", {
                              name: "message",
                              placeholder: "Your Message",
                              value: o.message,
                              onChange: g,
                              required: !0,
                              rows: "5",
                              className:
                                "w-full px-6 py-4 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all duration-300 resize-none",
                            }),
                            A.jsxs("button", {
                              type: "submit",
                              disabled: r,
                              className:
                                "flex items-center justify-center gap-2 bg-green-500 text-black px-6 py-4 rounded-full font-bold text-base md:text-lg hover:bg-green-600 transition-all duration-300 hover:scale-105 tracking-wider",
                              children: [
                                r ? "Sending..." : "Send Message",
                                A.jsx(W_, { className: "text-lg" }),
                              ],
                            }),
                            u &&
                              A.jsx("p", {
                                className:
                                  "text-green-500 font-semibold text-center animate-pulse",
                                children: "✓ Message sent successfully!",
                              }),
                            h &&
                              A.jsx("p", {
                                className:
                                  "text-red-400 font-semibold text-center",
                                children: h,
                              }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            A.jsx("hr", {
              className: "w-[80%]",
              style: { backgroundColor: "red", height: "1px" },
            }),
            A.jsxs("div", {
              className: `absolute bottom-0 left-0\r
         w-full bg-black flex items-center justify-center text-center py-4 text-lg text-white/60  text-wider`,
              children: [
                "© ",
                new Date().getFullYear(),
                " Paras Arya. All rights reserved.",
              ],
            }),
          ],
        }),
      ],
    });
  },
  b4 = () => {
    nl.registerPlugin(vs);
    const o = ae.useRef(null);
    vs(() => {
      const u = o.current,
        a = u.scrollWidth / 2;
      nl.to(u, { x: -a, duration: 40, ease: "linear", repeat: -1 });
    }, []);
    const n = [
      { name: "Frontend Development" },
      { name: "Responsive Design" },
      { name: "UI/UX Implementation" },
      { name: "API Integration" },
      { name: "Web Performance" },
      { name: "SEO Optimization" },
    ];
    return A.jsx("div", {
      className: "relative",
      children: A.jsxs("div", {
        className: "w-full h-24 bg-black overflow-hidden relative z-10",
        children: [
          A.jsx("div", {
            className:
              "absolute left-0 top-0 h-full w-32 bg-linear-to-r from-black to-transparent z-20 pointer-events-none",
          }),
          A.jsx("div", {
            className:
              "absolute right-0 top-0 h-full w-32 bg-linear-to-l from-black to-transparent z-20 pointer-events-none",
          }),
          A.jsxs("div", {
            ref: o,
            className: "flex absolute gap-30 items-center h-full px-0",
            children: [
              n.map((u, a) =>
                A.jsx(
                  "div",
                  {
                    className:
                      "flex flex-col items-center justify-center shrink-0 text-white font-light",
                    children: A.jsx("h4", {
                      className: "text-4xl font-medium mt-2 whitespace-nowrap",
                      children: u.name,
                    }),
                  },
                  `first-${a}`,
                ),
              ),
              n.map((u, a) =>
                A.jsx(
                  "div",
                  {
                    className:
                      "flex flex-col items-center justify-center shrink-0 text-white font-light",
                    children: A.jsx("h4", {
                      className: "text-4xl font-medium mt-2 whitespace-nowrap",
                      children: u.name,
                    }),
                  },
                  `second-${a}`,
                ),
              ),
            ],
          }),
        ],
      }),
    });
  },
  x4 = 530,
  S4 = 6,
  T4 = ({ rating: o }) =>
    A.jsx("div", {
      className: "flex gap-1",
      children: [...Array(o)].map((n, u) =>
        A.jsx(s4, { className: "text-yellow-400", size: 20 }, u),
      ),
    }),
  C4 = ({ testimonial: o }) =>
    A.jsxs("div", {
      className:
        "shrink-0 w-lg border border-gray-700 rounded-xl overflow-hidden flex flex-col items-start text-left transition-all duration-300 hover:bg-green-500 hover:text-black hover:-translate-y-2 hover:shadow-xl cursor-pointer p-8 group",
      children: [
        A.jsx("div", {
          className: "mb-4",
          children: A.jsx(T4, { rating: o.rating }),
        }),
        A.jsx("p", {
          className: "text-base md:text-lg leading-relaxed min-h-20 grow mb-6",
          children: o.comment,
        }),
        A.jsx("div", {
          className:
            "w-full h-px bg-gray-700 group-hover:bg-black/20 transition mb-4",
        }),
        A.jsxs("div", {
          className: "flex items-center gap-3 w-full",
          children: [
            A.jsx("img", {
              src: o.image,
              alt: o.name,
              className:
                "w-10 h-10 rounded-full object-cover border border-gray-700 group-hover:border-black/20 transition",
              loading: "lazy",
            }),
            A.jsxs("div", {
              className: "flex flex-col",
              children: [
                A.jsx("h4", {
                  className: "font-bold text-base",
                  children: o.name,
                }),
                A.jsx("p", {
                  className: "text-sm opacity-80",
                  children: o.designation,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  E4 = () => {
    const o = ae.useRef(null),
      n = ae.useRef(null),
      u = ae.useRef(null),
      a = [
        {
          id: 1,
          name: "Vikas Shrivastava",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
          rating: 5,
          designation: "Ex Arena Animation Head",
          comment:
            "Paras delivered an exceptional website that exceeded all our expectations. His attention to detail and modern design approach truly sets him apart.",
        },
        {
          id: 2,
          name: "Madhu Prajapati",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
          rating: 5,
          designation: "Director, LKPS India",
          comment:
            "Working with Paras was a breeze. He understood our vision perfectly and created a responsive, user-friendly platform that boosted our engagement.",
        },
        {
          id: 3,
          name: "Bawa Dheer Singh",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
          rating: 5,
          designation: "Founder, Ramneet Music Academy",
          comment:
            "The quality of code and design is outstanding. Paras is professional, communicative, and delivers on time. Highly recommended!",
        },
        {
          id: 4,
          name: "Alok Poddar ",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
          rating: 5,
          designation: "Founder, Health First Foundation",
          comment:
            "Best developer I have worked with. Paras brings creativity and technical expertise together seamlessly. A true professional!",
        },
        {
          id: 5,
          name: "David Brown",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
          rating: 5,
          designation: "Business Analyst",
          comment:
            "Paras transformed our outdated website into a modern, fast, and beautiful platform. The results speak for themselves.",
        },
        {
          id: 6,
          name: "Lisa Anderson",
          image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
          rating: 5,
          designation: "Project Manager",
          comment:
            "Exceptional work and dedication. Paras exceeded our expectations and delivered a stunning digital product that our users love.",
        },
      ],
      r = ae.useMemo(() => [...a, ...a], []),
      f = ae.useMemo(() => x4 * a.length, []),
      h = ae.useCallback(() => {
        u.current && u.current.pause();
      }, []),
      d = ae.useCallback(() => {
        u.current && u.current.resume();
      }, []);
    return (
      ae.useEffect(() => {
        if (!o.current || !n.current) return;
        const g = o.current,
          p = n.current;
        nl.set(g, { x: 0 });
        const _ = nl.timeline({ repeat: -1, paused: !1 });
        return (
          _.to(g, {
            x: -f,
            duration: a.length * S4,
            ease: "none",
            onUpdate: () => {
              nl.getProperty(g, "x") <= -f && nl.set(g, { x: 0 });
            },
          }),
          (u.current = _),
          p.addEventListener("mouseenter", h),
          p.addEventListener("mouseleave", d),
          () => {
            (p.removeEventListener("mouseenter", h),
              p.removeEventListener("mouseleave", d),
              _.kill());
          }
        );
      }, [f, a.length, h, d]),
      A.jsxs(A.Fragment, {
        children: [
          A.jsx("hr", { className: "w-4/5 mx-auto border-gray-700" }),
          A.jsxs("section", {
            className: "w-full bg-black text-white py-12 md:py-16",
            children: [
              A.jsx("div", {
                className: "flex flex-col gap-12 px-4 md:px-12",
                children: A.jsxs("h2", {
                  className:
                    "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200 text-center",
                  children: [
                    "What Clients ",
                    A.jsx("span", {
                      className: "text-green-500",
                      children: "Say.",
                    }),
                  ],
                }),
              }),
              A.jsxs("div", {
                ref: n,
                className: "relative w-full overflow-hidden",
                children: [
                  A.jsx("div", {
                    className:
                      "absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-black via-black to-transparent z-20 pointer-events-none",
                  }),
                  A.jsx("div", {
                    className:
                      "absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-black via-black to-transparent z-20 pointer-events-none",
                  }),
                  A.jsx("div", {
                    ref: o,
                    className: "flex gap-8 w-max px-12 py-8",
                    children: r.map((g, p) => A.jsx(C4, { testimonial: g }, p)),
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    );
  };
nl.registerPlugin(Et);
const z4 = () => (
  ae.useEffect(() => {
    const o = new vy({
      duration: 1.2,
      easing: (n) => Math.min(1, 1.001 - Math.pow(2, -10 * n)),
      smooth: !0,
      smoothTouch: !1,
    });
    return (
      o.on("scroll", Et.update),
      nl.ticker.add((n) => {
        o.raf(n * 1e3);
      }),
      nl.ticker.lagSmoothing(0),
      () => {
        (o.destroy(), nl.ticker.remove(o.raf));
      }
    );
  }, []),
  A.jsxs(A.Fragment, {
    children: [
      A.jsx(f4, {}),
      A.jsx(o4, {}),
      A.jsx(b4, {}),
      A.jsx(m4, {}),
      A.jsx(p4, {}),
      A.jsx(_4, {}),
      A.jsx(v4, {}),
      A.jsx(E4, {}),
      A.jsx(y4, {}),
    ],
  })
);
my.createRoot(document.getElementById("root")).render(
  A.jsx(ae.StrictMode, { children: A.jsx(z4, {}) }),
);
