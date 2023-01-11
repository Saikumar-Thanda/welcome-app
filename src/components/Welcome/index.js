import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onClickSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="greeting">Thank you! Happy Learning</p>
        <button
          className="button"
          type="button"
          onClick={this.onClickSubscribe}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
