const express = require("express");
const router = express.Router();
const adoptionsController = require("../controllers/adoptionsController");
// Rota GET /adoptions/jogos/populares - lista adoptions com jogadores
router.get("/jogos/populares", adoptionsController.populares);
// Rota GET /adoptions/ranking/:idJogo - lista ranking por jogo
router.get("/ranking/:idJogo", adoptionsController.rankingPorJogo);
// Rota POST /adoptions - adiciona novo adoptions
router.post("/", adoptionsController.adicionar);
module.exports = router;