!function(e) {
    "object" == typeof exports ? module.exports = e("1") : "function" == typeof define && (define.amd || define.cmd) ? define(function() {
        return e("1");
    }) : this.messg = e("1");
}(function e(t, n, i) {
    function o(e) {
        if (n[e]) return n[e].exports;
        if (t[e]) return r(e, o);
        throw new Error('cannot find module "' + e + '"');
    }
    function r(o, r) {
        var s = n[o] = {
            exports: {}
        }, c = t[o], u = c[2], a = c[0];
        return a.call(s.exports, function(e) {
            var n = t[o][1][e];
            return r(n ? n : e);
        }, s, s.exports, e, t, n, i), u && (n[u] = n[o]), n[o].exports;
    }
    var s = function() {
        return this;
    }();
    for(var c in i)i[c] ? s[i[c]] = o(c) : o(c);
    return o.duo = !0, o.cache = n, o.modules = t, o;
}({
    1: [
        function(e, t) {
            "use strict";
            function n(e, t, o) {
                if (e) {
                    o = "number" == typeof t ? t : o, t = "string" == typeof t ? t : f[0], n.flow || c(d, function(e) {
                        e.hide();
                    });
                    var r = new i(t, e, o);
                    return d[r.id] = r, r.show(), r;
                }
            }
            function i(e, t, i) {
                this.id = u(h), this.type = e, this.text = t.replace(/(<script.*>.*<\/script>)/gim, ""), this.delay = i, this.exist = !1, this.element = document.createElement("div"), this.element.innerHTML = a, this.element = this.element.children[0], this.element.style.display = y, this.element.style.opacity = m, this.element.style.transition = [
                    "all",
                    n.speed / 1e3 + "s",
                    "ease-in-out"
                ].join(" "), this.element.className += [
                    " ",
                    h,
                    "-",
                    this.type
                ].join(""), this.element.id = this.id, this.element.setAttribute("role", this.type), this.buttons = this.element.children[0], this.content = this.element.children[1], this.content.innerHTML = this.text, l.appendChild(this.element);
                var o = this;
                setTimeout(function() {
                    o.buttons.children.length || r.bind(o.element, "click", function() {
                        o.hide();
                    });
                }, n.speed);
            }
            function o() {
                var e = p;
                c.reverse(d, function(t) {
                    t.exist && (t.element.style[n.position] = e + "px", e += t.element.offsetHeight + p);
                });
            }
            try {
                var r = e("event");
            } catch (s) {
                var r = e("component-event");
            }
            var c = e("ea"), u = e("uniquid"), a = e("./template.html"), f = [
                "default",
                "success",
                "info",
                "warning",
                "error"
            ], l = document.getElementsByTagName("body")[0], h = "messg", d = {}, p = 10, m = "0.0", v = "1.0", y = "none", x = "block";
            t.exports = n, n.speed = 250, n.position = "top", n.flow = !0, t.exports.set = function(e, t) {
                "object" == typeof e ? c(e, function(e, t) {
                    n[t] = e;
                }) : t && (n[e] = t);
            }, c(f, function(e) {
                t.exports[e] = function(t, i) {
                    return n(t, e, i);
                };
            }), i.prototype.show = function() {
                this.exist = !0, this.element.style.display = x;
                var e = this;
                setTimeout(function() {
                    e.element.style.opacity = v;
                }, 50), this.delay && setTimeout(function() {
                    e.hide();
                }, e.delay + n.speed), o();
            }, i.prototype.hide = function(e) {
                if ("function" == typeof e) return this.fn = e, this;
                this.exist = !1, this.element.style.opacity = m;
                var t = this;
                setTimeout(function() {
                    t.fn && t.fn(), t.element.style.display = y, l.removeChild(t.element), delete d[t.id];
                }, n.speed), o();
            }, i.prototype.button = function(e, t) {
                var n = document.createElement("button");
                n.innerHTML = e, this.buttons.appendChild(n), o();
                var i = this;
                return r.bind(n, "click", "function" == typeof t ? function() {
                    t(e.toLowerCase()), i.hide();
                } : function() {
                    i.hide();
                }), this;
            };
        },
        {
            event: 2,
            "component-event": 2,
            ea: 3,
            uniquid: 4,
            "./template.html": 5
        }
    ],
    2: [
        function(e, t, n) {
            var i = window.addEventListener ? "addEventListener" : "attachEvent", o = window.removeEventListener ? "removeEventListener" : "detachEvent", r = "addEventListener" !== i ? "on" : "";
            n.bind = function(e, t, n, o) {
                return e[i](r + t, n, o || !1), n;
            }, n.unbind = function(e, t, n, i) {
                return e[o](r + t, n, i || !1), n;
            };
        },
        {}
    ],
    3: [
        function(e, t) {
            "use strict";
            function n(e, t, n) {
                if ("function" == typeof n) switch(i(t)){
                    case "array":
                        return s[e](t, n);
                    case "object":
                        return c[e](t, n);
                }
            }
            function i(e) {
                return Object.prototype.toString.call(e).replace(/\[\w+\s(\w+)\]/i, "$1").toLowerCase();
            }
            function o(e, t) {
                return o.each(e, t);
            }
            var r = Object.prototype.hasOwnProperty, s = {}, c = {};
            s.each = function(e, t) {
                for(var n = 0; n < e.length; n++)t(e[n], n);
            }, s.reverse = function(e, t) {
                for(var n = e.length - 1; n >= 0; n--)t(e[n], n);
            }, c.each = function(e, t) {
                for(var n in e)r.call(e, n) && t(e[n], n);
            }, c.reverse = function(e, t) {
                var n = [];
                for(var i in e)r.call(e, i) && n.push(i);
                for(var o = n.length - 1; o >= 0; o--)t(e[n[o]], n[o]);
            }, o.each = function(e, t) {
                return n("each", e, t);
            }, o.reverse = function(e, t) {
                return n("reverse", e, t);
            }, t.exports = o;
        },
        {}
    ],
    4: [
        function(e, t) {
            "use strict";
            t.exports = function(e) {
                var t = parseInt([
                    (new Date).valueOf(),
                    (1e6 * Math.random()).toFixed()
                ].join("")).toString(36);
                return [
                    e || "",
                    t
                ].join("");
            };
        },
        {}
    ],
    5: [
        function(e, t) {
            t.exports = '<div class="messg">\n  <div class="messg-buttons"></div>\n  <div class="messg-text"></div>\n</div>\n';
        },
        {}
    ]
}, {}, {
    1: ""
}));

//# sourceMappingURL=index.0bf45072.js.map
