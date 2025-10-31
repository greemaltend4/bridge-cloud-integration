const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Bridge Cloud Integration Service!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});