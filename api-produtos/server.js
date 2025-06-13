// server.js
const express = require('express');
const app = express();
const produtosRoutes = require('./routes/produtos');

// Permitir receber JSON no corpo das requisições
app.use(express.json());

// Rota base da API
app.use('/api/produtos', produtosRoutes);

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
