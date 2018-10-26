import React, { Component } from 'react'

export default class ChatItem extends Component {

  formatChat = (text) => {
    let tokenized = text.split(' ')
    return tokenized.map( token => {
      if (token === 'boop') {
        return 'BOOP'
      } else {
        return token
      }
    }).join(' ')
  }

  render() {

    const { chat, idx } = this.props

    return (
      <div style={{ color: idx % 2 === 0 ? 'orange' : 'purple' }}>
        {this.formatChat(chat)}
      </div>
    )
  }

}
