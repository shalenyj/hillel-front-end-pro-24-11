const weight = fetch(`https://pokeapi.co/api/v2/pokemon/ditto`, {
  method: 'GET'
})
  .then(res => res.json())
  .then(res => res.weight)

console.log(1, weight)
console.log(2, 'End')

// TODO: When can use await


// TODO: es5 async

// const getWeight = async() => {
//   const weight = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`, {
//     method: 'GET'
//   })
//     .then(res => res.json())
//     .then(res => res.weight)
//   console.log(1, weight)
//   console.log(2, 'End')
// }

//TODO: no await
// const getWeight = async() => {
//   const weight = fetch(`https://pokeapi.co/api/v2/pokemon/ditto`, {
//     method: 'GET'
//   })
//     .then(res => res.json())
//     .then(res => res.weight)
//   console.log(1, weight)
//   console.log(2, 'End')
// }
