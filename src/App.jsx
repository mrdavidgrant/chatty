import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx'

class Navbar extends Component {
  render() {
    console.log("Rendering <App/>");
    return (
    <div>
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
    </nav>
    <Message />
    <MessageList />
    <ChatBar />
    </div>
    );
  }
}
export default Navbar;
