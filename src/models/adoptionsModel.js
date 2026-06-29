const connection = require("../config/db");

// Insere uma nova pontuação no banco de dados
exports.inserir = ({ id, user_id, pet_id, adoption_date }, callback) => {
  const sql =
    "INSERT INTO pontuacao (id, user_id, pet_id, adoption_date ) VALUES (?, ?, ?, ?)";
  connection.query(sql, [id, user_id, pet_id, adoption_date], callback);
};
// Lista adoptionss populares (JOIN)
exports.populares = (callback) => {
  const sql = `
    SELECT 
      j.id, 
      j.nome AS adoptions, 
      j.plataforma, 
      j.ano_lancamento,
      COUNT(p.id) AS total_pontuacoes
    FROM pontuacao p
    INNER JOIN adoptionss j ON p.adoptions_id = j.id
    GROUP BY j.id, j.nome, j.plataforma, j.ano_lancamento
    ORDER BY total_pontuacoes DESC
    LIMIT 3
  `;
  connection.query(sql, callback);
};
// Lista ranking por adoptions (JOIN)
exports.rankingPorAdoptions = (idAdoptions, callback) => {
  const sql = `
    SELECT j.id AS jogador_id, j.nome AS jogador, MAX(p.pontuacao) AS melhor_pontuacao
    FROM pontuacao p
    JOIN jogadores j ON p.jogador_id = j.id
    WHERE p.adoptions_id = ?
    GROUP BY j.id, j.nome
    ORDER BY melhor_pontuacao DESC LIMIT 10
  `;
  connection.query(sql, [idAdoptions], callback);
};
