/**
 * Todolist application
 * 
 * @author: Christophe Malo
 * @version: 0.1.0
 */
var express = require('express'); // Loads Express.js framework
var session = require('cookie-session'); // Loads sessions middleware
var bodyParser = require('body-parser'); // Loads the settings management middleware
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

var application = express();

// use sessions
application.use(session({ secret: 'todosecretwordmagic' }))

// If no todolist in session, create a empty array todolist
.use(function(request, response, next)
{
    if (typeof(request.session.todolist) == 'undefined')
    {
        request.session.todolist = [];
    }
    next();
}) 

// Display the todolist and the form
.get('/todolist', function(request, response)
{
    response.render('todolist.ejs', { todolist: request.session.todolist });
})

// Add element to todolist
.post('/todolist/add/', urlEncodedParser, function(request, response)
{
    if (request.body.newTodolist != '')
    {
        request.session.todolist.push(request.body.newTodolist);
    }
    response.redirect('/todolist');
})

// Delete element in todolist        
.get('/todolist/delete/:id', function(request, response)
{
    if (request.params.id != '')
    {
        request.session.todolist.splice(request.params.id, 1);
    }
    response.redirect('/todolist');
})

// Redirect to todolist home if wrong page
.use(function(request, response, next)
{
    response.redirect('/todolist');
})

.listen(3000);