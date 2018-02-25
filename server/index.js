const express = require('express');
// const favicon = require('serve-favicon');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const Port = 3000;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(favicon(path.join(__dirname, '../client/styles/favicon.ico')));
app.use(express.static('bower_components'));
app.use(express.static(path.resolve(__dirname, '..', 'client')));
app.use(express.static(path.resolve(__dirname, '..', 'node_modules')));

app.use(function(err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal Server Error;');
});

// Use Routes ***
var routes = require('./routes/routes_all.js');
routes(app);

app.all('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'))
}); 

app.listen(process.env.PORT || Port, function () {
    console.log("Listening On 3000...");
});