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

application.get('/company/team/:memberName', function(request, response) {
    response.setHeader('Content-Type', 'text/plain');
    response.end('Our member team: ' + request.params.memberName);
});

// Test page with EJS (template)
application.get('/company/adress/:town/:number', function(request, response) {
    var contactName = ['Chris', 'Lalie', 'Emma'];
    response.render('address.ejs', {thetown: request.params.town, number: request.params.number, contactName: contactName});
});

application.use(function(request, response, next) {
    response.setHeader('Content-Type', 'text/plain');
    response.end('404 not found');
});

// Concatenate the verb
/*
application.get('/', function(request, response) {
    // Code
})
.get('/contact', function(request, response) {
    // Code
})
.get('/company/team', function(request, response) {
    // Code
})
.use(function(request, response, next){
    // Code
});
*/

application.listen(8080);
