import React, { Component } from 'react'
import '../css/styles.css'
import ActionCable from 'actioncable'
// import { API_ROOT } from '../api-config'
import { API_WS_ROOT } from '../api-config'

export default class Note extends Component {
  state = { text: '' }

  componentDidMount() {
      // window.fetch('/note').then(data => {
    window.fetch('/notes/1').then(data => {
      data.json().then(res => {
        this.setState({ text: res.text })
      })
    })

    const cable = ActionCable.createConsumer(API_WS_ROOT)
    console.log('My API_WS_ROOT IS ' + API_WS_ROOT)
    // const cable = ActionCable.createConsumer('ws://localhost:3001/cable')
    this.sub = cable.subscriptions.create('NotesChannel', {
      received: this.handleReceiveNewText
    })
  }

  handleReceiveNewText = ({ text }) => {
    if (text !== this.state.text) {
      this.setState({ text })
    }
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
    this.sub.send({ text: e.target.value, id: 1 })
  }

  render() {
    return (
      <textarea
        className='note'
        value={this.state.text}
        onChange={this.handleChange}
      />
    )
  }
}
