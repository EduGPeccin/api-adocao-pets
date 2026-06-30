const bcrypt = require("bcryptjs"); // Biblioteca para criptografia de senhas
const jwt = require("jsonwebtoken"); // Biblioteca para geração de tokens JWT
const UserModel = require("../models/usersModel"); // Model responsável pelo acesso à tabela de usuários no banco
// Classe que contém os serviços relacionados ao usuário, como registro e login
class UserService {
  // Método para registrar um novo usuário
  static async registerUser(user) {
    const { name, email, password, phone, role } = user;
    // Verifica se o e-mail já está cadastrado
    const existing = await UserModel.findByEmail(email);
    if (existing) {
      throw new Error("Usuário já existe");
    }
    // Criptografa a senha antes de salvar no banco
    const hashed = await bcrypt.hash(password, 10);
    const newUser = {
      name,
      email,
      password: hashed,
      phone,
      role: "adopter",
    };
    const id = await UserModel.create(newUser);
    // Retorna os dados de sucesso (sem lançar erro)
    return { message: "Usuário registrado com sucesso", id };
  }
  // Método para autenticar o usuário e gerar token JWT
  static async loginUser({ email, password }) {
    const user = await UserModel.findByEmail(email);

    if (!user) {
      throw new Error("Usuário não encontrado");
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new Error("Senha inválida");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
    );

    return { token };
  }
}
module.exports = UserService;
