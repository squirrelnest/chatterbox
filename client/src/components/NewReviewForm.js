import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import DatePicker from 'material-ui/DatePicker';

const styles = {
  root: {
    display: 'flex',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    margin: '20px',
  },
  checkboxblock: {
    marginTop: '40px',
  },
  checkbox: {
    marginBottom: 16,
  },
  datepicker: {
    zIndex: '4000',
  }
};

const initialState = {
  stability: 5,
  aesthetics: 5,
  safety: 5,
  date_visited: Date(Date.UTC(96, 1, 2, 3, 4, 5)),
  content: '',
  user_id: 0
};

export default class NewReviewForm extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleFirstSlider = (event, value) => {
    this.setState({stability: value});
  };

  handleSecondSlider = (event, value) => {
    this.setState({aesthetics: value});
  };

  handleThirdSlider = (event, value) => {
    this.setState({safety: value});
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleDateChange = (event, date) => {
    this.setState({
      date_visited: date,
    });
  };

  submitAndReset = (event) => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(initialState);
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        type="submit"
        name="submit"
        onClick={this.submitAndReset}
      />,
    ];

    return (

      <Dialog
        title="Add Review to this Location"
        actions={actions}
        style={{ zIndex: 3000 }}
        modal={true}
        autoScrollBodyContent={true}
        open={this.props.open}
      >

        <div>

          <form onSubmit={(event) => this.submitAndReset(event)}>

            <div style={styles.root}>

              <div className="sliderContainer" name="stability">
              <h5>{'Stability: '}{this.state.stability}</h5>
              <Slider
                name="stability"
                value={this.state.stability}
                onChange={this.handleFirstSlider}
                sliderStyle={{left:'0%', width: '150px'}}
                axis="x"
                defaultValue={5}
                min={0}
                max={10}
                step={1}/>
              </div>

              <div className="sliderContainer" name="aesthetics">
              <h5>{'Aesthetics: '}{this.state.aesthetics}</h5>
              <Slider
                name="aesthetics"
                value={this.state.aesthetics}
                onChange={this.handleSecondSlider}
                sliderStyle={{left:'0%', width: '150px'}}
                axis="x"
                defaultValue={5}
                min={0}
                max={10}
                step={1}/>
              </div>

              <div className="sliderContainer" name="safety">
              <h5>{'Safety: '}{this.state.safety}</h5>
              <Slider
                name="safety"
                value={this.state.safety}
                onChange={this.handleThirdSlider}
                sliderStyle={{left:'0%', width: '150px'}}
                axis="x"
                defaultValue={5}
                min={0}
                max={10}
                step={1}/>
              </div>

            </div>

            <TextField
              name="content"
              value={this.state.content}
              hintText="Write a Review"
              floatingLabelText="Write a Review"
              multiLine={true}
              fullWidth={true}
              rows={2}
              style={{ marginTop: '-50px' }}
              onChange={(event) => this.handleChange(event)}
            />

            <DatePicker
              dialogContainerStyle={styles.datepicker}
              hintText="Date Visited"
              onChange={this.handleDateChange}
            />

          </form>

        </div>

      </Dialog>


    );
  }
}
