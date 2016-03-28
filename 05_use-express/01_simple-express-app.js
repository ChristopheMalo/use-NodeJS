/**
 * Example how to use Express.js
 * 
 * @author: Christophe Malo
 * @version: 1.0.0
 */
var express = require('express');

var application = express();

// Route with Express.js
application.get('/', function(request, response) {
   response.setHeader('Content-Type', 'text/plain');
   response.end('This is the homepage');
});

application.get('/contact', function(request,response) {
   response.setHeader('Content-Type', 'text/plain');
   response.end('A Contact page');
});

application.get('/company/team', function(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    response.end('Our team');
});

application.use(function(request, response, next) {
    response.setHeader('Content-Type', 'text/plain');
    response.end('404 not found');
});

application.listen(8080);