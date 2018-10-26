import React, { Component } from 'react';
import ListItemIcon from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';

export default class AddBtn extends Component {

  handleClick = (event) => {
    event.preventDefault();
    console.log("Editing!")
/*    this.props.store.dispatch(updateReview(this.props.review_id)); */
  }

  render() {

    return (

        <AddCircleOutline
          review_id={this.props.review_id}
          visibility={this.props.visibility}
          hoverColor={'f44336'}
          onClick={ (event) => {
            event.preventDefault();
            console.log('add review button clicked')
      /*      this.props.handleClick(this.props.review_id); */
            }
          }
        />

    );
  }
}
