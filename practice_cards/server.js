const express = require('express');
const path = require('path');
const tickets = require('./tickets');
require('dotenv').config();

const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listen at ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/tickets', (req, res) => {
  res.status(200).json({ lessonsCount: tickets.length });
});

app.get('/tickets/:id', (req, res) => {
  const id = req.params.id - 1;
  if(tickets[id]){
    res.status(200).json({ tickets: tickets[id] });
  }
  res.status(404).json({tickets: []});
});
