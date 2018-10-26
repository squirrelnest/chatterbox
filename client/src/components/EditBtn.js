import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';

export default class EditBtn extends Component {

  render() {

    return (

        <IconButton
          style={{ visibility: this.props.visibility }}
          onClick={this.props.handleClick}
        >
          <ModeEdit hoverColor={'f44336'} />
        </IconButton>


    );
  }
}
