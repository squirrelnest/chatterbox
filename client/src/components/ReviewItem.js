import React, {Component} from 'react';
import { deleteReview, updateReview } from '../actions/reviewActions';
import { EditReviewForm } from '../components/EditReviewForm';
import { ShowReview } from '../components/ShowReview';

export class ReviewItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibility: 'hidden',
      editing: false,
    };
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.nickname]: toggled,
    });
  };

  handleMouseOver = (event, name) => {
    this.setState({ visibility: 'visible' });
  }

  handleMouseOut = () => {
    this.setState({ visibility: 'hidden' })
  }

  handleDelete = (event) => {
    event.preventDefault();
    this.props.store.dispatch(deleteReview(this.props.review_id));
  }

  handleEdit = (event) => {
    event.preventDefault();
    this.setState({
      editing: true
    });
  }

  handleSubmit = (event, reviewData) => {
    event.preventDefault();
    this.props.store.dispatch(updateReview({ ...reviewData, review_id: this.props.review_id }));
    this.setState({ editing: false });
  }

  handleCancel = (event) => {
    event.preventDefault();
    this.setState({ editing: false });
  }

  render() {

    let row = null;
    if ( this.state.editing === true ) {
      row = <EditReviewForm
        handleMouseOver={this.handleMouseOver}
        handleMouseOut={this.handleMouseOut}
        review_id={this.props.review_id}
        nickname={this.props.nickname}
        content={this.props.content}
        stability={this.props.stability}
        aesthetics={this.props.aesthetics}
        safety={this.props.safety}
        visibility={this.state.visibility}
        handleSubmit={this.handleSubmit}
        handleCancel={this.handleCancel}
      />
    } else {
      row = <ShowReview
        handleMouseOver={this.handleMouseOver}
        handleMouseOut={this.handleMouseOut}
        review_id={this.props.review_id}
        nickname={this.props.nickname}
        content={this.props.content}
        stability={this.props.stability}
        aesthetics={this.props.aesthetics}
        safety={this.props.safety}
        visibility={this.state.visibility}
        handleEdit={this.handleEdit}
        handleDelete={(event) => this.handleDelete(event)}
      />
    }

/* don't need () after return since we don't need to evaluate return(row) with row as an argument. Just return row. */

    return row;

  }
}
