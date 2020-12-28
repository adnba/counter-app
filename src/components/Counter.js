import React, { Component } from "react"

class Counter extends Component {
  state = {
    counter: 0,
    a: 1,
    b: 2
  }

  increment = () => {
    console.log("i am inside increment")
    this.setState({
      counter: this.state.counter + 1
    })
    console.log("counter:", this.state.counter)
  }

  render() {
    console.log(this.hello)
    console.log("i am in render")
    console.log("state:", this.state)
    return (
      <>
        <div>{this.state.counter}</div>
        <button onClick={this.increment}>increment</button>
      </>
    )
  }
}

export default Counter
