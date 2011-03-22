var express = require('express');
var app = express.createServer();
app.use(express.static(__dirname));
app.listen(8080);

var dnode = require('dnode');

var server = dnode({
    zing : function (n, cb) { cb(n * 100) }
});
server.listen(app);
