import { Component } from "react"

export default class Pokemon extends Component{
  render(){
    return(
      <div className="pokemon-wrapper">{this.props.name}</div>
    )
  }
}