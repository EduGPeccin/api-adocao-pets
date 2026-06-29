const adoptionsModel = require("../models/adoptionsModel");

// Lista adoptions com informações do jogador (JOIN)
exports.populares = (req, res) => {
    adoptionsModel.populares((err, results) => {
        if (err) return res.status(500).send("Erro ao listar adoções");
        res.json(results);
    });
};
// Lista ranking por Adoptions (JOIN)
exports.rankingPorAdoptions = (req, res) => {
    const { idAdoptions } = req.params;

    if (!idAdoptions || isNaN(idAdoptions)) {
        return res.status(400).json({ error: 'ID do Adoptions inválido' });
    }

    adoptionsModel.rankingPorAdoptions(parseInt(idAdoptions), (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
// Adiciona uma nova adoptions após validar os campos
exports.adicionar = (req, res) => {
    const { id, user_id, pet_id, adoption_date } = req.body;
    // Validação simples dos campos obrigatórios
    if (!id || !user_id || !pet_id || !adoption_date) {
        return res.status(400).send("Todos os campos são obrigatórios.");
    }
     if (adoptions < 0) {
        return res.status(400).send("Adoptions não pode ser negativa");
    }
    adoptionsModel.inserir(req.body, (err) => {
        if (err) return res.status(500).send("Erro ao adicionar adoptions");
        res.status(201).send("Adoptions adicionada com sucesso");
    });
};