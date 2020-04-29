var express = require('express');
var app = express();
var db = require('./db');

var AdminController = require('./src/AdminController');
app.use('/admins', AdminController);

var ConstructionController = require('./src/ConstructionController');
app.use('/admins', ConstructionController);
module.exports = app;