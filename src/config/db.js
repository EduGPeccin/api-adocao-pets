const mysql = require("mysql2/promise");
require("dotenv").config();

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

(async () => {
  try {
    const conn = await connection.getConnection();
    console.log("Conectado ao MySQL com sucesso!");
    conn.release();
  } catch (err) {
    console.error("Erro ao conectar no MySQL:", err.message);
    process.exit(1);
  }
})();

module.exports = connection;