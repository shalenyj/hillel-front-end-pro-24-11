const getOrders = fetch('http://localhost:4444/orders')
  .then(res => res.json())

(async() => {
  const orders = await getOrders
  console.log(orders)
})()
