import React, { Component } from 'react';
import Delete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';

export default class DeleteBtn extends Component {

  render() {

    return (

      <IconButton
        style={{ visibility: this.props.visibility }}
        onClick={this.props.handleClick}
      >
        <Delete
          hoverColor={'f44336'}
        />
      </IconButton>

    );
  }
}
