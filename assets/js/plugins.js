/*
 * Table of content:
 *
 * 1. jQuery v2.2.0
 * 2. Page scroll to id v1.5.9
 * 3. Magnific Popup v1.1.0
 * 4. jQuery ScrollAnimations v1.0.1
 * 5. animsition v4.0.2
 * 6. Swiper v4.0.7
 * 7. Midnight.js 1.1.1
 * 8. headroom.js v0.9.4
 * 9. footer-reveal.js
 * 10. Isotope PACKAGED v3.0.6
 * 11. Typewriter
 * 12. Particles.js v2.0.0
 */

/* 1.
 * jQuery JavaScript Library v2.2.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-01-08T20:02Z
 */


/* 2.
 * Page scroll to id
 * Version: 1.5.9
 * Plugin URI: http://manos.malihu.gr/page-scroll-to-id/
 * Author: malihu
 * Author URI: http://manos.malihu.gr
 * License: MIT License (MIT)
 */
!(function (e, t, a, l) {
    var n,
        s,
        i,
        o,
        r,
        c,
        u,
        h,
        g,
        f,
        d,
        p,
        _ = "mPageScroll2id",
        C = "mPS2id",
        v = {
            scrollSpeed: 1e3,
            autoScrollSpeed: !0,
            scrollEasing: "easeInOutQuint",
            scrollingEasing: "easeOutQuint",
            pageEndSmoothScroll: !0,
            layout: "vertical",
            offset: 0,
            highlightSelector: !1,
            clickedClass: C + "-clicked",
            targetClass: C + "-target",
            highlightClass: C + "-highlight",
            forceSingleHighlight: !1,
            keepHighlightUntilNext: !1,
            highlightByNextTarget: !1,
            disablePluginBelow: !1,
            clickEvents: !0,
            appendHash: !1,
            onStart: function () {},
            onComplete: function () {},
            defaultSelector: !1,
            live: !0,
            liveSelector: !1,
        },
        m = 0,
        S = {
            init: function (l) {
                l = e.extend(!0, {}, v, l);
                if ((e(a).data(C, l), (s = e(a).data(C)), !this.selector)) {
                    var c = "__" + C;
                    this.each(function () {
                        var t = e(this);
                        t.hasClass(c) || t.addClass(c);
                    }),
                        (this.selector = "." + c);
                }
                s.liveSelector && (this.selector += "," + s.liveSelector),
                    (n = n ? n + "," + this.selector : this.selector),
                    s.defaultSelector && (("object" == typeof e(n) && 0 !== e(n).length) || (n = ".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id'],._ps2id")),
                    s.clickEvents &&
                        e(a)
                            .undelegate("." + C)
                            .delegate(n, "click." + C, function (t) {
                                if (I._isDisabled.call(null)) I._removeClasses.call(null);
                                else {
                                    var a = e(this),
                                        l = a.attr("href"),
                                        n = a.prop("href").baseVal || a.prop("href");
                                    (l && -1 !== l.indexOf("#/")) ||
                                        (I._reset.call(null),
                                        (f = a.data("ps2id-offset") || 0),
                                        I._isValid.call(null, l, n) && I._findTarget.call(null, l) && (t.preventDefault(), (o = "selector"), (r = a), I._setClasses.call(null, !0), I._scrollTo.call(null)));
                                }
                            }),
                    e(t)
                        .unbind("." + C)
                        .bind("scroll." + C + " resize." + C, function () {
                            if (I._isDisabled.call(null)) I._removeClasses.call(null);
                            else {
                                var t = e("._" + C + "-t");
                                t.each(function (a) {
                                    var l = e(this),
                                        n = l.attr("id"),
                                        s = I._findHighlight.call(null, n);
                                    I._setClasses.call(null, !1, l, s), a == t.length - 1 && I._extendClasses.call(null);
                                });
                            }
                        }),
                    (i = !0),
                    I._setup.call(null),
                    I._live.call(null);
            },
            scrollTo: function (t, a) {
                if (I._isDisabled.call(null)) I._removeClasses.call(null);
                else if (t && void 0 !== t) {
                    I._isInit.call(null);
                    var l = { layout: s.layout, offset: s.offset, clicked: !1 };
                    a = e.extend(!0, {}, l, a);
                    I._reset.call(null),
                        (h = a.layout),
                        (g = a.offset),
                        (t = -1 !== t.indexOf("#") ? t : "#" + t),
                        I._isValid.call(null, t) && I._findTarget.call(null, t) && ((o = "scrollTo"), (r = a.clicked) && I._setClasses.call(null, !0), I._scrollTo.call(null));
                }
            },
            destroy: function () {
                e(t).unbind("." + C),
                    e(a)
                        .undelegate("." + C)
                        .removeData(C),
                    e("._" + C + "-t").removeData(C),
                    I._removeClasses.call(null, !0);
            },
        },
        I = {
            _isDisabled: function () {
                var e = t,
                    l = "inner",
                    n = s.disablePluginBelow instanceof Array ? [s.disablePluginBelow[0] || 0, s.disablePluginBelow[1] || 0] : [s.disablePluginBelow || 0, 0];
                return "innerWidth" in t || ((l = "client"), (e = a.documentElement || a.body)), e[l + "Width"] <= n[0] || e[l + "Height"] <= n[1];
            },
            _isValid: function (e, a) {
                if (e) {
                    var l = -1 !== (a = a || e).indexOf("#/") ? a.split("#/")[0] : a.split("#")[0],
                        n = t.location.toString().split("#")[0];
                    return "#" !== e && -1 !== e.indexOf("#") && ("" === l || decodeURIComponent(l) === decodeURIComponent(n));
                }
            },
            _setup: function () {
                var t = I._highlightSelector(),
                    a = 1,
                    l = 0;
                return e(t).each(function () {
                    var n = e(this),
                        i = n.attr("href"),
                        o = n.prop("href").baseVal || n.prop("href");
                    if (I._isValid.call(null, i, o)) {
                        var r = -1 !== i.indexOf("#/") ? i.split("#/")[1] : i.split("#")[1],
                            c = e("#" + r);
                        if (c.length > 0) {
                            s.highlightByNextTarget && c !== l && (l ? l.data(C, { tn: c }) : c.data(C, { tn: "0" }), (l = c)),
                                c.hasClass("_" + C + "-t") || c.addClass("_" + C + "-t"),
                                c.data(C, { i: a }),
                                n.hasClass("_" + C + "-h") || n.addClass("_" + C + "-h");
                            var u = I._findHighlight.call(null, r);
                            I._setClasses.call(null, !1, c, u), (m = a), ++a == e(t).length && I._extendClasses.call(null);
                        }
                    }
                });
            },
            _highlightSelector: function () {
                return s.highlightSelector && "" !== s.highlightSelector ? s.highlightSelector : n;
            },
            _findTarget: function (t) {
                var a = -1 !== t.indexOf("#/") ? t.split("#/")[1] : t.split("#")[1],
                    l = e("#" + a);
                if (l.length < 1 || "fixed" === l.css("position")) {
                    if ("top" !== a) return;
                    l = e("body");
                }
                return (c = l), h || (h = s.layout), (g = I._setOffset.call(null)), ((u = [(l.offset().top - g[0]).toString(), (l.offset().left - g[1]).toString()])[0] = u[0] < 0 ? 0 : u[0]), (u[1] = u[1] < 0 ? 0 : u[1]), u;
            },
            _setOffset: function () {
                var t, a, l, n;
                switch ((g || (g = s.offset ? s.offset : 0), f && (g = f), typeof g)) {
                    case "object":
                    case "string":
                        (a = [(t = [g.y ? g.y : g, g.x ? g.x : g])[0] instanceof jQuery ? t[0] : e(t[0]), t[1] instanceof jQuery ? t[1] : e(t[1])])[0].length > 0
                            ? ((l = a[0].height()), "fixed" === a[0].css("position") && (l += a[0][0].offsetTop))
                            : (l = !isNaN(parseFloat(t[0])) && isFinite(t[0]) ? parseInt(t[0]) : 0),
                            a[1].length > 0 ? ((n = a[1].width()), "fixed" === a[1].css("position") && (n += a[1][0].offsetLeft)) : (n = !isNaN(parseFloat(t[1])) && isFinite(t[1]) ? parseInt(t[1]) : 0);
                        break;
                    case "function":
                        (t = g.call(null)) instanceof Array ? ((l = t[0]), (n = t[1])) : (l = n = t);
                        break;
                    default:
                        l = n = parseInt(g);
                }
                return [l, n];
            },
            _findHighlight: function (a) {
                var l = t.location,
                    n = l.toString().split("#")[0],
                    s = l.pathname;
                return e(
                    "._" +
                        C +
                        "-h[href='#" +
                        a +
                        "'],._" +
                        C +
                        "-h[href='" +
                        n +
                        "#" +
                        a +
                        "'],._" +
                        C +
                        "-h[href='" +
                        s +
                        "#" +
                        a +
                        "'],._" +
                        C +
                        "-h[href='#/" +
                        a +
                        "'],._" +
                        C +
                        "-h[href='" +
                        n +
                        "#/" +
                        a +
                        "'],._" +
                        C +
                        "-h[href='" +
                        s +
                        "#/" +
                        a +
                        "']"
                );
            },
            _setClasses: function (t, a, l) {
                var n = s.clickedClass,
                    i = s.targetClass,
                    o = s.highlightClass;
                t && n && "" !== n
                    ? (e("." + n).removeClass(n), r.addClass(n))
                    : a && i && "" !== i && l && o && "" !== o && (I._currentTarget.call(null, a) ? (a.addClass(i), l.addClass(o)) : (!s.keepHighlightUntilNext || e("." + o).length > 1) && (a.removeClass(i), l.removeClass(o)));
            },
            _extendClasses: function () {
                var t = s.targetClass,
                    a = s.highlightClass,
                    l = e("." + t),
                    n = e("." + a),
                    i = t + "-first",
                    o = t + "-last",
                    r = a + "-first",
                    c = a + "-last";
                e("._" + C + "-t").removeClass(i + " " + o),
                    e("._" + C + "-h").removeClass(r + " " + c),
                    s.forceSingleHighlight
                        ? s.keepHighlightUntilNext && l.length > 1
                            ? (l.slice(0, 1).removeClass(t), n.slice(0, 1).removeClass(a))
                            : (l.slice(1).removeClass(t), n.slice(1).removeClass(a))
                        : (l.slice(0, 1).addClass(i).end().slice(-1).addClass(o), n.slice(0, 1).addClass(r).end().slice(-1).addClass(c));
            },
            _removeClasses: function (t) {
                e("." + s.clickedClass).removeClass(s.clickedClass),
                    e("." + s.targetClass).removeClass(s.targetClass + " " + s.targetClass + "-first " + s.targetClass + "-last"),
                    e("." + s.highlightClass).removeClass(s.highlightClass + " " + s.highlightClass + "-first " + s.highlightClass + "-last"),
                    t && (e("._" + C + "-t").removeClass("_" + C + "-t"), e("._" + C + "-h").removeClass("_" + C + "-h"));
            },
            _currentTarget: function (a) {
                var l = s["target_" + a.data(C).i],
                    n = a.data("ps2id-target"),
                    i = n && e(n)[0] ? e(n)[0].getBoundingClientRect() : a[0].getBoundingClientRect();
                if (void 0 !== l) {
                    var o = a.offset().top,
                        r = a.offset().left,
                        c = l.from ? l.from + o : o,
                        u = l.to ? l.to + o : o,
                        h = l.fromX ? l.fromX + r : r,
                        g = l.toX ? l.toX + r : r;
                    return i.top >= u && i.top <= c && i.left >= g && i.left <= h;
                }
                var f = e(t).height(),
                    d = e(t).width(),
                    p = n ? e(n).height() : a.height(),
                    _ = n ? e(n).width() : a.width(),
                    v = 1 + p / f,
                    m = v,
                    S = p < f ? v * (f / p) : v,
                    I = 1 + _ / d,
                    O = I,
                    M = _ < d ? I * (d / _) : I,
                    b = [i.top <= f / m, i.bottom >= f / S, i.left <= d / O, i.right >= d / M];
                if (s.highlightByNextTarget) {
                    var w = a.data(C).tn;
                    if (w) {
                        var y = w[0].getBoundingClientRect();
                        "vertical" === s.layout ? (b = [i.top <= f / 2, y.top > f / 2, 1, 1]) : "horizontal" === s.layout && (b = [1, 1, i.left <= d / 2, y.left > d / 2]);
                    }
                }
                return b[0] && b[1] && b[2] && b[3];
            },
            _scrollTo: function () {
                (p = I._scrollSpeed.call(null)), (u = s.pageEndSmoothScroll ? I._pageEndSmoothScroll.call(null) : u);
                var a = e("html,body"),
                    l = s.autoScrollSpeed ? I._autoScrollSpeed.call(null) : p,
                    n = a.is(":animated") ? s.scrollingEasing : s.scrollEasing,
                    i = e(t).scrollTop(),
                    o = e(t).scrollLeft();
                switch (h) {
                    case "horizontal":
                        o != u[1] &&
                            (I._callbacks.call(null, "onStart"),
                            a
                                .stop()
                                .animate({ scrollLeft: u[1] }, l, n)
                                .promise()
                                .then(function () {
                                    I._callbacks.call(null, "onComplete");
                                }));
                        break;
                    case "auto":
                        var r;
                        if (i != u[0] || o != u[1])
                            if ((I._callbacks.call(null, "onStart"), navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)))
                                a.stop()
                                    .animate(
                                        { pageYOffset: u[0], pageXOffset: u[1] },
                                        {
                                            duration: l,
                                            easing: n,
                                            step: function (e, a) {
                                                "pageXOffset" == a.prop ? (r = e) : "pageYOffset" == a.prop && t.scrollTo(r, e);
                                            },
                                        }
                                    )
                                    .promise()
                                    .then(function () {
                                        I._callbacks.call(null, "onComplete");
                                    });
                            else
                                a.stop()
                                    .animate({ scrollTop: u[0], scrollLeft: u[1] }, l, n)
                                    .promise()
                                    .then(function () {
                                        I._callbacks.call(null, "onComplete");
                                    });
                        break;
                    default:
                        i != u[0] &&
                            (I._callbacks.call(null, "onStart"),
                            a
                                .stop()
                                .animate({ scrollTop: u[0] }, l, n)
                                .promise()
                                .then(function () {
                                    I._callbacks.call(null, "onComplete");
                                }));
                }
            },
            _pageEndSmoothScroll: function () {
                var l = e(a).height(),
                    n = e(a).width(),
                    s = e(t).height(),
                    i = e(t).width();
                return [l - u[0] < s ? l - s : u[0], n - u[1] < i ? n - i : u[1]];
            },
            _scrollSpeed: function () {
                var t = s.scrollSpeed;
                return (
                    r &&
                        r.length &&
                        r.add(r.parent()).each(function () {
                            var a = e(this);
                            if (a.attr("class")) {
                                var l = a.attr("class").split(" ");
                                for (var n in l)
                                    if (String(l[n]).match(/^ps2id-speed-\d+$/)) {
                                        t = l[n].split("ps2id-speed-")[1];
                                        break;
                                    }
                            }
                        }),
                    parseInt(t)
                );
            },
            _autoScrollSpeed: function () {
                var l = e(t).scrollTop(),
                    n = e(t).scrollLeft(),
                    s = e(a).height(),
                    i = e(a).width(),
                    o = [p + (p * Math.floor((Math.abs(u[0] - l) / s) * 100)) / 100, p + (p * Math.floor((Math.abs(u[1] - n) / i) * 100)) / 100];
                return Math.max.apply(Math, o);
            },
            _callbacks: function (e) {
                if (s)
                    switch (((this[C] = { trigger: o, clicked: r, target: c, scrollTo: { y: u[0], x: u[1] } }), e)) {
                        case "onStart":
                            if (s.appendHash && t.history && t.history.pushState && r && r.length) {
                                var a = "#" + r.attr("href").split("#")[1];
                                a !== t.location.hash && history.pushState("", "", a);
                            }
                            s.onStart.call(null, this[C]);
                            break;
                        case "onComplete":
                            s.onComplete.call(null, this[C]);
                    }
            },
            _reset: function () {
                h = g = f = !1;
            },
            _isInit: function () {
                i || S.init.apply(this);
            },
            _live: function () {
                d = setTimeout(function () {
                    s.live ? e(I._highlightSelector()).length !== m && I._setup.call(null) : d && clearTimeout(d), I._live.call(null);
                }, 1e3);
            },
            _easing: function () {
                function t(e) {
                    var t = 7.5625,
                        a = 2.75;
                    return e < 1 / a ? t * e * e : e < 2 / a ? t * (e -= 1.5 / a) * e + 0.75 : e < 2.5 / a ? t * (e -= 2.25 / a) * e + 0.9375 : t * (e -= 2.625 / a) * e + 0.984375;
                }
                (e.easing.easeInQuad =
                    e.easing.easeInQuad ||
                    function (e) {
                        return e * e;
                    }),
                    (e.easing.easeOutQuad =
                        e.easing.easeOutQuad ||
                        function (e) {
                            return 1 - (1 - e) * (1 - e);
                        }),
                    (e.easing.easeInOutQuad =
                        e.easing.easeInOutQuad ||
                        function (e) {
                            return e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2;
                        }),
                    (e.easing.easeInCubic =
                        e.easing.easeInCubic ||
                        function (e) {
                            return e * e * e;
                        }),
                    (e.easing.easeOutCubic =
                        e.easing.easeOutCubic ||
                        function (e) {
                            return 1 - Math.pow(1 - e, 3);
                        }),
                    (e.easing.easeInOutCubic =
                        e.easing.easeInOutCubic ||
                        function (e) {
                            return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
                        }),
                    (e.easing.easeInQuart =
                        e.easing.easeInQuart ||
                        function (e) {
                            return e * e * e * e;
                        }),
                    (e.easing.easeOutQuart =
                        e.easing.easeOutQuart ||
                        function (e) {
                            return 1 - Math.pow(1 - e, 4);
                        }),
                    (e.easing.easeInOutQuart =
                        e.easing.easeInOutQuart ||
                        function (e) {
                            return e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2;
                        }),
                    (e.easing.easeInQuint =
                        e.easing.easeInQuint ||
                        function (e) {
                            return e * e * e * e * e;
                        }),
                    (e.easing.easeOutQuint =
                        e.easing.easeOutQuint ||
                        function (e) {
                            return 1 - Math.pow(1 - e, 5);
                        }),
                    (e.easing.easeInOutQuint =
                        e.easing.easeInOutQuint ||
                        function (e) {
                            return e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2;
                        }),
                    (e.easing.easeInExpo =
                        e.easing.easeInExpo ||
                        function (e) {
                            return 0 === e ? 0 : Math.pow(2, 10 * e - 10);
                        }),
                    (e.easing.easeOutExpo =
                        e.easing.easeOutExpo ||
                        function (e) {
                            return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
                        }),
                    (e.easing.easeInOutExpo =
                        e.easing.easeInOutExpo ||
                        function (e) {
                            return 0 === e ? 0 : 1 === e ? 1 : e < 0.5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2;
                        }),
                    (e.easing.easeInSine =
                        e.easing.easeInSine ||
                        function (e) {
                            return 1 - Math.cos((e * Math.PI) / 2);
                        }),
                    (e.easing.easeOutSine =
                        e.easing.easeOutSine ||
                        function (e) {
                            return Math.sin((e * Math.PI) / 2);
                        }),
                    (e.easing.easeInOutSine =
                        e.easing.easeInOutSine ||
                        function (e) {
                            return -(Math.cos(Math.PI * e) - 1) / 2;
                        }),
                    (e.easing.easeInCirc =
                        e.easing.easeInCirc ||
                        function (e) {
                            return 1 - Math.sqrt(1 - Math.pow(e, 2));
                        }),
                    (e.easing.easeOutCirc =
                        e.easing.easeOutCirc ||
                        function (e) {
                            return Math.sqrt(1 - Math.pow(e - 1, 2));
                        }),
                    (e.easing.easeInOutCirc =
                        e.easing.easeInOutCirc ||
                        function (e) {
                            return e < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2;
                        }),
                    (e.easing.easeInElastic =
                        e.easing.easeInElastic ||
                        function (e) {
                            return 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ((2 * Math.PI) / 3));
                        }),
                    (e.easing.easeOutElastic =
                        e.easing.easeOutElastic ||
                        function (e) {
                            return 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - 0.75) * ((2 * Math.PI) / 3)) + 1;
                        }),
                    (e.easing.easeInOutElastic =
                        e.easing.easeInOutElastic ||
                        function (e) {
                            return 0 === e
                                ? 0
                                : 1 === e
                                ? 1
                                : e < 0.5
                                ? (-Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ((2 * Math.PI) / 4.5))) / 2
                                : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ((2 * Math.PI) / 4.5))) / 2 + 1;
                        }),
                    (e.easing.easeInBack =
                        e.easing.easeInBack ||
                        function (e) {
                            return 2.70158 * e * e * e - 1.70158 * e * e;
                        }),
                    (e.easing.easeOutBack =
                        e.easing.easeOutBack ||
                        function (e) {
                            return 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2);
                        }),
                    (e.easing.easeInOutBack =
                        e.easing.easeInOutBack ||
                        function (e) {
                            return e < 0.5 ? (Math.pow(2 * e, 2) * (7.189819 * e - 2.5949095)) / 2 : (Math.pow(2 * e - 2, 2) * (3.5949095 * (2 * e - 2) + 2.5949095) + 2) / 2;
                        }),
                    (e.easing.easeInBounce =
                        e.easing.easeInBounce ||
                        function (e) {
                            return 1 - t(1 - e);
                        }),
                    (e.easing.easeOutBounce = e.easing.easeOutBounce || t),
                    (e.easing.easeInOutBounce =
                        e.easing.easeInOutBounce ||
                        function (e) {
                            return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : (1 + t(2 * e - 1)) / 2;
                        });
            },
        };
    I._easing.call(),
        (e.fn[_] = function (t) {
            return S[t] ? S[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : S.init.apply(this, arguments);
        }),
        (e[_] = function (t) {
            return S[t] ? S[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : S.init.apply(this, arguments);
        }),
        (e[_].defaults = v);
})(jQuery, window, document);

/* 3.
 * Magnific Popup
 * Version: 1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov;
 * License: MIT License (MIT)
 */
!(function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(window.jQuery || window.Zepto);
})(function (e) {
    var t,
        n,
        i,
        o,
        r,
        a,
        s = "Close",
        l = "BeforeClose",
        c = "MarkupParse",
        d = "Open",
        u = "Change",
        p = "mfp",
        f = "." + p,
        m = "mfp-ready",
        g = "mfp-removing",
        h = "mfp-prevent-close",
        v = function () {},
        y = !!window.jQuery,
        C = e(window),
        w = function (e, n) {
            t.ev.on(p + e + f, n);
        },
        b = function (t, n, i, o) {
            var r = document.createElement("div");
            return (r.className = "mfp-" + t), i && (r.innerHTML = i), o ? n && n.appendChild(r) : ((r = e(r)), n && r.appendTo(n)), r;
        },
        I = function (n, i) {
            t.ev.triggerHandler(p + n, i), t.st.callbacks && ((n = n.charAt(0).toLowerCase() + n.slice(1)), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]));
        },
        x = function (n) {
            return (n === a && t.currTemplate.closeBtn) || ((t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose))), (a = n)), t.currTemplate.closeBtn;
        },
        k = function () {
            e.magnificPopup.instance || ((t = new v()).init(), (e.magnificPopup.instance = t));
        };
    (v.prototype = {
        constructor: v,
        init: function () {
            var n = navigator.appVersion;
            (t.isLowIE = t.isIE8 = document.all && !document.addEventListener),
                (t.isAndroid = /android/gi.test(n)),
                (t.isIOS = /iphone|ipad|ipod/gi.test(n)),
                (t.supportsTransition = (function () {
                    var e = document.createElement("p").style,
                        t = ["ms", "O", "Moz", "Webkit"];
                    if (void 0 !== e.transition) return !0;
                    for (; t.length; ) if (t.pop() + "Transition" in e) return !0;
                    return !1;
                })()),
                (t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
                (i = e(document)),
                (t.popupsCache = {});
        },
        open: function (n) {
            var o;
            if (!1 === n.isObj) {
                (t.items = n.items.toArray()), (t.index = 0);
                var a,
                    s = n.items;
                for (o = 0; o < s.length; o++)
                    if (((a = s[o]).parsed && (a = a.el[0]), a === n.el[0])) {
                        t.index = o;
                        break;
                    }
            } else (t.items = e.isArray(n.items) ? n.items : [n.items]), (t.index = n.index || 0);
            if (!t.isOpen) {
                (t.types = []),
                    (r = ""),
                    n.mainEl && n.mainEl.length ? (t.ev = n.mainEl.eq(0)) : (t.ev = i),
                    n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), (t.currTemplate = t.popupsCache[n.key])) : (t.currTemplate = {}),
                    (t.st = e.extend(!0, {}, e.magnificPopup.defaults, n)),
                    (t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos),
                    t.st.modal && ((t.st.closeOnContentClick = !1), (t.st.closeOnBgClick = !1), (t.st.showCloseBtn = !1), (t.st.enableEscapeKey = !1)),
                    t.bgOverlay ||
                        ((t.bgOverlay = b("bg").on("click" + f, function () {
                            t.close();
                        })),
                        (t.wrap = b("wrap")
                            .attr("tabindex", -1)
                            .on("click" + f, function (e) {
                                t._checkIfClose(e.target) && t.close();
                            })),
                        (t.container = b("container", t.wrap))),
                    (t.contentContainer = b("content")),
                    t.st.preloader && (t.preloader = b("preloader", t.container, t.st.tLoading));
                var l = e.magnificPopup.modules;
                for (o = 0; o < l.length; o++) {
                    var u = l[o];
                    (u = u.charAt(0).toUpperCase() + u.slice(1)), t["init" + u].call(t);
                }
                I("BeforeOpen"),
                    t.st.showCloseBtn &&
                        (t.st.closeBtnInside
                            ? (w(c, function (e, t, n, i) {
                                  n.close_replaceWith = x(i.type);
                              }),
                              (r += " mfp-close-btn-in"))
                            : t.wrap.append(x())),
                    t.st.alignTop && (r += " mfp-align-top"),
                    t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY }) : t.wrap.css({ top: C.scrollTop(), position: "absolute" }),
                    (!1 === t.st.fixedBgPos || ("auto" === t.st.fixedBgPos && !t.fixedContentPos)) && t.bgOverlay.css({ height: i.height(), position: "absolute" }),
                    t.st.enableEscapeKey &&
                        i.on("keyup" + f, function (e) {
                            27 === e.keyCode && t.close();
                        }),
                    C.on("resize" + f, function () {
                        t.updateSize();
                    }),
                    t.st.closeOnContentClick || (r += " mfp-auto-cursor"),
                    r && t.wrap.addClass(r);
                var p = (t.wH = C.height()),
                    g = {};
                if (t.fixedContentPos && t._hasScrollBar(p)) {
                    var h = t._getScrollbarSize();
                    h && (g.marginRight = h);
                }
                t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : (g.overflow = "hidden"));
                var v = t.st.mainClass;
                return (
                    t.isIE7 && (v += " mfp-ie7"),
                    v && t._addClassToMFP(v),
                    t.updateItemHTML(),
                    I("BuildControls"),
                    e("html").css(g),
                    t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)),
                    (t._lastFocusedEl = document.activeElement),
                    setTimeout(function () {
                        t.content ? (t._addClassToMFP(m), t._setFocus()) : t.bgOverlay.addClass(m), i.on("focusin" + f, t._onFocusIn);
                    }, 16),
                    (t.isOpen = !0),
                    t.updateSize(p),
                    I(d),
                    n
                );
            }
            t.updateItemHTML();
        },
        close: function () {
            t.isOpen &&
                (I(l),
                (t.isOpen = !1),
                t.st.removalDelay && !t.isLowIE && t.supportsTransition
                    ? (t._addClassToMFP(g),
                      setTimeout(function () {
                          t._close();
                      }, t.st.removalDelay))
                    : t._close());
        },
        _close: function () {
            I(s);
            var n = g + " " + m + " ";
            if ((t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos)) {
                var o = { marginRight: "" };
                t.isIE7 ? e("body, html").css("overflow", "") : (o.overflow = ""), e("html").css(o);
            }
            i.off("keyup.mfp focusin" + f),
                t.ev.off(f),
                t.wrap.attr("class", "mfp-wrap").removeAttr("style"),
                t.bgOverlay.attr("class", "mfp-bg"),
                t.container.attr("class", "mfp-container"),
                !t.st.showCloseBtn || (t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type]) || (t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach()),
                t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(),
                (t.currItem = null),
                (t.content = null),
                (t.currTemplate = null),
                (t.prevHeight = 0),
                I("AfterClose");
        },
        updateSize: function (e) {
            if (t.isIOS) {
                var n = document.documentElement.clientWidth / window.innerWidth,
                    i = window.innerHeight * n;
                t.wrap.css("height", i), (t.wH = i);
            } else t.wH = e || C.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), I("Resize");
        },
        updateItemHTML: function () {
            var n = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
            var i = n.type;
            if ((I("BeforeChange", [t.currItem ? t.currItem.type : "", i]), (t.currItem = n), !t.currTemplate[i])) {
                var r = !!t.st[i] && t.st[i].markup;
                I("FirstMarkupParse", r), (t.currTemplate[i] = !r || e(r));
            }
            o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");
            var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
            t.appendContent(a, i), (n.preloaded = !0), I(u, n), (o = n.type), t.container.prepend(t.contentContainer), I("AfterChange");
        },
        appendContent: function (e, n) {
            (t.content = e),
                e ? (t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(x()) : (t.content = e)) : (t.content = ""),
                I("BeforeAppend"),
                t.container.addClass("mfp-" + n + "-holder"),
                t.contentContainer.append(t.content);
        },
        parseEl: function (n) {
            var i,
                o = t.items[n];
            if ((o.tagName ? (o = { el: e(o) }) : ((i = o.type), (o = { data: o, src: o.src })), o.el)) {
                for (var r = t.types, a = 0; a < r.length; a++)
                    if (o.el.hasClass("mfp-" + r[a])) {
                        i = r[a];
                        break;
                    }
                (o.src = o.el.attr("data-mfp-src")), o.src || (o.src = o.el.attr("href"));
            }
            return (o.type = i || t.st.type || "inline"), (o.index = n), (o.parsed = !0), (t.items[n] = o), I("ElementParse", o), t.items[n];
        },
        addGroup: function (e, n) {
            var i = function (i) {
                (i.mfpEl = this), t._openClick(i, e, n);
            };
            n || (n = {});
            var o = "click.magnificPopup";
            (n.mainEl = e), n.items ? ((n.isObj = !0), e.off(o).on(o, i)) : ((n.isObj = !1), n.delegate ? e.off(o).on(o, n.delegate, i) : ((n.items = e), e.off(o).on(o, i)));
        },
        _openClick: function (n, i, o) {
            if ((void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick) || !(2 === n.which || n.ctrlKey || n.metaKey || n.altKey || n.shiftKey)) {
                var r = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
                if (r)
                    if (e.isFunction(r)) {
                        if (!r.call(t)) return !0;
                    } else if (C.width() < r) return !0;
                n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), (o.el = e(n.mfpEl)), o.delegate && (o.items = i.find(o.delegate)), t.open(o);
            }
        },
        updateStatus: function (e, i) {
            if (t.preloader) {
                n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
                var o = { status: e, text: i };
                I("UpdateStatus", o),
                    (e = o.status),
                    (i = o.text),
                    t.preloader.html(i),
                    t.preloader.find("a").on("click", function (e) {
                        e.stopImmediatePropagation();
                    }),
                    t.container.addClass("mfp-s-" + e),
                    (n = e);
            }
        },
        _checkIfClose: function (n) {
            if (!e(n).hasClass(h)) {
                var i = t.st.closeOnContentClick,
                    o = t.st.closeOnBgClick;
                if (i && o) return !0;
                if (!t.content || e(n).hasClass("mfp-close") || (t.preloader && n === t.preloader[0])) return !0;
                if (n === t.content[0] || e.contains(t.content[0], n)) {
                    if (i) return !0;
                } else if (o && e.contains(document, n)) return !0;
                return !1;
            }
        },
        _addClassToMFP: function (e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e);
        },
        _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
        },
        _hasScrollBar: function (e) {
            return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || C.height());
        },
        _setFocus: function () {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus();
        },
        _onFocusIn: function (n) {
            if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target)) return t._setFocus(), !1;
        },
        _parseMarkup: function (t, n, i) {
            var o;
            i.data && (n = e.extend(i.data, n)),
                I(c, [t, n, i]),
                e.each(n, function (n, i) {
                    if (void 0 === i || !1 === i) return !0;
                    if ((o = n.split("_")).length > 1) {
                        var r = t.find(f + "-" + o[0]);
                        if (r.length > 0) {
                            var a = o[1];
                            "replaceWith" === a ? r[0] !== i[0] && r.replaceWith(i) : "img" === a ? (r.is("img") ? r.attr("src", i) : r.replaceWith(e("<img>").attr("src", i).attr("class", r.attr("class")))) : r.attr(o[1], i);
                        }
                    } else t.find(f + "-" + n).html(i);
                });
        },
        _getScrollbarSize: function () {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                (e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"), document.body.appendChild(e), (t.scrollbarSize = e.offsetWidth - e.clientWidth), document.body.removeChild(e);
            }
            return t.scrollbarSize;
        },
    }),
        (e.magnificPopup = {
            instance: null,
            proto: v.prototype,
            modules: [],
            open: function (t, n) {
                return k(), ((t = t ? e.extend(!0, {}, t) : {}).isObj = !0), (t.index = n || 0), this.instance.open(t);
            },
            close: function () {
                return e.magnificPopup.instance && e.magnificPopup.instance.close();
            },
            registerModule: function (t, n) {
                n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t);
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0,
            },
        }),
        (e.fn.magnificPopup = function (n) {
            k();
            var i = e(this);
            if ("string" == typeof n)
                if ("open" === n) {
                    var o,
                        r = y ? i.data("magnificPopup") : i[0].magnificPopup,
                        a = parseInt(arguments[1], 10) || 0;
                    r.items ? (o = r.items[a]) : ((o = i), r.delegate && (o = o.find(r.delegate)), (o = o.eq(a))), t._openClick({ mfpEl: o }, i, r);
                } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
            else (n = e.extend(!0, {}, n)), y ? i.data("magnificPopup", n) : (i[0].magnificPopup = n), t.addGroup(i, n);
            return i;
        });
    var T,
        _,
        P,
        S = "inline",
        E = function () {
            P && (_.after(P.addClass(T)).detach(), (P = null));
        };
    e.magnificPopup.registerModule(S, {
        options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" },
        proto: {
            initInline: function () {
                t.types.push(S),
                    w(s + "." + S, function () {
                        E();
                    });
            },
            getInline: function (n, i) {
                if ((E(), n.src)) {
                    var o = t.st.inline,
                        r = e(n.src);
                    if (r.length) {
                        var a = r[0].parentNode;
                        a && a.tagName && (_ || ((T = o.hiddenClass), (_ = b(T)), (T = "mfp-" + T)), (P = r.after(_).detach().removeClass(T))), t.updateStatus("ready");
                    } else t.updateStatus("error", o.tNotFound), (r = e("<div>"));
                    return (n.inlineElement = r), r;
                }
                return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i;
            },
        },
    });
    var z,
        O = "ajax",
        M = function () {
            z && e(document.body).removeClass(z);
        },
        B = function () {
            M(), t.req && t.req.abort();
        };
    e.magnificPopup.registerModule(O, {
        options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' },
        proto: {
            initAjax: function () {
                t.types.push(O), (z = t.st.ajax.cursor), w(s + "." + O, B), w("BeforeChange." + O, B);
            },
            getAjax: function (n) {
                z && e(document.body).addClass(z), t.updateStatus("loading");
                var i = e.extend(
                    {
                        url: n.src,
                        success: function (i, o, r) {
                            var a = { data: i, xhr: r };
                            I("ParseAjax", a),
                                t.appendContent(e(a.data), O),
                                (n.finished = !0),
                                M(),
                                t._setFocus(),
                                setTimeout(function () {
                                    t.wrap.addClass(m);
                                }, 16),
                                t.updateStatus("ready"),
                                I("AjaxContentAdded");
                        },
                        error: function () {
                            M(), (n.finished = n.loadError = !0), t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src));
                        },
                    },
                    t.st.ajax.settings
                );
                return (t.req = e.ajax(i)), "";
            },
        },
    });
    var L;
    e.magnificPopup.registerModule("image", {
        options: {
            markup:
                '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.',
        },
        proto: {
            initImage: function () {
                var n = t.st.image,
                    i = ".image";
                t.types.push("image"),
                    w(d + i, function () {
                        "image" === t.currItem.type && n.cursor && e(document.body).addClass(n.cursor);
                    }),
                    w(s + i, function () {
                        n.cursor && e(document.body).removeClass(n.cursor), C.off("resize" + f);
                    }),
                    w("Resize" + i, t.resizeImage),
                    t.isLowIE && w("AfterChange", t.resizeImage);
            },
            resizeImage: function () {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var n = 0;
                    t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n);
                }
            },
            _onImageHasSize: function (e) {
                e.img && ((e.hasSize = !0), L && clearInterval(L), (e.isCheckingImgSize = !1), I("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), (e.imgHidden = !1)));
            },
            findImageSize: function (e) {
                var n = 0,
                    i = e.img[0],
                    o = function (r) {
                        L && clearInterval(L),
                            (L = setInterval(function () {
                                i.naturalWidth > 0 ? t._onImageHasSize(e) : (n > 200 && clearInterval(L), 3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500));
                            }, r));
                    };
                o(1);
            },
            getImage: function (n, i) {
                var o = 0,
                    r = function () {
                        n &&
                            (n.img[0].complete
                                ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), (n.hasSize = !0), (n.loaded = !0), I("ImageLoadComplete"))
                                : ++o < 200
                                ? setTimeout(r, 100)
                                : a());
                    },
                    a = function () {
                        n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), (n.hasSize = !0), (n.loaded = !0), (n.loadError = !0));
                    },
                    s = t.st.image,
                    l = i.find(".mfp-img");
                if (l.length) {
                    var c = document.createElement("img");
                    (c.className = "mfp-img"),
                        n.el && n.el.find("img").length && (c.alt = n.el.find("img").attr("alt")),
                        (n.img = e(c).on("load.mfploader", r).on("error.mfploader", a)),
                        (c.src = n.src),
                        l.is("img") && (n.img = n.img.clone()),
                        (c = n.img[0]).naturalWidth > 0 ? (n.hasSize = !0) : c.width || (n.hasSize = !1);
                }
                return (
                    t._parseMarkup(
                        i,
                        {
                            title: (function (n) {
                                if (n.data && void 0 !== n.data.title) return n.data.title;
                                var i = t.st.image.titleSrc;
                                if (i) {
                                    if (e.isFunction(i)) return i.call(t, n);
                                    if (n.el) return n.el.attr(i) || "";
                                }
                                return "";
                            })(n),
                            img_replaceWith: n.img,
                        },
                        n
                    ),
                    t.resizeImage(),
                    n.hasSize
                        ? (L && clearInterval(L), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i)
                        : (t.updateStatus("loading"), (n.loading = !0), n.hasSize || ((n.imgHidden = !0), i.addClass("mfp-loading"), t.findImageSize(n)), i)
                );
            },
        },
    });
    var H;
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (e) {
                return e.is("img") ? e : e.find("img");
            },
        },
        proto: {
            initZoom: function () {
                var e,
                    n = t.st.zoom,
                    i = ".zoom";
                if (n.enabled && t.supportsTransition) {
                    var o,
                        r,
                        a = n.duration,
                        c = function (e) {
                            var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + n.duration / 1e3 + "s " + n.easing,
                                o = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                                r = "transition";
                            return (o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i), t.css(o), t;
                        },
                        d = function () {
                            t.content.css("visibility", "visible");
                        };
                    w("BuildControls" + i, function () {
                        if (t._allowZoom()) {
                            if ((clearTimeout(o), t.content.css("visibility", "hidden"), !(e = t._getItemToZoom()))) return void d();
                            (r = c(e)).css(t._getOffset()),
                                t.wrap.append(r),
                                (o = setTimeout(function () {
                                    r.css(t._getOffset(!0)),
                                        (o = setTimeout(function () {
                                            d(),
                                                setTimeout(function () {
                                                    r.remove(), (e = r = null), I("ZoomAnimationEnded");
                                                }, 16);
                                        }, a));
                                }, 16));
                        }
                    }),
                        w(l + i, function () {
                            if (t._allowZoom()) {
                                if ((clearTimeout(o), (t.st.removalDelay = a), !e)) {
                                    if (!(e = t._getItemToZoom())) return;
                                    r = c(e);
                                }
                                r.css(t._getOffset(!0)),
                                    t.wrap.append(r),
                                    t.content.css("visibility", "hidden"),
                                    setTimeout(function () {
                                        r.css(t._getOffset());
                                    }, 16);
                            }
                        }),
                        w(s + i, function () {
                            t._allowZoom() && (d(), r && r.remove(), (e = null));
                        });
                }
            },
            _allowZoom: function () {
                return "image" === t.currItem.type;
            },
            _getItemToZoom: function () {
                return !!t.currItem.hasSize && t.currItem.img;
            },
            _getOffset: function (n) {
                var i,
                    o = (i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
                    r = parseInt(i.css("padding-top"), 10),
                    a = parseInt(i.css("padding-bottom"), 10);
                o.top -= e(window).scrollTop() - r;
                var s = { width: i.width(), height: (y ? i.innerHeight() : i[0].offsetHeight) - a - r };
                return void 0 === H && (H = void 0 !== document.createElement("p").style.MozTransform), H ? (s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)") : ((s.left = o.left), (s.top = o.top)), s;
            },
        },
    });
    var A = "iframe",
        F = function (e) {
            if (t.currTemplate[A]) {
                var n = t.currTemplate[A].find("iframe");
                n.length && (e || (n[0].src = "//about:blank"), t.isIE8 && n.css("display", e ? "block" : "none"));
            }
        };
    e.magnificPopup.registerModule(A, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" },
                vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" },
                gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
            },
        },
        proto: {
            initIframe: function () {
                t.types.push(A),
                    w("BeforeChange", function (e, t, n) {
                        t !== n && (t === A ? F() : n === A && F(!0));
                    }),
                    w(s + "." + A, function () {
                        F();
                    });
            },
            getIframe: function (n, i) {
                var o = n.src,
                    r = t.st.iframe;
                e.each(r.patterns, function () {
                    if (o.indexOf(this.index) > -1) return this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), (o = this.src.replace("%id%", o)), !1;
                });
                var a = {};
                return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i;
            },
        },
    });
    var j = function (e) {
            var n = t.items.length;
            return e > n - 1 ? e - n : e < 0 ? n + e : e;
        },
        N = function (e, t, n) {
            return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n);
        };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%",
        },
        proto: {
            initGallery: function () {
                var n = t.st.gallery,
                    o = ".mfp-gallery";
                if (((t.direction = !0), !n || !n.enabled)) return !1;
                (r += " mfp-gallery"),
                    w(d + o, function () {
                        n.navigateByImgClick &&
                            t.wrap.on("click" + o, ".mfp-img", function () {
                                if (t.items.length > 1) return t.next(), !1;
                            }),
                            i.on("keydown" + o, function (e) {
                                37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
                            });
                    }),
                    w("UpdateStatus" + o, function (e, n) {
                        n.text && (n.text = N(n.text, t.currItem.index, t.items.length));
                    }),
                    w(c + o, function (e, i, o, r) {
                        var a = t.items.length;
                        o.counter = a > 1 ? N(n.tCounter, r.index, a) : "";
                    }),
                    w("BuildControls" + o, function () {
                        if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
                            var i = n.arrowMarkup,
                                o = (t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(h)),
                                r = (t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(h));
                            o.click(function () {
                                t.prev();
                            }),
                                r.click(function () {
                                    t.next();
                                }),
                                t.container.append(o.add(r));
                        }
                    }),
                    w(u + o, function () {
                        t._preloadTimeout && clearTimeout(t._preloadTimeout),
                            (t._preloadTimeout = setTimeout(function () {
                                t.preloadNearbyImages(), (t._preloadTimeout = null);
                            }, 16));
                    }),
                    w(s + o, function () {
                        i.off(o), t.wrap.off("click" + o), (t.arrowRight = t.arrowLeft = null);
                    });
            },
            next: function () {
                (t.direction = !0), (t.index = j(t.index + 1)), t.updateItemHTML();
            },
            prev: function () {
                (t.direction = !1), (t.index = j(t.index - 1)), t.updateItemHTML();
            },
            goTo: function (e) {
                (t.direction = e >= t.index), (t.index = e), t.updateItemHTML();
            },
            preloadNearbyImages: function () {
                var e,
                    n = t.st.gallery.preload,
                    i = Math.min(n[0], t.items.length),
                    o = Math.min(n[1], t.items.length);
                for (e = 1; e <= (t.direction ? o : i); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? i : o); e++) t._preloadItem(t.index - e);
            },
            _preloadItem: function (n) {
                if (((n = j(n)), !t.items[n].preloaded)) {
                    var i = t.items[n];
                    i.parsed || (i = t.parseEl(n)),
                        I("LazyLoad", i),
                        "image" === i.type &&
                            (i.img = e('<img class="mfp-img" />')
                                .on("load.mfploader", function () {
                                    i.hasSize = !0;
                                })
                                .on("error.mfploader", function () {
                                    (i.hasSize = !0), (i.loadError = !0), I("LazyLoadError", i);
                                })
                                .attr("src", i.src)),
                        (i.preloaded = !0);
                }
            },
        },
    });
    var W = "retina";
    e.magnificPopup.registerModule(W, {
        options: {
            replaceSrc: function (e) {
                return e.src.replace(/\.\w+$/, function (e) {
                    return "@2x" + e;
                });
            },
            ratio: 1,
        },
        proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina,
                        n = e.ratio;
                    (n = isNaN(n) ? n() : n) > 1 &&
                        (w("ImageHasSize." + W, function (e, t) {
                            t.img.css({ "max-width": t.img[0].naturalWidth / n, width: "100%" });
                        }),
                        w("ElementParse." + W, function (t, i) {
                            i.src = e.replaceSrc(i, n);
                        }));
                }
            },
        },
    }),
        k();
});

/* 4.
 * jQuery ScrollAnimations
 * @version 1.0.1
 * @author Westley Mon @cavemon, Mindgruve @mindgruve
 * @copyright (c) 2017 Mindgruve / Westley Mon
 * @license MIT License
 */
(function (t, i, a, n) {
    var e = "scrollAnimations",
        s = { offset: 0.7 };
    var o;
    function m(a, n) {
        if (a) {
            this.element = a;
            this.animationElements = [];
            this.triggerPoint = null;
            this.lastScrollPos = -1;
            this.options = t.extend({}, s, n);
            this._defaults = s;
            this._name = e;
            i.onload = this.init();
        }
    }
    m.prototype = {
        init: function () {
            var a = this;
            var n = t(this.element);
            i.requestAnimationFrame =
                i.requestAnimationFrame ||
                i.mozRequestAnimationFrame ||
                i.webkitRequestAnimationFrame ||
                i.msRequestAnimationFrame ||
                function (t) {
                    setTimeout(t, 1e3 / 60);
                };
            a.setup(n);
            a.updatePage();
            t(i).on("resize", function () {
                a.resize();
            });
        },
        resize: function () {
            var t = this;
            clearTimeout(o);
            o = setTimeout(function () {
                t.setTriggerpoint();
            }, 50);
        },
        setTriggerpoint: function () {
            this.triggerPoint = i.innerHeight * this.options.offset;
        },
        setup: function (i) {
            this.setTriggerpoint();
            var a = t(i),
                n = a.find("[data-animation-text]");
            if (n.length) {
                n.each(function () {
                    var i = t(this);
                    var a = i.attr("data-animation-delay");
                    i.css({ "-webkit-animation-delay": a, "-moz-animation-delay": a, "-ms-animation-delay": a, "-o-animation-delay": a, "animation-delay": a });
                });
            } else {
                var e = a.attr("data-animation-delay");
                a.css({ "-webkit-animation-delay": e, "-moz-animation-delay": e, "-ms-animation-delay": e, "-o-animation-delay": e, "animation-delay": e });
            }
            this.animationElements.push(a);
        },
        updatePage: function () {
            var t = this;
            this.animateElements();
            requestAnimationFrame(this.updatePage.bind(this));
        },
        animateElements: function () {
            var a = this;
            var n = i.pageYOffset;
            if (n === this.lastScrollPos) return;
            this.lastScrollPos = n;
            t(a.animationElements).each(function () {
                var i = t(this),
                    e = i.find("[data-animation-text]");
                if (i.hasClass("animated") || n < i.offset().top - a.triggerPoint) return;
                if (e.length) {
                    i.addClass("animated");
                    e.each(function () {
                        t(this).addClass("animated").addClass(t(this).attr("data-animation"));
                    });
                } else {
                    i.addClass("animated").addClass(i.attr("data-animation"));
                }
            });
        },
    };
    t.fn[e] = function (i) {
        return this.each(function () {
            if (!t.data(this, "plugin_" + e)) {
                t.data(this, "plugin_" + e, new m(this, i));
            }
        });
    };
    if (typeof define === "function" && define.amd) {
        define(function () {
            return m;
        });
    }
})(jQuery, window, document);

/* 5.
 * animsition
 * Version 4.0.2
 * http://blivesta.github.io/animsition
 * License : MIT
 * Author : blivesta (http://blivesta.com/)
 */
!(function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? (module.exports = t(require("jquery"))) : t(jQuery);
})(function (t) {
    "use strict";
    var n = "animsition",
        i = {
            init: function (a) {
                (a = t.extend(
                    {
                        inClass: "fade-in",
                        outClass: "fade-out",
                        inDuration: 1500,
                        outDuration: 800,
                        linkElement: ".animsition-link",
                        loading: !0,
                        loadingParentElement: "body",
                        loadingClass: "animsition-loading",
                        loadingInner: "",
                        timeout: !1,
                        timeoutCountdown: 5e3,
                        onLoadEvent: !0,
                        browser: ["animation-duration", "-webkit-animation-duration"],
                        overlay: !1,
                        overlayClass: "animsition-overlay-slide",
                        overlayParentElement: "body",
                        transition: function (t) {
                            window.location.href = t;
                        },
                    },
                    a
                )),
                    (i.settings = {
                        timer: !1,
                        data: { inClass: "animsition-in-class", inDuration: "animsition-in-duration", outClass: "animsition-out-class", outDuration: "animsition-out-duration", overlay: "animsition-overlay" },
                        events: { inStart: "animsition.inStart", inEnd: "animsition.inEnd", outStart: "animsition.outStart", outEnd: "animsition.outEnd" },
                    });
                var o = i.supportCheck.call(this, a);
                if (!o && a.browser.length > 0 && (!o || !this.length))
                    return (
                        "console" in window ||
                            ((window.console = {}),
                            (window.console.log = function (t) {
                                return t;
                            })),
                        this.length || console.log("Animsition: Element does not exist on page."),
                        o || console.log("Animsition: Does not support this browser."),
                        i.destroy.call(this)
                    );
                var e = i.optionCheck.call(this, a);
                return (
                    e && t("." + a.overlayClass).length <= 0 && i.addOverlay.call(this, a),
                    a.loading && t("." + a.loadingClass).length <= 0 && i.addLoading.call(this, a),
                    this.each(function () {
                        var o = this,
                            e = t(this),
                            s = t(window),
                            r = t(document),
                            l = e.data(n);
                        l ||
                            ((a = t.extend({}, a)),
                            e.data(n, { options: a }),
                            a.timeout && i.addTimer.call(o),
                            a.onLoadEvent &&
                                s.on("load." + n, function () {
                                    i.settings.timer && clearTimeout(i.settings.timer), i["in"].call(o);
                                }),
                            s.on("pageshow." + n, function (t) {
                                t.originalEvent.persisted && i["in"].call(o);
                            }),
                            s.on("unload." + n, function () {}),
                            r.on("click." + n, a.linkElement, function (n) {
                                n.preventDefault();
                                var a = t(this),
                                    e = a.attr("href");
                                2 === n.which || n.metaKey || n.shiftKey || (-1 !== navigator.platform.toUpperCase().indexOf("WIN") && n.ctrlKey) ? window.open(e, "_blank") : i.out.call(o, a, e);
                            }));
                    })
                );
            },
            addOverlay: function (n) {
                t(n.overlayParentElement).prepend('<div class="' + n.overlayClass + '"></div>');
            },
            addLoading: function (n) {
                t(n.loadingParentElement).append('<div class="' + n.loadingClass + '">' + n.loadingInner + "</div>");
            },
            removeLoading: function () {
                var i = t(this),
                    a = i.data(n).options,
                    o = t(a.loadingParentElement).children("." + a.loadingClass);
                o.fadeOut().remove();
            },
            addTimer: function () {
                var a = this,
                    o = t(this),
                    e = o.data(n).options;
                i.settings.timer = setTimeout(function () {
                    i["in"].call(a), t(window).off("load." + n);
                }, e.timeoutCountdown);
            },
            supportCheck: function (n) {
                var i = t(this),
                    a = n.browser,
                    o = a.length,
                    e = !1;
                0 === o && (e = !0);
                for (var s = 0; o > s; s++)
                    if ("string" == typeof i.css(a[s])) {
                        e = !0;
                        break;
                    }
                return e;
            },
            optionCheck: function (n) {
                var a,
                    o = t(this);
                return (a = n.overlay || o.data(i.settings.data.overlay) ? !0 : !1);
            },
            animationCheck: function (i, a, o) {
                var e = t(this),
                    s = e.data(n).options,
                    r = typeof i,
                    l = !a && "number" === r,
                    d = a && "string" === r && i.length > 0;
                return l || d ? (i = i) : a && o ? (i = s.inClass) : !a && o ? (i = s.inDuration) : a && !o ? (i = s.outClass) : a || o || (i = s.outDuration), i;
            },
            in: function () {
                var a = this,
                    o = t(this),
                    e = o.data(n).options,
                    s = o.data(i.settings.data.inDuration),
                    r = o.data(i.settings.data.inClass),
                    l = i.animationCheck.call(a, s, !1, !0),
                    d = i.animationCheck.call(a, r, !0, !0),
                    u = i.optionCheck.call(a, e),
                    c = o.data(n).outClass;
                e.loading && i.removeLoading.call(a), c && o.removeClass(c), u ? i.inOverlay.call(a, d, l) : i.inDefault.call(a, d, l);
            },
            inDefault: function (n, a) {
                var o = t(this);
                o.css({ "animation-duration": a + "ms" })
                    .addClass(n)
                    .trigger(i.settings.events.inStart)
                    .animateCallback(function () {
                        o.removeClass(n).css({ opacity: 1 }).trigger(i.settings.events.inEnd);
                    });
            },
            inOverlay: function (a, o) {
                var e = t(this),
                    s = e.data(n).options;
                e.css({ opacity: 1 }).trigger(i.settings.events.inStart),
                    t(s.overlayParentElement)
                        .children("." + s.overlayClass)
                        .css({ "animation-duration": o + "ms" })
                        .addClass(a)
                        .animateCallback(function () {
                            e.trigger(i.settings.events.inEnd);
                        });
            },
            out: function (a, o) {
                var e = this,
                    s = t(this),
                    r = s.data(n).options,
                    l = a.data(i.settings.data.outClass),
                    d = s.data(i.settings.data.outClass),
                    u = a.data(i.settings.data.outDuration),
                    c = s.data(i.settings.data.outDuration),
                    m = l ? l : d,
                    g = u ? u : c,
                    f = i.animationCheck.call(e, m, !0, !1),
                    v = i.animationCheck.call(e, g, !1, !1),
                    h = i.optionCheck.call(e, r);
                (s.data(n).outClass = f), h ? i.outOverlay.call(e, f, v, o) : i.outDefault.call(e, f, v, o);
            },
            outDefault: function (a, o, e) {
                var s = t(this),
                    r = s.data(n).options;
                s.css({ "animation-duration": o + 1 + "ms" })
                    .addClass(a)
                    .trigger(i.settings.events.outStart)
                    .animateCallback(function () {
                        s.trigger(i.settings.events.outEnd), r.transition(e);
                    });
            },
            outOverlay: function (a, o, e) {
                var s = this,
                    r = t(this),
                    l = r.data(n).options,
                    d = r.data(i.settings.data.inClass),
                    u = i.animationCheck.call(s, d, !0, !0);
                t(l.overlayParentElement)
                    .children("." + l.overlayClass)
                    .css({ "animation-duration": o + 1 + "ms" })
                    .removeClass(u)
                    .addClass(a)
                    .trigger(i.settings.events.outStart)
                    .animateCallback(function () {
                        r.trigger(i.settings.events.outEnd), l.transition(e);
                    });
            },
            destroy: function () {
                return this.each(function () {
                    var i = t(this);
                    t(window).off("." + n), i.css({ opacity: 1 }).removeData(n);
                });
            },
        };
    (t.fn.animateCallback = function (n) {
        var i = "animationend webkitAnimationEnd";
        return this.each(function () {
            var a = t(this);
            a.on(i, function () {
                return a.off(i), n.call(this);
            });
        });
    }),
        (t.fn.animsition = function (a) {
            return i[a] ? i[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void t.error("Method " + a + " does not exist on jQuery." + n) : i.init.apply(this, arguments);
        });
});

/* 6.
 * Swiper 4.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2017 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 28, 2017
 */
!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : (e.Swiper = t());
})(this, function () {
    "use strict";
    function e(e, t) {
        var a = [],
            i = 0;
        if (e && !t && e instanceof r) return e;
        if (e)
            if ("string" == typeof e) {
                var s,
                    n,
                    o = e.trim();
                if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                    var l = "div";
                    for (
                        0 === o.indexOf("<li") && (l = "ul"),
                            0 === o.indexOf("<tr") && (l = "tbody"),
                            (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) || (l = "tr"),
                            0 === o.indexOf("<tbody") && (l = "table"),
                            0 === o.indexOf("<option") && (l = "select"),
                            (n = document.createElement(l)).innerHTML = o,
                            i = 0;
                        i < n.childNodes.length;
                        i += 1
                    )
                        a.push(n.childNodes[i]);
                } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i]);
            } else if (e.nodeType || e === window || e === document) a.push(e);
            else if (e.length > 0 && e[0].nodeType) for (i = 0; i < e.length; i += 1) a.push(e[i]);
        return new r(a);
    }
    function t(e) {
        for (var t = [], a = 0; a < e.length; a += 1) -1 === t.indexOf(e[a]) && t.push(e[a]);
        return t;
    }
    function a() {
        var e = "onwheel" in d;
        if (!e) {
            var t = d.createElement("div");
            t.setAttribute("onwheel", "return;"), (e = "function" == typeof t.onwheel);
        }
        return !e && d.implementation && d.implementation.hasFeature && !0 !== d.implementation.hasFeature("", "") && (e = d.implementation.hasFeature("Events.wheel", "3.0")), e;
    }
    var i,
        s = (i =
            "undefined" == typeof window
                ? {
                      navigator: { userAgent: "" },
                      location: {},
                      history: {},
                      addEventListener: function () {},
                      removeEventListener: function () {},
                      getComputedStyle: function () {
                          return {};
                      },
                      Image: function () {},
                      Date: function () {},
                      screen: {},
                  }
                : window),
        r = function (e) {
            for (var t = this, a = 0; a < e.length; a += 1) t[a] = e[a];
            return (t.length = e.length), this;
        };
    (e.fn = r.prototype), (e.Class = r), (e.Dom7 = r);
    "resize scroll".split(" ");
    var n = {
        addClass: function (e) {
            var t = this;
            if (void 0 === e) return this;
            for (var a = e.split(" "), i = 0; i < a.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== t[s].classList && t[s].classList.add(a[i]);
            return this;
        },
        removeClass: function (e) {
            for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== t[s].classList && t[s].classList.remove(a[i]);
            return this;
        },
        hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e);
        },
        toggleClass: function (e) {
            for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== t[s].classList && t[s].classList.toggle(a[i]);
            return this;
        },
        attr: function (e, t) {
            var a = arguments,
                i = this;
            if (1 !== arguments.length || "string" != typeof e) {
                for (var s = 0; s < this.length; s += 1)
                    if (2 === a.length) i[s].setAttribute(e, t);
                    else for (var r in e) (i[s][r] = e[r]), i[s].setAttribute(r, e[r]);
                return this;
            }
            if (this[0]) return this[0].getAttribute(e);
        },
        removeAttr: function (e) {
            for (var t = this, a = 0; a < this.length; a += 1) t[a].removeAttribute(e);
            return this;
        },
        data: function (e, t) {
            var a,
                i = this;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1) (a = i[s]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), (a.dom7ElementDataStorage[e] = t);
                return this;
            }
            if ((a = this[0])) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
                var r = a.getAttribute("data-" + e);
                if (r) return r;
            }
        },
        transform: function (e) {
            for (var t = this, a = 0; a < this.length; a += 1) {
                var i = t[a].style;
                (i.webkitTransform = e), (i.transform = e);
            }
            return this;
        },
        transition: function (e) {
            var t = this;
            "string" != typeof e && (e += "ms");
            for (var a = 0; a < this.length; a += 1) {
                var i = t[a].style;
                (i.webkitTransitionDuration = e), (i.transitionDuration = e);
            }
            return this;
        },
        on: function () {
            function t(t) {
                var a = t.target;
                if (a) {
                    var i = t.target.dom7EventData || [];
                    if ((i.unshift(t), e(a).is(o))) l.apply(a, i);
                    else for (var s = e(a).parents(), r = 0; r < s.length; r += 1) e(s[r]).is(o) && l.apply(s[r], i);
                }
            }
            function a(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.unshift(e), l.apply(this, t);
            }
            for (var i = this, s = [], r = arguments.length; r--; ) s[r] = arguments[r];
            var n = s[0],
                o = s[1],
                l = s[2],
                d = s[3];
            if ("function" == typeof s[1]) {
                var p;
                (n = (p = s)[0]), (l = p[1]), (d = p[2]), (o = void 0);
            }
            d || (d = !1);
            for (var c, u = n.split(" "), h = 0; h < this.length; h += 1) {
                var v = i[h];
                if (o) for (c = 0; c < u.length; c += 1) v.dom7LiveListeners || (v.dom7LiveListeners = []), v.dom7LiveListeners.push({ type: n, listener: l, proxyListener: t }), v.addEventListener(u[c], t, d);
                else for (c = 0; c < u.length; c += 1) v.dom7Listeners || (v.dom7Listeners = []), v.dom7Listeners.push({ type: n, listener: l, proxyListener: a }), v.addEventListener(u[c], a, d);
            }
            return this;
        },
        off: function () {
            for (var e = this, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
            var i = t[0],
                s = t[1],
                r = t[2],
                n = t[3];
            if ("function" == typeof t[1]) {
                var o;
                (i = (o = t)[0]), (r = o[1]), (n = o[2]), (s = void 0);
            }
            n || (n = !1);
            for (var l = i.split(" "), d = 0; d < l.length; d += 1)
                for (var p = 0; p < this.length; p += 1) {
                    var c = e[p];
                    if (s) {
                        if (c.dom7LiveListeners)
                            for (var u = 0; u < c.dom7LiveListeners.length; u += 1)
                                r
                                    ? c.dom7LiveListeners[u].listener === r && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n)
                                    : c.dom7LiveListeners[u].type === l[d] && c.removeEventListener(l[d], c.dom7LiveListeners[u].proxyListener, n);
                    } else if (c.dom7Listeners)
                        for (var h = 0; h < c.dom7Listeners.length; h += 1)
                            r ? c.dom7Listeners[h].listener === r && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n) : c.dom7Listeners[h].type === l[d] && c.removeEventListener(l[d], c.dom7Listeners[h].proxyListener, n);
                }
            return this;
        },
        trigger: function () {
            for (var e = this, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
            for (var i = t[0].split(" "), s = t[1], r = 0; r < i.length; r += 1)
                for (var n = 0; n < this.length; n += 1) {
                    var o = void 0;
                    try {
                        o = new window.CustomEvent(i[r], { detail: s, bubbles: !0, cancelable: !0 });
                    } catch (e) {
                        (o = document.createEvent("Event")).initEvent(i[r], !0, !0), (o.detail = s);
                    }
                    (e[n].dom7EventData = t.filter(function (e, t) {
                        return t > 0;
                    })),
                        e[n].dispatchEvent(o),
                        (e[n].dom7EventData = []),
                        delete e[n].dom7EventData;
                }
            return this;
        },
        transitionEnd: function (e) {
            function t(r) {
                if (r.target === this) for (e.call(this, r), a = 0; a < i.length; a += 1) s.off(i[a], t);
            }
            var a,
                i = ["webkitTransitionEnd", "transitionend"],
                s = this;
            if (e) for (a = 0; a < i.length; a += 1) s.on(i[a], t);
            return this;
        },
        outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        offset: function () {
            if (this.length > 0) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    a = document.body,
                    i = e.clientTop || a.clientTop || 0,
                    s = e.clientLeft || a.clientLeft || 0,
                    r = e === window ? window.scrollY : e.scrollTop,
                    n = e === window ? window.scrollX : e.scrollLeft;
                return { top: t.top + r - i, left: t.left + n - s };
            }
            return null;
        },
        css: function (e, t) {
            var a,
                i = this;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1) for (var s in e) i[a].style[s] = e[s];
                    return this;
                }
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) i[a].style[e] = t;
                return this;
            }
            return this;
        },
        each: function (e) {
            var t = this;
            if (!e) return this;
            for (var a = 0; a < this.length; a += 1) if (!1 === e.call(t[a], a, t[a])) return t;
            return this;
        },
        html: function (e) {
            var t = this;
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var a = 0; a < this.length; a += 1) t[a].innerHTML = e;
            return this;
        },
        text: function (e) {
            var t = this;
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var a = 0; a < this.length; a += 1) t[a].textContent = e;
            return this;
        },
        is: function (t) {
            var a,
                i,
                s = this[0];
            if (!s || void 0 === t) return !1;
            if ("string" == typeof t) {
                if (s.matches) return s.matches(t);
                if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
                if (s.msMatchesSelector) return s.msMatchesSelector(t);
                for (a = e(t), i = 0; i < a.length; i += 1) if (a[i] === s) return !0;
                return !1;
            }
            if (t === document) return s === document;
            if (t === window) return s === window;
            if (t.nodeType || t instanceof r) {
                for (a = t.nodeType ? [t] : t, i = 0; i < a.length; i += 1) if (a[i] === s) return !0;
                return !1;
            }
            return !1;
        },
        index: function () {
            var e,
                t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function (e) {
            if (void 0 === e) return this;
            var t,
                a = this.length;
            return e > a - 1 ? new r([]) : e < 0 ? ((t = a + e), new r(t < 0 ? [] : [this[t]])) : new r([this[e]]);
        },
        append: function () {
            for (var e = this, t = [], a = arguments.length; a--; ) t[a] = arguments[a];
            for (var i, s = 0; s < t.length; s += 1) {
                i = t[s];
                for (var n = 0; n < this.length; n += 1)
                    if ("string" == typeof i) {
                        var o = document.createElement("div");
                        for (o.innerHTML = i; o.firstChild; ) e[n].appendChild(o.firstChild);
                    } else if (i instanceof r) for (var l = 0; l < i.length; l += 1) e[n].appendChild(i[l]);
                    else e[n].appendChild(i);
            }
            return this;
        },
        prepend: function (e) {
            var t,
                a,
                i = this;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var s = document.createElement("div");
                    for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1) i[t].insertBefore(s.childNodes[a], i[t].childNodes[0]);
                } else if (e instanceof r) for (a = 0; a < e.length; a += 1) i[t].insertBefore(e[a], i[t].childNodes[0]);
                else i[t].insertBefore(e, i[t].childNodes[0]);
            return this;
        },
        next: function (t) {
            return new r(this.length > 0 ? (t ? (this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : []) : this[0].nextElementSibling ? [this[0].nextElementSibling] : []) : []);
        },
        nextAll: function (t) {
            var a = [],
                i = this[0];
            if (!i) return new r([]);
            for (; i.nextElementSibling; ) {
                var s = i.nextElementSibling;
                t ? e(s).is(t) && a.push(s) : a.push(s), (i = s);
            }
            return new r(a);
        },
        prev: function (t) {
            if (this.length > 0) {
                var a = this[0];
                return new r(t ? (a.previousElementSibling && e(a.previousElementSibling).is(t) ? [a.previousElementSibling] : []) : a.previousElementSibling ? [a.previousElementSibling] : []);
            }
            return new r([]);
        },
        prevAll: function (t) {
            var a = [],
                i = this[0];
            if (!i) return new r([]);
            for (; i.previousElementSibling; ) {
                var s = i.previousElementSibling;
                t ? e(s).is(t) && a.push(s) : a.push(s), (i = s);
            }
            return new r(a);
        },
        parent: function (a) {
            for (var i = this, s = [], r = 0; r < this.length; r += 1) null !== i[r].parentNode && (a ? e(i[r].parentNode).is(a) && s.push(i[r].parentNode) : s.push(i[r].parentNode));
            return e(t(s));
        },
        parents: function (a) {
            for (var i = this, s = [], r = 0; r < this.length; r += 1) for (var n = i[r].parentNode; n; ) a ? e(n).is(a) && s.push(n) : s.push(n), (n = n.parentNode);
            return e(t(s));
        },
        closest: function (e) {
            var t = this;
            return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
            for (var t = this, a = [], i = 0; i < this.length; i += 1) for (var s = t[i].querySelectorAll(e), n = 0; n < s.length; n += 1) a.push(s[n]);
            return new r(a);
        },
        children: function (a) {
            for (var i = this, s = [], n = 0; n < this.length; n += 1) for (var o = i[n].childNodes, l = 0; l < o.length; l += 1) a ? 1 === o[l].nodeType && e(o[l]).is(a) && s.push(o[l]) : 1 === o[l].nodeType && s.push(o[l]);
            return new r(t(s));
        },
        remove: function () {
            for (var e = this, t = 0; t < this.length; t += 1) e[t].parentNode && e[t].parentNode.removeChild(e[t]);
            return this;
        },
        add: function () {
            for (var t = [], a = arguments.length; a--; ) t[a] = arguments[a];
            var i,
                s,
                r = this;
            for (i = 0; i < t.length; i += 1) {
                var n = e(t[i]);
                for (s = 0; s < n.length; s += 1) (r[r.length] = n[s]), (r.length += 1);
            }
            return r;
        },
        styles: function () {
            return this[0] ? window.getComputedStyle(this[0], null) : {};
        },
    };
    Object.keys(n).forEach(function (t) {
        e.fn[t] = n[t];
    });
    var o,
        l = {
            deleteProps: function (e) {
                var t = e;
                Object.keys(t).forEach(function (e) {
                    try {
                        t[e] = null;
                    } catch (e) {}
                    try {
                        delete t[e];
                    } catch (e) {}
                });
            },
            nextTick: function (e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t);
            },
            now: function () {
                return Date.now();
            },
            getTranslate: function (e, t) {
                void 0 === t && (t = "x");
                var a,
                    i,
                    r,
                    n = s.getComputedStyle(e, null);
                return (
                    s.WebKitCSSMatrix
                        ? ((i = n.transform || n.webkitTransform).split(",").length > 6 &&
                              (i = i
                                  .split(", ")
                                  .map(function (e) {
                                      return e.replace(",", ".");
                                  })
                                  .join(", ")),
                          (r = new s.WebKitCSSMatrix("none" === i ? "" : i)))
                        : (a = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
                    "x" === t && (i = s.WebKitCSSMatrix ? r.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
                    "y" === t && (i = s.WebKitCSSMatrix ? r.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
                    i || 0
                );
            },
            parseUrlQuery: function (e) {
                var t,
                    a,
                    i,
                    r,
                    n = {},
                    o = e || s.location.href;
                if ("string" == typeof o && o.length)
                    for (
                        r = (a = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                            return "" !== e;
                        })).length,
                            t = 0;
                        t < r;
                        t += 1
                    )
                        (i = a[t].replace(/#\S+/g, "").split("=")), (n[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "");
                return n;
            },
            isObject: function (e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
            },
            extend: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                    var s = e[i];
                    if (void 0 !== s && null !== s)
                        for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                            var d = r[n],
                                p = Object.getOwnPropertyDescriptor(s, d);
                            void 0 !== p && p.enumerable && (l.isObject(a[d]) && l.isObject(s[d]) ? l.extend(a[d], s[d]) : !l.isObject(a[d]) && l.isObject(s[d]) ? ((a[d] = {}), l.extend(a[d], s[d])) : (a[d] = s[d]));
                        }
                }
                return a;
            },
        },
        d = (o =
            "undefined" == typeof document
                ? {
                      addEventListener: function () {},
                      removeEventListener: function () {},
                      activeElement: { blur: function () {}, nodeName: "" },
                      querySelector: function () {
                          return {};
                      },
                      querySelectorAll: function () {
                          return [];
                      },
                      createElement: function () {
                          return {
                              style: {},
                              setAttribute: function () {},
                              getElementsByTagName: function () {
                                  return [];
                              },
                          };
                      },
                      location: { hash: "" },
                  }
                : document),
        p = {
            touch: (s.Modernizr && !0 === s.Modernizr.touch) || !!("ontouchstart" in s || (s.DocumentTouch && d instanceof s.DocumentTouch)),
            transforms3d:
                (s.Modernizr && !0 === s.Modernizr.csstransforms3d) ||
                (function () {
                    var e = d.createElement("div").style;
                    return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e;
                })(),
            flexbox: (function () {
                for (
                    var e = d.createElement("div").style,
                        t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),
                        a = 0;
                    a < t.length;
                    a += 1
                )
                    if (t[a] in e) return !0;
                return !1;
            })(),
            observer: "MutationObserver" in s || "WebkitMutationObserver" in s,
            passiveListener: (function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0;
                        },
                    });
                    s.addEventListener("testPassiveListener", null, t);
                } catch (e) {}
                return e;
            })(),
            gestures: "ongesturestart" in s,
        },
        c = function (e) {
            void 0 === e && (e = {});
            var t = this;
            (t.params = e),
                (t.eventsListeners = {}),
                t.params &&
                    t.params.on &&
                    Object.keys(t.params.on).forEach(function (e) {
                        t.on(e, t.params.on[e]);
                    });
        },
        u = { components: {} };
    (c.prototype.on = function (e, t) {
        var a = this;
        return "function" != typeof t
            ? a
            : (e.split(" ").forEach(function (e) {
                  a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e].push(t);
              }),
              a);
    }),
        (c.prototype.once = function (e, t) {
            function a() {
                for (var s = [], r = arguments.length; r--; ) s[r] = arguments[r];
                t.apply(i, s), i.off(e, a);
            }
            var i = this;
            return "function" != typeof t ? i : i.on(e, a);
        }),
        (c.prototype.off = function (e, t) {
            var a = this;
            return (
                e.split(" ").forEach(function (e) {
                    void 0 === t
                        ? (a.eventsListeners[e] = [])
                        : a.eventsListeners[e].forEach(function (i, s) {
                              i === t && a.eventsListeners[e].splice(s, 1);
                          });
                }),
                a
            );
        }),
        (c.prototype.emit = function () {
            for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
            var a = this;
            if (!a.eventsListeners) return a;
            var i, s, r;
            return (
                "string" == typeof e[0] || Array.isArray(e[0]) ? ((i = e[0]), (s = e.slice(1, e.length)), (r = a)) : ((i = e[0].events), (s = e[0].data), (r = e[0].context || a)),
                (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
                    if (a.eventsListeners[e]) {
                        var t = [];
                        a.eventsListeners[e].forEach(function (e) {
                            t.push(e);
                        }),
                            t.forEach(function (e) {
                                e.apply(r, s);
                            });
                    }
                }),
                a
            );
        }),
        (c.prototype.useModulesParams = function (e) {
            var t = this;
            t.modules &&
                Object.keys(t.modules).forEach(function (a) {
                    var i = t.modules[a];
                    i.params && l.extend(e, i.params);
                });
        }),
        (c.prototype.useModules = function (e) {
            void 0 === e && (e = {});
            var t = this;
            t.modules &&
                Object.keys(t.modules).forEach(function (a) {
                    var i = t.modules[a],
                        s = e[a] || {};
                    i.instance &&
                        Object.keys(i.instance).forEach(function (e) {
                            var a = i.instance[e];
                            t[e] = "function" == typeof a ? a.bind(t) : a;
                        }),
                        i.on &&
                            t.on &&
                            Object.keys(i.on).forEach(function (e) {
                                t.on(e, i.on[e]);
                            }),
                        i.create && i.create.bind(t)(s);
                });
        }),
        (u.components.set = function (e) {
            var t = this;
            t.use && t.use(e);
        }),
        (c.installModule = function (e) {
            for (var t = [], a = arguments.length - 1; a-- > 0; ) t[a] = arguments[a + 1];
            var i = this;
            i.prototype.modules || (i.prototype.modules = {});
            var s = e.name || Object.keys(i.prototype.modules).length + "_" + l.now();
            return (
                (i.prototype.modules[s] = e),
                e.proto &&
                    Object.keys(e.proto).forEach(function (t) {
                        i.prototype[t] = e.proto[t];
                    }),
                e.static &&
                    Object.keys(e.static).forEach(function (t) {
                        i[t] = e.static[t];
                    }),
                e.install && e.install.apply(i, t),
                i
            );
        }),
        (c.use = function (e) {
            for (var t = [], a = arguments.length - 1; a-- > 0; ) t[a] = arguments[a + 1];
            var i = this;
            return Array.isArray(e)
                ? (e.forEach(function (e) {
                      return i.installModule(e);
                  }),
                  i)
                : i.installModule.apply(i, [e].concat(t));
        }),
        Object.defineProperties(c, u);
    var h = {
            updateSize: function () {
                var e,
                    t,
                    a = this,
                    i = a.$el;
                (e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth),
                    (t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight),
                    (0 === e && a.isHorizontal()) ||
                        (0 === t && a.isVertical()) ||
                        ((e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10)),
                        (t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10)),
                        l.extend(a, { width: e, height: t, size: a.isHorizontal() ? e : t }));
            },
            updateSlides: function () {
                var e = this,
                    t = e.params,
                    a = e.$wrapperEl,
                    i = e.size,
                    s = e.rtl,
                    r = e.wrongRTL,
                    n = a.children("." + e.params.slideClass),
                    o = e.virtual && t.virtual.enabled ? e.virtual.slides.length : n.length,
                    d = [],
                    c = [],
                    u = [],
                    h = t.slidesOffsetBefore;
                "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
                var v = t.slidesOffsetAfter;
                "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
                var f = o,
                    m = e.snapGrid.length,
                    g = e.snapGrid.length,
                    b = t.spaceBetween,
                    w = -h,
                    y = 0,
                    x = 0;
                if (void 0 !== i) {
                    "string" == typeof b && b.indexOf("%") >= 0 && (b = (parseFloat(b.replace("%", "")) / 100) * i), (e.virtualSize = -b), s ? n.css({ marginLeft: "", marginTop: "" }) : n.css({ marginRight: "", marginBottom: "" });
                    var T;
                    t.slidesPerColumn > 1 &&
                        ((T = Math.floor(o / t.slidesPerColumn) === o / e.params.slidesPerColumn ? o : Math.ceil(o / t.slidesPerColumn) * t.slidesPerColumn),
                        "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
                    for (var E, S = t.slidesPerColumn, C = T / S, M = C - (t.slidesPerColumn * C - o), z = 0; z < o; z += 1) {
                        E = 0;
                        var P = n.eq(z);
                        if (t.slidesPerColumn > 1) {
                            var k = void 0,
                                $ = void 0,
                                I = void 0;
                            "column" === t.slidesPerColumnFill
                                ? ((I = z - ($ = Math.floor(z / S)) * S),
                                  ($ > M || ($ === M && I === S - 1)) && (I += 1) >= S && ((I = 0), ($ += 1)),
                                  (k = $ + (I * T) / S),
                                  P.css({ "-webkit-box-ordinal-group": k, "-moz-box-ordinal-group": k, "-ms-flex-order": k, "-webkit-order": k, order: k }))
                                : ($ = z - (I = Math.floor(z / C)) * C),
                                P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== I && t.spaceBetween && t.spaceBetween + "px")
                                    .attr("data-swiper-column", $)
                                    .attr("data-swiper-row", I);
                        }
                        "none" !== P.css("display") &&
                            ("auto" === t.slidesPerView
                                ? ((E = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0)), t.roundLengths && (E = Math.floor(E)))
                                : ((E = (i - (t.slidesPerView - 1) * b) / t.slidesPerView), t.roundLengths && (E = Math.floor(E)), n[z] && (e.isHorizontal() ? (n[z].style.width = E + "px") : (n[z].style.height = E + "px"))),
                            n[z] && (n[z].swiperSlideSize = E),
                            u.push(E),
                            t.centeredSlides
                                ? ((w = w + E / 2 + y / 2 + b), 0 === y && 0 !== z && (w = w - i / 2 - b), 0 === z && (w = w - i / 2 - b), Math.abs(w) < 0.001 && (w = 0), x % t.slidesPerGroup == 0 && d.push(w), c.push(w))
                                : (x % t.slidesPerGroup == 0 && d.push(w), c.push(w), (w = w + E + b)),
                            (e.virtualSize += E + b),
                            (y = E),
                            (x += 1));
                    }
                    e.virtualSize = Math.max(e.virtualSize, i) + v;
                    var L;
                    if (
                        (s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({ width: e.virtualSize + t.spaceBetween + "px" }),
                        (p.flexbox && !t.setWrapperSize) || (e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" })),
                        t.slidesPerColumn > 1 &&
                            ((e.virtualSize = (E + t.spaceBetween) * T),
                            (e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
                            e.isHorizontal() ? a.css({ width: e.virtualSize + t.spaceBetween + "px" }) : a.css({ height: e.virtualSize + t.spaceBetween + "px" }),
                            t.centeredSlides))
                    ) {
                        L = [];
                        for (var D = 0; D < d.length; D += 1) d[D] < e.virtualSize + d[0] && L.push(d[D]);
                        d = L;
                    }
                    if (!t.centeredSlides) {
                        L = [];
                        for (var O = 0; O < d.length; O += 1) d[O] <= e.virtualSize - i && L.push(d[O]);
                        (d = L), Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - i);
                    }
                    0 === d.length && (d = [0]),
                        0 !== t.spaceBetween && (e.isHorizontal() ? (s ? n.css({ marginLeft: b + "px" }) : n.css({ marginRight: b + "px" })) : n.css({ marginBottom: b + "px" })),
                        l.extend(e, { slides: n, snapGrid: d, slidesGrid: c, slidesSizesGrid: u }),
                        o !== f && e.emit("slidesLengthChange"),
                        d.length !== m && e.emit("snapGridLengthChange"),
                        c.length !== g && e.emit("slidesGridLengthChange"),
                        (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
                }
            },
            updateAutoHeight: function () {
                var e,
                    t = this,
                    a = [],
                    i = 0;
                if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                    for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
                        var s = t.activeIndex + e;
                        if (s > t.slides.length) break;
                        a.push(t.slides.eq(s)[0]);
                    }
                else a.push(t.slides.eq(t.activeIndex)[0]);
                for (e = 0; e < a.length; e += 1)
                    if (void 0 !== a[e]) {
                        var r = a[e].offsetHeight;
                        i = r > i ? r : i;
                    }
                i && t.$wrapperEl.css("height", i + "px");
            },
            updateSlidesOffset: function () {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) t[a].swiperSlideOffset = e.isHorizontal() ? t[a].offsetLeft : t[a].offsetTop;
            },
            updateSlidesProgress: function (e) {
                void 0 === e && (e = this.translate || 0);
                var t = this,
                    a = t.params,
                    i = t.slides,
                    s = t.rtl;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                    var r = -e;
                    s && (r = e), i.removeClass(a.slideVisibleClass);
                    for (var n = 0; n < i.length; n += 1) {
                        var o = i[n],
                            l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                        if (a.watchSlidesVisibility) {
                            var d = -(r - o.swiperSlideOffset),
                                p = d + t.slidesSizesGrid[n];
                            ((d >= 0 && d < t.size) || (p > 0 && p <= t.size) || (d <= 0 && p >= t.size)) && i.eq(n).addClass(a.slideVisibleClass);
                        }
                        o.progress = s ? -l : l;
                    }
                }
            },
            updateProgress: function (e) {
                void 0 === e && (e = this.translate || 0);
                var t = this,
                    a = t.params,
                    i = t.maxTranslate() - t.minTranslate(),
                    s = t.progress,
                    r = t.isBeginning,
                    n = t.isEnd,
                    o = r,
                    d = n;
                0 === i ? ((s = 0), (r = !0), (n = !0)) : ((r = (s = (e - t.minTranslate()) / i) <= 0), (n = s >= 1)),
                    l.extend(t, { progress: s, isBeginning: r, isEnd: n }),
                    (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e),
                    r && !o && t.emit("reachBeginning toEdge"),
                    n && !d && t.emit("reachEnd toEdge"),
                    ((o && !r) || (d && !n)) && t.emit("fromEdge"),
                    t.emit("progress", s);
            },
            updateSlidesClasses: function () {
                var e = this,
                    t = e.slides,
                    a = e.params,
                    i = e.$wrapperEl,
                    s = e.activeIndex,
                    r = e.realIndex,
                    n = e.virtual && a.virtual.enabled;
                t.removeClass(a.slideActiveClass + " " + a.slideNextClass + " " + a.slidePrevClass + " " + a.slideDuplicateActiveClass + " " + a.slideDuplicateNextClass + " " + a.slideDuplicatePrevClass);
                var o;
                (o = n ? e.$wrapperEl.find("." + a.slideClass + '[data-swiper-slide-index="' + s + '"]') : t.eq(s)).addClass(a.slideActiveClass),
                    a.loop &&
                        (o.hasClass(a.slideDuplicateClass)
                            ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass)
                            : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(a.slideDuplicateActiveClass));
                var l = o
                    .nextAll("." + a.slideClass)
                    .eq(0)
                    .addClass(a.slideNextClass);
                a.loop && 0 === l.length && (l = t.eq(0)).addClass(a.slideNextClass);
                var d = o
                    .prevAll("." + a.slideClass)
                    .eq(0)
                    .addClass(a.slidePrevClass);
                a.loop && 0 === d.length && (d = t.eq(-1)).addClass(a.slidePrevClass),
                    a.loop &&
                        (l.hasClass(a.slideDuplicateClass)
                            ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass)
                            : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicateNextClass),
                        d.hasClass(a.slideDuplicateClass)
                            ? i.children("." + a.slideClass + ":not(." + a.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass)
                            : i.children("." + a.slideClass + "." + a.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(a.slideDuplicatePrevClass));
            },
            updateActiveIndex: function (e) {
                var t,
                    a = this,
                    i = a.rtl ? a.translate : -a.translate,
                    s = a.slidesGrid,
                    r = a.snapGrid,
                    n = a.params,
                    o = a.activeIndex,
                    d = a.realIndex,
                    p = a.snapIndex,
                    c = e;
                if (void 0 === c) {
                    for (var u = 0; u < s.length; u += 1) void 0 !== s[u + 1] ? (i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2 ? (c = u) : i >= s[u] && i < s[u + 1] && (c = u + 1)) : i >= s[u] && (c = u);
                    n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
                }
                if (((t = r.indexOf(i) >= 0 ? r.indexOf(i) : Math.floor(c / n.slidesPerGroup)) >= r.length && (t = r.length - 1), c !== o)) {
                    var h = parseInt(a.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    l.extend(a, { snapIndex: t, realIndex: h, previousIndex: o, activeIndex: c }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), d !== h && a.emit("realIndexChange"), a.emit("slideChange");
                } else t !== p && ((a.snapIndex = t), a.emit("snapIndexChange"));
            },
            updateClickedSlide: function (t) {
                var a = this,
                    i = a.params,
                    s = e(t.target).closest("." + i.slideClass)[0],
                    r = !1;
                if (s) for (var n = 0; n < a.slides.length; n += 1) a.slides[n] === s && (r = !0);
                if (!s || !r) return (a.clickedSlide = void 0), void (a.clickedIndex = void 0);
                (a.clickedSlide = s),
                    a.virtual && a.params.virtual.enabled ? (a.clickedIndex = parseInt(e(s).attr("data-swiper-slide-index"), 10)) : (a.clickedIndex = e(s).index()),
                    i.slideToClickedSlide && void 0 !== a.clickedIndex && a.clickedIndex !== a.activeIndex && a.slideToClickedSlide();
            },
        },
        v = {
            getTranslate: function (e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this,
                    a = t.params,
                    i = t.rtl,
                    s = t.translate,
                    r = t.$wrapperEl;
                if (a.virtualTranslate) return i ? -s : s;
                var n = l.getTranslate(r[0], e);
                return i && (n = -n), n || 0;
            },
            setTranslate: function (e, t) {
                var a = this,
                    i = a.rtl,
                    s = a.params,
                    r = a.$wrapperEl,
                    n = a.progress,
                    o = 0,
                    l = 0;
                a.isHorizontal() ? (o = i ? -e : e) : (l = e),
                    s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
                    s.virtualTranslate || (p.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")),
                    (a.translate = a.isHorizontal() ? o : l);
                var d = a.maxTranslate() - a.minTranslate();
                (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t);
            },
            minTranslate: function () {
                return -this.snapGrid[0];
            },
            maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1];
            },
        },
        f = {
            setTransition: function (e, t) {
                var a = this;
                a.$wrapperEl.transition(e), a.emit("setTransition", e, t);
            },
            transitionStart: function (e) {
                void 0 === e && (e = !0);
                var t = this,
                    a = t.activeIndex,
                    i = t.params,
                    s = t.previousIndex;
                i.autoHeight && t.updateAutoHeight(), t.emit("transitionStart"), e && a !== s && (t.emit("slideChangeTransitionStart"), a > s ? t.emit("slideNextTransitionStart") : t.emit("slidePrevTransitionStart"));
            },
            transitionEnd: function (e) {
                void 0 === e && (e = !0);
                var t = this,
                    a = t.activeIndex,
                    i = t.previousIndex;
                (t.animating = !1), t.setTransition(0), t.emit("transitionEnd"), e && a !== i && (t.emit("slideChangeTransitionEnd"), a > i ? t.emit("slideNextTransitionEnd") : t.emit("slidePrevTransitionEnd"));
            },
        },
        m = (function () {
            return {
                isSafari: (function () {
                    var e = s.navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
                })(),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),
                ie: s.navigator.pointerEnabled || s.navigator.msPointerEnabled,
                ieTouch: (s.navigator.msPointerEnabled && s.navigator.msMaxTouchPoints > 1) || (s.navigator.pointerEnabled && s.navigator.maxTouchPoints > 1),
                lteIE9: (function () {
                    var e = d.createElement("div");
                    return (e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e"), 1 === e.getElementsByTagName("i").length;
                })(),
            };
        })(),
        g = {
            slideTo: function (e, t, a, i) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
                var s = this,
                    r = e;
                r < 0 && (r = 0);
                var n = s.params,
                    o = s.snapGrid,
                    l = s.slidesGrid,
                    d = s.previousIndex,
                    p = s.activeIndex,
                    c = s.rtl,
                    u = s.$wrapperEl,
                    h = Math.floor(r / n.slidesPerGroup);
                h >= o.length && (h = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
                var v = -o[h];
                if ((s.updateProgress(v), n.normalizeSlideIndex)) for (var f = 0; f < l.length; f += 1) -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
                return !(
                    (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) ||
                    (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) ||
                    ((c && -v === s.translate) || (!c && v === s.translate)
                        ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), 1)
                        : (0 === t || m.lteIE9
                              ? (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a), s.transitionEnd(a))
                              : (s.setTransition(t),
                                s.setTranslate(v),
                                s.updateActiveIndex(r),
                                s.updateSlidesClasses(),
                                s.emit("beforeTransitionStart", t, i),
                                s.transitionStart(a),
                                s.animating ||
                                    ((s.animating = !0),
                                    u.transitionEnd(function () {
                                        s && !s.destroyed && s.transitionEnd(a);
                                    }))),
                          0))
                );
            },
            slideNext: function (e, t, a) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    r = i.animating;
                return s.loop ? !r && (i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft), i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
            },
            slidePrev: function (e, t, a) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this,
                    s = i.params,
                    r = i.animating;
                return s.loop ? !r && (i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft), i.slideTo(i.activeIndex - 1, e, t, a)) : i.slideTo(i.activeIndex - 1, e, t, a);
            },
            slideReset: function (e, t, a) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var i = this;
                return i.slideTo(i.activeIndex, e, t, a);
            },
            slideToClickedSlide: function () {
                var t,
                    a = this,
                    i = a.params,
                    s = a.$wrapperEl,
                    r = "auto" === i.slidesPerView ? a.slidesPerViewDynamic() : i.slidesPerView,
                    n = a.clickedIndex;
                if (i.loop) {
                    if (a.animating) return;
                    (t = parseInt(e(a.clickedSlide).attr("data-swiper-slide-index"), 10)),
                        i.centeredSlides
                            ? n < a.loopedSlides - r / 2 || n > a.slides.length - a.loopedSlides + r / 2
                                ? (a.loopFix(),
                                  (n = s
                                      .children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")")
                                      .eq(0)
                                      .index()),
                                  l.nextTick(function () {
                                      a.slideTo(n);
                                  }))
                                : a.slideTo(n)
                            : n > a.slides.length - r
                            ? (a.loopFix(),
                              (n = s
                                  .children("." + i.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + i.slideDuplicateClass + ")")
                                  .eq(0)
                                  .index()),
                              l.nextTick(function () {
                                  a.slideTo(n);
                              }))
                            : a.slideTo(n);
                } else a.slideTo(n);
            },
        },
        b = {
            loopCreate: function () {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl;
                i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
                var s = i.children("." + a.slideClass);
                if (a.loopFillGroupWithBlank) {
                    var r = a.slidesPerGroup - (s.length % a.slidesPerGroup);
                    if (r !== a.slidesPerGroup) {
                        for (var n = 0; n < r; n += 1) {
                            var o = e(d.createElement("div")).addClass(a.slideClass + " " + a.slideBlankClass);
                            i.append(o);
                        }
                        s = i.children("." + a.slideClass);
                    }
                }
                "auto" !== a.slidesPerView || a.loopedSlides || (a.loopedSlides = s.length),
                    (t.loopedSlides = parseInt(a.loopedSlides || a.slidesPerView, 10)),
                    (t.loopedSlides += a.loopAdditionalSlides),
                    t.loopedSlides > s.length && (t.loopedSlides = s.length);
                var l = [],
                    p = [];
                s.each(function (a, i) {
                    var r = e(i);
                    a < t.loopedSlides && p.push(i), a < s.length && a >= s.length - t.loopedSlides && l.push(i), r.attr("data-swiper-slide-index", a);
                });
                for (var c = 0; c < p.length; c += 1) i.append(e(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
                for (var u = l.length - 1; u >= 0; u -= 1) i.prepend(e(l[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
            },
            loopFix: function () {
                var e,
                    t = this,
                    a = t.params,
                    i = t.activeIndex,
                    s = t.slides,
                    r = t.loopedSlides,
                    n = t.allowSlidePrev,
                    o = t.allowSlideNext;
                (t.allowSlidePrev = !0),
                    (t.allowSlideNext = !0),
                    i < r
                        ? ((e = s.length - 3 * r + i), (e += r), t.slideTo(e, 0, !1, !0))
                        : (("auto" === a.slidesPerView && i >= 2 * r) || i > s.length - 2 * a.slidesPerView) && ((e = -s.length + i + r), (e += r), t.slideTo(e, 0, !1, !0)),
                    (t.allowSlidePrev = n),
                    (t.allowSlideNext = o);
            },
            loopDestroy: function () {
                var e = this,
                    t = e.$wrapperEl,
                    a = e.params,
                    i = e.slides;
                t.children("." + a.slideClass + "." + a.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index");
            },
        },
        w = {
            setGrabCursor: function (e) {
                var t = this;
                if (!p.touch && t.params.simulateTouch) {
                    var a = t.el;
                    (a.style.cursor = "move"), (a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (a.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (a.style.cursor = e ? "grabbing" : "grab");
                }
            },
            unsetGrabCursor: function () {
                var e = this;
                p.touch || (e.el.style.cursor = "");
            },
        },
        y = {
            appendSlide: function (e) {
                var t = this,
                    a = t.$wrapperEl,
                    i = t.params;
                if ((i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)) for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
                else a.append(e);
                i.loop && t.loopCreate(), (i.observer && p.observer) || t.update();
            },
            prependSlide: function (e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && t.loopDestroy();
                var r = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                    r = s + e.length;
                } else i.prepend(e);
                a.loop && t.loopCreate(), (a.observer && p.observer) || t.update(), t.slideTo(r, 0, !1);
            },
            removeSlide: function (e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && (t.loopDestroy(), (t.slides = i.children("." + a.slideClass)));
                var r,
                    n = s;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) (r = e[o]), t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                    n = Math.max(n, 0);
                } else (r = e), t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), (n = Math.max(n, 0));
                a.loop && t.loopCreate(), (a.observer && p.observer) || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
            },
            removeAllSlides: function () {
                for (var e = this, t = [], a = 0; a < e.slides.length; a += 1) t.push(a);
                e.removeSlide(t);
            },
        },
        x = (function () {
            var e = s.navigator.userAgent,
                t = { ios: !1, android: !1, androidChrome: !1, desktop: !1, windows: !1, iphone: !1, ipod: !1, ipad: !1, cordova: s.cordova || s.phonegap, phonegap: s.cordova || s.phonegap },
                a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                r = e.match(/(iPad).*OS\s([\d_]+)/),
                n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                o = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (
                (a && ((t.os = "windows"), (t.osVersion = a[2]), (t.windows = !0)),
                i && !a && ((t.os = "android"), (t.osVersion = i[2]), (t.android = !0), (t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0)),
                (r || o || n) && ((t.os = "ios"), (t.ios = !0)),
                o && !n && ((t.osVersion = o[2].replace(/_/g, ".")), (t.iphone = !0)),
                r && ((t.osVersion = r[2].replace(/_/g, ".")), (t.ipad = !0)),
                n && ((t.osVersion = n[3] ? n[3].replace(/_/g, ".") : null), (t.iphone = !0)),
                t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
                (t.desktop = !(t.os || t.android || t.webView)),
                (t.webView = (o || r || n) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
                t.os && "ios" === t.os)
            ) {
                var l = t.osVersion.split("."),
                    p = d.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (n || o) && (1 * l[0] == 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) && p && p.getAttribute("content").indexOf("minimal-ui") >= 0;
            }
            return (t.pixelRatio = s.devicePixelRatio || 1), t;
        })(),
        T = function (t) {
            var a = this,
                i = a.touchEventsData,
                s = a.params,
                r = a.touches,
                n = t;
            if ((n.originalEvent && (n = n.originalEvent), (i.isTouchEvent = "touchstart" === n.type), (i.isTouchEvent || !("which" in n) || 3 !== n.which) && (!i.isTouched || !i.isMoved)))
                if (s.noSwiping && e(n.target).closest("." + s.noSwipingClass)[0]) a.allowClick = !0;
                else if (!s.swipeHandler || e(n).closest(s.swipeHandler)[0]) {
                    (r.currentX = "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX), (r.currentY = "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY);
                    var o = r.currentX,
                        p = r.currentY;
                    if (!(x.ios && !x.cordova && s.iOSEdgeSwipeDetection && o <= s.iOSEdgeSwipeThreshold && o >= window.screen.width - s.iOSEdgeSwipeThreshold)) {
                        if (
                            (l.extend(i, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                            (r.startX = o),
                            (r.startY = p),
                            (i.touchStartTime = l.now()),
                            (a.allowClick = !0),
                            a.updateSize(),
                            (a.swipeDirection = void 0),
                            s.threshold > 0 && (i.allowThresholdMove = !1),
                            "touchstart" !== n.type)
                        ) {
                            var c = !0;
                            e(n.target).is(i.formElements) && (c = !1), d.activeElement && e(d.activeElement).is(i.formElements) && d.activeElement.blur(), c && a.allowTouchMove && n.preventDefault();
                        }
                        a.emit("touchStart", n);
                    }
                }
        },
        E = function (t) {
            var a = this,
                i = a.touchEventsData,
                s = a.params,
                r = a.touches,
                n = a.rtl,
                o = t;
            if ((o.originalEvent && (o = o.originalEvent), !i.isTouchEvent || "mousemove" !== o.type)) {
                var p = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
                    c = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
                if (o.preventedByNestedSwiper) return (r.startX = p), void (r.startY = c);
                if (!a.allowTouchMove) return (a.allowClick = !1), void (i.isTouched && (l.extend(r, { startX: p, startY: c, currentX: p, currentY: c }), (i.touchStartTime = l.now())));
                if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
                    if (a.isVertical()) {
                        if ((c < r.startY && a.translate <= a.maxTranslate()) || (c > r.startY && a.translate >= a.minTranslate())) return (i.isTouched = !1), void (i.isMoved = !1);
                    } else if ((p < r.startX && a.translate <= a.maxTranslate()) || (p > r.startX && a.translate >= a.minTranslate())) return;
                if (i.isTouchEvent && d.activeElement && o.target === d.activeElement && e(o.target).is(i.formElements)) return (i.isMoved = !0), void (a.allowClick = !1);
                if ((i.allowTouchCallbacks && a.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1))) {
                    (r.currentX = p), (r.currentY = c);
                    var u = r.currentX - r.startX,
                        h = r.currentY - r.startY;
                    if (void 0 === i.isScrolling) {
                        var v;
                        (a.isHorizontal() && r.currentY === r.startY) || (a.isVertical() && r.currentX === r.startX)
                            ? (i.isScrolling = !1)
                            : u * u + h * h >= 25 && ((v = (180 * Math.atan2(Math.abs(h), Math.abs(u))) / Math.PI), (i.isScrolling = a.isHorizontal() ? v > s.touchAngle : 90 - v > s.touchAngle));
                    }
                    if ((i.isScrolling && a.emit("touchMoveOpposite", o), "undefined" == typeof startMoving && ((r.currentX === r.startX && r.currentY === r.startY) || (i.startMoving = !0)), i.isTouched))
                        if (i.isScrolling) i.isTouched = !1;
                        else if (i.startMoving) {
                            (a.allowClick = !1),
                                o.preventDefault(),
                                s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
                                i.isMoved ||
                                    (s.loop && a.loopFix(),
                                    (i.startTranslate = a.getTranslate()),
                                    a.setTransition(0),
                                    a.animating && a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                    (i.allowMomentumBounce = !1),
                                    !s.grabCursor || (!0 !== a.allowSlideNext && !0 !== a.allowSlidePrev) || a.setGrabCursor(!0),
                                    a.emit("sliderFirstMove", o)),
                                a.emit("sliderMove", o),
                                (i.isMoved = !0);
                            var f = a.isHorizontal() ? u : h;
                            (r.diff = f), (f *= s.touchRatio), n && (f = -f), (a.swipeDirection = f > 0 ? "prev" : "next"), (i.currentTranslate = f + i.startTranslate);
                            var m = !0,
                                g = s.resistanceRatio;
                            if (
                                (s.touchReleaseOnEdges && (g = 0),
                                f > 0 && i.currentTranslate > a.minTranslate()
                                    ? ((m = !1), s.resistance && (i.currentTranslate = a.minTranslate() - 1 + Math.pow(-a.minTranslate() + i.startTranslate + f, g)))
                                    : f < 0 && i.currentTranslate < a.maxTranslate() && ((m = !1), s.resistance && (i.currentTranslate = a.maxTranslate() + 1 - Math.pow(a.maxTranslate() - i.startTranslate - f, g))),
                                m && (o.preventedByNestedSwiper = !0),
                                !a.allowSlideNext && "next" === a.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                !a.allowSlidePrev && "prev" === a.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                s.threshold > 0)
                            ) {
                                if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                if (!i.allowThresholdMove)
                                    return (
                                        (i.allowThresholdMove = !0), (r.startX = r.currentX), (r.startY = r.currentY), (i.currentTranslate = i.startTranslate), void (r.diff = a.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                    );
                            }
                            s.followFinger &&
                                ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (a.updateActiveIndex(), a.updateSlidesClasses()),
                                s.freeMode &&
                                    (0 === i.velocities.length && i.velocities.push({ position: r[a.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }),
                                    i.velocities.push({ position: r[a.isHorizontal() ? "currentX" : "currentY"], time: l.now() })),
                                a.updateProgress(i.currentTranslate),
                                a.setTranslate(i.currentTranslate));
                        }
                }
            }
        },
        S = function (e) {
            var t = this,
                a = t.touchEventsData,
                i = t.params,
                s = t.touches,
                r = t.rtl,
                n = t.$wrapperEl,
                o = t.slidesGrid,
                d = t.snapGrid,
                p = e;
            if ((p.originalEvent && (p = p.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", p), (a.allowTouchCallbacks = !1), a.isTouched)) {
                i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var c = l.now(),
                    u = c - a.touchStartTime;
                if (
                    (t.allowClick &&
                        (t.updateClickedSlide(p),
                        t.emit("tap", p),
                        u < 300 &&
                            c - a.lastClickTime > 300 &&
                            (a.clickTimeout && clearTimeout(a.clickTimeout),
                            (a.clickTimeout = l.nextTick(function () {
                                t && !t.destroyed && t.emit("click", p);
                            }, 300))),
                        u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", p))),
                    (a.lastClickTime = l.now()),
                    l.nextTick(function () {
                        t.destroyed || (t.allowClick = !0);
                    }),
                    !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate)
                )
                    return (a.isTouched = !1), void (a.isMoved = !1);
                (a.isTouched = !1), (a.isMoved = !1);
                var h;
                if (((h = i.followFinger ? (r ? t.translate : -t.translate) : -a.currentTranslate), i.freeMode)) {
                    if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (h > -t.maxTranslate()) return void (t.slides.length < d.length ? t.slideTo(d.length - 1) : t.slideTo(t.slides.length - 1));
                    if (i.freeModeMomentum) {
                        if (a.velocities.length > 1) {
                            var v = a.velocities.pop(),
                                f = a.velocities.pop(),
                                m = v.position - f.position,
                                g = v.time - f.time;
                            (t.velocity = m / g), (t.velocity /= 2), Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (g > 150 || l.now() - v.time > 300) && (t.velocity = 0);
                        } else t.velocity = 0;
                        (t.velocity *= i.freeModeMomentumVelocityRatio), (a.velocities.length = 0);
                        var b = 1e3 * i.freeModeMomentumRatio,
                            w = t.velocity * b,
                            y = t.translate + w;
                        r && (y = -y);
                        var x,
                            T = !1,
                            E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                        if (y < t.maxTranslate()) i.freeModeMomentumBounce ? (y + t.maxTranslate() < -E && (y = t.maxTranslate() - E), (x = t.maxTranslate()), (T = !0), (a.allowMomentumBounce = !0)) : (y = t.maxTranslate());
                        else if (y > t.minTranslate()) i.freeModeMomentumBounce ? (y - t.minTranslate() > E && (y = t.minTranslate() + E), (x = t.minTranslate()), (T = !0), (a.allowMomentumBounce = !0)) : (y = t.minTranslate());
                        else if (i.freeModeSticky) {
                            for (var S, C = 0; C < d.length; C += 1)
                                if (d[C] > -y) {
                                    S = C;
                                    break;
                                }
                            y = -(y = Math.abs(d[S] - y) < Math.abs(d[S - 1] - y) || "next" === t.swipeDirection ? d[S] : d[S - 1]);
                        }
                        if (0 !== t.velocity) b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
                        else if (i.freeModeSticky) return void t.slideReset();
                        i.freeModeMomentumBounce && T
                            ? (t.updateProgress(x),
                              t.setTransition(b),
                              t.setTranslate(y),
                              t.transitionStart(),
                              (t.animating = !0),
                              n.transitionEnd(function () {
                                  t &&
                                      !t.destroyed &&
                                      a.allowMomentumBounce &&
                                      (t.emit("momentumBounce"),
                                      t.setTransition(i.speed),
                                      t.setTranslate(x),
                                      n.transitionEnd(function () {
                                          t && !t.destroyed && t.transitionEnd();
                                      }));
                              }))
                            : t.velocity
                            ? (t.updateProgress(y),
                              t.setTransition(b),
                              t.setTranslate(y),
                              t.transitionStart(),
                              t.animating ||
                                  ((t.animating = !0),
                                  n.transitionEnd(function () {
                                      t && !t.destroyed && t.transitionEnd();
                                  })))
                            : t.updateProgress(y),
                            t.updateActiveIndex(),
                            t.updateSlidesClasses();
                    }
                    (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                } else {
                    for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup)
                        void 0 !== o[P + i.slidesPerGroup] ? h >= o[P] && h < o[P + i.slidesPerGroup] && ((M = P), (z = o[P + i.slidesPerGroup] - o[P])) : h >= o[P] && ((M = P), (z = o[o.length - 1] - o[o.length - 2]));
                    var k = (h - o[M]) / z;
                    if (u > i.longSwipesMs) {
                        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (k >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (k > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M));
                    } else {
                        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M);
                    }
                }
            }
        },
        C = function () {
            var e = this,
                t = e.params,
                a = e.el;
            if (!a || 0 !== a.offsetWidth) {
                t.breakpoints && e.setBreakpoint();
                var i = e.allowSlideNext,
                    s = e.allowSlidePrev;
                if (((e.allowSlideNext = !0), (e.allowSlidePrev = !0), e.updateSize(), e.updateSlides(), t.freeMode)) {
                    var r = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
                } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
                (e.allowSlidePrev = s), (e.allowSlideNext = i);
            }
        },
        M = function (e) {
            var t = this;
            t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
        },
        z = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: 0.02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: 0.5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: 0.85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
        },
        P = {
            update: h,
            translate: v,
            transition: f,
            slide: g,
            loop: b,
            grabCursor: w,
            manipulation: y,
            events: {
                attachEvents: function () {
                    var e = this,
                        t = e.params,
                        a = e.touchEvents,
                        i = e.el,
                        s = e.wrapperEl;
                    (e.onTouchStart = T.bind(e)), (e.onTouchMove = E.bind(e)), (e.onTouchEnd = S.bind(e)), (e.onClick = M.bind(e));
                    var r = "container" === t.touchEventsTarget ? i : s,
                        n = !!t.nested;
                    if (m.ie) r.addEventListener(a.start, e.onTouchStart, !1), (p.touch ? r : d).addEventListener(a.move, e.onTouchMove, n), (p.touch ? r : d).addEventListener(a.end, e.onTouchEnd, !1);
                    else {
                        if (p.touch) {
                            var o = !("touchstart" !== a.start || !p.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                            r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, p.passiveListener ? { passive: !1, capture: n } : n), r.addEventListener(a.end, e.onTouchEnd, o);
                        }
                        ((t.simulateTouch && !x.ios && !x.android) || (t.simulateTouch && !p.touch && x.ios)) &&
                            (r.addEventListener("mousedown", e.onTouchStart, !1), d.addEventListener("mousemove", e.onTouchMove, n), d.addEventListener("mouseup", e.onTouchEnd, !1));
                    }
                    (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on("resize observerUpdate", C);
                },
                detachEvents: function () {
                    var e = this,
                        t = e.params,
                        a = e.touchEvents,
                        i = e.el,
                        s = e.wrapperEl,
                        r = "container" === t.touchEventsTarget ? i : s,
                        n = !!t.nested;
                    if (m.ie) r.removeEventListener(a.start, e.onTouchStart, !1), (p.touch ? r : d).removeEventListener(a.move, e.onTouchMove, n), (p.touch ? r : d).removeEventListener(a.end, e.onTouchEnd, !1);
                    else {
                        if (p.touch) {
                            var o = !("onTouchStart" !== a.start || !p.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 };
                            r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o);
                        }
                        ((t.simulateTouch && !x.ios && !x.android) || (t.simulateTouch && !p.touch && x.ios)) &&
                            (r.removeEventListener("mousedown", e.onTouchStart, !1), d.removeEventListener("mousemove", e.onTouchMove, n), d.removeEventListener("mouseup", e.onTouchEnd, !1));
                    }
                    (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off("resize observerUpdate", C);
                },
            },
            breakpoints: {
                setBreakpoint: function () {
                    var e = this,
                        t = e.activeIndex,
                        a = e.loopedSlides;
                    void 0 === a && (a = 0);
                    var i = e.params,
                        s = i.breakpoints;
                    if (s && (!s || 0 !== Object.keys(s).length)) {
                        var r = e.getBreakpoint(s);
                        if (r && e.currentBreakpoint !== r) {
                            var n = r in s ? s[r] : e.originalParams,
                                o = i.loop && n.slidesPerView !== i.slidesPerView;
                            l.extend(e.params, n),
                                l.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
                                (e.currentBreakpoint = r),
                                o && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)),
                                e.emit("breakpoint", n);
                        }
                    }
                },
                getBreakpoint: function (e) {
                    if (e) {
                        var t = !1,
                            a = [];
                        Object.keys(e).forEach(function (e) {
                            a.push(e);
                        }),
                            a.sort(function (e, t) {
                                return parseInt(e, 10) - parseInt(t, 10);
                            });
                        for (var i = 0; i < a.length; i += 1) {
                            var r = a[i];
                            r >= s.innerWidth && !t && (t = r);
                        }
                        return t || "max";
                    }
                },
            },
            classes: {
                addClasses: function () {
                    var e = this,
                        t = e.classNames,
                        a = e.params,
                        i = e.rtl,
                        r = e.$el,
                        n = [];
                    n.push(a.direction),
                        a.freeMode && n.push("free-mode"),
                        p.flexbox || n.push("no-flexbox"),
                        a.autoHeight && n.push("autoheight"),
                        i && n.push("rtl"),
                        a.slidesPerColumn > 1 && n.push("multirow"),
                        x.android && n.push("android"),
                        x.ios && n.push("ios"),
                        (s.navigator.pointerEnabled || s.navigator.msPointerEnabled) && n.push("wp8-" + a.direction),
                        n.forEach(function (e) {
                            t.push(a.containerModifierClass + e);
                        }),
                        r.addClass(t.join(" "));
                },
                removeClasses: function () {
                    var e = this,
                        t = e.$el,
                        a = e.classNames;
                    t.removeClass(a.join(" "));
                },
            },
            images: {
                loadImage: function (e, t, a, i, r, n) {
                    function o() {
                        n && n();
                    }
                    var l;
                    e.complete && r ? o() : t ? (((l = new s.Image()).onload = o), (l.onerror = o), i && (l.sizes = i), a && (l.srcset = a), t && (l.src = t)) : o();
                },
                preloadImages: function () {
                    var e = this;
                    e.imagesToLoad = e.$el.find("img");
                    for (var t = 0; t < e.imagesToLoad.length; t += 1) {
                        var a = e.imagesToLoad[t];
                        e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, function () {
                            void 0 !== e &&
                                null !== e &&
                                e &&
                                !e.destroyed &&
                                (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                        });
                    }
                },
            },
        },
        k = {},
        $ = (function (t) {
            function a() {
                for (var i = [], r = arguments.length; r--; ) i[r] = arguments[r];
                var n, o;
                if (1 === i.length && i[0].constructor && i[0].constructor === Object) o = i[0];
                else {
                    var d;
                    (n = (d = i)[0]), (o = d[1]);
                }
                o || (o = {}),
                    (o = l.extend({}, o)),
                    n && !o.el && (o.el = n),
                    t.call(this, o),
                    Object.keys(P).forEach(function (e) {
                        Object.keys(P[e]).forEach(function (t) {
                            a.prototype[t] || (a.prototype[t] = P[e][t]);
                        });
                    });
                var c = this;
                void 0 === c.modules && (c.modules = {}),
                    Object.keys(c.modules).forEach(function (e) {
                        var t = c.modules[e];
                        if (t.params) {
                            var a = Object.keys(t.params)[0],
                                i = t.params[a];
                            if ("object" != typeof i) return;
                            if (!(a in o && "enabled" in i)) return;
                            !0 === o[a] && (o[a] = { enabled: !0 }), "object" != typeof o[a] || "enabled" in o[a] || (o[a].enabled = !0), o[a] || (o[a] = { enabled: !1 });
                        }
                    });
                var u = l.extend({}, z);
                c.useModulesParams(u), (c.params = l.extend({}, u, k, o)), (c.originalParams = l.extend({}, c.params)), (c.passedParams = l.extend({}, o));
                var h = e(c.params.el);
                if ((n = h[0])) {
                    if (h.length > 1) {
                        var v = [];
                        return (
                            h.each(function (e, t) {
                                var i = l.extend({}, o, { el: t });
                                v.push(new a(i));
                            }),
                            v
                        );
                    }
                    (n.swiper = c), h.data("swiper", c);
                    var f = h.children("." + c.params.wrapperClass);
                    return (
                        l.extend(c, {
                            $el: h,
                            el: n,
                            $wrapperEl: f,
                            wrapperEl: f[0],
                            classNames: [],
                            slides: e(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function () {
                                return "horizontal" === c.params.direction;
                            },
                            isVertical: function () {
                                return "vertical" === c.params.direction;
                            },
                            rtl: "horizontal" === c.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === h.css("direction")),
                            wrongRTL: "-webkit-box" === f.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: c.params.allowSlideNext,
                            allowSlidePrev: c.params.allowSlidePrev,
                            touchEvents: (function () {
                                var e = ["touchstart", "touchmove", "touchend"],
                                    t = ["mousedown", "mousemove", "mouseup"];
                                return (
                                    s.navigator.pointerEnabled ? (t = ["pointerdown", "pointermove", "pointerup"]) : s.navigator.msPointerEnabled && (t = ["MSPointerDown", "MsPointerMove", "MsPointerUp"]),
                                    { start: p.touch || !c.params.simulateTouch ? e[0] : t[0], move: p.touch || !c.params.simulateTouch ? e[1] : t[1], end: p.touch || !c.params.simulateTouch ? e[2] : t[2] }
                                );
                            })(),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video",
                                lastClickTime: l.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0,
                            },
                            allowClick: !0,
                            allowTouchMove: c.params.allowTouchMove,
                            touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                            imagesToLoad: [],
                            imagesLoaded: 0,
                        }),
                        c.useModules(),
                        c.params.init && c.init(),
                        c
                    );
                }
            }
            t && (a.__proto__ = t), (a.prototype = Object.create(t && t.prototype)), (a.prototype.constructor = a);
            var i = { extendedDefaults: {}, defaults: {}, Class: {}, $: {} };
            return (
                (a.prototype.slidesPerViewDynamic = function () {
                    var e = this,
                        t = e.params,
                        a = e.slides,
                        i = e.slidesGrid,
                        s = e.size,
                        r = e.activeIndex,
                        n = 1;
                    if (t.centeredSlides) {
                        for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && ((n += 1), (l += a[d].swiperSlideSize) > s && (o = !0));
                        for (var p = r - 1; p >= 0; p -= 1) a[p] && !o && ((n += 1), (l += a[p].swiperSlideSize) > s && (o = !0));
                    } else for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
                    return n;
                }),
                (a.prototype.update = function () {
                    function e() {
                        (a = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate())), t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
                    }
                    var t = this;
                    if (t && !t.destroyed) {
                        t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses();
                        var a;
                        t.params.freeMode
                            ? (e(), t.params.autoHeight && t.updateAutoHeight())
                            : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(),
                            t.emit("update");
                    }
                }),
                (a.prototype.init = function () {
                    var e = this;
                    e.initialized ||
                        (e.emit("beforeInit"),
                        e.params.breakpoints && e.setBreakpoint(),
                        e.addClasses(),
                        e.params.loop && e.loopCreate(),
                        e.updateSize(),
                        e.updateSlides(),
                        e.params.grabCursor && e.setGrabCursor(),
                        e.params.preloadImages && e.preloadImages(),
                        e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                        e.attachEvents(),
                        (e.initialized = !0),
                        e.emit("init"));
                }),
                (a.prototype.destroy = function (e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    var a = this,
                        i = a.params,
                        s = a.$el,
                        r = a.$wrapperEl,
                        n = a.slides;
                    a.emit("beforeDestroy"),
                        (a.initialized = !1),
                        a.detachEvents(),
                        i.loop && a.loopDestroy(),
                        t &&
                            (a.removeClasses(),
                            s.removeAttr("style"),
                            r.removeAttr("style"),
                            n &&
                                n.length &&
                                n
                                    .removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" "))
                                    .removeAttr("style")
                                    .removeAttr("data-swiper-slide-index")
                                    .removeAttr("data-swiper-column")
                                    .removeAttr("data-swiper-row")),
                        a.emit("destroy"),
                        Object.keys(a.eventsListeners).forEach(function (e) {
                            a.off(e);
                        }),
                        !1 !== e && ((a.$el[0].swiper = null), a.$el.data("swiper", null), l.deleteProps(a)),
                        (a.destroyed = !0);
                }),
                (a.extendDefaults = function (e) {
                    l.extend(k, e);
                }),
                (i.extendedDefaults.get = function () {
                    return k;
                }),
                (i.defaults.get = function () {
                    return z;
                }),
                (i.Class.get = function () {
                    return t;
                }),
                (i.$.get = function () {
                    return e;
                }),
                Object.defineProperties(a, i),
                a
            );
        })(c),
        I = { name: "device", proto: { device: x }, static: { device: x } },
        L = { name: "support", proto: { support: p }, static: { support: p } },
        D = { name: "browser", proto: { browser: m }, static: { browser: m } },
        O = {
            name: "resize",
            create: function () {
                var e = this;
                l.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                        },
                        orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange");
                        },
                    },
                });
            },
            on: {
                init: function () {
                    var e = this;
                    s.addEventListener("resize", e.resize.resizeHandler), s.addEventListener("orientationchange", e.resize.orientationChangeHandler);
                },
                destroy: function () {
                    var e = this;
                    s.removeEventListener("resize", e.resize.resizeHandler), s.removeEventListener("orientationchange", e.resize.orientationChangeHandler);
                },
            },
        },
        A = {
            func: s.MutationObserver || s.WebkitMutationObserver,
            attach: function (e, t) {
                void 0 === t && (t = {});
                var a = this,
                    i = new (0, A.func)(function (e) {
                        e.forEach(function (e) {
                            a.emit("observerUpdate", e);
                        });
                    });
                i.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), a.observer.observers.push(i);
            },
            init: function () {
                var e = this;
                if (p.observer && e.params.observer) {
                    if (e.params.observeParents) for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], { childList: !1 }), e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
                }
            },
            destroy: function () {
                var e = this;
                e.observer.observers.forEach(function (e) {
                    e.disconnect();
                }),
                    (e.observer.observers = []);
            },
        },
        H = {
            name: "observer",
            params: { observer: !1, observeParents: !1 },
            create: function () {
                var e = this;
                l.extend(e, { observer: { init: A.init.bind(e), attach: A.attach.bind(e), destroy: A.destroy.bind(e), observers: [] } });
            },
            on: {
                init: function () {
                    this.observer.init();
                },
                destroy: function () {
                    this.observer.destroy();
                },
            },
        },
        N = {
            update: function (e) {
                function t() {
                    a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.lazy && a.params.lazy.enabled && a.lazy.load();
                }
                var a = this,
                    i = a.params,
                    s = i.slidesPerView,
                    r = i.slidesPerGroup,
                    n = i.centeredSlides,
                    o = a.virtual,
                    d = o.from,
                    p = o.to,
                    c = o.slides,
                    u = o.slidesGrid,
                    h = o.renderSlide,
                    v = o.offset;
                a.updateActiveIndex();
                var f,
                    m = a.activeIndex || 0;
                f = a.rtl && a.isHorizontal() ? "right" : a.isHorizontal() ? "left" : "top";
                var g, b;
                n ? ((g = Math.floor(s / 2) + r), (b = Math.floor(s / 2) + r)) : ((g = s + (r - 1)), (b = r));
                var w = Math.max((m || 0) - b, 0),
                    y = Math.min((m || 0) + g, c.length - 1),
                    x = (a.slidesGrid[w] || 0) - (a.slidesGrid[0] || 0);
                if ((l.extend(a.virtual, { from: w, to: y, offset: x, slidesGrid: a.slidesGrid }), d === w && p === y && !e)) return a.slidesGrid !== u && x !== v && a.slides.css(f, x + "px"), void a.updateProgress();
                if (a.params.virtual.renderExternal)
                    return (
                        a.params.virtual.renderExternal.call(a, {
                            offset: x,
                            from: w,
                            to: y,
                            slides: (function () {
                                for (var e = [], t = w; t <= y; t += 1) e.push(c[t]);
                                return e;
                            })(),
                        }),
                        void t()
                    );
                var T = [],
                    E = [];
                if (e) a.$wrapperEl.find("." + a.params.slideClass).remove();
                else for (var S = d; S <= p; S += 1) (S < w || S > y) && a.$wrapperEl.find("." + a.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
                for (var C = 0; C < c.length; C += 1) C >= w && C <= y && (void 0 === p || e ? E.push(C) : (C > p && E.push(C), C < d && T.push(C)));
                E.forEach(function (e) {
                    a.$wrapperEl.append(h(c[e], e));
                }),
                    T.sort(function (e, t) {
                        return e < t;
                    }).forEach(function (e) {
                        a.$wrapperEl.prepend(h(c[e], e));
                    }),
                    a.$wrapperEl.children(".swiper-slide").css(f, x + "px"),
                    t();
            },
            renderSlide: function (t, a) {
                var i = this,
                    s = i.params.virtual;
                if (s.cache && i.virtual.cache[a]) return i.virtual.cache[a];
                var r = e(s.renderSlide ? s.renderSlide.call(i, t, a) : '<div class="' + i.params.slideClass + '" data-swiper-slide-index="' + a + '">' + t + "</div>");
                return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", a), s.cache && (i.virtual.cache[a] = r), r;
            },
            appendSlide: function (e) {
                var t = this;
                t.virtual.slides.push(e), t.virtual.update(!0);
            },
            prependSlide: function (e) {
                var t = this;
                if ((t.virtual.slides.unshift(e), t.params.virtual.cache)) {
                    var a = t.virtual.cache,
                        i = {};
                    Object.keys(a).forEach(function (e) {
                        i[e + 1] = a[e];
                    }),
                        (t.virtual.cache = i);
                }
                t.virtual.update(!0), t.slideNext(0);
            },
        },
        X = {
            name: "virtual",
            params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null } },
            create: function () {
                var e = this;
                l.extend(e, { virtual: { update: N.update.bind(e), appendSlide: N.appendSlide.bind(e), prependSlide: N.prependSlide.bind(e), renderSlide: N.renderSlide.bind(e), slides: e.params.virtual.slides, cache: {} } });
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = { watchSlidesProgress: !0 };
                        l.extend(e.params, t), l.extend(e.originalParams, t), e.virtual.update();
                    }
                },
                setTranslate: function () {
                    var e = this;
                    e.params.virtual.enabled && e.virtual.update();
                },
            },
        },
        Y = {
            handle: function (e) {
                var t = this,
                    a = e;
                a.originalEvent && (a = a.originalEvent);
                var i = a.keyCode || a.charCode;
                if (!t.allowSlideNext && ((t.isHorizontal() && 39 === i) || (t.isVertical() && 40 === i))) return !1;
                if (!t.allowSlidePrev && ((t.isHorizontal() && 37 === i) || (t.isVertical() && 38 === i))) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || (d.activeElement && d.activeElement.nodeName && ("input" === d.activeElement.nodeName.toLowerCase() || "textarea" === d.activeElement.nodeName.toLowerCase())))) {
                    if (37 === i || 39 === i || 38 === i || 40 === i) {
                        var r = !1;
                        if (t.$el.parents("." + t.params.slideClass).length > 0 && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var n = { left: s.pageXOffset, top: s.pageYOffset },
                            o = s.innerWidth,
                            l = s.innerHeight,
                            p = t.$el.offset();
                        t.rtl && (p.left -= t.$el[0].scrollLeft);
                        for (
                            var c = [
                                    [p.left, p.top],
                                    [p.left + t.width, p.top],
                                    [p.left, p.top + t.height],
                                    [p.left + t.width, p.top + t.height],
                                ],
                                u = 0;
                            u < c.length;
                            u += 1
                        ) {
                            var h = c[u];
                            h[0] >= n.left && h[0] <= n.left + o && h[1] >= n.top && h[1] <= n.top + l && (r = !0);
                        }
                        if (!r) return;
                    }
                    t.isHorizontal()
                        ? ((37 !== i && 39 !== i) || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
                          ((39 === i && !t.rtl) || (37 === i && t.rtl)) && t.slideNext(),
                          ((37 === i && !t.rtl) || (39 === i && t.rtl)) && t.slidePrev())
                        : ((38 !== i && 40 !== i) || (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)), 40 === i && t.slideNext(), 38 === i && t.slidePrev()),
                        t.emit("keyPress", i);
                }
            },
            enable: function () {
                var t = this;
                t.keyboard.enabled || (e(d).on("keydown", t.keyboard.handle), (t.keyboard.enabled = !0));
            },
            disable: function () {
                var t = this;
                t.keyboard.enabled && (e(d).off("keydown", t.keyboard.handle), (t.keyboard.enabled = !1));
            },
        },
        G = {
            name: "keyboard",
            params: { keyboard: { enabled: !1 } },
            create: function () {
                var e = this;
                l.extend(e, { keyboard: { enabled: !1, enable: Y.enable.bind(e), disable: Y.disable.bind(e), handle: Y.handle.bind(e) } });
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.keyboard.enabled && e.keyboard.enable();
                },
                destroy: function () {
                    var e = this;
                    e.keyboard.enabled && e.keyboard.disable();
                },
            },
        },
        B = {
            lastScrollTime: l.now(),
            event: s.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : a() ? "wheel" : "mousewheel",
            normalize: function (e) {
                var t = 0,
                    a = 0,
                    i = 0,
                    s = 0;
                return (
                    "detail" in e && (a = e.detail),
                    "wheelDelta" in e && (a = -e.wheelDelta / 120),
                    "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
                    "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                    "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
                    (i = 10 * t),
                    (s = 10 * a),
                    "deltaY" in e && (s = e.deltaY),
                    "deltaX" in e && (i = e.deltaX),
                    (i || s) && e.deltaMode && (1 === e.deltaMode ? ((i *= 40), (s *= 40)) : ((i *= 800), (s *= 800))),
                    i && !t && (t = i < 1 ? -1 : 1),
                    s && !a && (a = s < 1 ? -1 : 1),
                    { spinX: t, spinY: a, pixelX: i, pixelY: s }
                );
            },
            handle: function (e) {
                var t = e,
                    a = this,
                    i = a.params.mousewheel;
                t.originalEvent && (t = t.originalEvent);
                var r = 0,
                    n = a.rtl ? -1 : 1,
                    o = B.normalize(t);
                if (i.forceToAxis)
                    if (a.isHorizontal()) {
                        if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                        r = o.pixelX * n;
                    } else {
                        if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                        r = o.pixelY;
                    }
                else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
                if (0 === r) return !0;
                if ((i.invert && (r = -r), a.params.freeMode)) {
                    var d = a.getTranslate() + r * i.sensitivity,
                        p = a.isBeginning,
                        c = a.isEnd;
                    if (
                        (d >= a.minTranslate() && (d = a.minTranslate()),
                        d <= a.maxTranslate() && (d = a.maxTranslate()),
                        a.setTransition(0),
                        a.setTranslate(d),
                        a.updateProgress(),
                        a.updateActiveIndex(),
                        a.updateSlidesClasses(),
                        ((!p && a.isBeginning) || (!c && a.isEnd)) && a.updateSlidesClasses(),
                        a.params.freeModeSticky &&
                            (clearTimeout(a.mousewheel.timeout),
                            (a.mousewheel.timeout = l.nextTick(function () {
                                a.slideReset();
                            }, 300))),
                        a.emit("scroll", t),
                        a.params.autoplay && a.params.autoplayDisableOnInteraction && a.stopAutoplay(),
                        0 === d || d === a.maxTranslate())
                    )
                        return !0;
                } else {
                    if (l.now() - a.mousewheel.lastScrollTime > 60)
                        if (r < 0)
                            if ((a.isEnd && !a.params.loop) || a.animating) {
                                if (i.releaseOnEdges) return !0;
                            } else a.slideNext(), a.emit("scroll", t);
                        else if ((a.isBeginning && !a.params.loop) || a.animating) {
                            if (i.releaseOnEdges) return !0;
                        } else a.slidePrev(), a.emit("scroll", t);
                    a.mousewheel.lastScrollTime = new s.Date().getTime();
                }
                return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
            },
            enable: function () {
                var t = this;
                if (!B.event) return !1;
                if (t.mousewheel.enabled) return !1;
                var a = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.on(B.event, t.mousewheel.handle), (t.mousewheel.enabled = !0), !0;
            },
            disable: function () {
                var t = this;
                if (!B.event) return !1;
                if (!t.mousewheel.enabled) return !1;
                var a = t.$el;
                return "container" !== t.params.mousewheel.eventsTarged && (a = e(t.params.mousewheel.eventsTarged)), a.off(B.event, t.mousewheel.handle), (t.mousewheel.enabled = !1), !0;
            },
        },
        V = {
            name: "mousewheel",
            params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } },
            create: function () {
                var e = this;
                l.extend(e, { mousewheel: { enabled: !1, enable: B.enable.bind(e), disable: B.disable.bind(e), handle: B.handle.bind(e), lastScrollTime: l.now() } });
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.mousewheel.enabled && e.mousewheel.enable();
                },
                destroy: function () {
                    var e = this;
                    e.mousewheel.enabled && e.mousewheel.disable();
                },
            },
        },
        R = {
            update: function () {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var a = e.navigation,
                        i = a.$nextEl,
                        s = a.$prevEl;
                    s && s.length > 0 && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass));
                }
            },
            init: function () {
                var t = this,
                    a = t.params.navigation;
                if (a.nextEl || a.prevEl) {
                    var i, s;
                    a.nextEl && ((i = e(a.nextEl)), t.params.uniqueNavElements && "string" == typeof a.nextEl && i.length > 1 && 1 === t.$el.find(a.nextEl).length && (i = t.$el.find(a.nextEl))),
                        a.prevEl && ((s = e(a.prevEl)), t.params.uniqueNavElements && "string" == typeof a.prevEl && s.length > 1 && 1 === t.$el.find(a.prevEl).length && (s = t.$el.find(a.prevEl))),
                        i &&
                            i.length > 0 &&
                            i.on("click", function (e) {
                                e.preventDefault(), (t.isEnd && !t.params.loop) || t.slideNext();
                            }),
                        s &&
                            s.length > 0 &&
                            s.on("click", function (e) {
                                e.preventDefault(), (t.isBeginning && !t.params.loop) || t.slidePrev();
                            }),
                        l.extend(t.navigation, { $nextEl: i, nextEl: i && i[0], $prevEl: s, prevEl: s && s[0] });
                }
            },
            destroy: function () {
                var e = this,
                    t = e.navigation,
                    a = t.$nextEl,
                    i = t.$prevEl;
                a && a.length && (a.off("click"), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(e.params.navigation.disabledClass));
            },
        },
        W = {
            name: "navigation",
            params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden" } },
            create: function () {
                var e = this;
                l.extend(e, { navigation: { init: R.init.bind(e), update: R.update.bind(e), destroy: R.destroy.bind(e) } });
            },
            on: {
                init: function () {
                    var e = this;
                    e.navigation.init(), e.navigation.update();
                },
                toEdge: function () {
                    this.navigation.update();
                },
                fromEdge: function () {
                    this.navigation.update();
                },
                destroy: function () {
                    this.navigation.destroy();
                },
                click: function (t) {
                    var a = this,
                        i = a.navigation,
                        s = i.$nextEl,
                        r = i.$prevEl;
                    !a.params.navigation.hideOnClick || e(t.target).is(r) || e(t.target).is(s) || (s && s.toggleClass(a.params.navigation.hiddenClass), r && r.toggleClass(a.params.navigation.hiddenClass));
                },
            },
        },
        F = {
            update: function () {
                var t = this,
                    a = t.rtl,
                    i = t.params.pagination;
                if (i.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
                    var s,
                        r = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                        n = t.pagination.$el,
                        o = t.params.loop ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    if (
                        (t.params.loop
                            ? ((s = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > r - 1 - 2 * t.loopedSlides && (s -= r - 2 * t.loopedSlides),
                              s > o - 1 && (s -= o),
                              s < 0 && "bullets" !== t.params.paginationType && (s = o + s))
                            : (s = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
                        "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0)
                    ) {
                        var l = t.pagination.bullets;
                        if (
                            (i.dynamicBullets && ((t.pagination.bulletSize = l.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)), n.css(t.isHorizontal() ? "width" : "height", 5 * t.pagination.bulletSize + "px")),
                            l.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev"),
                            n.length > 1)
                        )
                            l.each(function (t, a) {
                                var r = e(a);
                                r.index() === s &&
                                    (r.addClass(i.bulletActiveClass),
                                    i.dynamicBullets &&
                                        (r
                                            .prev()
                                            .addClass(i.bulletActiveClass + "-prev")
                                            .prev()
                                            .addClass(i.bulletActiveClass + "-prev-prev"),
                                        r
                                            .next()
                                            .addClass(i.bulletActiveClass + "-next")
                                            .next()
                                            .addClass(i.bulletActiveClass + "-next-next")));
                            });
                        else {
                            var d = l.eq(s);
                            d.addClass(i.bulletActiveClass),
                                i.dynamicBullets &&
                                    (d
                                        .prev()
                                        .addClass(i.bulletActiveClass + "-prev")
                                        .prev()
                                        .addClass(i.bulletActiveClass + "-prev-prev"),
                                    d
                                        .next()
                                        .addClass(i.bulletActiveClass + "-next")
                                        .next()
                                        .addClass(i.bulletActiveClass + "-next-next"));
                        }
                        if (i.dynamicBullets) {
                            var p = Math.min(l.length, 5),
                                c = (t.pagination.bulletSize * p - t.pagination.bulletSize) / 2 - s * t.pagination.bulletSize,
                                u = a ? "right" : "left";
                            l.css(t.isHorizontal() ? u : "top", c + "px");
                        }
                    }
                    if (("fraction" === i.type && (n.find("." + i.currentClass).text(s + 1), n.find("." + i.totalClass).text(o)), "progressbar" === i.type)) {
                        var h = (s + 1) / o,
                            v = h,
                            f = 1;
                        t.isHorizontal() || ((f = h), (v = 1)),
                            n
                                .find("." + i.progressbarFillClass)
                                .transform("translate3d(0,0,0) scaleX(" + v + ") scaleY(" + f + ")")
                                .transition(t.params.speed);
                    }
                    "custom" === i.type && i.renderCustom ? (n.html(i.renderCustom(t, s + 1, o)), t.emit("paginationRender", t, n[0])) : t.emit("paginationUpdate", t, n[0]);
                }
            },
            render: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1)
                            t.renderBullet ? (s += t.renderBullet.call(e, n, t.bulletClass)) : (s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">");
                        i.html(s), (e.pagination.bullets = i.find("." + t.bulletClass));
                    }
                    "fraction" === t.type && ((s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>'), i.html(s)),
                        "progressbar" === t.type && ((s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>'), i.html(s)),
                        "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
                }
            },
            init: function () {
                var t = this,
                    a = t.params.pagination;
                if (a.el) {
                    var i = e(a.el);
                    0 !== i.length &&
                        (t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === t.$el.find(a.el).length && (i = t.$el.find(a.el)),
                        "bullets" === a.type && a.clickable && i.addClass(a.clickableClass),
                        i.addClass(a.modifierClass + a.type),
                        "bullets" === a.type && a.dynamicBullets && i.addClass("" + a.modifierClass + a.type + "-dynamic"),
                        a.clickable &&
                            i.on("click", "." + a.bulletClass, function (a) {
                                a.preventDefault();
                                var i = e(this).index() * t.params.slidesPerGroup;
                                t.params.loop && (i += t.loopedSlides), t.slideTo(i);
                            }),
                        l.extend(t.pagination, { $el: i, el: i[0] }));
                }
            },
            destroy: function () {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.pagination.$el;
                    a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass);
                }
            },
        },
        j = {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    type: "bullets",
                    dynamicBullets: !1,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    clickableClass: "swiper-pagination-clickable",
                },
            },
            create: function () {
                var e = this;
                l.extend(e, { pagination: { init: F.init.bind(e), render: F.render.bind(e), update: F.update.bind(e), destroy: F.destroy.bind(e) } });
            },
            on: {
                init: function () {
                    var e = this;
                    e.pagination.init(), e.pagination.render(), e.pagination.update();
                },
                activeIndexChange: function () {
                    var e = this;
                    e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update();
                },
                snapIndexChange: function () {
                    var e = this;
                    e.params.loop || e.pagination.update();
                },
                slidesLengthChange: function () {
                    var e = this;
                    e.params.loop && (e.pagination.render(), e.pagination.update());
                },
                snapGridLengthChange: function () {
                    var e = this;
                    e.params.loop || (e.pagination.render(), e.pagination.update());
                },
                destroy: function () {
                    this.pagination.destroy();
                },
                click: function (t) {
                    var a = this;
                    a.params.pagination.el && a.params.pagination.hideOnClick && a.pagination.$el.length > 0 && !e(t.target).hasClass(a.params.pagination.bulletClass) && a.pagination.$el.toggleClass(a.params.pagination.hiddenClass);
                },
            },
        },
        q = {
            setTranslate: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.rtl,
                        i = e.progress,
                        s = t.dragSize,
                        r = t.trackSize,
                        n = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        d = s,
                        c = (r - s) * i;
                    a && e.isHorizontal() ? ((c = -c) > 0 ? ((d = s - c), (c = 0)) : -c + s > r && (d = r + c)) : c < 0 ? ((d = s + c), (c = 0)) : c + s > r && (d = r - c),
                        e.isHorizontal()
                            ? (p.transforms3d ? n.transform("translate3d(" + c + "px, 0, 0)") : n.transform("translateX(" + c + "px)"), (n[0].style.width = d + "px"))
                            : (p.transforms3d ? n.transform("translate3d(0px, " + c + "px, 0)") : n.transform("translateY(" + c + "px)"), (n[0].style.height = d + "px")),
                        l.hide &&
                            (clearTimeout(e.scrollbar.timeout),
                            (o[0].style.opacity = 1),
                            (e.scrollbar.timeout = setTimeout(function () {
                                (o[0].style.opacity = 0), o.transition(400);
                            }, 1e3)));
                }
            },
            setTransition: function (e) {
                var t = this;
                t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
            },
            updateSize: function () {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = t.$dragEl,
                        i = t.$el;
                    (a[0].style.width = ""), (a[0].style.height = "");
                    var s,
                        r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        n = e.size / e.virtualSize,
                        o = n * (r / e.size);
                    (s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10)),
                        e.isHorizontal() ? (a[0].style.width = s + "px") : (a[0].style.height = s + "px"),
                        (i[0].style.display = n >= 1 ? "none" : ""),
                        e.params.scrollbarHide && (i[0].style.opacity = 0),
                        l.extend(t, { trackSize: r, divider: n, moveDivider: o, dragSize: s });
                }
            },
            setDragPosition: function (e) {
                var t,
                    a = this,
                    i = a.scrollbar,
                    s = i.$el,
                    r = i.dragSize,
                    n = i.trackSize;
                (t =
                    ((a.isHorizontal()
                        ? "touchstart" === e.type || "touchmove" === e.type
                            ? e.targetTouches[0].pageX
                            : e.pageX || e.clientX
                        : "touchstart" === e.type || "touchmove" === e.type
                        ? e.targetTouches[0].pageY
                        : e.pageY || e.clientY) -
                        s.offset()[a.isHorizontal() ? "left" : "top"] -
                        r / 2) /
                    (n - r)),
                    (t = Math.max(Math.min(t, 1), 0)),
                    a.rtl && (t = 1 - t);
                var o = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
                a.updateProgress(o), a.setTranslate(o), a.updateActiveIndex(), a.updateSlidesClasses();
            },
            onDragStart: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el,
                    n = i.$dragEl;
                (t.scrollbar.isTouched = !0),
                    e.preventDefault(),
                    e.stopPropagation(),
                    s.transition(100),
                    n.transition(100),
                    i.setDragPosition(e),
                    clearTimeout(t.scrollbar.dragTimeout),
                    r.transition(0),
                    a.hide && r.css("opacity", 1),
                    t.emit("scrollbarDragStart", e);
            },
            onDragMove: function (e) {
                var t = this,
                    a = t.scrollbar,
                    i = t.$wrapperEl,
                    s = a.$el,
                    r = a.$dragEl;
                t.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), a.setDragPosition(e), i.transition(0), s.transition(0), r.transition(0), t.emit("scrollbarDragMove", e));
            },
            onDragEnd: function (e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar.$el;
                t.scrollbar.isTouched &&
                    ((t.scrollbar.isTouched = !1),
                    a.hide &&
                        (clearTimeout(t.scrollbar.dragTimeout),
                        (t.scrollbar.dragTimeout = l.nextTick(function () {
                            i.css("opacity", 0), i.transition(400);
                        }, 1e3))),
                    t.emit("scrollbarDragEnd", e),
                    a.snapOnRelease && t.slideReset());
            },
            enableDraggable: function () {
                var t = this;
                if (t.params.scrollbar.el) {
                    var a = t.scrollbar.$el,
                        i = p.touch ? a[0] : document;
                    a.on(t.scrollbar.dragEvents.start, t.scrollbar.onDragStart), e(i).on(t.scrollbar.dragEvents.move, t.scrollbar.onDragMove), e(i).on(t.scrollbar.dragEvents.end, t.scrollbar.onDragEnd);
                }
            },
            disableDraggable: function () {
                var t = this;
                if (t.params.scrollbar.el) {
                    var a = t.scrollbar.$el,
                        i = p.touch ? a[0] : document;
                    a.off(t.scrollbar.dragEvents.start), e(i).off(t.scrollbar.dragEvents.move), e(i).off(t.scrollbar.dragEvents.end);
                }
            },
            init: function () {
                var t = this;
                if (t.params.scrollbar.el) {
                    var a = t.scrollbar,
                        i = t.$el,
                        s = t.touchEvents,
                        r = t.params.scrollbar,
                        n = e(r.el);
                    t.params.uniqueNavElements && "string" == typeof r.el && n.length > 1 && 1 === i.find(r.el).length && (n = i.find(r.el));
                    var o = n.find(".swiper-scrollbar-drag");
                    0 === o.length && ((o = e('<div class="swiper-scrollbar-drag"></div>')), n.append(o)),
                        (t.scrollbar.dragEvents = !1 !== t.params.simulateTouch || p.touch ? s : { start: "mousedown", move: "mousemove", end: "mouseup" }),
                        l.extend(a, { $el: n, el: n[0], $dragEl: o, dragEl: o[0] }),
                        r.draggable && a.enableDraggable();
                }
            },
            destroy: function () {
                this.scrollbar.disableDraggable();
            },
        },
        K = {
            name: "scrollbar",
            params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0 } },
            create: function () {
                var e = this;
                l.extend(e, {
                    scrollbar: {
                        init: q.init.bind(e),
                        destroy: q.destroy.bind(e),
                        updateSize: q.updateSize.bind(e),
                        setTranslate: q.setTranslate.bind(e),
                        setTransition: q.setTransition.bind(e),
                        enableDraggable: q.enableDraggable.bind(e),
                        disableDraggable: q.disableDraggable.bind(e),
                        setDragPosition: q.setDragPosition.bind(e),
                        onDragStart: q.onDragStart.bind(e),
                        onDragMove: q.onDragMove.bind(e),
                        onDragEnd: q.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null,
                    },
                });
            },
            on: {
                init: function () {
                    var e = this;
                    e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate();
                },
                update: function () {
                    this.scrollbar.updateSize();
                },
                resize: function () {
                    this.scrollbar.updateSize();
                },
                observerUpdate: function () {
                    this.scrollbar.updateSize();
                },
                setTranslate: function () {
                    this.scrollbar.setTranslate();
                },
                setTransition: function (e) {
                    this.scrollbar.setTransition(e);
                },
                destroy: function () {
                    this.scrollbar.destroy();
                },
            },
        },
        U = {
            setTransform: function (t, a) {
                var i = this,
                    s = i.rtl,
                    r = e(t),
                    n = s ? -1 : 1,
                    o = r.attr("data-swiper-parallax") || "0",
                    l = r.attr("data-swiper-parallax-x"),
                    d = r.attr("data-swiper-parallax-y"),
                    p = r.attr("data-swiper-parallax-scale"),
                    c = r.attr("data-swiper-parallax-opacity");
                if (
                    (l || d ? ((l = l || "0"), (d = d || "0")) : i.isHorizontal() ? ((l = o), (d = "0")) : ((d = o), (l = "0")),
                    (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * a * n + "%" : l * a * n + "px"),
                    (d = d.indexOf("%") >= 0 ? parseInt(d, 10) * a + "%" : d * a + "px"),
                    void 0 !== c && null !== c)
                ) {
                    var u = c - (c - 1) * (1 - Math.abs(a));
                    r[0].style.opacity = u;
                }
                if (void 0 === p || null === p) r.transform("translate3d(" + l + ", " + d + ", 0px)");
                else {
                    var h = p - (p - 1) * (1 - Math.abs(a));
                    r.transform("translate3d(" + l + ", " + d + ", 0px) scale(" + h + ")");
                }
            },
            setTranslate: function () {
                var t = this,
                    a = t.$el,
                    i = t.slides,
                    s = t.progress,
                    r = t.snapGrid;
                a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, a) {
                    t.parallax.setTransform(a, s);
                }),
                    i.each(function (a, i) {
                        var n = i.progress;
                        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (n += Math.ceil(a / 2) - s * (r.length - 1)),
                            (n = Math.min(Math.max(n, -1), 1)),
                            e(i)
                                .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
                                .each(function (e, a) {
                                    t.parallax.setTransform(a, n);
                                });
                    });
            },
            setTransition: function (t) {
                void 0 === t && (t = this.params.speed),
                    this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (a, i) {
                        var s = e(i),
                            r = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (r = 0), s.transition(r);
                    });
            },
        },
        _ = {
            name: "parallax",
            params: { parallax: { enabled: !1 } },
            create: function () {
                var e = this;
                l.extend(e, { parallax: { setTransform: U.setTransform.bind(e), setTranslate: U.setTranslate.bind(e), setTransition: U.setTransition.bind(e) } });
            },
            on: {
                beforeInit: function () {
                    this.params.watchSlidesProgress = !0;
                },
                init: function () {
                    var e = this;
                    e.params.parallax && e.parallax.setTranslate();
                },
                setTranslate: function () {
                    var e = this;
                    e.params.parallax && e.parallax.setTranslate();
                },
                setTransition: function (e) {
                    var t = this;
                    t.params.parallax && t.parallax.setTransition(e);
                },
            },
        },
        Z = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    a = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
            },
            onGestureStart: function (t) {
                var a = this,
                    i = a.params.zoom,
                    s = a.zoom,
                    r = s.gesture;
                if (((s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1), !p.gestures)) {
                    if ("touchstart" !== t.type || ("touchstart" === t.type && t.targetTouches.length < 2)) return;
                    (s.fakeGestureTouched = !0), (r.scaleStart = Z.getDistanceBetweenTouches(t));
                }
                (r.$slideEl && r.$slideEl.length) ||
                ((r.$slideEl = e(this)),
                0 === r.$slideEl.length && (r.$slideEl = a.slides.eq(a.activeIndex)),
                (r.$imageEl = r.$slideEl.find("img, svg, canvas")),
                (r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)),
                (r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
                0 !== r.$imageWrapEl.length)
                    ? (r.$imageEl.transition(0), (a.zoom.isScaling = !0))
                    : (r.$imageEl = void 0);
            },
            onGestureChange: function (e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    s = i.gesture;
                if (!p.gestures) {
                    if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                    (i.fakeGestureMoved = !0), (s.scaleMove = Z.getDistanceBetweenTouches(e));
                }
                s.$imageEl &&
                    0 !== s.$imageEl.length &&
                    (p.gestures ? (t.zoom.scale = e.scale * i.currentScale) : (i.scale = (s.scaleMove / s.scaleStart) * i.currentScale),
                    i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
                    i.scale < a.minRatio && (i.scale = a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, 0.5)),
                    s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
            },
            onGestureEnd: function (e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    s = i.gesture;
                if (!p.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !x.android)) return;
                    (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
                }
                s.$imageEl &&
                    0 !== s.$imageEl.length &&
                    ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), a.minRatio)),
                    s.$imageEl.transition(t.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
                    (i.currentScale = i.scale),
                    (i.isScaling = !1),
                    1 === i.scale && (s.$slideEl = void 0));
            },
            onTouchStart: function (e) {
                var t = this.zoom,
                    a = t.gesture,
                    i = t.image;
                a.$imageEl &&
                    0 !== a.$imageEl.length &&
                    (i.isTouched ||
                        (x.android && e.preventDefault(),
                        (i.isTouched = !0),
                        (i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
                        (i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
            },
            onTouchMove: function (e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    s = a.image,
                    r = a.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && ((t.allowClick = !1), s.isTouched && i.$slideEl)) {
                    s.isMoved ||
                        ((s.width = i.$imageEl[0].offsetWidth),
                        (s.height = i.$imageEl[0].offsetHeight),
                        (s.startX = l.getTranslate(i.$imageWrapEl[0], "x") || 0),
                        (s.startY = l.getTranslate(i.$imageWrapEl[0], "y") || 0),
                        (i.slideWidth = i.$slideEl[0].offsetWidth),
                        (i.slideHeight = i.$slideEl[0].offsetHeight),
                        i.$imageWrapEl.transition(0),
                        t.rtl && (s.startX = -s.startX),
                        t.rtl && (s.startY = -s.startY));
                    var n = s.width * a.scale,
                        o = s.height * a.scale;
                    if (!(n < i.slideWidth && o < i.slideHeight)) {
                        if (
                            ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
                            (s.maxX = -s.minX),
                            (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
                            (s.maxY = -s.minY),
                            (s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
                            (s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
                            !s.isMoved && !a.isScaling)
                        ) {
                            if (t.isHorizontal() && ((Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x) || (Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)))
                                return void (s.isTouched = !1);
                            if (!t.isHorizontal() && ((Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y) || (Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)))
                                return void (s.isTouched = !1);
                        }
                        e.preventDefault(),
                            e.stopPropagation(),
                            (s.isMoved = !0),
                            (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
                            (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
                            s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
                            s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
                            s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
                            s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
                            r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
                            r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
                            r.prevTime || (r.prevTime = Date.now()),
                            (r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2),
                            (r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2),
                            Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                            Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                            (r.prevPositionX = s.touchesCurrent.x),
                            (r.prevPositionY = s.touchesCurrent.y),
                            (r.prevTime = Date.now()),
                            i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)");
                    }
                }
            },
            onTouchEnd: function () {
                var e = this.zoom,
                    t = e.gesture,
                    a = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!a.isTouched || !a.isMoved) return (a.isTouched = !1), void (a.isMoved = !1);
                    (a.isTouched = !1), (a.isMoved = !1);
                    var s = 300,
                        r = 300,
                        n = i.x * s,
                        o = a.currentX + n,
                        l = i.y * r,
                        d = a.currentY + l;
                    0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                    var p = Math.max(s, r);
                    (a.currentX = o), (a.currentY = d);
                    var c = a.width * e.scale,
                        u = a.height * e.scale;
                    (a.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
                        (a.maxX = -a.minX),
                        (a.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
                        (a.maxY = -a.minY),
                        (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
                        (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
                        t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)");
                }
            },
            onTransitionEnd: function () {
                var e = this,
                    t = e.zoom,
                    a = t.gesture;
                a.$slideEl &&
                    e.previousIndex !== e.activeIndex &&
                    (a.$imageEl.transform("translate3d(0,0,0) scale(1)"), a.$imageWrapEl.transform("translate3d(0,0,0)"), (a.$slideEl = void 0), (a.$imageEl = void 0), (a.$imageWrapEl = void 0), (t.scale = 1), (t.currentScale = 1));
            },
            toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e);
            },
            in: function (t) {
                var a = this,
                    i = a.zoom,
                    s = a.params.zoom,
                    r = i.gesture,
                    n = i.image;
                if (
                    (r.$slideEl || ((r.$slideEl = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex)), (r.$imageEl = r.$slideEl.find("img, svg, canvas")), (r.$imageWrapEl = r.$imageEl.parent("." + s.containerClass))),
                    r.$imageEl && 0 !== r.$imageEl.length)
                ) {
                    r.$slideEl.addClass("" + s.zoomedSlideClass);
                    var o, l, d, p, c, u, h, v, f, m, g, b, w, y, x, T;
                    void 0 === n.touchesStart.x && t
                        ? ((o = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX), (l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY))
                        : ((o = n.touchesStart.x), (l = n.touchesStart.y)),
                        (i.scale = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
                        (i.currentScale = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
                        t
                            ? ((x = r.$slideEl[0].offsetWidth),
                              (T = r.$slideEl[0].offsetHeight),
                              (d = r.$slideEl.offset().left + x / 2 - o),
                              (p = r.$slideEl.offset().top + T / 2 - l),
                              (h = r.$imageEl[0].offsetWidth),
                              (v = r.$imageEl[0].offsetHeight),
                              (f = h * i.scale),
                              (m = v * i.scale),
                              (w = -(g = Math.min(x / 2 - f / 2, 0))),
                              (y = -(b = Math.min(T / 2 - m / 2, 0))),
                              (c = d * i.scale),
                              (u = p * i.scale),
                              c < g && (c = g),
                              c > w && (c = w),
                              u < b && (u = b),
                              u > y && (u = y))
                            : ((c = 0), (u = 0)),
                        r.$imageWrapEl.transition(300).transform("translate3d(" + c + "px, " + u + "px,0)"),
                        r.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + i.scale + ")");
                }
            },
            out: function () {
                var t = this,
                    a = t.zoom,
                    i = t.params.zoom,
                    s = a.gesture;
                s.$slideEl || ((s.$slideEl = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex)), (s.$imageEl = s.$slideEl.find("img, svg, canvas")), (s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass))),
                    s.$imageEl &&
                        0 !== s.$imageEl.length &&
                        ((a.scale = 1),
                        (a.currentScale = 1),
                        s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                        s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                        s.$slideEl.removeClass("" + i.zoomedSlideClass),
                        (s.$slideEl = void 0));
            },
            enable: function () {
                var t = this,
                    a = t.zoom;
                if (!a.enabled) {
                    a.enabled = !0;
                    var i = t.slides,
                        s = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 };
                    p.gestures
                        ? (i.on("gesturestart", a.onGestureStart, s), i.on("gesturechange", a.onGestureChange, s), i.on("gestureend", a.onGestureEnd, s))
                        : "touchstart" === t.touchEvents.start && (i.on(t.touchEvents.start, a.onGestureStart, s), i.on(t.touchEvents.move, a.onGestureChange, s), i.on(t.touchEvents.end, a.onGestureEnd, s)),
                        t.slides.each(function (i, s) {
                            var r = e(s);
                            r.find("." + t.params.zoom.containerClass).length > 0 && r.on(t.touchEvents.move, a.onTouchMove);
                        });
                }
            },
            disable: function () {
                var t = this,
                    a = t.zoom;
                if (a.enabled) {
                    t.zoom.enabled = !1;
                    var i = t.slides,
                        s = !("touchstart" !== t.touchEvents.start || !p.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 };
                    p.gestures
                        ? (i.off("gesturestart", a.onGestureStart, s), i.off("gesturechange", a.onGestureChange, s), i.off("gestureend", a.onGestureEnd, s))
                        : "touchstart" === t.touchEvents.start && (i.off(t.touchEvents.start, a.onGestureStart, s), i.off(t.touchEvents.move, a.onGestureChange, s), i.off(t.touchEvents.end, a.onGestureEnd, s)),
                        t.slides.each(function (i, s) {
                            var r = e(s);
                            r.find("." + t.params.zoom.containerClass).length > 0 && r.off(t.touchEvents.move, a.onTouchMove);
                        });
                }
            },
        },
        Q = {
            name: "zoom",
            params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
            create: function () {
                var e = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {},
                        },
                        velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (a) {
                    t[a] = Z[a].bind(e);
                }),
                    l.extend(e, { zoom: t });
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.zoom.enabled && e.zoom.enable();
                },
                destroy: function () {
                    this.zoom.disable();
                },
                touchStart: function (e) {
                    var t = this;
                    t.zoom.enabled && t.zoom.onTouchStart(e);
                },
                touchEnd: function (e) {
                    var t = this;
                    t.zoom.enabled && t.zoom.onTouchEnd(e);
                },
                doubleTap: function (e) {
                    var t = this;
                    t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e);
                },
                transitionEnd: function () {
                    var e = this;
                    e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
                },
            },
        },
        J = {
            loadInSlide: function (t, a) {
                void 0 === a && (a = !0);
                var i = this,
                    s = i.params.lazy;
                if (void 0 !== t && 0 !== i.slides.length) {
                    var r = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : i.slides.eq(t),
                        n = r.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
                    !r.hasClass(s.elementClass) || r.hasClass(s.loadedClass) || r.hasClass(s.loadingClass) || (n = n.add(r[0])),
                        0 !== n.length &&
                            n.each(function (t, n) {
                                var o = e(n);
                                o.addClass(s.loadingClass);
                                var l = o.attr("data-background"),
                                    d = o.attr("data-src"),
                                    p = o.attr("data-srcset"),
                                    c = o.attr("data-sizes");
                                i.loadImage(o[0], d || l, p, c, !1, function () {
                                    if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                                        if (
                                            (l
                                                ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background"))
                                                : (p && (o.attr("srcset", p), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), d && (o.attr("src", d), o.removeAttr("data-src"))),
                                            o.addClass(s.loadedClass).removeClass(s.loadingClass),
                                            r.find("." + s.preloaderClass).remove(),
                                            i.params.loop && a)
                                        ) {
                                            var e = r.attr("data-swiper-slide-index");
                                            if (r.hasClass(i.params.slideDuplicateClass)) {
                                                var t = i.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")");
                                                i.lazy.loadInSlide(t.index(), !1);
                                            } else {
                                                var n = i.$wrapperEl.children("." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                i.lazy.loadInSlide(n.index(), !1);
                                            }
                                        }
                                        i.emit("lazyImageReady", r[0], o[0]);
                                    }
                                }),
                                    i.emit("lazyImageLoad", r[0], o[0]);
                            });
                }
            },
            load: function () {
                function t(e) {
                    if (l) {
                        if (s.children("." + r.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
                    } else if (n[e]) return !0;
                    return !1;
                }
                function a(t) {
                    return l ? e(t).attr("data-swiper-slide-index") : e(t).index();
                }
                var i = this,
                    s = i.$wrapperEl,
                    r = i.params,
                    n = i.slides,
                    o = i.activeIndex,
                    l = i.virtual && r.virtual.enabled,
                    d = r.lazy,
                    p = r.slidesPerView;
                if (("auto" === p && (p = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility))
                    s.children("." + r.slideVisibleClass).each(function (t, a) {
                        var s = l ? e(a).attr("data-swiper-slide-index") : e(a).index();
                        i.lazy.loadInSlide(s);
                    });
                else if (p > 1) for (var c = o; c < o + p; c += 1) t(c) && i.lazy.loadInSlide(c);
                else i.lazy.loadInSlide(o);
                if (d.loadPrevNext)
                    if (p > 1 || (d.loadPrevNextAmount && d.loadPrevNextAmount > 1)) {
                        for (var u = d.loadPrevNextAmount, h = p, v = Math.min(o + h + Math.max(u, h), n.length), f = Math.max(o - Math.max(h, u), 0), m = o + p; m < v; m += 1) t(m) && i.lazy.loadInSlide(m);
                        for (var g = f; g < o; g += 1) t(g) && i.lazy.loadInSlide(g);
                    } else {
                        var b = s.children("." + r.slideNextClass);
                        b.length > 0 && i.lazy.loadInSlide(a(b));
                        var w = s.children("." + r.slidePrevClass);
                        w.length > 0 && i.lazy.loadInSlide(a(w));
                    }
            },
        },
        ee = {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader",
                },
            },
            create: function () {
                var e = this;
                l.extend(e, { lazy: { initialImageLoaded: !1, load: J.load.bind(e), loadInSlide: J.loadInSlide.bind(e) } });
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
                },
                init: function () {
                    var e = this;
                    e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
                },
                scroll: function () {
                    var e = this;
                    e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
                },
                resize: function () {
                    var e = this;
                    e.params.lazy.enabled && e.lazy.load();
                },
                scrollbarDragMove: function () {
                    var e = this;
                    e.params.lazy.enabled && e.lazy.load();
                },
                transitionStart: function () {
                    var e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || (!e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded)) && e.lazy.load();
                },
                transitionEnd: function () {
                    var e = this;
                    e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
                },
            },
        },
        te = {
            LinearSpline: function (e, t) {
                var a = (function () {
                    var e, t, a;
                    return function (i, s) {
                        for (t = -1, e = i.length; e - t > 1; ) i[(a = (e + t) >> 1)] <= s ? (t = a) : (e = a);
                        return e;
                    };
                })();
                (this.x = e), (this.y = t), (this.lastIndex = e.length - 1);
                var i, s;
                return (
                    (this.interpolate = function (e) {
                        return e ? ((s = a(this.x, e)), (i = s - 1), ((e - this.x[i]) * (this.y[s] - this.y[i])) / (this.x[s] - this.x[i]) + this.y[i]) : 0;
                    }),
                    this
                );
            },
            getInterpolateFunction: function (e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new te.LinearSpline(t.slidesGrid, e.slidesGrid) : new te.LinearSpline(t.snapGrid, e.snapGrid));
            },
            setTranslate: function (e, t) {
                function a(e) {
                    var t = e.rtl && "horizontal" === e.params.direction ? -r.translate : r.translate;
                    "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), (s = -r.controller.spline.interpolate(-t))),
                        (s && "container" !== r.params.controller.by) || ((i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate())), (s = (t - r.minTranslate()) * i + e.minTranslate())),
                        r.params.controller.inverse && (s = e.maxTranslate() - s),
                        e.updateProgress(s),
                        e.setTranslate(s, r),
                        e.updateActiveIndex(),
                        e.updateSlidesClasses();
                }
                var i,
                    s,
                    r = this,
                    n = r.controller.control;
                if (Array.isArray(n)) for (var o = 0; o < n.length; o += 1) n[o] !== t && n[o] instanceof $ && a(n[o]);
                else n instanceof $ && t !== n && a(n);
            },
            setTransition: function (e, t) {
                function a(t) {
                    t.setTransition(e, s),
                        0 !== e &&
                            (t.transitionStart(),
                            t.$wrapperEl.transitionEnd(function () {
                                r && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
                            }));
                }
                var i,
                    s = this,
                    r = s.controller.control;
                if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) r[i] !== t && r[i] instanceof $ && a(r[i]);
                else r instanceof $ && t !== r && a(r);
            },
        },
        ae = {
            name: "controller",
            params: { controller: { control: void 0, inverse: !1, by: "slide" } },
            create: function () {
                var e = this;
                l.extend(e, { controller: { control: e.params.controller.control, getInterpolateFunction: te.getInterpolateFunction.bind(e), setTranslate: te.setTranslate.bind(e), setTransition: te.setTransition.bind(e) } });
            },
            on: {
                update: function () {
                    var e = this;
                    e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                },
                resize: function () {
                    var e = this;
                    e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                },
                observerUpdate: function () {
                    var e = this;
                    e.controller.control && e.controller.spline && ((e.controller.spline = void 0), delete e.controller.spline);
                },
                setTranslate: function (e, t) {
                    var a = this;
                    a.controller.control && a.controller.setTranslate(e, t);
                },
                setTransition: function (e, t) {
                    var a = this;
                    a.controller.control && a.controller.setTransition(e, t);
                },
            },
        },
        ie = {
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e;
            },
            addElRole: function (e, t) {
                return e.attr("role", t), e;
            },
            addElLabel: function (e, t) {
                return e.attr("aria-label", t), e;
            },
            disableEl: function (e) {
                return e.attr("aria-disabled", !0), e;
            },
            enableEl: function (e) {
                return e.attr("aria-disabled", !1), e;
            },
            onEnterKey: function (t) {
                var a = this,
                    i = a.params.a11y;
                if (13 === t.keyCode) {
                    var s = e(t.target);
                    a.navigation && a.navigation.$nextEl && s.is(a.navigation.$nextEl) && ((a.isEnd && !a.params.loop) || a.slideNext(), a.isEnd ? a.a11y.notify(i.lastSlideMessage) : a.a11y.notify(i.nextSlideMessage)),
                        a.navigation && a.navigation.$prevEl && s.is(a.navigation.$prevEl) && ((a.isBeginning && !a.params.loop) || a.slidePrev(), a.isBeginning ? a.a11y.notify(i.firstSlideMessage) : a.a11y.notify(i.prevSlideMessage)),
                        a.pagination && s.is("." + a.params.pagination.bulletClass) && s[0].click();
                }
            },
            notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e));
            },
            updateNavigation: function () {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && a.length > 0 && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
                }
            },
            updatePagination: function () {
                var t = this,
                    a = t.params.a11y;
                t.pagination &&
                    t.params.pagination.clickable &&
                    t.pagination.bullets &&
                    t.pagination.bullets.length &&
                    t.pagination.bullets.each(function (i, s) {
                        var r = e(s);
                        t.a11y.makeElFocusable(r), t.a11y.addElRole(r, "button"), t.a11y.addElLabel(r, a.paginationBulletMessage.replace(/{{index}}/, r.index() + 1));
                    });
            },
            init: function () {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t,
                    a,
                    i = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                    e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
                    t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)),
                    a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)),
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
            },
            destroy: function () {
                var e = this;
                e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove();
                var t, a;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                    e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
                    t && t.off("keydown", e.a11y.onEnterKey),
                    a && a.off("keydown", e.a11y.onEnterKey),
                    e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
            },
        },
        se = {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !1,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                },
            },
            create: function () {
                var t = this;
                l.extend(t, { a11y: { liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }),
                    Object.keys(ie).forEach(function (e) {
                        t.a11y[e] = ie[e].bind(t);
                    });
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
                },
                toEdge: function () {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updateNavigation();
                },
                fromEdge: function () {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updateNavigation();
                },
                paginationUpdate: function () {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.updatePagination();
                },
                destroy: function () {
                    var e = this;
                    e.params.a11y.enabled && e.a11y.destroy();
                },
            },
        },
        re = {
            init: function () {
                var e = this;
                if (e.params.history) {
                    if (!s.history || !s.history.pushState) return (e.params.history.enabled = !1), void (e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    (t.initialized = !0),
                        (t.paths = re.getPathValues()),
                        (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || s.addEventListener("popstate", e.history.setHistoryPopState));
                }
            },
            destroy: function () {
                var e = this;
                e.params.history.replaceState || s.removeEventListener("popstate", e.history.setHistoryPopState);
            },
            setHistoryPopState: function () {
                var e = this;
                (e.history.paths = re.getPathValues()), e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
            },
            getPathValues: function () {
                var e = s.location.pathname
                        .slice(1)
                        .split("/")
                        .filter(function (e) {
                            return "" !== e;
                        }),
                    t = e.length;
                return { key: e[t - 2], value: e[t - 1] };
            },
            setHistory: function (e, t) {
                var a = this;
                if (a.history.initialized && a.params.history.enabled) {
                    var i = a.slides.eq(t),
                        r = re.slugify(i.attr("data-history"));
                    s.location.pathname.includes(e) || (r = e + "/" + r);
                    var n = s.history.state;
                    (n && n.value === r) || (a.params.history.replaceState ? s.history.replaceState({ value: r }, null, r) : s.history.pushState({ value: r }, null, r));
                }
            },
            slugify: function (e) {
                return e
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]+/g, "")
                    .replace(/--+/g, "-")
                    .replace(/^-+/, "")
                    .replace(/-+$/, "");
            },
            scrollToSlide: function (e, t, a) {
                var i = this;
                if (t)
                    for (var s = 0, r = i.slides.length; s < r; s += 1) {
                        var n = i.slides.eq(s);
                        if (re.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                            var o = n.index();
                            i.slideTo(o, e, a);
                        }
                    }
                else i.slideTo(0, e, a);
            },
        },
        ne = {
            name: "history",
            params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
            create: function () {
                var e = this;
                l.extend(e, { history: { init: re.init.bind(e), setHistory: re.setHistory.bind(e), setHistoryPopState: re.setHistoryPopState.bind(e), scrollToSlide: re.scrollToSlide.bind(e), destroy: re.destroy.bind(e) } });
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.history.enabled && e.history.init();
                },
                destroy: function () {
                    var e = this;
                    e.params.history.enabled && e.history.destroy();
                },
                transitionEnd: function () {
                    var e = this;
                    e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
                },
            },
        },
        oe = {
            onHashCange: function () {
                var e = this,
                    t = d.location.hash.replace("#", "");
                t !== e.slides.eq(e.activeIndex).attr("data-hash") && e.slideTo(e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index());
            },
            setHash: function () {
                var e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && s.history && s.history.replaceState) s.history.replaceState(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                    else {
                        var t = e.slides.eq(e.activeIndex),
                            a = t.attr("data-hash") || t.attr("data-history");
                        d.location.hash = a || "";
                    }
            },
            init: function () {
                var t = this;
                if (!(!t.params.hashNavigation.enabled || (t.params.history && t.params.history.enabled))) {
                    t.hashNavigation.initialized = !0;
                    var a = d.location.hash.replace("#", "");
                    if (a)
                        for (var i = 0, r = t.slides.length; i < r; i += 1) {
                            var n = t.slides.eq(i);
                            if ((n.attr("data-hash") || n.attr("data-history")) === a && !n.hasClass(t.params.slideDuplicateClass)) {
                                var o = n.index();
                                t.slideTo(o, 0, t.params.runCallbacksOnInit, !0);
                            }
                        }
                    t.params.hashNavigation.watchState && e(s).on("hashchange", t.hashNavigation.onHashCange);
                }
            },
            destroy: function () {
                var t = this;
                t.params.hashNavigation.watchState && e(s).off("hashchange", t.hashNavigation.onHashCange);
            },
        },
        le = {
            name: "hash-navigation",
            params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
            create: function () {
                var e = this;
                l.extend(e, { hashNavigation: { initialized: !1, init: oe.init.bind(e), destroy: oe.destroy.bind(e), setHash: oe.setHash.bind(e), onHashCange: oe.onHashCange.bind(e) } });
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.init();
                },
                destroy: function () {
                    var e = this;
                    e.params.hashNavigation.enabled && e.hashNavigation.destroy();
                },
                transitionEnd: function () {
                    var e = this;
                    e.hashNavigation.initialized && e.hashNavigation.setHash();
                },
            },
        },
        de = {
            run: function () {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    a = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                    (e.autoplay.timeout = l.nextTick(function () {
                        e.params.loop
                            ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                            : e.isEnd
                            ? e.params.autoplay.stopOnLastSlide
                                ? e.autoplay.stop()
                                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                            : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
                    }, a));
            },
            start: function () {
                var e = this;
                return void 0 === e.autoplay.timeout && !e.autoplay.running && ((e.autoplay.running = !0), e.emit("autoplayStart"), e.autoplay.run(), !0);
            },
            stop: function () {
                var e = this;
                return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)), (e.autoplay.running = !1), e.emit("autoplayStop"), !0);
            },
            pause: function (e) {
                var t = this;
                t.autoplay.running &&
                    (t.autoplay.paused ||
                        (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                        (t.autoplay.paused = !0),
                        0 === e
                            ? ((t.autoplay.paused = !1), t.autoplay.run())
                            : t.$wrapperEl.transitionEnd(function () {
                                  t && !t.destroyed && ((t.autoplay.paused = !1), t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
                              })));
            },
        },
        pe = {
            name: "autoplay",
            params: { autoplay: { enabled: !1, delay: 3e3, disableOnInteraction: !0, stopOnLastSlide: !1 } },
            create: function () {
                var e = this;
                l.extend(e, { autoplay: { running: !1, paused: !1, run: de.run.bind(e), start: de.start.bind(e), stop: de.stop.bind(e), pause: de.pause.bind(e) } });
            },
            on: {
                init: function () {
                    var e = this;
                    e.params.autoplay.enabled && e.autoplay.start();
                },
                beforeTransitionStart: function (e, t) {
                    var a = this;
                    a.autoplay.running && (t || !a.params.autoplay.disableOnInteraction ? a.autoplay.pause(e) : a.autoplay.stop());
                },
                sliderFirstMove: function () {
                    var e = this;
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
                },
                destroy: function () {
                    var e = this;
                    e.autoplay.running && e.autoplay.stop();
                },
            },
        },
        ce = {
            setTranslate: function () {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                    var i = e.slides.eq(a),
                        s = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    var r = 0;
                    e.isHorizontal() || ((r = s), (s = 0));
                    var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({ opacity: n }).transform("translate3d(" + s + "px, " + r + "px, 0px)");
                }
            },
            setTransition: function (e) {
                var t = this,
                    a = t.slides,
                    i = t.$wrapperEl;
                if ((a.transition(e), t.params.virtualTranslate && 0 !== e)) {
                    var s = !1;
                    a.transitionEnd(function () {
                        if (!s && t && !t.destroyed) {
                            (s = !0), (t.animating = !1);
                            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) i.trigger(e[a]);
                        }
                    });
                }
            },
        },
        ue = {
            name: "effect-fade",
            params: { fadeEffect: { crossFade: !1 } },
            create: function () {
                var e = this;
                l.extend(e, { fadeEffect: { setTranslate: ce.setTranslate.bind(e), setTransition: ce.setTransition.bind(e) } });
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        l.extend(e.params, t), l.extend(e.originalParams, t);
                    }
                },
                setTranslate: function () {
                    var e = this;
                    "fade" === e.params.effect && e.fadeEffect.setTranslate();
                },
                setTransition: function (e) {
                    var t = this;
                    "fade" === t.params.effect && t.fadeEffect.setTransition(e);
                },
            },
        },
        he = {
            setTranslate: function () {
                var t,
                    a = this,
                    i = a.$el,
                    s = a.$wrapperEl,
                    r = a.slides,
                    n = a.width,
                    o = a.height,
                    l = a.rtl,
                    d = a.size,
                    p = a.params.cubeEffect,
                    c = a.isHorizontal(),
                    u = a.virtual && a.params.virtual.enabled,
                    h = 0;
                p.shadow &&
                    (c
                        ? (0 === (t = s.find(".swiper-cube-shadow")).length && ((t = e('<div class="swiper-cube-shadow"></div>')), s.append(t)), t.css({ height: n + "px" }))
                        : 0 === (t = i.find(".swiper-cube-shadow")).length && ((t = e('<div class="swiper-cube-shadow"></div>')), i.append(t)));
                for (var v = 0; v < r.length; v += 1) {
                    var f = r.eq(v),
                        g = v;
                    u && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
                    var b = 90 * g,
                        w = Math.floor(b / 360);
                    l && ((b = -b), (w = Math.floor(-b / 360)));
                    var y = Math.max(Math.min(f[0].progress, 1), -1),
                        x = 0,
                        T = 0,
                        E = 0;
                    g % 4 == 0 ? ((x = 4 * -w * d), (E = 0)) : (g - 1) % 4 == 0 ? ((x = 0), (E = 4 * -w * d)) : (g - 2) % 4 == 0 ? ((x = d + 4 * w * d), (E = d)) : (g - 3) % 4 == 0 && ((x = -d), (E = 3 * d + 4 * d * w)),
                        l && (x = -x),
                        c || ((T = x), (x = 0));
                    var S = "rotateX(" + (c ? 0 : -b) + "deg) rotateY(" + (c ? b : 0) + "deg) translate3d(" + x + "px, " + T + "px, " + E + "px)";
                    if ((y <= 1 && y > -1 && ((h = 90 * g + 90 * y), l && (h = 90 * -g - 90 * y)), f.transform(S), p.slideShadows)) {
                        var C = c ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            M = c ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === C.length && ((C = e('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>')), f.append(C)),
                            0 === M.length && ((M = e('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>')), f.append(M)),
                            C.length && (C[0].style.opacity = Math.max(-y, 0)),
                            M.length && (M[0].style.opacity = Math.max(y, 0));
                    }
                }
                if (
                    (s.css({ "-webkit-transform-origin": "50% 50% -" + d / 2 + "px", "-moz-transform-origin": "50% 50% -" + d / 2 + "px", "-ms-transform-origin": "50% 50% -" + d / 2 + "px", "transform-origin": "50% 50% -" + d / 2 + "px" }),
                    p.shadow)
                )
                    if (c) t.transform("translate3d(0px, " + (n / 2 + p.shadowOffset) + "px, " + -n / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");
                    else {
                        var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                            P = 1.5 - (Math.sin((2 * z * Math.PI) / 360) / 2 + Math.cos((2 * z * Math.PI) / 360) / 2),
                            k = p.shadowScale,
                            $ = p.shadowScale / P,
                            I = p.shadowOffset;
                        t.transform("scale3d(" + k + ", 1, " + $ + ") translate3d(0px, " + (o / 2 + I) + "px, " + -o / 2 / $ + "px) rotateX(-90deg)");
                    }
                var L = m.isSafari || m.isUiWebView ? -d / 2 : 0;
                s.transform("translate3d(0px,0," + L + "px) rotateX(" + (a.isHorizontal() ? 0 : h) + "deg) rotateY(" + (a.isHorizontal() ? -h : 0) + "deg)");
            },
            setTransition: function (e) {
                var t = this,
                    a = t.$el;
                t.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                    t.params.cubeEffect.shadow && !t.isHorizontal() && a.find(".swiper-cube-shadow").transition(e);
            },
        },
        ve = {
            name: "effect-cube",
            params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
            create: function () {
                var e = this;
                l.extend(e, { cubeEffect: { setTranslate: he.setTranslate.bind(e), setTransition: he.setTransition.bind(e) } });
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 };
                        l.extend(e.params, t), l.extend(e.originalParams, t);
                    }
                },
                setTranslate: function () {
                    var e = this;
                    "cube" === e.params.effect && e.cubeEffect.setTranslate();
                },
                setTransition: function (e) {
                    var t = this;
                    "cube" === t.params.effect && t.cubeEffect.setTransition(e);
                },
            },
        },
        fe = {
            setTranslate: function () {
                for (var t = this, a = t.slides, i = 0; i < a.length; i += 1) {
                    var s = a.eq(i),
                        r = s[0].progress;
                    t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -s[0].swiperSlideOffset,
                        d = 0;
                    if ((t.isHorizontal() ? t.rtl && (n = -n) : ((d = l), (l = 0), (o = -n), (n = 0)), (s[0].style.zIndex = -Math.abs(Math.round(r)) + a.length), t.params.flipEffect.slideShadows)) {
                        var p = t.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            c = t.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === p.length && ((p = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "left" : "top") + '"></div>')), s.append(p)),
                            0 === c.length && ((c = e('<div class="swiper-slide-shadow-' + (t.isHorizontal() ? "right" : "bottom") + '"></div>')), s.append(c)),
                            p.length && (p[0].style.opacity = Math.max(-r, 0)),
                            c.length && (c[0].style.opacity = Math.max(r, 0));
                    }
                    s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)");
                }
            },
            setTransition: function (e) {
                var t = this,
                    a = t.slides,
                    i = t.activeIndex,
                    s = t.$wrapperEl;
                if ((a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e)) {
                    var r = !1;
                    a.eq(i).transitionEnd(function () {
                        if (!r && t && !t.destroyed) {
                            (r = !0), (t.animating = !1);
                            for (var e = ["webkitTransitionEnd", "transitionend"], a = 0; a < e.length; a += 1) s.trigger(e[a]);
                        }
                    });
                }
            },
        },
        me = {
            name: "effect-flip",
            params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
            create: function () {
                var e = this;
                l.extend(e, { flipEffect: { setTranslate: fe.setTranslate.bind(e), setTransition: fe.setTransition.bind(e) } });
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 };
                        l.extend(e.params, t), l.extend(e.originalParams, t);
                    }
                },
                setTranslate: function () {
                    var e = this;
                    "flip" === e.params.effect && e.flipEffect.setTranslate();
                },
                setTransition: function (e) {
                    var t = this;
                    "flip" === t.params.effect && t.flipEffect.setTransition(e);
                },
            },
        },
        ge = {
            setTranslate: function () {
                for (
                    var t = this,
                        a = t.width,
                        i = t.height,
                        s = t.slides,
                        r = t.$wrapperEl,
                        n = t.slidesSizesGrid,
                        o = t.params.coverflowEffect,
                        l = t.isHorizontal(),
                        d = t.translate,
                        p = l ? a / 2 - d : i / 2 - d,
                        c = l ? o.rotate : -o.rotate,
                        u = o.depth,
                        h = 0,
                        v = s.length;
                    h < v;
                    h += 1
                ) {
                    var f = s.eq(h),
                        g = n[h],
                        b = ((p - f[0].swiperSlideOffset - g / 2) / g) * o.modifier,
                        w = l ? c * b : 0,
                        y = l ? 0 : c * b,
                        x = -u * Math.abs(b),
                        T = l ? 0 : o.stretch * b,
                        E = l ? o.stretch * b : 0;
                    Math.abs(E) < 0.001 && (E = 0), Math.abs(T) < 0.001 && (T = 0), Math.abs(x) < 0.001 && (x = 0), Math.abs(w) < 0.001 && (w = 0), Math.abs(y) < 0.001 && (y = 0);
                    var S = "translate3d(" + E + "px," + T + "px," + x + "px)  rotateX(" + y + "deg) rotateY(" + w + "deg)";
                    if ((f.transform(S), (f[0].style.zIndex = 1 - Math.abs(Math.round(b))), o.slideShadows)) {
                        var C = l ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            M = l ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === C.length && ((C = e('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>')), f.append(C)),
                            0 === M.length && ((M = e('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>')), f.append(M)),
                            C.length && (C[0].style.opacity = b > 0 ? b : 0),
                            M.length && (M[0].style.opacity = -b > 0 ? -b : 0);
                    }
                }
                m.ie && (r[0].style.perspectiveOrigin = p + "px 50%");
            },
            setTransition: function (e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
            },
        },
        be = {
            name: "effect-coverflow",
            params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } },
            create: function () {
                var e = this;
                l.extend(e, { coverflowEffect: { setTranslate: ge.setTranslate.bind(e), setTransition: ge.setTransition.bind(e) } });
            },
            on: {
                beforeInit: function () {
                    var e = this;
                    "coverflow" === e.params.effect &&
                        (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), (e.params.watchSlidesProgress = !0), (e.originalParams.watchSlidesProgress = !0));
                },
                setTranslate: function () {
                    var e = this;
                    "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
                },
                setTransition: function (e) {
                    var t = this;
                    "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e);
                },
            },
        };
    return $.use([I, L, D, O, H, X, G, V, W, j, K, _, Q, ee, ae, se, ne, le, pe, ue, ve, me, be]), $;
});
//# sourceMappingURL=swiper.min.js.map

/* 7.
 * Midnight.js 1.1.1
 * jQuery plugin to switch between multiple fixed header designs on the fly, so it looks in line with the content below it.
 * http://aerolab.github.io/midnight.js/
 *
 * Copyright (c) 2014 Aerolab <info@aerolab.co>
 *
 * Released under the MIT license
 * http://aerolab.github.io/midnight.js/LICENSE.txt
 */
!(function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
    var e = 0,
        s = Array.prototype.slice;
    (t.cleanData = (function (e) {
        return function (s) {
            var i, n, o;
            for (o = 0; null != (n = s[o]); o++)
                try {
                    (i = t._data(n, "events")), i && i.remove && t(n).triggerHandler("remove");
                } catch (r) {}
            e(s);
        };
    })(t.cleanData)),
        (t.widget = function (e, s, i) {
            var n,
                o,
                r,
                a,
                h = {},
                d = e.split(".")[0];
            return (
                (e = e.split(".")[1]),
                (n = d + "-" + e),
                i || ((i = s), (s = t.Widget)),
                (t.expr[":"][n.toLowerCase()] = function (e) {
                    return !!t.data(e, n);
                }),
                (t[d] = t[d] || {}),
                (o = t[d][e]),
                (r = t[d][e] = function (t, e) {
                    return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new r(t, e);
                }),
                t.extend(r, o, { version: i.version, _proto: t.extend({}, i), _childConstructors: [] }),
                (a = new s()),
                (a.options = t.widget.extend({}, a.options)),
                t.each(i, function (e, i) {
                    return t.isFunction(i)
                        ? void (h[e] = (function () {
                              var t = function () {
                                      return s.prototype[e].apply(this, arguments);
                                  },
                                  n = function (t) {
                                      return s.prototype[e].apply(this, t);
                                  };
                              return function () {
                                  var e,
                                      s = this._super,
                                      o = this._superApply;
                                  return (this._super = t), (this._superApply = n), (e = i.apply(this, arguments)), (this._super = s), (this._superApply = o), e;
                              };
                          })())
                        : void (h[e] = i);
                }),
                (r.prototype = t.widget.extend(a, { widgetEventPrefix: o ? a.widgetEventPrefix || e : e }, h, { constructor: r, namespace: d, widgetName: e, widgetFullName: n })),
                o
                    ? (t.each(o._childConstructors, function (e, s) {
                          var i = s.prototype;
                          t.widget(i.namespace + "." + i.widgetName, r, s._proto);
                      }),
                      delete o._childConstructors)
                    : s._childConstructors.push(r),
                t.widget.bridge(e, r),
                r
            );
        }),
        (t.widget.extend = function (e) {
            for (var i, n, o = s.call(arguments, 1), r = 0, a = o.length; a > r; r++)
                for (i in o[r]) (n = o[r][i]), o[r].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? (t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n)) : n);
            return e;
        }),
        (t.widget.bridge = function (e, i) {
            var n = i.prototype.widgetFullName || e;
            t.fn[e] = function (o) {
                var r = "string" == typeof o,
                    a = s.call(arguments, 1),
                    h = this;
                return (
                    (o = !r && a.length ? t.widget.extend.apply(null, [o].concat(a)) : o),
                    r
                        ? this.each(function () {
                              var s,
                                  i = t.data(this, n);
                              return "instance" === o
                                  ? ((h = i), !1)
                                  : i
                                  ? t.isFunction(i[o]) && "_" !== o.charAt(0)
                                      ? ((s = i[o].apply(i, a)), s !== i && void 0 !== s ? ((h = s && s.jquery ? h.pushStack(s.get()) : s), !1) : void 0)
                                      : t.error("no such method '" + o + "' for " + e + " widget instance")
                                  : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'");
                          })
                        : this.each(function () {
                              var e = t.data(this, n);
                              e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new i(o, this));
                          }),
                    h
                );
            };
        }),
        (t.Widget = function () {}),
        (t.Widget._childConstructors = []),
        (t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: { disabled: !1, create: null },
            _createWidget: function (s, i) {
                (i = t(i || this.defaultElement || this)[0]),
                    (this.element = t(i)),
                    (this.uuid = e++),
                    (this.eventNamespace = "." + this.widgetName + this.uuid),
                    (this.bindings = t()),
                    (this.hoverable = t()),
                    (this.focusable = t()),
                    i !== this &&
                        (t.data(i, this.widgetFullName, this),
                        this._on(!0, this.element, {
                            remove: function (t) {
                                t.target === i && this.destroy();
                            },
                        }),
                        (this.document = t(i.style ? i.ownerDocument : i.document || i)),
                        (this.window = t(this.document[0].defaultView || this.document[0].parentWindow))),
                    (this.options = t.widget.extend({}, this.options, this._getCreateOptions(), s)),
                    this._create(),
                    this._trigger("create", null, this._getCreateEventData()),
                    this._init();
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function () {
                this._destroy(),
                    this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),
                    this.widget()
                        .unbind(this.eventNamespace)
                        .removeAttr("aria-disabled")
                        .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
                    this.bindings.unbind(this.eventNamespace),
                    this.hoverable.removeClass("ui-state-hover"),
                    this.focusable.removeClass("ui-state-focus");
            },
            _destroy: t.noop,
            widget: function () {
                return this.element;
            },
            option: function (e, s) {
                var i,
                    n,
                    o,
                    r = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (((r = {}), (i = e.split(".")), (e = i.shift()), i.length)) {
                        for (n = r[e] = t.widget.extend({}, this.options[e]), o = 0; i.length - 1 > o; o++) (n[i[o]] = n[i[o]] || {}), (n = n[i[o]]);
                        if (((e = i.pop()), 1 === arguments.length)) return void 0 === n[e] ? null : n[e];
                        n[e] = s;
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        r[e] = s;
                    }
                return this._setOptions(r), this;
            },
            _setOptions: function (t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this;
            },
            _setOption: function (t, e) {
                return (this.options[t] = e), "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this;
            },
            enable: function () {
                return this._setOptions({ disabled: !1 });
            },
            disable: function () {
                return this._setOptions({ disabled: !0 });
            },
            _on: function (e, s, i) {
                var n,
                    o = this;
                "boolean" != typeof e && ((i = s), (s = e), (e = !1)),
                    i ? ((s = n = t(s)), (this.bindings = this.bindings.add(s))) : ((i = s), (s = this.element), (n = this.widget())),
                    t.each(i, function (i, r) {
                        function a() {
                            return e || (o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled")) ? ("string" == typeof r ? o[r] : r).apply(o, arguments) : void 0;
                        }
                        "string" != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
                        var h = i.match(/^([\w:-]*)\s*(.*)$/),
                            d = h[1] + o.eventNamespace,
                            l = h[2];
                        l ? n.delegate(l, d, a) : s.bind(d, a);
                    });
            },
            _off: function (e, s) {
                (s = (s || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace),
                    e.unbind(s).undelegate(s),
                    (this.bindings = t(this.bindings.not(e).get())),
                    (this.focusable = t(this.focusable.not(e).get())),
                    (this.hoverable = t(this.hoverable.not(e).get()));
            },
            _delay: function (t, e) {
                function s() {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments);
                }
                var i = this;
                return setTimeout(s, e || 0);
            },
            _hoverable: function (e) {
                (this.hoverable = this.hoverable.add(e)),
                    this._on(e, {
                        mouseenter: function (e) {
                            t(e.currentTarget).addClass("ui-state-hover");
                        },
                        mouseleave: function (e) {
                            t(e.currentTarget).removeClass("ui-state-hover");
                        },
                    });
            },
            _focusable: function (e) {
                (this.focusable = this.focusable.add(e)),
                    this._on(e, {
                        focusin: function (e) {
                            t(e.currentTarget).addClass("ui-state-focus");
                        },
                        focusout: function (e) {
                            t(e.currentTarget).removeClass("ui-state-focus");
                        },
                    });
            },
            _trigger: function (e, s, i) {
                var n,
                    o,
                    r = this.options[e];
                if (((i = i || {}), (s = t.Event(s)), (s.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase()), (s.target = this.element[0]), (o = s.originalEvent))) for (n in o) n in s || (s[n] = o[n]);
                return this.element.trigger(s, i), !((t.isFunction(r) && r.apply(this.element[0], [s].concat(i)) === !1) || s.isDefaultPrevented());
            },
        }),
        t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, s) {
            t.Widget.prototype["_" + e] = function (i, n, o) {
                "string" == typeof n && (n = { effect: n });
                var r,
                    a = n ? (n === !0 || "number" == typeof n ? s : n.effect || s) : e;
                (n = n || {}),
                    "number" == typeof n && (n = { duration: n }),
                    (r = !t.isEmptyObject(n)),
                    (n.complete = o),
                    n.delay && i.delay(n.delay),
                    r && t.effects && t.effects.effect[a]
                        ? i[e](n)
                        : a !== e && i[a]
                        ? i[a](n.duration, n.easing, o)
                        : i.queue(function (s) {
                              t(this)[e](), o && o.call(i[0]), s();
                          });
            };
        }),
        t.widget;
}),
    (function (t) {
        "use strict";
        t.widget("aerolab.midnight", {
            options: { headerClass: "midnightHeader", innerClass: "midnightInner", defaultClass: "default", classPrefix: "", sectionSelector: "midnight" },
            _headers: {},
            _headerInfo: { top: 0, height: 0 },
            _$sections: [],
            _sections: [],
            _scrollTop: 0,
            _documentHeight: 0,
            _transformMode: !1,
            refresh: function () {
                (this._headerInfo = { top: 0, height: this.element.outerHeight() }), (this._$sections = t("[data-" + this.options.sectionSelector + "]:not(:hidden)")), (this._sections = []), this._setupHeaders(), this.recalculate();
            },
            _create: function () {
                var e = this;
                (this._scrollTop = window.pageYOffset || document.documentElement.scrollTop),
                    (this._documentHeight = t(document).height()),
                    (this._headers = {}),
                    (this._transformMode = this._getSupportedTransform()),
                    this.refresh(),
                    setInterval(function () {
                        e._recalculateSections();
                    }, 1e3),
                    e.recalculate(),
                    t(window).resize(function () {
                        e.recalculate();
                    }),
                    this._updateHeadersLoop();
            },
            recalculate: function () {
                this._recalculateSections(), this._updateHeaderHeight(), this._recalculateHeaders(), this._updateHeaders();
            },
            _getSupportedTransform: function () {
                for (var t = ["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"], e = 0; e < t.length; e++) if (void 0 !== document.createElement("div").style[t[e]]) return t[e];
                return !1;
            },
            _getContainerHeight: function () {
                var e = this.element.find("> ." + this.options.headerClass),
                    s = 0,
                    i = 0,
                    n = this;
                return (
                    e.length
                        ? e.each(function () {
                              var e = t(this),
                                  o = e.find("> ." + n.options.innerClass);
                              o.length ? (o.css("bottom", "auto").css("overflow", "auto"), (i = o.outerHeight()), o.css("bottom", "0")) : (e.css("bottom", "auto"), (i = e.outerHeight()), e.css("bottom", "0")), (s = i > s ? i : s);
                          })
                        : (s = i = this.element.outerHeight()),
                    s
                );
            },
            _setupHeaders: function () {
                var e = this;
                this._headers[this.options.defaultClass] = {};
                for (var s = 0; s < this._$sections.length; s++) {
                    var i = t(this._$sections[s]),
                        n = i.data(this.options.sectionSelector);
                    "string" == typeof n && ((n = n.trim()), "" !== n && (e._headers[n] = {}));
                }
                ({ top: this.element.css("padding-top"), right: this.element.css("padding-right"), bottom: this.element.css("padding-bottom"), left: this.element.css("padding-left") });
                this.element.css({ position: "fixed", top: 0, left: 0, right: 0, overflow: "hidden" }), this._updateHeaderHeight();
                var o = this.element.find("> ." + this.options.headerClass);
                o.length
                    ? o.filter("." + this.options.defaultClass).length ||
                      o
                          .filter("." + this.options.headerClass + ":first")
                          .clone(!0, !0)
                          .attr("class", this.options.headerClass + " " + this.options.defaultClass)
                    : this.element.wrapInner('<div class="' + this.options.headerClass + " " + this.options.defaultClass + '"></div>');
                var o = this.element.find("> ." + this.options.headerClass),
                    r = o.filter("." + this.options.defaultClass).clone(!0, !0);
                for (var n in this._headers)
                    if (this._headers.hasOwnProperty(n) && "undefined" == typeof this._headers[n].element) {
                        var a = o.filter("." + n);
                        a.length ? (this._headers[n].element = a) : (this._headers[n].element = r.clone(!0, !0).removeClass(this.options.defaultClass).addClass(n).appendTo(this.element));
                        var h = { position: "absolute", overflow: "hidden", top: 0, left: 0, right: 0, bottom: 0 };
                        this._headers[n].element.css(h),
                            this._transformMode !== !1 && this._headers[n].element.css(this._transformMode, "translateZ(0)"),
                            this._headers[n].element.find("> ." + this.options.innerClass).length || this._headers[n].element.wrapInner('<div class="' + this.options.innerClass + '"></div>'),
                            (this._headers[n].inner = this._headers[n].element.find("> ." + this.options.innerClass)),
                            this._headers[n].inner.css(h),
                            this._transformMode !== !1 && this._headers[n].inner.css(this._transformMode, "translateZ(0)"),
                            (this._headers[n].from = ""),
                            (this._headers[n].progress = 0);
                    }
                o.each(function () {
                    var s = t(this),
                        i = !1;
                    for (var n in e._headers) e._headers.hasOwnProperty(n) && s.hasClass(n) && (i = !0);
                    s.find("> ." + e.options.innerClass).length || s.wrapInner('<div class="' + e.options.innerClass + '"></div>'), i ? s.show() : s.hide();
                });
            },
            _recalculateHeaders: function () {
                (this._scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop), (this._scrollTop = Math.max(this._scrollTop, 0)), (this._scrollTop = Math.min(this._scrollTop, this._documentHeight));
                var t = this._headerInfo.height,
                    e = this._scrollTop + this._headerInfo.top,
                    s = e + t;
                if ("function" == typeof window.getComputedStyle) {
                    var i = window.getComputedStyle(this.element[0], null),
                        n = 0,
                        o = 0;
                    if (this._transformMode !== !1 && "string" == typeof i.transform) {
                        var r = i.transform.match(/(-?[0-9\.]+)/g);
                        null !== r && r.length >= 6 && !isNaN(parseFloat(r[5])) && (o = parseFloat(r[5]));
                    }
                    i.top.indexOf("px") >= 0 && !isNaN(parseFloat(i.top)) && (n = parseFloat(i.top)), (e += n + o), (s += n + o);
                }
                for (var a in this._headers) this._headers.hasOwnProperty(a) && ((this._headers[a].from = ""), (this._headers[a].progress = 0));
                for (var h = 0; h < this._sections.length; h++)
                    s >= this._sections[h].start &&
                        e <= this._sections[h].end &&
                        ((this._headers[this._sections[h].className].visible = !0),
                        e >= this._sections[h].start && s <= this._sections[h].end
                            ? ((this._headers[this._sections[h].className].from = "top"), (this._headers[this._sections[h].className].progress += 1))
                            : s > this._sections[h].end && e < this._sections[h].end
                            ? ((this._headers[this._sections[h].className].from = "top"), (this._headers[this._sections[h].className].progress = 1 - (s - this._sections[h].end) / t))
                            : s > this._sections[h].start &&
                              e < this._sections[h].start &&
                              ("top" === this._headers[this._sections[h].className].from
                                  ? (this._headers[this._sections[h].className].progress += (s - this._sections[h].start) / t)
                                  : ((this._headers[this._sections[h].className].from = "bottom"), (this._headers[this._sections[h].className].progress = (s - this._sections[h].start) / t))));
            },
            _updateHeaders: function () {
                if ("undefined" != typeof this._headers[this.options.defaultClass]) {
                    var t = 0,
                        e = "";
                    for (var s in this._headers) this._headers.hasOwnProperty(s) && "" !== !this._headers[s].from && ((t += this._headers[s].progress), (e = s));
                    t < 1 &&
                        ("" === this._headers[this.options.defaultClass].from
                            ? ((this._headers[this.options.defaultClass].from = "top" === this._headers[e].from ? "bottom" : "top"), (this._headers[this.options.defaultClass].progress = 1 - t))
                            : (this._headers[this.options.defaultClass].progress += 1 - t));
                    for (var i in this._headers)
                        if (this._headers.hasOwnProperty(i) && "" !== !this._headers[i].from) {
                            var n = 100 * (1 - this._headers[i].progress);
                            n >= 100 && (n = 110),
                                n <= -100 && (n = -110),
                                "top" === this._headers[i].from
                                    ? this._transformMode !== !1
                                        ? ((this._headers[i].element[0].style[this._transformMode] = "translateY(-" + n + "%) translateZ(0)"), (this._headers[i].inner[0].style[this._transformMode] = "translateY(+" + n + "%) translateZ(0)"))
                                        : ((this._headers[i].element[0].style.top = "-" + n + "%"), (this._headers[i].inner[0].style.top = "+" + n + "%"))
                                    : this._transformMode !== !1
                                    ? ((this._headers[i].element[0].style[this._transformMode] = "translateY(+" + n + "%) translateZ(0)"), (this._headers[i].inner[0].style[this._transformMode] = "translateY(-" + n + "%) translateZ(0)"))
                                    : ((this._headers[i].element[0].style.top = "+" + n + "%"), (this._headers[i].inner[0].style.top = "-" + n + "%"));
                        }
                }
            },
            _recalculateSections: function () {
                (this._documentHeight = t(document).height()), (this._sections = []);
                for (var e = 0; e < this._$sections.length; e++) {
                    var s = t(this._$sections[e]);
                    this._sections.push({ element: s, className: s.data(this.options.sectionSelector), start: s.offset().top, end: s.offset().top + s.outerHeight() });
                }
            },
            _updateHeaderHeight: function () {
                (this._headerInfo.height = this._getContainerHeight()), this.element.css("height", this._headerInfo.height + "px");
            },
            _updateHeadersLoop: function () {
                var t = this;
                this._requestAnimationFrame(function () {
                    t._updateHeadersLoop();
                }),
                    this._recalculateHeaders(),
                    this._updateHeaders();
            },
            _requestAnimationFrame: function (t) {
                var e =
                    e ||
                    (function () {
                        return (
                            window.requestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            function (t) {
                                window.setTimeout(t, 1e3 / 60);
                            }
                        );
                    })();
                e(t);
            },
        });
    })(jQuery);

/* 8.
 * headroom.js v0.9.4 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */
!(function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? (module.exports = b()) : (a.Headroom = b());
})(this, function () {
    "use strict";
    function a(a) {
        (this.callback = a), (this.ticking = !1);
    }
    function b(a) {
        return a && "undefined" != typeof window && (a === window || a.nodeType);
    }
    function c(a) {
        if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
        var d,
            e,
            f = a || {};
        for (e = 1; e < arguments.length; e++) {
            var g = arguments[e] || {};
            for (d in g) "object" != typeof f[d] || b(f[d]) ? (f[d] = f[d] || g[d]) : (f[d] = c(f[d], g[d]));
        }
        return f;
    }
    function d(a) {
        return a === Object(a) ? a : { down: a, up: a };
    }
    function e(a, b) {
        (b = c(b, e.options)),
            (this.lastKnownScrollY = 0),
            (this.elem = a),
            (this.tolerance = d(b.tolerance)),
            (this.classes = b.classes),
            (this.offset = b.offset),
            (this.scroller = b.scroller),
            (this.initialised = !1),
            (this.onPin = b.onPin),
            (this.onUnpin = b.onUnpin),
            (this.onTop = b.onTop),
            (this.onNotTop = b.onNotTop),
            (this.onBottom = b.onBottom),
            (this.onNotBottom = b.onNotBottom);
    }
    var f = { bind: !!function () {}.bind, classList: "classList" in document.documentElement, rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) };
    return (
        (window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame),
        (a.prototype = {
            constructor: a,
            update: function () {
                this.callback && this.callback(), (this.ticking = !1);
            },
            requestTick: function () {
                this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), (this.ticking = !0));
            },
            handleEvent: function () {
                this.requestTick();
            },
        }),
        (e.prototype = {
            constructor: e,
            init: function () {
                if (e.cutsTheMustard) return (this.debouncer = new a(this.update.bind(this))), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this;
            },
            destroy: function () {
                var a = this.classes;
                this.initialised = !1;
                for (var b in a) a.hasOwnProperty(b) && this.elem.classList.remove(a[b]);
                this.scroller.removeEventListener("scroll", this.debouncer, !1);
            },
            attachEvent: function () {
                this.initialised || ((this.lastKnownScrollY = this.getScrollY()), (this.initialised = !0), this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent());
            },
            unpin: function () {
                var a = this.elem.classList,
                    b = this.classes;
                (!a.contains(b.pinned) && a.contains(b.unpinned)) || (a.add(b.unpinned), a.remove(b.pinned), this.onUnpin && this.onUnpin.call(this));
            },
            pin: function () {
                var a = this.elem.classList,
                    b = this.classes;
                a.contains(b.unpinned) && (a.remove(b.unpinned), a.add(b.pinned), this.onPin && this.onPin.call(this));
            },
            top: function () {
                var a = this.elem.classList,
                    b = this.classes;
                a.contains(b.top) || (a.add(b.top), a.remove(b.notTop), this.onTop && this.onTop.call(this));
            },
            notTop: function () {
                var a = this.elem.classList,
                    b = this.classes;
                a.contains(b.notTop) || (a.add(b.notTop), a.remove(b.top), this.onNotTop && this.onNotTop.call(this));
            },
            bottom: function () {
                var a = this.elem.classList,
                    b = this.classes;
                a.contains(b.bottom) || (a.add(b.bottom), a.remove(b.notBottom), this.onBottom && this.onBottom.call(this));
            },
            notBottom: function () {
                var a = this.elem.classList,
                    b = this.classes;
                a.contains(b.notBottom) || (a.add(b.notBottom), a.remove(b.bottom), this.onNotBottom && this.onNotBottom.call(this));
            },
            getScrollY: function () {
                return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            },
            getViewportHeight: function () {
                return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            },
            getElementPhysicalHeight: function (a) {
                return Math.max(a.offsetHeight, a.clientHeight);
            },
            getScrollerPhysicalHeight: function () {
                return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller);
            },
            getDocumentHeight: function () {
                var a = document.body,
                    b = document.documentElement;
                return Math.max(a.scrollHeight, b.scrollHeight, a.offsetHeight, b.offsetHeight, a.clientHeight, b.clientHeight);
            },
            getElementHeight: function (a) {
                return Math.max(a.scrollHeight, a.offsetHeight, a.clientHeight);
            },
            getScrollerHeight: function () {
                return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
            },
            isOutOfBounds: function (a) {
                var b = a < 0,
                    c = a + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
                return b || c;
            },
            toleranceExceeded: function (a, b) {
                return Math.abs(a - this.lastKnownScrollY) >= this.tolerance[b];
            },
            shouldUnpin: function (a, b) {
                var c = a > this.lastKnownScrollY,
                    d = a >= this.offset;
                return c && d && b;
            },
            shouldPin: function (a, b) {
                var c = a < this.lastKnownScrollY,
                    d = a <= this.offset;
                return (c && b) || d;
            },
            update: function () {
                var a = this.getScrollY(),
                    b = a > this.lastKnownScrollY ? "down" : "up",
                    c = this.toleranceExceeded(a, b);
                this.isOutOfBounds(a) ||
                    (a <= this.offset ? this.top() : this.notTop(),
                    a + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(),
                    this.shouldUnpin(a, c) ? this.unpin() : this.shouldPin(a, c) && this.pin(),
                    (this.lastKnownScrollY = a));
            },
        }),
        (e.options = {
            tolerance: { up: 0, down: 0 },
            offset: 0,
            scroller: window,
            classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom", initial: "headroom" },
        }),
        (e.cutsTheMustard = "undefined" != typeof f && f.rAF && f.bind && f.classList),
        e
    );
});

!(function (o) {
    o &&
        ((o.fn.headroom = function (t) {
            return this.each(function () {
                var a = o(this),
                    e = a.data("headroom"),
                    n = "object" == typeof t && t;
                (n = o.extend(!0, {}, Headroom.options, n)), e || ((e = new Headroom(this, n)).init(), a.data("headroom", e)), "string" == typeof t && (e[t](), "destroy" === t && a.removeData("headroom"));
            });
        }),
        o("[data-headroom]").each(function () {
            var t = o(this);
            t.headroom(t.data());
        }));
})(window.Zepto || window.jQuery);

/* 9.
 * footer-reveal.js
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2014 Iain Andrew
 * https://github.com/IainAndrew
 */
!(function (a) {
    a.fn.footerReveal = function (b) {
        var c = a(this),
            d = c.prev(),
            e = a(window),
            f = a.extend({ shadow: !0, shadowOpacity: 0.8, zIndex: -100 }, b);
        a.extend(!0, {}, f, b);
        return (
            c.outerHeight() <= e.outerHeight() &&
                c.offset().top >= e.outerHeight() &&
                (c.css({ "z-index": f.zIndex, position: "fixed", bottom: 0 }),
                f.shadow &&
                    d.css({
                        "-moz-box-shadow": "0 20px 30px -20px rgba(0,0,0," + f.shadowOpacity + ")",
                        "-webkit-box-shadow": "0 20px 30px -20px rgba(0,0,0," + f.shadowOpacity + ")",
                        "box-shadow": "0 20px 30px -20px rgba(0,0,0," + f.shadowOpacity + ")",
                    }),
                e.on("load resize footerRevealResize", function () {
                    c.css({ width: d.outerWidth() }), d.css({ "margin-bottom": c.outerHeight() });
                })),
            this
        );
    };
})(jQuery);

/* 10.
 * Isotope PACKAGED v3.0.6
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy */
!(function (t, e) {
    "function" == typeof define && define.amd
        ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
              return e(t, i);
          })
        : "object" == typeof module && module.exports
        ? (module.exports = e(t, require("jquery")))
        : (t.jQueryBridget = e(t, t.jQuery));
})(window, function (t, e) {
    "use strict";
    function i(i, s, a) {
        function u(t, e, o) {
            var n,
                s = "$()." + i + '("' + e + '")';
            return (
                t.each(function (t, u) {
                    var h = a.data(u, i);
                    if (!h) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                    var d = h[e];
                    if (!d || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                    var l = d.apply(h, o);
                    n = void 0 === n ? l : n;
                }),
                void 0 !== n ? n : t
            );
        }
        function h(t, e) {
            t.each(function (t, o) {
                var n = a.data(o, i);
                n ? (n.option(e), n._init()) : ((n = new s(o, e)), a.data(o, i, n));
            });
        }
        (a = a || e || t.jQuery),
            a &&
                (s.prototype.option ||
                    (s.prototype.option = function (t) {
                        a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
                    }),
                (a.fn[i] = function (t) {
                    if ("string" == typeof t) {
                        var e = n.call(arguments, 1);
                        return u(this, t, e);
                    }
                    return h(this, t), this;
                }),
                o(a));
    }
    function o(t) {
        !t || (t && t.bridget) || (t.bridget = i);
    }
    var n = Array.prototype.slice,
        s = t.console,
        r =
            "undefined" == typeof s
                ? function () {}
                : function (t) {
                      s.error(t);
                  };
    return o(e || t.jQuery), i;
}),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.EvEmitter = e());
    })("undefined" != typeof window ? window : this, function () {
        function t() {}
        var e = t.prototype;
        return (
            (e.on = function (t, e) {
                if (t && e) {
                    var i = (this._events = this._events || {}),
                        o = (i[t] = i[t] || []);
                    return o.indexOf(e) == -1 && o.push(e), this;
                }
            }),
            (e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);
                    var i = (this._onceEvents = this._onceEvents || {}),
                        o = (i[t] = i[t] || {});
                    return (o[e] = !0), this;
                }
            }),
            (e.off = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    var o = i.indexOf(e);
                    return o != -1 && i.splice(o, 1), this;
                }
            }),
            (e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];
                if (i && i.length) {
                    (i = i.slice(0)), (e = e || []);
                    for (var o = this._onceEvents && this._onceEvents[t], n = 0; n < i.length; n++) {
                        var s = i[n],
                            r = o && o[s];
                        r && (this.off(t, s), delete o[s]), s.apply(this, e);
                    }
                    return this;
                }
            }),
            (e.allOff = function () {
                delete this._events, delete this._onceEvents;
            }),
            t
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.getSize = e());
    })(window, function () {
        "use strict";
        function t(t) {
            var e = parseFloat(t),
                i = t.indexOf("%") == -1 && !isNaN(e);
            return i && e;
        }
        function e() {}
        function i() {
            for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < h; e++) {
                var i = u[e];
                t[i] = 0;
            }
            return t;
        }
        function o(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
        }
        function n() {
            if (!d) {
                d = !0;
                var e = document.createElement("div");
                (e.style.width = "200px"), (e.style.padding = "1px 2px 3px 4px"), (e.style.borderStyle = "solid"), (e.style.borderWidth = "1px 2px 3px 4px"), (e.style.boxSizing = "border-box");
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var n = o(e);
                (r = 200 == Math.round(t(n.width))), (s.isBoxSizeOuter = r), i.removeChild(e);
            }
        }
        function s(e) {
            if ((n(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType)) {
                var s = o(e);
                if ("none" == s.display) return i();
                var a = {};
                (a.width = e.offsetWidth), (a.height = e.offsetHeight);
                for (var d = (a.isBorderBox = "border-box" == s.boxSizing), l = 0; l < h; l++) {
                    var f = u[l],
                        c = s[f],
                        m = parseFloat(c);
                    a[f] = isNaN(m) ? 0 : m;
                }
                var p = a.paddingLeft + a.paddingRight,
                    y = a.paddingTop + a.paddingBottom,
                    g = a.marginLeft + a.marginRight,
                    v = a.marginTop + a.marginBottom,
                    _ = a.borderLeftWidth + a.borderRightWidth,
                    z = a.borderTopWidth + a.borderBottomWidth,
                    I = d && r,
                    x = t(s.width);
                x !== !1 && (a.width = x + (I ? 0 : p + _));
                var S = t(s.height);
                return S !== !1 && (a.height = S + (I ? 0 : y + z)), (a.innerWidth = a.width - (p + _)), (a.innerHeight = a.height - (y + z)), (a.outerWidth = a.width + g), (a.outerHeight = a.height + v), a;
            }
        }
        var r,
            a =
                "undefined" == typeof console
                    ? e
                    : function (t) {
                          console.error(t);
                      },
            u = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            h = u.length,
            d = !1;
        return s;
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? (module.exports = e()) : (t.matchesSelector = e());
    })(window, function () {
        "use strict";
        var t = (function () {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var o = e[i],
                    n = o + "MatchesSelector";
                if (t[n]) return n;
            }
        })();
        return function (e, i) {
            return e[t](i);
        };
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
                  return e(t, i);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("desandro-matches-selector")))
            : (t.fizzyUIUtils = e(t, t.matchesSelector));
    })(window, function (t, e) {
        var i = {};
        (i.extend = function (t, e) {
            for (var i in e) t[i] = e[i];
            return t;
        }),
            (i.modulo = function (t, e) {
                return ((t % e) + e) % e;
            });
        var o = Array.prototype.slice;
        (i.makeArray = function (t) {
            if (Array.isArray(t)) return t;
            if (null === t || void 0 === t) return [];
            var e = "object" == typeof t && "number" == typeof t.length;
            return e ? o.call(t) : [t];
        }),
            (i.removeFrom = function (t, e) {
                var i = t.indexOf(e);
                i != -1 && t.splice(i, 1);
            }),
            (i.getParent = function (t, i) {
                for (; t.parentNode && t != document.body; ) if (((t = t.parentNode), e(t, i))) return t;
            }),
            (i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            }),
            (i.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (i.filterFindElements = function (t, o) {
                t = i.makeArray(t);
                var n = [];
                return (
                    t.forEach(function (t) {
                        if (t instanceof HTMLElement) {
                            if (!o) return void n.push(t);
                            e(t, o) && n.push(t);
                            for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++) n.push(i[s]);
                        }
                    }),
                    n
                );
            }),
            (i.debounceMethod = function (t, e, i) {
                i = i || 100;
                var o = t.prototype[e],
                    n = e + "Timeout";
                t.prototype[e] = function () {
                    var t = this[n];
                    clearTimeout(t);
                    var e = arguments,
                        s = this;
                    this[n] = setTimeout(function () {
                        o.apply(s, e), delete s[n];
                    }, i);
                };
            }),
            (i.docReady = function (t) {
                var e = document.readyState;
                "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
            }),
            (i.toDashed = function (t) {
                return t
                    .replace(/(.)([A-Z])/g, function (t, e, i) {
                        return e + "-" + i;
                    })
                    .toLowerCase();
            });
        var n = t.console;
        return (
            (i.htmlInit = function (e, o) {
                i.docReady(function () {
                    var s = i.toDashed(o),
                        r = "data-" + s,
                        a = document.querySelectorAll("[" + r + "]"),
                        u = document.querySelectorAll(".js-" + s),
                        h = i.makeArray(a).concat(i.makeArray(u)),
                        d = r + "-options",
                        l = t.jQuery;
                    h.forEach(function (t) {
                        var i,
                            s = t.getAttribute(r) || t.getAttribute(d);
                        try {
                            i = s && JSON.parse(s);
                        } catch (a) {
                            return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + a));
                        }
                        var u = new e(t, i);
                        l && l.data(t, o, u);
                    });
                });
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("ev-emitter"), require("get-size")))
            : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            for (var e in t) return !1;
            return (e = null), !0;
        }
        function o(t, e) {
            t && ((this.element = t), (this.layout = e), (this.position = { x: 0, y: 0 }), this._create());
        }
        function n(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase();
            });
        }
        var s = document.documentElement.style,
            r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
            u = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
            h = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
            d = (o.prototype = Object.create(t.prototype));
        (d.constructor = o),
            (d._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
            }),
            (d.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t);
            }),
            (d.getSize = function () {
                this.size = e(this.element);
            }),
            (d.css = function (t) {
                var e = this.element.style;
                for (var i in t) {
                    var o = h[i] || i;
                    e[o] = t[i];
                }
            }),
            (d.getPosition = function () {
                var t = getComputedStyle(this.element),
                    e = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    o = t[e ? "left" : "right"],
                    n = t[i ? "top" : "bottom"],
                    s = parseFloat(o),
                    r = parseFloat(n),
                    a = this.layout.size;
                o.indexOf("%") != -1 && (s = (s / 100) * a.width),
                    n.indexOf("%") != -1 && (r = (r / 100) * a.height),
                    (s = isNaN(s) ? 0 : s),
                    (r = isNaN(r) ? 0 : r),
                    (s -= e ? a.paddingLeft : a.paddingRight),
                    (r -= i ? a.paddingTop : a.paddingBottom),
                    (this.position.x = s),
                    (this.position.y = r);
            }),
            (d.layoutPosition = function () {
                var t = this.layout.size,
                    e = {},
                    i = this.layout._getOption("originLeft"),
                    o = this.layout._getOption("originTop"),
                    n = i ? "paddingLeft" : "paddingRight",
                    s = i ? "left" : "right",
                    r = i ? "right" : "left",
                    a = this.position.x + t[n];
                (e[s] = this.getXValue(a)), (e[r] = "");
                var u = o ? "paddingTop" : "paddingBottom",
                    h = o ? "top" : "bottom",
                    d = o ? "bottom" : "top",
                    l = this.position.y + t[u];
                (e[h] = this.getYValue(l)), (e[d] = ""), this.css(e), this.emitEvent("layout", [this]);
            }),
            (d.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !e ? (t / this.layout.size.width) * 100 + "%" : t + "px";
            }),
            (d.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && e ? (t / this.layout.size.height) * 100 + "%" : t + "px";
            }),
            (d._transitionTo = function (t, e) {
                this.getPosition();
                var i = this.position.x,
                    o = this.position.y,
                    n = t == this.position.x && e == this.position.y;
                if ((this.setPosition(t, e), n && !this.isTransitioning)) return void this.layoutPosition();
                var s = t - i,
                    r = e - o,
                    a = {};
                (a.transform = this.getTranslate(s, r)), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
            }),
            (d.getTranslate = function (t, e) {
                var i = this.layout._getOption("originLeft"),
                    o = this.layout._getOption("originTop");
                return (t = i ? t : -t), (e = o ? e : -e), "translate3d(" + t + "px, " + e + "px, 0)";
            }),
            (d.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }),
            (d.moveTo = d._transitionTo),
            (d.setPosition = function (t, e) {
                (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
            }),
            (d._nonTransition = function (t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
            }),
            (d.transition = function (t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var o = this.element.offsetHeight;
                    o = null;
                }
                this.enableTransition(t.to), this.css(t.to), (this.isTransitioning = !0);
            });
        var l = "opacity," + n(a);
        (d.enableTransition = function () {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                (t = "number" == typeof t ? t + "ms" : t), this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(u, this, !1);
            }
        }),
            (d.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t);
            }),
            (d.onotransitionend = function (t) {
                this.ontransitionend(t);
            });
        var f = { "-webkit-transform": "transform" };
        (d.ontransitionend = function (t) {
            if (t.target === this.element) {
                var e = this._transn,
                    o = f[t.propertyName] || t.propertyName;
                if ((delete e.ingProperties[o], i(e.ingProperties) && this.disableTransition(), o in e.clean && ((this.element.style[t.propertyName] = ""), delete e.clean[o]), o in e.onEnd)) {
                    var n = e.onEnd[o];
                    n.call(this), delete e.onEnd[o];
                }
                this.emitEvent("transitionEnd", [this]);
            }
        }),
            (d.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(u, this, !1), (this.isTransitioning = !1);
            }),
            (d._removeStyles = function (t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e);
            });
        var c = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return (
            (d.removeTransitionStyles = function () {
                this.css(c);
            }),
            (d.stagger = function (t) {
                (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
            }),
            (d.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
            }),
            (d.remove = function () {
                return r && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      void this.hide())
                    : void this.removeElem();
            }),
            (d.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("visibleStyle");
                (e[i] = this.onRevealTransitionEnd), this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (d.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (d.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];
                if (e.opacity) return "opacity";
                for (var i in e) return i;
            }),
            (d.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("hiddenStyle");
                (e[i] = this.onHideTransitionEnd), this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
            }),
            (d.onHideTransitionEnd = function () {
                this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (d.destroy = function () {
                this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
            }),
            o
        );
    }),
    (function (t, e) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, o, n, s) {
                  return e(t, i, o, n, s);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
            : (t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item));
    })(window, function (t, e, i, o, n) {
        "use strict";
        function s(t, e) {
            var i = o.getQueryElement(t);
            if (!i) return void (u && u.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            (this.element = i), h && (this.$element = h(this.element)), (this.options = o.extend({}, this.constructor.defaults)), this.option(e);
            var n = ++l;
            (this.element.outlayerGUID = n), (f[n] = this), this._create();
            var s = this._getOption("initLayout");
            s && this.layout();
        }
        function r(t) {
            function e() {
                t.apply(this, arguments);
            }
            return (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), e;
        }
        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                o = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var n = m[o] || 1;
            return i * n;
        }
        var u = t.console,
            h = t.jQuery,
            d = function () {},
            l = 0,
            f = {};
        (s.namespace = "outlayer"),
            (s.Item = n),
            (s.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var c = s.prototype;
        o.extend(c, e.prototype),
            (c.option = function (t) {
                o.extend(this.options, t);
            }),
            (c._getOption = function (t) {
                var e = this.constructor.compatOptions[t];
                return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
            }),
            (s.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (c._create = function () {
                this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle);
                var t = this._getOption("resize");
                t && this.bindResize();
            }),
            (c.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (c._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, o = [], n = 0; n < e.length; n++) {
                    var s = e[n],
                        r = new i(s, this);
                    o.push(r);
                }
                return o;
            }),
            (c._filterFindItemElements = function (t) {
                return o.filterFindElements(t, this.options.itemSelector);
            }),
            (c.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element;
                });
            }),
            (c.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (c._init = c.layout),
            (c._resetLayout = function () {
                this.getSize();
            }),
            (c.getSize = function () {
                this.size = i(this.element);
            }),
            (c._getMeasurement = function (t, e) {
                var o,
                    n = this.options[t];
                n ? ("string" == typeof n ? (o = this.element.querySelector(n)) : n instanceof HTMLElement && (o = n), (this[t] = o ? i(o)[e] : n)) : (this[t] = 0);
            }),
            (c.layoutItems = function (t, e) {
                (t = this._getItemsForLayout(t)), this._layoutItems(t, e), this._postLayout();
            }),
            (c._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored;
                });
            }),
            (c._layoutItems = function (t, e) {
                if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
                    var i = [];
                    t.forEach(function (t) {
                        var o = this._getItemLayoutPosition(t);
                        (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
                    }, this),
                        this._processLayoutQueue(i);
                }
            }),
            (c._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (c._processLayoutQueue = function (t) {
                this.updateStagger(),
                    t.forEach(function (t, e) {
                        this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                    }, this);
            }),
            (c.updateStagger = function () {
                var t = this.options.stagger;
                return null === t || void 0 === t ? void (this.stagger = 0) : ((this.stagger = a(t)), this.stagger);
            }),
            (c._positionItem = function (t, e, i, o, n) {
                o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
            }),
            (c._postLayout = function () {
                this.resizeContainer();
            }),
            (c.resizeContainer = function () {
                var t = this._getOption("resizeContainer");
                if (t) {
                    var e = this._getContainerSize();
                    e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
                }
            }),
            (c._getContainerSize = d),
            (c._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                        (t = Math.max(t, 0)),
                        (this.element.style[e ? "width" : "height"] = t + "px");
                }
            }),
            (c._emitCompleteOnItems = function (t, e) {
                function i() {
                    n.dispatchEvent(t + "Complete", null, [e]);
                }
                function o() {
                    r++, r == s && i();
                }
                var n = this,
                    s = e.length;
                if (!e || !s) return void i();
                var r = 0;
                e.forEach(function (e) {
                    e.once(t, o);
                });
            }),
            (c.dispatchEvent = function (t, e, i) {
                var o = e ? [e].concat(i) : i;
                if ((this.emitEvent(t, o), h))
                    if (((this.$element = this.$element || h(this.element)), e)) {
                        var n = h.Event(e);
                        (n.type = t), this.$element.trigger(n, i);
                    } else this.$element.trigger(t, i);
            }),
            (c.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0);
            }),
            (c.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored;
            }),
            (c.stamp = function (t) {
                (t = this._find(t)), t && ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
            }),
            (c.unstamp = function (t) {
                (t = this._find(t)),
                    t &&
                        t.forEach(function (t) {
                            o.removeFrom(this.stamps, t), this.unignore(t);
                        }, this);
            }),
            (c._find = function (t) {
                if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), (t = o.makeArray(t));
            }),
            (c._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
            }),
            (c._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
                };
            }),
            (c._manageStamp = d),
            (c._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    o = this._boundingRect,
                    n = i(t),
                    s = { left: e.left - o.left - n.marginLeft, top: e.top - o.top - n.marginTop, right: o.right - e.right - n.marginRight, bottom: o.bottom - e.bottom - n.marginBottom };
                return s;
            }),
            (c.handleEvent = o.handleEvent),
            (c.bindResize = function () {
                t.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (c.unbindResize = function () {
                t.removeEventListener("resize", this), (this.isResizeBound = !1);
            }),
            (c.onresize = function () {
                this.resize();
            }),
            o.debounceMethod(s, "onresize", 100),
            (c.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (c.needsResizeLayout = function () {
                var t = i(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth;
            }),
            (c.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (c.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (c.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    (this.items = e.concat(i)), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
                }
            }),
            (c.reveal = function (t) {
                if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.reveal();
                    });
                }
            }),
            (c.hide = function (t) {
                if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
                    var e = this.updateStagger();
                    t.forEach(function (t, i) {
                        t.stagger(i * e), t.hide();
                    });
                }
            }),
            (c.revealItemElements = function (t) {
                var e = this.getItems(t);
                this.reveal(e);
            }),
            (c.hideItemElements = function (t) {
                var e = this.getItems(t);
                this.hide(e);
            }),
            (c.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];
                    if (i.element == t) return i;
                }
            }),
            (c.getItems = function (t) {
                t = o.makeArray(t);
                var e = [];
                return (
                    t.forEach(function (t) {
                        var i = this.getItem(t);
                        i && e.push(i);
                    }, this),
                    e
                );
            }),
            (c.remove = function (t) {
                var e = this.getItems(t);
                this._emitCompleteOnItems("remove", e),
                    e &&
                        e.length &&
                        e.forEach(function (t) {
                            t.remove(), o.removeFrom(this.items, t);
                        }, this);
            }),
            (c.destroy = function () {
                var t = this.element.style;
                (t.height = ""),
                    (t.position = ""),
                    (t.width = ""),
                    this.items.forEach(function (t) {
                        t.destroy();
                    }),
                    this.unbindResize();
                var e = this.element.outlayerGUID;
                delete f[e], delete this.element.outlayerGUID, h && h.removeData(this.element, this.constructor.namespace);
            }),
            (s.data = function (t) {
                t = o.getQueryElement(t);
                var e = t && t.outlayerGUID;
                return e && f[e];
            }),
            (s.create = function (t, e) {
                var i = r(s);
                return (
                    (i.defaults = o.extend({}, s.defaults)),
                    o.extend(i.defaults, e),
                    (i.compatOptions = o.extend({}, s.compatOptions)),
                    (i.namespace = t),
                    (i.data = s.data),
                    (i.Item = r(n)),
                    o.htmlInit(i, t),
                    h && h.bridget && h.bridget(t, i),
                    i
                );
            });
        var m = { ms: 1, s: 1e3 };
        return (s.Item = n), s;
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
    })(window, function (t) {
        "use strict";
        function e() {
            t.Item.apply(this, arguments);
        }
        var i = (e.prototype = Object.create(t.Item.prototype)),
            o = i._create;
        (i._create = function () {
            (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
        }),
            (i.updateSortData = function () {
                if (!this.isIgnored) {
                    (this.sortData.id = this.id), (this.sortData["original-order"] = this.id), (this.sortData.random = Math.random());
                    var t = this.layout.options.getSortData,
                        e = this.layout._sorters;
                    for (var i in t) {
                        var o = e[i];
                        this.sortData[i] = o(this.element, this);
                    }
                }
            });
        var n = i.destroy;
        return (
            (i.destroy = function () {
                n.apply(this, arguments), this.css({ display: "" });
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("get-size"), require("outlayer")))
            : ((t.Isotope = t.Isotope || {}), (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
    })(window, function (t, e) {
        "use strict";
        function i(t) {
            (this.isotope = t), t && ((this.options = t.options[this.namespace]), (this.element = t.element), (this.items = t.filteredItems), (this.size = t.size));
        }
        var o = i.prototype,
            n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
        return (
            n.forEach(function (t) {
                o[t] = function () {
                    return e.prototype[t].apply(this.isotope, arguments);
                };
            }),
            (o.needsVerticalResizeLayout = function () {
                var e = t(this.isotope.element),
                    i = this.isotope.size && e;
                return i && e.innerHeight != this.isotope.size.innerHeight;
            }),
            (o._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments);
            }),
            (o.getColumnWidth = function () {
                this.getSegmentSize("column", "Width");
            }),
            (o.getRowHeight = function () {
                this.getSegmentSize("row", "Height");
            }),
            (o.getSegmentSize = function (t, e) {
                var i = t + e,
                    o = "outer" + e;
                if ((this._getMeasurement(i, o), !this[i])) {
                    var n = this.getFirstItemSize();
                    this[i] = (n && n[o]) || this.isotope.size["inner" + e];
                }
            }),
            (o.getFirstItemSize = function () {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element);
            }),
            (o.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments);
            }),
            (o.getSize = function () {
                this.isotope.getSize(), (this.size = this.isotope.size);
            }),
            (i.modes = {}),
            (i.create = function (t, e) {
                function n() {
                    i.apply(this, arguments);
                }
                return (n.prototype = Object.create(o)), (n.prototype.constructor = n), e && (n.options = e), (n.prototype.namespace = t), (i.modes[t] = n), n;
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("outlayer"), require("get-size")))
            : (t.Masonry = e(t.Outlayer, t.getSize));
    })(window, function (t, e) {
        var i = t.create("masonry");
        i.compatOptions.fitWidth = "isFitWidth";
        var o = i.prototype;
        return (
            (o._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);
                for (var t = 0; t < this.cols; t++) this.colYs.push(0);
                (this.maxY = 0), (this.horizontalColIndex = 0);
            }),
            (o.measureColumns = function () {
                if ((this.getContainerWidth(), !this.columnWidth)) {
                    var t = this.items[0],
                        i = t && t.element;
                    this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
                }
                var o = (this.columnWidth += this.gutter),
                    n = this.containerWidth + this.gutter,
                    s = n / o,
                    r = o - (n % o),
                    a = r && r < 1 ? "round" : "floor";
                (s = Math[a](s)), (this.cols = Math.max(s, 1));
            }),
            (o.getContainerWidth = function () {
                var t = this._getOption("fitWidth"),
                    i = t ? this.element.parentNode : this.element,
                    o = e(i);
                this.containerWidth = o && o.innerWidth;
            }),
            (o._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth,
                    i = e && e < 1 ? "round" : "ceil",
                    o = Math[i](t.size.outerWidth / this.columnWidth);
                o = Math.min(o, this.cols);
                for (
                    var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](o, t), r = { x: this.columnWidth * s.col, y: s.y }, a = s.y + t.size.outerHeight, u = o + s.col, h = s.col;
                    h < u;
                    h++
                )
                    this.colYs[h] = a;
                return r;
            }),
            (o._getTopColPosition = function (t) {
                var e = this._getTopColGroup(t),
                    i = Math.min.apply(Math, e);
                return { col: e.indexOf(i), y: i };
            }),
            (o._getTopColGroup = function (t) {
                if (t < 2) return this.colYs;
                for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++) e[o] = this._getColGroupY(o, t);
                return e;
            }),
            (o._getColGroupY = function (t, e) {
                if (e < 2) return this.colYs[t];
                var i = this.colYs.slice(t, t + e);
                return Math.max.apply(Math, i);
            }),
            (o._getHorizontalColPosition = function (t, e) {
                var i = this.horizontalColIndex % this.cols,
                    o = t > 1 && i + t > this.cols;
                i = o ? 0 : i;
                var n = e.size.outerWidth && e.size.outerHeight;
                return (this.horizontalColIndex = n ? i + t : this.horizontalColIndex), { col: i, y: this._getColGroupY(i, t) };
            }),
            (o._manageStamp = function (t) {
                var i = e(t),
                    o = this._getElementOffset(t),
                    n = this._getOption("originLeft"),
                    s = n ? o.left : o.right,
                    r = s + i.outerWidth,
                    a = Math.floor(s / this.columnWidth);
                a = Math.max(0, a);
                var u = Math.floor(r / this.columnWidth);
                (u -= r % this.columnWidth ? 0 : 1), (u = Math.min(this.cols - 1, u));
                for (var h = this._getOption("originTop"), d = (h ? o.top : o.bottom) + i.outerHeight, l = a; l <= u; l++) this.colYs[l] = Math.max(d, this.colYs[l]);
            }),
            (o._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = { height: this.maxY };
                return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
            }),
            (o._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
                return (this.cols - t) * this.columnWidth - this.gutter;
            }),
            (o.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t != this.containerWidth;
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("../layout-mode"), require("masonry-layout")))
            : e(t.Isotope.LayoutMode, t.Masonry);
    })(window, function (t, e) {
        "use strict";
        var i = t.create("masonry"),
            o = i.prototype,
            n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
        for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
        var r = o.measureColumns;
        o.measureColumns = function () {
            (this.items = this.isotope.filteredItems), r.call(this);
        };
        var a = o._getOption;
        return (
            (o._getOption = function (t) {
                return "fitWidth" == t ? (void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth) : a.apply(this.isotope, arguments);
            }),
            i
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? (module.exports = e(require("../layout-mode"))) : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement("gutter", "outerWidth");
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter,
                    i = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
                var o = { x: this.x, y: this.y };
                return (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)), (this.x += e), o;
            }),
            (i._getContainerSize = function () {
                return { height: this.maxY };
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
            : "object" == typeof module && module.exports
            ? (module.exports = e(require("../layout-mode")))
            : e(t.Isotope.LayoutMode);
    })(window, function (t) {
        "use strict";
        var e = t.create("vertical", { horizontalAlignment: 0 }),
            i = e.prototype;
        return (
            (i._resetLayout = function () {
                this.y = 0;
            }),
            (i._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    i = this.y;
                return (this.y += t.size.outerHeight), { x: e, y: i };
            }),
            (i._getContainerSize = function () {
                return { height: this.y };
            }),
            e
        );
    }),
    (function (t, e) {
        "function" == typeof define && define.amd
            ? define([
                  "outlayer/outlayer",
                  "get-size/get-size",
                  "desandro-matches-selector/matches-selector",
                  "fizzy-ui-utils/utils",
                  "isotope-layout/js/item",
                  "isotope-layout/js/layout-mode",
                  "isotope-layout/js/layout-modes/masonry",
                  "isotope-layout/js/layout-modes/fit-rows",
                  "isotope-layout/js/layout-modes/vertical",
              ], function (i, o, n, s, r, a) {
                  return e(t, i, o, n, s, r, a);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = e(
                  t,
                  require("outlayer"),
                  require("get-size"),
                  require("desandro-matches-selector"),
                  require("fizzy-ui-utils"),
                  require("isotope-layout/js/item"),
                  require("isotope-layout/js/layout-mode"),
                  require("isotope-layout/js/layout-modes/masonry"),
                  require("isotope-layout/js/layout-modes/fit-rows"),
                  require("isotope-layout/js/layout-modes/vertical")
              ))
            : (t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode));
    })(window, function (t, e, i, o, n, s, r) {
        function a(t, e) {
            return function (i, o) {
                for (var n = 0; n < t.length; n++) {
                    var s = t[n],
                        r = i.sortData[s],
                        a = o.sortData[s];
                    if (r > a || r < a) {
                        var u = void 0 !== e[s] ? e[s] : e,
                            h = u ? 1 : -1;
                        return (r > a ? 1 : -1) * h;
                    }
                }
                return 0;
            };
        }
        var u = t.jQuery,
            h = String.prototype.trim
                ? function (t) {
                      return t.trim();
                  }
                : function (t) {
                      return t.replace(/^\s+|\s+$/g, "");
                  },
            d = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });
        (d.Item = s), (d.LayoutMode = r);
        var l = d.prototype;
        (l._create = function () {
            (this.itemGUID = 0), (this._sorters = {}), this._getSorters(), e.prototype._create.call(this), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = ["original-order"]);
            for (var t in r.modes) this._initLayoutMode(t);
        }),
            (l.reloadItems = function () {
                (this.itemGUID = 0), e.prototype.reloadItems.call(this);
            }),
            (l._itemize = function () {
                for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.id = this.itemGUID++;
                }
                return this._updateItemsSortData(t), t;
            }),
            (l._initLayoutMode = function (t) {
                var e = r.modes[t],
                    i = this.options[t] || {};
                (this.options[t] = e.options ? n.extend(e.options, i) : i), (this.modes[t] = new e(this));
            }),
            (l.layout = function () {
                return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout();
            }),
            (l._layout = function () {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), (this._isLayoutInited = !0);
            }),
            (l.arrange = function (t) {
                this.option(t), this._getIsInstant();
                var e = this._filter(this.items);
                (this.filteredItems = e.matches), this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
            }),
            (l._init = l.arrange),
            (l._hideReveal = function (t) {
                this.reveal(t.needReveal), this.hide(t.needHide);
            }),
            (l._getIsInstant = function () {
                var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;
                return (this._isInstant = e), e;
            }),
            (l._bindArrangeComplete = function () {
                function t() {
                    e && i && o && n.dispatchEvent("arrangeComplete", null, [n.filteredItems]);
                }
                var e,
                    i,
                    o,
                    n = this;
                this.once("layoutComplete", function () {
                    (e = !0), t();
                }),
                    this.once("hideComplete", function () {
                        (i = !0), t();
                    }),
                    this.once("revealComplete", function () {
                        (o = !0), t();
                    });
            }),
            (l._filter = function (t) {
                var e = this.options.filter;
                e = e || "*";
                for (var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
                    var a = t[r];
                    if (!a.isIgnored) {
                        var u = s(a);
                        u && i.push(a), u && a.isHidden ? o.push(a) : u || a.isHidden || n.push(a);
                    }
                }
                return { matches: i, needReveal: o, needHide: n };
            }),
            (l._getFilterTest = function (t) {
                return u && this.options.isJQueryFiltering
                    ? function (e) {
                          return u(e.element).is(t);
                      }
                    : "function" == typeof t
                    ? function (e) {
                          return t(e.element);
                      }
                    : function (e) {
                          return o(e.element, t);
                      };
            }),
            (l.updateSortData = function (t) {
                var e;
                t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items), this._getSorters(), this._updateItemsSortData(e);
            }),
            (l._getSorters = function () {
                var t = this.options.getSortData;
                for (var e in t) {
                    var i = t[e];
                    this._sorters[e] = f(i);
                }
            }),
            (l._updateItemsSortData = function (t) {
                for (var e = t && t.length, i = 0; e && i < e; i++) {
                    var o = t[i];
                    o.updateSortData();
                }
            });
        var f = (function () {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = h(t).split(" "),
                    o = i[0],
                    n = o.match(/^\[(.+)\]$/),
                    s = n && n[1],
                    r = e(s, o),
                    a = d.sortDataParsers[i[1]];
                return (t = a
                    ? function (t) {
                          return t && a(r(t));
                      }
                    : function (t) {
                          return t && r(t);
                      });
            }
            function e(t, e) {
                return t
                    ? function (e) {
                          return e.getAttribute(t);
                      }
                    : function (t) {
                          var i = t.querySelector(e);
                          return i && i.textContent;
                      };
            }
            return t;
        })();
        (d.sortDataParsers = {
            parseInt: function (t) {
                return parseInt(t, 10);
            },
            parseFloat: function (t) {
                return parseFloat(t);
            },
        }),
            (l._sort = function () {
                if (this.options.sortBy) {
                    var t = n.makeArray(this.options.sortBy);
                    this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
                    var e = a(this.sortHistory, this.options.sortAscending);
                    this.filteredItems.sort(e);
                }
            }),
            (l._getIsSameSortBy = function (t) {
                for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
                return !0;
            }),
            (l._mode = function () {
                var t = this.options.layoutMode,
                    e = this.modes[t];
                if (!e) throw new Error("No layout mode: " + t);
                return (e.options = this.options[t]), e;
            }),
            (l._resetLayout = function () {
                e.prototype._resetLayout.call(this), this._mode()._resetLayout();
            }),
            (l._getItemLayoutPosition = function (t) {
                return this._mode()._getItemLayoutPosition(t);
            }),
            (l._manageStamp = function (t) {
                this._mode()._manageStamp(t);
            }),
            (l._getContainerSize = function () {
                return this._mode()._getContainerSize();
            }),
            (l.needsResizeLayout = function () {
                return this._mode().needsResizeLayout();
            }),
            (l.appended = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(i);
                }
            }),
            (l.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(this.filteredItems), (this.filteredItems = i.concat(this.filteredItems)), (this.items = e.concat(this.items));
                }
            }),
            (l._filterRevealAdded = function (t) {
                var e = this._filter(t);
                return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
            }),
            (l.insert = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var i,
                        o,
                        n = e.length;
                    for (i = 0; i < n; i++) (o = e[i]), this.element.appendChild(o.element);
                    var s = this._filter(e).matches;
                    for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
                    for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
                    this.reveal(s);
                }
            });
        var c = l.remove;
        return (
            (l.remove = function (t) {
                t = n.makeArray(t);
                var e = this.getItems(t);
                c.call(this, t);
                for (var i = e && e.length, o = 0; i && o < i; o++) {
                    var s = e[o];
                    n.removeFrom(this.filteredItems, s);
                }
            }),
            (l.shuffle = function () {
                for (var t = 0; t < this.items.length; t++) {
                    var e = this.items[t];
                    e.sortData.random = Math.random();
                }
                (this.options.sortBy = "random"), this._sort(), this._layout();
            }),
            (l._noTransition = function (t, e) {
                var i = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var o = t.apply(this, e);
                return (this.options.transitionDuration = i), o;
            }),
            (l.getFilteredItemElements = function () {
                return this.filteredItems.map(function (t) {
                    return t.element;
                });
            }),
            d
        );
    });

/* 11.
 * Typewriter */
!(function (t, e) {
    "object" == typeof exports && "object" == typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define("Typewriter", [], e) : "object" == typeof exports ? (exports.Typewriter = e()) : (t.Typewriter = e());
})(window, function () {
    return (function (t) {
        var e = {};
        function n(r) {
            if (e[r]) return e[r].exports;
            var o = (e[r] = { i: r, l: !1, exports: {} });
            return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
            }),
            (n.r = function (t) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
            }),
            (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var r = Object.create(null);
                if ((n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t))
                    for (var o in t)
                        n.d(
                            r,
                            o,
                            function (e) {
                                return t[e];
                            }.bind(null, o)
                        );
                return r;
            }),
            (n.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 53))
        );
    })([
        function (t, e, n) {
            var r = n(27)("wks"),
                o = n(15),
                i = n(1).Symbol,
                u = "function" == typeof i;
            (t.exports = function (t) {
                return r[t] || (r[t] = (u && i[t]) || (u ? i : o)("Symbol." + t));
            }).store = r;
        },
        function (t, e) {
            var n = (t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
            "number" == typeof __g && (__g = n);
        },
        function (t, e, n) {
            var r = n(8),
                o = n(36),
                i = n(23),
                u = Object.defineProperty;
            e.f = n(3)
                ? Object.defineProperty
                : function (t, e, n) {
                      if ((r(t), (e = i(e, !0)), r(n), o))
                          try {
                              return u(t, e, n);
                          } catch (t) {}
                      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                      return "value" in n && (t[e] = n.value), t;
                  };
        },
        function (t, e, n) {
            t.exports = !n(6)(function () {
                return (
                    7 !=
                    Object.defineProperty({}, "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
        },
        function (t, e, n) {
            var r = n(1),
                o = n(11),
                i = n(7),
                u = n(9),
                a = n(18),
                s = function (t, e, n) {
                    var c,
                        f,
                        l,
                        p,
                        v = t & s.F,
                        d = t & s.G,
                        h = t & s.S,
                        y = t & s.P,
                        m = t & s.B,
                        g = d ? r : h ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                        E = d ? o : o[e] || (o[e] = {}),
                        b = E.prototype || (E.prototype = {});
                    for (c in (d && (n = e), n))
                        (l = ((f = !v && g && void 0 !== g[c]) ? g : n)[c]), (p = m && f ? a(l, r) : y && "function" == typeof l ? a(Function.call, l) : l), g && u(g, c, l, t & s.U), E[c] != l && i(E, c, p), y && b[c] != l && (b[c] = l);
                };
            (r.core = o), (s.F = 1), (s.G = 2), (s.S = 4), (s.P = 8), (s.B = 16), (s.W = 32), (s.U = 64), (s.R = 128), (t.exports = s);
        },
        function (t, e) {
            t.exports = function (t) {
                return "object" == typeof t ? null !== t : "function" == typeof t;
            };
        },
        function (t, e) {
            t.exports = function (t) {
                try {
                    return !!t();
                } catch (t) {
                    return !0;
                }
            };
        },
        function (t, e, n) {
            var r = n(2),
                o = n(14);
            t.exports = n(3)
                ? function (t, e, n) {
                      return r.f(t, e, o(1, n));
                  }
                : function (t, e, n) {
                      return (t[e] = n), t;
                  };
        },
        function (t, e, n) {
            var r = n(5);
            t.exports = function (t) {
                if (!r(t)) throw TypeError(t + " is not an object!");
                return t;
            };
        },
        function (t, e, n) {
            var r = n(1),
                o = n(7),
                i = n(10),
                u = n(15)("src"),
                a = Function.toString,
                s = ("" + a).split("toString");
            (n(11).inspectSource = function (t) {
                return a.call(t);
            }),
                (t.exports = function (t, e, n, a) {
                    var c = "function" == typeof n;
                    c && (i(n, "name") || o(n, "name", e)), t[e] !== n && (c && (i(n, u) || o(n, u, t[e] ? "" + t[e] : s.join(String(e)))), t === r ? (t[e] = n) : a ? (t[e] ? (t[e] = n) : o(t, e, n)) : (delete t[e], o(t, e, n)));
                })(Function.prototype, "toString", function () {
                    return ("function" == typeof this && this[u]) || a.call(this);
                });
        },
        function (t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function (t, e) {
                return n.call(t, e);
            };
        },
        function (t, e) {
            var n = (t.exports = { version: "2.5.7" });
            "number" == typeof __e && (__e = n);
        },
        function (t, e, n) {
            var r = n(39),
                o = n(21);
            t.exports = function (t) {
                return r(o(t));
            };
        },
        ,
        function (t, e) {
            t.exports = function (t, e) {
                return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e };
            };
        },
        function (t, e) {
            var n = 0,
                r = Math.random();
            t.exports = function (t) {
                return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36));
            };
        },
        function (t, e) {
            t.exports = {};
        },
        function (t, e, n) {
            var r = n(43),
                o = n(29);
            t.exports =
                Object.keys ||
                function (t) {
                    return r(t, o);
                };
        },
        function (t, e, n) {
            var r = n(55);
            t.exports = function (t, e, n) {
                if ((r(t), void 0 === e)) return t;
                switch (n) {
                    case 1:
                        return function (n) {
                            return t.call(e, n);
                        };
                    case 2:
                        return function (n, r) {
                            return t.call(e, n, r);
                        };
                    case 3:
                        return function (n, r, o) {
                            return t.call(e, n, r, o);
                        };
                }
                return function () {
                    return t.apply(e, arguments);
                };
            };
        },
        function (t, e) {
            var n = {}.toString;
            t.exports = function (t) {
                return n.call(t).slice(8, -1);
            };
        },
        function (t, e, n) {
            var r = n(21);
            t.exports = function (t) {
                return Object(r(t));
            };
        },
        function (t, e) {
            t.exports = function (t) {
                if (void 0 == t) throw TypeError("Can't call method on  " + t);
                return t;
            };
        },
        function (t, e) {
            t.exports = !1;
        },
        function (t, e, n) {
            var r = n(5);
            t.exports = function (t, e) {
                if (!r(t)) return t;
                var n, o;
                if (e && "function" == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
                if ("function" == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o;
                if (!e && "function" == typeof (n = t.toString) && !r((o = n.call(t)))) return o;
                throw TypeError("Can't convert object to primitive value");
            };
        },
        function (t, e, n) {
            var r = n(25),
                o = Math.min;
            t.exports = function (t) {
                return t > 0 ? o(r(t), 9007199254740991) : 0;
            };
        },
        function (t, e) {
            var n = Math.ceil,
                r = Math.floor;
            t.exports = function (t) {
                return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
            };
        },
        function (t, e, n) {
            var r = n(19);
            t.exports =
                Array.isArray ||
                function (t) {
                    return "Array" == r(t);
                };
        },
        function (t, e, n) {
            var r = n(11),
                o = n(1),
                i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
            (t.exports = function (t, e) {
                return i[t] || (i[t] = void 0 !== e ? e : {});
            })("versions", []).push({ version: r.version, mode: n(22) ? "pure" : "global", copyright: "© 2018 Denis Pushkarev (zloirock.ru)" });
        },
        function (t, e, n) {
            var r = n(27)("keys"),
                o = n(15);
            t.exports = function (t) {
                return r[t] || (r[t] = o(t));
            };
        },
        function (t, e) {
            t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        },
        function (t, e, n) {
            var r = n(2).f,
                o = n(10),
                i = n(0)("toStringTag");
            t.exports = function (t, e, n) {
                t && !o((t = n ? t : t.prototype), i) && r(t, i, { configurable: !0, value: e });
            };
        },
        function (t, e, n) {
            "use strict";
            var r = n(8);
            t.exports = function () {
                var t = r(this),
                    e = "";
                return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
            };
        },
        function (t, e) {
            e.f = {}.propertyIsEnumerable;
        },
        function (t, e, n) {
            var r = n(43),
                o = n(29).concat("length", "prototype");
            e.f =
                Object.getOwnPropertyNames ||
                function (t) {
                    return r(t, o);
                };
        },
        function (t, e, n) {
            (function (e) {
                for (var r = n(90), o = "undefined" == typeof window ? e : window, i = ["moz", "webkit"], u = "AnimationFrame", a = o["request" + u], s = o["cancel" + u] || o["cancelRequest" + u], c = 0; !a && c < i.length; c++)
                    (a = o[i[c] + "Request" + u]), (s = o[i[c] + "Cancel" + u] || o[i[c] + "CancelRequest" + u]);
                if (!a || !s) {
                    var f = 0,
                        l = 0,
                        p = [];
                    (a = function (t) {
                        if (0 === p.length) {
                            var e = r(),
                                n = Math.max(0, 1e3 / 60 - (e - f));
                            (f = n + e),
                                setTimeout(function () {
                                    var t = p.slice(0);
                                    p.length = 0;
                                    for (var e = 0; e < t.length; e++)
                                        if (!t[e].cancelled)
                                            try {
                                                t[e].callback(f);
                                            } catch (t) {
                                                setTimeout(function () {
                                                    throw t;
                                                }, 0);
                                            }
                                }, Math.round(n));
                        }
                        return p.push({ handle: ++l, callback: t, cancelled: !1 }), l;
                    }),
                        (s = function (t) {
                            for (var e = 0; e < p.length; e++) p[e].handle === t && (p[e].cancelled = !0);
                        });
                }
                (t.exports = function (t) {
                    return a.call(o, t);
                }),
                    (t.exports.cancel = function () {
                        s.apply(o, arguments);
                    }),
                    (t.exports.polyfill = function (t) {
                        t || (t = o), (t.requestAnimationFrame = a), (t.cancelAnimationFrame = s);
                    });
            }.call(this, n(89)));
        },
        function (t, e, n) {
            var r = n(8),
                o = n(61),
                i = n(29),
                u = n(28)("IE_PROTO"),
                a = function () {},
                s = function () {
                    var t,
                        e = n(37)("iframe"),
                        r = i.length;
                    for (e.style.display = "none", n(64).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object</script>"), t.close(), s = t.F; r--; ) delete s.prototype[i[r]];
                    return s();
                };
            t.exports =
                Object.create ||
                function (t, e) {
                    var n;
                    return null !== t ? ((a.prototype = r(t)), (n = new a()), (a.prototype = null), (n[u] = t)) : (n = s()), void 0 === e ? n : o(n, e);
                };
        },
        function (t, e, n) {
            t.exports =
                !n(3) &&
                !n(6)(function () {
                    return (
                        7 !=
                        Object.defineProperty(n(37)("div"), "a", {
                            get: function () {
                                return 7;
                            },
                        }).a
                    );
                });
        },
        function (t, e, n) {
            var r = n(5),
                o = n(1).document,
                i = r(o) && r(o.createElement);
            t.exports = function (t) {
                return i ? o.createElement(t) : {};
            };
        },
        function (t, e, n) {
            var r = n(18),
                o = n(39),
                i = n(20),
                u = n(24),
                a = n(56);
            t.exports = function (t, e) {
                var n = 1 == t,
                    s = 2 == t,
                    c = 3 == t,
                    f = 4 == t,
                    l = 6 == t,
                    p = 5 == t || l,
                    v = e || a;
                return function (e, a, d) {
                    for (var h, y, m = i(e), g = o(m), E = r(a, d, 3), b = u(g.length), T = 0, w = n ? v(e, b) : s ? v(e, 0) : void 0; b > T; T++)
                        if ((p || T in g) && ((y = E((h = g[T]), T, m)), t))
                            if (n) w[T] = y;
                            else if (y)
                                switch (t) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return h;
                                    case 6:
                                        return T;
                                    case 2:
                                        w.push(h);
                                }
                            else if (f) return !1;
                    return l ? -1 : c || f ? f : w;
                };
            };
        },
        function (t, e, n) {
            var r = n(19);
            t.exports = Object("z").propertyIsEnumerable(0)
                ? Object
                : function (t) {
                      return "String" == r(t) ? t.split("") : Object(t);
                  };
        },
        function (t, e, n) {
            "use strict";
            var r = n(6);
            t.exports = function (t, e) {
                return (
                    !!t &&
                    r(function () {
                        e ? t.call(null, function () {}, 1) : t.call(null);
                    })
                );
            };
        },
        function (t, e, n) {
            "use strict";
            var r = n(58),
                o = n(59),
                i = n(16),
                u = n(12);
            (t.exports = n(42)(
                Array,
                "Array",
                function (t, e) {
                    (this._t = u(t)), (this._i = 0), (this._k = e);
                },
                function () {
                    var t = this._t,
                        e = this._k,
                        n = this._i++;
                    return !t || n >= t.length ? ((this._t = void 0), o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]]);
                },
                "values"
            )),
                (i.Arguments = i.Array),
                r("keys"),
                r("values"),
                r("entries");
        },
        function (t, e, n) {
            "use strict";
            var r = n(22),
                o = n(4),
                i = n(9),
                u = n(7),
                a = n(16),
                s = n(60),
                c = n(30),
                f = n(65),
                l = n(0)("iterator"),
                p = !([].keys && "next" in [].keys()),
                v = function () {
                    return this;
                };
            t.exports = function (t, e, n, d, h, y, m) {
                s(n, e, d);
                var g,
                    E,
                    b,
                    T = function (t) {
                        if (!p && t in _) return _[t];
                        switch (t) {
                            case "keys":
                            case "values":
                                return function () {
                                    return new n(this, t);
                                };
                        }
                        return function () {
                            return new n(this, t);
                        };
                    },
                    w = e + " Iterator",
                    S = "values" == h,
                    A = !1,
                    _ = t.prototype,
                    O = _[l] || _["@@iterator"] || (h && _[h]),
                    x = O || T(h),
                    N = h ? (S ? T("entries") : x) : void 0,
                    L = ("Array" == e && _.entries) || O;
                if (
                    (L && (b = f(L.call(new t()))) !== Object.prototype && b.next && (c(b, w, !0), r || "function" == typeof b[l] || u(b, l, v)),
                    S &&
                        O &&
                        "values" !== O.name &&
                        ((A = !0),
                        (x = function () {
                            return O.call(this);
                        })),
                    (r && !m) || (!p && !A && _[l]) || u(_, l, x),
                    (a[e] = x),
                    (a[w] = v),
                    h)
                )
                    if (((g = { values: S ? x : T("values"), keys: y ? x : T("keys"), entries: N }), m)) for (E in g) E in _ || i(_, E, g[E]);
                    else o(o.P + o.F * (p || A), e, g);
                return g;
            };
        },
        function (t, e, n) {
            var r = n(10),
                o = n(12),
                i = n(62)(!1),
                u = n(28)("IE_PROTO");
            t.exports = function (t, e) {
                var n,
                    a = o(t),
                    s = 0,
                    c = [];
                for (n in a) n != u && r(a, n) && c.push(n);
                for (; e.length > s; ) r(a, (n = e[s++])) && (~i(c, n) || c.push(n));
                return c;
            };
        },
        function (t, e, n) {
            var r = n(1),
                o = n(11),
                i = n(22),
                u = n(45),
                a = n(2).f;
            t.exports = function (t) {
                var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
                "_" == t.charAt(0) || t in e || a(e, t, { value: u.f(t) });
            };
        },
        function (t, e, n) {
            e.f = n(0);
        },
        function (t, e) {
            e.f = Object.getOwnPropertySymbols;
        },
        function (t, e, n) {
            var r = n(32),
                o = n(14),
                i = n(12),
                u = n(23),
                a = n(10),
                s = n(36),
                c = Object.getOwnPropertyDescriptor;
            e.f = n(3)
                ? c
                : function (t, e) {
                      if (((t = i(t)), (e = u(e, !0)), s))
                          try {
                              return c(t, e);
                          } catch (t) {}
                      if (a(t, e)) return o(!r.f.call(t, e), t[e]);
                  };
        },
        function (t, e, n) {
            var r = n(5),
                o = n(19),
                i = n(0)("match");
            t.exports = function (t) {
                var e;
                return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t));
            };
        },
        function (t, e, n) {
            n(44)("asyncIterator");
        },
        function (t, e, n) {
            "use strict";
            var r = n(1),
                o = n(10),
                i = n(3),
                u = n(4),
                a = n(9),
                s = n(81).KEY,
                c = n(6),
                f = n(27),
                l = n(30),
                p = n(15),
                v = n(0),
                d = n(45),
                h = n(44),
                y = n(82),
                m = n(26),
                g = n(8),
                E = n(5),
                b = n(12),
                T = n(23),
                w = n(14),
                S = n(35),
                A = n(83),
                _ = n(47),
                O = n(2),
                x = n(17),
                N = _.f,
                L = O.f,
                C = A.f,
                R = r.Symbol,
                M = r.JSON,
                j = M && M.stringify,
                P = v("_hidden"),
                D = v("toPrimitive"),
                k = {}.propertyIsEnumerable,
                I = f("symbol-registry"),
                F = f("symbols"),
                H = f("op-symbols"),
                U = Object.prototype,
                V = "function" == typeof R,
                G = r.QObject,
                Q = !G || !G.prototype || !G.prototype.findChild,
                B =
                    i &&
                    c(function () {
                        return (
                            7 !=
                            S(
                                L({}, "a", {
                                    get: function () {
                                        return L(this, "a", { value: 7 }).a;
                                    },
                                })
                            ).a
                        );
                    })
                        ? function (t, e, n) {
                              var r = N(U, e);
                              r && delete U[e], L(t, e, n), r && t !== U && L(U, e, r);
                          }
                        : L,
                Y = function (t) {
                    var e = (F[t] = S(R.prototype));
                    return (e._k = t), e;
                },
                q =
                    V && "symbol" == typeof R.iterator
                        ? function (t) {
                              return "symbol" == typeof t;
                          }
                        : function (t) {
                              return t instanceof R;
                          },
                J = function (t, e, n) {
                    return (
                        t === U && J(H, e, n),
                        g(t),
                        (e = T(e, !0)),
                        g(n),
                        o(F, e) ? (n.enumerable ? (o(t, P) && t[P][e] && (t[P][e] = !1), (n = S(n, { enumerable: w(0, !1) }))) : (o(t, P) || L(t, P, w(1, {})), (t[P][e] = !0)), B(t, e, n)) : L(t, e, n)
                    );
                },
                W = function (t, e) {
                    g(t);
                    for (var n, r = y((e = b(e))), o = 0, i = r.length; i > o; ) J(t, (n = r[o++]), e[n]);
                    return t;
                },
                z = function (t) {
                    var e = k.call(this, (t = T(t, !0)));
                    return !(this === U && o(F, t) && !o(H, t)) && (!(e || !o(this, t) || !o(F, t) || (o(this, P) && this[P][t])) || e);
                },
                $ = function (t, e) {
                    if (((t = b(t)), (e = T(e, !0)), t !== U || !o(F, e) || o(H, e))) {
                        var n = N(t, e);
                        return !n || !o(F, e) || (o(t, P) && t[P][e]) || (n.enumerable = !0), n;
                    }
                },
                K = function (t) {
                    for (var e, n = C(b(t)), r = [], i = 0; n.length > i; ) o(F, (e = n[i++])) || e == P || e == s || r.push(e);
                    return r;
                },
                X = function (t) {
                    for (var e, n = t === U, r = C(n ? H : b(t)), i = [], u = 0; r.length > u; ) !o(F, (e = r[u++])) || (n && !o(U, e)) || i.push(F[e]);
                    return i;
                };
            V ||
                (a(
                    (R = function () {
                        if (this instanceof R) throw TypeError("Symbol is not a constructor!");
                        var t = p(arguments.length > 0 ? arguments[0] : void 0),
                            e = function (n) {
                                this === U && e.call(H, n), o(this, P) && o(this[P], t) && (this[P][t] = !1), B(this, t, w(1, n));
                            };
                        return i && Q && B(U, t, { configurable: !0, set: e }), Y(t);
                    }).prototype,
                    "toString",
                    function () {
                        return this._k;
                    }
                ),
                (_.f = $),
                (O.f = J),
                (n(33).f = A.f = K),
                (n(32).f = z),
                (n(46).f = X),
                i && !n(22) && a(U, "propertyIsEnumerable", z, !0),
                (d.f = function (t) {
                    return Y(v(t));
                })),
                u(u.G + u.W + u.F * !V, { Symbol: R });
            for (var Z = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Z.length > tt; ) v(Z[tt++]);
            for (var et = x(v.store), nt = 0; et.length > nt; ) h(et[nt++]);
            u(u.S + u.F * !V, "Symbol", {
                for: function (t) {
                    return o(I, (t += "")) ? I[t] : (I[t] = R(t));
                },
                keyFor: function (t) {
                    if (!q(t)) throw TypeError(t + " is not a symbol!");
                    for (var e in I) if (I[e] === t) return e;
                },
                useSetter: function () {
                    Q = !0;
                },
                useSimple: function () {
                    Q = !1;
                },
            }),
                u(u.S + u.F * !V, "Object", {
                    create: function (t, e) {
                        return void 0 === e ? S(t) : W(S(t), e);
                    },
                    defineProperty: J,
                    defineProperties: W,
                    getOwnPropertyDescriptor: $,
                    getOwnPropertyNames: K,
                    getOwnPropertySymbols: X,
                }),
                M &&
                    u(
                        u.S +
                            u.F *
                                (!V ||
                                    c(function () {
                                        var t = R();
                                        return "[null]" != j([t]) || "{}" != j({ a: t }) || "{}" != j(Object(t));
                                    })),
                        "JSON",
                        {
                            stringify: function (t) {
                                for (var e, n, r = [t], o = 1; arguments.length > o; ) r.push(arguments[o++]);
                                if (((n = e = r[1]), (E(e) || void 0 !== t) && !q(t)))
                                    return (
                                        m(e) ||
                                            (e = function (t, e) {
                                                if (("function" == typeof n && (e = n.call(this, t, e)), !q(e))) return e;
                                            }),
                                        (r[1] = e),
                                        j.apply(M, r)
                                    );
                            },
                        }
                    ),
                R.prototype[D] || n(7)(R.prototype, D, R.prototype.valueOf),
                l(R, "Symbol"),
                l(Math, "Math", !0),
                l(r.JSON, "JSON", !0);
        },
        function (t, e, n) {
            var r = n(4);
            r(r.S + r.F * !n(3), "Object", { defineProperty: n(2).f });
        },
        function (t, e, n) {
            var r = n(5),
                o = n(8),
                i = function (t, e) {
                    if ((o(t), !r(e) && null !== e)) throw TypeError(e + ": can't set as prototype!");
                };
            t.exports = {
                set:
                    Object.setPrototypeOf ||
                    ("__proto__" in {}
                        ? (function (t, e, r) {
                              try {
                                  (r = n(18)(Function.call, n(47).f(Object.prototype, "__proto__").set, 2))(t, []), (e = !(t instanceof Array));
                              } catch (t) {
                                  e = !0;
                              }
                              return function (t, n) {
                                  return i(t, n), e ? (t.__proto__ = n) : r(t, n), t;
                              };
                          })({}, !1)
                        : void 0),
                check: i,
            };
        },
        function (t, e, n) {
            "use strict";
            n.r(e);
            n(54), n(41), n(66), n(68), n(70), n(77), n(79), n(80), n(49), n(50), n(51), n(84), n(85), n(87), n(88);
            var r = n(34),
                o = n.n(r),
                i =
                    (n(92),
                    function (t) {
                        return new RegExp(/<[a-z][\s\S]*>/i).test(t);
                    }),
                u = function (t) {
                    var e = document.createElement("div");
                    return (e.innerHTML = t), e.childNodes;
                },
                a = function (t, e) {
                    return Math.floor(Math.random() * (e - t + 1)) + t;
                };
            n(95);
            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (t) {
                                return Object.getOwnPropertyDescriptor(n, t).enumerable;
                            })
                        )),
                        r.forEach(function (e) {
                            p(t, e, n[e]);
                        });
                }
                return t;
            }
            function c(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) {
                            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                            return n;
                        }
                    })(t) ||
                    (function (t) {
                        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
                    })(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance");
                    })()
                );
            }
            function f(t) {
                return (f =
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? function (t) {
                              return typeof t;
                          }
                        : function (t) {
                              return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                          })(t);
            }
            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                }
            }
            function p(t, e, n) {
                return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
            }
            var v = (function () {
                function t(e, n) {
                    var r = this;
                    if (
                        ((function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                        p(this, "eventNames", {
                            TYPE_CHARACTER: "TYPE_CHARACTER",
                            REMOVE_CHARACTER: "REMOVE_CHARACTER",
                            REMOVE_ALL: "REMOVE_ALL",
                            REMOVE_LAST_VISIBLE_NODE: "REMOVE_LAST_VISIBLE_NODE",
                            PAUSE_FOR: "PAUSE_FOR",
                            CALL_FUNCTION: "CALL_FUNCTION",
                            ADD_HTML_TAG_ELEMENT: "ADD_HTML_TAG_ELEMENT",
                            REMOVE_HTML_TAG_ELEMENT: "REMOVE_HTML_TAG_ELEMENT",
                            CHANGE_DELETE_SPEED: "CHANGE_DELETE_SPEED",
                            CHANGE_DELAY: "CHANGE_DELAY",
                        }),
                        p(this, "visibleNodeTypes", { HTML_TAG: "HTML_TAG", TEXT_NODE: "TEXT_NODE" }),
                        p(this, "state", {
                            cursorAnimation: null,
                            lastFrameTime: null,
                            pauseUntil: null,
                            eventQueue: [],
                            eventLoop: null,
                            eventLoopPaused: !1,
                            reverseCalledEvents: [],
                            calledEvents: [],
                            visibleNodes: [],
                            initialOptions: null,
                            elements: { container: null, wrapper: document.createElement("span"), cursor: document.createElement("span") },
                        }),
                        p(this, "options", { strings: null, cursor: "|", delay: "natural", deleteSpeed: "natural", loop: !1, autoStart: !1, devMode: !1, wrapperClassName: "Typewriter__wrapper", cursorClassName: "Typewriter__cursor" }),
                        p(this, "setupWrapperElement", function () {
                            (r.state.elements.wrapper.className = r.options.wrapperClassName),
                                (r.state.elements.cursor.className = r.options.cursorClassName),
                                (r.state.elements.cursor.innerHTML = r.options.cursor),
                                (r.state.elements.container.innerHTML = ""),
                                r.state.elements.container.appendChild(r.state.elements.wrapper),
                                r.state.elements.container.appendChild(r.state.elements.cursor);
                        }),
                        p(this, "start", function () {
                            return (r.state.eventLoopPaused = !1), r.runEventLoop(), r;
                        }),
                        p(this, "pause", function () {
                            return (r.state.eventLoopPaused = !0), r;
                        }),
                        p(this, "stop", function () {
                            return r.state.eventLoop && o.a.cancel(r.state.eventLoop), r;
                        }),
                        p(this, "pauseFor", function (t) {
                            return r.addEventToQueue(r.eventNames.PAUSE_FOR, { ms: t }), r;
                        }),
                        p(this, "typeOutAllStrings", function () {
                            return "string" == typeof r.options.strings
                                ? (r.typeString(r.options.strings).pauseFor(1500), r)
                                : (r.options.strings.forEach(function (t, e) {
                                      r.typeString(t).pauseFor(1500).deleteAll();
                                  }),
                                  r);
                        }),
                        p(this, "typeString", function (t) {
                            return i(t)
                                ? r.typeOutHTMLString(t)
                                : (t.split("").forEach(function (t) {
                                      r.addEventToQueue(r.eventNames.TYPE_CHARACTER, { character: t });
                                  }),
                                  r);
                        }),
                        p(this, "typeOutHTMLString", function (t) {
                            var e = u(t);
                            if (e.length > 0)
                                for (
                                    var n = function (t) {
                                            var n = e[t];
                                            if (n.nodeType && 1 === n.nodeType) {
                                                var o = n.innerText.split("");
                                                if (((n.innerText = ""), r.addEventToQueue(r.eventNames.ADD_HTML_TAG_ELEMENT, { node: n }), !o.length)) return { v: r };
                                                o.forEach(function (t) {
                                                    r.addEventToQueue(r.eventNames.TYPE_CHARACTER, { character: t, node: n });
                                                });
                                            } else n.textContent && r.typeString(n.textContent);
                                        },
                                        o = 0;
                                    o < e.length;
                                    o++
                                ) {
                                    var i = n(o);
                                    if ("object" === f(i)) return i.v;
                                }
                            return r;
                        }),
                        p(this, "deleteAll", function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                            return r.addEventToQueue(r.eventNames.REMOVE_ALL, { speed: t }), r;
                        }),
                        p(this, "changeDeleteSpeed", function (t) {
                            return r.addEventToQueue(r.eventNames.CHANGE_DELETE_SPEED, { speed: t }), r;
                        }),
                        p(this, "changeDelay", function (t) {
                            return r.addEventToQueue(r.eventNames.CHANGE_DELAY, { delay: t }), r;
                        }),
                        p(this, "deleteChars", function (t) {
                            for (var e = 0; e < t; e++) r.addEventToQueue(r.eventNames.REMOVE_CHARACTER);
                            return r;
                        }),
                        p(this, "callFunction", function (t, e) {
                            return "function" == typeof t && r.addEventToQueue(r.eventNames.CALL_FUNCTION, { cb: t, thisArg: e }), r;
                        }),
                        p(this, "typeCharacters", function (t) {
                            return (
                                t.forEach(function (t) {
                                    r.addEventToQueue(r.eventNames.TYPE_CHARACTER, { character: t });
                                }),
                                r
                            );
                        }),
                        p(this, "removeCharacters", function (t) {
                            return (
                                t.forEach(function () {
                                    r.addEventToQueue(r.eventNames.REMOVE_CHARACTER);
                                }),
                                r
                            );
                        }),
                        p(this, "addEventToQueue", function (t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return r.addEventToStateProperty(t, e, n, "eventQueue");
                        }),
                        p(this, "addReverseCalledEvent", function (t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                            return r.options.loop ? r.addEventToStateProperty(t, e, n, "reverseCalledEvents") : r;
                        }),
                        p(this, "addEventToStateProperty", function (t, e) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                o = arguments.length > 3 ? arguments[3] : void 0,
                                i = { eventName: t, eventArgs: e || {} };
                            return (r.state[o] = n ? [i].concat(c(r.state[o])) : c(r.state[o]).concat([i])), r;
                        }),
                        p(this, "runEventLoop", function () {
                            r.state.lastFrameTime || (r.state.lastFrameTime = Date.now());
                            var t = Date.now(),
                                e = t - r.state.lastFrameTime;
                            if (!r.state.eventQueue.length) {
                                if (!r.options.loop) return;
                                (r.state.eventQueue = c(r.state.calledEvents)), (r.state.calledEvents = []), (r.options = s({}, r.state.initialOptions)), r.addEventToQueue(r.eventNames.REMOVE_ALL, null, !0);
                            }
                            if (((r.state.eventLoop = o()(r.runEventLoop)), !r.state.eventLoopPaused)) {
                                if (r.state.pauseUntil) {
                                    if (t < r.state.pauseUntil) return;
                                    r.state.pauseUntil = null;
                                }
                                var n = c(r.state.eventQueue),
                                    i = n.shift();
                                if (
                                    !(
                                        e <=
                                        (i.eventName === r.eventNames.REMOVE_LAST_VISIBLE_NODE || i.eventName === r.eventNames.REMOVE_CHARACTER
                                            ? "natural" === r.options.deleteSpeed
                                                ? a(40, 80)
                                                : r.options.deleteSpeed
                                            : "natural" === r.options.delay
                                            ? a(120, 160)
                                            : r.options.delay)
                                    )
                                ) {
                                    var u = i.eventName,
                                        f = i.eventArgs;
                                    switch ((r.logInDevMode({ currentEvent: i, state: r.state }), u)) {
                                        case r.eventNames.TYPE_CHARACTER:
                                            var l = f.character,
                                                p = f.node,
                                                v = document.createTextNode(l);
                                            p ? p.appendChild(v) : r.state.elements.wrapper.appendChild(v), (r.state.visibleNodes = c(r.state.visibleNodes).concat([{ type: r.visibleNodeTypes.TEXT_NODE, node: v }]));
                                            break;
                                        case r.eventNames.REMOVE_CHARACTER:
                                            n.unshift({ eventName: r.eventNames.REMOVE_LAST_VISIBLE_NODE, eventArgs: { removingCharacterNode: !0 } });
                                            break;
                                        case r.eventNames.PAUSE_FOR:
                                            var d = i.eventArgs.ms;
                                            r.state.pauseUntil = Date.now() + parseInt(d);
                                            break;
                                        case r.eventNames.CALL_FUNCTION:
                                            var h = i.eventArgs,
                                                y = h.cb,
                                                m = h.thisArg;
                                            y.call(m, { elements: r.state.elements });
                                            break;
                                        case r.eventNames.ADD_HTML_TAG_ELEMENT:
                                            var g = i.eventArgs.node;
                                            r.state.elements.wrapper.appendChild(g), (r.state.visibleNodes = c(r.state.visibleNodes).concat([{ type: r.visibleNodeTypes.HTML_TAG, node: g }]));
                                            break;
                                        case r.eventNames.REMOVE_ALL:
                                            var E = r.state.visibleNodes,
                                                b = f.speed,
                                                T = [];
                                            b && T.push({ eventName: r.eventNames.CHANGE_DELETE_SPEED, eventArgs: { speed: b } });
                                            for (var w = 0, S = E.length; w < S; w++) T.push({ eventName: r.eventNames.REMOVE_LAST_VISIBLE_NODE, eventArgs: { removingCharacterNode: !1 } });
                                            b && T.push({ eventName: r.eventNames.CHANGE_DELETE_SPEED, eventArgs: { speed: r.options.deleteSpeed } }), n.unshift.apply(n, T);
                                            break;
                                        case r.eventNames.REMOVE_LAST_VISIBLE_NODE:
                                            var A = i.eventArgs.removingCharacterNode;
                                            if (r.state.visibleNodes.length) {
                                                var _ = r.state.visibleNodes.pop(),
                                                    O = _.type,
                                                    x = _.node;
                                                x.parentNode.removeChild(x), O === r.visibleNodeTypes.HTML_TAG && A && n.unshift({ eventName: r.eventNames.REMOVE_LAST_VISIBLE_NODE, eventArgs: {} });
                                            }
                                            break;
                                        case r.eventNames.CHANGE_DELETE_SPEED:
                                            r.options.deleteSpeed = i.eventArgs.speed;
                                            break;
                                        case r.eventNames.CHANGE_DELAY:
                                            r.options.delay = i.eventArgs.delay;
                                    }
                                    r.options.loop && i.eventName !== r.eventNames.REMOVE_ALL && i.eventName !== r.eventNames.REMOVE_CHARACTER && (r.state.calledEvents = c(r.state.calledEvents).concat([i])),
                                        (r.state.eventQueue = n),
                                        (r.state.lastFrameTime = t);
                                }
                            }
                        }),
                        !e)
                    )
                        throw new Error("No container element was provided");
                    if ("string" == typeof e) {
                        var l = document.querySelector(e);
                        if (!l) throw new Error("Could not find container element");
                        this.state.elements.container = l;
                    } else this.state.elements.container = e;
                    n && (this.options = s({}, this.options, n)), (this.state.initialOptions = this.options), this.init();
                }
                return (
                    (function (t, e, n) {
                        e && l(t.prototype, e), n && l(t, n);
                    })(t, [
                        {
                            key: "init",
                            value: function () {
                                this.setupWrapperElement(), !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start();
                            },
                        },
                        {
                            key: "logInDevMode",
                            value: function (t) {
                                this.options.devMode && console.log(t);
                            },
                        },
                    ]),
                    t
                );
            })();
            n.d(e, "default", function () {
                return v;
            });
        },
        function (t, e, n) {
            "use strict";
            var r = n(4),
                o = n(38)(2);
            r(r.P + r.F * !n(40)([].filter, !0), "Array", {
                filter: function (t) {
                    return o(this, t, arguments[1]);
                },
            });
        },
        function (t, e) {
            t.exports = function (t) {
                if ("function" != typeof t) throw TypeError(t + " is not a function!");
                return t;
            };
        },
        function (t, e, n) {
            var r = n(57);
            t.exports = function (t, e) {
                return new (r(t))(e);
            };
        },
        function (t, e, n) {
            var r = n(5),
                o = n(26),
                i = n(0)("species");
            t.exports = function (t) {
                var e;
                return o(t) && ("function" != typeof (e = t.constructor) || (e !== Array && !o(e.prototype)) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e;
            };
        },
        function (t, e, n) {
            var r = n(0)("unscopables"),
                o = Array.prototype;
            void 0 == o[r] && n(7)(o, r, {}),
                (t.exports = function (t) {
                    o[r][t] = !0;
                });
        },
        function (t, e) {
            t.exports = function (t, e) {
                return { value: e, done: !!t };
            };
        },
        function (t, e, n) {
            "use strict";
            var r = n(35),
                o = n(14),
                i = n(30),
                u = {};
            n(7)(u, n(0)("iterator"), function () {
                return this;
            }),
                (t.exports = function (t, e, n) {
                    (t.prototype = r(u, { next: o(1, n) })), i(t, e + " Iterator");
                });
        },
        function (t, e, n) {
            var r = n(2),
                o = n(8),
                i = n(17);
            t.exports = n(3)
                ? Object.defineProperties
                : function (t, e) {
                      o(t);
                      for (var n, u = i(e), a = u.length, s = 0; a > s; ) r.f(t, (n = u[s++]), e[n]);
                      return t;
                  };
        },
        function (t, e, n) {
            var r = n(12),
                o = n(24),
                i = n(63);
            t.exports = function (t) {
                return function (e, n, u) {
                    var a,
                        s = r(e),
                        c = o(s.length),
                        f = i(u, c);
                    if (t && n != n) {
                        for (; c > f; ) if ((a = s[f++]) != a) return !0;
                    } else for (; c > f; f++) if ((t || f in s) && s[f] === n) return t || f || 0;
                    return !t && -1;
                };
            };
        },
        function (t, e, n) {
            var r = n(25),
                o = Math.max,
                i = Math.min;
            t.exports = function (t, e) {
                return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e);
            };
        },
        function (t, e, n) {
            var r = n(1).document;
            t.exports = r && r.documentElement;
        },
        function (t, e, n) {
            var r = n(10),
                o = n(20),
                i = n(28)("IE_PROTO"),
                u = Object.prototype;
            t.exports =
                Object.getPrototypeOf ||
                function (t) {
                    return (t = o(t)), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null;
                };
        },
        function (t, e, n) {
            var r = n(20),
                o = n(17);
            n(67)("keys", function () {
                return function (t) {
                    return o(r(t));
                };
            });
        },
        function (t, e, n) {
            var r = n(4),
                o = n(11),
                i = n(6);
            t.exports = function (t, e) {
                var n = (o.Object || {})[t] || Object[t],
                    u = {};
                (u[t] = e(n)),
                    r(
                        r.S +
                            r.F *
                                i(function () {
                                    n(1);
                                }),
                        "Object",
                        u
                    );
            };
        },
        function (t, e, n) {
            "use strict";
            var r = n(69)(!0);
            n(42)(
                String,
                "String",
                function (t) {
                    (this._t = String(t)), (this._i = 0);
                },
                function () {
                    var t,
                        e = this._t,
                        n = this._i;
                    return n >= e.length ? { value: void 0, done: !0 } : ((t = r(e, n)), (this._i += t.length), { value: t, done: !1 });
                }
            );
        },
        function (t, e, n) {
            var r = n(25),
                o = n(21);
            t.exports = function (t) {
                return function (e, n) {
                    var i,
                        u,
                        a = String(o(e)),
                        s = r(n),
                        c = a.length;
                    return s < 0 || s >= c
                        ? t
                            ? ""
                            : void 0
                        : (i = a.charCodeAt(s)) < 55296 || i > 56319 || s + 1 === c || (u = a.charCodeAt(s + 1)) < 56320 || u > 57343
                        ? t
                            ? a.charAt(s)
                            : i
                        : t
                        ? a.slice(s, s + 2)
                        : u - 56320 + ((i - 55296) << 10) + 65536;
                };
            };
        },
        function (t, e, n) {
            "use strict";
            var r = n(18),
                o = n(4),
                i = n(20),
                u = n(71),
                a = n(72),
                s = n(24),
                c = n(73),
                f = n(74);
            o(
                o.S +
                    o.F *
                        !n(76)(function (t) {
                            Array.from(t);
                        }),
                "Array",
                {
                    from: function (t) {
                        var e,
                            n,
                            o,
                            l,
                            p = i(t),
                            v = "function" == typeof this ? this : Array,
                            d = arguments.length,
                            h = d > 1 ? arguments[1] : void 0,
                            y = void 0 !== h,
                            m = 0,
                            g = f(p);
                        if ((y && (h = r(h, d > 2 ? arguments[2] : void 0, 2)), void 0 == g || (v == Array && a(g)))) for (n = new v((e = s(p.length))); e > m; m++) c(n, m, y ? h(p[m], m) : p[m]);
                        else for (l = g.call(p), n = new v(); !(o = l.next()).done; m++) c(n, m, y ? u(l, h, [o.value, m], !0) : o.value);
                        return (n.length = m), n;
                    },
                }
            );
        },
        function (t, e, n) {
            var r = n(8);
            t.exports = function (t, e, n, o) {
                try {
                    return o ? e(r(n)[0], n[1]) : e(n);
                } catch (e) {
                    var i = t.return;
                    throw (void 0 !== i && r(i.call(t)), e);
                }
            };
        },
        function (t, e, n) {
            var r = n(16),
                o = n(0)("iterator"),
                i = Array.prototype;
            t.exports = function (t) {
                return void 0 !== t && (r.Array === t || i[o] === t);
            };
        },
        function (t, e, n) {
            "use strict";
            var r = n(2),
                o = n(14);
            t.exports = function (t, e, n) {
                e in t ? r.f(t, e, o(0, n)) : (t[e] = n);
            };
        },
        function (t, e, n) {
            var r = n(75),
                o = n(0)("iterator"),
                i = n(16);
            t.exports = n(11).getIteratorMethod = function (t) {
                if (void 0 != t) return t[o] || t["@@iterator"] || i[r(t)];
            };
        },
        function (t, e, n) {
            var r = n(19),
                o = n(0)("toStringTag"),
                i =
                    "Arguments" ==
                    r(
                        (function () {
                            return arguments;
                        })()
                    );
            t.exports = function (t) {
                var e, n, u;
                return void 0 === t
                    ? "Undefined"
                    : null === t
                    ? "Null"
                    : "string" ==
                      typeof (n = (function (t, e) {
                          try {
                              return t[e];
                          } catch (t) {}
                      })((e = Object(t)), o))
                    ? n
                    : i
                    ? r(e)
                    : "Object" == (u = r(e)) && "function" == typeof e.callee
                    ? "Arguments"
                    : u;
            };
        },
        function (t, e, n) {
            var r = n(0)("iterator"),
                o = !1;
            try {
                var i = [7][r]();
                (i.return = function () {
                    o = !0;
                }),
                    Array.from(i, function () {
                        throw 2;
                    });
            } catch (t) {}
            t.exports = function (t, e) {
                if (!e && !o) return !1;
                var n = !1;
                try {
                    var i = [7],
                        u = i[r]();
                    (u.next = function () {
                        return { done: (n = !0) };
                    }),
                        (i[r] = function () {
                            return u;
                        }),
                        t(i);
                } catch (t) {}
                return n;
            };
        },
        function (t, e, n) {
            "use strict";
            n(78);
            var r = n(8),
                o = n(31),
                i = n(3),
                u = /./.toString,
                a = function (t) {
                    n(9)(RegExp.prototype, "toString", t, !0);
                };
            n(6)(function () {
                return "/a/b" != u.call({ source: "a", flags: "b" });
            })
                ? a(function () {
                      var t = r(this);
                      return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? o.call(t) : void 0);
                  })
                : "toString" != u.name &&
                  a(function () {
                      return u.call(this);
                  });
        },
        function (t, e, n) {
            n(3) && "g" != /./g.flags && n(2).f(RegExp.prototype, "flags", { configurable: !0, get: n(31) });
        },
        function (t, e, n) {
            var r = Date.prototype,
                o = r.toString,
                i = r.getTime;
            new Date(NaN) + "" != "Invalid Date" &&
                n(9)(r, "toString", function () {
                    var t = i.call(this);
                    return t == t ? o.call(this) : "Invalid Date";
                });
        },
        function (t, e, n) {
            var r = n(4);
            r(r.S, "Array", { isArray: n(26) });
        },
        function (t, e, n) {
            var r = n(15)("meta"),
                o = n(5),
                i = n(10),
                u = n(2).f,
                a = 0,
                s =
                    Object.isExtensible ||
                    function () {
                        return !0;
                    },
                c = !n(6)(function () {
                    return s(Object.preventExtensions({}));
                }),
                f = function (t) {
                    u(t, r, { value: { i: "O" + ++a, w: {} } });
                },
                l = (t.exports = {
                    KEY: r,
                    NEED: !1,
                    fastKey: function (t, e) {
                        if (!o(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!i(t, r)) {
                            if (!s(t)) return "F";
                            if (!e) return "E";
                            f(t);
                        }
                        return t[r].i;
                    },
                    getWeak: function (t, e) {
                        if (!i(t, r)) {
                            if (!s(t)) return !0;
                            if (!e) return !1;
                            f(t);
                        }
                        return t[r].w;
                    },
                    onFreeze: function (t) {
                        return c && l.NEED && s(t) && !i(t, r) && f(t), t;
                    },
                });
        },
        function (t, e, n) {
            var r = n(17),
                o = n(46),
                i = n(32);
            t.exports = function (t) {
                var e = r(t),
                    n = o.f;
                if (n) for (var u, a = n(t), s = i.f, c = 0; a.length > c; ) s.call(t, (u = a[c++])) && e.push(u);
                return e;
            };
        },
        function (t, e, n) {
            var r = n(12),
                o = n(33).f,
                i = {}.toString,
                u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            t.exports.f = function (t) {
                return u && "[object Window]" == i.call(t)
                    ? (function (t) {
                          try {
                              return o(t);
                          } catch (t) {
                              return u.slice();
                          }
                      })(t)
                    : o(r(t));
            };
        },
        function (t, e, n) {
            var r = n(4);
            r(r.S, "Date", {
                now: function () {
                    return new Date().getTime();
                },
            });
        },
        function (t, e, n) {
            n(86)("split", 2, function (t, e, r) {
                "use strict";
                var o = n(48),
                    i = r,
                    u = [].push;
                if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
                    var a = void 0 === /()??/.exec("")[1];
                    r = function (t, e) {
                        var n = String(this);
                        if (void 0 === t && 0 === e) return [];
                        if (!o(t)) return i.call(n, t, e);
                        var r,
                            s,
                            c,
                            f,
                            l,
                            p = [],
                            v = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                            d = 0,
                            h = void 0 === e ? 4294967295 : e >>> 0,
                            y = new RegExp(t.source, v + "g");
                        for (
                            a || (r = new RegExp("^" + y.source + "$(?!\\s)", v));
                            (s = y.exec(n)) &&
                            !(
                                (c = s.index + s[0].length) > d &&
                                (p.push(n.slice(d, s.index)),
                                !a &&
                                    s.length > 1 &&
                                    s[0].replace(r, function () {
                                        for (l = 1; l < arguments.length - 2; l++) void 0 === arguments[l] && (s[l] = void 0);
                                    }),
                                s.length > 1 && s.index < n.length && u.apply(p, s.slice(1)),
                                (f = s[0].length),
                                (d = c),
                                p.length >= h)
                            );

                        )
                            y.lastIndex === s.index && y.lastIndex++;
                        return d === n.length ? (!f && y.test("")) || p.push("") : p.push(n.slice(d)), p.length > h ? p.slice(0, h) : p;
                    };
                } else
                    "0".split(void 0, 0).length &&
                        (r = function (t, e) {
                            return void 0 === t && 0 === e ? [] : i.call(this, t, e);
                        });
                return [
                    function (n, o) {
                        var i = t(this),
                            u = void 0 == n ? void 0 : n[e];
                        return void 0 !== u ? u.call(n, i, o) : r.call(String(i), n, o);
                    },
                    r,
                ];
            });
        },
        function (t, e, n) {
            "use strict";
            var r = n(7),
                o = n(9),
                i = n(6),
                u = n(21),
                a = n(0);
            t.exports = function (t, e, n) {
                var s = a(t),
                    c = n(u, s, ""[t]),
                    f = c[0],
                    l = c[1];
                i(function () {
                    var e = {};
                    return (
                        (e[s] = function () {
                            return 7;
                        }),
                        7 != ""[t](e)
                    );
                }) &&
                    (o(String.prototype, t, f),
                    r(
                        RegExp.prototype,
                        s,
                        2 == e
                            ? function (t, e) {
                                  return l.call(t, this, e);
                              }
                            : function (t) {
                                  return l.call(t, this);
                              }
                    ));
            };
        },
        function (t, e, n) {
            for (
                var r = n(41),
                    o = n(17),
                    i = n(9),
                    u = n(1),
                    a = n(7),
                    s = n(16),
                    c = n(0),
                    f = c("iterator"),
                    l = c("toStringTag"),
                    p = s.Array,
                    v = {
                        CSSRuleList: !0,
                        CSSStyleDeclaration: !1,
                        CSSValueList: !1,
                        ClientRectList: !1,
                        DOMRectList: !1,
                        DOMStringList: !1,
                        DOMTokenList: !0,
                        DataTransferItemList: !1,
                        FileList: !1,
                        HTMLAllCollection: !1,
                        HTMLCollection: !1,
                        HTMLFormElement: !1,
                        HTMLSelectElement: !1,
                        MediaList: !0,
                        MimeTypeArray: !1,
                        NamedNodeMap: !1,
                        NodeList: !0,
                        PaintRequestList: !1,
                        Plugin: !1,
                        PluginArray: !1,
                        SVGLengthList: !1,
                        SVGNumberList: !1,
                        SVGPathSegList: !1,
                        SVGPointList: !1,
                        SVGStringList: !1,
                        SVGTransformList: !1,
                        SourceBufferList: !1,
                        StyleSheetList: !0,
                        TextTrackCueList: !1,
                        TextTrackList: !1,
                        TouchList: !1,
                    },
                    d = o(v),
                    h = 0;
                h < d.length;
                h++
            ) {
                var y,
                    m = d[h],
                    g = v[m],
                    E = u[m],
                    b = E && E.prototype;
                if (b && (b[f] || a(b, f, p), b[l] || a(b, l, m), (s[m] = p), g)) for (y in r) b[y] || i(b, y, r[y], !0);
            }
        },
        function (t, e, n) {
            "use strict";
            var r = n(4),
                o = n(38)(0),
                i = n(40)([].forEach, !0);
            r(r.P + r.F * !i, "Array", {
                forEach: function (t) {
                    return o(this, t, arguments[1]);
                },
            });
        },
        function (t, e) {
            var n;
            n = (function () {
                return this;
            })();
            try {
                n = n || Function("return this")() || (0, eval)("this");
            } catch (t) {
                "object" == typeof window && (n = window);
            }
            t.exports = n;
        },
        function (t, e, n) {
            (function (e) {
                (function () {
                    var n, r, o, i, u, a;
                    "undefined" != typeof performance && null !== performance && performance.now
                        ? (t.exports = function () {
                              return performance.now();
                          })
                        : void 0 !== e && null !== e && e.hrtime
                        ? ((t.exports = function () {
                              return (n() - u) / 1e6;
                          }),
                          (r = e.hrtime),
                          (i = (n = function () {
                              var t;
                              return 1e9 * (t = r())[0] + t[1];
                          })()),
                          (a = 1e9 * e.uptime()),
                          (u = i - a))
                        : Date.now
                        ? ((t.exports = function () {
                              return Date.now() - o;
                          }),
                          (o = Date.now()))
                        : ((t.exports = function () {
                              return new Date().getTime() - o;
                          }),
                          (o = new Date().getTime()));
                }.call(this));
            }.call(this, n(91)));
        },
        function (t, e) {
            var n,
                r,
                o = (t.exports = {});
            function i() {
                throw new Error("setTimeout has not been defined");
            }
            function u() {
                throw new Error("clearTimeout has not been defined");
            }
            function a(t) {
                if (n === setTimeout) return setTimeout(t, 0);
                if ((n === i || !n) && setTimeout) return (n = setTimeout), setTimeout(t, 0);
                try {
                    return n(t, 0);
                } catch (e) {
                    try {
                        return n.call(null, t, 0);
                    } catch (e) {
                        return n.call(this, t, 0);
                    }
                }
            }
            !(function () {
                try {
                    n = "function" == typeof setTimeout ? setTimeout : i;
                } catch (t) {
                    n = i;
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : u;
                } catch (t) {
                    r = u;
                }
            })();
            var s,
                c = [],
                f = !1,
                l = -1;
            function p() {
                f && s && ((f = !1), s.length ? (c = s.concat(c)) : (l = -1), c.length && v());
            }
            function v() {
                if (!f) {
                    var t = a(p);
                    f = !0;
                    for (var e = c.length; e; ) {
                        for (s = c, c = []; ++l < e; ) s && s[l].run();
                        (l = -1), (e = c.length);
                    }
                    (s = null),
                        (f = !1),
                        (function (t) {
                            if (r === clearTimeout) return clearTimeout(t);
                            if ((r === u || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(t);
                            try {
                                r(t);
                            } catch (e) {
                                try {
                                    return r.call(null, t);
                                } catch (e) {
                                    return r.call(this, t);
                                }
                            }
                        })(t);
                }
            }
            function d(t, e) {
                (this.fun = t), (this.array = e);
            }
            function h() {}
            (o.nextTick = function (t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                c.push(new d(t, e)), 1 !== c.length || f || a(v);
            }),
                (d.prototype.run = function () {
                    this.fun.apply(null, this.array);
                }),
                (o.title = "browser"),
                (o.browser = !0),
                (o.env = {}),
                (o.argv = []),
                (o.version = ""),
                (o.versions = {}),
                (o.on = h),
                (o.addListener = h),
                (o.once = h),
                (o.off = h),
                (o.removeListener = h),
                (o.removeAllListeners = h),
                (o.emit = h),
                (o.prependListener = h),
                (o.prependOnceListener = h),
                (o.listeners = function (t) {
                    return [];
                }),
                (o.binding = function (t) {
                    throw new Error("process.binding is not supported");
                }),
                (o.cwd = function () {
                    return "/";
                }),
                (o.chdir = function (t) {
                    throw new Error("process.chdir is not supported");
                }),
                (o.umask = function () {
                    return 0;
                });
        },
        function (t, e, n) {
            var r = n(1),
                o = n(93),
                i = n(2).f,
                u = n(33).f,
                a = n(48),
                s = n(31),
                c = r.RegExp,
                f = c,
                l = c.prototype,
                p = /a/g,
                v = /a/g,
                d = new c(p) !== p;
            if (
                n(3) &&
                (!d ||
                    n(6)(function () {
                        return (v[n(0)("match")] = !1), c(p) != p || c(v) == v || "/a/i" != c(p, "i");
                    }))
            ) {
                c = function (t, e) {
                    var n = this instanceof c,
                        r = a(t),
                        i = void 0 === e;
                    return !n && r && t.constructor === c && i ? t : o(d ? new f(r && !i ? t.source : t, e) : f((r = t instanceof c) ? t.source : t, r && i ? s.call(t) : e), n ? this : l, c);
                };
                for (
                    var h = function (t) {
                            (t in c) ||
                                i(c, t, {
                                    configurable: !0,
                                    get: function () {
                                        return f[t];
                                    },
                                    set: function (e) {
                                        f[t] = e;
                                    },
                                });
                        },
                        y = u(f),
                        m = 0;
                    y.length > m;

                )
                    h(y[m++]);
                (l.constructor = c), (c.prototype = l), n(9)(r, "RegExp", c);
            }
            n(94)("RegExp");
        },
        function (t, e, n) {
            var r = n(5),
                o = n(52).set;
            t.exports = function (t, e, n) {
                var i,
                    u = e.constructor;
                return u !== n && "function" == typeof u && (i = u.prototype) !== n.prototype && r(i) && o && o(t, i), t;
            };
        },
        function (t, e, n) {
            "use strict";
            var r = n(1),
                o = n(2),
                i = n(3),
                u = n(0)("species");
            t.exports = function (t) {
                var e = r[t];
                i &&
                    e &&
                    !e[u] &&
                    o.f(e, u, {
                        configurable: !0,
                        get: function () {
                            return this;
                        },
                    });
            };
        },
        function (t, e, n) {
            var r = n(96);
            "string" == typeof r && (r = [[t.i, r, ""]]);
            var o = { hmr: !0, transform: void 0, insertInto: void 0 };
            n(98)(r, o);
            r.locals && (t.exports = r.locals);
        },
        function (t, e, n) {
            (t.exports = n(97)(!1)).push([
                t.i,
                ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}to{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}to{opacity:0}}",
                "",
            ]);
        },
        function (t, e) {
            t.exports = function (t) {
                var e = [];
                return (
                    (e.toString = function () {
                        return this.map(function (e) {
                            var n = (function (t, e) {
                                var n = t[1] || "",
                                    r = t[3];
                                if (!r) return n;
                                if (e && "function" == typeof btoa) {
                                    var o = (function (t) {
                                            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + " */";
                                        })(r),
                                        i = r.sources.map(function (t) {
                                            return "/*# sourceURL=" + r.sourceRoot + t + " */";
                                        });
                                    return [n].concat(i).concat([o]).join("\n");
                                }
                                return [n].join("\n");
                            })(e, t);
                            return e[2] ? "@media " + e[2] + "{" + n + "}" : n;
                        }).join("");
                    }),
                    (e.i = function (t, n) {
                        "string" == typeof t && (t = [[null, t, ""]]);
                        for (var r = {}, o = 0; o < this.length; o++) {
                            var i = this[o][0];
                            "number" == typeof i && (r[i] = !0);
                        }
                        for (o = 0; o < t.length; o++) {
                            var u = t[o];
                            ("number" == typeof u[0] && r[u[0]]) || (n && !u[2] ? (u[2] = n) : n && (u[2] = "(" + u[2] + ") and (" + n + ")"), e.push(u));
                        }
                    }),
                    e
                );
            };
        },
        function (t, e, n) {
            var r = {},
                o = (function (t) {
                    var e;
                    return function () {
                        return void 0 === e && (e = t.apply(this, arguments)), e;
                    };
                })(function () {
                    return window && document && document.all && !window.atob;
                }),
                i = (function (t) {
                    var e = {};
                    return function (t, n) {
                        if ("function" == typeof t) return t();
                        if (void 0 === e[t]) {
                            var r = function (t, e) {
                                return e ? e.querySelector(t) : document.querySelector(t);
                            }.call(this, t, n);
                            if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                                try {
                                    r = r.contentDocument.head;
                                } catch (t) {
                                    r = null;
                                }
                            e[t] = r;
                        }
                        return e[t];
                    };
                })(),
                u = null,
                a = 0,
                s = [],
                c = n(99);
            function f(t, e) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n],
                        i = r[o.id];
                    if (i) {
                        i.refs++;
                        for (var u = 0; u < i.parts.length; u++) i.parts[u](o.parts[u]);
                        for (; u < o.parts.length; u++) i.parts.push(y(o.parts[u], e));
                    } else {
                        var a = [];
                        for (u = 0; u < o.parts.length; u++) a.push(y(o.parts[u], e));
                        r[o.id] = { id: o.id, refs: 1, parts: a };
                    }
                }
            }
            function l(t, e) {
                for (var n = [], r = {}, o = 0; o < t.length; o++) {
                    var i = t[o],
                        u = e.base ? i[0] + e.base : i[0],
                        a = { css: i[1], media: i[2], sourceMap: i[3] };
                    r[u] ? r[u].parts.push(a) : n.push((r[u] = { id: u, parts: [a] }));
                }
                return n;
            }
            function p(t, e) {
                var n = i(t.insertInto);
                if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
                var r = s[s.length - 1];
                if ("top" === t.insertAt) r ? (r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e)) : n.insertBefore(e, n.firstChild), s.push(e);
                else if ("bottom" === t.insertAt) n.appendChild(e);
                else {
                    if ("object" != typeof t.insertAt || !t.insertAt.before)
                        throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                    var o = i(t.insertAt.before, n);
                    n.insertBefore(e, o);
                }
            }
            function v(t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
                var e = s.indexOf(t);
                e >= 0 && s.splice(e, 1);
            }
            function d(t) {
                var e = document.createElement("style");
                if ((void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce)) {
                    var r = (function () {
                        0;
                        return n.nc;
                    })();
                    r && (t.attrs.nonce = r);
                }
                return h(e, t.attrs), p(t, e), e;
            }
            function h(t, e) {
                Object.keys(e).forEach(function (n) {
                    t.setAttribute(n, e[n]);
                });
            }
            function y(t, e) {
                var n, r, o, i;
                if (e.transform && t.css) {
                    if (!(i = e.transform(t.css))) return function () {};
                    t.css = i;
                }
                if (e.singleton) {
                    var s = a++;
                    (n = u || (u = d(e))), (r = g.bind(null, n, s, !1)), (o = g.bind(null, n, s, !0));
                } else
                    t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa
                        ? ((n = (function (t) {
                              var e = document.createElement("link");
                              return void 0 === t.attrs.type && (t.attrs.type = "text/css"), (t.attrs.rel = "stylesheet"), h(e, t.attrs), p(t, e), e;
                          })(e)),
                          (r = function (t, e, n) {
                              var r = n.css,
                                  o = n.sourceMap,
                                  i = void 0 === e.convertToAbsoluteUrls && o;
                              (e.convertToAbsoluteUrls || i) && (r = c(r));
                              o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
                              var u = new Blob([r], { type: "text/css" }),
                                  a = t.href;
                              (t.href = URL.createObjectURL(u)), a && URL.revokeObjectURL(a);
                          }.bind(null, n, e)),
                          (o = function () {
                              v(n), n.href && URL.revokeObjectURL(n.href);
                          }))
                        : ((n = d(e)),
                          (r = function (t, e) {
                              var n = e.css,
                                  r = e.media;
                              r && t.setAttribute("media", r);
                              if (t.styleSheet) t.styleSheet.cssText = n;
                              else {
                                  for (; t.firstChild; ) t.removeChild(t.firstChild);
                                  t.appendChild(document.createTextNode(n));
                              }
                          }.bind(null, n)),
                          (o = function () {
                              v(n);
                          }));
                return (
                    r(t),
                    function (e) {
                        if (e) {
                            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                            r((t = e));
                        } else o();
                    }
                );
            }
            t.exports = function (t, e) {
                if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
                ((e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}), e.singleton || "boolean" == typeof e.singleton || (e.singleton = o()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
                var n = l(t, e);
                return (
                    f(n, e),
                    function (t) {
                        for (var o = [], i = 0; i < n.length; i++) {
                            var u = n[i];
                            (a = r[u.id]).refs--, o.push(a);
                        }
                        t && f(l(t, e), e);
                        for (i = 0; i < o.length; i++) {
                            var a;
                            if (0 === (a = o[i]).refs) {
                                for (var s = 0; s < a.parts.length; s++) a.parts[s]();
                                delete r[a.id];
                            }
                        }
                    }
                );
            };
            var m = (function () {
                var t = [];
                return function (e, n) {
                    return (t[e] = n), t.filter(Boolean).join("\n");
                };
            })();
            function g(t, e, n, r) {
                var o = n ? "" : r.css;
                if (t.styleSheet) t.styleSheet.cssText = m(e, o);
                else {
                    var i = document.createTextNode(o),
                        u = t.childNodes;
                    u[e] && t.removeChild(u[e]), u.length ? t.insertBefore(i, u[e]) : t.appendChild(i);
                }
            }
        },
        function (t, e) {
            t.exports = function (t) {
                var e = "undefined" != typeof window && window.location;
                if (!e) throw new Error("fixUrls requires window.location");
                if (!t || "string" != typeof t) return t;
                var n = e.protocol + "//" + e.host,
                    r = n + e.pathname.replace(/\/[^\/]*$/, "/");
                return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
                    var o,
                        i = e
                            .trim()
                            .replace(/^"(.*)"$/, function (t, e) {
                                return e;
                            })
                            .replace(/^'(.*)'$/, function (t, e) {
                                return e;
                            });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : ((o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, "")), "url(" + JSON.stringify(o) + ")");
                });
            };
        },
    ]).default;
});

/* 12 -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) {
    var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    e = e.replace(a, function (e, a, t, i) {
        return a + a + t + t + i + i;
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function clamp(e, a, t) {
    return Math.min(Math.max(e, a), t);
}
function isInArray(e, a) {
    return a.indexOf(e) > -1;
}
var pJS = function (e, a) {
    var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: { el: t, w: t.offsetWidth, h: t.offsetHeight },
        particles: {
            number: { value: 400, density: { enable: !0, value_area: 800 } },
            color: { value: "#fff" },
            shape: { type: "circle", stroke: { width: 0, color: "#ff0000" }, polygon: { nb_sides: 5 }, image: { src: "", width: 100, height: 100 } },
            opacity: { value: 1, random: !1, anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 } },
            size: { value: 20, random: !1, anim: { enable: !1, speed: 20, size_min: 0, sync: !1 } },
            line_linked: { enable: !0, distance: 100, color: "#fff", opacity: 1, width: 1 },
            move: { enable: !0, speed: 2, direction: "none", random: !1, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 } },
            array: [],
        },
        interactivity: {
            detect_on: "canvas",
            events: { onhover: { enable: !0, mode: "grab" }, onclick: { enable: !0, mode: "push" }, resize: !0 },
            modes: { grab: { distance: 100, line_linked: { opacity: 1 } }, bubble: { distance: 200, size: 80, duration: 0.4 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } },
            mouse: {},
        },
        retina_detect: !1,
        fn: { interact: {}, modes: {}, vendors: {} },
        tmp: {},
    };
    var i = this.pJS;
    a && Object.deepExtend(i, a),
        (i.tmp.obj = {
            size_value: i.particles.size.value,
            size_anim_speed: i.particles.size.anim.speed,
            move_speed: i.particles.move.speed,
            line_linked_distance: i.particles.line_linked.distance,
            line_linked_width: i.particles.line_linked.width,
            mode_grab_distance: i.interactivity.modes.grab.distance,
            mode_bubble_distance: i.interactivity.modes.bubble.distance,
            mode_bubble_size: i.interactivity.modes.bubble.size,
            mode_repulse_distance: i.interactivity.modes.repulse.distance,
        }),
        (i.fn.retinaInit = function () {
            i.retina_detect && window.devicePixelRatio > 1 ? ((i.canvas.pxratio = window.devicePixelRatio), (i.tmp.retina = !0)) : ((i.canvas.pxratio = 1), (i.tmp.retina = !1)),
                (i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio),
                (i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio),
                (i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio),
                (i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio),
                (i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio),
                (i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio),
                (i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio),
                (i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio),
                (i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio),
                (i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio),
                (i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio);
        }),
        (i.fn.canvasInit = function () {
            i.canvas.ctx = i.canvas.el.getContext("2d");
        }),
        (i.fn.canvasSize = function () {
            (i.canvas.el.width = i.canvas.w),
                (i.canvas.el.height = i.canvas.h),
                i &&
                    i.interactivity.events.resize &&
                    window.addEventListener("resize", function () {
                        (i.canvas.w = i.canvas.el.offsetWidth),
                            (i.canvas.h = i.canvas.el.offsetHeight),
                            i.tmp.retina && ((i.canvas.w *= i.canvas.pxratio), (i.canvas.h *= i.canvas.pxratio)),
                            (i.canvas.el.width = i.canvas.w),
                            (i.canvas.el.height = i.canvas.h),
                            i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()),
                            i.fn.vendors.densityAutoParticles();
                    });
        }),
        (i.fn.canvasPaint = function () {
            i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
        }),
        (i.fn.canvasClear = function () {
            i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
        }),
        (i.fn.particle = function (e, a, t) {
            if (
                ((this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value),
                i.particles.size.anim.enable && ((this.size_status = !1), (this.vs = i.particles.size.anim.speed / 100), i.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
                (this.x = t ? t.x : Math.random() * i.canvas.w),
                (this.y = t ? t.y : Math.random() * i.canvas.h),
                this.x > i.canvas.w - 2 * this.radius ? (this.x = this.x - this.radius) : this.x < 2 * this.radius && (this.x = this.x + this.radius),
                this.y > i.canvas.h - 2 * this.radius ? (this.y = this.y - this.radius) : this.y < 2 * this.radius && (this.y = this.y + this.radius),
                i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t),
                (this.color = {}),
                "object" == typeof e.value)
            )
                if (e.value instanceof Array) {
                    var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
                    this.color.rgb = hexToRgb(s);
                } else
                    void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }),
                        void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
            else
                "random" == e.value
                    ? (this.color.rgb = { r: Math.floor(256 * Math.random()) + 0, g: Math.floor(256 * Math.random()) + 0, b: Math.floor(256 * Math.random()) + 0 })
                    : "string" == typeof e.value && ((this.color = e), (this.color.rgb = hexToRgb(this.color.value)));
            (this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value),
                i.particles.opacity.anim.enable && ((this.opacity_status = !1), (this.vo = i.particles.opacity.anim.speed / 100), i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
            var n = {};
            switch (i.particles.move.direction) {
                case "top":
                    n = { x: 0, y: -1 };
                    break;
                case "top-right":
                    n = { x: 0.5, y: -0.5 };
                    break;
                case "right":
                    n = { x: 1, y: -0 };
                    break;
                case "bottom-right":
                    n = { x: 0.5, y: 0.5 };
                    break;
                case "bottom":
                    n = { x: 0, y: 1 };
                    break;
                case "bottom-left":
                    n = { x: -0.5, y: 1 };
                    break;
                case "left":
                    n = { x: -1, y: 0 };
                    break;
                case "top-left":
                    n = { x: -0.5, y: -0.5 };
                    break;
                default:
                    n = { x: 0, y: 0 };
            }
            i.particles.move.straight
                ? ((this.vx = n.x), (this.vy = n.y), i.particles.move.random && ((this.vx = this.vx * Math.random()), (this.vy = this.vy * Math.random())))
                : ((this.vx = n.x + Math.random() - 0.5), (this.vy = n.y + Math.random() - 0.5)),
                (this.vx_i = this.vx),
                (this.vy_i = this.vy);
            var r = i.particles.shape.type;
            if ("object" == typeof r) {
                if (r instanceof Array) {
                    var c = r[Math.floor(Math.random() * r.length)];
                    this.shape = c;
                }
            } else this.shape = r;
            if ("image" == this.shape) {
                var o = i.particles.shape;
                (this.img = { src: o.image.src, ratio: o.image.width / o.image.height }),
                    this.img.ratio || (this.img.ratio = 1),
                    "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1));
            }
        }),
        (i.fn.particle.prototype.draw = function () {
            function e() {
                i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, (2 * t) / a.img.ratio);
            }
            var a = this;
            if (void 0 != a.radius_bubble) var t = a.radius_bubble;
            else var t = a.radius;
            if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;
            else var s = a.opacity;
            if (a.color.rgb) var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";
            else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";
            switch (((i.canvas.ctx.fillStyle = n), i.canvas.ctx.beginPath(), a.shape)) {
                case "circle":
                    i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
                    break;
                case "edge":
                    i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
                    break;
                case "triangle":
                    i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
                    break;
                case "polygon":
                    i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / 0.76, (2.66 * t) / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
                    break;
                case "star":
                    i.fn.vendors.drawShape(i.canvas.ctx, a.x - (2 * t) / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, (2 * t * 2.66) / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
                    break;
                case "image":
                    if ("svg" == i.tmp.img_type) var r = a.img.obj;
                    else var r = i.tmp.img_obj;
                    r && e();
            }
            i.canvas.ctx.closePath(),
                i.particles.shape.stroke.width > 0 && ((i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color), (i.canvas.ctx.lineWidth = i.particles.shape.stroke.width), i.canvas.ctx.stroke()),
                i.canvas.ctx.fill();
        }),
        (i.fn.particlesCreate = function () {
            for (var e = 0; e < i.particles.number.value; e++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value));
        }),
        (i.fn.particlesUpdate = function () {
            for (var e = 0; e < i.particles.array.length; e++) {
                var a = i.particles.array[e];
                if (i.particles.move.enable) {
                    var t = i.particles.move.speed / 2;
                    (a.x += a.vx * t), (a.y += a.vy * t);
                }
                if (
                    (i.particles.opacity.anim.enable &&
                        (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), (a.opacity += a.vo)) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), (a.opacity -= a.vo)),
                        a.opacity < 0 && (a.opacity = 0)),
                    i.particles.size.anim.enable &&
                        (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), (a.radius += a.vs)) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), (a.radius -= a.vs)),
                        a.radius < 0 && (a.radius = 0)),
                    "bounce" == i.particles.move.out_mode)
                )
                    var s = { x_left: a.radius, x_right: i.canvas.w, y_top: a.radius, y_bottom: i.canvas.h };
                else var s = { x_left: -a.radius, x_right: i.canvas.w + a.radius, y_top: -a.radius, y_bottom: i.canvas.h + a.radius };
                switch (
                    (a.x - a.radius > i.canvas.w ? ((a.x = s.x_left), (a.y = Math.random() * i.canvas.h)) : a.x + a.radius < 0 && ((a.x = s.x_right), (a.y = Math.random() * i.canvas.h)),
                    a.y - a.radius > i.canvas.h ? ((a.y = s.y_top), (a.x = Math.random() * i.canvas.w)) : a.y + a.radius < 0 && ((a.y = s.y_bottom), (a.x = Math.random() * i.canvas.w)),
                    i.particles.move.out_mode)
                ) {
                    case "bounce":
                        a.x + a.radius > i.canvas.w ? (a.vx = -a.vx) : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? (a.vy = -a.vy) : a.y - a.radius < 0 && (a.vy = -a.vy);
                }
                if (
                    (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a),
                    (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a),
                    (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a),
                    i.particles.line_linked.enable || i.particles.move.attract.enable)
                )
                    for (var n = e + 1; n < i.particles.array.length; n++) {
                        var r = i.particles.array[n];
                        i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
                    }
            }
        }),
        (i.fn.particlesDraw = function () {
            i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();
            for (var e = 0; e < i.particles.array.length; e++) {
                var a = i.particles.array[e];
                a.draw();
            }
        }),
        (i.fn.particlesEmpty = function () {
            i.particles.array = [];
        }),
        (i.fn.particlesRefresh = function () {
            cancelRequestAnimFrame(i.fn.checkAnimFrame),
                cancelRequestAnimFrame(i.fn.drawAnimFrame),
                (i.tmp.source_svg = void 0),
                (i.tmp.img_obj = void 0),
                (i.tmp.count_svg = 0),
                i.fn.particlesEmpty(),
                i.fn.canvasClear(),
                i.fn.vendors.start();
        }),
        (i.fn.interact.linkParticles = function (e, a) {
            var t = e.x - a.x,
                s = e.y - a.y,
                n = Math.sqrt(t * t + s * s);
            if (n <= i.particles.line_linked.distance) {
                var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
                if (r > 0) {
                    var c = i.particles.line_linked.color_rgb_line;
                    (i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")"),
                        (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
                        i.canvas.ctx.beginPath(),
                        i.canvas.ctx.moveTo(e.x, e.y),
                        i.canvas.ctx.lineTo(a.x, a.y),
                        i.canvas.ctx.stroke(),
                        i.canvas.ctx.closePath();
                }
            }
        }),
        (i.fn.interact.attractParticles = function (e, a) {
            var t = e.x - a.x,
                s = e.y - a.y,
                n = Math.sqrt(t * t + s * s);
            if (n <= i.particles.line_linked.distance) {
                var r = t / (1e3 * i.particles.move.attract.rotateX),
                    c = s / (1e3 * i.particles.move.attract.rotateY);
                (e.vx -= r), (e.vy -= c), (a.vx += r), (a.vy += c);
            }
        }),
        (i.fn.interact.bounceParticles = function (e, a) {
            var t = e.x - a.x,
                i = e.y - a.y,
                s = Math.sqrt(t * t + i * i),
                n = e.radius + a.radius;
            n >= s && ((e.vx = -e.vx), (e.vy = -e.vy), (a.vx = -a.vx), (a.vy = -a.vy));
        }),
        (i.fn.modes.pushParticles = function (e, a) {
            i.tmp.pushing = !0;
            for (var t = 0; e > t; t++)
                i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, { x: a ? a.pos_x : Math.random() * i.canvas.w, y: a ? a.pos_y : Math.random() * i.canvas.h })),
                    t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), (i.tmp.pushing = !1));
        }),
        (i.fn.modes.removeParticles = function (e) {
            i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw();
        }),
        (i.fn.modes.bubbleParticle = function (e) {
            function a() {
                (e.opacity_bubble = e.opacity), (e.radius_bubble = e.radius);
            }
            function t(a, t, s, n, c) {
                if (a != t)
                    if (i.tmp.bubble_duration_end) {
                        if (void 0 != s) {
                            var o = n - (p * (n - a)) / i.interactivity.modes.bubble.duration,
                                l = a - o;
                            (d = a + l), "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
                        }
                    } else if (r <= i.interactivity.modes.bubble.distance) {
                        if (void 0 != s) var v = s;
                        else var v = n;
                        if (v != a) {
                            var d = n - (p * (n - a)) / i.interactivity.modes.bubble.duration;
                            "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
                        }
                    } else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0);
            }
            if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
                var s = e.x - i.interactivity.mouse.pos_x,
                    n = e.y - i.interactivity.mouse.pos_y,
                    r = Math.sqrt(s * s + n * n),
                    c = 1 - r / i.interactivity.modes.bubble.distance;
                if (r <= i.interactivity.modes.bubble.distance) {
                    if (c >= 0 && "mousemove" == i.interactivity.status) {
                        if (i.interactivity.modes.bubble.size != i.particles.size.value)
                            if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                                var o = e.radius + i.interactivity.modes.bubble.size * c;
                                o >= 0 && (e.radius_bubble = o);
                            } else {
                                var l = e.radius - i.interactivity.modes.bubble.size,
                                    o = e.radius - l * c;
                                o > 0 ? (e.radius_bubble = o) : (e.radius_bubble = 0);
                            }
                        if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value)
                            if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
                                var v = i.interactivity.modes.bubble.opacity * c;
                                v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
                            } else {
                                var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
                                v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
                            }
                    }
                } else a();
                "mouseleave" == i.interactivity.status && a();
            } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
                if (i.tmp.bubble_clicking) {
                    var s = e.x - i.interactivity.mouse.click_pos_x,
                        n = e.y - i.interactivity.mouse.click_pos_y,
                        r = Math.sqrt(s * s + n * n),
                        p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
                    p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && ((i.tmp.bubble_clicking = !1), (i.tmp.bubble_duration_end = !1));
                }
                i.tmp.bubble_clicking &&
                    (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
            }
        }),
        (i.fn.modes.repulseParticle = function (e) {
            function a() {
                var a = Math.atan2(d, p);
                if (((e.vx = u * Math.cos(a)), (e.vy = u * Math.sin(a)), "bounce" == i.particles.move.out_mode)) {
                    var t = { x: e.x + e.vx, y: e.y + e.vy };
                    t.x + e.radius > i.canvas.w ? (e.vx = -e.vx) : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? (e.vy = -e.vy) : t.y - e.radius < 0 && (e.vy = -e.vy);
                }
            }
            if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
                var t = e.x - i.interactivity.mouse.pos_x,
                    s = e.y - i.interactivity.mouse.pos_y,
                    n = Math.sqrt(t * t + s * s),
                    r = { x: t / n, y: s / n },
                    c = i.interactivity.modes.repulse.distance,
                    o = 100,
                    l = clamp((1 / c) * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
                    v = { x: e.x + r.x * l, y: e.y + r.y * l };
                "bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : ((e.x = v.x), (e.y = v.y));
            } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode))
                if ((i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking)) {
                    var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
                        p = i.interactivity.mouse.click_pos_x - e.x,
                        d = i.interactivity.mouse.click_pos_y - e.y,
                        m = p * p + d * d,
                        u = (-c / m) * 1;
                    c >= m && a();
                } else 0 == i.tmp.repulse_clicking && ((e.vx = e.vx_i), (e.vy = e.vy_i));
        }),
        (i.fn.modes.grabParticle = function (e) {
            if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
                var a = e.x - i.interactivity.mouse.pos_x,
                    t = e.y - i.interactivity.mouse.pos_y,
                    s = Math.sqrt(a * a + t * t);
                if (s <= i.interactivity.modes.grab.distance) {
                    var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
                    if (n > 0) {
                        var r = i.particles.line_linked.color_rgb_line;
                        (i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")"),
                            (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
                            i.canvas.ctx.beginPath(),
                            i.canvas.ctx.moveTo(e.x, e.y),
                            i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y),
                            i.canvas.ctx.stroke(),
                            i.canvas.ctx.closePath();
                    }
                }
            }
        }),
        (i.fn.vendors.eventsListeners = function () {
            "window" == i.interactivity.detect_on ? (i.interactivity.el = window) : (i.interactivity.el = i.canvas.el),
                (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) &&
                    (i.interactivity.el.addEventListener("mousemove", function (e) {
                        if (i.interactivity.el == window)
                            var a = e.clientX,
                                t = e.clientY;
                        else
                            var a = e.offsetX || e.clientX,
                                t = e.offsetY || e.clientY;
                        (i.interactivity.mouse.pos_x = a),
                            (i.interactivity.mouse.pos_y = t),
                            i.tmp.retina && ((i.interactivity.mouse.pos_x *= i.canvas.pxratio), (i.interactivity.mouse.pos_y *= i.canvas.pxratio)),
                            (i.interactivity.status = "mousemove");
                    }),
                    i.interactivity.el.addEventListener("mouseleave", function (e) {
                        (i.interactivity.mouse.pos_x = null), (i.interactivity.mouse.pos_y = null), (i.interactivity.status = "mouseleave");
                    })),
                i.interactivity.events.onclick.enable &&
                    i.interactivity.el.addEventListener("click", function () {
                        if (
                            ((i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x),
                            (i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y),
                            (i.interactivity.mouse.click_time = new Date().getTime()),
                            i.interactivity.events.onclick.enable)
                        )
                            switch (i.interactivity.events.onclick.mode) {
                                case "push":
                                    i.particles.move.enable
                                        ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse)
                                        : 1 == i.interactivity.modes.push.particles_nb
                                        ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse)
                                        : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
                                    break;
                                case "remove":
                                    i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
                                    break;
                                case "bubble":
                                    i.tmp.bubble_clicking = !0;
                                    break;
                                case "repulse":
                                    (i.tmp.repulse_clicking = !0),
                                        (i.tmp.repulse_count = 0),
                                        (i.tmp.repulse_finish = !1),
                                        setTimeout(function () {
                                            i.tmp.repulse_clicking = !1;
                                        }, 1e3 * i.interactivity.modes.repulse.duration);
                            }
                    });
        }),
        (i.fn.vendors.densityAutoParticles = function () {
            if (i.particles.number.density.enable) {
                var e = (i.canvas.el.width * i.canvas.el.height) / 1e3;
                i.tmp.retina && (e /= 2 * i.canvas.pxratio);
                var a = (e * i.particles.number.value) / i.particles.number.density.value_area,
                    t = i.particles.array.length - a;
                0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t);
            }
        }),
        (i.fn.vendors.checkOverlap = function (e, a) {
            for (var t = 0; t < i.particles.array.length; t++) {
                var s = i.particles.array[t],
                    n = e.x - s.x,
                    r = e.y - s.y,
                    c = Math.sqrt(n * n + r * r);
                c <= e.radius + s.radius && ((e.x = a ? a.x : Math.random() * i.canvas.w), (e.y = a ? a.y : Math.random() * i.canvas.h), i.fn.vendors.checkOverlap(e));
            }
        }),
        (i.fn.vendors.createSvgImg = function (e) {
            var a = i.tmp.source_svg,
                t = /#([0-9A-F]{3,6})/gi,
                s = a.replace(t, function (a, t, i, s) {
                    if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";
                    else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
                    return n;
                }),
                n = new Blob([s], { type: "image/svg+xml;charset=utf-8" }),
                r = window.URL || window.webkitURL || window,
                c = r.createObjectURL(n),
                o = new Image();
            o.addEventListener("load", function () {
                (e.img.obj = o), (e.img.loaded = !0), r.revokeObjectURL(c), i.tmp.count_svg++;
            }),
                (o.src = c);
        }),
        (i.fn.vendors.destroypJS = function () {
            cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), (pJSDom = null);
        }),
        (i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
            var r = s * n,
                c = s / n,
                o = (180 * (c - 2)) / c,
                l = Math.PI - (Math.PI * o) / 180;
            e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);
            for (var v = 0; r > v; v++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
            e.fill(), e.restore();
        }),
        (i.fn.vendors.exportImg = function () {
            window.open(i.canvas.el.toDataURL("image/png"), "_blank");
        }),
        (i.fn.vendors.loadImg = function (e) {
            if (((i.tmp.img_error = void 0), "" != i.particles.shape.image.src))
                if ("svg" == e) {
                    var a = new XMLHttpRequest();
                    a.open("GET", i.particles.shape.image.src),
                        (a.onreadystatechange = function (e) {
                            4 == a.readyState && (200 == a.status ? ((i.tmp.source_svg = e.currentTarget.response), i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), (i.tmp.img_error = !0)));
                        }),
                        a.send();
                } else {
                    var t = new Image();
                    t.addEventListener("load", function () {
                        (i.tmp.img_obj = t), i.fn.vendors.checkBeforeDraw();
                    }),
                        (t.src = i.particles.shape.image.src);
                }
            else console.log("Error pJS - No image.src"), (i.tmp.img_error = !0);
        }),
        (i.fn.vendors.draw = function () {
            "image" == i.particles.shape.type
                ? "svg" == i.tmp.img_type
                    ? i.tmp.count_svg >= i.particles.number.value
                        ? (i.fn.particlesDraw(), i.particles.move.enable ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : cancelRequestAnimFrame(i.fn.drawAnimFrame))
                        : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
                    : void 0 != i.tmp.img_obj
                    ? (i.fn.particlesDraw(), i.particles.move.enable ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : cancelRequestAnimFrame(i.fn.drawAnimFrame))
                    : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
                : (i.fn.particlesDraw(), i.particles.move.enable ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : cancelRequestAnimFrame(i.fn.drawAnimFrame));
        }),
        (i.fn.vendors.checkBeforeDraw = function () {
            "image" == i.particles.shape.type
                ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg
                    ? (i.tmp.checkAnimFrame = requestAnimFrame(check))
                    : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw()))
                : (i.fn.vendors.init(), i.fn.vendors.draw());
        }),
        (i.fn.vendors.init = function () {
            i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), (i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color));
        }),
        (i.fn.vendors.start = function () {
            isInArray("image", i.particles.shape.type) ? ((i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3)), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw();
        }),
        i.fn.vendors.eventsListeners(),
        i.fn.vendors.start();
};
(Object.deepExtend = function (e, a) {
    for (var t in a) a[t] && a[t].constructor && a[t].constructor === Object ? ((e[t] = e[t] || {}), arguments.callee(e[t], a[t])) : (e[t] = a[t]);
    return e;
}),
    (window.requestAnimFrame = (function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (e) {
                window.setTimeout(e, 1e3 / 60);
            }
        );
    })()),
    (window.cancelRequestAnimFrame = (function () {
        return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
    })()),
    (window.pJSDom = []),
    (window.particlesJS = function (e, a) {
        "string" != typeof e && ((a = e), (e = "particles-js")), e || (e = "particles-js");
        var t = document.getElementById(e),
            i = "particles-js-canvas-el",
            s = t.getElementsByClassName(i);
        if (s.length) for (; s.length > 0; ) t.removeChild(s[0]);
        var n = document.createElement("canvas");
        (n.className = i), (n.style.width = "100%"), (n.style.height = "100%");
        var r = document.getElementById(e).appendChild(n);
        null != r && pJSDom.push(new pJS(e, a));
    }),
    (window.particlesJS.load = function (e, a, t) {
        var i = new XMLHttpRequest();
        i.open("GET", a),
            (i.onreadystatechange = function (a) {
                if (4 == i.readyState)
                    if (200 == i.status) {
                        var s = JSON.parse(a.currentTarget.response);
                        window.particlesJS(e, s), t && t();
                    } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found");
            }),
            i.send();
    });
