remote.meta(function (cb) {
    cb({
        foo : function (x, f) {
            f(2 * x + 1);
        },
        bar : function (x, f) {
            f(3 * x - 2);
        },
        baz : 5,
    });
});
