// require modules
const express = require('express');
const emailRoute = require('./api-routes/email');

const app = express();

app.use('/email', emailRoute);

module.exports = app;