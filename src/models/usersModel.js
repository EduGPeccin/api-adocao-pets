const db = require("../config/db");
// Importa a conexão pool com o banco de dados
class UserModel {
  // Busca um usuário pelo email
  static async findByEmail(email) {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0];
  }
  // Cria um novo usuário
  static async create(user) {
    const { name, email, password, phone, role } = user;
    const [result] = await db.query(
      "INSERT INTO users (name, email, password, phone, role) VALUES (?, ?, ?, ?, ?)",
      [name, email, password, phone, role],
    );
    return result.insertId; // Retorna o ID do usuário criado
  }
}
module.exports = UserModel;
// Exporta a classe UserModel para ser usada nos services
