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
    response.end('<p>Hello World! My first Node.js Server - <strong>Code with HTML</strong></p>');
});
server.listen(8080); // Start the server
