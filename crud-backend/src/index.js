// importar express
const express = require("express");

// iniciar la aplicacion express
const app = express();

//Definir el puierto para el servidor
const PORT = 3000;

// Ruta principal
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
