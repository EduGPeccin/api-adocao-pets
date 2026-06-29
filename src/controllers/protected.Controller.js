const connection = require("../config/db");
class ProtectedController {

  static async listUsers(req, res) {
    try {
      const [users] = await connection.execute(
        "SELECT id, name, email, phone, role FROM users"
      );

      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao listar usuários.",
        error: error.message,
      });
    }
  }

  static async getUserById(req, res) {
    try {
      const [users] = await connection.execute(
        "SELECT id, name, email, phone, role FROM users WHERE id = ?",
        [req.params.id]
      );

      if (users.length === 0) {
        return res.status(404).json({
          message: "Usuário não encontrado.",
        });
      }

      return res.status(200).json(users[0]);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar usuário.",
        error: error.message,
      });
    }
  }

  static async updateUser(req, res) {
    try {
      const { name, email, phone } = req.body;

      const [result] = await connection.execute(
        "UPDATE users SET name=?, email=?, phone=? WHERE id=?",
        [name, email, phone, req.params.id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Usuário não encontrado.",
        });
      }

      return res.status(200).json({
        message: "Usuário atualizado com sucesso.",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao atualizar usuário.",
        error: error.message,
      });
    }
  }

  static async deleteUser(req, res) {
    try {
      const [result] = await connection.execute(
        "DELETE FROM users WHERE id=?",
        [req.params.id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Usuário não encontrado.",
        });
      }

      return res.status(200).json({
        message: "Usuário removido com sucesso.",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao remover usuário.",
        error: error.message,
      });
    }
  }

  static async listPets(req, res) {
    try {
      const [pets] = await connection.execute("SELECT * FROM pets");

      return res.status(200).json(pets);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao listar pets.",
        error: error.message,
      });
    }
  }

  static async getPetById(req, res) {
    try {
      const [pets] = await connection.execute(
        "SELECT * FROM pets WHERE id=?",
        [req.params.id]
      );

      if (pets.length === 0) {
        return res.status(404).json({
          message: "Pet não encontrado.",
        });
      }

      return res.status(200).json(pets[0]);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao buscar pet.",
        error: error.message,
      });
    }
  }

  static async createPet(req, res) {
    try {
      const { name, age, species, size, status, description } = req.body;

      const [result] = await connection.execute(
        `INSERT INTO pets (name, age, species, size, status, description)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [name, age, species, size, status, description]
      );

      return res.status(201).json({
        message: "Pet cadastrado com sucesso.",
        id: result.insertId,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao cadastrar pet.",
        error: error.message,
      });
    }
  }

  static async updatePet(req, res) {
    try {
      const { name, age, species, size, status, description } = req.body;

      const [result] = await connection.execute(
        `UPDATE pets
         SET name=?, age=?, species=?, size=?, status=?, description=?
         WHERE id=?`,
        [name, age, species, size, status, description, req.params.id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Pet não encontrado.",
        });
      }

      return res.status(200).json({
        message: "Pet atualizado com sucesso.",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao atualizar pet.",
        error: error.message,
      });
    }
  }

  static async deletePet(req, res) {
    try {
      const [result] = await connection.execute(
        "DELETE FROM pets WHERE id=?",
        [req.params.id]
      );

      if (result.affectedRows === 0) {
        return res.status(404).json({
          message: "Pet não encontrado.",
        });
      }

      return res.status(200).json({
        message: "Pet removido com sucesso.",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao remover pet.",
        error: error.message,
      });
    }
  }

  static async listAdoptions(req, res) {
    try {
      const [adoptions] = await connection.execute(`
        SELECT
          a.id,
          u.name AS user,
          p.name AS pet,
          a.adoption_date
        FROM adoptions a
        INNER JOIN users u ON a.user_id = u.id
        INNER JOIN pets p ON a.pet_id = p.id
      `);

      return res.status(200).json(adoptions);
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao listar adoções.",
        error: error.message,
      });
    }
  }

  static async createAdoption(req, res) {
    try {
      const { pet_id } = req.body;

      await connection.execute(
        "INSERT INTO adoptions (user_id, pet_id) VALUES (?, ?)",
        [req.user.id, pet_id]
      );

      await connection.execute(
        "UPDATE pets SET status='Adotado' WHERE id=?",
        [pet_id]
      );

      return res.status(201).json({
        message: "Adoção realizada com sucesso.",
      });
    } catch (error) {
      return res.status(500).json({
        message: "Erro ao realizar adoção.",
        error: error.message,
      });
    }
  }
}
module.exports = ProtectedController;