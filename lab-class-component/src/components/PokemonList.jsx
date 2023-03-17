import { Component } from "react";
import axios from 'axios';

import Pokemon from "./Pokemon";

export default class PokemonList extends Component{
  state = {
    pokemons: []
  }

  componentDidMount(){
    this.getPokemon()
  }

  getPokemon = async() => {
    const { data: {results} } = await axios('https://pokeapi.co/api/v2/pokemon', {
      params: {
        limit: 20,
        offset: 0
      }
    })
    this.setState({ pokemons: results } );
  }

  render(){
    return (
      <div className="pokemon-list">
        { this.state.pokemons.map(pokemon => <Pokemon key={pokemon.url} name={pokemon.name}/>) }
      </div>
    )
  }
}