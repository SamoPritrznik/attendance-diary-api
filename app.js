
var express = require('express');
var app = express();
var db = require('./db');
var swaggerUi = require('swagger-ui-express');
var SwaggerDocument = require('./api/swagger.json');

var Controller = require('./src/Controller');
app.use('/diary', Controller);
app.use('/docs',swaggerUi.serve, SwaggerDocument)

module.exports = app;