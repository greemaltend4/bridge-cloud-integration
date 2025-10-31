const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue dans Bridge Cloud Integration!');
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});