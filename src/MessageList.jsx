import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {

  render() {
    const messages = this.props.messages
    const messageItems = messages.map((message) => {
      return (<Message message = {message}/>)}
    )

    console.log("Rendering <MessageList/>")
    return (
      <main className="messages">
        {messageItems}
      <div className="message system">
        Anonymous1 changed their name to nomnom.
      </div>
    </main>
    );
  }
}
export default MessageList;