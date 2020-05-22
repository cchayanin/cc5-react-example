import React from 'react'

class CardMovie extends React.Component {
  render() {
    const { pic, title, content } = this.props
    let cardMovieStyle = {
      card: { width: '300px', backgroundColor: 'gray' },
      picture: { width: '100%', height: '200px', backgroundColor: 'wheat' },
    }

    return (
      <div className="card" style={cardMovieStyle.card}>
        <div className="pic">
          <img src={pic} alt="" style={cardMovieStyle.picture} />
        </div>
        <div className="content_container">
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="content">{content}</div>
        </div>
      </div>
    )
  }
}

export default CardMovie
