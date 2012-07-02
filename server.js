var http = require("http");
var fs = require("fs");
exports.start = function () {
    http.createServer(function (request, response) {
        console.log("Requset received..."); 
        fs.readFile('./index.html', 'utf-8', function (err, data) {
             if (err) {
                throw err; 
             }

            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(data); 
            response.end();
        
        });
    }).listen(8888);
    console.log("server start....");
}
