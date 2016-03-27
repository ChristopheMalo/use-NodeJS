/**
 * The HTTP server
 * Create a mini-server that return a 
 * 
 * http, request and response are objects
 * 
 * @author: Christophe Malo
 * @version: 1.0.0
 */
var http = require('http'); // Call http Node.js lib to create HTTP Server

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(
        '<!DOCTYPE html>' +
        '<html lang="en">' +
        '    <head>' +
        '       <meta charset="utf-8" />' +
        '       <title>Ma first Node.js page !</title>' +
        '    </head>' +
        '    <body>' +
        '       <p>Hello World! My first Node.js Server - <strong>Code with HTML</strong></p>' +
        '    </body>' +
        '</html>'
    );
    response.end();
});
server.listen(8080); // Start the server
