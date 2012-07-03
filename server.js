var http = require("http");
var url = require("url");
var fs = require("fs");
var start = http.createServer(function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;
        var index = pathName.indexOf('.');
        var extention = pathName.substring(index);
        console.log(extention);

        fs.readFile('./index.html', 'utf-8', function (err, data) {

            if (err) {
                throw err;
            }

            response.writeHead(200, {
                "Content-Type": "text/html"
            });
            response.write(data);
            response.end();
        });
    }).listen(8888);
var pathInformation = function (pathName) {
    var mime = {
        "" : "",
    }; 
    return {
        getExtention : function () {
            var index = pathName.indexOf('.');
            return index > 0 ? '.html' : pathName.substring(index);
        }, 
        getMime : function () {
            var extention = getExtention();
            return 
        }
    }
};

console.log("port is listened");

exports.start = start;
