var express = require('express');
var browserify = require('browserify');
var dnode = require('dnode');

var server = express.createServer();

server.use(express.static(__dirname));

server.use(browserify({
    require : 'dnode',
    mount : '/browserify.js'
}));

dnode(function (client) {
    this.cat = function (cb) {
        cb('meow');
    };
}).listen(server);

server.listen(8080);
