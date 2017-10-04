import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx'
import NavBar from './NavBar.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {name: "Anonymous"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    }
  }


  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001')
    this.socket.onopen = (e) => {
      console.log('connected to websocket')
    }
    this.socket.onmessage = (e) => {
      const messages = this.state.messages.concat(JSON.parse(event.data))
      this.setState({messages: messages})
    }
  }

  sendMessage(msg) {
    this.socket.send(JSON.stringify(msg))
  }

  changeUser(e) {
    if(e.key == "Enter"){
      const newUser = e.target.value
      const newMessage = { type: 'postNotification', content: `${this.state.currentUser.name} has changed their name to ${newUser}`}
      this.sendMessage(newMessage)
      this.setState({currentUser: {name: newUser}})
    }
  }

  handleChange(e) {
    if(e.key == "Enter"){
      e.preventDefault
      const newMessage ={ type: 'postMessage', username: this.state.currentUser.name, content: e.target.value }
      this.sendMessage(newMessage)
      e.target.value = ''
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
