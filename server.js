var http = require("http");
var url = require("url");
var fs = require("fs");
function onRequest(request, response) {
    console.log("request received.");
    var json = url.parse(request.url, true);
    response.writeHead(200, {"Content-Type": "text/plain"});
    var str=JSON.stringify(json);
    fs.readFile('index.html');
    response.end(str);
}
http.createServer(onRequest).listen(8888);
console.log("port 8888 is listened");
