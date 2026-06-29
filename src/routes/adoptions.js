const express = require("express");
const router = express.Router();
const adoptionsController = require("../controllers/adoptionsController");
router.post("/", adoptionsController.adicionar);
module.exports = router;