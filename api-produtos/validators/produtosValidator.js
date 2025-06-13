// validators/produtosValidator.js
const { body } = require('express-validator');

// Middleware de validação de produto
exports.validarProduto = [
  body('nome')
    .notEmpty().withMessage('O nome é obrigatório')
    .isLength({ min: 3 }).withMessage('O nome deve ter pelo menos 3 caracteres'),
  body('preco')
    .notEmpty().withMessage('O preço é obrigatório')
    .isFloat({ gt: 0 }).withMessage('O preço deve ser um número maior que 0'),
];
