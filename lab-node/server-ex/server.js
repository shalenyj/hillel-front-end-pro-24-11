import express from 'express';

import { getOrders } from './orders.js';

const app = express();

// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

const PORT = 4444;


app.listen(PORT, () => {
  console.log(`Listen at ${PORT}`);
});

//TODO: show cors

// Get orders
app.get('/orders', (req, res) => {
  const orders = getOrders();
  res.status(200).json(orders);
});

//TODO: Add endpoint to create order
//TODO: Add endpoint to delete order
