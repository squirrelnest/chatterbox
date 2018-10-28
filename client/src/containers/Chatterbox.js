import React, {Component} from 'react'
import {
  getChats,
  addChat,
  postChat,
  changeMessage,
  clearHistory,
  deleteHistory
} from '../actions/chatActions'
import ChatItem from '../components/ChatItem'
import { connect } from 'react-redux'
import ActionCable from 'actioncable'

function by_id(current, next) {
  if (current.id > next.id) {
    return -1;
  } else if (current.id < next.id) {
    return 1;
  } else {
    return 0;
  }
}

export class Chatterbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      message: 'yo message'
    }
  }

  componentDidMount() {
    this.props.getChats()

    window.fetch('http://localhost:3001/chat').then(data => {
      data.json().then(res => {
        this.setState({ chats: res })
      })
    })

    const cable = ActionCable.createConsumer('ws://localhost:3001/cable')
    this.sub = cable.subscriptions.create('ChatsChannel', {
      received: this.submit
    })


    // var socket = new WebSocket('ws://localhost:3000/cable')
    //
    // socket.onopen = (event) => {
    //   this.props.postChat('Connected to' + event.currentTarget.url)
    // }
    //
    // socket.onerror = (error) => {
    //   alert("WebSocket Error:" + error)
    // }
    //
    // socket.onmessage = (event) => {
    //   this.props.getChats()
    // }
  }

  componentWillUnmount() {
    // socket.close()
    // socket.onclose = (event) => {
    //   alert("Disconnected from WebSocket")
    // }
  }

  handleChange = (event) => {
    event.stopPropagation()
    event.preventDefault()
    this.setState({
      message: event.target.value
    })
  }

  handleKeypress = (event) => {
    if (event.key === 'Enter') {
      this.submit(event)
    }
  }

  submit = (event) => {
    // event.stopPropagation()
    // event.preventDefault()
    this.props.postChat(this.state.message)
    this.sub.send({ content: this.state.message, id: 1 })
    // this.props.getChats()
    this.reset()
  }

  reset = () => {
    this.setState({
      message: ''
    })
  }

  clear = (event) => {
    event.stopPropagation()
    event.preventDefault()
    this.props.deleteHistory()
  }

  render() {

    const chatList = this.state.chats.sort(by_id).map( (chat, index) => {
      return ( <ChatItem key={chat.id} idx={chat.id} chat={chat.content} /> )
    })

    return (
      <div style={{ padding: '20px' }}>
        <div style={{
          display: 'flex',
          width: '100%',
          padding: '10px',
          justifyContent: 'flex-start',
          alignContent: 'center'
        }}>
          <form>
            <textarea
              name='message'
              type="text"
              value={this.state.message}
              style={{
                border: '1px solid #777',
                height: '40px',
                width: '300px',
                padding: '4px',

              }}
              onChange={this.handleChange}
              onBlur={this.submit}
              onKeyPress={(event) => this.handleKeypress(event)}
            />
          </form>
          <button
            onClick={(event) => this.submit(event)}
            style={{ height: '50px' }}>
            Add Message
          </button>
          <button
            onClick={(event) => this.clear(event)}
            style={{ height: '50px' }}>
            Clear History
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
          {chatList}
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    chats: state.chatterbox.chats,
    message: state.chatterbox.message,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getChats: () => dispatch(getChats()),
    addChat: (chat) => dispatch(addChat(chat)),
    postChat: (chat) => dispatch(postChat(chat)),
    changeMessage: (message) => dispatch(changeMessage(message)),
    clearHistory: () => dispatch(clearHistory()),
    deleteHistory: () => dispatch(deleteHistory())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatterbox)
