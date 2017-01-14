(function (e, t) {
    function _(e) {
        var t = M[e] = {};
        return v.each(e.split(y), function (e, n) {
            t[n] = !0
        }), t
    }

    function H(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                } catch (s) {
                }
                v.data(e, n, r)
            } else r = t
        }
        return r
    }

    function B(e) {
        var t;
        for (t in e) {
            if (t === "data" && v.isEmptyObject(e[t]))continue;
            if (t !== "toJSON")return !1
        }
        return !0
    }

    function et() {
        return !1
    }

    function tt() {
        return !0
    }

    function ut(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function at(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ft(e, t, n) {
        t = t || 0;
        if (v.isFunction(t))return v.grep(e, function (e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType)return v.grep(e, function (e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = v.grep(e, function (e) {
                return e.nodeType === 1
            });
            if (it.test(t))return v.filter(t, r, !n);
            t = v.filter(t, r)
        }
        return v.grep(e, function (e, r) {
            return v.inArray(e, t) >= 0 === n
        })
    }

    function lt(e) {
        var t = ct.split("|"), n = e.createDocumentFragment();
        if (n.createElement)while (t.length)n.createElement(t.pop());
        return n
    }

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function At(e, t) {
        if (t.nodeType !== 1 || !v.hasData(e))return;
        var n, r, i, s = v._data(e), o = v._data(t, s), u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)for (r = 0, i = u[n].length; r < i; r++)v.event.add(t, n, u[n][r])
        }
        o.data && (o.data = v.extend({}, o.data))
    }

    function Ot(e, t) {
        var n;
        if (t.nodeType !== 1)return;
        t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
    }

    function Mt(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }

    function _t(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked)
    }

    function Qt(e, t) {
        if (t in e)return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Jt.length;
        while (i--) {
            t = Jt[i] + n;
            if (t in e)return t
        }
        return r
    }

    function Gt(e, t) {
        return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
    }

    function Yt(e, t) {
        var n, r, i = [], s = 0, o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style)continue;
            i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style)continue;
            if (!t || n.style.display === "none" || n.style.display === "")n.style.display = t ? i[s] || "" : "none"
        }
        return e
    }

    function Zt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function en(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0, s = 0;
        for (; i < 4; i += 2)n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
        return s
    }

    function tn(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight, i = !0, s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
        if (r <= 0 || r == null) {
            r = Dt(e, t);
            if (r < 0 || r == null)r = e.style[t];
            if (Ut.test(r))return r;
            i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
    }

    function nn(e) {
        if (Wt[e])return Wt[e];
        var t = v("<" + e + ">").appendTo(i.body), n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {frameBorder: 0, width: 0, height: 0}));
            if (!Ht || !Pt.createElement)Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
            t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
        }
        return Wt[e] = n, n
    }

    function fn(e, t, n, r) {
        var i;
        if (v.isArray(t))v.each(t, function (t, i) {
            n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        }); else if (!n && v.type(t) === "object")for (i in t)fn(e + "[" + i + "]", t[i], n, r); else r(e, t)
    }

    function Cn(e) {
        return function (t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i, s, o = t.toLowerCase().split(y), u = 0, a = o.length;
            if (v.isFunction(n))for (; u < a; u++)r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
        }
    }

    function kn(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u, a = e[s], f = 0, l = a ? a.length : 0, c = e === Sn;
        for (; f < l && (c || !u); f++)u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
        return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u
    }

    function Ln(e, n) {
        var r, i, s = v.ajaxSettings.flatOptions || {};
        for (r in n)n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && v.extend(!0, e, i)
    }

    function An(e, n, r) {
        var i, s, o, u, a = e.contents, f = e.dataTypes, l = e.responseFields;
        for (s in l)s in r && (n[l[s]] = r[s]);
        while (f[0] === "*")f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)for (s in a)if (a[s] && a[s].test(i)) {
            f.unshift(s);
            break
        }
        if (f[0] in r)o = f[0]; else {
            for (s in r) {
                if (!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        }
        if (o)return o !== f[0] && f.unshift(o), r[o]
    }

    function On(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(), u = o[0], a = {}, f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (o[1])for (n in e.converters)a[n.toLowerCase()] = e.converters[n];
        for (; i = o[++f];)if (i !== "*") {
            if (u !== "*" && u !== i) {
                n = a[u + " " + i] || a["* " + i];
                if (!n)for (r in a) {
                    s = r.split(" ");
                    if (s[1] === i) {
                        n = a[u + " " + s[0]] || a["* " + s[0]];
                        if (n) {
                            n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                            break
                        }
                    }
                }
                if (n !== !0)if (n && e["throws"])t = n(t); else try {
                    t = n(t)
                } catch (l) {
                    return {state: "parsererror", error: n ? l : "No conversion from " + u + " to " + i}
                }
            }
            u = i
        }
        return {state: "success", data: t}
    }

    function Fn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function In() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function $n() {
        return setTimeout(function () {
            qn = t
        }, 0), qn = v.now()
    }

    function Jn(e, t) {
        v.each(t, function (t, n) {
            var r = (Vn[t] || []).concat(Vn["*"]), i = 0, s = r.length;
            for (; i < s; i++)if (r[i].call(e, t, n))return
        })
    }

    function Kn(e, t, n) {
        var r, i = 0, s = 0, o = Xn.length, u = v.Deferred().always(function () {
            delete a.elem
        }), a = function () {
            var t = qn || $n(), n = Math.max(0, f.startTime + f.duration - t), r = n / f.duration || 0, i = 1 - r, s = 0, o = f.tweens.length;
            for (; s < o; s++)f.tweens[s].run(i);
            return u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), !1)
        }, f = u.promise({
            elem: e,
            props: v.extend({}, t),
            opts: v.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: qn || $n(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n, r) {
                var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                return f.tweens.push(i), i
            },
            stop: function (t) {
                var n = 0, r = t ? f.tweens.length : 0;
                for (; n < r; n++)f.tweens[n].run(1);
                return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
            }
        }), l = f.props;
        Qn(l, f.opts.specialEasing);
        for (; i < o; i++) {
            r = Xn[i].call(f, e, l, f.opts);
            if (r)return r
        }
        return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function Qn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s)n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function Gn(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this, p = e.style, d = {}, m = [], g = e.nodeType && Gt(e);
        n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function () {
            l.unqueued || c()
        }), l.unqueued++, h.always(function () {
            h.always(function () {
                l.unqueued--, v.queue(e, "fx").length || l.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            s = t[r];
            if (Un.exec(s)) {
                delete t[r], a = a || s === "toggle";
                if (s === (g ? "hide" : "show"))continue;
                m.push(r)
            }
        }
        o = m.length;
        if (o) {
            u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden" in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function () {
                v(e).hide()
            }), h.done(function () {
                var t;
                v.removeData(e, "fxshow", !0);
                for (t in d)v.style(e, t, d[t])
            });
            for (r = 0; r < o; r++)i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
        }
    }

    function Yn(e, t, n, r, i) {
        return new Yn.prototype.init(e, t, n, r, i)
    }

    function Zn(e, t) {
        var n, r = {height: e}, i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t)n = $t[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function tr(e) {
        return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }

    var n, r, i = e.document, s = e.location, o = e.navigator, u = e.jQuery, a = e.$, f = Array.prototype.push, l = Array.prototype.slice, c = Array.prototype.indexOf, h = Object.prototype.toString, p = Object.prototype.hasOwnProperty, d = String.prototype.trim, v = function (e, t) {
        return new v.fn.init(e, t, n)
    }, m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, g = /\S/, y = /\s+/, b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, S = /^[\],:{}\s]*$/, x = /(?:^|:|,)(?:\s*\[)+/g, T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, C = /^-ms-/, k = /-([\da-z])/gi, L = function (e, t) {
        return (t + "").toUpperCase()
    }, A = function () {
        i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())
    }, O = {};
    v.fn = v.prototype = {
        constructor: v, init: function (e, n, r) {
            var s, o, u, a;
            if (!e)return this;
            if (e.nodeType)return this.context = this[0] = e, this.length = 1, this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                if (s && (s[1] || !n)) {
                    if (s[1])return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
                    o = i.getElementById(s[2]);
                    if (o && o.parentNode) {
                        if (o.id !== s[2])return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = i, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
        }, selector: "", jquery: "1.8.3", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return l.call(this)
        }, get: function (e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        }, pushStack: function (e, t, n) {
            var r = v.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        }, each: function (e, t) {
            return v.each(this, e, t)
        }, ready: function (e) {
            return v.ready.promise().done(e), this
        }, eq: function (e) {
            return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, slice: function () {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
        }, map: function (e) {
            return this.pushStack(v.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: [].sort, splice: [].splice
    }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function () {
        var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments.length, l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)if ((e = arguments[a]) != null)for (n in e) {
            r = u[n], i = e[n];
            if (u === i)continue;
            l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
        }
        return u
    }, v.extend({
        noConflict: function (t) {
            return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? v.readyWait++ : v.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? --v.readyWait : v.isReady)return;
            if (!i.body)return setTimeout(v.ready, 1);
            v.isReady = !0;
            if (e !== !0 && --v.readyWait > 0)return;
            r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready")
        }, isFunction: function (e) {
            return v.type(e) === "function"
        }, isArray: Array.isArray || function (e) {
            return v.type(e) === "array"
        }, isWindow: function (e) {
            return e != null && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return e == null ? String(e) : O[h.call(e)] || "object"
        }, isPlainObject: function (e) {
            if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e))return !1;
            try {
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || p.call(e, r)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, error: function (e) {
            throw new Error(e)
        }, parseHTML: function (e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
        }, parseJSON: function (t) {
            if (!t || typeof t != "string")return null;
            t = v.trim(t);
            if (e.JSON && e.JSON.parse)return e.JSON.parse(t);
            if (S.test(t.replace(T, "@").replace(N, "]").replace(x, "")))return (new Function("return " + t))();
            v.error("Invalid JSON: " + t)
        }, parseXML: function (n) {
            var r, i;
            if (!n || typeof n != "string")return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r
        }, noop: function () {
        }, globalEval: function (t) {
            t && g.test(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(C, "ms-").replace(k, L)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, n, r) {
            var i, s = 0, o = e.length, u = o === t || v.isFunction(e);
            if (r) {
                if (u) {
                    for (i in e)if (n.apply(e[i], r) === !1)break
                } else for (; s < o;)if (n.apply(e[s++], r) === !1)break
            } else if (u) {
                for (i in e)if (n.call(e[i], i, e[i]) === !1)break
            } else for (; s < o;)if (n.call(e[s], s, e[s++]) === !1)break;
            return e
        }, trim: d && !d.call("\ufeff\u00a0") ? function (e) {
            return e == null ? "" : d.call(e)
        } : function (e) {
            return e == null ? "" : (e + "").replace(b, "")
        }, makeArray: function (e, t) {
            var n, r = t || [];
            return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (c)return c.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)if (n in t && t[n] === e)return n
            }
            return -1
        }, merge: function (e, n) {
            var r = n.length, i = e.length, s = 0;
            if (typeof r == "number")for (; s < r; s++)e[i++] = n[s]; else while (n[s] !== t)e[i++] = n[s++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            var r, i = [], s = 0, o = e.length;
            n = !!n;
            for (; s < o; s++)r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        }, map: function (e, n, r) {
            var i, s, o = [], u = 0, a = e.length, f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
            if (f)for (; u < a; u++)i = n(e[u], u, r), i != null && (o[o.length] = i); else for (s in e)i = n(e[s], s, r), i != null && (o[o.length] = i);
            return o.concat.apply([], o)
        }, guid: 1, proxy: function (e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function () {
                return e.apply(n, i.concat(l.call(arguments)))
            }, s.guid = e.guid = e.guid || v.guid++, s) : t
        }, access: function (e, n, r, i, s, o, u) {
            var a, f = r == null, l = 0, c = e.length;
            if (r && typeof r == "object") {
                for (l in r)v.access(e, n, l, r[l], 1, o, i);
                s = 1
            } else if (i !== t) {
                a = u === t && v.isFunction(i), f && (a ? (a = n, n = function (e, t, n) {
                    return a.call(v(e), n)
                }) : (n.call(e, i), n = null));
                if (n)for (; l < c; l++)n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
        }, now: function () {
            return (new Date).getTime()
        }
    }), v.ready.promise = function (t) {
        if (!r) {
            r = v.Deferred();
            if (i.readyState === "complete")setTimeout(v.ready, 1); else if (i.addEventListener)i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1); else {
                i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement
                } catch (s) {
                }
                n && n.doScroll && function o() {
                    if (!v.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        v.ready()
                    }
                }()
            }
        }
        return r.promise(t)
    }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (e, t) {
        O["[object " + t + "]"] = t.toLowerCase()
    }), n = v(i);
    var M = {};
    v.Callbacks = function (e) {
        e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
        var n, r, i, s, o, u, a = [], f = !e.once && [], l = function (t) {
            n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
            for (; a && u < o; u++)if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                n = !1;
                break
            }
            i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
        }, c = {
            add: function () {
                if (a) {
                    var t = a.length;
                    (function r(t) {
                        v.each(t, function (t, n) {
                            var i = v.type(n);
                            i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
                        })
                    })(arguments), i ? o = a.length : n && (s = t, l(n))
                }
                return this
            }, remove: function () {
                return a && v.each(arguments, function (e, t) {
                    var n;
                    while ((n = v.inArray(t, a, n)) > -1)a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                }), this
            }, has: function (e) {
                return v.inArray(e, a) > -1
            }, empty: function () {
                return a = [], this
            }, disable: function () {
                return a = f = n = t, this
            }, disabled: function () {
                return !a
            }, lock: function () {
                return f = t, n || c.disable(), this
            }, locked: function () {
                return !f
            }, fireWith: function (e, t) {
                return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
            }, fire: function () {
                return c.fireWith(this, arguments), this
            }, fired: function () {
                return !!r
            }
        };
        return c
    }, v.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", v.Callbacks("once memory"), "resolved"], ["reject", "fail", v.Callbacks("once memory"), "rejected"], ["notify", "progress", v.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return v.Deferred(function (n) {
                        v.each(t, function (t, r) {
                            var s = r[0], o = e[t];
                            i[r[1]](v.isFunction(o) ? function () {
                                var e = o.apply(this, arguments);
                                e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                            } : n[s])
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return e != null ? v.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, v.each(t, function (e, s) {
                var o = s[2], u = s[3];
                r[s[1]] = o.add, u && o.add(function () {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t = 0, n = l.call(arguments), r = n.length, i = r !== 1 || e && v.isFunction(e.promise) ? r : 0, s = i === 1 ? e : v.Deferred(), o = function (e, t, n) {
                return function (r) {
                    t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                }
            }, u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++)n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), v.support = function () {
        var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length)return {};
        s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: u.value === "on",
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!i.createElement("form").enctype,
            html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }
        !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function () {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
        if (p.attachEvent)for (l in{
            submit: !0,
            change: !0,
            focusin: !0
        })f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
        return v(function () {
            var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;", a = i.getElementsByTagName("body")[0];
            if (!a)return;
            n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {width: "4px"}).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
        }), a.removeChild(p), n = r = s = o = u = a = p = null, t
    }();
    var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;
    v.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (e) {
            return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !!e && !B(e)
        },
        data: function (e, n, r, i) {
            if (!v.acceptData(e))return;
            var s, o, u = v.expando, a = typeof n == "string", f = e.nodeType, l = f ? v.cache : e, c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t)return;
            c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
            if (typeof n == "object" || typeof n == "function")i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
            return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
        },
        removeData: function (e, t, n) {
            if (!v.acceptData(e))return;
            var r, i, s, o = e.nodeType, u = o ? v.cache : e, a = o ? e[v.expando] : v.expando;
            if (!u[a])return;
            if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0, s = t.length; i < s; i++)delete r[t[i]];
                    if (!(n ? B : v.isEmptyObject)(r))return
                }
            }
            if (!n) {
                delete u[a].data;
                if (!B(u[a]))return
            }
            o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        },
        _data: function (e, t, n) {
            return v.data(e, t, n, !0)
        },
        acceptData: function (e) {
            var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), v.fn.extend({
        data: function (e, n) {
            var r, i, s, o, u, a = this[0], f = 0, l = null;
            if (e === t) {
                if (this.length) {
                    l = v.data(a);
                    if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++)o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
                        v._data(a, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return typeof e == "object" ? this.each(function () {
                v.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function (n) {
                if (n === t)return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n, this.each(function () {
                    var t = v(this);
                    t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        }, removeData: function (e) {
            return this.each(function () {
                v.removeData(this, e)
            })
        }
    }), v.extend({
        queue: function (e, t, n) {
            var r;
            if (e)return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = v.queue(e, t), r = n.length, i = n.shift(), s = v._queueHooks(e, t), o = function () {
                v.dequeue(e, t)
            };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return v._data(e, n) || v._data(e, n, {
                    empty: v.Callbacks("once memory").add(function () {
                        v.removeData(e, t + "queue", !0), v.removeData(e, n, !0)
                    })
                })
        }
    }), v.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                v.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            var r, i = 1, s = v.Deferred(), o = this, u = this.length, a = function () {
                --i || s.resolveWith(o, [o])
            };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--)r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var j, F, I, q = /[\t\r\n]/g, R = /\r/g, U = /^(?:button|input)$/i, z = /^(?:button|input|object|select|textarea)$/i, W = /^a(?:rea|)$/i, X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, V = v.support.getSetAttribute;
    v.fn.extend({
        attr: function (e, t) {
            return v.access(this, v.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                v.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return v.access(this, v.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = v.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, s, o, u;
            if (v.isFunction(e))return this.each(function (t) {
                v(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(y);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)if (!i.className && t.length === 1)i.className = e; else {
                        s = " " + i.className + " ";
                        for (o = 0, u = t.length; o < u; o++)s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                        i.className = v.trim(s)
                    }
                }
            }
            return this
        }, removeClass: function (e) {
            var n, r, i, s, o, u, a;
            if (v.isFunction(e))return this.each(function (t) {
                v(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(y);
                for (u = 0, a = this.length; u < a; u++) {
                    i = this[u];
                    if (i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ").replace(q, " ");
                        for (s = 0, o = n.length; s < o; s++)while (r.indexOf(" " + n[s] + " ") >= 0)r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? v.trim(r) : ""
                    }
                }
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, r = typeof t == "boolean";
            return v.isFunction(e) ? this.each(function (n) {
                v(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function () {
                if (n === "string") {
                    var i, s = 0, o = v(this), u = t, a = e.split(y);
                    while (i = a[s++])u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean")this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
            })
        }, hasClass: function (e) {
            var t = " " + e + " ", n = 0, r = this.length;
            for (; n < r; n++)if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0)return !0;
            return !1
        }, val: function (e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s)return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                return
            }
            return i = v.isFunction(e), this.each(function (r) {
                var s, o = v(this);
                if (this.nodeType !== 1)return;
                i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function (e) {
                    return e == null ? "" : e + ""
                })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, s, "value") === t)this.value = s
            })
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            }, select: {
                get: function (e) {
                    var t, n, r = e.options, i = e.selectedIndex, s = e.type === "select-one" || i < 0, o = s ? null : [], u = s ? i + 1 : r.length, a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                            t = v(n).val();
                            if (s)return t;
                            o.push(t)
                        }
                    }
                    return o
                }, set: function (e, t) {
                    var n = v.makeArray(t);
                    return v(e).find("option").each(function () {
                        this.selected = v.inArray(v(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function (e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2)return;
            if (i && v.isFunction(v.fn[n]))return v(e)[n](r);
            if (typeof e.getAttribute == "undefined")return v.prop(e, n, r);
            u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
            if (r !== t) {
                if (r === null) {
                    v.removeAttr(e, n);
                    return
                }
                return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r)
            }
            return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
        },
        removeAttr: function (e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.split(y);
                for (; o < r.length; o++)i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (U.test(e.nodeName) && e.parentNode)v.error("type property can't be changed"); else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }, value: {
                get: function (e, t) {
                    return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
                }, set: function (e, t, n) {
                    if (j && v.nodeName(e, "button"))return j.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2)return;
            return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), F = {
        get: function (e, n) {
            var r, i = v.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        }, set: function (e, t, n) {
            var r;
            return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, V || (I = {name: !0, id: !0, coords: !0}, j = v.valHooks.button = {
        get: function (e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
        }, set: function (e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
        }
    }, v.each(["width", "height"], function (e, t) {
        v.attrHooks[t] = v.extend(v.attrHooks[t], {
            set: function (e, n) {
                if (n === "")return e.setAttribute(t, "auto"), n
            }
        })
    }), v.attrHooks.contenteditable = {
        get: j.get, set: function (e, t, n) {
            t === "" && (t = "false"), j.set(e, t, n)
        }
    }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function (e, n) {
        v.attrHooks[n] = v.extend(v.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), v.support.style || (v.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = {
            get: function (e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), v.each(["radio", "checkbox"], function () {
        v.valHooks[this] = v.extend(v.valHooks[this], {
            set: function (e, t) {
                if (v.isArray(t))return e.checked = v.inArray(v(e).val(), t) >= 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i, J = /^([^\.]*|)(?:\.(.+)|)$/, K = /(?:^|\s)hover(\.\S+|)\b/, Q = /^key/, G = /^(?:mouse|contextmenu)|click/, Y = /^(?:focusinfocus|focusoutblur)$/, Z = function (e) {
        return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
    };
    v.event = {
        add: function (e, n, r, i, s) {
            var o, u, a, f, l, c, h, p, d, m, g;
            if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e)))return;
            r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function (e) {
                return typeof v == "undefined" || !!e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
            }, u.elem = e), n = v.trim(Z(n)).split(" ");
            for (f = 0; f < n.length; f++) {
                l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
                    type: c,
                    origType: l[1],
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: s,
                    needsContext: s && v.expr.match.needsContext.test(s),
                    namespace: h.join(".")
                }, d), m = a[c];
                if (!m) {
                    m = a[c] = [], m.delegateCount = 0;
                    if (!g.setup || g.setup.call(e, i, h, u) === !1)e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                }
                g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0
            }
            e = null
        },
        global: {},
        remove: function (e, t, n, r, i) {
            var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
            if (!g || !(h = g.events))return;
            t = v.trim(Z(t || "")).split(" ");
            for (s = 0; s < t.length; s++) {
                o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
                if (!u) {
                    for (u in h)v.event.remove(e, u + t[s], n, r, !0);
                    continue
                }
                p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                for (c = 0; c < d.length; c++)m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
                d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u])
            }
            v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0))
        },
        customEvent: {getData: !0, setData: !0, changeData: !0},
        trigger: function (n, r, s, o) {
            if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                var u, a, f, l, c, h, p, d, m, g, y = n.type || n, b = [];
                if (Y.test(y + v.event.triggered))return;
                y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
                if ((!s || v.event.customEvent[y]) && !v.event.global[y])return;
                n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
                if (!s) {
                    u = v.cache;
                    for (f in u)u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                    return
                }
                n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
                if (p.trigger && p.trigger.apply(s, r) === !1)return;
                m = [[s, p.bindType || y]];
                if (!o && !p.noBubble && !v.isWindow(s)) {
                    g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
                    for (c = s; l; l = l.parentNode)m.push([l, g]), c = l;
                    c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
                }
                for (f = 0; f < m.length && !n.isPropagationStopped(); f++)l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result
            }
            return
        },
        dispatch: function (n) {
            n = v.event.fix(n || e.event);
            var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [], m = d.delegateCount, g = l.call(arguments), y = !n.exclusive && !n.namespace, b = v.event.special[n.type] || {}, w = [];
            g[0] = n, n.delegateTarget = this;
            if (b.preDispatch && b.preDispatch.call(this, n) === !1)return;
            if (m && (!n.button || n.type !== "click"))for (s = n.target; s != this; s = s.parentNode || this)if (s.disabled !== !0 || n.type !== "click") {
                u = {}, f = [];
                for (r = 0; r < m; r++)c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);
                f.length && w.push({elem: s, matches: f})
            }
            d.length > m && w.push({elem: this, matches: d.slice(m)});
            for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                a = w[r], n.currentTarget = a.elem;
                for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                    c = a.matches[i];
                    if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace))n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()))
                }
            }
            return b.postDispatch && b.postDispatch.call(this, n), n.result
        },
        props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, s, o, u = n.button, a = n.fromElement;
                return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
            }
        },
        fix: function (e) {
            if (e[v.expando])return e;
            var t, n, r = e, s = v.event.fixHooks[e.type] || {}, o = s.props ? this.props.concat(s.props) : this.props;
            e = v.Event(r);
            for (t = o.length; t;)n = o[--t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
        },
        special: {
            load: {noBubble: !0},
            focus: {delegateType: "focusin"},
            blur: {delegateType: "focusout"},
            beforeunload: {
                setup: function (e, t, n) {
                    v.isWindow(this) && (this.onbeforeunload = n)
                }, teardown: function (e, t) {
                    this.onbeforeunload === t && (this.onbeforeunload = null)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = v.extend(new v.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
    }, v.Event = function (e, t) {
        if (!(this instanceof v.Event))return new v.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
    }, v.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = tt;
            var e = this.originalEvent;
            if (!e)return;
            e.preventDefault ? e.preventDefault() : e.returnValue = !1
        }, stopPropagation: function () {
            this.isPropagationStopped = tt;
            var e = this.originalEvent;
            if (!e)return;
            e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
        }, stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = tt, this.stopPropagation()
        }, isDefaultPrevented: et, isPropagationStopped: et, isImmediatePropagationStopped: et
    }, v.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        v.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, s = e.handleObj, o = s.selector;
                if (!i || i !== r && !v.contains(r, i))e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                return n
            }
        }
    }), v.support.submitBubbles || (v.event.special.submit = {
        setup: function () {
            if (v.nodeName(this, "form"))return !1;
            v.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), v._data(r, "_submit_attached", !0))
            })
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            if (v.nodeName(this, "form"))return !1;
            v.event.remove(this, "._submit")
        }
    }), v.support.changeBubbles || (v.event.special.change = {
        setup: function () {
            if ($.test(this.nodeName)) {
                if (this.type === "checkbox" || this.type === "radio")v.event.add(this, "propertychange._change", function (e) {
                    e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                }), v.event.add(this, "click._change", function (e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0)
                });
                return !1
            }
            v.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function (e) {
                    this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
                }), v._data(t, "_change_attached", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox")return e.handleObj.handler.apply(this, arguments)
        }, teardown: function () {
            return v.event.remove(this, "._change"), !$.test(this.nodeName)
        }
    }), v.support.focusinBubbles || v.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            v.event.simulate(t, e.target, v.event.fix(e), !0)
        };
        v.event.special[t] = {
            setup: function () {
                n++ === 0 && i.addEventListener(e, r, !0)
            }, teardown: function () {
                --n === 0 && i.removeEventListener(e, r, !0)
            }
        }
    }), v.fn.extend({
        on: function (e, n, r, i, s) {
            var o, u;
            if (typeof e == "object") {
                typeof n != "string" && (r = r || n, n = t);
                for (u in e)this.on(u, n, r, e[u], s);
                return this
            }
            r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
            if (i === !1)i = et; else if (!i)return this;
            return s === 1 && (o = i, i = function (e) {
                return v().off(e), o.apply(this, arguments)
            }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function () {
                v.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            var i, s;
            if (e && e.preventDefault && e.handleObj)return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if (typeof e == "object") {
                for (s in e)this.off(s, n, e[s]);
                return this
            }
            if (n === !1 || typeof n == "function")r = n, n = t;
            return r === !1 && (r = et), this.each(function () {
                v.event.remove(this, e, r, n)
            })
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, live: function (e, t, n) {
            return v(this.context).on(e, this.selector, t, n), this
        }, die: function (e, t) {
            return v(this.context).off(e, this.selector || "**", t), this
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        }, trigger: function (e, t) {
            return this.each(function () {
                v.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            if (this[0])return v.event.trigger(e, t, this[0], !0)
        }, toggle: function (e) {
            var t = arguments, n = e.guid || v.guid++, r = 0, i = function (n) {
                var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
            };
            i.guid = n;
            while (r < t.length)t[r++].guid = n;
            return this.click(i)
        }, hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        v.fn[t] = function (e, n) {
            return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
    }), function (e, t) {
        function nt(e, t, n, r) {
            n = n || [], t = t || g;
            var i, s, a, f, l = t.nodeType;
            if (!e || typeof e != "string")return n;
            if (l !== 1 && l !== 9)return [];
            a = o(t);
            if (!a && !r)if (i = R.exec(e))if (f = i[1]) {
                if (l === 9) {
                    s = t.getElementById(f);
                    if (!s || !s.parentNode)return n;
                    if (s.id === f)return n.push(s), n
                } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f)return n.push(s), n
            } else {
                if (i[2])return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
                if ((f = i[3]) && Z && t.getElementsByClassName)return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n
            }
            return vt(e.replace(j, "$1"), t, n, r, a)
        }

        function rt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function it(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }

        function st(e) {
            return N(function (t) {
                return t = +t, N(function (n, r) {
                    var i, s = e([], n.length, t), o = s.length;
                    while (o--)n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function ot(e, t, n) {
            if (e === t)return n;
            var r = e.nextSibling;
            while (r) {
                if (r === t)return -1;
                r = r.nextSibling
            }
            return 1
        }

        function ut(e, t) {
            var n, r, s, o, u, a, f, l = L[d][e + " "];
            if (l)return t ? 0 : l.slice(0);
            u = e, a = [], f = i.preFilter;
            while (u) {
                if (!n || (r = F.exec(u)))r && (u = u.slice(r[0].length) || u), a.push(s = []);
                n = !1;
                if (r = I.exec(u))s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");
                for (o in i.filter)(r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
                if (!n)break
            }
            return t ? u.length : u ? nt.error(e) : L(e, a).slice(0)
        }

        function at(e, t, r) {
            var i = t.dir, s = r && t.dir === "parentNode", o = w++;
            return t.first ? function (t, n, r) {
                while (t = t[i])if (s || t.nodeType === 1)return e(t, n, r)
            } : function (t, r, u) {
                if (!u) {
                    var a, f = b + " " + o + " ", l = f + n;
                    while (t = t[i])if (s || t.nodeType === 1) {
                        if ((a = t[d]) === l)return t.sizset;
                        if (typeof a == "string" && a.indexOf(f) === 0) {
                            if (t.sizset)return t
                        } else {
                            t[d] = l;
                            if (e(t, r, u))return t.sizset = !0, t;
                            t.sizset = !1
                        }
                    }
                } else while (t = t[i])if (s || t.nodeType === 1)if (e(t, r, u))return t
            }
        }

        function ft(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function lt(e, t, n, r, i) {
            var s, o = [], u = 0, a = e.length, f = t != null;
            for (; u < a; u++)if (s = e[u])if (!n || n(s, r, i))o.push(s), f && t.push(u);
            return o
        }

        function ct(e, t, n, r, i, s) {
            return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function (s, o, u, a) {
                var f, l, c, h = [], p = [], d = o.length, v = s || dt(t || "*", u.nodeType ? [u] : u, []), m = e && (s || !t) ? lt(v, h, e, u, a) : v, g = n ? i || (s ? e : d || r) ? [] : o : m;
                n && n(m, g, u, a);
                if (r) {
                    f = lt(g, p), r(f, [], u, a), l = f.length;
                    while (l--)if (c = f[l])g[p[l]] = !(m[p[l]] = c)
                }
                if (s) {
                    if (i || e) {
                        if (i) {
                            f = [], l = g.length;
                            while (l--)(c = g[l]) && f.push(m[l] = c);
                            i(null, g = [], f, a)
                        }
                        l = g.length;
                        while (l--)(c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                    }
                } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g)
            })
        }

        function ht(e) {
            var t, n, r, s = e.length, o = i.relative[e[0].type], u = o || i.relative[" "], a = o ? 1 : 0, f = at(function (e) {
                return e === t
            }, u, !0), l = at(function (e) {
                return T.call(t, e) > -1
            }, u, !0), h = [function (e, n, r) {
                return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r))
            }];
            for (; a < s; a++)if (n = i.relative[e[a].type])h = [at(ft(h), n)]; else {
                n = i.filter[e[a].type].apply(null, e[a].matches);
                if (n[d]) {
                    r = ++a;
                    for (; r < s; r++)if (i.relative[e[r].type])break;
                    return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""))
                }
                h.push(n)
            }
            return ft(h)
        }

        function pt(e, t) {
            var r = t.length > 0, s = e.length > 0, o = function (u, a, f, l, h) {
                var p, d, v, m = [], y = 0, w = "0", x = u && [], T = h != null, N = c, C = u || s && i.find.TAG("*", h && a.parentNode || a), k = b += N == null ? 1 : Math.E;
                T && (c = a !== g && a, n = o.el);
                for (; (p = C[w]) != null; w++) {
                    if (s && p) {
                        for (d = 0; v = e[d]; d++)if (v(p, a, f)) {
                            l.push(p);
                            break
                        }
                        T && (b = k, n = ++o.el)
                    }
                    r && ((p = !v && p) && y--, u && x.push(p))
                }
                y += w;
                if (r && w !== y) {
                    for (d = 0; v = t[d]; d++)v(x, m, a, f);
                    if (u) {
                        if (y > 0)while (w--)!x[w] && !m[w] && (m[w] = E.call(l));
                        m = lt(m)
                    }
                    S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l)
                }
                return T && (b = k, c = N), x
            };
            return o.el = 0, r ? N(o) : o
        }

        function dt(e, t, n) {
            var r = 0, i = t.length;
            for (; r < i; r++)nt(e, t[r], n);
            return n
        }

        function vt(e, t, n, r, s) {
            var o, u, f, l, c, h = ut(e), p = h.length;
            if (!r && h.length === 1) {
                u = h[0] = h[0].slice(0);
                if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
                    t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
                    if (!t)return n;
                    e = e.slice(u.shift().length)
                }
                for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
                    f = u[o];
                    if (i.relative[l = f.type])break;
                    if (c = i.find[l])if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
                        u.splice(o, 1), e = r.length && u.join("");
                        if (!e)return S.apply(n, x.call(r, 0)), n;
                        break
                    }
                }
            }
            return a(e, h)(r, t, s, n, z.test(e)), n
        }

        function mt() {
        }

        var n, r, i, s, o, u, a, f, l, c, h = !0, p = "undefined", d = ("sizcache" + Math.random()).replace(".", ""), m = String, g = e.document, y = g.documentElement, b = 0, w = 0, E = [].pop, S = [].push, x = [].slice, T = [].indexOf || function (e) {
                var t = 0, n = this.length;
                for (; t < n; t++)if (this[t] === e)return t;
                return -1
            }, N = function (e, t) {
            return e[d] = t == null || t, e
        }, C = function () {
            var e = {}, t = [];
            return N(function (n, r) {
                return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r
            }, e)
        }, k = C(), L = C(), A = C(), O = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", _ = M.replace("w", "w#"), D = "([*^$|!~]?=)", P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]", H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)", B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)", j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"), F = new RegExp("^" + O + "*," + O + "*"), I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"), q = new RegExp(H), R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, U = /^:not/, z = /[\x20\t\r\n\f]*[+~]/, W = /:not\($/, X = /h\d/i, V = /input|select|textarea|button/i, $ = /\\(?!\\)/g, J = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + H),
            POS: new RegExp(B, "i"),
            CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
            needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")
        }, K = function (e) {
            var t = g.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }, Q = K(function (e) {
            return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length
        }), G = K(function (e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
        }), Y = K(function (e) {
            e.innerHTML = "<select></select>";
            var t = typeof e.lastChild.getAttribute("multiple");
            return t !== "boolean" && t !== "string"
        }), Z = K(function (e) {
            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
        }), et = K(function (e) {
            e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
            var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
            return r = !g.getElementById(d), y.removeChild(e), t
        });
        try {
            x.call(y.childNodes, 0)[0].nodeType
        } catch (tt) {
            x = function (e) {
                var t, n = [];
                for (; t = this[e]; e++)n.push(t);
                return n
            }
        }
        nt.matches = function (e, t) {
            return nt(e, null, null, t)
        }, nt.matchesSelector = function (e, t) {
            return nt(t, null, null, [e]).length > 0
        }, s = nt.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (i === 1 || i === 9 || i === 11) {
                    if (typeof e.textContent == "string")return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += s(e)
                } else if (i === 3 || i === 4)return e.nodeValue
            } else for (; t = e[r]; r++)n += s(t);
            return n
        }, o = nt.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        }, u = nt.contains = y.contains ? function (e, t) {
            var n = e.nodeType === 9 ? e.documentElement : e, r = t && t.parentNode;
            return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r))
        } : y.compareDocumentPosition ? function (e, t) {
            return t && !!(e.compareDocumentPosition(t) & 16)
        } : function (e, t) {
            while (t = t.parentNode)if (t === e)return !0;
            return !1
        }, nt.attr = function (e, t) {
            var n, r = o(e);
            return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
        }, i = nt.selectors = {
            cacheLength: 50,
            createPseudo: N,
            match: J,
            attrHandle: G ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                }, type: function (e) {
                    return e.getAttribute("type")
                }
            },
            find: {
                ID: r ? function (e, t, n) {
                    if (typeof t.getElementById !== p && !n) {
                        var r = t.getElementById(e);
                        return r && r.parentNode ? [r] : []
                    }
                } : function (e, n, r) {
                    if (typeof n.getElementById !== p && !r) {
                        var i = n.getElementById(e);
                        return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
                    }
                }, TAG: Q ? function (e, t) {
                    if (typeof t.getElementsByTagName !== p)return t.getElementsByTagName(e)
                } : function (e, t) {
                    var n = t.getElementsByTagName(e);
                    if (e === "*") {
                        var r, i = [], s = 0;
                        for (; r = n[s]; s++)r.nodeType === 1 && i.push(r);
                        return i
                    }
                    return n
                }, NAME: et && function (e, t) {
                    if (typeof t.getElementsByName !== p)return t.getElementsByName(name)
                }, CLASS: Z && function (e, t, n) {
                    if (typeof t.getElementsByClassName !== p && !n)return t.getElementsByClassName(e)
                }
            },
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n;
                    if (J.CHILD.test(e[0]))return null;
                    if (e[3])e[2] = e[3]; else if (t = e[4])q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
                    return e.slice(0, 3)
                }
            },
            filter: {
                ID: r ? function (e) {
                    return e = e.replace($, ""), function (t) {
                        return t.getAttribute("id") === e
                    }
                } : function (e) {
                    return e = e.replace($, ""), function (t) {
                        var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }, TAG: function (e) {
                    return e === "*" ? function () {
                        return !0
                    } : (e = e.replace($, "").toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                }, CLASS: function (e) {
                    var t = k[d][e + " "];
                    return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function (e) {
                            return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, t, n) {
                    return function (r, i) {
                        var s = nt.attr(r, e);
                        return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r) {
                    return e === "nth" ? function (e) {
                        var t, i, s = e.parentNode;
                        if (n === 1 && r === 0)return !0;
                        if (s) {
                            i = 0;
                            for (t = s.firstChild; t; t = t.nextSibling)if (t.nodeType === 1) {
                                i++;
                                if (e === t)break
                            }
                        }
                        return i -= r, i === n || i % n === 0 && i / n >= 0
                    } : function (t) {
                        var n = t;
                        switch (e) {
                            case"only":
                            case"first":
                                while (n = n.previousSibling)if (n.nodeType === 1)return !1;
                                if (e === "first")return !0;
                                n = t;
                            case"last":
                                while (n = n.nextSibling)if (n.nodeType === 1)return !1;
                                return !0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
                    return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function (e, n) {
                        var i, s = r(e, t), o = s.length;
                        while (o--)i = T.call(e, s[o]), e[i] = !(n[i] = s[o])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: N(function (e) {
                    var t = [], n = [], r = a(e.replace(j, "$1"));
                    return r[d] ? N(function (e, t, n, i) {
                        var s, o = r(e, null, i, []), u = e.length;
                        while (u--)if (s = o[u])e[u] = !(t[u] = s)
                    }) : function (e, i, s) {
                        return t[0] = e, r(t, null, s, n), !n.pop()
                    }
                }),
                has: N(function (e) {
                    return function (t) {
                        return nt(e, t).length > 0
                    }
                }),
                contains: N(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                    }
                }),
                enabled: function (e) {
                    return e.disabled === !1
                },
                disabled: function (e) {
                    return e.disabled === !0
                },
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                parent: function (e) {
                    return !i.pseudos.empty(e)
                },
                empty: function (e) {
                    var t;
                    e = e.firstChild;
                    while (e) {
                        if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4)return !1;
                        e = e.nextSibling
                    }
                    return !0
                },
                header: function (e) {
                    return X.test(e.nodeName)
                },
                text: function (e) {
                    var t, n;
                    return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                },
                radio: rt("radio"),
                checkbox: rt("checkbox"),
                file: rt("file"),
                password: rt("password"),
                image: rt("image"),
                submit: it("submit"),
                reset: it("reset"),
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                input: function (e) {
                    return V.test(e.nodeName)
                },
                focus: function (e) {
                    var t = e.ownerDocument;
                    return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                active: function (e) {
                    return e === e.ownerDocument.activeElement
                },
                first: st(function () {
                    return [0]
                }),
                last: st(function (e, t) {
                    return [t - 1]
                }),
                eq: st(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: st(function (e, t) {
                    for (var n = 0; n < t; n += 2)e.push(n);
                    return e
                }),
                odd: st(function (e, t) {
                    for (var n = 1; n < t; n += 2)e.push(n);
                    return e
                }),
                lt: st(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;)e.push(r);
                    return e
                }),
                gt: st(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;)e.push(r);
                    return e
                })
            }
        }, f = y.compareDocumentPosition ? function (e, t) {
            return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
        } : function (e, t) {
            if (e === t)return l = !0, 0;
            if (e.sourceIndex && t.sourceIndex)return e.sourceIndex - t.sourceIndex;
            var n, r, i = [], s = [], o = e.parentNode, u = t.parentNode, a = o;
            if (o === u)return ot(e, t);
            if (!o)return -1;
            if (!u)return 1;
            while (a)i.unshift(a), a = a.parentNode;
            a = u;
            while (a)s.unshift(a), a = a.parentNode;
            n = i.length, r = s.length;
            for (var f = 0; f < n && f < r; f++)if (i[f] !== s[f])return ot(i[f], s[f]);
            return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1)
        }, [0, 0].sort(f), h = !l, nt.uniqueSort = function (e) {
            var t, n = [], r = 1, i = 0;
            l = h, e.sort(f);
            if (l) {
                for (; t = e[r]; r++)t === e[r - 1] && (i = n.push(r));
                while (i--)e.splice(n[i], 1)
            }
            return e
        }, nt.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, a = nt.compile = function (e, t) {
            var n, r = [], i = [], s = A[d][e + " "];
            if (!s) {
                t || (t = ut(e)), n = t.length;
                while (n--)s = ht(t[n]), s[d] ? r.push(s) : i.push(s);
                s = A(e, pt(i, r))
            }
            return s
        }, g.querySelectorAll && function () {
            var e, t = vt, n = /'|\\/g, r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, i = [":focus"], s = [":active"], u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
            K(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked")
            }), K(function (e) {
                e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
            }), i = new RegExp(i.join("|")), vt = function (e, r, s, o, u) {
                if (!o && !u && !i.test(e)) {
                    var a, f, l = !0, c = d, h = r, p = r.nodeType === 9 && e;
                    if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                        a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;
                        while (f--)a[f] = c + a[f].join("");
                        h = z.test(e) && r.parentNode || r, p = a.join(",")
                    }
                    if (p)try {
                        return S.apply(s, x.call(h.querySelectorAll(p), 0)), s
                    } catch (v) {
                    } finally {
                        l || r.removeAttribute("id")
                    }
                }
                return t(e, r, s, o, u)
            }, u && (K(function (t) {
                e = u.call(t, "div");
                try {
                    u.call(t, "[test!='']:sizzle"), s.push("!=", H)
                } catch (n) {
                }
            }), s = new RegExp(s.join("|")), nt.matchesSelector = function (t, n) {
                n = n.replace(r, "='$1']");
                if (!o(t) && !s.test(n) && !i.test(n))try {
                    var a = u.call(t, n);
                    if (a || e || t.document && t.document.nodeType !== 11)return a
                } catch (f) {
                }
                return nt(n, null, null, [t]).length > 0
            })
        }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt, nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains
    }(e);
    var nt = /Until$/, rt = /^(?:parents|prev(?:Until|All))/, it = /^.[^:#\[\.,]*$/, st = v.expr.match.needsContext, ot = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    v.fn.extend({
        find: function (e) {
            var t, n, r, i, s, o, u = this;
            if (typeof e != "string")return v(e).filter(function () {
                for (t = 0, n = u.length; t < n; t++)if (v.contains(u[t], this))return !0
            });
            o = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++) {
                r = o.length, v.find(e, this[t], o);
                if (t > 0)for (i = r; i < o.length; i++)for (s = 0; s < r; s++)if (o[s] === o[i]) {
                    o.splice(i--, 1);
                    break
                }
            }
            return o
        }, has: function (e) {
            var t, n = v(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; t < r; t++)if (v.contains(this, n[t]))return !0
            })
        }, not: function (e) {
            return this.pushStack(ft(this, e, !1), "not", e)
        }, filter: function (e) {
            return this.pushStack(ft(this, e, !0), "filter", e)
        }, is: function (e) {
            return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, s = [], o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e)
        }, index: function (e) {
            return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        }, add: function (e, t) {
            var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e), r = v.merge(this.get(), n);
            return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
        }, addBack: function (e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), v.fn.andSelf = v.fn.addBack, v.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        }, parents: function (e) {
            return v.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return v.dir(e, "parentNode", n)
        }, next: function (e) {
            return at(e, "nextSibling")
        }, prev: function (e) {
            return at(e, "previousSibling")
        }, nextAll: function (e) {
            return v.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return v.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return v.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return v.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return v.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return v.sibling(e.firstChild)
        }, contents: function (e) {
            return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
        }
    }, function (e, t) {
        v.fn[e] = function (n, r) {
            var i = v.map(this, t, n);
            return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","))
        }
    }), v.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
        }, dir: function (e, n, r) {
            var i = [], s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r)))s.nodeType === 1 && i.push(s), s = s[n];
            return i
        }, sibling: function (e, t) {
            var n = [];
            for (; e; e = e.nextSibling)e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", ht = / jQuery\d+="(?:null|\d+)"/g, pt = /^\s+/, dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, vt = /<([\w:]+)/, mt = /<tbody/i, gt = /<|&#?\w+;/, yt = /<(?:script|style|link)/i, bt = /<(?:script|object|embed|option|style)/i, wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"), Et = /^(?:checkbox|radio)$/, St = /checked\s*(?:[^=]|=\s*.checked.)/i, xt = /\/(java|ecma)script/i, Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, Nt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        area: [1, "<map>", "</map>"],
        _default: [0, "", ""]
    }, Ct = lt(i), kt = Ct.appendChild(i.createElement("div"));
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
        text: function (e) {
            return v.access(this, function (e) {
                return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
            }, null, e, arguments.length)
        }, wrapAll: function (e) {
            if (v.isFunction(e))return this.each(function (t) {
                v(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return v.isFunction(e) ? this.each(function (t) {
                v(this).wrapInner(e.call(this, t))
            }) : this.each(function () {
                var t = v(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = v.isFunction(e);
            return this.each(function (n) {
                v(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
            })
        }, before: function () {
            if (!ut(this[0]))return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this)
            });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(e, this), "before", this.selector)
            }
        }, after: function () {
            if (!ut(this[0]))return this.domManip(arguments, !1, function (e) {
                this.parentNode.insertBefore(e, this.nextSibling)
            });
            if (arguments.length) {
                var e = v.clean(arguments);
                return this.pushStack(v.merge(this, e), "after", this.selector)
            }
        }, remove: function (e, t) {
            var n, r = 0;
            for (; (n = this[r]) != null; r++)if (!e || v.filter(e, [n]).length)!t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
            return this
        }, empty: function () {
            var e, t = 0;
            for (; (e = this[t]) != null; t++) {
                e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                while (e.firstChild)e.removeChild(e.firstChild)
            }
            return this
        }, clone: function (e, t) {
            return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function () {
                return v.clone(this, e, t)
            })
        }, html: function (e) {
            return v.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t)return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(dt, "<$1></$2>");
                    try {
                        for (; r < i; r++)n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                        n = 0
                    } catch (s) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function (e) {
            return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function (t) {
                var n = v(this), r = n.html();
                n.replaceWith(e.call(this, t, r))
            }) : (typeof e != "string" && (e = v(e).detach()), this.each(function () {
                var t = this.nextSibling, n = this.parentNode;
                v(this).remove(), t ? v(t).before(e) : v(n).append(e)
            }))
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, n, r) {
            e = [].concat.apply([], e);
            var i, s, o, u, a = 0, f = e[0], l = [], c = this.length;
            if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f))return this.each(function () {
                v(this).domManip(e, n, r)
            });
            if (v.isFunction(f))return this.each(function (i) {
                var s = v(this);
                e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
            });
            if (this[0]) {
                i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
                if (s) {
                    n = n && v.nodeName(s, "tr");
                    for (u = i.cacheable || c - 1; a < c; a++)r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
                }
                o = s = null, l.length && v.each(l, function (e, t) {
                    t.src ? v.ajax ? v.ajax({
                        url: t.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        "throws": !0
                    }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t)
                })
            }
            return this
        }
    }), v.buildFragment = function (e, n, r) {
        var s, o, u, a = e[0];
        return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
            fragment: s,
            cacheable: o
        }
    }, v.fragments = {}, v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        v.fn[e] = function (n) {
            var r, i = 0, s = [], o = v(n), u = o.length, a = this.length === 1 && this[0].parentNode;
            if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1)return o[t](this[0]), this;
            for (; i < u; i++)r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
            return this.pushStack(s, e, o.selector)
        }
    }), v.extend({
        clone: function (e, t, n) {
            var r, i, s, o;
            v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
            if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                Ot(e, o), r = Mt(e), i = Mt(o);
                for (s = 0; r[s]; ++s)i[s] && Ot(r[s], i[s])
            }
            if (t) {
                At(e, o);
                if (n) {
                    r = Mt(e), i = Mt(o);
                    for (s = 0; r[s]; ++s)At(r[s], i[s])
                }
            }
            return r = i = null, o
        }, clean: function (e, t, n, r) {
            var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct, b = [];
            if (!t || typeof t.createDocumentFragment == "undefined")t = i;
            for (s = 0; (u = e[s]) != null; s++) {
                typeof u == "number" && (u += "");
                if (!u)continue;
                if (typeof u == "string")if (!gt.test(u))u = t.createTextNode(u); else {
                    y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
                    while (l--)c = c.lastChild;
                    if (!v.support.tbody) {
                        h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                        for (o = p.length - 1; o >= 0; --o)v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
                    }
                    !v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c)
                }
                u.nodeType ? b.push(u) : v.merge(b, u)
            }
            c && (u = c = y = null);
            if (!v.support.appendChecked)for (s = 0; (u = b[s]) != null; s++)v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
            if (n) {
                m = function (e) {
                    if (!e.type || xt.test(e.type))return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                };
                for (s = 0; (u = b[s]) != null; s++)if (!v.nodeName(u, "script") || !m(u))n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length)
            }
            return b
        }, cleanData: function (e, t) {
            var n, r, i, s, o = 0, u = v.expando, a = v.cache, f = v.support.deleteExpando, l = v.event.special;
            for (; (i = e[o]) != null; o++)if (t || v.acceptData(i)) {
                r = i[u], n = r && a[r];
                if (n) {
                    if (n.events)for (s in n.events)l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                    a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r))
                }
            }
        }
    }), function () {
        var e, t;
        v.uaMatch = function (e) {
            e = e.toLowerCase();
            var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
            return {browser: t[1] || "", version: t[2] || "0"}
        }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function () {
            function e(t, n) {
                return new e.fn.init(t, n)
            }

            v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function (r, i) {
                return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t)
            }, e.fn.init.prototype = e.fn;
            var t = e(i);
            return e
        }
    }();
    var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i, jt = /opacity=([^)]*)/, Ft = /^(top|right|bottom|left)$/, It = /^(none|table(?!-c[ea]).+)/, qt = /^margin/, Rt = new RegExp("^(" + m + ")(.*)$", "i"), Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"), zt = new RegExp("^([-+])=(" + m + ")", "i"), Wt = {BODY: "block"}, Xt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Vt = {
        letterSpacing: 0,
        fontWeight: 400
    }, $t = ["Top", "Right", "Bottom", "Left"], Jt = ["Webkit", "O", "Moz", "ms"], Kt = v.fn.toggle;
    v.fn.extend({
        css: function (e, n) {
            return v.access(this, function (e, n, r) {
                return r !== t ? v.style(e, n, r) : v.css(e, n)
            }, e, n, arguments.length > 1)
        }, show: function () {
            return Yt(this, !0)
        }, hide: function () {
            return Yt(this)
        }, toggle: function (e, t) {
            var n = typeof e == "boolean";
            return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function () {
                (n ? e : Gt(this)) ? v(this).show() : v(this).hide()
            })
        }
    }), v.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Dt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": v.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)return;
            var s, o, u, a = v.camelCase(n), f = e.style;
            n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
            if (r === t)return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r))return;
            o === "number" && !v.cssNumber[a] && (r += "px");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t)try {
                f[n] = r
            } catch (l) {
            }
        },
        css: function (e, n, r, i) {
            var s, o, u, a = v.camelCase(n);
            return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function (e, t, n) {
            var r, i, s = {};
            for (i in t)s[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t)e.style[i] = s[i];
            return r
        }
    }), e.getComputedStyle ? Dt = function (t, n) {
        var r, i, s, o, u = e.getComputedStyle(t, null), a = t.style;
        return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r
    } : i.documentElement.currentStyle && (Dt = function (e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t], s = e.style;
        return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
    }), v.each(["height", "width"], function (e, t) {
        v.cssHooks[t] = {
            get: function (e, n, r) {
                if (n)return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function () {
                    return tn(e, t, r)
                }) : tn(e, t, r)
            }, set: function (e, n, r) {
                return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }), v.support.opacity || (v.cssHooks.opacity = {
        get: function (e, t) {
            return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter)return
            }
            n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
        }
    }), v(function () {
        v.support.reliableMarginRight || (v.cssHooks.marginRight = {
            get: function (e, t) {
                return v.swap(e, {display: "inline-block"}, function () {
                    if (t)return Dt(e, "marginRight")
                })
            }
        }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function (e, t) {
            v.cssHooks[t] = {
                get: function (e, n) {
                    if (n) {
                        var r = Dt(e, t);
                        return Ut.test(r) ? v(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }), v.expr && v.expr.filters && (v.expr.filters.hidden = function (e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
    }, v.expr.filters.visible = function (e) {
        return !v.expr.filters.hidden(e)
    }), v.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        v.cssHooks[e + t] = {
            expand: function (n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n], s = {};
                for (r = 0; r < 4; r++)s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        }, qt.test(e) || (v.cssHooks[e + t].set = Zt)
    });
    var rn = /%20/g, sn = /\[\]$/, on = /\r?\n/g, un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, an = /^(?:select|textarea)/i;
    v.fn.extend({
        serialize: function () {
            return v.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                return this.elements ? v.makeArray(this.elements) : this
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))
            }).map(function (e, t) {
                var n = v(this).val();
                return n == null ? null : v.isArray(n) ? v.map(n, function (e, n) {
                    return {name: t.name, value: e.replace(on, "\r\n")}
                }) : {name: t.name, value: n.replace(on, "\r\n")}
            }).get()
        }
    }), v.param = function (e, n) {
        var r, i = [], s = function (e, t) {
            t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e))v.each(e, function () {
            s(this.name, this.value)
        }); else for (r in e)fn(r, e[r], n, s);
        return i.join("&").replace(rn, "+")
    };
    var ln, cn, hn = /#.*$/, pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, vn = /^(?:GET|HEAD)$/, mn = /^\/\//, gn = /\?/, yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bn = /([?&])_=[^&]*/, wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, En = v.fn.load, Sn = {}, xn = {}, Tn = ["*/"] + ["*"];
    try {
        cn = s.href
    } catch (Nn) {
        cn = i.createElement("a"), cn.href = "", cn = cn.href
    }
    ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function (e, n, r) {
        if (typeof e != "string" && En)return En.apply(this, arguments);
        if (!this.length)return this;
        var i, s, o, u = this, a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function (e, t) {
                r && u.each(r, o || [e.responseText, t, e])
            }
        }).done(function (e) {
            o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)
        }), this
    }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (e, t) {
        v.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), v.each(["get", "post"], function (e, n) {
        v[n] = function (e, r, i, s) {
            return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), v.extend({
        getScript: function (e, n) {
            return v.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return v.get(e, t, n, "json")
        },
        ajaxSetup: function (e, t) {
            return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e
        },
        ajaxSettings: {
            url: cn,
            isLocal: dn.test(ln[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Tn
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": e.String, "text html": !0, "text json": v.parseJSON, "text xml": v.parseXML},
            flatOptions: {context: !0, url: !0}
        },
        ajaxPrefilter: Cn(Sn),
        ajaxTransport: Cn(xn),
        ajax: function (e, n) {
            function T(e, n, s, a) {
                var l, y, b, w, S, T = n;
                if (E === 2)return;
                E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
                if (e >= 200 && e < 300 || e === 304)c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b); else {
                    b = T;
                    if (!T || e)T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"))
            }

            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n), h = c.context || c, p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event, d = v.Deferred(), m = v.Callbacks("once memory"), g = c.statusCode || {}, b = {}, w = {}, E = 0, S = "canceled", x = {
                readyState: 0,
                setRequestHeader: function (e, t) {
                    if (!E) {
                        var n = e.toLowerCase();
                        e = w[n] = w[n] || e, b[e] = t
                    }
                    return this
                },
                getAllResponseHeaders: function () {
                    return E === 2 ? i : null
                },
                getResponseHeader: function (e) {
                    var n;
                    if (E === 2) {
                        if (!s) {
                            s = {};
                            while (n = pn.exec(i))s[n[1].toLowerCase()] = n[2]
                        }
                        n = s[e.toLowerCase()]
                    }
                    return n === t ? null : n
                },
                overrideMimeType: function (e) {
                    return E || (c.mimeType = e), this
                },
                abort: function (e) {
                    return e = e || S, o && o.abort(e), T(0, e), this
                }
            };
            d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function (e) {
                if (e) {
                    var t;
                    if (E < 2)for (t in e)g[t] = [g[t], e[t]]; else t = e[x.status], x.always(t)
                }
                return this
            }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
            if (E === 2)return x;
            f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
            if (!c.hasContent) {
                c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
                if (c.cache === !1) {
                    var N = v.now(), C = c.url.replace(bn, "$1_=" + N);
                    c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
                }
            }
            (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers)x.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                S = "abort";
                for (l in{success: 1, error: 1, complete: 1})x[l](c[l]);
                o = kn(xn, c, n, x);
                if (!o)T(-1, "No Transport"); else {
                    x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function () {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        E = 1, o.send(b, T)
                    } catch (k) {
                        if (!(E < 2))throw k;
                        T(-1, k)
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Mn = [], _n = /\?/, Dn = /(=)\?(?=&|$)|\?\?/, Pn = v.now();
    v.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Mn.pop() || v.expando + "_" + Pn++;
            return this[e] = !0, e
        }
    }), v.ajaxPrefilter("json jsonp", function (n, r, i) {
        var s, o, u, a = n.data, f = n.url, l = n.jsonp !== !1, c = l && Dn.test(f), h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
        if (n.dataTypes[0] === "jsonp" || c || h)return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function () {
            return u || v.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", e[s] = function () {
            u = arguments
        }, i.always(function () {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    }), v.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (e) {
                return v.globalEval(e), e
            }
        }
    }), v.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), v.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
            return {
                send: function (s, o) {
                    n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState))n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Hn, Bn = e.ActiveXObject ? function () {
        for (var e in Hn)Hn[e](0, 1)
    } : !1, jn = 0;
    v.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && Fn() || In()
    } : Fn, function (e) {
        v.extend(v.support, {ajax: !!e, cors: !!e && "withCredentials" in e})
    }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function (n) {
        if (!n.crossDomain || v.support.cors) {
            var r;
            return {
                send: function (i, s) {
                    var o, u, a = n.xhr();
                    n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                    if (n.xhrFields)for (u in n.xhrFields)a[u] = n.xhrFields[u];
                    n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (u in i)a.setRequestHeader(u, i[u])
                    } catch (f) {
                    }
                    a.send(n.hasContent && n.data || null), r = function (e, i) {
                        var u, f, l, c, h;
                        try {
                            if (r && (i || a.readyState === 4)) {
                                r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                                if (i)a.readyState !== 4 && a.abort(); else {
                                    u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                                    try {
                                        c.text = a.responseText
                                    } catch (p) {
                                    }
                                    try {
                                        f = a.statusText
                                    } catch (p) {
                                        f = ""
                                    }
                                    !u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                }
                            }
                        } catch (d) {
                            i || s(-1, d)
                        }
                        c && s(u, f, c, l)
                    }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(0, 1)
                }
            }
        }
    });
    var qn, Rn, Un = /^(?:toggle|show|hide)$/, zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"), Wn = /queueHooks$/, Xn = [Gn], Vn = {
        "*": [function (e, t) {
            var n, r, i = this.createTween(e, t), s = zn.exec(t), o = i.cur(), u = +o || 0, a = 1, f = 20;
            if (s) {
                n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");
                if (r !== "px" && u) {
                    u = v.css(i.elem, e, !0) || n || 1;
                    do a = a || ".5", u /= a, v.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
                }
                i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
            }
            return i
        }]
    };
    v.Animation = v.extend(Kn, {
        tweener: function (e, t) {
            v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0, i = e.length;
            for (; r < i; r++)n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? Xn.unshift(e) : Xn.push(e)
        }
    }), v.Tween = Yn, Yn.prototype = {
        constructor: Yn, init: function (e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = Yn.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = Yn.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this
        }
    }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            }, set: function (e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, v.each(["toggle", "show", "hide"], function (e, t) {
        var n = v.fn[t];
        v.fn[t] = function (r, i, s) {
            return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)
        }
    }), v.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(Gt).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = v.isEmptyObject(e), s = v.speed(t, n, r), o = function () {
                var t = Kn(this, v.extend({}, e), s);
                i && t.stop(!0)
            };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        }, stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = e != null && e + "queueHooks", s = v.timers, o = v._data(this);
                if (n)o[n] && o[n].stop && i(o[n]); else for (n in o)o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                for (n = s.length; n--;)s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && v.dequeue(this, e)
            })
        }
    }), v.each({
        slideDown: Zn("show"),
        slideUp: Zn("hide"),
        slideToggle: Zn("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        v.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), v.speed = function (e, t, n) {
        var r = e && typeof e == "object" ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
        if (r.queue == null || r.queue === !0)r.queue = "fx";
        return r.old = r.complete, r.complete = function () {
            v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
        }, r
    }, v.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function () {
        var e, n = v.timers, r = 0;
        qn = v.now();
        for (; r < n.length; r++)e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || v.fx.stop(), qn = t
    }, v.fx.timer = function (e) {
        e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))
    }, v.fx.interval = 13, v.fx.stop = function () {
        clearInterval(Rn), Rn = null
    }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function (e) {
        return v.grep(v.timers, function (t) {
            return e === t.elem
        }).length
    });
    var er = /^(?:body|html)$/i;
    v.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            v.offset.setOffset(this, e, t)
        });
        var n, r, i, s, o, u, a, f = {top: 0, left: 0}, l = this[0], c = l && l.ownerDocument;
        if (!c)return;
        return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
            top: f.top + u - s,
            left: f.left + a - o
        }) : f)
    }, v.offset = {
        bodyOffset: function (e) {
            var t = e.offsetTop, n = e.offsetLeft;
            return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        }, setOffset: function (e, t, n) {
            var r = v.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = v(e), s = i.offset(), o = v.css(e, "top"), u = v.css(e, "left"), a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1, f = {}, l = {}, c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, v.fn.extend({
        position: function () {
            if (!this[0])return;
            var e = this[0], t = this.offsetParent(), n = this.offset(), r = er.test(t[0].nodeName) ? {
                top: 0,
                left: 0
            } : t.offset();
            return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent || i.body;
                while (e && !er.test(e.nodeName) && v.css(e, "position") === "static")e = e.offsetParent;
                return e || i.body
            })
        }
    }), v.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        v.fn[e] = function (i) {
            return v.access(this, function (e, i, s) {
                var o = tr(e);
                if (s === t)return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), v.each({Height: "height", Width: "width"}, function (e, n) {
        v.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            v.fn[i] = function (i, s) {
                var o = arguments.length && (r || typeof i != "boolean"), u = r || (i === !0 || s === !0 ? "margin" : "border");
                return v.access(this, function (n, r, i) {
                    var s;
                    return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return v
    })
})(window);
;(function () {
    function n(n, t) {
        return n.set(t[0], t[1]), n
    }

    function t(n, t) {
        return n.add(t), n
    }

    function r(n, t, r) {
        switch (r.length) {
            case 0:
                return n.call(t);
            case 1:
                return n.call(t, r[0]);
            case 2:
                return n.call(t, r[0], r[1]);
            case 3:
                return n.call(t, r[0], r[1], r[2])
        }
        return n.apply(t, r)
    }

    function e(n, t, r, e) {
        for (var u = -1, o = n.length; ++u < o;) {
            var i = n[u];
            t(e, i, r(i), n)
        }
        return e
    }

    function u(n, t) {
        for (var r = -1, e = n.length; ++r < e && false !== t(n[r], r, n););
        return n
    }

    function o(n, t) {
        for (var r = -1, e = n.length; ++r < e;)if (!t(n[r], r, n))return false;
        return true
    }

    function i(n, t) {
        for (var r = -1, e = n.length, u = -1, o = []; ++r < e;) {
            var i = n[r];
            t(i, r, n) && (o[++u] = i)
        }
        return o
    }

    function f(n, t) {
        return !!n.length && -1 < d(n, t, 0)
    }

    function c(n, t, r) {
        for (var e = -1, u = n.length; ++e < u;)if (r(t, n[e]))return true;
        return false
    }

    function a(n, t) {
        for (var r = -1, e = n.length, u = Array(e); ++r < e;)u[r] = t(n[r], r, n);
        return u
    }

    function l(n, t) {
        for (var r = -1, e = t.length, u = n.length; ++r < e;)n[u + r] = t[r];
        return n
    }

    function s(n, t, r, e) {
        var u = -1, o = n.length;
        for (e && o && (r = n[++u]); ++u < o;)r = t(r, n[u], u, n);
        return r
    }

    function h(n, t, r, e) {
        var u = n.length;
        for (e && u && (r = n[--u]); u--;)r = t(r, n[u], u, n);
        return r
    }

    function p(n, t) {
        for (var r = -1, e = n.length; ++r < e;)if (t(n[r], r, n))return true;
        return false
    }

    function _(n, t, r) {
        for (var e = -1, u = n.length; ++e < u;) {
            var o = n[e], i = t(o);
            if (null != i && (f === Z ? i === i : r(i, f)))var f = i, c = o
        }
        return c
    }

    function g(n, t, r, e) {
        var u;
        return r(n, function (n, r, o) {
            return t(n, r, o) ? (u = e ? r : n, false) : void 0
        }), u
    }

    function v(n, t, r) {
        for (var e = n.length, u = r ? e : -1; r ? u-- : ++u < e;)if (t(n[u], u, n))return u;
        return -1
    }

    function d(n, t, r) {
        if (t !== t)return C(n, r);
        --r;
        for (var e = n.length; ++r < e;)if (n[r] === t)return r;
        return -1
    }

    function y(n, t, r, e, u) {
        return u(n, function (n, u, o) {
            r = e ? (e = false, n) : t(r, n, u, o)
        }), r
    }

    function b(n, t) {
        var r = n.length;
        for (n.sort(t); r--;)n[r] = n[r].c;
        return n
    }

    function x(n, t) {
        for (var r, e = -1, u = n.length; ++e < u;) {
            var o = t(n[e]);
            o !== Z && (r = r === Z ? o : r + o)
        }
        return r
    }

    function m(n, t) {
        for (var r = -1, e = Array(n); ++r < n;)e[r] = t(r);
        return e
    }

    function j(n, t) {
        return a(t, function (t) {
            return [t, n[t]]
        })
    }

    function w(n) {
        return function (t) {
            return n(t)
        }
    }

    function A(n, t) {
        return a(t, function (t) {
            return n[t]
        })
    }

    function O(n, t) {
        for (var r = -1, e = n.length; ++r < e && -1 < d(t, n[r], 0););
        return r
    }

    function E(n, t) {
        for (var r = n.length; r-- && -1 < d(t, n[r], 0););
        return r
    }

    function k(n) {
        return n && n.Object === Object ? n : null
    }

    function I(n, t) {
        if (n !== t) {
            var r = null === n, e = n === Z, u = n === n, o = null === t, i = t === Z, f = t === t;
            if (n > t && !o || !u || r && !i && f || e && f)return 1;
            if (t > n && !r || !f || o && !e && u || i && u)return -1
        }
        return 0
    }

    function R(n) {
        return Bn[n]
    }

    function S(n) {
        return zn[n]
    }

    function W(n) {
        return "\\" + Fn[n]
    }

    function C(n, t, r) {
        var e = n.length;
        for (t += r ? 0 : -1; r ? t-- : ++t < e;) {
            var u = n[t];
            if (u !== u)return t
        }
        return -1
    }

    function U(n) {
        var t = false;
        if (null != n && typeof n.toString != "function")try {
            t = !!(n + "")
        } catch (r) {
        }
        return t
    }

    function B(n, t) {
        return n = typeof n == "number" || yn.test(n) ? +n : -1, n > -1 && 0 == n % 1 && (null == t ? 9007199254740991 : t) > n
    }

    function z(n) {
        for (var t, r = []; !(t = n.next()).done;)r.push(t.value);
        return r
    }

    function L(n) {
        var t = -1, r = Array(n.size);
        return n.forEach(function (n, e) {
            r[++t] = [e, n]
        }), r
    }

    function $(n, t) {
        for (var r = -1, e = n.length, u = -1, o = []; ++r < e;)n[r] === t && (n[r] = "__lodash_placeholder__", o[++u] = r);
        return o
    }

    function F(n) {
        var t = -1, r = Array(n.size);
        return n.forEach(function (n) {
            r[++t] = n
        }), r
    }

    function M(n) {
        if (!n || !kn.test(n))return n.length;
        for (var t = En.lastIndex = 0; En.test(n);)t++;
        return t
    }

    function N(n) {
        return Ln[n]
    }

    function D(k) {
        function yn(n) {
            if (be(n) && !Lo(n) && !(n instanceof An)) {
                if (n instanceof wn)return n;
                if (iu.call(n, "__wrapped__"))return Nr(n)
            }
            return new wn(n)
        }

        function jn() {
        }

        function wn(n, t) {
            this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = Z
        }

        function An(n) {
            this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = false, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
        }

        function Bn() {
        }

        function zn(n) {
            var t = -1, r = n ? n.length : 0;
            for (this.clear(); ++t < r;) {
                var e = n[t];
                this.set(e[0], e[1])
            }
        }

        function Ln(n) {
            var t = -1, r = n ? n.length : 0;
            for (this.__data__ = new zn; ++t < r;)this.push(n[t])
        }

        function $n(n, t) {
            var r = n.__data__;
            return Cr(t) ? (r = r.__data__, "__lodash_hash_undefined__" === (typeof t == "string" ? r.string : r.hash)[t]) : r.has(t)
        }

        function Fn(n) {
            var t = -1, r = n ? n.length : 0;
            for (this.clear(); ++t < r;) {
                var e = n[t];
                this.set(e[0], e[1]);
            }
        }

        function Dn(n, t) {
            var r = qn(n, t);
            return 0 > r ? false : (r == n.length - 1 ? n.pop() : ju.call(n, r, 1), true)
        }

        function Zn(n, t) {
            var r = qn(n, t);
            return 0 > r ? Z : n[r][1]
        }

        function qn(n, t) {
            for (var r = n.length; r--;)if (ae(n[r][0], t))return r;
            return -1
        }

        function Pn(n, t, r) {
            var e = qn(n, t);
            0 > e ? n.push([t, r]) : n[e][1] = r
        }

        function Tn(n, t, r, e) {
            return n === Z || ae(n, uu[r]) && !iu.call(e, r) ? t : n
        }

        function Kn(n, t, r) {
            (r !== Z && !ae(n[t], r) || typeof t == "number" && r === Z && !(t in n)) && (n[t] = r)
        }

        function Jn(n, t, r) {
            var e = n[t];
            (!ae(e, r) || ae(e, uu[t]) && !iu.call(n, t) || r === Z && !(t in n)) && (n[t] = r);
        }

        function Yn(n, t, r, e) {
            return Tu(n, function (n, u, o) {
                t(e, n, r(n), o)
            }), e
        }

        function Hn(n, t) {
            return n && Jt(t, $e(t), n)
        }

        function Qn(n, t) {
            for (var r = -1, e = null == n, u = t.length, o = Array(u); ++r < u;)o[r] = e ? Z : Be(n, t[r]);
            return o
        }

        function Xn(n, t, r) {
            return n === n && (r !== Z && (n = n > r ? r : n), t !== Z && (n = t > n ? t : n)), n
        }

        function nt(n, t, r, e, o, i) {
            var f;
            if (r && (f = o ? r(n, e, o, i) : r(n)), f !== Z)return f;
            if (!ye(n))return n;
            if (e = Lo(n)) {
                if (f = Er(n), !t)return Vt(n, f)
            } else {
                var c = Ar(n), a = "[object Function]" == c || "[object GeneratorFunction]" == c;
                if ("[object Object]" != c && "[object Arguments]" != c && (!a || o))return Un[c] ? Ir(n, c, t) : o ? n : {};
                if (U(n))return o ? n : {};
                if (f = kr(a ? {} : n), !t)return Ht(n, Hn(f, n))
            }
            return i || (i = new Fn), (o = i.get(n)) ? o : (i.set(n, f), (e ? u : ct)(n, function (e, u) {
                Jn(f, u, nt(e, t, r, u, n, i))
            }), e ? f : Ht(n, f))
        }

        function tt(n) {
            var t = $e(n), r = t.length;
            return function (e) {
                if (null == e)return !r;
                for (var u = r; u--;) {
                    var o = t[u], i = n[o], f = e[o];
                    if (f === Z && !(o in Object(e)) || !i(f))return false
                }
                return true
            }
        }

        function rt(n, t, r) {
            if (typeof n != "function")throw new ru("Expected a function");
            return mu(function () {
                n.apply(Z, r)
            }, t)
        }

        function et(n, t, r, e) {
            var u = -1, o = f, i = true, l = n.length, s = [], h = t.length;
            if (!l)return s;
            r && (t = a(t, w(r))), e ? (o = c, i = false) : t.length >= 200 && (o = $n, i = false, t = new Ln(t));
            n:for (; ++u < l;) {
                var p = n[u], _ = r ? r(p) : p;
                if (i && _ === _) {
                    for (var g = h; g--;)if (t[g] === _)continue n;
                    s.push(p)
                } else o(t, _, e) || s.push(p)
            }
            return s
        }

        function ut(n, t) {
            var r = true;
            return Tu(n, function (n, e, u) {
                return r = !!t(n, e, u)
            }), r
        }

        function ot(n, t) {
            var r = [];
            return Tu(n, function (n, e, u) {
                t(n, e, u) && r.push(n)
            }), r
        }

        function it(n, t, r, e) {
            e || (e = []);
            for (var u = -1, o = n.length; ++u < o;) {
                var i = n[u];
                pe(i) && (r || Lo(i) || se(i)) ? t ? it(i, t, r, e) : l(e, i) : r || (e[e.length] = i);
            }
            return e
        }

        function ft(n, t) {
            null == n || Gu(n, t, Fe)
        }

        function ct(n, t) {
            return n && Gu(n, t, $e)
        }

        function at(n, t) {
            return n && Vu(n, t, $e)
        }

        function lt(n, t) {
            return i(t, function (t) {
                return ge(n[t])
            })
        }

        function st(n, t) {
            t = Wr(t, n) ? [t + ""] : Mt(t);
            for (var r = 0, e = t.length; null != n && e > r;)n = n[t[r++]];
            return r && r == e ? n : Z
        }

        function ht(n, t) {
            return iu.call(n, t) || typeof n == "object" && t in n && null === du(n)
        }

        function pt(n, t) {
            return t in Object(n)
        }

        function _t(n, t, r) {
            for (var e = r ? c : f, u = n.length, o = u, i = Array(u), l = []; o--;) {
                var s = n[o];
                o && t && (s = a(s, w(t))), i[o] = r || !t && 120 > s.length ? Z : new Ln(o && s)
            }
            var s = n[0], h = -1, p = s.length, _ = i[0];
            n:for (; ++h < p;) {
                var g = s[h], v = t ? t(g) : g;
                if (_ ? !$n(_, v) : !e(l, v, r)) {
                    for (o = u; --o;) {
                        var d = i[o];
                        if (d ? !$n(d, v) : !e(n[o], v, r))continue n
                    }
                    _ && _.push(v), l.push(g)
                }
            }
            return l
        }

        function gt(n, t, r) {
            var e = {};
            return ct(n, function (n, u, o) {
                t(e, r(n), u, o)
            }), e
        }

        function vt(n, t, e) {
            return Wr(t, n) || (t = Mt(t), n = Lr(n, t), t = Pr(t)), t = null == n ? n : n[t], null == t ? Z : r(t, n, e)
        }

        function dt(n, t, r, e, u) {
            if (n === t)n = true; else if (null == n || null == t || !ye(n) && !be(t))n = n !== n && t !== t; else n:{
                var o = Lo(n), i = Lo(t), f = "[object Array]", c = "[object Array]";
                o || (f = Ar(n), "[object Arguments]" == f ? f = "[object Object]" : "[object Object]" != f && (o = Ee(n))), i || (c = Ar(t), "[object Arguments]" == c ? c = "[object Object]" : "[object Object]" != c && Ee(t));
                var a = "[object Object]" == f && !U(n), i = "[object Object]" == c && !U(t), c = f == c;
                if (!c || o || a) {
                    if (!(2 & e) && (f = a && iu.call(n, "__wrapped__"), i = i && iu.call(t, "__wrapped__"), f || i)) {
                        n = dt(f ? n.value() : n, i ? t.value() : t, r, e, u);
                        break n
                    }
                    c ? (u || (u = new Fn), n = (o ? dr : br)(n, t, dt, r, e, u)) : n = false
                } else n = yr(n, t, f, dt, r, e);
            }
            return n
        }

        function yt(n, t, r, e) {
            var u = r.length, o = u, i = !e;
            if (null == n)return !o;
            for (n = Object(n); u--;) {
                var f = r[u];
                if (i && f[2] ? f[1] !== n[f[0]] : !(f[0] in n))return false
            }
            for (; ++u < o;) {
                var f = r[u], c = f[0], a = n[c], l = f[1];
                if (i && f[2]) {
                    if (a === Z && !(c in n))return false
                } else if (f = new Fn, c = e ? e(a, l, c, n, t, f) : Z, c === Z ? !dt(l, a, e, 3, f) : !c)return false
            }
            return true
        }

        function bt(n) {
            var t = typeof n;
            return "function" == t ? n : null == n ? Ke : "object" == t ? Lo(n) ? wt(n[0], n[1]) : jt(n) : Ye(n)
        }

        function xt(n) {
            n = null == n ? n : Object(n);
            var t, r = [];
            for (t in n)r.push(t);
            return r;
        }

        function mt(n, t) {
            var r = -1, e = he(n) ? Array(n.length) : [];
            return Tu(n, function (n, u, o) {
                e[++r] = t(n, u, o)
            }), e
        }

        function jt(n) {
            var t = jr(n);
            if (1 == t.length && t[0][2]) {
                var r = t[0][0], e = t[0][1];
                return function (n) {
                    return null == n ? false : n[r] === e && (e !== Z || r in Object(n))
                }
            }
            return function (r) {
                return r === n || yt(r, n, t)
            }
        }

        function wt(n, t) {
            return function (r) {
                var e = Be(r, n);
                return e === Z && e === t ? Le(r, n) : dt(t, e, Z, 3)
            }
        }

        function At(n, t, r, e, o) {
            if (n !== t) {
                var i = Lo(t) || Ee(t) ? Z : Fe(t);
                u(i || t, function (u, f) {
                    if (i && (f = u, u = t[f]), ye(u)) {
                        o || (o = new Fn);
                        var c = f, a = o, l = n[c], s = t[c], h = a.get(s);
                        if (h)Kn(n, c, h); else {
                            var h = e ? e(l, s, c + "", n, t, a) : Z, p = h === Z;
                            p && (h = s, Lo(s) || Ee(s) ? Lo(l) ? h = r ? Vt(l) : l : pe(l) ? h = Vt(l) : (p = false, h = nt(s)) : je(s) || se(s) ? se(l) ? h = Ce(l) : !ye(l) || r && ge(l) ? (p = false, h = nt(s)) : h = r ? nt(l) : l : p = false), a.set(s, h), p && At(h, s, r, e, a), Kn(n, c, h)
                        }
                    } else c = e ? e(n[f], u, f + "", n, t, o) : Z, c === Z && (c = u), Kn(n, f, c)
                })
            }
        }

        function Ot(n, t, r) {
            var e = -1, u = mr();
            return t = a(t.length ? t : Array(1), function (n) {
                return u(n)
            }), n = mt(n, function (n) {
                return {
                    a: a(t, function (t) {
                        return t(n)
                    }), b: ++e, c: n
                }
            }), b(n, function (n, t) {
                var e;
                n:{
                    e = -1;
                    for (var u = n.a, o = t.a, i = u.length, f = r.length; ++e < i;) {
                        var c = I(u[e], o[e]);
                        if (c) {
                            e = f > e ? c * ("desc" == r[e] ? -1 : 1) : c;
                            break n
                        }
                    }
                    e = n.b - t.b
                }
                return e
            })
        }

        function Et(n, t) {
            return n = Object(n), s(t, function (t, r) {
                return r in n && (t[r] = n[r]), t
            }, {})
        }

        function kt(n, t) {
            var r = {};
            return ft(n, function (n, e) {
                t(n, e) && (r[e] = n)
            }), r
        }

        function It(n) {
            return function (t) {
                return null == t ? Z : t[n]
            }
        }

        function Rt(n) {
            return function (t) {
                return st(t, n)
            }
        }

        function St(n, t, r) {
            var e = -1, u = t.length, o = n;
            for (r && (o = a(n, function (n) {
                return r(n)
            })); ++e < u;)for (var i = 0, f = t[e], f = r ? r(f) : f; -1 < (i = d(o, f, i));)o !== n && ju.call(o, i, 1), ju.call(n, i, 1);
            return n
        }

        function Wt(n, t) {
            for (var r = n ? t.length : 0, e = r - 1; r--;) {
                var u = t[r];
                if (e == r || u != o) {
                    var o = u;
                    if (B(u))ju.call(n, u, 1); else if (Wr(u, n))delete n[u]; else {
                        var u = Mt(u), i = Lr(n, u);
                        null != i && delete i[Pr(u)]
                    }
                }
            }
        }

        function Ct(n, t) {
            return n + Au(Wu() * (t - n + 1))
        }

        function Ut(n, t, r, e) {
            t = Wr(t, n) ? [t + ""] : Mt(t);
            for (var u = -1, o = t.length, i = o - 1, f = n; null != f && ++u < o;) {
                var c = t[u];
                if (ye(f)) {
                    var a = r;
                    if (u != i) {
                        var l = f[c], a = e ? e(l, c, f) : Z;
                        a === Z && (a = null == l ? B(t[u + 1]) ? [] : {} : l)
                    }
                    Jn(f, c, a)
                }
                f = f[c]
            }
            return n
        }

        function Bt(n, t, r) {
            var e = -1, u = n.length;
            for (0 > t && (t = -t > u ? 0 : u + t), r = r > u ? u : r, 0 > r && (r += u), u = t > r ? 0 : r - t >>> 0, t >>>= 0, r = Array(u); ++e < u;)r[e] = n[e + t];
            return r
        }

        function zt(n, t) {
            var r;
            return Tu(n, function (n, e, u) {
                return r = t(n, e, u), !r
            }), !!r
        }

        function Lt(n, t, r) {
            var e = 0, u = n ? n.length : e;
            if (typeof t == "number" && t === t && 2147483647 >= u) {
                for (; u > e;) {
                    var o = e + u >>> 1, i = n[o];
                    (r ? t >= i : t > i) && null !== i ? e = o + 1 : u = o
                }
                return u
            }
            return $t(n, t, Ke, r)
        }

        function $t(n, t, r, e) {
            t = r(t);
            for (var u = 0, o = n ? n.length : 0, i = t !== t, f = null === t, c = t === Z; o > u;) {
                var a = Au((u + o) / 2), l = r(n[a]), s = l !== Z, h = l === l;
                (i ? h || e : f ? h && s && (e || null != l) : c ? h && (e || s) : null == l ? 0 : e ? t >= l : t > l) ? u = a + 1 : o = a;
            }
            return Ru(o, 4294967294)
        }

        function Ft(n, t) {
            for (var r = 0, e = n.length, u = n[0], o = t ? t(u) : u, i = o, f = 0, c = [u]; ++r < e;)u = n[r], o = t ? t(u) : u, ae(o, i) || (i = o, c[++f] = u);
            return c
        }

        function Mt(n) {
            return Lo(n) ? n : $r(n)
        }

        function Nt(n, t, r) {
            var e = -1, u = f, o = n.length, i = true, a = [], l = a;
            if (r)i = false, u = c; else if (o < 200)l = t ? [] : a; else {
                if (u = t ? null : Yu(n))return F(u);
                i = false, u = $n, l = new Ln
            }
            n:for (; ++e < o;) {
                var s = n[e], h = t ? t(s) : s;
                if (i && h === h) {
                    for (var p = l.length; p--;)if (l[p] === h)continue n;
                    t && l.push(h), a.push(s)
                } else u(l, h, r) || (l !== a && l.push(h), a.push(s));
            }
            return a
        }

        function Dt(n, t, r, e) {
            for (var u = n.length, o = e ? u : -1; (e ? o-- : ++o < u) && t(n[o], o, n););
            return r ? Bt(n, e ? 0 : o, e ? o + 1 : u) : Bt(n, e ? o + 1 : 0, e ? u : o)
        }

        function Zt(n, t) {
            var r = n;
            return r instanceof An && (r = r.value()), s(t, function (n, t) {
                return t.func.apply(t.thisArg, l([n], t.args))
            }, r)
        }

        function qt(n, t, r) {
            for (var e = -1, u = n.length; ++e < u;)var o = o ? l(et(o, n[e], t, r), et(n[e], o, t, r)) : n[e];
            return o && o.length ? Nt(o, t, r) : []
        }

        function Pt(n, t, r) {
            for (var e = -1, u = n.length, o = t.length, i = {}; ++e < u;)r(i, n[e], o > e ? t[e] : Z);
            return i
        }

        function Tt(n) {
            var t = new n.constructor(n.byteLength);
            return new _u(t).set(new _u(n)), t
        }

        function Kt(n, t, r) {
            for (var e = r.length, u = -1, o = Iu(n.length - e, 0), i = -1, f = t.length, c = Array(f + o); ++i < f;)c[i] = t[i];
            for (; ++u < e;)c[r[u]] = n[u];
            for (; o--;)c[i++] = n[u++];
            return c
        }

        function Gt(n, t, r) {
            for (var e = -1, u = r.length, o = -1, i = Iu(n.length - u, 0), f = -1, c = t.length, a = Array(i + c); ++o < i;)a[o] = n[o];
            for (i = o; ++f < c;)a[i + f] = t[f];
            for (; ++e < u;)a[i + r[e]] = n[o++];
            return a
        }

        function Vt(n, t) {
            var r = -1, e = n.length;
            for (t || (t = Array(e)); ++r < e;)t[r] = n[r];
            return t
        }

        function Jt(n, t, r) {
            return Yt(n, t, r)
        }

        function Yt(n, t, r, e) {
            r || (r = {});
            for (var u = -1, o = t.length; ++u < o;) {
                var i = t[u], f = e ? e(r[i], n[i], i, r, n) : n[i];
                Jn(r, i, f)
            }
            return r
        }

        function Ht(n, t) {
            return Jt(n, Xu(n), t)
        }

        function Qt(n, t) {
            return function (r, u) {
                var o = Lo(r) ? e : Yn, i = t ? t() : {};
                return o(r, n, mr(u), i)
            }
        }

        function Xt(n) {
            return ce(function (t, r) {
                var e = -1, u = r.length, o = u > 1 ? r[u - 1] : Z, i = u > 2 ? r[2] : Z, o = typeof o == "function" ? (u--, o) : Z;
                for (i && Sr(r[0], r[1], i) && (o = 3 > u ? Z : o, u = 1), t = Object(t); ++e < u;)(i = r[e]) && n(t, i, e, o);
                return t
            })
        }

        function nr(n, t) {
            return function (r, e) {
                if (null == r)return r;
                if (!he(r))return n(r, e);
                for (var u = r.length, o = t ? u : -1, i = Object(r); (t ? o-- : ++o < u) && false !== e(i[o], o, i););
                return r
            }
        }

        function tr(n) {
            return function (t, r, e) {
                var u = -1, o = Object(t);
                e = e(t);
                for (var i = e.length; i--;) {
                    var f = e[n ? i : ++u];
                    if (false === r(o[f], f, o))break
                }
                return t
            }
        }

        function rr(n, t, r) {
            function e() {
                return (this && this !== Gn && this instanceof e ? o : n).apply(u ? r : this, arguments)
            }

            var u = 1 & t, o = or(n);
            return e
        }

        function er(n) {
            return function (t) {
                t = Ue(t);
                var r = kn.test(t) ? t.match(En) : Z, e = r ? r[0] : t.charAt(0);
                return t = r ? r.slice(1).join("") : t.slice(1), e[n]() + t
            }
        }

        function ur(n) {
            return function (t) {
                return s(Pe(Ze(t)), n, "")
            }
        }

        function or(n) {
            return function () {
                var t = arguments;
                switch (t.length) {
                    case 0:
                        return new n;
                    case 1:
                        return new n(t[0]);
                    case 2:
                        return new n(t[0], t[1]);
                    case 3:
                        return new n(t[0], t[1], t[2]);
                    case 4:
                        return new n(t[0], t[1], t[2], t[3]);
                    case 5:
                        return new n(t[0], t[1], t[2], t[3], t[4]);
                    case 6:
                        return new n(t[0], t[1], t[2], t[3], t[4], t[5]);
                    case 7:
                        return new n(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                }
                var r = Pu(n.prototype), t = n.apply(r, t);
                return ye(t) ? t : r
            }
        }

        function ir(n, t, e) {
            function u() {
                for (var i = arguments.length, f = i, c = Array(i), a = this && this !== Gn && this instanceof u ? o : n, l = yn.placeholder || u.placeholder; f--;)c[f] = arguments[f];
                return f = 3 > i && c[0] !== l && c[i - 1] !== l ? [] : $(c, l), i -= f.length, e > i ? _r(n, t, cr, l, Z, c, f, Z, Z, e - i) : r(a, this, c)
            }

            var o = or(n);
            return u
        }

        function fr(n) {
            return ce(function (t) {
                t = it(t);
                var r = t.length, e = r, u = wn.prototype.thru;
                for (n && t.reverse(); e--;) {
                    var o = t[e];
                    if (typeof o != "function")throw new ru("Expected a function");
                    if (u && !i && "wrapper" == xr(o))var i = new wn([], true)
                }
                for (e = i ? e : r; ++e < r;)var o = t[e], u = xr(o), f = "wrapper" == u ? Hu(o) : Z, i = f && Ur(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? i[xr(f[0])].apply(i, f[3]) : 1 == o.length && Ur(o) ? i[u]() : i.thru(o);
                return function () {
                    var n = arguments, e = n[0];
                    if (i && 1 == n.length && Lo(e) && e.length >= 200)return i.plant(e).value();
                    for (var u = 0, n = r ? t[u].apply(this, n) : e; ++u < r;)n = t[u].call(this, n);
                    return n
                }
            })
        }

        function cr(n, t, r, e, u, o, i, f, c, a) {
            function l() {
                for (var y = arguments.length, b = y, x = Array(y); b--;)x[b] = arguments[b];
                if (e && (x = Kt(x, e, u)), o && (x = Gt(x, o, i)), _ || g) {
                    var b = yn.placeholder || l.placeholder, m = $(x, b), y = y - m.length;
                    if (a > y)return _r(n, t, cr, b, r, x, m, f, c, a - y)
                }
                if (y = h ? r : this, b = p ? y[n] : n, f)for (var m = x.length, j = Ru(f.length, m), w = Vt(x); j--;) {
                    var A = f[j];
                    x[j] = B(A, m) ? w[A] : Z
                } else v && x.length > 1 && x.reverse();
                return s && x.length > c && (x.length = c), this && this !== Gn && this instanceof l && (b = d || or(b)), b.apply(y, x)
            }

            var s = 128 & t, h = 1 & t, p = 2 & t, _ = 8 & t, g = 16 & t, v = 512 & t, d = p ? Z : or(n);
            return l
        }

        function ar(n, t) {
            return function (r, e) {
                return gt(r, n, t(e))
            }
        }

        function lr(n) {
            return ce(function (t) {
                return t = a(it(t), mr()), ce(function (e) {
                    var u = this;
                    return n(t, function (n) {
                        return r(n, u, e)
                    })
                })
            })
        }

        function sr(n, t, r) {
            return t = Re(t), n = M(n), t && t > n ? (t -= n, r = r === Z ? " " : r + "", n = qe(r, wu(t / M(r))), kn.test(r) ? n.match(En).slice(0, t).join("") : n.slice(0, t)) : ""
        }

        function hr(n, t, e, u) {
            function o() {
                for (var t = -1, c = arguments.length, a = -1, l = u.length, s = Array(l + c), h = this && this !== Gn && this instanceof o ? f : n; ++a < l;)s[a] = u[a];
                for (; c--;)s[a++] = arguments[++t];
                return r(h, i ? e : this, s)
            }

            var i = 1 & t, f = or(n);
            return o
        }

        function pr(n) {
            return function (t, r, e) {
                e && typeof e != "number" && Sr(t, r, e) && (r = e = Z), t = We(t), t = t === t ? t : 0, r === Z ? (r = t, t = 0) : r = We(r) || 0, e = e === Z ? r > t ? 1 : -1 : We(e) || 0;
                var u = -1;
                r = Iu(wu((r - t) / (e || 1)), 0);
                for (var o = Array(r); r--;)o[n ? r : ++u] = t, t += e;
                return o
            }
        }

        function _r(n, t, r, e, u, o, i, f, c, a) {
            var l = 8 & t;
            f = f ? Vt(f) : Z;
            var s = l ? i : Z;
            i = l ? Z : i;
            var h = l ? o : Z;
            return o = l ? Z : o, t = (t | (l ? 32 : 64)) & ~(l ? 64 : 32), 4 & t || (t &= -4), t = [n, t, u, h, s, o, i, f, c, a], r = r.apply(Z, t), Ur(n) && no(r, t), r.placeholder = e, r
        }

        function gr(n) {
            var t = nu[n];
            return function (n, r) {
                if (n = We(n), r = Re(r)) {
                    var e = (Ue(n) + "e").split("e"), e = t(e[0] + "e" + (+e[1] + r)), e = (Ue(e) + "e").split("e");
                    return +(e[0] + "e" + (+e[1] - r))
                }
                return t(n)
            }
        }

        function vr(n, t, r, e, u, o, i, f) {
            var c = 2 & t;
            if (!c && typeof n != "function")throw new ru("Expected a function");
            var a = e ? e.length : 0;
            if (a || (t &= -97, e = u = Z), i = i === Z ? i : Iu(Re(i), 0), f = f === Z ? f : Re(f), a -= u ? u.length : 0, 64 & t) {
                var l = e, s = u;
                e = u = Z
            }
            var h = c ? Z : Hu(n);
            return o = [n, t, r, e, u, l, s, o, i, f], h && (r = o[1], n = h[1], t = r | n, e = 128 == n && 8 == r || 128 == n && 256 == r && h[8] >= o[7].length || 384 == n && h[8] >= h[7].length && 8 == r, 131 > t || e) && (1 & n && (o[2] = h[2], t |= 1 & r ? 0 : 4), (r = h[3]) && (e = o[3], o[3] = e ? Kt(e, r, h[4]) : Vt(r), o[4] = e ? $(o[3], "__lodash_placeholder__") : Vt(h[4])), (r = h[5]) && (e = o[5], o[5] = e ? Gt(e, r, h[6]) : Vt(r), o[6] = e ? $(o[5], "__lodash_placeholder__") : Vt(h[6])), (r = h[7]) && (o[7] = Vt(r)), 128 & n && (o[8] = null == o[8] ? h[8] : Ru(o[8], h[8])), null == o[9] && (o[9] = h[9]), o[0] = h[0], o[1] = t), n = o[0], t = o[1], r = o[2], e = o[3], u = o[4], f = o[9] = null == o[9] ? c ? 0 : n.length : Iu(o[9] - a, 0), !f && 24 & t && (t &= -25), (h ? Ju : no)(t && 1 != t ? 8 == t || 16 == t ? ir(n, t, f) : 32 != t && 33 != t || u.length ? cr.apply(Z, o) : hr(n, t, r, e) : rr(n, t, r), o)
        }

        function dr(n, t, r, e, u, o) {
            var i = -1, f = 2 & u, c = 1 & u, a = n.length, l = t.length;
            if (!(a == l || f && l > a))return false;
            if (l = o.get(n))return l == t;
            for (l = true, o.set(n, t); ++i < a;) {
                var s = n[i], h = t[i];
                if (e)var _ = f ? e(h, s, i, t, n, o) : e(s, h, i, n, t, o);
                if (_ !== Z) {
                    if (_)continue;
                    l = false;
                    break
                }
                if (c) {
                    if (!p(t, function (n) {
                            return s === n || r(s, n, e, u, o)
                        })) {
                        l = false;
                        break
                    }
                } else if (s !== h && !r(s, h, e, u, o)) {
                    l = false;
                    break
                }
            }
            return o["delete"](n), l
        }

        function yr(n, t, r, e, u, o) {
            switch (r) {
                case"[object ArrayBuffer]":
                    if (n.byteLength != t.byteLength || !e(new _u(n), new _u(t)))break;
                    return true;
                case"[object Boolean]":
                case"[object Date]":
                    return +n == +t;
                case"[object Error]":
                    return n.name == t.name && n.message == t.message;
                case"[object Number]":
                    return n != +n ? t != +t : n == +t;
                case"[object RegExp]":
                case"[object String]":
                    return n == t + "";
                case"[object Map]":
                    var i = L;
                case"[object Set]":
                    return i || (i = F), (2 & o || n.size == t.size) && e(i(n), i(t), u, 1 | o);
                case"[object Symbol]":
                    return !!pu && Du.call(n) == Du.call(t)
            }
            return false
        }

        function br(n, t, r, e, u, o) {
            var i = 2 & u, f = $e(n), c = f.length, a = $e(t).length;
            if (c != a && !i)return false;
            for (var l = c; l--;) {
                var s = f[l];
                if (!(i ? s in t : ht(t, s)))return false
            }
            if (a = o.get(n))return a == t;
            a = true, o.set(n, t);
            for (var h = i; ++l < c;) {
                var s = f[l], p = n[s], _ = t[s];
                if (e)var g = i ? e(_, p, s, t, n, o) : e(p, _, s, n, t, o);
                if (g === Z ? p !== _ && !r(p, _, e, u, o) : !g) {
                    a = false;
                    break
                }
                h || (h = "constructor" == s)
            }
            return a && !h && (r = n.constructor, e = t.constructor, r != e && "constructor" in n && "constructor" in t && !(typeof r == "function" && r instanceof r && typeof e == "function" && e instanceof e) && (a = false)), o["delete"](n), a
        }

        function xr(n) {
            for (var t = n.name + "", r = qu[t], e = iu.call(qu, t) ? r.length : 0; e--;) {
                var u = r[e], o = u.func;
                if (null == o || o == n)return u.name
            }
            return t
        }

        function mr() {
            var n = yn.iteratee || Ge, n = n === Ge ? bt : n;
            return arguments.length ? n(arguments[0], arguments[1]) : n
        }

        function jr(n) {
            n = Me(n);
            for (var t = n.length; t--;) {
                var r = n[t][1];
                n[t][2] = r === r && !ye(r)
            }
            return n
        }

        function wr(n, t) {
            var r = null == n ? Z : n[t];
            return xe(r) ? r : Z
        }

        function Ar(n) {
            return au.call(n)
        }

        function Or(n, t, r) {
            if (null == n)return false;
            var e = r(n, t);
            return e || Wr(t) || (t = Mt(t), n = Lr(n, t), null != n && (t = Pr(t), e = r(n, t))), r = n ? n.length : Z, e || !!r && de(r) && B(t, r) && (Lo(n) || Ae(n) || se(n))
        }

        function Er(n) {
            var t = n.length, r = n.constructor(t);
            return t && "string" == typeof n[0] && iu.call(n, "index") && (r.index = n.index, r.input = n.input), r
        }

        function kr(n) {
            return Br(n) ? {} : (n = n.constructor, Pu(ge(n) ? n.prototype : Z));
        }

        function Ir(r, e, u) {
            var o = r.constructor;
            switch (e) {
                case"[object ArrayBuffer]":
                    return Tt(r);
                case"[object Boolean]":
                case"[object Date]":
                    return new o(+r);
                case"[object Float32Array]":
                case"[object Float64Array]":
                case"[object Int8Array]":
                case"[object Int16Array]":
                case"[object Int32Array]":
                case"[object Uint8Array]":
                case"[object Uint8ClampedArray]":
                case"[object Uint16Array]":
                case"[object Uint32Array]":
                    return e = r.buffer, new r.constructor(u ? Tt(e) : e, r.byteOffset, r.length);
                case"[object Map]":
                    return u = r.constructor, s(L(r), n, new u);
                case"[object Number]":
                case"[object String]":
                    return new o(r);
                case"[object RegExp]":
                    return u = new r.constructor(r.source, hn.exec(r)), u.lastIndex = r.lastIndex, u;
                case"[object Set]":
                    return u = r.constructor, s(F(r), t, new u);
                case"[object Symbol]":
                    return pu ? Object(Du.call(r)) : {}
            }
        }

        function Rr(n) {
            var t = n ? n.length : Z;
            return de(t) && (Lo(n) || Ae(n) || se(n)) ? m(t, String) : null
        }

        function Sr(n, t, r) {
            if (!ye(r))return false;
            var e = typeof t;
            return ("number" == e ? he(r) && B(t, r.length) : "string" == e && t in r) ? ae(r[t], n) : false
        }

        function Wr(n, t) {
            return typeof n == "number" ? true : !Lo(n) && (rn.test(n) || !tn.test(n) || null != t && n in Object(t))
        }

        function Cr(n) {
            var t = typeof n;
            return "number" == t || "boolean" == t || "string" == t && "__proto__" !== n || null == n
        }

        function Ur(n) {
            var t = xr(n), r = yn[t];
            return typeof r == "function" && t in An.prototype ? n === r ? true : (t = Hu(r), !!t && n === t[0]) : false
        }

        function Br(n) {
            var t = n && n.constructor;
            return n === (typeof t == "function" && t.prototype || uu)
        }

        function zr(n, t, r, e, u, o) {
            return ye(n) && ye(t) && (o.set(t, n), At(n, t, Z, zr, o)), n
        }

        function Lr(n, t) {
            return 1 == t.length ? n : Be(n, Bt(t, 0, -1));
        }

        function $r(n) {
            var t = [];
            return Ue(n).replace(en, function (n, r, e, u) {
                t.push(e ? u.replace(ln, "$1") : r || n)
            }), t
        }

        function Fr(n) {
            return pe(n) ? n : []
        }

        function Mr(n) {
            return typeof n == "function" ? n : Ke
        }

        function Nr(n) {
            if (n instanceof An)return n.clone();
            var t = new wn(n.__wrapped__, n.__chain__);
            return t.__actions__ = Vt(n.__actions__), t.__index__ = n.__index__, t.__values__ = n.__values__, t
        }

        function Dr(n, t, r) {
            var e = n ? n.length : 0;
            return e ? (t = r || t === Z ? 1 : Re(t), Bt(n, 0 > t ? 0 : t, e)) : []
        }

        function Zr(n, t, r) {
            var e = n ? n.length : 0;
            return e ? (t = r || t === Z ? 1 : Re(t), t = e - t, Bt(n, 0, 0 > t ? 0 : t)) : []
        }

        function qr(n) {
            return n ? n[0] : Z
        }

        function Pr(n) {
            var t = n ? n.length : 0;
            return t ? n[t - 1] : Z
        }

        function Tr(n, t) {
            return n && n.length && t && t.length ? St(n, t) : n
        }

        function Kr(n) {
            return n ? Cu.call(n) : n
        }

        function Gr(n) {
            if (!n || !n.length)return [];
            var t = 0;
            return n = i(n, function (n) {
                return pe(n) ? (t = Iu(n.length, t), true) : void 0
            }), m(t, function (t) {
                return a(n, It(t))
            })
        }

        function Vr(n, t) {
            if (!n || !n.length)return [];
            var e = Gr(n);
            return null == t ? e : a(e, function (n) {
                return r(t, Z, n)
            })
        }

        function Jr(n) {
            return n = yn(n), n.__chain__ = true, n
        }

        function Yr(n, t) {
            return t(n)
        }

        function Hr() {
            return this
        }

        function Qr(n, t) {
            return typeof t == "function" && Lo(n) ? u(n, t) : Tu(n, Mr(t))
        }

        function Xr(n, t) {
            var r;
            if (typeof t == "function" && Lo(n)) {
                for (r = n.length; r-- && false !== t(n[r], r, n););
                r = n
            } else r = Ku(n, Mr(t));
            return r
        }

        function ne(n, t) {
            return (Lo(n) ? a : mt)(n, mr(t, 3))
        }

        function te(n, t) {
            var r = -1, e = Ie(n), u = e.length, o = u - 1;
            for (t = Xn(Re(t), 0, u); ++r < t;) {
                var u = Ct(r, o), i = e[u];
                e[u] = e[r], e[r] = i
            }
            return e.length = t, e
        }

        function re(n, t, r) {
            return t = r ? Z : t, t = n && null == t ? n.length : t, vr(n, 128, Z, Z, Z, Z, t);
        }

        function ee(n, t) {
            var r;
            if (typeof t != "function")throw new ru("Expected a function");
            return n = Re(n), function () {
                return 0 < --n && (r = t.apply(this, arguments)), 1 >= n && (t = Z), r
            }
        }

        function ue(n, t, r) {
            return t = r ? Z : t, n = vr(n, 8, Z, Z, Z, Z, Z, t), n.placeholder = yn.placeholder || ue.placeholder, n
        }

        function oe(n, t, r) {
            return t = r ? Z : t, n = vr(n, 16, Z, Z, Z, Z, Z, t), n.placeholder = yn.placeholder || oe.placeholder, n
        }

        function ie(n, t, r) {
            function e() {
                p && gu(p), a && gu(a), g = 0, c = a = h = p = _ = Z
            }

            function u(t, r) {
                r && gu(r), a = p = _ = Z, t && (g = ko(), l = n.apply(h, c), p || a || (c = h = Z));
            }

            function o() {
                var n = t - (ko() - s);
                0 >= n || n > t ? u(_, a) : p = mu(o, n)
            }

            function i() {
                u(y, p)
            }

            function f() {
                if (c = arguments, s = ko(), h = this, _ = y && (p || !v), false === d)var r = v && !p; else {
                    a || v || (g = s);
                    var e = d - (s - g), u = 0 >= e || e > d;
                    u ? (a && (a = gu(a)), g = s, l = n.apply(h, c)) : a || (a = mu(i, e))
                }
                return u && p ? p = gu(p) : p || t === d || (p = mu(o, t)), r && (u = true, l = n.apply(h, c)), !u || p || a || (c = h = Z), l
            }

            var c, a, l, s, h, p, _, g = 0, v = false, d = false, y = true;
            if (typeof n != "function")throw new ru("Expected a function");
            return t = We(t) || 0, ye(r) && (v = !!r.leading, d = "maxWait" in r && Iu(We(r.maxWait) || 0, t), y = "trailing" in r ? !!r.trailing : y), f.cancel = e, f.flush = function () {
                return (p && _ || a && y) && (l = n.apply(h, c)), e(), l
            }, f
        }

        function fe(n, t) {
            function r() {
                var e = arguments, u = t ? t.apply(this, e) : e[0], o = r.cache;
                return o.has(u) ? o.get(u) : (e = n.apply(this, e), r.cache = o.set(u, e), e)
            }

            if (typeof n != "function" || t && typeof t != "function")throw new ru("Expected a function");
            return r.cache = new fe.Cache, r
        }

        function ce(n, t) {
            if (typeof n != "function")throw new ru("Expected a function");
            return t = Iu(t === Z ? n.length - 1 : Re(t), 0), function () {
                for (var e = arguments, u = -1, o = Iu(e.length - t, 0), i = Array(o); ++u < o;)i[u] = e[t + u];
                switch (t) {
                    case 0:
                        return n.call(this, i);
                    case 1:
                        return n.call(this, e[0], i);
                    case 2:
                        return n.call(this, e[0], e[1], i)
                }
                for (o = Array(t + 1), u = -1; ++u < t;)o[u] = e[u];
                return o[t] = i, r(n, this, o)
            }
        }

        function ae(n, t) {
            return n === t || n !== n && t !== t
        }

        function le(n, t) {
            return n > t
        }

        function se(n) {
            return pe(n) && iu.call(n, "callee") && (!xu.call(n, "callee") || "[object Arguments]" == au.call(n))
        }

        function he(n) {
            return null != n && !(typeof n == "function" && ge(n)) && de(Qu(n))
        }

        function pe(n) {
            return be(n) && he(n)
        }

        function _e(n) {
            return be(n) && typeof n.message == "string" && "[object Error]" == au.call(n);
        }

        function ge(n) {
            return n = ye(n) ? au.call(n) : "", "[object Function]" == n || "[object GeneratorFunction]" == n
        }

        function ve(n) {
            return typeof n == "number" && n == Re(n)
        }

        function de(n) {
            return typeof n == "number" && n > -1 && 0 == n % 1 && 9007199254740991 >= n
        }

        function ye(n) {
            var t = typeof n;
            return !!n && ("object" == t || "function" == t)
        }

        function be(n) {
            return !!n && typeof n == "object"
        }

        function xe(n) {
            return null == n ? false : ge(n) ? su.test(ou.call(n)) : be(n) && (U(n) ? su : vn).test(n)
        }

        function me(n) {
            return typeof n == "number" || be(n) && "[object Number]" == au.call(n);
        }

        function je(n) {
            if (!be(n) || "[object Object]" != au.call(n) || U(n))return false;
            var t = uu;
            return typeof n.constructor == "function" && (t = du(n)), null === t ? true : (n = t.constructor, typeof n == "function" && n instanceof n && ou.call(n) == cu)
        }

        function we(n) {
            return ye(n) && "[object RegExp]" == au.call(n)
        }

        function Ae(n) {
            return typeof n == "string" || !Lo(n) && be(n) && "[object String]" == au.call(n)
        }

        function Oe(n) {
            return typeof n == "symbol" || be(n) && "[object Symbol]" == au.call(n)
        }

        function Ee(n) {
            return be(n) && de(n.length) && !!Cn[au.call(n)]
        }

        function ke(n, t) {
            return t > n
        }

        function Ie(n) {
            if (!n)return [];
            if (he(n))return Ae(n) ? n.match(En) : Vt(n);
            if (bu && n[bu])return z(n[bu]());
            var t = Ar(n);
            return ("[object Map]" == t ? L : "[object Set]" == t ? F : Ne)(n)
        }

        function Re(n) {
            if (!n)return 0 === n ? n : 0;
            if (n = We(n), n === q || n === -q)return 1.7976931348623157e308 * (0 > n ? -1 : 1);
            var t = n % 1;
            return n === n ? t ? n - t : n : 0
        }

        function Se(n) {
            return n ? Xn(Re(n), 0, 4294967295) : 0
        }

        function We(n) {
            if (ye(n) && (n = ge(n.valueOf) ? n.valueOf() : n, n = ye(n) ? n + "" : n), typeof n != "string")return 0 === n ? n : +n;
            n = n.replace(fn, "");
            var t = gn.test(n);
            return t || dn.test(n) ? Nn(n.slice(2), t ? 2 : 8) : _n.test(n) ? P : +n
        }

        function Ce(n) {
            return Jt(n, Fe(n))
        }

        function Ue(n) {
            if (typeof n == "string")return n;
            if (null == n)return "";
            if (Oe(n))return pu ? Zu.call(n) : "";
            var t = n + "";
            return "0" == t && 1 / n == -q ? "-0" : t
        }

        function Be(n, t, r) {
            return n = null == n ? Z : st(n, t), n === Z ? r : n
        }

        function ze(n, t) {
            return Or(n, t, ht)
        }

        function Le(n, t) {
            return Or(n, t, pt)
        }

        function $e(n) {
            var t = Br(n);
            if (!t && !he(n))return ku(Object(n));
            var r, e = Rr(n), u = !!e, e = e || [], o = e.length;
            for (r in n)!ht(n, r) || u && ("length" == r || B(r, o)) || t && "constructor" == r || e.push(r);
            return e
        }

        function Fe(n) {
            for (var t = -1, r = Br(n), e = xt(n), u = e.length, o = Rr(n), i = !!o, o = o || [], f = o.length; ++t < u;) {
                var c = e[t];
                i && ("length" == c || B(c, f)) || "constructor" == c && (r || !iu.call(n, c)) || o.push(c)
            }
            return o
        }

        function Me(n) {
            return j(n, $e(n))
        }

        function Ne(n) {
            return n ? A(n, $e(n)) : []
        }

        function De(n) {
            return ti(Ue(n).toLowerCase())
        }

        function Ze(n) {
            return (n = Ue(n)) && n.replace(bn, R).replace(On, "")
        }

        function qe(n, t) {
            n = Ue(n), t = Re(t);
            var r = "";
            if (!n || 1 > t || t > 9007199254740991)return r;
            do t % 2 && (r += n), t = Au(t / 2), n += n; while (t);
            return r;
        }

        function Pe(n, t, r) {
            return n = Ue(n), t = r ? Z : t, t === Z && (t = Sn.test(n) ? Rn : In), n.match(t) || []
        }

        function Te(n) {
            return function () {
                return n
            }
        }

        function Ke(n) {
            return n
        }

        function Ge(n) {
            return bt(typeof n == "function" ? n : nt(n, true))
        }

        function Ve(n, t, r) {
            var e = $e(t), o = lt(t, e);
            null != r || ye(t) && (o.length || !e.length) || (r = t, t = n, n = this, o = lt(t, $e(t)));
            var i = ye(r) && "chain" in r ? r.chain : true, f = ge(n);
            return u(o, function (r) {
                var e = t[r];
                n[r] = e, f && (n.prototype[r] = function () {
                    var t = this.__chain__;
                    if (i || t) {
                        var r = n(this.__wrapped__);
                        return (r.__actions__ = Vt(this.__actions__)).push({
                            func: e,
                            args: arguments,
                            thisArg: n
                        }), r.__chain__ = t, r
                    }
                    return e.apply(n, l([this.value()], arguments))
                })
            }), n
        }

        function Je() {
        }

        function Ye(n) {
            return Wr(n) ? It(n) : Rt(n)
        }

        function He(n) {
            return n && n.length ? x(n, Ke) : 0
        }

        k = k ? Vn.defaults({}, k, Vn.pick(Gn, Wn)) : Gn;
        var Qe = k.Date, Xe = k.Error, nu = k.Math, tu = k.RegExp, ru = k.TypeError, eu = k.Array.prototype, uu = k.Object.prototype, ou = k.Function.prototype.toString, iu = uu.hasOwnProperty, fu = 0, cu = ou.call(Object), au = uu.toString, lu = Gn._, su = tu("^" + ou.call(iu).replace(un, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), hu = k.f, pu = k.Symbol, _u = k.Uint8Array, gu = k.clearTimeout, vu = hu ? hu.g : Z, du = Object.getPrototypeOf, yu = Object.getOwnPropertySymbols, bu = typeof(bu = pu && pu.iterator) == "symbol" ? bu : Z, xu = uu.propertyIsEnumerable, mu = k.setTimeout, ju = eu.splice, wu = nu.ceil, Au = nu.floor, Ou = k.isFinite, Eu = eu.join, ku = Object.keys, Iu = nu.max, Ru = nu.min, Su = k.parseInt, Wu = nu.random, Cu = eu.reverse, Uu = wr(k, "Map"), Bu = wr(k, "Set"), zu = wr(k, "WeakMap"), Lu = wr(Object, "create"), $u = zu && new zu, Fu = Uu ? ou.call(Uu) : "", Mu = Bu ? ou.call(Bu) : "", Nu = pu ? pu.prototype : Z, Du = pu ? Nu.valueOf : Z, Zu = pu ? Nu.toString : Z, qu = {};
        yn.templateSettings = {escape: Q, evaluate: X, interpolate: nn, variable: "", imports: {_: yn}};
        var Pu = function () {
            function n() {
            }

            return function (t) {
                if (ye(t)) {
                    n.prototype = t;
                    var r = new n;
                    n.prototype = Z
                }
                return r || {}
            }
        }(), Tu = nr(ct), Ku = nr(at, true), Gu = tr(), Vu = tr(true);
        vu && !xu.call({valueOf: 1}, "valueOf") && (xt = function (n) {
            return z(vu(n))
        });
        var Ju = $u ? function (n, t) {
            return $u.set(n, t), n
        } : Ke, Yu = Bu && 2 === new Bu([1, 2]).size ? function (n) {
            return new Bu(n)
        } : Je, Hu = $u ? function (n) {
            return $u.get(n)
        } : Je, Qu = It("length"), Xu = yu || function () {
                return [];
            };
        (Uu && "[object Map]" != Ar(new Uu) || Bu && "[object Set]" != Ar(new Bu)) && (Ar = function (n) {
            var t = au.call(n);
            if (n = "[object Object]" == t ? n.constructor : null, n = typeof n == "function" ? ou.call(n) : "") {
                if (n == Fu)return "[object Map]";
                if (n == Mu)return "[object Set]"
            }
            return t
        });
        var no = function () {
            var n = 0, t = 0;
            return function (r, e) {
                var u = ko(), o = 16 - (u - t);
                if (t = u, o > 0) {
                    if (150 <= ++n)return r
                } else n = 0;
                return Ju(r, e)
            }
        }(), to = ce(function (n, t) {
            Lo(n) || (n = null == n ? [] : [Object(n)]), t = it(t);
            for (var r = n, e = t, u = -1, o = r.length, i = -1, f = e.length, c = Array(o + f); ++u < o;)c[u] = r[u];
            for (; ++i < f;)c[u++] = e[i];
            return c
        }), ro = ce(function (n, t) {
            return pe(n) ? et(n, it(t, false, true)) : []
        }), eo = ce(function (n, t) {
            var r = Pr(t);
            return pe(r) && (r = Z), pe(n) ? et(n, it(t, false, true), mr(r)) : []
        }), uo = ce(function (n, t) {
            var r = Pr(t);
            return pe(r) && (r = Z), pe(n) ? et(n, it(t, false, true), Z, r) : []
        }), oo = ce(function (n) {
            var t = a(n, Fr);
            return t.length && t[0] === n[0] ? _t(t) : []
        }), io = ce(function (n) {
            var t = Pr(n), r = a(n, Fr);
            return t === Pr(r) ? t = Z : r.pop(), r.length && r[0] === n[0] ? _t(r, mr(t)) : []
        }), fo = ce(function (n) {
            var t = Pr(n), r = a(n, Fr);
            return t === Pr(r) ? t = Z : r.pop(), r.length && r[0] === n[0] ? _t(r, Z, t) : []
        }), co = ce(Tr), ao = ce(function (n, t) {
            t = a(it(t), String);
            var r = Qn(n, t);
            return Wt(n, t.sort(I)), r
        }), lo = ce(function (n) {
            return Nt(it(n, false, true))
        }), so = ce(function (n) {
            var t = Pr(n);
            return pe(t) && (t = Z), Nt(it(n, false, true), mr(t))
        }), ho = ce(function (n) {
            var t = Pr(n);
            return pe(t) && (t = Z), Nt(it(n, false, true), Z, t)
        }), po = ce(function (n, t) {
            return pe(n) ? et(n, t) : []
        }), _o = ce(function (n) {
            return qt(i(n, pe))
        }), go = ce(function (n) {
            var t = Pr(n);
            return pe(t) && (t = Z), qt(i(n, pe), mr(t))
        }), vo = ce(function (n) {
            var t = Pr(n);
            return pe(t) && (t = Z), qt(i(n, pe), Z, t)
        }), yo = ce(Gr), bo = ce(function (n) {
            var t = n.length, t = t > 1 ? n[t - 1] : Z, t = typeof t == "function" ? (n.pop(), t) : Z;
            return Vr(n, t)
        }), xo = ce(function (n) {
            function t(t) {
                return Qn(t, n)
            }

            n = it(n);
            var r = n.length, e = r ? n[0] : 0, u = this.__wrapped__;
            return 1 >= r && !this.__actions__.length && u instanceof An && B(e) ? (u = u.slice(e, +e + (r ? 1 : 0)), u.__actions__.push({
                func: Yr,
                args: [t],
                thisArg: Z
            }), new wn(u, this.__chain__).thru(function (n) {
                return r && !n.length && n.push(Z), n
            })) : this.thru(t)
        }), mo = Qt(function (n, t, r) {
            iu.call(n, r) ? ++n[r] : n[r] = 1;
        }), jo = Qt(function (n, t, r) {
            iu.call(n, r) ? n[r].push(t) : n[r] = [t]
        }), wo = ce(function (n, t, e) {
            var u = -1, o = typeof t == "function", i = Wr(t), f = he(n) ? Array(n.length) : [];
            return Tu(n, function (n) {
                var c = o ? t : i && null != n ? n[t] : Z;
                f[++u] = c ? r(c, n, e) : vt(n, t, e)
            }), f
        }), Ao = Qt(function (n, t, r) {
            n[r] = t
        }), Oo = Qt(function (n, t, r) {
            n[r ? 0 : 1].push(t)
        }, function () {
            return [[], []]
        }), Eo = ce(function (n, t) {
            if (null == n)return [];
            var r = t.length;
            return r > 1 && Sr(n, t[0], t[1]) ? t = [] : r > 2 && Sr(t[0], t[1], t[2]) && (t.length = 1), Ot(n, it(t), [])
        }), ko = Qe.now, Io = ce(function (n, t, r) {
            var e = 1;
            if (r.length)var u = $(r, yn.placeholder || Io.placeholder), e = 32 | e;
            return vr(n, e, t, r, u)
        }), Ro = ce(function (n, t, r) {
            var e = 3;
            if (r.length)var u = $(r, yn.placeholder || Ro.placeholder), e = 32 | e;
            return vr(t, e, n, r, u)
        }), So = ce(function (n, t) {
            return rt(n, 1, t)
        }), Wo = ce(function (n, t, r) {
            return rt(n, We(t) || 0, r)
        }), Co = ce(function (n, t) {
            t = a(it(t), mr());
            var e = t.length;
            return ce(function (u) {
                for (var o = -1, i = Ru(u.length, e); ++o < i;)u[o] = t[o].call(this, u[o]);
                return r(n, this, u)
            })
        }), Uo = ce(function (n, t) {
            var r = $(t, yn.placeholder || Uo.placeholder);
            return vr(n, 32, Z, t, r)
        }), Bo = ce(function (n, t) {
            var r = $(t, yn.placeholder || Bo.placeholder);
            return vr(n, 64, Z, t, r)
        }), zo = ce(function (n, t) {
            return vr(n, 256, Z, Z, Z, it(t))
        }), Lo = Array.isArray, $o = Xt(function (n, t) {
            Jt(t, $e(t), n)
        }), Fo = Xt(function (n, t) {
            Jt(t, Fe(t), n)
        }), Mo = Xt(function (n, t, r, e) {
            Yt(t, Fe(t), n, e)
        }), No = Xt(function (n, t, r, e) {
            Yt(t, $e(t), n, e)
        }), Do = ce(function (n, t) {
            return Qn(n, it(t))
        }), Zo = ce(function (n) {
            return n.push(Z, Tn), r(Mo, Z, n)
        }), qo = ce(function (n) {
            return n.push(Z, zr), r(Vo, Z, n)
        }), Po = ar(function (n, t, r) {
            n[t] = r;
        }, Te(Ke)), To = ar(function (n, t, r) {
            iu.call(n, t) ? n[t].push(r) : n[t] = [r]
        }, mr), Ko = ce(vt), Go = Xt(function (n, t, r) {
            At(n, t, r)
        }), Vo = Xt(function (n, t, r, e) {
            At(n, t, r, e)
        }), Jo = ce(function (n, t) {
            return null == n ? {} : (t = a(it(t), String), Et(n, et(Fe(n), t)))
        }), Yo = ce(function (n, t) {
            return null == n ? {} : Et(n, it(t))
        }), Ho = ur(function (n, t, r) {
            return t = t.toLowerCase(), n + (r ? De(t) : t)
        }), Qo = ur(function (n, t, r) {
            return n + (r ? "-" : "") + t.toLowerCase()
        }), Xo = ur(function (n, t, r) {
            return n + (r ? " " : "") + t.toLowerCase()
        }), ni = er("toLowerCase"), ti = er("toUpperCase"), ri = ur(function (n, t, r) {
            return n + (r ? "_" : "") + t.toLowerCase()
        }), ei = ur(function (n, t, r) {
            return n + (r ? " " : "") + De(t)
        }), ui = ur(function (n, t, r) {
            return n + (r ? " " : "") + t.toUpperCase()
        }), oi = ce(function (n, t) {
            try {
                return r(n, Z, t)
            } catch (e) {
                return ye(e) ? e : new Xe(e)
            }
        }), ii = ce(function (n, t) {
            return u(it(t), function (t) {
                n[t] = Io(n[t], n)
            }), n
        }), fi = fr(), ci = fr(true), ai = ce(function (n, t) {
            return function (r) {
                return vt(r, n, t)
            }
        }), li = ce(function (n, t) {
            return function (r) {
                return vt(n, r, t)
            }
        }), si = lr(a), hi = lr(o), pi = lr(p), _i = pr(), gi = pr(true), vi = gr("ceil"), di = gr("floor"), yi = gr("round");
        return yn.prototype = jn.prototype, wn.prototype = Pu(jn.prototype), wn.prototype.constructor = wn, An.prototype = Pu(jn.prototype), An.prototype.constructor = An, Bn.prototype = Lu ? Lu(null) : uu, zn.prototype.clear = function () {
            this.__data__ = {hash: new Bn, map: Uu ? new Uu : [], string: new Bn}
        }, zn.prototype["delete"] = function (n) {
            var t = this.__data__;
            return Cr(n) ? (t = typeof n == "string" ? t.string : t.hash, n = (Lu ? t[n] !== Z : iu.call(t, n)) && delete t[n]) : n = Uu ? t.map["delete"](n) : Dn(t.map, n), n
        }, zn.prototype.get = function (n) {
            var t = this.__data__;
            return Cr(n) ? (t = typeof n == "string" ? t.string : t.hash, Lu ? (n = t[n], n = "__lodash_hash_undefined__" === n ? Z : n) : n = iu.call(t, n) ? t[n] : Z) : n = Uu ? t.map.get(n) : Zn(t.map, n), n
        }, zn.prototype.has = function (n) {
            var t = this.__data__;
            return Cr(n) ? (t = typeof n == "string" ? t.string : t.hash, n = Lu ? t[n] !== Z : iu.call(t, n)) : n = Uu ? t.map.has(n) : -1 < qn(t.map, n), n
        }, zn.prototype.set = function (n, t) {
            var r = this.__data__;
            return Cr(n) ? (typeof n == "string" ? r.string : r.hash)[n] = Lu && t === Z ? "__lodash_hash_undefined__" : t : Uu ? r.map.set(n, t) : Pn(r.map, n, t), this;
        }, Ln.prototype.push = function (n) {
            var t = this.__data__;
            Cr(n) ? (t = t.__data__, (typeof n == "string" ? t.string : t.hash)[n] = "__lodash_hash_undefined__") : t.set(n, "__lodash_hash_undefined__")
        }, Fn.prototype.clear = function () {
            this.__data__ = {array: [], map: null}
        }, Fn.prototype["delete"] = function (n) {
            var t = this.__data__, r = t.array;
            return r ? Dn(r, n) : t.map["delete"](n)
        }, Fn.prototype.get = function (n) {
            var t = this.__data__, r = t.array;
            return r ? Zn(r, n) : t.map.get(n)
        }, Fn.prototype.has = function (n) {
            var t = this.__data__, r = t.array;
            return r ? -1 < qn(r, n) : t.map.has(n);
        }, Fn.prototype.set = function (n, t) {
            var r = this.__data__, e = r.array;
            return e && (199 > e.length ? Pn(e, n, t) : (r.array = null, r.map = new zn(e))), (r = r.map) && r.set(n, t), this
        }, fe.Cache = zn, yn.after = function (n, t) {
            if (typeof t != "function")throw new ru("Expected a function");
            return n = Re(n), function () {
                return 1 > --n ? t.apply(this, arguments) : void 0
            }
        }, yn.ary = re, yn.assign = $o, yn.assignIn = Fo, yn.assignInWith = Mo, yn.assignWith = No, yn.at = Do, yn.before = ee, yn.bind = Io, yn.bindAll = ii, yn.bindKey = Ro, yn.chain = Jr, yn.chunk = function (n, t) {
            t = Iu(Re(t), 0);
            var r = n ? n.length : 0;
            if (!r || 1 > t)return [];
            for (var e = 0, u = -1, o = Array(wu(r / t)); r > e;)o[++u] = Bt(n, e, e += t);
            return o
        }, yn.compact = function (n) {
            for (var t = -1, r = n ? n.length : 0, e = -1, u = []; ++t < r;) {
                var o = n[t];
                o && (u[++e] = o)
            }
            return u
        }, yn.concat = to, yn.cond = function (n) {
            var t = n ? n.length : 0, e = mr();
            return n = t ? a(n, function (n) {
                if ("function" != typeof n[1])throw new ru("Expected a function");
                return [e(n[0]), n[1]]
            }) : [], ce(function (e) {
                for (var u = -1; ++u < t;) {
                    var o = n[u];
                    if (r(o[0], this, e))return r(o[1], this, e)
                }
            })
        }, yn.conforms = function (n) {
            return tt(nt(n, true))
        }, yn.constant = Te, yn.countBy = mo, yn.create = function (n, t) {
            var r = Pu(n);
            return t ? Hn(r, t) : r
        }, yn.curry = ue, yn.curryRight = oe, yn.debounce = ie, yn.defaults = Zo, yn.defaultsDeep = qo, yn.defer = So, yn.delay = Wo, yn.difference = ro, yn.differenceBy = eo, yn.differenceWith = uo, yn.drop = Dr, yn.dropRight = Zr, yn.dropRightWhile = function (n, t) {
            return n && n.length ? Dt(n, mr(t, 3), true, true) : []
        }, yn.dropWhile = function (n, t) {
            return n && n.length ? Dt(n, mr(t, 3), true) : []
        }, yn.fill = function (n, t, r, e) {
            var u = n ? n.length : 0;
            if (!u)return [];
            for (r && typeof r != "number" && Sr(n, t, r) && (r = 0, e = u), u = n.length, r = Re(r), 0 > r && (r = -r > u ? 0 : u + r), e = e === Z || e > u ? u : Re(e), 0 > e && (e += u), e = r > e ? 0 : Se(e); e > r;)n[r++] = t;
            return n
        }, yn.filter = function (n, t) {
            return (Lo(n) ? i : ot)(n, mr(t, 3))
        }, yn.flatMap = function (n, t) {
            return it(ne(n, t))
        }, yn.flatten = function (n) {
            return n && n.length ? it(n) : []
        }, yn.flattenDeep = function (n) {
            return n && n.length ? it(n, true) : []
        }, yn.flip = function (n) {
            return vr(n, 512)
        }, yn.flow = fi, yn.flowRight = ci, yn.fromPairs = function (n) {
            for (var t = -1, r = n ? n.length : 0, e = {}; ++t < r;) {
                var u = n[t];
                e[u[0]] = u[1]
            }
            return e
        }, yn.functions = function (n) {
            return null == n ? [] : lt(n, $e(n))
        }, yn.functionsIn = function (n) {
            return null == n ? [] : lt(n, Fe(n))
        }, yn.groupBy = jo, yn.initial = function (n) {
            return Zr(n, 1)
        }, yn.intersection = oo, yn.intersectionBy = io, yn.intersectionWith = fo, yn.invert = Po, yn.invertBy = To, yn.invokeMap = wo, yn.iteratee = Ge, yn.keyBy = Ao, yn.keys = $e, yn.keysIn = Fe, yn.map = ne, yn.mapKeys = function (n, t) {
            var r = {};
            return t = mr(t, 3), ct(n, function (n, e, u) {
                r[t(n, e, u)] = n
            }), r
        }, yn.mapValues = function (n, t) {
            var r = {};
            return t = mr(t, 3), ct(n, function (n, e, u) {
                r[e] = t(n, e, u)
            }), r
        }, yn.matches = function (n) {
            return jt(nt(n, true))
        }, yn.matchesProperty = function (n, t) {
            return wt(n, nt(t, true))
        }, yn.memoize = fe, yn.merge = Go, yn.mergeWith = Vo, yn.method = ai, yn.methodOf = li, yn.mixin = Ve, yn.negate = function (n) {
            if (typeof n != "function")throw new ru("Expected a function");
            return function () {
                return !n.apply(this, arguments)
            }
        }, yn.nthArg = function (n) {
            return n = Re(n), function () {
                return arguments[n]
            }
        }, yn.omit = Jo, yn.omitBy = function (n, t) {
            return t = mr(t, 2), kt(n, function (n, r) {
                return !t(n, r)
            })
        }, yn.once = function (n) {
            return ee(2, n)
        }, yn.orderBy = function (n, t, r, e) {
            return null == n ? [] : (Lo(t) || (t = null == t ? [] : [t]), r = e ? Z : r, Lo(r) || (r = null == r ? [] : [r]), Ot(n, t, r))
        }, yn.over = si, yn.overArgs = Co, yn.overEvery = hi, yn.overSome = pi, yn.partial = Uo, yn.partialRight = Bo, yn.partition = Oo, yn.pick = Yo, yn.pickBy = function (n, t) {
            return null == n ? {} : kt(n, mr(t, 2))
        },yn.property = Ye,yn.propertyOf = function (n) {
            return function (t) {
                return null == n ? Z : st(n, t)
            }
        },yn.pull = co,yn.pullAll = Tr,yn.pullAllBy = function (n, t, r) {
            return n && n.length && t && t.length ? St(n, t, mr(r)) : n
        },yn.pullAt = ao,yn.range = _i,yn.rangeRight = gi,yn.rearg = zo,yn.reject = function (n, t) {
            var r = Lo(n) ? i : ot;
            return t = mr(t, 3), r(n, function (n, r, e) {
                return !t(n, r, e)
            })
        },yn.remove = function (n, t) {
            var r = [];
            if (!n || !n.length)return r;
            var e = -1, u = [], o = n.length;
            for (t = mr(t, 3); ++e < o;) {
                var i = n[e];
                t(i, e, n) && (r.push(i), u.push(e))
            }
            return Wt(n, u), r
        },yn.rest = ce,yn.reverse = Kr,yn.sampleSize = te,yn.set = function (n, t, r) {
            return null == n ? n : Ut(n, t, r)
        },yn.setWith = function (n, t, r, e) {
            return e = typeof e == "function" ? e : Z, null == n ? n : Ut(n, t, r, e)
        },yn.shuffle = function (n) {
            return te(n, 4294967295)
        },yn.slice = function (n, t, r) {
            var e = n ? n.length : 0;
            return e ? (r && typeof r != "number" && Sr(n, t, r) ? (t = 0, r = e) : (t = null == t ? 0 : Re(t), r = r === Z ? e : Re(r)), Bt(n, t, r)) : []
        },yn.sortBy = Eo,yn.sortedUniq = function (n) {
            return n && n.length ? Ft(n) : []
        },yn.sortedUniqBy = function (n, t) {
            return n && n.length ? Ft(n, mr(t)) : []
        },yn.split = function (n, t, r) {
            return Ue(n).split(t, r)
        },yn.spread = function (n, t) {
            if (typeof n != "function")throw new ru("Expected a function");
            return t = t === Z ? 0 : Iu(Re(t), 0), ce(function (e) {
                var u = e[t];
                return e = e.slice(0, t), u && l(e, u), r(n, this, e)
            })
        },yn.tail = function (n) {
            return Dr(n, 1)
        },yn.take = function (n, t, r) {
            return n && n.length ? (t = r || t === Z ? 1 : Re(t), Bt(n, 0, 0 > t ? 0 : t)) : []
        },yn.takeRight = function (n, t, r) {
            var e = n ? n.length : 0;
            return e ? (t = r || t === Z ? 1 : Re(t), t = e - t, Bt(n, 0 > t ? 0 : t, e)) : []
        },yn.takeRightWhile = function (n, t) {
            return n && n.length ? Dt(n, mr(t, 3), false, true) : []
        },yn.takeWhile = function (n, t) {
            return n && n.length ? Dt(n, mr(t, 3)) : []
        },yn.tap = function (n, t) {
            return t(n), n
        },yn.throttle = function (n, t, r) {
            var e = true, u = true;
            if (typeof n != "function")throw new ru("Expected a function");
            return ye(r) && (e = "leading" in r ? !!r.leading : e, u = "trailing" in r ? !!r.trailing : u), ie(n, t, {
                leading: e,
                maxWait: t,
                trailing: u
            })
        },yn.thru = Yr,yn.toArray = Ie,yn.toPairs = Me,yn.toPairsIn = function (n) {
            return j(n, Fe(n))
        },yn.toPath = function (n) {
            return Lo(n) ? a(n, String) : $r(n)
        },yn.toPlainObject = Ce,yn.transform = function (n, t, r) {
            var e = Lo(n) || Ee(n);
            if (t = mr(t, 4), null == r)if (e || ye(n)) {
                var o = n.constructor;
                r = e ? Lo(n) ? new o : [] : Pu(ge(o) ? o.prototype : Z)
            } else r = {};
            return (e ? u : ct)(n, function (n, e, u) {
                return t(r, n, e, u)
            }), r
        },yn.unary = function (n) {
            return re(n, 1)
        },yn.union = lo,yn.unionBy = so,yn.unionWith = ho,yn.uniq = function (n) {
            return n && n.length ? Nt(n) : []
        },yn.uniqBy = function (n, t) {
            return n && n.length ? Nt(n, mr(t)) : []
        },yn.uniqWith = function (n, t) {
            return n && n.length ? Nt(n, Z, t) : []
        },yn.unset = function (n, t) {
            var r;
            if (null == n)r = true; else {
                r = n;
                var e = t, e = Wr(e, r) ? [e + ""] : Mt(e);
                r = Lr(r, e), e = Pr(e), r = null != r && ze(r, e) ? delete r[e] : true
            }
            return r
        },yn.unzip = Gr,yn.unzipWith = Vr,yn.values = Ne,yn.valuesIn = function (n) {
            return null == n ? A(n, Fe(n)) : []
        },yn.without = po,yn.words = Pe,yn.wrap = function (n, t) {
            return t = null == t ? Ke : t, Uo(t, n);
        },yn.xor = _o,yn.xorBy = go,yn.xorWith = vo,yn.zip = yo,yn.zipObject = function (n, t) {
            return Pt(n || [], t || [], Jn)
        },yn.zipObjectDeep = function (n, t) {
            return Pt(n || [], t || [], Ut)
        },yn.zipWith = bo,yn.extend = Fo,yn.extendWith = Mo,Ve(yn, yn),yn.add = function (n, t) {
            var r;
            return n !== Z && (r = n), t !== Z && (r = r === Z ? t : r + t), r
        },yn.attempt = oi,yn.camelCase = Ho,yn.capitalize = De,yn.ceil = vi,yn.clamp = function (n, t, r) {
            return r === Z && (r = t, t = Z), r !== Z && (r = We(r), r = r === r ? r : 0), t !== Z && (t = We(t), t = t === t ? t : 0), Xn(We(n), t, r)
        },yn.clone = function (n) {
            return nt(n)
        },yn.cloneDeep = function (n) {
            return nt(n, true)
        },yn.cloneDeepWith = function (n, t) {
            return nt(n, true, t)
        },yn.cloneWith = function (n, t) {
            return nt(n, false, t)
        },yn.deburr = Ze,yn.endsWith = function (n, t, r) {
            n = Ue(n), t = typeof t == "string" ? t : t + "";
            var e = n.length;
            return r = r === Z ? e : Xn(Re(r), 0, e), r -= t.length, r >= 0 && n.indexOf(t, r) == r
        },yn.eq = ae,yn.escape = function (n) {
            return (n = Ue(n)) && H.test(n) ? n.replace(J, S) : n
        },yn.escapeRegExp = function (n) {
            return (n = Ue(n)) && on.test(n) ? n.replace(un, "\\$&") : n
        },yn.every = function (n, t, r) {
            var e = Lo(n) ? o : ut;
            return r && Sr(n, t, r) && (t = Z), e(n, mr(t, 3))
        },yn.find = function (n, t) {
            if (t = mr(t, 3), Lo(n)) {
                var r = v(n, t);
                return r > -1 ? n[r] : Z
            }
            return g(n, t, Tu)
        },yn.findIndex = function (n, t) {
            return n && n.length ? v(n, mr(t, 3)) : -1
        },yn.findKey = function (n, t) {
            return g(n, mr(t, 3), ct, true)
        },yn.findLast = function (n, t) {
            if (t = mr(t, 3), Lo(n)) {
                var r = v(n, t, true);
                return r > -1 ? n[r] : Z
            }
            return g(n, t, Ku)
        },yn.findLastIndex = function (n, t) {
            return n && n.length ? v(n, mr(t, 3), true) : -1
        },yn.findLastKey = function (n, t) {
            return g(n, mr(t, 3), at, true)
        },yn.floor = di,yn.forEach = Qr,yn.forEachRight = Xr,yn.forIn = function (n, t) {
            return null == n ? n : Gu(n, Mr(t), Fe)
        },yn.forInRight = function (n, t) {
            return null == n ? n : Vu(n, Mr(t), Fe)
        },yn.forOwn = function (n, t) {
            return n && ct(n, Mr(t))
        },yn.forOwnRight = function (n, t) {
            return n && at(n, Mr(t))
        },yn.get = Be,yn.gt = le,yn.gte = function (n, t) {
            return n >= t
        },yn.has = ze,yn.hasIn = Le,yn.head = qr,yn.identity = Ke,yn.includes = function (n, t, r, e) {
            return n = he(n) ? n : Ne(n), r = r && !e ? Re(r) : 0, e = n.length, 0 > r && (r = Iu(e + r, 0)), Ae(n) ? e >= r && -1 < n.indexOf(t, r) : !!e && -1 < d(n, t, r)
        },yn.indexOf = function (n, t, r) {
            var e = n ? n.length : 0;
            return e ? (r = Re(r), 0 > r && (r = Iu(e + r, 0)), d(n, t, r)) : -1
        },yn.inRange = function (n, t, r) {
            return t = We(t) || 0, r === Z ? (r = t, t = 0) : r = We(r) || 0, n = We(n), n >= Ru(t, r) && n < Iu(t, r)
        },yn.invoke = Ko,yn.isArguments = se,yn.isArray = Lo,yn.isArrayLike = he,yn.isArrayLikeObject = pe,yn.isBoolean = function (n) {
            return true === n || false === n || be(n) && "[object Boolean]" == au.call(n)
        },yn.isDate = function (n) {
            return be(n) && "[object Date]" == au.call(n)
        },yn.isElement = function (n) {
            return !!n && 1 === n.nodeType && be(n) && !je(n)
        },yn.isEmpty = function (n) {
            if (he(n) && (Lo(n) || Ae(n) || ge(n.splice) || se(n)))return !n.length;
            for (var t in n)if (iu.call(n, t))return false;
            return true
        },yn.isEqual = function (n, t) {
            return dt(n, t)
        },yn.isEqualWith = function (n, t, r) {
            var e = (r = typeof r == "function" ? r : Z) ? r(n, t) : Z;
            return e === Z ? dt(n, t, r) : !!e
        },yn.isError = _e,yn.isFinite = function (n) {
            return typeof n == "number" && Ou(n)
        },yn.isFunction = ge,yn.isInteger = ve,yn.isLength = de,yn.isMatch = function (n, t) {
            return n === t || yt(n, t, jr(t))
        },yn.isMatchWith = function (n, t, r) {
            return r = typeof r == "function" ? r : Z, yt(n, t, jr(t), r)
        },yn.isNaN = function (n) {
            return me(n) && n != +n
        },yn.isNative = xe,yn.isNil = function (n) {
            return null == n
        },yn.isNull = function (n) {
            return null === n
        },yn.isNumber = me,yn.isObject = ye,yn.isObjectLike = be,yn.isPlainObject = je,yn.isRegExp = we,yn.isSafeInteger = function (n) {
            return ve(n) && n >= -9007199254740991 && 9007199254740991 >= n
        },yn.isString = Ae,yn.isSymbol = Oe,yn.isTypedArray = Ee,yn.isUndefined = function (n) {
            return n === Z
        },yn.join = function (n, t) {
            return n ? Eu.call(n, t) : ""
        },yn.kebabCase = Qo,yn.last = Pr,yn.lastIndexOf = function (n, t, r) {
            var e = n ? n.length : 0;
            if (!e)return -1;
            var u = e;
            if (r !== Z && (u = Re(r), u = (0 > u ? Iu(e + u, 0) : Ru(u, e - 1)) + 1), t !== t)return C(n, u, true);
            for (; u--;)if (n[u] === t)return u;
            return -1
        },yn.lowerCase = Xo,yn.lowerFirst = ni,yn.lt = ke,yn.lte = function (n, t) {
            return t >= n
        },yn.max = function (n) {
            return n && n.length ? _(n, Ke, le) : Z
        },yn.maxBy = function (n, t) {
            return n && n.length ? _(n, mr(t), le) : Z
        },yn.mean = function (n) {
            return He(n) / (n ? n.length : 0)
        },yn.min = function (n) {
            return n && n.length ? _(n, Ke, ke) : Z
        },yn.minBy = function (n, t) {
            return n && n.length ? _(n, mr(t), ke) : Z
        },yn.noConflict = function () {
            return Gn._ === this && (Gn._ = lu), this;
        },yn.noop = Je,yn.now = ko,yn.pad = function (n, t, r) {
            n = Ue(n), t = Re(t);
            var e = M(n);
            return t && t > e ? (e = (t - e) / 2, t = Au(e), e = wu(e), sr("", t, r) + n + sr("", e, r)) : n
        },yn.padEnd = function (n, t, r) {
            return n = Ue(n), n + sr(n, t, r)
        },yn.padStart = function (n, t, r) {
            return n = Ue(n), sr(n, t, r) + n
        },yn.parseInt = function (n, t, r) {
            return r || null == t ? t = 0 : t && (t = +t), n = Ue(n).replace(fn, ""), Su(n, t || (pn.test(n) ? 16 : 10))
        },yn.random = function (n, t, r) {
            if (r && typeof r != "boolean" && Sr(n, t, r) && (t = r = Z), r === Z && (typeof t == "boolean" ? (r = t, t = Z) : typeof n == "boolean" && (r = n, n = Z)), n === Z && t === Z ? (n = 0, t = 1) : (n = We(n) || 0, t === Z ? (t = n, n = 0) : t = We(t) || 0), n > t) {
                var e = n;
                n = t, t = e
            }
            return r || n % 1 || t % 1 ? (r = Wu(), Ru(n + r * (t - n + Mn("1e-" + ((r + "").length - 1))), t)) : Ct(n, t)
        },yn.reduce = function (n, t, r) {
            var e = Lo(n) ? s : y, u = 3 > arguments.length;
            return e(n, mr(t, 4), r, u, Tu)
        },yn.reduceRight = function (n, t, r) {
            var e = Lo(n) ? h : y, u = 3 > arguments.length;
            return e(n, mr(t, 4), r, u, Ku)
        },yn.repeat = qe,yn.replace = function () {
            var n = arguments, t = Ue(n[0]);
            return 3 > n.length ? t : t.replace(n[1], n[2])
        },yn.result = function (n, t, r) {
            if (Wr(t, n))e = null == n ? Z : n[t]; else {
                t = Mt(t);
                var e = Be(n, t);
                n = Lr(n, t)
            }
            return e === Z && (e = r), ge(e) ? e.call(n) : e
        },yn.round = yi,yn.runInContext = D,yn.sample = function (n) {
            n = he(n) ? n : Ne(n);
            var t = n.length;
            return t > 0 ? n[Ct(0, t - 1)] : Z
        },yn.size = function (n) {
            if (null == n)return 0;
            if (he(n)) {
                var t = n.length;
                return t && Ae(n) ? M(n) : t
            }
            return $e(n).length
        },yn.snakeCase = ri,yn.some = function (n, t, r) {
            var e = Lo(n) ? p : zt;
            return r && Sr(n, t, r) && (t = Z), e(n, mr(t, 3))
        },yn.sortedIndex = function (n, t) {
            return Lt(n, t)
        },yn.sortedIndexBy = function (n, t, r) {
            return $t(n, t, mr(r))
        },yn.sortedIndexOf = function (n, t) {
            var r = n ? n.length : 0;
            if (r) {
                var e = Lt(n, t);
                if (r > e && ae(n[e], t))return e
            }
            return -1
        },yn.sortedLastIndex = function (n, t) {
            return Lt(n, t, true)
        },yn.sortedLastIndexBy = function (n, t, r) {
            return $t(n, t, mr(r), true)
        },yn.sortedLastIndexOf = function (n, t) {
            if (n && n.length) {
                var r = Lt(n, t, true) - 1;
                if (ae(n[r], t))return r
            }
            return -1
        },yn.startCase = ei,yn.startsWith = function (n, t, r) {
            return n = Ue(n), r = Xn(Re(r), 0, n.length), n.lastIndexOf(t, r) == r
        },yn.subtract = function (n, t) {
            var r;
            return n !== Z && (r = n), t !== Z && (r = r === Z ? t : r - t), r
        },yn.sum = He,yn.sumBy = function (n, t) {
            return n && n.length ? x(n, mr(t)) : 0
        },yn.template = function (n, t, r) {
            var e = yn.templateSettings;
            r && Sr(n, t, r) && (t = Z), n = Ue(n), t = Mo({}, t, e, Tn), r = Mo({}, t.imports, e.imports, Tn);
            var u, o, i = $e(r), f = A(r, i), c = 0;
            r = t.interpolate || xn;
            var a = "__p+='";
            r = tu((t.escape || xn).source + "|" + r.source + "|" + (r === nn ? sn : xn).source + "|" + (t.evaluate || xn).source + "|$", "g");
            var l = "sourceURL" in t ? "//# sourceURL=" + t.sourceURL + "\n" : "";
            if (n.replace(r, function (t, r, e, i, f, l) {
                    return e || (e = i), a += n.slice(c, l).replace(mn, W), r && (u = true, a += "'+__e(" + r + ")+'"), f && (o = true, a += "';" + f + ";\n__p+='"), e && (a += "'+((__t=(" + e + "))==null?'':__t)+'"), c = l + t.length, t
                }), a += "';", (t = t.variable) || (a = "with(obj){" + a + "}"), a = (o ? a.replace(T, "") : a).replace(K, "$1").replace(G, "$1;"), a = "function(" + (t || "obj") + "){" + (t ? "" : "obj||(obj={});") + "var __t,__p=''" + (u ? ",__e=_.escape" : "") + (o ? ",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}" : ";") + a + "return __p}", t = oi(function () {
                    return Function(i, l + "return " + a).apply(Z, f)
                }), t.source = a, _e(t))throw t;
            return t
        },yn.times = function (n, t) {
            if (n = Re(n), 1 > n || n > 9007199254740991)return [];
            var r = 4294967295, e = Ru(n, 4294967295);
            for (t = Mr(t), n -= 4294967295, e = m(e, t); ++r < n;)t(r);
            return e
        },yn.toInteger = Re,yn.toLength = Se,yn.toLower = function (n) {
            return Ue(n).toLowerCase()
        },yn.toNumber = We,yn.toSafeInteger = function (n) {
            return Xn(Re(n), -9007199254740991, 9007199254740991)
        },yn.toString = Ue,yn.toUpper = function (n) {
            return Ue(n).toUpperCase()
        },yn.trim = function (n, t, r) {
            return (n = Ue(n)) ? r || t === Z ? n.replace(fn, "") : (t += "") ? (n = n.match(En), t = t.match(En), n.slice(O(n, t), E(n, t) + 1).join("")) : n : n;
        },yn.trimEnd = function (n, t, r) {
            return (n = Ue(n)) ? r || t === Z ? n.replace(an, "") : (t += "") ? (n = n.match(En), n.slice(0, E(n, t.match(En)) + 1).join("")) : n : n
        },yn.trimStart = function (n, t, r) {
            return (n = Ue(n)) ? r || t === Z ? n.replace(cn, "") : (t += "") ? (n = n.match(En), n.slice(O(n, t.match(En))).join("")) : n : n
        },yn.truncate = function (n, t) {
            var r = 30, e = "...";
            if (ye(t))var u = "separator" in t ? t.separator : u, r = "length" in t ? Re(t.length) : r, e = "omission" in t ? Ue(t.omission) : e;
            n = Ue(n);
            var o = n.length;
            if (kn.test(n))var i = n.match(En), o = i.length;
            if (r >= o)return n;
            if (o = r - M(e), 1 > o)return e;
            if (r = i ? i.slice(0, o).join("") : n.slice(0, o), u === Z)return r + e;
            if (i && (o += r.length - o), we(u)) {
                if (n.slice(o).search(u)) {
                    var f = r;
                    for (u.global || (u = tu(u.source, Ue(hn.exec(u)) + "g")), u.lastIndex = 0; i = u.exec(f);)var c = i.index;
                    r = r.slice(0, c === Z ? o : c)
                }
            } else n.indexOf(u, o) != o && (u = r.lastIndexOf(u), u > -1 && (r = r.slice(0, u)));
            return r + e
        },yn.unescape = function (n) {
            return (n = Ue(n)) && Y.test(n) ? n.replace(V, N) : n
        },yn.uniqueId = function (n) {
            var t = ++fu;
            return Ue(n) + t
        },yn.upperCase = ui,yn.upperFirst = ti,yn.each = Qr,yn.eachRight = Xr,yn.first = qr,Ve(yn, function () {
            var n = {};
            return ct(yn, function (t, r) {
                iu.call(yn.prototype, r) || (n[r] = t)
            }), n
        }(), {chain: false}),yn.VERSION = "4.2.1",u("bind bindKey curry curryRight partial partialRight".split(" "), function (n) {
            yn[n].placeholder = yn
        }),u(["drop", "take"], function (n, t) {
            An.prototype[n] = function (r) {
                var e = this.__filtered__;
                if (e && !t)return new An(this);
                r = r === Z ? 1 : Iu(Re(r), 0);
                var u = this.clone();
                return e ? u.__takeCount__ = Ru(r, u.__takeCount__) : u.__views__.push({
                    size: Ru(r, 4294967295),
                    type: n + (0 > u.__dir__ ? "Right" : "")
                }), u
            }, An.prototype[n + "Right"] = function (t) {
                return this.reverse()[n](t).reverse()
            }
        }),u(["filter", "map", "takeWhile"], function (n, t) {
            var r = t + 1, e = 1 == r || 3 == r;
            An.prototype[n] = function (n) {
                var t = this.clone();
                return t.__iteratees__.push({iteratee: mr(n, 3), type: r}), t.__filtered__ = t.__filtered__ || e, t
            }
        }),u(["head", "last"], function (n, t) {
            var r = "take" + (t ? "Right" : "");
            An.prototype[n] = function () {
                return this[r](1).value()[0]
            }
        }),u(["initial", "tail"], function (n, t) {
            var r = "drop" + (t ? "" : "Right");
            An.prototype[n] = function () {
                return this.__filtered__ ? new An(this) : this[r](1);
            }
        }),An.prototype.compact = function () {
            return this.filter(Ke)
        },An.prototype.find = function (n) {
            return this.filter(n).head()
        },An.prototype.findLast = function (n) {
            return this.reverse().find(n)
        },An.prototype.invokeMap = ce(function (n, t) {
            return typeof n == "function" ? new An(this) : this.map(function (r) {
                return vt(r, n, t)
            })
        }),An.prototype.reject = function (n) {
            return n = mr(n, 3), this.filter(function (t) {
                return !n(t)
            })
        },An.prototype.slice = function (n, t) {
            n = Re(n);
            var r = this;
            return r.__filtered__ && (n > 0 || 0 > t) ? new An(r) : (0 > n ? r = r.takeRight(-n) : n && (r = r.drop(n)), t !== Z && (t = Re(t), r = 0 > t ? r.dropRight(-t) : r.take(t - n)), r)
        },An.prototype.takeRightWhile = function (n) {
            return this.reverse().takeWhile(n).reverse()
        },An.prototype.toArray = function () {
            return this.take(4294967295)
        },ct(An.prototype, function (n, t) {
            var r = /^(?:filter|find|map|reject)|While$/.test(t), e = /^(?:head|last)$/.test(t), u = yn[e ? "take" + ("last" == t ? "Right" : "") : t], o = e || /^find/.test(t);
            u && (yn.prototype[t] = function () {
                function t(n) {
                    return n = u.apply(yn, l([n], f)), e && h ? n[0] : n
                }

                var i = this.__wrapped__, f = e ? [1] : arguments, c = i instanceof An, a = f[0], s = c || Lo(i);
                s && r && typeof a == "function" && 1 != a.length && (c = s = false);
                var h = this.__chain__, p = !!this.__actions__.length, a = o && !h, c = c && !p;
                return !o && s ? (i = c ? i : new An(this), i = n.apply(i, f), i.__actions__.push({
                    func: Yr,
                    args: [t],
                    thisArg: Z
                }), new wn(i, h)) : a && c ? n.apply(this, f) : (i = this.thru(t), a ? e ? i.value()[0] : i.value() : i)
            })
        }),u("pop push shift sort splice unshift".split(" "), function (n) {
            var t = eu[n], r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", e = /^(?:pop|shift)$/.test(n);
            yn.prototype[n] = function () {
                var n = arguments;
                return e && !this.__chain__ ? t.apply(this.value(), n) : this[r](function (r) {
                    return t.apply(r, n)
                })
            }
        }),ct(An.prototype, function (n, t) {
            var r = yn[t];
            if (r) {
                var e = r.name + "";
                (qu[e] || (qu[e] = [])).push({name: t, func: r})
            }
        }),qu[cr(Z, 2).name] = [{name: "wrapper", func: Z}],An.prototype.clone = function () {
            var n = new An(this.__wrapped__);
            return n.__actions__ = Vt(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = Vt(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = Vt(this.__views__), n
        },An.prototype.reverse = function () {
            if (this.__filtered__) {
                var n = new An(this);
                n.__dir__ = -1, n.__filtered__ = true
            } else n = this.clone(), n.__dir__ *= -1;
            return n
        },An.prototype.value = function () {
            var n, t = this.__wrapped__.value(), r = this.__dir__, e = Lo(t), u = 0 > r, o = e ? t.length : 0;
            n = o;
            for (var i = this.__views__, f = 0, c = -1, a = i.length; ++c < a;) {
                var l = i[c], s = l.size;
                switch (l.type) {
                    case"drop":
                        f += s;
                        break;
                    case"dropRight":
                        n -= s;
                        break;
                    case"take":
                        n = Ru(n, f + s);
                        break;
                    case"takeRight":
                        f = Iu(f, n - s)
                }
            }
            if (n = {
                    start: f,
                    end: n
                }, i = n.start, f = n.end, n = f - i, u = u ? f : i - 1, i = this.__iteratees__, f = i.length, c = 0, a = Ru(n, this.__takeCount__), !e || 200 > o || o == n && a == n)return Zt(t, this.__actions__);
            e = [];
            n:for (; n-- && a > c;) {
                for (u += r, o = -1, l = t[u]; ++o < f;) {
                    var h = i[o], s = h.type, h = (0, h.iteratee)(l);
                    if (2 == s)l = h; else if (!h) {
                        if (1 == s)continue n;
                        break n
                    }
                }
                e[c++] = l
            }
            return e
        },yn.prototype.at = xo,yn.prototype.chain = function () {
            return Jr(this)
        },yn.prototype.commit = function () {
            return new wn(this.value(), this.__chain__)
        },yn.prototype.flatMap = function (n) {
            return this.map(n).flatten()
        },yn.prototype.next = function () {
            this.__values__ === Z && (this.__values__ = Ie(this.value()));
            var n = this.__index__ >= this.__values__.length, t = n ? Z : this.__values__[this.__index__++];
            return {done: n, value: t}
        },yn.prototype.plant = function (n) {
            for (var t, r = this; r instanceof jn;) {
                var e = Nr(r);
                e.__index__ = 0, e.__values__ = Z, t ? u.__wrapped__ = e : t = e;
                var u = e, r = r.__wrapped__
            }
            return u.__wrapped__ = n, t
        },yn.prototype.reverse = function () {
            var n = this.__wrapped__;
            return n instanceof An ? (this.__actions__.length && (n = new An(this)), n = n.reverse(), n.__actions__.push({
                func: Yr,
                args: [Kr],
                thisArg: Z
            }), new wn(n, this.__chain__)) : this.thru(Kr)
        },yn.prototype.toJSON = yn.prototype.valueOf = yn.prototype.value = function () {
            return Zt(this.__wrapped__, this.__actions__);
        },bu && (yn.prototype[bu] = Hr),yn
    }

    var Z, q = 1 / 0, P = NaN, T = /\b__p\+='';/g, K = /\b(__p\+=)''\+/g, G = /(__e\(.*?\)|\b__t\))\+'';/g, V = /&(?:amp|lt|gt|quot|#39|#96);/g, J = /[&<>"'`]/g, Y = RegExp(V.source), H = RegExp(J.source), Q = /<%-([\s\S]+?)%>/g, X = /<%([\s\S]+?)%>/g, nn = /<%=([\s\S]+?)%>/g, tn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, rn = /^\w*$/, en = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g, un = /[\\^$.*+?()[\]{}|]/g, on = RegExp(un.source), fn = /^\s+|\s+$/g, cn = /^\s+/, an = /\s+$/, ln = /\\(\\)?/g, sn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, hn = /\w*$/, pn = /^0x/i, _n = /^[-+]0x[0-9a-f]+$/i, gn = /^0b[01]+$/i, vn = /^\[object .+?Constructor\]$/, dn = /^0o[0-7]+$/i, yn = /^(?:0|[1-9]\d*)$/, bn = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g, xn = /($^)/, mn = /['\n\r\u2028\u2029\\]/g, jn = "[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?)*", wn = "(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])" + jn, An = "(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]?|[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])", On = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]", "g"), En = RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|" + An + jn, "g"), kn = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"), In = /[a-zA-Z0-9]+/g, Rn = RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2018\\u2019\\u201c\\u201d \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+|[A-Z\\xc0-\\xd6\\xd8-\\xde]+|\\d+", wn].join("|"), "g"), Sn = /[a-z][A-Z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Wn = "Array Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Reflect RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "), Cn = {};
    Cn["[object Float32Array]"] = Cn["[object Float64Array]"] = Cn["[object Int8Array]"] = Cn["[object Int16Array]"] = Cn["[object Int32Array]"] = Cn["[object Uint8Array]"] = Cn["[object Uint8ClampedArray]"] = Cn["[object Uint16Array]"] = Cn["[object Uint32Array]"] = true, Cn["[object Arguments]"] = Cn["[object Array]"] = Cn["[object ArrayBuffer]"] = Cn["[object Boolean]"] = Cn["[object Date]"] = Cn["[object Error]"] = Cn["[object Function]"] = Cn["[object Map]"] = Cn["[object Number]"] = Cn["[object Object]"] = Cn["[object RegExp]"] = Cn["[object Set]"] = Cn["[object String]"] = Cn["[object WeakMap]"] = false;
    var Un = {};
    Un["[object Arguments]"] = Un["[object Array]"] = Un["[object ArrayBuffer]"] = Un["[object Boolean]"] = Un["[object Date]"] = Un["[object Float32Array]"] = Un["[object Float64Array]"] = Un["[object Int8Array]"] = Un["[object Int16Array]"] = Un["[object Int32Array]"] = Un["[object Map]"] = Un["[object Number]"] = Un["[object Object]"] = Un["[object RegExp]"] = Un["[object Set]"] = Un["[object String]"] = Un["[object Symbol]"] = Un["[object Uint8Array]"] = Un["[object Uint8ClampedArray]"] = Un["[object Uint16Array]"] = Un["[object Uint32Array]"] = true, Un["[object Error]"] = Un["[object Function]"] = Un["[object WeakMap]"] = false;
    var Bn = {
        "\xc0": "A",
        "\xc1": "A",
        "\xc2": "A",
        "\xc3": "A",
        "\xc4": "A",
        "\xc5": "A",
        "\xe0": "a",
        "\xe1": "a",
        "\xe2": "a",
        "\xe3": "a",
        "\xe4": "a",
        "\xe5": "a",
        "\xc7": "C",
        "\xe7": "c",
        "\xd0": "D",
        "\xf0": "d",
        "\xc8": "E",
        "\xc9": "E",
        "\xca": "E",
        "\xcb": "E",
        "\xe8": "e",
        "\xe9": "e",
        "\xea": "e",
        "\xeb": "e",
        "\xcc": "I",
        "\xcd": "I",
        "\xce": "I",
        "\xcf": "I",
        "\xec": "i",
        "\xed": "i",
        "\xee": "i",
        "\xef": "i",
        "\xd1": "N",
        "\xf1": "n",
        "\xd2": "O",
        "\xd3": "O",
        "\xd4": "O",
        "\xd5": "O",
        "\xd6": "O",
        "\xd8": "O",
        "\xf2": "o",
        "\xf3": "o",
        "\xf4": "o",
        "\xf5": "o",
        "\xf6": "o",
        "\xf8": "o",
        "\xd9": "U",
        "\xda": "U",
        "\xdb": "U",
        "\xdc": "U",
        "\xf9": "u",
        "\xfa": "u",
        "\xfb": "u",
        "\xfc": "u",
        "\xdd": "Y",
        "\xfd": "y",
        "\xff": "y",
        "\xc6": "Ae",
        "\xe6": "ae",
        "\xde": "Th",
        "\xfe": "th",
        "\xdf": "ss"
    }, zn = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "`": "&#96;"}, Ln = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
        "&#96;": "`"
    }, $n = {"function": true, object: true}, Fn = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, Mn = parseFloat, Nn = parseInt, Dn = $n[typeof exports] && exports && !exports.nodeType ? exports : null, Zn = $n[typeof module] && module && !module.nodeType ? module : null, qn = k($n[typeof self] && self), Pn = k($n[typeof window] && window), Tn = Zn && Zn.exports === Dn ? Dn : null, Kn = k($n[typeof this] && this), Gn = k(Dn && Zn && typeof global == "object" && global) || Pn !== (Kn && Kn.window) && Pn || qn || Kn || Function("return this")(), Vn = D();
    (Pn || qn || {})._ = Vn, typeof define == "function" && typeof define.amd == "object" && define.amd ? define(function () {
        return Vn
    }) : Dn && Zn ? (Tn && ((Zn.exports = Vn)._ = Vn), Dn._ = Vn) : Gn._ = Vn
}).call(this);
!function (a, b) {
    a(function () {
        "use strict";
        function a(a, b) {
            return null != a && null != b && a.toLowerCase() === b.toLowerCase()
        }

        function c(a, b) {
            var c, d, e = a.length;
            if (!e || !b)return !1;
            for (c = b.toLowerCase(), d = 0; e > d; ++d)if (c === a[d].toLowerCase())return !0;
            return !1
        }

        function d(a) {
            for (var b in a)h.call(a, b) && (a[b] = new RegExp(a[b], "i"))
        }

        function e(a, b) {
            this.ua = a || "", this._cache = {}, this.maxPhoneWidth = b || 600
        }

        var f = {};
        f.mobileDetectRules = {
            phones: {
                iPhone: "\\biPhone\\b|\\biPod\\b",
                BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+",
                HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
                Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
                Dell: "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
                Samsung: "Samsung|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F",
                LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
                Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
                Asus: "Asus.*Galaxy|PadFone.*Mobile",
                NokiaLumia: "Lumia [0-9]{3,4}",
                Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                Palm: "PalmSource|Palm",
                Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                Alcatel: "Alcatel",
                Nintendo: "Nintendo 3DS",
                Amoi: "Amoi",
                INQ: "INQ",
                GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
            },
            tablets: {
                iPad: "iPad|iPad.*Mobile",
                NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561",
                Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI)\\b",
                SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K017 |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA",
                BlackBerryTablet: "PlayBook|RIM Tablet",
                HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20",
                ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
                DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                ArnovaTablet: "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                IRUTablet: "M702pro",
                MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                NokiaLumiaTablet: "Lumia 2520",
                SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
                PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                FlyTablet: "IQ310|Fly Vision",
                bqTablet: "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus",
                HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
                NecTablet: "\\bN-06D|\\bN-08D",
                PantechTablet: "Pantech.*P4100",
                BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                ZyncTablet: "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
                PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                NabiTablet: "Android.*\\bNabi",
                KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                PlaystationTablet: "Playstation.*(Portable|Vita)",
                TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                GalapadTablet: "Android.*\\bG1\\b",
                MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
                HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                DPSTablet: "DPS Dream 9|DPS Dual 7",
                VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497",
                EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                iMobileTablet: "i-mobile i-note",
                TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                AMPETablet: "Android.* A78 ",
                SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                TecnoTablet: "TECNO P9",
                JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                FX2Tablet: "FX2 PAD7|FX2 PAD10",
                XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                CaptivaTablet: "CAPTIVA PAD",
                IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
                JaytechTablet: "TPC-PA762",
                BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                UbislateTablet: "UbiSlate[\\s]?7C",
                PocketBookTablet: "Pocketbook",
                KocasoTablet: "\\b(TB-1207)\\b",
                Hudl: "Hudl HT7S3|Hudl 2",
                TelstraTablet: "T-Hub2",
                GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b|\\bTP750\\b"
            },
            oss: {
                AndroidOS: "Android",
                BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
                WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                iOS: "\\biPhone.*Mobile|\\biPod|\\biPad",
                MeeGoOS: "MeeGo",
                MaemoOS: "Maemo",
                JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                webOS: "webOS|hpwOS",
                badaOS: "\\bBada\\b",
                BREWOS: "BREW"
            },
            uas: {
                Vivaldi: "Vivaldi",
                Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                Dolfin: "\\bDolfin\\b",
                Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
                Skyfire: "Skyfire",
                Edge: "Mobile Safari/[.0-9]* Edge",
                IE: "IEMobile|MSIEMobile",
                Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
                Bolt: "bolt",
                TeaShark: "teashark",
                Blazer: "Blazer",
                Safari: "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                Tizen: "Tizen",
                UCBrowser: "UC.*Browser|UCWEB",
                baiduboxapp: "baiduboxapp",
                baidubrowser: "baidubrowser",
                DiigoBrowser: "DiigoBrowser",
                Puffin: "Puffin",
                Mercury: "\\bMercury\\b",
                ObigoBrowser: "Obigo",
                NetFront: "NF-Browser",
                GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
            },
            props: {
                Mobile: "Mobile/[VER]",
                Build: "Build/[VER]",
                Version: "Version/[VER]",
                VendorID: "VendorID/[VER]",
                iPad: "iPad.*CPU[a-z ]+[VER]",
                iPhone: "iPhone.*CPU[a-z ]+[VER]",
                iPod: "iPod.*CPU[a-z ]+[VER]",
                Kindle: "Kindle/[VER]",
                Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                Coast: ["Coast/[VER]"],
                Dolfin: "Dolfin/[VER]",
                Firefox: "Firefox/[VER]",
                Fennec: "Fennec/[VER]",
                Edge: "Edge/[VER]",
                IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                NetFront: "NetFront/[VER]",
                NokiaBrowser: "NokiaBrowser/[VER]",
                Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                "Opera Mini": "Opera Mini/[VER]",
                "Opera Mobi": "Version/[VER]",
                "UC Browser": "UC Browser[VER]",
                MQQBrowser: "MQQBrowser/[VER]",
                MicroMessenger: "MicroMessenger/[VER]",
                baiduboxapp: "baiduboxapp/[VER]",
                baidubrowser: "baidubrowser/[VER]",
                Iron: "Iron/[VER]",
                Safari: ["Version/[VER]", "Safari/[VER]"],
                Skyfire: "Skyfire/[VER]",
                Tizen: "Tizen/[VER]",
                Webkit: "webkit[ /][VER]",
                PaleMoon: "PaleMoon/[VER]",
                Gecko: "Gecko/[VER]",
                Trident: "Trident/[VER]",
                Presto: "Presto/[VER]",
                Goanna: "Goanna/[VER]",
                iOS: " \\bi?OS\\b [VER][ ;]{1}",
                Android: "Android [VER]",
                BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                BREW: "BREW [VER]",
                Java: "Java/[VER]",
                "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                "Windows Phone": "Windows Phone [VER]",
                "Windows CE": "Windows CE/[VER]",
                "Windows NT": "Windows NT [VER]",
                Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                webOS: ["webOS/[VER]", "hpwOS/[VER];"]
            },
            utils: {
                Bot: "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
                MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                DesktopMode: "WPDesktop",
                TV: "SonyDTV|HbbTV",
                WebKit: "(webkit)[ /]([\\w.]+)",
                Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
                Watch: "SM-V700"
            }
        }, f.detectMobileBrowsers = {
            fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            tabletPattern: /android|ipad|playbook|silk/i
        };
        var g, h = Object.prototype.hasOwnProperty;
        return f.FALLBACK_PHONE = "UnknownPhone", f.FALLBACK_TABLET = "UnknownTablet", f.FALLBACK_MOBILE = "UnknownMobile", g = "isArray" in Array ? Array.isArray : function (a) {
            return "[object Array]" === Object.prototype.toString.call(a)
        }, function () {
            var a, b, c, e, i, j, k = f.mobileDetectRules;
            for (a in k.props)if (h.call(k.props, a)) {
                for (b = k.props[a], g(b) || (b = [b]), i = b.length, e = 0; i > e; ++e)c = b[e], j = c.indexOf("[VER]"), j >= 0 && (c = c.substring(0, j) + "([\\w._\\+]+)" + c.substring(j + 5)), b[e] = new RegExp(c, "i");
                k.props[a] = b
            }
            d(k.oss), d(k.phones), d(k.tablets), d(k.uas), d(k.utils), k.oss0 = {
                WindowsPhoneOS: k.oss.WindowsPhoneOS,
                WindowsMobileOS: k.oss.WindowsMobileOS
            }
        }(), f.findMatch = function (a, b) {
            for (var c in a)if (h.call(a, c) && a[c].test(b))return c;
            return null
        }, f.findMatches = function (a, b) {
            var c = [];
            for (var d in a)h.call(a, d) && a[d].test(b) && c.push(d);
            return c
        }, f.getVersionStr = function (a, b) {
            var c, d, e, g, i = f.mobileDetectRules.props;
            if (h.call(i, a))for (c = i[a], e = c.length, d = 0; e > d; ++d)if (g = c[d].exec(b), null !== g)return g[1];
            return null
        }, f.getVersion = function (a, b) {
            var c = f.getVersionStr(a, b);
            return c ? f.prepareVersionNo(c) : NaN
        }, f.prepareVersionNo = function (a) {
            var b;
            return b = a.split(/[a-z._ \/\-]/i), 1 === b.length && (a = b[0]), b.length > 1 && (a = b[0] + ".", b.shift(), a += b.join("")), Number(a)
        }, f.isMobileFallback = function (a) {
            return f.detectMobileBrowsers.fullPattern.test(a) || f.detectMobileBrowsers.shortPattern.test(a.substr(0, 4))
        }, f.isTabletFallback = function (a) {
            return f.detectMobileBrowsers.tabletPattern.test(a)
        }, f.prepareDetectionCache = function (a, c, d) {
            if (a.mobile === b) {
                var g, h, i;
                return (h = f.findMatch(f.mobileDetectRules.tablets, c)) ? (a.mobile = a.tablet = h, void(a.phone = null)) : (g = f.findMatch(f.mobileDetectRules.phones, c)) ? (a.mobile = a.phone = g, void(a.tablet = null)) : void(f.isMobileFallback(c) ? (i = e.isPhoneSized(d), i === b ? (a.mobile = f.FALLBACK_MOBILE, a.tablet = a.phone = null) : i ? (a.mobile = a.phone = f.FALLBACK_PHONE, a.tablet = null) : (a.mobile = a.tablet = f.FALLBACK_TABLET, a.phone = null)) : f.isTabletFallback(c) ? (a.mobile = a.tablet = f.FALLBACK_TABLET, a.phone = null) : a.mobile = a.tablet = a.phone = null)
            }
        }, f.mobileGrade = function (a) {
            var b = null !== a.mobile();
            return a.os("iOS") && a.version("iPad") >= 4.3 || a.os("iOS") && a.version("iPhone") >= 3.1 || a.os("iOS") && a.version("iPod") >= 3.1 || a.version("Android") > 2.1 && a.is("Webkit") || a.version("Windows Phone OS") >= 7 || a.is("BlackBerry") && a.version("BlackBerry") >= 6 || a.match("Playbook.*Tablet") || a.version("webOS") >= 1.4 && a.match("Palm|Pre|Pixi") || a.match("hp.*TouchPad") || a.is("Firefox") && a.version("Firefox") >= 12 || a.is("Chrome") && a.is("AndroidOS") && a.version("Android") >= 4 || a.is("Skyfire") && a.version("Skyfire") >= 4.1 && a.is("AndroidOS") && a.version("Android") >= 2.3 || a.is("Opera") && a.version("Opera Mobi") > 11 && a.is("AndroidOS") || a.is("MeeGoOS") || a.is("Tizen") || a.is("Dolfin") && a.version("Bada") >= 2 || (a.is("UC Browser") || a.is("Dolfin")) && a.version("Android") >= 2.3 || a.match("Kindle Fire") || a.is("Kindle") && a.version("Kindle") >= 3 || a.is("AndroidOS") && a.is("NookTablet") || a.version("Chrome") >= 11 && !b || a.version("Safari") >= 5 && !b || a.version("Firefox") >= 4 && !b || a.version("MSIE") >= 7 && !b || a.version("Opera") >= 10 && !b ? "A" : a.os("iOS") && a.version("iPad") < 4.3 || a.os("iOS") && a.version("iPhone") < 3.1 || a.os("iOS") && a.version("iPod") < 3.1 || a.is("Blackberry") && a.version("BlackBerry") >= 5 && a.version("BlackBerry") < 6 || a.version("Opera Mini") >= 5 && a.version("Opera Mini") <= 6.5 && (a.version("Android") >= 2.3 || a.is("iOS")) || a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || a.version("Opera Mobi") >= 11 && a.is("SymbianOS") ? "B" : (a.version("BlackBerry") < 5 || a.match("MSIEMobile|Windows CE.*Mobile") || a.version("Windows Mobile") <= 5.2, "C")
        }, f.detectOS = function (a) {
            return f.findMatch(f.mobileDetectRules.oss0, a) || f.findMatch(f.mobileDetectRules.oss, a)
        }, f.getDeviceSmallerSide = function () {
            return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
        }, e.prototype = {
            constructor: e, mobile: function () {
                return f.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
            }, phone: function () {
                return f.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
            }, tablet: function () {
                return f.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
            }, userAgent: function () {
                return this._cache.userAgent === b && (this._cache.userAgent = f.findMatch(f.mobileDetectRules.uas, this.ua)), this._cache.userAgent
            }, userAgents: function () {
                return this._cache.userAgents === b && (this._cache.userAgents = f.findMatches(f.mobileDetectRules.uas, this.ua)), this._cache.userAgents
            }, os: function () {
                return this._cache.os === b && (this._cache.os = f.detectOS(this.ua)), this._cache.os
            }, version: function (a) {
                return f.getVersion(a, this.ua)
            }, versionStr: function (a) {
                return f.getVersionStr(a, this.ua)
            }, is: function (b) {
                return c(this.userAgents(), b) || a(b, this.os()) || a(b, this.phone()) || a(b, this.tablet()) || c(f.findMatches(f.mobileDetectRules.utils, this.ua), b)
            }, match: function (a) {
                return a instanceof RegExp || (a = new RegExp(a, "i")), a.test(this.ua)
            }, isPhoneSized: function (a) {
                return e.isPhoneSized(a || this.maxPhoneWidth)
            }, mobileGrade: function () {
                return this._cache.grade === b && (this._cache.grade = f.mobileGrade(this)), this._cache.grade
            }
        }, "undefined" != typeof window && window.screen ? e.isPhoneSized = function (a) {
            return 0 > a ? b : f.getDeviceSmallerSide() <= a
        } : e.isPhoneSized = function () {
        }, e._impl = f, e.version = "1.3.3 2016-07-31", e
    })
}(function (a) {
    if ("undefined" != typeof module && module.exports)return function (a) {
        module.exports = a()
    };
    if ("function" == typeof define && define.amd)return define;
    if ("undefined" != typeof window)return function (a) {
        window.MobileDetect = a()
    };
    throw new Error("unknown environment")
}());
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
    var b, c = navigator.userAgent, d = /iphone/i.test(c), e = /chrome/i.test(c), f = /android/i.test(c);
    a.mask = {
        definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"},
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, a.fn.extend({
        caret: function (a, b) {
            var c;
            if (0 !== this.length && !this.is(":hidden"))return "number" == typeof a ? (b = "number" == typeof b ? b : a, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(a, b) : this.createTextRange && (c = this.createTextRange(), c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", a), c.select())
            })) : (this[0].setSelectionRange ? (a = this[0].selectionStart, b = this[0].selectionEnd) : document.selection && document.selection.createRange && (c = document.selection.createRange(), a = 0 - c.duplicate().moveStart("character", -1e5), b = a + c.text.length), {
                begin: a,
                end: b
            })
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (c, g) {
            var h, i, j, k, l, m, n, o;
            if (!c && this.length > 0) {
                h = a(this[0]);
                var p = h.data(a.mask.dataName);
                return p ? p() : void 0
            }
            return g = a.extend({
                autoclear: a.mask.autoclear,
                placeholder: a.mask.placeholder,
                completed: null
            }, g), i = a.mask.definitions, j = [], k = n = c.length, l = null, a.each(c.split(""), function (a, b) {
                "?" == b ? (n--, k = a) : i[b] ? (j.push(new RegExp(i[b])), null === l && (l = j.length - 1), k > a && (m = j.length - 1)) : j.push(null)
            }), this.trigger("unmask").each(function () {
                function h() {
                    if (g.completed) {
                        for (var a = l; m >= a; a++)if (j[a] && C[a] === p(a))return;
                        g.completed.call(B)
                    }
                }

                function p(a) {
                    return g.placeholder.charAt(a < g.placeholder.length ? a : 0)
                }

                function q(a) {
                    for (; ++a < n && !j[a];);
                    return a
                }

                function r(a) {
                    for (; --a >= 0 && !j[a];);
                    return a
                }

                function s(a, b) {
                    var c, d;
                    if (!(0 > a)) {
                        for (c = a, d = q(b); n > c; c++)if (j[c]) {
                            if (!(n > d && j[c].test(C[d])))break;
                            C[c] = C[d], C[d] = p(d), d = q(d)
                        }
                        z(), B.caret(Math.max(l, a))
                    }
                }

                function t(a) {
                    var b, c, d, e;
                    for (b = a, c = p(a); n > b; b++)if (j[b]) {
                        if (d = q(b), e = C[b], C[b] = c, !(n > d && j[d].test(e)))break;
                        c = e
                    }
                }

                function u() {
                    var a = B.val(), b = B.caret();
                    if (o && o.length && o.length > a.length) {
                        for (A(!0); b.begin > 0 && !j[b.begin - 1];)b.begin--;
                        if (0 === b.begin)for (; b.begin < l && !j[b.begin];)b.begin++;
                        B.caret(b.begin, b.begin)
                    } else {
                        for (A(!0); b.begin < n && !j[b.begin];)b.begin++;
                        B.caret(b.begin, b.begin)
                    }
                    h()
                }

                function v() {
                    A(), B.val() != E && B.change()
                }

                function w(a) {
                    if (!B.prop("readonly")) {
                        var b, c, e, f = a.which || a.keyCode;
                        o = B.val(), 8 === f || 46 === f || d && 127 === f ? (b = B.caret(), c = b.begin, e = b.end, e - c === 0 && (c = 46 !== f ? r(c) : e = q(c - 1), e = 46 === f ? q(e) : e), y(c, e), s(c, e - 1), a.preventDefault()) : 13 === f ? v.call(this, a) : 27 === f && (B.val(E), B.caret(0, A()), a.preventDefault())
                    }
                }

                function x(b) {
                    if (!B.prop("readonly")) {
                        var c, d, e, g = b.which || b.keyCode, i = B.caret();
                        if (!(b.ctrlKey || b.altKey || b.metaKey || 32 > g) && g && 13 !== g) {
                            if (i.end - i.begin !== 0 && (y(i.begin, i.end), s(i.begin, i.end - 1)), c = q(i.begin - 1), n > c && (d = String.fromCharCode(g), j[c].test(d))) {
                                if (t(c), C[c] = d, z(), e = q(c), f) {
                                    var k = function () {
                                        a.proxy(a.fn.caret, B, e)()
                                    };
                                    setTimeout(k, 0)
                                } else B.caret(e);
                                i.begin <= m && h()
                            }
                            b.preventDefault()
                        }
                    }
                }

                function y(a, b) {
                    var c;
                    for (c = a; b > c && n > c; c++)j[c] && (C[c] = p(c))
                }

                function z() {
                    B.val(C.join(""))
                }

                function A(a) {
                    var b, c, d, e = B.val(), f = -1;
                    for (b = 0, d = 0; n > b; b++)if (j[b]) {
                        for (C[b] = p(b); d++ < e.length;)if (c = e.charAt(d - 1), j[b].test(c)) {
                            C[b] = c, f = b;
                            break
                        }
                        if (d > e.length) {
                            y(b + 1, n);
                            break
                        }
                    } else C[b] === e.charAt(d) && d++, k > b && (f = b);
                    return a ? z() : k > f + 1 ? g.autoclear || C.join("") === D ? (B.val() && B.val(""), y(0, n)) : z() : (z(), B.val(B.val().substring(0, f + 1))), k ? b : l
                }

                var B = a(this), C = a.map(c.split(""), function (a, b) {
                    return "?" != a ? i[a] ? p(b) : a : void 0
                }), D = C.join(""), E = B.val();
                B.data(a.mask.dataName, function () {
                    return a.map(C, function (a, b) {
                        return j[b] && a != p(b) ? a : null
                    }).join("")
                }), B.one("unmask", function () {
                    B.off(".mask").removeData(a.mask.dataName)
                }).on("focus.mask", function () {
                    if (!B.prop("readonly")) {
                        clearTimeout(b);
                        var a;
                        E = B.val(), a = A(), b = setTimeout(function () {
                            B.get(0) === document.activeElement && (z(), a == c.replace("?", "").length ? B.caret(0, a) : B.caret(a))
                        }, 10)
                    }
                }).on("blur.mask", v).on("keydown.mask", w).on("keypress.mask", x).on("input.mask paste.mask", function () {
                    B.prop("readonly") || setTimeout(function () {
                        var a = A(!0);
                        B.caret(a), h()
                    }, 0)
                }), e && f && B.off("input.mask").on("input.mask", u), A()
            })
        }
    })
});
function parseGET(url) {
    if (!url || url == '')url = decodeURI(document.location.search);
    if (url.indexOf('?') < 0)return Array();
    url = url.split('?');
    url = url[1];
    var GET = [], params = [], key = [];
    if (url.indexOf('#') != -1) {
        url = url.substr(0, url.indexOf('#'));
    }
    if (url.indexOf('&') > -1) {
        params = url.split('&');
    } else {
        params[0] = url;
    }
    for (r = 0; r < params.length; r++) {
        for (z = 0; z < namekey.length; z++) {
            if (params[r].indexOf(namekey[z] + '=') > -1) {
                if (params[r].indexOf('=') > -1) {
                    key = params[r].split('=');
                    GET[key[0]] = key[1];
                }
            }
        }
    }
    return (GET);
};function input() {
    var $_GET = parseGET();
    for (z = 0; z < namekey.length; z++) {
        if (!!$_GET[namekey[z]]) {
            $(div_class).append('<input name="' + namekey[z] + '" type="' + input_hide + '" value="' + $_GET[namekey[z]] + '">');
        }
    }
    $(div_class).append('<input name="refer" type="' + input_hide + '" value="' + refer + '">');
}
function referer() {
    engines = [{start: 'https://www.google.', query: 'q', name: 'google'}, {
        start: 'http://yandex.',
        query: 'text',
        name: 'yandex'
    }, {start: 'rambler.ru/search', query: 'query', name: 'rambler'}, {
        start: 'http://go.mail.ru/',
        query: 'q',
        name: 'mailru',
        cp1251: true
    }, {start: 'http://www.bing.com/', query: 'q', name: 'bing'}, {
        start: 'search.yahoo.com/search',
        query: 'p',
        name: 'yahoo'
    }, {start: 'http://ru.ask.com/', query: 'q', name: 'ask'}, {
        start: 'http://search.qip.ru/search',
        query: 'query',
        name: 'qip'
    }];
    var ref = document.referrer, req = "", engine = "", start, cp1251;
    for (var i in engines) {
        if (!engines.hasOwnProperty(i))continue;
        if (ref.indexOf(engines[i].start) == -1)continue;
        start = ref.indexOf('?' + engines[i].query + '=')
        if (start == -1) {
            start = ref.indexOf('&' + engines[i].query + '=');
            if (start == -1)return document.referrer;
        }
        engine = engines[i].name;
        req = engines[i].query;
        cp1251 = engines[i].hasOwnProperty('cp1251');
    }
    if (!engine)return document.referrer;
    ref = ref.substr(start + req.length + 2);
    var end = ref.indexOf('&');
    if (end != -1)ref = ref.substr(0, end);
    if (cp1251) {
        function win2unicode(str) {
            var charmap = unescape("%u0402%u0403%u201A%u0453%u201E%u2026%u2020%u2021%u20AC%u2030%u0409%u2039%u040A%u040C%u040B%u040F" + "%u0452%u2018%u2019%u201C%u201D%u2022%u2013%u2014%u0000%u2122%u0459%u203A%u045A%u045C%u045B%u045F" + "%u00A0%u040E%u045E%u0408%u00A4%u0490%u00A6%u00A7%u0401%u00A9%u0404%u00AB%u00AC%u00AD%u00AE%u0407" + "%u00B0%u00B1%u0406%u0456%u0491%u00B5%u00B6%u00B7%u0451%u2116%u0454%u00BB%u0458%u0405%u0455%u0457")
            var code2char = function (code) {
                if (code >= 0xC0 && code <= 0xFF)return String.fromCharCode(code - 0xC0 + 0x0410)
                if (code >= 0x80 && code <= 0xBF)return charmap.charAt(code - 0x80)
                return String.fromCharCode(code)
            }
            var res = ""
            for (var i = 0; i < str.length; i++)res = res + code2char(str.charCodeAt(i))
            return res
        }

        ref = unescape(ref);
        ref = win2unicode(ref);
    } else
        ref = decodeURIComponent(ref);
    ref = ref.replace(/[+]+/g, ' ')
    return {"Поисковик": engine, "Запрос": ref};
}
var refer = JSON.stringify(referer());
refer = refer.replace(/\"/g, '');
refer = refer.replace(/\:/g, ': ');
refer = refer.replace(/\,/g, ', ');
refer = refer.replace(/\{/g, '');
refer = refer.replace(/\}/g, '');
(function (a) {
    if (typeof define === "function" && define.amd && define.amd.jQuery) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
}(function (f) {
    var p = "left", o = "right", e = "up", x = "down", c = "in", z = "out", m = "none", s = "auto", l = "swipe", t = "pinch", A = "tap", j = "doubletap", b = "longtap", y = "hold", D = "horizontal", u = "vertical", i = "all", r = 10, g = "start", k = "move", h = "end", q = "cancel", a = "ontouchstart" in window, v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled, d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled, B = "TouchSwipe";
    var n = {
        fingers: 1,
        threshold: 75,
        cancelThreshold: null,
        pinchThreshold: 20,
        maxTimeThreshold: null,
        fingerReleaseThreshold: 250,
        longTapThreshold: 500,
        doubleTapThreshold: 200,
        swipe: null,
        swipeLeft: null,
        swipeRight: null,
        swipeUp: null,
        swipeDown: null,
        swipeStatus: null,
        pinchIn: null,
        pinchOut: null,
        pinchStatus: null,
        click: null,
        tap: null,
        doubleTap: null,
        longTap: null,
        hold: null,
        triggerOnTouchEnd: true,
        triggerOnTouchLeave: false,
        allowPageScroll: "auto",
        fallbackToMouseEvents: true,
        excludedElements: "label, button, input, select, textarea, a, .noSwipe",
        preventDefaultEvents: true
    };
    f.fn.swipe = function (G) {
        var F = f(this), E = F.data(B);
        if (E && typeof G === "string") {
            if (E[G]) {
                return E[G].apply(this, Array.prototype.slice.call(arguments, 1))
            } else {
                f.error("Method " + G + " does not exist on jQuery.swipe")
            }
        } else {
            if (!E && (typeof G === "object" || !G)) {
                return w.apply(this, arguments)
            }
        }
        return F
    };
    f.fn.swipe.defaults = n;
    f.fn.swipe.phases = {PHASE_START: g, PHASE_MOVE: k, PHASE_END: h, PHASE_CANCEL: q};
    f.fn.swipe.directions = {LEFT: p, RIGHT: o, UP: e, DOWN: x, IN: c, OUT: z};
    f.fn.swipe.pageScroll = {NONE: m, HORIZONTAL: D, VERTICAL: u, AUTO: s};
    f.fn.swipe.fingers = {ONE: 1, TWO: 2, THREE: 3, ALL: i};
    function w(E) {
        if (E && (E.allowPageScroll === undefined && (E.swipe !== undefined || E.swipeStatus !== undefined))) {
            E.allowPageScroll = m
        }
        if (E.click !== undefined && E.tap === undefined) {
            E.tap = E.click
        }
        if (!E) {
            E = {}
        }
        E = f.extend({}, f.fn.swipe.defaults, E);
        return this.each(function () {
            var G = f(this);
            var F = G.data(B);
            if (!F) {
                F = new C(this, E);
                G.data(B, F)
            }
        })
    }

    function C(a4, av) {
        var az = (a || d || !av.fallbackToMouseEvents), J = az ? (d ? (v ? "MSPointerDown" : "pointerdown") : "touchstart") : "mousedown", ay = az ? (d ? (v ? "MSPointerMove" : "pointermove") : "touchmove") : "mousemove", U = az ? (d ? (v ? "MSPointerUp" : "pointerup") : "touchend") : "mouseup", S = az ? null : "mouseleave", aD = (d ? (v ? "MSPointerCancel" : "pointercancel") : "touchcancel");
        var ag = 0, aP = null, ab = 0, a1 = 0, aZ = 0, G = 1, aq = 0, aJ = 0, M = null;
        var aR = f(a4);
        var Z = "start";
        var W = 0;
        var aQ = null;
        var T = 0, a2 = 0, a5 = 0, ad = 0, N = 0;
        var aW = null, af = null;
        try {
            aR.bind(J, aN);
            aR.bind(aD, a9)
        } catch (ak) {
            f.error("events not supported " + J + "," + aD + " on jQuery.swipe")
        }
        this.enable = function () {
            aR.bind(J, aN);
            aR.bind(aD, a9);
            return aR
        };
        this.disable = function () {
            aK();
            return aR
        };
        this.destroy = function () {
            aK();
            aR.data(B, null);
            aR = null
        };
        this.option = function (bc, bb) {
            if (av[bc] !== undefined) {
                if (bb === undefined) {
                    return av[bc]
                } else {
                    av[bc] = bb
                }
            } else {
                f.error("Option " + bc + " does not exist on jQuery.swipe.options")
            }
            return null
        };
        function aN(bd) {
            if (aB()) {
                return
            }
            if (f(bd.target).closest(av.excludedElements, aR).length > 0) {
                return
            }
            var be = bd.originalEvent ? bd.originalEvent : bd;
            var bc, bb = a ? be.touches[0] : be;
            Z = g;
            if (a) {
                W = be.touches.length
            } else {
                bd.preventDefault()
            }
            ag = 0;
            aP = null;
            aJ = null;
            ab = 0;
            a1 = 0;
            aZ = 0;
            G = 1;
            aq = 0;
            aQ = aj();
            M = aa();
            R();
            if (!a || (W === av.fingers || av.fingers === i) || aX()) {
                ai(0, bb);
                T = at();
                if (W == 2) {
                    ai(1, be.touches[1]);
                    a1 = aZ = au(aQ[0].start, aQ[1].start)
                }
                if (av.swipeStatus || av.pinchStatus) {
                    bc = O(be, Z)
                }
            } else {
                bc = false
            }
            if (bc === false) {
                Z = q;
                O(be, Z);
                return bc
            } else {
                if (av.hold) {
                    af = setTimeout(f.proxy(function () {
                        aR.trigger("hold", [be.target]);
                        if (av.hold) {
                            bc = av.hold.call(aR, be, be.target)
                        }
                    }, this), av.longTapThreshold)
                }
                ao(true)
            }
            return null
        }

        function a3(be) {
            var bh = be.originalEvent ? be.originalEvent : be;
            if (Z === h || Z === q || am()) {
                return
            }
            var bd, bc = a ? bh.touches[0] : bh;
            var bf = aH(bc);
            a2 = at();
            if (a) {
                W = bh.touches.length
            }
            if (av.hold) {
                clearTimeout(af)
            }
            Z = k;
            if (W == 2) {
                if (a1 == 0) {
                    ai(1, bh.touches[1]);
                    a1 = aZ = au(aQ[0].start, aQ[1].start)
                } else {
                    aH(bh.touches[1]);
                    aZ = au(aQ[0].end, aQ[1].end);
                    aJ = ar(aQ[0].end, aQ[1].end)
                }
                G = a7(a1, aZ);
                aq = Math.abs(a1 - aZ)
            }
            if ((W === av.fingers || av.fingers === i) || !a || aX()) {
                aP = aL(bf.start, bf.end);
                al(be, aP);
                ag = aS(bf.start, bf.end);
                ab = aM();
                aI(aP, ag);
                if (av.swipeStatus || av.pinchStatus) {
                    bd = O(bh, Z)
                }
                if (!av.triggerOnTouchEnd || av.triggerOnTouchLeave) {
                    var bb = true;
                    if (av.triggerOnTouchLeave) {
                        var bg = aY(this);
                        bb = E(bf.end, bg)
                    }
                    if (!av.triggerOnTouchEnd && bb) {
                        Z = aC(k)
                    } else {
                        if (av.triggerOnTouchLeave && !bb) {
                            Z = aC(h)
                        }
                    }
                    if (Z == q || Z == h) {
                        O(bh, Z)
                    }
                }
            } else {
                Z = q;
                O(bh, Z)
            }
            if (bd === false) {
                Z = q;
                O(bh, Z)
            }
        }

        function L(bb) {
            var bc = bb.originalEvent;
            if (a) {
                if (bc.touches.length > 0) {
                    F();
                    return true
                }
            }
            if (am()) {
                W = ad
            }
            a2 = at();
            ab = aM();
            if (ba() || !an()) {
                Z = q;
                O(bc, Z)
            } else {
                if (av.triggerOnTouchEnd || (av.triggerOnTouchEnd == false && Z === k)) {
                    bb.preventDefault();
                    Z = h;
                    O(bc, Z)
                } else {
                    if (!av.triggerOnTouchEnd && a6()) {
                        Z = h;
                        aF(bc, Z, A)
                    } else {
                        if (Z === k) {
                            Z = q;
                            O(bc, Z)
                        }
                    }
                }
            }
            ao(false);
            return null
        }

        function a9() {
            W = 0;
            a2 = 0;
            T = 0;
            a1 = 0;
            aZ = 0;
            G = 1;
            R();
            ao(false)
        }

        function K(bb) {
            var bc = bb.originalEvent;
            if (av.triggerOnTouchLeave) {
                Z = aC(h);
                O(bc, Z)
            }
        }

        function aK() {
            aR.unbind(J, aN);
            aR.unbind(aD, a9);
            aR.unbind(ay, a3);
            aR.unbind(U, L);
            if (S) {
                aR.unbind(S, K)
            }
            ao(false)
        }

        function aC(bf) {
            var be = bf;
            var bd = aA();
            var bc = an();
            var bb = ba();
            if (!bd || bb) {
                be = q
            } else {
                if (bc && bf == k && (!av.triggerOnTouchEnd || av.triggerOnTouchLeave)) {
                    be = h
                } else {
                    if (!bc && bf == h && av.triggerOnTouchLeave) {
                        be = q
                    }
                }
            }
            return be
        }

        function O(bd, bb) {
            var bc = undefined;
            if ((I() || V()) || (P() || aX())) {
                if (I() || V()) {
                    bc = aF(bd, bb, l)
                }
                if ((P() || aX()) && bc !== false) {
                    bc = aF(bd, bb, t)
                }
            } else {
                if (aG() && bc !== false) {
                    bc = aF(bd, bb, j)
                } else {
                    if (ap() && bc !== false) {
                        bc = aF(bd, bb, b)
                    } else {
                        if (ah() && bc !== false) {
                            bc = aF(bd, bb, A)
                        }
                    }
                }
            }
            if (bb === q) {
                a9(bd)
            }
            if (bb === h) {
                if (a) {
                    if (bd.touches.length == 0) {
                        a9(bd)
                    }
                } else {
                    a9(bd)
                }
            }
            return bc
        }

        function aF(be, bb, bd) {
            var bc = undefined;
            if (bd == l) {
                aR.trigger("swipeStatus", [bb, aP || null, ag || 0, ab || 0, W, aQ]);
                if (av.swipeStatus) {
                    bc = av.swipeStatus.call(aR, be, bb, aP || null, ag || 0, ab || 0, W, aQ);
                    if (bc === false) {
                        return false
                    }
                }
                if (bb == h && aV()) {
                    aR.trigger("swipe", [aP, ag, ab, W, aQ]);
                    if (av.swipe) {
                        bc = av.swipe.call(aR, be, aP, ag, ab, W, aQ);
                        if (bc === false) {
                            return false
                        }
                    }
                    switch (aP) {
                        case p:
                            aR.trigger("swipeLeft", [aP, ag, ab, W, aQ]);
                            if (av.swipeLeft) {
                                bc = av.swipeLeft.call(aR, be, aP, ag, ab, W, aQ)
                            }
                            break;
                        case o:
                            aR.trigger("swipeRight", [aP, ag, ab, W, aQ]);
                            if (av.swipeRight) {
                                bc = av.swipeRight.call(aR, be, aP, ag, ab, W, aQ)
                            }
                            break;
                        case e:
                            aR.trigger("swipeUp", [aP, ag, ab, W, aQ]);
                            if (av.swipeUp) {
                                bc = av.swipeUp.call(aR, be, aP, ag, ab, W, aQ)
                            }
                            break;
                        case x:
                            aR.trigger("swipeDown", [aP, ag, ab, W, aQ]);
                            if (av.swipeDown) {
                                bc = av.swipeDown.call(aR, be, aP, ag, ab, W, aQ)
                            }
                            break
                    }
                }
            }
            if (bd == t) {
                aR.trigger("pinchStatus", [bb, aJ || null, aq || 0, ab || 0, W, G, aQ]);
                if (av.pinchStatus) {
                    bc = av.pinchStatus.call(aR, be, bb, aJ || null, aq || 0, ab || 0, W, G, aQ);
                    if (bc === false) {
                        return false
                    }
                }
                if (bb == h && a8()) {
                    switch (aJ) {
                        case c:
                            aR.trigger("pinchIn", [aJ || null, aq || 0, ab || 0, W, G, aQ]);
                            if (av.pinchIn) {
                                bc = av.pinchIn.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ)
                            }
                            break;
                        case z:
                            aR.trigger("pinchOut", [aJ || null, aq || 0, ab || 0, W, G, aQ]);
                            if (av.pinchOut) {
                                bc = av.pinchOut.call(aR, be, aJ || null, aq || 0, ab || 0, W, G, aQ)
                            }
                            break
                    }
                }
            }
            if (bd == A) {
                if (bb === q || bb === h) {
                    clearTimeout(aW);
                    clearTimeout(af);
                    if (Y() && !H()) {
                        N = at();
                        aW = setTimeout(f.proxy(function () {
                            N = null;
                            aR.trigger("tap", [be.target]);
                            if (av.tap) {
                                bc = av.tap.call(aR, be, be.target)
                            }
                        }, this), av.doubleTapThreshold)
                    } else {
                        N = null;
                        aR.trigger("tap", [be.target]);
                        if (av.tap) {
                            bc = av.tap.call(aR, be, be.target)
                        }
                    }
                }
            } else {
                if (bd == j) {
                    if (bb === q || bb === h) {
                        clearTimeout(aW);
                        N = null;
                        aR.trigger("doubletap", [be.target]);
                        if (av.doubleTap) {
                            bc = av.doubleTap.call(aR, be, be.target)
                        }
                    }
                } else {
                    if (bd == b) {
                        if (bb === q || bb === h) {
                            clearTimeout(aW);
                            N = null;
                            aR.trigger("longtap", [be.target]);
                            if (av.longTap) {
                                bc = av.longTap.call(aR, be, be.target)
                            }
                        }
                    }
                }
            }
            return bc
        }

        function an() {
            var bb = true;
            if (av.threshold !== null) {
                bb = ag >= av.threshold
            }
            return bb
        }

        function ba() {
            var bb = false;
            if (av.cancelThreshold !== null && aP !== null) {
                bb = (aT(aP) - ag) >= av.cancelThreshold
            }
            return bb
        }

        function ae() {
            if (av.pinchThreshold !== null) {
                return aq >= av.pinchThreshold
            }
            return true
        }

        function aA() {
            var bb;
            if (av.maxTimeThreshold) {
                if (ab >= av.maxTimeThreshold) {
                    bb = false
                } else {
                    bb = true
                }
            } else {
                bb = true
            }
            return bb
        }

        function al(bb, bc) {
            if (av.preventDefaultEvents === false) {
                return
            }
            if (av.allowPageScroll === m) {
                bb.preventDefault()
            } else {
                var bd = av.allowPageScroll === s;
                switch (bc) {
                    case p:
                        if ((av.swipeLeft && bd) || (!bd && av.allowPageScroll != D)) {
                            bb.preventDefault()
                        }
                        break;
                    case o:
                        if ((av.swipeRight && bd) || (!bd && av.allowPageScroll != D)) {
                            bb.preventDefault()
                        }
                        break;
                    case e:
                        if ((av.swipeUp && bd) || (!bd && av.allowPageScroll != u)) {
                            bb.preventDefault()
                        }
                        break;
                    case x:
                        if ((av.swipeDown && bd) || (!bd && av.allowPageScroll != u)) {
                            bb.preventDefault()
                        }
                        break
                }
            }
        }

        function a8() {
            var bc = aO();
            var bb = X();
            var bd = ae();
            return bc && bb && bd
        }

        function aX() {
            return !!(av.pinchStatus || av.pinchIn || av.pinchOut)
        }

        function P() {
            return !!(a8() && aX())
        }

        function aV() {
            var be = aA();
            var bg = an();
            var bd = aO();
            var bb = X();
            var bc = ba();
            var bf = !bc && bb && bd && bg && be;
            return bf
        }

        function V() {
            return !!(av.swipe || av.swipeStatus || av.swipeLeft || av.swipeRight || av.swipeUp || av.swipeDown)
        }

        function I() {
            return !!(aV() && V())
        }

        function aO() {
            return ((W === av.fingers || av.fingers === i) || !a)
        }

        function X() {
            return aQ[0].end.x !== 0
        }

        function a6() {
            return !!(av.tap)
        }

        function Y() {
            return !!(av.doubleTap)
        }

        function aU() {
            return !!(av.longTap)
        }

        function Q() {
            if (N == null) {
                return false
            }
            var bb = at();
            return (Y() && ((bb - N) <= av.doubleTapThreshold))
        }

        function H() {
            return Q()
        }

        function ax() {
            return ((W === 1 || !a) && (isNaN(ag) || ag < av.threshold))
        }

        function a0() {
            return ((ab > av.longTapThreshold) && (ag < r))
        }

        function ah() {
            return !!(ax() && a6())
        }

        function aG() {
            return !!(Q() && Y())
        }

        function ap() {
            return !!(a0() && aU())
        }

        function F() {
            a5 = at();
            ad = event.touches.length + 1
        }

        function R() {
            a5 = 0;
            ad = 0
        }

        function am() {
            var bb = false;
            if (a5) {
                var bc = at() - a5;
                if (bc <= av.fingerReleaseThreshold) {
                    bb = true
                }
            }
            return bb
        }

        function aB() {
            return !!(aR.data(B + "_intouch") === true)
        }

        function ao(bb) {
            if (bb === true) {
                aR.bind(ay, a3);
                aR.bind(U, L);
                if (S) {
                    aR.bind(S, K)
                }
            } else {
                aR.unbind(ay, a3, false);
                aR.unbind(U, L, false);
                if (S) {
                    aR.unbind(S, K, false)
                }
            }
            aR.data(B + "_intouch", bb === true)
        }

        function ai(bc, bb) {
            var bd = bb.identifier !== undefined ? bb.identifier : 0;
            aQ[bc].identifier = bd;
            aQ[bc].start.x = aQ[bc].end.x = bb.pageX || bb.clientX;
            aQ[bc].start.y = aQ[bc].end.y = bb.pageY || bb.clientY;
            return aQ[bc]
        }

        function aH(bb) {
            var bd = bb.identifier !== undefined ? bb.identifier : 0;
            var bc = ac(bd);
            bc.end.x = bb.pageX || bb.clientX;
            bc.end.y = bb.pageY || bb.clientY;
            return bc
        }

        function ac(bc) {
            for (var bb = 0; bb < aQ.length; bb++) {
                if (aQ[bb].identifier == bc) {
                    return aQ[bb]
                }
            }
        }

        function aj() {
            var bb = [];
            for (var bc = 0; bc <= 5; bc++) {
                bb.push({start: {x: 0, y: 0}, end: {x: 0, y: 0}, identifier: 0})
            }
            return bb
        }

        function aI(bb, bc) {
            bc = Math.max(bc, aT(bb));
            M[bb].distance = bc
        }

        function aT(bb) {
            if (M[bb]) {
                return M[bb].distance
            }
            return undefined
        }

        function aa() {
            var bb = {};
            bb[p] = aw(p);
            bb[o] = aw(o);
            bb[e] = aw(e);
            bb[x] = aw(x);
            return bb
        }

        function aw(bb) {
            return {direction: bb, distance: 0}
        }

        function aM() {
            return a2 - T
        }

        function au(be, bd) {
            var bc = Math.abs(be.x - bd.x);
            var bb = Math.abs(be.y - bd.y);
            return Math.round(Math.sqrt(bc * bc + bb * bb))
        }

        function a7(bb, bc) {
            var bd = (bc / bb) * 1;
            return bd.toFixed(2)
        }

        function ar() {
            if (G < 1) {
                return z
            } else {
                return c
            }
        }

        function aS(bc, bb) {
            return Math.round(Math.sqrt(Math.pow(bb.x - bc.x, 2) + Math.pow(bb.y - bc.y, 2)))
        }

        function aE(be, bc) {
            var bb = be.x - bc.x;
            var bg = bc.y - be.y;
            var bd = Math.atan2(bg, bb);
            var bf = Math.round(bd * 180 / Math.PI);
            if (bf < 0) {
                bf = 360 - Math.abs(bf)
            }
            return bf
        }

        function aL(bc, bb) {
            var bd = aE(bc, bb);
            if ((bd <= 45) && (bd >= 0)) {
                return p
            } else {
                if ((bd <= 360) && (bd >= 315)) {
                    return p
                } else {
                    if ((bd >= 135) && (bd <= 225)) {
                        return o
                    } else {
                        if ((bd > 45) && (bd < 135)) {
                            return x
                        } else {
                            return e
                        }
                    }
                }
            }
        }

        function at() {
            var bb = new Date();
            return bb.getTime()
        }

        function aY(bb) {
            bb = f(bb);
            var bd = bb.offset();
            var bc = {left: bd.left, right: bd.left + bb.outerWidth(), top: bd.top, bottom: bd.top + bb.outerHeight()};
            return bc
        }

        function E(bb, bc) {
            return (bb.x > bc.left && bb.x < bc.right && bb.y > bc.top && bb.y < bc.bottom)
        }
    }
}));
(function (b, c) {
    var $ = b.jQuery || b.Cowboy || (b.Cowboy = {}), a;
    $.throttle = a = function (e, f, j, i) {
        var h, d = 0;
        if (typeof f !== "boolean") {
            i = j;
            j = f;
            f = c
        }
        function g() {
            var o = this, m = +new Date() - d, n = arguments;

            function l() {
                d = +new Date();
                j.apply(o, n)
            }

            function k() {
                h = c
            }

            if (i && !h) {
                l()
            }
            h && clearTimeout(h);
            if (i === c && m > e) {
                l()
            } else {
                if (f !== true) {
                    h = setTimeout(i ? k : l, i === c ? e - m : e)
                }
            }
        }

        if ($.guid) {
            g.guid = j.guid = j.guid || $.guid++
        }
        return g
    };
    $.debounce = function (d, e, f) {
        return f === c ? a(d, e, false) : a(d, f, e !== false)
    }
})(this);
(function (r, G, f, v) {
    var J = f("html"), n = f(r), p = f(G), b = f.fancybox = function () {
        b.open.apply(this, arguments)
    }, I = navigator.userAgent.match(/msie/i), B = null, s = G.createTouch !== v, t = function (a) {
        return a && a.hasOwnProperty && a instanceof f
    }, q = function (a) {
        return a && "string" === f.type(a)
    }, E = function (a) {
        return q(a) && 0 < a.indexOf("%")
    }, l = function (a, d) {
        var e = parseInt(a, 10) || 0;
        d && E(a) && (e *= b.getViewport()[d] / 100);
        return Math.ceil(e)
    }, w = function (a, b) {
        return l(a, b) + "px"
    };
    f.extend(b, {
        version: "2.1.5",
        defaults: {
            padding: 15,
            margin: 20,
            width: 800,
            height: 600,
            minWidth: 100,
            minHeight: 100,
            maxWidth: 9999,
            maxHeight: 9999,
            pixelRatio: 1,
            autoSize: !0,
            autoHeight: !1,
            autoWidth: !1,
            autoResize: !0,
            autoCenter: !s,
            fitToView: !0,
            aspectRatio: !1,
            topRatio: 0.5,
            leftRatio: 0.5,
            scrolling: "auto",
            wrapCSS: "",
            arrows: !0,
            closeBtn: !0,
            closeClick: !1,
            nextClick: !1,
            mouseWheel: !0,
            autoPlay: !1,
            playSpeed: 3E3,
            preload: 3,
            modal: !1,
            loop: !0,
            ajax: {dataType: "html", headers: {"X-fancyBox": !0}},
            iframe: {scrolling: "auto", preload: !0},
            swf: {wmode: "transparent", allowfullscreen: "true", allowscriptaccess: "always"},
            keys: {
                next: {13: "left", 34: "up", 39: "left", 40: "up"},
                prev: {8: "right", 33: "down", 37: "right", 38: "down"},
                close: [27],
                play: [32],
                toggle: [70]
            },
            direction: {next: "left", prev: "right"},
            scrollOutside: !0,
            index: 0,
            type: null,
            href: null,
            content: null,
            title: null,
            tpl: {
                wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image: '<img class="fancybox-image" src="{href}" alt="" />',
                iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (I ? ' allowtransparency="true"' : "") + "></iframe>",
                error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
            },
            openEffect: "fade",
            openSpeed: 250,
            openEasing: "swing",
            openOpacity: !0,
            openMethod: "zoomIn",
            closeEffect: "fade",
            closeSpeed: 250,
            closeEasing: "swing",
            closeOpacity: !0,
            closeMethod: "zoomOut",
            nextEffect: "elastic",
            nextSpeed: 250,
            nextEasing: "swing",
            nextMethod: "changeIn",
            prevEffect: "elastic",
            prevSpeed: 250,
            prevEasing: "swing",
            prevMethod: "changeOut",
            helpers: {overlay: !0, title: !0},
            onCancel: f.noop,
            beforeLoad: f.noop,
            afterLoad: f.noop,
            beforeShow: f.noop,
            afterShow: f.noop,
            beforeChange: f.noop,
            beforeClose: f.noop,
            afterClose: f.noop
        },
        group: {},
        opts: {},
        previous: null,
        coming: null,
        current: null,
        isActive: !1,
        isOpen: !1,
        isOpened: !1,
        wrap: null,
        skin: null,
        outer: null,
        inner: null,
        player: {timer: null, isActive: !1},
        ajaxLoad: null,
        imgPreload: null,
        transitions: {},
        helpers: {},
        open: function (a, d) {
            if (a && (f.isPlainObject(d) || (d = {}), !1 !== b.close(!0)))return f.isArray(a) || (a = t(a) ? f(a).get() : [a]), f.each(a, function (e, c) {
                var k = {}, g, h, j, m, l;
                "object" === f.type(c) && (c.nodeType && (c = f(c)), t(c) ? (k = {
                    href: c.data("fancybox-href") || c.attr("href"),
                    title: c.data("fancybox-title") || c.attr("title"),
                    isDom: !0,
                    element: c
                }, f.metadata && f.extend(!0, k, c.metadata())) : k = c);
                g = d.href || k.href || (q(c) ? c : null);
                h = d.title !== v ? d.title : k.title || "";
                m = (j = d.content || k.content) ? "html" : d.type || k.type;
                !m && k.isDom && (m = c.data("fancybox-type"), m || (m = (m = c.prop("class").match(/fancybox\.(\w+)/)) ? m[1] : null));
                q(g) && (m || (b.isImage(g) ? m = "image" : b.isSWF(g) ? m = "swf" : "#" === g.charAt(0) ? m = "inline" : q(c) && (m = "html", j = c)), "ajax" === m && (l = g.split(/\s+/, 2), g = l.shift(), l = l.shift()));
                j || ("inline" === m ? g ? j = f(q(g) ? g.replace(/.*(?=#[^\s]+$)/, "") : g) : k.isDom && (j = c) : "html" === m ? j = g : !m && (!g && k.isDom) && (m = "inline", j = c));
                f.extend(k, {href: g, type: m, content: j, title: h, selector: l});
                a[e] = k
            }), b.opts = f.extend(!0, {}, b.defaults, d), d.keys !== v && (b.opts.keys = d.keys ? f.extend({}, b.defaults.keys, d.keys) : !1), b.group = a, b._start(b.opts.index)
        },
        cancel: function () {
            var a = b.coming;
            a && !1 !== b.trigger("onCancel") && (b.hideLoading(), b.ajaxLoad && b.ajaxLoad.abort(), b.ajaxLoad = null, b.imgPreload && (b.imgPreload.onload = b.imgPreload.onerror = null), a.wrap && a.wrap.stop(!0, !0).trigger("onReset").remove(), b.coming = null, b.current || b._afterZoomOut(a))
        },
        close: function (a) {
            b.cancel();
            !1 !== b.trigger("beforeClose") && (b.unbindEvents(), b.isActive && (!b.isOpen || !0 === a ? (f(".fancybox-wrap").stop(!0).trigger("onReset").remove(), b._afterZoomOut()) : (b.isOpen = b.isOpened = !1, b.isClosing = !0, f(".fancybox-item, .fancybox-nav").remove(), b.wrap.stop(!0, !0).removeClass("fancybox-opened"), b.transitions[b.current.closeMethod]())))
        },
        play: function (a) {
            var d = function () {
                clearTimeout(b.player.timer)
            }, e = function () {
                d();
                b.current && b.player.isActive && (b.player.timer = setTimeout(b.next, b.current.playSpeed))
            }, c = function () {
                d();
                p.unbind(".player");
                b.player.isActive = !1;
                b.trigger("onPlayEnd")
            };
            if (!0 === a || !b.player.isActive && !1 !== a) {
                if (b.current && (b.current.loop || b.current.index < b.group.length - 1))b.player.isActive = !0, p.bind({
                    "onCancel.player beforeClose.player": c,
                    "onUpdate.player": e,
                    "beforeLoad.player": d
                }), e(), b.trigger("onPlayStart")
            } else c()
        },
        next: function (a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.next), b.jumpto(d.index + 1, a, "next"))
        },
        prev: function (a) {
            var d = b.current;
            d && (q(a) || (a = d.direction.prev), b.jumpto(d.index - 1, a, "prev"))
        },
        jumpto: function (a, d, e) {
            var c = b.current;
            c && (a = l(a), b.direction = d || c.direction[a >= c.index ? "next" : "prev"], b.router = e || "jumpto", c.loop && (0 > a && (a = c.group.length + a % c.group.length), a %= c.group.length), c.group[a] !== v && (b.cancel(), b._start(a)))
        },
        reposition: function (a, d) {
            var e = b.current, c = e ? e.wrap : null, k;
            c && (k = b._getPosition(d), a && "scroll" === a.type ? (delete k.position, c.stop(!0, !0).animate(k, 200)) : (c.css(k), e.pos = f.extend({}, e.dim, k)))
        },
        update: function (a) {
            var d = a && a.type, e = !d || "orientationchange" === d;
            e && (clearTimeout(B), B = null);
            b.isOpen && !B && (B = setTimeout(function () {
                var c = b.current;
                c && !b.isClosing && (b.wrap.removeClass("fancybox-tmp"), (e || "load" === d || "resize" === d && c.autoResize) && b._setDimension(), "scroll" === d && c.canShrink || b.reposition(a), b.trigger("onUpdate"), B = null)
            }, e && !s ? 0 : 300))
        },
        toggle: function (a) {
            b.isOpen && (b.current.fitToView = "boolean" === f.type(a) ? a : !b.current.fitToView, s && (b.wrap.removeAttr("style").addClass("fancybox-tmp"), b.trigger("onUpdate")), b.update())
        },
        hideLoading: function () {
            p.unbind(".loading");
            f("#fancybox-loading").remove()
        },
        showLoading: function () {
            var a, d;
            b.hideLoading();
            a = f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");
            p.bind("keydown.loading", function (a) {
                if (27 === (a.which || a.keyCode))a.preventDefault(), b.cancel()
            });
            b.defaults.fixed || (d = b.getViewport(), a.css({
                position: "absolute",
                top: 0.5 * d.h + d.y,
                left: 0.5 * d.w + d.x
            }))
        },
        getViewport: function () {
            var a = b.current && b.current.locked || !1, d = {x: n.scrollLeft(), y: n.scrollTop()};
            a ? (d.w = a[0].clientWidth, d.h = a[0].clientHeight) : (d.w = s && r.innerWidth ? r.innerWidth : n.width(), d.h = s && r.innerHeight ? r.innerHeight : n.height());
            return d
        },
        unbindEvents: function () {
            b.wrap && t(b.wrap) && b.wrap.unbind(".fb");
            p.unbind(".fb");
            n.unbind(".fb")
        },
        bindEvents: function () {
            var a = b.current, d;
            a && (n.bind("orientationchange.fb" + (s ? "" : " resize.fb") + (a.autoCenter && !a.locked ? " scroll.fb" : ""), b.update), (d = a.keys) && p.bind("keydown.fb", function (e) {
                var c = e.which || e.keyCode, k = e.target || e.srcElement;
                if (27 === c && b.coming)return !1;
                !e.ctrlKey && (!e.altKey && !e.shiftKey && !e.metaKey && (!k || !k.type && !f(k).is("[contenteditable]"))) && f.each(d, function (d, k) {
                    if (1 < a.group.length && k[c] !== v)return b[d](k[c]), e.preventDefault(), !1;
                    if (-1 < f.inArray(c, k))return b[d](), e.preventDefault(), !1
                })
            }), f.fn.mousewheel && a.mouseWheel && b.wrap.bind("mousewheel.fb", function (d, c, k, g) {
                for (var h = f(d.target || null), j = !1; h.length && !j && !h.is(".fancybox-skin") && !h.is(".fancybox-wrap");)j = h[0] && !(h[0].style.overflow && "hidden" === h[0].style.overflow) && (h[0].clientWidth && h[0].scrollWidth > h[0].clientWidth || h[0].clientHeight && h[0].scrollHeight > h[0].clientHeight), h = f(h).parent();
                if (0 !== c && !j && 1 < b.group.length && !a.canShrink) {
                    if (0 < g || 0 < k)b.prev(0 < g ? "down" : "left"); else if (0 > g || 0 > k)b.next(0 > g ? "up" : "right");
                    d.preventDefault()
                }
            }))
        },
        trigger: function (a, d) {
            var e, c = d || b.coming || b.current;
            if (c) {
                f.isFunction(c[a]) && (e = c[a].apply(c, Array.prototype.slice.call(arguments, 1)));
                if (!1 === e)return !1;
                c.helpers && f.each(c.helpers, function (d, e) {
                    if (e && b.helpers[d] && f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0, {}, b.helpers[d].defaults, e), c)
                });
                p.trigger(a)
            }
        },
        isImage: function (a) {
            return q(a) && a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
        },
        isSWF: function (a) {
            return q(a) && a.match(/\.(swf)((\?|#).*)?$/i)
        },
        _start: function (a) {
            var d = {}, e, c;
            a = l(a);
            e = b.group[a] || null;
            if (!e)return !1;
            d = f.extend(!0, {}, b.opts, e);
            e = d.margin;
            c = d.padding;
            "number" === f.type(e) && (d.margin = [e, e, e, e]);
            "number" === f.type(c) && (d.padding = [c, c, c, c]);
            d.modal && f.extend(!0, d, {
                closeBtn: !1,
                closeClick: !1,
                nextClick: !1,
                arrows: !1,
                mouseWheel: !1,
                keys: null,
                helpers: {overlay: {closeClick: !1}}
            });
            d.autoSize && (d.autoWidth = d.autoHeight = !0);
            "auto" === d.width && (d.autoWidth = !0);
            "auto" === d.height && (d.autoHeight = !0);
            d.group = b.group;
            d.index = a;
            b.coming = d;
            if (!1 === b.trigger("beforeLoad"))b.coming = null; else {
                c = d.type;
                e = d.href;
                if (!c)return b.coming = null, b.current && b.router && "jumpto" !== b.router ? (b.current.index = a, b[b.router](b.direction)) : !1;
                b.isActive = !0;
                if ("image" === c || "swf" === c)d.autoHeight = d.autoWidth = !1, d.scrolling = "visible";
                "image" === c && (d.aspectRatio = !0);
                "iframe" === c && s && (d.scrolling = "scroll");
                d.wrap = f(d.tpl.wrap).addClass("fancybox-" + (s ? "mobile" : "desktop") + " fancybox-type-" + c + " fancybox-tmp " + d.wrapCSS).appendTo(d.parent || "body");
                f.extend(d, {
                    skin: f(".fancybox-skin", d.wrap),
                    outer: f(".fancybox-outer", d.wrap),
                    inner: f(".fancybox-inner", d.wrap)
                });
                f.each(["Top", "Right", "Bottom", "Left"], function (a, b) {
                    d.skin.css("padding" + b, w(d.padding[a]))
                });
                b.trigger("onReady");
                if ("inline" === c || "html" === c) {
                    if (!d.content || !d.content.length)return b._error("content")
                } else if (!e)return b._error("href");
                "image" === c ? b._loadImage() : "ajax" === c ? b._loadAjax() : "iframe" === c ? b._loadIframe() : b._afterLoad()
            }
        },
        _error: function (a) {
            f.extend(b.coming, {
                type: "html",
                autoWidth: !0,
                autoHeight: !0,
                minWidth: 0,
                minHeight: 0,
                scrolling: "no",
                hasError: a,
                content: b.coming.tpl.error
            });
            b._afterLoad()
        },
        _loadImage: function () {
            var a = b.imgPreload = new Image;
            a.onload = function () {
                this.onload = this.onerror = null;
                b.coming.width = this.width / b.opts.pixelRatio;
                b.coming.height = this.height / b.opts.pixelRatio;
                b._afterLoad()
            };
            a.onerror = function () {
                this.onload = this.onerror = null;
                b._error("image")
            };
            a.src = b.coming.href;
            !0 !== a.complete && b.showLoading()
        },
        _loadAjax: function () {
            var a = b.coming;
            b.showLoading();
            b.ajaxLoad = f.ajax(f.extend({}, a.ajax, {
                url: a.href, error: function (a, e) {
                    b.coming && "abort" !== e ? b._error("ajax", a) : b.hideLoading()
                }, success: function (d, e) {
                    "success" === e && (a.content = d, b._afterLoad())
                }
            }))
        },
        _loadIframe: function () {
            var a = b.coming, d = f(a.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", s ? "auto" : a.iframe.scrolling).attr("src", a.href);
            f(a.wrap).bind("onReset", function () {
                try {
                    f(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                } catch (a) {
                }
            });
            a.iframe.preload && (b.showLoading(), d.one("load", function () {
                f(this).data("ready", 1);
                s || f(this).bind("load.fb", b.update);
                f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();
                b._afterLoad()
            }));
            a.content = d.appendTo(a.inner);
            a.iframe.preload || b._afterLoad()
        },
        _preloadImages: function () {
            var a = b.group, d = b.current, e = a.length, c = d.preload ? Math.min(d.preload, e - 1) : 0, f, g;
            for (g = 1; g <= c; g += 1)f = a[(d.index + g) % e], "image" === f.type && f.href && ((new Image).src = f.href)
        },
        _afterLoad: function () {
            var a = b.coming, d = b.current, e, c, k, g, h;
            b.hideLoading();
            if (a && !1 !== b.isActive)if (!1 === b.trigger("afterLoad", a, d))a.wrap.stop(!0).trigger("onReset").remove(), b.coming = null; else {
                d && (b.trigger("beforeChange", d), d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());
                b.unbindEvents();
                e = a.content;
                c = a.type;
                k = a.scrolling;
                f.extend(b, {wrap: a.wrap, skin: a.skin, outer: a.outer, inner: a.inner, current: a, previous: d});
                g = a.href;
                switch (c) {
                    case"inline":
                    case"ajax":
                    case"html":
                        a.selector ? e = f("<div>").html(e).find(a.selector) : t(e) && (e.data("fancybox-placeholder") || e.data("fancybox-placeholder", f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()), e = e.show().detach(), a.wrap.bind("onReset", function () {
                            f(this).find(e).length && e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                        }));
                        break;
                    case"image":
                        e = a.tpl.image.replace("{href}", g);
                        break;
                    case"swf":
                        e = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + g + '"></param>', h = "", f.each(a.swf, function (a, b) {
                            e += '<param name="' + a + '" value="' + b + '"></param>';
                            h += " " + a + '="' + b + '"'
                        }), e += '<embed src="' + g + '" type="application/x-shockwave-flash" width="100%" height="100%"' + h + "></embed></object>"
                }
                (!t(e) || !e.parent().is(a.inner)) && a.inner.append(e);
                b.trigger("beforeShow");
                a.inner.css("overflow", "yes" === k ? "scroll" : "no" === k ? "hidden" : k);
                b._setDimension();
                b.reposition();
                b.isOpen = !1;
                b.coming = null;
                b.bindEvents();
                if (b.isOpened) {
                    if (d.prevMethod)b.transitions[d.prevMethod]()
                } else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();
                b.transitions[b.isOpened ? a.nextMethod : a.openMethod]();
                b._preloadImages()
            }
        },
        _setDimension: function () {
            var a = b.getViewport(), d = 0, e = !1, c = !1, e = b.wrap, k = b.skin, g = b.inner, h = b.current, c = h.width, j = h.height, m = h.minWidth, u = h.minHeight, n = h.maxWidth, p = h.maxHeight, s = h.scrolling, q = h.scrollOutside ? h.scrollbarWidth : 0, x = h.margin, y = l(x[1] + x[3]), r = l(x[0] + x[2]), v, z, t, C, A, F, B, D, H;
            e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");
            x = l(k.outerWidth(!0) - k.width());
            v = l(k.outerHeight(!0) - k.height());
            z = y + x;
            t = r + v;
            C = E(c) ? (a.w - z) * l(c) / 100 : c;
            A = E(j) ? (a.h - t) * l(j) / 100 : j;
            if ("iframe" === h.type) {
                if (H = h.content, h.autoHeight && 1 === H.data("ready"))try {
                    H[0].contentWindow.document.location && (g.width(C).height(9999), F = H.contents().find("body"), q && F.css("overflow-x", "hidden"), A = F.outerHeight(!0))
                } catch (G) {
                }
            } else if (h.autoWidth || h.autoHeight)g.addClass("fancybox-tmp"), h.autoWidth || g.width(C), h.autoHeight || g.height(A), h.autoWidth && (C = g.width()), h.autoHeight && (A = g.height()), g.removeClass("fancybox-tmp");
            c = l(C);
            j = l(A);
            D = C / A;
            m = l(E(m) ? l(m, "w") - z : m);
            n = l(E(n) ? l(n, "w") - z : n);
            u = l(E(u) ? l(u, "h") - t : u);
            p = l(E(p) ? l(p, "h") - t : p);
            F = n;
            B = p;
            h.fitToView && (n = Math.min(a.w - z, n), p = Math.min(a.h - t, p));
            z = a.w - y;
            r = a.h - r;
            h.aspectRatio ? (c > n && (c = n, j = l(c / D)), j > p && (j = p, c = l(j * D)), c < m && (c = m, j = l(c / D)), j < u && (j = u, c = l(j * D))) : (c = Math.max(m, Math.min(c, n)), h.autoHeight && "iframe" !== h.type && (g.width(c), j = g.height()), j = Math.max(u, Math.min(j, p)));
            if (h.fitToView)if (g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(), h.aspectRatio)for (; (a > z || y > r) && (c > m && j > u) && !(19 < d++);)j = Math.max(u, Math.min(p, j - 10)), c = l(j * D), c < m && (c = m, j = l(c / D)), c > n && (c = n, j = l(c / D)), g.width(c).height(j), e.width(c + x), a = e.width(), y = e.height(); else c = Math.max(m, Math.min(c, c - (a - z))), j = Math.max(u, Math.min(j, j - (y - r)));
            q && ("auto" === s && j < A && c + x + q < z) && (c += q);
            g.width(c).height(j);
            e.width(c + x);
            a = e.width();
            y = e.height();
            e = (a > z || y > r) && c > m && j > u;
            c = h.aspectRatio ? c < F && j < B && c < C && j < A : (c < F || j < B) && (c < C || j < A);
            f.extend(h, {
                dim: {width: w(a), height: w(y)},
                origWidth: C,
                origHeight: A,
                canShrink: e,
                canExpand: c,
                wPadding: x,
                hPadding: v,
                wrapSpace: y - k.outerHeight(!0),
                skinSpace: k.height() - j
            });
            !H && (h.autoHeight && j > u && j < p && !c) && g.height("auto")
        },
        _getPosition: function (a) {
            var d = b.current, e = b.getViewport(), c = d.margin, f = b.wrap.width() + c[1] + c[3], g = b.wrap.height() + c[0] + c[2], c = {
                position: "absolute",
                top: c[0],
                left: c[3]
            };
            d.autoCenter && d.fixed && !a && g <= e.h && f <= e.w ? c.position = "fixed" : d.locked || (c.top += e.y, c.left += e.x);
            c.top = w(Math.max(c.top, c.top + (e.h - g) * d.topRatio));
            c.left = w(Math.max(c.left, c.left + (e.w - f) * d.leftRatio));
            return c
        },
        _afterZoomIn: function () {
            var a = b.current;
            a && (b.isOpen = b.isOpened = !0, b.wrap.css("overflow", "visible").addClass("fancybox-opened"), b.update(), (a.closeClick || a.nextClick && 1 < b.group.length) && b.inner.css("cursor", "pointer").bind("click.fb", function (d) {
                !f(d.target).is("a") && !f(d.target).parent().is("a") && (d.preventDefault(), b[a.closeClick ? "close" : "next"]())
            }), a.closeBtn && f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb", function (a) {
                a.preventDefault();
                b.close()
            }), a.arrows && 1 < b.group.length && ((a.loop || 0 < a.index) && f(a.tpl.prev).appendTo(b.outer).bind("click.fb", b.prev), (a.loop || a.index < b.group.length - 1) && f(a.tpl.next).appendTo(b.outer).bind("click.fb", b.next)), b.trigger("afterShow"), !a.loop && a.index === a.group.length - 1 ? b.play(!1) : b.opts.autoPlay && !b.player.isActive && (b.opts.autoPlay = !1, b.play()))
        },
        _afterZoomOut: function (a) {
            a = a || b.current;
            f(".fancybox-wrap").trigger("onReset").remove();
            f.extend(b, {
                group: {},
                opts: {},
                router: !1,
                current: null,
                isActive: !1,
                isOpened: !1,
                isOpen: !1,
                isClosing: !1,
                wrap: null,
                skin: null,
                outer: null,
                inner: null
            });
            b.trigger("afterClose", a)
        }
    });
    b.transitions = {
        getOrigPosition: function () {
            var a = b.current, d = a.element, e = a.orig, c = {}, f = 50, g = 50, h = a.hPadding, j = a.wPadding, m = b.getViewport();
            !e && (a.isDom && d.is(":visible")) && (e = d.find("img:first"), e.length || (e = d));
            t(e) ? (c = e.offset(), e.is("img") && (f = e.outerWidth(), g = e.outerHeight())) : (c.top = m.y + (m.h - g) * a.topRatio, c.left = m.x + (m.w - f) * a.leftRatio);
            if ("fixed" === b.wrap.css("position") || a.locked)c.top -= m.y, c.left -= m.x;
            return c = {
                top: w(c.top - h * a.topRatio),
                left: w(c.left - j * a.leftRatio),
                width: w(f + j),
                height: w(g + h)
            }
        }, step: function (a, d) {
            var e, c, f = d.prop;
            c = b.current;
            var g = c.wrapSpace, h = c.skinSpace;
            if ("width" === f || "height" === f)e = d.end === d.start ? 1 : (a - d.start) / (d.end - d.start), b.isClosing && (e = 1 - e), c = "width" === f ? c.wPadding : c.hPadding, c = a - c, b.skin[f](l("width" === f ? c : c - g * e)), b.inner[f](l("width" === f ? c : c - g * e - h * e))
        }, zoomIn: function () {
            var a = b.current, d = a.pos, e = a.openEffect, c = "elastic" === e, k = f.extend({opacity: 1}, d);
            delete k.position;
            c ? (d = this.getOrigPosition(), a.openOpacity && (d.opacity = 0.1)) : "fade" === e && (d.opacity = 0.1);
            b.wrap.css(d).animate(k, {
                duration: "none" === e ? 0 : a.openSpeed,
                easing: a.openEasing,
                step: c ? this.step : null,
                complete: b._afterZoomIn
            })
        }, zoomOut: function () {
            var a = b.current, d = a.closeEffect, e = "elastic" === d, c = {opacity: 0.1};
            e && (c = this.getOrigPosition(), a.closeOpacity && (c.opacity = 0.1));
            b.wrap.animate(c, {
                duration: "none" === d ? 0 : a.closeSpeed,
                easing: a.closeEasing,
                step: e ? this.step : null,
                complete: b._afterZoomOut
            })
        }, changeIn: function () {
            var a = b.current, d = a.nextEffect, e = a.pos, c = {opacity: 1}, f = b.direction, g;
            e.opacity = 0.1;
            "elastic" === d && (g = "down" === f || "up" === f ? "top" : "left", "down" === f || "right" === f ? (e[g] = w(l(e[g]) - 200), c[g] = "+=200px") : (e[g] = w(l(e[g]) + 200), c[g] = "-=200px"));
            "none" === d ? b._afterZoomIn() : b.wrap.css(e).animate(c, {
                duration: a.nextSpeed,
                easing: a.nextEasing,
                complete: b._afterZoomIn
            })
        }, changeOut: function () {
            var a = b.previous, d = a.prevEffect, e = {opacity: 0.1}, c = b.direction;
            "elastic" === d && (e["down" === c || "up" === c ? "top" : "left"] = ("up" === c || "left" === c ? "-" : "+") + "=200px");
            a.wrap.animate(e, {
                duration: "none" === d ? 0 : a.prevSpeed, easing: a.prevEasing, complete: function () {
                    f(this).trigger("onReset").remove()
                }
            })
        }
    };
    b.helpers.overlay = {
        defaults: {closeClick: !0, speedOut: 200, showEarly: !0, css: {}, locked: !s, fixed: !0},
        overlay: null,
        fixed: !1,
        el: f("html"),
        create: function (a) {
            a = f.extend({}, this.defaults, a);
            this.overlay && this.close();
            this.overlay = f('<div class="fancybox-overlay"></div>').appendTo(b.coming ? b.coming.parent : a.parent);
            this.fixed = !1;
            a.fixed && b.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
        },
        open: function (a) {
            var d = this;
            a = f.extend({}, this.defaults, a);
            this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(a);
            this.fixed || (n.bind("resize.overlay", f.proxy(this.update, this)), this.update());
            a.closeClick && this.overlay.bind("click.overlay", function (a) {
                if (f(a.target).hasClass("fancybox-overlay"))return b.isActive ? b.close() : d.close(), !1
            });
            this.overlay.css(a.css).show()
        },
        close: function () {
            var a, b;
            n.unbind("resize.overlay");
            this.el.hasClass("fancybox-lock") && (f(".fancybox-margin").removeClass("fancybox-margin"), a = n.scrollTop(), b = n.scrollLeft(), this.el.removeClass("fancybox-lock"), n.scrollTop(a).scrollLeft(b));
            f(".fancybox-overlay").remove().hide();
            f.extend(this, {overlay: null, fixed: !1})
        },
        update: function () {
            var a = "100%", b;
            this.overlay.width(a).height("100%");
            I ? (b = Math.max(G.documentElement.offsetWidth, G.body.offsetWidth), p.width() > b && (a = p.width())) : p.width() > n.width() && (a = p.width());
            this.overlay.width(a).height(p.height())
        },
        onReady: function (a, b) {
            var e = this.overlay;
            f(".fancybox-overlay").stop(!0, !0);
            e || this.create(a);
            a.locked && (this.fixed && b.fixed) && (e || (this.margin = p.height() > n.height() ? f("html").css("margin-right").replace("px", "") : !1), b.locked = this.overlay.append(b.wrap), b.fixed = !1);
            !0 === a.showEarly && this.beforeShow.apply(this, arguments)
        },
        beforeShow: function (a, b) {
            var e, c;
            b.locked && (!1 !== this.margin && (f("*").filter(function () {
                return "fixed" === f(this).css("position") && !f(this).hasClass("fancybox-overlay") && !f(this).hasClass("fancybox-wrap")
            }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), e = n.scrollTop(), c = n.scrollLeft(), this.el.addClass("fancybox-lock"), n.scrollTop(e).scrollLeft(c));
            this.open(a)
        },
        onUpdate: function () {
            this.fixed || this.update()
        },
        afterClose: function (a) {
            this.overlay && !b.coming && this.overlay.fadeOut(a.speedOut, f.proxy(this.close, this))
        }
    };
    b.helpers.title = {
        defaults: {type: "float", position: "bottom"}, beforeShow: function (a) {
            var d = b.current, e = d.title, c = a.type;
            f.isFunction(e) && (e = e.call(d.element, d));
            if (q(e) && "" !== f.trim(e)) {
                d = f('<div class="fancybox-title fancybox-title-' + c + '-wrap">' + e + "</div>");
                switch (c) {
                    case"inside":
                        c = b.skin;
                        break;
                    case"outside":
                        c = b.wrap;
                        break;
                    case"over":
                        c = b.inner;
                        break;
                    default:
                        c = b.skin, d.appendTo("body"), I && d.width(d.width()), d.wrapInner('<span class="child"></span>'), b.current.margin[2] += Math.abs(l(d.css("margin-bottom")))
                }
                d["top" === a.position ? "prependTo" : "appendTo"](c)
            }
        }
    };
    f.fn.fancybox = function (a) {
        var d, e = f(this), c = this.selector || "", k = function (g) {
            var h = f(this).blur(), j = d, k, l;
            !g.ctrlKey && (!g.altKey && !g.shiftKey && !g.metaKey) && !h.is(".fancybox-wrap") && (k = a.groupAttr || "data-fancybox-group", l = h.attr(k), l || (k = "rel", l = h.get(0)[k]), l && ("" !== l && "nofollow" !== l) && (h = c.length ? f(c) : e, h = h.filter("[" + k + '="' + l + '"]'), j = h.index(this)), a.index = j, !1 !== b.open(h, a) && g.preventDefault())
        };
        a = a || {};
        d = a.index || 0;
        !c || !1 === a.live ? e.unbind("click.fb-start").bind("click.fb-start", k) : p.undelegate(c, "click.fb-start").delegate(c + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", k);
        this.filter("[data-fancybox-start=1]").trigger("click");
        return this
    };
    p.ready(function () {
        var a, d;
        f.scrollbarWidth === v && (f.scrollbarWidth = function () {
            var a = f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), b = a.children(), b = b.innerWidth() - b.height(99).innerWidth();
            a.remove();
            return b
        });
        if (f.support.fixedPosition === v) {
            a = f.support;
            d = f('<div style="position:fixed;top:20px;"></div>').appendTo("body");
            var e = 20 === d[0].offsetTop || 15 === d[0].offsetTop;
            d.remove();
            a.fixedPosition = e
        }
        f.extend(b.defaults, {scrollbarWidth: f.scrollbarWidth(), fixed: f.support.fixedPosition, parent: f("body")});
        a = f(r).width();
        J.addClass("fancybox-lock-test");
        d = f(r).width();
        J.removeClass("fancybox-lock-test");
        f("<style type='text/css'>.fancybox-margin{margin-right:" + (d - a) + "px;}</style>").appendTo("head")
    })
})(window, document, jQuery);
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        factory(jQuery);
    }
}(function ($) {
    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'], toBind = ('onwheel' in document || document.documentMode >= 9) ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'], slice = Array.prototype.slice, nullLowestDeltaTimeout, lowestDelta;
    if ($.event.fixHooks) {
        for (var i = toFix.length; i;) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }
    var special = $.event.special.mousewheel = {
        version: '3.1.12', setup: function () {
            if (this.addEventListener) {
                for (var i = toBind.length; i;) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        }, teardown: function () {
            if (this.removeEventListener) {
                for (var i = toBind.length; i;) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        }, getLineHeight: function (elem) {
            var $elem = $(elem), $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        }, getPageHeight: function (elem) {
            return $(elem).height();
        }, settings: {adjustOldDeltas: true, normalizeOffset: true}
    };
    $.fn.extend({
        mousewheel: function (fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        }, unmousewheel: function (fn) {
            return this.unbind('mousewheel', fn);
        }
    });
    function handler(event) {
        var orgEvent = event || window.event, args = slice.call(arguments, 1), delta = 0, deltaX = 0, deltaY = 0, absDelta = 0, offsetX = 0, offsetY = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';
        if ('detail' in orgEvent) {
            deltaY = orgEvent.detail * -1;
        }
        if ('wheelDelta' in orgEvent) {
            deltaY = orgEvent.wheelDelta;
        }
        if ('wheelDeltaY' in orgEvent) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if ('wheelDeltaX' in orgEvent) {
            deltaX = orgEvent.wheelDeltaX * -1;
        }
        if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }
        delta = deltaY === 0 ? deltaX : deltaY;
        if ('deltaY' in orgEvent) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if ('deltaX' in orgEvent) {
            deltaX = orgEvent.deltaX;
            if (deltaY === 0) {
                delta = deltaX * -1;
            }
        }
        if (deltaY === 0 && deltaX === 0) {
            return;
        }
        if (orgEvent.deltaMode === 1) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if (orgEvent.deltaMode === 2) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }
        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;
            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                lowestDelta /= 40;
            }
        }
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }
        delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
        deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
        deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);
        if (special.settings.normalizeOffset && this.getBoundingClientRect) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        event.deltaMode = 0;
        args.unshift(event, delta, deltaX, deltaY);
        if (nullLowestDeltaTimeout) {
            clearTimeout(nullLowestDeltaTimeout);
        }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);
        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }
}));
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
    a.fn.jScrollPane = function (b) {
        function c(b, c) {
            function d(c) {
                var f, h, j, k, l, o, p = !1, q = !1;
                if (N = c, void 0 === O)l = b.scrollTop(), o = b.scrollLeft(), b.css({
                    overflow: "hidden",
                    padding: 0
                }), P = b.innerWidth() + ra, Q = b.innerHeight(), b.width(P), O = a('<div class="jspPane" />').css("padding", qa).append(b.children()), R = a('<div class="jspContainer" />').css({
                    width: P + "px",
                    height: Q + "px"
                }).append(O).appendTo(b); else {
                    if (b.css("width", ""), p = N.stickToBottom && A(), q = N.stickToRight && B(), k = b.innerWidth() + ra != P || b.outerHeight() != Q, k && (P = b.innerWidth() + ra, Q = b.innerHeight(), R.css({
                            width: P + "px",
                            height: Q + "px"
                        })), !k && sa == S && O.outerHeight() == T)return void b.width(P);
                    sa = S, O.css("width", ""), b.width(P), R.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                O.css("overflow", "auto"), S = c.contentWidth ? c.contentWidth : O[0].scrollWidth, T = O[0].scrollHeight, O.css("overflow", ""), U = S / P, V = T / Q, W = V > 1, X = U > 1, X || W ? (b.addClass("jspScrollable"), f = N.maintainPosition && ($ || ba), f && (h = y(), j = z()), e(), g(), i(), f && (w(q ? S - P : h, !1), v(p ? T - Q : j, !1)), F(), C(), L(), N.enableKeyboardNavigation && H(), N.clickOnTrack && m(), J(), N.hijackInternalLinks && K()) : (b.removeClass("jspScrollable"), O.css({
                    top: 0,
                    left: 0,
                    width: R.width() - ra
                }), D(), G(), I(), n()), N.autoReinitialise && !pa ? pa = setInterval(function () {
                    d(N)
                }, N.autoReinitialiseDelay) : !N.autoReinitialise && pa && clearInterval(pa), l && b.scrollTop(0) && v(l, !1), o && b.scrollLeft(0) && w(o, !1), b.trigger("jsp-initialised", [X || W])
            }

            function e() {
                W && (R.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />'))), ca = R.find(">.jspVerticalBar"), da = ca.find(">.jspTrack"), Y = da.find(">.jspDrag"), N.showArrows && (ha = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", k(0, -1)).bind("click.jsp", E), ia = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", k(0, 1)).bind("click.jsp", E), N.arrowScrollOnHover && (ha.bind("mouseover.jsp", k(0, -1, ha)), ia.bind("mouseover.jsp", k(0, 1, ia))), j(da, N.verticalArrowPositions, ha, ia)), fa = Q, R.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function () {
                    fa -= a(this).outerHeight()
                }), Y.hover(function () {
                    Y.addClass("jspHover")
                }, function () {
                    Y.removeClass("jspHover")
                }).bind("mousedown.jsp", function (b) {
                    a("html").bind("dragstart.jsp selectstart.jsp", E), Y.addClass("jspActive");
                    var c = b.pageY - Y.position().top;
                    return a("html").bind("mousemove.jsp", function (a) {
                        p(a.pageY - c, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", o), !1
                }), f())
            }

            function f() {
                da.height(fa + "px"), $ = 0, ea = N.verticalGutter + da.outerWidth(), O.width(P - ea - ra);
                try {
                    0 === ca.position().left && O.css("margin-left", ea + "px")
                } catch (a) {
                }
            }

            function g() {
                X && (R.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />'))), ja = R.find(">.jspHorizontalBar"), ka = ja.find(">.jspTrack"), _ = ka.find(">.jspDrag"), N.showArrows && (na = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", k(-1, 0)).bind("click.jsp", E), oa = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", k(1, 0)).bind("click.jsp", E), N.arrowScrollOnHover && (na.bind("mouseover.jsp", k(-1, 0, na)), oa.bind("mouseover.jsp", k(1, 0, oa))), j(ka, N.horizontalArrowPositions, na, oa)), _.hover(function () {
                    _.addClass("jspHover")
                }, function () {
                    _.removeClass("jspHover")
                }).bind("mousedown.jsp", function (b) {
                    a("html").bind("dragstart.jsp selectstart.jsp", E), _.addClass("jspActive");
                    var c = b.pageX - _.position().left;
                    return a("html").bind("mousemove.jsp", function (a) {
                        r(a.pageX - c, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", o), !1
                }), la = R.innerWidth(), h())
            }

            function h() {
                R.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function () {
                    la -= a(this).outerWidth()
                }), ka.width(la + "px"), ba = 0
            }

            function i() {
                if (X && W) {
                    var b = ka.outerHeight(), c = da.outerWidth();
                    fa -= b, a(ja).find(">.jspCap:visible,>.jspArrow").each(function () {
                        la += a(this).outerWidth()
                    }), la -= c, Q -= c, P -= b, ka.parent().append(a('<div class="jspCorner" />').css("width", b + "px")), f(), h()
                }
                X && O.width(R.outerWidth() - ra + "px"), T = O.outerHeight(), V = T / Q, X && (ma = Math.ceil(1 / U * la), ma > N.horizontalDragMaxWidth ? ma = N.horizontalDragMaxWidth : ma < N.horizontalDragMinWidth && (ma = N.horizontalDragMinWidth), _.width(ma + "px"), aa = la - ma, s(ba)), W && (ga = Math.ceil(1 / V * fa), ga > N.verticalDragMaxHeight ? ga = N.verticalDragMaxHeight : ga < N.verticalDragMinHeight && (ga = N.verticalDragMinHeight), Y.height(ga + "px"), Z = fa - ga, q($))
            }

            function j(a, b, c, d) {
                var e, f = "before", g = "after";
                "os" == b && (b = /Mac/.test(navigator.platform) ? "after" : "split"), b == f ? g = b : b == g && (f = b, e = c, c = d, d = e), a[f](c)[g](d)
            }

            function k(a, b, c) {
                return function () {
                    return l(a, b, this, c), this.blur(), !1
                }
            }

            function l(b, c, d, e) {
                d = a(d).addClass("jspActive");
                var f, g, h = !0, i = function () {
                    0 !== b && ta.scrollByX(b * N.arrowButtonSpeed), 0 !== c && ta.scrollByY(c * N.arrowButtonSpeed), g = setTimeout(i, h ? N.initialDelay : N.arrowRepeatFreq), h = !1
                };
                i(), f = e ? "mouseout.jsp" : "mouseup.jsp", e = e || a("html"), e.bind(f, function () {
                    d.removeClass("jspActive"), g && clearTimeout(g), g = null, e.unbind(f)
                })
            }

            function m() {
                n(), W && da.bind("mousedown.jsp", function (b) {
                    if (void 0 === b.originalTarget || b.originalTarget == b.currentTarget) {
                        var c, d = a(this), e = d.offset(), f = b.pageY - e.top - $, g = !0, h = function () {
                            var a = d.offset(), e = b.pageY - a.top - ga / 2, j = Q * N.scrollPagePercent, k = Z * j / (T - Q);
                            if (0 > f)$ - k > e ? ta.scrollByY(-j) : p(e); else {
                                if (!(f > 0))return void i();
                                e > $ + k ? ta.scrollByY(j) : p(e)
                            }
                            c = setTimeout(h, g ? N.initialDelay : N.trackClickRepeatFreq), g = !1
                        }, i = function () {
                            c && clearTimeout(c), c = null, a(document).unbind("mouseup.jsp", i)
                        };
                        return h(), a(document).bind("mouseup.jsp", i), !1
                    }
                }), X && ka.bind("mousedown.jsp", function (b) {
                    if (void 0 === b.originalTarget || b.originalTarget == b.currentTarget) {
                        var c, d = a(this), e = d.offset(), f = b.pageX - e.left - ba, g = !0, h = function () {
                            var a = d.offset(), e = b.pageX - a.left - ma / 2, j = P * N.scrollPagePercent, k = aa * j / (S - P);
                            if (0 > f)ba - k > e ? ta.scrollByX(-j) : r(e); else {
                                if (!(f > 0))return void i();
                                e > ba + k ? ta.scrollByX(j) : r(e)
                            }
                            c = setTimeout(h, g ? N.initialDelay : N.trackClickRepeatFreq), g = !1
                        }, i = function () {
                            c && clearTimeout(c), c = null, a(document).unbind("mouseup.jsp", i)
                        };
                        return h(), a(document).bind("mouseup.jsp", i), !1
                    }
                })
            }

            function n() {
                ka && ka.unbind("mousedown.jsp"), da && da.unbind("mousedown.jsp")
            }

            function o() {
                a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), Y && Y.removeClass("jspActive"), _ && _.removeClass("jspActive")
            }

            function p(a, b) {
                W && (0 > a ? a = 0 : a > Z && (a = Z), void 0 === b && (b = N.animateScroll), b ? ta.animate(Y, "top", a, q) : (Y.css("top", a), q(a)))
            }

            function q(a) {
                void 0 === a && (a = Y.position().top), R.scrollTop(0), $ = a || 0;
                var c = 0 === $, d = $ == Z, e = a / Z, f = -e * (T - Q);
                (ua != c || wa != d) && (ua = c, wa = d, b.trigger("jsp-arrow-change", [ua, wa, va, xa])), t(c, d), O.css("top", f), b.trigger("jsp-scroll-y", [-f, c, d]).trigger("scroll")
            }

            function r(a, b) {
                X && (0 > a ? a = 0 : a > aa && (a = aa), void 0 === b && (b = N.animateScroll), b ? ta.animate(_, "left", a, s) : (_.css("left", a), s(a)))
            }

            function s(a) {
                void 0 === a && (a = _.position().left), R.scrollTop(0), ba = a || 0;
                var c = 0 === ba, d = ba == aa, e = a / aa, f = -e * (S - P);
                (va != c || xa != d) && (va = c, xa = d, b.trigger("jsp-arrow-change", [ua, wa, va, xa])), u(c, d), O.css("left", f), b.trigger("jsp-scroll-x", [-f, c, d]).trigger("scroll")
            }

            function t(a, b) {
                N.showArrows && (ha[a ? "addClass" : "removeClass"]("jspDisabled"), ia[b ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function u(a, b) {
                N.showArrows && (na[a ? "addClass" : "removeClass"]("jspDisabled"), oa[b ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function v(a, b) {
                var c = a / (T - Q);
                p(c * Z, b)
            }

            function w(a, b) {
                var c = a / (S - P);
                r(c * aa, b)
            }

            function x(b, c, d) {
                var e, f, g, h, i, j, k, l, m, n = 0, o = 0;
                try {
                    e = a(b)
                } catch (p) {
                    return
                }
                for (f = e.outerHeight(), g = e.outerWidth(), R.scrollTop(0), R.scrollLeft(0); !e.is(".jspPane");)if (n += e.position().top, o += e.position().left, e = e.offsetParent(), /^body|html$/i.test(e[0].nodeName))return;
                h = z(), j = h + Q, h > n || c ? l = n - N.horizontalGutter : n + f > j && (l = n - Q + f + N.horizontalGutter), isNaN(l) || v(l, d), i = y(), k = i + P, i > o || c ? m = o - N.horizontalGutter : o + g > k && (m = o - P + g + N.horizontalGutter), isNaN(m) || w(m, d)
            }

            function y() {
                return -O.position().left
            }

            function z() {
                return -O.position().top
            }

            function A() {
                var a = T - Q;
                return a > 20 && a - z() < 10
            }

            function B() {
                var a = S - P;
                return a > 20 && a - y() < 10
            }

            function C() {
                R.unbind(za).bind(za, function (a, b, c, d) {
                    ba || (ba = 0), $ || ($ = 0);
                    var e = ba, f = $, g = a.deltaFactor || N.mouseWheelSpeed;
                    return ta.scrollBy(c * g, -d * g, !1), e == ba && f == $
                })
            }

            function D() {
                R.unbind(za)
            }

            function E() {
                return !1
            }

            function F() {
                O.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function (a) {
                    x(a.target, !1)
                })
            }

            function G() {
                O.find(":input,a").unbind("focus.jsp")
            }

            function H() {
                function c() {
                    var a = ba, b = $;
                    switch (d) {
                        case 40:
                            ta.scrollByY(N.keyboardSpeed, !1);
                            break;
                        case 38:
                            ta.scrollByY(-N.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            ta.scrollByY(Q * N.scrollPagePercent, !1);
                            break;
                        case 33:
                            ta.scrollByY(-Q * N.scrollPagePercent, !1);
                            break;
                        case 39:
                            ta.scrollByX(N.keyboardSpeed, !1);
                            break;
                        case 37:
                            ta.scrollByX(-N.keyboardSpeed, !1)
                    }
                    return e = a != ba || b != $
                }

                var d, e, f = [];
                X && f.push(ja[0]), W && f.push(ca[0]), O.bind("focus.jsp", function () {
                    b.focus()
                }), b.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function (b) {
                    if (b.target === this || f.length && a(b.target).closest(f).length) {
                        var g = ba, h = $;
                        switch (b.keyCode) {
                            case 40:
                            case 38:
                            case 34:
                            case 32:
                            case 33:
                            case 39:
                            case 37:
                                d = b.keyCode, c();
                                break;
                            case 35:
                                v(T - Q), d = null;
                                break;
                            case 36:
                                v(0), d = null
                        }
                        return e = b.keyCode == d && g != ba || h != $, !e
                    }
                }).bind("keypress.jsp", function (a) {
                    return a.keyCode == d && c(), !e
                }), N.hideFocus ? (b.css("outline", "none"), "hideFocus" in R[0] && b.attr("hideFocus", !0)) : (b.css("outline", ""), "hideFocus" in R[0] && b.attr("hideFocus", !1))
            }

            function I() {
                b.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), O.unbind(".jsp")
            }

            function J() {
                if (location.hash && location.hash.length > 1) {
                    var b, c, d = escape(location.hash.substr(1));
                    try {
                        b = a("#" + d + ', a[name="' + d + '"]')
                    } catch (e) {
                        return
                    }
                    b.length && O.find(d) && (0 === R.scrollTop() ? c = setInterval(function () {
                        R.scrollTop() > 0 && (x(b, !0), a(document).scrollTop(R.position().top), clearInterval(c))
                    }, 50) : (x(b, !0), a(document).scrollTop(R.position().top)))
                }
            }

            function K() {
                a(document.body).data("jspHijack") || (a(document.body).data("jspHijack", !0), a(document.body).delegate("a[href*=#]", "click", function (b) {
                    var c, d, e, f, g, h, i = this.href.substr(0, this.href.indexOf("#")), j = location.href;
                    if (-1 !== location.href.indexOf("#") && (j = location.href.substr(0, location.href.indexOf("#"))), i === j) {
                        c = escape(this.href.substr(this.href.indexOf("#") + 1));
                        try {
                            d = a("#" + c + ', a[name="' + c + '"]')
                        } catch (k) {
                            return
                        }
                        d.length && (e = d.closest(".jspScrollable"), f = e.data("jsp"), f.scrollToElement(d, !0), e[0].scrollIntoView && (g = a(window).scrollTop(), h = d.offset().top, (g > h || h > g + a(window).height()) && e[0].scrollIntoView()), b.preventDefault())
                    }
                }))
            }

            function L() {
                var a, b, c, d, e, f = !1;
                R.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function (g) {
                    var h = g.originalEvent.touches[0];
                    a = y(), b = z(), c = h.pageX, d = h.pageY, e = !1, f = !0
                }).bind("touchmove.jsp", function (g) {
                    if (f) {
                        var h = g.originalEvent.touches[0], i = ba, j = $;
                        return ta.scrollTo(a + c - h.pageX, b + d - h.pageY), e = e || Math.abs(c - h.pageX) > 5 || Math.abs(d - h.pageY) > 5, i == ba && j == $
                    }
                }).bind("touchend.jsp", function (a) {
                    f = !1
                }).bind("click.jsp-touchclick", function (a) {
                    return e ? (e = !1, !1) : void 0
                })
            }

            function M() {
                var a = z(), c = y();
                b.removeClass("jspScrollable").unbind(".jsp"), O.unbind(".jsp"), b.replaceWith(ya.append(O.children())), ya.scrollTop(a), ya.scrollLeft(c), pa && clearInterval(pa)
            }

            var N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta = this, ua = !0, va = !0, wa = !1, xa = !1, ya = b.clone(!1, !1).empty(), za = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            "border-box" === b.css("box-sizing") ? (qa = 0, ra = 0) : (qa = b.css("paddingTop") + " " + b.css("paddingRight") + " " + b.css("paddingBottom") + " " + b.css("paddingLeft"), ra = (parseInt(b.css("paddingLeft"), 10) || 0) + (parseInt(b.css("paddingRight"), 10) || 0)), a.extend(ta, {
                reinitialise: function (b) {
                    b = a.extend({}, N, b), d(b)
                }, scrollToElement: function (a, b, c) {
                    x(a, b, c)
                }, scrollTo: function (a, b, c) {
                    w(a, c), v(b, c)
                }, scrollToX: function (a, b) {
                    w(a, b)
                }, scrollToY: function (a, b) {
                    v(a, b)
                }, scrollToPercentX: function (a, b) {
                    w(a * (S - P), b)
                }, scrollToPercentY: function (a, b) {
                    v(a * (T - Q), b)
                }, scrollBy: function (a, b, c) {
                    ta.scrollByX(a, c), ta.scrollByY(b, c)
                }, scrollByX: function (a, b) {
                    var c = y() + Math[0 > a ? "floor" : "ceil"](a), d = c / (S - P);
                    r(d * aa, b)
                }, scrollByY: function (a, b) {
                    var c = z() + Math[0 > a ? "floor" : "ceil"](a), d = c / (T - Q);
                    p(d * Z, b)
                }, positionDragX: function (a, b) {
                    r(a, b)
                }, positionDragY: function (a, b) {
                    p(a, b)
                }, animate: function (a, b, c, d) {
                    var e = {};
                    e[b] = c, a.animate(e, {duration: N.animateDuration, easing: N.animateEase, queue: !1, step: d})
                }, getContentPositionX: function () {
                    return y()
                }, getContentPositionY: function () {
                    return z()
                }, getContentWidth: function () {
                    return S
                }, getContentHeight: function () {
                    return T
                }, getPercentScrolledX: function () {
                    return y() / (S - P)
                }, getPercentScrolledY: function () {
                    return z() / (T - Q)
                }, getIsScrollableH: function () {
                    return X
                }, getIsScrollableV: function () {
                    return W
                }, getContentPane: function () {
                    return O
                }, scrollToBottom: function (a) {
                    p(Z, a)
                }, hijackInternalLinks: a.noop, destroy: function () {
                    M()
                }
            }), d(c)
        }

        return b = a.extend({}, a.fn.jScrollPane.defaults, b), a.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function () {
            b[this] = b[this] || b.speed
        }), this.each(function () {
            var d = a(this), e = d.data("jsp");
            e ? e.reinitialise(b) : (a("script", d).filter('[type="text/javascript"],:not([type])').remove(), e = new c(d, b), d.data("jsp", e))
        })
    }, a.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: void 0,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 3,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
});
eval(function (p, a, c, k, e, r) {
    e = function (c) {
        return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
        while (c--)r[e(c)] = k[c] || e(c);
        k = [function (e) {
            return r[e]
        }];
        e = function () {
            return '\\w+'
        };
        c = 1
    }
    ;
    while (c--)if (k[c])p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    return p
}('(D($){8($.1s.1v){H}$.1s.6i=$.1s.1v=D(u,w){8(1l.S==0){18(J,\'6j 55 6k 1j "\'+1l.4o+\'".\');H 1l}8(1l.S>1){H 1l.1W(D(){$(1l).1v(u,w)})}F y=1l,$12=1l[0],56=L;8(y.1q(\'57\')){56=y.1P(\'3o\',\'4p\');y.T(\'3o\',[\'4q\',J])}F z={};z.59=D(o,a,b){o=3S($12,o);o.E=6l($12,o.E);o.1K=6m($12,o.1K);o.N=6n($12,o.N);o.14=5a($12,o.14);o.16=5a($12,o.16);o.1b=6o($12,o.1b);o.1r=6p($12,o.1r);o.1Q=6q($12,o.1Q);8(a){31=$.1L(J,{},$.1s.1v.5b,o)}7=$.1L(J,{},$.1s.1v.5b,o);7.d=6r(7);A.2l=(7.2l==\'5c\'||7.2l==\'1m\')?\'16\':\'14\';F c=y.13(),2m=5d($1n,7,\'P\');8(3p(7.25)){7.25=\'7Q\'+G.3T}7.3U=5e(7,2m);7.E=6s(7.E,7,c,b);7[7.d[\'P\']]=6t(7[7.d[\'P\']],7,c);7[7.d[\'1e\']]=6u(7[7.d[\'1e\']],7,c);8(7.2H){8(!3V(7[7.d[\'P\']])){7[7.d[\'P\']]=\'2I%\'}}8(3V(7[7.d[\'P\']])){A.6v=J;A.4r=7[7.d[\'P\']];7[7.d[\'P\']]=4s(2m,A.4r);8(!7.E.M){7.E.U.1d=J}}8(7.2H){7.1R=L;7.1i=[0,0,0,0];7.1B=L;7.E.U.1d=L}O{8(!7.E.M){7=6w(7,2m)}8(!7[7.d[\'P\']]){8(!7.E.U.1d&&Y(7.E[7.d[\'P\']])&&7.E.1t==\'*\'){7[7.d[\'P\']]=7.E.M*7.E[7.d[\'P\']];7.1B=L}O{7[7.d[\'P\']]=\'1d\'}}8(1z(7.1B)){7.1B=(Y(7[7.d[\'P\']]))?\'5f\':L}8(7.E.U.1d){7.E.M=32(c,7,0)}}8(7.E.1t!=\'*\'&&!7.E.U.1d){7.E.U.4t=7.E.M;7.E.M=3W(c,7,0)}7.E.M=2x(7.E.M,7,7.E.U.2c,$12);7.E.U.20=7.E.M;8(7.2H){8(!7.E.U.34){7.E.U.34=7.E.M}8(!7.E.U.1X){7.E.U.1X=7.E.M}7=5g(7,c,2m)}O{7.1i=6x(7.1i);8(7.1B==\'3q\'){7.1B=\'1m\'}O 8(7.1B==\'5h\'){7.1B=\'35\'}1F(7.1B){R\'5f\':R\'1m\':R\'35\':8(7[7.d[\'P\']]!=\'1d\'){7=5i(7,c);7.1R=J}17;2J:7.1B=L;7.1R=(7.1i[0]==0&&7.1i[1]==0&&7.1i[2]==0&&7.1i[3]==0)?L:J;17}}8(!Y(7.1K.1M)){7.1K.1M=6y}8(1z(7.1K.E)){7.1K.E=(7.2H||7.E.U.1d||7.E.1t!=\'*\')?\'M\':7.E.M}7.N=$.1L(J,{},7.1K,7.N);7.14=$.1L(J,{},7.1K,7.14);7.16=$.1L(J,{},7.1K,7.16);7.1b=$.1L(J,{},7.1K,7.1b);7.N=6z($12,7.N);7.14=5j($12,7.14);7.16=5j($12,7.16);7.1b=6A($12,7.1b);7.1r=6B($12,7.1r);7.1Q=6C($12,7.1Q);8(7.2n){7.2n=5k(7.2n)}8(7.N.5l){7.N.4u=7.N.5l;3X(\'N.5l\',\'N.4u\')}8(7.N.5m){7.N.4v=7.N.5m;3X(\'N.5m\',\'N.4v\')}8(7.N.5n){7.N.4w=7.N.5n;3X(\'N.5n\',\'N.4w\')}8(7.N.5o){7.N.2K=7.N.5o;3X(\'N.5o\',\'N.2K\')}};z.6D=D(){y.1q(\'57\',J);F a=y.13(),3Y=6E(y,[\'6F\',\'6G\',\'3r\',\'3q\',\'35\',\'5h\',\'1m\',\'3Z\',\'P\',\'1e\',\'6H\',\'1S\',\'5p\',\'6I\']),5q=\'7R\';1F(3Y.3r){R\'6J\':R\'7S\':5q=3Y.3r;17}8(G.3s==\'36\'){41($1n)}O{$1n.Z(3Y)}$1n.Z({\'7T\':\'3t\',\'3r\':5q});41(y);y.1q(\'6K\',3Y.3Z);y.Z({\'6F\':\'1m\',\'6G\':\'42\',\'3r\':\'6J\',\'3q\':0,\'35\':\'N\',\'5h\':\'N\',\'1m\':0,\'6H\':0,\'1S\':0,\'5p\':0,\'6I\':0});4x(a,7);41(a);8(7.2H){5r(7,a)}};z.6L=D(){z.5s();y.11(I(\'6M\',G),D(e,a){e.1g();8(!A.2d){8(7.N.W){7.N.W.3a(2y(\'4y\',G))}}A.2d=J;8(7.N.1G){7.N.1G=L;y.T(I(\'3b\',G),a)}H J});y.11(I(\'5t\',G),D(e){e.1g();8(A.26){43(V)}H J});y.11(I(\'3b\',G),D(e,a,b){e.1g();1u=3u(1u);8(a&&A.26){V.2d=J;F c=2o()-V.2L;V.1M-=c;8(V.4z){V.4z.1M-=c}8(V.4A){V.4A.1M-=c}43(V,L)}8(!A.27&&!A.26){8(b){1u.3v+=2o()-1u.2L}}8(!A.27){8(7.N.W){7.N.W.3a(2y(\'6N\',G))}}A.27=J;8(7.N.4v){F d=7.N.2K-1u.3v,3c=2I-1H.2z(d*2I/7.N.2K);7.N.4v.1h($12,3c,d)}H J});y.11(I(\'1G\',G),D(e,b,c,d){e.1g();1u=3u(1u);F v=[b,c,d],t=[\'2M\',\'28\',\'3d\'],a=3e(v,t);b=a[0];c=a[1];d=a[2];8(b!=\'14\'&&b!=\'16\'){b=A.2l}8(!Y(c)){c=0}8(!1k(d)){d=L}8(d){A.2d=L;7.N.1G=J}8(!7.N.1G){e.2e();H 18(G,\'3w 4y: 2p 3f.\')}8(A.27){8(7.N.W){7.N.W.2N(2y(\'4y\',G));7.N.W.2N(2y(\'6N\',G))}}A.27=L;1u.2L=2o();F f=7.N.2K+c;44=f-1u.3v;3c=2I-1H.2z(44*2I/f);8(7.N.1f){1u.1f=7U(D(){F a=2o()-1u.2L+1u.3v,3c=1H.2z(a*2I/f);7.N.1f.4B.1h(7.N.1f.2q[0],3c)},7.N.1f.5u)}1u.N=7V(D(){8(7.N.1f){7.N.1f.4B.1h(7.N.1f.2q[0],2I)}8(7.N.4w){7.N.4w.1h($12,3c,44)}8(A.26){y.T(I(\'1G\',G),b)}O{y.T(I(b,G),7.N)}},44);8(7.N.4u){7.N.4u.1h($12,3c,44)}H J});y.11(I(\'3g\',G),D(e){e.1g();8(V.2d){V.2d=L;A.27=L;A.26=J;V.2L=2o();3x(V,G)}O{y.T(I(\'1G\',G))}H J});y.11(I(\'14\',G)+\' \'+I(\'16\',G),D(e,b,f,g,h){e.1g();8(A.2d||y.2f(\':3t\')){e.2e();H 18(G,\'3w 4y 7W 3t: 2p 3f.\')}F i=(Y(7.E.4C))?7.E.4C:7.E.M+1;8(i>K.Q){e.2e();H 18(G,\'2p 6O E (\'+K.Q+\' Q, \'+i+\' 6P): 2p 3f.\')}F v=[b,f,g,h],t=[\'2A\',\'28/2M\',\'D\',\'3d\'],a=3e(v,t);b=a[0];f=a[1];g=a[2];h=a[3];F k=e.5v.19(G.3y.45.S);8(!1T(b)){b={}}8(1o(g)){b.3h=g}8(1k(h)){b.2O=h}b=$.1L(J,{},7[k],b);8(b.5w&&!b.5w.1h($12,k)){e.2e();H 18(G,\'7X "5w" 7Y L.\')}8(!Y(f)){8(7.E.1t!=\'*\'){f=\'M\'}O{F m=[f,b.E,7[k].E];1j(F a=0,l=m.S;a<l;a++){8(Y(m[a])||m[a]==\'6Q\'||m[a]==\'M\'){f=m[a];17}}}1F(f){R\'6Q\':e.2e();H y.1P(I(k+\'7Z\',G),[b,g]);17;R\'M\':8(!7.E.U.1d&&7.E.1t==\'*\'){f=7.E.M}17}}8(V.2d){y.T(I(\'3g\',G));y.T(I(\'2O\',G),[k,[b,f,g]]);e.2e();H 18(G,\'3w 80 3f.\')}8(b.1M>0){8(A.26){8(b.2O){8(b.2O==\'2P\'){2g=[]}8(b.2O!=\'X\'||2g.S==0){y.T(I(\'2O\',G),[k,[b,f,g]])}}e.2e();H 18(G,\'3w 81 3f.\')}}1u.3v=0;y.T(I(\'6R\'+k,G),[b,f]);8(7.2n){F s=7.2n,c=[b,f];1j(F j=0,l=s.S;j<l;j++){F d=k;8(!s[j][2]){d=(d==\'14\')?\'16\':\'14\'}8(!s[j][1]){c[0]=s[j][0].1P(\'3o\',[\'6S\',d])}c[1]=f+s[j][3];s[j][0].T(\'3o\',[\'6R\'+d,c])}}H J});y.11(I(\'82\',G),D(e,b,c){e.1g();F d=y.13();8(!7.1U){8(K.X==0){8(7.3z){y.T(I(\'16\',G),K.Q-1)}H e.2e()}}1Y(d,7);8(!Y(c)){8(7.E.U.1d){c=4D(d,7,K.Q-1)}O 8(7.E.1t!=\'*\'){F f=(Y(b.E))?b.E:5x(y,7);c=6T(d,7,K.Q-1,f)}O{c=7.E.M}c=4E(c,7,b.E,$12)}8(!7.1U){8(K.Q-c<K.X){c=K.Q-K.X}}7.E.U.20=7.E.M;8(7.E.U.1d){F g=2x(32(d,7,K.Q-c),7,7.E.U.2c,$12);8(7.E.M+c<=g&&c<K.Q){c++;g=2x(32(d,7,K.Q-c),7,7.E.U.2c,$12)}7.E.M=g}O 8(7.E.1t!=\'*\'){F g=3W(d,7,K.Q-c);7.E.M=2x(g,7,7.E.U.2c,$12)}1Y(d,7,J);8(c==0){e.2e();H 18(G,\'0 E 46 1K: 2p 3f.\')}18(G,\'6U \'+c+\' E 5y.\');K.X+=c;2h(K.X>=K.Q){K.X-=K.Q}8(!7.1U){8(K.X==0&&b.4F){b.4F.1h($12,\'14\')}8(!7.3z){3A(7,K.X,G)}}y.13().19(K.Q-c,K.Q).83(y);8(K.Q<7.E.M+c){y.13().19(0,(7.E.M+c)-K.Q).4G(J).47(y)}F d=y.13(),3i=6V(d,7,c),2i=6W(d,7),1Z=d.1N(c-1),21=3i.2P(),2r=2i.2P();1Y(d,7);F h=0,2B=0;8(7.1B){F p=4H(2i,7);h=p[0];2B=p[1]}F i=(h<0)?7.1i[7.d[3]]:0;F j=L,2Q=$();8(7.E.M<c){2Q=d.19(7.E.U.20,c);8(b.1V==\'6X\'){F k=7.E[7.d[\'P\']];j=2Q;1Z=2r;5z(j);7.E[7.d[\'P\']]=\'1d\'}}F l=L,3B=2R(d.19(0,c),7,\'P\'),2j=4I(4J(2i,7,J),7,!7.1R),3C=0,29={},4K={},2s={},2S={},4L={},2T={},5A={},2U=5B(b,7,c,3B);1F(b.1V){R\'1I\':R\'1I-1w\':3C=2R(d.19(0,7.E.M),7,\'P\');17}8(j){7.E[7.d[\'P\']]=k}1Y(d,7,J);8(2B>=0){1Y(21,7,7.1i[7.d[1]])}8(h>=0){1Y(1Z,7,7.1i[7.d[3]])}8(7.1B){7.1i[7.d[1]]=2B;7.1i[7.d[3]]=h}2T[7.d[\'1m\']]=-(3B-i);5A[7.d[\'1m\']]=-(3C-i);4K[7.d[\'1m\']]=2j[7.d[\'P\']];F m=D(){},1O=D(){},1C=D(){},3D=D(){},2C=D(){},5C=D(){},1D=D(){},3E=D(){},1x=D(){},1y=D(){},1J=D(){};1F(b.1V){R\'3j\':R\'1I\':R\'1I-1w\':R\'22\':R\'22-1w\':l=y.4G(J).47($1n);17}1F(b.1V){R\'3j\':R\'22\':R\'22-1w\':l.13().19(0,c).2t();l.13().19(7.E.U.20).2t();17;R\'1I\':R\'1I-1w\':l.13().19(7.E.M).2t();l.Z(5A);17}y.Z(2T);V=48(2U,b.2u,G);29[7.d[\'1m\']]=(7.1R)?7.1i[7.d[3]]:0;8(7[7.d[\'P\']]==\'1d\'||7[7.d[\'1e\']]==\'1d\'){m=D(){$1n.Z(2j)};1O=D(){V.1a.1c([$1n,2j])}}8(7.1R){8(2r.4M(1Z).S){2s[7.d[\'1S\']]=1Z.1q(\'2a\');8(h<0){1Z.Z(2s)}O{1D=D(){1Z.Z(2s)};3E=D(){V.1a.1c([1Z,2s])}}}1F(b.1V){R\'1I\':R\'1I-1w\':l.13().1N(c-1).Z(2s);17}8(2r.4M(21).S){2S[7.d[\'1S\']]=21.1q(\'2a\');1C=D(){21.Z(2S)};3D=D(){V.1a.1c([21,2S])}}8(2B>=0){4L[7.d[\'1S\']]=2r.1q(\'2a\')+7.1i[7.d[1]];2C=D(){2r.Z(4L)};5C=D(){V.1a.1c([2r,4L])}}}1J=D(){y.Z(29)};F n=7.E.M+c-K.Q;1y=D(){8(n>0){y.13().19(K.Q).2t();3i=$(y.13().19(K.Q-(7.E.M-n)).3F().6Y(y.13().19(0,n).3F()))}5D(j);8(7.1R){F a=y.13().1N(7.E.M+c-1);a.Z(7.d[\'1S\'],a.1q(\'2a\'))}};F o=5E(3i,2Q,2i,c,\'14\',2U,2j);1x=D(){5F(y,l,b);A.26=L;2b.3h=4a($12,b,\'3h\',o,2b);2g=5G(y,2g,G);8(!A.27){y.T(I(\'1G\',G))}};A.26=J;1u=3u(1u);2b.3G=4a($12,b,\'3G\',o,2b);1F(b.1V){R\'42\':y.Z(29);m();1C();2C();1D();1J();1y();1x();17;R\'1w\':V.1a.1c([y,{\'1E\':0},D(){m();1C();2C();1D();1J();1y();V=48(2U,b.2u,G);V.1a.1c([y,{\'1E\':1},1x]);3x(V,G)}]);17;R\'3j\':y.Z({\'1E\':0});V.1a.1c([l,{\'1E\':0}]);V.1a.1c([y,{\'1E\':1},1x]);1O();1C();2C();1D();1J();1y();17;R\'1I\':V.1a.1c([l,29,D(){1C();2C();1D();1J();1y();1x()}]);1O();17;R\'1I-1w\':V.1a.1c([y,{\'1E\':0}]);V.1a.1c([l,29,D(){y.Z({\'1E\':1});1C();2C();1D();1J();1y();1x()}]);1O();17;R\'22\':V.1a.1c([l,4K,1x]);1O();1C();2C();1D();1J();1y();17;R\'22-1w\':y.Z({\'1E\':0});V.1a.1c([y,{\'1E\':1}]);V.1a.1c([l,4K,1x]);1O();1C();2C();1D();1J();1y();17;2J:V.1a.1c([y,29,D(){1y();1x()}]);1O();3D();5C();3E();17}3x(V,G);5H(7.25,y,G);y.T(I(\'3H\',G),[L,2j]);H J});y.11(I(\'84\',G),D(e,c,d){e.1g();F f=y.13();8(!7.1U){8(K.X==7.E.M){8(7.3z){y.T(I(\'14\',G),K.Q-1)}H e.2e()}}1Y(f,7);8(!Y(d)){8(7.E.1t!=\'*\'){F g=(Y(c.E))?c.E:5x(y,7);d=6Z(f,7,0,g)}O{d=7.E.M}d=4E(d,7,c.E,$12)}F h=(K.X==0)?K.Q:K.X;8(!7.1U){8(7.E.U.1d){F i=32(f,7,d),g=4D(f,7,h-1)}O{F i=7.E.M,g=7.E.M}8(d+i>h){d=h-g}}7.E.U.20=7.E.M;8(7.E.U.1d){F i=2x(5I(f,7,d,h),7,7.E.U.2c,$12);2h(7.E.M-d>=i&&d<K.Q){d++;i=2x(5I(f,7,d,h),7,7.E.U.2c,$12)}7.E.M=i}O 8(7.E.1t!=\'*\'){F i=3W(f,7,d);7.E.M=2x(i,7,7.E.U.2c,$12)}1Y(f,7,J);8(d==0){e.2e();H 18(G,\'0 E 46 1K: 2p 3f.\')}18(G,\'6U \'+d+\' E 70.\');K.X-=d;2h(K.X<0){K.X+=K.Q}8(!7.1U){8(K.X==7.E.M&&c.4F){c.4F.1h($12,\'16\')}8(!7.3z){3A(7,K.X,G)}}8(K.Q<7.E.M+d){y.13().19(0,(7.E.M+d)-K.Q).4G(J).47(y)}F f=y.13(),3i=71(f,7),2i=72(f,7,d),1Z=f.1N(d-1),21=3i.2P(),2r=2i.2P();1Y(f,7);F j=0,2B=0;8(7.1B){F p=4H(2i,7);j=p[0];2B=p[1]}F k=L,2Q=$();8(7.E.U.20<d){2Q=f.19(7.E.U.20,d);8(c.1V==\'6X\'){F l=7.E[7.d[\'P\']];k=2Q;1Z=21;5z(k);7.E[7.d[\'P\']]=\'1d\'}}F m=L,3B=2R(f.19(0,d),7,\'P\'),2j=4I(4J(2i,7,J),7,!7.1R),3C=0,29={},4N={},2s={},2S={},2T={},2U=5B(c,7,d,3B);1F(c.1V){R\'22\':R\'22-1w\':3C=2R(f.19(0,7.E.U.20),7,\'P\');17}8(k){7.E[7.d[\'P\']]=l}8(7.1B){8(7.1i[7.d[1]]<0){7.1i[7.d[1]]=0}}1Y(f,7,J);1Y(21,7,7.1i[7.d[1]]);8(7.1B){7.1i[7.d[1]]=2B;7.1i[7.d[3]]=j}2T[7.d[\'1m\']]=(7.1R)?7.1i[7.d[3]]:0;F n=D(){},1O=D(){},1C=D(){},3D=D(){},1D=D(){},3E=D(){},1x=D(){},1y=D(){},1J=D(){};1F(c.1V){R\'3j\':R\'1I\':R\'1I-1w\':R\'22\':R\'22-1w\':m=y.4G(J).47($1n);m.13().19(7.E.U.20).2t();17}1F(c.1V){R\'3j\':R\'1I\':R\'1I-1w\':y.Z(\'3Z\',1);m.Z(\'3Z\',0);17}V=48(2U,c.2u,G);29[7.d[\'1m\']]=-3B;4N[7.d[\'1m\']]=-3C;8(j<0){29[7.d[\'1m\']]+=j}8(7[7.d[\'P\']]==\'1d\'||7[7.d[\'1e\']]==\'1d\'){n=D(){$1n.Z(2j)};1O=D(){V.1a.1c([$1n,2j])}}8(7.1R){F o=2r.1q(\'2a\');8(2B>=0){o+=7.1i[7.d[1]]}2r.Z(7.d[\'1S\'],o);8(1Z.4M(21).S){2S[7.d[\'1S\']]=21.1q(\'2a\')}1C=D(){21.Z(2S)};3D=D(){V.1a.1c([21,2S])};F q=1Z.1q(\'2a\');8(j>0){q+=7.1i[7.d[3]]}2s[7.d[\'1S\']]=q;1D=D(){1Z.Z(2s)};3E=D(){V.1a.1c([1Z,2s])}}1J=D(){y.Z(2T)};F r=7.E.M+d-K.Q;1y=D(){8(r>0){y.13().19(K.Q).2t()}F a=y.13().19(0,d).47(y).2P();8(r>0){2i=3I(f,7)}5D(k);8(7.1R){8(K.Q<7.E.M+d){F b=y.13().1N(7.E.M-1);b.Z(7.d[\'1S\'],b.1q(\'2a\')+7.1i[7.d[1]])}a.Z(7.d[\'1S\'],a.1q(\'2a\'))}};F s=5E(3i,2Q,2i,d,\'16\',2U,2j);1x=D(){y.Z(\'3Z\',y.1q(\'6K\'));5F(y,m,c);A.26=L;2b.3h=4a($12,c,\'3h\',s,2b);2g=5G(y,2g,G);8(!A.27){y.T(I(\'1G\',G))}};A.26=J;1u=3u(1u);2b.3G=4a($12,c,\'3G\',s,2b);1F(c.1V){R\'42\':y.Z(29);n();1C();1D();1J();1y();1x();17;R\'1w\':V.1a.1c([y,{\'1E\':0},D(){n();1C();1D();1J();1y();V=48(2U,c.2u,G);V.1a.1c([y,{\'1E\':1},1x]);3x(V,G)}]);17;R\'3j\':y.Z({\'1E\':0});V.1a.1c([m,{\'1E\':0}]);V.1a.1c([y,{\'1E\':1},1x]);1O();1C();1D();1J();1y();17;R\'1I\':y.Z(7.d[\'1m\'],$1n[7.d[\'P\']]());V.1a.1c([y,2T,1x]);1O();1C();1D();1y();17;R\'1I-1w\':y.Z(7.d[\'1m\'],$1n[7.d[\'P\']]());V.1a.1c([m,{\'1E\':0}]);V.1a.1c([y,2T,1x]);1O();1C();1D();1y();17;R\'22\':V.1a.1c([m,4N,1x]);1O();1C();1D();1J();1y();17;R\'22-1w\':y.Z({\'1E\':0});V.1a.1c([y,{\'1E\':1}]);V.1a.1c([m,4N,1x]);1O();1C();1D();1J();1y();17;2J:V.1a.1c([y,29,D(){1J();1y();1x()}]);1O();3D();3E();17}3x(V,G);5H(7.25,y,G);y.T(I(\'3H\',G),[L,2j]);H J});y.11(I(\'3k\',G),D(e,b,c,d,f,g,h){e.1g();F v=[b,c,d,f,g,h],t=[\'2M/28/2A\',\'28\',\'3d\',\'2A\',\'2M\',\'D\'],a=3e(v,t);f=a[3];g=a[4];h=a[5];b=3J(a[0],a[1],a[2],K,y);8(b==0){H L}8(!1T(f)){f=L}8(g!=\'14\'&&g!=\'16\'){8(7.1U){g=(b<=K.Q/2)?\'16\':\'14\'}O{g=(K.X==0||K.X>b)?\'16\':\'14\'}}8(g==\'14\'){b=K.Q-b}y.T(I(g,G),[f,b,h]);H J});y.11(I(\'85\',G),D(e,a,b){e.1g();F c=y.1P(I(\'4b\',G));H y.1P(I(\'5J\',G),[c-1,a,\'14\',b])});y.11(I(\'86\',G),D(e,a,b){e.1g();F c=y.1P(I(\'4b\',G));H y.1P(I(\'5J\',G),[c+1,a,\'16\',b])});y.11(I(\'5J\',G),D(e,a,b,c,d){e.1g();8(!Y(a)){a=y.1P(I(\'4b\',G))}F f=7.1b.E||7.E.M,1X=1H.2z(K.Q/f)-1;8(a<0){a=1X}8(a>1X){a=0}H y.1P(I(\'3k\',G),[a*f,0,J,b,c,d])});y.11(I(\'73\',G),D(e,s){e.1g();8(s){s=3J(s,0,J,K,y)}O{s=0}s+=K.X;8(s!=0){8(K.Q>0){2h(s>K.Q){s-=K.Q}}y.87(y.13().19(s,K.Q))}H J});y.11(I(\'2n\',G),D(e,s){e.1g();8(s){s=5k(s)}O 8(7.2n){s=7.2n}O{H 18(G,\'6j 88 46 2n.\')}F n=y.1P(I(\'4p\',G)),x=J;1j(F j=0,l=s.S;j<l;j++){8(!s[j][0].1P(I(\'3k\',G),[n,s[j][3],J])){x=L}}H x});y.11(I(\'2O\',G),D(e,a,b){e.1g();8(1o(a)){a.1h($12,2g)}O 8(2V(a)){2g=a}O 8(!1z(a)){2g.1c([a,b])}H 2g});y.11(I(\'89\',G),D(e,b,c,d,f){e.1g();F v=[b,c,d,f],t=[\'2M/2A\',\'2M/28/2A\',\'3d\',\'28\'],a=3e(v,t);b=a[0];c=a[1];d=a[2];f=a[3];8(1T(b)&&!2v(b)){b=$(b)}O 8(1p(b)){b=$(b)}8(!2v(b)||b.S==0){H 18(G,\'2p a 5K 2A.\')}8(1z(c)){c=\'4c\'}4x(b,7);41(b);F g=c,4d=\'4d\';8(c==\'4c\'){8(d){8(K.X==0){c=K.Q-1;4d=\'74\'}O{c=K.X;K.X+=b.S}8(c<0){c=0}}O{c=K.Q-1;4d=\'74\'}}O{c=3J(c,f,d,K,y)}F h=y.13().1N(c);8(h.S){h[4d](b)}O{18(G,\'8a 8b-3r 4M 6k! 8c 8d 46 75 4c.\');y.76(b)}8(g!=\'4c\'&&!d){8(c<K.X){K.X+=b.S}}K.Q=y.13().S;8(K.X>=K.Q){K.X-=K.Q}y.T(I(\'4O\',G));y.T(I(\'5L\',G));H J});y.11(I(\'77\',G),D(e,c,d,f){e.1g();F v=[c,d,f],t=[\'2M/28/2A\',\'3d\',\'28\'],a=3e(v,t);c=a[0];d=a[1];f=a[2];F g=L;8(c 2W $&&c.S>1){h=$();c.1W(D(i,a){F b=y.T(I(\'77\',G),[$(1l),d,f]);8(b){h=h.8e(b)}});H h}8(1z(c)||c==\'4c\'){h=y.13().2P()}O{c=3J(c,f,d,K,y);F h=y.13().1N(c);8(h.S){8(c<K.X){K.X-=h.S}}}8(h&&h.S){h.8f();K.Q=y.13().S;y.T(I(\'4O\',G))}H h});y.11(I(\'3G\',G)+\' \'+I(\'3h\',G),D(e,a){e.1g();F b=e.5v.19(G.3y.45.S);8(2V(a)){2b[b]=a}8(1o(a)){2b[b].1c(a)}H 2b[b]});y.11(I(\'4p\',G),D(e,a){e.1g();8(K.X==0){F b=0}O{F b=K.Q-K.X}8(1o(a)){a.1h($12,b)}H b});y.11(I(\'4b\',G),D(e,a){e.1g();F b=7.1b.E||7.E.M,1X=1H.2z(K.Q/b-1),2k;8(K.X==0){2k=0}O 8(K.X<K.Q%b){2k=0}O 8(K.X==b&&!7.1U){2k=1X}O{2k=1H.78((K.Q-K.X)/b)}8(2k<0){2k=0}8(2k>1X){2k=1X}8(1o(a)){a.1h($12,2k)}H 2k});y.11(I(\'8g\',G),D(e,a){e.1g();F b=3I(y.13(),7);8(1o(a)){a.1h($12,b)}H b});y.11(I(\'19\',G),D(e,f,l,b){e.1g();8(K.Q==0){H L}F v=[f,l,b],t=[\'28\',\'28\',\'D\'],a=3e(v,t);f=(Y(a[0]))?a[0]:0;l=(Y(a[1]))?a[1]:K.Q;b=a[2];f+=K.X;l+=K.X;8(E.Q>0){2h(f>K.Q){f-=K.Q}2h(l>K.Q){l-=K.Q}2h(f<0){f+=K.Q}2h(l<0){l+=K.Q}}F c=y.13(),$i;8(l>f){$i=c.19(f,l)}O{$i=$(c.19(f,K.Q).3F().6Y(c.19(0,l).3F()))}8(1o(b)){b.1h($12,$i)}H $i});y.11(I(\'27\',G)+\' \'+I(\'2d\',G)+\' \'+I(\'26\',G),D(e,a){e.1g();F b=e.5v.19(G.3y.45.S),5M=A[b];8(1o(a)){a.1h($12,5M)}H 5M});y.11(I(\'6S\',G),D(e,a,b,c){e.1g();F d=L;8(1o(a)){a.1h($12,7)}O 8(1T(a)){31=$.1L(J,{},31,a);8(b!==L)d=J;O 7=$.1L(J,{},7,a)}O 8(!1z(a)){8(1o(b)){F f=4P(\'7.\'+a);8(1z(f)){f=\'\'}b.1h($12,f)}O 8(!1z(b)){8(2X c!==\'3d\')c=J;4P(\'31.\'+a+\' = b\');8(c!==L)d=J;O 4P(\'7.\'+a+\' = b\')}O{H 4P(\'7.\'+a)}}8(d){1Y(y.13(),7);z.59(31);z.5N();F g=4Q(y,7);y.T(I(\'3H\',G),[J,g])}H 7});y.11(I(\'5L\',G),D(e,a,b){e.1g();8(1z(a)){a=$(\'8h\')}O 8(1p(a)){a=$(a)}8(!2v(a)||a.S==0){H 18(G,\'2p a 5K 2A.\')}8(!1p(b)){b=\'a.6i\'}a.8i(b).1W(D(){F h=1l.79||\'\';8(h.S>0&&y.13().7a($(h))!=-1){$(1l).23(\'5O\').5O(D(e){e.2D();y.T(I(\'3k\',G),h)})}});H J});y.11(I(\'3H\',G),D(e,b,c){e.1g();8(!7.1b.1A){H}F d=7.1b.E||7.E.M,4R=1H.2z(K.Q/d);8(b){8(7.1b.3K){7.1b.1A.13().2t();7.1b.1A.1W(D(){1j(F a=0;a<4R;a++){F i=y.13().1N(3J(a*d,0,J,K,y));$(1l).76(7.1b.3K.1h(i[0],a+1))}})}7.1b.1A.1W(D(){$(1l).13().23(7.1b.3L).1W(D(a){$(1l).11(7.1b.3L,D(e){e.2D();y.T(I(\'3k\',G),[a*d,-7.1b.4S,J,7.1b])})})})}F f=y.1P(I(\'4b\',G))+7.1b.4S;8(f>=4R){f=0}8(f<0){f=4R-1}7.1b.1A.1W(D(){$(1l).13().2N(2y(\'7b\',G)).1N(f).3a(2y(\'7b\',G))});H J});y.11(I(\'4O\',G),D(e){F a=7.E.M,2E=y.13(),2m=5d($1n,7,\'P\');K.Q=2E.S;8(A.4r){7.3U=2m;7[7.d[\'P\']]=4s(2m,A.4r)}O{7.3U=5e(7,2m)}8(7.2H){7.E.P=7.E.3M.P;7.E.1e=7.E.3M.1e;7=5g(7,2E,2m);a=7.E.M;5r(7,2E)}O 8(7.E.U.1d){a=32(2E,7,0)}O 8(7.E.1t!=\'*\'){a=3W(2E,7,0)}8(!7.1U&&K.X!=0&&a>K.X){8(7.E.U.1d){F b=4D(2E,7,K.X)-K.X}O 8(7.E.1t!=\'*\'){F b=7c(2E,7,K.X)-K.X}O{F b=7.E.M-K.X}18(G,\'8j 8k-1U: 8l \'+b+\' E 5y.\');y.T(I(\'14\',G),b)}7.E.M=2x(a,7,7.E.U.2c,$12);7.E.U.20=7.E.M;7=5i(7,2E);F c=4Q(y,7);y.T(I(\'3H\',G),[J,c]);4T(7,K.Q,G);3A(7,K.X,G);H c});y.11(I(\'4q\',G),D(e,a){e.1g();1u=3u(1u);y.1q(\'57\',L);y.T(I(\'5t\',G));8(a){y.T(I(\'73\',G))}4U(y.13());4U(y);z.5s();z.5P();8(G.3s==\'36\'){4U($1n)}O{$1n.8m(y)}H J});y.11(I(\'18\',G),D(e){18(G,\'3w P: \'+7.P);18(G,\'3w 1e: \'+7.1e);18(G,\'7d 8n: \'+7.E.P);18(G,\'7d 8o: \'+7.E.1e);18(G,\'4e 4f E M: \'+7.E.M);8(7.N.1G){18(G,\'4e 4f E 5Q 8p: \'+7.N.E)}8(7.14.W){18(G,\'4e 4f E 5Q 5y: \'+7.14.E)}8(7.16.W){18(G,\'4e 4f E 5Q 70: \'+7.16.E)}H G.18});y.11(\'3o\',D(e,n,o){e.1g();H y.1P(I(n,G),o)})};z.5s=D(){y.23(I(\'\',G));y.23(I(\'\',G,L));y.23(\'3o\')};z.5N=D(){z.5P();4T(7,K.Q,G);3A(7,K.X,G);8(7.N.2F){F b=3N(7.N.2F);$1n.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}8(7.N.W){7.N.W.11(I(7.N.3L,G,L),D(e){e.2D();F a=L,b=3O;8(A.27){a=\'1G\'}O 8(7.N.4X){a=\'3b\';b=3N(7.N.4X)}8(a){y.T(I(a,G),b)}})}8(7.14.W){7.14.W.11(I(7.14.3L,G,L),D(e){e.2D();y.T(I(\'14\',G))});8(7.14.2F){F b=3N(7.14.2F);7.14.W.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}}8(7.16.W){7.16.W.11(I(7.16.3L,G,L),D(e){e.2D();y.T(I(\'16\',G))});8(7.16.2F){F b=3N(7.16.2F);7.16.W.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}}8(7.1b.1A){8(7.1b.2F){F b=3N(7.1b.2F);7.1b.1A.11(I(\'4V\',G,L),D(){y.T(I(\'3b\',G),b)}).11(I(\'4W\',G,L),D(){y.T(I(\'3g\',G))})}}8(7.14.2Y||7.16.2Y){$(4g).11(I(\'7e\',G,L,J,J),D(e){F k=e.7f;8(k==7.16.2Y){e.2D();y.T(I(\'16\',G))}8(k==7.14.2Y){e.2D();y.T(I(\'14\',G))}})}8(7.1b.4Y){$(4g).11(I(\'7e\',G,L,J,J),D(e){F k=e.7f;8(k>=49&&k<58){k=(k-49)*7.E.M;8(k<=K.Q){e.2D();y.T(I(\'3k\',G),[k,0,J,7.1b])}}})}8($.1s.1r){F c=\'8q\'8r 3l;8((c&&7.1r.4h)||(!c&&7.1r.5R)){F d=$.1L(J,{},7.14,7.1r),7g=$.1L(J,{},7.16,7.1r),5S=D(){y.T(I(\'14\',G),[d])},5T=D(){y.T(I(\'16\',G),[7g])};1F(7.2l){R\'5c\':R\'7h\':7.1r.2G.8s=5T;7.1r.2G.8t=5S;17;2J:7.1r.2G.8u=5T;7.1r.2G.8v=5S}8(A.1r){y.1r(\'4q\')}$1n.1r(7.1r.2G);$1n.Z(\'7i\',\'8w\');A.1r=J}}8($.1s.1Q){8(7.1Q){F f=$.1L(J,{},7.14,7.1Q),7j=$.1L(J,{},7.16,7.1Q);8(A.1Q){$1n.23(I(\'1Q\',G,L))}$1n.11(I(\'1Q\',G,L),D(e,a){e.2D();8(a>0){y.T(I(\'14\',G),[f])}O{y.T(I(\'16\',G),[7j])}});A.1Q=J}}8(7.N.1G){y.T(I(\'1G\',G),7.N.5U)}8(A.6v){F g=D(e){y.T(I(\'5t\',G));8(7.N.5V&&!A.27){y.T(I(\'1G\',G))}1Y(y.13(),7);y.T(I(\'4O\',G))};F h=$(3l),4i=3O;8($.5W&&G.5X==\'5W\'){4i=$.5W(8x,g)}O 8($.4Z&&G.5X==\'4Z\'){4i=$.4Z(8y,g)}O{F i=0,5Y=0;4i=D(){F a=h.P(),5Z=h.1e();8(a!=i||5Z!=5Y){g();i=a;5Y=5Z}}}h.11(I(\'8z\',G,L,J,J),4i)}};z.5P=D(){F a=I(\'\',G),3P=I(\'\',G,L);61=I(\'\',G,L,J,J);$(4g).23(61);$(3l).23(61);$1n.23(3P);8(7.N.W){7.N.W.23(3P)}8(7.14.W){7.14.W.23(3P)}8(7.16.W){7.16.W.23(3P)}8(7.1b.1A){7.1b.1A.23(3P);8(7.1b.3K){7.1b.1A.13().2t()}}8(A.1r){y.1r(\'4q\');$1n.Z(\'7i\',\'2J\');A.1r=L}8(A.1Q){A.1Q=L}4T(7,\'4j\',G);3A(7,\'2N\',G)};8(1k(w)){w={\'18\':w}}F A={\'2l\':\'16\',\'27\':J,\'26\':L,\'2d\':L,\'1Q\':L,\'1r\':L},K={\'Q\':y.13().S,\'X\':0},1u={\'N\':3O,\'1f\':3O,\'2L\':2o(),\'3v\':0},V={\'2d\':L,\'1M\':0,\'2L\':0,\'2u\':\'\',\'1a\':[]},2b={\'3G\':[],\'3h\':[]},2g=[],G=$.1L(J,{},$.1s.1v.7k,w),7={},31=$.1L(J,{},u),$1n=(G.3s==\'36\')?y.36():y.8A(\'<\'+G.3s.55+\' 8B="\'+G.3s.7l+\'" />\').36();G.4o=y.4o;G.3T=$.1s.1v.3T++;G.2Z=(G.2Z&&$.1s.2Z)?\'2Z\':\'8C\';z.59(31,J,56);z.6D();z.6L();z.5N();8(2V(7.E.3m)){F B=7.E.3m}O{F B=[];8(7.E.3m!=0){B.1c(7.E.3m)}}8(7.25){B.8D(4k(7m(7.25),10))}8(B.S>0){1j(F a=0,l=B.S;a<l;a++){F s=B[a];8(s==0){62}8(s===J){s=3l.8E.79;8(s.S<1){62}}O 8(s===\'7n\'){s=1H.4l(1H.7n()*K.Q)}8(y.1P(I(\'3k\',G),[s,0,J,{1V:\'42\'}])){17}}}F C=4Q(y,7),7o=3I(y.13(),7);8(7.7p){7.7p.1h($12,{\'P\':C.P,\'1e\':C.1e,\'E\':7o})}y.T(I(\'3H\',G),[J,C]);y.T(I(\'5L\',G));8(G.18){y.T(I(\'18\',G))}H y};$.1s.1v.3T=1;$.1s.1v.5b={\'2n\':L,\'3z\':J,\'1U\':J,\'2H\':L,\'2l\':\'1m\',\'E\':{\'3m\':0},\'1K\':{\'2u\':\'7q\',\'1M\':6y,\'2F\':L,\'3L\':\'5O\',\'2O\':L}};$.1s.1v.7k={\'18\':L,\'2Z\':L,\'5X\':\'4Z\',\'3y\':{\'45\':\'\',\'7r\':\'8F\'},\'3s\':{\'55\':\'8G\',\'7l\':\'8H\'},\'63\':{}};$.1s.1v.7s=D(a){H\'<a 8I="#"><7t>\'+a+\'</7t></a>\'};$.1s.1v.7u=D(a){$(1l).Z(\'P\',a+\'%\')};$.1s.1v.25={3F:D(n){n+=\'=\';F b=4g.25.3Q(\';\');1j(F a=0,l=b.S;a<l;a++){F c=b[a];2h(c.8J(0)==\' \'){c=c.19(1)}8(c.3R(n)==0){H c.19(n.S)}}H 0},64:D(n,v,d){F e="";8(d){F a=7v 7w();a.8K(a.2o()+(d*24*60*60*8L));e="; 8M="+a.8N()}4g.25=n+\'=\'+v+e+\'; 8O=/\'},2t:D(n){$.1s.1v.25.64(n,"",-1)}};D 48(d,e,c){8(c.2Z==\'2Z\'){8(e==\'7q\'){e=\'8P\'}}H{1a:[],1M:d,8Q:d,2u:e,2L:2o()}}D 3x(s,c){1j(F a=0,l=s.1a.S;a<l;a++){F b=s.1a[a];8(!b){62}b[0][c.2Z](b[1],s.1M,s.2u,b[2])}}D 43(s,c){8(!1k(c)){c=J}8(1T(s.4z)){43(s.4z,c)}1j(F a=0,l=s.1a.S;a<l;a++){F b=s.1a[a];b[0].6M(J);8(c){b[0].Z(b[1]);8(1o(b[2])){b[2]()}}}8(1T(s.4A)){43(s.4A,c)}}D 5F(a,b,o){8(b){b.2t()}1F(o.1V){R\'1w\':R\'3j\':R\'1I-1w\':R\'22-1w\':a.Z(\'1t\',\'\');a.Z(\'1E\',1);17}}D 4a(d,o,b,a,c){8(o[b]){o[b].1h(d,a)}8(c[b].S){1j(F i=0,l=c[b].S;i<l;i++){c[b][i].1h(d,a)}}H[]}D 5G(a,q,c){8(q.S){a.T(I(q[0][0],c),q[0][1]);q.8R()}H q}D 5z(b){b.1W(D(){F a=$(1l);a.1q(\'7x\',a.2f(\':3t\')).4j()})}D 5D(b){8(b){b.1W(D(){F a=$(1l);8(!a.1q(\'7x\')){a.4m()}})}}D 3u(t){8(t.N){8S(t.N)}8(t.1f){8T(t.1f)}H t}D 5E(a,b,c,d,e,f,g){H{\'P\':g.P,\'1e\':g.1e,\'E\':{\'20\':a,\'8U\':b,\'M\':c},\'1K\':{\'E\':d,\'2l\':e,\'1M\':f}}}D 5B(a,o,b,c){F d=a.1M;8(a.1V==\'42\'){H 0}8(d==\'N\'){d=o.1K.1M/o.1K.E*b}O 8(d<10){d=c/d}8(d<1){H 0}8(a.1V==\'1w\'){d=d/2}H 1H.78(d)}D 4T(o,t,c){F a=(Y(o.E.4C))?o.E.4C:o.E.M+1;8(t==\'4m\'||t==\'4j\'){F f=t}O 8(a>t){18(c,\'2p 6O E (\'+t+\' Q, \'+a+\' 6P): 8V 8W.\');F f=\'4j\'}O{F f=\'4m\'}F s=(f==\'4m\')?\'2N\':\'3a\',h=2y(\'3t\',c);8(o.N.W){o.N.W[f]()[s](h)}8(o.14.W){o.14.W[f]()[s](h)}8(o.16.W){o.16.W[f]()[s](h)}8(o.1b.1A){o.1b.1A[f]()[s](h)}}D 3A(o,f,c){8(o.1U||o.3z)H;F a=(f==\'2N\'||f==\'3a\')?f:L,51=2y(\'8X\',c);8(o.N.W&&a){o.N.W[a](51)}8(o.14.W){F b=a||(f==0)?\'3a\':\'2N\';o.14.W[b](51)}8(o.16.W){F b=a||(f==o.E.M)?\'3a\':\'2N\';o.16.W[b](51)}}D 3S(a,b){8(1o(b)){b=b.1h(a)}O 8(1z(b)){b={}}H b}D 6l(a,b){b=3S(a,b);8(Y(b)){b={\'M\':b}}O 8(b==\'1d\'){b={\'M\':b,\'P\':b,\'1e\':b}}O 8(!1T(b)){b={}}H b}D 6m(a,b){b=3S(a,b);8(Y(b)){8(b<=50){b={\'E\':b}}O{b={\'1M\':b}}}O 8(1p(b)){b={\'2u\':b}}O 8(!1T(b)){b={}}H b}D 52(a,b){b=3S(a,b);8(1p(b)){F c=65(b);8(c==-1){b=$(b)}O{b=c}}H b}D 6n(a,b){b=52(a,b);8(2v(b)){b={\'W\':b}}O 8(1k(b)){b={\'1G\':b}}O 8(Y(b)){b={\'2K\':b}}8(b.1f){8(1p(b.1f)||2v(b.1f)){b.1f={\'2q\':b.1f}}}H b}D 6z(a,b){8(1o(b.W)){b.W=b.W.1h(a)}8(1p(b.W)){b.W=$(b.W)}8(!1k(b.1G)){b.1G=J}8(!Y(b.5U)){b.5U=0}8(1z(b.4X)){b.4X=J}8(!1k(b.5V)){b.5V=J}8(!Y(b.2K)){b.2K=(b.1M<10)?8Y:b.1M*5}8(b.1f){8(1o(b.1f.2q)){b.1f.2q=b.1f.2q.1h(a)}8(1p(b.1f.2q)){b.1f.2q=$(b.1f.2q)}8(b.1f.2q){8(!1o(b.1f.4B)){b.1f.4B=$.1s.1v.7u}8(!Y(b.1f.5u)){b.1f.5u=50}}O{b.1f=L}}H b}D 5a(a,b){b=52(a,b);8(2v(b)){b={\'W\':b}}O 8(Y(b)){b={\'2Y\':b}}H b}D 5j(a,b){8(1o(b.W)){b.W=b.W.1h(a)}8(1p(b.W)){b.W=$(b.W)}8(1p(b.2Y)){b.2Y=65(b.2Y)}H b}D 6o(a,b){b=52(a,b);8(2v(b)){b={\'1A\':b}}O 8(1k(b)){b={\'4Y\':b}}H b}D 6A(a,b){8(1o(b.1A)){b.1A=b.1A.1h(a)}8(1p(b.1A)){b.1A=$(b.1A)}8(!Y(b.E)){b.E=L}8(!1k(b.4Y)){b.4Y=L}8(!1o(b.3K)&&!53(b.3K)){b.3K=$.1s.1v.7s}8(!Y(b.4S)){b.4S=0}H b}D 6p(a,b){8(1o(b)){b=b.1h(a)}8(1z(b)){b={\'4h\':L}}8(3p(b)){b={\'4h\':b}}O 8(Y(b)){b={\'E\':b}}H b}D 6B(a,b){8(!1k(b.4h)){b.4h=J}8(!1k(b.5R)){b.5R=L}8(!1T(b.2G)){b.2G={}}8(!1k(b.2G.7y)){b.2G.7y=L}H b}D 6q(a,b){8(1o(b)){b=b.1h(a)}8(3p(b)){b={}}O 8(Y(b)){b={\'E\':b}}O 8(1z(b)){b=L}H b}D 6C(a,b){H b}D 3J(a,b,c,d,e){8(1p(a)){a=$(a,e)}8(1T(a)){a=$(a,e)}8(2v(a)){a=e.13().7a(a);8(!1k(c)){c=L}}O{8(!1k(c)){c=J}}8(!Y(a)){a=0}8(!Y(b)){b=0}8(c){a+=d.X}a+=b;8(d.Q>0){2h(a>=d.Q){a-=d.Q}2h(a<0){a+=d.Q}}H a}D 4D(i,o,s){F t=0,x=0;1j(F a=s;a>=0;a--){F j=i.1N(a);t+=(j.2f(\':M\'))?j[o.d[\'2w\']](J):0;8(t>o.3U){H x}8(a==0){a=i.S}x++}}D 7c(i,o,s){H 66(i,o.E.1t,o.E.U.4t,s)}D 6T(i,o,s,m){H 66(i,o.E.1t,m,s)}D 66(i,f,m,s){F t=0,x=0;1j(F a=s,l=i.S;a>=0;a--){x++;8(x==l){H x}F j=i.1N(a);8(j.2f(f)){t++;8(t==m){H x}}8(a==0){a=l}}}D 5x(a,o){H o.E.U.4t||a.13().19(0,o.E.M).1t(o.E.1t).S}D 32(i,o,s){F t=0,x=0;1j(F a=s,l=i.S-1;a<=l;a++){F j=i.1N(a);t+=(j.2f(\':M\'))?j[o.d[\'2w\']](J):0;8(t>o.3U){H x}x++;8(x==l+1){H x}8(a==l){a=-1}}}D 5I(i,o,s,l){F v=32(i,o,s);8(!o.1U){8(s+v>l){v=l-s}}H v}D 3W(i,o,s){H 68(i,o.E.1t,o.E.U.4t,s,o.1U)}D 6Z(i,o,s,m){H 68(i,o.E.1t,m+1,s,o.1U)-1}D 68(i,f,m,s,c){F t=0,x=0;1j(F a=s,l=i.S-1;a<=l;a++){x++;8(x>=l){H x}F j=i.1N(a);8(j.2f(f)){t++;8(t==m){H x}}8(a==l){a=-1}}}D 3I(i,o){H i.19(0,o.E.M)}D 6V(i,o,n){H i.19(n,o.E.U.20+n)}D 6W(i,o){H i.19(0,o.E.M)}D 71(i,o){H i.19(0,o.E.U.20)}D 72(i,o,n){H i.19(n,o.E.M+n)}D 4x(i,o,d){8(o.1R){8(!1p(d)){d=\'2a\'}i.1W(D(){F j=$(1l),m=4k(j.Z(o.d[\'1S\']),10);8(!Y(m)){m=0}j.1q(d,m)})}}D 1Y(i,o,m){8(o.1R){F x=(1k(m))?m:L;8(!Y(m)){m=0}4x(i,o,\'7z\');i.1W(D(){F j=$(1l);j.Z(o.d[\'1S\'],((x)?j.1q(\'7z\'):m+j.1q(\'2a\')))})}}D 41(i){i.1W(D(){F j=$(1l);j.1q(\'7A\',j.7B(\'7C\')||\'\')})}D 4U(i){i.1W(D(){F j=$(1l);j.7B(\'7C\',j.1q(\'7A\')||\'\')})}D 5r(o,b){F c=o.E.M,7D=o.E[o.d[\'P\']],69=o[o.d[\'1e\']],7E=3V(69);b.1W(D(){F a=$(1l),6a=7D-7F(a,o,\'8Z\');a[o.d[\'P\']](6a);8(7E){a[o.d[\'1e\']](4s(6a,69))}})}D 4Q(a,o){F b=a.36(),$i=a.13(),$v=3I($i,o),54=4I(4J($v,o,J),o,L);b.Z(54);8(o.1R){F p=o.1i,r=p[o.d[1]];8(o.1B&&r<0){r=0}F c=$v.2P();c.Z(o.d[\'1S\'],c.1q(\'2a\')+r);a.Z(o.d[\'3q\'],p[o.d[0]]);a.Z(o.d[\'1m\'],p[o.d[3]])}a.Z(o.d[\'P\'],54[o.d[\'P\']]+(2R($i,o,\'P\')*2));a.Z(o.d[\'1e\'],6b($i,o,\'1e\'));H 54}D 4J(i,o,a){H[2R(i,o,\'P\',a),6b(i,o,\'1e\',a)]}D 6b(i,o,a,b){8(!1k(b)){b=L}8(Y(o[o.d[a]])&&b){H o[o.d[a]]}8(Y(o.E[o.d[a]])){H o.E[o.d[a]]}a=(a.6c().3R(\'P\')>-1)?\'2w\':\'3n\';H 4n(i,o,a)}D 4n(i,o,b){F s=0;1j(F a=0,l=i.S;a<l;a++){F j=i.1N(a);F m=(j.2f(\':M\'))?j[o.d[b]](J):0;8(s<m){s=m}}H s}D 2R(i,o,b,c){8(!1k(c)){c=L}8(Y(o[o.d[b]])&&c){H o[o.d[b]]}8(Y(o.E[o.d[b]])){H o.E[o.d[b]]*i.S}F d=(b.6c().3R(\'P\')>-1)?\'2w\':\'3n\',s=0;1j(F a=0,l=i.S;a<l;a++){F j=i.1N(a);s+=(j.2f(\':M\'))?j[o.d[d]](J):0}H s}D 5d(a,o,d){F b=a.2f(\':M\');8(b){a.4j()}F s=a.36()[o.d[d]]();8(b){a.4m()}H s}D 5e(o,a){H(Y(o[o.d[\'P\']]))?o[o.d[\'P\']]:a}D 6d(i,o,b){F s=L,v=L;1j(F a=0,l=i.S;a<l;a++){F j=i.1N(a);F c=(j.2f(\':M\'))?j[o.d[b]](J):0;8(s===L){s=c}O 8(s!=c){v=J}8(s==0){v=J}}H v}D 7F(i,o,d){H i[o.d[\'90\'+d]](J)-i[o.d[d.6c()]]()}D 4s(s,o){8(3V(o)){o=4k(o.19(0,-1),10);8(!Y(o)){H s}s*=o/2I}H s}D I(n,c,a,b,d){8(!1k(a)){a=J}8(!1k(b)){b=J}8(!1k(d)){d=L}8(a){n=c.3y.45+n}8(b){n=n+\'.\'+c.3y.7r}8(b&&d){n+=c.3T}H n}D 2y(n,c){H(1p(c.63[n]))?c.63[n]:n}D 4I(a,o,p){8(!1k(p)){p=J}F b=(o.1R&&p)?o.1i:[0,0,0,0];F c={};c[o.d[\'P\']]=a[0]+b[1]+b[3];c[o.d[\'1e\']]=a[1]+b[0]+b[2];H c}D 3e(c,d){F e=[];1j(F a=0,7G=c.S;a<7G;a++){1j(F b=0,7H=d.S;b<7H;b++){8(d[b].3R(2X c[a])>-1&&1z(e[b])){e[b]=c[a];17}}}H e}D 6x(p){8(1z(p)){H[0,0,0,0]}8(Y(p)){H[p,p,p,p]}8(1p(p)){p=p.3Q(\'91\').7I(\'\').3Q(\'92\').7I(\'\').3Q(\' \')}8(!2V(p)){H[0,0,0,0]}1j(F i=0;i<4;i++){p[i]=4k(p[i],10)}1F(p.S){R 0:H[0,0,0,0];R 1:H[p[0],p[0],p[0],p[0]];R 2:H[p[0],p[1],p[0],p[1]];R 3:H[p[0],p[1],p[2],p[1]];2J:H[p[0],p[1],p[2],p[3]]}}D 4H(a,o){F x=(Y(o[o.d[\'P\']]))?1H.2z(o[o.d[\'P\']]-2R(a,o,\'P\')):0;1F(o.1B){R\'1m\':H[0,x];R\'35\':H[x,0];R\'5f\':2J:H[1H.2z(x/2),1H.4l(x/2)]}}D 6r(o){F a=[[\'P\',\'7J\',\'2w\',\'1e\',\'7K\',\'3n\',\'1m\',\'3q\',\'1S\',0,1,2,3],[\'1e\',\'7K\',\'3n\',\'P\',\'7J\',\'2w\',\'3q\',\'1m\',\'5p\',3,2,1,0]];F b=a[0].S,7L=(o.2l==\'35\'||o.2l==\'1m\')?0:1;F c={};1j(F d=0;d<b;d++){c[a[0][d]]=a[7L][d]}H c}D 4E(x,o,a,b){F v=x;8(1o(a)){v=a.1h(b,v)}O 8(1p(a)){F p=a.3Q(\'+\'),m=a.3Q(\'-\');8(m.S>p.S){F c=J,6e=m[0],30=m[1]}O{F c=L,6e=p[0],30=p[1]}1F(6e){R\'93\':v=(x%2==1)?x-1:x;17;R\'94\':v=(x%2==0)?x-1:x;17;2J:v=x;17}30=4k(30,10);8(Y(30)){8(c){30=-30}v+=30}}8(!Y(v)||v<1){v=1}H v}D 2x(x,o,a,b){H 6f(4E(x,o,a,b),o.E.U)}D 6f(v,i){8(Y(i.34)&&v<i.34){v=i.34}8(Y(i.1X)&&v>i.1X){v=i.1X}8(v<1){v=1}H v}D 5k(s){8(!2V(s)){s=[[s]]}8(!2V(s[0])){s=[s]}1j(F j=0,l=s.S;j<l;j++){8(1p(s[j][0])){s[j][0]=$(s[j][0])}8(!1k(s[j][1])){s[j][1]=J}8(!1k(s[j][2])){s[j][2]=J}8(!Y(s[j][3])){s[j][3]=0}}H s}D 65(k){8(k==\'35\'){H 39}8(k==\'1m\'){H 37}8(k==\'5c\'){H 38}8(k==\'7h\'){H 40}H-1}D 5H(n,a,c){8(n){F v=a.1P(I(\'4p\',c));$.1s.1v.25.64(n,v)}}D 7m(n){F c=$.1s.1v.25.3F(n);H(c==\'\')?0:c}D 6E(a,b){F c={};1j(F p=0,l=b.S;p<l;p++){c[b[p]]=a.Z(b[p])}H c}D 6s(a,b,c,d){8(!1T(a.U)){a.U={}}8(!1T(a.3M)){a.3M={}}8(a.3m==0&&Y(d)){a.3m=d}8(1T(a.M)){a.U.34=a.M.34;a.U.1X=a.M.1X;a.M=L}O 8(1p(a.M)){8(a.M==\'1d\'){a.U.1d=J}O{a.U.2c=a.M}a.M=L}O 8(1o(a.M)){a.U.2c=a.M;a.M=L}8(!1p(a.1t)){a.1t=(c.1t(\':3t\').S>0)?\':M\':\'*\'}8(!a[b.d[\'P\']]){8(b.2H){18(J,\'7M a \'+b.d[\'P\']+\' 1j 75 E!\');a[b.d[\'P\']]=4n(c,b,\'2w\')}O{a[b.d[\'P\']]=(6d(c,b,\'2w\'))?\'1d\':c[b.d[\'2w\']](J)}}8(!a[b.d[\'1e\']]){a[b.d[\'1e\']]=(6d(c,b,\'3n\'))?\'1d\':c[b.d[\'3n\']](J)}a.3M.P=a.P;a.3M.1e=a.1e;H a}D 6w(a,b){8(a.E[a.d[\'P\']]==\'1d\'){a.E.U.1d=J}8(!a.E.U.1d){8(Y(a[a.d[\'P\']])){a.E.M=1H.4l(a[a.d[\'P\']]/a.E[a.d[\'P\']])}O{a.E.M=1H.4l(b/a.E[a.d[\'P\']]);a[a.d[\'P\']]=a.E.M*a.E[a.d[\'P\']];8(!a.E.U.2c){a.1B=L}}8(a.E.M==\'95\'||a.E.M<1){18(J,\'2p a 5K 28 4f M E: 7M 46 "1d".\');a.E.U.1d=J}}H a}D 6t(a,b,c){8(a==\'N\'){a=4n(c,b,\'2w\')}H a}D 6u(a,b,c){8(a==\'N\'){a=4n(c,b,\'3n\')}8(!a){a=b.E[b.d[\'1e\']]}H a}D 5i(o,a){F p=4H(3I(a,o),o);o.1i[o.d[1]]=p[1];o.1i[o.d[3]]=p[0];H o}D 5g(o,a,b){F c=6f(1H.2z(o[o.d[\'P\']]/o.E[o.d[\'P\']]),o.E.U);8(c>a.S){c=a.S}F d=1H.4l(o[o.d[\'P\']]/c);o.E.M=c;o.E[o.d[\'P\']]=d;o[o.d[\'P\']]=c*d;H o}D 3N(p){8(1p(p)){F i=(p.3R(\'96\')>-1)?J:L,r=(p.3R(\'3g\')>-1)?J:L}O{F i=r=L}H[i,r]}D 97(a){H(Y(a))?a:3O}D 6g(a){H(a===3O)}D 1z(a){H(6g(a)||2X a==\'7N\'||a===\'\'||a===\'7N\')}D 2V(a){H(a 2W 98)}D 2v(a){H(a 2W 7O)}D 1T(a){H((a 2W 99||2X a==\'2A\')&&!6g(a)&&!2v(a)&&!2V(a))}D Y(a){H((a 2W 4e||2X a==\'28\')&&!9a(a))}D 1p(a){H((a 2W 9b||2X a==\'2M\')&&!1z(a)&&!3p(a)&&!53(a))}D 1o(a){H(a 2W 9c||2X a==\'D\')}D 1k(a){H(a 2W 9d||2X a==\'3d\'||3p(a)||53(a))}D 3p(a){H(a===J||a===\'J\')}D 53(a){H(a===L||a===\'L\')}D 3V(x){H(1p(x)&&x.19(-1)==\'%\')}D 2o(){H 7v 7w().2o()}D 3X(o,n){18(J,o+\' 2f 9e, 9f 1j 9g 9h 9i 9j. 9k \'+n+\' 9l.\')}D 18(d,m){8(!1z(3l.6h)&&!1z(3l.6h.7P)){8(1T(d)){F s=\' (\'+d.4o+\')\';d=d.18}O{F s=\'\'}8(!d){H L}8(1p(m)){m=\'1v\'+s+\': \'+m}O{m=[\'1v\'+s+\':\',m]}3l.6h.7P(m)}H L}$.1L($.2u,{\'9m\':D(t){F a=t*t;H t*(-a*t+4*a-6*t+4)},\'9n\':D(t){H t*(4*t*t-9*t+6)},\'9o\':D(t){F a=t*t;H t*(33*a*a-9p*a*t+9q*a-67*t+15)}})})(7O);', 62, 585, '|||||||opts|if|||||||||||||||||||||||||||||||function|items|var|conf|return|cf_e|true|itms|false|visible|auto|else|width|total|case|length|trigger|visibleConf|scrl|button|first|is_number|css||bind|tt0|children|prev||next|break|debug|slice|anims|pagination|push|variable|height|progress|stopPropagation|call|padding|for|is_boolean|this|left|wrp|is_function|is_string|data|swipe|fn|filter|tmrs|carouFredSel|fade|_onafter|_moveitems|is_undefined|container|align|_s_paddingold|_s_paddingcur|opacity|switch|play|Math|cover|_position|scroll|extend|duration|eq|_a_wrapper|triggerHandler|mousewheel|usePadding|marginRight|is_object|circular|fx|each|max|sz_resetMargin|i_cur_l|old|i_old_l|uncover|unbind||cookie|isScrolling|isPaused|number|a_cfs|_cfs_origCssMargin|clbk|adjust|isStopped|stopImmediatePropagation|is|queu|while|i_new|w_siz|nr|direction|avail_primary|synchronise|getTime|Not|bar|i_new_l|a_cur|remove|easing|is_jquery|outerWidth|cf_getItemsAdjust|cf_c|ceil|object|pR|_s_paddingnew|preventDefault|a_itm|pauseOnHover|options|responsive|100|default|timeoutDuration|startTime|string|removeClass|queue|last|i_skp|ms_getTotalSize|a_old|a_lef|a_dur|is_array|instanceof|typeof|key|transition|adj|opts_orig|gn_getVisibleItemsNext||min|right|parent||||addClass|pause|perc|boolean|cf_sortParams|scrolling|resume|onAfter|i_old|crossfade|slideTo|window|start|outerHeight|_cfs_triggerEvent|is_true|top|position|wrapper|hidden|sc_clearTimers|timePassed|Carousel|sc_startScroll|events|infinite|nv_enableNavi|i_siz|i_siz_vis|_a_paddingold|_a_paddingcur|get|onBefore|updatePageStatus|gi_getCurrentItems|gn_getItemIndex|anchorBuilder|event|sizesConf|bt_pauseOnHoverConfig|null|ns2|split|indexOf|go_getObject|serialNumber|maxDimension|is_percentage|gn_getVisibleItemsNextFilter|deprecated|orgCSS|zIndex||sz_storeOrigCss|none|sc_stopScroll|dur2|prefix|to|appendTo|sc_setScroll||sc_fireCallbacks|currentPage|end|before|Number|of|document|onTouch|onResize|hide|parseInt|floor|show|ms_getTrueLargestSize|selector|currentPosition|destroy|primarySizePercentage|ms_getPercentage|org|onTimeoutStart|onTimeoutPause|onTimeoutEnd|sz_storeMargin|stopped|pre|post|updater|minimum|gn_getVisibleItemsPrev|cf_getAdjust|onEnd|clone|cf_getAlignPadding|cf_mapWrapperSizes|ms_getSizes|a_wsz|a_new|not|a_cfs_vis|updateSizes|eval|sz_setSizes|pgs|deviation|nv_showNavi|sz_restoreOrigCss|mouseenter|mouseleave|pauseOnEvent|keys|throttle||di|go_getNaviObject|is_false|sz|element|starting_position|_cfs_isCarousel||_cfs_init|go_getPrevNextObject|defaults|up|ms_getParentSize|ms_getMaxDimension|center|in_getResponsiveValues|bottom|in_getAlignPadding|go_complementPrevNextObject|cf_getSynchArr|onPauseStart|onPausePause|onPauseEnd|pauseDuration|marginBottom|newPosition|sz_setResponsiveSizes|_cfs_unbind_events|finish|interval|type|conditions|gn_getVisibleOrg|backward|sc_hideHiddenItems|a_lef_vis|sc_getDuration|_a_paddingnew|sc_showHiddenItems|sc_mapCallbackArguments|sc_afterScroll|sc_fireQueue|cf_setCookie|gn_getVisibleItemsNextTestCircular|slideToPage|valid|linkAnchors|value|_cfs_bind_buttons|click|_cfs_unbind_buttons|scrolled|onMouse|swP|swN|delay|pauseOnResize|debounce|onWindowResize|_windowHeight|nh||ns3|continue|classnames|set|cf_getKeyCode|gn_getItemsPrevFilter||gn_getItemsNextFilter|seco|nw|ms_getLargestSize|toLowerCase|ms_hasVariableSizes|sta|cf_getItemAdjustMinMax|is_null|console|caroufredsel|No|found|go_getItemsObject|go_getScrollObject|go_getAutoObject|go_getPaginationObject|go_getSwipeObject|go_getMousewheelObject|cf_getDimensions|in_complementItems|in_complementPrimarySize|in_complementSecondarySize|upDateOnWindowResize|in_complementVisibleItems|cf_getPadding|500|go_complementAutoObject|go_complementPaginationObject|go_complementSwipeObject|go_complementMousewheelObject|_cfs_build|in_mapCss|textAlign|float|marginTop|marginLeft|absolute|_cfs_origCssZindex|_cfs_bind_events|stop|paused|enough|needed|page|slide_|configuration|gn_getScrollItemsPrevFilter|Scrolling|gi_getOldItemsPrev|gi_getNewItemsPrev|directscroll|concat|gn_getScrollItemsNextFilter|forward|gi_getOldItemsNext|gi_getNewItemsNext|jumpToStart|after|the|append|removeItem|round|hash|index|selected|gn_getVisibleItemsPrevFilter|Item|keyup|keyCode|scN|down|cursor|mcN|configs|classname|cf_getCookie|random|itm|onCreate|swing|namespace|pageAnchorBuilder|span|progressbarUpdater|new|Date|_cfs_isHidden|triggerOnTouchEnd|_cfs_tempCssMargin|_cfs_origCss|attr|style|newS|secp|ms_getPaddingBorderMargin|l1|l2|join|innerWidth|innerHeight|dx|Set|undefined|jQuery|log|caroufredsel_cookie_|relative|fixed|overflow|setInterval|setTimeout|or|Callback|returned|Page|resumed|currently|slide_prev|prependTo|slide_next|prevPage|nextPage|prepend|carousel|insertItem|Correct|insert|Appending|item|add|detach|currentVisible|body|find|Preventing|non|sliding|replaceWith|widths|heights|automatically|ontouchstart|in|swipeUp|swipeDown|swipeLeft|swipeRight|move|200|300|resize|wrap|class|animate|unshift|location|cfs|div|caroufredsel_wrapper|href|charAt|setTime|1000|expires|toGMTString|path|ease|orgDuration|shift|clearTimeout|clearInterval|skipped|Hiding|navigation|disabled|2500|Width|outer|px|em|even|odd|Infinity|immediate|bt_mousesheelNumber|Array|Object|isNaN|String|Function|Boolean|DEPRECATED|support|it|will|be|removed|Use|instead|quadratic|cubic|elastic|106|126'.split('|'), 0, {}))
var $$ = $$ || {};
$$.initializers = {
    preloader: function () {
        var images = $('img');
        var loaded = 0;
        images.on('load', function () {
            loaded++;
            var percent = loaded / images.length * 100;
            if (percent <= 100)$('.b-preloader .number').text(Math.round(percent));
            $('.b-preloader .progress').width(percent + '%');
        }).each(function () {
            if (this.complete)$(this).load();
        });
        $(window).load(function () {
            $('.b-preloader').fadeOut('slow', function () {
                $('body').removeClass('fancybox-lock');
            });
        });
    }, fixes: function () {
        $('input[name*="phone"]').mask("+7 (999) 999-9999");
        $('input[name*="payment_name"]').on('focusout', function () {
            var name = $(this).val();
            if (!/([А-ЯЁ][а-яё]+[\-\s]?){3,}/g.test(name)) {
                $(this).val('');
            }
        });
        $('a').addClass('transition');
        $('.input-submit').on('click', function () {
            $(this).addClass('f-disabled');
        });
        $('.show-fullsize').fancybox({
            width: '100%',
            maxWidth: '1120px',
            maxHeight: '80%',
            padding: 25,
            beforeShow: function () {
                var master = $(this.element).data('master');
                if (master && master.length > 0)this.title = '<strong>' + $$.translations[$$.lang].master + ': </strong> ' + master;
            },
            helpers: {title: {type: 'inside'}}
        });
        $('.first-thin .title-text').each(function () {
            $$.firstThin($(this));
        });
        $('.last-bold .title-text').each(function () {
            $$.lastBold($(this));
        });
        $('.align-middle').each(function () {
            var item = $(this), marker = $('<div class="g-align-marker"></div>');
            item.prepend(marker.height(item.height()));
        });
        if ($('.b-text').text().replace(/\s/gi, '').length == 0) {
            $('.b-text').css('display', 'none');
        }
        $('.b-menu .text').text($$.translations[$$.lang].menu);
        $('body').on('click', '.cbh-widget-button', function () {
            ga('send', {hitType: 'event', eventCategory: 'cbh', eventAction: 'fill'});
            yaCounter28303121.reachGoal('cbh_fill');
            return true;
        });
        $('body').on('mousedown', '.cbh-widget-call__btn', function () {
            ga('send', {hitType: 'event', eventCategory: 'cbh', eventAction: 'send'});
            yaCounter28303121.reachGoal('cbh_send');
            return true;
        });
    }, promo: function () {
    }, blog: function () {
        var blog = $('.b-blog-list');
        if (blog.length > 0) {
            var url = window.location.href;
            var page = 2;
            var pages = 999;
            var ajax = false;
            var getItems = function (recursive) {
                $.ajax({
                    url: (url.indexOf('?') > -1) ? url + '&page=' + page : url + '?page=' + page,
                    dataType: 'json',
                    beforeSend: function () {
                        ajax = true;
                        blog.addClass('loading');
                    },
                    success: function (data) {
                        ajax = false;
                        page++;
                        pages = data.pages;
                        blog.removeClass('loading');
                        if (data.page != 1)blog.find('.items').append(data.output);
                        if (recursive && $(document).height() == $(window).height() && page <= pages && !ajax)getItems();
                    }
                });
            };
            $(window).on('scroll', function () {
                if ($(document).height() == $(window).scrollTop() + $(window).height() && page <= pages && !ajax) {
                    getItems();
                }
            });
            while ($(document).height() == $(window).height() && page <= pages && !ajax) {
                getItems(true);
            }
        }
    }, map: function () {
        if (window.google != undefined) {
            var coords = $('#map-popup').data('coords').split(',');
            var coords2 = $('#map-popup').data('coords-second').split(',');
            var center = new google.maps.LatLng(parseFloat(coords[0]) + 0.00540557829, parseFloat(coords[1]) + 0.16171923828);
            coords = new google.maps.LatLng(coords[0], coords[1]);
            coords2 = new google.maps.LatLng(coords2[0], coords2[1]);
            var mapOptions = {
                zoom: 12,
                center: center,
                navigationControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                mapTypeControlOptions: {mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']}
            };
            var stylez = [{featureType: 'all', elementType: 'all', stylers: [{saturation: -100}]}];
            if ($('#map').length > 0) {
                var map = new google.maps.Map(document.getElementById('map'), mapOptions);
                var mapType = new google.maps.StyledMapType(stylez, {name: 'Grayscale'});
                map.mapTypes.set('map_style', mapType);
                map.setMapTypeId('map_style');
                var marker = new google.maps.Marker({
                    position: coords,
                    map: map,
                    icon: '/assets/template/style/images/icon-contacts-marker.png'
                });
                $('.open-map').click(function () {
                    var parent = $(this).parent();
                    $(this).fadeOut(200);
                    parent.addClass('active').find('.overlay').addClass('disable');
                    parent.find('.close-map').addClass('active');
                    parent.animate({height: parent.hasClass('b-contacts-preview') ? 400 : 660}, 200, function () {
                        google.maps.event.trigger(map, 'resize');
                        map.panTo(coords)
                    })
                });
                $('.close-map').click(function () {
                    var parent = $(this).parent();
                    $(this).removeClass('active');
                    parent.removeClass('active').find('.overlay').removeClass('disable');
                    parent.find('.open-map').fadeIn(200);
                    parent.animate({height: 220}, 200, function () {
                        google.maps.event.trigger(map, 'resize');
                        map.panTo(center)
                    })
                });
                $('.b-branches .item').on('click', function (e) {
                    if ($(e.target).parent('.link').length == 0) {
                        var data = $(this).data('coords').split(',');
                        var point = new google.maps.LatLng(parseFloat(data[0]), parseFloat(data[1]));
                        map.panTo(point)
                        marker.setPosition(point);
                        $('.b-branches .current-value').removeClass('active');
                    }
                });
                $('.b-branches .select').jScrollPane({autoReinitialise: true, contentWidth: '0px'});
                $('.b-branches .current-value').on('click', function () {
                    $(this).toggleClass('active');
                });
            }
            if ($('#map-popup').length > 0) {
                var initializePopupMap = function () {
                    var mapPopup = new google.maps.Map(document.getElementById('map-popup'), mapOptions);
                    var mapType = new google.maps.StyledMapType(stylez, {name: 'Grayscale'});
                    mapPopup.mapTypes.set('map_style', mapType);
                    mapPopup.setMapTypeId('map_style');
                    var markerPopup = new google.maps.Marker({
                        position: coords,
                        map: mapPopup,
                        icon: '/assets/template/style/images/icon-contacts-marker.png'
                    });
                    var markerPopup2 = new google.maps.Marker({
                        position: coords2,
                        map: mapPopup,
                        icon: '/assets/template/style/images/icon-contacts-marker.png'
                    });
                    mapPopup.panTo(coords);
                    mapPopup.setZoom(12);
                    $('.b-navigation .popup-call').off('click', initializePopupMap);
                }
                $('.b-navigation .popup-call').on('click', initializePopupMap);
            }
        }
    }, popup: function () {
        var open = function (popup, name, form) {
            popup.addClass('active').css('display', 'block').fadeTo(400, 1);
            name = (name) ? name : $$.translations[$$.lang].checkout_title;
            $$.firstThin(popup.find('.title-text').text(name));
            var inputForm = popup.find('input[name$="_form"]');
            if (form && inputForm.length > 0) {
                inputForm.val(form);
            }
            $('.b-popup-underlay').fadeIn(400);
            $('html').addClass('fancybox-lock');
        };
        var resizePopupSlider = function () {
            $('.b-popup-wrapper.content .items').trigger('updateSizes');
        };
        $(document).keyup(function (e) {
            if (e.keyCode == 27) {
                $('.b-popup-wrapper.active .popup-close').trigger('click');
            }
        });
        $('body').on('click', '.popup-call', function () {
            var type = $(this).data('popup');
            var send = $(this).data('onsend');
            var popup = $('.b-popup-wrapper.' + type);
            if (send && send.length > 0) {
                if (window.localStorage) {
                    localStorage.setItem('onsend', send);
                }
                popup.find('.input-submit').attr('onclick', send);
            }
            if (type == 'callback') {
                popup.find('.input-submit').val($(this).hasClass('call') ? 'Заказать звонок' : 'Отправить заявку');
            }
            $('.b-popup-wrapper.active').removeClass('active').fadeTo(200, 0);
            if (type == 'content') {
                popup.find('.b-rich-content').addClass('loading').html('');
                $.get($(this).attr('href'), function (data) {
                    var loaded = 0;
                    var content = popup.find('.b-rich-content');
                    content.removeClass('loading').html(data);
                    if (content.find('.item').length > 0) {
                        content.find('.items').before('<div class="g-pagination pagination"></div>       <div class="g-mobile-arrows">        <div class="prev"></div>        <div class="next"></div>       </div>');
                    }
                    popup.find('input[name*="phone"]').each(function () {
                        $(this).mask("+7 (999) 999-9999");
                    });
                    popup.find('.item img').each(function () {
                        var item = $(this);
                        var inner = popup.find('.b-popup');
                        item.parents('.b-rich-content').addClass('loading');
                        item.attr('src', item.data('src')).on('load', function () {
                            loaded++;
                            if (loaded == popup.find('.item img').length) {
                                item.parents('.b-rich-content').removeClass('loading');
                                popup.find('.items').carouFredSel({
                                    pagination: popup.find('.pagination'),
                                    next: popup.find('.next'),
                                    prev: popup.find('.prev'),
                                    auto: false,
                                    responsive: true,
                                    width: '100%',
                                    height: 'variable',
                                    items: {visible: 1},
                                    scroll: {fx: 'crossfade'},
                                    swipe: {onTouch: true}
                                });
                                $(window).on('resize', resizePopupSlider)
                                popup.find('img').off('load');
                            }
                        });
                    });
                    open(popup, $(this).text());
                    $('.b-popup-underlay').fadeIn(400);
                    return false;
                });
            }
            if ($(this).data('course') && window.localStorage) {
                localStorage.setItem('course', $(this).data('course'));
            }
            if (type == 'checkout-course') {
                var course = localStorage.getItem('course');
                var select = $('.f-element-select.courses');
                var item = select.find('.item[data-course="' + (course - 1) + '"]');
                select.removeClass('active').addClass('selected').find('.f-control').text(item.text());
                $('.f-clear').addClass('active');
                $('#course').val(item.text());
            }
            var form = '';
            var parent = $(this).parent();
            while (parent.prop('className').indexOf('b-') == -1) {
                parent = parent.parent();
            }
            var parentClass = parent.get(0).classList[0];
            switch (parentClass) {
                case'b-slider-wrapper':
                    form = 'Промо слайдер';
                    break;
                case'b-checkout':
                    form = 'Татуировка в подарок';
                    break;
                case'b-scheme':
                    form = 'Схема работы';
                    break;
                case'b-capabilities':
                    form = 'Информация учащимся/презентация';
                    break;
                case'b-video':
                    form = 'Видео блок';
                    break;
                case'b-rich-content':
                    form = 'Всплывающее окно с описанием курса';
                    break;
                case'b-navigation':
                    form = 'Всплывающее окно контактов';
                    break;
                case'b-payment':
                    $('#payment_sale').text($(this).data('sale'));
                    $('#payment_price').text($(this).data('price'));
                    $('input[name="payment_id"]').val($(this).data('id'));
                    form = 'Кнопка оплаты';
                    break;
            }
            open(popup, $(this).attr('title') || $(this).text(), form);
            $('.b-popup-underlay').fadeIn(400);
            return false;
        });
        $('.popup-close, .b-popup-underlay').click(function (e) {
            $('.b-popup-wrapper').removeClass('active').css('overflow', 'hidden').fadeTo(400, 0, function () {
                $('.b-popup-wrapper .b-rich-content').html('');
                $('.b-popup-wrapper').css({overflowY: 'scroll', display: 'none'});
                $(window).off('resize', resizePopupSlider)
            });
            $('.b-popup-underlay').fadeOut(400);
            $('html').removeClass('fancybox-lock');
        });
        if ($('.b-popup-wrapper .error').length > 0) {
            var target = $('.b-popup-wrapper .error').parents('.b-popup-wrapper');
            if (target.hasClass('contacts')) {
                var button = $('.popup-call[data-popup="contacts"]').eq(0);
                if (!window.yaCounter28303121)button.attr('onclick', '');
                button.trigger('click');
            } else {
                if (window.localStorage) {
                    var send = localStorage.getItem('onsend');
                    if (send && send.length > 0) {
                        target.find('.input-submit').attr('onclick', send);
                    }
                }
                open(target);
            }
            $('.b-popup-underlay').fadeIn(400);
        }
        var leadPopup = $('.b-popup-wrapper.lead');
        var lastShow = window.localStorage ? localStorage.getItem('lead') : true;
        var now = new Date().getTime();
        var timer = 0;
        if (!$$.mobile && leadPopup.length > 0) {
            if (lastShow == null || (now - lastShow) / 1000 / 60 / 60 / 24 >= 3) {
                open(leadPopup);
                var time = 20;
                timer = setInterval(function () {
                    if (time == 0) {
                        clearInterval(timer);
                        $('.b-popup-underlay').fadeOut(200);
                        leadPopup.fadeTo(200, 0, function () {
                            leadPopup.css('display', 'none');
                        });
                    } else {
                        leadPopup.find('.time').text(--time);
                        leadPopup.find('.progress').css('width', time / 20 * 100 + '%');
                    }
                }, 1000);
                localStorage.setItem('lead', now);
            }
        }
        leadPopup.find('.popup-close').on('click', function () {
            clearInterval(timer);
        });
        leadPopup.find('.popup-call').on('click', function () {
            clearInterval(timer);
            leadPopup.fadeTo(200, 0, function () {
                leadPopup.css('display', 'none');
            });
        });
        if ($('.b-popup-wrapper .f-success').length > 0) {
            open($('.b-popup-wrapper .f-success').parents('.b-popup-wrapper'));
            $('.b-popup-underlay').fadeIn(400);
        }
    }, reviews: function () {
        var reviews = $('.b-reviews');
        if (reviews.length == 0)return false;
        var setButtons = function () {
            reviews.find('.slide').each(function () {
                var item = $(this);
                if (item.find('.review-inner').height() <= 120) {
                    item.find('.action').removeClass('visible');
                } else {
                    item.find('.action').addClass('visible');
                }
            });
        };
        setButtons();
        $(window).on('resize', setButtons);
        reviews.find('.action').click(function () {
            var item = $(this), container = item.prev(), active = container.hasClass('active'), height = (container.hasClass('active')) ? 120 : container.find('.review-inner').height() + container.find('.hide').outerHeight(true);
            if (!active)container.addClass('active');
            container.animate({height: height}, 400, function () {
                $('.b-reviews .slider').trigger('updateSizes');
                item.toggleClass('hide');
                if (active)container.removeClass('active');
            });
            return false;
        });
    }, select: function () {
        $('.f-element-select .f-control').on('click', function () {
            var item = $(this).parent();
            if (item.hasClass('active')) {
                item.removeClass('active');
                return false;
            }
            $('.f-element-select.active').removeClass('active');
            item.addClass('active');
            item.find('.items').jScrollPane({verticalGutter: 0, contentWidth: '0px'});
        });
        $('.f-element-select').on('click', '.item', function () {
            var item = $(this), parent = item.parents('.f-element'), input = parent.data('input'), type = parent.data('type');
            if (input == 'master' || input == 'style') {
                $('.f-element-select.' + type).find('.item').addClass('disabled');
                filter = (item.data(type + '-id').length > 1) ? item.data(type + '-id').split(',') : [item.data(type + '-id')];
                for (var i = 0; i < filter.length; i++) {
                    $('.f-element-select.' + type + ' .item').eq(filter[i]).removeClass('disabled');
                }
            }
            parent.removeClass('active').addClass('selected').find('.f-control').text(item.text());
            $('.f-clear').addClass('active');
            $('#' + input).val(item.text());
        });
        $('.f-clear').on('click', function () {
            $(this).removeClass('active');
            var select = $('.f-element-select');
            select.removeClass('selected').find('.item').removeClass('disabled');
            $('.f-element-select.masters .f-control').text($$.translations[$$.lang].choose_style);
            $('.f-element-select.styles .f-control').text($$.translations[$$.lang].choose_master);
            $('.f-element-select.courses .f-control').text($$.translations[$$.lang].choose_course);
            return false;
        });
        $('body').on('click', function (e) {
            if (!$(e.target).hasClass('f-control')) {
                $('.f-element-select.active').removeClass('active');
            }
        });
        var masterItem = $('.f-element.masters .item'), stylesItems = $('.f-element.styles .items'), masterStylesArray = [], stylesArray = [], stylesString = '';
        if (masterItem.length == 0) {
            $('.f-element.styles').parent().css('display', 'none');
            return false;
        }
        masterItem.each(function (i) {
            $(this).data('styles', $$.translations[$$.lang].anyone + ',' + $(this).data('styles'));
            masterStylesArray.push($(this).data('styles'));
            stylesString += ',' + $(this).data('styles');
        });
        stylesArray = stylesString.slice(1).split(',');
        stylesArray = stylesArray.filter(function (item, pos) {
            return stylesArray.indexOf(item) == pos;
        });
        for (var i = 0; i < stylesArray.length; i++) {
            stylesItems.append('<li class="item">' + stylesArray[i] + '</li>');
            for (var j = 0; j < masterStylesArray.length; j++) {
                if (masterStylesArray[j].indexOf(stylesArray[i]) > -1) {
                    var masterData = (masterItem.eq(j).attr('data-styles-id')) ? masterItem.eq(j).attr('data-styles-id') + ',' : '';
                    masterItem.eq(j).attr('data-styles-id', masterData + i);
                    var styleData = (stylesItems.find('.item').eq(i).attr('data-masters-id')) ? stylesItems.find('.item').eq(i).attr('data-masters-id') + ',' : '';
                    stylesItems.find('.item').eq(i).attr('data-masters-id', styleData + j);
                }
            }
        }
        $(window).on('resize', function () {
            var scroll = $('.f-element-select.active');
            if (scroll.length > 0) {
                var api = scroll.find('.items').data('jsp');
                api.reinitialise();
            }
        })
    }, slider: function () {
        var slider = $('.b-slider');
        if (slider.length > 0) {
            slider.carouFredSel({
                pagination: slider.parent().find('.pagination'),
                responsive: true,
                width: $$.desktopEndpoint ? '60%' : '100%',
                items: {visible: 1},
                scroll: {fx: 'crossfade', duration: 1000},
                swipe: {onTouch: true}
            });
        }
        var works = $('.b-works .slider');
        works.each(function () {
            $(this).carouFredSel({
                pagination: works.parent().find('.pagination'),
                prev: works.parent().find('.prev'),
                next: works.parent().find('.next'),
                width: '100%',
                height: $$.mobileEndpoint ? 320 : 194,
                visible: $$.desktopEndpoint ? 4 : 3,
                items: {visible: $$.desktopEndpoint ? 4 : 3, width: 'variable'},
                scroll: {
                    items: $$.desktopEndpoint ? 2 : 1,
                    duration: 1000,
                    timeoutDuration: 3000,
                    onBefore: function (data) {
                        var visible = data.items.visible;
                        for (var i = 0; i < visible.length; i++) {
                            var anchor = $(visible[i]).find('a');
                            if (anchor.find('img').length == 0)anchor.append('<img src="' + $(visible[i]).data('src') + '" width="578" height="320" alt="">');
                        }
                    }
                },
                onCreate: function (data) {
                    for (var i = 0; i < data.items.length; i++) {
                        var anchor = $(data.items[i]).find('a');
                        if (anchor.find('img').length == 0)anchor.append('<img src="' + $(data.items[i]).data('src') + '" width="578" height="320" alt="">');
                    }
                },
                swipe: {onTouch: true, options: {excludedElements: ''}}
            });
        });
        var info = $('.b-info .slider, .b-info .video-slider');
        info.each(function () {
            var item = $(this);
            item.carouFredSel({
                pagination: item.parent().find('.pagination'),
                prev: item.parent().find('.prev'),
                next: item.parent().find('.next'),
                auto: false,
                responsive: true,
                height: 'variable',
                items: {visible: 1, height: 'auto'},
                scroll: {
                    fx: 'fade', onBefore: function (data) {
                        var parent = item.parents('.b-info');
                        item.find('.slide').removeClass('loaded').find('img').fadeTo(0, 1);
                        item.find('iframe').remove();
                        var pos = (parent.width() - data.items.visible.find('img').width()) / 2 - 30;
                        parent.find('.prev').css('left', pos);
                        parent.find('.next').css('right', pos);
                    }
                },
                onCreate: function (data) {
                    data.items.find('img').one('load', function () {
                        var parent = item.parents('.b-info');
                        var pos = (parent.width() - data.items.find('img').width()) / 2 - 30;
                        parent.find('.prev').css('left', pos);
                        parent.find('.next').css('right', pos);
                    }).each(function () {
                        if (this.complete)$(this).load();
                    });
                },
                swipe: {onTouch: true}
            });
            item.find('img').eq(0).on('load', function () {
                item.trigger('updateSizes')
            }).each(function () {
                if (this.complete)$(this).load();
            });
        });
        $('.b-info .video-slider .slide').on('click', function () {
            var item = $(this);
            if (!item.hasClass('loaded')) {
                var img = item.find('img');
                item.append('<iframe width="' + img.attr('width') + '" height="480" src="https://www.youtube.com/embed/' + img.data('video') + '?rel=0&amp;autoplay=1&amp;controls=0" frameborder="0"></iframe>');
                img.fadeTo(200, 0, function () {
                    item.addClass('loaded');
                });
            }
        });
        var reviews = $('.b-reviews .slider');
        if (reviews.length > 0) {
            reviews.carouFredSel({
                pagination: reviews.parent().find('.pagination'),
                prev: reviews.parent().find('.prev'),
                next: reviews.parent().find('.next'),
                auto: false,
                responsive: true,
                height: 'variable',
                items: {visible: $$.desktopEndpoint ? 2 : 1,},
                swipe: {onTouch: true},
                reInit: true
            });
        }
        var styles = $('.b-styles .slider');
        if (styles.length > 0) {
            var pages = styles.parent().find('.pages');
            pages.find('.items').carouFredSel({
                pagination: styles.parent().find('.pagination'),
                prev: pages.find('.prev'),
                next: pages.find('.next'),
                auto: false,
                items: {visible: $$.desktopEndpoint ? 4 : 3},
                scroll: {items: 1},
                swipe: {onTouch: true}
            });
            pages.find('.item').on('click', function () {
                styles.trigger('slideTo', $(this).data('number'));
                return false;
            }).each(function (i) {
                $(this).attr('data-number', i);
            });
            styles.find('.slide').each(function (i) {
                $(this).attr('data-number', i);
            });
            styles.carouFredSel({
                prev: styles.parent().find('.prev'),
                next: styles.parent().find('.next'),
                pagination: styles.parent().find('.pagination'),
                auto: false,
                responsive: true,
                width: '100%',
                items: {visible: 1},
                scroll: {
                    onBefore: function (data) {
                        var number = $(data.items.visible).data('number');
                        pages.find('.active').removeClass('active');
                        pages.find('.item[data-number="' + number + '"]').addClass('active');
                        pages.find('.items').trigger('slideTo', number);
                    }
                },
                swipe: {onTouch: true}
            });
        }
        var masters = $('.b-masters .items, .b-awards .items');
        var mastersSlider = function () {
            if (!$$.mobileEndpoint) {
                masters.each(function () {
                    var items = $(this);
                    items.after('<div class="g-pagination pagination"></div>');
                    items.carouFredSel({
                        pagination: items.parent().find('.pagination'),
                        responsive: true,
                        width: '100%',
                        auto: false,
                        items: {visible: 1},
                        swipe: {onTouch: true}
                    });
                });
            }
        };
        mastersSlider();
        var partners = $('.b-partners .slider');
        var partnersSlider = function () {
            partners.each(function () {
                var item = $(this);
                item.carouFredSel({
                    prev: item.parent().find('.prev'),
                    next: item.parent().find('.next'),
                    pagination: item.parent().find('.pagination'),
                    responsive: true,
                    width: '100%',
                    auto: false,
                    items: {visible: $$.desktopEndpoint ? 4 : 1},
                    swipe: {onTouch: true}
                });
            });
        };
        partnersSlider();
        $(window).on('resize', function () {
            if ($$.desktopEndpoint && $$.windowWidth <= 1120) {
                $$.desktopEndpoint = false;
                if (styles.length > 0)pages.find('.items').trigger('configuration', {items: {visible: 3}});
                if (slider.length > 0)slider.trigger('configuration', {width: '100%'});
                if (works.length > 0)works.trigger(('configuration'), {
                    items: {visible: 3},
                    scroll: {items: 1},
                    reInit: true
                });
                if (reviews.length > 0)reviews.trigger('configuration', {items: {visible: 1}});
                if (partners.length > 0)partners.trigger('configuration', {items: {visible: 2}});
            } else if (!$$.desktopEndpoint && $$.windowWidth > 1120) {
                $$.desktopEndpoint = true;
                if (slider.length > 0)slider.trigger('configuration', {width: '60%'});
                if (styles.length > 0)pages.find('.items').trigger('configuration', {items: {visible: 4}});
                if (works.length > 0)works.trigger(('configuration'), {
                    items: {visible: 4},
                    scroll: {items: 2},
                    reInit: true
                });
                if (reviews.length > 0)reviews.trigger('configuration', {items: {visible: 2}});
                if (partners.length > 0)partners.trigger('configuration', {items: {visible: 4}});
            }
            if ($$.mobileEndpoint && $$.windowWidth <= 640) {
                $$.mobileEndpoint = false;
                mastersSlider();
                if (works.length > 0)works.trigger('configuration', {height: '194px'});
                if (partners.length > 0)partners.trigger('configuration', {items: {visible: 1}});
            } else if (!$$.mobileEndpoint && $$.windowWidth > 640) {
                $$.mobileEndpoint = true;
                if (works.length > 0)works.trigger('configuration', {height: '320px'});
                if (masters.length > 0) {
                    $('.b-masters .pagination, .b-awards .pagination').remove();
                    masters.trigger('destroy');
                }
                if (slider.length > 0)slider.trigger('configuration', {reInit: true});
            }
            if (styles.length > 0)styles.trigger('updateSizes');
            if (works.length > 0)works.trigger('updateSizes');
        });
    }, video: function () {
        $('.b-video .play-button').on('click', function () {
            var item = $(this);
            item.fadeOut(300, function () {
                $('.b-video .preview').append($('<iframe width="615" height="410" ' + 'src="https://www.youtube.com/embed/' + item.data('video') + '?rel=0&autoplay=1&controls=0" frameborder="0"></iframe>'))
            });
        });
        $('body').on('click', '.js-video', function () {
            var item = $(this);
            $('.js-video').fadeIn(0).next('.preview').remove();
            item.fadeOut(300, function () {
                item.after('<div class="preview"><iframe width="615" height="410" ' + 'src="https://www.youtube.com/embed/' + item.data('video') + '?rel=0&autoplay=1&controls=0" frameborder="0"></iframe></div>');
            });
        });
        var videoList = $('.b-video-list .items');
        if (videoList.length > 0) {
            var pageToken = '';
            var ajax = false;
            var getVideos = function (page, recursive) {
                $.ajax({
                    url: 'http://mywaytattoo.ru/getVideos.xml',
                    type: 'get',
                    data: {pageToken: page},
                    dataType: 'json',
                    beforeSend: function () {
                        ajax = true;
                        videoList.addClass('loading');
                    },
                    success: function (data) {
                        pageToken = data.nextPageToken;
                        for (var item in data.items) {
                            var video = $('<li class="item">        <div class="thumbnail">         <img src="' + data.items[item].snippet.thumbnails.high.url + '">         <div class="play-button js-video" data-video="' + data.items[item].id.videoId + '"></div>        </div>        <div class="caption">' + data.items[item].snippet.title + '</div>       </li>');
                            videoList.append(video).removeClass('loading');
                        }
                        ajax = false;
                        if (recursive && $(document).height() == $(window).height() && typeof pageToken !== "undefined")getVideos(pageToken, true);
                    },
                    error: function (error) {
                        console.log(error)
                    }
                });
            }
            $(window).on('scroll', function () {
                if ($(document).height() == Math.floor($(window).scrollTop() + $(window).height()) && typeof pageToken !== "undefined" && !ajax) {
                    getVideos(pageToken, false);
                } else {
                    console.log($(document).height(), $(window).scrollTop() + $(window).height());
                }
            });
            while ($(document).height() == $(window).height() && typeof pageToken !== "undefined" && !ajax) {
                getVideos(pageToken, true);
            }
        }
    }, courses: function () {
        $('.b-courses .course').each(function (i) {
            $('.f-element-select.courses .items').append('<li class="item" data-course="' + i + '">' + $(this).find('.title').text() + '</li>');
            $$.firstThin($(this).find('.title'));
            if ((i + 1) % 4 == 0)$(this).after('<div class="line"></div>');
        });
    }, menu: function () {
        $('.b-menu').on('click', function () {
            $('.p-header').toggleClass('active');
        });
    }, videoPromo: function () {
        $('.b-info.video-promo').each(function () {
            var video = $(this).find('.video');
            video.on('click', '.play-button', function () {
                if (video.hasClass('loaded'))return false;
                var img = video.find('img');
                video.append('<iframe width="' + img.attr('width') + '" height="480" src="https://www.youtube.com/embed/' + img.data('video') + '?rel=0&amp;autoplay=1&amp;controls=0" frameborder="0"></iframe>');
                img.fadeTo(200, 0, function () {
                    video.addClass('loaded');
                });
            })
        });
    }
};
$(function () {
    $$.window = $(window);
    $$.windowWidth = window.innerWidth;
    $$.desktopEndpoint = $$.windowWidth > 1120;
    $$.mobileEndpoint = $$.windowWidth > 640;
    $$.body = $('body');
    $$.lang = $$.body.data('language');
    $$.translations = {
        ru: {
            menu: 'Меню',
            master: 'Мастер',
            contacts: 'Контактная информация',
            checkout_title: 'Оставить заявку',
            anyone: 'Любой',
            choose_style: 'Выберите стиль',
            choose_master: 'Выберите мастера',
            choose_course: 'Выберите курс'
        },
        en: {
            menu: 'Menu',
            master: 'Artist',
            contacts: 'Contacts',
            checkout_title: 'Submit application',
            anyone: 'Anyone',
            choose_style: 'Choose style',
            choose_master: 'Choose artist',
            choose_course: 'Choose course'
        }
    };
    $$.mobile = new MobileDetect(window.navigator.userAgent).phone() != null;
    $$.window.resize(function () {
        $$.windowWidth = window.innerWidth;
    });
    _.each($$.initializers, function (initializer) {
        initializer.call();
    });
});
var $$ = $$ || {};
$$.firstThin = function (item) {
    var text = item.text().split(' ');
    item.html(text.shift() + '<br/><strong>' + text.join(' ') + '</strong>');
};
$$.lastBold = function (item) {
    var text = item.text().split(' '), last = text.pop();
    item.html(text.join(' ') + '<br/><strong>' + last + '</strong>');
};