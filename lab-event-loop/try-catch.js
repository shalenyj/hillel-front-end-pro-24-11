const a = 5;
try{
  console.log(a.toUpperCase())
} catch(error){
  console.warn('Here', error)
}

const getPost = async() => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/111')
    .then(res => res.json())
  console.log(result)
}

getPost()