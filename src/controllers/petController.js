const livroModel = require("../models/petModel");
exports.listar = (req, res) => {
 petModel.buscarTodos((err, results) => {
 if (err) return res.status(500).send("Erro ao listar pets");
 res.json(results);
 });
};
exports.adicionar = (req, res) => {
 const { name, age, species, size, status, description } = req.body;
 // Validação dos campos obrigatórios
 if (!name || !age || !species || !size || !status || !description) {
 return res.status(400).send("Todos os campos são obrigatórios: name, age, species, size, status e description");
 }
 petModel.inserir(req.body, (err) => {
 if (err) {
 console.error("Erro ao adicionar pet:", err);
 return res.status(500).send("Erro ao adicionar pet");
 }
 res.status(201).send("Pet adicionado com sucesso");
 });
 };
