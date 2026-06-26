const connection = require("../config/db");
exports.buscarTodos = (callback) => {
 connection.query("SELECT * FROM pets", callback);
};
exports.inserir = (dados, callback) => {
 const { name, age, species, size, status, description } = dados;
 const sql = "INSERT INTO pets (name, age, species, size, status, description) VALUES (?, ?, ?, ?, ?, ?)";
 connection.query(sql, [name, age, species, size, status, description], callback);
};
