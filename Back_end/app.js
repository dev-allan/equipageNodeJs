/* Mise au clair de l'architecture MVC */

const express = require('express');
const bodyParser = require('body-parser');
const nameRoute = require('./routes/nameRoute.js');

var app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.urlencoded({ extended: true}));
app.use(express.json()); 

app.use('/name', nameRoute);

module.exports = app;