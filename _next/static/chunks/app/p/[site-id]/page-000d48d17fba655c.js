(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [295], {
        51514: function (e, t, o) {
            Promise.resolve().then(o.bind(o, 11842))
        },
        11842: function (e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function () {
                    return k
                }
            });
            var i = o(9268),
                r = o(86006),
                n = o(76928),
                d = o(51490);
            o(80092);
            var l = o(16523),
                s = o(84144),
                a = o(47337),
                c = o(27361),
                h = o(90071),
                u = o(63681),
                p = o(23612);
            o(14744);
            var g = function (e) {
                    let {
                        data: t
                    } = e, o = t.backgroundColor || "rgb(30, 30, 30)", r = t.borderColor || "rgb(126, 126, 126)", d = t.textColor || "#DADADA";
                    return (0, i.jsx)("div", {
                        style: {
                            background: o,
                            overflow: "hidden",
                            border: "3px solid ".concat(r),
                            borderRadius: "10px"
                        },
                        children: (0, i.jsxs)("div", {
                            className: "basic-node",
                            style: {
                                width: t.width,
                                maxWidth: t.width,
                                height: t.height,
                                maxHeight: t.height,
                                paddingLeft: "25px",
                                paddingRight: "25px",
                                paddingTop: "5px",
                                overflowY: "auto"
                            },
                            children: [(0, i.jsx)(n.HH, {
                                position: n.Ly.Left,
                                id: "left"
                            }), (0, i.jsx)(n.HH, {
                                position: n.Ly.Right,
                                id: "right"
                            }), (0, i.jsx)(n.HH, {
                                position: n.Ly.Bottom,
                                id: "bottom"
                            }), (0, i.jsx)(n.HH, {
                                position: n.Ly.Top,
                                id: "top"
                            }), (0, i.jsx)(l.D, {
                                className: "text-[".concat(d, "]"),
                                remarkPlugins: [s.Z, u.Z],
                                rehypePlugins: [p.Z, h.Z],
                                components: {
                                    code(e) {
                                        let {
                                            node: t,
                                            inline: o,
                                            className: r,
                                            children: n,
                                            ...d
                                        } = e, l = /language-(\w+)/.exec(r || "");
                                        return !o && l ? (0, i.jsx)(a.Z, {
                                            ...d,
                                            style: c.Z,
                                            language: l[1],
                                            PreTag: "div",
                                            children: String(n).replace(/\n$/, "")
                                        }) : (0, i.jsx)("code", {
                                            ...d,
                                            className: r,
                                            children: n
                                        })
                                    }
                                },
                                children: t.text
                            })]
                        })
                    })
                },
                f = function (e) {
                    let {
                        data: t
                    } = e, o = t.backgroundColor || "rgb(30, 30, 30)", r = t.borderColor || "rgb(126, 126, 126)", d = t.groupTextColor || "rgb(255, 255, 255)";
                    return (0, i.jsxs)("div", {
                        style: {
                            background: o,
                            border: "3px solid ".concat(r),
                            borderRadius: "10px",
                            width: t.width,
                            maxWidth: t.width,
                            height: t.height,
                            maxHeight: t.height
                        },
                        children: [(0, i.jsx)(n.HH, {
                            position: n.Ly.Left,
                            id: "left"
                        }), (0, i.jsx)(n.HH, {
                            position: n.Ly.Right,
                            id: "right"
                        }), (0, i.jsx)(n.HH, {
                            position: n.Ly.Bottom,
                            id: "bottom"
                        }), (0, i.jsx)(n.HH, {
                            position: n.Ly.Top,
                            id: "top"
                        }), (0, i.jsx)("span", {
                            className: "group-node-label",
                            style: {
                                backgroundColor: r,
                                color: d
                            },
                            children: t.label
                        })]
                    })
                };
            o(72668);
            var x = function (e) {
                    let {
                        data: t
                    } = e, o = t.backgroundColor || "rgb(30, 30, 30)", r = t.borderColor || "rgb(126, 126, 126)";
                    return t.textColor, t.url && (t.url.includes("youtu.be") || t.url.includes("youtube")) && (t.url = "https://www.youtube.com/embed/" + function (e) {
                        let t = e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
                        return t && 11 === t[2].length ? t[2] : null
                    }(t.url)), (0, i.jsxs)("div", {
                        style: {
                            position: "relative"
                        },
                        children: [(0, i.jsx)("span", {
                            className: "page-node-label",
                            style: {
                                color: "#666666",
                                width: t.width
                            },
                            children: t.label
                        }), (0, i.jsx)("div", {
                            style: {
                                background: o,
                                overflow: "hidden",
                                border: "3px solid ".concat(r),
                                borderRadius: "10px"
                            },
                            children: (0, i.jsxs)("div", {
                                className: "basic-node",
                                style: {
                                    width: t.width,
                                    maxWidth: t.width,
                                    height: t.height,
                                    maxHeight: t.height,
                                    overflowY: "hidden"
                                },
                                children: [(0, i.jsx)(n.HH, {
                                    position: n.Ly.Left,
                                    id: "left"
                                }), (0, i.jsx)(n.HH, {
                                    position: n.Ly.Right,
                                    id: "right"
                                }), (0, i.jsx)(n.HH, {
                                    position: n.Ly.Bottom,
                                    id: "bottom"
                                }), (0, i.jsx)(n.HH, {
                                    position: n.Ly.Top,
                                    id: "top"
                                }), (0, i.jsx)("iframe", {
                                    is: "x-frame-bypass",
                                    src: t.url,
                                    width: t.width,
                                    height: t.height + 50,
                                    allowFullScreen: !0,
                                    style: {
                                        position: "relative",
                                        top: "-50px"
                                    }
                                })]
                            })
                        })]
                    })
                },
                b = o(76394),
                y = o.n(b),
                m = function (e) {
                    let {
                        data: t
                    } = e, o = t.borderColor || "rgb(126, 126, 126)";
                    return (0, i.jsx)("div", {
                        style: {
                            overflow: "hidden",
                            border: "3px solid ".concat(o),
                            borderRadius: "10px"
                        },
                        children: (0, i.jsxs)("div", {
                            style: {
                                width: t.width,
                                maxWidth: t.width,
                                height: t.height,
                                maxHeight: t.height
                            },
                            children: [(0, i.jsx)(n.HH, {
                                position: n.Ly.Left,
                                id: "left"
                            }), (0, i.jsx)(n.HH, {
                                position: n.Ly.Right,
                                id: "right"
                            }), (0, i.jsx)(n.HH, {
                                position: n.Ly.Bottom,
                                id: "bottom"
                            }), (0, i.jsx)(n.HH, {
                                position: n.Ly.Top,
                                id: "top"
                            }), t.src && (0, i.jsx)(y(), {
                                style: {
                                    marginTop: "0px",
                                    marginBottom: "0px"
                                },
                                src: t.src,
                                width: t.width,
                                height: t.height,
                                alt: "Image"
                            })]
                        })
                    })
                },
                w = o(45961),
                C = o(55475),
                j = o(27904);
            o(35093), o(60691);
            var H = o(96341),
                v = o.n(H);

            function k(e) {
                let {
                    params: t
                } = e, [o, l] = (0, r.useState)(null), [s, a] = (0, r.useState)({
                    nodes: [],
                    edges: []
                }), [c, h] = (0, r.useState)({});
                (0, r.useEffect)(() => {
                    (0, C.S)();
                    let e = async () => {
                        try {
                            let e = await (0, C.z)(t["site-id"]);
                            document.title = "".concat(t["site-id"], " - Canvas"), e && (a(e.data), e[j.ZQ] && l(await (0, w.zo)(e[j.ZQ])), e[j.SE] && h(await (0, w.f7)(t["site-id"], e[j.SE])))
                        } catch (e) {
                            console.error("An error occurred while loading the canvas data: ", e)
                        }
                    };
                    e()
                }, []);
                let [u, p] = (0, r.useState)([]), [b, y] = (0, r.useState)([]), H = (0, r.useMemo)(() => ({
                    basicNode: g,
                    groupNode: f,
                    pageNode: x,
                    imageNode: m
                }), []), k = (0, r.useCallback)(e => p(t => (0, n.Fb)(e, t)), [p]), E = (0, r.useCallback)(e => y(t => (0, n.yn)(e, t)), [y]), N = (0, r.useCallback)(e => y(t => (0, n.Z_)(e, t)), [y]);
                return (0, r.useEffect)(() => {
                    let e = (0, w.qz)(s.nodes || [], o, c);
                    p(e)
                }, [s.nodes, o, c]), (0, r.useEffect)(() => {
                    let e = (0, w.i6)(s.edges || []);
                    y(e)
                }, [s.edges]), (0, i.jsxs)("div", {
                    className: "prose prose-invert",
                    children: [(0, i.jsx)(v(), {
                        type: "module",
                        src: "https://unpkg.com/x-frame-bypass"
                    }), (0, i.jsx)("div", {
                        style: {
                            width: "100vw",
                            height: "100vh"
                        },
                        children: (0, i.jsx)(n.x$, {
                            nodeTypes: H,
                            nodes: u,
                            edges: b,
                            panOnScroll: !0,
                            panOnScrollSpeed: 1.4,
                            minZoom: .1,
                            fitView: !0,
                            nodesDraggable: !1,
                            connectionMode: n.jD.Loose,
                            onNodesChange: k,
                            onEdgesChange: E,
                            onConnect: N,
                            children: (0, i.jsx)(d.A, {})
                        })
                    })]
                })
            }
        },
        27904: function (e, t, o) {
            "use strict";
            o.d(t, {
                Ny: function () {
                    return i
                },
                SE: function () {
                    return n
                },
                ZQ: function () {
                    return r
                }
            });
            let i = [".png", ".jpg", ".jpeg", ".gif", ".svg"],
                r = "originalSite",
                n = "images"
        },
        55475: function (e, t, o) {
            "use strict";
            o.d(t, {
                S: function () {
                    return n
                },
                z: function () {
                    return d
                }
            });
            var i = o(1313),
                r = o(73380);
            let n = () => {
                    let e = 0 === (0, i.C6)().length ? (0, i.ZF)({

                    }) : (0, i.C6)()[0];
                    (0, r.Gb)().then(t => t ? (0, r.IH)(e) : null)
                },
                d = async e => {
                    //let t = await fetch("https://sharecanvas-io-default-rtdb.firebaseio.com/websites/".concat(e, ".json"))
                    
                    //let t = await fetch("data.json"),
                    //     o = await t.json();

                    //let t = await fetch("data.canvas"),
                    //let t = await fetch(e + ".canvas"),
                    let t = await fetch( e ), //e is the [site-id] obtained form index.html 
                        o = await t.json(),
                        oo = {
                            "data": o,
                            "email": "",
                            "originalSite": ""
                        } ;
                    return oo
                };
            n()
        },
        45961: function (e, t, o) {
            "use strict";
            o.d(t, {
                W1: function () {
                    return g
                },
                f7: function () {
                    return p
                },
                i6: function () {
                    return h
                },
                qz: function () {
                    return c
                },
                zo: function () {
                    return u
                }
            });
            var i = o(76928),
                r = o(92843),
                n = o(64202),
                d = o(27904);
            let l = e => {
                    if (e) {
                        if ("#" === e[0]) return {
                            borderColor: e,
                            backgroundColor: "#1E1E1E"
                        };
                        if ("1" === e) return {
                            borderColor: "#FB464C",
                            backgroundColor: "#2E2222",
                            groupTextColor: "#FFFFFF"
                        };
                        if ("2" === e) return {
                            borderColor: "#E9973F",
                            backgroundColor: "#2D2721",
                            groupTextColor: "#000000"
                        };
                        if ("3" === e) return {
                            borderColor: "#E0DE71",
                            backgroundColor: "#2C2C24",
                            groupTextColor: "#000000"
                        };
                        if ("4" === e) return {
                            borderColor: "#45CF6E",
                            backgroundColor: "#232A23",
                            groupTextColor: "#000000"
                        };
                        else if ("5" === e) return {
                            borderColor: "#53DFDD",
                            backgroundColor: "#353E3E",
                            groupTextColor: "#000000"
                        };
                        else if ("6" === e) return {
                            borderColor: "#A881FF",
                            backgroundColor: "#27252E",
                            groupTextColor: "#000000"
                        };
                        else return {
                            borderColor: "#27252E",
                            backgroundColor: "#1E1E1E",
                            groupTextColor: "#27252E"
                        }
                    }
                },
                s = (e, t) => {
                    if (!t) return null;
                    let o = e => encodeURIComponent(e).replace(/%20/g, "+"),
                        i = t.urlset.url.find(t => t.loc[0].includes(o(e)));
                    return i ? i.loc[0] : null
                },
                a = (e, t) => e.replace(/\[\[(.*?)\]\]/g, (e, o) => {
                    let i = s(o, t);
                    return i ? "[".concat(o, "](").concat(i, ")") : e
                }),
                c = (e, t, o) => {
                    let i = e.filter(e => "text" === e.type).map(e => ({
                            id: e.id,
                            type: "basicNode",
                            position: {
                                x: e.x,
                                y: e.y
                            },
                            data: {
                                text: a(e.text, t),
                                width: e.width,
                                height: e.height,
                                ...l(e.color)
                            }
                        })),
                        r = e.filter(e => "group" === e.type).map(e => ({
                            id: e.id,
                            type: "groupNode",
                            position: {
                                x: e.x,
                                y: e.y
                            },
                            data: {
                                label: e.label,
                                width: e.width,
                                height: e.height,
                                ...l(e.color)
                            }
                        })),
                        n = e.filter(e => "file" === e.type).filter(e => e.file.endsWith(".md")).map(e => {
                            let o = e.file.split("/").pop().split(".")[0];
                            return {
                                id: e.id,
                                type: "pageNode",
                                position: {
                                    x: e.x,
                                    y: e.y
                                },
                                data: {
                                    label: o,
                                    url: s(o, t),
                                    width: e.width,
                                    height: e.height,
                                    ...l(e.color)
                                }
                            }
                        }),
                        c = e.filter(e => "file" === e.type).filter(e => d.Ny.some(t => e.file.endsWith(t))).map(e => ({
                            id: e.id,
                            type: "imageNode",
                            position: {
                                x: e.x,
                                y: e.y
                            },
                            data: {
                                src: o[e.file],
                                width: e.width,
                                height: e.height,
                                ...l(e.color)
                            }
                        })),
                        h = e.filter(e => "link" === e.type).map(e => ({
                            id: e.id,
                            type: "pageNode",
                            position: {
                                x: e.x,
                                y: e.y
                            },
                            data: {
                                url: e.url,
                                width: e.width,
                                height: e.height,
                                ...l(e.color)
                            }
                        })),
                        u = [...r, ...i, ...n, ...c, ...h],
                        p = new Set(e.map(e => e.id)),
                        g = e.filter(e => !p.has(e.id)).map(e => ({
                            id: e.id,
                            type: "basicNode",
                            position: {
                                x: e.x,
                                y: e.y
                            },
                            data: {
                                width: e.width,
                                height: e.height,
                                ...l(e.color)
                            }
                        }));
                    return u.concat(g)
                },
                h = e => e.map(e => ({
                    id: e.id,
                    source: e.fromNode,
                    target: e.toNode,
                    sourceHandle: e.fromSide,
                    targetHandle: e.toSide,
                    style: {
                        strokeWidth: "4px"
                    },
                    type: "default",
                    label: e.label,
                    markerEnd: {
                        type: i.QZ.ArrowClosed
                    }
                })),
                u = async e => {
                    var t;
                    (e = (t = e).endsWith("/") ? t.slice(0, -1) : t).startsWith("http") || (e = "https://" + e);
                    let o = await fetch(e + "/sitemap.xml"),
                        i = await o.text(),
                        n = await (0, r.parseStringPromise)(i);
                    return n
                }, p = async (e, t) => {
                    let o = (0, n.cF)(),
                        i = {};
                    for (let r of t) {
                        if (!r.uploaded) continue;
                        let t = (0, n.iH)(o, e + "/" + r.file),
                            d = await (0, n.Jt)(t);
                        i[r.file] = d
                    }
                    return i
                }, g = e => e = (e = e.replace(/\s+/g, "-")).toLowerCase()
        },
        35093: function () {}
    },
    function (e) {
        e.O(0, [895, 659, 906, 879, 236, 667, 488, 744], function () {
            return e(e.s = 51514)
        }), _N_E = e.O()
    }
]);