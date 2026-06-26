const usersModel = require("../models/usersModel");
// Lista todas as users cadastradas
exports.listar = (req, res) => {
    usersModel.buscarTodos((err, results) => {
        if (err) return res.status(500).send("Erro ao listar usuários");
        res.json(results);
    });
};

// Adiciona um novo user, com validação dos campos
exports.adicionar = (req, res) => {
    const { nome, nickname } = req.body;
    // Validação dos campos obrigatórios
    if (!nome || !nickname) {
        return res.status(400).send("Nome e nickname são obrigatórios");
    }
    usersModel.inserir(req.body, (err) => {
        if (err) return res.status(500).send("Erro ao adicionar user");
        res.status(201).send("Usuario adicionado com sucesso");
    });
};