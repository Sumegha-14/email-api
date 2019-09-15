// required modules
const dotenv = require('dotenv').config();
const http = require('http');
const app = require('./app');

// configure environment variables

// configure port
const port = process.env.PORT || 5000;
console.log(port);

// create server
const server = http.createServer(app);

server.timeout = 3600000;

// listen to the provided PORT
server.listen(port);