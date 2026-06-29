const connection = require("../config/db");
// Controlador responsável por lidar com rotas públicas da aplicação
class PublicController {
  // Método para listar pets disponíveis para adoção
  static async listAvailable(req, res) {
  try {
    const [pets] = await connection.execute(
      "SELECT * FROM pets WHERE status = ?",
      ["available"]
    );
    return res.status(200).json(pets);
  } catch (error) {
    return res.status(500).json({
      message: "Erro ao listar pets disponíveis.",
      error: error.message,
    });
  }
  }
}
module.exports = PublicController;

