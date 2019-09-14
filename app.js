// require modules
const express = require('express');
const emailRoute = require('./api-routes/email');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/email', emailRoute);

// Error handlor
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        status: error.status,
        message: error.message
    })
})

module.exports = app;