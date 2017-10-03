import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx'
import NavBar from './NavBar.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
  }

  render() {
    console.log("Rendering <App/>");
    return (
    <div>
      <NavBar />  
      <MessageList />
      <ChatBar name = {this.state.currentUser.name} />
    </div>
    );
  }
}
export default App;
