var http = require("http");
var url = require("url");
var fs = require("fs");

function start(route, handle) {
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log("request received.");
        route(handle, pathName, response);
    }
    http.createServer(onRequest).listen(8888);
    console.log("port 8888 is listened");
}
exports.start = start;
