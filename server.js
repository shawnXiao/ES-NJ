var http = require("http");
var fs = require("fs");
var url = require("url");
var querystring = require("querystring");
exports.start = function () {
    var pathName = "";
    var query;
    var pathInformation = function (pathName) {
        var mime = {
            ".css": "text/css",
            ".html": "text/html",
            ".js": "text/javascript"
        };
        var extention = (function () {
            var index = pathName.lastIndexOf('.');
            return index < 0 ? '.html' : pathName.substring(index);
        }());

        return {

            getExtention: function () {
                return extention;
            },
            getMime: function () {
                return mime[extention];
            }
        };
        
    };

    http.createServer(function onRequest(request, response) {
        pathName = url.parse(request.url).pathname || '/index';
        query =  querystring.parse(url.parse(request.url).query);
        filePath = '.' + pathName;
        console.log(query);

        if (filePath === './favicon.ico') {
            response.writeHead(404, {"Content-Type" : "text/plain"});
            response.end();
        } else {
            
            fs.readFile(filePath, 'utf-8', function (err, data) {
                if (err) {
                    throw err;
                }
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

