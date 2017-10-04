import React, {Component} from 'react';

class Message extends Component {
  render() {
    switch(this.props.message.type) {
      case 'incomingMessage':
        return (
          <div className="message" name={this.props.message.uuid}>
          <span className="message-username" style={{color: this.props.message.color}}>{this.props.message.username}</span>
          <span className="message-content">{this.props.message.content}</span>
        </div>
        )
        break
      case 'incomingNotification':
        return (
          <div className="message system">
            {this.props.message.content}
          </div>
        )
        break
      default:
        console.log("unknown message")
        return null
        break
    }
  }
}
export default Message;
