var express = require('express');
var app = express();

const port = process.env.PORT || 3000;

// viewed at http://localhost:8080

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port);

console.log(`Listening on port ${port}`);