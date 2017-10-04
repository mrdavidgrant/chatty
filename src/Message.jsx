import React, {Component} from 'react';

class Message extends Component {
  

  render() {
    const regex = new RegExp(/\w+\S+(\.png|\.jpg|\.gif)\b/)
    switch(this.props.message.type) {
      case 'incomingMessage':
      console.log(regex.exec(this.props.message.content))
      if(regex.exec(this.props.message.content)) {
        var image = regex.exec(this.props.message.content)
        var content = (this.props.message.content).replace(image[0], '')
        return (
          <div className="message" name={this.props.message.uuid}>
            <span className="message-username" style={{color: this.props.message.color}}>{this.props.message.username}</span>
            <span className="message-content">{content}</span>
            <div className='message-image-div'>
              <img src={image[0]} className='message-image' />
            </div>
          </div>
        )
        break
      } else {
        return (
          <div className="message" name={this.props.message.uuid}>
          <span className="message-username" style={{color: this.props.message.color}}>{this.props.message.username}</span>
          <span className="message-content">{this.props.message.content}</span>
        </div>
        )
        break
      }
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
