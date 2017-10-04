import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {

  render() {
    const messages = this.props.messages
    const messageItems = messages.map((message) => {
      return (<Message key = {message.uuid} message = {message}/>)}
    )

    console.log("Rendering <MessageList/>")
    return (
      <main className="messages">
        {messageItems}
    </main>
    );
  }
}
export default MessageList;