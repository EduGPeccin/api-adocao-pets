const mysql = require("mysql2");
const connection = mysql.createConnection({
 host: "localhost",
 user: "root", // seu usuário do MySQL
 password: "", // sua senha
 database: "pets_db",
});
connection.connect((err) => {
 if (err) {
 console.error("Erro ao conectar:", err);
 return;
 }
 console.log("Conectado ao banco de dados com sucesso!");
});
module.exports = connection;
