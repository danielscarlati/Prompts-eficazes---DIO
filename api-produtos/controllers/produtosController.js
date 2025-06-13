// controllers/produtosController.js
const { validationResult } = require('express-validator');

// Simulando um banco de dados em memória
let produtos = [];
let idAtual = 1;

// Listar todos os produtos
exports.listarProdutos = (req, res) => {
  res.json(produtos);
};

// Obter um produto pelo ID
exports.obterProduto = (req, res) => {
  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);
  if (!produto) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }
  res.json(produto);
};

// Criar novo produto com validação
exports.criarProduto = (req, res) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erros: erros.array() });
  }

  const { nome, preco } = req.body;
  const novoProduto = { id: idAtual++, nome, preco };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
};

// Editar um produto existente
exports.editarProduto = (req, res) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erros: erros.array() });
  }

  const id = parseInt(req.params.id);
  const produto = produtos.find(p => p.id === id);
  if (!produto) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  const { nome, preco } = req.body;
  produto.nome = nome;
  produto.preco = preco;
  res.json(produto);
};

// Excluir um produto
exports.excluirProduto = (req, res) => {
  const id = parseInt(req.params.id);
  const index = produtos.findIndex(p => p.id === id);
  if (index === -1) {
    return res.status(404).json({ erro: 'Produto não encontrado' });
  }

  produtos.splice(index, 1);
  res.status(204).send();
};
