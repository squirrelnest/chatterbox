import React, { Component } from 'react';
import './css/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';

import Chatterbox from './containers/Chatterbox';
import Note from './containers/Note';
import NavBar from './components/NavBar';
import { connect } from 'react-redux';
import Routes from './routes';


export class App extends Component {

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Router history={history}>
            <div>
              <NavBar />
              <Switch>
                <Route exact path="/note" component={ Note }/>
                <Route exact path="/chat" component={ Chatterbox }/>
              </Switch>
            </div>
          </Router>
        </MuiThemeProvider>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    chats: state.chats
  }
}

const WrapperApp = connect(mapStateToProps)(App);

export default WrapperApp
