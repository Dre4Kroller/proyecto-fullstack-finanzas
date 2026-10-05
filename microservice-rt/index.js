const express = require ('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ message: "Microservicio Node.js en tiempo real listo"});
});

app.lister(PORT, () => {
    console.log('Servidor escuchando en el puerto ${PORT}');
});