import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import NavBar from './components/NavBar';
import MyReviews from './containers/MyReviews';
import Home from './containers/Home';
import ShowLocation from './containers/ShowLocation';
import LoginContainer from './containers/LoginContainer';
import RegistrationContainer from './containers/RegistrationContainer';

export default class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path={`/locations/:locationId`} component={ ShowLocation } />
        <Route exact path="/reviews/myreviews" render={() => <MyReviews store={this.props.store} />} />
        <Route exact path="/login" component={ LoginContainer } />
        <Route exact path="/signup" component={ RegistrationContainer } />
      </Switch>
    )
  }
}
