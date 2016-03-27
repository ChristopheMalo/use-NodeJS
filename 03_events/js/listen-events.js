/**
 * The HTTP server
 * Listen events 
 * 
 * @author: Christophe Malo
 * @version: 1.0.0
 */
var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200);
    response.end('Hello World! - Listen event');
});

// OU
// var server = http.createServer();
// server.on('request', function(request, response) { });

server.on('close', function() { // Listen close event
   console.log('Bye!!!'); // Display the message when the server is closed 
});

server.listen(8080); // Start the server

server.close(); // Close the server, trigger the event close
