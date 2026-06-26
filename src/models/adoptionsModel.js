const connection = require("../config/db");

// Insere uma nova pontuação no banco de dados
exports.inserir = ({ pontuacao, jogo_id, jogador_id }, callback) => {
  const sql = "INSERT INTO pontuacao (pontuacao, jogo_id, jogador_id) VALUES (?, ?, ?)"; connection.query(sql, [pontuacao, jogo_id, jogador_id], callback);
};
// Lista jogos populares (JOIN)
exports.populares = (callback) => {
  const sql = `
    SELECT 
      j.id, 
      j.nome AS jogo, 
      j.plataforma, 
      j.ano_lancamento,
      COUNT(p.id) AS total_pontuacoes
    FROM pontuacao p
    INNER JOIN jogos j ON p.jogo_id = j.id
    GROUP BY j.id, j.nome, j.plataforma, j.ano_lancamento
    ORDER BY total_pontuacoes DESC
    LIMIT 3
  `;
  connection.query(sql, callback);
};
// Lista ranking por jogo (JOIN)
exports.rankingPorJogo = (idJogo, callback) => {
  const sql = `
    SELECT j.id AS jogador_id, j.nome AS jogador, MAX(p.pontuacao) AS melhor_pontuacao
    FROM pontuacao p
    JOIN jogadores j ON p.jogador_id = j.id
    WHERE p.jogo_id = ?
    GROUP BY j.id, j.nome
    ORDER BY melhor_pontuacao DESC LIMIT 10
  `;
  connection.query(sql, [idJogo], callback);
};
