import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    console.log("Rendering <NavBar/>");
    return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <div className="connection-list">
        <span id='connection-count'>{this.props.clientCount}</span> clients connected.
      </div>
    </nav>
    );
  }
}
export default NavBar;