const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

//Heroku injects env variables, if its not there we fall back to 5000 port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
