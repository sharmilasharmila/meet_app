import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventValue: 10,
  };

  handleEventInputChanged = (event) => {
    const eventValue = event.target.value;
    this.setState({
      eventValue,
    });
  };

  render() {
    return (
      <div className='count'>
        <label htmlFor='numberOfEvent'></label>
        <input
          type='number'
          name='numberOfEvent'
          className='countin'
          placeholder='Enter Number of Events'
          value={this.state.eventValue}
          onChange={this.handleEventInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;