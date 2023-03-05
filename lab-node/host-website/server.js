import express from 'express';
import path from 'path';

const app = express();

app.use(express.static('public'));

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Listen at ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
