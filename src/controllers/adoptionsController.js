const pontuacaoModel = require("../models/adoptionsModel");

// Lista pontuações com informações do jogador (JOIN)
exports.populares = (req, res) => {
    pontuacaoModel.populares((err, results) => {
        if (err) return res.status(500).send("Erro ao listar pontuação com jogadores");
        res.json(results);
    });
};
// Lista ranking por jogo (JOIN)
exports.rankingPorJogo = (req, res) => {
    const { idJogo } = req.params;

    if (!idJogo || isNaN(idJogo)) {
        return res.status(400).json({ error: 'ID do jogo inválido' });
    }

    pontuacaoModel.rankingPorJogo(parseInt(idJogo), (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};
// Adiciona uma nova pontuação após validar os campos
exports.adicionar = (req, res) => {
    const { jogo_id, jogador_id, pontuacao } = req.body;
    // Validação simples dos campos obrigatórios
    if (!jogo_id || !jogador_id || !pontuacao) {
        return res.status(400).send("Todos os campos são obrigatórios.");
    }
     if (pontuacao < 0) {
        return res.status(400).send("Pontuação não pode ser negativa");
    }
    pontuacaoModel.inserir(req.body, (err) => {
        if (err) return res.status(500).send("Erro ao adicionar pontuação");
        res.status(201).send("Pontuação adicionada com sucesso");
    });
};