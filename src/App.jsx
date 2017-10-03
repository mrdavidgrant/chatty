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

 componentDidMount() {
  console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }



  changeUser(e) {
    const newUser = e.target.value
    this.setState({currentUser: {name: newUser}})
  }

  handleChange(e) {
    if(e.key == "Enter"){
    e.preventDefault
    const newMessage ={ username: this.state.currentUser.name, content: e.target.value }
    const messages = this.state.messages.concat(newMessage)
    this.setState({messages: messages})

    }
  }

  render() {
    console.log("Rendering <App/>");
    return (
    <div>
      <NavBar />  
      <MessageList messages = {this.state.messages} />
      <ChatBar name = {this.state.currentUser.name} handleChange = {this.handleChange.bind(this)} changeUser = {this.changeUser.bind(this)} />
    </div>
    );
  }
}
export default App;
