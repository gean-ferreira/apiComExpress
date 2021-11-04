var porta = 3003;

var express = require('express');
var app = express();

app.get('/produtos', function (req, res) {
  res.send({ nome: 'Escova de dente', preco: 5.99 })
})

app.listen(porta, function () {
  console.log(`Servidor rodando na porta ${porta}.`);
})