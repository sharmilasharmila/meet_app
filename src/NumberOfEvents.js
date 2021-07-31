import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    eventValue: 10,
  };

  handleEventInputChanged = (event) => {
    const value = event.target.value;
    if (value < 1){
      return this.setState({
        eventValue: '',
        errorText: "The value cannot be Zero or Negative"
      });
    } else if (value > 32){
      return this.setState({
        eventValue: '',
        errorText: "Enter a value less than 32"
      });
    } else {
      this.setState({
        eventValue: value,
        errorText:''
    });
  }
  };

  render() {
    return (
      <div className='count'>
        <label htmlFor='numberOfEvent'>
          Number of Events
        </label>
        <input
          type='number'
          name='numberOfEvent'
          className='countin'
          placeholder='Enter Number of Events'
          value={this.state.eventValue}
          onChange={this.handleEventInputChanged}
        />
        <ErrorAlert text={this.state.errorText} />
      </div>
    );
  }
}

export default NumberOfEvents;
