const BASE_URL = 'https://pokeapi.co/api/v2';
const container = document.getElementById('container');

const getImg = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

fetch(`${BASE_URL}/pokemon`, {
  method: 'GET'
})
  .then(res => res.json())
  .then(res => buildPokemons(res.results));

const buildPokemons = pokemons => {
  pokemons.forEach((pokemon, index) => {
    const pokemonElement = document.createElement('div');
    pokemonElement.innerHTML = `<p>${pokemon.name}</p><img src="${getImg(index + 1)}">`;
    container.append(pokemonElement);
  });
};

