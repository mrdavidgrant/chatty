import React, {Component} from 'react';

class Chatbar extends Component {
  render() {
    console.log("Rendering <ChatBar/>")
    return (
      <div className="chatbar">
          <input className="chatbar-username" defaultValue={this.props.name} onBlur={this.props.changeUser}/>
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyDown={this.props.handleKeyDown}/>
      </div>
    );
  }
}
export default Chatbar;