import React, {Component} from 'react';
import { TableRow, TableRowColumn } from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const styles={
  width: '100%',
}

export class EditReviewForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
      stability: this.props.stability,
      aesthetics: this.props.aesthetics,
      safety: this.props.safety,
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

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
          <TableRowColumn><p style={{ width: '80px', overflow: 'hidden', textOverflow: 'ellipsis'}}>{this.props.nickname}</p></TableRowColumn>
          <TableRowColumn><TextField name="content" onChange={(event) => this.handleChange(event)} value={this.state.content} floatingLabelText='content' multiLine={true} textareaStyle={{ marginBottom: '0px' }} /></TableRowColumn>
          <TableRowColumn><TextField name="stability" onChange={(event) => this.handleChange(event)} value={this.state.stability} floatingLabelText='stability' multiLine={true} textareaStyle={{ marginBottom: '0px' }}/></TableRowColumn>
          <TableRowColumn><TextField name="aesthetics" onChange={(event) => this.handleChange(event)} value={this.state.aesthetics} floatingLabelText='aesthetics' multiLine={true} textareaStyle={{ marginBottom: '0px' }}/></TableRowColumn>
          <TableRowColumn><TextField name="safety" onChange={(event) => this.handleChange(event)} value={this.state.safety} floatingLabelText='safety' multiLine={true} textareaStyle={{ marginBottom: '0px' }}/></TableRowColumn>
          <TableRowColumn>
            <RaisedButton
              className="submitBtn"
              label="Submit"
              type="submit"
              secondary={true}
              fullWidth={false}
              style={styles.button}
              onClick={(event) => this.props.handleSubmit(event, this.state)}
            />
            <FlatButton
              className="cancelBtn"
              label="Cancel"
              type="cancel"
              secondary={true}
              fullWidth={false}
              style={styles.button}
              onClick={(event) => this.props.handleCancel(event)}
            />
          </TableRowColumn>
        </TableRow>

    );
  }
}
