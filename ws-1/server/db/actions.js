const { ObjectId } = require('mongodb');
const client = require('./index');

const ORDER_COLLECTION = process.env.DB_ORDER_COLLECTION

const connectCollection = collection => {
  const database = client.db(process.env.DB_NAME);
  return database.collection(collection);
};

const getOrders = () => {
  const collection = connectCollection(ORDER_COLLECTION);
  return collection.find().toArray()
}

const insertOrder = order => {
  const collection = connectCollection(ORDER_COLLECTION);
  return collection.insertOne(order)
}

const removeOrder = id => {
  const collection = connectCollection(ORDER_COLLECTION);
  return collection.deleteOne({_id: new ObjectId(id) })
}

module.exports = {
  getOrders,
  insertOrder,
  removeOrder
};