"use strict";

var express = require('express');

var products = require('./data/products');

require('dotenv').config;
var app = express();
app.get('/', function (req, res) {
  res.send('API is Running....!');
});
app.get('/api/products', function (req, res) {
  res.json(products);
});
app.get('/api/products/:id', function (req, res) {
  var product = products.find(function (p) {
    return p._id === req.params.id;
  });
  res.json(product);
});
var PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("server running on ".concat(process.env.NODE_ENV, " mode on port ").concat(PORT)));