const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.Controller");
// Rota GET /users - lista todas as users
router.get("/", usersController.listar);
// Rota POST /users - adiciona nova users
router.post("/", usersController.adicionar);
module.exports = router;
