/*
 * The file will take care of the database connectivity
 */

var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/Offuz');
mongoose.connect('mongodb://52.38.184.202:27017/Offuz');

//check if we are connected successfully or not
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error')); 
