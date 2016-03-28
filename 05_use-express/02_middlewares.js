/**
 * Example how to use Express.js middlewares
 * 
 * @author: Christophe Malo
 * @version: 1.0.0
 */
var express = require('express');
var morgan  = require('morgan');        // Load morgan logger middleware
var favicon = require('serve-favicon'); // Load favicon middleware

var application = express();

application.use(morgan('combined')) // Activate logging middleware
        .use(express.static(__dirname + '/public')) // Indicates that the /public folder contains static files (based middleware loaded)
        .use(favicon(__dirname + '/public/favicon.ico')) // Avctivate favicon
        .use(function(request, response) {
            response.send('Hi World with display favicon');
});

application.listen(8080);
