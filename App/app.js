// App basics connecting the server to the application
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(router);

module.exports = app;
