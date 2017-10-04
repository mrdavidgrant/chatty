import React, {Component} from 'react';
import MessageList from './MessageList.jsx';
import ChatBar from './ChatBar.jsx'
import NavBar from './NavBar.jsx'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: {name: "Anonymous"}, 
      userid: '',
      color: '',
      messages: [],
      clientCount: 0
    }
  }


  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001')
    this.socket.onopen = (e) => {
      console.log('connected to websocket')
    }
    this.socket.onmessage = (e) => {
      let newMsg = JSON.parse(event.data)
      console.log(newMsg)
      switch (newMsg.type) {
      case 'incomingUser':
        this.setState({ userid: newMsg.content.userid, color: newMsg.content.color})
        break
      case 'incomingCount':
        this.setState({clientCount: newMsg.content})
        break
      default:
        const messages = this.state.messages.concat(newMsg)
        this.setState({messages: messages})
        break
      }
    }
  }

  sendMessage(msg) {
    this.socket.send(JSON.stringify(msg))
  }

  changeUser(e) {
    // if(e.key == "Enter"){
      const newUser = e.target.value
      const newMessage = { type: 'postNotification', userid: this.state.userid, content: `${this.state.currentUser.name} has changed their name to ${newUser}`}
      this.sendMessage(newMessage)
      this.setState({currentUser: {name: newUser}})
    // }
  }

  handleChange(e) {
    if(e.key == "Enter"){
      e.preventDefault
      const newMessage ={ type: 'postMessage', userid: this.state.userid, username: this.state.currentUser.name, content: e.target.value}
      this.sendMessage(newMessage)
      e.target.value = ''
    }
  }

  changeClientCount(num) {
    this.setState({clientCount: num})
  }

  render() {
    console.log("Rendering <App/>");
    return (
    <div>
      <NavBar clientCount = {this.state.clientCount}/>  
      <MessageList messages = {this.state.messages}  changeClientCount = {this.changeClientCount} />
      <ChatBar name = {this.state.currentUser.name} handleChange = {this.handleChange.bind(this)} changeUser = {this.changeUser.bind(this)}/>
    </div>
    );
  }
}
export default App;
