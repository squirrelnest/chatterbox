import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import { withRouter } from 'react-router-dom'
import { logout } from '../actions/authActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Login extends Component {
  static muiName = 'FlatButton';

  handleClick = () => {
    this.props.logout();
  }

  render() {
    return (
      <Link to="/login"><FlatButton {...this.props} label="Login"/></Link>
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="My Reviews" href="/reviews/myreviews" />
    <MenuItem primaryText="Sign out" href="/login" onClick={this.handleClick}/>
  </IconMenu>
);

Logged.muiName = 'IconMenu';

/* Taking advantage of the composability of the `AppBar` to render different components depending on application state. */

class NavBar extends Component {
  state = {
    authenticated: false,
  };

  handleChange = (event, logged) => {
  };

  handleClick = () => {
    this.props.history.push('/');
}

  render() {
    return (

        <AppBar
          title="Yarrble"
          onTitleClick={this.handleClick}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          iconElementRight={this.props.authenticated ? <Logged /> : <Login />}
        />

    );
  }
}

const mapStateToProps = (state) => {

  return {
    errorMessage: state.auth.error,
    authenticated: state.auth.authenticated
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    logout: () => dispatch(logout())
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));
