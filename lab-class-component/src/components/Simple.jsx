import { Component } from "react";


export default class Simple extends Component {
  state = {
    result: [],
    users: []
  }

  async componentDidMount(){
    console.log(1)
    const [result, users] = await Promise.all([fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json()), fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())])
      
    this.setState({ result, users })
  }

  componentDidUpdate(prevProps,prevState){
    console.log(`old prop`, prevState.users)
    console.log(`new prop ${this.state.users}`)

  }

  componentWillUnmount(){
    console.log('bye')
  }
 
  render(){
    if(!this.state.result.length){
      return null
    }
    const list = this.state.result.map(item => <div key={item.id}>{item.title}</div>)

    return (
      <div>
        {list}
      </div>
    )
  }
}
