import { Component } from 'react';

import './App.scss';
import ReRender from './components/ReRender';

export default class App extends Component {
  state = {
    counter: 1
  }

  handleCounter = () => {
    this.setState((state) => ({ counter: state.counter + 1}));
  }
  render(){
    return(
      <div className="App">
        Hello
        <ReRender counter={this.state.counter} clickHandler={this.handleCounter}/>
      </div>
    );
  }
}

