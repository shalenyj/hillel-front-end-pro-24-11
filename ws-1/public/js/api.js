export const createOrder = data =>
  fetch('/order', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())