export const createOrder = data =>
  fetch('/order', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())

export const getOrders = () => 
  fetch('/orders')
    .then(res => res.json())

export const deleteOrder = id => 
  fetch(`/order/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())