import React, { Component } from 'react';
import RegistrationForm from '../components/RegistrationForm';

export default class RegistrationContainer extends Component {

  handleSubmit = () => {
    console.log('trying to register')
  }

  render() {

    return (
      <div className="row" style={{ height: (window.innerHeight * 0.9) }}>
        <RegistrationForm handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
