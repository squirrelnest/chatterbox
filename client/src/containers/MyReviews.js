import React, {Component} from 'react';
import { fetchReviews } from '../actions/reviewActions';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import { ReviewItem } from '../components/ReviewItem';
import { connect } from 'react-redux';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
    tableLayout: 'auto'
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

function latest_updated(current, next) {
  if (current.updatedAt > next.updatedAt) {
    return -1;
  } else if (current.updatedAt < next.updatedAt) {
    return 1;
  } else {
    return 0;
  }
}

export class MyReviews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fixedHeader: true,
      fixedFooter: false,
      stripedRows: false,
      showRowHover: true,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: 'window.innerHeight*0.75',
      chats: [],
      message: 'yo'
    };
  }

  componentDidMount() {
    this.props.fetchReviews()
  }

  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.nickname]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };

  render() {

    const tableData = this.props.reviews.sort(latest_updated).map( (review) =>
      <ReviewItem
        store={this.props.store}
        key={review.id}
        review_id={review.id}
        nickname={review.location.nickname}
        content={review.content}
        stability={review.stability}
        aesthetics={review.aesthetics}
        safety={review.safety}
      />
    )

    return (

        <Table
          styles={styles}
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="7" tooltip="My Reviews" style={{textAlign: 'center'}}>
                My Reviews
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="id">review_id</TableHeaderColumn>
              <TableHeaderColumn tooltip="nickname of anchorage">location</TableHeaderColumn>
              <TableHeaderColumn tooltip="user feedback">content</TableHeaderColumn>
              <TableHeaderColumn tooltip="water surface stability - a function of exposure to wind and swell">comfort</TableHeaderColumn>
              <TableHeaderColumn tooltip="subjective beauty">aesthetics</TableHeaderColumn>
              <TableHeaderColumn tooltip="safety from crime">safety</TableHeaderColumn>
              <TableHeaderColumn tooltip="delete or edit a review"></TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >

          {tableData}

          </TableBody>
        </Table>
    )
  }
}

function mapStateToProps(state) {
  return {
    locations: state.locations.locations,
    reviews: state.reviews.reviews,
  }
}

const mapDispatchToProps = (dispatch) => {
  return { fetchReviews: () => dispatch(fetchReviews()) }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyReviews);
