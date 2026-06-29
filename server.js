// Importa o módulo Express, para a criação de servidores web com Node.js
const express = require("express");
// Importa as rotas responsáveis pela autenticação (login, cadastro, etc.)
const authRoutes = require("./src/routes/auth");
// Importa as rotas públicas, que não requerem autenticação
const publicRoutes = require("./src/routes/public");
// Importa as rotas protegidas, que só podem ser acessadas com um token JWT
const protectedRoutes = require("./src/routes/protected");
// Cria uma instância da aplicação Express
const app = express();
// Habilita o servidor para receber e interpretar requisições com corpo em JSON
app.use(express.json());
// Define o prefixo '/auth' para as rotas de autenticação
app.use("/auth", authRoutes);
// Define o prefixo '/public' para rotas acessíveis sem autenticação
app.use("/public", publicRoutes);
// Define o prefixo '/protected' para rotas que exigem autenticação com JWT
app.use("/protected", protectedRoutes);
require("dotenv").config(); // Carrega variáveis de ambiente
const PORT = process.env.PORT || 3000;
// Inicia o servidor Express para escutar na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
