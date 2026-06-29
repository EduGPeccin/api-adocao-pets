const express = require('express');
// Importa o framework Express
const { authenticateToken, authorizeRole } = require('../middlewares/auth.middleware');
//Importa o middleware que valida tokens JWT em rotas protegidas
const ProtectedController = require('../controllers/protected.controller');
// Importa o controller responsável por lidar com rotas protegidas por autenticação JWT
const router = express.Router();
// Cria uma nova instância do roteador do Express para definir as rotas protegidas
router.get('/users', authenticateToken, authorizeRole('admin'), ProtectedController.listUsers);
// Define a rota GET /users que chama o método listUsers do ProtectedController
router.get('/users/:id', authenticateToken, ProtectedController.getUserById);
// Define a rota GET /users/:id que chama o método getUserById do ProtectedController
router.put('/users/:id', authenticateToken, ProtectedController.updateUser);
// Define a rota PUT /users/:id que chama o método updateUser do ProtectedController
router.delete('/users/:id', authenticateToken, authorizeRole('admin'), ProtectedController.deleteUser);
// Define a rota DELETE /users/:id que chama o método deleteUser do ProtectedController
router.get('/pet', authenticateToken, authorizeRole('admin'), ProtectedController.listPets);
// Define a rota GET /pet que chama o método listPets do ProtectedController
router.get('/pet/:id', authenticateToken, authorizeRole('admin'), ProtectedController.getPetById);
// Define a rota GET /pet/:id que chama o método getPetById do ProtectedController
router.post('/pet', authenticateToken, authorizeRole('admin'), ProtectedController.createPet);
// Define a rota POST /pet que chama o método createPet do ProtectedController
router.put('/pet/:id', authenticateToken, authorizeRole('admin'), ProtectedController.updatePet);
// Define a rota PUT /pet/:id que chama o método updatePet do ProtectedController
router.delete('/pet/:id', authenticateToken, authorizeRole('admin'), ProtectedController.deletePet);
// Define a rota DELETE /pet/:id que chama o método deletePet do ProtectedController
router.get('/adoptions', authenticateToken, authorizeRole('admin'), ProtectedController.listAdoptions);
// Define a rota GET /adoptions que chama o método listAdoptions do ProtectedController
router.post('/adoptions', authenticateToken, ProtectedController.createAdoption);
// Define a rota POST /adoptions que chama o método createAdoption do ProtectedController
module.exports = router;
// Exporta o roteador configurado para ser utilizado na aplicação