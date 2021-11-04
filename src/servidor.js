var porta = 3003;

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var bancoDeDados = require('./bancoDeDados');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', function (req, res) {
  res.send(bancoDeDados.getProdutos());
})

app.get('/produtos/:id', function (req, res) {
  res.send(bancoDeDados.getProduto(req.params.id));
})

app.post('/produtos', function (req, res) {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto);
})

app.put('/produtos/:id', function (req, res) {
  const produto = bancoDeDados.salvarProduto({
    id: req.params.id,
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto);
})

app.delete('/produtos/:id', function (req, res) {
  const produto = bancoDeDados.excluirProduto(req.params.id);
  res.send(produto);
})

app.listen(porta, function () {
  console.log(`Servidor rodando na porta ${porta}.`);
})