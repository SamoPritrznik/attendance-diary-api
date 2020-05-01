import swaggerUi from "swagger-ui-express"
import * as SwaggerDocument from "./api/swagger.json"

var express = require('express');
var app = express();
var db = require('./db');

var Controller = require('./src/Controller');
app.use('/diary', Controller);
app.use('/docs',swaggerUi.serve, SwaggerDocument)

module.exports = app;