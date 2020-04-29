var express = require('express');
var app = express();
var db = require('./db');

var AdminController = require('./AdminController');
app.use('/admins', AdminController);
module.exports = app;