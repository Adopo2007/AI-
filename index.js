const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Coucou nyan~! Je suis ton IA kawaii en ligne! 💖🤖');
});

app.listen(port, () => {
  console.log(`Le bot kawaii écoute sur le port ${port}! ✨`);
});