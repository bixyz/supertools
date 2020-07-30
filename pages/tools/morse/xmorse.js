/**
 * Copyright (c) 2017 hustcc
 * License: MIT
 * Version: v0.0.3
 * GitHub: https://github.com/hustcc/xmorse
**/
!function (e, n) {
  "object" == typeof module && module.exports ? module.exports = n() : e.xmorse = n()
}("undefined" != typeof window ? window : this, function () {
  function e(e) {
    return e = e || {},
      [e.space || "/", e.short || ".", e.long || "-"]
  }
  function n(e) {
    for (var n = [], r = 0; r < e.length; r++)
      n[r] = ("00" + e.charCodeAt(r).toString(16)).slice(-4);
    return n = n.join(""),
      n = parseInt(n, 16).toString(2)
  }
  function r(r, o) {
    o = e(o);
    var t = [];
    r = r.replace(/\s+/g, "").toLocaleUpperCase().split("");
    for (var p, a, c = 0, u = r.length; c < u; c++)
      p = r[c],
        a = i[p],
        a || (a = n(p)),
        t.push(a.replace(/0/g, o[1]).replace(/1/g, o[2]));
    return t.join(o[0])
  }
  function o(e) {
    return e = parseInt(e, 2),
      isNaN(e) ? "" : unescape("%u" + e.toString(16))
  }
  function t(n, r) {
    r = e(r);
    var t = [];
    n = n.split(r[0]);
    for (var i, a, c = 0, u = n.length; c < u; c++)
      i = n[c].replace(/\s+/g, "").replace(new RegExp("\\" + r[1], "g"), "0").replace(new RegExp("\\" + r[2], "g"), "1"),
        a = p[i],
        a || (a = o(i)),
        t.push(a);
    return t.join("")
  }
  var i = {
    A: "01",
    B: "1000",
    C: "1010",
    D: "100",
    E: "0",
    F: "0010",
    G: "110",
    H: "0000",
    I: "00",
    J: "0111",
    K: "101",
    L: "0100",
    M: "11",
    N: "10",
    O: "111",
    P: "0110",
    Q: "1101",
    R: "010",
    S: "000",
    T: "1",
    U: "001",
    V: "0001",
    W: "011",
    X: "1001",
    Y: "1011",
    Z: "1100",
    0: "11111",
    1: "01111",
    2: "00111",
    3: "00011",
    4: "00001",
    5: "00000",
    6: "10000",
    7: "11000",
    8: "11100",
    9: "11110",
    ".": "010101",
    ",": "110011",
    "?": "001100",
    "'": "011110",
    "!": "101011",
    "/": "10010",
    "(": "10110",
    ")": "101101",
    "&": "01000",
    ":": "111000",
    ";": "101010",
    "=": "10001",
    "+": "01010",
    "-": "100001",
    _: "001101",
    '"': "010010",
    $: "0001001",
    "@": "011010"
  }
    , p = {};
  for (var a in i)
    p[i[a]] = a;
  return {
    encode: r,
    decode: t
  }
});
