const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
require('dotenv').config();

const { getOrders, insertOrder, removeOrder } = require('./db/actions');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log(`Listen at ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Get orders
app.get('/orders', async(req, res) => {
  const orders = await  getOrders()
  res.status(200).json(orders)
})

// Add order
app.post('/order', async(req, res) => {
  const { name, quantity, deliverTo }= req.body;
  await insertOrder({ name, quantity, deliverTo })
  res.status(200).json({ status: true })
});

// Delete order
app.delete('/order/:id', async(req, res) => {
  const { id } = req.params;
  await removeOrder(id);
  res.status(200).json({ status: true })
});

app.use(
  '/api-docs',
  swaggerUi.serve, 
  swaggerUi.setup(swaggerDocument)
);