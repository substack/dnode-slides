dnode({
  f : function (f) {
    f({
      g : function (g) { g(11) },
      h : function (h) { h(23) },
    })
  },
  i : 58,
  j : [ 12, function (k) { k(20) } ],
}).connect(5000);
