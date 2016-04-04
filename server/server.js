/// server.js

/// create app
var express = require('express'); // web server
var stylus = require('stylus'); // autocompile css

var app = express(); // creating the app

/// set views dir, view engine, tell jade to output pretty html
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.locals.pretty = true;

/// create function for stylus middleware 
function compile() {

}

/// configure stylus middleware

/// set port
var port = process.env.PORT || 3000;

/// create route handler - add route to index page
/// let all routes to be handled by client-side index
app.get('*', function(req, res) {
  res.render('index');
});

/// tell server to start listening to requests
app.listen(port, function() {
  console.log('Listening now at port ' + port + '...');
});
