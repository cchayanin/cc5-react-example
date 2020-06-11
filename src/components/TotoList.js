import React, { Component } from 'react'
import next from './asset/arrow.png'

export default class TotoList extends Component {
  state = {
    todo: [],
    complete: [],
    text: '',
  }
  addTodo = () => {
    if (this.state.text.trim() !== '') {
      this.setState({ todo: [...this.state.todo, this.state.text], text: '' })
    }
    this.setState({ text: '' })
  }
  edit = (index) => {
    let list = [...this.state.todo]
    let editText = prompt('Edit your text')

    if (
      editText === null ||
      editText === undefined ||
      editText === false ||
      editText.trim() === ''
    ) {
      return null
    } else {
      list.splice(index, 1, editText)
    }
    this.setState({ todo: list })
  }
  move = (index) => {
    let list = [...this.state.todo]
    this.setState({
      complete: [...this.state.complete, list.splice(index, 1)],
      todo: list,
    })
  }
  reverse = (index) => {
    let list = [...this.state.complete]
    this.setState({
      todo: [...this.state.todo, list.splice(index, 1)],
      complete: list,
    })
  }
  delete = (index) => {
    let list = [...this.state.complete]
    list.splice(index, 1)
    this.setState({ complete: list })
  }
  render() {
    const todoStyle = {
      container: {
        margin: '50px auto',
        display: 'grid',
        gridTemplateColumns: '50% 50%',
        width: '600px',
        justifyContent: 'center',
        columnGap: '10px',
        height: '400px',
      },
      columnItem: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'whitesmoke',
      },
      columnComplete: {
        backgroundColor: 'wheat',
        height: '100%',
        width: '100%',
      },
      title: {
        width: '100%',
        fontSize: '24px',
        backgroundColor: 'gray',
      },
      todoItem: {
        height: '100%',
        textAlign: 'left',
        marginLeft: '10px',
      },
      imageNext: { width: '20px', position: 'relative', top: '5px' },
      deleteButton: {
        color: 'red',
        fontWeight: 'bolder',
        border: 'transparent',
        backgroundColor: 'transparent',
      },
    }
    return (
      <div style={todoStyle.container}>
        <div style={todoStyle.columnItem}>
          <div style={todoStyle.title}>Todo</div>
          <div style={todoStyle.todoItem}>
            {this.state.todo.map((item, index) => (
              <div>
                <span
                  onClick={() => {
                    this.edit(index)
                  }}
                >
                  {item}
                </span>
                <img
                  alt=""
                  src={next}
                  style={todoStyle.imageNext}
                  onClick={() => {
                    this.move(index)
                  }}
                />
              </div>
            ))}
          </div>
          <div>
            <input
              type="text"
              value={this.state.text}
              onChange={(event) => {
                this.setState({ text: event.target.value })
              }}
            />
            <button onClick={this.addTodo}>add</button>
          </div>
        </div>
        <div style={todoStyle.columnComplete}>
          <div style={todoStyle.title}> complete </div>
          <div style={todoStyle.todoItem}>
            {this.state.complete.map((item, index) => (
              <div>
                <span
                  onClick={() => {
                    this.reverse(index)
                  }}
                >
                  {item}
                </span>
                <input
                  style={todoStyle.deleteButton}
                  type="button"
                  value="X"
                  onClick={() => {
                    this.delete(index)
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
