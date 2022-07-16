import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class BuildSearchFilter extends Component {
  constructor() {
    super()
    this.state = {
      fruits: ['Apple', 'Orange', 'Banana', 'Mango', 'Pineapple', 'Watermelon']
    }
  }

  render() {
    return (
      <div>
        <br /> <br />
        <label>Search:</label> <input onChange />
        <ListGroup>
          {this.state.fruits.map((fruit) => <ListGroup.Item>{fruit}</ListGroup.Item>)}
        </ListGroup>
      </div>
    )
  }
}

export default BuildSearchFilter