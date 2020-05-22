import React, { Component } from 'react'

export default class Chat extends Component {
  state = {
    list: [],
    text: '',
  }
  add = () => {
    let list = [...this.state.list, this.state.text]
    this.setState({ list: list })
    this.setState({ text: '' })
  }
  clear = () => {
    this.setState({ text: '' })
  }
  render() {
    const chatStyle = {
      container: {
        margin: ' 40px auto',
        height: '300px',
        width: '600px',
        backgroundColor: 'whitesmoke',
      },
      messageDialog: {
        height: '270px',
      },
      textStyle: {
        marginLeft: '10px',
        textAlign: 'left',
      },
    }
    return (
      <div style={chatStyle.container}>
        <div style={chatStyle.messageDialog}>
          <div style={chatStyle.ulStyle}>
            {this.state.list.map((text) => (
              <div style={chatStyle.textStyle}>{text}</div>
            ))}
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="message"
            value={this.state.text}
            onChange={(event) => {
              this.setState({ text: event.target.value })
            }}
          />
          <button
            onClick={this.state.text.trim().length > 0 ? this.add : this.clear}
          >
            send
          </button>
        </div>
      </div>
    )
  }
}
