/**
 * The HTTP server
 * Emit events 
 * 
 * @author: Christophe Malo
 * @version: 1.0.0
 */
var EventEmitter = require('events').EventEmitter;

var game = new EventEmitter();

game.on('gameover', function(message) {
    console.log(message);
});

game.emit('gameover', 'You lost...');
// game.Emit('newplayer', 'Player_Name', 45); // Send several parameters
