/**
 * The HTTP server
 * Create a mini-server that return a 
 * 
 * http, request and response are objects
 * 
 * @author: Christophe Malo
 * @version: 1.0.0
 */
var http        = require('http');          // Call http Node.js lib to create HTTP Server
var url         = require('url');           // Call module url
var querystring = require('querystring');   // Call querystring to use parameters

var server = http.createServer(function(request, response) {
    var page       = url.parse(request.url).pathname;
    var parameters = querystring.parse(url.parse(request.url).query);
    
    console.log(page); // Debug - Return the page in Terminal
    
    response.writeHead(200, {"Content-Type": "text/html"});
    if (page === '/')
    {
        response.write(
            '<!DOCTYPE html>' +
            '<html lang="en">' +
            '    <head>' +
            '       <meta charset="utf-8" />' +
            '       <title>Ma first Node.js page - Homepage !</title>' +
            '    </head>' +
            '    <body>' +
            '       <p>Welcome to the home page</p>' +
            '       <p>Hello World! My first Node.js Server - <strong>Code with HTML</strong></p>' +
            '    </body>' +
            '</html>'
        );
    }
    else if (page === '/contact' && 'firstname' in parameters && 'lastname' in parameters)
    {
        response.write(
            '<!DOCTYPE html>' +
            '<html lang="en">' +
            '    <head>' +
            '       <meta charset="utf-8" />' +
            '       <title>Contact page!</title>' +
            '    </head>' +
            '    <body>' +
            '       <p>Hi ' + parameters['firstname'] + ' ' + parameters['lastname'] + '</p>' +
            '       <p>Use the form to contact us.</p>' +
            '    </body>' +
            '</html>'
        );
    }
    else if (page === '/company/team')
    {
        response.write(
            '<!DOCTYPE html>' +
            '<html lang="en">' +
            '    <head>' +
            '       <meta charset="utf-8" />' +
            '       <title>Company - Team</title>' +
            '    </head>' +
            '    <body>' +
            '       <p>This is our Team: Chris, Lalie and Erwan</p>' +
            '    </body>' +
            '</html>'
        );
    }
    else
    {
        response.writeHead(404, {"Content-Type": "text/html"});
        response.write(
            '<!DOCTYPE html>' +
            '<html lang="en">' +
            '    <head>' +
            '       <meta charset="utf-8" />' +
            '       <title>404 Not found</title>' +
            '    </head>' +
            '    <body>' +
            '       <p>404 Not Found</p>' +
            '    </body>' +
            '</html>'
        );
    }
    
    response.end();
});
server.listen(8080); // Start the server
