var express = require('express');
var app = express();
var db = require('./db');

var Controller = require('./src/Controller');
app.use('/diary', Controller);

module.exports = app;