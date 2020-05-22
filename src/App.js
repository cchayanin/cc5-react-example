import React from 'react'
import './App.css'
import Click from './components/Click'
import CardMovie from './components/CardMovie'
import Chat from './components/Chat'
import TodoList from './components/TotoList'

class App extends React.Component {
  state = {
    card: [
      {
        pic:
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e1591a86918615.5da813c5541c8.jpg',
        title: 'card 1',
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam blanditiis nihil odit reprehenderit pariatur, libero ullam modi soluta? Libero, quas!',
      },
      {
        pic:
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e1591a86918615.5da813c5541c8.jpg',
        title: 'card 2',
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam blanditiis nihil odit reprehenderit pariatur, libero ullam modi soluta? Libero, quas!',
      },
      {
        pic:
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e1591a86918615.5da813c5541c8.jpg',
        title: 'card 3',
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam blanditiis nihil odit reprehenderit pariatur, libero ullam modi soluta? Libero, quas!',
      },
      {
        pic:
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e1591a86918615.5da813c5541c8.jpg',
        title: 'card 4',
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam blanditiis nihil odit reprehenderit pariatur, libero ullam modi soluta? Libero, quas!',
      },
      {
        pic:
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e1591a86918615.5da813c5541c8.jpg',
        title: 'card 5',
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam blanditiis nihil odit reprehenderit pariatur, libero ullam modi soluta? Libero, quas!',
      },
      {
        pic:
          'https://mir-s3-cdn-cf.behance.net/project_modules/fs/e1591a86918615.5da813c5541c8.jpg',
        title: 'card 6',
        content:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam blanditiis nihil odit reprehenderit pariatur, libero ullam modi soluta? Libero, quas!',
      },
    ],
  }
  render() {
    const card = this.state.card
    return (
      <div className="App">
        <TodoList />
        <Click />
        <div className="card-container">
          {card.map((card) => (
            <CardMovie
              key={card.title}
              pic={card.pic}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
        <div className="chat-container">
          <Chat />
        </div>
      </div>
    )
  }
}

export default App
