const getPost = async() => {
  fetch('https://jsonplaceholder.typicode.com/todos/1110001')
    .then(res => {
      if(res.status !== 200){
        throw new Error('Invalid status code')
      } else {
        return res.json()
      }
    })
    .catch(err => {
      console.log(`Failed due to: `, err)
      return err
    })
}

getPost()