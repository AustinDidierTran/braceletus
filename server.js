const express = require('express');
const app = express();
const conf = require('./server/conf');

require('./app/routes')(app, express); // pass our application into our routes
require('./server/websockets')(); // initializes websockets

// viewed at http://localhost:
app.listen(conf.port);
console.log(`Listening on port ${conf.port}`);
