const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

const bookController = require('./controller/book');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to BookVerse API📔');
});

app.use('/book', bookController);

app.listen(PORT, () => {
  console.log(`BookVerse API running in port ${PORT}`);
});
