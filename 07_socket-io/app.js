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
    console.log('A client is connected'); // Test the connection
    
    // When client is connected, sends message to client
    socket.emit('message', 'Your are connected');
    
    // When new client is connected, sends message to all other clients connected
    socket.broadcast.emit('message', 'Another client just connected');
    
    /* Receives nickname of visitor, after answer to prompt message
       and click contact button, stores nickame in session variable */
    socket.on('nickname', function(nickname)
    {
        socket.nickname = nickname;
    });
    
    // Receive nickname and message from client
    socket.on('message', function(message)
    {
        console.log(socket.nickname + ' talks me. A client send a message to server: ' + message);
    });
});

server.listen(8080);
