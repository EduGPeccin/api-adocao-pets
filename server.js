// Importa o framework Express, responsável por criar o servidor e gerenciar as rotas
const express = require("express");
// Inicializa o aplicativo Express
const app = express();
// Importa as rotas do módulo de pets
const petsRoutes = require("./src/routes/pets");
// Importa as rotas do módulo de users
const usersRoutes = require("./src/routes/users");
// Importa as rotas do módulo de pontuação
const adoptionsRoutes = require("./src/routes/adoptions");
// Middleware do Express para permitir o uso de JSON no corpo das requisições (body-parser embutido)
app.use(express.json());
// Usa as rotas de pets com o prefixo /pets
// Exemplo: GET /pets, POST /pets
app.use("/pets", petsRoutes);
// Usa as rotas de users com o prefixo /users
// Exemplo: GET /users, POST /users
app.use("/users", usersRoutes);
// Usa as rotas de pontuação com o prefixo /adoptions
// Exemplo: GET /adoptions, POST /adoptions
app.use("/adoptions", adoptionsRoutes);
// Inicia o servidor e o faz executar na porta 3000
// Quando estiver rodando, exibe uma mensagem no terminal
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});