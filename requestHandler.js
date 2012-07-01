var fs = require("fs");
function start(response) {
    console.log("Request handler 'start' was called");
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
}
function upload(response) {
    console.log("Request handler 'upload' was called");
    response.writeHead(200, {
        "Content-Type": "text/html"
    });
    response.write("Hello Upload");
    response.end();
}
exports.start = start;
exports.upload = upload;


