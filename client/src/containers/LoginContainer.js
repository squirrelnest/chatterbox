import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';

export default class LoginContainer extends Component {

  handleSubmit = () => {
    console.log('trying to log in')
  }

  render() {

    return (
      <div className="row" style={{ height: (window.innerHeight * 0.9) }}>
        <LoginForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
