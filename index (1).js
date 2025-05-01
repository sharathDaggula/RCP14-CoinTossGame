// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {isHeads: true, totalCount: 0, headsCount: 0, tailsCount: 0}

  tossCoin = () => {
    const randomValue = Math.floor(Math.random() * 2)
    if (randomValue === 0) {
      this.setState(prevState => ({
        isHeads: true,
        totalCount: prevState.totalCount + 1,
        headsCount: prevState.headsCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHeads: false,
        totalCount: prevState.totalCount + 1,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {totalCount, headsCount, tailsCount, isHeads} = this.state
    const imageUrl = isHeads
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="coin-image" />
          <button type="button" className="button" onClick={this.tossCoin}>
            Toss Coin
          </button>
          <div className="unordered-list">
            <p className="list-item">Total: {totalCount}</p>
            <p className="list-item">Heads: {headsCount}</p>
            <p className="list-item">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
