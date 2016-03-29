/**
 * Test socket.io in application
 * 
 * @author: Christophe Malo
 * @version: 0.1.0
 */
var http = require('http');
var fs   = require('fs'); // Call module File System

// Load index file - this file is displayed to client
var server = http.createServer(function (request, response)
{
    fs.readFile('./index.html', 'utf-8', function(error, content)
    {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(content);
    });
});

// Load socket.io
var socketio = require('socket.io').listen(server);

// Display client connection in console
socketio.sockets.on('connection', function(socket)
{
    console.log('A client is connected');
    socket.emit('message', 'Your are connected');
});

server.listen(8080);
