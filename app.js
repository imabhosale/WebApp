const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! working on local how i can check this on ip??? ');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App is running on http://localhost:${port}`);
});