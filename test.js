const express = require('express');
const app = express();

app.use(express.json()); // to parse JSON body

// Define a POST route for "/login"
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`You tried to login with ${username}`);
});

app.listen(3000);
