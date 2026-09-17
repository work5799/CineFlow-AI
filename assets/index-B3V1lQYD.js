(function() {
    const _ = document.createElement("link").relList;
    if (_ && _.supports && _.supports("modulepreload"))
        return;
    for (const q of document.querySelectorAll('link[rel="modulepreload"]'))
        m(q);
    new MutationObserver(q => {
        for (const R of q)
            if (R.type === "childList")
                for (const J of R.addedNodes)
                    J.tagName === "LINK" && J.rel === "modulepreload" && m(J)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function U(q) {
        const R = {};
        return q.integrity && (R.integrity = q.integrity),
        q.referrerPolicy && (R.referrerPolicy = q.referrerPolicy),
        q.crossOrigin === "use-credentials" ? R.credentials = "include" : q.crossOrigin === "anonymous" ? R.credentials = "omit" : R.credentials = "same-origin",
        R
    }
    function m(q) {
        if (q.ep)
            return;
        q.ep = !0;
        const R = U(q);
        fetch(q.href, R)
    }
}
)();
var sf = {
    exports: {}
}
  , xu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sd;
function f1() {
    if (Sd)
        return xu;
    Sd = 1;
    var E = Symbol.for("react.transitional.element")
      , _ = Symbol.for("react.fragment");
    function U(m, q, R) {
        var J = null;
        if (R !== void 0 && (J = "" + R),
        q.key !== void 0 && (J = "" + q.key),
        "key" in q) {
            R = {};
            for (var ll in q)
                ll !== "key" && (R[ll] = q[ll])
        } else
            R = q;
        return q = R.ref,
        {
            $$typeof: E,
            type: m,
            key: J,
            ref: q !== void 0 ? q : null,
            props: R
        }
    }
    return xu.Fragment = _,
    xu.jsx = U,
    xu.jsxs = U,
    xu
}
var zd;
function s1() {
    return zd || (zd = 1,
    sf.exports = f1()),
    sf.exports
}
var f = s1()
  , of = {
    exports: {}
}
  , Q = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Td;
function o1() {
    if (Td)
        return Q;
    Td = 1;
    var E = Symbol.for("react.transitional.element")
      , _ = Symbol.for("react.portal")
      , U = Symbol.for("react.fragment")
      , m = Symbol.for("react.strict_mode")
      , q = Symbol.for("react.profiler")
      , R = Symbol.for("react.consumer")
      , J = Symbol.for("react.context")
      , ll = Symbol.for("react.forward_ref")
      , M = Symbol.for("react.suspense")
      , T = Symbol.for("react.memo")
      , X = Symbol.for("react.lazy")
      , D = Symbol.for("react.activity")
      , V = Symbol.iterator;
    function gl(r) {
        return r === null || typeof r != "object" ? null : (r = V && r[V] || r["@@iterator"],
        typeof r == "function" ? r : null)
    }
    var k = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , sl = Object.assign
      , ol = {};
    function zl(r, z, A) {
        this.props = r,
        this.context = z,
        this.refs = ol,
        this.updater = A || k
    }
    zl.prototype.isReactComponent = {},
    zl.prototype.setState = function(r, z) {
        if (typeof r != "object" && typeof r != "function" && r != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, r, z, "setState")
    }
    ,
    zl.prototype.forceUpdate = function(r) {
        this.updater.enqueueForceUpdate(this, r, "forceUpdate")
    }
    ;
    function Bl() {}
    Bl.prototype = zl.prototype;
    function jl(r, z, A) {
        this.props = r,
        this.context = z,
        this.refs = ol,
        this.updater = A || k
    }
    var tl = jl.prototype = new Bl;
    tl.constructor = jl,
    sl(tl, zl.prototype),
    tl.isPureReactComponent = !0;
    var Tl = Array.isArray;
    function bl() {}
    var K = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , Kl = Object.prototype.hasOwnProperty;
    function at(r, z, A) {
        var N = A.ref;
        return {
            $$typeof: E,
            type: r,
            key: z,
            ref: N !== void 0 ? N : null,
            props: A
        }
    }
    function Ut(r, z) {
        return at(r.type, z, r.props)
    }
    function Al(r) {
        return typeof r == "object" && r !== null && r.$$typeof === E
    }
    function ql(r) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + r.replace(/[=:]/g, function(A) {
            return z[A]
        })
    }
    var Rt = /\/+/g;
    function Et(r, z) {
        return typeof r == "object" && r !== null && r.key != null ? ql("" + r.key) : z.toString(36)
    }
    function ut(r) {
        switch (r.status) {
        case "fulfilled":
            return r.value;
        case "rejected":
            throw r.reason;
        default:
            switch (typeof r.status == "string" ? r.then(bl, bl) : (r.status = "pending",
            r.then(function(z) {
                r.status === "pending" && (r.status = "fulfilled",
                r.value = z)
            }, function(z) {
                r.status === "pending" && (r.status = "rejected",
                r.reason = z)
            })),
            r.status) {
            case "fulfilled":
                return r.value;
            case "rejected":
                throw r.reason
            }
        }
        throw r
    }
    function p(r, z, A, N, B) {
        var L = typeof r;
        (L === "undefined" || L === "boolean") && (r = null);
        var fl = !1;
        if (r === null)
            fl = !0;
        else
            switch (L) {
            case "bigint":
            case "string":
            case "number":
                fl = !0;
                break;
            case "object":
                switch (r.$$typeof) {
                case E:
                case _:
                    fl = !0;
                    break;
                case X:
                    return fl = r._init,
                    p(fl(r._payload), z, A, N, B)
                }
            }
        if (fl)
            return B = B(r),
            fl = N === "" ? "." + Et(r, 0) : N,
            Tl(B) ? (A = "",
            fl != null && (A = fl.replace(Rt, "$&/") + "/"),
            p(B, z, A, "", function(ja) {
                return ja
            })) : B != null && (Al(B) && (B = Ut(B, A + (B.key == null || r && r.key === B.key ? "" : ("" + B.key).replace(Rt, "$&/") + "/") + fl)),
            z.push(B)),
            1;
        fl = 0;
        var kl = N === "" ? "." : N + ":";
        if (Tl(r))
            for (var _l = 0; _l < r.length; _l++)
                N = r[_l],
                L = kl + Et(N, _l),
                fl += p(N, z, A, L, B);
        else if (_l = gl(r),
        typeof _l == "function")
            for (r = _l.call(r),
            _l = 0; !(N = r.next()).done; )
                N = N.value,
                L = kl + Et(N, _l++),
                fl += p(N, z, A, L, B);
        else if (L === "object") {
            if (typeof r.then == "function")
                return p(ut(r), z, A, N, B);
            throw z = String(r),
            Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.")
        }
        return fl
    }
    function j(r, z, A) {
        if (r == null)
            return r;
        var N = []
          , B = 0;
        return p(r, N, "", "", function(L) {
            return z.call(A, L, B++)
        }),
        N
    }
    function G(r) {
        if (r._status === -1) {
            var z = r._result;
            z = z(),
            z.then(function(A) {
                (r._status === 0 || r._status === -1) && (r._status = 1,
                r._result = A)
            }, function(A) {
                (r._status === 0 || r._status === -1) && (r._status = 2,
                r._result = A)
            }),
            r._status === -1 && (r._status = 0,
            r._result = z)
        }
        if (r._status === 1)
            return r._result.default;
        throw r._result
    }
    var cl = typeof reportError == "function" ? reportError : function(r) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var z = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
                error: r
            });
            if (!window.dispatchEvent(z))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", r);
            return
        }
        console.error(r)
    }
      , il = {
        map: j,
        forEach: function(r, z, A) {
            j(r, function() {
                z.apply(this, arguments)
            }, A)
        },
        count: function(r) {
            var z = 0;
            return j(r, function() {
                z++
            }),
            z
        },
        toArray: function(r) {
            return j(r, function(z) {
                return z
            }) || []
        },
        only: function(r) {
            if (!Al(r))
                throw Error("React.Children.only expected to receive a single React element child.");
            return r
        }
    };
    return Q.Activity = D,
    Q.Children = il,
    Q.Component = zl,
    Q.Fragment = U,
    Q.Profiler = q,
    Q.PureComponent = jl,
    Q.StrictMode = m,
    Q.Suspense = M,
    Q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K,
    Q.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(r) {
            return K.H.useMemoCache(r)
        }
    },
    Q.cache = function(r) {
        return function() {
            return r.apply(null, arguments)
        }
    }
    ,
    Q.cacheSignal = function() {
        return null
    }
    ,
    Q.cloneElement = function(r, z, A) {
        if (r == null)
            throw Error("The argument must be a React element, but you passed " + r + ".");
        var N = sl({}, r.props)
          , B = r.key;
        if (z != null)
            for (L in z.key !== void 0 && (B = "" + z.key),
            z)
                !Kl.call(z, L) || L === "key" || L === "__self" || L === "__source" || L === "ref" && z.ref === void 0 || (N[L] = z[L]);
        var L = arguments.length - 2;
        if (L === 1)
            N.children = A;
        else if (1 < L) {
            for (var fl = Array(L), kl = 0; kl < L; kl++)
                fl[kl] = arguments[kl + 2];
            N.children = fl
        }
        return at(r.type, B, N)
    }
    ,
    Q.createContext = function(r) {
        return r = {
            $$typeof: J,
            _currentValue: r,
            _currentValue2: r,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        r.Provider = r,
        r.Consumer = {
            $$typeof: R,
            _context: r
        },
        r
    }
    ,
    Q.createElement = function(r, z, A) {
        var N, B = {}, L = null;
        if (z != null)
            for (N in z.key !== void 0 && (L = "" + z.key),
            z)
                Kl.call(z, N) && N !== "key" && N !== "__self" && N !== "__source" && (B[N] = z[N]);
        var fl = arguments.length - 2;
        if (fl === 1)
            B.children = A;
        else if (1 < fl) {
            for (var kl = Array(fl), _l = 0; _l < fl; _l++)
                kl[_l] = arguments[_l + 2];
            B.children = kl
        }
        if (r && r.defaultProps)
            for (N in fl = r.defaultProps,
            fl)
                B[N] === void 0 && (B[N] = fl[N]);
        return at(r, L, B)
    }
    ,
    Q.createRef = function() {
        return {
            current: null
        }
    }
    ,
    Q.forwardRef = function(r) {
        return {
            $$typeof: ll,
            render: r
        }
    }
    ,
    Q.isValidElement = Al,
    Q.lazy = function(r) {
        return {
            $$typeof: X,
            _payload: {
                _status: -1,
                _result: r
            },
            _init: G
        }
    }
    ,
    Q.memo = function(r, z) {
        return {
            $$typeof: T,
            type: r,
            compare: z === void 0 ? null : z
        }
    }
    ,
    Q.startTransition = function(r) {
        var z = K.T
          , A = {};
        K.T = A;
        try {
            var N = r()
              , B = K.S;
            B !== null && B(A, N),
            typeof N == "object" && N !== null && typeof N.then == "function" && N.then(bl, cl)
        } catch (L) {
            cl(L)
        } finally {
            z !== null && A.types !== null && (z.types = A.types),
            K.T = z
        }
    }
    ,
    Q.unstable_useCacheRefresh = function() {
        return K.H.useCacheRefresh()
    }
    ,
    Q.use = function(r) {
        return K.H.use(r)
    }
    ,
    Q.useActionState = function(r, z, A) {
        return K.H.useActionState(r, z, A)
    }
    ,
    Q.useCallback = function(r, z) {
        return K.H.useCallback(r, z)
    }
    ,
    Q.useContext = function(r) {
        return K.H.useContext(r)
    }
    ,
    Q.useDebugValue = function() {}
    ,
    Q.useDeferredValue = function(r, z) {
        return K.H.useDeferredValue(r, z)
    }
    ,
    Q.useEffect = function(r, z) {
        return K.H.useEffect(r, z)
    }
    ,
    Q.useEffectEvent = function(r) {
        return K.H.useEffectEvent(r)
    }
    ,
    Q.useId = function() {
        return K.H.useId()
    }
    ,
    Q.useImperativeHandle = function(r, z, A) {
        return K.H.useImperativeHandle(r, z, A)
    }
    ,
    Q.useInsertionEffect = function(r, z) {
        return K.H.useInsertionEffect(r, z)
    }
    ,
    Q.useLayoutEffect = function(r, z) {
        return K.H.useLayoutEffect(r, z)
    }
    ,
    Q.useMemo = function(r, z) {
        return K.H.useMemo(r, z)
    }
    ,
    Q.useOptimistic = function(r, z) {
        return K.H.useOptimistic(r, z)
    }
    ,
    Q.useReducer = function(r, z, A) {
        return K.H.useReducer(r, z, A)
    }
    ,
    Q.useRef = function(r) {
        return K.H.useRef(r)
    }
    ,
    Q.useState = function(r) {
        return K.H.useState(r)
    }
    ,
    Q.useSyncExternalStore = function(r, z, A) {
        return K.H.useSyncExternalStore(r, z, A)
    }
    ,
    Q.useTransition = function() {
        return K.H.useTransition()
    }
    ,
    Q.version = "19.2.8",
    Q
}
var Ad;
function yf() {
    return Ad || (Ad = 1,
    of.exports = o1()),
    of.exports
}
var nl = yf()
  , rf = {
    exports: {}
}
  , Su = {}
  , df = {
    exports: {}
}
  , mf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ed;
function r1() {
    return Ed || (Ed = 1,
    (function(E) {
        function _(p, j) {
            var G = p.length;
            p.push(j);
            l: for (; 0 < G; ) {
                var cl = G - 1 >>> 1
                  , il = p[cl];
                if (0 < q(il, j))
                    p[cl] = j,
                    p[G] = il,
                    G = cl;
                else
                    break l
            }
        }
        function U(p) {
            return p.length === 0 ? null : p[0]
        }
        function m(p) {
            if (p.length === 0)
                return null;
            var j = p[0]
              , G = p.pop();
            if (G !== j) {
                p[0] = G;
                l: for (var cl = 0, il = p.length, r = il >>> 1; cl < r; ) {
                    var z = 2 * (cl + 1) - 1
                      , A = p[z]
                      , N = z + 1
                      , B = p[N];
                    if (0 > q(A, G))
                        N < il && 0 > q(B, A) ? (p[cl] = B,
                        p[N] = G,
                        cl = N) : (p[cl] = A,
                        p[z] = G,
                        cl = z);
                    else if (N < il && 0 > q(B, G))
                        p[cl] = B,
                        p[N] = G,
                        cl = N;
                    else
                        break l
                }
            }
            return j
        }
        function q(p, j) {
            var G = p.sortIndex - j.sortIndex;
            return G !== 0 ? G : p.id - j.id
        }
        if (E.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var R = performance;
            E.unstable_now = function() {
                return R.now()
            }
        } else {
            var J = Date
              , ll = J.now();
            E.unstable_now = function() {
                return J.now() - ll
            }
        }
        var M = []
          , T = []
          , X = 1
          , D = null
          , V = 3
          , gl = !1
          , k = !1
          , sl = !1
          , ol = !1
          , zl = typeof setTimeout == "function" ? setTimeout : null
          , Bl = typeof clearTimeout == "function" ? clearTimeout : null
          , jl = typeof setImmediate < "u" ? setImmediate : null;
        function tl(p) {
            for (var j = U(T); j !== null; ) {
                if (j.callback === null)
                    m(T);
                else if (j.startTime <= p)
                    m(T),
                    j.sortIndex = j.expirationTime,
                    _(M, j);
                else
                    break;
                j = U(T)
            }
        }
        function Tl(p) {
            if (sl = !1,
            tl(p),
            !k)
                if (U(M) !== null)
                    k = !0,
                    bl || (bl = !0,
                    ql());
                else {
                    var j = U(T);
                    j !== null && ut(Tl, j.startTime - p)
                }
        }
        var bl = !1
          , K = -1
          , Kl = 5
          , at = -1;
        function Ut() {
            return ol ? !0 : !(E.unstable_now() - at < Kl)
        }
        function Al() {
            if (ol = !1,
            bl) {
                var p = E.unstable_now();
                at = p;
                var j = !0;
                try {
                    l: {
                        k = !1,
                        sl && (sl = !1,
                        Bl(K),
                        K = -1),
                        gl = !0;
                        var G = V;
                        try {
                            t: {
                                for (tl(p),
                                D = U(M); D !== null && !(D.expirationTime > p && Ut()); ) {
                                    var cl = D.callback;
                                    if (typeof cl == "function") {
                                        D.callback = null,
                                        V = D.priorityLevel;
                                        var il = cl(D.expirationTime <= p);
                                        if (p = E.unstable_now(),
                                        typeof il == "function") {
                                            D.callback = il,
                                            tl(p),
                                            j = !0;
                                            break t
                                        }
                                        D === U(M) && m(M),
                                        tl(p)
                                    } else
                                        m(M);
                                    D = U(M)
                                }
                                if (D !== null)
                                    j = !0;
                                else {
                                    var r = U(T);
                                    r !== null && ut(Tl, r.startTime - p),
                                    j = !1
                                }
                            }
                            break l
                        } finally {
                            D = null,
                            V = G,
                            gl = !1
                        }
                        j = void 0
                    }
                } finally {
                    j ? ql() : bl = !1
                }
            }
        }
        var ql;
        if (typeof jl == "function")
            ql = function() {
                jl(Al)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Rt = new MessageChannel
              , Et = Rt.port2;
            Rt.port1.onmessage = Al,
            ql = function() {
                Et.postMessage(null)
            }
        } else
            ql = function() {
                zl(Al, 0)
            }
            ;
        function ut(p, j) {
            K = zl(function() {
                p(E.unstable_now())
            }, j)
        }
        E.unstable_IdlePriority = 5,
        E.unstable_ImmediatePriority = 1,
        E.unstable_LowPriority = 4,
        E.unstable_NormalPriority = 3,
        E.unstable_Profiling = null,
        E.unstable_UserBlockingPriority = 2,
        E.unstable_cancelCallback = function(p) {
            p.callback = null
        }
        ,
        E.unstable_forceFrameRate = function(p) {
            0 > p || 125 < p ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Kl = 0 < p ? Math.floor(1e3 / p) : 5
        }
        ,
        E.unstable_getCurrentPriorityLevel = function() {
            return V
        }
        ,
        E.unstable_next = function(p) {
            switch (V) {
            case 1:
            case 2:
            case 3:
                var j = 3;
                break;
            default:
                j = V
            }
            var G = V;
            V = j;
            try {
                return p()
            } finally {
                V = G
            }
        }
        ,
        E.unstable_requestPaint = function() {
            ol = !0
        }
        ,
        E.unstable_runWithPriority = function(p, j) {
            switch (p) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                p = 3
            }
            var G = V;
            V = p;
            try {
                return j()
            } finally {
                V = G
            }
        }
        ,
        E.unstable_scheduleCallback = function(p, j, G) {
            var cl = E.unstable_now();
            switch (typeof G == "object" && G !== null ? (G = G.delay,
            G = typeof G == "number" && 0 < G ? cl + G : cl) : G = cl,
            p) {
            case 1:
                var il = -1;
                break;
            case 2:
                il = 250;
                break;
            case 5:
                il = 1073741823;
                break;
            case 4:
                il = 1e4;
                break;
            default:
                il = 5e3
            }
            return il = G + il,
            p = {
                id: X++,
                callback: j,
                priorityLevel: p,
                startTime: G,
                expirationTime: il,
                sortIndex: -1
            },
            G > cl ? (p.sortIndex = G,
            _(T, p),
            U(M) === null && p === U(T) && (sl ? (Bl(K),
            K = -1) : sl = !0,
            ut(Tl, G - cl))) : (p.sortIndex = il,
            _(M, p),
            k || gl || (k = !0,
            bl || (bl = !0,
            ql()))),
            p
        }
        ,
        E.unstable_shouldYield = Ut,
        E.unstable_wrapCallback = function(p) {
            var j = V;
            return function() {
                var G = V;
                V = j;
                try {
                    return p.apply(this, arguments)
                } finally {
                    V = G
                }
            }
        }
    }
    )(mf)),
    mf
}
var Nd;
function d1() {
    return Nd || (Nd = 1,
    df.exports = r1()),
    df.exports
}
var hf = {
    exports: {}
}
  , Jl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jd;
function m1() {
    if (jd)
        return Jl;
    jd = 1;
    var E = yf();
    function _(M) {
        var T = "https://react.dev/errors/" + M;
        if (1 < arguments.length) {
            T += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var X = 2; X < arguments.length; X++)
                T += "&args[]=" + encodeURIComponent(arguments[X])
        }
        return "Minified React error #" + M + "; visit " + T + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function U() {}
    var m = {
        d: {
            f: U,
            r: function() {
                throw Error(_(522))
            },
            D: U,
            C: U,
            L: U,
            m: U,
            X: U,
            S: U,
            M: U
        },
        p: 0,
        findDOMNode: null
    }
      , q = Symbol.for("react.portal");
    function R(M, T, X) {
        var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: q,
            key: D == null ? null : "" + D,
            children: M,
            containerInfo: T,
            implementation: X
        }
    }
    var J = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function ll(M, T) {
        if (M === "font")
            return "";
        if (typeof T == "string")
            return T === "use-credentials" ? T : ""
    }
    return Jl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = m,
    Jl.createPortal = function(M, T) {
        var X = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!T || T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11)
            throw Error(_(299));
        return R(M, T, null, X)
    }
    ,
    Jl.flushSync = function(M) {
        var T = J.T
          , X = m.p;
        try {
            if (J.T = null,
            m.p = 2,
            M)
                return M()
        } finally {
            J.T = T,
            m.p = X,
            m.d.f()
        }
    }
    ,
    Jl.preconnect = function(M, T) {
        typeof M == "string" && (T ? (T = T.crossOrigin,
        T = typeof T == "string" ? T === "use-credentials" ? T : "" : void 0) : T = null,
        m.d.C(M, T))
    }
    ,
    Jl.prefetchDNS = function(M) {
        typeof M == "string" && m.d.D(M)
    }
    ,
    Jl.preinit = function(M, T) {
        if (typeof M == "string" && T && typeof T.as == "string") {
            var X = T.as
              , D = ll(X, T.crossOrigin)
              , V = typeof T.integrity == "string" ? T.integrity : void 0
              , gl = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
            X === "style" ? m.d.S(M, typeof T.precedence == "string" ? T.precedence : void 0, {
                crossOrigin: D,
                integrity: V,
                fetchPriority: gl
            }) : X === "script" && m.d.X(M, {
                crossOrigin: D,
                integrity: V,
                fetchPriority: gl,
                nonce: typeof T.nonce == "string" ? T.nonce : void 0
            })
        }
    }
    ,
    Jl.preinitModule = function(M, T) {
        if (typeof M == "string")
            if (typeof T == "object" && T !== null) {
                if (T.as == null || T.as === "script") {
                    var X = ll(T.as, T.crossOrigin);
                    m.d.M(M, {
                        crossOrigin: X,
                        integrity: typeof T.integrity == "string" ? T.integrity : void 0,
                        nonce: typeof T.nonce == "string" ? T.nonce : void 0
                    })
                }
            } else
                T == null && m.d.M(M)
    }
    ,
    Jl.preload = function(M, T) {
        if (typeof M == "string" && typeof T == "object" && T !== null && typeof T.as == "string") {
            var X = T.as
              , D = ll(X, T.crossOrigin);
            m.d.L(M, X, {
                crossOrigin: D,
                integrity: typeof T.integrity == "string" ? T.integrity : void 0,
                nonce: typeof T.nonce == "string" ? T.nonce : void 0,
                type: typeof T.type == "string" ? T.type : void 0,
                fetchPriority: typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
                referrerPolicy: typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
                imageSrcSet: typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
                imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
                media: typeof T.media == "string" ? T.media : void 0
            })
        }
    }
    ,
    Jl.preloadModule = function(M, T) {
        if (typeof M == "string")
            if (T) {
                var X = ll(T.as, T.crossOrigin);
                m.d.m(M, {
                    as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
                    crossOrigin: X,
                    integrity: typeof T.integrity == "string" ? T.integrity : void 0
                })
            } else
                m.d.m(M)
    }
    ,
    Jl.requestFormReset = function(M) {
        m.d.r(M)
    }
    ,
    Jl.unstable_batchedUpdates = function(M, T) {
        return M(T)
    }
    ,
    Jl.useFormState = function(M, T, X) {
        return J.H.useFormState(M, T, X)
    }
    ,
    Jl.useFormStatus = function() {
        return J.H.useHostTransitionStatus()
    }
    ,
    Jl.version = "19.2.8",
    Jl
}
var _d;
function h1() {
    if (_d)
        return hf.exports;
    _d = 1;
    function E() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)
            } catch (_) {
                console.error(_)
            }
    }
    return E(),
    hf.exports = m1(),
    hf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Md;
function y1() {
    if (Md)
        return Su;
    Md = 1;
    var E = d1()
      , _ = yf()
      , U = h1();
    function m(l) {
        var t = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var e = 2; e < arguments.length; e++)
                t += "&args[]=" + encodeURIComponent(arguments[e])
        }
        return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function q(l) {
        return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
    }
    function R(l) {
        var t = l
          , e = l;
        if (l.alternate)
            for (; t.return; )
                t = t.return;
        else {
            l = t;
            do
                t = l,
                (t.flags & 4098) !== 0 && (e = t.return),
                l = t.return;
            while (l)
        }
        return t.tag === 3 ? e : null
    }
    function J(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate,
            l !== null && (t = l.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function ll(l) {
        if (l.tag === 31) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate,
            l !== null && (t = l.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function M(l) {
        if (R(l) !== l)
            throw Error(m(188))
    }
    function T(l) {
        var t = l.alternate;
        if (!t) {
            if (t = R(l),
            t === null)
                throw Error(m(188));
            return t !== l ? null : l
        }
        for (var e = l, a = t; ; ) {
            var u = e.return;
            if (u === null)
                break;
            var n = u.alternate;
            if (n === null) {
                if (a = u.return,
                a !== null) {
                    e = a;
                    continue
                }
                break
            }
            if (u.child === n.child) {
                for (n = u.child; n; ) {
                    if (n === e)
                        return M(u),
                        l;
                    if (n === a)
                        return M(u),
                        t;
                    n = n.sibling
                }
                throw Error(m(188))
            }
            if (e.return !== a.return)
                e = u,
                a = n;
            else {
                for (var c = !1, i = u.child; i; ) {
                    if (i === e) {
                        c = !0,
                        e = u,
                        a = n;
                        break
                    }
                    if (i === a) {
                        c = !0,
                        a = u,
                        e = n;
                        break
                    }
                    i = i.sibling
                }
                if (!c) {
                    for (i = n.child; i; ) {
                        if (i === e) {
                            c = !0,
                            e = n,
                            a = u;
                            break
                        }
                        if (i === a) {
                            c = !0,
                            a = n,
                            e = u;
                            break
                        }
                        i = i.sibling
                    }
                    if (!c)
                        throw Error(m(189))
                }
            }
            if (e.alternate !== a)
                throw Error(m(190))
        }
        if (e.tag !== 3)
            throw Error(m(188));
        return e.stateNode.current === e ? l : t
    }
    function X(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l;
        for (l = l.child; l !== null; ) {
            if (t = X(l),
            t !== null)
                return t;
            l = l.sibling
        }
        return null
    }
    var D = Object.assign
      , V = Symbol.for("react.element")
      , gl = Symbol.for("react.transitional.element")
      , k = Symbol.for("react.portal")
      , sl = Symbol.for("react.fragment")
      , ol = Symbol.for("react.strict_mode")
      , zl = Symbol.for("react.profiler")
      , Bl = Symbol.for("react.consumer")
      , jl = Symbol.for("react.context")
      , tl = Symbol.for("react.forward_ref")
      , Tl = Symbol.for("react.suspense")
      , bl = Symbol.for("react.suspense_list")
      , K = Symbol.for("react.memo")
      , Kl = Symbol.for("react.lazy")
      , at = Symbol.for("react.activity")
      , Ut = Symbol.for("react.memo_cache_sentinel")
      , Al = Symbol.iterator;
    function ql(l) {
        return l === null || typeof l != "object" ? null : (l = Al && l[Al] || l["@@iterator"],
        typeof l == "function" ? l : null)
    }
    var Rt = Symbol.for("react.client.reference");
    function Et(l) {
        if (l == null)
            return null;
        if (typeof l == "function")
            return l.$$typeof === Rt ? null : l.displayName || l.name || null;
        if (typeof l == "string")
            return l;
        switch (l) {
        case sl:
            return "Fragment";
        case zl:
            return "Profiler";
        case ol:
            return "StrictMode";
        case Tl:
            return "Suspense";
        case bl:
            return "SuspenseList";
        case at:
            return "Activity"
        }
        if (typeof l == "object")
            switch (l.$$typeof) {
            case k:
                return "Portal";
            case jl:
                return l.displayName || "Context";
            case Bl:
                return (l._context.displayName || "Context") + ".Consumer";
            case tl:
                var t = l.render;
                return l = l.displayName,
                l || (l = t.displayName || t.name || "",
                l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"),
                l;
            case K:
                return t = l.displayName || null,
                t !== null ? t : Et(l.type) || "Memo";
            case Kl:
                t = l._payload,
                l = l._init;
                try {
                    return Et(l(t))
                } catch {}
            }
        return null
    }
    var ut = Array.isArray
      , p = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , j = U.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , G = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , cl = []
      , il = -1;
    function r(l) {
        return {
            current: l
        }
    }
    function z(l) {
        0 > il || (l.current = cl[il],
        cl[il] = null,
        il--)
    }
    function A(l, t) {
        il++,
        cl[il] = l.current,
        l.current = t
    }
    var N = r(null)
      , B = r(null)
      , L = r(null)
      , fl = r(null);
    function kl(l, t) {
        switch (A(L, t),
        A(B, l),
        A(N, null),
        t.nodeType) {
        case 9:
        case 11:
            l = (l = t.documentElement) && (l = l.namespaceURI) ? Lr(l) : 0;
            break;
        default:
            if (l = t.tagName,
            t = t.namespaceURI)
                t = Lr(t),
                l = wr(t, l);
            else
                switch (l) {
                case "svg":
                    l = 1;
                    break;
                case "math":
                    l = 2;
                    break;
                default:
                    l = 0
                }
        }
        z(N),
        A(N, l)
    }
    function _l() {
        z(N),
        z(B),
        z(L)
    }
    function ja(l) {
        l.memoizedState !== null && A(fl, l);
        var t = N.current
          , e = wr(t, l.type);
        t !== e && (A(B, l),
        A(N, e))
    }
    function zu(l) {
        B.current === l && (z(N),
        z(B)),
        fl.current === l && (z(fl),
        vu._currentValue = G)
    }
    var Ln, pf;
    function Ae(l) {
        if (Ln === void 0)
            try {
                throw Error()
            } catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                Ln = t && t[1] || "",
                pf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Ln + l + pf
    }
    var wn = !1;
    function Kn(l, t) {
        if (!l || wn)
            return "";
        wn = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var S = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(S.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(S, [])
                                } catch (g) {
                                    var v = g
                                }
                                Reflect.construct(l, [], S)
                            } else {
                                try {
                                    S.call()
                                } catch (g) {
                                    v = g
                                }
                                l.call(S.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (g) {
                                v = g
                            }
                            (S = l()) && typeof S.catch == "function" && S.catch(function() {})
                        }
                    } catch (g) {
                        if (g && v && typeof g.stack == "string")
                            return [g.stack, v.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var n = a.DetermineComponentFrameRoot()
              , c = n[0]
              , i = n[1];
            if (c && i) {
                var s = c.split(`
`)
                  , y = i.split(`
`);
                for (u = a = 0; a < s.length && !s[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; u < y.length && !y[u].includes("DetermineComponentFrameRoot"); )
                    u++;
                if (a === s.length || u === y.length)
                    for (a = s.length - 1,
                    u = y.length - 1; 1 <= a && 0 <= u && s[a] !== y[u]; )
                        u--;
                for (; 1 <= a && 0 <= u; a--,
                u--)
                    if (s[a] !== y[u]) {
                        if (a !== 1 || u !== 1)
                            do
                                if (a--,
                                u--,
                                0 > u || s[a] !== y[u]) {
                                    var b = `
` + s[a].replace(" at new ", " at ");
                                    return l.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", l.displayName)),
                                    b
                                }
                            while (1 <= a && 0 <= u);
                        break
                    }
            }
        } finally {
            wn = !1,
            Error.prepareStackTrace = e
        }
        return (e = l ? l.displayName || l.name : "") ? Ae(e) : ""
    }
    function Gd(l, t) {
        switch (l.tag) {
        case 26:
        case 27:
        case 5:
            return Ae(l.type);
        case 16:
            return Ae("Lazy");
        case 13:
            return l.child !== t && t !== null ? Ae("Suspense Fallback") : Ae("Suspense");
        case 19:
            return Ae("SuspenseList");
        case 0:
        case 15:
            return Kn(l.type, !1);
        case 11:
            return Kn(l.type.render, !1);
        case 1:
            return Kn(l.type, !0);
        case 31:
            return Ae("Activity");
        default:
            return ""
        }
    }
    function xf(l) {
        try {
            var t = ""
              , e = null;
            do
                t += Gd(l, e),
                e = l,
                l = l.return;
            while (l);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    var Jn = Object.prototype.hasOwnProperty
      , kn = E.unstable_scheduleCallback
      , Wn = E.unstable_cancelCallback
      , Xd = E.unstable_shouldYield
      , Qd = E.unstable_requestPaint
      , nt = E.unstable_now
      , Zd = E.unstable_getCurrentPriorityLevel
      , Sf = E.unstable_ImmediatePriority
      , zf = E.unstable_UserBlockingPriority
      , Tu = E.unstable_NormalPriority
      , Vd = E.unstable_LowPriority
      , Tf = E.unstable_IdlePriority
      , Ld = E.log
      , wd = E.unstable_setDisableYieldValue
      , _a = null
      , ct = null;
    function Pt(l) {
        if (typeof Ld == "function" && wd(l),
        ct && typeof ct.setStrictMode == "function")
            try {
                ct.setStrictMode(_a, l)
            } catch {}
    }
    var it = Math.clz32 ? Math.clz32 : kd
      , Kd = Math.log
      , Jd = Math.LN2;
    function kd(l) {
        return l >>>= 0,
        l === 0 ? 32 : 31 - (Kd(l) / Jd | 0) | 0
    }
    var Au = 256
      , Eu = 262144
      , Nu = 4194304;
    function Ee(l) {
        var t = l & 42;
        if (t !== 0)
            return t;
        switch (l & -l) {
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
            return l & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return l & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return l & 62914560;
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
            return l
        }
    }
    function ju(l, t, e) {
        var a = l.pendingLanes;
        if (a === 0)
            return 0;
        var u = 0
          , n = l.suspendedLanes
          , c = l.pingedLanes;
        l = l.warmLanes;
        var i = a & 134217727;
        return i !== 0 ? (a = i & ~n,
        a !== 0 ? u = Ee(a) : (c &= i,
        c !== 0 ? u = Ee(c) : e || (e = i & ~l,
        e !== 0 && (u = Ee(e))))) : (i = a & ~n,
        i !== 0 ? u = Ee(i) : c !== 0 ? u = Ee(c) : e || (e = a & ~l,
        e !== 0 && (u = Ee(e)))),
        u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u,
        e = t & -t,
        n >= e || n === 32 && (e & 4194048) !== 0) ? t : u
    }
    function Ma(l, t) {
        return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
    }
    function Wd(l, t) {
        switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
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
            return t + 5e3;
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
            return -1
        }
    }
    function Af() {
        var l = Nu;
        return Nu <<= 1,
        (Nu & 62914560) === 0 && (Nu = 4194304),
        l
    }
    function $n(l) {
        for (var t = [], e = 0; 31 > e; e++)
            t.push(l);
        return t
    }
    function Oa(l, t) {
        l.pendingLanes |= t,
        t !== 268435456 && (l.suspendedLanes = 0,
        l.pingedLanes = 0,
        l.warmLanes = 0)
    }
    function $d(l, t, e, a, u, n) {
        var c = l.pendingLanes;
        l.pendingLanes = e,
        l.suspendedLanes = 0,
        l.pingedLanes = 0,
        l.warmLanes = 0,
        l.expiredLanes &= e,
        l.entangledLanes &= e,
        l.errorRecoveryDisabledLanes &= e,
        l.shellSuspendCounter = 0;
        var i = l.entanglements
          , s = l.expirationTimes
          , y = l.hiddenUpdates;
        for (e = c & ~e; 0 < e; ) {
            var b = 31 - it(e)
              , S = 1 << b;
            i[b] = 0,
            s[b] = -1;
            var v = y[b];
            if (v !== null)
                for (y[b] = null,
                b = 0; b < v.length; b++) {
                    var g = v[b];
                    g !== null && (g.lane &= -536870913)
                }
            e &= ~S
        }
        a !== 0 && Ef(l, a, 0),
        n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t))
    }
    function Ef(l, t, e) {
        l.pendingLanes |= t,
        l.suspendedLanes &= ~t;
        var a = 31 - it(t);
        l.entangledLanes |= t,
        l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930
    }
    function Nf(l, t) {
        var e = l.entangledLanes |= t;
        for (l = l.entanglements; e; ) {
            var a = 31 - it(e)
              , u = 1 << a;
            u & t | l[a] & t && (l[a] |= t),
            e &= ~u
        }
    }
    function jf(l, t) {
        var e = t & -t;
        return e = (e & 42) !== 0 ? 1 : Fn(e),
        (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
    }
    function Fn(l) {
        switch (l) {
        case 2:
            l = 1;
            break;
        case 8:
            l = 4;
            break;
        case 32:
            l = 16;
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
            l = 128;
            break;
        case 268435456:
            l = 134217728;
            break;
        default:
            l = 0
        }
        return l
    }
    function In(l) {
        return l &= -l,
        2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function _f() {
        var l = j.p;
        return l !== 0 ? l : (l = window.event,
        l === void 0 ? 32 : hd(l.type))
    }
    function Mf(l, t) {
        var e = j.p;
        try {
            return j.p = l,
            t()
        } finally {
            j.p = e
        }
    }
    var le = Math.random().toString(36).slice(2)
      , Xl = "__reactFiber$" + le
      , $l = "__reactProps$" + le
      , Ve = "__reactContainer$" + le
      , Pn = "__reactEvents$" + le
      , Fd = "__reactListeners$" + le
      , Id = "__reactHandles$" + le
      , Of = "__reactResources$" + le
      , Da = "__reactMarker$" + le;
    function lc(l) {
        delete l[Xl],
        delete l[$l],
        delete l[Pn],
        delete l[Fd],
        delete l[Id]
    }
    function Le(l) {
        var t = l[Xl];
        if (t)
            return t;
        for (var e = l.parentNode; e; ) {
            if (t = e[Ve] || e[Xl]) {
                if (e = t.alternate,
                t.child !== null || e !== null && e.child !== null)
                    for (l = Ir(l); l !== null; ) {
                        if (e = l[Xl])
                            return e;
                        l = Ir(l)
                    }
                return t
            }
            l = e,
            e = l.parentNode
        }
        return null
    }
    function we(l) {
        if (l = l[Xl] || l[Ve]) {
            var t = l.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return l
        }
        return null
    }
    function Ca(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l.stateNode;
        throw Error(m(33))
    }
    function Ke(l) {
        var t = l[Of];
        return t || (t = l[Of] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function Yl(l) {
        l[Da] = !0
    }
    var Df = new Set
      , Cf = {};
    function Ne(l, t) {
        Je(l, t),
        Je(l + "Capture", t)
    }
    function Je(l, t) {
        for (Cf[l] = t,
        l = 0; l < t.length; l++)
            Df.add(t[l])
    }
    var Pd = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Uf = {}
      , Rf = {};
    function l0(l) {
        return Jn.call(Rf, l) ? !0 : Jn.call(Uf, l) ? !1 : Pd.test(l) ? Rf[l] = !0 : (Uf[l] = !0,
        !1)
    }
    function _u(l, t, e) {
        if (l0(t))
            if (e === null)
                l.removeAttribute(t);
            else {
                switch (typeof e) {
                case "undefined":
                case "function":
                case "symbol":
                    l.removeAttribute(t);
                    return;
                case "boolean":
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        l.removeAttribute(t);
                        return
                    }
                }
                l.setAttribute(t, "" + e)
            }
    }
    function Mu(l, t, e) {
        if (e === null)
            l.removeAttribute(t);
        else {
            switch (typeof e) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(t);
                return
            }
            l.setAttribute(t, "" + e)
        }
    }
    function Ht(l, t, e, a) {
        if (a === null)
            l.removeAttribute(e);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(e);
                return
            }
            l.setAttributeNS(t, e, "" + a)
        }
    }
    function yt(l) {
        switch (typeof l) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return l;
        case "object":
            return l;
        default:
            return ""
        }
    }
    function Hf(l) {
        var t = l.type;
        return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function t0(l, t, e) {
        var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
        if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var u = a.get
              , n = a.set;
            return Object.defineProperty(l, t, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(c) {
                    e = "" + c,
                    n.call(this, c)
                }
            }),
            Object.defineProperty(l, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return e
                },
                setValue: function(c) {
                    e = "" + c
                },
                stopTracking: function() {
                    l._valueTracker = null,
                    delete l[t]
                }
            }
        }
    }
    function tc(l) {
        if (!l._valueTracker) {
            var t = Hf(l) ? "checked" : "value";
            l._valueTracker = t0(l, t, "" + l[t])
        }
    }
    function Bf(l) {
        if (!l)
            return !1;
        var t = l._valueTracker;
        if (!t)
            return !0;
        var e = t.getValue()
          , a = "";
        return l && (a = Hf(l) ? l.checked ? "true" : "false" : l.value),
        l = a,
        l !== e ? (t.setValue(l),
        !0) : !1
    }
    function Ou(l) {
        if (l = l || (typeof document < "u" ? document : void 0),
        typeof l > "u")
            return null;
        try {
            return l.activeElement || l.body
        } catch {
            return l.body
        }
    }
    var e0 = /[\n"\\]/g;
    function vt(l) {
        return l.replace(e0, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function ec(l, t, e, a, u, n, c, i) {
        l.name = "",
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"),
        t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + yt(t)) : l.value !== "" + yt(t) && (l.value = "" + yt(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"),
        t != null ? ac(l, c, yt(t)) : e != null ? ac(l, c, yt(e)) : a != null && l.removeAttribute("value"),
        u == null && n != null && (l.defaultChecked = !!n),
        u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"),
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + yt(i) : l.removeAttribute("name")
    }
    function qf(l, t, e, a, u, n, c, i) {
        if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n),
        t != null || e != null) {
            if (!(n !== "submit" && n !== "reset" || t != null)) {
                tc(l);
                return
            }
            e = e != null ? "" + yt(e) : "",
            t = t != null ? "" + yt(t) : e,
            i || t === l.value || (l.value = t),
            l.defaultValue = t
        }
        a = a ?? u,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        l.checked = i ? l.checked : !!a,
        l.defaultChecked = !!a,
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c),
        tc(l)
    }
    function ac(l, t, e) {
        t === "number" && Ou(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e)
    }
    function ke(l, t, e, a) {
        if (l = l.options,
        t) {
            t = {};
            for (var u = 0; u < e.length; u++)
                t["$" + e[u]] = !0;
            for (e = 0; e < l.length; e++)
                u = t.hasOwnProperty("$" + l[e].value),
                l[e].selected !== u && (l[e].selected = u),
                u && a && (l[e].defaultSelected = !0)
        } else {
            for (e = "" + yt(e),
            t = null,
            u = 0; u < l.length; u++) {
                if (l[u].value === e) {
                    l[u].selected = !0,
                    a && (l[u].defaultSelected = !0);
                    return
                }
                t !== null || l[u].disabled || (t = l[u])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Yf(l, t, e) {
        if (t != null && (t = "" + yt(t),
        t !== l.value && (l.value = t),
        e == null)) {
            l.defaultValue !== t && (l.defaultValue = t);
            return
        }
        l.defaultValue = e != null ? "" + yt(e) : ""
    }
    function Gf(l, t, e, a) {
        if (t == null) {
            if (a != null) {
                if (e != null)
                    throw Error(m(92));
                if (ut(a)) {
                    if (1 < a.length)
                        throw Error(m(93));
                    a = a[0]
                }
                e = a
            }
            e == null && (e = ""),
            t = e
        }
        e = yt(t),
        l.defaultValue = e,
        a = l.textContent,
        a === e && a !== "" && a !== null && (l.value = a),
        tc(l)
    }
    function We(l, t) {
        if (t) {
            var e = l.firstChild;
            if (e && e === l.lastChild && e.nodeType === 3) {
                e.nodeValue = t;
                return
            }
        }
        l.textContent = t
    }
    var a0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Xf(l, t, e) {
        var a = t.indexOf("--") === 0;
        e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || a0.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px"
    }
    function Qf(l, t, e) {
        if (t != null && typeof t != "object")
            throw Error(m(62));
        if (l = l.style,
        e != null) {
            for (var a in e)
                !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
            for (var u in t)
                a = t[u],
                t.hasOwnProperty(u) && e[u] !== a && Xf(l, u, a)
        } else
            for (var n in t)
                t.hasOwnProperty(n) && Xf(l, n, t[n])
    }
    function uc(l) {
        if (l.indexOf("-") === -1)
            return !1;
        switch (l) {
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
            return !0
        }
    }
    var u0 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , n0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Du(l) {
        return n0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
    }
    function Bt() {}
    var nc = null;
    function cc(l) {
        return l = l.target || l.srcElement || window,
        l.correspondingUseElement && (l = l.correspondingUseElement),
        l.nodeType === 3 ? l.parentNode : l
    }
    var $e = null
      , Fe = null;
    function Zf(l) {
        var t = we(l);
        if (t && (l = t.stateNode)) {
            var e = l[$l] || null;
            l: switch (l = t.stateNode,
            t.type) {
            case "input":
                if (ec(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name),
                t = e.name,
                e.type === "radio" && t != null) {
                    for (e = l; e.parentNode; )
                        e = e.parentNode;
                    for (e = e.querySelectorAll('input[name="' + vt("" + t) + '"][type="radio"]'),
                    t = 0; t < e.length; t++) {
                        var a = e[t];
                        if (a !== l && a.form === l.form) {
                            var u = a[$l] || null;
                            if (!u)
                                throw Error(m(90));
                            ec(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                        }
                    }
                    for (t = 0; t < e.length; t++)
                        a = e[t],
                        a.form === l.form && Bf(a)
                }
                break l;
            case "textarea":
                Yf(l, e.value, e.defaultValue);
                break l;
            case "select":
                t = e.value,
                t != null && ke(l, !!e.multiple, t, !1)
            }
        }
    }
    var ic = !1;
    function Vf(l, t, e) {
        if (ic)
            return l(t, e);
        ic = !0;
        try {
            var a = l(t);
            return a
        } finally {
            if (ic = !1,
            ($e !== null || Fe !== null) && (pn(),
            $e && (t = $e,
            l = Fe,
            Fe = $e = null,
            Zf(t),
            l)))
                for (t = 0; t < l.length; t++)
                    Zf(l[t])
        }
    }
    function Ua(l, t) {
        var e = l.stateNode;
        if (e === null)
            return null;
        var a = e[$l] || null;
        if (a === null)
            return null;
        e = a[t];
        l: switch (t) {
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
            (a = !a.disabled) || (l = l.type,
            a = !(l === "button" || l === "input" || l === "select" || l === "textarea")),
            l = !a;
            break l;
        default:
            l = !1
        }
        if (l)
            return null;
        if (e && typeof e != "function")
            throw Error(m(231, t, typeof e));
        return e
    }
    var qt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , fc = !1;
    if (qt)
        try {
            var Ra = {};
            Object.defineProperty(Ra, "passive", {
                get: function() {
                    fc = !0
                }
            }),
            window.addEventListener("test", Ra, Ra),
            window.removeEventListener("test", Ra, Ra)
        } catch {
            fc = !1
        }
    var te = null
      , sc = null
      , Cu = null;
    function Lf() {
        if (Cu)
            return Cu;
        var l, t = sc, e = t.length, a, u = "value" in te ? te.value : te.textContent, n = u.length;
        for (l = 0; l < e && t[l] === u[l]; l++)
            ;
        var c = e - l;
        for (a = 1; a <= c && t[e - a] === u[n - a]; a++)
            ;
        return Cu = u.slice(l, 1 < a ? 1 - a : void 0)
    }
    function Uu(l) {
        var t = l.keyCode;
        return "charCode" in l ? (l = l.charCode,
        l === 0 && t === 13 && (l = 13)) : l = t,
        l === 10 && (l = 13),
        32 <= l || l === 13 ? l : 0
    }
    function Ru() {
        return !0
    }
    function wf() {
        return !1
    }
    function Fl(l) {
        function t(e, a, u, n, c) {
            this._reactName = e,
            this._targetInst = u,
            this.type = a,
            this.nativeEvent = n,
            this.target = c,
            this.currentTarget = null;
            for (var i in l)
                l.hasOwnProperty(i) && (e = l[i],
                this[i] = e ? e(n) : n[i]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ru : wf,
            this.isPropagationStopped = wf,
            this
        }
        return D(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1),
                this.isDefaultPrevented = Ru)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
                this.isPropagationStopped = Ru)
            },
            persist: function() {},
            isPersistent: Ru
        }),
        t
    }
    var je = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(l) {
            return l.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Hu = Fl(je), Ha = D({}, je, {
        view: 0,
        detail: 0
    }), c0 = Fl(Ha), oc, rc, Ba, Bu = D({}, Ha, {
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
        getModifierState: mc,
        button: 0,
        buttons: 0,
        relatedTarget: function(l) {
            return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
        },
        movementX: function(l) {
            return "movementX" in l ? l.movementX : (l !== Ba && (Ba && l.type === "mousemove" ? (oc = l.screenX - Ba.screenX,
            rc = l.screenY - Ba.screenY) : rc = oc = 0,
            Ba = l),
            oc)
        },
        movementY: function(l) {
            return "movementY" in l ? l.movementY : rc
        }
    }), Kf = Fl(Bu), i0 = D({}, Bu, {
        dataTransfer: 0
    }), f0 = Fl(i0), s0 = D({}, Ha, {
        relatedTarget: 0
    }), dc = Fl(s0), o0 = D({}, je, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), r0 = Fl(o0), d0 = D({}, je, {
        clipboardData: function(l) {
            return "clipboardData" in l ? l.clipboardData : window.clipboardData
        }
    }), m0 = Fl(d0), h0 = D({}, je, {
        data: 0
    }), Jf = Fl(h0), y0 = {
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
        MozPrintableKey: "Unidentified"
    }, v0 = {
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
        224: "Meta"
    }, g0 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function b0(l) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(l) : (l = g0[l]) ? !!t[l] : !1
    }
    function mc() {
        return b0
    }
    var p0 = D({}, Ha, {
        key: function(l) {
            if (l.key) {
                var t = y0[l.key] || l.key;
                if (t !== "Unidentified")
                    return t
            }
            return l.type === "keypress" ? (l = Uu(l),
            l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? v0[l.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: mc,
        charCode: function(l) {
            return l.type === "keypress" ? Uu(l) : 0
        },
        keyCode: function(l) {
            return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
        },
        which: function(l) {
            return l.type === "keypress" ? Uu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
        }
    })
      , x0 = Fl(p0)
      , S0 = D({}, Bu, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , kf = Fl(S0)
      , z0 = D({}, Ha, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: mc
    })
      , T0 = Fl(z0)
      , A0 = D({}, je, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , E0 = Fl(A0)
      , N0 = D({}, Bu, {
        deltaX: function(l) {
            return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0
        },
        deltaY: function(l) {
            return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , j0 = Fl(N0)
      , _0 = D({}, je, {
        newState: 0,
        oldState: 0
    })
      , M0 = Fl(_0)
      , O0 = [9, 13, 27, 32]
      , hc = qt && "CompositionEvent" in window
      , qa = null;
    qt && "documentMode" in document && (qa = document.documentMode);
    var D0 = qt && "TextEvent" in window && !qa
      , Wf = qt && (!hc || qa && 8 < qa && 11 >= qa)
      , $f = " "
      , Ff = !1;
    function If(l, t) {
        switch (l) {
        case "keyup":
            return O0.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Pf(l) {
        return l = l.detail,
        typeof l == "object" && "data" in l ? l.data : null
    }
    var Ie = !1;
    function C0(l, t) {
        switch (l) {
        case "compositionend":
            return Pf(t);
        case "keypress":
            return t.which !== 32 ? null : (Ff = !0,
            $f);
        case "textInput":
            return l = t.data,
            l === $f && Ff ? null : l;
        default:
            return null
        }
    }
    function U0(l, t) {
        if (Ie)
            return l === "compositionend" || !hc && If(l, t) ? (l = Lf(),
            Cu = sc = te = null,
            Ie = !1,
            l) : null;
        switch (l) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Wf && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var R0 = {
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
        week: !0
    };
    function ls(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === "input" ? !!R0[l.type] : t === "textarea"
    }
    function ts(l, t, e, a) {
        $e ? Fe ? Fe.push(a) : Fe = [a] : $e = a,
        t = Nn(t, "onChange"),
        0 < t.length && (e = new Hu("onChange","change",null,e,a),
        l.push({
            event: e,
            listeners: t
        }))
    }
    var Ya = null
      , Ga = null;
    function H0(l) {
        Yr(l, 0)
    }
    function qu(l) {
        var t = Ca(l);
        if (Bf(t))
            return l
    }
    function es(l, t) {
        if (l === "change")
            return t
    }
    var as = !1;
    if (qt) {
        var yc;
        if (qt) {
            var vc = "oninput" in document;
            if (!vc) {
                var us = document.createElement("div");
                us.setAttribute("oninput", "return;"),
                vc = typeof us.oninput == "function"
            }
            yc = vc
        } else
            yc = !1;
        as = yc && (!document.documentMode || 9 < document.documentMode)
    }
    function ns() {
        Ya && (Ya.detachEvent("onpropertychange", cs),
        Ga = Ya = null)
    }
    function cs(l) {
        if (l.propertyName === "value" && qu(Ga)) {
            var t = [];
            ts(t, Ga, l, cc(l)),
            Vf(H0, t)
        }
    }
    function B0(l, t, e) {
        l === "focusin" ? (ns(),
        Ya = t,
        Ga = e,
        Ya.attachEvent("onpropertychange", cs)) : l === "focusout" && ns()
    }
    function q0(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown")
            return qu(Ga)
    }
    function Y0(l, t) {
        if (l === "click")
            return qu(t)
    }
    function G0(l, t) {
        if (l === "input" || l === "change")
            return qu(t)
    }
    function X0(l, t) {
        return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
    }
    var ft = typeof Object.is == "function" ? Object.is : X0;
    function Xa(l, t) {
        if (ft(l, t))
            return !0;
        if (typeof l != "object" || l === null || typeof t != "object" || t === null)
            return !1;
        var e = Object.keys(l)
          , a = Object.keys(t);
        if (e.length !== a.length)
            return !1;
        for (a = 0; a < e.length; a++) {
            var u = e[a];
            if (!Jn.call(t, u) || !ft(l[u], t[u]))
                return !1
        }
        return !0
    }
    function is(l) {
        for (; l && l.firstChild; )
            l = l.firstChild;
        return l
    }
    function fs(l, t) {
        var e = is(l);
        l = 0;
        for (var a; e; ) {
            if (e.nodeType === 3) {
                if (a = l + e.textContent.length,
                l <= t && a >= t)
                    return {
                        node: e,
                        offset: t - l
                    };
                l = a
            }
            l: {
                for (; e; ) {
                    if (e.nextSibling) {
                        e = e.nextSibling;
                        break l
                    }
                    e = e.parentNode
                }
                e = void 0
            }
            e = is(e)
        }
    }
    function ss(l, t) {
        return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ss(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function os(l) {
        l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
        for (var t = Ou(l.document); t instanceof l.HTMLIFrameElement; ) {
            try {
                var e = typeof t.contentWindow.location.href == "string"
            } catch {
                e = !1
            }
            if (e)
                l = t.contentWindow;
            else
                break;
            t = Ou(l.document)
        }
        return t
    }
    function gc(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
    }
    var Q0 = qt && "documentMode" in document && 11 >= document.documentMode
      , Pe = null
      , bc = null
      , Qa = null
      , pc = !1;
    function rs(l, t, e) {
        var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
        pc || Pe == null || Pe !== Ou(a) || (a = Pe,
        "selectionStart" in a && gc(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        Qa && Xa(Qa, a) || (Qa = a,
        a = Nn(bc, "onSelect"),
        0 < a.length && (t = new Hu("onSelect","select",null,t,e),
        l.push({
            event: t,
            listeners: a
        }),
        t.target = Pe)))
    }
    function _e(l, t) {
        var e = {};
        return e[l.toLowerCase()] = t.toLowerCase(),
        e["Webkit" + l] = "webkit" + t,
        e["Moz" + l] = "moz" + t,
        e
    }
    var la = {
        animationend: _e("Animation", "AnimationEnd"),
        animationiteration: _e("Animation", "AnimationIteration"),
        animationstart: _e("Animation", "AnimationStart"),
        transitionrun: _e("Transition", "TransitionRun"),
        transitionstart: _e("Transition", "TransitionStart"),
        transitioncancel: _e("Transition", "TransitionCancel"),
        transitionend: _e("Transition", "TransitionEnd")
    }
      , xc = {}
      , ds = {};
    qt && (ds = document.createElement("div").style,
    "AnimationEvent" in window || (delete la.animationend.animation,
    delete la.animationiteration.animation,
    delete la.animationstart.animation),
    "TransitionEvent" in window || delete la.transitionend.transition);
    function Me(l) {
        if (xc[l])
            return xc[l];
        if (!la[l])
            return l;
        var t = la[l], e;
        for (e in t)
            if (t.hasOwnProperty(e) && e in ds)
                return xc[l] = t[e];
        return l
    }
    var ms = Me("animationend")
      , hs = Me("animationiteration")
      , ys = Me("animationstart")
      , Z0 = Me("transitionrun")
      , V0 = Me("transitionstart")
      , L0 = Me("transitioncancel")
      , vs = Me("transitionend")
      , gs = new Map
      , Sc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Sc.push("scrollEnd");
    function Nt(l, t) {
        gs.set(l, t),
        Ne(t, [l])
    }
    var Yu = typeof reportError == "function" ? reportError : function(l) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                error: l
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", l);
            return
        }
        console.error(l)
    }
      , gt = []
      , ta = 0
      , zc = 0;
    function Gu() {
        for (var l = ta, t = zc = ta = 0; t < l; ) {
            var e = gt[t];
            gt[t++] = null;
            var a = gt[t];
            gt[t++] = null;
            var u = gt[t];
            gt[t++] = null;
            var n = gt[t];
            if (gt[t++] = null,
            a !== null && u !== null) {
                var c = a.pending;
                c === null ? u.next = u : (u.next = c.next,
                c.next = u),
                a.pending = u
            }
            n !== 0 && bs(e, u, n)
        }
    }
    function Xu(l, t, e, a) {
        gt[ta++] = l,
        gt[ta++] = t,
        gt[ta++] = e,
        gt[ta++] = a,
        zc |= a,
        l.lanes |= a,
        l = l.alternate,
        l !== null && (l.lanes |= a)
    }
    function Tc(l, t, e, a) {
        return Xu(l, t, e, a),
        Qu(l)
    }
    function Oe(l, t) {
        return Xu(l, null, null, t),
        Qu(l)
    }
    function bs(l, t, e) {
        l.lanes |= e;
        var a = l.alternate;
        a !== null && (a.lanes |= e);
        for (var u = !1, n = l.return; n !== null; )
            n.childLanes |= e,
            a = n.alternate,
            a !== null && (a.childLanes |= e),
            n.tag === 22 && (l = n.stateNode,
            l === null || l._visibility & 1 || (u = !0)),
            l = n,
            n = n.return;
        return l.tag === 3 ? (n = l.stateNode,
        u && t !== null && (u = 31 - it(e),
        l = n.hiddenUpdates,
        a = l[u],
        a === null ? l[u] = [t] : a.push(t),
        t.lane = e | 536870912),
        n) : null
    }
    function Qu(l) {
        if (50 < su)
            throw su = 0,
            Ci = null,
            Error(m(185));
        for (var t = l.return; t !== null; )
            l = t,
            t = l.return;
        return l.tag === 3 ? l.stateNode : null
    }
    var ea = {};
    function w0(l, t, e, a) {
        this.tag = l,
        this.key = e,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function st(l, t, e, a) {
        return new w0(l,t,e,a)
    }
    function Ac(l) {
        return l = l.prototype,
        !(!l || !l.isReactComponent)
    }
    function Yt(l, t) {
        var e = l.alternate;
        return e === null ? (e = st(l.tag, t, l.key, l.mode),
        e.elementType = l.elementType,
        e.type = l.type,
        e.stateNode = l.stateNode,
        e.alternate = l,
        l.alternate = e) : (e.pendingProps = t,
        e.type = l.type,
        e.flags = 0,
        e.subtreeFlags = 0,
        e.deletions = null),
        e.flags = l.flags & 65011712,
        e.childLanes = l.childLanes,
        e.lanes = l.lanes,
        e.child = l.child,
        e.memoizedProps = l.memoizedProps,
        e.memoizedState = l.memoizedState,
        e.updateQueue = l.updateQueue,
        t = l.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        e.sibling = l.sibling,
        e.index = l.index,
        e.ref = l.ref,
        e.refCleanup = l.refCleanup,
        e
    }
    function ps(l, t) {
        l.flags &= 65011714;
        var e = l.alternate;
        return e === null ? (l.childLanes = 0,
        l.lanes = t,
        l.child = null,
        l.subtreeFlags = 0,
        l.memoizedProps = null,
        l.memoizedState = null,
        l.updateQueue = null,
        l.dependencies = null,
        l.stateNode = null) : (l.childLanes = e.childLanes,
        l.lanes = e.lanes,
        l.child = e.child,
        l.subtreeFlags = 0,
        l.deletions = null,
        l.memoizedProps = e.memoizedProps,
        l.memoizedState = e.memoizedState,
        l.updateQueue = e.updateQueue,
        l.type = e.type,
        t = e.dependencies,
        l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        l
    }
    function Zu(l, t, e, a, u, n) {
        var c = 0;
        if (a = l,
        typeof l == "function")
            Ac(l) && (c = 1);
        else if (typeof l == "string")
            c = $m(l, e, N.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
        else
            l: switch (l) {
            case at:
                return l = st(31, e, t, u),
                l.elementType = at,
                l.lanes = n,
                l;
            case sl:
                return De(e.children, u, n, t);
            case ol:
                c = 8,
                u |= 24;
                break;
            case zl:
                return l = st(12, e, t, u | 2),
                l.elementType = zl,
                l.lanes = n,
                l;
            case Tl:
                return l = st(13, e, t, u),
                l.elementType = Tl,
                l.lanes = n,
                l;
            case bl:
                return l = st(19, e, t, u),
                l.elementType = bl,
                l.lanes = n,
                l;
            default:
                if (typeof l == "object" && l !== null)
                    switch (l.$$typeof) {
                    case jl:
                        c = 10;
                        break l;
                    case Bl:
                        c = 9;
                        break l;
                    case tl:
                        c = 11;
                        break l;
                    case K:
                        c = 14;
                        break l;
                    case Kl:
                        c = 16,
                        a = null;
                        break l
                    }
                c = 29,
                e = Error(m(130, l === null ? "null" : typeof l, "")),
                a = null
            }
        return t = st(c, e, t, u),
        t.elementType = l,
        t.type = a,
        t.lanes = n,
        t
    }
    function De(l, t, e, a) {
        return l = st(7, l, a, t),
        l.lanes = e,
        l
    }
    function Ec(l, t, e) {
        return l = st(6, l, null, t),
        l.lanes = e,
        l
    }
    function xs(l) {
        var t = st(18, null, null, 0);
        return t.stateNode = l,
        t
    }
    function Nc(l, t, e) {
        return t = st(4, l.children !== null ? l.children : [], l.key, t),
        t.lanes = e,
        t.stateNode = {
            containerInfo: l.containerInfo,
            pendingChildren: null,
            implementation: l.implementation
        },
        t
    }
    var Ss = new WeakMap;
    function bt(l, t) {
        if (typeof l == "object" && l !== null) {
            var e = Ss.get(l);
            return e !== void 0 ? e : (t = {
                value: l,
                source: t,
                stack: xf(t)
            },
            Ss.set(l, t),
            t)
        }
        return {
            value: l,
            source: t,
            stack: xf(t)
        }
    }
    var aa = []
      , ua = 0
      , Vu = null
      , Za = 0
      , pt = []
      , xt = 0
      , ee = null
      , Mt = 1
      , Ot = "";
    function Gt(l, t) {
        aa[ua++] = Za,
        aa[ua++] = Vu,
        Vu = l,
        Za = t
    }
    function zs(l, t, e) {
        pt[xt++] = Mt,
        pt[xt++] = Ot,
        pt[xt++] = ee,
        ee = l;
        var a = Mt;
        l = Ot;
        var u = 32 - it(a) - 1;
        a &= ~(1 << u),
        e += 1;
        var n = 32 - it(t) + u;
        if (30 < n) {
            var c = u - u % 5;
            n = (a & (1 << c) - 1).toString(32),
            a >>= c,
            u -= c,
            Mt = 1 << 32 - it(t) + u | e << u | a,
            Ot = n + l
        } else
            Mt = 1 << n | e << u | a,
            Ot = l
    }
    function jc(l) {
        l.return !== null && (Gt(l, 1),
        zs(l, 1, 0))
    }
    function _c(l) {
        for (; l === Vu; )
            Vu = aa[--ua],
            aa[ua] = null,
            Za = aa[--ua],
            aa[ua] = null;
        for (; l === ee; )
            ee = pt[--xt],
            pt[xt] = null,
            Ot = pt[--xt],
            pt[xt] = null,
            Mt = pt[--xt],
            pt[xt] = null
    }
    function Ts(l, t) {
        pt[xt++] = Mt,
        pt[xt++] = Ot,
        pt[xt++] = ee,
        Mt = t.id,
        Ot = t.overflow,
        ee = l
    }
    var Ql = null
      , pl = null
      , P = !1
      , ae = null
      , St = !1
      , Mc = Error(m(519));
    function ue(l) {
        var t = Error(m(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Va(bt(t, l)),
        Mc
    }
    function As(l) {
        var t = l.stateNode
          , e = l.type
          , a = l.memoizedProps;
        switch (t[Xl] = l,
        t[$l] = a,
        e) {
        case "dialog":
            $("cancel", t),
            $("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            $("load", t);
            break;
        case "video":
        case "audio":
            for (e = 0; e < ru.length; e++)
                $(ru[e], t);
            break;
        case "source":
            $("error", t);
            break;
        case "img":
        case "image":
        case "link":
            $("error", t),
            $("load", t);
            break;
        case "details":
            $("toggle", t);
            break;
        case "input":
            $("invalid", t),
            qf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
            break;
        case "select":
            $("invalid", t);
            break;
        case "textarea":
            $("invalid", t),
            Gf(t, a.value, a.defaultValue, a.children)
        }
        e = a.children,
        typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || Zr(t.textContent, e) ? (a.popover != null && ($("beforetoggle", t),
        $("toggle", t)),
        a.onScroll != null && $("scroll", t),
        a.onScrollEnd != null && $("scrollend", t),
        a.onClick != null && (t.onclick = Bt),
        t = !0) : t = !1,
        t || ue(l, !0)
    }
    function Es(l) {
        for (Ql = l.return; Ql; )
            switch (Ql.tag) {
            case 5:
            case 31:
            case 13:
                St = !1;
                return;
            case 27:
            case 3:
                St = !0;
                return;
            default:
                Ql = Ql.return
            }
    }
    function na(l) {
        if (l !== Ql)
            return !1;
        if (!P)
            return Es(l),
            P = !0,
            !1;
        var t = l.tag, e;
        if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type,
        e = !(e !== "form" && e !== "button") || Ji(l.type, l.memoizedProps)),
        e = !e),
        e && pl && ue(l),
        Es(l),
        t === 13) {
            if (l = l.memoizedState,
            l = l !== null ? l.dehydrated : null,
            !l)
                throw Error(m(317));
            pl = Fr(l)
        } else if (t === 31) {
            if (l = l.memoizedState,
            l = l !== null ? l.dehydrated : null,
            !l)
                throw Error(m(317));
            pl = Fr(l)
        } else
            t === 27 ? (t = pl,
            be(l.type) ? (l = Ii,
            Ii = null,
            pl = l) : pl = t) : pl = Ql ? Tt(l.stateNode.nextSibling) : null;
        return !0
    }
    function Ce() {
        pl = Ql = null,
        P = !1
    }
    function Oc() {
        var l = ae;
        return l !== null && (tt === null ? tt = l : tt.push.apply(tt, l),
        ae = null),
        l
    }
    function Va(l) {
        ae === null ? ae = [l] : ae.push(l)
    }
    var Dc = r(null)
      , Ue = null
      , Xt = null;
    function ne(l, t, e) {
        A(Dc, t._currentValue),
        t._currentValue = e
    }
    function Qt(l) {
        l._currentValue = Dc.current,
        z(Dc)
    }
    function Cc(l, t, e) {
        for (; l !== null; ) {
            var a = l.alternate;
            if ((l.childLanes & t) !== t ? (l.childLanes |= t,
            a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
            l === e)
                break;
            l = l.return
        }
    }
    function Uc(l, t, e, a) {
        var u = l.child;
        for (u !== null && (u.return = l); u !== null; ) {
            var n = u.dependencies;
            if (n !== null) {
                var c = u.child;
                n = n.firstContext;
                l: for (; n !== null; ) {
                    var i = n;
                    n = u;
                    for (var s = 0; s < t.length; s++)
                        if (i.context === t[s]) {
                            n.lanes |= e,
                            i = n.alternate,
                            i !== null && (i.lanes |= e),
                            Cc(n.return, e, l),
                            a || (c = null);
                            break l
                        }
                    n = i.next
                }
            } else if (u.tag === 18) {
                if (c = u.return,
                c === null)
                    throw Error(m(341));
                c.lanes |= e,
                n = c.alternate,
                n !== null && (n.lanes |= e),
                Cc(c, e, l),
                c = null
            } else
                c = u.child;
            if (c !== null)
                c.return = u;
            else
                for (c = u; c !== null; ) {
                    if (c === l) {
                        c = null;
                        break
                    }
                    if (u = c.sibling,
                    u !== null) {
                        u.return = c.return,
                        c = u;
                        break
                    }
                    c = c.return
                }
            u = c
        }
    }
    function ca(l, t, e, a) {
        l = null;
        for (var u = t, n = !1; u !== null; ) {
            if (!n) {
                if ((u.flags & 524288) !== 0)
                    n = !0;
                else if ((u.flags & 262144) !== 0)
                    break
            }
            if (u.tag === 10) {
                var c = u.alternate;
                if (c === null)
                    throw Error(m(387));
                if (c = c.memoizedProps,
                c !== null) {
                    var i = u.type;
                    ft(u.pendingProps.value, c.value) || (l !== null ? l.push(i) : l = [i])
                }
            } else if (u === fl.current) {
                if (c = u.alternate,
                c === null)
                    throw Error(m(387));
                c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(vu) : l = [vu])
            }
            u = u.return
        }
        l !== null && Uc(t, l, e, a),
        t.flags |= 262144
    }
    function Lu(l) {
        for (l = l.firstContext; l !== null; ) {
            if (!ft(l.context._currentValue, l.memoizedValue))
                return !0;
            l = l.next
        }
        return !1
    }
    function Re(l) {
        Ue = l,
        Xt = null,
        l = l.dependencies,
        l !== null && (l.firstContext = null)
    }
    function Zl(l) {
        return Ns(Ue, l)
    }
    function wu(l, t) {
        return Ue === null && Re(l),
        Ns(l, t)
    }
    function Ns(l, t) {
        var e = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        Xt === null) {
            if (l === null)
                throw Error(m(308));
            Xt = t,
            l.dependencies = {
                lanes: 0,
                firstContext: t
            },
            l.flags |= 524288
        } else
            Xt = Xt.next = t;
        return e
    }
    var K0 = typeof AbortController < "u" ? AbortController : function() {
        var l = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(e, a) {
                l.push(a)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            l.forEach(function(e) {
                return e()
            })
        }
    }
      , J0 = E.unstable_scheduleCallback
      , k0 = E.unstable_NormalPriority
      , Dl = {
        $$typeof: jl,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Rc() {
        return {
            controller: new K0,
            data: new Map,
            refCount: 0
        }
    }
    function La(l) {
        l.refCount--,
        l.refCount === 0 && J0(k0, function() {
            l.controller.abort()
        })
    }
    var wa = null
      , Hc = 0
      , ia = 0
      , fa = null;
    function W0(l, t) {
        if (wa === null) {
            var e = wa = [];
            Hc = 0,
            ia = Yi(),
            fa = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    e.push(a)
                }
            }
        }
        return Hc++,
        t.then(js, js),
        t
    }
    function js() {
        if (--Hc === 0 && wa !== null) {
            fa !== null && (fa.status = "fulfilled");
            var l = wa;
            wa = null,
            ia = 0,
            fa = null;
            for (var t = 0; t < l.length; t++)
                (0,
                l[t])()
        }
    }
    function $0(l, t) {
        var e = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(u) {
                e.push(u)
            }
        };
        return l.then(function() {
            a.status = "fulfilled",
            a.value = t;
            for (var u = 0; u < e.length; u++)
                (0,
                e[u])(t)
        }, function(u) {
            for (a.status = "rejected",
            a.reason = u,
            u = 0; u < e.length; u++)
                (0,
                e[u])(void 0)
        }),
        a
    }
    var _s = p.S;
    p.S = function(l, t) {
        dr = nt(),
        typeof t == "object" && t !== null && typeof t.then == "function" && W0(l, t),
        _s !== null && _s(l, t)
    }
    ;
    var He = r(null);
    function Bc() {
        var l = He.current;
        return l !== null ? l : vl.pooledCache
    }
    function Ku(l, t) {
        t === null ? A(He, He.current) : A(He, t.pool)
    }
    function Ms() {
        var l = Bc();
        return l === null ? null : {
            parent: Dl._currentValue,
            pool: l
        }
    }
    var sa = Error(m(460))
      , qc = Error(m(474))
      , Ju = Error(m(542))
      , ku = {
        then: function() {}
    };
    function Os(l) {
        return l = l.status,
        l === "fulfilled" || l === "rejected"
    }
    function Ds(l, t, e) {
        switch (e = l[e],
        e === void 0 ? l.push(t) : e !== t && (t.then(Bt, Bt),
        t = e),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw l = t.reason,
            Us(l),
            l;
        default:
            if (typeof t.status == "string")
                t.then(Bt, Bt);
            else {
                if (l = vl,
                l !== null && 100 < l.shellSuspendCounter)
                    throw Error(m(482));
                l = t,
                l.status = "pending",
                l.then(function(a) {
                    if (t.status === "pending") {
                        var u = t;
                        u.status = "fulfilled",
                        u.value = a
                    }
                }, function(a) {
                    if (t.status === "pending") {
                        var u = t;
                        u.status = "rejected",
                        u.reason = a
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw l = t.reason,
                Us(l),
                l
            }
            throw qe = t,
            sa
        }
    }
    function Be(l) {
        try {
            var t = l._init;
            return t(l._payload)
        } catch (e) {
            throw e !== null && typeof e == "object" && typeof e.then == "function" ? (qe = e,
            sa) : e
        }
    }
    var qe = null;
    function Cs() {
        if (qe === null)
            throw Error(m(459));
        var l = qe;
        return qe = null,
        l
    }
    function Us(l) {
        if (l === sa || l === Ju)
            throw Error(m(483))
    }
    var oa = null
      , Ka = 0;
    function Wu(l) {
        var t = Ka;
        return Ka += 1,
        oa === null && (oa = []),
        Ds(oa, l, t)
    }
    function Ja(l, t) {
        t = t.props.ref,
        l.ref = t !== void 0 ? t : null
    }
    function $u(l, t) {
        throw t.$$typeof === V ? Error(m(525)) : (l = Object.prototype.toString.call(t),
        Error(m(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
    }
    function Rs(l) {
        function t(d, o) {
            if (l) {
                var h = d.deletions;
                h === null ? (d.deletions = [o],
                d.flags |= 16) : h.push(o)
            }
        }
        function e(d, o) {
            if (!l)
                return null;
            for (; o !== null; )
                t(d, o),
                o = o.sibling;
            return null
        }
        function a(d) {
            for (var o = new Map; d !== null; )
                d.key !== null ? o.set(d.key, d) : o.set(d.index, d),
                d = d.sibling;
            return o
        }
        function u(d, o) {
            return d = Yt(d, o),
            d.index = 0,
            d.sibling = null,
            d
        }
        function n(d, o, h) {
            return d.index = h,
            l ? (h = d.alternate,
            h !== null ? (h = h.index,
            h < o ? (d.flags |= 67108866,
            o) : h) : (d.flags |= 67108866,
            o)) : (d.flags |= 1048576,
            o)
        }
        function c(d) {
            return l && d.alternate === null && (d.flags |= 67108866),
            d
        }
        function i(d, o, h, x) {
            return o === null || o.tag !== 6 ? (o = Ec(h, d.mode, x),
            o.return = d,
            o) : (o = u(o, h),
            o.return = d,
            o)
        }
        function s(d, o, h, x) {
            var H = h.type;
            return H === sl ? b(d, o, h.props.children, x, h.key) : o !== null && (o.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Kl && Be(H) === o.type) ? (o = u(o, h.props),
            Ja(o, h),
            o.return = d,
            o) : (o = Zu(h.type, h.key, h.props, null, d.mode, x),
            Ja(o, h),
            o.return = d,
            o)
        }
        function y(d, o, h, x) {
            return o === null || o.tag !== 4 || o.stateNode.containerInfo !== h.containerInfo || o.stateNode.implementation !== h.implementation ? (o = Nc(h, d.mode, x),
            o.return = d,
            o) : (o = u(o, h.children || []),
            o.return = d,
            o)
        }
        function b(d, o, h, x, H) {
            return o === null || o.tag !== 7 ? (o = De(h, d.mode, x, H),
            o.return = d,
            o) : (o = u(o, h),
            o.return = d,
            o)
        }
        function S(d, o, h) {
            if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
                return o = Ec("" + o, d.mode, h),
                o.return = d,
                o;
            if (typeof o == "object" && o !== null) {
                switch (o.$$typeof) {
                case gl:
                    return h = Zu(o.type, o.key, o.props, null, d.mode, h),
                    Ja(h, o),
                    h.return = d,
                    h;
                case k:
                    return o = Nc(o, d.mode, h),
                    o.return = d,
                    o;
                case Kl:
                    return o = Be(o),
                    S(d, o, h)
                }
                if (ut(o) || ql(o))
                    return o = De(o, d.mode, h, null),
                    o.return = d,
                    o;
                if (typeof o.then == "function")
                    return S(d, Wu(o), h);
                if (o.$$typeof === jl)
                    return S(d, wu(d, o), h);
                $u(d, o)
            }
            return null
        }
        function v(d, o, h, x) {
            var H = o !== null ? o.key : null;
            if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
                return H !== null ? null : i(d, o, "" + h, x);
            if (typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                case gl:
                    return h.key === H ? s(d, o, h, x) : null;
                case k:
                    return h.key === H ? y(d, o, h, x) : null;
                case Kl:
                    return h = Be(h),
                    v(d, o, h, x)
                }
                if (ut(h) || ql(h))
                    return H !== null ? null : b(d, o, h, x, null);
                if (typeof h.then == "function")
                    return v(d, o, Wu(h), x);
                if (h.$$typeof === jl)
                    return v(d, o, wu(d, h), x);
                $u(d, h)
            }
            return null
        }
        function g(d, o, h, x, H) {
            if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
                return d = d.get(h) || null,
                i(o, d, "" + x, H);
            if (typeof x == "object" && x !== null) {
                switch (x.$$typeof) {
                case gl:
                    return d = d.get(x.key === null ? h : x.key) || null,
                    s(o, d, x, H);
                case k:
                    return d = d.get(x.key === null ? h : x.key) || null,
                    y(o, d, x, H);
                case Kl:
                    return x = Be(x),
                    g(d, o, h, x, H)
                }
                if (ut(x) || ql(x))
                    return d = d.get(h) || null,
                    b(o, d, x, H, null);
                if (typeof x.then == "function")
                    return g(d, o, h, Wu(x), H);
                if (x.$$typeof === jl)
                    return g(d, o, h, wu(o, x), H);
                $u(o, x)
            }
            return null
        }
        function O(d, o, h, x) {
            for (var H = null, el = null, C = o, w = o = 0, I = null; C !== null && w < h.length; w++) {
                C.index > w ? (I = C,
                C = null) : I = C.sibling;
                var al = v(d, C, h[w], x);
                if (al === null) {
                    C === null && (C = I);
                    break
                }
                l && C && al.alternate === null && t(d, C),
                o = n(al, o, w),
                el === null ? H = al : el.sibling = al,
                el = al,
                C = I
            }
            if (w === h.length)
                return e(d, C),
                P && Gt(d, w),
                H;
            if (C === null) {
                for (; w < h.length; w++)
                    C = S(d, h[w], x),
                    C !== null && (o = n(C, o, w),
                    el === null ? H = C : el.sibling = C,
                    el = C);
                return P && Gt(d, w),
                H
            }
            for (C = a(C); w < h.length; w++)
                I = g(C, d, w, h[w], x),
                I !== null && (l && I.alternate !== null && C.delete(I.key === null ? w : I.key),
                o = n(I, o, w),
                el === null ? H = I : el.sibling = I,
                el = I);
            return l && C.forEach(function(Te) {
                return t(d, Te)
            }),
            P && Gt(d, w),
            H
        }
        function Y(d, o, h, x) {
            if (h == null)
                throw Error(m(151));
            for (var H = null, el = null, C = o, w = o = 0, I = null, al = h.next(); C !== null && !al.done; w++,
            al = h.next()) {
                C.index > w ? (I = C,
                C = null) : I = C.sibling;
                var Te = v(d, C, al.value, x);
                if (Te === null) {
                    C === null && (C = I);
                    break
                }
                l && C && Te.alternate === null && t(d, C),
                o = n(Te, o, w),
                el === null ? H = Te : el.sibling = Te,
                el = Te,
                C = I
            }
            if (al.done)
                return e(d, C),
                P && Gt(d, w),
                H;
            if (C === null) {
                for (; !al.done; w++,
                al = h.next())
                    al = S(d, al.value, x),
                    al !== null && (o = n(al, o, w),
                    el === null ? H = al : el.sibling = al,
                    el = al);
                return P && Gt(d, w),
                H
            }
            for (C = a(C); !al.done; w++,
            al = h.next())
                al = g(C, d, w, al.value, x),
                al !== null && (l && al.alternate !== null && C.delete(al.key === null ? w : al.key),
                o = n(al, o, w),
                el === null ? H = al : el.sibling = al,
                el = al);
            return l && C.forEach(function(i1) {
                return t(d, i1)
            }),
            P && Gt(d, w),
            H
        }
        function yl(d, o, h, x) {
            if (typeof h == "object" && h !== null && h.type === sl && h.key === null && (h = h.props.children),
            typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                case gl:
                    l: {
                        for (var H = h.key; o !== null; ) {
                            if (o.key === H) {
                                if (H = h.type,
                                H === sl) {
                                    if (o.tag === 7) {
                                        e(d, o.sibling),
                                        x = u(o, h.props.children),
                                        x.return = d,
                                        d = x;
                                        break l
                                    }
                                } else if (o.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Kl && Be(H) === o.type) {
                                    e(d, o.sibling),
                                    x = u(o, h.props),
                                    Ja(x, h),
                                    x.return = d,
                                    d = x;
                                    break l
                                }
                                e(d, o);
                                break
                            } else
                                t(d, o);
                            o = o.sibling
                        }
                        h.type === sl ? (x = De(h.props.children, d.mode, x, h.key),
                        x.return = d,
                        d = x) : (x = Zu(h.type, h.key, h.props, null, d.mode, x),
                        Ja(x, h),
                        x.return = d,
                        d = x)
                    }
                    return c(d);
                case k:
                    l: {
                        for (H = h.key; o !== null; ) {
                            if (o.key === H)
                                if (o.tag === 4 && o.stateNode.containerInfo === h.containerInfo && o.stateNode.implementation === h.implementation) {
                                    e(d, o.sibling),
                                    x = u(o, h.children || []),
                                    x.return = d,
                                    d = x;
                                    break l
                                } else {
                                    e(d, o);
                                    break
                                }
                            else
                                t(d, o);
                            o = o.sibling
                        }
                        x = Nc(h, d.mode, x),
                        x.return = d,
                        d = x
                    }
                    return c(d);
                case Kl:
                    return h = Be(h),
                    yl(d, o, h, x)
                }
                if (ut(h))
                    return O(d, o, h, x);
                if (ql(h)) {
                    if (H = ql(h),
                    typeof H != "function")
                        throw Error(m(150));
                    return h = H.call(h),
                    Y(d, o, h, x)
                }
                if (typeof h.then == "function")
                    return yl(d, o, Wu(h), x);
                if (h.$$typeof === jl)
                    return yl(d, o, wu(d, h), x);
                $u(d, h)
            }
            return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h,
            o !== null && o.tag === 6 ? (e(d, o.sibling),
            x = u(o, h),
            x.return = d,
            d = x) : (e(d, o),
            x = Ec(h, d.mode, x),
            x.return = d,
            d = x),
            c(d)) : e(d, o)
        }
        return function(d, o, h, x) {
            try {
                Ka = 0;
                var H = yl(d, o, h, x);
                return oa = null,
                H
            } catch (C) {
                if (C === sa || C === Ju)
                    throw C;
                var el = st(29, C, null, d.mode);
                return el.lanes = x,
                el.return = d,
                el
            } finally {}
        }
    }
    var Ye = Rs(!0)
      , Hs = Rs(!1)
      , ce = !1;
    function Yc(l) {
        l.updateQueue = {
            baseState: l.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Gc(l, t) {
        l = l.updateQueue,
        t.updateQueue === l && (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null
        })
    }
    function ie(l) {
        return {
            lane: l,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function fe(l, t, e) {
        var a = l.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (ul & 2) !== 0) {
            var u = a.pending;
            return u === null ? t.next = t : (t.next = u.next,
            u.next = t),
            a.pending = t,
            t = Qu(l),
            bs(l, null, e),
            t
        }
        return Xu(l, a, t, e),
        Qu(l)
    }
    function ka(l, t, e) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (e & 4194048) !== 0)) {
            var a = t.lanes;
            a &= l.pendingLanes,
            e |= a,
            t.lanes = e,
            Nf(l, e)
        }
    }
    function Xc(l, t) {
        var e = l.updateQueue
          , a = l.alternate;
        if (a !== null && (a = a.updateQueue,
        e === a)) {
            var u = null
              , n = null;
            if (e = e.firstBaseUpdate,
            e !== null) {
                do {
                    var c = {
                        lane: e.lane,
                        tag: e.tag,
                        payload: e.payload,
                        callback: null,
                        next: null
                    };
                    n === null ? u = n = c : n = n.next = c,
                    e = e.next
                } while (e !== null);
                n === null ? u = n = t : n = n.next = t
            } else
                u = n = t;
            e = {
                baseState: a.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: n,
                shared: a.shared,
                callbacks: a.callbacks
            },
            l.updateQueue = e;
            return
        }
        l = e.lastBaseUpdate,
        l === null ? e.firstBaseUpdate = t : l.next = t,
        e.lastBaseUpdate = t
    }
    var Qc = !1;
    function Wa() {
        if (Qc) {
            var l = fa;
            if (l !== null)
                throw l
        }
    }
    function $a(l, t, e, a) {
        Qc = !1;
        var u = l.updateQueue;
        ce = !1;
        var n = u.firstBaseUpdate
          , c = u.lastBaseUpdate
          , i = u.shared.pending;
        if (i !== null) {
            u.shared.pending = null;
            var s = i
              , y = s.next;
            s.next = null,
            c === null ? n = y : c.next = y,
            c = s;
            var b = l.alternate;
            b !== null && (b = b.updateQueue,
            i = b.lastBaseUpdate,
            i !== c && (i === null ? b.firstBaseUpdate = y : i.next = y,
            b.lastBaseUpdate = s))
        }
        if (n !== null) {
            var S = u.baseState;
            c = 0,
            b = y = s = null,
            i = n;
            do {
                var v = i.lane & -536870913
                  , g = v !== i.lane;
                if (g ? (F & v) === v : (a & v) === v) {
                    v !== 0 && v === ia && (Qc = !0),
                    b !== null && (b = b.next = {
                        lane: 0,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null
                    });
                    l: {
                        var O = l
                          , Y = i;
                        v = t;
                        var yl = e;
                        switch (Y.tag) {
                        case 1:
                            if (O = Y.payload,
                            typeof O == "function") {
                                S = O.call(yl, S, v);
                                break l
                            }
                            S = O;
                            break l;
                        case 3:
                            O.flags = O.flags & -65537 | 128;
                        case 0:
                            if (O = Y.payload,
                            v = typeof O == "function" ? O.call(yl, S, v) : O,
                            v == null)
                                break l;
                            S = D({}, S, v);
                            break l;
                        case 2:
                            ce = !0
                        }
                    }
                    v = i.callback,
                    v !== null && (l.flags |= 64,
                    g && (l.flags |= 8192),
                    g = u.callbacks,
                    g === null ? u.callbacks = [v] : g.push(v))
                } else
                    g = {
                        lane: v,
                        tag: i.tag,
                        payload: i.payload,
                        callback: i.callback,
                        next: null
                    },
                    b === null ? (y = b = g,
                    s = S) : b = b.next = g,
                    c |= v;
                if (i = i.next,
                i === null) {
                    if (i = u.shared.pending,
                    i === null)
                        break;
                    g = i,
                    i = g.next,
                    g.next = null,
                    u.lastBaseUpdate = g,
                    u.shared.pending = null
                }
            } while (!0);
            b === null && (s = S),
            u.baseState = s,
            u.firstBaseUpdate = y,
            u.lastBaseUpdate = b,
            n === null && (u.shared.lanes = 0),
            me |= c,
            l.lanes = c,
            l.memoizedState = S
        }
    }
    function Bs(l, t) {
        if (typeof l != "function")
            throw Error(m(191, l));
        l.call(t)
    }
    function qs(l, t) {
        var e = l.callbacks;
        if (e !== null)
            for (l.callbacks = null,
            l = 0; l < e.length; l++)
                Bs(e[l], t)
    }
    var ra = r(null)
      , Fu = r(0);
    function Ys(l, t) {
        l = $t,
        A(Fu, l),
        A(ra, t),
        $t = l | t.baseLanes
    }
    function Zc() {
        A(Fu, $t),
        A(ra, ra.current)
    }
    function Vc() {
        $t = Fu.current,
        z(ra),
        z(Fu)
    }
    var ot = r(null)
      , zt = null;
    function se(l) {
        var t = l.alternate;
        A(Ml, Ml.current & 1),
        A(ot, l),
        zt === null && (t === null || ra.current !== null || t.memoizedState !== null) && (zt = l)
    }
    function Lc(l) {
        A(Ml, Ml.current),
        A(ot, l),
        zt === null && (zt = l)
    }
    function Gs(l) {
        l.tag === 22 ? (A(Ml, Ml.current),
        A(ot, l),
        zt === null && (zt = l)) : oe()
    }
    function oe() {
        A(Ml, Ml.current),
        A(ot, ot.current)
    }
    function rt(l) {
        z(ot),
        zt === l && (zt = null),
        z(Ml)
    }
    var Ml = r(0);
    function Iu(l) {
        for (var t = l; t !== null; ) {
            if (t.tag === 13) {
                var e = t.memoizedState;
                if (e !== null && (e = e.dehydrated,
                e === null || $i(e) || Fi(e)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === l)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === l)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var Zt = 0
      , Z = null
      , ml = null
      , Cl = null
      , Pu = !1
      , da = !1
      , Ge = !1
      , ln = 0
      , Fa = 0
      , ma = null
      , F0 = 0;
    function El() {
        throw Error(m(321))
    }
    function wc(l, t) {
        if (t === null)
            return !1;
        for (var e = 0; e < t.length && e < l.length; e++)
            if (!ft(l[e], t[e]))
                return !1;
        return !0
    }
    function Kc(l, t, e, a, u, n) {
        return Zt = n,
        Z = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        p.H = l === null || l.memoizedState === null ? To : ii,
        Ge = !1,
        n = e(a, u),
        Ge = !1,
        da && (n = Qs(t, e, a, u)),
        Xs(l),
        n
    }
    function Xs(l) {
        p.H = lu;
        var t = ml !== null && ml.next !== null;
        if (Zt = 0,
        Cl = ml = Z = null,
        Pu = !1,
        Fa = 0,
        ma = null,
        t)
            throw Error(m(300));
        l === null || Ul || (l = l.dependencies,
        l !== null && Lu(l) && (Ul = !0))
    }
    function Qs(l, t, e, a) {
        Z = l;
        var u = 0;
        do {
            if (da && (ma = null),
            Fa = 0,
            da = !1,
            25 <= u)
                throw Error(m(301));
            if (u += 1,
            Cl = ml = null,
            l.updateQueue != null) {
                var n = l.updateQueue;
                n.lastEffect = null,
                n.events = null,
                n.stores = null,
                n.memoCache != null && (n.memoCache.index = 0)
            }
            p.H = Ao,
            n = t(e, a)
        } while (da);
        return n
    }
    function I0() {
        var l = p.H
          , t = l.useState()[0];
        return t = typeof t.then == "function" ? Ia(t) : t,
        l = l.useState()[0],
        (ml !== null ? ml.memoizedState : null) !== l && (Z.flags |= 1024),
        t
    }
    function Jc() {
        var l = ln !== 0;
        return ln = 0,
        l
    }
    function kc(l, t, e) {
        t.updateQueue = l.updateQueue,
        t.flags &= -2053,
        l.lanes &= ~e
    }
    function Wc(l) {
        if (Pu) {
            for (l = l.memoizedState; l !== null; ) {
                var t = l.queue;
                t !== null && (t.pending = null),
                l = l.next
            }
            Pu = !1
        }
        Zt = 0,
        Cl = ml = Z = null,
        da = !1,
        Fa = ln = 0,
        ma = null
    }
    function Wl() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return Cl === null ? Z.memoizedState = Cl = l : Cl = Cl.next = l,
        Cl
    }
    function Ol() {
        if (ml === null) {
            var l = Z.alternate;
            l = l !== null ? l.memoizedState : null
        } else
            l = ml.next;
        var t = Cl === null ? Z.memoizedState : Cl.next;
        if (t !== null)
            Cl = t,
            ml = l;
        else {
            if (l === null)
                throw Z.alternate === null ? Error(m(467)) : Error(m(310));
            ml = l,
            l = {
                memoizedState: ml.memoizedState,
                baseState: ml.baseState,
                baseQueue: ml.baseQueue,
                queue: ml.queue,
                next: null
            },
            Cl === null ? Z.memoizedState = Cl = l : Cl = Cl.next = l
        }
        return Cl
    }
    function tn() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Ia(l) {
        var t = Fa;
        return Fa += 1,
        ma === null && (ma = []),
        l = Ds(ma, l, t),
        t = Z,
        (Cl === null ? t.memoizedState : Cl.next) === null && (t = t.alternate,
        p.H = t === null || t.memoizedState === null ? To : ii),
        l
    }
    function en(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function")
                return Ia(l);
            if (l.$$typeof === jl)
                return Zl(l)
        }
        throw Error(m(438, String(l)))
    }
    function $c(l) {
        var t = null
          , e = Z.updateQueue;
        if (e !== null && (t = e.memoCache),
        t == null) {
            var a = Z.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (t = {
                data: a.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        e === null && (e = tn(),
        Z.updateQueue = e),
        e.memoCache = t,
        e = t.data[t.index],
        e === void 0)
            for (e = t.data[t.index] = Array(l),
            a = 0; a < l; a++)
                e[a] = Ut;
        return t.index++,
        e
    }
    function Vt(l, t) {
        return typeof t == "function" ? t(l) : t
    }
    function an(l) {
        var t = Ol();
        return Fc(t, ml, l)
    }
    function Fc(l, t, e) {
        var a = l.queue;
        if (a === null)
            throw Error(m(311));
        a.lastRenderedReducer = e;
        var u = l.baseQueue
          , n = a.pending;
        if (n !== null) {
            if (u !== null) {
                var c = u.next;
                u.next = n.next,
                n.next = c
            }
            t.baseQueue = u = n,
            a.pending = null
        }
        if (n = l.baseState,
        u === null)
            l.memoizedState = n;
        else {
            t = u.next;
            var i = c = null
              , s = null
              , y = t
              , b = !1;
            do {
                var S = y.lane & -536870913;
                if (S !== y.lane ? (F & S) === S : (Zt & S) === S) {
                    var v = y.revertLane;
                    if (v === 0)
                        s !== null && (s = s.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: y.action,
                            hasEagerState: y.hasEagerState,
                            eagerState: y.eagerState,
                            next: null
                        }),
                        S === ia && (b = !0);
                    else if ((Zt & v) === v) {
                        y = y.next,
                        v === ia && (b = !0);
                        continue
                    } else
                        S = {
                            lane: 0,
                            revertLane: y.revertLane,
                            gesture: null,
                            action: y.action,
                            hasEagerState: y.hasEagerState,
                            eagerState: y.eagerState,
                            next: null
                        },
                        s === null ? (i = s = S,
                        c = n) : s = s.next = S,
                        Z.lanes |= v,
                        me |= v;
                    S = y.action,
                    Ge && e(n, S),
                    n = y.hasEagerState ? y.eagerState : e(n, S)
                } else
                    v = {
                        lane: S,
                        revertLane: y.revertLane,
                        gesture: y.gesture,
                        action: y.action,
                        hasEagerState: y.hasEagerState,
                        eagerState: y.eagerState,
                        next: null
                    },
                    s === null ? (i = s = v,
                    c = n) : s = s.next = v,
                    Z.lanes |= S,
                    me |= S;
                y = y.next
            } while (y !== null && y !== t);
            if (s === null ? c = n : s.next = i,
            !ft(n, l.memoizedState) && (Ul = !0,
            b && (e = fa,
            e !== null)))
                throw e;
            l.memoizedState = n,
            l.baseState = c,
            l.baseQueue = s,
            a.lastRenderedState = n
        }
        return u === null && (a.lanes = 0),
        [l.memoizedState, a.dispatch]
    }
    function Ic(l) {
        var t = Ol()
          , e = t.queue;
        if (e === null)
            throw Error(m(311));
        e.lastRenderedReducer = l;
        var a = e.dispatch
          , u = e.pending
          , n = t.memoizedState;
        if (u !== null) {
            e.pending = null;
            var c = u = u.next;
            do
                n = l(n, c.action),
                c = c.next;
            while (c !== u);
            ft(n, t.memoizedState) || (Ul = !0),
            t.memoizedState = n,
            t.baseQueue === null && (t.baseState = n),
            e.lastRenderedState = n
        }
        return [n, a]
    }
    function Zs(l, t, e) {
        var a = Z
          , u = Ol()
          , n = P;
        if (n) {
            if (e === void 0)
                throw Error(m(407));
            e = e()
        } else
            e = t();
        var c = !ft((ml || u).memoizedState, e);
        if (c && (u.memoizedState = e,
        Ul = !0),
        u = u.queue,
        ti(ws.bind(null, a, u, l), [l]),
        u.getSnapshot !== t || c || Cl !== null && Cl.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            ha(9, {
                destroy: void 0
            }, Ls.bind(null, a, u, e, t), null),
            vl === null)
                throw Error(m(349));
            n || (Zt & 127) !== 0 || Vs(a, t, e)
        }
        return e
    }
    function Vs(l, t, e) {
        l.flags |= 16384,
        l = {
            getSnapshot: t,
            value: e
        },
        t = Z.updateQueue,
        t === null ? (t = tn(),
        Z.updateQueue = t,
        t.stores = [l]) : (e = t.stores,
        e === null ? t.stores = [l] : e.push(l))
    }
    function Ls(l, t, e, a) {
        t.value = e,
        t.getSnapshot = a,
        Ks(t) && Js(l)
    }
    function ws(l, t, e) {
        return e(function() {
            Ks(t) && Js(l)
        })
    }
    function Ks(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var e = t();
            return !ft(l, e)
        } catch {
            return !0
        }
    }
    function Js(l) {
        var t = Oe(l, 2);
        t !== null && et(t, l, 2)
    }
    function Pc(l) {
        var t = Wl();
        if (typeof l == "function") {
            var e = l;
            if (l = e(),
            Ge) {
                Pt(!0);
                try {
                    e()
                } finally {
                    Pt(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = l,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Vt,
            lastRenderedState: l
        },
        t
    }
    function ks(l, t, e, a) {
        return l.baseState = e,
        Fc(l, ml, typeof a == "function" ? a : Vt)
    }
    function P0(l, t, e, a, u) {
        if (cn(l))
            throw Error(m(485));
        if (l = t.action,
        l !== null) {
            var n = {
                payload: u,
                action: l,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(c) {
                    n.listeners.push(c)
                }
            };
            p.T !== null ? e(!0) : n.isTransition = !1,
            a(n),
            e = t.pending,
            e === null ? (n.next = t.pending = n,
            Ws(t, n)) : (n.next = e.next,
            t.pending = e.next = n)
        }
    }
    function Ws(l, t) {
        var e = t.action
          , a = t.payload
          , u = l.state;
        if (t.isTransition) {
            var n = p.T
              , c = {};
            p.T = c;
            try {
                var i = e(u, a)
                  , s = p.S;
                s !== null && s(c, i),
                $s(l, t, i)
            } catch (y) {
                li(l, t, y)
            } finally {
                n !== null && c.types !== null && (n.types = c.types),
                p.T = n
            }
        } else
            try {
                n = e(u, a),
                $s(l, t, n)
            } catch (y) {
                li(l, t, y)
            }
    }
    function $s(l, t, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
            Fs(l, t, a)
        }, function(a) {
            return li(l, t, a)
        }) : Fs(l, t, e)
    }
    function Fs(l, t, e) {
        t.status = "fulfilled",
        t.value = e,
        Is(t),
        l.state = e,
        t = l.pending,
        t !== null && (e = t.next,
        e === t ? l.pending = null : (e = e.next,
        t.next = e,
        Ws(l, e)))
    }
    function li(l, t, e) {
        var a = l.pending;
        if (l.pending = null,
        a !== null) {
            a = a.next;
            do
                t.status = "rejected",
                t.reason = e,
                Is(t),
                t = t.next;
            while (t !== a)
        }
        l.action = null
    }
    function Is(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++)
            (0,
            l[t])()
    }
    function Ps(l, t) {
        return t
    }
    function lo(l, t) {
        if (P) {
            var e = vl.formState;
            if (e !== null) {
                l: {
                    var a = Z;
                    if (P) {
                        if (pl) {
                            t: {
                                for (var u = pl, n = St; u.nodeType !== 8; ) {
                                    if (!n) {
                                        u = null;
                                        break t
                                    }
                                    if (u = Tt(u.nextSibling),
                                    u === null) {
                                        u = null;
                                        break t
                                    }
                                }
                                n = u.data,
                                u = n === "F!" || n === "F" ? u : null
                            }
                            if (u) {
                                pl = Tt(u.nextSibling),
                                a = u.data === "F!";
                                break l
                            }
                        }
                        ue(a)
                    }
                    a = !1
                }
                a && (t = e[0])
            }
        }
        return e = Wl(),
        e.memoizedState = e.baseState = t,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ps,
            lastRenderedState: t
        },
        e.queue = a,
        e = xo.bind(null, Z, a),
        a.dispatch = e,
        a = Pc(!1),
        n = ci.bind(null, Z, !1, a.queue),
        a = Wl(),
        u = {
            state: t,
            dispatch: null,
            action: l,
            pending: null
        },
        a.queue = u,
        e = P0.bind(null, Z, u, n, e),
        u.dispatch = e,
        a.memoizedState = l,
        [t, e, !1]
    }
    function to(l) {
        var t = Ol();
        return eo(t, ml, l)
    }
    function eo(l, t, e) {
        if (t = Fc(l, t, Ps)[0],
        l = an(Vt)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var a = Ia(t)
            } catch (c) {
                throw c === sa ? Ju : c
            }
        else
            a = t;
        t = Ol();
        var u = t.queue
          , n = u.dispatch;
        return e !== t.memoizedState && (Z.flags |= 2048,
        ha(9, {
            destroy: void 0
        }, lm.bind(null, u, e), null)),
        [a, n, l]
    }
    function lm(l, t) {
        l.action = t
    }
    function ao(l) {
        var t = Ol()
          , e = ml;
        if (e !== null)
            return eo(t, e, l);
        Ol(),
        t = t.memoizedState,
        e = Ol();
        var a = e.queue.dispatch;
        return e.memoizedState = l,
        [t, a, !1]
    }
    function ha(l, t, e, a) {
        return l = {
            tag: l,
            create: e,
            deps: a,
            inst: t,
            next: null
        },
        t = Z.updateQueue,
        t === null && (t = tn(),
        Z.updateQueue = t),
        e = t.lastEffect,
        e === null ? t.lastEffect = l.next = l : (a = e.next,
        e.next = l,
        l.next = a,
        t.lastEffect = l),
        l
    }
    function uo() {
        return Ol().memoizedState
    }
    function un(l, t, e, a) {
        var u = Wl();
        Z.flags |= l,
        u.memoizedState = ha(1 | t, {
            destroy: void 0
        }, e, a === void 0 ? null : a)
    }
    function nn(l, t, e, a) {
        var u = Ol();
        a = a === void 0 ? null : a;
        var n = u.memoizedState.inst;
        ml !== null && a !== null && wc(a, ml.memoizedState.deps) ? u.memoizedState = ha(t, n, e, a) : (Z.flags |= l,
        u.memoizedState = ha(1 | t, n, e, a))
    }
    function no(l, t) {
        un(8390656, 8, l, t)
    }
    function ti(l, t) {
        nn(2048, 8, l, t)
    }
    function tm(l) {
        Z.flags |= 4;
        var t = Z.updateQueue;
        if (t === null)
            t = tn(),
            Z.updateQueue = t,
            t.events = [l];
        else {
            var e = t.events;
            e === null ? t.events = [l] : e.push(l)
        }
    }
    function co(l) {
        var t = Ol().memoizedState;
        return tm({
            ref: t,
            nextImpl: l
        }),
        function() {
            if ((ul & 2) !== 0)
                throw Error(m(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function io(l, t) {
        return nn(4, 2, l, t)
    }
    function fo(l, t) {
        return nn(4, 4, l, t)
    }
    function so(l, t) {
        if (typeof t == "function") {
            l = l();
            var e = t(l);
            return function() {
                typeof e == "function" ? e() : t(null)
            }
        }
        if (t != null)
            return l = l(),
            t.current = l,
            function() {
                t.current = null
            }
    }
    function oo(l, t, e) {
        e = e != null ? e.concat([l]) : null,
        nn(4, 4, so.bind(null, t, l), e)
    }
    function ei() {}
    function ro(l, t) {
        var e = Ol();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        return t !== null && wc(t, a[1]) ? a[0] : (e.memoizedState = [l, t],
        l)
    }
    function mo(l, t) {
        var e = Ol();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        if (t !== null && wc(t, a[1]))
            return a[0];
        if (a = l(),
        Ge) {
            Pt(!0);
            try {
                l()
            } finally {
                Pt(!1)
            }
        }
        return e.memoizedState = [a, t],
        a
    }
    function ai(l, t, e) {
        return e === void 0 || (Zt & 1073741824) !== 0 && (F & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e,
        l = hr(),
        Z.lanes |= l,
        me |= l,
        e)
    }
    function ho(l, t, e, a) {
        return ft(e, t) ? e : ra.current !== null ? (l = ai(l, e, a),
        ft(l, t) || (Ul = !0),
        l) : (Zt & 42) === 0 || (Zt & 1073741824) !== 0 && (F & 261930) === 0 ? (Ul = !0,
        l.memoizedState = e) : (l = hr(),
        Z.lanes |= l,
        me |= l,
        t)
    }
    function yo(l, t, e, a, u) {
        var n = j.p;
        j.p = n !== 0 && 8 > n ? n : 8;
        var c = p.T
          , i = {};
        p.T = i,
        ci(l, !1, t, e);
        try {
            var s = u()
              , y = p.S;
            if (y !== null && y(i, s),
            s !== null && typeof s == "object" && typeof s.then == "function") {
                var b = $0(s, a);
                Pa(l, t, b, ht(l))
            } else
                Pa(l, t, a, ht(l))
        } catch (S) {
            Pa(l, t, {
                then: function() {},
                status: "rejected",
                reason: S
            }, ht())
        } finally {
            j.p = n,
            c !== null && i.types !== null && (c.types = i.types),
            p.T = c
        }
    }
    function em() {}
    function ui(l, t, e, a) {
        if (l.tag !== 5)
            throw Error(m(476));
        var u = vo(l).queue;
        yo(l, u, t, G, e === null ? em : function() {
            return go(l),
            e(a)
        }
        )
    }
    function vo(l) {
        var t = l.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: G,
            baseState: G,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Vt,
                lastRenderedState: G
            },
            next: null
        };
        var e = {};
        return t.next = {
            memoizedState: e,
            baseState: e,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Vt,
                lastRenderedState: e
            },
            next: null
        },
        l.memoizedState = t,
        l = l.alternate,
        l !== null && (l.memoizedState = t),
        t
    }
    function go(l) {
        var t = vo(l);
        t.next === null && (t = l.alternate.memoizedState),
        Pa(l, t.next.queue, {}, ht())
    }
    function ni() {
        return Zl(vu)
    }
    function bo() {
        return Ol().memoizedState
    }
    function po() {
        return Ol().memoizedState
    }
    function am(l) {
        for (var t = l.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var e = ht();
                l = ie(e);
                var a = fe(t, l, e);
                a !== null && (et(a, t, e),
                ka(a, t, e)),
                t = {
                    cache: Rc()
                },
                l.payload = t;
                return
            }
            t = t.return
        }
    }
    function um(l, t, e) {
        var a = ht();
        e = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        cn(l) ? So(t, e) : (e = Tc(l, t, e, a),
        e !== null && (et(e, l, a),
        zo(e, t, a)))
    }
    function xo(l, t, e) {
        var a = ht();
        Pa(l, t, e, a)
    }
    function Pa(l, t, e, a) {
        var u = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (cn(l))
            So(t, u);
        else {
            var n = l.alternate;
            if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer,
            n !== null))
                try {
                    var c = t.lastRenderedState
                      , i = n(c, e);
                    if (u.hasEagerState = !0,
                    u.eagerState = i,
                    ft(i, c))
                        return Xu(l, t, u, 0),
                        vl === null && Gu(),
                        !1
                } catch {} finally {}
            if (e = Tc(l, t, u, a),
            e !== null)
                return et(e, l, a),
                zo(e, t, a),
                !0
        }
        return !1
    }
    function ci(l, t, e, a) {
        if (a = {
            lane: 2,
            revertLane: Yi(),
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        cn(l)) {
            if (t)
                throw Error(m(479))
        } else
            t = Tc(l, e, a, 2),
            t !== null && et(t, l, 2)
    }
    function cn(l) {
        var t = l.alternate;
        return l === Z || t !== null && t === Z
    }
    function So(l, t) {
        da = Pu = !0;
        var e = l.pending;
        e === null ? t.next = t : (t.next = e.next,
        e.next = t),
        l.pending = t
    }
    function zo(l, t, e) {
        if ((e & 4194048) !== 0) {
            var a = t.lanes;
            a &= l.pendingLanes,
            e |= a,
            t.lanes = e,
            Nf(l, e)
        }
    }
    var lu = {
        readContext: Zl,
        use: en,
        useCallback: El,
        useContext: El,
        useEffect: El,
        useImperativeHandle: El,
        useLayoutEffect: El,
        useInsertionEffect: El,
        useMemo: El,
        useReducer: El,
        useRef: El,
        useState: El,
        useDebugValue: El,
        useDeferredValue: El,
        useTransition: El,
        useSyncExternalStore: El,
        useId: El,
        useHostTransitionStatus: El,
        useFormState: El,
        useActionState: El,
        useOptimistic: El,
        useMemoCache: El,
        useCacheRefresh: El
    };
    lu.useEffectEvent = El;
    var To = {
        readContext: Zl,
        use: en,
        useCallback: function(l, t) {
            return Wl().memoizedState = [l, t === void 0 ? null : t],
            l
        },
        useContext: Zl,
        useEffect: no,
        useImperativeHandle: function(l, t, e) {
            e = e != null ? e.concat([l]) : null,
            un(4194308, 4, so.bind(null, t, l), e)
        },
        useLayoutEffect: function(l, t) {
            return un(4194308, 4, l, t)
        },
        useInsertionEffect: function(l, t) {
            un(4, 2, l, t)
        },
        useMemo: function(l, t) {
            var e = Wl();
            t = t === void 0 ? null : t;
            var a = l();
            if (Ge) {
                Pt(!0);
                try {
                    l()
                } finally {
                    Pt(!1)
                }
            }
            return e.memoizedState = [a, t],
            a
        },
        useReducer: function(l, t, e) {
            var a = Wl();
            if (e !== void 0) {
                var u = e(t);
                if (Ge) {
                    Pt(!0);
                    try {
                        e(t)
                    } finally {
                        Pt(!1)
                    }
                }
            } else
                u = t;
            return a.memoizedState = a.baseState = u,
            l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: l,
                lastRenderedState: u
            },
            a.queue = l,
            l = l.dispatch = um.bind(null, Z, l),
            [a.memoizedState, l]
        },
        useRef: function(l) {
            var t = Wl();
            return l = {
                current: l
            },
            t.memoizedState = l
        },
        useState: function(l) {
            l = Pc(l);
            var t = l.queue
              , e = xo.bind(null, Z, t);
            return t.dispatch = e,
            [l.memoizedState, e]
        },
        useDebugValue: ei,
        useDeferredValue: function(l, t) {
            var e = Wl();
            return ai(e, l, t)
        },
        useTransition: function() {
            var l = Pc(!1);
            return l = yo.bind(null, Z, l.queue, !0, !1),
            Wl().memoizedState = l,
            [!1, l]
        },
        useSyncExternalStore: function(l, t, e) {
            var a = Z
              , u = Wl();
            if (P) {
                if (e === void 0)
                    throw Error(m(407));
                e = e()
            } else {
                if (e = t(),
                vl === null)
                    throw Error(m(349));
                (F & 127) !== 0 || Vs(a, t, e)
            }
            u.memoizedState = e;
            var n = {
                value: e,
                getSnapshot: t
            };
            return u.queue = n,
            no(ws.bind(null, a, n, l), [l]),
            a.flags |= 2048,
            ha(9, {
                destroy: void 0
            }, Ls.bind(null, a, n, e, t), null),
            e
        },
        useId: function() {
            var l = Wl()
              , t = vl.identifierPrefix;
            if (P) {
                var e = Ot
                  , a = Mt;
                e = (a & ~(1 << 32 - it(a) - 1)).toString(32) + e,
                t = "_" + t + "R_" + e,
                e = ln++,
                0 < e && (t += "H" + e.toString(32)),
                t += "_"
            } else
                e = F0++,
                t = "_" + t + "r_" + e.toString(32) + "_";
            return l.memoizedState = t
        },
        useHostTransitionStatus: ni,
        useFormState: lo,
        useActionState: lo,
        useOptimistic: function(l) {
            var t = Wl();
            t.memoizedState = t.baseState = l;
            var e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = e,
            t = ci.bind(null, Z, !0, e),
            e.dispatch = t,
            [l, t]
        },
        useMemoCache: $c,
        useCacheRefresh: function() {
            return Wl().memoizedState = am.bind(null, Z)
        },
        useEffectEvent: function(l) {
            var t = Wl()
              , e = {
                impl: l
            };
            return t.memoizedState = e,
            function() {
                if ((ul & 2) !== 0)
                    throw Error(m(440));
                return e.impl.apply(void 0, arguments)
            }
        }
    }
      , ii = {
        readContext: Zl,
        use: en,
        useCallback: ro,
        useContext: Zl,
        useEffect: ti,
        useImperativeHandle: oo,
        useInsertionEffect: io,
        useLayoutEffect: fo,
        useMemo: mo,
        useReducer: an,
        useRef: uo,
        useState: function() {
            return an(Vt)
        },
        useDebugValue: ei,
        useDeferredValue: function(l, t) {
            var e = Ol();
            return ho(e, ml.memoizedState, l, t)
        },
        useTransition: function() {
            var l = an(Vt)[0]
              , t = Ol().memoizedState;
            return [typeof l == "boolean" ? l : Ia(l), t]
        },
        useSyncExternalStore: Zs,
        useId: bo,
        useHostTransitionStatus: ni,
        useFormState: to,
        useActionState: to,
        useOptimistic: function(l, t) {
            var e = Ol();
            return ks(e, ml, l, t)
        },
        useMemoCache: $c,
        useCacheRefresh: po
    };
    ii.useEffectEvent = co;
    var Ao = {
        readContext: Zl,
        use: en,
        useCallback: ro,
        useContext: Zl,
        useEffect: ti,
        useImperativeHandle: oo,
        useInsertionEffect: io,
        useLayoutEffect: fo,
        useMemo: mo,
        useReducer: Ic,
        useRef: uo,
        useState: function() {
            return Ic(Vt)
        },
        useDebugValue: ei,
        useDeferredValue: function(l, t) {
            var e = Ol();
            return ml === null ? ai(e, l, t) : ho(e, ml.memoizedState, l, t)
        },
        useTransition: function() {
            var l = Ic(Vt)[0]
              , t = Ol().memoizedState;
            return [typeof l == "boolean" ? l : Ia(l), t]
        },
        useSyncExternalStore: Zs,
        useId: bo,
        useHostTransitionStatus: ni,
        useFormState: ao,
        useActionState: ao,
        useOptimistic: function(l, t) {
            var e = Ol();
            return ml !== null ? ks(e, ml, l, t) : (e.baseState = l,
            [l, e.queue.dispatch])
        },
        useMemoCache: $c,
        useCacheRefresh: po
    };
    Ao.useEffectEvent = co;
    function fi(l, t, e, a) {
        t = l.memoizedState,
        e = e(a, t),
        e = e == null ? t : D({}, t, e),
        l.memoizedState = e,
        l.lanes === 0 && (l.updateQueue.baseState = e)
    }
    var si = {
        enqueueSetState: function(l, t, e) {
            l = l._reactInternals;
            var a = ht()
              , u = ie(a);
            u.payload = t,
            e != null && (u.callback = e),
            t = fe(l, u, a),
            t !== null && (et(t, l, a),
            ka(t, l, a))
        },
        enqueueReplaceState: function(l, t, e) {
            l = l._reactInternals;
            var a = ht()
              , u = ie(a);
            u.tag = 1,
            u.payload = t,
            e != null && (u.callback = e),
            t = fe(l, u, a),
            t !== null && (et(t, l, a),
            ka(t, l, a))
        },
        enqueueForceUpdate: function(l, t) {
            l = l._reactInternals;
            var e = ht()
              , a = ie(e);
            a.tag = 2,
            t != null && (a.callback = t),
            t = fe(l, a, e),
            t !== null && (et(t, l, e),
            ka(t, l, e))
        }
    };
    function Eo(l, t, e, a, u, n, c) {
        return l = l.stateNode,
        typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, c) : t.prototype && t.prototype.isPureReactComponent ? !Xa(e, a) || !Xa(u, n) : !0
    }
    function No(l, t, e, a) {
        l = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a),
        t.state !== l && si.enqueueReplaceState(t, t.state, null)
    }
    function Xe(l, t) {
        var e = t;
        if ("ref" in t) {
            e = {};
            for (var a in t)
                a !== "ref" && (e[a] = t[a])
        }
        if (l = l.defaultProps) {
            e === t && (e = D({}, e));
            for (var u in l)
                e[u] === void 0 && (e[u] = l[u])
        }
        return e
    }
    function jo(l) {
        Yu(l)
    }
    function _o(l) {
        console.error(l)
    }
    function Mo(l) {
        Yu(l)
    }
    function fn(l, t) {
        try {
            var e = l.onUncaughtError;
            e(t.value, {
                componentStack: t.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function Oo(l, t, e) {
        try {
            var a = l.onCaughtError;
            a(e.value, {
                componentStack: e.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }
    function oi(l, t, e) {
        return e = ie(e),
        e.tag = 3,
        e.payload = {
            element: null
        },
        e.callback = function() {
            fn(l, t)
        }
        ,
        e
    }
    function Do(l) {
        return l = ie(l),
        l.tag = 3,
        l
    }
    function Co(l, t, e, a) {
        var u = e.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var n = a.value;
            l.payload = function() {
                return u(n)
            }
            ,
            l.callback = function() {
                Oo(t, e, a)
            }
        }
        var c = e.stateNode;
        c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
            Oo(t, e, a),
            typeof u != "function" && (he === null ? he = new Set([this]) : he.add(this));
            var i = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: i !== null ? i : ""
            })
        }
        )
    }
    function nm(l, t, e, a, u) {
        if (e.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = e.alternate,
            t !== null && ca(t, e, u, !0),
            e = ot.current,
            e !== null) {
                switch (e.tag) {
                case 31:
                case 13:
                    return zt === null ? xn() : e.alternate === null && Nl === 0 && (Nl = 3),
                    e.flags &= -257,
                    e.flags |= 65536,
                    e.lanes = u,
                    a === ku ? e.flags |= 16384 : (t = e.updateQueue,
                    t === null ? e.updateQueue = new Set([a]) : t.add(a),
                    Hi(l, a, u)),
                    !1;
                case 22:
                    return e.flags |= 65536,
                    a === ku ? e.flags |= 16384 : (t = e.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    e.updateQueue = t) : (e = t.retryQueue,
                    e === null ? t.retryQueue = new Set([a]) : e.add(a)),
                    Hi(l, a, u)),
                    !1
                }
                throw Error(m(435, e.tag))
            }
            return Hi(l, a, u),
            xn(),
            !1
        }
        if (P)
            return t = ot.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = u,
            a !== Mc && (l = Error(m(422), {
                cause: a
            }),
            Va(bt(l, e)))) : (a !== Mc && (t = Error(m(423), {
                cause: a
            }),
            Va(bt(t, e))),
            l = l.current.alternate,
            l.flags |= 65536,
            u &= -u,
            l.lanes |= u,
            a = bt(a, e),
            u = oi(l.stateNode, a, u),
            Xc(l, u),
            Nl !== 4 && (Nl = 2)),
            !1;
        var n = Error(m(520), {
            cause: a
        });
        if (n = bt(n, e),
        fu === null ? fu = [n] : fu.push(n),
        Nl !== 4 && (Nl = 2),
        t === null)
            return !0;
        a = bt(a, e),
        e = t;
        do {
            switch (e.tag) {
            case 3:
                return e.flags |= 65536,
                l = u & -u,
                e.lanes |= l,
                l = oi(e.stateNode, a, l),
                Xc(e, l),
                !1;
            case 1:
                if (t = e.type,
                n = e.stateNode,
                (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (he === null || !he.has(n))))
                    return e.flags |= 65536,
                    u &= -u,
                    e.lanes |= u,
                    u = Do(u),
                    Co(u, l, e, a),
                    Xc(e, u),
                    !1
            }
            e = e.return
        } while (e !== null);
        return !1
    }
    var ri = Error(m(461))
      , Ul = !1;
    function Vl(l, t, e, a) {
        t.child = l === null ? Hs(t, null, e, a) : Ye(t, l.child, e, a)
    }
    function Uo(l, t, e, a, u) {
        e = e.render;
        var n = t.ref;
        if ("ref" in a) {
            var c = {};
            for (var i in a)
                i !== "ref" && (c[i] = a[i])
        } else
            c = a;
        return Re(t),
        a = Kc(l, t, e, c, n, u),
        i = Jc(),
        l !== null && !Ul ? (kc(l, t, u),
        Lt(l, t, u)) : (P && i && jc(t),
        t.flags |= 1,
        Vl(l, t, a, u),
        t.child)
    }
    function Ro(l, t, e, a, u) {
        if (l === null) {
            var n = e.type;
            return typeof n == "function" && !Ac(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15,
            t.type = n,
            Ho(l, t, n, a, u)) : (l = Zu(e.type, null, a, t, t.mode, u),
            l.ref = t.ref,
            l.return = t,
            t.child = l)
        }
        if (n = l.child,
        !pi(l, u)) {
            var c = n.memoizedProps;
            if (e = e.compare,
            e = e !== null ? e : Xa,
            e(c, a) && l.ref === t.ref)
                return Lt(l, t, u)
        }
        return t.flags |= 1,
        l = Yt(n, a),
        l.ref = t.ref,
        l.return = t,
        t.child = l
    }
    function Ho(l, t, e, a, u) {
        if (l !== null) {
            var n = l.memoizedProps;
            if (Xa(n, a) && l.ref === t.ref)
                if (Ul = !1,
                t.pendingProps = a = n,
                pi(l, u))
                    (l.flags & 131072) !== 0 && (Ul = !0);
                else
                    return t.lanes = l.lanes,
                    Lt(l, t, u)
        }
        return di(l, t, e, a, u)
    }
    function Bo(l, t, e, a) {
        var u = a.children
          , n = l !== null ? l.memoizedState : null;
        if (l === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (n = n !== null ? n.baseLanes | e : e,
                l !== null) {
                    for (a = t.child = l.child,
                    u = 0; a !== null; )
                        u = u | a.lanes | a.childLanes,
                        a = a.sibling;
                    a = u & ~n
                } else
                    a = 0,
                    t.child = null;
                return qo(l, t, n, e, a)
            }
            if ((e & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                l !== null && Ku(t, n !== null ? n.cachePool : null),
                n !== null ? Ys(t, n) : Zc(),
                Gs(t);
            else
                return a = t.lanes = 536870912,
                qo(l, t, n !== null ? n.baseLanes | e : e, e, a)
        } else
            n !== null ? (Ku(t, n.cachePool),
            Ys(t, n),
            oe(),
            t.memoizedState = null) : (l !== null && Ku(t, null),
            Zc(),
            oe());
        return Vl(l, t, u, e),
        t.child
    }
    function tu(l, t) {
        return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function qo(l, t, e, a, u) {
        var n = Bc();
        return n = n === null ? null : {
            parent: Dl._currentValue,
            pool: n
        },
        t.memoizedState = {
            baseLanes: e,
            cachePool: n
        },
        l !== null && Ku(t, null),
        Zc(),
        Gs(t),
        l !== null && ca(l, t, a, !0),
        t.childLanes = u,
        null
    }
    function sn(l, t) {
        return t = rn({
            mode: t.mode,
            children: t.children
        }, l.mode),
        t.ref = l.ref,
        l.child = t,
        t.return = l,
        t
    }
    function Yo(l, t, e) {
        return Ye(t, l.child, null, e),
        l = sn(t, t.pendingProps),
        l.flags |= 2,
        rt(t),
        t.memoizedState = null,
        l
    }
    function cm(l, t, e) {
        var a = t.pendingProps
          , u = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        l === null) {
            if (P) {
                if (a.mode === "hidden")
                    return l = sn(t, a),
                    t.lanes = 536870912,
                    tu(null, l);
                if (Lc(t),
                (l = pl) ? (l = $r(l, St),
                l = l !== null && l.data === "&" ? l : null,
                l !== null && (t.memoizedState = {
                    dehydrated: l,
                    treeContext: ee !== null ? {
                        id: Mt,
                        overflow: Ot
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                e = xs(l),
                e.return = t,
                t.child = e,
                Ql = t,
                pl = null)) : l = null,
                l === null)
                    throw ue(t);
                return t.lanes = 536870912,
                null
            }
            return sn(t, a)
        }
        var n = l.memoizedState;
        if (n !== null) {
            var c = n.dehydrated;
            if (Lc(t),
            u)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = Yo(l, t, e);
                else if (t.memoizedState !== null)
                    t.child = l.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(m(558));
            else if (Ul || ca(l, t, e, !1),
            u = (e & l.childLanes) !== 0,
            Ul || u) {
                if (a = vl,
                a !== null && (c = jf(a, e),
                c !== 0 && c !== n.retryLane))
                    throw n.retryLane = c,
                    Oe(l, c),
                    et(a, l, c),
                    ri;
                xn(),
                t = Yo(l, t, e)
            } else
                l = n.treeContext,
                pl = Tt(c.nextSibling),
                Ql = t,
                P = !0,
                ae = null,
                St = !1,
                l !== null && Ts(t, l),
                t = sn(t, a),
                t.flags |= 4096;
            return t
        }
        return l = Yt(l.child, {
            mode: a.mode,
            children: a.children
        }),
        l.ref = t.ref,
        t.child = l,
        l.return = t,
        l
    }
    function on(l, t) {
        var e = t.ref;
        if (e === null)
            l !== null && l.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof e != "function" && typeof e != "object")
                throw Error(m(284));
            (l === null || l.ref !== e) && (t.flags |= 4194816)
        }
    }
    function di(l, t, e, a, u) {
        return Re(t),
        e = Kc(l, t, e, a, void 0, u),
        a = Jc(),
        l !== null && !Ul ? (kc(l, t, u),
        Lt(l, t, u)) : (P && a && jc(t),
        t.flags |= 1,
        Vl(l, t, e, u),
        t.child)
    }
    function Go(l, t, e, a, u, n) {
        return Re(t),
        t.updateQueue = null,
        e = Qs(t, a, e, u),
        Xs(l),
        a = Jc(),
        l !== null && !Ul ? (kc(l, t, n),
        Lt(l, t, n)) : (P && a && jc(t),
        t.flags |= 1,
        Vl(l, t, e, n),
        t.child)
    }
    function Xo(l, t, e, a, u) {
        if (Re(t),
        t.stateNode === null) {
            var n = ea
              , c = e.contextType;
            typeof c == "object" && c !== null && (n = Zl(c)),
            n = new e(a,n),
            t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
            n.updater = si,
            t.stateNode = n,
            n._reactInternals = t,
            n = t.stateNode,
            n.props = a,
            n.state = t.memoizedState,
            n.refs = {},
            Yc(t),
            c = e.contextType,
            n.context = typeof c == "object" && c !== null ? Zl(c) : ea,
            n.state = t.memoizedState,
            c = e.getDerivedStateFromProps,
            typeof c == "function" && (fi(t, e, c, a),
            n.state = t.memoizedState),
            typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state,
            typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
            c !== n.state && si.enqueueReplaceState(n, n.state, null),
            $a(t, a, n, u),
            Wa(),
            n.state = t.memoizedState),
            typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            a = !0
        } else if (l === null) {
            n = t.stateNode;
            var i = t.memoizedProps
              , s = Xe(e, i);
            n.props = s;
            var y = n.context
              , b = e.contextType;
            c = ea,
            typeof b == "object" && b !== null && (c = Zl(b));
            var S = e.getDerivedStateFromProps;
            b = typeof S == "function" || typeof n.getSnapshotBeforeUpdate == "function",
            i = t.pendingProps !== i,
            b || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || y !== c) && No(t, n, a, c),
            ce = !1;
            var v = t.memoizedState;
            n.state = v,
            $a(t, a, n, u),
            Wa(),
            y = t.memoizedState,
            i || v !== y || ce ? (typeof S == "function" && (fi(t, e, S, a),
            y = t.memoizedState),
            (s = ce || Eo(t, e, s, a, v, y, c)) ? (b || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()),
            typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = a,
            t.memoizedState = y),
            n.props = a,
            n.state = y,
            n.context = c,
            a = s) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            a = !1)
        } else {
            n = t.stateNode,
            Gc(l, t),
            c = t.memoizedProps,
            b = Xe(e, c),
            n.props = b,
            S = t.pendingProps,
            v = n.context,
            y = e.contextType,
            s = ea,
            typeof y == "object" && y !== null && (s = Zl(y)),
            i = e.getDerivedStateFromProps,
            (y = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== S || v !== s) && No(t, n, a, s),
            ce = !1,
            v = t.memoizedState,
            n.state = v,
            $a(t, a, n, u),
            Wa();
            var g = t.memoizedState;
            c !== S || v !== g || ce || l !== null && l.dependencies !== null && Lu(l.dependencies) ? (typeof i == "function" && (fi(t, e, i, a),
            g = t.memoizedState),
            (b = ce || Eo(t, e, b, a, v, g, s) || l !== null && l.dependencies !== null && Lu(l.dependencies)) ? (y || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, g, s),
            typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, g, s)),
            typeof n.componentDidUpdate == "function" && (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && v === l.memoizedState || (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024),
            t.memoizedProps = a,
            t.memoizedState = g),
            n.props = a,
            n.state = g,
            n.context = s,
            a = b) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && v === l.memoizedState || (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024),
            a = !1)
        }
        return n = a,
        on(l, t),
        a = (t.flags & 128) !== 0,
        n || a ? (n = t.stateNode,
        e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(),
        t.flags |= 1,
        l !== null && a ? (t.child = Ye(t, l.child, null, u),
        t.child = Ye(t, null, e, u)) : Vl(l, t, e, u),
        t.memoizedState = n.state,
        l = t.child) : l = Lt(l, t, u),
        l
    }
    function Qo(l, t, e, a) {
        return Ce(),
        t.flags |= 256,
        Vl(l, t, e, a),
        t.child
    }
    var mi = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function hi(l) {
        return {
            baseLanes: l,
            cachePool: Ms()
        }
    }
    function yi(l, t, e) {
        return l = l !== null ? l.childLanes & ~e : 0,
        t && (l |= mt),
        l
    }
    function Zo(l, t, e) {
        var a = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, c;
        if ((c = n) || (c = l !== null && l.memoizedState === null ? !1 : (Ml.current & 2) !== 0),
        c && (u = !0,
        t.flags &= -129),
        c = (t.flags & 32) !== 0,
        t.flags &= -33,
        l === null) {
            if (P) {
                if (u ? se(t) : oe(),
                (l = pl) ? (l = $r(l, St),
                l = l !== null && l.data !== "&" ? l : null,
                l !== null && (t.memoizedState = {
                    dehydrated: l,
                    treeContext: ee !== null ? {
                        id: Mt,
                        overflow: Ot
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                e = xs(l),
                e.return = t,
                t.child = e,
                Ql = t,
                pl = null)) : l = null,
                l === null)
                    throw ue(t);
                return Fi(l) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var i = a.children;
            return a = a.fallback,
            u ? (oe(),
            u = t.mode,
            i = rn({
                mode: "hidden",
                children: i
            }, u),
            a = De(a, u, e, null),
            i.return = t,
            a.return = t,
            i.sibling = a,
            t.child = i,
            a = t.child,
            a.memoizedState = hi(e),
            a.childLanes = yi(l, c, e),
            t.memoizedState = mi,
            tu(null, a)) : (se(t),
            vi(t, i))
        }
        var s = l.memoizedState;
        if (s !== null && (i = s.dehydrated,
        i !== null)) {
            if (n)
                t.flags & 256 ? (se(t),
                t.flags &= -257,
                t = gi(l, t, e)) : t.memoizedState !== null ? (oe(),
                t.child = l.child,
                t.flags |= 128,
                t = null) : (oe(),
                i = a.fallback,
                u = t.mode,
                a = rn({
                    mode: "visible",
                    children: a.children
                }, u),
                i = De(i, u, e, null),
                i.flags |= 2,
                a.return = t,
                i.return = t,
                a.sibling = i,
                t.child = a,
                Ye(t, l.child, null, e),
                a = t.child,
                a.memoizedState = hi(e),
                a.childLanes = yi(l, c, e),
                t.memoizedState = mi,
                t = tu(null, a));
            else if (se(t),
            Fi(i)) {
                if (c = i.nextSibling && i.nextSibling.dataset,
                c)
                    var y = c.dgst;
                c = y,
                a = Error(m(419)),
                a.stack = "",
                a.digest = c,
                Va({
                    value: a,
                    source: null,
                    stack: null
                }),
                t = gi(l, t, e)
            } else if (Ul || ca(l, t, e, !1),
            c = (e & l.childLanes) !== 0,
            Ul || c) {
                if (c = vl,
                c !== null && (a = jf(c, e),
                a !== 0 && a !== s.retryLane))
                    throw s.retryLane = a,
                    Oe(l, a),
                    et(c, l, a),
                    ri;
                $i(i) || xn(),
                t = gi(l, t, e)
            } else
                $i(i) ? (t.flags |= 192,
                t.child = l.child,
                t = null) : (l = s.treeContext,
                pl = Tt(i.nextSibling),
                Ql = t,
                P = !0,
                ae = null,
                St = !1,
                l !== null && Ts(t, l),
                t = vi(t, a.children),
                t.flags |= 4096);
            return t
        }
        return u ? (oe(),
        i = a.fallback,
        u = t.mode,
        s = l.child,
        y = s.sibling,
        a = Yt(s, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = s.subtreeFlags & 65011712,
        y !== null ? i = Yt(y, i) : (i = De(i, u, e, null),
        i.flags |= 2),
        i.return = t,
        a.return = t,
        a.sibling = i,
        t.child = a,
        tu(null, a),
        a = t.child,
        i = l.child.memoizedState,
        i === null ? i = hi(e) : (u = i.cachePool,
        u !== null ? (s = Dl._currentValue,
        u = u.parent !== s ? {
            parent: s,
            pool: s
        } : u) : u = Ms(),
        i = {
            baseLanes: i.baseLanes | e,
            cachePool: u
        }),
        a.memoizedState = i,
        a.childLanes = yi(l, c, e),
        t.memoizedState = mi,
        tu(l.child, a)) : (se(t),
        e = l.child,
        l = e.sibling,
        e = Yt(e, {
            mode: "visible",
            children: a.children
        }),
        e.return = t,
        e.sibling = null,
        l !== null && (c = t.deletions,
        c === null ? (t.deletions = [l],
        t.flags |= 16) : c.push(l)),
        t.child = e,
        t.memoizedState = null,
        e)
    }
    function vi(l, t) {
        return t = rn({
            mode: "visible",
            children: t
        }, l.mode),
        t.return = l,
        l.child = t
    }
    function rn(l, t) {
        return l = st(22, l, null, t),
        l.lanes = 0,
        l
    }
    function gi(l, t, e) {
        return Ye(t, l.child, null, e),
        l = vi(t, t.pendingProps.children),
        l.flags |= 2,
        t.memoizedState = null,
        l
    }
    function Vo(l, t, e) {
        l.lanes |= t;
        var a = l.alternate;
        a !== null && (a.lanes |= t),
        Cc(l.return, t, e)
    }
    function bi(l, t, e, a, u, n) {
        var c = l.memoizedState;
        c === null ? l.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: e,
            tailMode: u,
            treeForkCount: n
        } : (c.isBackwards = t,
        c.rendering = null,
        c.renderingStartTime = 0,
        c.last = a,
        c.tail = e,
        c.tailMode = u,
        c.treeForkCount = n)
    }
    function Lo(l, t, e) {
        var a = t.pendingProps
          , u = a.revealOrder
          , n = a.tail;
        a = a.children;
        var c = Ml.current
          , i = (c & 2) !== 0;
        if (i ? (c = c & 1 | 2,
        t.flags |= 128) : c &= 1,
        A(Ml, c),
        Vl(l, t, a, e),
        a = P ? Za : 0,
        !i && l !== null && (l.flags & 128) !== 0)
            l: for (l = t.child; l !== null; ) {
                if (l.tag === 13)
                    l.memoizedState !== null && Vo(l, e, t);
                else if (l.tag === 19)
                    Vo(l, e, t);
                else if (l.child !== null) {
                    l.child.return = l,
                    l = l.child;
                    continue
                }
                if (l === t)
                    break l;
                for (; l.sibling === null; ) {
                    if (l.return === null || l.return === t)
                        break l;
                    l = l.return
                }
                l.sibling.return = l.return,
                l = l.sibling
            }
        switch (u) {
        case "forwards":
            for (e = t.child,
            u = null; e !== null; )
                l = e.alternate,
                l !== null && Iu(l) === null && (u = e),
                e = e.sibling;
            e = u,
            e === null ? (u = t.child,
            t.child = null) : (u = e.sibling,
            e.sibling = null),
            bi(t, !1, u, e, n, a);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (e = null,
            u = t.child,
            t.child = null; u !== null; ) {
                if (l = u.alternate,
                l !== null && Iu(l) === null) {
                    t.child = u;
                    break
                }
                l = u.sibling,
                u.sibling = e,
                e = u,
                u = l
            }
            bi(t, !0, e, null, n, a);
            break;
        case "together":
            bi(t, !1, null, null, void 0, a);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Lt(l, t, e) {
        if (l !== null && (t.dependencies = l.dependencies),
        me |= t.lanes,
        (e & t.childLanes) === 0)
            if (l !== null) {
                if (ca(l, t, e, !1),
                (e & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (l !== null && t.child !== l.child)
            throw Error(m(153));
        if (t.child !== null) {
            for (l = t.child,
            e = Yt(l, l.pendingProps),
            t.child = e,
            e.return = t; l.sibling !== null; )
                l = l.sibling,
                e = e.sibling = Yt(l, l.pendingProps),
                e.return = t;
            e.sibling = null
        }
        return t.child
    }
    function pi(l, t) {
        return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies,
        !!(l !== null && Lu(l)))
    }
    function im(l, t, e) {
        switch (t.tag) {
        case 3:
            kl(t, t.stateNode.containerInfo),
            ne(t, Dl, l.memoizedState.cache),
            Ce();
            break;
        case 27:
        case 5:
            ja(t);
            break;
        case 4:
            kl(t, t.stateNode.containerInfo);
            break;
        case 10:
            ne(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                Lc(t),
                null;
            break;
        case 13:
            var a = t.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (se(t),
                t.flags |= 128,
                null) : (e & t.child.childLanes) !== 0 ? Zo(l, t, e) : (se(t),
                l = Lt(l, t, e),
                l !== null ? l.sibling : null);
            se(t);
            break;
        case 19:
            var u = (l.flags & 128) !== 0;
            if (a = (e & t.childLanes) !== 0,
            a || (ca(l, t, e, !1),
            a = (e & t.childLanes) !== 0),
            u) {
                if (a)
                    return Lo(l, t, e);
                t.flags |= 128
            }
            if (u = t.memoizedState,
            u !== null && (u.rendering = null,
            u.tail = null,
            u.lastEffect = null),
            A(Ml, Ml.current),
            a)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            Bo(l, t, e, t.pendingProps);
        case 24:
            ne(t, Dl, l.memoizedState.cache)
        }
        return Lt(l, t, e)
    }
    function wo(l, t, e) {
        if (l !== null)
            if (l.memoizedProps !== t.pendingProps)
                Ul = !0;
            else {
                if (!pi(l, e) && (t.flags & 128) === 0)
                    return Ul = !1,
                    im(l, t, e);
                Ul = (l.flags & 131072) !== 0
            }
        else
            Ul = !1,
            P && (t.flags & 1048576) !== 0 && zs(t, Za, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            l: {
                var a = t.pendingProps;
                if (l = Be(t.elementType),
                t.type = l,
                typeof l == "function")
                    Ac(l) ? (a = Xe(l, a),
                    t.tag = 1,
                    t = Xo(null, t, l, a, e)) : (t.tag = 0,
                    t = di(null, t, l, a, e));
                else {
                    if (l != null) {
                        var u = l.$$typeof;
                        if (u === tl) {
                            t.tag = 11,
                            t = Uo(null, t, l, a, e);
                            break l
                        } else if (u === K) {
                            t.tag = 14,
                            t = Ro(null, t, l, a, e);
                            break l
                        }
                    }
                    throw t = Et(l) || l,
                    Error(m(306, t, ""))
                }
            }
            return t;
        case 0:
            return di(l, t, t.type, t.pendingProps, e);
        case 1:
            return a = t.type,
            u = Xe(a, t.pendingProps),
            Xo(l, t, a, u, e);
        case 3:
            l: {
                if (kl(t, t.stateNode.containerInfo),
                l === null)
                    throw Error(m(387));
                a = t.pendingProps;
                var n = t.memoizedState;
                u = n.element,
                Gc(l, t),
                $a(t, a, null, e);
                var c = t.memoizedState;
                if (a = c.cache,
                ne(t, Dl, a),
                a !== n.cache && Uc(t, [Dl], e, !0),
                Wa(),
                a = c.element,
                n.isDehydrated)
                    if (n = {
                        element: a,
                        isDehydrated: !1,
                        cache: c.cache
                    },
                    t.updateQueue.baseState = n,
                    t.memoizedState = n,
                    t.flags & 256) {
                        t = Qo(l, t, a, e);
                        break l
                    } else if (a !== u) {
                        u = bt(Error(m(424)), t),
                        Va(u),
                        t = Qo(l, t, a, e);
                        break l
                    } else {
                        switch (l = t.stateNode.containerInfo,
                        l.nodeType) {
                        case 9:
                            l = l.body;
                            break;
                        default:
                            l = l.nodeName === "HTML" ? l.ownerDocument.body : l
                        }
                        for (pl = Tt(l.firstChild),
                        Ql = t,
                        P = !0,
                        ae = null,
                        St = !0,
                        e = Hs(t, null, a, e),
                        t.child = e; e; )
                            e.flags = e.flags & -3 | 4096,
                            e = e.sibling
                    }
                else {
                    if (Ce(),
                    a === u) {
                        t = Lt(l, t, e);
                        break l
                    }
                    Vl(l, t, a, e)
                }
                t = t.child
            }
            return t;
        case 26:
            return on(l, t),
            l === null ? (e = ed(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : P || (e = t.type,
            l = t.pendingProps,
            a = jn(L.current).createElement(e),
            a[Xl] = t,
            a[$l] = l,
            Ll(a, e, l),
            Yl(a),
            t.stateNode = a) : t.memoizedState = ed(t.type, l.memoizedProps, t.pendingProps, l.memoizedState),
            null;
        case 27:
            return ja(t),
            l === null && P && (a = t.stateNode = Pr(t.type, t.pendingProps, L.current),
            Ql = t,
            St = !0,
            u = pl,
            be(t.type) ? (Ii = u,
            pl = Tt(a.firstChild)) : pl = u),
            Vl(l, t, t.pendingProps.children, e),
            on(l, t),
            l === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return l === null && P && ((u = a = pl) && (a = qm(a, t.type, t.pendingProps, St),
            a !== null ? (t.stateNode = a,
            Ql = t,
            pl = Tt(a.firstChild),
            St = !1,
            u = !0) : u = !1),
            u || ue(t)),
            ja(t),
            u = t.type,
            n = t.pendingProps,
            c = l !== null ? l.memoizedProps : null,
            a = n.children,
            Ji(u, n) ? a = null : c !== null && Ji(u, c) && (t.flags |= 32),
            t.memoizedState !== null && (u = Kc(l, t, I0, null, null, e),
            vu._currentValue = u),
            on(l, t),
            Vl(l, t, a, e),
            t.child;
        case 6:
            return l === null && P && ((l = e = pl) && (e = Ym(e, t.pendingProps, St),
            e !== null ? (t.stateNode = e,
            Ql = t,
            pl = null,
            l = !0) : l = !1),
            l || ue(t)),
            null;
        case 13:
            return Zo(l, t, e);
        case 4:
            return kl(t, t.stateNode.containerInfo),
            a = t.pendingProps,
            l === null ? t.child = Ye(t, null, a, e) : Vl(l, t, a, e),
            t.child;
        case 11:
            return Uo(l, t, t.type, t.pendingProps, e);
        case 7:
            return Vl(l, t, t.pendingProps, e),
            t.child;
        case 8:
            return Vl(l, t, t.pendingProps.children, e),
            t.child;
        case 12:
            return Vl(l, t, t.pendingProps.children, e),
            t.child;
        case 10:
            return a = t.pendingProps,
            ne(t, t.type, a.value),
            Vl(l, t, a.children, e),
            t.child;
        case 9:
            return u = t.type._context,
            a = t.pendingProps.children,
            Re(t),
            u = Zl(u),
            a = a(u),
            t.flags |= 1,
            Vl(l, t, a, e),
            t.child;
        case 14:
            return Ro(l, t, t.type, t.pendingProps, e);
        case 15:
            return Ho(l, t, t.type, t.pendingProps, e);
        case 19:
            return Lo(l, t, e);
        case 31:
            return cm(l, t, e);
        case 22:
            return Bo(l, t, e, t.pendingProps);
        case 24:
            return Re(t),
            a = Zl(Dl),
            l === null ? (u = Bc(),
            u === null && (u = vl,
            n = Rc(),
            u.pooledCache = n,
            n.refCount++,
            n !== null && (u.pooledCacheLanes |= e),
            u = n),
            t.memoizedState = {
                parent: a,
                cache: u
            },
            Yc(t),
            ne(t, Dl, u)) : ((l.lanes & e) !== 0 && (Gc(l, t),
            $a(t, null, null, e),
            Wa()),
            u = l.memoizedState,
            n = t.memoizedState,
            u.parent !== a ? (u = {
                parent: a,
                cache: a
            },
            t.memoizedState = u,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u),
            ne(t, Dl, a)) : (a = n.cache,
            ne(t, Dl, a),
            a !== u.cache && Uc(t, [Dl], e, !0))),
            Vl(l, t, t.pendingProps.children, e),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(m(156, t.tag))
    }
    function wt(l) {
        l.flags |= 4
    }
    function xi(l, t, e, a, u) {
        if ((t = (l.mode & 32) !== 0) && (t = !1),
        t) {
            if (l.flags |= 16777216,
            (u & 335544128) === u)
                if (l.stateNode.complete)
                    l.flags |= 8192;
                else if (br())
                    l.flags |= 8192;
                else
                    throw qe = ku,
                    qc
        } else
            l.flags &= -16777217
    }
    function Ko(l, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            l.flags &= -16777217;
        else if (l.flags |= 16777216,
        !id(t))
            if (br())
                l.flags |= 8192;
            else
                throw qe = ku,
                qc
    }
    function dn(l, t) {
        t !== null && (l.flags |= 4),
        l.flags & 16384 && (t = l.tag !== 22 ? Af() : 536870912,
        l.lanes |= t,
        ba |= t)
    }
    function eu(l, t) {
        if (!P)
            switch (l.tailMode) {
            case "hidden":
                t = l.tail;
                for (var e = null; t !== null; )
                    t.alternate !== null && (e = t),
                    t = t.sibling;
                e === null ? l.tail = null : e.sibling = null;
                break;
            case "collapsed":
                e = l.tail;
                for (var a = null; e !== null; )
                    e.alternate !== null && (a = e),
                    e = e.sibling;
                a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null
            }
    }
    function xl(l) {
        var t = l.alternate !== null && l.alternate.child === l.child
          , e = 0
          , a = 0;
        if (t)
            for (var u = l.child; u !== null; )
                e |= u.lanes | u.childLanes,
                a |= u.subtreeFlags & 65011712,
                a |= u.flags & 65011712,
                u.return = l,
                u = u.sibling;
        else
            for (u = l.child; u !== null; )
                e |= u.lanes | u.childLanes,
                a |= u.subtreeFlags,
                a |= u.flags,
                u.return = l,
                u = u.sibling;
        return l.subtreeFlags |= a,
        l.childLanes = e,
        t
    }
    function fm(l, t, e) {
        var a = t.pendingProps;
        switch (_c(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return xl(t),
            null;
        case 1:
            return xl(t),
            null;
        case 3:
            return e = t.stateNode,
            a = null,
            l !== null && (a = l.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Qt(Dl),
            _l(),
            e.pendingContext && (e.context = e.pendingContext,
            e.pendingContext = null),
            (l === null || l.child === null) && (na(t) ? wt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Oc())),
            xl(t),
            null;
        case 26:
            var u = t.type
              , n = t.memoizedState;
            return l === null ? (wt(t),
            n !== null ? (xl(t),
            Ko(t, n)) : (xl(t),
            xi(t, u, null, a, e))) : n ? n !== l.memoizedState ? (wt(t),
            xl(t),
            Ko(t, n)) : (xl(t),
            t.flags &= -16777217) : (l = l.memoizedProps,
            l !== a && wt(t),
            xl(t),
            xi(t, u, l, a, e)),
            null;
        case 27:
            if (zu(t),
            e = L.current,
            u = t.type,
            l !== null && t.stateNode != null)
                l.memoizedProps !== a && wt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(m(166));
                    return xl(t),
                    null
                }
                l = N.current,
                na(t) ? As(t) : (l = Pr(u, a, e),
                t.stateNode = l,
                wt(t))
            }
            return xl(t),
            null;
        case 5:
            if (zu(t),
            u = t.type,
            l !== null && t.stateNode != null)
                l.memoizedProps !== a && wt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(m(166));
                    return xl(t),
                    null
                }
                if (n = N.current,
                na(t))
                    As(t);
                else {
                    var c = jn(L.current);
                    switch (n) {
                    case 1:
                        n = c.createElementNS("http://www.w3.org/2000/svg", u);
                        break;
                    case 2:
                        n = c.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                        break;
                    default:
                        switch (u) {
                        case "svg":
                            n = c.createElementNS("http://www.w3.org/2000/svg", u);
                            break;
                        case "math":
                            n = c.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                            break;
                        case "script":
                            n = c.createElement("div"),
                            n.innerHTML = "<script><\/script>",
                            n = n.removeChild(n.firstChild);
                            break;
                        case "select":
                            n = typeof a.is == "string" ? c.createElement("select", {
                                is: a.is
                            }) : c.createElement("select"),
                            a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                            break;
                        default:
                            n = typeof a.is == "string" ? c.createElement(u, {
                                is: a.is
                            }) : c.createElement(u)
                        }
                    }
                    n[Xl] = t,
                    n[$l] = a;
                    l: for (c = t.child; c !== null; ) {
                        if (c.tag === 5 || c.tag === 6)
                            n.appendChild(c.stateNode);
                        else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                            c.child.return = c,
                            c = c.child;
                            continue
                        }
                        if (c === t)
                            break l;
                        for (; c.sibling === null; ) {
                            if (c.return === null || c.return === t)
                                break l;
                            c = c.return
                        }
                        c.sibling.return = c.return,
                        c = c.sibling
                    }
                    t.stateNode = n;
                    l: switch (Ll(n, u, a),
                    u) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        a = !!a.autoFocus;
                        break l;
                    case "img":
                        a = !0;
                        break l;
                    default:
                        a = !1
                    }
                    a && wt(t)
                }
            }
            return xl(t),
            xi(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e),
            null;
        case 6:
            if (l && t.stateNode != null)
                l.memoizedProps !== a && wt(t);
            else {
                if (typeof a != "string" && t.stateNode === null)
                    throw Error(m(166));
                if (l = L.current,
                na(t)) {
                    if (l = t.stateNode,
                    e = t.memoizedProps,
                    a = null,
                    u = Ql,
                    u !== null)
                        switch (u.tag) {
                        case 27:
                        case 5:
                            a = u.memoizedProps
                        }
                    l[Xl] = t,
                    l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Zr(l.nodeValue, e)),
                    l || ue(t, !0)
                } else
                    l = jn(l).createTextNode(a),
                    l[Xl] = t,
                    t.stateNode = l
            }
            return xl(t),
            null;
        case 31:
            if (e = t.memoizedState,
            l === null || l.memoizedState !== null) {
                if (a = na(t),
                e !== null) {
                    if (l === null) {
                        if (!a)
                            throw Error(m(318));
                        if (l = t.memoizedState,
                        l = l !== null ? l.dehydrated : null,
                        !l)
                            throw Error(m(557));
                        l[Xl] = t
                    } else
                        Ce(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    xl(t),
                    l = !1
                } else
                    e = Oc(),
                    l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e),
                    l = !0;
                if (!l)
                    return t.flags & 256 ? (rt(t),
                    t) : (rt(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(m(558))
            }
            return xl(t),
            null;
        case 13:
            if (a = t.memoizedState,
            l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                if (u = na(t),
                a !== null && a.dehydrated !== null) {
                    if (l === null) {
                        if (!u)
                            throw Error(m(318));
                        if (u = t.memoizedState,
                        u = u !== null ? u.dehydrated : null,
                        !u)
                            throw Error(m(317));
                        u[Xl] = t
                    } else
                        Ce(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    xl(t),
                    u = !1
                } else
                    u = Oc(),
                    l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u),
                    u = !0;
                if (!u)
                    return t.flags & 256 ? (rt(t),
                    t) : (rt(t),
                    null)
            }
            return rt(t),
            (t.flags & 128) !== 0 ? (t.lanes = e,
            t) : (e = a !== null,
            l = l !== null && l.memoizedState !== null,
            e && (a = t.child,
            u = null,
            a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool),
            n = null,
            a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048)),
            e !== l && e && (t.child.flags |= 8192),
            dn(t, t.updateQueue),
            xl(t),
            null);
        case 4:
            return _l(),
            l === null && Zi(t.stateNode.containerInfo),
            xl(t),
            null;
        case 10:
            return Qt(t.type),
            xl(t),
            null;
        case 19:
            if (z(Ml),
            a = t.memoizedState,
            a === null)
                return xl(t),
                null;
            if (u = (t.flags & 128) !== 0,
            n = a.rendering,
            n === null)
                if (u)
                    eu(a, !1);
                else {
                    if (Nl !== 0 || l !== null && (l.flags & 128) !== 0)
                        for (l = t.child; l !== null; ) {
                            if (n = Iu(l),
                            n !== null) {
                                for (t.flags |= 128,
                                eu(a, !1),
                                l = n.updateQueue,
                                t.updateQueue = l,
                                dn(t, l),
                                t.subtreeFlags = 0,
                                l = e,
                                e = t.child; e !== null; )
                                    ps(e, l),
                                    e = e.sibling;
                                return A(Ml, Ml.current & 1 | 2),
                                P && Gt(t, a.treeForkCount),
                                t.child
                            }
                            l = l.sibling
                        }
                    a.tail !== null && nt() > gn && (t.flags |= 128,
                    u = !0,
                    eu(a, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!u)
                    if (l = Iu(n),
                    l !== null) {
                        if (t.flags |= 128,
                        u = !0,
                        l = l.updateQueue,
                        t.updateQueue = l,
                        dn(t, l),
                        eu(a, !0),
                        a.tail === null && a.tailMode === "hidden" && !n.alternate && !P)
                            return xl(t),
                            null
                    } else
                        2 * nt() - a.renderingStartTime > gn && e !== 536870912 && (t.flags |= 128,
                        u = !0,
                        eu(a, !1),
                        t.lanes = 4194304);
                a.isBackwards ? (n.sibling = t.child,
                t.child = n) : (l = a.last,
                l !== null ? l.sibling = n : t.child = n,
                a.last = n)
            }
            return a.tail !== null ? (l = a.tail,
            a.rendering = l,
            a.tail = l.sibling,
            a.renderingStartTime = nt(),
            l.sibling = null,
            e = Ml.current,
            A(Ml, u ? e & 1 | 2 : e & 1),
            P && Gt(t, a.treeForkCount),
            l) : (xl(t),
            null);
        case 22:
        case 23:
            return rt(t),
            Vc(),
            a = t.memoizedState !== null,
            l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
            a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (xl(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : xl(t),
            e = t.updateQueue,
            e !== null && dn(t, e.retryQueue),
            e = null,
            l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool),
            a = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            a !== e && (t.flags |= 2048),
            l !== null && z(He),
            null;
        case 24:
            return e = null,
            l !== null && (e = l.memoizedState.cache),
            t.memoizedState.cache !== e && (t.flags |= 2048),
            Qt(Dl),
            xl(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(m(156, t.tag))
    }
    function sm(l, t) {
        switch (_c(t),
        t.tag) {
        case 1:
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 3:
            return Qt(Dl),
            _l(),
            l = t.flags,
            (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return zu(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (rt(t),
                t.alternate === null)
                    throw Error(m(340));
                Ce()
            }
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 13:
            if (rt(t),
            l = t.memoizedState,
            l !== null && l.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(m(340));
                Ce()
            }
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 19:
            return z(Ml),
            null;
        case 4:
            return _l(),
            null;
        case 10:
            return Qt(t.type),
            null;
        case 22:
        case 23:
            return rt(t),
            Vc(),
            l !== null && z(He),
            l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 24:
            return Qt(Dl),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Jo(l, t) {
        switch (_c(t),
        t.tag) {
        case 3:
            Qt(Dl),
            _l();
            break;
        case 26:
        case 27:
        case 5:
            zu(t);
            break;
        case 4:
            _l();
            break;
        case 31:
            t.memoizedState !== null && rt(t);
            break;
        case 13:
            rt(t);
            break;
        case 19:
            z(Ml);
            break;
        case 10:
            Qt(t.type);
            break;
        case 22:
        case 23:
            rt(t),
            Vc(),
            l !== null && z(He);
            break;
        case 24:
            Qt(Dl)
        }
    }
    function au(l, t) {
        try {
            var e = t.updateQueue
              , a = e !== null ? e.lastEffect : null;
            if (a !== null) {
                var u = a.next;
                e = u;
                do {
                    if ((e.tag & l) === l) {
                        a = void 0;
                        var n = e.create
                          , c = e.inst;
                        a = n(),
                        c.destroy = a
                    }
                    e = e.next
                } while (e !== u)
            }
        } catch (i) {
            dl(t, t.return, i)
        }
    }
    function re(l, t, e) {
        try {
            var a = t.updateQueue
              , u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var n = u.next;
                a = n;
                do {
                    if ((a.tag & l) === l) {
                        var c = a.inst
                          , i = c.destroy;
                        if (i !== void 0) {
                            c.destroy = void 0,
                            u = t;
                            var s = e
                              , y = i;
                            try {
                                y()
                            } catch (b) {
                                dl(u, s, b)
                            }
                        }
                    }
                    a = a.next
                } while (a !== n)
            }
        } catch (b) {
            dl(t, t.return, b)
        }
    }
    function ko(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var e = l.stateNode;
            try {
                qs(t, e)
            } catch (a) {
                dl(l, l.return, a)
            }
        }
    }
    function Wo(l, t, e) {
        e.props = Xe(l.type, l.memoizedProps),
        e.state = l.memoizedState;
        try {
            e.componentWillUnmount()
        } catch (a) {
            dl(l, t, a)
        }
    }
    function uu(l, t) {
        try {
            var e = l.ref;
            if (e !== null) {
                switch (l.tag) {
                case 26:
                case 27:
                case 5:
                    var a = l.stateNode;
                    break;
                case 30:
                    a = l.stateNode;
                    break;
                default:
                    a = l.stateNode
                }
                typeof e == "function" ? l.refCleanup = e(a) : e.current = a
            }
        } catch (u) {
            dl(l, t, u)
        }
    }
    function Dt(l, t) {
        var e = l.ref
          , a = l.refCleanup;
        if (e !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (u) {
                    dl(l, t, u)
                } finally {
                    l.refCleanup = null,
                    l = l.alternate,
                    l != null && (l.refCleanup = null)
                }
            else if (typeof e == "function")
                try {
                    e(null)
                } catch (u) {
                    dl(l, t, u)
                }
            else
                e.current = null
    }
    function $o(l) {
        var t = l.type
          , e = l.memoizedProps
          , a = l.stateNode;
        try {
            l: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                e.autoFocus && a.focus();
                break l;
            case "img":
                e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet)
            }
        } catch (u) {
            dl(l, l.return, u)
        }
    }
    function Si(l, t, e) {
        try {
            var a = l.stateNode;
            Dm(a, l.type, e, t),
            a[$l] = t
        } catch (u) {
            dl(l, l.return, u)
        }
    }
    function Fo(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && be(l.type) || l.tag === 4
    }
    function zi(l) {
        l: for (; ; ) {
            for (; l.sibling === null; ) {
                if (l.return === null || Fo(l.return))
                    return null;
                l = l.return
            }
            for (l.sibling.return = l.return,
            l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
                if (l.tag === 27 && be(l.type) || l.flags & 2 || l.child === null || l.tag === 4)
                    continue l;
                l.child.return = l,
                l = l.child
            }
            if (!(l.flags & 2))
                return l.stateNode
        }
    }
    function Ti(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6)
            l = l.stateNode,
            t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            t.appendChild(l),
            e = e._reactRootContainer,
            e != null || t.onclick !== null || (t.onclick = Bt));
        else if (a !== 4 && (a === 27 && be(l.type) && (e = l.stateNode,
        t = null),
        l = l.child,
        l !== null))
            for (Ti(l, t, e),
            l = l.sibling; l !== null; )
                Ti(l, t, e),
                l = l.sibling
    }
    function mn(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6)
            l = l.stateNode,
            t ? e.insertBefore(l, t) : e.appendChild(l);
        else if (a !== 4 && (a === 27 && be(l.type) && (e = l.stateNode),
        l = l.child,
        l !== null))
            for (mn(l, t, e),
            l = l.sibling; l !== null; )
                mn(l, t, e),
                l = l.sibling
    }
    function Io(l) {
        var t = l.stateNode
          , e = l.memoizedProps;
        try {
            for (var a = l.type, u = t.attributes; u.length; )
                t.removeAttributeNode(u[0]);
            Ll(t, a, e),
            t[Xl] = l,
            t[$l] = e
        } catch (n) {
            dl(l, l.return, n)
        }
    }
    var Kt = !1
      , Rl = !1
      , Ai = !1
      , Po = typeof WeakSet == "function" ? WeakSet : Set
      , Gl = null;
    function om(l, t) {
        if (l = l.containerInfo,
        wi = Rn,
        l = os(l),
        gc(l)) {
            if ("selectionStart" in l)
                var e = {
                    start: l.selectionStart,
                    end: l.selectionEnd
                };
            else
                l: {
                    e = (e = l.ownerDocument) && e.defaultView || window;
                    var a = e.getSelection && e.getSelection();
                    if (a && a.rangeCount !== 0) {
                        e = a.anchorNode;
                        var u = a.anchorOffset
                          , n = a.focusNode;
                        a = a.focusOffset;
                        try {
                            e.nodeType,
                            n.nodeType
                        } catch {
                            e = null;
                            break l
                        }
                        var c = 0
                          , i = -1
                          , s = -1
                          , y = 0
                          , b = 0
                          , S = l
                          , v = null;
                        t: for (; ; ) {
                            for (var g; S !== e || u !== 0 && S.nodeType !== 3 || (i = c + u),
                            S !== n || a !== 0 && S.nodeType !== 3 || (s = c + a),
                            S.nodeType === 3 && (c += S.nodeValue.length),
                            (g = S.firstChild) !== null; )
                                v = S,
                                S = g;
                            for (; ; ) {
                                if (S === l)
                                    break t;
                                if (v === e && ++y === u && (i = c),
                                v === n && ++b === a && (s = c),
                                (g = S.nextSibling) !== null)
                                    break;
                                S = v,
                                v = S.parentNode
                            }
                            S = g
                        }
                        e = i === -1 || s === -1 ? null : {
                            start: i,
                            end: s
                        }
                    } else
                        e = null
                }
            e = e || {
                start: 0,
                end: 0
            }
        } else
            e = null;
        for (Ki = {
            focusedElem: l,
            selectionRange: e
        },
        Rn = !1,
        Gl = t; Gl !== null; )
            if (t = Gl,
            l = t.child,
            (t.subtreeFlags & 1028) !== 0 && l !== null)
                l.return = t,
                Gl = l;
            else
                for (; Gl !== null; ) {
                    switch (t = Gl,
                    n = t.alternate,
                    l = t.flags,
                    t.tag) {
                    case 0:
                        if ((l & 4) !== 0 && (l = t.updateQueue,
                        l = l !== null ? l.events : null,
                        l !== null))
                            for (e = 0; e < l.length; e++)
                                u = l[e],
                                u.ref.impl = u.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((l & 1024) !== 0 && n !== null) {
                            l = void 0,
                            e = t,
                            u = n.memoizedProps,
                            n = n.memoizedState,
                            a = e.stateNode;
                            try {
                                var O = Xe(e.type, u);
                                l = a.getSnapshotBeforeUpdate(O, n),
                                a.__reactInternalSnapshotBeforeUpdate = l
                            } catch (Y) {
                                dl(e, e.return, Y)
                            }
                        }
                        break;
                    case 3:
                        if ((l & 1024) !== 0) {
                            if (l = t.stateNode.containerInfo,
                            e = l.nodeType,
                            e === 9)
                                Wi(l);
                            else if (e === 1)
                                switch (l.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Wi(l);
                                    break;
                                default:
                                    l.textContent = ""
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
                        if ((l & 1024) !== 0)
                            throw Error(m(163))
                    }
                    if (l = t.sibling,
                    l !== null) {
                        l.return = t.return,
                        Gl = l;
                        break
                    }
                    Gl = t.return
                }
    }
    function lr(l, t, e) {
        var a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            kt(l, e),
            a & 4 && au(5, e);
            break;
        case 1:
            if (kt(l, e),
            a & 4)
                if (l = e.stateNode,
                t === null)
                    try {
                        l.componentDidMount()
                    } catch (c) {
                        dl(e, e.return, c)
                    }
                else {
                    var u = Xe(e.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate)
                    } catch (c) {
                        dl(e, e.return, c)
                    }
                }
            a & 64 && ko(e),
            a & 512 && uu(e, e.return);
            break;
        case 3:
            if (kt(l, e),
            a & 64 && (l = e.updateQueue,
            l !== null)) {
                if (t = null,
                e.child !== null)
                    switch (e.child.tag) {
                    case 27:
                    case 5:
                        t = e.child.stateNode;
                        break;
                    case 1:
                        t = e.child.stateNode
                    }
                try {
                    qs(l, t)
                } catch (c) {
                    dl(e, e.return, c)
                }
            }
            break;
        case 27:
            t === null && a & 4 && Io(e);
        case 26:
        case 5:
            kt(l, e),
            t === null && a & 4 && $o(e),
            a & 512 && uu(e, e.return);
            break;
        case 12:
            kt(l, e);
            break;
        case 31:
            kt(l, e),
            a & 4 && ar(l, e);
            break;
        case 13:
            kt(l, e),
            a & 4 && ur(l, e),
            a & 64 && (l = e.memoizedState,
            l !== null && (l = l.dehydrated,
            l !== null && (e = pm.bind(null, e),
            Gm(l, e))));
            break;
        case 22:
            if (a = e.memoizedState !== null || Kt,
            !a) {
                t = t !== null && t.memoizedState !== null || Rl,
                u = Kt;
                var n = Rl;
                Kt = a,
                (Rl = t) && !n ? Wt(l, e, (e.subtreeFlags & 8772) !== 0) : kt(l, e),
                Kt = u,
                Rl = n
            }
            break;
        case 30:
            break;
        default:
            kt(l, e)
        }
    }
    function tr(l) {
        var t = l.alternate;
        t !== null && (l.alternate = null,
        tr(t)),
        l.child = null,
        l.deletions = null,
        l.sibling = null,
        l.tag === 5 && (t = l.stateNode,
        t !== null && lc(t)),
        l.stateNode = null,
        l.return = null,
        l.dependencies = null,
        l.memoizedProps = null,
        l.memoizedState = null,
        l.pendingProps = null,
        l.stateNode = null,
        l.updateQueue = null
    }
    var Sl = null
      , Il = !1;
    function Jt(l, t, e) {
        for (e = e.child; e !== null; )
            er(l, t, e),
            e = e.sibling
    }
    function er(l, t, e) {
        if (ct && typeof ct.onCommitFiberUnmount == "function")
            try {
                ct.onCommitFiberUnmount(_a, e)
            } catch {}
        switch (e.tag) {
        case 26:
            Rl || Dt(e, t),
            Jt(l, t, e),
            e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode,
            e.parentNode.removeChild(e));
            break;
        case 27:
            Rl || Dt(e, t);
            var a = Sl
              , u = Il;
            be(e.type) && (Sl = e.stateNode,
            Il = !1),
            Jt(l, t, e),
            mu(e.stateNode),
            Sl = a,
            Il = u;
            break;
        case 5:
            Rl || Dt(e, t);
        case 6:
            if (a = Sl,
            u = Il,
            Sl = null,
            Jt(l, t, e),
            Sl = a,
            Il = u,
            Sl !== null)
                if (Il)
                    try {
                        (Sl.nodeType === 9 ? Sl.body : Sl.nodeName === "HTML" ? Sl.ownerDocument.body : Sl).removeChild(e.stateNode)
                    } catch (n) {
                        dl(e, t, n)
                    }
                else
                    try {
                        Sl.removeChild(e.stateNode)
                    } catch (n) {
                        dl(e, t, n)
                    }
            break;
        case 18:
            Sl !== null && (Il ? (l = Sl,
            kr(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode),
            Na(l)) : kr(Sl, e.stateNode));
            break;
        case 4:
            a = Sl,
            u = Il,
            Sl = e.stateNode.containerInfo,
            Il = !0,
            Jt(l, t, e),
            Sl = a,
            Il = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            re(2, e, t),
            Rl || re(4, e, t),
            Jt(l, t, e);
            break;
        case 1:
            Rl || (Dt(e, t),
            a = e.stateNode,
            typeof a.componentWillUnmount == "function" && Wo(e, t, a)),
            Jt(l, t, e);
            break;
        case 21:
            Jt(l, t, e);
            break;
        case 22:
            Rl = (a = Rl) || e.memoizedState !== null,
            Jt(l, t, e),
            Rl = a;
            break;
        default:
            Jt(l, t, e)
        }
    }
    function ar(l, t) {
        if (t.memoizedState === null && (l = t.alternate,
        l !== null && (l = l.memoizedState,
        l !== null))) {
            l = l.dehydrated;
            try {
                Na(l)
            } catch (e) {
                dl(t, t.return, e)
            }
        }
    }
    function ur(l, t) {
        if (t.memoizedState === null && (l = t.alternate,
        l !== null && (l = l.memoizedState,
        l !== null && (l = l.dehydrated,
        l !== null))))
            try {
                Na(l)
            } catch (e) {
                dl(t, t.return, e)
            }
    }
    function rm(l) {
        switch (l.tag) {
        case 31:
        case 13:
        case 19:
            var t = l.stateNode;
            return t === null && (t = l.stateNode = new Po),
            t;
        case 22:
            return l = l.stateNode,
            t = l._retryCache,
            t === null && (t = l._retryCache = new Po),
            t;
        default:
            throw Error(m(435, l.tag))
        }
    }
    function hn(l, t) {
        var e = rm(l);
        t.forEach(function(a) {
            if (!e.has(a)) {
                e.add(a);
                var u = xm.bind(null, l, a);
                a.then(u, u)
            }
        })
    }
    function Pl(l, t) {
        var e = t.deletions;
        if (e !== null)
            for (var a = 0; a < e.length; a++) {
                var u = e[a]
                  , n = l
                  , c = t
                  , i = c;
                l: for (; i !== null; ) {
                    switch (i.tag) {
                    case 27:
                        if (be(i.type)) {
                            Sl = i.stateNode,
                            Il = !1;
                            break l
                        }
                        break;
                    case 5:
                        Sl = i.stateNode,
                        Il = !1;
                        break l;
                    case 3:
                    case 4:
                        Sl = i.stateNode.containerInfo,
                        Il = !0;
                        break l
                    }
                    i = i.return
                }
                if (Sl === null)
                    throw Error(m(160));
                er(n, c, u),
                Sl = null,
                Il = !1,
                n = u.alternate,
                n !== null && (n.return = null),
                u.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                nr(t, l),
                t = t.sibling
    }
    var jt = null;
    function nr(l, t) {
        var e = l.alternate
          , a = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Pl(t, l),
            lt(l),
            a & 4 && (re(3, l, l.return),
            au(3, l),
            re(5, l, l.return));
            break;
        case 1:
            Pl(t, l),
            lt(l),
            a & 512 && (Rl || e === null || Dt(e, e.return)),
            a & 64 && Kt && (l = l.updateQueue,
            l !== null && (a = l.callbacks,
            a !== null && (e = l.shared.hiddenCallbacks,
            l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
            break;
        case 26:
            var u = jt;
            if (Pl(t, l),
            lt(l),
            a & 512 && (Rl || e === null || Dt(e, e.return)),
            a & 4) {
                var n = e !== null ? e.memoizedState : null;
                if (a = l.memoizedState,
                e === null)
                    if (a === null)
                        if (l.stateNode === null) {
                            l: {
                                a = l.type,
                                e = l.memoizedProps,
                                u = u.ownerDocument || u;
                                t: switch (a) {
                                case "title":
                                    n = u.getElementsByTagName("title")[0],
                                    (!n || n[Da] || n[Xl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a),
                                    u.head.insertBefore(n, u.querySelector("head > title"))),
                                    Ll(n, a, e),
                                    n[Xl] = l,
                                    Yl(n),
                                    a = n;
                                    break l;
                                case "link":
                                    var c = nd("link", "href", u).get(a + (e.href || ""));
                                    if (c) {
                                        for (var i = 0; i < c.length; i++)
                                            if (n = c[i],
                                            n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                                                c.splice(i, 1);
                                                break t
                                            }
                                    }
                                    n = u.createElement(a),
                                    Ll(n, a, e),
                                    u.head.appendChild(n);
                                    break;
                                case "meta":
                                    if (c = nd("meta", "content", u).get(a + (e.content || ""))) {
                                        for (i = 0; i < c.length; i++)
                                            if (n = c[i],
                                            n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                                                c.splice(i, 1);
                                                break t
                                            }
                                    }
                                    n = u.createElement(a),
                                    Ll(n, a, e),
                                    u.head.appendChild(n);
                                    break;
                                default:
                                    throw Error(m(468, a))
                                }
                                n[Xl] = l,
                                Yl(n),
                                a = n
                            }
                            l.stateNode = a
                        } else
                            cd(u, l.type, l.stateNode);
                    else
                        l.stateNode = ud(u, a, l.memoizedProps);
                else
                    n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode,
                    e.parentNode.removeChild(e)) : n.count--,
                    a === null ? cd(u, l.type, l.stateNode) : ud(u, a, l.memoizedProps)) : a === null && l.stateNode !== null && Si(l, l.memoizedProps, e.memoizedProps)
            }
            break;
        case 27:
            Pl(t, l),
            lt(l),
            a & 512 && (Rl || e === null || Dt(e, e.return)),
            e !== null && a & 4 && Si(l, l.memoizedProps, e.memoizedProps);
            break;
        case 5:
            if (Pl(t, l),
            lt(l),
            a & 512 && (Rl || e === null || Dt(e, e.return)),
            l.flags & 32) {
                u = l.stateNode;
                try {
                    We(u, "")
                } catch (O) {
                    dl(l, l.return, O)
                }
            }
            a & 4 && l.stateNode != null && (u = l.memoizedProps,
            Si(l, u, e !== null ? e.memoizedProps : u)),
            a & 1024 && (Ai = !0);
            break;
        case 6:
            if (Pl(t, l),
            lt(l),
            a & 4) {
                if (l.stateNode === null)
                    throw Error(m(162));
                a = l.memoizedProps,
                e = l.stateNode;
                try {
                    e.nodeValue = a
                } catch (O) {
                    dl(l, l.return, O)
                }
            }
            break;
        case 3:
            if (On = null,
            u = jt,
            jt = _n(t.containerInfo),
            Pl(t, l),
            jt = u,
            lt(l),
            a & 4 && e !== null && e.memoizedState.isDehydrated)
                try {
                    Na(t.containerInfo)
                } catch (O) {
                    dl(l, l.return, O)
                }
            Ai && (Ai = !1,
            cr(l));
            break;
        case 4:
            a = jt,
            jt = _n(l.stateNode.containerInfo),
            Pl(t, l),
            lt(l),
            jt = a;
            break;
        case 12:
            Pl(t, l),
            lt(l);
            break;
        case 31:
            Pl(t, l),
            lt(l),
            a & 4 && (a = l.updateQueue,
            a !== null && (l.updateQueue = null,
            hn(l, a)));
            break;
        case 13:
            Pl(t, l),
            lt(l),
            l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (vn = nt()),
            a & 4 && (a = l.updateQueue,
            a !== null && (l.updateQueue = null,
            hn(l, a)));
            break;
        case 22:
            u = l.memoizedState !== null;
            var s = e !== null && e.memoizedState !== null
              , y = Kt
              , b = Rl;
            if (Kt = y || u,
            Rl = b || s,
            Pl(t, l),
            Rl = b,
            Kt = y,
            lt(l),
            a & 8192)
                l: for (t = l.stateNode,
                t._visibility = u ? t._visibility & -2 : t._visibility | 1,
                u && (e === null || s || Kt || Rl || Qe(l)),
                e = null,
                t = l; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (e === null) {
                            s = e = t;
                            try {
                                if (n = s.stateNode,
                                u)
                                    c = n.style,
                                    typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                                else {
                                    i = s.stateNode;
                                    var S = s.memoizedProps.style
                                      , v = S != null && S.hasOwnProperty("display") ? S.display : null;
                                    i.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim()
                                }
                            } catch (O) {
                                dl(s, s.return, O)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (e === null) {
                            s = t;
                            try {
                                s.stateNode.nodeValue = u ? "" : s.memoizedProps
                            } catch (O) {
                                dl(s, s.return, O)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (e === null) {
                            s = t;
                            try {
                                var g = s.stateNode;
                                u ? Wr(g, !0) : Wr(s.stateNode, !1)
                            } catch (O) {
                                dl(s, s.return, O)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === l)
                        break l;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === l)
                            break l;
                        e === t && (e = null),
                        t = t.return
                    }
                    e === t && (e = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a & 4 && (a = l.updateQueue,
            a !== null && (e = a.retryQueue,
            e !== null && (a.retryQueue = null,
            hn(l, e))));
            break;
        case 19:
            Pl(t, l),
            lt(l),
            a & 4 && (a = l.updateQueue,
            a !== null && (l.updateQueue = null,
            hn(l, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            Pl(t, l),
            lt(l)
        }
    }
    function lt(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var e, a = l.return; a !== null; ) {
                    if (Fo(a)) {
                        e = a;
                        break
                    }
                    a = a.return
                }
                if (e == null)
                    throw Error(m(160));
                switch (e.tag) {
                case 27:
                    var u = e.stateNode
                      , n = zi(l);
                    mn(l, n, u);
                    break;
                case 5:
                    var c = e.stateNode;
                    e.flags & 32 && (We(c, ""),
                    e.flags &= -33);
                    var i = zi(l);
                    mn(l, i, c);
                    break;
                case 3:
                case 4:
                    var s = e.stateNode.containerInfo
                      , y = zi(l);
                    Ti(l, y, s);
                    break;
                default:
                    throw Error(m(161))
                }
            } catch (b) {
                dl(l, l.return, b)
            }
            l.flags &= -3
        }
        t & 4096 && (l.flags &= -4097)
    }
    function cr(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null; ) {
                var t = l;
                cr(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                l = l.sibling
            }
    }
    function kt(l, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                lr(l, t.alternate, t),
                t = t.sibling
    }
    function Qe(l) {
        for (l = l.child; l !== null; ) {
            var t = l;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                re(4, t, t.return),
                Qe(t);
                break;
            case 1:
                Dt(t, t.return);
                var e = t.stateNode;
                typeof e.componentWillUnmount == "function" && Wo(t, t.return, e),
                Qe(t);
                break;
            case 27:
                mu(t.stateNode);
            case 26:
            case 5:
                Dt(t, t.return),
                Qe(t);
                break;
            case 22:
                t.memoizedState === null && Qe(t);
                break;
            case 30:
                Qe(t);
                break;
            default:
                Qe(t)
            }
            l = l.sibling
        }
    }
    function Wt(l, t, e) {
        for (e = e && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var a = t.alternate
              , u = l
              , n = t
              , c = n.flags;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Wt(u, n, e),
                au(4, n);
                break;
            case 1:
                if (Wt(u, n, e),
                a = n,
                u = a.stateNode,
                typeof u.componentDidMount == "function")
                    try {
                        u.componentDidMount()
                    } catch (y) {
                        dl(a, a.return, y)
                    }
                if (a = n,
                u = a.updateQueue,
                u !== null) {
                    var i = a.stateNode;
                    try {
                        var s = u.shared.hiddenCallbacks;
                        if (s !== null)
                            for (u.shared.hiddenCallbacks = null,
                            u = 0; u < s.length; u++)
                                Bs(s[u], i)
                    } catch (y) {
                        dl(a, a.return, y)
                    }
                }
                e && c & 64 && ko(n),
                uu(n, n.return);
                break;
            case 27:
                Io(n);
            case 26:
            case 5:
                Wt(u, n, e),
                e && a === null && c & 4 && $o(n),
                uu(n, n.return);
                break;
            case 12:
                Wt(u, n, e);
                break;
            case 31:
                Wt(u, n, e),
                e && c & 4 && ar(u, n);
                break;
            case 13:
                Wt(u, n, e),
                e && c & 4 && ur(u, n);
                break;
            case 22:
                n.memoizedState === null && Wt(u, n, e),
                uu(n, n.return);
                break;
            case 30:
                break;
            default:
                Wt(u, n, e)
            }
            t = t.sibling
        }
    }
    function Ei(l, t) {
        var e = null;
        l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool),
        l = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
        l !== e && (l != null && l.refCount++,
        e != null && La(e))
    }
    function Ni(l, t) {
        l = null,
        t.alternate !== null && (l = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== l && (t.refCount++,
        l != null && La(l))
    }
    function _t(l, t, e, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                ir(l, t, e, a),
                t = t.sibling
    }
    function ir(l, t, e, a) {
        var u = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            _t(l, t, e, a),
            u & 2048 && au(9, t);
            break;
        case 1:
            _t(l, t, e, a);
            break;
        case 3:
            _t(l, t, e, a),
            u & 2048 && (l = null,
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== l && (t.refCount++,
            l != null && La(l)));
            break;
        case 12:
            if (u & 2048) {
                _t(l, t, e, a),
                l = t.stateNode;
                try {
                    var n = t.memoizedProps
                      , c = n.id
                      , i = n.onPostCommit;
                    typeof i == "function" && i(c, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
                } catch (s) {
                    dl(t, t.return, s)
                }
            } else
                _t(l, t, e, a);
            break;
        case 31:
            _t(l, t, e, a);
            break;
        case 13:
            _t(l, t, e, a);
            break;
        case 23:
            break;
        case 22:
            n = t.stateNode,
            c = t.alternate,
            t.memoizedState !== null ? n._visibility & 2 ? _t(l, t, e, a) : nu(l, t) : n._visibility & 2 ? _t(l, t, e, a) : (n._visibility |= 2,
            ya(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)),
            u & 2048 && Ei(c, t);
            break;
        case 24:
            _t(l, t, e, a),
            u & 2048 && Ni(t.alternate, t);
            break;
        default:
            _t(l, t, e, a)
        }
    }
    function ya(l, t, e, a, u) {
        for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var n = l
              , c = t
              , i = e
              , s = a
              , y = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                ya(n, c, i, s, u),
                au(8, c);
                break;
            case 23:
                break;
            case 22:
                var b = c.stateNode;
                c.memoizedState !== null ? b._visibility & 2 ? ya(n, c, i, s, u) : nu(n, c) : (b._visibility |= 2,
                ya(n, c, i, s, u)),
                u && y & 2048 && Ei(c.alternate, c);
                break;
            case 24:
                ya(n, c, i, s, u),
                u && y & 2048 && Ni(c.alternate, c);
                break;
            default:
                ya(n, c, i, s, u)
            }
            t = t.sibling
        }
    }
    function nu(l, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var e = l
                  , a = t
                  , u = a.flags;
                switch (a.tag) {
                case 22:
                    nu(e, a),
                    u & 2048 && Ei(a.alternate, a);
                    break;
                case 24:
                    nu(e, a),
                    u & 2048 && Ni(a.alternate, a);
                    break;
                default:
                    nu(e, a)
                }
                t = t.sibling
            }
    }
    var cu = 8192;
    function va(l, t, e) {
        if (l.subtreeFlags & cu)
            for (l = l.child; l !== null; )
                fr(l, t, e),
                l = l.sibling
    }
    function fr(l, t, e) {
        switch (l.tag) {
        case 26:
            va(l, t, e),
            l.flags & cu && l.memoizedState !== null && Fm(e, jt, l.memoizedState, l.memoizedProps);
            break;
        case 5:
            va(l, t, e);
            break;
        case 3:
        case 4:
            var a = jt;
            jt = _n(l.stateNode.containerInfo),
            va(l, t, e),
            jt = a;
            break;
        case 22:
            l.memoizedState === null && (a = l.alternate,
            a !== null && a.memoizedState !== null ? (a = cu,
            cu = 16777216,
            va(l, t, e),
            cu = a) : va(l, t, e));
            break;
        default:
            va(l, t, e)
        }
    }
    function sr(l) {
        var t = l.alternate;
        if (t !== null && (l = t.child,
        l !== null)) {
            t.child = null;
            do
                t = l.sibling,
                l.sibling = null,
                l = t;
            while (l !== null)
        }
    }
    function iu(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    Gl = a,
                    rr(a, l)
                }
            sr(l)
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null; )
                or(l),
                l = l.sibling
    }
    function or(l) {
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            iu(l),
            l.flags & 2048 && re(9, l, l.return);
            break;
        case 3:
            iu(l);
            break;
        case 12:
            iu(l);
            break;
        case 22:
            var t = l.stateNode;
            l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3,
            yn(l)) : iu(l);
            break;
        default:
            iu(l)
        }
    }
    function yn(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    Gl = a,
                    rr(a, l)
                }
            sr(l)
        }
        for (l = l.child; l !== null; ) {
            switch (t = l,
            t.tag) {
            case 0:
            case 11:
            case 15:
                re(8, t, t.return),
                yn(t);
                break;
            case 22:
                e = t.stateNode,
                e._visibility & 2 && (e._visibility &= -3,
                yn(t));
                break;
            default:
                yn(t)
            }
            l = l.sibling
        }
    }
    function rr(l, t) {
        for (; Gl !== null; ) {
            var e = Gl;
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                re(8, e, t);
                break;
            case 23:
            case 22:
                if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                    var a = e.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                La(e.memoizedState.cache)
            }
            if (a = e.child,
            a !== null)
                a.return = e,
                Gl = a;
            else
                l: for (e = l; Gl !== null; ) {
                    a = Gl;
                    var u = a.sibling
                      , n = a.return;
                    if (tr(a),
                    a === e) {
                        Gl = null;
                        break l
                    }
                    if (u !== null) {
                        u.return = n,
                        Gl = u;
                        break l
                    }
                    Gl = n
                }
        }
    }
    var dm = {
        getCacheForType: function(l) {
            var t = Zl(Dl)
              , e = t.data.get(l);
            return e === void 0 && (e = l(),
            t.data.set(l, e)),
            e
        },
        cacheSignal: function() {
            return Zl(Dl).controller.signal
        }
    }
      , mm = typeof WeakMap == "function" ? WeakMap : Map
      , ul = 0
      , vl = null
      , W = null
      , F = 0
      , rl = 0
      , dt = null
      , de = !1
      , ga = !1
      , ji = !1
      , $t = 0
      , Nl = 0
      , me = 0
      , Ze = 0
      , _i = 0
      , mt = 0
      , ba = 0
      , fu = null
      , tt = null
      , Mi = !1
      , vn = 0
      , dr = 0
      , gn = 1 / 0
      , bn = null
      , he = null
      , Hl = 0
      , ye = null
      , pa = null
      , Ft = 0
      , Oi = 0
      , Di = null
      , mr = null
      , su = 0
      , Ci = null;
    function ht() {
        return (ul & 2) !== 0 && F !== 0 ? F & -F : p.T !== null ? Yi() : _f()
    }
    function hr() {
        if (mt === 0)
            if ((F & 536870912) === 0 || P) {
                var l = Eu;
                Eu <<= 1,
                (Eu & 3932160) === 0 && (Eu = 262144),
                mt = l
            } else
                mt = 536870912;
        return l = ot.current,
        l !== null && (l.flags |= 32),
        mt
    }
    function et(l, t, e) {
        (l === vl && (rl === 2 || rl === 9) || l.cancelPendingCommit !== null) && (xa(l, 0),
        ve(l, F, mt, !1)),
        Oa(l, e),
        ((ul & 2) === 0 || l !== vl) && (l === vl && ((ul & 2) === 0 && (Ze |= e),
        Nl === 4 && ve(l, F, mt, !1)),
        Ct(l))
    }
    function yr(l, t, e) {
        if ((ul & 6) !== 0)
            throw Error(m(327));
        var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ma(l, t)
          , u = a ? vm(l, t) : Ri(l, t, !0)
          , n = a;
        do {
            if (u === 0) {
                ga && !a && ve(l, t, 0, !1);
                break
            } else {
                if (e = l.current.alternate,
                n && !hm(e)) {
                    u = Ri(l, t, !1),
                    n = !1;
                    continue
                }
                if (u === 2) {
                    if (n = t,
                    l.errorRecoveryDisabledLanes & n)
                        var c = 0;
                    else
                        c = l.pendingLanes & -536870913,
                        c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
                    if (c !== 0) {
                        t = c;
                        l: {
                            var i = l;
                            u = fu;
                            var s = i.current.memoizedState.isDehydrated;
                            if (s && (xa(i, c).flags |= 256),
                            c = Ri(i, c, !1),
                            c !== 2) {
                                if (ji && !s) {
                                    i.errorRecoveryDisabledLanes |= n,
                                    Ze |= n,
                                    u = 4;
                                    break l
                                }
                                n = tt,
                                tt = u,
                                n !== null && (tt === null ? tt = n : tt.push.apply(tt, n))
                            }
                            u = c
                        }
                        if (n = !1,
                        u !== 2)
                            continue
                    }
                }
                if (u === 1) {
                    xa(l, 0),
                    ve(l, t, 0, !0);
                    break
                }
                l: {
                    switch (a = l,
                    n = u,
                    n) {
                    case 0:
                    case 1:
                        throw Error(m(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        ve(a, t, mt, !de);
                        break l;
                    case 2:
                        tt = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(m(329))
                    }
                    if ((t & 62914560) === t && (u = vn + 300 - nt(),
                    10 < u)) {
                        if (ve(a, t, mt, !de),
                        ju(a, 0, !0) !== 0)
                            break l;
                        Ft = t,
                        a.timeoutHandle = Kr(vr.bind(null, a, e, tt, bn, Mi, t, mt, Ze, ba, de, n, "Throttled", -0, 0), u);
                        break l
                    }
                    vr(a, e, tt, bn, Mi, t, mt, Ze, ba, de, n, null, -0, 0)
                }
            }
            break
        } while (!0);
        Ct(l)
    }
    function vr(l, t, e, a, u, n, c, i, s, y, b, S, v, g) {
        if (l.timeoutHandle = -1,
        S = t.subtreeFlags,
        S & 8192 || (S & 16785408) === 16785408) {
            S = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Bt
            },
            fr(t, n, S);
            var O = (n & 62914560) === n ? vn - nt() : (n & 4194048) === n ? dr - nt() : 0;
            if (O = Im(S, O),
            O !== null) {
                Ft = n,
                l.cancelPendingCommit = O(Ar.bind(null, l, t, n, e, a, u, c, i, s, b, S, null, v, g)),
                ve(l, n, c, !y);
                return
            }
        }
        Ar(l, t, n, e, a, u, c, i, s)
    }
    function hm(l) {
        for (var t = l; ; ) {
            var e = t.tag;
            if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue,
            e !== null && (e = e.stores,
            e !== null)))
                for (var a = 0; a < e.length; a++) {
                    var u = e[a]
                      , n = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!ft(n(), u))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (e = t.child,
            t.subtreeFlags & 16384 && e !== null)
                e.return = t,
                t = e;
            else {
                if (t === l)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === l)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function ve(l, t, e, a) {
        t &= ~_i,
        t &= ~Ze,
        l.suspendedLanes |= t,
        l.pingedLanes &= ~t,
        a && (l.warmLanes |= t),
        a = l.expirationTimes;
        for (var u = t; 0 < u; ) {
            var n = 31 - it(u)
              , c = 1 << n;
            a[n] = -1,
            u &= ~c
        }
        e !== 0 && Ef(l, e, t)
    }
    function pn() {
        return (ul & 6) === 0 ? (ou(0),
        !1) : !0
    }
    function Ui() {
        if (W !== null) {
            if (rl === 0)
                var l = W.return;
            else
                l = W,
                Xt = Ue = null,
                Wc(l),
                oa = null,
                Ka = 0,
                l = W;
            for (; l !== null; )
                Jo(l.alternate, l),
                l = l.return;
            W = null
        }
    }
    function xa(l, t) {
        var e = l.timeoutHandle;
        e !== -1 && (l.timeoutHandle = -1,
        Rm(e)),
        e = l.cancelPendingCommit,
        e !== null && (l.cancelPendingCommit = null,
        e()),
        Ft = 0,
        Ui(),
        vl = l,
        W = e = Yt(l.current, null),
        F = t,
        rl = 0,
        dt = null,
        de = !1,
        ga = Ma(l, t),
        ji = !1,
        ba = mt = _i = Ze = me = Nl = 0,
        tt = fu = null,
        Mi = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var a = l.entangledLanes;
        if (a !== 0)
            for (l = l.entanglements,
            a &= t; 0 < a; ) {
                var u = 31 - it(a)
                  , n = 1 << u;
                t |= l[u],
                a &= ~n
            }
        return $t = t,
        Gu(),
        e
    }
    function gr(l, t) {
        Z = null,
        p.H = lu,
        t === sa || t === Ju ? (t = Cs(),
        rl = 3) : t === qc ? (t = Cs(),
        rl = 4) : rl = t === ri ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        dt = t,
        W === null && (Nl = 1,
        fn(l, bt(t, l.current)))
    }
    function br() {
        var l = ot.current;
        return l === null ? !0 : (F & 4194048) === F ? zt === null : (F & 62914560) === F || (F & 536870912) !== 0 ? l === zt : !1
    }
    function pr() {
        var l = p.H;
        return p.H = lu,
        l === null ? lu : l
    }
    function xr() {
        var l = p.A;
        return p.A = dm,
        l
    }
    function xn() {
        Nl = 4,
        de || (F & 4194048) !== F && ot.current !== null || (ga = !0),
        (me & 134217727) === 0 && (Ze & 134217727) === 0 || vl === null || ve(vl, F, mt, !1)
    }
    function Ri(l, t, e) {
        var a = ul;
        ul |= 2;
        var u = pr()
          , n = xr();
        (vl !== l || F !== t) && (bn = null,
        xa(l, t)),
        t = !1;
        var c = Nl;
        l: do
            try {
                if (rl !== 0 && W !== null) {
                    var i = W
                      , s = dt;
                    switch (rl) {
                    case 8:
                        Ui(),
                        c = 6;
                        break l;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        ot.current === null && (t = !0);
                        var y = rl;
                        if (rl = 0,
                        dt = null,
                        Sa(l, i, s, y),
                        e && ga) {
                            c = 0;
                            break l
                        }
                        break;
                    default:
                        y = rl,
                        rl = 0,
                        dt = null,
                        Sa(l, i, s, y)
                    }
                }
                ym(),
                c = Nl;
                break
            } catch (b) {
                gr(l, b)
            }
        while (!0);
        return t && l.shellSuspendCounter++,
        Xt = Ue = null,
        ul = a,
        p.H = u,
        p.A = n,
        W === null && (vl = null,
        F = 0,
        Gu()),
        c
    }
    function ym() {
        for (; W !== null; )
            Sr(W)
    }
    function vm(l, t) {
        var e = ul;
        ul |= 2;
        var a = pr()
          , u = xr();
        vl !== l || F !== t ? (bn = null,
        gn = nt() + 500,
        xa(l, t)) : ga = Ma(l, t);
        l: do
            try {
                if (rl !== 0 && W !== null) {
                    t = W;
                    var n = dt;
                    t: switch (rl) {
                    case 1:
                        rl = 0,
                        dt = null,
                        Sa(l, t, n, 1);
                        break;
                    case 2:
                    case 9:
                        if (Os(n)) {
                            rl = 0,
                            dt = null,
                            zr(t);
                            break
                        }
                        t = function() {
                            rl !== 2 && rl !== 9 || vl !== l || (rl = 7),
                            Ct(l)
                        }
                        ,
                        n.then(t, t);
                        break l;
                    case 3:
                        rl = 7;
                        break l;
                    case 4:
                        rl = 5;
                        break l;
                    case 7:
                        Os(n) ? (rl = 0,
                        dt = null,
                        zr(t)) : (rl = 0,
                        dt = null,
                        Sa(l, t, n, 7));
                        break;
                    case 5:
                        var c = null;
                        switch (W.tag) {
                        case 26:
                            c = W.memoizedState;
                        case 5:
                        case 27:
                            var i = W;
                            if (c ? id(c) : i.stateNode.complete) {
                                rl = 0,
                                dt = null;
                                var s = i.sibling;
                                if (s !== null)
                                    W = s;
                                else {
                                    var y = i.return;
                                    y !== null ? (W = y,
                                    Sn(y)) : W = null
                                }
                                break t
                            }
                        }
                        rl = 0,
                        dt = null,
                        Sa(l, t, n, 5);
                        break;
                    case 6:
                        rl = 0,
                        dt = null,
                        Sa(l, t, n, 6);
                        break;
                    case 8:
                        Ui(),
                        Nl = 6;
                        break l;
                    default:
                        throw Error(m(462))
                    }
                }
                gm();
                break
            } catch (b) {
                gr(l, b)
            }
        while (!0);
        return Xt = Ue = null,
        p.H = a,
        p.A = u,
        ul = e,
        W !== null ? 0 : (vl = null,
        F = 0,
        Gu(),
        Nl)
    }
    function gm() {
        for (; W !== null && !Xd(); )
            Sr(W)
    }
    function Sr(l) {
        var t = wo(l.alternate, l, $t);
        l.memoizedProps = l.pendingProps,
        t === null ? Sn(l) : W = t
    }
    function zr(l) {
        var t = l
          , e = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Go(e, t, t.pendingProps, t.type, void 0, F);
            break;
        case 11:
            t = Go(e, t, t.pendingProps, t.type.render, t.ref, F);
            break;
        case 5:
            Wc(t);
        default:
            Jo(e, t),
            t = W = ps(t, $t),
            t = wo(e, t, $t)
        }
        l.memoizedProps = l.pendingProps,
        t === null ? Sn(l) : W = t
    }
    function Sa(l, t, e, a) {
        Xt = Ue = null,
        Wc(t),
        oa = null,
        Ka = 0;
        var u = t.return;
        try {
            if (nm(l, u, t, e, F)) {
                Nl = 1,
                fn(l, bt(e, l.current)),
                W = null;
                return
            }
        } catch (n) {
            if (u !== null)
                throw W = u,
                n;
            Nl = 1,
            fn(l, bt(e, l.current)),
            W = null;
            return
        }
        t.flags & 32768 ? (P || a === 1 ? l = !0 : ga || (F & 536870912) !== 0 ? l = !1 : (de = l = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = ot.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        Tr(t, l)) : Sn(t)
    }
    function Sn(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                Tr(t, de);
                return
            }
            l = t.return;
            var e = fm(t.alternate, t, $t);
            if (e !== null) {
                W = e;
                return
            }
            if (t = t.sibling,
            t !== null) {
                W = t;
                return
            }
            W = t = l
        } while (t !== null);
        Nl === 0 && (Nl = 5)
    }
    function Tr(l, t) {
        do {
            var e = sm(l.alternate, l);
            if (e !== null) {
                e.flags &= 32767,
                W = e;
                return
            }
            if (e = l.return,
            e !== null && (e.flags |= 32768,
            e.subtreeFlags = 0,
            e.deletions = null),
            !t && (l = l.sibling,
            l !== null)) {
                W = l;
                return
            }
            W = l = e
        } while (l !== null);
        Nl = 6,
        W = null
    }
    function Ar(l, t, e, a, u, n, c, i, s) {
        l.cancelPendingCommit = null;
        do
            zn();
        while (Hl !== 0);
        if ((ul & 6) !== 0)
            throw Error(m(327));
        if (t !== null) {
            if (t === l.current)
                throw Error(m(177));
            if (n = t.lanes | t.childLanes,
            n |= zc,
            $d(l, e, n, c, i, s),
            l === vl && (W = vl = null,
            F = 0),
            pa = t,
            ye = l,
            Ft = e,
            Oi = n,
            Di = u,
            mr = a,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null,
            l.callbackPriority = 0,
            Sm(Tu, function() {
                return Mr(),
                null
            })) : (l.callbackNode = null,
            l.callbackPriority = 0),
            a = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || a) {
                a = p.T,
                p.T = null,
                u = j.p,
                j.p = 2,
                c = ul,
                ul |= 4;
                try {
                    om(l, t, e)
                } finally {
                    ul = c,
                    j.p = u,
                    p.T = a
                }
            }
            Hl = 1,
            Er(),
            Nr(),
            jr()
        }
    }
    function Er() {
        if (Hl === 1) {
            Hl = 0;
            var l = ye
              , t = pa
              , e = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || e) {
                e = p.T,
                p.T = null;
                var a = j.p;
                j.p = 2;
                var u = ul;
                ul |= 4;
                try {
                    nr(t, l);
                    var n = Ki
                      , c = os(l.containerInfo)
                      , i = n.focusedElem
                      , s = n.selectionRange;
                    if (c !== i && i && i.ownerDocument && ss(i.ownerDocument.documentElement, i)) {
                        if (s !== null && gc(i)) {
                            var y = s.start
                              , b = s.end;
                            if (b === void 0 && (b = y),
                            "selectionStart" in i)
                                i.selectionStart = y,
                                i.selectionEnd = Math.min(b, i.value.length);
                            else {
                                var S = i.ownerDocument || document
                                  , v = S && S.defaultView || window;
                                if (v.getSelection) {
                                    var g = v.getSelection()
                                      , O = i.textContent.length
                                      , Y = Math.min(s.start, O)
                                      , yl = s.end === void 0 ? Y : Math.min(s.end, O);
                                    !g.extend && Y > yl && (c = yl,
                                    yl = Y,
                                    Y = c);
                                    var d = fs(i, Y)
                                      , o = fs(i, yl);
                                    if (d && o && (g.rangeCount !== 1 || g.anchorNode !== d.node || g.anchorOffset !== d.offset || g.focusNode !== o.node || g.focusOffset !== o.offset)) {
                                        var h = S.createRange();
                                        h.setStart(d.node, d.offset),
                                        g.removeAllRanges(),
                                        Y > yl ? (g.addRange(h),
                                        g.extend(o.node, o.offset)) : (h.setEnd(o.node, o.offset),
                                        g.addRange(h))
                                    }
                                }
                            }
                        }
                        for (S = [],
                        g = i; g = g.parentNode; )
                            g.nodeType === 1 && S.push({
                                element: g,
                                left: g.scrollLeft,
                                top: g.scrollTop
                            });
                        for (typeof i.focus == "function" && i.focus(),
                        i = 0; i < S.length; i++) {
                            var x = S[i];
                            x.element.scrollLeft = x.left,
                            x.element.scrollTop = x.top
                        }
                    }
                    Rn = !!wi,
                    Ki = wi = null
                } finally {
                    ul = u,
                    j.p = a,
                    p.T = e
                }
            }
            l.current = t,
            Hl = 2
        }
    }
    function Nr() {
        if (Hl === 2) {
            Hl = 0;
            var l = ye
              , t = pa
              , e = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || e) {
                e = p.T,
                p.T = null;
                var a = j.p;
                j.p = 2;
                var u = ul;
                ul |= 4;
                try {
                    lr(l, t.alternate, t)
                } finally {
                    ul = u,
                    j.p = a,
                    p.T = e
                }
            }
            Hl = 3
        }
    }
    function jr() {
        if (Hl === 4 || Hl === 3) {
            Hl = 0,
            Qd();
            var l = ye
              , t = pa
              , e = Ft
              , a = mr;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Hl = 5 : (Hl = 0,
            pa = ye = null,
            _r(l, l.pendingLanes));
            var u = l.pendingLanes;
            if (u === 0 && (he = null),
            In(e),
            t = t.stateNode,
            ct && typeof ct.onCommitFiberRoot == "function")
                try {
                    ct.onCommitFiberRoot(_a, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                t = p.T,
                u = j.p,
                j.p = 2,
                p.T = null;
                try {
                    for (var n = l.onRecoverableError, c = 0; c < a.length; c++) {
                        var i = a[c];
                        n(i.value, {
                            componentStack: i.stack
                        })
                    }
                } finally {
                    p.T = t,
                    j.p = u
                }
            }
            (Ft & 3) !== 0 && zn(),
            Ct(l),
            u = l.pendingLanes,
            (e & 261930) !== 0 && (u & 42) !== 0 ? l === Ci ? su++ : (su = 0,
            Ci = l) : su = 0,
            ou(0)
        }
    }
    function _r(l, t) {
        (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache,
        t != null && (l.pooledCache = null,
        La(t)))
    }
    function zn() {
        return Er(),
        Nr(),
        jr(),
        Mr()
    }
    function Mr() {
        if (Hl !== 5)
            return !1;
        var l = ye
          , t = Oi;
        Oi = 0;
        var e = In(Ft)
          , a = p.T
          , u = j.p;
        try {
            j.p = 32 > e ? 32 : e,
            p.T = null,
            e = Di,
            Di = null;
            var n = ye
              , c = Ft;
            if (Hl = 0,
            pa = ye = null,
            Ft = 0,
            (ul & 6) !== 0)
                throw Error(m(331));
            var i = ul;
            if (ul |= 4,
            or(n.current),
            ir(n, n.current, c, e),
            ul = i,
            ou(0, !1),
            ct && typeof ct.onPostCommitFiberRoot == "function")
                try {
                    ct.onPostCommitFiberRoot(_a, n)
                } catch {}
            return !0
        } finally {
            j.p = u,
            p.T = a,
            _r(l, t)
        }
    }
    function Or(l, t, e) {
        t = bt(e, t),
        t = oi(l.stateNode, t, 2),
        l = fe(l, t, 2),
        l !== null && (Oa(l, 2),
        Ct(l))
    }
    function dl(l, t, e) {
        if (l.tag === 3)
            Or(l, l, e);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Or(t, l, e);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (he === null || !he.has(a))) {
                        l = bt(e, l),
                        e = Do(2),
                        a = fe(t, e, 2),
                        a !== null && (Co(e, a, t, l),
                        Oa(a, 2),
                        Ct(a));
                        break
                    }
                }
                t = t.return
            }
    }
    function Hi(l, t, e) {
        var a = l.pingCache;
        if (a === null) {
            a = l.pingCache = new mm;
            var u = new Set;
            a.set(t, u)
        } else
            u = a.get(t),
            u === void 0 && (u = new Set,
            a.set(t, u));
        u.has(e) || (ji = !0,
        u.add(e),
        l = bm.bind(null, l, t, e),
        t.then(l, l))
    }
    function bm(l, t, e) {
        var a = l.pingCache;
        a !== null && a.delete(t),
        l.pingedLanes |= l.suspendedLanes & e,
        l.warmLanes &= ~e,
        vl === l && (F & e) === e && (Nl === 4 || Nl === 3 && (F & 62914560) === F && 300 > nt() - vn ? (ul & 2) === 0 && xa(l, 0) : _i |= e,
        ba === F && (ba = 0)),
        Ct(l)
    }
    function Dr(l, t) {
        t === 0 && (t = Af()),
        l = Oe(l, t),
        l !== null && (Oa(l, t),
        Ct(l))
    }
    function pm(l) {
        var t = l.memoizedState
          , e = 0;
        t !== null && (e = t.retryLane),
        Dr(l, e)
    }
    function xm(l, t) {
        var e = 0;
        switch (l.tag) {
        case 31:
        case 13:
            var a = l.stateNode
              , u = l.memoizedState;
            u !== null && (e = u.retryLane);
            break;
        case 19:
            a = l.stateNode;
            break;
        case 22:
            a = l.stateNode._retryCache;
            break;
        default:
            throw Error(m(314))
        }
        a !== null && a.delete(t),
        Dr(l, e)
    }
    function Sm(l, t) {
        return kn(l, t)
    }
    var Tn = null
      , za = null
      , Bi = !1
      , An = !1
      , qi = !1
      , ge = 0;
    function Ct(l) {
        l !== za && l.next === null && (za === null ? Tn = za = l : za = za.next = l),
        An = !0,
        Bi || (Bi = !0,
        Tm())
    }
    function ou(l, t) {
        if (!qi && An) {
            qi = !0;
            do
                for (var e = !1, a = Tn; a !== null; ) {
                    if (l !== 0) {
                        var u = a.pendingLanes;
                        if (u === 0)
                            var n = 0;
                        else {
                            var c = a.suspendedLanes
                              , i = a.pingedLanes;
                            n = (1 << 31 - it(42 | l) + 1) - 1,
                            n &= u & ~(c & ~i),
                            n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                        }
                        n !== 0 && (e = !0,
                        Hr(a, n))
                    } else
                        n = F,
                        n = ju(a, a === vl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (n & 3) === 0 || Ma(a, n) || (e = !0,
                        Hr(a, n));
                    a = a.next
                }
            while (e);
            qi = !1
        }
    }
    function zm() {
        Cr()
    }
    function Cr() {
        An = Bi = !1;
        var l = 0;
        ge !== 0 && Um() && (l = ge);
        for (var t = nt(), e = null, a = Tn; a !== null; ) {
            var u = a.next
              , n = Ur(a, t);
            n === 0 ? (a.next = null,
            e === null ? Tn = u : e.next = u,
            u === null && (za = e)) : (e = a,
            (l !== 0 || (n & 3) !== 0) && (An = !0)),
            a = u
        }
        Hl !== 0 && Hl !== 5 || ou(l),
        ge !== 0 && (ge = 0)
    }
    function Ur(l, t) {
        for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
            var c = 31 - it(n)
              , i = 1 << c
              , s = u[c];
            s === -1 ? ((i & e) === 0 || (i & a) !== 0) && (u[c] = Wd(i, t)) : s <= t && (l.expiredLanes |= i),
            n &= ~i
        }
        if (t = vl,
        e = F,
        e = ju(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
        a = l.callbackNode,
        e === 0 || l === t && (rl === 2 || rl === 9) || l.cancelPendingCommit !== null)
            return a !== null && a !== null && Wn(a),
            l.callbackNode = null,
            l.callbackPriority = 0;
        if ((e & 3) === 0 || Ma(l, e)) {
            if (t = e & -e,
            t === l.callbackPriority)
                return t;
            switch (a !== null && Wn(a),
            In(e)) {
            case 2:
            case 8:
                e = zf;
                break;
            case 32:
                e = Tu;
                break;
            case 268435456:
                e = Tf;
                break;
            default:
                e = Tu
            }
            return a = Rr.bind(null, l),
            e = kn(e, a),
            l.callbackPriority = t,
            l.callbackNode = e,
            t
        }
        return a !== null && a !== null && Wn(a),
        l.callbackPriority = 2,
        l.callbackNode = null,
        2
    }
    function Rr(l, t) {
        if (Hl !== 0 && Hl !== 5)
            return l.callbackNode = null,
            l.callbackPriority = 0,
            null;
        var e = l.callbackNode;
        if (zn() && l.callbackNode !== e)
            return null;
        var a = F;
        return a = ju(l, l === vl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
        a === 0 ? null : (yr(l, a, t),
        Ur(l, nt()),
        l.callbackNode != null && l.callbackNode === e ? Rr.bind(null, l) : null)
    }
    function Hr(l, t) {
        if (zn())
            return null;
        yr(l, t, !0)
    }
    function Tm() {
        Hm(function() {
            (ul & 6) !== 0 ? kn(Sf, zm) : Cr()
        })
    }
    function Yi() {
        if (ge === 0) {
            var l = ia;
            l === 0 && (l = Au,
            Au <<= 1,
            (Au & 261888) === 0 && (Au = 256)),
            ge = l
        }
        return ge
    }
    function Br(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Du("" + l)
    }
    function qr(l, t) {
        var e = t.ownerDocument.createElement("input");
        return e.name = t.name,
        e.value = t.value,
        l.id && e.setAttribute("form", l.id),
        t.parentNode.insertBefore(e, t),
        l = new FormData(l),
        e.parentNode.removeChild(e),
        l
    }
    function Am(l, t, e, a, u) {
        if (t === "submit" && e && e.stateNode === u) {
            var n = Br((u[$l] || null).action)
              , c = a.submitter;
            c && (t = (t = c[$l] || null) ? Br(t.formAction) : c.getAttribute("formAction"),
            t !== null && (n = t,
            c = null));
            var i = new Hu("action","action",null,a,u);
            l.push({
                event: i,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (ge !== 0) {
                                var s = c ? qr(u, c) : new FormData(u);
                                ui(e, {
                                    pending: !0,
                                    data: s,
                                    method: u.method,
                                    action: n
                                }, null, s)
                            }
                        } else
                            typeof n == "function" && (i.preventDefault(),
                            s = c ? qr(u, c) : new FormData(u),
                            ui(e, {
                                pending: !0,
                                data: s,
                                method: u.method,
                                action: n
                            }, n, s))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var Gi = 0; Gi < Sc.length; Gi++) {
        var Xi = Sc[Gi]
          , Em = Xi.toLowerCase()
          , Nm = Xi[0].toUpperCase() + Xi.slice(1);
        Nt(Em, "on" + Nm)
    }
    Nt(ms, "onAnimationEnd"),
    Nt(hs, "onAnimationIteration"),
    Nt(ys, "onAnimationStart"),
    Nt("dblclick", "onDoubleClick"),
    Nt("focusin", "onFocus"),
    Nt("focusout", "onBlur"),
    Nt(Z0, "onTransitionRun"),
    Nt(V0, "onTransitionStart"),
    Nt(L0, "onTransitionCancel"),
    Nt(vs, "onTransitionEnd"),
    Je("onMouseEnter", ["mouseout", "mouseover"]),
    Je("onMouseLeave", ["mouseout", "mouseover"]),
    Je("onPointerEnter", ["pointerout", "pointerover"]),
    Je("onPointerLeave", ["pointerout", "pointerover"]),
    Ne("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ne("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Ne("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ne("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ne("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Ne("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var ru = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , jm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ru));
    function Yr(l, t) {
        t = (t & 4) !== 0;
        for (var e = 0; e < l.length; e++) {
            var a = l[e]
              , u = a.event;
            a = a.listeners;
            l: {
                var n = void 0;
                if (t)
                    for (var c = a.length - 1; 0 <= c; c--) {
                        var i = a[c]
                          , s = i.instance
                          , y = i.currentTarget;
                        if (i = i.listener,
                        s !== n && u.isPropagationStopped())
                            break l;
                        n = i,
                        u.currentTarget = y;
                        try {
                            n(u)
                        } catch (b) {
                            Yu(b)
                        }
                        u.currentTarget = null,
                        n = s
                    }
                else
                    for (c = 0; c < a.length; c++) {
                        if (i = a[c],
                        s = i.instance,
                        y = i.currentTarget,
                        i = i.listener,
                        s !== n && u.isPropagationStopped())
                            break l;
                        n = i,
                        u.currentTarget = y;
                        try {
                            n(u)
                        } catch (b) {
                            Yu(b)
                        }
                        u.currentTarget = null,
                        n = s
                    }
            }
        }
    }
    function $(l, t) {
        var e = t[Pn];
        e === void 0 && (e = t[Pn] = new Set);
        var a = l + "__bubble";
        e.has(a) || (Gr(t, l, 2, !1),
        e.add(a))
    }
    function Qi(l, t, e) {
        var a = 0;
        t && (a |= 4),
        Gr(e, l, a, t)
    }
    var En = "_reactListening" + Math.random().toString(36).slice(2);
    function Zi(l) {
        if (!l[En]) {
            l[En] = !0,
            Df.forEach(function(e) {
                e !== "selectionchange" && (jm.has(e) || Qi(e, !1, l),
                Qi(e, !0, l))
            });
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[En] || (t[En] = !0,
            Qi("selectionchange", !1, t))
        }
    }
    function Gr(l, t, e, a) {
        switch (hd(t)) {
        case 2:
            var u = t1;
            break;
        case 8:
            u = e1;
            break;
        default:
            u = af
        }
        e = u.bind(null, t, e, l),
        u = void 0,
        !fc || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0),
        a ? u !== void 0 ? l.addEventListener(t, e, {
            capture: !0,
            passive: u
        }) : l.addEventListener(t, e, !0) : u !== void 0 ? l.addEventListener(t, e, {
            passive: u
        }) : l.addEventListener(t, e, !1)
    }
    function Vi(l, t, e, a, u) {
        var n = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            l: for (; ; ) {
                if (a === null)
                    return;
                var c = a.tag;
                if (c === 3 || c === 4) {
                    var i = a.stateNode.containerInfo;
                    if (i === u)
                        break;
                    if (c === 4)
                        for (c = a.return; c !== null; ) {
                            var s = c.tag;
                            if ((s === 3 || s === 4) && c.stateNode.containerInfo === u)
                                return;
                            c = c.return
                        }
                    for (; i !== null; ) {
                        if (c = Le(i),
                        c === null)
                            return;
                        if (s = c.tag,
                        s === 5 || s === 6 || s === 26 || s === 27) {
                            a = n = c;
                            continue l
                        }
                        i = i.parentNode
                    }
                }
                a = a.return
            }
        Vf(function() {
            var y = n
              , b = cc(e)
              , S = [];
            l: {
                var v = gs.get(l);
                if (v !== void 0) {
                    var g = Hu
                      , O = l;
                    switch (l) {
                    case "keypress":
                        if (Uu(e) === 0)
                            break l;
                    case "keydown":
                    case "keyup":
                        g = x0;
                        break;
                    case "focusin":
                        O = "focus",
                        g = dc;
                        break;
                    case "focusout":
                        O = "blur",
                        g = dc;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        g = dc;
                        break;
                    case "click":
                        if (e.button === 2)
                            break l;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        g = Kf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        g = f0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        g = T0;
                        break;
                    case ms:
                    case hs:
                    case ys:
                        g = r0;
                        break;
                    case vs:
                        g = E0;
                        break;
                    case "scroll":
                    case "scrollend":
                        g = c0;
                        break;
                    case "wheel":
                        g = j0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        g = m0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        g = kf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        g = M0
                    }
                    var Y = (t & 4) !== 0
                      , yl = !Y && (l === "scroll" || l === "scrollend")
                      , d = Y ? v !== null ? v + "Capture" : null : v;
                    Y = [];
                    for (var o = y, h; o !== null; ) {
                        var x = o;
                        if (h = x.stateNode,
                        x = x.tag,
                        x !== 5 && x !== 26 && x !== 27 || h === null || d === null || (x = Ua(o, d),
                        x != null && Y.push(du(o, x, h))),
                        yl)
                            break;
                        o = o.return
                    }
                    0 < Y.length && (v = new g(v,O,null,e,b),
                    S.push({
                        event: v,
                        listeners: Y
                    }))
                }
            }
            if ((t & 7) === 0) {
                l: {
                    if (v = l === "mouseover" || l === "pointerover",
                    g = l === "mouseout" || l === "pointerout",
                    v && e !== nc && (O = e.relatedTarget || e.fromElement) && (Le(O) || O[Ve]))
                        break l;
                    if ((g || v) && (v = b.window === b ? b : (v = b.ownerDocument) ? v.defaultView || v.parentWindow : window,
                    g ? (O = e.relatedTarget || e.toElement,
                    g = y,
                    O = O ? Le(O) : null,
                    O !== null && (yl = R(O),
                    Y = O.tag,
                    O !== yl || Y !== 5 && Y !== 27 && Y !== 6) && (O = null)) : (g = null,
                    O = y),
                    g !== O)) {
                        if (Y = Kf,
                        x = "onMouseLeave",
                        d = "onMouseEnter",
                        o = "mouse",
                        (l === "pointerout" || l === "pointerover") && (Y = kf,
                        x = "onPointerLeave",
                        d = "onPointerEnter",
                        o = "pointer"),
                        yl = g == null ? v : Ca(g),
                        h = O == null ? v : Ca(O),
                        v = new Y(x,o + "leave",g,e,b),
                        v.target = yl,
                        v.relatedTarget = h,
                        x = null,
                        Le(b) === y && (Y = new Y(d,o + "enter",O,e,b),
                        Y.target = h,
                        Y.relatedTarget = yl,
                        x = Y),
                        yl = x,
                        g && O)
                            t: {
                                for (Y = _m,
                                d = g,
                                o = O,
                                h = 0,
                                x = d; x; x = Y(x))
                                    h++;
                                x = 0;
                                for (var H = o; H; H = Y(H))
                                    x++;
                                for (; 0 < h - x; )
                                    d = Y(d),
                                    h--;
                                for (; 0 < x - h; )
                                    o = Y(o),
                                    x--;
                                for (; h--; ) {
                                    if (d === o || o !== null && d === o.alternate) {
                                        Y = d;
                                        break t
                                    }
                                    d = Y(d),
                                    o = Y(o)
                                }
                                Y = null
                            }
                        else
                            Y = null;
                        g !== null && Xr(S, v, g, Y, !1),
                        O !== null && yl !== null && Xr(S, yl, O, Y, !0)
                    }
                }
                l: {
                    if (v = y ? Ca(y) : window,
                    g = v.nodeName && v.nodeName.toLowerCase(),
                    g === "select" || g === "input" && v.type === "file")
                        var el = es;
                    else if (ls(v))
                        if (as)
                            el = G0;
                        else {
                            el = q0;
                            var C = B0
                        }
                    else
                        g = v.nodeName,
                        !g || g.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? y && uc(y.elementType) && (el = es) : el = Y0;
                    if (el && (el = el(l, y))) {
                        ts(S, el, e, b);
                        break l
                    }
                    C && C(l, v, y),
                    l === "focusout" && y && v.type === "number" && y.memoizedProps.value != null && ac(v, "number", v.value)
                }
                switch (C = y ? Ca(y) : window,
                l) {
                case "focusin":
                    (ls(C) || C.contentEditable === "true") && (Pe = C,
                    bc = y,
                    Qa = null);
                    break;
                case "focusout":
                    Qa = bc = Pe = null;
                    break;
                case "mousedown":
                    pc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    pc = !1,
                    rs(S, e, b);
                    break;
                case "selectionchange":
                    if (Q0)
                        break;
                case "keydown":
                case "keyup":
                    rs(S, e, b)
                }
                var w;
                if (hc)
                    l: {
                        switch (l) {
                        case "compositionstart":
                            var I = "onCompositionStart";
                            break l;
                        case "compositionend":
                            I = "onCompositionEnd";
                            break l;
                        case "compositionupdate":
                            I = "onCompositionUpdate";
                            break l
                        }
                        I = void 0
                    }
                else
                    Ie ? If(l, e) && (I = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (I = "onCompositionStart");
                I && (Wf && e.locale !== "ko" && (Ie || I !== "onCompositionStart" ? I === "onCompositionEnd" && Ie && (w = Lf()) : (te = b,
                sc = "value" in te ? te.value : te.textContent,
                Ie = !0)),
                C = Nn(y, I),
                0 < C.length && (I = new Jf(I,l,null,e,b),
                S.push({
                    event: I,
                    listeners: C
                }),
                w ? I.data = w : (w = Pf(e),
                w !== null && (I.data = w)))),
                (w = D0 ? C0(l, e) : U0(l, e)) && (I = Nn(y, "onBeforeInput"),
                0 < I.length && (C = new Jf("onBeforeInput","beforeinput",null,e,b),
                S.push({
                    event: C,
                    listeners: I
                }),
                C.data = w)),
                Am(S, l, y, e, b)
            }
            Yr(S, t)
        })
    }
    function du(l, t, e) {
        return {
            instance: l,
            listener: t,
            currentTarget: e
        }
    }
    function Nn(l, t) {
        for (var e = t + "Capture", a = []; l !== null; ) {
            var u = l
              , n = u.stateNode;
            if (u = u.tag,
            u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ua(l, e),
            u != null && a.unshift(du(l, u, n)),
            u = Ua(l, t),
            u != null && a.push(du(l, u, n))),
            l.tag === 3)
                return a;
            l = l.return
        }
        return []
    }
    function _m(l) {
        if (l === null)
            return null;
        do
            l = l.return;
        while (l && l.tag !== 5 && l.tag !== 27);
        return l || null
    }
    function Xr(l, t, e, a, u) {
        for (var n = t._reactName, c = []; e !== null && e !== a; ) {
            var i = e
              , s = i.alternate
              , y = i.stateNode;
            if (i = i.tag,
            s !== null && s === a)
                break;
            i !== 5 && i !== 26 && i !== 27 || y === null || (s = y,
            u ? (y = Ua(e, n),
            y != null && c.unshift(du(e, y, s))) : u || (y = Ua(e, n),
            y != null && c.push(du(e, y, s)))),
            e = e.return
        }
        c.length !== 0 && l.push({
            event: t,
            listeners: c
        })
    }
    var Mm = /\r\n?/g
      , Om = /\u0000|\uFFFD/g;
    function Qr(l) {
        return (typeof l == "string" ? l : "" + l).replace(Mm, `
`).replace(Om, "")
    }
    function Zr(l, t) {
        return t = Qr(t),
        Qr(l) === t
    }
    function hl(l, t, e, a, u, n) {
        switch (e) {
        case "children":
            typeof a == "string" ? t === "body" || t === "textarea" && a === "" || We(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && We(l, "" + a);
            break;
        case "className":
            Mu(l, "class", a);
            break;
        case "tabIndex":
            Mu(l, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Mu(l, e, a);
            break;
        case "style":
            Qf(l, a, n);
            break;
        case "data":
            if (t !== "object") {
                Mu(l, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (t !== "a" || e !== "href")) {
                l.removeAttribute(e);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                l.removeAttribute(e);
                break
            }
            a = Du("" + a),
            l.setAttribute(e, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof n == "function" && (e === "formAction" ? (t !== "input" && hl(l, t, "name", u.name, u, null),
                hl(l, t, "formEncType", u.formEncType, u, null),
                hl(l, t, "formMethod", u.formMethod, u, null),
                hl(l, t, "formTarget", u.formTarget, u, null)) : (hl(l, t, "encType", u.encType, u, null),
                hl(l, t, "method", u.method, u, null),
                hl(l, t, "target", u.target, u, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                l.removeAttribute(e);
                break
            }
            a = Du("" + a),
            l.setAttribute(e, a);
            break;
        case "onClick":
            a != null && (l.onclick = Bt);
            break;
        case "onScroll":
            a != null && $("scroll", l);
            break;
        case "onScrollEnd":
            a != null && $("scrollend", l);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                    throw Error(m(61));
                if (e = a.__html,
                e != null) {
                    if (u.children != null)
                        throw Error(m(60));
                    l.innerHTML = e
                }
            }
            break;
        case "multiple":
            l.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            l.muted = a && typeof a != "function" && typeof a != "symbol";
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
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                l.removeAttribute("xlink:href");
                break
            }
            e = Du("" + a),
            l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
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
            a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
            break;
        case "capture":
        case "download":
            a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
            break;
        case "popover":
            $("beforetoggle", l),
            $("toggle", l),
            _u(l, "popover", a);
            break;
        case "xlinkActuate":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            Ht(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            Ht(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            _u(l, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = u0.get(e) || e,
            _u(l, e, a))
        }
    }
    function Li(l, t, e, a, u, n) {
        switch (e) {
        case "style":
            Qf(l, a, n);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                    throw Error(m(61));
                if (e = a.__html,
                e != null) {
                    if (u.children != null)
                        throw Error(m(60));
                    l.innerHTML = e
                }
            }
            break;
        case "children":
            typeof a == "string" ? We(l, a) : (typeof a == "number" || typeof a == "bigint") && We(l, "" + a);
            break;
        case "onScroll":
            a != null && $("scroll", l);
            break;
        case "onScrollEnd":
            a != null && $("scrollend", l);
            break;
        case "onClick":
            a != null && (l.onclick = Bt);
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
            if (!Cf.hasOwnProperty(e))
                l: {
                    if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"),
                    t = e.slice(2, u ? e.length - 7 : void 0),
                    n = l[$l] || null,
                    n = n != null ? n[e] : null,
                    typeof n == "function" && l.removeEventListener(t, n, u),
                    typeof a == "function")) {
                        typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)),
                        l.addEventListener(t, a, u);
                        break l
                    }
                    e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : _u(l, e, a)
                }
        }
    }
    function Ll(l, t, e) {
        switch (t) {
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
            $("error", l),
            $("load", l);
            var a = !1, u = !1, n;
            for (n in e)
                if (e.hasOwnProperty(n)) {
                    var c = e[n];
                    if (c != null)
                        switch (n) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            u = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(m(137, t));
                        default:
                            hl(l, t, n, c, e, null)
                        }
                }
            u && hl(l, t, "srcSet", e.srcSet, e, null),
            a && hl(l, t, "src", e.src, e, null);
            return;
        case "input":
            $("invalid", l);
            var i = n = c = u = null
              , s = null
              , y = null;
            for (a in e)
                if (e.hasOwnProperty(a)) {
                    var b = e[a];
                    if (b != null)
                        switch (a) {
                        case "name":
                            u = b;
                            break;
                        case "type":
                            c = b;
                            break;
                        case "checked":
                            s = b;
                            break;
                        case "defaultChecked":
                            y = b;
                            break;
                        case "value":
                            n = b;
                            break;
                        case "defaultValue":
                            i = b;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (b != null)
                                throw Error(m(137, t));
                            break;
                        default:
                            hl(l, t, a, b, e, null)
                        }
                }
            qf(l, n, i, s, y, c, u, !1);
            return;
        case "select":
            $("invalid", l),
            a = c = n = null;
            for (u in e)
                if (e.hasOwnProperty(u) && (i = e[u],
                i != null))
                    switch (u) {
                    case "value":
                        n = i;
                        break;
                    case "defaultValue":
                        c = i;
                        break;
                    case "multiple":
                        a = i;
                    default:
                        hl(l, t, u, i, e, null)
                    }
            t = n,
            e = c,
            l.multiple = !!a,
            t != null ? ke(l, !!a, t, !1) : e != null && ke(l, !!a, e, !0);
            return;
        case "textarea":
            $("invalid", l),
            n = u = a = null;
            for (c in e)
                if (e.hasOwnProperty(c) && (i = e[c],
                i != null))
                    switch (c) {
                    case "value":
                        a = i;
                        break;
                    case "defaultValue":
                        u = i;
                        break;
                    case "children":
                        n = i;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (i != null)
                            throw Error(m(91));
                        break;
                    default:
                        hl(l, t, c, i, e, null)
                    }
            Gf(l, a, u, n);
            return;
        case "option":
            for (s in e)
                if (e.hasOwnProperty(s) && (a = e[s],
                a != null))
                    switch (s) {
                    case "selected":
                        l.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        hl(l, t, s, a, e, null)
                    }
            return;
        case "dialog":
            $("beforetoggle", l),
            $("toggle", l),
            $("cancel", l),
            $("close", l);
            break;
        case "iframe":
        case "object":
            $("load", l);
            break;
        case "video":
        case "audio":
            for (a = 0; a < ru.length; a++)
                $(ru[a], l);
            break;
        case "image":
            $("error", l),
            $("load", l);
            break;
        case "details":
            $("toggle", l);
            break;
        case "embed":
        case "source":
        case "link":
            $("error", l),
            $("load", l);
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
            for (y in e)
                if (e.hasOwnProperty(y) && (a = e[y],
                a != null))
                    switch (y) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(m(137, t));
                    default:
                        hl(l, t, y, a, e, null)
                    }
            return;
        default:
            if (uc(t)) {
                for (b in e)
                    e.hasOwnProperty(b) && (a = e[b],
                    a !== void 0 && Li(l, t, b, a, e, void 0));
                return
            }
        }
        for (i in e)
            e.hasOwnProperty(i) && (a = e[i],
            a != null && hl(l, t, i, a, e, null))
    }
    function Dm(l, t, e, a) {
        switch (t) {
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
            var u = null
              , n = null
              , c = null
              , i = null
              , s = null
              , y = null
              , b = null;
            for (g in e) {
                var S = e[g];
                if (e.hasOwnProperty(g) && S != null)
                    switch (g) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        s = S;
                    default:
                        a.hasOwnProperty(g) || hl(l, t, g, null, a, S)
                    }
            }
            for (var v in a) {
                var g = a[v];
                if (S = e[v],
                a.hasOwnProperty(v) && (g != null || S != null))
                    switch (v) {
                    case "type":
                        n = g;
                        break;
                    case "name":
                        u = g;
                        break;
                    case "checked":
                        y = g;
                        break;
                    case "defaultChecked":
                        b = g;
                        break;
                    case "value":
                        c = g;
                        break;
                    case "defaultValue":
                        i = g;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (g != null)
                            throw Error(m(137, t));
                        break;
                    default:
                        g !== S && hl(l, t, v, g, a, S)
                    }
            }
            ec(l, c, i, s, y, b, n, u);
            return;
        case "select":
            g = c = i = v = null;
            for (n in e)
                if (s = e[n],
                e.hasOwnProperty(n) && s != null)
                    switch (n) {
                    case "value":
                        break;
                    case "multiple":
                        g = s;
                    default:
                        a.hasOwnProperty(n) || hl(l, t, n, null, a, s)
                    }
            for (u in a)
                if (n = a[u],
                s = e[u],
                a.hasOwnProperty(u) && (n != null || s != null))
                    switch (u) {
                    case "value":
                        v = n;
                        break;
                    case "defaultValue":
                        i = n;
                        break;
                    case "multiple":
                        c = n;
                    default:
                        n !== s && hl(l, t, u, n, a, s)
                    }
            t = i,
            e = c,
            a = g,
            v != null ? ke(l, !!e, v, !1) : !!a != !!e && (t != null ? ke(l, !!e, t, !0) : ke(l, !!e, e ? [] : "", !1));
            return;
        case "textarea":
            g = v = null;
            for (i in e)
                if (u = e[i],
                e.hasOwnProperty(i) && u != null && !a.hasOwnProperty(i))
                    switch (i) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        hl(l, t, i, null, a, u)
                    }
            for (c in a)
                if (u = a[c],
                n = e[c],
                a.hasOwnProperty(c) && (u != null || n != null))
                    switch (c) {
                    case "value":
                        v = u;
                        break;
                    case "defaultValue":
                        g = u;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (u != null)
                            throw Error(m(91));
                        break;
                    default:
                        u !== n && hl(l, t, c, u, a, n)
                    }
            Yf(l, v, g);
            return;
        case "option":
            for (var O in e)
                if (v = e[O],
                e.hasOwnProperty(O) && v != null && !a.hasOwnProperty(O))
                    switch (O) {
                    case "selected":
                        l.selected = !1;
                        break;
                    default:
                        hl(l, t, O, null, a, v)
                    }
            for (s in a)
                if (v = a[s],
                g = e[s],
                a.hasOwnProperty(s) && v !== g && (v != null || g != null))
                    switch (s) {
                    case "selected":
                        l.selected = v && typeof v != "function" && typeof v != "symbol";
                        break;
                    default:
                        hl(l, t, s, v, a, g)
                    }
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
            for (var Y in e)
                v = e[Y],
                e.hasOwnProperty(Y) && v != null && !a.hasOwnProperty(Y) && hl(l, t, Y, null, a, v);
            for (y in a)
                if (v = a[y],
                g = e[y],
                a.hasOwnProperty(y) && v !== g && (v != null || g != null))
                    switch (y) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (v != null)
                            throw Error(m(137, t));
                        break;
                    default:
                        hl(l, t, y, v, a, g)
                    }
            return;
        default:
            if (uc(t)) {
                for (var yl in e)
                    v = e[yl],
                    e.hasOwnProperty(yl) && v !== void 0 && !a.hasOwnProperty(yl) && Li(l, t, yl, void 0, a, v);
                for (b in a)
                    v = a[b],
                    g = e[b],
                    !a.hasOwnProperty(b) || v === g || v === void 0 && g === void 0 || Li(l, t, b, v, a, g);
                return
            }
        }
        for (var d in e)
            v = e[d],
            e.hasOwnProperty(d) && v != null && !a.hasOwnProperty(d) && hl(l, t, d, null, a, v);
        for (S in a)
            v = a[S],
            g = e[S],
            !a.hasOwnProperty(S) || v === g || v == null && g == null || hl(l, t, S, v, a, g)
    }
    function Vr(l) {
        switch (l) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function Cm() {
        if (typeof performance.getEntriesByType == "function") {
            for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
                var u = e[a]
                  , n = u.transferSize
                  , c = u.initiatorType
                  , i = u.duration;
                if (n && i && Vr(c)) {
                    for (c = 0,
                    i = u.responseEnd,
                    a += 1; a < e.length; a++) {
                        var s = e[a]
                          , y = s.startTime;
                        if (y > i)
                            break;
                        var b = s.transferSize
                          , S = s.initiatorType;
                        b && Vr(S) && (s = s.responseEnd,
                        c += b * (s < i ? 1 : (i - y) / (s - y)))
                    }
                    if (--a,
                    t += 8 * (n + c) / (u.duration / 1e3),
                    l++,
                    10 < l)
                        break
                }
            }
            if (0 < l)
                return t / l / 1e6
        }
        return navigator.connection && (l = navigator.connection.downlink,
        typeof l == "number") ? l : 5
    }
    var wi = null
      , Ki = null;
    function jn(l) {
        return l.nodeType === 9 ? l : l.ownerDocument
    }
    function Lr(l) {
        switch (l) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function wr(l, t) {
        if (l === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return l === 1 && t === "foreignObject" ? 0 : l
    }
    function Ji(l, t) {
        return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var ki = null;
    function Um() {
        var l = window.event;
        return l && l.type === "popstate" ? l === ki ? !1 : (ki = l,
        !0) : (ki = null,
        !1)
    }
    var Kr = typeof setTimeout == "function" ? setTimeout : void 0
      , Rm = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Jr = typeof Promise == "function" ? Promise : void 0
      , Hm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jr < "u" ? function(l) {
        return Jr.resolve(null).then(l).catch(Bm)
    }
    : Kr;
    function Bm(l) {
        setTimeout(function() {
            throw l
        })
    }
    function be(l) {
        return l === "head"
    }
    function kr(l, t) {
        var e = t
          , a = 0;
        do {
            var u = e.nextSibling;
            if (l.removeChild(e),
            u && u.nodeType === 8)
                if (e = u.data,
                e === "/$" || e === "/&") {
                    if (a === 0) {
                        l.removeChild(u),
                        Na(t);
                        return
                    }
                    a--
                } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
                    a++;
                else if (e === "html")
                    mu(l.ownerDocument.documentElement);
                else if (e === "head") {
                    e = l.ownerDocument.head,
                    mu(e);
                    for (var n = e.firstChild; n; ) {
                        var c = n.nextSibling
                          , i = n.nodeName;
                        n[Da] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n),
                        n = c
                    }
                } else
                    e === "body" && mu(l.ownerDocument.body);
            e = u
        } while (e);
        Na(t)
    }
    function Wr(l, t) {
        var e = l;
        l = 0;
        do {
            var a = e.nextSibling;
            if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display,
            e.style.display = "none") : (e.style.display = e._stashedDisplay || "",
            e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue,
            e.nodeValue = "") : e.nodeValue = e._stashedText || ""),
            a && a.nodeType === 8)
                if (e = a.data,
                e === "/$") {
                    if (l === 0)
                        break;
                    l--
                } else
                    e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
            e = a
        } while (e)
    }
    function Wi(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var e = t;
            switch (t = t.nextSibling,
            e.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Wi(e),
                lc(e);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (e.rel.toLowerCase() === "stylesheet")
                    continue
            }
            l.removeChild(e)
        }
    }
    function qm(l, t, e, a) {
        for (; l.nodeType === 1; ) {
            var u = e;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
                    break
            } else if (a) {
                if (!l[Da])
                    switch (t) {
                    case "meta":
                        if (!l.hasAttribute("itemprop"))
                            break;
                        return l;
                    case "link":
                        if (n = l.getAttribute("rel"),
                        n === "stylesheet" && l.hasAttribute("data-precedence"))
                            break;
                        if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title))
                            break;
                        return l;
                    case "style":
                        if (l.hasAttribute("data-precedence"))
                            break;
                        return l;
                    case "script":
                        if (n = l.getAttribute("src"),
                        (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                            break;
                        return l;
                    default:
                        return l
                    }
            } else if (t === "input" && l.type === "hidden") {
                var n = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && l.getAttribute("name") === n)
                    return l
            } else
                return l;
            if (l = Tt(l.nextSibling),
            l === null)
                break
        }
        return null
    }
    function Ym(l, t, e) {
        if (t === "")
            return null;
        for (; l.nodeType !== 3; )
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Tt(l.nextSibling),
            l === null))
                return null;
        return l
    }
    function $r(l, t) {
        for (; l.nodeType !== 8; )
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Tt(l.nextSibling),
            l === null))
                return null;
        return l
    }
    function $i(l) {
        return l.data === "$?" || l.data === "$~"
    }
    function Fi(l) {
        return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading"
    }
    function Gm(l, t) {
        var e = l.ownerDocument;
        if (l.data === "$~")
            l._reactRetry = t;
        else if (l.data !== "$?" || e.readyState !== "loading")
            t();
        else {
            var a = function() {
                t(),
                e.removeEventListener("DOMContentLoaded", a)
            };
            e.addEventListener("DOMContentLoaded", a),
            l._reactRetry = a
        }
    }
    function Tt(l) {
        for (; l != null; l = l.nextSibling) {
            var t = l.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = l.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return l
    }
    var Ii = null;
    function Fr(l) {
        l = l.nextSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var e = l.data;
                if (e === "/$" || e === "/&") {
                    if (t === 0)
                        return Tt(l.nextSibling);
                    t--
                } else
                    e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++
            }
            l = l.nextSibling
        }
        return null
    }
    function Ir(l) {
        l = l.previousSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var e = l.data;
                if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
                    if (t === 0)
                        return l;
                    t--
                } else
                    e !== "/$" && e !== "/&" || t++
            }
            l = l.previousSibling
        }
        return null
    }
    function Pr(l, t, e) {
        switch (t = jn(e),
        l) {
        case "html":
            if (l = t.documentElement,
            !l)
                throw Error(m(452));
            return l;
        case "head":
            if (l = t.head,
            !l)
                throw Error(m(453));
            return l;
        case "body":
            if (l = t.body,
            !l)
                throw Error(m(454));
            return l;
        default:
            throw Error(m(451))
        }
    }
    function mu(l) {
        for (var t = l.attributes; t.length; )
            l.removeAttributeNode(t[0]);
        lc(l)
    }
    var At = new Map
      , ld = new Set;
    function _n(l) {
        return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
    }
    var It = j.d;
    j.d = {
        f: Xm,
        r: Qm,
        D: Zm,
        C: Vm,
        L: Lm,
        m: wm,
        X: Jm,
        S: Km,
        M: km
    };
    function Xm() {
        var l = It.f()
          , t = pn();
        return l || t
    }
    function Qm(l) {
        var t = we(l);
        t !== null && t.tag === 5 && t.type === "form" ? go(t) : It.r(l)
    }
    var Ta = typeof document > "u" ? null : document;
    function td(l, t, e) {
        var a = Ta;
        if (a && typeof t == "string" && t) {
            var u = vt(t);
            u = 'link[rel="' + l + '"][href="' + u + '"]',
            typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
            ld.has(u) || (ld.add(u),
            l = {
                rel: l,
                crossOrigin: e,
                href: t
            },
            a.querySelector(u) === null && (t = a.createElement("link"),
            Ll(t, "link", l),
            Yl(t),
            a.head.appendChild(t)))
        }
    }
    function Zm(l) {
        It.D(l),
        td("dns-prefetch", l, null)
    }
    function Vm(l, t) {
        It.C(l, t),
        td("preconnect", l, t)
    }
    function Lm(l, t, e) {
        It.L(l, t, e);
        var a = Ta;
        if (a && l && t) {
            var u = 'link[rel="preload"][as="' + vt(t) + '"]';
            t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + vt(e.imageSrcSet) + '"]',
            typeof e.imageSizes == "string" && (u += '[imagesizes="' + vt(e.imageSizes) + '"]')) : u += '[href="' + vt(l) + '"]';
            var n = u;
            switch (t) {
            case "style":
                n = Aa(l);
                break;
            case "script":
                n = Ea(l)
            }
            At.has(n) || (l = D({
                rel: "preload",
                href: t === "image" && e && e.imageSrcSet ? void 0 : l,
                as: t
            }, e),
            At.set(n, l),
            a.querySelector(u) !== null || t === "style" && a.querySelector(hu(n)) || t === "script" && a.querySelector(yu(n)) || (t = a.createElement("link"),
            Ll(t, "link", l),
            Yl(t),
            a.head.appendChild(t)))
        }
    }
    function wm(l, t) {
        It.m(l, t);
        var e = Ta;
        if (e && l) {
            var a = t && typeof t.as == "string" ? t.as : "script"
              , u = 'link[rel="modulepreload"][as="' + vt(a) + '"][href="' + vt(l) + '"]'
              , n = u;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                n = Ea(l)
            }
            if (!At.has(n) && (l = D({
                rel: "modulepreload",
                href: l
            }, t),
            At.set(n, l),
            e.querySelector(u) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (e.querySelector(yu(n)))
                        return
                }
                a = e.createElement("link"),
                Ll(a, "link", l),
                Yl(a),
                e.head.appendChild(a)
            }
        }
    }
    function Km(l, t, e) {
        It.S(l, t, e);
        var a = Ta;
        if (a && l) {
            var u = Ke(a).hoistableStyles
              , n = Aa(l);
            t = t || "default";
            var c = u.get(n);
            if (!c) {
                var i = {
                    loading: 0,
                    preload: null
                };
                if (c = a.querySelector(hu(n)))
                    i.loading = 5;
                else {
                    l = D({
                        rel: "stylesheet",
                        href: l,
                        "data-precedence": t
                    }, e),
                    (e = At.get(n)) && Pi(l, e);
                    var s = c = a.createElement("link");
                    Yl(s),
                    Ll(s, "link", l),
                    s._p = new Promise(function(y, b) {
                        s.onload = y,
                        s.onerror = b
                    }
                    ),
                    s.addEventListener("load", function() {
                        i.loading |= 1
                    }),
                    s.addEventListener("error", function() {
                        i.loading |= 2
                    }),
                    i.loading |= 4,
                    Mn(c, t, a)
                }
                c = {
                    type: "stylesheet",
                    instance: c,
                    count: 1,
                    state: i
                },
                u.set(n, c)
            }
        }
    }
    function Jm(l, t) {
        It.X(l, t);
        var e = Ta;
        if (e && l) {
            var a = Ke(e).hoistableScripts
              , u = Ea(l)
              , n = a.get(u);
            n || (n = e.querySelector(yu(u)),
            n || (l = D({
                src: l,
                async: !0
            }, t),
            (t = At.get(u)) && lf(l, t),
            n = e.createElement("script"),
            Yl(n),
            Ll(n, "link", l),
            e.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            a.set(u, n))
        }
    }
    function km(l, t) {
        It.M(l, t);
        var e = Ta;
        if (e && l) {
            var a = Ke(e).hoistableScripts
              , u = Ea(l)
              , n = a.get(u);
            n || (n = e.querySelector(yu(u)),
            n || (l = D({
                src: l,
                async: !0,
                type: "module"
            }, t),
            (t = At.get(u)) && lf(l, t),
            n = e.createElement("script"),
            Yl(n),
            Ll(n, "link", l),
            e.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            a.set(u, n))
        }
    }
    function ed(l, t, e, a) {
        var u = (u = L.current) ? _n(u) : null;
        if (!u)
            throw Error(m(446));
        switch (l) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Aa(e.href),
            e = Ke(u).hoistableStyles,
            a = e.get(t),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            e.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
                l = Aa(e.href);
                var n = Ke(u).hoistableStyles
                  , c = n.get(l);
                if (c || (u = u.ownerDocument || u,
                c = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                n.set(l, c),
                (n = u.querySelector(hu(l))) && !n._p && (c.instance = n,
                c.state.loading = 5),
                At.has(l) || (e = {
                    rel: "preload",
                    as: "style",
                    href: e.href,
                    crossOrigin: e.crossOrigin,
                    integrity: e.integrity,
                    media: e.media,
                    hrefLang: e.hrefLang,
                    referrerPolicy: e.referrerPolicy
                },
                At.set(l, e),
                n || Wm(u, l, e, c.state))),
                t && a === null)
                    throw Error(m(528, ""));
                return c
            }
            if (t && a !== null)
                throw Error(m(529, ""));
            return null;
        case "script":
            return t = e.async,
            e = e.src,
            typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ea(e),
            e = Ke(u).hoistableScripts,
            a = e.get(t),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            e.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(m(444, l))
        }
    }
    function Aa(l) {
        return 'href="' + vt(l) + '"'
    }
    function hu(l) {
        return 'link[rel="stylesheet"][' + l + "]"
    }
    function ad(l) {
        return D({}, l, {
            "data-precedence": l.precedence,
            precedence: null
        })
    }
    function Wm(l, t, e, a) {
        l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"),
        a.preload = t,
        t.addEventListener("load", function() {
            return a.loading |= 1
        }),
        t.addEventListener("error", function() {
            return a.loading |= 2
        }),
        Ll(t, "link", e),
        Yl(t),
        l.head.appendChild(t))
    }
    function Ea(l) {
        return '[src="' + vt(l) + '"]'
    }
    function yu(l) {
        return "script[async]" + l
    }
    function ud(l, t, e) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var a = l.querySelector('style[data-href~="' + vt(e.href) + '"]');
                if (a)
                    return t.instance = a,
                    Yl(a),
                    a;
                var u = D({}, e, {
                    "data-href": e.href,
                    "data-precedence": e.precedence,
                    href: null,
                    precedence: null
                });
                return a = (l.ownerDocument || l).createElement("style"),
                Yl(a),
                Ll(a, "style", u),
                Mn(a, e.precedence, l),
                t.instance = a;
            case "stylesheet":
                u = Aa(e.href);
                var n = l.querySelector(hu(u));
                if (n)
                    return t.state.loading |= 4,
                    t.instance = n,
                    Yl(n),
                    n;
                a = ad(e),
                (u = At.get(u)) && Pi(a, u),
                n = (l.ownerDocument || l).createElement("link"),
                Yl(n);
                var c = n;
                return c._p = new Promise(function(i, s) {
                    c.onload = i,
                    c.onerror = s
                }
                ),
                Ll(n, "link", a),
                t.state.loading |= 4,
                Mn(n, e.precedence, l),
                t.instance = n;
            case "script":
                return n = Ea(e.src),
                (u = l.querySelector(yu(n))) ? (t.instance = u,
                Yl(u),
                u) : (a = e,
                (u = At.get(n)) && (a = D({}, e),
                lf(a, u)),
                l = l.ownerDocument || l,
                u = l.createElement("script"),
                Yl(u),
                Ll(u, "link", a),
                l.head.appendChild(u),
                t.instance = u);
            case "void":
                return null;
            default:
                throw Error(m(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance,
            t.state.loading |= 4,
            Mn(a, e.precedence, l));
        return t.instance
    }
    function Mn(l, t, e) {
        for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, c = 0; c < a.length; c++) {
            var i = a[c];
            if (i.dataset.precedence === t)
                n = i;
            else if (n !== u)
                break
        }
        n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e,
        t.insertBefore(l, t.firstChild))
    }
    function Pi(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.title == null && (l.title = t.title)
    }
    function lf(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.integrity == null && (l.integrity = t.integrity)
    }
    var On = null;
    function nd(l, t, e) {
        if (On === null) {
            var a = new Map
              , u = On = new Map;
            u.set(e, a)
        } else
            u = On,
            a = u.get(e),
            a || (a = new Map,
            u.set(e, a));
        if (a.has(l))
            return a;
        for (a.set(l, null),
        e = e.getElementsByTagName(l),
        u = 0; u < e.length; u++) {
            var n = e[u];
            if (!(n[Da] || n[Xl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                var c = n.getAttribute(t) || "";
                c = l + c;
                var i = a.get(c);
                i ? i.push(n) : a.set(c, [n])
            }
        }
        return a
    }
    function cd(l, t, e) {
        l = l.ownerDocument || l,
        l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null)
    }
    function $m(l, t, e) {
        if (e === 1 || t.itemProp != null)
            return !1;
        switch (l) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return l = t.disabled,
                typeof t.precedence == "string" && l == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function id(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
    }
    function Fm(l, t, e, a) {
        if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
                var u = Aa(a.href)
                  , n = t.querySelector(hu(u));
                if (n) {
                    t = n._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++,
                    l = Dn.bind(l),
                    t.then(l, l)),
                    e.state.loading |= 4,
                    e.instance = n,
                    Yl(n);
                    return
                }
                n = t.ownerDocument || t,
                a = ad(a),
                (u = At.get(u)) && Pi(a, u),
                n = n.createElement("link"),
                Yl(n);
                var c = n;
                c._p = new Promise(function(i, s) {
                    c.onload = i,
                    c.onerror = s
                }
                ),
                Ll(n, "link", a),
                e.instance = n
            }
            l.stylesheets === null && (l.stylesheets = new Map),
            l.stylesheets.set(e, t),
            (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++,
            e = Dn.bind(l),
            t.addEventListener("load", e),
            t.addEventListener("error", e))
        }
    }
    var tf = 0;
    function Im(l, t) {
        return l.stylesheets && l.count === 0 && Un(l, l.stylesheets),
        0 < l.count || 0 < l.imgCount ? function(e) {
            var a = setTimeout(function() {
                if (l.stylesheets && Un(l, l.stylesheets),
                l.unsuspend) {
                    var n = l.unsuspend;
                    l.unsuspend = null,
                    n()
                }
            }, 6e4 + t);
            0 < l.imgBytes && tf === 0 && (tf = 62500 * Cm());
            var u = setTimeout(function() {
                if (l.waitingForImages = !1,
                l.count === 0 && (l.stylesheets && Un(l, l.stylesheets),
                l.unsuspend)) {
                    var n = l.unsuspend;
                    l.unsuspend = null,
                    n()
                }
            }, (l.imgBytes > tf ? 50 : 800) + t);
            return l.unsuspend = e,
            function() {
                l.unsuspend = null,
                clearTimeout(a),
                clearTimeout(u)
            }
        }
        : null
    }
    function Dn() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Un(this, this.stylesheets);
            else if (this.unsuspend) {
                var l = this.unsuspend;
                this.unsuspend = null,
                l()
            }
        }
    }
    var Cn = null;
    function Un(l, t) {
        l.stylesheets = null,
        l.unsuspend !== null && (l.count++,
        Cn = new Map,
        t.forEach(Pm, l),
        Cn = null,
        Dn.call(l))
    }
    function Pm(l, t) {
        if (!(t.state.loading & 4)) {
            var e = Cn.get(l);
            if (e)
                var a = e.get(null);
            else {
                e = new Map,
                Cn.set(l, e);
                for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
                    var c = u[n];
                    (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c),
                    a = c)
                }
                a && e.set(null, a)
            }
            u = t.instance,
            c = u.getAttribute("data-precedence"),
            n = e.get(c) || a,
            n === a && e.set(null, u),
            e.set(c, u),
            this.count++,
            a = Dn.bind(this),
            u.addEventListener("load", a),
            u.addEventListener("error", a),
            n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l,
            l.insertBefore(u, l.firstChild)),
            t.state.loading |= 4
        }
    }
    var vu = {
        $$typeof: jl,
        Provider: null,
        Consumer: null,
        _currentValue: G,
        _currentValue2: G,
        _threadCount: 0
    };
    function l1(l, t, e, a, u, n, c, i, s) {
        this.tag = 1,
        this.containerInfo = l,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = $n(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = $n(0),
        this.hiddenUpdates = $n(null),
        this.identifierPrefix = a,
        this.onUncaughtError = u,
        this.onCaughtError = n,
        this.onRecoverableError = c,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = s,
        this.incompleteTransitions = new Map
    }
    function fd(l, t, e, a, u, n, c, i, s, y, b, S) {
        return l = new l1(l,t,e,c,s,y,b,S,i),
        t = 1,
        n === !0 && (t |= 24),
        n = st(3, null, null, t),
        l.current = n,
        n.stateNode = l,
        t = Rc(),
        t.refCount++,
        l.pooledCache = t,
        t.refCount++,
        n.memoizedState = {
            element: a,
            isDehydrated: e,
            cache: t
        },
        Yc(n),
        l
    }
    function sd(l) {
        return l ? (l = ea,
        l) : ea
    }
    function od(l, t, e, a, u, n) {
        u = sd(u),
        a.context === null ? a.context = u : a.pendingContext = u,
        a = ie(t),
        a.payload = {
            element: e
        },
        n = n === void 0 ? null : n,
        n !== null && (a.callback = n),
        e = fe(l, a, t),
        e !== null && (et(e, l, t),
        ka(e, l, t))
    }
    function rd(l, t) {
        if (l = l.memoizedState,
        l !== null && l.dehydrated !== null) {
            var e = l.retryLane;
            l.retryLane = e !== 0 && e < t ? e : t
        }
    }
    function ef(l, t) {
        rd(l, t),
        (l = l.alternate) && rd(l, t)
    }
    function dd(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = Oe(l, 67108864);
            t !== null && et(t, l, 67108864),
            ef(l, 67108864)
        }
    }
    function md(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = ht();
            t = Fn(t);
            var e = Oe(l, t);
            e !== null && et(e, l, t),
            ef(l, t)
        }
    }
    var Rn = !0;
    function t1(l, t, e, a) {
        var u = p.T;
        p.T = null;
        var n = j.p;
        try {
            j.p = 2,
            af(l, t, e, a)
        } finally {
            j.p = n,
            p.T = u
        }
    }
    function e1(l, t, e, a) {
        var u = p.T;
        p.T = null;
        var n = j.p;
        try {
            j.p = 8,
            af(l, t, e, a)
        } finally {
            j.p = n,
            p.T = u
        }
    }
    function af(l, t, e, a) {
        if (Rn) {
            var u = uf(a);
            if (u === null)
                Vi(l, t, a, Hn, e),
                yd(l, a);
            else if (u1(u, l, t, e, a))
                a.stopPropagation();
            else if (yd(l, a),
            t & 4 && -1 < a1.indexOf(l)) {
                for (; u !== null; ) {
                    var n = we(u);
                    if (n !== null)
                        switch (n.tag) {
                        case 3:
                            if (n = n.stateNode,
                            n.current.memoizedState.isDehydrated) {
                                var c = Ee(n.pendingLanes);
                                if (c !== 0) {
                                    var i = n;
                                    for (i.pendingLanes |= 2,
                                    i.entangledLanes |= 2; c; ) {
                                        var s = 1 << 31 - it(c);
                                        i.entanglements[1] |= s,
                                        c &= ~s
                                    }
                                    Ct(n),
                                    (ul & 6) === 0 && (gn = nt() + 500,
                                    ou(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            i = Oe(n, 2),
                            i !== null && et(i, n, 2),
                            pn(),
                            ef(n, 2)
                        }
                    if (n = uf(a),
                    n === null && Vi(l, t, a, Hn, e),
                    n === u)
                        break;
                    u = n
                }
                u !== null && a.stopPropagation()
            } else
                Vi(l, t, a, null, e)
        }
    }
    function uf(l) {
        return l = cc(l),
        nf(l)
    }
    var Hn = null;
    function nf(l) {
        if (Hn = null,
        l = Le(l),
        l !== null) {
            var t = R(l);
            if (t === null)
                l = null;
            else {
                var e = t.tag;
                if (e === 13) {
                    if (l = J(t),
                    l !== null)
                        return l;
                    l = null
                } else if (e === 31) {
                    if (l = ll(t),
                    l !== null)
                        return l;
                    l = null
                } else if (e === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null
                } else
                    t !== l && (l = null)
            }
        }
        return Hn = l,
        null
    }
    function hd(l) {
        switch (l) {
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
            switch (Zd()) {
            case Sf:
                return 2;
            case zf:
                return 8;
            case Tu:
            case Vd:
                return 32;
            case Tf:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var cf = !1
      , pe = null
      , xe = null
      , Se = null
      , gu = new Map
      , bu = new Map
      , ze = []
      , a1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function yd(l, t) {
        switch (l) {
        case "focusin":
        case "focusout":
            pe = null;
            break;
        case "dragenter":
        case "dragleave":
            xe = null;
            break;
        case "mouseover":
        case "mouseout":
            Se = null;
            break;
        case "pointerover":
        case "pointerout":
            gu.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            bu.delete(t.pointerId)
        }
    }
    function pu(l, t, e, a, u, n) {
        return l === null || l.nativeEvent !== n ? (l = {
            blockedOn: t,
            domEventName: e,
            eventSystemFlags: a,
            nativeEvent: n,
            targetContainers: [u]
        },
        t !== null && (t = we(t),
        t !== null && dd(t)),
        l) : (l.eventSystemFlags |= a,
        t = l.targetContainers,
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l)
    }
    function u1(l, t, e, a, u) {
        switch (t) {
        case "focusin":
            return pe = pu(pe, l, t, e, a, u),
            !0;
        case "dragenter":
            return xe = pu(xe, l, t, e, a, u),
            !0;
        case "mouseover":
            return Se = pu(Se, l, t, e, a, u),
            !0;
        case "pointerover":
            var n = u.pointerId;
            return gu.set(n, pu(gu.get(n) || null, l, t, e, a, u)),
            !0;
        case "gotpointercapture":
            return n = u.pointerId,
            bu.set(n, pu(bu.get(n) || null, l, t, e, a, u)),
            !0
        }
        return !1
    }
    function vd(l) {
        var t = Le(l.target);
        if (t !== null) {
            var e = R(t);
            if (e !== null) {
                if (t = e.tag,
                t === 13) {
                    if (t = J(e),
                    t !== null) {
                        l.blockedOn = t,
                        Mf(l.priority, function() {
                            md(e)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = ll(e),
                    t !== null) {
                        l.blockedOn = t,
                        Mf(l.priority, function() {
                            md(e)
                        });
                        return
                    }
                } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
                    l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                    return
                }
            }
        }
        l.blockedOn = null
    }
    function Bn(l) {
        if (l.blockedOn !== null)
            return !1;
        for (var t = l.targetContainers; 0 < t.length; ) {
            var e = uf(l.nativeEvent);
            if (e === null) {
                e = l.nativeEvent;
                var a = new e.constructor(e.type,e);
                nc = a,
                e.target.dispatchEvent(a),
                nc = null
            } else
                return t = we(e),
                t !== null && dd(t),
                l.blockedOn = e,
                !1;
            t.shift()
        }
        return !0
    }
    function gd(l, t, e) {
        Bn(l) && e.delete(t)
    }
    function n1() {
        cf = !1,
        pe !== null && Bn(pe) && (pe = null),
        xe !== null && Bn(xe) && (xe = null),
        Se !== null && Bn(Se) && (Se = null),
        gu.forEach(gd),
        bu.forEach(gd)
    }
    function qn(l, t) {
        l.blockedOn === t && (l.blockedOn = null,
        cf || (cf = !0,
        E.unstable_scheduleCallback(E.unstable_NormalPriority, n1)))
    }
    var Yn = null;
    function bd(l) {
        Yn !== l && (Yn = l,
        E.unstable_scheduleCallback(E.unstable_NormalPriority, function() {
            Yn === l && (Yn = null);
            for (var t = 0; t < l.length; t += 3) {
                var e = l[t]
                  , a = l[t + 1]
                  , u = l[t + 2];
                if (typeof a != "function") {
                    if (nf(a || e) === null)
                        continue;
                    break
                }
                var n = we(e);
                n !== null && (l.splice(t, 3),
                t -= 3,
                ui(n, {
                    pending: !0,
                    data: u,
                    method: e.method,
                    action: a
                }, a, u))
            }
        }))
    }
    function Na(l) {
        function t(s) {
            return qn(s, l)
        }
        pe !== null && qn(pe, l),
        xe !== null && qn(xe, l),
        Se !== null && qn(Se, l),
        gu.forEach(t),
        bu.forEach(t);
        for (var e = 0; e < ze.length; e++) {
            var a = ze[e];
            a.blockedOn === l && (a.blockedOn = null)
        }
        for (; 0 < ze.length && (e = ze[0],
        e.blockedOn === null); )
            vd(e),
            e.blockedOn === null && ze.shift();
        if (e = (l.ownerDocument || l).$$reactFormReplay,
        e != null)
            for (a = 0; a < e.length; a += 3) {
                var u = e[a]
                  , n = e[a + 1]
                  , c = u[$l] || null;
                if (typeof n == "function")
                    c || bd(e);
                else if (c) {
                    var i = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (u = n,
                        c = n[$l] || null)
                            i = c.formAction;
                        else if (nf(u) !== null)
                            continue
                    } else
                        i = c.action;
                    typeof i == "function" ? e[a + 1] = i : (e.splice(a, 3),
                    a -= 3),
                    bd(e)
                }
            }
    }
    function pd() {
        function l(n) {
            n.canIntercept && n.info === "react-transition" && n.intercept({
                handler: function() {
                    return new Promise(function(c) {
                        return u = c
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            u !== null && (u(),
            u = null),
            a || setTimeout(e, 20)
        }
        function e() {
            if (!a && !navigation.transition) {
                var n = navigation.currentEntry;
                n && n.url != null && navigation.navigate(n.url, {
                    state: n.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var a = !1
              , u = null;
            return navigation.addEventListener("navigate", l),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(e, 100),
            function() {
                a = !0,
                navigation.removeEventListener("navigate", l),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                u !== null && (u(),
                u = null)
            }
        }
    }
    function ff(l) {
        this._internalRoot = l
    }
    Gn.prototype.render = ff.prototype.render = function(l) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(m(409));
        var e = t.current
          , a = ht();
        od(e, a, l, t, null, null)
    }
    ,
    Gn.prototype.unmount = ff.prototype.unmount = function() {
        var l = this._internalRoot;
        if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            od(l.current, 2, null, l, null, null),
            pn(),
            t[Ve] = null
        }
    }
    ;
    function Gn(l) {
        this._internalRoot = l
    }
    Gn.prototype.unstable_scheduleHydration = function(l) {
        if (l) {
            var t = _f();
            l = {
                blockedOn: null,
                target: l,
                priority: t
            };
            for (var e = 0; e < ze.length && t !== 0 && t < ze[e].priority; e++)
                ;
            ze.splice(e, 0, l),
            e === 0 && vd(l)
        }
    }
    ;
    var xd = _.version;
    if (xd !== "19.2.8")
        throw Error(m(527, xd, "19.2.8"));
    j.findDOMNode = function(l) {
        var t = l._reactInternals;
        if (t === void 0)
            throw typeof l.render == "function" ? Error(m(188)) : (l = Object.keys(l).join(","),
            Error(m(268, l)));
        return l = T(t),
        l = l !== null ? X(l) : null,
        l = l === null ? null : l.stateNode,
        l
    }
    ;
    var c1 = {
        bundleType: 0,
        version: "19.2.8",
        rendererPackageName: "react-dom",
        currentDispatcherRef: p,
        reconcilerVersion: "19.2.8"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Xn.isDisabled && Xn.supportsFiber)
            try {
                _a = Xn.inject(c1),
                ct = Xn
            } catch {}
    }
    return Su.createRoot = function(l, t) {
        if (!q(l))
            throw Error(m(299));
        var e = !1
          , a = ""
          , u = jo
          , n = _o
          , c = Mo;
        return t != null && (t.unstable_strictMode === !0 && (e = !0),
        t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
        t.onCaughtError !== void 0 && (n = t.onCaughtError),
        t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        t = fd(l, 1, !1, null, null, e, a, null, u, n, c, pd),
        l[Ve] = t.current,
        Zi(l),
        new ff(t)
    }
    ,
    Su.hydrateRoot = function(l, t, e) {
        if (!q(l))
            throw Error(m(299));
        var a = !1
          , u = ""
          , n = jo
          , c = _o
          , i = Mo
          , s = null;
        return e != null && (e.unstable_strictMode === !0 && (a = !0),
        e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
        e.onCaughtError !== void 0 && (c = e.onCaughtError),
        e.onRecoverableError !== void 0 && (i = e.onRecoverableError),
        e.formState !== void 0 && (s = e.formState)),
        t = fd(l, 1, !0, t, e ?? null, a, u, s, n, c, i, pd),
        t.context = sd(null),
        e = t.current,
        a = ht(),
        a = Fn(a),
        u = ie(a),
        u.callback = null,
        fe(e, u, a),
        e = a,
        t.current.lanes = e,
        Oa(t, e),
        Ct(t),
        l[Ve] = t.current,
        Zi(l),
        new Gn(t)
    }
    ,
    Su.version = "19.2.8",
    Su
}
var Od;
function v1() {
    if (Od)
        return rf.exports;
    Od = 1;
    function E() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)
            } catch (_) {
                console.error(_)
            }
    }
    return E(),
    rf.exports = y1(),
    rf.exports
}
var g1 = v1();
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b1 = E => E.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , p1 = E => E.replace(/^([A-Z])|[\s-_]+(\w)/g, (_, U, m) => m ? m.toUpperCase() : U.toLowerCase())
  , Dd = E => {
    const _ = p1(E);
    return _.charAt(0).toUpperCase() + _.slice(1)
}
  , Ud = (...E) => E.filter( (_, U, m) => !!_ && _.trim() !== "" && m.indexOf(_) === U).join(" ").trim()
  , x1 = E => {
    for (const _ in E)
        if (_.startsWith("aria-") || _ === "role" || _ === "title")
            return !0
}
;
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var S1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const z1 = nl.forwardRef( ({color: E="currentColor", size: _=24, strokeWidth: U=2, absoluteStrokeWidth: m, className: q="", children: R, iconNode: J, ...ll}, M) => nl.createElement("svg", {
    ref: M,
    ...S1,
    width: _,
    height: _,
    stroke: E,
    strokeWidth: m ? Number(U) * 24 / Number(_) : U,
    className: Ud("lucide", q),
    ...!R && !x1(ll) && {
        "aria-hidden": "true"
    },
    ...ll
}, [...J.map( ([T,X]) => nl.createElement(T, X)), ...Array.isArray(R) ? R : [R]]));
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wl = (E, _) => {
    const U = nl.forwardRef( ({className: m, ...q}, R) => nl.createElement(z1, {
        ref: R,
        iconNode: _,
        className: Ud(`lucide-${b1(Dd(E))}`, `lucide-${E}`, m),
        ...q
    }));
    return U.displayName = Dd(E),
    U
}
;
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const T1 = [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]
  , vf = wl("check", T1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A1 = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]
  , Rd = wl("circle-alert", A1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E1 = [["path", {
    d: "M21.801 10A10 10 0 1 1 17 3.335",
    key: "yps3ct"
}], ["path", {
    d: "m9 11 3 3L22 4",
    key: "1pflzl"
}]]
  , Hd = wl("circle-check-big", E1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const N1 = [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]
  , Qn = wl("copy", N1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j1 = [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]
  , _1 = wl("external-link", j1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const M1 = [["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "3",
    rx: "2",
    key: "afitv7"
}], ["path", {
    d: "M7 3v18",
    key: "bbkbws"
}], ["path", {
    d: "M3 7.5h4",
    key: "zfgn84"
}], ["path", {
    d: "M3 12h18",
    key: "1i2n21"
}], ["path", {
    d: "M3 16.5h4",
    key: "1230mu"
}], ["path", {
    d: "M17 3v18",
    key: "in4fa5"
}], ["path", {
    d: "M17 7.5h4",
    key: "myr1c1"
}], ["path", {
    d: "M17 16.5h4",
    key: "go4c1d"
}]]
  , O1 = wl("film", M1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const D1 = [["path", {
    d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",
    key: "g0fldk"
}], ["path", {
    d: "m21 2-9.6 9.6",
    key: "1j0ho8"
}], ["circle", {
    cx: "7.5",
    cy: "15.5",
    r: "5.5",
    key: "yqb3hr"
}]]
  , Bd = wl("key", D1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const C1 = [["path", {
    d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
    key: "18887p"
}]]
  , U1 = wl("message-square", C1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R1 = [["path", {
    d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
    key: "v9h5vc"
}], ["path", {
    d: "M21 3v5h-5",
    key: "1q7to0"
}], ["path", {
    d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
    key: "3uifl3"
}], ["path", {
    d: "M8 16H3v5",
    key: "1cv678"
}]]
  , gf = wl("refresh-cw", R1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const H1 = [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}]]
  , B1 = wl("rotate-ccw", H1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q1 = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]
  , bf = wl("shield-check", q1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Y1 = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]
  , G1 = wl("shield", Y1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const X1 = [["path", {
    d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
    key: "1s2grr"
}], ["path", {
    d: "M20 2v4",
    key: "1rf3ol"
}], ["path", {
    d: "M22 4h-4",
    key: "gwowj6"
}], ["circle", {
    cx: "4",
    cy: "20",
    r: "2",
    key: "6kqj1y"
}]]
  , Zn = wl("sparkles", X1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Q1 = [["path", {
    d: "M10 11v6",
    key: "nco0om"
}], ["path", {
    d: "M14 11v6",
    key: "outv1u"
}], ["path", {
    d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
    key: "miytrc"
}], ["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
    key: "e791ji"
}]]
  , Z1 = wl("trash-2", Q1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const V1 = [["path", {
    d: "M12 3v12",
    key: "1x0j5s"
}], ["path", {
    d: "m17 8-5-5-5 5",
    key: "7q97r8"
}], ["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}]]
  , Vn = wl("upload", V1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const L1 = [["path", {
    d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
    key: "ftymec"
}], ["rect", {
    x: "2",
    y: "6",
    width: "14",
    height: "12",
    rx: "2",
    key: "158x01"
}]]
  , w1 = wl("video", L1);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K1 = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , qd = wl("x", K1)
  , J1 = ({apiKeyConnected: E, onOpenApiKeyModal: _, onGoHome: U}) => f.jsx("header", {
    className: "sticky top-0 z-40 w-full pt-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",
    children: f.jsxs("div", {
        className: "bg-[#12131C] border border-white/10 rounded-2xl px-5 sm:px-7 h-16 sm:h-20 flex items-center justify-between shadow-sm relative overflow-hidden transition-colors",
        children: [f.jsxs("button", {
            id: "btn-header-logo",
            onClick: U,
            className: "flex items-center gap-3 group cursor-pointer focus:outline-none btn-press text-left",
            children: [f.jsx("div", {
                className: "w-10 h-10 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center group-hover:border-blue-500/60 transition-colors",
                children: f.jsx("span", {
                    className: "font-mono text-xs font-black text-blue-400 tracking-tighter",
                    children: "CF"
                })
            }), f.jsxs("div", {
                className: "flex items-center gap-2.5",
                children: [f.jsxs("span", {
                    className: "font-sans text-base sm:text-lg font-bold tracking-tight text-zinc-100",
                    children: ["CineFlow ", f.jsx("span", {
                        className: "text-blue-400",
                        children: "AI"
                    })]
                }), f.jsx("span", {
                    className: "text-xs text-zinc-400 font-medium hidden sm:inline-block pl-2.5 border-l border-zinc-800",
                    children: "AI Commercial Director"
                })]
            })]
        }), f.jsx("div", {
            className: "flex items-center gap-3",
            children: f.jsx("button", {
                id: "btn-connect-api",
                onClick: _,
                className: `flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl text-xs font-medium transition-colors border cursor-pointer btn-press ${E ? "bg-blue-950/40 text-blue-400 border-blue-500/30 hover:border-blue-500/60" : "bg-zinc-900/90 text-zinc-200 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/80"}`,
                children: E ? f.jsxs(f.Fragment, {
                    children: [f.jsx("span", {
                        className: "w-2 h-2 rounded-full bg-blue-400"
                    }), f.jsx("span", {
                        className: "font-semibold tracking-wide",
                        children: "API Connected"
                    })]
                }) : f.jsxs(f.Fragment, {
                    children: [f.jsx(Bd, {
                        className: "w-3.5 h-3.5 text-zinc-400"
                    }), f.jsx("span", {
                        className: "tracking-wide",
                        children: "Connect API"
                    })]
                })
            })
        })]
    })
})
  , k1 = ({isOpen: E, onClose: _, savedApiKey: U, hasServerKey: m, onSaveKey: q, onDisconnectKey: R}) => {
    const [J,ll] = nl.useState(U || "")
      , [M,T] = nl.useState(!1)
      , [X,D] = nl.useState(null)
      , [V,gl] = nl.useState(null);
    if (!E)
        return null;
    const k = async ol => {
        ol.preventDefault(),
        D(null),
        gl(null);
        const zl = J.trim();
        if (!zl && !m) {
            D("Please enter a valid Gemini API key.");
            return
        }
        T(!0);
        try {
            await q(zl) ? (gl("Gemini API key verified and connected!"),
            setTimeout( () => {
                _()
            }
            , 1200)) : D("Could not verify API key. Please check that it is valid.")
        } catch (Bl) {
            D((Bl == null ? void 0 : Bl.message) || "Failed to authenticate with Gemini API.")
        } finally {
            T(!1)
        }
    }
      , sl = () => {
        R(),
        ll(""),
        gl("API key disconnected."),
        setTimeout( () => {
            gl(null)
        }
        , 1500)
    }
    ;
    return f.jsx("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-reveal",
        children: f.jsxs("div", {
            id: "modal-api-key",
            className: "w-full max-w-lg rounded-2xl bg-[#12131C] border border-zinc-800 shadow-2xl p-6 sm:p-8 relative overflow-hidden",
            children: [f.jsx("button", {
                id: "btn-close-modal",
                onClick: _,
                className: "absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors cursor-pointer",
                children: f.jsx(qd, {
                    className: "w-5 h-5"
                })
            }), f.jsxs("div", {
                className: "flex items-center gap-4 mb-6",
                children: [f.jsx("div", {
                    className: "w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400",
                    children: f.jsx(Bd, {
                        className: "w-6 h-6"
                    })
                }), f.jsxs("div", {
                    children: [f.jsx("h3", {
                        className: "text-lg font-bold text-zinc-100 tracking-tight",
                        children: "Connect Gemini API"
                    }), f.jsx("p", {
                        className: "text-xs text-zinc-400 font-normal",
                        children: "Direct connection for AI product analysis and master prompt synthesis."
                    })]
                })]
            }), f.jsxs("div", {
                className: "mb-6 p-4 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between",
                children: [f.jsxs("div", {
                    className: "flex items-center gap-2.5",
                    children: [f.jsx("span", {
                        className: `w-2.5 h-2.5 rounded-full ${U || m ? "bg-blue-400" : "bg-zinc-600"}`
                    }), f.jsx("span", {
                        className: "text-xs font-bold text-zinc-200",
                        children: U ? "Custom User Key Active" : m ? "Environment API Key Available" : "Not Connected"
                    })]
                }), U && f.jsxs("button", {
                    id: "btn-disconnect-key",
                    onClick: sl,
                    className: "flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 hover:underline cursor-pointer font-semibold btn-press",
                    children: [f.jsx(Z1, {
                        className: "w-3.5 h-3.5"
                    }), f.jsx("span", {
                        children: "Disconnect Key"
                    })]
                })]
            }), f.jsxs("form", {
                onSubmit: k,
                className: "space-y-5",
                children: [f.jsxs("div", {
                    children: [f.jsx("label", {
                        className: "block text-xs font-bold uppercase text-zinc-400 mb-2 tracking-wider",
                        children: "Gemini API Key"
                    }), f.jsx("div", {
                        className: "relative",
                        children: f.jsx("input", {
                            id: "input-api-key",
                            type: "password",
                            value: J,
                            onChange: ol => ll(ol.target.value),
                            placeholder: m ? "Using default environment key (or enter custom key)" : "AIzaSy...",
                            className: "w-full px-4 py-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
                        })
                    }), f.jsxs("p", {
                        className: "mt-2 text-[11px] text-zinc-400 flex items-center justify-between",
                        children: [f.jsx("span", {
                            children: "Your key is stored only in your browser session & proxy header."
                        }), f.jsxs("a", {
                            href: "https://aistudio.google.com/app/apikey",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "inline-flex items-center gap-1 text-blue-400 hover:underline font-semibold",
                            children: ["Get API Key ", f.jsx(_1, {
                                className: "w-3 h-3 ml-0.5"
                            })]
                        })]
                    })]
                }), X && f.jsxs("div", {
                    className: "p-3.5 rounded-xl bg-red-950/50 border border-red-800/50 text-red-300 text-xs flex items-start gap-2.5",
                    children: [f.jsx(Rd, {
                        className: "w-4 h-4 shrink-0 mt-0.5 text-red-400"
                    }), f.jsx("span", {
                        children: X
                    })]
                }), V && f.jsxs("div", {
                    className: "p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-blue-400 text-xs flex items-center gap-2.5 font-semibold",
                    children: [f.jsx(vf, {
                        className: "w-4 h-4 shrink-0"
                    }), f.jsx("span", {
                        children: V
                    })]
                }), f.jsxs("div", {
                    className: "pt-2 flex items-center justify-end gap-3",
                    children: [f.jsx("button", {
                        id: "btn-cancel-modal",
                        type: "button",
                        onClick: _,
                        className: "px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors btn-press cursor-pointer",
                        children: "Cancel"
                    }), f.jsx("button", {
                        id: "btn-save-api-key",
                        type: "submit",
                        disabled: M,
                        className: "flex items-center gap-2 px-6 py-2.5 rounded-xl btn-cta-primary text-white font-semibold text-xs disabled:opacity-50 cursor-pointer",
                        children: M ? f.jsxs(f.Fragment, {
                            children: [f.jsx(gf, {
                                className: "w-3.5 h-3.5 animate-spin"
                            }), f.jsx("span", {
                                children: "Verifying Key..."
                            })]
                        }) : f.jsxs(f.Fragment, {
                            children: [f.jsx(G1, {
                                className: "w-3.5 h-3.5"
                            }), f.jsx("span", {
                                children: "Save & Connect"
                            })]
                        })
                    })]
                })]
            })]
        })
    })
}
  , W1 = ({productImage: E, productFileName: _, onImageSelected: U, onAnalyzeProduct: m, isAnalyzing: q, onClearProduct: R}) => {
    const J = nl.useRef(null)
      , [ll,M] = nl.useState(!1)
      , [selDuration, setSelDuration] = nl.useState(window.__cineflow_duration || 10)
      , [selLang, setSelLang] = nl.useState(window.__cineflow_language || "bangla")
      , onSelectDuration = d => { setSelDuration(d); window.__cineflow_duration = d; }
      , onSelectLang = l => { setSelLang(l); window.__cineflow_language = l; }
      , T = k => {
        var ol;
        const sl = (ol = k.target.files) == null ? void 0 : ol[0];
        sl && X(sl)
    }
      , X = k => {
        if (!["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(k.type)) {
            alert("Please upload a valid image file (JPG, JPEG, PNG, or WEBP).");
            return
        }
        const ol = new FileReader;
        ol.onload = () => {
            U(ol.result, k.type, k.name)
        }
        ,
        ol.readAsDataURL(k)
    }
      , D = k => {
        k.preventDefault(),
        M(!0)
    }
      , V = k => {
        k.preventDefault(),
        M(!1)
    }
      , gl = k => {
        var ol;
        k.preventDefault(),
        M(!1);
        const sl = (ol = k.dataTransfer.files) == null ? void 0 : ol[0];
        sl && X(sl)
    }
    ;
    return f.jsxs("section", {
        className: "relative pt-8 pb-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8",
        children: [f.jsxs("div", {
            className: "text-center space-y-4 relative z-10",
            children: [f.jsxs("div", {
                className: "inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-blue-400",
                children: [f.jsx("span", {
                    className: "w-2 h-2 rounded-full bg-blue-400"
                }), f.jsx("span", {
                    children: selDuration + "-Second Commercial Engine • " + (selLang === "bangla" ? "বাংলা" : selLang === "english" ? "English" : "हिंदी")
                })]
            }), f.jsxs("h1", {
                className: "text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 max-w-4xl mx-auto leading-[1.12]",
                children: ["Turn One Product Image ", f.jsx("br", {
                    className: "hidden sm:inline"
                }), f.jsx("span", {
                    className: "text-blue-400",
                    children: "Into A " + selDuration + "-Second Commercial."
                })]
            }), f.jsx("p", {
                className: "text-xs sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed font-normal",
                children: "Upload your product image. CineFlow AI formulates the complete " + selDuration + "-second television commercial campaign in " + (selLang === "bangla" ? "Bangla" : selLang === "english" ? "English" : "Hindi") + " and generates ONE unified Master Commercial Prompt for Google Flow & Veo."
            })]
        }), f.jsxs("div", {
            className: "rounded-2xl bg-[#12131C] border border-zinc-800 p-3 sm:p-4 shadow-sm max-w-7xl mx-auto relative z-10",
            children: [
                f.jsxs("div", {
                    className: "cineflow-control-row",
                    children: [
                        f.jsxs("div", {
                            className: "space-y-1.5",
                            children: [
                                f.jsxs("div", {
                                    className: "flex items-center justify-between px-0.5",
                                    children: [
                                        f.jsxs("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                f.jsxs("svg", {
                                                    className: "w-3.5 h-3.5 text-emerald-400 shrink-0",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    children: [f.jsx("circle", { cx: "12", cy: "12", r: "10" }), f.jsx("polyline", { points: "12 6 12 12 16 14" })]
                                                }),
                                                f.jsx("span", {
                                                    className: "text-[11px] font-bold font-mono tracking-wider text-emerald-400 uppercase",
                                                    children: "Commercial Duration"
                                                })
                                            ]
                                        }),
                                        f.jsx("span", {
                                            className: "text-[10px] font-mono text-zinc-500",
                                            children: "Single Source of Truth"
                                        })
                                    ]
                                }),
                                f.jsxs("div", {
                                    className: "cineflow-tabs-3 bg-[#090A0F] p-1 rounded-xl border border-zinc-800/80",
                                    children: [
                                        f.jsxs("button", {
                                            type: "button",
                                            onClick: () => onSelectDuration(10),
                                            className: "cineflow-tab-btn-compact " + (selDuration === 10 ? "active" : "inactive"),
                                            children: [
                                                f.jsxs("div", {
                                                    className: "flex items-center justify-center gap-1.5 mb-0.5",
                                                    children: [
                                                        f.jsx("span", {
                                                            className: "text-xs font-bold font-mono " + (selDuration === 10 ? "text-emerald-400" : "text-zinc-300"),
                                                            children: "[ 10 SEC ]"
                                                        }),
                                                        f.jsx("span", {
                                                            className: "px-1.5 py-0.2 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-500/25 text-emerald-300 border border-emerald-500/40",
                                                            children: "DEFAULT"
                                                        })
                                                    ]
                                                }),
                                                f.jsx("div", {
                                                    className: "text-[10px] font-mono text-zinc-400",
                                                    children: "5 Scenes • Standard"
                                                })
                                            ]
                                        }),
                                        f.jsxs("button", {
                                            type: "button",
                                            onClick: () => onSelectDuration(25),
                                            className: "cineflow-tab-btn-compact " + (selDuration === 25 ? "active" : "inactive"),
                                            children: [
                                                f.jsxs("div", {
                                                    className: "flex items-center justify-center gap-1.5 mb-0.5",
                                                    children: [
                                                        f.jsx("span", {
                                                            className: "text-xs font-bold font-mono " + (selDuration === 25 ? "text-emerald-400" : "text-zinc-300"),
                                                            children: "[ 25 SEC ]"
                                                        }),
                                                        selDuration === 25 && f.jsx("span", {
                                                            className: "px-1.5 py-0.2 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-500/25 text-emerald-300 border border-emerald-500/40",
                                                            children: "ACTIVE"
                                                        })
                                                    ]
                                                }),
                                                f.jsx("div", {
                                                    className: "text-[10px] font-mono text-zinc-400",
                                                    children: "8 Scenes • Richer Story"
                                                })
                                            ]
                                        }),
                                        f.jsxs("button", {
                                            type: "button",
                                            onClick: () => onSelectDuration(30),
                                            className: "cineflow-tab-btn-compact " + (selDuration === 30 ? "active" : "inactive"),
                                            children: [
                                                f.jsxs("div", {
                                                    className: "flex items-center justify-center gap-1.5 mb-0.5",
                                                    children: [
                                                        f.jsx("span", {
                                                            className: "text-xs font-bold font-mono " + (selDuration === 30 ? "text-emerald-400" : "text-zinc-300"),
                                                            children: "[ 30 SEC ]"
                                                        }),
                                                        selDuration === 30 && f.jsx("span", {
                                                            className: "px-1.5 py-0.2 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-500/25 text-emerald-300 border border-emerald-500/40",
                                                            children: "ACTIVE"
                                                        })
                                                    ]
                                                }),
                                                f.jsx("div", {
                                                    className: "text-[10px] font-mono text-zinc-400",
                                                    children: "9 Scenes • Cinematic"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        f.jsxs("div", {
                            className: "space-y-1.5",
                            children: [
                                f.jsxs("div", {
                                    className: "flex items-center justify-between px-0.5",
                                    children: [
                                        f.jsxs("div", {
                                            className: "flex items-center gap-1.5",
                                            children: [
                                                f.jsxs("svg", {
                                                    className: "w-3.5 h-3.5 text-emerald-400 shrink-0",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    children: [f.jsx("circle", { cx: "12", cy: "12", r: "10" }), f.jsx("line", { x1: "2", y1: "12", x2: "22", y2: "12" }), f.jsx("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })]
                                                }),
                                                f.jsx("span", {
                                                    className: "text-[11px] font-bold font-mono tracking-wider text-emerald-400 uppercase",
                                                    children: "Voice & Script Language"
                                                })
                                            ]
                                        }),
                                        f.jsx("span", {
                                            className: "text-[10px] font-mono text-zinc-500",
                                            children: "Target Locale"
                                        })
                                    ]
                                }),
                                f.jsxs("div", {
                                    className: "cineflow-tabs-3 bg-[#090A0F] p-1 rounded-xl border border-zinc-800/80",
                                    children: [
                                        f.jsxs("button", {
                                            type: "button",
                                            onClick: () => onSelectLang("bangla"),
                                            className: "cineflow-tab-btn-compact " + (selLang === "bangla" ? "active" : "inactive"),
                                            children: [
                                                f.jsxs("div", {
                                                    className: "flex items-center justify-center gap-1.5 mb-0.5",
                                                    children: [
                                                        f.jsx("span", {
                                                            className: "text-xs font-bold font-mono " + (selLang === "bangla" ? "text-emerald-400" : "text-zinc-300"),
                                                            children: "[ BANGLA ]"
                                                        }),
                                                        f.jsx("span", {
                                                            className: "px-1.5 py-0.2 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-500/25 text-emerald-300 border border-emerald-500/40",
                                                            children: "DEFAULT"
                                                        })
                                                    ]
                                                }),
                                                f.jsx("div", {
                                                    className: "text-[10px] font-mono text-zinc-400",
                                                    children: "বাংলা • Local TVC"
                                                })
                                            ]
                                        }),
                                        f.jsxs("button", {
                                            type: "button",
                                            onClick: () => onSelectLang("english"),
                                            className: "cineflow-tab-btn-compact " + (selLang === "english" ? "active" : "inactive"),
                                            children: [
                                                f.jsxs("div", {
                                                    className: "flex items-center justify-center gap-1.5 mb-0.5",
                                                    children: [
                                                        f.jsx("span", {
                                                            className: "text-xs font-bold font-mono " + (selLang === "english" ? "text-emerald-400" : "text-zinc-300"),
                                                            children: "[ ENGLISH ]"
                                                        }),
                                                        selLang === "english" && f.jsx("span", {
                                                            className: "px-1.5 py-0.2 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-500/25 text-emerald-300 border border-emerald-500/40",
                                                            children: "ACTIVE"
                                                        })
                                                    ]
                                                }),
                                                f.jsx("div", {
                                                    className: "text-[10px] font-mono text-zinc-400",
                                                    children: "English • Global TVC"
                                                })
                                            ]
                                        }),
                                        f.jsxs("button", {
                                            type: "button",
                                            onClick: () => onSelectLang("hindi"),
                                            className: "cineflow-tab-btn-compact " + (selLang === "hindi" ? "active" : "inactive"),
                                            children: [
                                                f.jsxs("div", {
                                                    className: "flex items-center justify-center gap-1.5 mb-0.5",
                                                    children: [
                                                        f.jsx("span", {
                                                            className: "text-xs font-bold font-mono " + (selLang === "hindi" ? "text-emerald-400" : "text-zinc-300"),
                                                            children: "[ HINDI ]"
                                                        }),
                                                        selLang === "hindi" && f.jsx("span", {
                                                            className: "px-1.5 py-0.2 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-500/25 text-emerald-300 border border-emerald-500/40",
                                                            children: "ACTIVE"
                                                        })
                                                    ]
                                                }),
                                                f.jsx("div", {
                                                    className: "text-[10px] font-mono text-zinc-400",
                                                    children: "हिंदी • Indian TVC"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        }), f.jsxs("div", {
            className: "relative z-10 max-w-7xl mx-auto",
            children: [f.jsx("input", {
                ref: J,
                type: "file",
                accept: ".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp",
                onChange: T,
                className: "hidden",
                id: "product-file-input"
            }), E ? f.jsx("div", {
                className: "rounded-2xl bg-[#12131C] border border-zinc-800 p-6 sm:p-8 shadow-sm space-y-6 animate-image-entrance relative overflow-hidden",
                children: f.jsxs("div", {
                    className: "flex flex-col md:flex-row items-center gap-6",
                    children: [f.jsxs("div", {
                        className: "relative w-full md:w-64 h-56 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center overflow-hidden shrink-0 group",
                        children: [f.jsx("img", {
                            src: E,
                            alt: "Product Reference",
                            className: "w-full h-full object-contain p-3"
                        }), f.jsxs("div", {
                            className: "absolute top-3 left-3 px-3 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-[11px] font-medium text-blue-400 flex items-center gap-1.5 shadow-sm",
                            children: [f.jsx(Hd, {
                                className: "w-3.5 h-3.5 text-blue-400"
                            }), "Product Ground Truth"]
                        })]
                    }), f.jsxs("div", {
                        className: "flex-1 space-y-3.5 text-left w-full",
                        children: [f.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [f.jsx("span", {
                                className: "text-xs font-bold uppercase tracking-wider text-blue-400",
                                children: "Immutable Ground Truth"
                            }), f.jsx("button", {
                                id: "btn-replace-image",
                                onClick: R,
                                className: "text-xs font-semibold text-zinc-400 hover:text-zinc-200 hover:underline cursor-pointer btn-press",
                                children: "Change Image"
                            })]
                        }), f.jsx("h3", {
                            className: "text-lg font-bold text-zinc-100 truncate",
                            children: _ || "Uploaded Product Image"
                        }), f.jsx("p", {
                            className: "text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal",
                            children: "CineFlow AI will lock packaging geometry, branding, and materials as immutable ground truth and generate the complete 10-second commercial prompt."
                        }), f.jsx("div", {
                            className: "pt-2",
                            children: f.jsx("button", {
                                id: "btn-analyze-product",
                                onClick: m,
                                disabled: q,
                                className: "w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl btn-cta-primary text-white font-semibold text-xs uppercase tracking-wider disabled:opacity-50 cursor-pointer",
                                children: q ? f.jsxs(f.Fragment, {
                                    children: [f.jsx(gf, {
                                        className: "w-4 h-4 animate-spin"
                                    }), f.jsx("span", {
                                        children: "Formulating " + selDuration + "s " + (selLang === "bangla" ? "Bangla" : selLang === "english" ? "English" : "Hindi") + " Campaign..."
                                    })]
                                }) : f.jsxs(f.Fragment, {
                                    children: [f.jsx(Zn, {
                                        className: "w-4 h-4"
                                    }), f.jsx("span", {
                                        children: "Generate " + selDuration + "s " + (selLang === "bangla" ? "Bangla" : selLang === "english" ? "English" : "Hindi") + " Commercial Prompt"
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }) : f.jsx("div", {
                id: "dropzone-product",
                onDragOver: D,
                onDragLeave: V,
                onDrop: gl,
                onClick: () => {
                    var k;
                    return (k = J.current) == null ? void 0 : k.click()
                }
                ,
                className: `group relative rounded-2xl border-2 border-dashed transition-all duration-150 p-8 sm:p-14 text-center cursor-pointer overflow-hidden bg-[#12131C] ${ll ? "border-blue-500 bg-blue-950/20" : "border-zinc-800 hover:border-zinc-700 hover:bg-[#161824]"}`,
                children: f.jsxs("div", {
                    className: "relative z-10 flex flex-col items-center justify-center space-y-5",
                    children: [f.jsx("div", {
                        className: "w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 group-hover:border-blue-500/50 transition-colors",
                        children: f.jsx(Vn, {
                            className: "w-8 h-8"
                        })
                    }), f.jsxs("div", {
                        className: "space-y-1.5",
                        children: [f.jsx("p", {
                            className: "text-lg sm:text-2xl font-bold tracking-tight text-zinc-100",
                            children: "Drop Your Product Image Here"
                        }), f.jsx("p", {
                            className: "text-xs text-zinc-400 font-medium",
                            children: "or click to browse from device (JPG, PNG, WEBP)"
                        })]
                    }), f.jsx("div", {
                        className: "pt-2 w-full sm:w-auto",
                        children: f.jsx("button", {
                            type: "button",
                            id: "btn-upload-primary",
                            className: "w-full sm:w-auto px-8 py-3.5 rounded-xl btn-cta-primary text-white font-semibold text-xs uppercase tracking-wider cursor-pointer",
                            children: "Upload Product Image"
                        })
                    })]
                })
            })]
        })]
    })
}
;
function Yd(E) {
    return navigator.clipboard && window.isSecureContext ? navigator.clipboard.writeText(E).then( () => !0).catch( () => Cd(E)) : Promise.resolve(Cd(E))
}
function Cd(E) {
    try {
        const _ = document.createElement("textarea");
        _.value = E,
        _.style.position = "fixed",
        _.style.left = "-999999px",
        _.style.top = "-999999px",
        document.body.appendChild(_),
        _.focus(),
        _.select();
        const U = document.execCommand("copy");
        return _.remove(),
        U
    } catch (_) {
        return console.error("Fallback copy failed:", _),
        !1
    }
}
const $1 = ({analysis: E, onStartOver: _}) => {
    const [U,m] = nl.useState(!1)
      , q = E.masterCommercialPrompt || ""
      , R = async () => {
        await Yd(q) && (m(!0),
        setTimeout( () => m(!1), 2500))
    }
    ;
    return f.jsx("div", {
        className: "py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6",
        children: f.jsxs("section", {
            id: "section-master-commercial-prompt",
            className: "space-y-4 animate-reveal",
            children: [f.jsxs("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                children: [f.jsxs("div", {
                    className: "space-y-1.5",
                    children: [f.jsxs("div", {
                        className: "flex items-center gap-2 mb-1",
                        children: [f.jsx("span", {
                            className: "w-2 h-2 rounded-full bg-blue-400"
                        }), f.jsx("span", {
                            className: "text-xs font-bold uppercase tracking-wider text-blue-400",
                            children: "10-Second Commercial Directive"
                        })]
                    }), f.jsx("h2", {
                        className: "text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight",
                        children: "MASTER COMMERCIAL PROMPT"
                    }), f.jsx("p", {
                        className: "text-xs sm:text-sm text-zinc-400 max-w-2xl font-normal",
                        children: "One unified 10-second commercial prompt for Google Flow / Veo — video, Bengali voiceover, music, sound design, and brand payoff."
                    })]
                }), f.jsxs("div", {
                    className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0 w-full sm:w-auto",
                    children: [f.jsx("button", {
                        id: "btn-copy-master-prompt",
                        onClick: R,
                        className: `flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto ${U ? "bg-emerald-600 text-white" : "btn-cta-primary text-white"}`,
                        children: U ? f.jsxs(f.Fragment, {
                            children: [f.jsx(vf, {
                                className: "w-4 h-4"
                            }), f.jsx("span", {
                                children: "COPIED TO CLIPBOARD"
                            })]
                        }) : f.jsxs(f.Fragment, {
                            children: [f.jsx(Qn, {
                                className: "w-4 h-4"
                            }), f.jsx("span", {
                                children: "COPY MASTER PROMPT"
                            })]
                        })
                    }), _ && f.jsxs("button", {
                        id: "btn-start-over",
                        onClick: _,
                        className: "flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-colors cursor-pointer btn-press w-full sm:w-auto",
                        children: [f.jsx(B1, {
                            className: "w-3.5 h-3.5"
                        }), f.jsx("span", {
                            children: "New Commercial"
                        })]
                    })]
                })]
            }), f.jsxs("div", {
                className: "rounded-2xl bg-[#12131C] border border-zinc-800 shadow-sm overflow-hidden group",
                children: [f.jsx("div", {
                    className: "p-6 sm:p-8 font-mono text-xs sm:text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap select-text max-h-[600px] overflow-y-auto bg-[#090A0F]",
                    children: q
                }), f.jsxs("div", {
                    className: "px-6 py-4 bg-[#181926] border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-400",
                    children: [f.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [f.jsx(bf, {
                            className: "w-4 h-4 text-blue-400 shrink-0"
                        }), f.jsx("span", {
                            children: "Copy once and paste directly into Google Flow / Google Veo. Duration: Exactly 10.0s."
                        })]
                    }), f.jsx("button", {
                        onClick: R,
                        className: "text-blue-400 hover:underline cursor-pointer flex items-center gap-1 font-semibold shrink-0 self-end sm:self-center btn-press",
                        children: U ? "Copied ✓" : "Copy Master Prompt"
                    })]
                })]
            })]
        })
    })
}
  , F1 = ({productName: E="Hero Product", storyboardImage: _, storyboardFileName: U, onStoryboardSelected: m, onClearStoryboard: q, onAnalyzeStoryboard: R, isAnalyzingStoryboard: J, storyboardAnalysis: ll}) => {
    const M = nl.useRef(null)
      , [T,X] = nl.useState(!1)
      , [D,V] = nl.useState(!1)
      , gl = tl => {
        var bl;
        const Tl = (bl = tl.target.files) == null ? void 0 : bl[0];
        Tl && k(Tl)
    }
      , k = tl => {
        if (!["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(tl.type)) {
            alert("Please upload a valid image file (JPG, JPEG, PNG, or WEBP).");
            return
        }
        const bl = new FileReader;
        bl.onload = () => {
            m(bl.result, tl.type, tl.name)
        }
        ,
        bl.readAsDataURL(tl)
    }
      , sl = tl => {
        tl.preventDefault(),
        X(!0)
    }
      , ol = tl => {
        tl.preventDefault(),
        X(!1)
    }
      , zl = tl => {
        var bl;
        tl.preventDefault(),
        X(!1);
        const Tl = (bl = tl.dataTransfer.files) == null ? void 0 : bl[0];
        Tl && k(Tl)
    }
      , Bl = (ll == null ? void 0 : ll.videoMasterPrompt) || ""
      , jl = async () => {
        await Yd(Bl) && (V(!0),
        setTimeout( () => V(!1), 2500))
    }
    ;
    return f.jsxs("div", {
        className: "py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8",
        children: [f.jsxs("div", {
            className: "relative flex items-center justify-center my-10",
            children: [f.jsx("div", {
                className: "absolute inset-0 flex items-center",
                children: f.jsx("div", {
                    className: "w-full border-t border-zinc-800"
                })
            }), f.jsxs("div", {
                className: "relative px-5 py-2 bg-[#12131C] rounded-full text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2 border border-zinc-800",
                children: [f.jsx(O1, {
                    className: "w-4 h-4 text-blue-400"
                }), f.jsx("span", {
                    children: "STAGE 2: STORYBOARD & VIDEO GENERATION"
                })]
            })]
        }), f.jsxs("div", {
            className: "space-y-2",
            children: [f.jsxs("div", {
                className: "flex items-center gap-2",
                children: [f.jsx("span", {
                    className: "w-2 h-2 rounded-full bg-blue-400"
                }), f.jsx("span", {
                    className: "text-xs font-bold uppercase tracking-wider text-blue-400",
                    children: "Step 2 — Storyboard Integration"
                })]
            }), f.jsx("h2", {
                className: "text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight",
                children: "UPLOAD YOUR GENERATED STORYBOARD"
            }), f.jsx("p", {
                className: "text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed font-normal",
                children: "Upload the commercial storyboard generated from the Master Prompt. CineFlow AI will analyze the visual sequence and create the final 10-second Google Flow / Veo production prompt."
            })]
        }), f.jsxs("div", {
            className: "relative",
            children: [f.jsx("input", {
                ref: M,
                type: "file",
                accept: ".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp",
                onChange: gl,
                className: "hidden",
                id: "storyboard-file-input"
            }), _ ? f.jsx("div", {
                className: "rounded-2xl bg-[#12131C] border border-zinc-800 p-6 sm:p-8 shadow-sm space-y-6 animate-image-entrance relative overflow-hidden",
                children: f.jsxs("div", {
                    className: "flex flex-col md:flex-row items-center gap-6",
                    children: [f.jsxs("div", {
                        className: "relative w-full md:w-64 h-56 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center overflow-hidden shrink-0 group",
                        children: [f.jsx("img", {
                            src: _,
                            alt: "Creative Storyboard Reference",
                            className: "w-full h-full object-contain p-3"
                        }), f.jsxs("div", {
                            className: "absolute top-3 left-3 px-3 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-[11px] font-medium text-blue-400 flex items-center gap-1.5 shadow-sm",
                            children: [f.jsx(Hd, {
                                className: "w-3.5 h-3.5 text-blue-400"
                            }), "Storyboard Reference"]
                        })]
                    }), f.jsxs("div", {
                        className: "flex-1 space-y-3.5 text-left w-full",
                        children: [f.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [f.jsx("span", {
                                className: "text-xs font-bold uppercase tracking-wider text-blue-400",
                                children: "Creative Storyboard Reference"
                            }), f.jsx("button", {
                                id: "btn-replace-storyboard",
                                onClick: q,
                                className: "text-xs font-semibold text-zinc-400 hover:text-zinc-200 hover:underline cursor-pointer btn-press",
                                children: "Replace Image"
                            })]
                        }), f.jsx("h3", {
                            className: "text-lg font-bold text-zinc-100 truncate",
                            children: U || "Uploaded Storyboard"
                        }), f.jsxs("p", {
                            className: "text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal",
                            children: ["CineFlow AI will analyze visual sequences, timing, and framing while locking product details to the original product ground truth (", E, ")."]
                        }), f.jsx("div", {
                            className: "pt-2",
                            children: f.jsx("button", {
                                id: "btn-analyze-storyboard",
                                onClick: R,
                                disabled: J,
                                className: "w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl btn-cta-primary text-white font-semibold text-xs uppercase tracking-wider disabled:opacity-50 cursor-pointer",
                                children: J ? f.jsxs(f.Fragment, {
                                    children: [f.jsx(gf, {
                                        className: "w-4 h-4 animate-spin"
                                    }), f.jsx("span", {
                                        children: "Analyzing Storyboard & Generating 10s Video Prompt..."
                                    })]
                                }) : f.jsxs(f.Fragment, {
                                    children: [f.jsx(Zn, {
                                        className: "w-4 h-4"
                                    }), f.jsx("span", {
                                        children: "ANALYZE STORYBOARD & GENERATE VIDEO PROMPT"
                                    })]
                                })
                            })
                        })]
                    })]
                })
            }) : f.jsx("div", {
                id: "dropzone-storyboard",
                onDragOver: sl,
                onDragLeave: ol,
                onDrop: zl,
                onClick: () => {
                    var tl;
                    return (tl = M.current) == null ? void 0 : tl.click()
                }
                ,
                className: `group relative rounded-2xl border-2 border-dashed transition-all duration-150 p-8 sm:p-14 text-center cursor-pointer overflow-hidden bg-[#12131C] ${T ? "border-blue-500 bg-blue-950/20" : "border-zinc-800 hover:border-zinc-700 hover:bg-[#161824]"}`,
                children: f.jsxs("div", {
                    className: "relative z-10 flex flex-col items-center justify-center space-y-4",
                    children: [f.jsx("div", {
                        className: "w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 group-hover:border-blue-500/50 transition-colors",
                        children: f.jsx(Vn, {
                            className: "w-8 h-8"
                        })
                    }), f.jsxs("div", {
                        className: "space-y-1.5",
                        children: [f.jsx("p", {
                            className: "text-lg sm:text-2xl font-bold tracking-tight text-zinc-100",
                            children: "UPLOAD STORYBOARD IMAGE"
                        }), f.jsx("p", {
                            className: "text-xs text-zinc-400 font-medium",
                            children: "Supported: PNG / JPG / WEBP (Drag and drop or click to browse)"
                        })]
                    }), f.jsx("div", {
                        className: "pt-2 w-full sm:w-auto",
                        children: f.jsx("button", {
                            type: "button",
                            id: "btn-upload-storyboard",
                            className: "w-full sm:w-auto px-8 py-3.5 rounded-xl btn-cta-primary text-white font-semibold text-xs uppercase tracking-wider cursor-pointer",
                            children: "Select Storyboard Image"
                        })
                    })]
                })
            })]
        }), ll && f.jsxs("section", {
            id: "section-video-master-prompt",
            className: "space-y-4 pt-6 animate-reveal",
            children: [f.jsxs("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                children: [f.jsxs("div", {
                    className: "space-y-1.5",
                    children: [f.jsxs("div", {
                        className: "flex items-center gap-2 mb-1",
                        children: [f.jsx("span", {
                            className: "w-2 h-2 rounded-full bg-blue-400"
                        }), f.jsx("span", {
                            className: "text-xs font-bold uppercase tracking-wider text-blue-400",
                            children: "Google Flow / Google Veo Production Prompt"
                        })]
                    }), f.jsx("h2", {
                        className: "text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight",
                        children: "10-SECOND VIDEO MASTER PROMPT"
                    }), f.jsx("p", {
                        className: "text-xs sm:text-sm text-zinc-400 max-w-2xl font-normal",
                        children: "Final production prompt generated from your storyboard for Google Flow / Google Veo, including video direction, Bengali voiceover, music, sound design, and brand payoff."
                    })]
                }), f.jsx("button", {
                    id: "btn-copy-video-prompt",
                    onClick: jl,
                    className: `flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer w-full sm:w-auto shrink-0 self-start sm:self-center ${D ? "bg-emerald-600 text-white" : "btn-cta-primary text-white"}`,
                    children: D ? f.jsxs(f.Fragment, {
                        children: [f.jsx(vf, {
                            className: "w-4 h-4"
                        }), f.jsx("span", {
                            children: "COPIED TO CLIPBOARD"
                        })]
                    }) : f.jsxs(f.Fragment, {
                        children: [f.jsx(Qn, {
                            className: "w-4 h-4"
                        }), f.jsx("span", {
                            children: "COPY MASTER PROMPT"
                        })]
                    })
                })]
            }), f.jsxs("div", {
                className: "rounded-2xl bg-[#12131C] border border-zinc-800 shadow-sm overflow-hidden group",
                children: [f.jsx("div", {
                    className: "p-6 sm:p-8 font-mono text-xs sm:text-sm text-zinc-200 leading-relaxed whitespace-pre-wrap select-text max-h-[600px] overflow-y-auto bg-[#090A0F]",
                    children: Bl
                }), f.jsxs("div", {
                    className: "px-6 py-4 bg-[#181926] border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-zinc-400",
                    children: [f.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [f.jsx(bf, {
                            className: "w-4 h-4 text-blue-400 shrink-0"
                        }), f.jsxs("span", {
                            children: ["Panels identified: ", ll.panelsIdentified, " | Exact 10.0-Second Timing for Google Flow & Veo."]
                        })]
                    }), f.jsx("button", {
                        onClick: jl,
                        className: "text-blue-400 hover:underline cursor-pointer flex items-center gap-1 font-semibold shrink-0 self-end sm:self-center btn-press",
                        children: D ? "Copied ✓" : "Copy Master Prompt"
                    })]
                })]
            })]
        })]
    })
}
  , I1 = () => {
    const E = [{
        title: "STEP 1: UPLOAD PRODUCT",
        icon: Vn,
        desc: "Immutable Ground Truth"
    }, {
        title: "GENERATE MASTER PROMPT",
        icon: Zn,
        desc: "AI Commercial Direction"
    }, {
        title: "COPY MASTER PROMPT",
        icon: Qn,
        desc: "Clipboard copy"
    }, {
        title: "USER CREATES STORYBOARD",
        icon: U1,
        desc: "In ChatGPT"
    }, {
        title: "STEP 2: UPLOAD STORYBOARD",
        icon: Vn,
        desc: "Creative Reference"
    }, {
        title: "ANALYZE & GENERATE VIDEO",
        icon: Zn,
        desc: "10-Second Veo Prompt"
    }, {
        title: "COPY MASTER PROMPT",
        icon: Qn,
        desc: "Final Unified Prompt"
    }, {
        title: "GOOGLE FLOW / VEO",
        icon: w1,
        desc: "Broadcast Production"
    }];
    return f.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2",
        children: f.jsxs("div", {
            className: "bg-[#12131C] border border-zinc-800 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm",
            children: [f.jsxs("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3",
                children: [f.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [f.jsx("span", {
                        className: "w-2 h-2 rounded-full bg-blue-400"
                    }), f.jsx("span", {
                        className: "text-xs font-bold uppercase tracking-wider text-blue-400",
                        children: "CineFlow AI Two-Stage Commercial Pipeline"
                    })]
                }), f.jsx("span", {
                    className: "text-[11px] font-mono text-zinc-400",
                    children: "Exact 10-Second Broadcast Standard"
                })]
            }), f.jsx("div", {
                className: "grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 pt-1",
                children: E.map( (_, U) => {
                    const m = _.icon;
                    return f.jsxs("div", {
                        className: "flex flex-col items-center text-center p-3 rounded-xl bg-[#181926] border border-zinc-800 relative group hover:border-zinc-700 transition-colors",
                        children: [f.jsx("div", {
                            className: "w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-blue-400 mb-2 group-hover:border-blue-500/40 transition-colors",
                            children: f.jsx(m, {
                                className: "w-4 h-4"
                            })
                        }), f.jsx("span", {
                            className: "text-[10px] font-bold text-zinc-200 leading-tight mb-1 uppercase group-hover:text-blue-400 transition-colors",
                            children: _.title
                        }), f.jsx("span", {
                            className: "text-[9px] text-zinc-400 font-medium",
                            children: _.desc
                        })]
                    }, U)
                }
                )
            })]
        })
    })
}
;
function P1() {
    var z;
    const [E,_] = nl.useState( () => {
        const A = localStorage.getItem("str_ai_custom_gemini_key");
        return A ? (localStorage.removeItem("str_ai_custom_gemini_key"),
        sessionStorage.setItem("str_ai_custom_gemini_key", A),
        A) : sessionStorage.getItem("str_ai_custom_gemini_key") || ""
    }
    )
      , [U,m] = nl.useState(!1)
      , [q,R] = nl.useState(!1)
      , [J,ll] = nl.useState(null)
      , [M,T] = nl.useState("image/jpeg")
      , [X,D] = nl.useState(null)
      , [V,gl] = nl.useState(null)
      , [k,sl] = nl.useState(!1)
      , [ol,zl] = nl.useState(null)
      , [Bl,jl] = nl.useState("image/jpeg")
      , [tl,Tl] = nl.useState(null)
      , [bl,K] = nl.useState(null)
      , [Kl,at] = nl.useState(!1)
      , [Ut,Al] = nl.useState(null);
    nl.useEffect( () => {
        fetch("/api/health").then(A => A.json()).then(A => {
            m(!!A.hasServerKey)
        }
        ).catch(A => {
            console.error("Health check failed:", A)
        }
        )
    }
    , []);
    const ql = !!(E || U)
      , Rt = async A => {
        try {
            return (await (await fetch("/api/test-key", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-gemini-key": A
                },
                body: JSON.stringify({
                    apiKey: A
                })
            })).json()).success ? (_(A),
            sessionStorage.setItem("str_ai_custom_gemini_key", A),
            localStorage.removeItem("str_ai_custom_gemini_key"),
            Al(null),
            !0) : !1
        } catch (N) {
            return console.error("Failed to verify API key:", N),
            !1
        }
    }
      , Et = () => {
        _(""),
        sessionStorage.removeItem("str_ai_custom_gemini_key"),
        localStorage.removeItem("str_ai_custom_gemini_key")
    }
      , ut = (A, N, B) => {
        ll(A),
        T(N),
        D(B),
        Al(null)
    }
      , p = () => {
        ll(null),
        D(null),
        gl(null),
        zl(null),
        Tl(null),
        K(null)
    }
      , j = async () => {
        if (J) {
            if (!ql) {
                R(!0),
                Al("Please connect your Gemini API key to run AI commercial direction.");
                return
            }
            sl(!0),
            Al(null);
            try {
                const A = await fetch("/api/analyze-product", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        ...E ? {
                            "x-gemini-key": E
                        } : {}
                    },
                    body: JSON.stringify({
                        imageBase64: J,
                        mimeType: M,
                        duration: (window.__cineflow_duration || 10),
                        language: (window.__cineflow_language || "bangla")
                    })
                })
                  , N = await A.json();
                if (!A.ok)
                    throw A.status === 401 && R(!0),
                    new Error(N.error || "Failed to analyze product image.");
                gl(N.data),
                setTimeout( () => {
                    const B = document.getElementById("section-master-commercial-prompt");
                    B == null || B.scrollIntoView({
                        behavior: "smooth"
                    })
                }
                , 100)
            } catch (A) {
                console.error("Error analyzing product:", A),
                Al(A.message || "An error occurred while analyzing the product.")
            } finally {
                sl(!1)
            }
        }
    }
      , G = (A, N, B) => {
        zl(A),
        jl(N),
        Tl(B),
        Al(null)
    }
      , cl = () => {
        zl(null),
        Tl(null),
        K(null)
    }
      , il = async () => {
        var A;
        if (ol) {
            if (!ql) {
                R(!0),
                Al("Please connect your Gemini API key to run storyboard analysis.");
                return
            }
            at(!0),
            Al(null);
            try {
                const N = await fetch("/api/analyze-storyboard", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        ...E ? {
                            "x-gemini-key": E
                        } : {}
                    },
                    body: JSON.stringify({
                        storyboardBase64: ol,
                        storyboardMimeType: Bl,
                        productBase64: J,
                        productMimeType: M,
                        productName: ((A = V == null ? void 0 : V.productIdentity) == null ? void 0 : A.productName) || "Hero Product",
                        duration: (window.__cineflow_duration || 10),
                        language: (window.__cineflow_language || "bangla")
                    })
                })
                  , B = await N.json();
                if (!N.ok)
                    throw N.status === 401 && R(!0),
                    new Error(B.error || "Failed to analyze storyboard image.");
                K(B.data),
                setTimeout( () => {
                    const L = document.getElementById("section-video-master-prompt");
                    L == null || L.scrollIntoView({
                        behavior: "smooth"
                    })
                }
                , 100)
            } catch (N) {
                console.error("Error analyzing storyboard:", N),
                Al(N.message || "An error occurred while analyzing the storyboard.")
            } finally {
                at(!1)
            }
        }
    }
      , r = () => {
        ll(null),
        D(null),
        gl(null),
        zl(null),
        Tl(null),
        K(null),
        Al(null),
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    ;
    return f.jsxs("div", {
        className: "min-h-screen bg-[#090A0F] text-zinc-100 flex flex-col selection:bg-blue-500 selection:text-white relative overflow-x-hidden",
        children: [f.jsx(J1, {
            apiKeyConnected: ql,
            onOpenApiKeyModal: () => R(!0),
            onGoHome: r
        }), Ut && f.jsx("div", {
            className: "max-w-7xl mx-auto px-4 pt-4 w-full relative z-20",
            children: f.jsxs("div", {
                className: "p-4 rounded-xl bg-red-950/80 border border-red-800/80 text-red-200 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-sm",
                children: [f.jsxs("div", {
                    className: "flex items-start gap-2.5",
                    children: [f.jsx(Rd, {
                        className: "w-5 h-5 text-red-400 shrink-0 mt-0.5"
                    }), f.jsxs("div", {
                        children: [f.jsx("p", {
                            className: "font-bold font-mono text-red-100",
                            children: "Notice"
                        }), f.jsx("p", {
                            className: "text-red-300/90 text-xs mt-0.5 font-normal",
                            children: Ut
                        })]
                    })]
                }), f.jsxs("div", {
                    className: "flex items-center gap-2 shrink-0 self-end sm:self-center",
                    children: [f.jsx("button", {
                        onClick: () => R(!0),
                        className: "px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors cursor-pointer",
                        children: "Connect Custom Key"
                    }), f.jsx("button", {
                        onClick: V ? il : j,
                        className: "px-3 py-1.5 rounded-lg bg-red-900/60 hover:bg-red-800/80 border border-red-700/60 text-xs font-mono text-white transition-colors cursor-pointer",
                        children: "Retry"
                    }), f.jsx("button", {
                        onClick: () => Al(null),
                        className: "p-1 text-red-400 hover:text-white cursor-pointer",
                        children: f.jsx(qd, {
                            className: "w-4 h-4"
                        })
                    })]
                })]
            })
        }), f.jsxs("main", {
            className: "flex-1 pb-16 space-y-4 relative z-10",
            children: [f.jsx(W1, {
                productImage: J,
                productFileName: X,
                onImageSelected: ut,
                onAnalyzeProduct: j,
                isAnalyzing: k,
                onClearProduct: p
            }), f.jsx(I1, {}), V && f.jsx($1, {
                analysis: V,
                onStartOver: r
            }), V && f.jsx(F1, {
                productImage: J,
                productName: (z = V.productIdentity) == null ? void 0 : z.productName,
                storyboardImage: ol,
                storyboardFileName: tl,
                onStoryboardSelected: G,
                onClearStoryboard: cl,
                onAnalyzeStoryboard: il,
                isAnalyzingStoryboard: Kl,
                storyboardAnalysis: bl
            })]
        }), f.jsx("footer", {
            className: "border-t border-zinc-800/80 bg-[#090A0F] py-6 text-center text-xs text-zinc-400 font-mono relative z-10",
            children: f.jsxs("div", {
                className: "max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4",
                children: [f.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [f.jsx("span", {
                        className: "font-bold text-zinc-100",
                        children: "CineFlow AI"
                    }), f.jsx("span", {
                        children: "— Two-Stage 10-Second Commercial Master Prompt Engine"
                    })]
                }), f.jsxs("div", {
                    className: "flex items-center gap-4 text-zinc-400",
                    children: [f.jsx("a", {
                        href: "https://wa.me/8801309880436",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "WhatsApp",
                        title: "WhatsApp",
                        className: "hover:text-emerald-400 transition-colors p-1 flex items-center justify-center cursor-pointer",
                        children: f.jsx("svg", {
                            className: "w-4 h-4 fill-current",
                            viewBox: "0 0 24 24",
                            children: f.jsx("path", {
                                d: "M12.011 1.011c-6.064 0-10.989 4.925-10.989 10.989 0 1.936.505 3.827 1.464 5.49L1 23l5.65-1.482A10.93 10.93 0 0012.011 23c6.064 0 10.989-4.925 10.989-10.989 0-6.064-4.925-10.989-10.989-10.989zm0 20.147a9.123 9.123 0 01-4.66-1.272l-.334-.198-3.46.907.923-3.372-.218-.347a9.124 9.124 0 01-1.401-4.854c0-5.041 4.101-9.142 9.142-9.142 5.041 0 9.142 4.101 9.142 9.142 0 5.041-4.101 9.142-9.142 9.142zm5.011-6.852c-.275-.138-1.628-.803-1.88-.895-.252-.092-.435-.138-.619.138-.183.275-.71 0.895-.871 1.078-.16.183-.321.206-.596.069a7.513 7.513 0 01-2.21-1.363 8.28 8.28 0 01-1.531-1.905c-.16-.275-.017-.424.12-.561.124-.124.275-.321.413-.481.138-.16.183-.275.275-.458.092-.183.046-.344-.023-.481-.069-.138-.619-1.492-.848-2.043-.223-.537-.45-.464-.619-.472l-.527-.009c-.183 0-.481.069-.733.344s-.962.94-.962 2.293 1.008 2.658 1.145 2.842c.138.183 1.984 3.03 4.807 4.25.672.29 1.196.463 1.605.593.675.214 1.289.184 1.775.111.542-.081 1.628-.665 1.857-1.306.229-.641.229-1.192.16-1.306-.069-.115-.252-.183-.527-.321z"
                            })
                        })
                    }), f.jsx("a", {
                        href: "https://www.facebook.com/profile.php?id=61586575149744",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "Facebook",
                        title: "Facebook",
                        className: "hover:text-blue-400 transition-colors p-1 flex items-center justify-center cursor-pointer",
                        children: f.jsx("svg", {
                            className: "w-4 h-4 fill-current",
                            viewBox: "0 0 24 24",
                            children: f.jsx("path", {
                                d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                            })
                        })
                    }), f.jsx("a", {
                        href: "https://www.linkedin.com/in/str-robin",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": "LinkedIn",
                        title: "LinkedIn",
                        className: "hover:text-blue-400 transition-colors p-1 flex items-center justify-center cursor-pointer",
                        children: f.jsx("svg", {
                            className: "w-4 h-4 fill-current",
                            viewBox: "0 0 24 24",
                            children: f.jsx("path", {
                                d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z"
                            })
                        })
                    })]
                }), f.jsxs("div", {
                    className: "flex items-center gap-2 text-[11px] text-zinc-400",
                    children: [f.jsx(bf, {
                        className: "w-3.5 h-3.5 text-blue-400"
                    }), f.jsx("span", {
                        children: "Immutable Product Ground Truth + Creative Storyboard Reference"
                    })]
                })]
            })
        }), f.jsx(k1, {
            isOpen: q,
            onClose: () => R(!1),
            savedApiKey: E,
            hasServerKey: U,
            onSaveKey: Rt,
            onDisconnectKey: Et
        })]
    })
}
g1.createRoot(document.getElementById("root")).render(f.jsx(nl.StrictMode, {
    children: f.jsx(P1, {})
}));
