const express = require("express");
const router = express.Router();
const petsController = require("../controllers/petsController");
router.get("/", petsController.listar);
router.post("/", petsController.adicionar);
module.exports = router;