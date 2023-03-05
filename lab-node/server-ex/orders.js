// Імітуємо роботу з базо даних
const orders = [];

export const getOrders = () => orders

export const addOrder = order => {
  orders.push(order)
  return order;
}

export const deleteOrder = id => {
  const target = orders.findIndex(order => order.id === id);
  if(target !== -1){
    orders.splice(target, 1)
  }
  return orders
}