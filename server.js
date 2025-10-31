const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Bridge Cloud Integration Service! Your gateway to seamless integration. API version 1.3');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});