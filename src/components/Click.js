import React, { Component } from 'react'

export default class Click extends Component {
  state = {
    value: 0,
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="number">{this.state.value}</div>
          <div className="buttonContainer">
            <button
              onClick={() => this.setState({ value: this.state.value + 1 })}
            >
              +
            </button>
            <button onClick={() => this.setState({ value: 0 })}> reset </button>
            <button
              onClick={() => this.setState({ value: this.state.value - 1 })}
            >
              -
            </button>
          </div>
        </div>
      </div>
    )
  }
}
