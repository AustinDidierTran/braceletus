var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app); // pass our application into our routes

// viewed at http://localhost:
app.listen(port);
console.log('Listening on port ' + port);
