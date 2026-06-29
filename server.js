require("dotenv").config();

const express = require("express");
const authRoutes = require("./src/routes/auth");
const publicRoutes = require("./src/routes/public");
const protectedRoutes = require("./src/routes/protected");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/public", publicRoutes);
app.use("/protected", protectedRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});