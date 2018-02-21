'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

var path = require('path');

// App
const app = express();

app.use('/', express.static(path.join(__dirname + '/')));

app.get('/', (req, res) => {
  res.sendfile('menu.html');
});



app.listen(PORT, HOST);
console.log(`Corriendo en puerto http://${HOST}:${PORT}`);