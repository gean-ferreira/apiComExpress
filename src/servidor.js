var express = require('express');
var app = express();

app.get('/produtos', function (req, res) {
  res.send({ nome: 'Escova de dente', preco: 5.99 })
})