import { Component } from "react";

export default class Counters extends Component {
  state = {
    counter1: 0,
    counter2: 0,
    counter3: 0,
  }
  handleClick = () => {
    this.setState((state) => {
      return {
        counter1: state.counter1 + 1,
        counter2: state.counter2 + 1,
        counter3: state.counter3 + 1
      }
    })
   }
  componentDidUpdate(){
    console.log('updated')
  }
  render() {
    return (
      <div>
        <div>Counter1: {this.state.counter1}</div>
        <div>Counter2: {this.state.counter2}</div>
        <div>Counter3: {this.state.counter3}</div>
        <button onClick={this.handleClick}> Click Me!</button>
      </div>
    );
   }
}
