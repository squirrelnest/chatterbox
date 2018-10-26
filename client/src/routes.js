import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import NavBar from './components/NavBar';
import Chatterbox from './containers/Chatterbox';

export default class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Chatterbox } />
      </Switch>
    )
  }
}
