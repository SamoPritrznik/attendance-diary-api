var express = require('express');
var app = express();
var db = require('./db');

var AdminController = require('./src/AdminController');
app.use('/admins', AdminController);
module.exports = app;