import React, {Component} from 'react';

class Message extends Component {
  render() {
    switch(this.props.message.type) {
      case 'incomingMessage':
        return (
          <div className="message" name={this.props.message.uuid}>
          <span className="message-username">{this.props.message.username}</span>
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
    }
  }
}
export default Message;
