const express = require('express');
// Importa o framework Express
const { authenticateToken, authorizeAdmin} = require('../middlewares/auth.middleware');
//Importa o middleware que valida tokens JWT em rotas protegidas
const ProtectedController = require('../controllers/protected.controller');
// Importa o controller responsável por lidar com rotas protegidas por autenticação JWT
const router = express.Router();
// Cria uma nova instância do roteador do Express para definir as rotas protegidas
router.get('/users', authenticateToken, authorizeAdmin, ProtectedController.listUsers);
// Define a rota GET /users que chama o método listUsers do ProtectedController
router.get('/users/:id', authenticateToken, ProtectedController.getUserById);
// Define a rota GET /users/:id que chama o método getUserById do ProtectedController
router.put('/users/:id', authenticateToken, ProtectedController.updateUser);
// Define a rota PUT /users/:id que chama o método updateUser do ProtectedController
router.delete('/users/:id', authenticateToken, authorizeAdmin, ProtectedController.deleteUser);
// Define a rota DELETE /users/:id que chama o método deleteUser do ProtectedController
router.get('/pets', authenticateToken, authorizeAdmin, ProtectedController.listPets);
// Define a rota GET /pets que chama o método listPets do ProtectedController
router.get('/pets/:id', authenticateToken, authorizeAdmin, ProtectedController.getPetsById);
// Define a rota GET /pets/:id que chama o método getPetsById do ProtectedController
router.post('/pets', authenticateToken, authorizeAdmin, ProtectedController.createPets);
// Define a rota POST /pets que chama o método createPets do ProtectedController
router.put('/pets/:id', authenticateToken, authorizeAdmin, ProtectedController.updatePets);
// Define a rota PUT /pets/:id que chama o método updatePets do ProtectedController
router.delete('/pets/:id', authenticateToken, authorizeAdmin, ProtectedController.deletePets);
// Define a rota DELETE /pets/:id que chama o método deletePets do ProtectedController
router.get('/adoptions', authenticateToken, authorizeAdmin, ProtectedController.listAdoptions);
// Define a rota GET /adoptions que chama o método listAdoptions do ProtectedController
router.post('/adoptions', authenticateToken, ProtectedController.createAdoption);
// Define a rota POST /adoptions que chama o método createAdoption do ProtectedController
module.exports = router;
// Exporta o roteador configurado para ser utilizado na aplicação