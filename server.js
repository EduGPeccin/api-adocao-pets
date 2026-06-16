const express = require("express");
const app = express();
const petsRoutes = require("./src/routes/pets");
app.use(express.json());
app.use("/pets", petsRoutes);
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
