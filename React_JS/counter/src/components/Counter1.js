import React, { Component } from 'react'

class Counter1 extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    increment = () => {
        this.setState(() =>  ({
            count : this.state.count + 1
        }))
    }
  render() {
    return (
      <div>
        <div>Counter</div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>

    )
  }
}

export default Counter1