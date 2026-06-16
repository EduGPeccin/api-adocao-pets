const express = require("express");
const router = express.Router();
const petController = require("../controllers/petController");
router.get("/", petController.listar);
router.post("/", petController.adicionar);
module.exports = router;