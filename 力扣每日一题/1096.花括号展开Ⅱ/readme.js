
function n(n) {
    const t = n.match(/\,|\{|\}|[a-z]+/g) ?? [];
    if (!t || !t.length) return { type: "AddExpression", children: [] };
    let r = 0;
    const i = (function n() {
      const i = [];
      for (; r < t.length; ) {
        const e = t[r];
        if ("{" === e) r++, i.push(n());
        else {
          if ("}" === e) {
            r++;
            break;
          }
          i.push(e), r++;
        }
      }
      return 1 == i.length
        ? i[0]
        : i.includes(",")
        ? e(i)
        : { type: "MultExpression", children: i };
    })();
    return i;
}
function e(n) {
  const t = { type: "AddExpression", children: [] };
  if (1 === n.length) return n[0];
  const r = n.indexOf(",");
  return r < 0
    ? { type: "MultExpression", children: n }
    : (1 === r
        ? t.children.push(n[0])
        : t.children.push({ type: "MultExpression", children: n.slice(0, r) }),
      t.children.push(e(n.slice(r + 1))),
      1 == t.children.length ? t.children[0] : t);
}
function t(n) {
  return "string" == typeof n
    ? [n]
    : "MultExpression" === n.type
    ? n.children.reduce((n, e) => {
        const r = n,
          i = "string" == typeof e ? [e] : t(e);
        return 0 === n.length ? i : r.map((n) => i.map((e) => n + e)).flat();
      }, [])
    : n.children.map(t).flat();
}
 function braceExpansionII(e) {
  if (e.includes("{")) {
    const i = n(e);
    return "string" == typeof i
      ? [i]
      : ((r = t(i)), Array.from(new Set(r))).sort();
  }
  return [e];
  var r;
}