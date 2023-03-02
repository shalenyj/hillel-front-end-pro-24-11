'use-strict';

const getTodo = id => axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);

(async() => {
  const response = await getTodo(5)
    
  console.log(response)
})()
