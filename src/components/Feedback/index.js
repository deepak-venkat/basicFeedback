import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {currCard: 'card1'}

  onClickEmoji = () => {
    this.setState({currCard: 'card2'})
  }

  render() {
    const {currCard} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return currCard === 'card1' ? (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="list">
            {emojis.map(eachObj => {
              const {imageUrl, name, id} = eachObj
              return (
                <li className="list-item" key={id}>
                  <img
                    src={imageUrl}
                    alt="name"
                    className="img"
                    onClick={this.onClickEmoji}
                  />
                  <p className="name">{name}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    ) : (
      <div className="bg-container">
        <div className="card">
          <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
          <h1 className="heading">Thank You!</h1>
          <p className="name">
            We will use your feedback to improve our customer support
            performance
          </p>
        </div>
      </div>
    )
  }
}

export default Feedback
