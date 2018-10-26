import React, {Component} from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import DeleteBtn from './DeleteBtn';
import EditBtn from './EditBtn';

export class ShowReview extends Component {

  render() {

    return (

        <TableRow
          hoverable={true}
          key={this.props.key}
          hover={true}
          onMouseOver={this.props.handleMouseOver}
          onMouseOut={this.props.handleMouseOut}
        >

          <TableRowColumn>{this.props.review_id}</TableRowColumn>
          <TableRowColumn>{this.props.nickname}</TableRowColumn>
          <TableRowColumn>{this.props.content}</TableRowColumn>
          <TableRowColumn>{this.props.stability}</TableRowColumn>
          <TableRowColumn>{this.props.aesthetics}</TableRowColumn>
          <TableRowColumn>{this.props.safety}</TableRowColumn>

          <TableRowColumn>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <DeleteBtn
                review_id={this.props.review_id}
                handleClick={this.props.handleDelete}
                visibility={this.props.visibility}
              />
              <EditBtn
                review_id={this.props.review_id}
                handleClick={this.props.handleEdit}
                visibility={this.props.visibility}
              />
            </div>
          </TableRowColumn>

        </TableRow>

    );
  }
}
