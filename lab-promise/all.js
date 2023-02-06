const pokemons = ['ditto', 'bulbasaur', 'charmander'];

Promise.all(pokemons.map(pokemon => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, {
    method: 'GET'
  })
    .then(res => res.json())
    .then(res => res.weight)
}))
  .then(result => {
    console.log(result)
  })
  .catch(error => {
    console.log(`Error`, error)
  })

//TODO: when one failed