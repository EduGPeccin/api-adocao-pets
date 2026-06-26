const connection = require("../config/db");
// Retorna todos os users cadastrados
exports.buscarTodos = (callback) => {
    connection.query("SELECT * FROM users", callback);
};
// Insere um novo user no banco de dados
exports.inserir = ({ nome, nickname }, callback) => {
    const sql = "INSERT INTO users (nome, nickname) VALUES (?, ?)";
    connection.query(sql, [nome, nickname], callback);
};

