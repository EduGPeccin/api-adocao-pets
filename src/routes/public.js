const express = require('express');
// Importa o framework Express
const PublicController = require('../controllers/public.Controller');
// Importa o controller responsável por lidar com rotas públicas da aplicação
const router = express.Router();
// Cria uma nova instância do roteador do Express para as rotas públicas
router.get('/pets/available', PublicController.listAvailable);
// Define a rota GET /pets/available que chama o método listAvailable do PublicController
module.exports = router;
// Exporta o roteador configurado para ser utilizado na aplicação