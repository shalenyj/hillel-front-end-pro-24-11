document.getElementById('get').addEventListener('click', async() => {
   axios.get('/get-cookie')
})

document.getElementById('send').addEventListener('click', async() => {
  axios.get('/get-order')
})