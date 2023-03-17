import { Component } from 'react';

import './App.scss';
import Counters from './components/CounterBatching.jsx';
import PokemonList from './components/PokemonList';

export default class App extends Component {

  state = {
    name: 'John'
  }

  handleClick = () => {
    this.setState((state) => ({ name: state.name + state.name}))
  }

  render(){
    return(
      <div className="App">
        <PokemonList />
      </div>
    );
  }
}

