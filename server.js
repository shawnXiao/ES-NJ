var http = require("http");
var fs = require("fs");
var url = require("url");
exports.start = function () {
    var pathName = "";
    var pathInformation = function (pathName) {
        console.log(pathName);
        var mime = {
            ".css": "text/css",
            ".html": "text/html",
            ".js": "text/javascript"
        };
        var extention = (function () {
            var index = pathName.lastIndexOf('.');
            return index > 0 ? '.html' : pathName.substring(index);
        }());

        return {

            getExtention: function () {
                return pathName;
            },
            getMime: function () {
                return mime[extention];
            }
        };
        
    };

    http.createServer(function onRequest(request, response) {
        pathName = url.parse(request.url).pathname || '/index';
        filePath = '.' + pathName;
        console.log(filePath);

        if (filePath === './favicon.ico') {
            console.log("wahas");
            response.writeHead(404, {"Content-Type" : "text/plain"});
            response.end();
        } else {
            
            fs.readFile(filePath, 'utf-8', function (err, data) {
                if (err) {
                    throw err;
                }
                console.log(pathInformation(pathName).getExtention());
                response.writeHead(200, {
                    "Content-Type": pathInformation(pathName).getMime()
                });
                response.write(data);
                response.end();
            });
 
        }
    }).listen(8888);
    console.log("port is listened");
}

