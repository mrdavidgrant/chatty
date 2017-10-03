import React, {Component} from 'react';

class Chatbar extends Component {
  render() {
    console.log("Rendering <ChatBar/>")
    return (
      <div className="chatbar">
      <input className="chatbar-username" placeholder={this.props.name} />
      <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
    </div>
    );
  }
}
export default Chatbar;