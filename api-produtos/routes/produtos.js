// routes/produtos.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/produtosController');
const { validarProduto } = require('../validators/produtosValidator');

// Endpoints da API com validações
router.get('/', controller.listarProdutos);
router.get('/:id', controller.obterProduto);
router.post('/', validarProduto, controller.criarProduto);
router.put('/:id', validarProduto, controller.editarProduto);
router.delete('/:id', controller.excluirProduto);

module.exports = router;
