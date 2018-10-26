import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};

export default class Fab extends Component {

  render() {
    return (
      <FloatingActionButton
        style={style}
        className="fab"
        onClick={this.props.handleToggle}
      >
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}
